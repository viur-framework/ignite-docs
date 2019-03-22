/* start module: widgets.tree */
$pyjs['loaded_modules']['widgets.tree'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['widgets.tree']['__was_initialized__']) return $pyjs['loaded_modules']['widgets.tree'];
	if(typeof $pyjs['loaded_modules']['widgets'] == 'undefined' || !$pyjs['loaded_modules']['widgets']['__was_initialized__']) $p['___import___']('widgets', null);
	var $m = $pyjs['loaded_modules']['widgets.tree'];
	$m['__repr__'] = function() { return '<module: widgets.tree>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'widgets.tree';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['widgets']['tree'] = $pyjs['loaded_modules']['widgets.tree'];
	$m.__track_lines__[1] = 'widgets.tree.py, line 1:\n    import html5';
	$m.__track_lines__[2] = 'widgets.tree.py, line 2:\n    import pyjd # this is dummy in pyjs.';
	$m.__track_lines__[3] = 'widgets.tree.py, line 3:\n    from network import NetworkService';
	$m.__track_lines__[4] = 'widgets.tree.py, line 4:\n    from widgets.actionbar import ActionBar';
	$m.__track_lines__[5] = 'widgets.tree.py, line 5:\n    from widgets.search import Search';
	$m.__track_lines__[6] = 'widgets.tree.py, line 6:\n    from event import EventDispatcher';
	$m.__track_lines__[7] = 'widgets.tree.py, line 7:\n    from priorityqueue import displayDelegateSelector, viewDelegateSelector';
	$m.__track_lines__[8] = 'widgets.tree.py, line 8:\n    import utils';
	$m.__track_lines__[9] = 'widgets.tree.py, line 9:\n    from html5.keycodes import *';
	$m.__track_lines__[10] = 'widgets.tree.py, line 10:\n    from config import conf';
	$m.__track_lines__[12] = 'widgets.tree.py, line 12:\n    class NodeWidget( html5.Div ):';
	$m.__track_lines__[16] = 'widgets.tree.py, line 16:\n    def __init__(self, modul, data, structure, *args, **kwargs ):';
	$m.__track_lines__[25] = 'widgets.tree.py, line 25:\n    super( NodeWidget, self ).__init__( *args, **kwargs )';
	$m.__track_lines__[26] = 'widgets.tree.py, line 26:\n    self.module = modul';
	$m.__track_lines__[27] = 'widgets.tree.py, line 27:\n    self.data = data';
	$m.__track_lines__[28] = 'widgets.tree.py, line 28:\n    self.structure = structure';
	$m.__track_lines__[29] = 'widgets.tree.py, line 29:\n    self.buildDescription()';
	$m.__track_lines__[30] = 'widgets.tree.py, line 30:\n    self["class"] = "treeitem node supports_drag supports_drop"';
	$m.__track_lines__[31] = 'widgets.tree.py, line 31:\n    self["draggable"] = True';
	$m.__track_lines__[32] = 'widgets.tree.py, line 32:\n    self.sinkEvent("onDragOver","onDrop","onDragStart", "onDragLeave")';
	$m.__track_lines__[34] = 'widgets.tree.py, line 34:\n    def buildDescription(self):';
	$m.__track_lines__[38] = 'widgets.tree.py, line 38:\n    hasDescr = False';
	$m.__track_lines__[39] = 'widgets.tree.py, line 39:\n    for boneName, boneInfo in self.structure:';
	$m.__track_lines__[40] = 'widgets.tree.py, line 40:\n    if "params" in boneInfo.keys() and isinstance(boneInfo["params"], dict):';
	$m.__track_lines__[41] = 'widgets.tree.py, line 41:\n    params = boneInfo["params"]';
	$m.__track_lines__[42] = 'widgets.tree.py, line 42:\n    if "frontend_default_visible" in params.keys() and params["frontend_default_visible"]:';
	$m.__track_lines__[44] = 'widgets.tree.py, line 44:\n    structure = {k: v for k, v in self.structure}';
	$m.__track_lines__[45] = 'widgets.tree.py, line 45:\n    wdg = viewDelegateSelector.select(self.module, boneName, structure)';
	$m.__track_lines__[47] = 'widgets.tree.py, line 47:\n    if wdg is not None:';
	$m.__track_lines__[48] = 'widgets.tree.py, line 48:\n    self.appendChild(wdg(self.module, boneName, structure).render(self.data, boneName))';
	$m.__track_lines__[49] = 'widgets.tree.py, line 49:\n    hasDescr = True';
	$m.__track_lines__[50] = 'widgets.tree.py, line 50:\n    if not hasDescr:';
	$m.__track_lines__[51] = 'widgets.tree.py, line 51:\n    self.appendChild( html5.TextNode( self.data["name"]))';
	$m.__track_lines__[53] = 'widgets.tree.py, line 53:\n    def onDragOver(self, event):';
	$m.__track_lines__[57] = 'widgets.tree.py, line 57:\n    if not "insert_here" in self["class"]:';
	$m.__track_lines__[58] = 'widgets.tree.py, line 58:\n    self["class"].append("insert_here")';
	$m.__track_lines__[59] = 'widgets.tree.py, line 59:\n    try:';
	$m.__track_lines__[60] = 'widgets.tree.py, line 60:\n    nodeType, srcKey = event.dataTransfer.getData("Text").split("/")';
	$m.__track_lines__[62] = 'widgets.tree.py, line 62:\n    return( super(NodeWidget,self).onDragOver(event) )';
	$m.__track_lines__[63] = 'widgets.tree.py, line 63:\n    event.preventDefault()';
	$m.__track_lines__[64] = 'widgets.tree.py, line 64:\n    event.stopPropagation()';
	$m.__track_lines__[66] = 'widgets.tree.py, line 66:\n    def onDragLeave(self, event):';
	$m.__track_lines__[67] = 'widgets.tree.py, line 67:\n    if "insert_here" in self["class"]:';
	$m.__track_lines__[68] = 'widgets.tree.py, line 68:\n    self["class"].remove("insert_here")';
	$m.__track_lines__[69] = 'widgets.tree.py, line 69:\n    return( super(NodeWidget, self).onDragLeave(event))';
	$m.__track_lines__[71] = 'widgets.tree.py, line 71:\n    def onDragStart(self, event):';
	$m.__track_lines__[75] = 'widgets.tree.py, line 75:\n    event.dataTransfer.setData( "Text", "node/"+self.data["key"] )';
	$m.__track_lines__[76] = 'widgets.tree.py, line 76:\n    event.stopPropagation()';
	$m.__track_lines__[78] = 'widgets.tree.py, line 78:\n    def onDrop(self, event):';
	$m.__track_lines__[82] = 'widgets.tree.py, line 82:\n    try:';
	$m.__track_lines__[83] = 'widgets.tree.py, line 83:\n    nodeType, srcKey = event.dataTransfer.getData("Text").split("/")';
	$m.__track_lines__[85] = 'widgets.tree.py, line 85:\n    return';
	$m.__track_lines__[86] = 'widgets.tree.py, line 86:\n    NetworkService.request(self.module,"move",{"skelType": nodeType, "key":srcKey, "destNode": self.data["key"]}, modifies=True, secure=True)';
	$m.__track_lines__[87] = 'widgets.tree.py, line 87:\n    event.preventDefault()';
	$m.__track_lines__[88] = 'widgets.tree.py, line 88:\n    event.stopPropagation()';
	$m.__track_lines__[92] = 'widgets.tree.py, line 92:\n    class LeafWidget( html5.Div ):';
	$m.__track_lines__[96] = 'widgets.tree.py, line 96:\n    def __init__(self, modul, data, structure, *args, **kwargs ):';
	$m.__track_lines__[105] = 'widgets.tree.py, line 105:\n    super( LeafWidget, self ).__init__( *args, **kwargs )';
	$m.__track_lines__[106] = 'widgets.tree.py, line 106:\n    self.module = modul';
	$m.__track_lines__[107] = 'widgets.tree.py, line 107:\n    self.data = data';
	$m.__track_lines__[108] = 'widgets.tree.py, line 108:\n    self.structure = structure';
	$m.__track_lines__[109] = 'widgets.tree.py, line 109:\n    self.buildDescription()';
	$m.__track_lines__[110] = 'widgets.tree.py, line 110:\n    self.element.innerHTML = data["name"]';
	$m.__track_lines__[111] = 'widgets.tree.py, line 111:\n    self["class"] = "treeitem leaf supports_drag"';
	$m.__track_lines__[112] = 'widgets.tree.py, line 112:\n    self["draggable"] = True';
	$m.__track_lines__[113] = 'widgets.tree.py, line 113:\n    self.sinkEvent("onDragStart")';
	$m.__track_lines__[115] = 'widgets.tree.py, line 115:\n    def buildDescription(self):';
	$m.__track_lines__[119] = 'widgets.tree.py, line 119:\n    hasDescr = False';
	$m.__track_lines__[120] = 'widgets.tree.py, line 120:\n    for boneName, boneInfo in self.structure:';
	$m.__track_lines__[121] = 'widgets.tree.py, line 121:\n    if "params" in boneInfo.keys() and isinstance(boneInfo["params"], dict):';
	$m.__track_lines__[122] = 'widgets.tree.py, line 122:\n    params = boneInfo["params"]';
	$m.__track_lines__[123] = 'widgets.tree.py, line 123:\n    if "frontend_default_visible" in params.keys() and params["frontend_default_visible"]:';
	$m.__track_lines__[125] = 'widgets.tree.py, line 125:\n    structure = {k: v for k, v in self.structure}';
	$m.__track_lines__[126] = 'widgets.tree.py, line 126:\n    wdg = viewDelegateSelector.select(self.module, boneName, structure)';
	$m.__track_lines__[128] = 'widgets.tree.py, line 128:\n    if wdg is not None:';
	$m.__track_lines__[129] = 'widgets.tree.py, line 129:\n    self.appendChild(wdg(self.module, boneName, structure).render(self.data, boneName))';
	$m.__track_lines__[130] = 'widgets.tree.py, line 130:\n    hasDescr = True';
	$m.__track_lines__[132] = 'widgets.tree.py, line 132:\n    if not hasDescr:';
	$m.__track_lines__[133] = 'widgets.tree.py, line 133:\n    self.appendChild( html5.TextNode( self.data["name"]))';
	$m.__track_lines__[135] = 'widgets.tree.py, line 135:\n    def onDragStart(self, event):';
	$m.__track_lines__[139] = 'widgets.tree.py, line 139:\n    event.dataTransfer.setData( "Text", "leaf/"+self.data["key"] )';
	$m.__track_lines__[140] = 'widgets.tree.py, line 140:\n    event.stopPropagation()';
	$m.__track_lines__[142] = 'widgets.tree.py, line 142:\n    class SelectableDiv( html5.Div ):';
	$m.__track_lines__[151] = 'widgets.tree.py, line 151:\n    def __init__(self, nodeWidget, leafWidget, selectionType="both", multiSelection=False, *args, **kwargs ):';
	$m.__track_lines__[152] = 'widgets.tree.py, line 152:\n    super( SelectableDiv, self ).__init__(*args, **kwargs)';
	$m.__track_lines__[153] = 'widgets.tree.py, line 153:\n    self["class"].append("selectioncontainer")';
	$m.__track_lines__[154] = 'widgets.tree.py, line 154:\n    self["tabindex"] = 1';
	$m.__track_lines__[155] = 'widgets.tree.py, line 155:\n    self.selectionType = selectionType';
	$m.__track_lines__[156] = 'widgets.tree.py, line 156:\n    self.multiSelection = multiSelection';
	$m.__track_lines__[157] = 'widgets.tree.py, line 157:\n    self.nodeWidget = nodeWidget';
	$m.__track_lines__[158] = 'widgets.tree.py, line 158:\n    self.leafWidget = leafWidget';
	$m.__track_lines__[159] = 'widgets.tree.py, line 159:\n    self.selectionChangedEvent = EventDispatcher("selectionChanged")';
	$m.__track_lines__[160] = 'widgets.tree.py, line 160:\n    self.selectionActivatedEvent = EventDispatcher("selectionActivated") # Double-Click on an currently selected item - ITEM CLICKED !!!!';
	$m.__track_lines__[161] = 'widgets.tree.py, line 161:\n    self.selectionReturnEvent = EventDispatcher("selectionReturn") # The current selection should be returned to parent widget';
	$m.__track_lines__[162] = 'widgets.tree.py, line 162:\n    self.cursorMovedEvent = EventDispatcher("cursorMoved")';
	$m.__track_lines__[163] = 'widgets.tree.py, line 163:\n    self._selectedItems = [] # List of row-indexes currently selected';
	$m.__track_lines__[164] = 'widgets.tree.py, line 164:\n    self._currentItem = None # Rowindex of the cursor row';
	$m.__track_lines__[165] = 'widgets.tree.py, line 165:\n    self._isMouseDown = False # Tracks status of the left mouse button';
	$m.__track_lines__[166] = 'widgets.tree.py, line 166:\n    self._isCtlPressed = False # Tracks status of the ctrl key';
	$m.__track_lines__[167] = 'widgets.tree.py, line 167:\n    self._ctlStartRow = None # Stores the row where a multi-selection (using the ctrl key) started';
	$m.__track_lines__[168] = 'widgets.tree.py, line 168:\n    self.sinkEvent( "onClick","onDblClick", "onMouseMove", "onMouseDown", "onMouseUp", "onKeyDown", "onKeyUp" )';
	$m.__track_lines__[170] = 'widgets.tree.py, line 170:\n    def setCurrentItem(self, item):';
	$m.__track_lines__[175] = 'widgets.tree.py, line 175:\n    if self._currentItem:';
	$m.__track_lines__[176] = 'widgets.tree.py, line 176:\n    self._currentItem["class"].remove("cursor")';
	$m.__track_lines__[177] = 'widgets.tree.py, line 177:\n    self._currentItem = item';
	$m.__track_lines__[178] = 'widgets.tree.py, line 178:\n    if item:';
	$m.__track_lines__[179] = 'widgets.tree.py, line 179:\n    item["class"].append("cursor")';
	$m.__track_lines__[181] = 'widgets.tree.py, line 181:\n    def onClick(self, event):';
	$m.__track_lines__[182] = 'widgets.tree.py, line 182:\n    self.focus()';
	$m.__track_lines__[183] = 'widgets.tree.py, line 183:\n    for child in self._children:';
	$m.__track_lines__[184] = 'widgets.tree.py, line 184:\n    if html5.utils.doesEventHitWidgetOrChildren(event, child):';
	$m.__track_lines__[185] = 'widgets.tree.py, line 185:\n    self.setCurrentItem( child )';
	$m.__track_lines__[186] = 'widgets.tree.py, line 186:\n    if self._isCtlPressed:';
	$m.__track_lines__[187] = 'widgets.tree.py, line 187:\n    self.addSelectedItem( child )';
	$m.__track_lines__[188] = 'widgets.tree.py, line 188:\n    if not self._isCtlPressed:';
	$m.__track_lines__[189] = 'widgets.tree.py, line 189:\n    self.clearSelection()';
	$m.__track_lines__[190] = 'widgets.tree.py, line 190:\n    if self._selectedItems:';
	$m.__track_lines__[191] = 'widgets.tree.py, line 191:\n    self.selectionChangedEvent.fire( self, self._selectedItems[:])';
	$m.__track_lines__[193] = 'widgets.tree.py, line 193:\n    self.selectionChangedEvent.fire( self, [self._currentItem])';
	$m.__track_lines__[195] = 'widgets.tree.py, line 195:\n    self.selectionChangedEvent.fire( self, [])';
	$m.__track_lines__[197] = 'widgets.tree.py, line 197:\n    def onDblClick(self, event):';
	$m.__track_lines__[198] = 'widgets.tree.py, line 198:\n    for child in self._children:';
	$m.__track_lines__[199] = 'widgets.tree.py, line 199:\n    if html5.utils.doesEventHitWidgetOrChildren(event, child):';
	$m.__track_lines__[200] = 'widgets.tree.py, line 200:\n    if self.selectionType=="node" and isinstance( child, self.nodeWidget ) or \\';
	$m.__track_lines__[203] = 'widgets.tree.py, line 203:\n    self.selectionActivatedEvent.fire( self, [child] )';
	$m.__track_lines__[205] = 'widgets.tree.py, line 205:\n    def activateCurrentSelection(self):';
	$m.__track_lines__[210] = 'widgets.tree.py, line 210:\n    if len( self._selectedItems )>0:';
	$m.__track_lines__[211] = 'widgets.tree.py, line 211:\n    self.selectionActivatedEvent.fire( self, self._selectedItems )';
	$m.__track_lines__[214] = 'widgets.tree.py, line 214:\n    self.selectionActivatedEvent.fire( self, [self._currentItem] )';
	$m.__track_lines__[216] = 'widgets.tree.py, line 216:\n    def returnCurrentSelection(self):';
	$m.__track_lines__[221] = 'widgets.tree.py, line 221:\n    selection = []';
	$m.__track_lines__[222] = 'widgets.tree.py, line 222:\n    if len( self._selectedItems )>0:';
	$m.__track_lines__[223] = 'widgets.tree.py, line 223:\n    selection = self._selectedItems';
	$m.__track_lines__[226] = 'widgets.tree.py, line 226:\n    selection = [self._currentItem]';
	$m.__track_lines__[227] = 'widgets.tree.py, line 227:\n    if self.selectionType=="node":';
	$m.__track_lines__[228] = 'widgets.tree.py, line 228:\n    selection = [x for x in selection if isinstance(x,self.nodeWidget)]';
	$m.__track_lines__[230] = 'widgets.tree.py, line 230:\n    selection = [x for x in selection if isinstance(x,self.leafWidget)]';
	$m.__track_lines__[231] = 'widgets.tree.py, line 231:\n    self.selectionReturnEvent.fire( self, selection )';
	$m.__track_lines__[233] = 'widgets.tree.py, line 233:\n    def onKeyDown(self, event):';
	$m.__track_lines__[234] = 'widgets.tree.py, line 234:\n    if isReturn(event.keyCode): # Return';
	$m.__track_lines__[235] = 'widgets.tree.py, line 235:\n    self.activateCurrentSelection()';
	$m.__track_lines__[236] = 'widgets.tree.py, line 236:\n    event.preventDefault()';
	$m.__track_lines__[237] = 'widgets.tree.py, line 237:\n    return';
	$m.__track_lines__[239] = 'widgets.tree.py, line 239:\n    self._isCtlPressed = True';
	$m.__track_lines__[241] = 'widgets.tree.py, line 241:\n    def onKeyUp(self, event):';
	$m.__track_lines__[242] = 'widgets.tree.py, line 242:\n    if isSingleSelectionKey(event.keyCode):';
	$m.__track_lines__[243] = 'widgets.tree.py, line 243:\n    self._isCtlPressed = False';
	$m.__track_lines__[245] = 'widgets.tree.py, line 245:\n    def clearSelection(self):';
	$m.__track_lines__[246] = 'widgets.tree.py, line 246:\n    for child in self._children[:]:';
	$m.__track_lines__[247] = 'widgets.tree.py, line 247:\n    self.removeSelectedItem( child )';
	$m.__track_lines__[249] = 'widgets.tree.py, line 249:\n    def addSelectedItem(self, item):';
	$m.__track_lines__[252] = 'widgets.tree.py, line 252:\n    if self.selectionType=="node" and isinstance( item, self.nodeWidget ) or \\';
	$m.__track_lines__[255] = 'widgets.tree.py, line 255:\n    if not item in self._selectedItems:';
	$m.__track_lines__[256] = 'widgets.tree.py, line 256:\n    self._selectedItems.append( item )';
	$m.__track_lines__[257] = 'widgets.tree.py, line 257:\n    item["class"].append("selected")';
	$m.__track_lines__[259] = 'widgets.tree.py, line 259:\n    def removeSelectedItem(self,item):';
	$m.__track_lines__[260] = 'widgets.tree.py, line 260:\n    if not item in self._selectedItems:';
	$m.__track_lines__[261] = 'widgets.tree.py, line 261:\n    return';
	$m.__track_lines__[262] = 'widgets.tree.py, line 262:\n    self._selectedItems.remove( item )';
	$m.__track_lines__[263] = 'widgets.tree.py, line 263:\n    item["class"].remove("selected")';
	$m.__track_lines__[265] = 'widgets.tree.py, line 265:\n    def clear(self):';
	$m.__track_lines__[266] = 'widgets.tree.py, line 266:\n    self.clearSelection()';
	$m.__track_lines__[267] = 'widgets.tree.py, line 267:\n    for child in self._children[:]:';
	$m.__track_lines__[268] = 'widgets.tree.py, line 268:\n    self.removeChild( child )';
	$m.__track_lines__[269] = 'widgets.tree.py, line 269:\n    self.selectionChangedEvent.fire( self, [] )';
	$m.__track_lines__[271] = 'widgets.tree.py, line 271:\n    def getCurrentSelection(self):';
	$m.__track_lines__[272] = 'widgets.tree.py, line 272:\n    if len(self._selectedItems)>0:';
	$m.__track_lines__[273] = 'widgets.tree.py, line 273:\n    return( self._selectedItems[:] )';
	$m.__track_lines__[274] = 'widgets.tree.py, line 274:\n    if self._currentItem:';
	$m.__track_lines__[275] = 'widgets.tree.py, line 275:\n    return( [self._currentItem] )';
	$m.__track_lines__[276] = 'widgets.tree.py, line 276:\n    return( None )';
	$m.__track_lines__[278] = 'widgets.tree.py, line 278:\n    class TreeWidget( html5.Div ):';
	$m.__track_lines__[280] = 'widgets.tree.py, line 280:\n    nodeWidget = NodeWidget';
	$m.__track_lines__[281] = 'widgets.tree.py, line 281:\n    leafWidget = LeafWidget';
	$m.__track_lines__[282] = 'widgets.tree.py, line 282:\n    defaultActions = ["add.node", "add.leaf", "selectrootnode", "edit", "delete", "reload"]';
	$m.__track_lines__[284] = 'widgets.tree.py, line 284:\n    def __init__( self, modul, rootNode=None, node=None, isSelector=False, *args, **kwargs ):';
	$m.__track_lines__[293] = 'widgets.tree.py, line 293:\n    super( TreeWidget, self ).__init__( )';
	$m.__track_lines__[294] = 'widgets.tree.py, line 294:\n    self["class"].append("tree")';
	$m.__track_lines__[295] = 'widgets.tree.py, line 295:\n    self.module = modul';
	$m.__track_lines__[296] = 'widgets.tree.py, line 296:\n    self.rootNode = rootNode';
	$m.__track_lines__[297] = 'widgets.tree.py, line 297:\n    self.node = node or rootNode';
	$m.__track_lines__[298] = 'widgets.tree.py, line 298:\n    self.actionBar = ActionBar( modul, "tree" )';
	$m.__track_lines__[299] = 'widgets.tree.py, line 299:\n    self.appendChild( self.actionBar )';
	$m.__track_lines__[300] = 'widgets.tree.py, line 300:\n    self.pathList = html5.Div()';
	$m.__track_lines__[301] = 'widgets.tree.py, line 301:\n    self.pathList["class"].append("breadcrumb")';
	$m.__track_lines__[302] = 'widgets.tree.py, line 302:\n    self.appendChild( self.pathList )';
	$m.__track_lines__[303] = 'widgets.tree.py, line 303:\n    self.entryFrame = SelectableDiv( self.nodeWidget, self.leafWidget )';
	$m.__track_lines__[304] = 'widgets.tree.py, line 304:\n    self.appendChild( self.entryFrame )';
	$m.__track_lines__[305] = 'widgets.tree.py, line 305:\n    self.entryFrame.selectionActivatedEvent.register( self )';
	$m.__track_lines__[306] = 'widgets.tree.py, line 306:\n    self._batchSize = 99';
	$m.__track_lines__[307] = 'widgets.tree.py, line 307:\n    self._currentCursor = { "node" : None, "leaf": None }';
	$m.__track_lines__[308] = 'widgets.tree.py, line 308:\n    self._currentRequests = []';
	$m.__track_lines__[309] = 'widgets.tree.py, line 309:\n    self.rootNodeChangedEvent = EventDispatcher("rootNodeChanged")';
	$m.__track_lines__[310] = 'widgets.tree.py, line 310:\n    self.nodeChangedEvent = EventDispatcher("nodeChanged")';
	$m.__track_lines__[311] = 'widgets.tree.py, line 311:\n    self.isSelector = isSelector';
	$m.__track_lines__[312] = 'widgets.tree.py, line 312:\n    if self.rootNode:';
	$m.__track_lines__[313] = 'widgets.tree.py, line 313:\n    self.reloadData()';
	$m.__track_lines__[315] = 'widgets.tree.py, line 315:\n    NetworkService.request(self.module,"listRootNodes", successHandler=self.onSetDefaultRootNode)';
	$m.__track_lines__[316] = 'widgets.tree.py, line 316:\n    self.path = []';
	$m.__track_lines__[317] = 'widgets.tree.py, line 317:\n    self.sinkEvent( "onClick" )';
	$m.__track_lines__[319] = 'widgets.tree.py, line 319:\n    for f in ["selectionChangedEvent","selectionActivatedEvent","cursorMovedEvent","getCurrentSelection", "selectionReturnEvent"]:';
	$m.__track_lines__[320] = 'widgets.tree.py, line 320:\n    setattr( self, f, getattr(self.entryFrame,f))';
	$m.__track_lines__[321] = 'widgets.tree.py, line 321:\n    self.actionBar.setActions( self.defaultActions+(["select","close"] if isSelector else []) )';
	$m.__track_lines__[323] = 'widgets.tree.py, line 323:\n    def showErrorMsg(self, req=None, code=None):';
	$m.__track_lines__[327] = 'widgets.tree.py, line 327:\n    self.actionBar["style"]["display"] = "none"';
	$m.__track_lines__[328] = 'widgets.tree.py, line 328:\n    self.entryFrame["style"]["display"] = "none"';
	$m.__track_lines__[329] = 'widgets.tree.py, line 329:\n    errorDiv = html5.Div()';
	$m.__track_lines__[330] = 'widgets.tree.py, line 330:\n    errorDiv["class"].append("error_msg")';
	$m.__track_lines__[331] = 'widgets.tree.py, line 331:\n    if code and (code==401 or code==403):';
	$m.__track_lines__[332] = 'widgets.tree.py, line 332:\n    txt = "Access denied!"';
	$m.__track_lines__[334] = 'widgets.tree.py, line 334:\n    txt = "An unknown error occurred!"';
	$m.__track_lines__[335] = 'widgets.tree.py, line 335:\n    errorDiv["class"].append("error_code_%s" % (code or 0))';
	$m.__track_lines__[336] = 'widgets.tree.py, line 336:\n    errorDiv.appendChild( html5.TextNode( txt ) )';
	$m.__track_lines__[337] = 'widgets.tree.py, line 337:\n    self.appendChild( errorDiv )';
	$m.__track_lines__[339] = 'widgets.tree.py, line 339:\n    def onAttach(self):';
	$m.__track_lines__[340] = 'widgets.tree.py, line 340:\n    super( TreeWidget, self ).onAttach()';
	$m.__track_lines__[341] = 'widgets.tree.py, line 341:\n    NetworkService.registerChangeListener( self )';
	$m.__track_lines__[343] = 'widgets.tree.py, line 343:\n    def onDetach(self):';
	$m.__track_lines__[344] = 'widgets.tree.py, line 344:\n    super( TreeWidget, self ).onDetach()';
	$m.__track_lines__[345] = 'widgets.tree.py, line 345:\n    NetworkService.removeChangeListener( self )';
	$m.__track_lines__[348] = 'widgets.tree.py, line 348:\n    def onDataChanged(self, module, **kwargs):';
	$m.__track_lines__[349] = 'widgets.tree.py, line 349:\n    if module != self.module:';
	$m.__track_lines__[351] = 'widgets.tree.py, line 351:\n    isRootNode = False';
	$m.__track_lines__[352] = 'widgets.tree.py, line 352:\n    for k, v in conf["modules"].items():';
	$m.__track_lines__[353] = 'widgets.tree.py, line 353:\n    if (k == module';
	$m.__track_lines__[357] = 'widgets.tree.py, line 357:\n    isRootNode = True';
	$m.__track_lines__[358] = 'widgets.tree.py, line 358:\n    break';
	$m.__track_lines__[360] = 'widgets.tree.py, line 360:\n    if not isRootNode:';
	$m.__track_lines__[361] = 'widgets.tree.py, line 361:\n    return';
	$m.__track_lines__[363] = 'widgets.tree.py, line 363:\n    if "selectrootnode" in self.actionBar.widgets.keys():';
	$m.__track_lines__[364] = 'widgets.tree.py, line 364:\n    self.actionBar.widgets["selectrootnode"].update()';
	$m.__track_lines__[366] = 'widgets.tree.py, line 366:\n    self.reloadData()';
	$m.__track_lines__[368] = 'widgets.tree.py, line 368:\n    def onSelectionActivated(self, div, selection ):';
	$m.__track_lines__[376] = 'widgets.tree.py, line 376:\n    if not selection:';
	$m.__track_lines__[377] = 'widgets.tree.py, line 377:\n    return';
	$m.__track_lines__[379] = 'widgets.tree.py, line 379:\n    item = selection[0]';
	$m.__track_lines__[381] = 'widgets.tree.py, line 381:\n    if isinstance( item, self.nodeWidget ):';
	$m.__track_lines__[382] = 'widgets.tree.py, line 382:\n    self.path.append( item.data )';
	$m.__track_lines__[383] = 'widgets.tree.py, line 383:\n    self.rebuildPath()';
	$m.__track_lines__[384] = 'widgets.tree.py, line 384:\n    self.setNode( item.data["key"] )';
	$m.__track_lines__[387] = 'widgets.tree.py, line 387:\n    self.returnCurrentSelection()';
	$m.__track_lines__[389] = 'widgets.tree.py, line 389:\n    def activateCurrentSelection(self):';
	$m.__track_lines__[390] = 'widgets.tree.py, line 390:\n    return self.entryFrame.activateCurrentSelection()';
	$m.__track_lines__[392] = 'widgets.tree.py, line 392:\n    def returnCurrentSelection(self):';
	$m.__track_lines__[393] = 'widgets.tree.py, line 393:\n    conf["mainWindow"].removeWidget(self)';
	$m.__track_lines__[394] = 'widgets.tree.py, line 394:\n    return self.entryFrame.returnCurrentSelection()';
	$m.__track_lines__[396] = 'widgets.tree.py, line 396:\n    def onClick(self, event):';
	$m.__track_lines__[397] = 'widgets.tree.py, line 397:\n    super( TreeWidget, self ).onClick( event )';
	$m.__track_lines__[398] = 'widgets.tree.py, line 398:\n    for c in self.pathList._children:';
	$m.__track_lines__[400] = 'widgets.tree.py, line 400:\n    if html5.utils.doesEventHitWidgetOrParents(event, c):';
	$m.__track_lines__[401] = 'widgets.tree.py, line 401:\n    self.path = self.path[ : self.pathList._children.index( c )]';
	$m.__track_lines__[402] = 'widgets.tree.py, line 402:\n    self.rebuildPath()';
	$m.__track_lines__[403] = 'widgets.tree.py, line 403:\n    self.setNode( c.data["key"] )';
	$m.__track_lines__[404] = 'widgets.tree.py, line 404:\n    return';
	$m.__track_lines__[406] = 'widgets.tree.py, line 406:\n    def onSetDefaultRootNode(self, req):';
	$m.__track_lines__[407] = 'widgets.tree.py, line 407:\n    data = NetworkService.decode( req )';
	$m.__track_lines__[408] = 'widgets.tree.py, line 408:\n    if len(data)>0:';
	$m.__track_lines__[409] = 'widgets.tree.py, line 409:\n    self.setRootNode( data[0]["key"])';
	$m.__track_lines__[411] = 'widgets.tree.py, line 411:\n    def setRootNode(self, rootNode):';
	$m.__track_lines__[412] = 'widgets.tree.py, line 412:\n    self.rootNode = rootNode';
	$m.__track_lines__[413] = 'widgets.tree.py, line 413:\n    self.node = rootNode';
	$m.__track_lines__[414] = 'widgets.tree.py, line 414:\n    self.rootNodeChangedEvent.fire( rootNode )';
	$m.__track_lines__[415] = 'widgets.tree.py, line 415:\n    self.rebuildPath()';
	$m.__track_lines__[416] = 'widgets.tree.py, line 416:\n    self.reloadData()';
	$m.__track_lines__[418] = 'widgets.tree.py, line 418:\n    def setNode(self, node):';
	$m.__track_lines__[419] = 'widgets.tree.py, line 419:\n    self.node = node';
	$m.__track_lines__[420] = 'widgets.tree.py, line 420:\n    self.nodeChangedEvent.fire( node )';
	$m.__track_lines__[421] = 'widgets.tree.py, line 421:\n    self.reloadData()';
	$m.__track_lines__[423] = 'widgets.tree.py, line 423:\n    def rebuildPath(self):';
	$m.__track_lines__[427] = 'widgets.tree.py, line 427:\n    for c in self.pathList._children[:]:';
	$m.__track_lines__[428] = 'widgets.tree.py, line 428:\n    self.pathList.removeChild( c )';
	$m.__track_lines__[429] = 'widgets.tree.py, line 429:\n    for p in [None]+self.path:';
	$m.__track_lines__[430] = 'widgets.tree.py, line 430:\n    if p is None:';
	$m.__track_lines__[431] = 'widgets.tree.py, line 431:\n    c = NodeWidget( self.module, {"key":self.rootNode,"name":"root"}, [] )';
	$m.__track_lines__[432] = 'widgets.tree.py, line 432:\n    c["class"].append("is_rootnode")';
	$m.__track_lines__[434] = 'widgets.tree.py, line 434:\n    c = NodeWidget( self.module, p, [] )';
	$m.__track_lines__[435] = 'widgets.tree.py, line 435:\n    self.pathList.appendChild( c )';
	$m.__track_lines__[439] = 'widgets.tree.py, line 439:\n    def reloadData(self, paramsOverride=None):';
	$m.__track_lines__[440] = 'widgets.tree.py, line 440:\n    assert self.node is not None, "reloadData called while self.node is None"';
	$m.__track_lines__[441] = 'widgets.tree.py, line 441:\n    self.entryFrame.clear()';
	$m.__track_lines__[442] = 'widgets.tree.py, line 442:\n    self._currentRequests = []';
	$m.__track_lines__[443] = 'widgets.tree.py, line 443:\n    if paramsOverride:';
	$m.__track_lines__[444] = 'widgets.tree.py, line 444:\n    params = paramsOverride.copy()';
	$m.__track_lines__[446] = 'widgets.tree.py, line 446:\n    params = { "node":self.node }';
	$m.__track_lines__[448] = 'widgets.tree.py, line 448:\n    if "amount" not in params:';
	$m.__track_lines__[449] = 'widgets.tree.py, line 449:\n    params[ "amount" ] = self._batchSize';
	$m.__track_lines__[451] = 'widgets.tree.py, line 451:\n    r = NetworkService.request(self.module,"list/node", params,';
	$m.__track_lines__[454] = 'widgets.tree.py, line 454:\n    r.reqType = "node"';
	$m.__track_lines__[455] = 'widgets.tree.py, line 455:\n    self._currentRequests.append( r )';
	$m.__track_lines__[456] = 'widgets.tree.py, line 456:\n    r = NetworkService.request(self.module,"list/leaf", params,';
	$m.__track_lines__[459] = 'widgets.tree.py, line 459:\n    r.reqType = "leaf"';
	$m.__track_lines__[460] = 'widgets.tree.py, line 460:\n    self._currentRequests.append( r )';
	$m.__track_lines__[462] = 'widgets.tree.py, line 462:\n    def onRequestSucceded(self, req):';
	$m.__track_lines__[463] = 'widgets.tree.py, line 463:\n    if not req in self._currentRequests:';
	$m.__track_lines__[464] = 'widgets.tree.py, line 464:\n    return';
	$m.__track_lines__[465] = 'widgets.tree.py, line 465:\n    self._currentRequests.remove( req )';
	$m.__track_lines__[466] = 'widgets.tree.py, line 466:\n    data = NetworkService.decode( req )';
	$m.__track_lines__[467] = 'widgets.tree.py, line 467:\n    for skel in data["skellist"]:';
	$m.__track_lines__[468] = 'widgets.tree.py, line 468:\n    if req.reqType=="node":';
	$m.__track_lines__[469] = 'widgets.tree.py, line 469:\n    n = self.nodeWidget( self.module, skel, data["structure"] )';
	$m.__track_lines__[471] = 'widgets.tree.py, line 471:\n    n = self.leafWidget( self.module, skel, data["structure"] )';
	$m.__track_lines__[473] = 'widgets.tree.py, line 473:\n    self.entryFrame.appendChild(n)';
	$m.__track_lines__[474] = 'widgets.tree.py, line 474:\n    self.entryFrame.sortChildren( self.getChildKey )';
	$m.__track_lines__[476] = 'widgets.tree.py, line 476:\n    if "cursor" in data.keys() and len( data["skellist"] ) == req.params[ "amount" ]:';
	$m.__track_lines__[477] = 'widgets.tree.py, line 477:\n    self._currentCursor[ req.reqType ] = data["cursor"]';
	$m.__track_lines__[479] = 'widgets.tree.py, line 479:\n    req.params[ "cursor" ] = data["cursor"]';
	$m.__track_lines__[480] = 'widgets.tree.py, line 480:\n    r = NetworkService.request(self.module,"list/%s" % req.reqType, req.params,';
	$m.__track_lines__[483] = 'widgets.tree.py, line 483:\n    r.reqType = req.reqType';
	$m.__track_lines__[484] = 'widgets.tree.py, line 484:\n    self._currentRequests.append( r )';
	$m.__track_lines__[486] = 'widgets.tree.py, line 486:\n    self._currentCursor[ req.reqType ] = None';
	$m.__track_lines__[488] = 'widgets.tree.py, line 488:\n    def getChildKey(self, widget ):';
	$m.__track_lines__[492] = 'widgets.tree.py, line 492:\n    if isinstance( widget, self.nodeWidget ):';
	$m.__track_lines__[493] = 'widgets.tree.py, line 493:\n    return("0-%s" % widget.data["name"].lower())';
	$m.__track_lines__[495] = 'widgets.tree.py, line 495:\n    return("1-%s" % widget.data["name"].lower())';
	$m.__track_lines__[497] = 'widgets.tree.py, line 497:\n    return("2-")';
	$m.__track_lines__[500] = 'widgets.tree.py, line 499:\n    @staticmethod ... def canHandle( modul, moduleInfo ):';
	$m.__track_lines__[501] = 'widgets.tree.py, line 501:\n    return( moduleInfo["handler"].startswith("tree." ) )';
	$m.__track_lines__[503] = 'widgets.tree.py, line 503:\n    displayDelegateSelector.insert( 1, TreeWidget.canHandle, TreeWidget )';


	$pyjs['track']['module']='widgets.tree';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=1;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['html5'] = $p['___import___']('html5', 'widgets');
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=2;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['pyjd'] = $p['___import___']('pyjd', 'widgets');
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=3;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['NetworkService'] = $p['___import___']('network.NetworkService', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=4;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['ActionBar'] = $p['___import___']('widgets.actionbar.ActionBar', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=5;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Search'] = $p['___import___']('widgets.search.Search', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=6;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['EventDispatcher'] = $p['___import___']('event.EventDispatcher', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=7;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['displayDelegateSelector'] = $p['___import___']('priorityqueue.displayDelegateSelector', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['viewDelegateSelector'] = $p['___import___']('priorityqueue.viewDelegateSelector', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=8;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['utils'] = $p['___import___']('utils', 'widgets');
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=9;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$p['__import_all__']('html5.keycodes', 'widgets', $m, null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=10;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['conf'] = $p['___import___']('config.conf', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=12;
	$m['NodeWidget'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.tree';
		$pyjs['track']['lineno']=16;
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

			$pyjs['track']={'module':'widgets.tree', 'lineno':16};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.tree';
			$pyjs['track']['lineno']=16;
			$pyjs['track']['lineno']=25;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['NodeWidget'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs['track']['lineno']=26;
			self['module'] = modul;
			$pyjs['track']['lineno']=27;
			self['data'] = data;
			$pyjs['track']['lineno']=28;
			self['structure'] = structure;
			$pyjs['track']['lineno']=29;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['buildDescription']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			$pyjs['track']['lineno']=30;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('class', 'treeitem node supports_drag supports_drop');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
			$pyjs['track']['lineno']=31;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('draggable', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
			$pyjs['track']['lineno']=32;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['sinkEvent']('onDragOver', 'onDrop', 'onDragStart', 'onDragLeave');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['modul'],['data'],['structure']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=34;
		$method = $pyjs__bind_method2('buildDescription', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var boneInfo,hasDescr,$iter1_nextval,$iter1_type,boneName,$and1,$and3,$and4,$iter1_iter,params,$iter1_array,$pyjs__trackstack_size_1,wdg,$and2,structure,$iter1_idx;
			$pyjs['track']={'module':'widgets.tree', 'lineno':34};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.tree';
			$pyjs['track']['lineno']=34;
			$pyjs['track']['lineno']=38;
			hasDescr = false;
			$pyjs['track']['lineno']=39;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter1_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'structure');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				var $tupleassign1 = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__ass_unpack']($iter1_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
				boneName = $tupleassign1[0];
				boneInfo = $tupleassign1[1];
				$pyjs['track']['lineno']=40;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($and1=(function(){try{try{$pyjs['in_try_except'] += 1;
				return boneInfo['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})()['__contains__']('params'))?(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](boneInfo['__getitem__']('params'), $p['dict']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})():$and1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})()) {
					$pyjs['track']['lineno']=41;
					params = boneInfo['__getitem__']('params');
					$pyjs['track']['lineno']=42;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['bool']($and3=(function(){try{try{$pyjs['in_try_except'] += 1;
					return params['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})()['__contains__']('frontend_default_visible'))?params['__getitem__']('frontend_default_visible'):$and3));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})()) {
						$pyjs['track']['lineno']=44;
						structure = function(){
							var $iter2_nextval,$iter2_type,$iter2_iter,k,$collcomp1,$iter2_idx,$pyjs__trackstack_size_2,v,$iter2_array;
	$collcomp1 = $p['dict']();
						$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
						$iter2_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](self, 'structure');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
						$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
						while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
							var $tupleassign2 = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['__ass_unpack']($iter2_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
							k = $tupleassign2[0];
							v = $tupleassign2[1];
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $collcomp1['__setitem__'](k, v);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='widgets.tree';

	return $collcomp1;}();
						$pyjs['track']['lineno']=45;
						wdg = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['viewDelegateSelector']['select']($p['getattr'](self, 'module'), boneName, structure);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
						$pyjs['track']['lineno']=47;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']((wdg !== null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})()) {
							$pyjs['track']['lineno']=48;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return self['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
							return (function(){try{try{$pyjs['in_try_except'] += 1;
							return wdg($p['getattr'](self, 'module'), boneName, structure);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})()['render']($p['getattr'](self, 'data'), boneName);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
							$pyjs['track']['lineno']=49;
							hasDescr = true;
						}
					}
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.tree';
			$pyjs['track']['lineno']=50;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool'](hasDescr));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})()) {
				$pyjs['track']['lineno']=51;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['TextNode']($p['getattr'](self, 'data')['__getitem__']('name'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['buildDescription'] = $method;
		$pyjs['track']['lineno']=53;
		$method = $pyjs__bind_method2('onDragOver', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var srcKey,$pyjs_try_err,nodeType;
			$pyjs['track']={'module':'widgets.tree', 'lineno':53};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.tree';
			$pyjs['track']['lineno']=53;
			$pyjs['track']['lineno']=57;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool'](self['__getitem__']('class')['__contains__']('insert_here')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})()) {
				$pyjs['track']['lineno']=58;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__getitem__']('class')['append']('insert_here');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
			}
			$pyjs['track']['lineno']=59;
			var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
			try {
				try {
					$pyjs['in_try_except'] += 1;
					$pyjs['track']['lineno']=60;
					var $tupleassign3 = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['__ass_unpack']((function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return event['dataTransfer']['getData']('Text');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})()['$$split']('/');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})(), 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})();
					nodeType = $tupleassign3[0];
					srcKey = $tupleassign3[1];
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
				$pyjs['track']['module']='widgets.tree';
				if (true) {
					$pyjs['track']['lineno']=62;
					$pyjs['track']['lineno']=62;
					var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['$$super']($m['NodeWidget'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})()['onDragOver'](event);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
			}
			$pyjs['track']['lineno']=63;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return event['preventDefault']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
			$pyjs['track']['lineno']=64;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return event['stopPropagation']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDragOver'] = $method;
		$pyjs['track']['lineno']=66;
		$method = $pyjs__bind_method2('onDragLeave', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'widgets.tree', 'lineno':66};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.tree';
			$pyjs['track']['lineno']=66;
			$pyjs['track']['lineno']=67;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](self['__getitem__']('class')['__contains__']('insert_here'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})()) {
				$pyjs['track']['lineno']=68;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__getitem__']('class')['remove']('insert_here');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})();
			}
			$pyjs['track']['lineno']=69;
			$pyjs['track']['lineno']=69;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['NodeWidget'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})()['onDragLeave'](event);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDragLeave'] = $method;
		$pyjs['track']['lineno']=71;
		$method = $pyjs__bind_method2('onDragStart', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $add2,$add1;
			$pyjs['track']={'module':'widgets.tree', 'lineno':71};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.tree';
			$pyjs['track']['lineno']=71;
			$pyjs['track']['lineno']=75;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return event['dataTransfer']['setData']('Text', $p['__op_add']($add1='node/',$add2=$p['getattr'](self, 'data')['__getitem__']('key')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})();
			$pyjs['track']['lineno']=76;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return event['stopPropagation']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDragStart'] = $method;
		$pyjs['track']['lineno']=78;
		$method = $pyjs__bind_method2('onDrop', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var srcKey,$pyjs_try_err,nodeType;
			$pyjs['track']={'module':'widgets.tree', 'lineno':78};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.tree';
			$pyjs['track']['lineno']=78;
			$pyjs['track']['lineno']=82;
			var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
			try {
				try {
					$pyjs['in_try_except'] += 1;
					$pyjs['track']['lineno']=83;
					var $tupleassign4 = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['__ass_unpack']((function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return event['dataTransfer']['getData']('Text');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})()['$$split']('/');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})(), 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})();
					nodeType = $tupleassign4[0];
					srcKey = $tupleassign4[1];
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
				$pyjs['track']['module']='widgets.tree';
				if (true) {
					$pyjs['track']['lineno']=85;
					$pyjs['track']['lineno']=85;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
			}
			$pyjs['track']['lineno']=86;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'modifies':true, 'secure':true}, $p['getattr'](self, 'module'), 'move', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([['skelType', nodeType], ['key', srcKey], ['destNode', $p['getattr'](self, 'data')['__getitem__']('key')]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})();
			$pyjs['track']['lineno']=87;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return event['preventDefault']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})();
			$pyjs['track']['lineno']=88;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return event['stopPropagation']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDrop'] = $method;
		$pyjs['track']['lineno']=12;
		var $bases = new Array($p['getattr']($m['html5'], 'Div'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('NodeWidget', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=92;
	$m['LeafWidget'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.tree';
		$pyjs['track']['lineno']=96;
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

			$pyjs['track']={'module':'widgets.tree', 'lineno':96};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.tree';
			$pyjs['track']['lineno']=96;
			$pyjs['track']['lineno']=105;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['LeafWidget'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})();
			$pyjs['track']['lineno']=106;
			self['module'] = modul;
			$pyjs['track']['lineno']=107;
			self['data'] = data;
			$pyjs['track']['lineno']=108;
			self['structure'] = structure;
			$pyjs['track']['lineno']=109;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['buildDescription']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})();
			$pyjs['track']['lineno']=110;
			$p['getattr'](self, 'element')['innerHTML'] = data['__getitem__']('name');
			$pyjs['track']['lineno']=111;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('class', 'treeitem leaf supports_drag');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})();
			$pyjs['track']['lineno']=112;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('draggable', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})();
			$pyjs['track']['lineno']=113;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['sinkEvent']('onDragStart');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['modul'],['data'],['structure']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=115;
		$method = $pyjs__bind_method2('buildDescription', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $and8,boneInfo,hasDescr,boneName,$iter3_type,$and5,$and6,$and7,$iter3_idx,params,$iter3_iter,$iter3_array,$pyjs__trackstack_size_1,$iter3_nextval,structure,wdg;
			$pyjs['track']={'module':'widgets.tree', 'lineno':115};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.tree';
			$pyjs['track']['lineno']=115;
			$pyjs['track']['lineno']=119;
			hasDescr = false;
			$pyjs['track']['lineno']=120;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter3_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'structure');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})();
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				var $tupleassign5 = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__ass_unpack']($iter3_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})();
				boneName = $tupleassign5[0];
				boneInfo = $tupleassign5[1];
				$pyjs['track']['lineno']=121;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($and5=(function(){try{try{$pyjs['in_try_except'] += 1;
				return boneInfo['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})()['__contains__']('params'))?(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](boneInfo['__getitem__']('params'), $p['dict']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})():$and5));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})()) {
					$pyjs['track']['lineno']=122;
					params = boneInfo['__getitem__']('params');
					$pyjs['track']['lineno']=123;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['bool']($and7=(function(){try{try{$pyjs['in_try_except'] += 1;
					return params['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})()['__contains__']('frontend_default_visible'))?params['__getitem__']('frontend_default_visible'):$and7));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})()) {
						$pyjs['track']['lineno']=125;
						structure = function(){
							var $iter4_nextval,k,$collcomp2,$iter4_idx,$pyjs__trackstack_size_2,$iter4_type,v,$iter4_array,$iter4_iter;
	$collcomp2 = $p['dict']();
						$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
						$iter4_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](self, 'structure');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})();
						$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
						while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
							var $tupleassign6 = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['__ass_unpack']($iter4_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})();
							k = $tupleassign6[0];
							v = $tupleassign6[1];
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $collcomp2['__setitem__'](k, v);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})();
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='widgets.tree';

	return $collcomp2;}();
						$pyjs['track']['lineno']=126;
						wdg = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['viewDelegateSelector']['select']($p['getattr'](self, 'module'), boneName, structure);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})();
						$pyjs['track']['lineno']=128;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']((wdg !== null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})()) {
							$pyjs['track']['lineno']=129;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return self['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
							return (function(){try{try{$pyjs['in_try_except'] += 1;
							return wdg($p['getattr'](self, 'module'), boneName, structure);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})()['render']($p['getattr'](self, 'data'), boneName);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})();
							$pyjs['track']['lineno']=130;
							hasDescr = true;
						}
					}
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.tree';
			$pyjs['track']['lineno']=132;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool'](hasDescr));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})()) {
				$pyjs['track']['lineno']=133;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['TextNode']($p['getattr'](self, 'data')['__getitem__']('name'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['buildDescription'] = $method;
		$pyjs['track']['lineno']=135;
		$method = $pyjs__bind_method2('onDragStart', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $add3,$add4;
			$pyjs['track']={'module':'widgets.tree', 'lineno':135};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.tree';
			$pyjs['track']['lineno']=135;
			$pyjs['track']['lineno']=139;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return event['dataTransfer']['setData']('Text', $p['__op_add']($add3='leaf/',$add4=$p['getattr'](self, 'data')['__getitem__']('key')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})();
			$pyjs['track']['lineno']=140;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return event['stopPropagation']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDragStart'] = $method;
		$pyjs['track']['lineno']=92;
		var $bases = new Array($p['getattr']($m['html5'], 'Div'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('LeafWidget', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=142;
	$m['SelectableDiv'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.tree';
		$pyjs['track']['lineno']=151;
		$method = $pyjs__bind_method2('__init__', function(nodeWidget, leafWidget, selectionType, multiSelection) {
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
				nodeWidget = arguments[1];
				leafWidget = arguments[2];
				selectionType = arguments[3];
				multiSelection = arguments[4];
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
				if (typeof multiSelection != 'undefined') {
					if (multiSelection !== null && typeof multiSelection['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = multiSelection;
						multiSelection = arguments[5];
					}
				} else 				if (typeof selectionType != 'undefined') {
					if (selectionType !== null && typeof selectionType['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = selectionType;
						selectionType = arguments[5];
					}
				} else 				if (typeof leafWidget != 'undefined') {
					if (leafWidget !== null && typeof leafWidget['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = leafWidget;
						leafWidget = arguments[5];
					}
				} else 				if (typeof nodeWidget != 'undefined') {
					if (nodeWidget !== null && typeof nodeWidget['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = nodeWidget;
						nodeWidget = arguments[5];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[5];
					}
				} else {
				}
			}
			if (typeof selectionType == 'undefined') selectionType=arguments['callee']['__args__'][5][1];
			if (typeof multiSelection == 'undefined') multiSelection=arguments['callee']['__args__'][6][1];

			$pyjs['track']={'module':'widgets.tree', 'lineno':151};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.tree';
			$pyjs['track']['lineno']=151;
			$pyjs['track']['lineno']=152;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['SelectableDiv'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})();
			$pyjs['track']['lineno']=153;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__getitem__']('class')['append']('selectioncontainer');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})();
			$pyjs['track']['lineno']=154;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('tabindex', 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})();
			$pyjs['track']['lineno']=155;
			self['selectionType'] = selectionType;
			$pyjs['track']['lineno']=156;
			self['multiSelection'] = multiSelection;
			$pyjs['track']['lineno']=157;
			self['nodeWidget'] = nodeWidget;
			$pyjs['track']['lineno']=158;
			self['leafWidget'] = leafWidget;
			$pyjs['track']['lineno']=159;
			self['selectionChangedEvent'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['EventDispatcher']('selectionChanged');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})();
			$pyjs['track']['lineno']=160;
			self['selectionActivatedEvent'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['EventDispatcher']('selectionActivated');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})();
			$pyjs['track']['lineno']=161;
			self['selectionReturnEvent'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['EventDispatcher']('selectionReturn');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})();
			$pyjs['track']['lineno']=162;
			self['cursorMovedEvent'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['EventDispatcher']('cursorMoved');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})();
			$pyjs['track']['lineno']=163;
			self['_selectedItems'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})();
			$pyjs['track']['lineno']=164;
			self['_currentItem'] = null;
			$pyjs['track']['lineno']=165;
			self['_isMouseDown'] = false;
			$pyjs['track']['lineno']=166;
			self['_isCtlPressed'] = false;
			$pyjs['track']['lineno']=167;
			self['_ctlStartRow'] = null;
			$pyjs['track']['lineno']=168;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['sinkEvent']('onClick', 'onDblClick', 'onMouseMove', 'onMouseDown', 'onMouseUp', 'onKeyDown', 'onKeyUp');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['nodeWidget'],['leafWidget'],['selectionType', 'both'],['multiSelection', false]]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=170;
		$method = $pyjs__bind_method2('setCurrentItem', function(item) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				item = arguments[1];
			}

			$pyjs['track']={'module':'widgets.tree', 'lineno':170};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.tree';
			$pyjs['track']['lineno']=170;
			$pyjs['track']['lineno']=175;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, '_currentItem'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})()) {
				$pyjs['track']['lineno']=176;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, '_currentItem')['__getitem__']('class')['remove']('cursor');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
}})();
			}
			$pyjs['track']['lineno']=177;
			self['_currentItem'] = item;
			$pyjs['track']['lineno']=178;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](item);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})()) {
				$pyjs['track']['lineno']=179;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return item['__getitem__']('class')['append']('cursor');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['item']]);
		$cls_definition['setCurrentItem'] = $method;
		$pyjs['track']['lineno']=181;
		$method = $pyjs__bind_method2('onClick', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $iter5_nextval,$iter5_array,child,$iter5_iter,$iter5_idx,$iter5_type,$pyjs__trackstack_size_1;
			$pyjs['track']={'module':'widgets.tree', 'lineno':181};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.tree';
			$pyjs['track']['lineno']=181;
			$pyjs['track']['lineno']=182;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['focus']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})();
			$pyjs['track']['lineno']=183;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter5_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, '_children');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_88_err){if (!$p['isinstance']($pyjs_dbg_88_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_88_err);}throw $pyjs_dbg_88_err;
}})();
			$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
			while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
				child = $iter5_nextval['$nextval'];
				$pyjs['track']['lineno']=184;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['utils']['doesEventHitWidgetOrChildren'](event, child);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_89_err){if (!$p['isinstance']($pyjs_dbg_89_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_89_err);}throw $pyjs_dbg_89_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_90_err){if (!$p['isinstance']($pyjs_dbg_90_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_90_err);}throw $pyjs_dbg_90_err;
}})()) {
					$pyjs['track']['lineno']=185;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['setCurrentItem'](child);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_91_err){if (!$p['isinstance']($pyjs_dbg_91_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_91_err);}throw $pyjs_dbg_91_err;
}})();
					$pyjs['track']['lineno']=186;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['getattr'](self, '_isCtlPressed'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_92_err){if (!$p['isinstance']($pyjs_dbg_92_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_92_err);}throw $pyjs_dbg_92_err;
}})()) {
						$pyjs['track']['lineno']=187;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return self['addSelectedItem'](child);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_93_err){if (!$p['isinstance']($pyjs_dbg_93_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_93_err);}throw $pyjs_dbg_93_err;
}})();
					}
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.tree';
			$pyjs['track']['lineno']=188;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool']($p['getattr'](self, '_isCtlPressed')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_94_err){if (!$p['isinstance']($pyjs_dbg_94_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_94_err);}throw $pyjs_dbg_94_err;
}})()) {
				$pyjs['track']['lineno']=189;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['clearSelection']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_95_err){if (!$p['isinstance']($pyjs_dbg_95_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_95_err);}throw $pyjs_dbg_95_err;
}})();
			}
			$pyjs['track']['lineno']=190;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, '_selectedItems'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_96_err){if (!$p['isinstance']($pyjs_dbg_96_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_96_err);}throw $pyjs_dbg_96_err;
}})()) {
				$pyjs['track']['lineno']=191;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['selectionChangedEvent']['fire'](self, $p['__getslice']($p['getattr'](self, '_selectedItems'), 0, null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_97_err){if (!$p['isinstance']($pyjs_dbg_97_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_97_err);}throw $pyjs_dbg_97_err;
}})();
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, '_currentItem'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_98_err){if (!$p['isinstance']($pyjs_dbg_98_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_98_err);}throw $pyjs_dbg_98_err;
}})()) {
				$pyjs['track']['lineno']=193;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['selectionChangedEvent']['fire'](self, (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([$p['getattr'](self, '_currentItem')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_99_err){if (!$p['isinstance']($pyjs_dbg_99_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_99_err);}throw $pyjs_dbg_99_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_100_err){if (!$p['isinstance']($pyjs_dbg_100_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_100_err);}throw $pyjs_dbg_100_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=195;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['selectionChangedEvent']['fire'](self, (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_101_err){if (!$p['isinstance']($pyjs_dbg_101_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_101_err);}throw $pyjs_dbg_101_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_102_err){if (!$p['isinstance']($pyjs_dbg_102_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_102_err);}throw $pyjs_dbg_102_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=197;
		$method = $pyjs__bind_method2('onDblClick', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $and9,$or1,$or3,$iter6_idx,$or2,$iter6_type,$pyjs__trackstack_size_1,$and10,$and12,$iter6_array,$and11,child,$iter6_iter,$iter6_nextval;
			$pyjs['track']={'module':'widgets.tree', 'lineno':197};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.tree';
			$pyjs['track']['lineno']=197;
			$pyjs['track']['lineno']=198;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter6_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, '_children');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_103_err){if (!$p['isinstance']($pyjs_dbg_103_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_103_err);}throw $pyjs_dbg_103_err;
}})();
			$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
			while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
				child = $iter6_nextval['$nextval'];
				$pyjs['track']['lineno']=199;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['utils']['doesEventHitWidgetOrChildren'](event, child);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_104_err){if (!$p['isinstance']($pyjs_dbg_104_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_104_err);}throw $pyjs_dbg_104_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_105_err){if (!$p['isinstance']($pyjs_dbg_105_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_105_err);}throw $pyjs_dbg_105_err;
}})()) {
					$pyjs['track']['lineno']=200;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['bool']($or1=($p['bool']($and9=$p['op_eq']($p['getattr'](self, 'selectionType'), 'node'))?(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['isinstance'](child, $p['getattr'](self, 'nodeWidget'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_106_err){if (!$p['isinstance']($pyjs_dbg_106_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_106_err);}throw $pyjs_dbg_106_err;
}})():$and9))?$or1:($p['bool']($or2=($p['bool']($and11=$p['op_eq']($p['getattr'](self, 'selectionType'), 'leaf'))?(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['isinstance'](child, $p['getattr'](self, 'leafWidget'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_107_err){if (!$p['isinstance']($pyjs_dbg_107_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_107_err);}throw $pyjs_dbg_107_err;
}})():$and11))?$or2:$p['op_eq']($p['getattr'](self, 'selectionType'), 'both'))));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_108_err){if (!$p['isinstance']($pyjs_dbg_108_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_108_err);}throw $pyjs_dbg_108_err;
}})()) {
						$pyjs['track']['lineno']=203;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return self['selectionActivatedEvent']['fire'](self, (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['list']([child]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_109_err){if (!$p['isinstance']($pyjs_dbg_109_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_109_err);}throw $pyjs_dbg_109_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_110_err){if (!$p['isinstance']($pyjs_dbg_110_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_110_err);}throw $pyjs_dbg_110_err;
}})();
					}
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.tree';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDblClick'] = $method;
		$pyjs['track']['lineno']=205;
		$method = $pyjs__bind_method2('activateCurrentSelection', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'widgets.tree', 'lineno':205};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.tree';
			$pyjs['track']['lineno']=205;
			$pyjs['track']['lineno']=210;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len']($p['getattr'](self, '_selectedItems'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_111_err){if (!$p['isinstance']($pyjs_dbg_111_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_111_err);}throw $pyjs_dbg_111_err;
}})(), 0) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_112_err){if (!$p['isinstance']($pyjs_dbg_112_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_112_err);}throw $pyjs_dbg_112_err;
}})()) {
				$pyjs['track']['lineno']=211;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['selectionActivatedEvent']['fire'](self, $p['getattr'](self, '_selectedItems'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_113_err){if (!$p['isinstance']($pyjs_dbg_113_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_113_err);}throw $pyjs_dbg_113_err;
}})();
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['getattr'](self, '_currentItem') !== null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_114_err){if (!$p['isinstance']($pyjs_dbg_114_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_114_err);}throw $pyjs_dbg_114_err;
}})()) {
				$pyjs['track']['lineno']=214;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['selectionActivatedEvent']['fire'](self, (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([$p['getattr'](self, '_currentItem')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_115_err){if (!$p['isinstance']($pyjs_dbg_115_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_115_err);}throw $pyjs_dbg_115_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_116_err){if (!$p['isinstance']($pyjs_dbg_116_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_116_err);}throw $pyjs_dbg_116_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['activateCurrentSelection'] = $method;
		$pyjs['track']['lineno']=216;
		$method = $pyjs__bind_method2('returnCurrentSelection', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var selection;
			$pyjs['track']={'module':'widgets.tree', 'lineno':216};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.tree';
			$pyjs['track']['lineno']=216;
			$pyjs['track']['lineno']=221;
			selection = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_117_err){if (!$p['isinstance']($pyjs_dbg_117_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_117_err);}throw $pyjs_dbg_117_err;
}})();
			$pyjs['track']['lineno']=222;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len']($p['getattr'](self, '_selectedItems'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_118_err){if (!$p['isinstance']($pyjs_dbg_118_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_118_err);}throw $pyjs_dbg_118_err;
}})(), 0) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_119_err){if (!$p['isinstance']($pyjs_dbg_119_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_119_err);}throw $pyjs_dbg_119_err;
}})()) {
				$pyjs['track']['lineno']=223;
				selection = $p['getattr'](self, '_selectedItems');
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['getattr'](self, '_currentItem') !== null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_120_err){if (!$p['isinstance']($pyjs_dbg_120_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_120_err);}throw $pyjs_dbg_120_err;
}})()) {
				$pyjs['track']['lineno']=226;
				selection = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([$p['getattr'](self, '_currentItem')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_121_err){if (!$p['isinstance']($pyjs_dbg_121_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_121_err);}throw $pyjs_dbg_121_err;
}})();
			}
			$pyjs['track']['lineno']=227;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq']($p['getattr'](self, 'selectionType'), 'node'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_122_err){if (!$p['isinstance']($pyjs_dbg_122_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_122_err);}throw $pyjs_dbg_122_err;
}})()) {
				$pyjs['track']['lineno']=228;
				selection = function(){
					var $iter7_nextval,$iter7_iter,$iter7_array,$collcomp3,$iter7_idx,x,$iter7_type,$pyjs__trackstack_size_1;
	$collcomp3 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter7_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return selection;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_123_err){if (!$p['isinstance']($pyjs_dbg_123_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_123_err);}throw $pyjs_dbg_123_err;
}})();
				$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
				while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
					x = $iter7_nextval['$nextval'];
					$pyjs['track']['lineno']=228;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['isinstance'](x, $p['getattr'](self, 'nodeWidget'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_124_err){if (!$p['isinstance']($pyjs_dbg_124_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_124_err);}throw $pyjs_dbg_124_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_125_err){if (!$p['isinstance']($pyjs_dbg_125_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_125_err);}throw $pyjs_dbg_125_err;
}})()) {
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $collcomp3['append'](x);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_126_err){if (!$p['isinstance']($pyjs_dbg_126_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_126_err);}throw $pyjs_dbg_126_err;
}})();
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='widgets.tree';

	return $collcomp3;}();
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq']($p['getattr'](self, 'selectionType'), 'leaf'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_127_err){if (!$p['isinstance']($pyjs_dbg_127_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_127_err);}throw $pyjs_dbg_127_err;
}})()) {
				$pyjs['track']['lineno']=230;
				selection = function(){
					var $iter8_idx,$iter8_type,$collcomp4,$iter8_array,$iter8_iter,$iter8_nextval,$pyjs__trackstack_size_1,x;
	$collcomp4 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter8_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return selection;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_128_err){if (!$p['isinstance']($pyjs_dbg_128_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_128_err);}throw $pyjs_dbg_128_err;
}})();
				$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
				while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
					x = $iter8_nextval['$nextval'];
					$pyjs['track']['lineno']=230;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['isinstance'](x, $p['getattr'](self, 'leafWidget'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_129_err){if (!$p['isinstance']($pyjs_dbg_129_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_129_err);}throw $pyjs_dbg_129_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_130_err){if (!$p['isinstance']($pyjs_dbg_130_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_130_err);}throw $pyjs_dbg_130_err;
}})()) {
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $collcomp4['append'](x);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_131_err){if (!$p['isinstance']($pyjs_dbg_131_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_131_err);}throw $pyjs_dbg_131_err;
}})();
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='widgets.tree';

	return $collcomp4;}();
			}
			$pyjs['track']['lineno']=231;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['selectionReturnEvent']['fire'](self, selection);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_132_err){if (!$p['isinstance']($pyjs_dbg_132_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_132_err);}throw $pyjs_dbg_132_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['returnCurrentSelection'] = $method;
		$pyjs['track']['lineno']=233;
		$method = $pyjs__bind_method2('onKeyDown', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'widgets.tree', 'lineno':233};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.tree';
			$pyjs['track']['lineno']=233;
			$pyjs['track']['lineno']=234;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (typeof isReturn == "undefined"?$m['isReturn']:isReturn)($p['getattr'](event, 'keyCode'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_133_err){if (!$p['isinstance']($pyjs_dbg_133_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_133_err);}throw $pyjs_dbg_133_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_134_err){if (!$p['isinstance']($pyjs_dbg_134_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_134_err);}throw $pyjs_dbg_134_err;
}})()) {
				$pyjs['track']['lineno']=235;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['activateCurrentSelection']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_135_err){if (!$p['isinstance']($pyjs_dbg_135_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_135_err);}throw $pyjs_dbg_135_err;
}})();
				$pyjs['track']['lineno']=236;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return event['preventDefault']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_136_err){if (!$p['isinstance']($pyjs_dbg_136_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_136_err);}throw $pyjs_dbg_136_err;
}})();
				$pyjs['track']['lineno']=237;
				$pyjs['track']['lineno']=237;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (typeof isSingleSelectionKey == "undefined"?$m['isSingleSelectionKey']:isSingleSelectionKey)($p['getattr'](event, 'keyCode'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_137_err){if (!$p['isinstance']($pyjs_dbg_137_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_137_err);}throw $pyjs_dbg_137_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_138_err){if (!$p['isinstance']($pyjs_dbg_138_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_138_err);}throw $pyjs_dbg_138_err;
}})()) {
				$pyjs['track']['lineno']=239;
				self['_isCtlPressed'] = true;
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onKeyDown'] = $method;
		$pyjs['track']['lineno']=241;
		$method = $pyjs__bind_method2('onKeyUp', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'widgets.tree', 'lineno':241};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.tree';
			$pyjs['track']['lineno']=241;
			$pyjs['track']['lineno']=242;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (typeof isSingleSelectionKey == "undefined"?$m['isSingleSelectionKey']:isSingleSelectionKey)($p['getattr'](event, 'keyCode'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_139_err){if (!$p['isinstance']($pyjs_dbg_139_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_139_err);}throw $pyjs_dbg_139_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_140_err){if (!$p['isinstance']($pyjs_dbg_140_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_140_err);}throw $pyjs_dbg_140_err;
}})()) {
				$pyjs['track']['lineno']=243;
				self['_isCtlPressed'] = false;
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onKeyUp'] = $method;
		$pyjs['track']['lineno']=245;
		$method = $pyjs__bind_method2('clearSelection', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter9_iter,$pyjs__trackstack_size_1,$iter9_nextval,$iter9_idx,$iter9_type,child,$iter9_array;
			$pyjs['track']={'module':'widgets.tree', 'lineno':245};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.tree';
			$pyjs['track']['lineno']=245;
			$pyjs['track']['lineno']=246;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter9_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__getslice']($p['getattr'](self, '_children'), 0, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_141_err){if (!$p['isinstance']($pyjs_dbg_141_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_141_err);}throw $pyjs_dbg_141_err;
}})();
			$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
			while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
				child = $iter9_nextval['$nextval'];
				$pyjs['track']['lineno']=247;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['removeSelectedItem'](child);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_142_err){if (!$p['isinstance']($pyjs_dbg_142_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_142_err);}throw $pyjs_dbg_142_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.tree';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clearSelection'] = $method;
		$pyjs['track']['lineno']=249;
		$method = $pyjs__bind_method2('addSelectedItem', function(item) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				item = arguments[1];
			}
			var $or5,$or4,$or6,$and13,$and16,$and14,$and15;
			$pyjs['track']={'module':'widgets.tree', 'lineno':249};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.tree';
			$pyjs['track']['lineno']=249;
			$pyjs['track']['lineno']=252;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($or4=($p['bool']($and13=$p['op_eq']($p['getattr'](self, 'selectionType'), 'node'))?(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance'](item, $p['getattr'](self, 'nodeWidget'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_143_err){if (!$p['isinstance']($pyjs_dbg_143_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_143_err);}throw $pyjs_dbg_143_err;
}})():$and13))?$or4:($p['bool']($or5=($p['bool']($and15=$p['op_eq']($p['getattr'](self, 'selectionType'), 'leaf'))?(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance'](item, $p['getattr'](self, 'leafWidget'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_144_err){if (!$p['isinstance']($pyjs_dbg_144_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_144_err);}throw $pyjs_dbg_144_err;
}})():$and15))?$or5:$p['op_eq']($p['getattr'](self, 'selectionType'), 'both'))));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_145_err){if (!$p['isinstance']($pyjs_dbg_145_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_145_err);}throw $pyjs_dbg_145_err;
}})()) {
				$pyjs['track']['lineno']=255;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']($p['getattr'](self, '_selectedItems')['__contains__'](item)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_146_err){if (!$p['isinstance']($pyjs_dbg_146_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_146_err);}throw $pyjs_dbg_146_err;
}})()) {
					$pyjs['track']['lineno']=256;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['_selectedItems']['append'](item);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_147_err){if (!$p['isinstance']($pyjs_dbg_147_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_147_err);}throw $pyjs_dbg_147_err;
}})();
					$pyjs['track']['lineno']=257;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return item['__getitem__']('class')['append']('selected');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_148_err){if (!$p['isinstance']($pyjs_dbg_148_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_148_err);}throw $pyjs_dbg_148_err;
}})();
				}
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['item']]);
		$cls_definition['addSelectedItem'] = $method;
		$pyjs['track']['lineno']=259;
		$method = $pyjs__bind_method2('removeSelectedItem', function(item) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				item = arguments[1];
			}

			$pyjs['track']={'module':'widgets.tree', 'lineno':259};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.tree';
			$pyjs['track']['lineno']=259;
			$pyjs['track']['lineno']=260;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool']($p['getattr'](self, '_selectedItems')['__contains__'](item)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_149_err){if (!$p['isinstance']($pyjs_dbg_149_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_149_err);}throw $pyjs_dbg_149_err;
}})()) {
				$pyjs['track']['lineno']=261;
				$pyjs['track']['lineno']=261;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=262;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['_selectedItems']['remove'](item);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_150_err){if (!$p['isinstance']($pyjs_dbg_150_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_150_err);}throw $pyjs_dbg_150_err;
}})();
			$pyjs['track']['lineno']=263;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return item['__getitem__']('class')['remove']('selected');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_151_err){if (!$p['isinstance']($pyjs_dbg_151_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_151_err);}throw $pyjs_dbg_151_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['item']]);
		$cls_definition['removeSelectedItem'] = $method;
		$pyjs['track']['lineno']=265;
		$method = $pyjs__bind_method2('clear', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter10_nextval,$pyjs__trackstack_size_1,$iter10_array,child,$iter10_type,$iter10_iter,$iter10_idx;
			$pyjs['track']={'module':'widgets.tree', 'lineno':265};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.tree';
			$pyjs['track']['lineno']=265;
			$pyjs['track']['lineno']=266;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['clearSelection']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_152_err){if (!$p['isinstance']($pyjs_dbg_152_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_152_err);}throw $pyjs_dbg_152_err;
}})();
			$pyjs['track']['lineno']=267;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter10_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__getslice']($p['getattr'](self, '_children'), 0, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_153_err){if (!$p['isinstance']($pyjs_dbg_153_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_153_err);}throw $pyjs_dbg_153_err;
}})();
			$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
			while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
				child = $iter10_nextval['$nextval'];
				$pyjs['track']['lineno']=268;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['removeChild'](child);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_154_err){if (!$p['isinstance']($pyjs_dbg_154_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_154_err);}throw $pyjs_dbg_154_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.tree';
			$pyjs['track']['lineno']=269;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['selectionChangedEvent']['fire'](self, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_155_err){if (!$p['isinstance']($pyjs_dbg_155_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_155_err);}throw $pyjs_dbg_155_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_156_err){if (!$p['isinstance']($pyjs_dbg_156_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_156_err);}throw $pyjs_dbg_156_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clear'] = $method;
		$pyjs['track']['lineno']=271;
		$method = $pyjs__bind_method2('getCurrentSelection', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'widgets.tree', 'lineno':271};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.tree';
			$pyjs['track']['lineno']=271;
			$pyjs['track']['lineno']=272;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len']($p['getattr'](self, '_selectedItems'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_157_err){if (!$p['isinstance']($pyjs_dbg_157_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_157_err);}throw $pyjs_dbg_157_err;
}})(), 0) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_158_err){if (!$p['isinstance']($pyjs_dbg_158_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_158_err);}throw $pyjs_dbg_158_err;
}})()) {
				$pyjs['track']['lineno']=273;
				$pyjs['track']['lineno']=273;
				var $pyjs__ret = $p['__getslice']($p['getattr'](self, '_selectedItems'), 0, null);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=274;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, '_currentItem'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_159_err){if (!$p['isinstance']($pyjs_dbg_159_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_159_err);}throw $pyjs_dbg_159_err;
}})()) {
				$pyjs['track']['lineno']=275;
				$pyjs['track']['lineno']=275;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([$p['getattr'](self, '_currentItem')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_160_err){if (!$p['isinstance']($pyjs_dbg_160_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_160_err);}throw $pyjs_dbg_160_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=276;
			$pyjs['track']['lineno']=276;
			var $pyjs__ret = null;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getCurrentSelection'] = $method;
		$pyjs['track']['lineno']=142;
		var $bases = new Array($p['getattr']($m['html5'], 'Div'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('SelectableDiv', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=278;
	$m['TreeWidget'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.tree';
		$pyjs['track']['lineno']=280;
		$cls_definition['nodeWidget'] = $m['NodeWidget'];
		$pyjs['track']['lineno']=281;
		$cls_definition['leafWidget'] = $m['LeafWidget'];
		$pyjs['track']['lineno']=282;
		$cls_definition['defaultActions'] = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['list'](['add.node', 'add.leaf', 'selectrootnode', 'edit', 'delete', 'reload']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_161_err){if (!$p['isinstance']($pyjs_dbg_161_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_161_err);}throw $pyjs_dbg_161_err;
}})();
		$pyjs['track']['lineno']=284;
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
			var $or7,$iter11_type,f,$iter11_iter,$or8,$iter11_array,$add5,$add6,$iter11_nextval,$iter11_idx,$pyjs__trackstack_size_1;
			$pyjs['track']={'module':'widgets.tree', 'lineno':284};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.tree';
			$pyjs['track']['lineno']=284;
			$pyjs['track']['lineno']=293;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['TreeWidget'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_162_err){if (!$p['isinstance']($pyjs_dbg_162_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_162_err);}throw $pyjs_dbg_162_err;
}})()['__init__']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_163_err){if (!$p['isinstance']($pyjs_dbg_163_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_163_err);}throw $pyjs_dbg_163_err;
}})();
			$pyjs['track']['lineno']=294;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__getitem__']('class')['append']('tree');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_164_err){if (!$p['isinstance']($pyjs_dbg_164_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_164_err);}throw $pyjs_dbg_164_err;
}})();
			$pyjs['track']['lineno']=295;
			self['module'] = modul;
			$pyjs['track']['lineno']=296;
			self['rootNode'] = rootNode;
			$pyjs['track']['lineno']=297;
			self['node'] = ($p['bool']($or7=node)?$or7:rootNode);
			$pyjs['track']['lineno']=298;
			self['actionBar'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['ActionBar'](modul, 'tree');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_165_err){if (!$p['isinstance']($pyjs_dbg_165_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_165_err);}throw $pyjs_dbg_165_err;
}})();
			$pyjs['track']['lineno']=299;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'actionBar'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_166_err){if (!$p['isinstance']($pyjs_dbg_166_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_166_err);}throw $pyjs_dbg_166_err;
}})();
			$pyjs['track']['lineno']=300;
			self['pathList'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Div']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_167_err){if (!$p['isinstance']($pyjs_dbg_167_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_167_err);}throw $pyjs_dbg_167_err;
}})();
			$pyjs['track']['lineno']=301;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'pathList')['__getitem__']('class')['append']('breadcrumb');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_168_err){if (!$p['isinstance']($pyjs_dbg_168_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_168_err);}throw $pyjs_dbg_168_err;
}})();
			$pyjs['track']['lineno']=302;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'pathList'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_169_err){if (!$p['isinstance']($pyjs_dbg_169_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_169_err);}throw $pyjs_dbg_169_err;
}})();
			$pyjs['track']['lineno']=303;
			self['entryFrame'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['SelectableDiv']($p['getattr'](self, 'nodeWidget'), $p['getattr'](self, 'leafWidget'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_170_err){if (!$p['isinstance']($pyjs_dbg_170_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_170_err);}throw $pyjs_dbg_170_err;
}})();
			$pyjs['track']['lineno']=304;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'entryFrame'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_171_err){if (!$p['isinstance']($pyjs_dbg_171_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_171_err);}throw $pyjs_dbg_171_err;
}})();
			$pyjs['track']['lineno']=305;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['entryFrame']['selectionActivatedEvent']['register'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_172_err){if (!$p['isinstance']($pyjs_dbg_172_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_172_err);}throw $pyjs_dbg_172_err;
}})();
			$pyjs['track']['lineno']=306;
			self['_batchSize'] = 99;
			$pyjs['track']['lineno']=307;
			self['_currentCursor'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([['node', null], ['leaf', null]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_173_err){if (!$p['isinstance']($pyjs_dbg_173_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_173_err);}throw $pyjs_dbg_173_err;
}})();
			$pyjs['track']['lineno']=308;
			self['_currentRequests'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_174_err){if (!$p['isinstance']($pyjs_dbg_174_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_174_err);}throw $pyjs_dbg_174_err;
}})();
			$pyjs['track']['lineno']=309;
			self['rootNodeChangedEvent'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['EventDispatcher']('rootNodeChanged');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_175_err){if (!$p['isinstance']($pyjs_dbg_175_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_175_err);}throw $pyjs_dbg_175_err;
}})();
			$pyjs['track']['lineno']=310;
			self['nodeChangedEvent'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['EventDispatcher']('nodeChanged');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_176_err){if (!$p['isinstance']($pyjs_dbg_176_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_176_err);}throw $pyjs_dbg_176_err;
}})();
			$pyjs['track']['lineno']=311;
			self['isSelector'] = isSelector;
			$pyjs['track']['lineno']=312;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'rootNode'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_177_err){if (!$p['isinstance']($pyjs_dbg_177_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_177_err);}throw $pyjs_dbg_177_err;
}})()) {
				$pyjs['track']['lineno']=313;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['reloadData']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_178_err){if (!$p['isinstance']($pyjs_dbg_178_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_178_err);}throw $pyjs_dbg_178_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=315;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'successHandler':$p['getattr'](self, 'onSetDefaultRootNode')}, $p['getattr'](self, 'module'), 'listRootNodes']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_179_err){if (!$p['isinstance']($pyjs_dbg_179_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_179_err);}throw $pyjs_dbg_179_err;
}})();
			}
			$pyjs['track']['lineno']=316;
			self['path'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_180_err){if (!$p['isinstance']($pyjs_dbg_180_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_180_err);}throw $pyjs_dbg_180_err;
}})();
			$pyjs['track']['lineno']=317;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['sinkEvent']('onClick');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_181_err){if (!$p['isinstance']($pyjs_dbg_181_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_181_err);}throw $pyjs_dbg_181_err;
}})();
			$pyjs['track']['lineno']=319;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter11_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list'](['selectionChangedEvent', 'selectionActivatedEvent', 'cursorMovedEvent', 'getCurrentSelection', 'selectionReturnEvent']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_182_err){if (!$p['isinstance']($pyjs_dbg_182_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_182_err);}throw $pyjs_dbg_182_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_183_err){if (!$p['isinstance']($pyjs_dbg_183_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_183_err);}throw $pyjs_dbg_183_err;
}})();
			$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
			while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
				f = $iter11_nextval['$nextval'];
				$pyjs['track']['lineno']=320;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['setattr'](self, f, (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr']($p['getattr'](self, 'entryFrame'), f);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_184_err){if (!$p['isinstance']($pyjs_dbg_184_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_184_err);}throw $pyjs_dbg_184_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_185_err){if (!$p['isinstance']($pyjs_dbg_185_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_185_err);}throw $pyjs_dbg_185_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.tree';
			$pyjs['track']['lineno']=321;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['actionBar']['setActions']($p['__op_add']($add5=$p['getattr'](self, 'defaultActions'),$add6=($p['bool'](isSelector)? ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list'](['select', 'close']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_186_err){if (!$p['isinstance']($pyjs_dbg_186_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_186_err);}throw $pyjs_dbg_186_err;
}})()) : ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_187_err){if (!$p['isinstance']($pyjs_dbg_187_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_187_err);}throw $pyjs_dbg_187_err;
}})()))));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_188_err){if (!$p['isinstance']($pyjs_dbg_188_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_188_err);}throw $pyjs_dbg_188_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['modul'],['rootNode', null],['node', null],['isSelector', false]]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=323;
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
			var $or9,errorDiv,$or11,$and17,$or12,$and18,txt,$or10;
			$pyjs['track']={'module':'widgets.tree', 'lineno':323};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.tree';
			$pyjs['track']['lineno']=323;
			$pyjs['track']['lineno']=327;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'actionBar')['__getitem__']('style')['__setitem__']('display', 'none');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_189_err){if (!$p['isinstance']($pyjs_dbg_189_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_189_err);}throw $pyjs_dbg_189_err;
}})();
			$pyjs['track']['lineno']=328;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'entryFrame')['__getitem__']('style')['__setitem__']('display', 'none');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_190_err){if (!$p['isinstance']($pyjs_dbg_190_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_190_err);}throw $pyjs_dbg_190_err;
}})();
			$pyjs['track']['lineno']=329;
			errorDiv = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Div']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_191_err){if (!$p['isinstance']($pyjs_dbg_191_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_191_err);}throw $pyjs_dbg_191_err;
}})();
			$pyjs['track']['lineno']=330;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return errorDiv['__getitem__']('class')['append']('error_msg');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_192_err){if (!$p['isinstance']($pyjs_dbg_192_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_192_err);}throw $pyjs_dbg_192_err;
}})();
			$pyjs['track']['lineno']=331;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and17=code)?($p['bool']($or9=$p['op_eq'](code, 401))?$or9:$p['op_eq'](code, 403)):$and17));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_193_err){if (!$p['isinstance']($pyjs_dbg_193_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_193_err);}throw $pyjs_dbg_193_err;
}})()) {
				$pyjs['track']['lineno']=332;
				txt = 'Access denied!';
			}
			else {
				$pyjs['track']['lineno']=334;
				txt = 'An unknown error occurred!';
			}
			$pyjs['track']['lineno']=335;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return errorDiv['__getitem__']('class')['append']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('error_code_%s', ($p['bool']($or11=code)?$or11:0));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_194_err){if (!$p['isinstance']($pyjs_dbg_194_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_194_err);}throw $pyjs_dbg_194_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_195_err){if (!$p['isinstance']($pyjs_dbg_195_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_195_err);}throw $pyjs_dbg_195_err;
}})();
			$pyjs['track']['lineno']=336;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return errorDiv['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['TextNode'](txt);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_196_err){if (!$p['isinstance']($pyjs_dbg_196_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_196_err);}throw $pyjs_dbg_196_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_197_err){if (!$p['isinstance']($pyjs_dbg_197_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_197_err);}throw $pyjs_dbg_197_err;
}})();
			$pyjs['track']['lineno']=337;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild'](errorDiv);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_198_err){if (!$p['isinstance']($pyjs_dbg_198_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_198_err);}throw $pyjs_dbg_198_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['req', null],['code', null]]);
		$cls_definition['showErrorMsg'] = $method;
		$pyjs['track']['lineno']=339;
		$method = $pyjs__bind_method2('onAttach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'widgets.tree', 'lineno':339};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.tree';
			$pyjs['track']['lineno']=339;
			$pyjs['track']['lineno']=340;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['TreeWidget'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_199_err){if (!$p['isinstance']($pyjs_dbg_199_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_199_err);}throw $pyjs_dbg_199_err;
}})()['onAttach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_200_err){if (!$p['isinstance']($pyjs_dbg_200_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_200_err);}throw $pyjs_dbg_200_err;
}})();
			$pyjs['track']['lineno']=341;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['NetworkService']['registerChangeListener'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_201_err){if (!$p['isinstance']($pyjs_dbg_201_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_201_err);}throw $pyjs_dbg_201_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onAttach'] = $method;
		$pyjs['track']['lineno']=343;
		$method = $pyjs__bind_method2('onDetach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'widgets.tree', 'lineno':343};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.tree';
			$pyjs['track']['lineno']=343;
			$pyjs['track']['lineno']=344;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['TreeWidget'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_202_err){if (!$p['isinstance']($pyjs_dbg_202_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_202_err);}throw $pyjs_dbg_202_err;
}})()['onDetach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_203_err){if (!$p['isinstance']($pyjs_dbg_203_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_203_err);}throw $pyjs_dbg_203_err;
}})();
			$pyjs['track']['lineno']=345;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['NetworkService']['removeChangeListener'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_204_err){if (!$p['isinstance']($pyjs_dbg_204_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_204_err);}throw $pyjs_dbg_204_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onDetach'] = $method;
		$pyjs['track']['lineno']=348;
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
			var $iter12_type,$and20,v,$iter12_array,isRootNode,$iter12_iter,$pyjs__trackstack_size_1,k,$and21,$and19,$iter12_idx,$iter12_nextval;
			$pyjs['track']={'module':'widgets.tree', 'lineno':348};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.tree';
			$pyjs['track']['lineno']=348;
			$pyjs['track']['lineno']=349;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['op_eq'](module, $p['getattr'](self, 'module')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_205_err){if (!$p['isinstance']($pyjs_dbg_205_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_205_err);}throw $pyjs_dbg_205_err;
}})()) {
				$pyjs['track']['lineno']=351;
				isRootNode = false;
				$pyjs['track']['lineno']=352;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter12_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['conf']['__getitem__']('modules')['items']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_207_err){if (!$p['isinstance']($pyjs_dbg_207_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_207_err);}throw $pyjs_dbg_207_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_208_err){if (!$p['isinstance']($pyjs_dbg_208_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_208_err);}throw $pyjs_dbg_208_err;
}})();
				$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
				while (typeof($p['__wrapped_next']($iter12_nextval)['$nextval']) != 'undefined') {
					var $tupleassign7 = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['__ass_unpack']($iter12_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_206_err){if (!$p['isinstance']($pyjs_dbg_206_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_206_err);}throw $pyjs_dbg_206_err;
}})();
					k = $tupleassign7[0];
					v = $tupleassign7[1];
					$pyjs['track']['lineno']=353;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['bool']($and19=$p['op_eq'](k, module))?($p['bool']($and20=$p['op_eq']((function(){try{try{$pyjs['in_try_except'] += 1;
					return v['get']('handler');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_209_err){if (!$p['isinstance']($pyjs_dbg_209_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_209_err);}throw $pyjs_dbg_209_err;
}})(), 'list'))?$p['op_eq']((function(){try{try{$pyjs['in_try_except'] += 1;
					return v['get']('rootNodeOf');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_210_err){if (!$p['isinstance']($pyjs_dbg_210_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_210_err);}throw $pyjs_dbg_210_err;
}})(), $p['getattr'](self, 'module')):$and20):$and19));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_211_err){if (!$p['isinstance']($pyjs_dbg_211_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_211_err);}throw $pyjs_dbg_211_err;
}})()) {
						$pyjs['track']['lineno']=357;
						isRootNode = true;
						$pyjs['track']['lineno']=358;
						break;
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='widgets.tree';
				$pyjs['track']['lineno']=360;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool'](isRootNode));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_212_err){if (!$p['isinstance']($pyjs_dbg_212_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_212_err);}throw $pyjs_dbg_212_err;
}})()) {
					$pyjs['track']['lineno']=361;
					$pyjs['track']['lineno']=361;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
			}
			$pyjs['track']['lineno']=363;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return self['actionBar']['widgets']['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_213_err){if (!$p['isinstance']($pyjs_dbg_213_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_213_err);}throw $pyjs_dbg_213_err;
}})()['__contains__']('selectrootnode'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_214_err){if (!$p['isinstance']($pyjs_dbg_214_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_214_err);}throw $pyjs_dbg_214_err;
}})()) {
				$pyjs['track']['lineno']=364;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr']($p['getattr'](self, 'actionBar'), 'widgets')['__getitem__']('selectrootnode')['update']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_215_err){if (!$p['isinstance']($pyjs_dbg_215_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_215_err);}throw $pyjs_dbg_215_err;
}})();
			}
			$pyjs['track']['lineno']=366;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['reloadData']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_216_err){if (!$p['isinstance']($pyjs_dbg_216_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_216_err);}throw $pyjs_dbg_216_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,['kwargs'],['self'],['module']]);
		$cls_definition['onDataChanged'] = $method;
		$pyjs['track']['lineno']=368;
		$method = $pyjs__bind_method2('onSelectionActivated', function(div, selection) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				div = arguments[1];
				selection = arguments[2];
			}
			var item,$and23,$and22;
			$pyjs['track']={'module':'widgets.tree', 'lineno':368};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.tree';
			$pyjs['track']['lineno']=368;
			$pyjs['track']['lineno']=376;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool'](selection));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_217_err){if (!$p['isinstance']($pyjs_dbg_217_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_217_err);}throw $pyjs_dbg_217_err;
}})()) {
				$pyjs['track']['lineno']=377;
				$pyjs['track']['lineno']=377;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=379;
			item = selection['__getitem__'](0);
			$pyjs['track']['lineno']=381;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance'](item, $p['getattr'](self, 'nodeWidget'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_218_err){if (!$p['isinstance']($pyjs_dbg_218_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_218_err);}throw $pyjs_dbg_218_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_219_err){if (!$p['isinstance']($pyjs_dbg_219_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_219_err);}throw $pyjs_dbg_219_err;
}})()) {
				$pyjs['track']['lineno']=382;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['path']['append']($p['getattr'](item, 'data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_220_err){if (!$p['isinstance']($pyjs_dbg_220_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_220_err);}throw $pyjs_dbg_220_err;
}})();
				$pyjs['track']['lineno']=383;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['rebuildPath']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_221_err){if (!$p['isinstance']($pyjs_dbg_221_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_221_err);}throw $pyjs_dbg_221_err;
}})();
				$pyjs['track']['lineno']=384;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['setNode']($p['getattr'](item, 'data')['__getitem__']('key'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_222_err){if (!$p['isinstance']($pyjs_dbg_222_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_222_err);}throw $pyjs_dbg_222_err;
}})();
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and22=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance'](item, $p['getattr'](self, 'leafWidget'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_223_err){if (!$p['isinstance']($pyjs_dbg_223_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_223_err);}throw $pyjs_dbg_223_err;
}})())?$p['op_eq']($p['getattr'](self, 'isSelector'), 'leaf'):$and22));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_224_err){if (!$p['isinstance']($pyjs_dbg_224_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_224_err);}throw $pyjs_dbg_224_err;
}})()) {
				$pyjs['track']['lineno']=387;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['returnCurrentSelection']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_225_err){if (!$p['isinstance']($pyjs_dbg_225_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_225_err);}throw $pyjs_dbg_225_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['div'],['selection']]);
		$cls_definition['onSelectionActivated'] = $method;
		$pyjs['track']['lineno']=389;
		$method = $pyjs__bind_method2('activateCurrentSelection', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'widgets.tree', 'lineno':389};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.tree';
			$pyjs['track']['lineno']=389;
			$pyjs['track']['lineno']=390;
			$pyjs['track']['lineno']=390;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['entryFrame']['activateCurrentSelection']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_226_err){if (!$p['isinstance']($pyjs_dbg_226_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_226_err);}throw $pyjs_dbg_226_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['activateCurrentSelection'] = $method;
		$pyjs['track']['lineno']=392;
		$method = $pyjs__bind_method2('returnCurrentSelection', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'widgets.tree', 'lineno':392};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.tree';
			$pyjs['track']['lineno']=392;
			$pyjs['track']['lineno']=393;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('mainWindow')['removeWidget'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_227_err){if (!$p['isinstance']($pyjs_dbg_227_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_227_err);}throw $pyjs_dbg_227_err;
}})();
			$pyjs['track']['lineno']=394;
			$pyjs['track']['lineno']=394;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['entryFrame']['returnCurrentSelection']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_228_err){if (!$p['isinstance']($pyjs_dbg_228_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_228_err);}throw $pyjs_dbg_228_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['returnCurrentSelection'] = $method;
		$pyjs['track']['lineno']=396;
		$method = $pyjs__bind_method2('onClick', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var c,$iter13_nextval,$iter13_iter,$iter13_type,$iter13_idx,$pyjs__trackstack_size_1,$iter13_array;
			$pyjs['track']={'module':'widgets.tree', 'lineno':396};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.tree';
			$pyjs['track']['lineno']=396;
			$pyjs['track']['lineno']=397;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['TreeWidget'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_229_err){if (!$p['isinstance']($pyjs_dbg_229_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_229_err);}throw $pyjs_dbg_229_err;
}})()['onClick'](event);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_230_err){if (!$p['isinstance']($pyjs_dbg_230_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_230_err);}throw $pyjs_dbg_230_err;
}})();
			$pyjs['track']['lineno']=398;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter13_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr']($p['getattr'](self, 'pathList'), '_children');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_231_err){if (!$p['isinstance']($pyjs_dbg_231_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_231_err);}throw $pyjs_dbg_231_err;
}})();
			$iter13_nextval=$p['__iter_prepare']($iter13_iter,false);
			while (typeof($p['__wrapped_next']($iter13_nextval)['$nextval']) != 'undefined') {
				c = $iter13_nextval['$nextval'];
				$pyjs['track']['lineno']=400;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['utils']['doesEventHitWidgetOrParents'](event, c);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_232_err){if (!$p['isinstance']($pyjs_dbg_232_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_232_err);}throw $pyjs_dbg_232_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_233_err){if (!$p['isinstance']($pyjs_dbg_233_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_233_err);}throw $pyjs_dbg_233_err;
}})()) {
					$pyjs['track']['lineno']=401;
					self['path'] = $p['__getslice']($p['getattr'](self, 'path'), 0, (function(){try{try{$pyjs['in_try_except'] += 1;
					return self['pathList']['_children']['index'](c);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_234_err){if (!$p['isinstance']($pyjs_dbg_234_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_234_err);}throw $pyjs_dbg_234_err;
}})());
					$pyjs['track']['lineno']=402;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['rebuildPath']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_235_err){if (!$p['isinstance']($pyjs_dbg_235_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_235_err);}throw $pyjs_dbg_235_err;
}})();
					$pyjs['track']['lineno']=403;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['setNode']($p['getattr'](c, 'data')['__getitem__']('key'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_236_err){if (!$p['isinstance']($pyjs_dbg_236_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_236_err);}throw $pyjs_dbg_236_err;
}})();
					$pyjs['track']['lineno']=404;
					$pyjs['track']['lineno']=404;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.tree';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=406;
		$method = $pyjs__bind_method2('onSetDefaultRootNode', function(req) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				req = arguments[1];
			}
			var data;
			$pyjs['track']={'module':'widgets.tree', 'lineno':406};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.tree';
			$pyjs['track']['lineno']=406;
			$pyjs['track']['lineno']=407;
			data = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['NetworkService']['decode'](req);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_237_err){if (!$p['isinstance']($pyjs_dbg_237_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_237_err);}throw $pyjs_dbg_237_err;
}})();
			$pyjs['track']['lineno']=408;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len'](data);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_238_err){if (!$p['isinstance']($pyjs_dbg_238_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_238_err);}throw $pyjs_dbg_238_err;
}})(), 0) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_239_err){if (!$p['isinstance']($pyjs_dbg_239_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_239_err);}throw $pyjs_dbg_239_err;
}})()) {
				$pyjs['track']['lineno']=409;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['setRootNode'](data['__getitem__'](0)['__getitem__']('key'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_240_err){if (!$p['isinstance']($pyjs_dbg_240_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_240_err);}throw $pyjs_dbg_240_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['req']]);
		$cls_definition['onSetDefaultRootNode'] = $method;
		$pyjs['track']['lineno']=411;
		$method = $pyjs__bind_method2('setRootNode', function(rootNode) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rootNode = arguments[1];
			}

			$pyjs['track']={'module':'widgets.tree', 'lineno':411};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.tree';
			$pyjs['track']['lineno']=411;
			$pyjs['track']['lineno']=412;
			self['rootNode'] = rootNode;
			$pyjs['track']['lineno']=413;
			self['node'] = rootNode;
			$pyjs['track']['lineno']=414;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['rootNodeChangedEvent']['fire'](rootNode);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_241_err){if (!$p['isinstance']($pyjs_dbg_241_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_241_err);}throw $pyjs_dbg_241_err;
}})();
			$pyjs['track']['lineno']=415;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['rebuildPath']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_242_err){if (!$p['isinstance']($pyjs_dbg_242_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_242_err);}throw $pyjs_dbg_242_err;
}})();
			$pyjs['track']['lineno']=416;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['reloadData']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_243_err){if (!$p['isinstance']($pyjs_dbg_243_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_243_err);}throw $pyjs_dbg_243_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['rootNode']]);
		$cls_definition['setRootNode'] = $method;
		$pyjs['track']['lineno']=418;
		$method = $pyjs__bind_method2('setNode', function(node) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				node = arguments[1];
			}

			$pyjs['track']={'module':'widgets.tree', 'lineno':418};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.tree';
			$pyjs['track']['lineno']=418;
			$pyjs['track']['lineno']=419;
			self['node'] = node;
			$pyjs['track']['lineno']=420;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['nodeChangedEvent']['fire'](node);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_244_err){if (!$p['isinstance']($pyjs_dbg_244_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_244_err);}throw $pyjs_dbg_244_err;
}})();
			$pyjs['track']['lineno']=421;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['reloadData']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_245_err){if (!$p['isinstance']($pyjs_dbg_245_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_245_err);}throw $pyjs_dbg_245_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['node']]);
		$cls_definition['setNode'] = $method;
		$pyjs['track']['lineno']=423;
		$method = $pyjs__bind_method2('rebuildPath', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter14_array,$iter15_array,$iter14_type,$iter15_iter,$iter15_type,c,$iter15_idx,p,$add7,$iter14_iter,$pyjs__trackstack_size_1,$iter15_nextval,$add8,$iter14_idx,$iter14_nextval;
			$pyjs['track']={'module':'widgets.tree', 'lineno':423};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.tree';
			$pyjs['track']['lineno']=423;
			$pyjs['track']['lineno']=427;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter14_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__getslice']($p['getattr']($p['getattr'](self, 'pathList'), '_children'), 0, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_246_err){if (!$p['isinstance']($pyjs_dbg_246_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_246_err);}throw $pyjs_dbg_246_err;
}})();
			$iter14_nextval=$p['__iter_prepare']($iter14_iter,false);
			while (typeof($p['__wrapped_next']($iter14_nextval)['$nextval']) != 'undefined') {
				c = $iter14_nextval['$nextval'];
				$pyjs['track']['lineno']=428;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['pathList']['removeChild'](c);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_247_err){if (!$p['isinstance']($pyjs_dbg_247_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_247_err);}throw $pyjs_dbg_247_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.tree';
			$pyjs['track']['lineno']=429;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter15_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__op_add']($add7=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([null]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_248_err){if (!$p['isinstance']($pyjs_dbg_248_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_248_err);}throw $pyjs_dbg_248_err;
}})(),$add8=$p['getattr'](self, 'path'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_249_err){if (!$p['isinstance']($pyjs_dbg_249_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_249_err);}throw $pyjs_dbg_249_err;
}})();
			$iter15_nextval=$p['__iter_prepare']($iter15_iter,false);
			while (typeof($p['__wrapped_next']($iter15_nextval)['$nextval']) != 'undefined') {
				p = $iter15_nextval['$nextval'];
				$pyjs['track']['lineno']=430;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((p === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_250_err){if (!$p['isinstance']($pyjs_dbg_250_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_250_err);}throw $pyjs_dbg_250_err;
}})()) {
					$pyjs['track']['lineno']=431;
					c = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['NodeWidget']($p['getattr'](self, 'module'), (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['dict']([['key', $p['getattr'](self, 'rootNode')], ['name', 'root']]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_251_err){if (!$p['isinstance']($pyjs_dbg_251_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_251_err);}throw $pyjs_dbg_251_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_252_err){if (!$p['isinstance']($pyjs_dbg_252_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_252_err);}throw $pyjs_dbg_252_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_253_err){if (!$p['isinstance']($pyjs_dbg_253_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_253_err);}throw $pyjs_dbg_253_err;
}})();
					$pyjs['track']['lineno']=432;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return c['__getitem__']('class')['append']('is_rootnode');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_254_err){if (!$p['isinstance']($pyjs_dbg_254_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_254_err);}throw $pyjs_dbg_254_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=434;
					c = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['NodeWidget']($p['getattr'](self, 'module'), p, (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_255_err){if (!$p['isinstance']($pyjs_dbg_255_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_255_err);}throw $pyjs_dbg_255_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_256_err){if (!$p['isinstance']($pyjs_dbg_256_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_256_err);}throw $pyjs_dbg_256_err;
}})();
				}
				$pyjs['track']['lineno']=435;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['pathList']['appendChild'](c);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_257_err){if (!$p['isinstance']($pyjs_dbg_257_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_257_err);}throw $pyjs_dbg_257_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.tree';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['rebuildPath'] = $method;
		$pyjs['track']['lineno']=439;
		$method = $pyjs__bind_method2('reloadData', function(paramsOverride) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				paramsOverride = arguments[1];
			}
			if (typeof paramsOverride == 'undefined') paramsOverride=arguments['callee']['__args__'][3][1];
			var params,r;
			$pyjs['track']={'module':'widgets.tree', 'lineno':439};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.tree';
			$pyjs['track']['lineno']=439;
			$pyjs['track']['lineno']=440;
			if (!( ($p['getattr'](self, 'node') !== null) )) {
			   throw $p['AssertionError']('reloadData called while self.node is None');
			 }
			$pyjs['track']['lineno']=441;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['entryFrame']['clear']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_258_err){if (!$p['isinstance']($pyjs_dbg_258_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_258_err);}throw $pyjs_dbg_258_err;
}})();
			$pyjs['track']['lineno']=442;
			self['_currentRequests'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_259_err){if (!$p['isinstance']($pyjs_dbg_259_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_259_err);}throw $pyjs_dbg_259_err;
}})();
			$pyjs['track']['lineno']=443;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](paramsOverride);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_260_err){if (!$p['isinstance']($pyjs_dbg_260_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_260_err);}throw $pyjs_dbg_260_err;
}})()) {
				$pyjs['track']['lineno']=444;
				params = (function(){try{try{$pyjs['in_try_except'] += 1;
				return paramsOverride['copy']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_261_err){if (!$p['isinstance']($pyjs_dbg_261_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_261_err);}throw $pyjs_dbg_261_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=446;
				params = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([['node', $p['getattr'](self, 'node')]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_262_err){if (!$p['isinstance']($pyjs_dbg_262_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_262_err);}throw $pyjs_dbg_262_err;
}})();
			}
			$pyjs['track']['lineno']=448;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!params['__contains__']('amount'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_263_err){if (!$p['isinstance']($pyjs_dbg_263_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_263_err);}throw $pyjs_dbg_263_err;
}})()) {
				$pyjs['track']['lineno']=449;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return params['__setitem__']('amount', $p['getattr'](self, '_batchSize'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_264_err){if (!$p['isinstance']($pyjs_dbg_264_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_264_err);}throw $pyjs_dbg_264_err;
}})();
			}
			$pyjs['track']['lineno']=451;
			r = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'successHandler':$p['getattr'](self, 'onRequestSucceded'), 'failureHandler':$p['getattr'](self, 'showErrorMsg')}, $p['getattr'](self, 'module'), 'list/node', params]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_265_err){if (!$p['isinstance']($pyjs_dbg_265_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_265_err);}throw $pyjs_dbg_265_err;
}})();
			$pyjs['track']['lineno']=454;
			r['reqType'] = 'node';
			$pyjs['track']['lineno']=455;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['_currentRequests']['append'](r);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_266_err){if (!$p['isinstance']($pyjs_dbg_266_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_266_err);}throw $pyjs_dbg_266_err;
}})();
			$pyjs['track']['lineno']=456;
			r = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'successHandler':$p['getattr'](self, 'onRequestSucceded'), 'failureHandler':$p['getattr'](self, 'showErrorMsg')}, $p['getattr'](self, 'module'), 'list/leaf', params]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_267_err){if (!$p['isinstance']($pyjs_dbg_267_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_267_err);}throw $pyjs_dbg_267_err;
}})();
			$pyjs['track']['lineno']=459;
			r['reqType'] = 'leaf';
			$pyjs['track']['lineno']=460;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['_currentRequests']['append'](r);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_268_err){if (!$p['isinstance']($pyjs_dbg_268_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_268_err);}throw $pyjs_dbg_268_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['paramsOverride', null]]);
		$cls_definition['reloadData'] = $method;
		$pyjs['track']['lineno']=462;
		$method = $pyjs__bind_method2('onRequestSucceded', function(req) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				req = arguments[1];
			}
			var $iter16_array,$iter16_type,data,n,$iter16_idx,skel,r,$pyjs__trackstack_size_1,$iter16_nextval,$iter16_iter,$and25,$and24;
			$pyjs['track']={'module':'widgets.tree', 'lineno':462};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.tree';
			$pyjs['track']['lineno']=462;
			$pyjs['track']['lineno']=463;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool']($p['getattr'](self, '_currentRequests')['__contains__'](req)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_269_err){if (!$p['isinstance']($pyjs_dbg_269_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_269_err);}throw $pyjs_dbg_269_err;
}})()) {
				$pyjs['track']['lineno']=464;
				$pyjs['track']['lineno']=464;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=465;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['_currentRequests']['remove'](req);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_270_err){if (!$p['isinstance']($pyjs_dbg_270_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_270_err);}throw $pyjs_dbg_270_err;
}})();
			$pyjs['track']['lineno']=466;
			data = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['NetworkService']['decode'](req);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_271_err){if (!$p['isinstance']($pyjs_dbg_271_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_271_err);}throw $pyjs_dbg_271_err;
}})();
			$pyjs['track']['lineno']=467;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter16_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return data['__getitem__']('skellist');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_272_err){if (!$p['isinstance']($pyjs_dbg_272_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_272_err);}throw $pyjs_dbg_272_err;
}})();
			$iter16_nextval=$p['__iter_prepare']($iter16_iter,false);
			while (typeof($p['__wrapped_next']($iter16_nextval)['$nextval']) != 'undefined') {
				skel = $iter16_nextval['$nextval'];
				$pyjs['track']['lineno']=468;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq']($p['getattr'](req, 'reqType'), 'node'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_273_err){if (!$p['isinstance']($pyjs_dbg_273_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_273_err);}throw $pyjs_dbg_273_err;
}})()) {
					$pyjs['track']['lineno']=469;
					n = (function(){try{try{$pyjs['in_try_except'] += 1;
					return self['nodeWidget']($p['getattr'](self, 'module'), skel, data['__getitem__']('structure'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_274_err){if (!$p['isinstance']($pyjs_dbg_274_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_274_err);}throw $pyjs_dbg_274_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=471;
					n = (function(){try{try{$pyjs['in_try_except'] += 1;
					return self['leafWidget']($p['getattr'](self, 'module'), skel, data['__getitem__']('structure'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_275_err){if (!$p['isinstance']($pyjs_dbg_275_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_275_err);}throw $pyjs_dbg_275_err;
}})();
				}
				$pyjs['track']['lineno']=473;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['entryFrame']['appendChild'](n);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_276_err){if (!$p['isinstance']($pyjs_dbg_276_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_276_err);}throw $pyjs_dbg_276_err;
}})();
				$pyjs['track']['lineno']=474;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['entryFrame']['sortChildren']($p['getattr'](self, 'getChildKey'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_277_err){if (!$p['isinstance']($pyjs_dbg_277_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_277_err);}throw $pyjs_dbg_277_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.tree';
			$pyjs['track']['lineno']=476;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and24=(function(){try{try{$pyjs['in_try_except'] += 1;
			return data['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_278_err){if (!$p['isinstance']($pyjs_dbg_278_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_278_err);}throw $pyjs_dbg_278_err;
}})()['__contains__']('cursor'))?$p['op_eq']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len'](data['__getitem__']('skellist'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_279_err){if (!$p['isinstance']($pyjs_dbg_279_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_279_err);}throw $pyjs_dbg_279_err;
}})(), $p['getattr'](req, 'params')['__getitem__']('amount')):$and24));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_280_err){if (!$p['isinstance']($pyjs_dbg_280_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_280_err);}throw $pyjs_dbg_280_err;
}})()) {
				$pyjs['track']['lineno']=477;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, '_currentCursor')['__setitem__']($p['getattr'](req, 'reqType'), data['__getitem__']('cursor'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_281_err){if (!$p['isinstance']($pyjs_dbg_281_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_281_err);}throw $pyjs_dbg_281_err;
}})();
				$pyjs['track']['lineno']=479;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](req, 'params')['__setitem__']('cursor', data['__getitem__']('cursor'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_282_err){if (!$p['isinstance']($pyjs_dbg_282_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_282_err);}throw $pyjs_dbg_282_err;
}})();
				$pyjs['track']['lineno']=480;
				r = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'successHandler':$p['getattr'](self, 'onRequestSucceded'), 'failureHandler':$p['getattr'](self, 'showErrorMsg')}, $p['getattr'](self, 'module'), (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('list/%s', $p['getattr'](req, 'reqType'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_283_err){if (!$p['isinstance']($pyjs_dbg_283_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_283_err);}throw $pyjs_dbg_283_err;
}})(), $p['getattr'](req, 'params')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_284_err){if (!$p['isinstance']($pyjs_dbg_284_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_284_err);}throw $pyjs_dbg_284_err;
}})();
				$pyjs['track']['lineno']=483;
				r['reqType'] = $p['getattr'](req, 'reqType');
				$pyjs['track']['lineno']=484;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['_currentRequests']['append'](r);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_285_err){if (!$p['isinstance']($pyjs_dbg_285_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_285_err);}throw $pyjs_dbg_285_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=486;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, '_currentCursor')['__setitem__']($p['getattr'](req, 'reqType'), null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_286_err){if (!$p['isinstance']($pyjs_dbg_286_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_286_err);}throw $pyjs_dbg_286_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['req']]);
		$cls_definition['onRequestSucceded'] = $method;
		$pyjs['track']['lineno']=488;
		$method = $pyjs__bind_method2('getChildKey', function(widget) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}

			$pyjs['track']={'module':'widgets.tree', 'lineno':488};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.tree';
			$pyjs['track']['lineno']=488;
			$pyjs['track']['lineno']=492;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance'](widget, $p['getattr'](self, 'nodeWidget'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_287_err){if (!$p['isinstance']($pyjs_dbg_287_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_287_err);}throw $pyjs_dbg_287_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_288_err){if (!$p['isinstance']($pyjs_dbg_288_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_288_err);}throw $pyjs_dbg_288_err;
}})()) {
				$pyjs['track']['lineno']=493;
				$pyjs['track']['lineno']=493;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('0-%s', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](widget, 'data')['__getitem__']('name')['lower']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_289_err){if (!$p['isinstance']($pyjs_dbg_289_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_289_err);}throw $pyjs_dbg_289_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_290_err){if (!$p['isinstance']($pyjs_dbg_290_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_290_err);}throw $pyjs_dbg_290_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance'](widget, $p['getattr'](self, 'leafWidget'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_291_err){if (!$p['isinstance']($pyjs_dbg_291_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_291_err);}throw $pyjs_dbg_291_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_292_err){if (!$p['isinstance']($pyjs_dbg_292_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_292_err);}throw $pyjs_dbg_292_err;
}})()) {
				$pyjs['track']['lineno']=495;
				$pyjs['track']['lineno']=495;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('1-%s', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](widget, 'data')['__getitem__']('name')['lower']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_293_err){if (!$p['isinstance']($pyjs_dbg_293_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_293_err);}throw $pyjs_dbg_293_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_294_err){if (!$p['isinstance']($pyjs_dbg_294_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_294_err);}throw $pyjs_dbg_294_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			else {
				$pyjs['track']['lineno']=497;
				$pyjs['track']['lineno']=497;
				var $pyjs__ret = '2-';
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['getChildKey'] = $method;
		$pyjs['track']['lineno']=500;
		$method = $pyjs__bind_method2('canHandle', function(modul, moduleInfo) {

			$pyjs['track']={'module':'widgets.tree', 'lineno':500};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.tree';
			$pyjs['track']['lineno']=500;
			$pyjs['track']['lineno']=501;
			$pyjs['track']['lineno']=501;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return moduleInfo['__getitem__']('handler')['startswith']('tree.');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_295_err){if (!$p['isinstance']($pyjs_dbg_295_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_295_err);}throw $pyjs_dbg_295_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['modul'],['moduleInfo']]);
		$cls_definition['canHandle'] = $method;
		$pyjs['track']['lineno']=278;
		var $bases = new Array($p['getattr']($m['html5'], 'Div'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('TreeWidget', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=503;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['displayDelegateSelector']['insert'](1, $p['getattr']($m['TreeWidget'], 'canHandle'), $m['TreeWidget']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_296_err){if (!$p['isinstance']($pyjs_dbg_296_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_296_err);}throw $pyjs_dbg_296_err;
}})();
	return this;
}; /* end widgets.tree */


/* end module: widgets.tree */


/*
PYJS_DEPS: ['html5', 'pyjd', 'network.NetworkService', 'network', 'widgets.actionbar.ActionBar', 'widgets', 'widgets.actionbar', 'widgets.search.Search', 'widgets.search', 'event.EventDispatcher', 'event', 'priorityqueue.displayDelegateSelector', 'priorityqueue', 'priorityqueue.viewDelegateSelector', 'utils', 'html5.keycodes', 'config.conf', 'config']
*/
