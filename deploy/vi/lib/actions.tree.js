/* start module: actions.tree */
$pyjs['loaded_modules']['actions.tree'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['actions.tree']['__was_initialized__']) return $pyjs['loaded_modules']['actions.tree'];
	if(typeof $pyjs['loaded_modules']['actions'] == 'undefined' || !$pyjs['loaded_modules']['actions']['__was_initialized__']) $p['___import___']('actions', null);
	var $m = $pyjs['loaded_modules']['actions.tree'];
	$m['__repr__'] = function() { return '<module: actions.tree>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'actions.tree';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['actions']['tree'] = $pyjs['loaded_modules']['actions.tree'];
	$m.__track_lines__[1] = 'actions.tree.py, line 1:\n    import html5';
	$m.__track_lines__[2] = 'actions.tree.py, line 2:\n    from network import NetworkService';
	$m.__track_lines__[3] = 'actions.tree.py, line 3:\n    from priorityqueue import actionDelegateSelector';
	$m.__track_lines__[4] = 'actions.tree.py, line 4:\n    from widgets.edit import EditWidget';
	$m.__track_lines__[5] = 'actions.tree.py, line 5:\n    from config import conf';
	$m.__track_lines__[6] = 'actions.tree.py, line 6:\n    from pane import Pane';
	$m.__track_lines__[7] = 'actions.tree.py, line 7:\n    from i18n import translate';
	$m.__track_lines__[9] = 'actions.tree.py, line 9:\n    class AddLeafAction( html5.ext.Button ):';
	$m.__track_lines__[13] = 'actions.tree.py, line 13:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[14] = 'actions.tree.py, line 14:\n    super( AddLeafAction, self ).__init__( translate("Add"), *args, **kwargs )';
	$m.__track_lines__[15] = 'actions.tree.py, line 15:\n    self["class"] = "icon add leaf"';
	$m.__track_lines__[18] = 'actions.tree.py, line 17:\n    @staticmethod ... def isSuitableFor( module, handler, actionName ):';
	$m.__track_lines__[19] = 'actions.tree.py, line 19:\n    if module is None or module not in conf["modules"].keys():';
	$m.__track_lines__[20] = 'actions.tree.py, line 20:\n    return False';
	$m.__track_lines__[22] = 'actions.tree.py, line 22:\n    correctAction = actionName=="add.leaf"';
	$m.__track_lines__[23] = 'actions.tree.py, line 23:\n    correctHandler = handler == "tree" or handler.startswith("tree.")';
	$m.__track_lines__[24] = 'actions.tree.py, line 24:\n    hasAccess = conf["currentUser"] and ("root" in conf["currentUser"]["access"] or module+"-add" in conf["currentUser"]["access"])';
	$m.__track_lines__[25] = 'actions.tree.py, line 25:\n    isDisabled = module is not None and "disabledFunctions" in conf["modules"][module].keys() and conf["modules"][module]["disabledFunctions"] and "add-leaf" in conf["modules"][module]["disabledFunctions"]';
	$m.__track_lines__[27] = 'actions.tree.py, line 27:\n    return correctAction and correctHandler and hasAccess and not isDisabled';
	$m.__track_lines__[29] = 'actions.tree.py, line 29:\n    def onClick(self, sender=None):';
	$m.__track_lines__[30] = 'actions.tree.py, line 30:\n    pane = Pane("Add", closeable=True)';
	$m.__track_lines__[31] = 'actions.tree.py, line 31:\n    conf["mainWindow"].stackPane( pane, iconClasses=["modul_%s" % self.parent().parent().module, "apptype_tree", "action_add_leaf" ] )';
	$m.__track_lines__[32] = 'actions.tree.py, line 32:\n    edwg = EditWidget( self.parent().parent().module, EditWidget.appTree, node=self.parent().parent().node, skelType="leaf" )';
	$m.__track_lines__[33] = 'actions.tree.py, line 33:\n    pane.addWidget( edwg )';
	$m.__track_lines__[34] = 'actions.tree.py, line 34:\n    pane.focus()';
	$m.__track_lines__[36] = 'actions.tree.py, line 36:\n    def resetLoadingState(self):';
	$m.__track_lines__[37] = 'actions.tree.py, line 37:\n    pass';
	$m.__track_lines__[39] = 'actions.tree.py, line 39:\n    actionDelegateSelector.insert( 1, AddLeafAction.isSuitableFor, AddLeafAction )';
	$m.__track_lines__[42] = 'actions.tree.py, line 42:\n    class AddNodeAction( html5.ext.Button ):';
	$m.__track_lines__[46] = 'actions.tree.py, line 46:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[47] = 'actions.tree.py, line 47:\n    super( AddNodeAction, self ).__init__(  translate("Add"), *args, **kwargs )';
	$m.__track_lines__[48] = 'actions.tree.py, line 48:\n    self["class"] = "icon add node"';
	$m.__track_lines__[51] = 'actions.tree.py, line 50:\n    @staticmethod ... def isSuitableFor( module, handler, actionName ):';
	$m.__track_lines__[52] = 'actions.tree.py, line 52:\n    if module is None or module not in conf["modules"].keys():';
	$m.__track_lines__[53] = 'actions.tree.py, line 53:\n    return False';
	$m.__track_lines__[55] = 'actions.tree.py, line 55:\n    correctAction = actionName=="add.node"';
	$m.__track_lines__[56] = 'actions.tree.py, line 56:\n    correctHandler = handler == "tree" or handler.startswith("tree.")';
	$m.__track_lines__[57] = 'actions.tree.py, line 57:\n    hasAccess = conf["currentUser"] and ("root" in conf["currentUser"]["access"] or module+"-add" in conf["currentUser"]["access"])';
	$m.__track_lines__[58] = 'actions.tree.py, line 58:\n    isDisabled = module is not None and "disabledFunctions" in conf["modules"][module].keys() and conf["modules"][module]["disabledFunctions"] and "add-node" in conf["modules"][module]["disabledFunctions"]';
	$m.__track_lines__[60] = 'actions.tree.py, line 60:\n    return  correctAction and correctHandler and hasAccess and not isDisabled';
	$m.__track_lines__[62] = 'actions.tree.py, line 62:\n    def onClick(self, sender=None):';
	$m.__track_lines__[63] = 'actions.tree.py, line 63:\n    pane = Pane( translate("Add"), closeable=True, iconClasses=["modul_%s" % self.parent().parent().module, "apptype_tree", "action_add_node" ])';
	$m.__track_lines__[64] = 'actions.tree.py, line 64:\n    conf["mainWindow"].stackPane( pane )';
	$m.__track_lines__[65] = 'actions.tree.py, line 65:\n    edwg = EditWidget( self.parent().parent().module, EditWidget.appTree, node=self.parent().parent().node, skelType="node" )';
	$m.__track_lines__[66] = 'actions.tree.py, line 66:\n    pane.addWidget( edwg )';
	$m.__track_lines__[67] = 'actions.tree.py, line 67:\n    pane.focus()';
	$m.__track_lines__[69] = 'actions.tree.py, line 69:\n    def resetLoadingState(self):';
	$m.__track_lines__[70] = 'actions.tree.py, line 70:\n    pass';
	$m.__track_lines__[72] = 'actions.tree.py, line 72:\n    actionDelegateSelector.insert( 1, AddNodeAction.isSuitableFor, AddNodeAction )';
	$m.__track_lines__[75] = 'actions.tree.py, line 75:\n    class EditAction( html5.ext.Button ):';
	$m.__track_lines__[80] = 'actions.tree.py, line 80:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[81] = 'actions.tree.py, line 81:\n    super( EditAction, self ).__init__(  translate("Edit"), *args, **kwargs )';
	$m.__track_lines__[82] = 'actions.tree.py, line 82:\n    self["class"] = "icon edit"';
	$m.__track_lines__[83] = 'actions.tree.py, line 83:\n    self["disabled"]= True';
	$m.__track_lines__[84] = 'actions.tree.py, line 84:\n    self.isDisabled=True';
	$m.__track_lines__[86] = 'actions.tree.py, line 86:\n    def onAttach(self):';
	$m.__track_lines__[87] = 'actions.tree.py, line 87:\n    super(EditAction,self).onAttach()';
	$m.__track_lines__[88] = 'actions.tree.py, line 88:\n    self.parent().parent().selectionChangedEvent.register( self )';
	$m.__track_lines__[89] = 'actions.tree.py, line 89:\n    self.parent().parent().selectionActivatedEvent.register( self )';
	$m.__track_lines__[91] = 'actions.tree.py, line 91:\n    def onDetach(self):';
	$m.__track_lines__[92] = 'actions.tree.py, line 92:\n    self.parent().parent().selectionChangedEvent.unregister( self )';
	$m.__track_lines__[93] = 'actions.tree.py, line 93:\n    self.parent().parent().selectionActivatedEvent.unregister( self )';
	$m.__track_lines__[94] = 'actions.tree.py, line 94:\n    super(EditAction,self).onDetach()';
	$m.__track_lines__[96] = 'actions.tree.py, line 96:\n    def onSelectionActivated(self, table, selection ):';
	$m.__track_lines__[97] = 'actions.tree.py, line 97:\n    if not self.parent().parent().isSelector and len(selection)==1:';
	$m.__track_lines__[98] = 'actions.tree.py, line 98:\n    pane = Pane( translate("Edit"), closeable=True, iconClasses=["modul_%s" % self.parent().parent().module, "apptype_tree", "action_edit" ])';
	$m.__track_lines__[99] = 'actions.tree.py, line 99:\n    conf["mainWindow"].stackPane( pane )';
	$m.__track_lines__[100] = 'actions.tree.py, line 100:\n    if isinstance( selection[0], self.parent().parent().nodeWidget):';
	$m.__track_lines__[101] = 'actions.tree.py, line 101:\n    skelType = "node"';
	$m.__track_lines__[103] = 'actions.tree.py, line 103:\n    skelType = "leaf"';
	$m.__track_lines__[105] = 'actions.tree.py, line 105:\n    raise ValueError("Unknown selection type: %s" % str(type(selection[0])))';
	$m.__track_lines__[106] = 'actions.tree.py, line 106:\n    edwg = EditWidget( self.parent().parent().module, EditWidget.appTree, key=selection[0].data["key"], skelType=skelType)';
	$m.__track_lines__[107] = 'actions.tree.py, line 107:\n    pane.addWidget( edwg )';
	$m.__track_lines__[108] = 'actions.tree.py, line 108:\n    pane.focus()';
	$m.__track_lines__[110] = 'actions.tree.py, line 110:\n    def onSelectionChanged(self, table, selection ):';
	$m.__track_lines__[111] = 'actions.tree.py, line 111:\n    if len(selection)>0:';
	$m.__track_lines__[112] = 'actions.tree.py, line 112:\n    if self.isDisabled:';
	$m.__track_lines__[113] = 'actions.tree.py, line 113:\n    self.isDisabled = False';
	$m.__track_lines__[114] = 'actions.tree.py, line 114:\n    self["disabled"]= False';
	$m.__track_lines__[116] = 'actions.tree.py, line 116:\n    if not self.isDisabled:';
	$m.__track_lines__[117] = 'actions.tree.py, line 117:\n    self["disabled"]= True';
	$m.__track_lines__[118] = 'actions.tree.py, line 118:\n    self.isDisabled = True';
	$m.__track_lines__[121] = 'actions.tree.py, line 120:\n    @staticmethod ... def isSuitableFor( module, handler, actionName ):';
	$m.__track_lines__[122] = 'actions.tree.py, line 122:\n    if module is None or module not in conf["modules"].keys():';
	$m.__track_lines__[123] = 'actions.tree.py, line 123:\n    return False';
	$m.__track_lines__[125] = 'actions.tree.py, line 125:\n    correctAction = actionName=="edit"';
	$m.__track_lines__[126] = 'actions.tree.py, line 126:\n    correctHandler = handler == "tree" or handler.startswith("tree.")';
	$m.__track_lines__[127] = 'actions.tree.py, line 127:\n    hasAccess = conf["currentUser"] and ("root" in conf["currentUser"]["access"] or module+"-edit" in conf["currentUser"]["access"])';
	$m.__track_lines__[128] = 'actions.tree.py, line 128:\n    isDisabled = module is not None and "disabledFunctions" in conf["modules"][module].keys() and conf["modules"][module]["disabledFunctions"] and "edit" in conf["modules"][module]["disabledFunctions"]';
	$m.__track_lines__[129] = 'actions.tree.py, line 129:\n    return correctAction and correctHandler and hasAccess and not isDisabled';
	$m.__track_lines__[131] = 'actions.tree.py, line 131:\n    def onClick(self, sender=None):';
	$m.__track_lines__[132] = 'actions.tree.py, line 132:\n    selection = self.parent().parent().getCurrentSelection()';
	$m.__track_lines__[133] = 'actions.tree.py, line 133:\n    if not selection:';
	$m.__track_lines__[134] = 'actions.tree.py, line 134:\n    return';
	$m.__track_lines__[135] = 'actions.tree.py, line 135:\n    print(selection)';
	$m.__track_lines__[136] = 'actions.tree.py, line 136:\n    for s in selection:';
	$m.__track_lines__[137] = 'actions.tree.py, line 137:\n    pane = Pane(translate("Edit"), closeable=True)';
	$m.__track_lines__[138] = 'actions.tree.py, line 138:\n    conf["mainWindow"].stackPane( pane, focus=True )';
	$m.__track_lines__[139] = 'actions.tree.py, line 139:\n    if isinstance(s,self.parent().parent().nodeWidget):';
	$m.__track_lines__[140] = 'actions.tree.py, line 140:\n    skelType = "node"';
	$m.__track_lines__[142] = 'actions.tree.py, line 142:\n    skelType = "leaf"';
	$m.__track_lines__[144] = 'actions.tree.py, line 144:\n    raise ValueError("Unknown selection type: %s" % str(type(s)))';
	$m.__track_lines__[145] = 'actions.tree.py, line 145:\n    edwg = EditWidget( self.parent().parent().module, EditWidget.appTree, key=s.data["key"], skelType=skelType, iconClasses=["modul_%s" % self.parent().parent().module, "apptype_tree", "action_edit" ])';
	$m.__track_lines__[146] = 'actions.tree.py, line 146:\n    pane.addWidget( edwg )';
	$m.__track_lines__[148] = 'actions.tree.py, line 148:\n    def resetLoadingState(self):';
	$m.__track_lines__[149] = 'actions.tree.py, line 149:\n    pass';
	$m.__track_lines__[151] = 'actions.tree.py, line 151:\n    actionDelegateSelector.insert( 1, EditAction.isSuitableFor, EditAction )';
	$m.__track_lines__[154] = 'actions.tree.py, line 154:\n    class DeleteAction( html5.ext.Button ):';
	$m.__track_lines__[159] = 'actions.tree.py, line 159:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[160] = 'actions.tree.py, line 160:\n    super( DeleteAction, self ).__init__(  translate("Delete"), *args, **kwargs )';
	$m.__track_lines__[161] = 'actions.tree.py, line 161:\n    self["class"] = "icon delete"';
	$m.__track_lines__[162] = 'actions.tree.py, line 162:\n    self["disabled"]= True';
	$m.__track_lines__[163] = 'actions.tree.py, line 163:\n    self.isDisabled=True';
	$m.__track_lines__[166] = 'actions.tree.py, line 166:\n    def onAttach(self):';
	$m.__track_lines__[167] = 'actions.tree.py, line 167:\n    super(DeleteAction,self).onAttach()';
	$m.__track_lines__[168] = 'actions.tree.py, line 168:\n    self.parent().parent().selectionChangedEvent.register( self )';
	$m.__track_lines__[170] = 'actions.tree.py, line 170:\n    def onDetach(self):';
	$m.__track_lines__[171] = 'actions.tree.py, line 171:\n    self.parent().parent().selectionChangedEvent.unregister( self )';
	$m.__track_lines__[172] = 'actions.tree.py, line 172:\n    super(DeleteAction,self).onDetach()';
	$m.__track_lines__[174] = 'actions.tree.py, line 174:\n    def onSelectionChanged(self, table, selection ):';
	$m.__track_lines__[175] = 'actions.tree.py, line 175:\n    if len(selection)>0:';
	$m.__track_lines__[176] = 'actions.tree.py, line 176:\n    if self.isDisabled:';
	$m.__track_lines__[177] = 'actions.tree.py, line 177:\n    self.isDisabled = False';
	$m.__track_lines__[178] = 'actions.tree.py, line 178:\n    self["disabled"]= False';
	$m.__track_lines__[180] = 'actions.tree.py, line 180:\n    if not self.isDisabled:';
	$m.__track_lines__[181] = 'actions.tree.py, line 181:\n    self["disabled"]= True';
	$m.__track_lines__[182] = 'actions.tree.py, line 182:\n    self.isDisabled = True';
	$m.__track_lines__[186] = 'actions.tree.py, line 185:\n    @staticmethod ... def isSuitableFor( module, handler, actionName ):';
	$m.__track_lines__[187] = 'actions.tree.py, line 187:\n    if module is None or module not in conf["modules"].keys():';
	$m.__track_lines__[188] = 'actions.tree.py, line 188:\n    return False';
	$m.__track_lines__[190] = 'actions.tree.py, line 190:\n    correctAction = actionName=="delete"';
	$m.__track_lines__[191] = 'actions.tree.py, line 191:\n    correctHandler = handler == "tree" or handler.startswith("tree.")';
	$m.__track_lines__[192] = 'actions.tree.py, line 192:\n    hasAccess = conf["currentUser"] and ("root" in conf["currentUser"]["access"] or module+"-delete" in conf["currentUser"]["access"])';
	$m.__track_lines__[193] = 'actions.tree.py, line 193:\n    isDisabled = module is not None and "disabledFunctions" in conf["modules"][module].keys() and conf["modules"][module]["disabledFunctions"] and "delete" in conf["modules"][module]["disabledFunctions"]';
	$m.__track_lines__[195] = 'actions.tree.py, line 195:\n    return correctAction and correctHandler and hasAccess and not isDisabled';
	$m.__track_lines__[197] = 'actions.tree.py, line 197:\n    def onClick(self, sender=None):';
	$m.__track_lines__[198] = 'actions.tree.py, line 198:\n    selection = self.parent().parent().getCurrentSelection()';
	$m.__track_lines__[199] = 'actions.tree.py, line 199:\n    if not selection:';
	$m.__track_lines__[200] = 'actions.tree.py, line 200:\n    return';
	$m.__track_lines__[201] = 'actions.tree.py, line 201:\n    d = html5.ext.YesNoDialog(translate("Delete {amt} Entries?",amt=len(selection)) ,title=translate("Delete them?"), yesCallback=self.doDelete, yesLabel=translate("Delete"), noLabel=translate("Keep") )';
	$m.__track_lines__[202] = 'actions.tree.py, line 202:\n    d.deleteList = selection';
	$m.__track_lines__[203] = 'actions.tree.py, line 203:\n    d["class"].append( "delete" )';
	$m.__track_lines__[205] = 'actions.tree.py, line 205:\n    def doDelete(self, dialog):';
	$m.__track_lines__[206] = 'actions.tree.py, line 206:\n    deleteList = dialog.deleteList';
	$m.__track_lines__[207] = 'actions.tree.py, line 207:\n    for x in deleteList:';
	$m.__track_lines__[208] = 'actions.tree.py, line 208:\n    if isinstance(x,self.parent().parent().nodeWidget ):';
	$m.__track_lines__[209] = 'actions.tree.py, line 209:\n    NetworkService.request( self.parent().parent().module, "delete/node", {"key": x.data["key"]}, secure=True, modifies=True )';
	$m.__track_lines__[211] = 'actions.tree.py, line 211:\n    NetworkService.request( self.parent().parent().module, "delete/leaf", {"key": x.data["key"]}, secure=True, modifies=True )';
	$m.__track_lines__[213] = 'actions.tree.py, line 213:\n    def resetLoadingState(self):';
	$m.__track_lines__[214] = 'actions.tree.py, line 214:\n    pass';
	$m.__track_lines__[216] = 'actions.tree.py, line 216:\n    actionDelegateSelector.insert( 1, DeleteAction.isSuitableFor, DeleteAction )';
	$m.__track_lines__[218] = 'actions.tree.py, line 218:\n    class ReloadAction( html5.ext.Button ):';
	$m.__track_lines__[222] = 'actions.tree.py, line 222:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[223] = 'actions.tree.py, line 223:\n    super( ReloadAction, self ).__init__( translate("Reload"), *args, **kwargs )';
	$m.__track_lines__[224] = 'actions.tree.py, line 224:\n    self["class"] = "icon reload"';
	$m.__track_lines__[227] = 'actions.tree.py, line 226:\n    @staticmethod ... def isSuitableFor( module, handler, actionName ):';
	$m.__track_lines__[228] = 'actions.tree.py, line 228:\n    return actionName=="reload" and (handler == "tree" or handler.startswith("tree."))';
	$m.__track_lines__[230] = 'actions.tree.py, line 230:\n    def onClick(self, sender=None):';
	$m.__track_lines__[231] = 'actions.tree.py, line 231:\n    self["class"].append("is_loading")';
	$m.__track_lines__[232] = 'actions.tree.py, line 232:\n    NetworkService.notifyChange( self.parent().parent().module )';
	$m.__track_lines__[234] = 'actions.tree.py, line 234:\n    def resetLoadingState(self):';
	$m.__track_lines__[235] = 'actions.tree.py, line 235:\n    if "is_loading" in self["class"]:';
	$m.__track_lines__[236] = 'actions.tree.py, line 236:\n    self["class"].remove("is_loading")';
	$m.__track_lines__[238] = 'actions.tree.py, line 238:\n    actionDelegateSelector.insert( 1, ReloadAction.isSuitableFor, ReloadAction )';
	$m.__track_lines__[241] = 'actions.tree.py, line 241:\n    class SelectRootNode( html5.Select ):';
	$m.__track_lines__[245] = 'actions.tree.py, line 245:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[246] = 'actions.tree.py, line 246:\n    super( SelectRootNode, self ).__init__( *args, **kwargs )';
	$m.__track_lines__[247] = 'actions.tree.py, line 247:\n    self.sinkEvent("onChange")';
	$m.__track_lines__[249] = 'actions.tree.py, line 249:\n    def onAttach(self):';
	$m.__track_lines__[250] = 'actions.tree.py, line 250:\n    super( SelectRootNode, self ).onAttach()';
	$m.__track_lines__[251] = 'actions.tree.py, line 251:\n    self.update()';
	$m.__track_lines__[252] = 'actions.tree.py, line 252:\n    self.parent().parent().rootNodeChangedEvent.register( self )';
	$m.__track_lines__[254] = 'actions.tree.py, line 254:\n    def onDetach(self):';
	$m.__track_lines__[255] = 'actions.tree.py, line 255:\n    self.parent().parent().rootNodeChangedEvent.unregister( self )';
	$m.__track_lines__[256] = 'actions.tree.py, line 256:\n    super( SelectRootNode, self ).onDetach()';
	$m.__track_lines__[258] = 'actions.tree.py, line 258:\n    def update(self):';
	$m.__track_lines__[259] = 'actions.tree.py, line 259:\n    self.removeAllChildren()';
	$m.__track_lines__[260] = 'actions.tree.py, line 260:\n    NetworkService.request( self.parent().parent().module, "listRootNodes",';
	$m.__track_lines__[264] = 'actions.tree.py, line 264:\n    def onRootNodeChanged(self, newNode):';
	$m.__track_lines__[265] = 'actions.tree.py, line 265:\n    for option in self._children:';
	$m.__track_lines__[266] = 'actions.tree.py, line 266:\n    if option["value"] == newNode:';
	$m.__track_lines__[267] = 'actions.tree.py, line 267:\n    option["selected"] = True';
	$m.__track_lines__[268] = 'actions.tree.py, line 268:\n    return';
	$m.__track_lines__[270] = 'actions.tree.py, line 270:\n    def onRootNodesAvaiable(self, req):';
	$m.__track_lines__[271] = 'actions.tree.py, line 271:\n    res = NetworkService.decode( req )';
	$m.__track_lines__[272] = 'actions.tree.py, line 272:\n    for node in res:';
	$m.__track_lines__[273] = 'actions.tree.py, line 273:\n    option = html5.Option()';
	$m.__track_lines__[274] = 'actions.tree.py, line 274:\n    option["value"] = node["key"]';
	$m.__track_lines__[275] = 'actions.tree.py, line 275:\n    option.appendChild( html5.TextNode( node[ "name"] ) )';
	$m.__track_lines__[276] = 'actions.tree.py, line 276:\n    if node["key"] == self.parent().parent().rootNode:';
	$m.__track_lines__[277] = 'actions.tree.py, line 277:\n    option["selected"] = True';
	$m.__track_lines__[278] = 'actions.tree.py, line 278:\n    self.appendChild( option )';
	$m.__track_lines__[280] = 'actions.tree.py, line 280:\n    def onChange(self, event):';
	$m.__track_lines__[281] = 'actions.tree.py, line 281:\n    newRootNode = self["options"].item(self["selectedIndex"]).value';
	$m.__track_lines__[282] = 'actions.tree.py, line 282:\n    self.parent().parent().setRootNode( newRootNode )';
	$m.__track_lines__[285] = 'actions.tree.py, line 284:\n    @staticmethod ... def isSuitableFor( module, handler, actionName ):';
	$m.__track_lines__[286] = 'actions.tree.py, line 286:\n    return actionName=="selectrootnode" and (handler == "tree" or handler.startswith("tree."))';
	$m.__track_lines__[288] = 'actions.tree.py, line 288:\n    actionDelegateSelector.insert( 1, SelectRootNode.isSuitableFor, SelectRootNode )';
	$m.__track_lines__[291] = 'actions.tree.py, line 291:\n    class ReturnSelectionAction( html5.ext.Button ):';
	$m.__track_lines__[296] = 'actions.tree.py, line 296:\n    def __init__(self, *args, **kwargs ):';
	$m.__track_lines__[297] = 'actions.tree.py, line 297:\n    super( ReturnSelectionAction, self ).__init__( translate("Select"), *args, **kwargs )';
	$m.__track_lines__[298] = 'actions.tree.py, line 298:\n    self["class"] = "icon activateselection"';
	$m.__track_lines__[300] = 'actions.tree.py, line 300:\n    def onClick(self, sender=None):';
	$m.__track_lines__[301] = 'actions.tree.py, line 301:\n    self.parent().parent().returnCurrentSelection()';
	$m.__track_lines__[304] = 'actions.tree.py, line 303:\n    @staticmethod ... def isSuitableFor( modul, handler, actionName ):';
	$m.__track_lines__[305] = 'actions.tree.py, line 305:\n    correctHandler = handler == "tree" or handler.startswith("tree.")';
	$m.__track_lines__[306] = 'actions.tree.py, line 306:\n    return( actionName=="select" and  correctHandler)';
	$m.__track_lines__[308] = 'actions.tree.py, line 308:\n    actionDelegateSelector.insert( 3, ReturnSelectionAction.isSuitableFor, ReturnSelectionAction )';


	$pyjs['track']['module']='actions.tree';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=1;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['html5'] = $p['___import___']('html5', 'actions');
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=2;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['NetworkService'] = $p['___import___']('network.NetworkService', 'actions', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=3;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['actionDelegateSelector'] = $p['___import___']('priorityqueue.actionDelegateSelector', 'actions', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=4;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['EditWidget'] = $p['___import___']('widgets.edit.EditWidget', 'actions', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=5;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['conf'] = $p['___import___']('config.conf', 'actions', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=6;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Pane'] = $p['___import___']('pane.Pane', 'actions', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=7;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['translate'] = $p['___import___']('i18n.translate', 'actions', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=9;
	$m['AddLeafAction'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'actions.tree';
		$pyjs['track']['lineno']=13;
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

			$pyjs['track']={'module':'actions.tree', 'lineno':13};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.tree';
			$pyjs['track']['lineno']=13;
			$pyjs['track']['lineno']=14;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['AddLeafAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})(), '__init__', args, kwargs, [{}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Add');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			$pyjs['track']['lineno']=15;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('class', 'icon add leaf');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=18;
		$method = $pyjs__bind_method2('isSuitableFor', function(module, handler, actionName) {
			var $and8,$and9,correctHandler,isDisabled,$or2,$or5,$or4,$or6,$or1,$or3,$and1,$and2,$and3,$and4,$and5,$and6,$and7,$and10,correctAction,hasAccess,$add2,$add1;
			$pyjs['track']={'module':'actions.tree', 'lineno':18};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.tree';
			$pyjs['track']['lineno']=18;
			$pyjs['track']['lineno']=19;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($or1=(module === null))?$or1:!(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('modules')['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})()['__contains__'](module)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})()) {
				$pyjs['track']['lineno']=20;
				$pyjs['track']['lineno']=20;
				var $pyjs__ret = false;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=22;
			correctAction = $p['op_eq'](actionName, 'add.leaf');
			$pyjs['track']['lineno']=23;
			correctHandler = ($p['bool']($or3=$p['op_eq'](handler, 'tree'))?$or3:(function(){try{try{$pyjs['in_try_except'] += 1;
			return handler['startswith']('tree.');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})());
			$pyjs['track']['lineno']=24;
			hasAccess = ($p['bool']($and1=$m['conf']['__getitem__']('currentUser'))?($p['bool']($or5=$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']('root'))?$or5:$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']($p['__op_add']($add1=module,$add2='-add'))):$and1);
			$pyjs['track']['lineno']=25;
			isDisabled = ($p['bool']($and3=(module !== null))?($p['bool']($and4=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('modules')['__getitem__'](module)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})()['__contains__']('disabledFunctions'))?($p['bool']($and5=$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('disabledFunctions'))?$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('disabledFunctions')['__contains__']('add-leaf'):$and5):$and4):$and3);
			$pyjs['track']['lineno']=27;
			$pyjs['track']['lineno']=27;
			var $pyjs__ret = ($p['bool']($and7=correctAction)?($p['bool']($and8=correctHandler)?($p['bool']($and9=hasAccess)?!$p['bool'](isDisabled):$and9):$and8):$and7);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['module'],['handler'],['actionName']]);
		$cls_definition['isSuitableFor'] = $method;
		$pyjs['track']['lineno']=29;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
			var edwg,pane;
			$pyjs['track']={'module':'actions.tree', 'lineno':29};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.tree';
			$pyjs['track']['lineno']=29;
			$pyjs['track']['lineno']=30;
			pane = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(null, $m['Pane'], null, null, [{'closeable':true}, 'Add']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
			$pyjs['track']['lineno']=31;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['conf']['__getitem__']('mainWindow'), 'stackPane', null, null, [{'iconClasses':(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('modul_%s', $p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})(), 'module'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})(), 'apptype_tree', 'action_add_leaf']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})()}, pane]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
			$pyjs['track']['lineno']=32;
			edwg = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(null, $m['EditWidget'], null, null, [{'node':$p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})(), 'node'), 'skelType':'leaf'}, $p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})(), 'module'), $p['getattr']($m['EditWidget'], 'appTree')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
			$pyjs['track']['lineno']=33;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return pane['addWidget'](edwg);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
			$pyjs['track']['lineno']=34;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return pane['focus']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=36;
		$method = $pyjs__bind_method2('resetLoadingState', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'actions.tree', 'lineno':36};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.tree';
			$pyjs['track']['lineno']=36;
			$pyjs['track']['lineno']=37;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['resetLoadingState'] = $method;
		$pyjs['track']['lineno']=9;
		var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Button'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('AddLeafAction', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=39;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $p['getattr']($m['AddLeafAction'], 'isSuitableFor'), $m['AddLeafAction']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
	$pyjs['track']['lineno']=42;
	$m['AddNodeAction'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'actions.tree';
		$pyjs['track']['lineno']=46;
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

			$pyjs['track']={'module':'actions.tree', 'lineno':46};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.tree';
			$pyjs['track']['lineno']=46;
			$pyjs['track']['lineno']=47;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['AddNodeAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})(), '__init__', args, kwargs, [{}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Add');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
			$pyjs['track']['lineno']=48;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('class', 'icon add node');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=51;
		$method = $pyjs__bind_method2('isSuitableFor', function(module, handler, actionName) {
			var $and20,correctHandler,isDisabled,$or7,correctAction,$or9,$or8,$and12,$and13,$and11,$and16,$and17,$and14,$and15,$and18,$and19,hasAccess,$add3,$or11,$or10,$add4,$or12;
			$pyjs['track']={'module':'actions.tree', 'lineno':51};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.tree';
			$pyjs['track']['lineno']=51;
			$pyjs['track']['lineno']=52;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($or7=(module === null))?$or7:!(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('modules')['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})()['__contains__'](module)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})()) {
				$pyjs['track']['lineno']=53;
				$pyjs['track']['lineno']=53;
				var $pyjs__ret = false;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=55;
			correctAction = $p['op_eq'](actionName, 'add.node');
			$pyjs['track']['lineno']=56;
			correctHandler = ($p['bool']($or9=$p['op_eq'](handler, 'tree'))?$or9:(function(){try{try{$pyjs['in_try_except'] += 1;
			return handler['startswith']('tree.');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})());
			$pyjs['track']['lineno']=57;
			hasAccess = ($p['bool']($and11=$m['conf']['__getitem__']('currentUser'))?($p['bool']($or11=$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']('root'))?$or11:$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']($p['__op_add']($add3=module,$add4='-add'))):$and11);
			$pyjs['track']['lineno']=58;
			isDisabled = ($p['bool']($and13=(module !== null))?($p['bool']($and14=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('modules')['__getitem__'](module)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})()['__contains__']('disabledFunctions'))?($p['bool']($and15=$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('disabledFunctions'))?$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('disabledFunctions')['__contains__']('add-node'):$and15):$and14):$and13);
			$pyjs['track']['lineno']=60;
			$pyjs['track']['lineno']=60;
			var $pyjs__ret = ($p['bool']($and17=correctAction)?($p['bool']($and18=correctHandler)?($p['bool']($and19=hasAccess)?!$p['bool'](isDisabled):$and19):$and18):$and17);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['module'],['handler'],['actionName']]);
		$cls_definition['isSuitableFor'] = $method;
		$pyjs['track']['lineno']=62;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
			var edwg,pane;
			$pyjs['track']={'module':'actions.tree', 'lineno':62};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.tree';
			$pyjs['track']['lineno']=62;
			$pyjs['track']['lineno']=63;
			pane = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(null, $m['Pane'], null, null, [{'closeable':true, 'iconClasses':(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('modul_%s', $p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})(), 'module'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})(), 'apptype_tree', 'action_add_node']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})()}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Add');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})();
			$pyjs['track']['lineno']=64;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('mainWindow')['stackPane'](pane);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})();
			$pyjs['track']['lineno']=65;
			edwg = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(null, $m['EditWidget'], null, null, [{'node':$p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})(), 'node'), 'skelType':'node'}, $p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})(), 'module'), $p['getattr']($m['EditWidget'], 'appTree')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})();
			$pyjs['track']['lineno']=66;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return pane['addWidget'](edwg);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})();
			$pyjs['track']['lineno']=67;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return pane['focus']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=69;
		$method = $pyjs__bind_method2('resetLoadingState', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'actions.tree', 'lineno':69};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.tree';
			$pyjs['track']['lineno']=69;
			$pyjs['track']['lineno']=70;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['resetLoadingState'] = $method;
		$pyjs['track']['lineno']=42;
		var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Button'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('AddNodeAction', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=72;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $p['getattr']($m['AddNodeAction'], 'isSuitableFor'), $m['AddNodeAction']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})();
	$pyjs['track']['lineno']=75;
	$m['EditAction'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'actions.tree';
		$pyjs['track']['lineno']=80;
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

			$pyjs['track']={'module':'actions.tree', 'lineno':80};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.tree';
			$pyjs['track']['lineno']=80;
			$pyjs['track']['lineno']=81;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['EditAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})(), '__init__', args, kwargs, [{}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Edit');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})();
			$pyjs['track']['lineno']=82;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('class', 'icon edit');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})();
			$pyjs['track']['lineno']=83;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('disabled', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})();
			$pyjs['track']['lineno']=84;
			self['isDisabled'] = true;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=86;
		$method = $pyjs__bind_method2('onAttach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'actions.tree', 'lineno':86};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.tree';
			$pyjs['track']['lineno']=86;
			$pyjs['track']['lineno']=87;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['EditAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})()['onAttach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})();
			$pyjs['track']['lineno']=88;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})()['selectionChangedEvent']['register'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})();
			$pyjs['track']['lineno']=89;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})()['selectionActivatedEvent']['register'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onAttach'] = $method;
		$pyjs['track']['lineno']=91;
		$method = $pyjs__bind_method2('onDetach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'actions.tree', 'lineno':91};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.tree';
			$pyjs['track']['lineno']=91;
			$pyjs['track']['lineno']=92;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})()['selectionChangedEvent']['unregister'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})();
			$pyjs['track']['lineno']=93;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})()['selectionActivatedEvent']['unregister'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})();
			$pyjs['track']['lineno']=94;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['EditAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})()['onDetach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onDetach'] = $method;
		$pyjs['track']['lineno']=96;
		$method = $pyjs__bind_method2('onSelectionActivated', function(table, selection) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				table = arguments[1];
				selection = arguments[2];
			}
			var edwg,skelType,pane,$and22,$and21;
			$pyjs['track']={'module':'actions.tree', 'lineno':96};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.tree';
			$pyjs['track']['lineno']=96;
			$pyjs['track']['lineno']=97;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and21=!$p['bool']($p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})(), 'isSelector')))?$p['op_eq']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len'](selection);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})(), 1):$and21));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})()) {
				$pyjs['track']['lineno']=98;
				pane = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call(null, $m['Pane'], null, null, [{'closeable':true, 'iconClasses':(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('modul_%s', $p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})(), 'module'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})(), 'apptype_tree', 'action_edit']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})()}, (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['translate']('Edit');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})();
				$pyjs['track']['lineno']=99;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['conf']['__getitem__']('mainWindow')['stackPane'](pane);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})();
				$pyjs['track']['lineno']=100;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](selection['__getitem__'](0), $p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})(), 'nodeWidget'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})()) {
					$pyjs['track']['lineno']=101;
					skelType = 'node';
				}
				else if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](selection['__getitem__'](0), $p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})(), 'leafWidget'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})()) {
					$pyjs['track']['lineno']=103;
					skelType = 'leaf';
				}
				else {
					$pyjs['track']['lineno']=105;
					$pyjs['__active_exception_stack__'] = null;
					throw ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['ValueError']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['sprintf']('Unknown selection type: %s', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['str']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['type'](selection['__getitem__'](0));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_88_err){if (!$p['isinstance']($pyjs_dbg_88_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_88_err);}throw $pyjs_dbg_88_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_89_err){if (!$p['isinstance']($pyjs_dbg_89_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_89_err);}throw $pyjs_dbg_89_err;
}})());
				}
				$pyjs['track']['lineno']=106;
				edwg = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call(null, $m['EditWidget'], null, null, [{'key':$p['getattr'](selection['__getitem__'](0), 'data')['__getitem__']('key'), 'skelType':skelType}, $p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_90_err){if (!$p['isinstance']($pyjs_dbg_90_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_90_err);}throw $pyjs_dbg_90_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_91_err){if (!$p['isinstance']($pyjs_dbg_91_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_91_err);}throw $pyjs_dbg_91_err;
}})(), 'module'), $p['getattr']($m['EditWidget'], 'appTree')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_92_err){if (!$p['isinstance']($pyjs_dbg_92_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_92_err);}throw $pyjs_dbg_92_err;
}})();
				$pyjs['track']['lineno']=107;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return pane['addWidget'](edwg);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_93_err){if (!$p['isinstance']($pyjs_dbg_93_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_93_err);}throw $pyjs_dbg_93_err;
}})();
				$pyjs['track']['lineno']=108;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return pane['focus']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_94_err){if (!$p['isinstance']($pyjs_dbg_94_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_94_err);}throw $pyjs_dbg_94_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['table'],['selection']]);
		$cls_definition['onSelectionActivated'] = $method;
		$pyjs['track']['lineno']=110;
		$method = $pyjs__bind_method2('onSelectionChanged', function(table, selection) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				table = arguments[1];
				selection = arguments[2];
			}

			$pyjs['track']={'module':'actions.tree', 'lineno':110};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.tree';
			$pyjs['track']['lineno']=110;
			$pyjs['track']['lineno']=111;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len'](selection);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_95_err){if (!$p['isinstance']($pyjs_dbg_95_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_95_err);}throw $pyjs_dbg_95_err;
}})(), 0) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_96_err){if (!$p['isinstance']($pyjs_dbg_96_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_96_err);}throw $pyjs_dbg_96_err;
}})()) {
				$pyjs['track']['lineno']=112;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, 'isDisabled'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_97_err){if (!$p['isinstance']($pyjs_dbg_97_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_97_err);}throw $pyjs_dbg_97_err;
}})()) {
					$pyjs['track']['lineno']=113;
					self['isDisabled'] = false;
				}
				$pyjs['track']['lineno']=114;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__setitem__']('disabled', false);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_98_err){if (!$p['isinstance']($pyjs_dbg_98_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_98_err);}throw $pyjs_dbg_98_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=116;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']($p['getattr'](self, 'isDisabled')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_99_err){if (!$p['isinstance']($pyjs_dbg_99_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_99_err);}throw $pyjs_dbg_99_err;
}})()) {
					$pyjs['track']['lineno']=117;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['__setitem__']('disabled', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_100_err){if (!$p['isinstance']($pyjs_dbg_100_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_100_err);}throw $pyjs_dbg_100_err;
}})();
					$pyjs['track']['lineno']=118;
					self['isDisabled'] = true;
				}
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['table'],['selection']]);
		$cls_definition['onSelectionChanged'] = $method;
		$pyjs['track']['lineno']=121;
		$method = $pyjs__bind_method2('isSuitableFor', function(module, handler, actionName) {
			var $and29,$and28,$and23,$and27,$and26,$and25,$and24,correctHandler,isDisabled,correctAction,$and30,$and31,$and32,hasAccess,$or15,$or14,$or17,$or16,$add6,$or13,$add5,$or18;
			$pyjs['track']={'module':'actions.tree', 'lineno':121};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.tree';
			$pyjs['track']['lineno']=121;
			$pyjs['track']['lineno']=122;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($or13=(module === null))?$or13:!(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('modules')['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_101_err){if (!$p['isinstance']($pyjs_dbg_101_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_101_err);}throw $pyjs_dbg_101_err;
}})()['__contains__'](module)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_102_err){if (!$p['isinstance']($pyjs_dbg_102_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_102_err);}throw $pyjs_dbg_102_err;
}})()) {
				$pyjs['track']['lineno']=123;
				$pyjs['track']['lineno']=123;
				var $pyjs__ret = false;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=125;
			correctAction = $p['op_eq'](actionName, 'edit');
			$pyjs['track']['lineno']=126;
			correctHandler = ($p['bool']($or15=$p['op_eq'](handler, 'tree'))?$or15:(function(){try{try{$pyjs['in_try_except'] += 1;
			return handler['startswith']('tree.');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_103_err){if (!$p['isinstance']($pyjs_dbg_103_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_103_err);}throw $pyjs_dbg_103_err;
}})());
			$pyjs['track']['lineno']=127;
			hasAccess = ($p['bool']($and23=$m['conf']['__getitem__']('currentUser'))?($p['bool']($or17=$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']('root'))?$or17:$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']($p['__op_add']($add5=module,$add6='-edit'))):$and23);
			$pyjs['track']['lineno']=128;
			isDisabled = ($p['bool']($and25=(module !== null))?($p['bool']($and26=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('modules')['__getitem__'](module)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_104_err){if (!$p['isinstance']($pyjs_dbg_104_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_104_err);}throw $pyjs_dbg_104_err;
}})()['__contains__']('disabledFunctions'))?($p['bool']($and27=$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('disabledFunctions'))?$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('disabledFunctions')['__contains__']('edit'):$and27):$and26):$and25);
			$pyjs['track']['lineno']=129;
			$pyjs['track']['lineno']=129;
			var $pyjs__ret = ($p['bool']($and29=correctAction)?($p['bool']($and30=correctHandler)?($p['bool']($and31=hasAccess)?!$p['bool'](isDisabled):$and31):$and30):$and29);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['module'],['handler'],['actionName']]);
		$cls_definition['isSuitableFor'] = $method;
		$pyjs['track']['lineno']=131;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
			var edwg,skelType,selection,$iter1_nextval,$iter1_idx,$iter1_iter,s,$iter1_array,pane,$pyjs__trackstack_size_1,$iter1_type;
			$pyjs['track']={'module':'actions.tree', 'lineno':131};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.tree';
			$pyjs['track']['lineno']=131;
			$pyjs['track']['lineno']=132;
			selection = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_105_err){if (!$p['isinstance']($pyjs_dbg_105_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_105_err);}throw $pyjs_dbg_105_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_106_err){if (!$p['isinstance']($pyjs_dbg_106_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_106_err);}throw $pyjs_dbg_106_err;
}})()['getCurrentSelection']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_107_err){if (!$p['isinstance']($pyjs_dbg_107_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_107_err);}throw $pyjs_dbg_107_err;
}})();
			$pyjs['track']['lineno']=133;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool'](selection));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_108_err){if (!$p['isinstance']($pyjs_dbg_108_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_108_err);}throw $pyjs_dbg_108_err;
}})()) {
				$pyjs['track']['lineno']=134;
				$pyjs['track']['lineno']=134;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=135;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['printFunc']([selection], 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_109_err){if (!$p['isinstance']($pyjs_dbg_109_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_109_err);}throw $pyjs_dbg_109_err;
}})();
			$pyjs['track']['lineno']=136;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter1_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return selection;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_110_err){if (!$p['isinstance']($pyjs_dbg_110_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_110_err);}throw $pyjs_dbg_110_err;
}})();
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				s = $iter1_nextval['$nextval'];
				$pyjs['track']['lineno']=137;
				pane = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call(null, $m['Pane'], null, null, [{'closeable':true}, (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['translate']('Edit');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_111_err){if (!$p['isinstance']($pyjs_dbg_111_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_111_err);}throw $pyjs_dbg_111_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_112_err){if (!$p['isinstance']($pyjs_dbg_112_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_112_err);}throw $pyjs_dbg_112_err;
}})();
				$pyjs['track']['lineno']=138;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call($m['conf']['__getitem__']('mainWindow'), 'stackPane', null, null, [{'focus':true}, pane]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_113_err){if (!$p['isinstance']($pyjs_dbg_113_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_113_err);}throw $pyjs_dbg_113_err;
}})();
				$pyjs['track']['lineno']=139;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](s, $p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_114_err){if (!$p['isinstance']($pyjs_dbg_114_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_114_err);}throw $pyjs_dbg_114_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_115_err){if (!$p['isinstance']($pyjs_dbg_115_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_115_err);}throw $pyjs_dbg_115_err;
}})(), 'nodeWidget'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_116_err){if (!$p['isinstance']($pyjs_dbg_116_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_116_err);}throw $pyjs_dbg_116_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_117_err){if (!$p['isinstance']($pyjs_dbg_117_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_117_err);}throw $pyjs_dbg_117_err;
}})()) {
					$pyjs['track']['lineno']=140;
					skelType = 'node';
				}
				else if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](s, $p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_118_err){if (!$p['isinstance']($pyjs_dbg_118_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_118_err);}throw $pyjs_dbg_118_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_119_err){if (!$p['isinstance']($pyjs_dbg_119_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_119_err);}throw $pyjs_dbg_119_err;
}})(), 'leafWidget'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_120_err){if (!$p['isinstance']($pyjs_dbg_120_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_120_err);}throw $pyjs_dbg_120_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_121_err){if (!$p['isinstance']($pyjs_dbg_121_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_121_err);}throw $pyjs_dbg_121_err;
}})()) {
					$pyjs['track']['lineno']=142;
					skelType = 'leaf';
				}
				else {
					$pyjs['track']['lineno']=144;
					$pyjs['__active_exception_stack__'] = null;
					throw ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['ValueError']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['sprintf']('Unknown selection type: %s', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['str']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['type'](s);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_122_err){if (!$p['isinstance']($pyjs_dbg_122_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_122_err);}throw $pyjs_dbg_122_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_123_err){if (!$p['isinstance']($pyjs_dbg_123_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_123_err);}throw $pyjs_dbg_123_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_124_err){if (!$p['isinstance']($pyjs_dbg_124_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_124_err);}throw $pyjs_dbg_124_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_125_err){if (!$p['isinstance']($pyjs_dbg_125_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_125_err);}throw $pyjs_dbg_125_err;
}})());
				}
				$pyjs['track']['lineno']=145;
				edwg = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call(null, $m['EditWidget'], null, null, [{'key':$p['getattr'](s, 'data')['__getitem__']('key'), 'skelType':skelType, 'iconClasses':(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('modul_%s', $p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_128_err){if (!$p['isinstance']($pyjs_dbg_128_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_128_err);}throw $pyjs_dbg_128_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_129_err){if (!$p['isinstance']($pyjs_dbg_129_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_129_err);}throw $pyjs_dbg_129_err;
}})(), 'module'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_130_err){if (!$p['isinstance']($pyjs_dbg_130_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_130_err);}throw $pyjs_dbg_130_err;
}})(), 'apptype_tree', 'action_edit']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_131_err){if (!$p['isinstance']($pyjs_dbg_131_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_131_err);}throw $pyjs_dbg_131_err;
}})()}, $p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_126_err){if (!$p['isinstance']($pyjs_dbg_126_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_126_err);}throw $pyjs_dbg_126_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_127_err){if (!$p['isinstance']($pyjs_dbg_127_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_127_err);}throw $pyjs_dbg_127_err;
}})(), 'module'), $p['getattr']($m['EditWidget'], 'appTree')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_132_err){if (!$p['isinstance']($pyjs_dbg_132_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_132_err);}throw $pyjs_dbg_132_err;
}})();
				$pyjs['track']['lineno']=146;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return pane['addWidget'](edwg);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_133_err){if (!$p['isinstance']($pyjs_dbg_133_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_133_err);}throw $pyjs_dbg_133_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='actions.tree';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=148;
		$method = $pyjs__bind_method2('resetLoadingState', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'actions.tree', 'lineno':148};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.tree';
			$pyjs['track']['lineno']=148;
			$pyjs['track']['lineno']=149;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['resetLoadingState'] = $method;
		$pyjs['track']['lineno']=75;
		var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Button'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('EditAction', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=151;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $p['getattr']($m['EditAction'], 'isSuitableFor'), $m['EditAction']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_134_err){if (!$p['isinstance']($pyjs_dbg_134_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_134_err);}throw $pyjs_dbg_134_err;
}})();
	$pyjs['track']['lineno']=154;
	$m['DeleteAction'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'actions.tree';
		$pyjs['track']['lineno']=159;
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

			$pyjs['track']={'module':'actions.tree', 'lineno':159};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.tree';
			$pyjs['track']['lineno']=159;
			$pyjs['track']['lineno']=160;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['DeleteAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_135_err){if (!$p['isinstance']($pyjs_dbg_135_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_135_err);}throw $pyjs_dbg_135_err;
}})(), '__init__', args, kwargs, [{}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Delete');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_136_err){if (!$p['isinstance']($pyjs_dbg_136_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_136_err);}throw $pyjs_dbg_136_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_137_err){if (!$p['isinstance']($pyjs_dbg_137_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_137_err);}throw $pyjs_dbg_137_err;
}})();
			$pyjs['track']['lineno']=161;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('class', 'icon delete');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_138_err){if (!$p['isinstance']($pyjs_dbg_138_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_138_err);}throw $pyjs_dbg_138_err;
}})();
			$pyjs['track']['lineno']=162;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('disabled', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_139_err){if (!$p['isinstance']($pyjs_dbg_139_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_139_err);}throw $pyjs_dbg_139_err;
}})();
			$pyjs['track']['lineno']=163;
			self['isDisabled'] = true;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=166;
		$method = $pyjs__bind_method2('onAttach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'actions.tree', 'lineno':166};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.tree';
			$pyjs['track']['lineno']=166;
			$pyjs['track']['lineno']=167;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['DeleteAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_140_err){if (!$p['isinstance']($pyjs_dbg_140_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_140_err);}throw $pyjs_dbg_140_err;
}})()['onAttach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_141_err){if (!$p['isinstance']($pyjs_dbg_141_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_141_err);}throw $pyjs_dbg_141_err;
}})();
			$pyjs['track']['lineno']=168;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_142_err){if (!$p['isinstance']($pyjs_dbg_142_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_142_err);}throw $pyjs_dbg_142_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_143_err){if (!$p['isinstance']($pyjs_dbg_143_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_143_err);}throw $pyjs_dbg_143_err;
}})()['selectionChangedEvent']['register'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_144_err){if (!$p['isinstance']($pyjs_dbg_144_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_144_err);}throw $pyjs_dbg_144_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onAttach'] = $method;
		$pyjs['track']['lineno']=170;
		$method = $pyjs__bind_method2('onDetach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'actions.tree', 'lineno':170};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.tree';
			$pyjs['track']['lineno']=170;
			$pyjs['track']['lineno']=171;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_145_err){if (!$p['isinstance']($pyjs_dbg_145_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_145_err);}throw $pyjs_dbg_145_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_146_err){if (!$p['isinstance']($pyjs_dbg_146_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_146_err);}throw $pyjs_dbg_146_err;
}})()['selectionChangedEvent']['unregister'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_147_err){if (!$p['isinstance']($pyjs_dbg_147_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_147_err);}throw $pyjs_dbg_147_err;
}})();
			$pyjs['track']['lineno']=172;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['DeleteAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_148_err){if (!$p['isinstance']($pyjs_dbg_148_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_148_err);}throw $pyjs_dbg_148_err;
}})()['onDetach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_149_err){if (!$p['isinstance']($pyjs_dbg_149_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_149_err);}throw $pyjs_dbg_149_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onDetach'] = $method;
		$pyjs['track']['lineno']=174;
		$method = $pyjs__bind_method2('onSelectionChanged', function(table, selection) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				table = arguments[1];
				selection = arguments[2];
			}

			$pyjs['track']={'module':'actions.tree', 'lineno':174};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.tree';
			$pyjs['track']['lineno']=174;
			$pyjs['track']['lineno']=175;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len'](selection);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_150_err){if (!$p['isinstance']($pyjs_dbg_150_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_150_err);}throw $pyjs_dbg_150_err;
}})(), 0) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_151_err){if (!$p['isinstance']($pyjs_dbg_151_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_151_err);}throw $pyjs_dbg_151_err;
}})()) {
				$pyjs['track']['lineno']=176;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, 'isDisabled'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_152_err){if (!$p['isinstance']($pyjs_dbg_152_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_152_err);}throw $pyjs_dbg_152_err;
}})()) {
					$pyjs['track']['lineno']=177;
					self['isDisabled'] = false;
				}
				$pyjs['track']['lineno']=178;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__setitem__']('disabled', false);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_153_err){if (!$p['isinstance']($pyjs_dbg_153_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_153_err);}throw $pyjs_dbg_153_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=180;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']($p['getattr'](self, 'isDisabled')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_154_err){if (!$p['isinstance']($pyjs_dbg_154_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_154_err);}throw $pyjs_dbg_154_err;
}})()) {
					$pyjs['track']['lineno']=181;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['__setitem__']('disabled', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_155_err){if (!$p['isinstance']($pyjs_dbg_155_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_155_err);}throw $pyjs_dbg_155_err;
}})();
					$pyjs['track']['lineno']=182;
					self['isDisabled'] = true;
				}
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['table'],['selection']]);
		$cls_definition['onSelectionChanged'] = $method;
		$pyjs['track']['lineno']=186;
		$method = $pyjs__bind_method2('isSuitableFor', function(module, handler, actionName) {
			var correctHandler,isDisabled,$and41,$and40,$and42,$or24,$or20,$or21,$or22,$or23,$and38,$and39,$and34,$and35,$and36,$and37,$and33,correctAction,hasAccess,$add7,$add8,$or19;
			$pyjs['track']={'module':'actions.tree', 'lineno':186};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.tree';
			$pyjs['track']['lineno']=186;
			$pyjs['track']['lineno']=187;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($or19=(module === null))?$or19:!(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('modules')['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_156_err){if (!$p['isinstance']($pyjs_dbg_156_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_156_err);}throw $pyjs_dbg_156_err;
}})()['__contains__'](module)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_157_err){if (!$p['isinstance']($pyjs_dbg_157_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_157_err);}throw $pyjs_dbg_157_err;
}})()) {
				$pyjs['track']['lineno']=188;
				$pyjs['track']['lineno']=188;
				var $pyjs__ret = false;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=190;
			correctAction = $p['op_eq'](actionName, 'delete');
			$pyjs['track']['lineno']=191;
			correctHandler = ($p['bool']($or21=$p['op_eq'](handler, 'tree'))?$or21:(function(){try{try{$pyjs['in_try_except'] += 1;
			return handler['startswith']('tree.');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_158_err){if (!$p['isinstance']($pyjs_dbg_158_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_158_err);}throw $pyjs_dbg_158_err;
}})());
			$pyjs['track']['lineno']=192;
			hasAccess = ($p['bool']($and33=$m['conf']['__getitem__']('currentUser'))?($p['bool']($or23=$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']('root'))?$or23:$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']($p['__op_add']($add7=module,$add8='-delete'))):$and33);
			$pyjs['track']['lineno']=193;
			isDisabled = ($p['bool']($and35=(module !== null))?($p['bool']($and36=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('modules')['__getitem__'](module)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_159_err){if (!$p['isinstance']($pyjs_dbg_159_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_159_err);}throw $pyjs_dbg_159_err;
}})()['__contains__']('disabledFunctions'))?($p['bool']($and37=$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('disabledFunctions'))?$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('disabledFunctions')['__contains__']('delete'):$and37):$and36):$and35);
			$pyjs['track']['lineno']=195;
			$pyjs['track']['lineno']=195;
			var $pyjs__ret = ($p['bool']($and39=correctAction)?($p['bool']($and40=correctHandler)?($p['bool']($and41=hasAccess)?!$p['bool'](isDisabled):$and41):$and40):$and39);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['module'],['handler'],['actionName']]);
		$cls_definition['isSuitableFor'] = $method;
		$pyjs['track']['lineno']=197;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
			var selection,d;
			$pyjs['track']={'module':'actions.tree', 'lineno':197};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.tree';
			$pyjs['track']['lineno']=197;
			$pyjs['track']['lineno']=198;
			selection = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_160_err){if (!$p['isinstance']($pyjs_dbg_160_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_160_err);}throw $pyjs_dbg_160_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_161_err){if (!$p['isinstance']($pyjs_dbg_161_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_161_err);}throw $pyjs_dbg_161_err;
}})()['getCurrentSelection']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_162_err){if (!$p['isinstance']($pyjs_dbg_162_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_162_err);}throw $pyjs_dbg_162_err;
}})();
			$pyjs['track']['lineno']=199;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool'](selection));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_163_err){if (!$p['isinstance']($pyjs_dbg_163_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_163_err);}throw $pyjs_dbg_163_err;
}})()) {
				$pyjs['track']['lineno']=200;
				$pyjs['track']['lineno']=200;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=201;
			d = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['html5']['ext'], 'YesNoDialog', null, null, [{'title':(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Delete them?');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_166_err){if (!$p['isinstance']($pyjs_dbg_166_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_166_err);}throw $pyjs_dbg_166_err;
}})(), 'yesCallback':$p['getattr'](self, 'doDelete'), 'yesLabel':(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Delete');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_167_err){if (!$p['isinstance']($pyjs_dbg_167_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_167_err);}throw $pyjs_dbg_167_err;
}})(), 'noLabel':(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Keep');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_168_err){if (!$p['isinstance']($pyjs_dbg_168_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_168_err);}throw $pyjs_dbg_168_err;
}})()}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(null, $m['translate'], null, null, [{'amt':(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len'](selection);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_164_err){if (!$p['isinstance']($pyjs_dbg_164_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_164_err);}throw $pyjs_dbg_164_err;
}})()}, 'Delete {amt} Entries?']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_165_err){if (!$p['isinstance']($pyjs_dbg_165_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_165_err);}throw $pyjs_dbg_165_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_169_err){if (!$p['isinstance']($pyjs_dbg_169_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_169_err);}throw $pyjs_dbg_169_err;
}})();
			$pyjs['track']['lineno']=202;
			d['deleteList'] = selection;
			$pyjs['track']['lineno']=203;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return d['__getitem__']('class')['append']('delete');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_170_err){if (!$p['isinstance']($pyjs_dbg_170_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_170_err);}throw $pyjs_dbg_170_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=205;
		$method = $pyjs__bind_method2('doDelete', function(dialog) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				dialog = arguments[1];
			}
			var $iter2_nextval,$iter2_type,$iter2_iter,deleteList,$iter2_idx,$pyjs__trackstack_size_1,x,$iter2_array;
			$pyjs['track']={'module':'actions.tree', 'lineno':205};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.tree';
			$pyjs['track']['lineno']=205;
			$pyjs['track']['lineno']=206;
			deleteList = $p['getattr'](dialog, 'deleteList');
			$pyjs['track']['lineno']=207;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter2_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return deleteList;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_171_err){if (!$p['isinstance']($pyjs_dbg_171_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_171_err);}throw $pyjs_dbg_171_err;
}})();
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				x = $iter2_nextval['$nextval'];
				$pyjs['track']['lineno']=208;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](x, $p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_172_err){if (!$p['isinstance']($pyjs_dbg_172_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_172_err);}throw $pyjs_dbg_172_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_173_err){if (!$p['isinstance']($pyjs_dbg_173_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_173_err);}throw $pyjs_dbg_173_err;
}})(), 'nodeWidget'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_174_err){if (!$p['isinstance']($pyjs_dbg_174_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_174_err);}throw $pyjs_dbg_174_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_175_err){if (!$p['isinstance']($pyjs_dbg_175_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_175_err);}throw $pyjs_dbg_175_err;
}})()) {
					$pyjs['track']['lineno']=209;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'secure':true, 'modifies':true}, $p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_176_err){if (!$p['isinstance']($pyjs_dbg_176_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_176_err);}throw $pyjs_dbg_176_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_177_err){if (!$p['isinstance']($pyjs_dbg_177_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_177_err);}throw $pyjs_dbg_177_err;
}})(), 'module'), 'delete/node', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['dict']([['key', $p['getattr'](x, 'data')['__getitem__']('key')]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_178_err){if (!$p['isinstance']($pyjs_dbg_178_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_178_err);}throw $pyjs_dbg_178_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_179_err){if (!$p['isinstance']($pyjs_dbg_179_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_179_err);}throw $pyjs_dbg_179_err;
}})();
				}
				else if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](x, $p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_180_err){if (!$p['isinstance']($pyjs_dbg_180_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_180_err);}throw $pyjs_dbg_180_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_181_err){if (!$p['isinstance']($pyjs_dbg_181_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_181_err);}throw $pyjs_dbg_181_err;
}})(), 'leafWidget'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_182_err){if (!$p['isinstance']($pyjs_dbg_182_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_182_err);}throw $pyjs_dbg_182_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_183_err){if (!$p['isinstance']($pyjs_dbg_183_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_183_err);}throw $pyjs_dbg_183_err;
}})()) {
					$pyjs['track']['lineno']=211;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'secure':true, 'modifies':true}, $p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_184_err){if (!$p['isinstance']($pyjs_dbg_184_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_184_err);}throw $pyjs_dbg_184_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_185_err){if (!$p['isinstance']($pyjs_dbg_185_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_185_err);}throw $pyjs_dbg_185_err;
}})(), 'module'), 'delete/leaf', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['dict']([['key', $p['getattr'](x, 'data')['__getitem__']('key')]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_186_err){if (!$p['isinstance']($pyjs_dbg_186_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_186_err);}throw $pyjs_dbg_186_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_187_err){if (!$p['isinstance']($pyjs_dbg_187_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_187_err);}throw $pyjs_dbg_187_err;
}})();
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='actions.tree';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['dialog']]);
		$cls_definition['doDelete'] = $method;
		$pyjs['track']['lineno']=213;
		$method = $pyjs__bind_method2('resetLoadingState', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'actions.tree', 'lineno':213};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.tree';
			$pyjs['track']['lineno']=213;
			$pyjs['track']['lineno']=214;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['resetLoadingState'] = $method;
		$pyjs['track']['lineno']=154;
		var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Button'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('DeleteAction', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=216;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $p['getattr']($m['DeleteAction'], 'isSuitableFor'), $m['DeleteAction']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_188_err){if (!$p['isinstance']($pyjs_dbg_188_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_188_err);}throw $pyjs_dbg_188_err;
}})();
	$pyjs['track']['lineno']=218;
	$m['ReloadAction'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'actions.tree';
		$pyjs['track']['lineno']=222;
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

			$pyjs['track']={'module':'actions.tree', 'lineno':222};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.tree';
			$pyjs['track']['lineno']=222;
			$pyjs['track']['lineno']=223;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['ReloadAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_189_err){if (!$p['isinstance']($pyjs_dbg_189_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_189_err);}throw $pyjs_dbg_189_err;
}})(), '__init__', args, kwargs, [{}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Reload');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_190_err){if (!$p['isinstance']($pyjs_dbg_190_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_190_err);}throw $pyjs_dbg_190_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_191_err){if (!$p['isinstance']($pyjs_dbg_191_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_191_err);}throw $pyjs_dbg_191_err;
}})();
			$pyjs['track']['lineno']=224;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('class', 'icon reload');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_192_err){if (!$p['isinstance']($pyjs_dbg_192_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_192_err);}throw $pyjs_dbg_192_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=227;
		$method = $pyjs__bind_method2('isSuitableFor', function(module, handler, actionName) {
			var $and44,$and43,$or25,$or26;
			$pyjs['track']={'module':'actions.tree', 'lineno':227};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.tree';
			$pyjs['track']['lineno']=227;
			$pyjs['track']['lineno']=228;
			$pyjs['track']['lineno']=228;
			var $pyjs__ret = ($p['bool']($and43=$p['op_eq'](actionName, 'reload'))?($p['bool']($or25=$p['op_eq'](handler, 'tree'))?$or25:(function(){try{try{$pyjs['in_try_except'] += 1;
			return handler['startswith']('tree.');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_193_err){if (!$p['isinstance']($pyjs_dbg_193_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_193_err);}throw $pyjs_dbg_193_err;
}})()):$and43);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['module'],['handler'],['actionName']]);
		$cls_definition['isSuitableFor'] = $method;
		$pyjs['track']['lineno']=230;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];

			$pyjs['track']={'module':'actions.tree', 'lineno':230};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.tree';
			$pyjs['track']['lineno']=230;
			$pyjs['track']['lineno']=231;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__getitem__']('class')['append']('is_loading');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_194_err){if (!$p['isinstance']($pyjs_dbg_194_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_194_err);}throw $pyjs_dbg_194_err;
}})();
			$pyjs['track']['lineno']=232;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['NetworkService']['notifyChange']($p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_195_err){if (!$p['isinstance']($pyjs_dbg_195_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_195_err);}throw $pyjs_dbg_195_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_196_err){if (!$p['isinstance']($pyjs_dbg_196_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_196_err);}throw $pyjs_dbg_196_err;
}})(), 'module'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_197_err){if (!$p['isinstance']($pyjs_dbg_197_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_197_err);}throw $pyjs_dbg_197_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=234;
		$method = $pyjs__bind_method2('resetLoadingState', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'actions.tree', 'lineno':234};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.tree';
			$pyjs['track']['lineno']=234;
			$pyjs['track']['lineno']=235;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](self['__getitem__']('class')['__contains__']('is_loading'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_198_err){if (!$p['isinstance']($pyjs_dbg_198_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_198_err);}throw $pyjs_dbg_198_err;
}})()) {
				$pyjs['track']['lineno']=236;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__getitem__']('class')['remove']('is_loading');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_199_err){if (!$p['isinstance']($pyjs_dbg_199_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_199_err);}throw $pyjs_dbg_199_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['resetLoadingState'] = $method;
		$pyjs['track']['lineno']=218;
		var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Button'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('ReloadAction', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=238;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $p['getattr']($m['ReloadAction'], 'isSuitableFor'), $m['ReloadAction']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_200_err){if (!$p['isinstance']($pyjs_dbg_200_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_200_err);}throw $pyjs_dbg_200_err;
}})();
	$pyjs['track']['lineno']=241;
	$m['SelectRootNode'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'actions.tree';
		$pyjs['track']['lineno']=245;
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

			$pyjs['track']={'module':'actions.tree', 'lineno':245};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.tree';
			$pyjs['track']['lineno']=245;
			$pyjs['track']['lineno']=246;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['SelectRootNode'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_201_err){if (!$p['isinstance']($pyjs_dbg_201_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_201_err);}throw $pyjs_dbg_201_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_202_err){if (!$p['isinstance']($pyjs_dbg_202_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_202_err);}throw $pyjs_dbg_202_err;
}})();
			$pyjs['track']['lineno']=247;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['sinkEvent']('onChange');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_203_err){if (!$p['isinstance']($pyjs_dbg_203_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_203_err);}throw $pyjs_dbg_203_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=249;
		$method = $pyjs__bind_method2('onAttach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'actions.tree', 'lineno':249};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.tree';
			$pyjs['track']['lineno']=249;
			$pyjs['track']['lineno']=250;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['SelectRootNode'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_204_err){if (!$p['isinstance']($pyjs_dbg_204_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_204_err);}throw $pyjs_dbg_204_err;
}})()['onAttach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_205_err){if (!$p['isinstance']($pyjs_dbg_205_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_205_err);}throw $pyjs_dbg_205_err;
}})();
			$pyjs['track']['lineno']=251;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['update']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_206_err){if (!$p['isinstance']($pyjs_dbg_206_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_206_err);}throw $pyjs_dbg_206_err;
}})();
			$pyjs['track']['lineno']=252;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_207_err){if (!$p['isinstance']($pyjs_dbg_207_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_207_err);}throw $pyjs_dbg_207_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_208_err){if (!$p['isinstance']($pyjs_dbg_208_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_208_err);}throw $pyjs_dbg_208_err;
}})()['rootNodeChangedEvent']['register'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_209_err){if (!$p['isinstance']($pyjs_dbg_209_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_209_err);}throw $pyjs_dbg_209_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onAttach'] = $method;
		$pyjs['track']['lineno']=254;
		$method = $pyjs__bind_method2('onDetach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'actions.tree', 'lineno':254};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.tree';
			$pyjs['track']['lineno']=254;
			$pyjs['track']['lineno']=255;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_210_err){if (!$p['isinstance']($pyjs_dbg_210_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_210_err);}throw $pyjs_dbg_210_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_211_err){if (!$p['isinstance']($pyjs_dbg_211_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_211_err);}throw $pyjs_dbg_211_err;
}})()['rootNodeChangedEvent']['unregister'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_212_err){if (!$p['isinstance']($pyjs_dbg_212_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_212_err);}throw $pyjs_dbg_212_err;
}})();
			$pyjs['track']['lineno']=256;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['SelectRootNode'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_213_err){if (!$p['isinstance']($pyjs_dbg_213_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_213_err);}throw $pyjs_dbg_213_err;
}})()['onDetach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_214_err){if (!$p['isinstance']($pyjs_dbg_214_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_214_err);}throw $pyjs_dbg_214_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onDetach'] = $method;
		$pyjs['track']['lineno']=258;
		$method = $pyjs__bind_method2('update', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'actions.tree', 'lineno':258};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.tree';
			$pyjs['track']['lineno']=258;
			$pyjs['track']['lineno']=259;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['removeAllChildren']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_215_err){if (!$p['isinstance']($pyjs_dbg_215_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_215_err);}throw $pyjs_dbg_215_err;
}})();
			$pyjs['track']['lineno']=260;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'successHandler':$p['getattr'](self, 'onRootNodesAvaiable'), 'cacheable':true}, $p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_216_err){if (!$p['isinstance']($pyjs_dbg_216_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_216_err);}throw $pyjs_dbg_216_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_217_err){if (!$p['isinstance']($pyjs_dbg_217_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_217_err);}throw $pyjs_dbg_217_err;
}})(), 'module'), 'listRootNodes']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_218_err){if (!$p['isinstance']($pyjs_dbg_218_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_218_err);}throw $pyjs_dbg_218_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['update'] = $method;
		$pyjs['track']['lineno']=264;
		$method = $pyjs__bind_method2('onRootNodeChanged', function(newNode) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				newNode = arguments[1];
			}
			var $iter3_idx,option,$iter3_type,$iter3_iter,$iter3_array,$pyjs__trackstack_size_1,$iter3_nextval;
			$pyjs['track']={'module':'actions.tree', 'lineno':264};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.tree';
			$pyjs['track']['lineno']=264;
			$pyjs['track']['lineno']=265;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter3_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, '_children');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_219_err){if (!$p['isinstance']($pyjs_dbg_219_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_219_err);}throw $pyjs_dbg_219_err;
}})();
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				option = $iter3_nextval['$nextval'];
				$pyjs['track']['lineno']=266;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq'](option['__getitem__']('value'), newNode));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_220_err){if (!$p['isinstance']($pyjs_dbg_220_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_220_err);}throw $pyjs_dbg_220_err;
}})()) {
					$pyjs['track']['lineno']=267;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return option['__setitem__']('selected', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_221_err){if (!$p['isinstance']($pyjs_dbg_221_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_221_err);}throw $pyjs_dbg_221_err;
}})();
					$pyjs['track']['lineno']=268;
					$pyjs['track']['lineno']=268;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='actions.tree';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['newNode']]);
		$cls_definition['onRootNodeChanged'] = $method;
		$pyjs['track']['lineno']=270;
		$method = $pyjs__bind_method2('onRootNodesAvaiable', function(req) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				req = arguments[1];
			}
			var node,option,res,$iter4_idx,$pyjs__trackstack_size_1,$iter4_type,$iter4_nextval,$iter4_array,$iter4_iter;
			$pyjs['track']={'module':'actions.tree', 'lineno':270};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.tree';
			$pyjs['track']['lineno']=270;
			$pyjs['track']['lineno']=271;
			res = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['NetworkService']['decode'](req);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_222_err){if (!$p['isinstance']($pyjs_dbg_222_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_222_err);}throw $pyjs_dbg_222_err;
}})();
			$pyjs['track']['lineno']=272;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter4_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return res;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_223_err){if (!$p['isinstance']($pyjs_dbg_223_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_223_err);}throw $pyjs_dbg_223_err;
}})();
			$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
			while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
				node = $iter4_nextval['$nextval'];
				$pyjs['track']['lineno']=273;
				option = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Option']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_224_err){if (!$p['isinstance']($pyjs_dbg_224_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_224_err);}throw $pyjs_dbg_224_err;
}})();
				$pyjs['track']['lineno']=274;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return option['__setitem__']('value', node['__getitem__']('key'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_225_err){if (!$p['isinstance']($pyjs_dbg_225_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_225_err);}throw $pyjs_dbg_225_err;
}})();
				$pyjs['track']['lineno']=275;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return option['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['TextNode'](node['__getitem__']('name'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_226_err){if (!$p['isinstance']($pyjs_dbg_226_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_226_err);}throw $pyjs_dbg_226_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_227_err){if (!$p['isinstance']($pyjs_dbg_227_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_227_err);}throw $pyjs_dbg_227_err;
}})();
				$pyjs['track']['lineno']=276;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq'](node['__getitem__']('key'), $p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_228_err){if (!$p['isinstance']($pyjs_dbg_228_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_228_err);}throw $pyjs_dbg_228_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_229_err){if (!$p['isinstance']($pyjs_dbg_229_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_229_err);}throw $pyjs_dbg_229_err;
}})(), 'rootNode')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_230_err){if (!$p['isinstance']($pyjs_dbg_230_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_230_err);}throw $pyjs_dbg_230_err;
}})()) {
					$pyjs['track']['lineno']=277;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return option['__setitem__']('selected', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_231_err){if (!$p['isinstance']($pyjs_dbg_231_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_231_err);}throw $pyjs_dbg_231_err;
}})();
				}
				$pyjs['track']['lineno']=278;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['appendChild'](option);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_232_err){if (!$p['isinstance']($pyjs_dbg_232_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_232_err);}throw $pyjs_dbg_232_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='actions.tree';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['req']]);
		$cls_definition['onRootNodesAvaiable'] = $method;
		$pyjs['track']['lineno']=280;
		$method = $pyjs__bind_method2('onChange', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var newRootNode;
			$pyjs['track']={'module':'actions.tree', 'lineno':280};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.tree';
			$pyjs['track']['lineno']=280;
			$pyjs['track']['lineno']=281;
			newRootNode = $p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__getitem__']('options')['item'](self['__getitem__']('selectedIndex'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_233_err){if (!$p['isinstance']($pyjs_dbg_233_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_233_err);}throw $pyjs_dbg_233_err;
}})(), 'value');
			$pyjs['track']['lineno']=282;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_234_err){if (!$p['isinstance']($pyjs_dbg_234_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_234_err);}throw $pyjs_dbg_234_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_235_err){if (!$p['isinstance']($pyjs_dbg_235_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_235_err);}throw $pyjs_dbg_235_err;
}})()['setRootNode'](newRootNode);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_236_err){if (!$p['isinstance']($pyjs_dbg_236_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_236_err);}throw $pyjs_dbg_236_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onChange'] = $method;
		$pyjs['track']['lineno']=285;
		$method = $pyjs__bind_method2('isSuitableFor', function(module, handler, actionName) {
			var $and45,$and46,$or28,$or27;
			$pyjs['track']={'module':'actions.tree', 'lineno':285};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.tree';
			$pyjs['track']['lineno']=285;
			$pyjs['track']['lineno']=286;
			$pyjs['track']['lineno']=286;
			var $pyjs__ret = ($p['bool']($and45=$p['op_eq'](actionName, 'selectrootnode'))?($p['bool']($or27=$p['op_eq'](handler, 'tree'))?$or27:(function(){try{try{$pyjs['in_try_except'] += 1;
			return handler['startswith']('tree.');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_237_err){if (!$p['isinstance']($pyjs_dbg_237_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_237_err);}throw $pyjs_dbg_237_err;
}})()):$and45);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['module'],['handler'],['actionName']]);
		$cls_definition['isSuitableFor'] = $method;
		$pyjs['track']['lineno']=241;
		var $bases = new Array($p['getattr']($m['html5'], 'Select'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('SelectRootNode', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=288;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $p['getattr']($m['SelectRootNode'], 'isSuitableFor'), $m['SelectRootNode']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_238_err){if (!$p['isinstance']($pyjs_dbg_238_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_238_err);}throw $pyjs_dbg_238_err;
}})();
	$pyjs['track']['lineno']=291;
	$m['ReturnSelectionAction'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'actions.tree';
		$pyjs['track']['lineno']=296;
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

			$pyjs['track']={'module':'actions.tree', 'lineno':296};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.tree';
			$pyjs['track']['lineno']=296;
			$pyjs['track']['lineno']=297;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['ReturnSelectionAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_239_err){if (!$p['isinstance']($pyjs_dbg_239_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_239_err);}throw $pyjs_dbg_239_err;
}})(), '__init__', args, kwargs, [{}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Select');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_240_err){if (!$p['isinstance']($pyjs_dbg_240_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_240_err);}throw $pyjs_dbg_240_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_241_err){if (!$p['isinstance']($pyjs_dbg_241_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_241_err);}throw $pyjs_dbg_241_err;
}})();
			$pyjs['track']['lineno']=298;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('class', 'icon activateselection');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_242_err){if (!$p['isinstance']($pyjs_dbg_242_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_242_err);}throw $pyjs_dbg_242_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=300;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];

			$pyjs['track']={'module':'actions.tree', 'lineno':300};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.tree';
			$pyjs['track']['lineno']=300;
			$pyjs['track']['lineno']=301;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_243_err){if (!$p['isinstance']($pyjs_dbg_243_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_243_err);}throw $pyjs_dbg_243_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_244_err){if (!$p['isinstance']($pyjs_dbg_244_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_244_err);}throw $pyjs_dbg_244_err;
}})()['returnCurrentSelection']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_245_err){if (!$p['isinstance']($pyjs_dbg_245_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_245_err);}throw $pyjs_dbg_245_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=304;
		$method = $pyjs__bind_method2('isSuitableFor', function(modul, handler, actionName) {
			var correctHandler,$and48,$or29,$and47,$or30;
			$pyjs['track']={'module':'actions.tree', 'lineno':304};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.tree';
			$pyjs['track']['lineno']=304;
			$pyjs['track']['lineno']=305;
			correctHandler = ($p['bool']($or29=$p['op_eq'](handler, 'tree'))?$or29:(function(){try{try{$pyjs['in_try_except'] += 1;
			return handler['startswith']('tree.');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_246_err){if (!$p['isinstance']($pyjs_dbg_246_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_246_err);}throw $pyjs_dbg_246_err;
}})());
			$pyjs['track']['lineno']=306;
			$pyjs['track']['lineno']=306;
			var $pyjs__ret = ($p['bool']($and47=$p['op_eq'](actionName, 'select'))?correctHandler:$and47);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['modul'],['handler'],['actionName']]);
		$cls_definition['isSuitableFor'] = $method;
		$pyjs['track']['lineno']=291;
		var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Button'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('ReturnSelectionAction', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=308;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](3, $p['getattr']($m['ReturnSelectionAction'], 'isSuitableFor'), $m['ReturnSelectionAction']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_247_err){if (!$p['isinstance']($pyjs_dbg_247_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_247_err);}throw $pyjs_dbg_247_err;
}})();
	return this;
}; /* end actions.tree */


/* end module: actions.tree */


/*
PYJS_DEPS: ['html5', 'network.NetworkService', 'network', 'priorityqueue.actionDelegateSelector', 'priorityqueue', 'widgets.edit.EditWidget', 'widgets', 'widgets.edit', 'config.conf', 'config', 'pane.Pane', 'pane', 'i18n.translate', 'i18n']
*/
