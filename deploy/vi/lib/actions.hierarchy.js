/* start module: actions.hierarchy */
$pyjs['loaded_modules']['actions.hierarchy'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['actions.hierarchy']['__was_initialized__']) return $pyjs['loaded_modules']['actions.hierarchy'];
	if(typeof $pyjs['loaded_modules']['actions'] == 'undefined' || !$pyjs['loaded_modules']['actions']['__was_initialized__']) $p['___import___']('actions', null);
	var $m = $pyjs['loaded_modules']['actions.hierarchy'];
	$m['__repr__'] = function() { return '<module: actions.hierarchy>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'actions.hierarchy';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['actions']['hierarchy'] = $pyjs['loaded_modules']['actions.hierarchy'];
	$m.__track_lines__[1] = 'actions.hierarchy.py, line 1:\n    import html5';
	$m.__track_lines__[2] = 'actions.hierarchy.py, line 2:\n    from network import NetworkService';
	$m.__track_lines__[3] = 'actions.hierarchy.py, line 3:\n    from priorityqueue import actionDelegateSelector';
	$m.__track_lines__[4] = 'actions.hierarchy.py, line 4:\n    from widgets.edit import EditWidget';
	$m.__track_lines__[5] = 'actions.hierarchy.py, line 5:\n    from config import conf';
	$m.__track_lines__[6] = 'actions.hierarchy.py, line 6:\n    from pane import Pane';
	$m.__track_lines__[7] = 'actions.hierarchy.py, line 7:\n    from i18n import translate';
	$m.__track_lines__[9] = 'actions.hierarchy.py, line 9:\n    class AddAction( html5.ext.Button ):';
	$m.__track_lines__[13] = 'actions.hierarchy.py, line 13:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[14] = 'actions.hierarchy.py, line 14:\n    super( AddAction, self ).__init__( translate("Add"), *args, **kwargs )';
	$m.__track_lines__[15] = 'actions.hierarchy.py, line 15:\n    self["class"] = "icon add"';
	$m.__track_lines__[18] = 'actions.hierarchy.py, line 17:\n    @staticmethod ... def isSuitableFor( module, handler, actionName ):';
	$m.__track_lines__[19] = 'actions.hierarchy.py, line 19:\n    if module is None or module not in conf["modules"].keys():';
	$m.__track_lines__[20] = 'actions.hierarchy.py, line 20:\n    return False';
	$m.__track_lines__[22] = 'actions.hierarchy.py, line 22:\n    correctAction = actionName=="add"';
	$m.__track_lines__[23] = 'actions.hierarchy.py, line 23:\n    correctHandler = handler == "hierarchy" or handler.startswith("hierarchy.")';
	$m.__track_lines__[24] = 'actions.hierarchy.py, line 24:\n    hasAccess = conf["currentUser"] and ("root" in conf["currentUser"]["access"] or module+"-add" in conf["currentUser"]["access"])';
	$m.__track_lines__[25] = 'actions.hierarchy.py, line 25:\n    isDisabled = module is not None and "disabledFunctions" in conf["modules"][module].keys() and conf["modules"][module]["disabledFunctions"] and "add" in conf["modules"][module]["disabledFunctions"]';
	$m.__track_lines__[27] = 'actions.hierarchy.py, line 27:\n    return correctAction and correctHandler and hasAccess and not isDisabled';
	$m.__track_lines__[30] = 'actions.hierarchy.py, line 30:\n    def onClick(self, sender=None):';
	$m.__track_lines__[31] = 'actions.hierarchy.py, line 31:\n    pane = Pane(translate("Add"), closeable=True, iconClasses=["modul_%s" % self.parent().parent().module, "apptype_hierarchy", "action_add" ])';
	$m.__track_lines__[32] = 'actions.hierarchy.py, line 32:\n    conf["mainWindow"].stackPane( pane )';
	$m.__track_lines__[33] = 'actions.hierarchy.py, line 33:\n    edwg = EditWidget( self.parent().parent().module, EditWidget.appHierarchy, node=self.parent().parent().rootNode )';
	$m.__track_lines__[34] = 'actions.hierarchy.py, line 34:\n    pane.addWidget( edwg )';
	$m.__track_lines__[35] = 'actions.hierarchy.py, line 35:\n    pane.focus()';
	$m.__track_lines__[37] = 'actions.hierarchy.py, line 37:\n    def resetLoadingState(self):';
	$m.__track_lines__[38] = 'actions.hierarchy.py, line 38:\n    pass';
	$m.__track_lines__[40] = 'actions.hierarchy.py, line 40:\n    actionDelegateSelector.insert( 1, AddAction.isSuitableFor, AddAction )';
	$m.__track_lines__[43] = 'actions.hierarchy.py, line 43:\n    class EditAction( html5.ext.Button ):';
	$m.__track_lines__[47] = 'actions.hierarchy.py, line 47:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[48] = 'actions.hierarchy.py, line 48:\n    super( EditAction, self ).__init__( translate("Edit"), *args, **kwargs )';
	$m.__track_lines__[49] = 'actions.hierarchy.py, line 49:\n    self["class"] = "icon edit"';
	$m.__track_lines__[50] = 'actions.hierarchy.py, line 50:\n    self["disabled"]= True';
	$m.__track_lines__[51] = 'actions.hierarchy.py, line 51:\n    self.isDisabled=True';
	$m.__track_lines__[53] = 'actions.hierarchy.py, line 53:\n    def onAttach(self):';
	$m.__track_lines__[54] = 'actions.hierarchy.py, line 54:\n    super(EditAction,self).onAttach()';
	$m.__track_lines__[55] = 'actions.hierarchy.py, line 55:\n    self.parent().parent().selectionChangedEvent.register( self )';
	$m.__track_lines__[56] = 'actions.hierarchy.py, line 56:\n    self.parent().parent().selectionActivatedEvent.register( self )';
	$m.__track_lines__[58] = 'actions.hierarchy.py, line 58:\n    def onDetach(self):';
	$m.__track_lines__[59] = 'actions.hierarchy.py, line 59:\n    self.parent().parent().selectionChangedEvent.unregister( self )';
	$m.__track_lines__[60] = 'actions.hierarchy.py, line 60:\n    self.parent().parent().selectionActivatedEvent.unregister( self )';
	$m.__track_lines__[61] = 'actions.hierarchy.py, line 61:\n    super(EditAction,self).onDetach()';
	$m.__track_lines__[63] = 'actions.hierarchy.py, line 63:\n    def onSelectionChanged(self, table, selection ):';
	$m.__track_lines__[64] = 'actions.hierarchy.py, line 64:\n    if selection:';
	$m.__track_lines__[65] = 'actions.hierarchy.py, line 65:\n    if self.isDisabled:';
	$m.__track_lines__[66] = 'actions.hierarchy.py, line 66:\n    self.isDisabled = False';
	$m.__track_lines__[67] = 'actions.hierarchy.py, line 67:\n    self["disabled"]= False';
	$m.__track_lines__[69] = 'actions.hierarchy.py, line 69:\n    if not self.isDisabled:';
	$m.__track_lines__[70] = 'actions.hierarchy.py, line 70:\n    self["disabled"]= True';
	$m.__track_lines__[71] = 'actions.hierarchy.py, line 71:\n    self.isDisabled = True';
	$m.__track_lines__[73] = 'actions.hierarchy.py, line 73:\n    def onSelectionActivated(self, table, selection):';
	$m.__track_lines__[74] = 'actions.hierarchy.py, line 74:\n    if not self.parent().parent().isSelector and len(selection)>0:';
	$m.__track_lines__[75] = 'actions.hierarchy.py, line 75:\n    self.openEditor( selection[0].data["key"] )';
	$m.__track_lines__[78] = 'actions.hierarchy.py, line 77:\n    @staticmethod ... def isSuitableFor( module, handler, actionName ):';
	$m.__track_lines__[79] = 'actions.hierarchy.py, line 79:\n    if module is None or module not in conf["modules"].keys():';
	$m.__track_lines__[80] = 'actions.hierarchy.py, line 80:\n    return False';
	$m.__track_lines__[82] = 'actions.hierarchy.py, line 82:\n    correctAction = actionName=="edit"';
	$m.__track_lines__[83] = 'actions.hierarchy.py, line 83:\n    correctHandler = handler == "hierarchy" or handler.startswith("hierarchy.")';
	$m.__track_lines__[84] = 'actions.hierarchy.py, line 84:\n    hasAccess = conf["currentUser"] and ("root" in conf["currentUser"]["access"] or module+"-edit" in conf["currentUser"]["access"])';
	$m.__track_lines__[85] = 'actions.hierarchy.py, line 85:\n    isDisabled = module is not None and "disabledFunctions" in conf["modules"][module].keys() and conf["modules"][module]["disabledFunctions"] and "edit" in conf["modules"][module]["disabledFunctions"]';
	$m.__track_lines__[87] = 'actions.hierarchy.py, line 87:\n    return correctAction and correctHandler and hasAccess and not isDisabled';
	$m.__track_lines__[90] = 'actions.hierarchy.py, line 90:\n    def onClick(self, sender=None):';
	$m.__track_lines__[91] = 'actions.hierarchy.py, line 91:\n    selection = self.parent().parent().getCurrentSelection()';
	$m.__track_lines__[92] = 'actions.hierarchy.py, line 92:\n    if not selection:';
	$m.__track_lines__[93] = 'actions.hierarchy.py, line 93:\n    return';
	$m.__track_lines__[94] = 'actions.hierarchy.py, line 94:\n    for s in selection:';
	$m.__track_lines__[95] = 'actions.hierarchy.py, line 95:\n    self.openEditor( s["key"] )';
	$m.__track_lines__[97] = 'actions.hierarchy.py, line 97:\n    def openEditor(self, key):';
	$m.__track_lines__[98] = 'actions.hierarchy.py, line 98:\n    pane = Pane(translate("Edit"), closeable=True)';
	$m.__track_lines__[99] = 'actions.hierarchy.py, line 99:\n    conf["mainWindow"].stackPane( pane, focus=True )';
	$m.__track_lines__[100] = 'actions.hierarchy.py, line 100:\n    edwg = EditWidget(self.parent().parent().module, EditWidget.appHierarchy, key=key)';
	$m.__track_lines__[101] = 'actions.hierarchy.py, line 101:\n    pane.addWidget( edwg )';
	$m.__track_lines__[103] = 'actions.hierarchy.py, line 103:\n    def resetLoadingState(self):';
	$m.__track_lines__[104] = 'actions.hierarchy.py, line 104:\n    pass';
	$m.__track_lines__[106] = 'actions.hierarchy.py, line 106:\n    actionDelegateSelector.insert( 1, EditAction.isSuitableFor, EditAction )';
	$m.__track_lines__[108] = 'actions.hierarchy.py, line 108:\n    class CloneAction( html5.ext.Button ):';
	$m.__track_lines__[113] = 'actions.hierarchy.py, line 113:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[114] = 'actions.hierarchy.py, line 114:\n    super( CloneAction, self ).__init__( translate("Clone"), *args, **kwargs )';
	$m.__track_lines__[115] = 'actions.hierarchy.py, line 115:\n    self["class"] = "icon clone"';
	$m.__track_lines__[116] = 'actions.hierarchy.py, line 116:\n    self["disabled"]= True';
	$m.__track_lines__[117] = 'actions.hierarchy.py, line 117:\n    self.isDisabled=True';
	$m.__track_lines__[119] = 'actions.hierarchy.py, line 119:\n    def onAttach(self):';
	$m.__track_lines__[120] = 'actions.hierarchy.py, line 120:\n    super(CloneAction,self).onAttach()';
	$m.__track_lines__[121] = 'actions.hierarchy.py, line 121:\n    self.parent().parent().selectionChangedEvent.register( self )';
	$m.__track_lines__[123] = 'actions.hierarchy.py, line 123:\n    def onDetach(self):';
	$m.__track_lines__[124] = 'actions.hierarchy.py, line 124:\n    self.parent().parent().selectionChangedEvent.unregister( self )';
	$m.__track_lines__[125] = 'actions.hierarchy.py, line 125:\n    super(CloneAction,self).onDetach()';
	$m.__track_lines__[127] = 'actions.hierarchy.py, line 127:\n    def onSelectionChanged(self, table, selection ):';
	$m.__track_lines__[128] = 'actions.hierarchy.py, line 128:\n    if selection:';
	$m.__track_lines__[129] = 'actions.hierarchy.py, line 129:\n    if self.isDisabled:';
	$m.__track_lines__[130] = 'actions.hierarchy.py, line 130:\n    self.isDisabled = False';
	$m.__track_lines__[131] = 'actions.hierarchy.py, line 131:\n    self["disabled"]= False';
	$m.__track_lines__[133] = 'actions.hierarchy.py, line 133:\n    if not self.isDisabled:';
	$m.__track_lines__[134] = 'actions.hierarchy.py, line 134:\n    self["disabled"]= True';
	$m.__track_lines__[135] = 'actions.hierarchy.py, line 135:\n    self.isDisabled = True';
	$m.__track_lines__[138] = 'actions.hierarchy.py, line 137:\n    @staticmethod ... def isSuitableFor( module, handler, actionName ):';
	$m.__track_lines__[139] = 'actions.hierarchy.py, line 139:\n    if module is None or module not in conf["modules"].keys():';
	$m.__track_lines__[140] = 'actions.hierarchy.py, line 140:\n    return False';
	$m.__track_lines__[142] = 'actions.hierarchy.py, line 142:\n    correctAction = actionName=="clone"';
	$m.__track_lines__[143] = 'actions.hierarchy.py, line 143:\n    correctHandler = handler == "hierarchy" or handler.startswith("hierarchy.")';
	$m.__track_lines__[144] = 'actions.hierarchy.py, line 144:\n    hasAccess = conf["currentUser"] and ("root" in conf["currentUser"]["access"] or module+"-edit" in conf["currentUser"]["access"])';
	$m.__track_lines__[145] = 'actions.hierarchy.py, line 145:\n    isDisabled = module is not None and "disabledFunctions" in conf["modules"][module].keys() and conf["modules"][module]["disabledFunctions"] and "clone" in conf["modules"][module]["disabledFunctions"]';
	$m.__track_lines__[146] = 'actions.hierarchy.py, line 146:\n    return correctAction and correctHandler and hasAccess and not isDisabled';
	$m.__track_lines__[148] = 'actions.hierarchy.py, line 148:\n    def onClick(self, sender=None):';
	$m.__track_lines__[149] = 'actions.hierarchy.py, line 149:\n    selection = self.parent().parent().getCurrentSelection()';
	$m.__track_lines__[150] = 'actions.hierarchy.py, line 150:\n    if not selection:';
	$m.__track_lines__[151] = 'actions.hierarchy.py, line 151:\n    return';
	$m.__track_lines__[152] = 'actions.hierarchy.py, line 152:\n    for s in selection:';
	$m.__track_lines__[153] = 'actions.hierarchy.py, line 153:\n    self.openEditor( s["key"] )';
	$m.__track_lines__[155] = 'actions.hierarchy.py, line 155:\n    def openEditor(self, key):';
	$m.__track_lines__[156] = 'actions.hierarchy.py, line 156:\n    pane = Pane(translate("Clone"), closeable=True, iconClasses=["modul_%s" % self.parent().parent().module, "apptype_hierarchy", "action_edit" ])';
	$m.__track_lines__[157] = 'actions.hierarchy.py, line 157:\n    conf["mainWindow"].stackPane( pane )';
	$m.__track_lines__[158] = 'actions.hierarchy.py, line 158:\n    edwg = EditWidget(self.parent().parent().module, EditWidget.appHierarchy,';
	$m.__track_lines__[160] = 'actions.hierarchy.py, line 160:\n    pane.addWidget( edwg )';
	$m.__track_lines__[161] = 'actions.hierarchy.py, line 161:\n    pane.focus()';
	$m.__track_lines__[163] = 'actions.hierarchy.py, line 163:\n    def resetLoadingState(self):';
	$m.__track_lines__[164] = 'actions.hierarchy.py, line 164:\n    pass';
	$m.__track_lines__[166] = 'actions.hierarchy.py, line 166:\n    actionDelegateSelector.insert( 1, CloneAction.isSuitableFor, CloneAction )';
	$m.__track_lines__[169] = 'actions.hierarchy.py, line 169:\n    class DeleteAction( html5.ext.Button ):';
	$m.__track_lines__[173] = 'actions.hierarchy.py, line 173:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[174] = 'actions.hierarchy.py, line 174:\n    super( DeleteAction, self ).__init__( translate("Delete"), *args, **kwargs )';
	$m.__track_lines__[175] = 'actions.hierarchy.py, line 175:\n    self["class"] = "icon delete"';
	$m.__track_lines__[176] = 'actions.hierarchy.py, line 176:\n    self["disabled"]= True';
	$m.__track_lines__[177] = 'actions.hierarchy.py, line 177:\n    self.isDisabled = True';
	$m.__track_lines__[179] = 'actions.hierarchy.py, line 179:\n    def onAttach(self):';
	$m.__track_lines__[180] = 'actions.hierarchy.py, line 180:\n    super(DeleteAction,self).onAttach()';
	$m.__track_lines__[181] = 'actions.hierarchy.py, line 181:\n    self.parent().parent().selectionChangedEvent.register( self )';
	$m.__track_lines__[183] = 'actions.hierarchy.py, line 183:\n    def onDetach(self):';
	$m.__track_lines__[184] = 'actions.hierarchy.py, line 184:\n    self.parent().parent().selectionChangedEvent.unregister( self )';
	$m.__track_lines__[185] = 'actions.hierarchy.py, line 185:\n    super(DeleteAction,self).onDetach()';
	$m.__track_lines__[187] = 'actions.hierarchy.py, line 187:\n    def onSelectionChanged(self, table, selection ):';
	$m.__track_lines__[188] = 'actions.hierarchy.py, line 188:\n    if selection:';
	$m.__track_lines__[189] = 'actions.hierarchy.py, line 189:\n    if self.isDisabled:';
	$m.__track_lines__[190] = 'actions.hierarchy.py, line 190:\n    self.isDisabled = False';
	$m.__track_lines__[191] = 'actions.hierarchy.py, line 191:\n    self["disabled"]= False';
	$m.__track_lines__[193] = 'actions.hierarchy.py, line 193:\n    if not self.isDisabled:';
	$m.__track_lines__[194] = 'actions.hierarchy.py, line 194:\n    self["disabled"]= True';
	$m.__track_lines__[195] = 'actions.hierarchy.py, line 195:\n    self.isDisabled = True';
	$m.__track_lines__[199] = 'actions.hierarchy.py, line 198:\n    @staticmethod ... def isSuitableFor( module, handler, actionName ):';
	$m.__track_lines__[200] = 'actions.hierarchy.py, line 200:\n    if module is None or module not in conf["modules"].keys():';
	$m.__track_lines__[201] = 'actions.hierarchy.py, line 201:\n    return False';
	$m.__track_lines__[203] = 'actions.hierarchy.py, line 203:\n    correctAction = actionName=="delete"';
	$m.__track_lines__[204] = 'actions.hierarchy.py, line 204:\n    correctHandler = handler == "hierarchy" or handler.startswith("hierarchy.")';
	$m.__track_lines__[205] = 'actions.hierarchy.py, line 205:\n    hasAccess = conf["currentUser"] and ("root" in conf["currentUser"]["access"] or module+"-delete" in conf["currentUser"]["access"])';
	$m.__track_lines__[206] = 'actions.hierarchy.py, line 206:\n    isDisabled = module is not None and "disabledFunctions" in conf["modules"][module].keys() and conf["modules"][module]["disabledFunctions"] and "delete" in conf["modules"][module]["disabledFunctions"]';
	$m.__track_lines__[208] = 'actions.hierarchy.py, line 208:\n    return correctAction and correctHandler and hasAccess and not isDisabled';
	$m.__track_lines__[211] = 'actions.hierarchy.py, line 211:\n    def onClick(self, sender=None):';
	$m.__track_lines__[212] = 'actions.hierarchy.py, line 212:\n    selection = self.parent().parent().getCurrentSelection()';
	$m.__track_lines__[213] = 'actions.hierarchy.py, line 213:\n    if not selection:';
	$m.__track_lines__[214] = 'actions.hierarchy.py, line 214:\n    return';
	$m.__track_lines__[215] = 'actions.hierarchy.py, line 215:\n    d = html5.ext.YesNoDialog(translate("Delete {amt} Entries?",amt=len(selection)) ,title=translate("Delete them?"), yesCallback=self.doDelete, yesLabel=translate("Delete"), noLabel=translate("Keep") )';
	$m.__track_lines__[216] = 'actions.hierarchy.py, line 216:\n    d.deleteList = [x["key"] for x in selection]';
	$m.__track_lines__[217] = 'actions.hierarchy.py, line 217:\n    d["class"].append( "delete" )';
	$m.__track_lines__[219] = 'actions.hierarchy.py, line 219:\n    def doDelete(self, dialog):';
	$m.__track_lines__[220] = 'actions.hierarchy.py, line 220:\n    deleteList = dialog.deleteList';
	$m.__track_lines__[221] = 'actions.hierarchy.py, line 221:\n    for x in deleteList:';
	$m.__track_lines__[222] = 'actions.hierarchy.py, line 222:\n    NetworkService.request( self.parent().parent().module, "delete", {"key": x}, secure=True, modifies=True )';
	$m.__track_lines__[224] = 'actions.hierarchy.py, line 224:\n    def resetLoadingState(self):';
	$m.__track_lines__[225] = 'actions.hierarchy.py, line 225:\n    pass';
	$m.__track_lines__[227] = 'actions.hierarchy.py, line 227:\n    actionDelegateSelector.insert( 1, DeleteAction.isSuitableFor, DeleteAction )';
	$m.__track_lines__[229] = 'actions.hierarchy.py, line 229:\n    class ReloadAction( html5.ext.Button ):';
	$m.__track_lines__[233] = 'actions.hierarchy.py, line 233:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[234] = 'actions.hierarchy.py, line 234:\n    super( ReloadAction, self ).__init__( translate("Reload"), *args, **kwargs )';
	$m.__track_lines__[235] = 'actions.hierarchy.py, line 235:\n    self["class"] = "icon reload"';
	$m.__track_lines__[238] = 'actions.hierarchy.py, line 237:\n    @staticmethod ... def isSuitableFor( module, handler, actionName ):';
	$m.__track_lines__[239] = 'actions.hierarchy.py, line 239:\n    correctAction = actionName=="reload"';
	$m.__track_lines__[240] = 'actions.hierarchy.py, line 240:\n    correctHandler = handler == "hierarchy" or handler.startswith("hierarchy.")';
	$m.__track_lines__[241] = 'actions.hierarchy.py, line 241:\n    return correctAction and correctHandler';
	$m.__track_lines__[243] = 'actions.hierarchy.py, line 243:\n    def onClick(self, sender=None):';
	$m.__track_lines__[244] = 'actions.hierarchy.py, line 244:\n    self["class"].append("is_loading")';
	$m.__track_lines__[245] = 'actions.hierarchy.py, line 245:\n    NetworkService.notifyChange( self.parent().parent().module )';
	$m.__track_lines__[247] = 'actions.hierarchy.py, line 247:\n    def resetLoadingState(self):';
	$m.__track_lines__[248] = 'actions.hierarchy.py, line 248:\n    if "is_loading" in self["class"]:';
	$m.__track_lines__[249] = 'actions.hierarchy.py, line 249:\n    self["class"].remove("is_loading")';
	$m.__track_lines__[251] = 'actions.hierarchy.py, line 251:\n    actionDelegateSelector.insert( 1, ReloadAction.isSuitableFor, ReloadAction )';
	$m.__track_lines__[254] = 'actions.hierarchy.py, line 254:\n    class SelectRootNode( html5.Select ):';
	$m.__track_lines__[258] = 'actions.hierarchy.py, line 258:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[259] = 'actions.hierarchy.py, line 259:\n    super( SelectRootNode, self ).__init__( *args, **kwargs )';
	$m.__track_lines__[260] = 'actions.hierarchy.py, line 260:\n    self.sinkEvent("onChange")';
	$m.__track_lines__[262] = 'actions.hierarchy.py, line 262:\n    def onAttach(self):';
	$m.__track_lines__[263] = 'actions.hierarchy.py, line 263:\n    super( SelectRootNode, self ).onAttach()';
	$m.__track_lines__[264] = 'actions.hierarchy.py, line 264:\n    self.update()';
	$m.__track_lines__[265] = 'actions.hierarchy.py, line 265:\n    self.parent().parent().rootNodeChangedEvent.register( self )';
	$m.__track_lines__[267] = 'actions.hierarchy.py, line 267:\n    def onDetach(self):';
	$m.__track_lines__[268] = 'actions.hierarchy.py, line 268:\n    self.parent().parent().rootNodeChangedEvent.unregister( self )';
	$m.__track_lines__[269] = 'actions.hierarchy.py, line 269:\n    super( SelectRootNode, self ).onDetach()';
	$m.__track_lines__[271] = 'actions.hierarchy.py, line 271:\n    def update(self):';
	$m.__track_lines__[272] = 'actions.hierarchy.py, line 272:\n    self.removeAllChildren()';
	$m.__track_lines__[273] = 'actions.hierarchy.py, line 273:\n    NetworkService.request( self.parent().parent().module, "listRootNodes",';
	$m.__track_lines__[277] = 'actions.hierarchy.py, line 277:\n    def onRootNodeChanged(self, newNode):';
	$m.__track_lines__[278] = 'actions.hierarchy.py, line 278:\n    for option in self._children:';
	$m.__track_lines__[279] = 'actions.hierarchy.py, line 279:\n    if option["value"] == newNode:';
	$m.__track_lines__[280] = 'actions.hierarchy.py, line 280:\n    option["selected"] = True';
	$m.__track_lines__[281] = 'actions.hierarchy.py, line 281:\n    return';
	$m.__track_lines__[283] = 'actions.hierarchy.py, line 283:\n    def onRootNodesAvaiable(self, req):';
	$m.__track_lines__[284] = 'actions.hierarchy.py, line 284:\n    res = NetworkService.decode( req )';
	$m.__track_lines__[285] = 'actions.hierarchy.py, line 285:\n    for node in res:';
	$m.__track_lines__[286] = 'actions.hierarchy.py, line 286:\n    option = html5.Option()';
	$m.__track_lines__[287] = 'actions.hierarchy.py, line 287:\n    option["value"] = node["key"]';
	$m.__track_lines__[288] = 'actions.hierarchy.py, line 288:\n    option.appendChild( html5.TextNode( node["name"] ) )';
	$m.__track_lines__[289] = 'actions.hierarchy.py, line 289:\n    if node["key"] == self.parent().parent().rootNode:';
	$m.__track_lines__[290] = 'actions.hierarchy.py, line 290:\n    option["selected"] = True';
	$m.__track_lines__[291] = 'actions.hierarchy.py, line 291:\n    self.appendChild( option )';
	$m.__track_lines__[293] = 'actions.hierarchy.py, line 293:\n    def onChange(self, event):';
	$m.__track_lines__[294] = 'actions.hierarchy.py, line 294:\n    newRootNode = self["options"].item(self["selectedIndex"]).value';
	$m.__track_lines__[295] = 'actions.hierarchy.py, line 295:\n    self.parent().parent().setRootNode( newRootNode )';
	$m.__track_lines__[298] = 'actions.hierarchy.py, line 297:\n    @staticmethod ... def isSuitableFor( module, handler, actionName ):';
	$m.__track_lines__[299] = 'actions.hierarchy.py, line 299:\n    return actionName == "selectrootnode" and (handler == "hierarchy" or handler.startswith("hierarchy."))';
	$m.__track_lines__[301] = 'actions.hierarchy.py, line 301:\n    actionDelegateSelector.insert( 1, SelectRootNode.isSuitableFor, SelectRootNode )';


	$pyjs['track']['module']='actions.hierarchy';
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
	$m['AddAction'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'actions.hierarchy';
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

			$pyjs['track']={'module':'actions.hierarchy', 'lineno':13};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.hierarchy';
			$pyjs['track']['lineno']=13;
			$pyjs['track']['lineno']=14;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['AddAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})(), '__init__', args, kwargs, [{}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Add');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			$pyjs['track']['lineno']=15;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('class', 'icon add');
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
			$pyjs['track']={'module':'actions.hierarchy', 'lineno':18};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.hierarchy';
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
			correctAction = $p['op_eq'](actionName, 'add');
			$pyjs['track']['lineno']=23;
			correctHandler = ($p['bool']($or3=$p['op_eq'](handler, 'hierarchy'))?$or3:(function(){try{try{$pyjs['in_try_except'] += 1;
			return handler['startswith']('hierarchy.');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})());
			$pyjs['track']['lineno']=24;
			hasAccess = ($p['bool']($and1=$m['conf']['__getitem__']('currentUser'))?($p['bool']($or5=$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']('root'))?$or5:$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']($p['__op_add']($add1=module,$add2='-add'))):$and1);
			$pyjs['track']['lineno']=25;
			isDisabled = ($p['bool']($and3=(module !== null))?($p['bool']($and4=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('modules')['__getitem__'](module)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})()['__contains__']('disabledFunctions'))?($p['bool']($and5=$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('disabledFunctions'))?$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('disabledFunctions')['__contains__']('add'):$and5):$and4):$and3);
			$pyjs['track']['lineno']=27;
			$pyjs['track']['lineno']=27;
			var $pyjs__ret = ($p['bool']($and7=correctAction)?($p['bool']($and8=correctHandler)?($p['bool']($and9=hasAccess)?!$p['bool'](isDisabled):$and9):$and8):$and7);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['module'],['handler'],['actionName']]);
		$cls_definition['isSuitableFor'] = $method;
		$pyjs['track']['lineno']=30;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
			var edwg,pane;
			$pyjs['track']={'module':'actions.hierarchy', 'lineno':30};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.hierarchy';
			$pyjs['track']['lineno']=30;
			$pyjs['track']['lineno']=31;
			pane = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(null, $m['Pane'], null, null, [{'closeable':true, 'iconClasses':(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('modul_%s', $p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})(), 'module'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})(), 'apptype_hierarchy', 'action_add']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})()}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Add');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
			$pyjs['track']['lineno']=32;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('mainWindow')['stackPane'](pane);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
			$pyjs['track']['lineno']=33;
			edwg = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(null, $m['EditWidget'], null, null, [{'node':$p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})(), 'rootNode')}, $p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})(), 'module'), $p['getattr']($m['EditWidget'], 'appHierarchy')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
			$pyjs['track']['lineno']=34;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return pane['addWidget'](edwg);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
			$pyjs['track']['lineno']=35;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return pane['focus']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=37;
		$method = $pyjs__bind_method2('resetLoadingState', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'actions.hierarchy', 'lineno':37};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.hierarchy';
			$pyjs['track']['lineno']=37;
			$pyjs['track']['lineno']=38;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['resetLoadingState'] = $method;
		$pyjs['track']['lineno']=9;
		var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Button'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('AddAction', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=40;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $p['getattr']($m['AddAction'], 'isSuitableFor'), $m['AddAction']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
	$pyjs['track']['lineno']=43;
	$m['EditAction'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'actions.hierarchy';
		$pyjs['track']['lineno']=47;
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

			$pyjs['track']={'module':'actions.hierarchy', 'lineno':47};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.hierarchy';
			$pyjs['track']['lineno']=47;
			$pyjs['track']['lineno']=48;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['EditAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})(), '__init__', args, kwargs, [{}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Edit');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
			$pyjs['track']['lineno']=49;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('class', 'icon edit');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
			$pyjs['track']['lineno']=50;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('disabled', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})();
			$pyjs['track']['lineno']=51;
			self['isDisabled'] = true;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=53;
		$method = $pyjs__bind_method2('onAttach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'actions.hierarchy', 'lineno':53};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.hierarchy';
			$pyjs['track']['lineno']=53;
			$pyjs['track']['lineno']=54;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['EditAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})()['onAttach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
			$pyjs['track']['lineno']=55;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})()['selectionChangedEvent']['register'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
			$pyjs['track']['lineno']=56;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})()['selectionActivatedEvent']['register'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onAttach'] = $method;
		$pyjs['track']['lineno']=58;
		$method = $pyjs__bind_method2('onDetach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'actions.hierarchy', 'lineno':58};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.hierarchy';
			$pyjs['track']['lineno']=58;
			$pyjs['track']['lineno']=59;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})()['selectionChangedEvent']['unregister'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})();
			$pyjs['track']['lineno']=60;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})()['selectionActivatedEvent']['unregister'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})();
			$pyjs['track']['lineno']=61;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['EditAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})()['onDetach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onDetach'] = $method;
		$pyjs['track']['lineno']=63;
		$method = $pyjs__bind_method2('onSelectionChanged', function(table, selection) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				table = arguments[1];
				selection = arguments[2];
			}

			$pyjs['track']={'module':'actions.hierarchy', 'lineno':63};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.hierarchy';
			$pyjs['track']['lineno']=63;
			$pyjs['track']['lineno']=64;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](selection);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})()) {
				$pyjs['track']['lineno']=65;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, 'isDisabled'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})()) {
					$pyjs['track']['lineno']=66;
					self['isDisabled'] = false;
				}
				$pyjs['track']['lineno']=67;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__setitem__']('disabled', false);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=69;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']($p['getattr'](self, 'isDisabled')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})()) {
					$pyjs['track']['lineno']=70;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['__setitem__']('disabled', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})();
					$pyjs['track']['lineno']=71;
					self['isDisabled'] = true;
				}
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['table'],['selection']]);
		$cls_definition['onSelectionChanged'] = $method;
		$pyjs['track']['lineno']=73;
		$method = $pyjs__bind_method2('onSelectionActivated', function(table, selection) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				table = arguments[1];
				selection = arguments[2];
			}
			var $and12,$and11;
			$pyjs['track']={'module':'actions.hierarchy', 'lineno':73};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.hierarchy';
			$pyjs['track']['lineno']=73;
			$pyjs['track']['lineno']=74;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and11=!$p['bool']($p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})(), 'isSelector')))?($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len'](selection);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})(), 0) == 1):$and11));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})()) {
				$pyjs['track']['lineno']=75;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['openEditor']($p['getattr'](selection['__getitem__'](0), 'data')['__getitem__']('key'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['table'],['selection']]);
		$cls_definition['onSelectionActivated'] = $method;
		$pyjs['track']['lineno']=78;
		$method = $pyjs__bind_method2('isSuitableFor', function(module, handler, actionName) {
			var $and22,$and21,$and20,correctHandler,isDisabled,$or7,correctAction,$or9,$or8,$and13,$and16,$and17,$and14,$and15,$and18,$and19,hasAccess,$add3,$or11,$or10,$add4,$or12;
			$pyjs['track']={'module':'actions.hierarchy', 'lineno':78};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.hierarchy';
			$pyjs['track']['lineno']=78;
			$pyjs['track']['lineno']=79;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($or7=(module === null))?$or7:!(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('modules')['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})()['__contains__'](module)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})()) {
				$pyjs['track']['lineno']=80;
				$pyjs['track']['lineno']=80;
				var $pyjs__ret = false;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=82;
			correctAction = $p['op_eq'](actionName, 'edit');
			$pyjs['track']['lineno']=83;
			correctHandler = ($p['bool']($or9=$p['op_eq'](handler, 'hierarchy'))?$or9:(function(){try{try{$pyjs['in_try_except'] += 1;
			return handler['startswith']('hierarchy.');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})());
			$pyjs['track']['lineno']=84;
			hasAccess = ($p['bool']($and13=$m['conf']['__getitem__']('currentUser'))?($p['bool']($or11=$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']('root'))?$or11:$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']($p['__op_add']($add3=module,$add4='-edit'))):$and13);
			$pyjs['track']['lineno']=85;
			isDisabled = ($p['bool']($and15=(module !== null))?($p['bool']($and16=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('modules')['__getitem__'](module)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})()['__contains__']('disabledFunctions'))?($p['bool']($and17=$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('disabledFunctions'))?$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('disabledFunctions')['__contains__']('edit'):$and17):$and16):$and15);
			$pyjs['track']['lineno']=87;
			$pyjs['track']['lineno']=87;
			var $pyjs__ret = ($p['bool']($and19=correctAction)?($p['bool']($and20=correctHandler)?($p['bool']($and21=hasAccess)?!$p['bool'](isDisabled):$and21):$and20):$and19);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['module'],['handler'],['actionName']]);
		$cls_definition['isSuitableFor'] = $method;
		$pyjs['track']['lineno']=90;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
			var selection,$iter1_nextval,$iter1_idx,$iter1_iter,s,$iter1_array,$pyjs__trackstack_size_1,$iter1_type;
			$pyjs['track']={'module':'actions.hierarchy', 'lineno':90};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.hierarchy';
			$pyjs['track']['lineno']=90;
			$pyjs['track']['lineno']=91;
			selection = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})()['getCurrentSelection']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})();
			$pyjs['track']['lineno']=92;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool'](selection));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})()) {
				$pyjs['track']['lineno']=93;
				$pyjs['track']['lineno']=93;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=94;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter1_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return selection;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})();
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				s = $iter1_nextval['$nextval'];
				$pyjs['track']['lineno']=95;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['openEditor'](s['__getitem__']('key'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='actions.hierarchy';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=97;
		$method = $pyjs__bind_method2('openEditor', function(key) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
			}
			var edwg,pane;
			$pyjs['track']={'module':'actions.hierarchy', 'lineno':97};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.hierarchy';
			$pyjs['track']['lineno']=97;
			$pyjs['track']['lineno']=98;
			pane = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(null, $m['Pane'], null, null, [{'closeable':true}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Edit');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})();
			$pyjs['track']['lineno']=99;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['conf']['__getitem__']('mainWindow'), 'stackPane', null, null, [{'focus':true}, pane]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})();
			$pyjs['track']['lineno']=100;
			edwg = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(null, $m['EditWidget'], null, null, [{'key':key}, $p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})(), 'module'), $p['getattr']($m['EditWidget'], 'appHierarchy')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})();
			$pyjs['track']['lineno']=101;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return pane['addWidget'](edwg);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['key']]);
		$cls_definition['openEditor'] = $method;
		$pyjs['track']['lineno']=103;
		$method = $pyjs__bind_method2('resetLoadingState', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'actions.hierarchy', 'lineno':103};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.hierarchy';
			$pyjs['track']['lineno']=103;
			$pyjs['track']['lineno']=104;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['resetLoadingState'] = $method;
		$pyjs['track']['lineno']=43;
		var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Button'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('EditAction', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=106;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $p['getattr']($m['EditAction'], 'isSuitableFor'), $m['EditAction']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})();
	$pyjs['track']['lineno']=108;
	$m['CloneAction'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'actions.hierarchy';
		$pyjs['track']['lineno']=113;
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

			$pyjs['track']={'module':'actions.hierarchy', 'lineno':113};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.hierarchy';
			$pyjs['track']['lineno']=113;
			$pyjs['track']['lineno']=114;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['CloneAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})(), '__init__', args, kwargs, [{}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Clone');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})();
			$pyjs['track']['lineno']=115;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('class', 'icon clone');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})();
			$pyjs['track']['lineno']=116;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('disabled', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})();
			$pyjs['track']['lineno']=117;
			self['isDisabled'] = true;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=119;
		$method = $pyjs__bind_method2('onAttach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'actions.hierarchy', 'lineno':119};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.hierarchy';
			$pyjs['track']['lineno']=119;
			$pyjs['track']['lineno']=120;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['CloneAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})()['onAttach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})();
			$pyjs['track']['lineno']=121;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})()['selectionChangedEvent']['register'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onAttach'] = $method;
		$pyjs['track']['lineno']=123;
		$method = $pyjs__bind_method2('onDetach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'actions.hierarchy', 'lineno':123};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.hierarchy';
			$pyjs['track']['lineno']=123;
			$pyjs['track']['lineno']=124;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
}})()['selectionChangedEvent']['unregister'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})();
			$pyjs['track']['lineno']=125;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['CloneAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})()['onDetach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onDetach'] = $method;
		$pyjs['track']['lineno']=127;
		$method = $pyjs__bind_method2('onSelectionChanged', function(table, selection) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				table = arguments[1];
				selection = arguments[2];
			}

			$pyjs['track']={'module':'actions.hierarchy', 'lineno':127};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.hierarchy';
			$pyjs['track']['lineno']=127;
			$pyjs['track']['lineno']=128;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](selection);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_88_err){if (!$p['isinstance']($pyjs_dbg_88_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_88_err);}throw $pyjs_dbg_88_err;
}})()) {
				$pyjs['track']['lineno']=129;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, 'isDisabled'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_89_err){if (!$p['isinstance']($pyjs_dbg_89_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_89_err);}throw $pyjs_dbg_89_err;
}})()) {
					$pyjs['track']['lineno']=130;
					self['isDisabled'] = false;
				}
				$pyjs['track']['lineno']=131;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__setitem__']('disabled', false);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_90_err){if (!$p['isinstance']($pyjs_dbg_90_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_90_err);}throw $pyjs_dbg_90_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=133;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']($p['getattr'](self, 'isDisabled')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_91_err){if (!$p['isinstance']($pyjs_dbg_91_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_91_err);}throw $pyjs_dbg_91_err;
}})()) {
					$pyjs['track']['lineno']=134;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['__setitem__']('disabled', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_92_err){if (!$p['isinstance']($pyjs_dbg_92_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_92_err);}throw $pyjs_dbg_92_err;
}})();
					$pyjs['track']['lineno']=135;
					self['isDisabled'] = true;
				}
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['table'],['selection']]);
		$cls_definition['onSelectionChanged'] = $method;
		$pyjs['track']['lineno']=138;
		$method = $pyjs__bind_method2('isSuitableFor', function(module, handler, actionName) {
			var $and29,$and28,$and23,$and27,$and26,$and25,$and24,correctHandler,isDisabled,correctAction,$and30,$and31,$and32,hasAccess,$or15,$or14,$or17,$or16,$add6,$or13,$add5,$or18;
			$pyjs['track']={'module':'actions.hierarchy', 'lineno':138};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.hierarchy';
			$pyjs['track']['lineno']=138;
			$pyjs['track']['lineno']=139;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($or13=(module === null))?$or13:!(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('modules')['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_93_err){if (!$p['isinstance']($pyjs_dbg_93_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_93_err);}throw $pyjs_dbg_93_err;
}})()['__contains__'](module)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_94_err){if (!$p['isinstance']($pyjs_dbg_94_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_94_err);}throw $pyjs_dbg_94_err;
}})()) {
				$pyjs['track']['lineno']=140;
				$pyjs['track']['lineno']=140;
				var $pyjs__ret = false;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=142;
			correctAction = $p['op_eq'](actionName, 'clone');
			$pyjs['track']['lineno']=143;
			correctHandler = ($p['bool']($or15=$p['op_eq'](handler, 'hierarchy'))?$or15:(function(){try{try{$pyjs['in_try_except'] += 1;
			return handler['startswith']('hierarchy.');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_95_err){if (!$p['isinstance']($pyjs_dbg_95_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_95_err);}throw $pyjs_dbg_95_err;
}})());
			$pyjs['track']['lineno']=144;
			hasAccess = ($p['bool']($and23=$m['conf']['__getitem__']('currentUser'))?($p['bool']($or17=$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']('root'))?$or17:$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']($p['__op_add']($add5=module,$add6='-edit'))):$and23);
			$pyjs['track']['lineno']=145;
			isDisabled = ($p['bool']($and25=(module !== null))?($p['bool']($and26=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('modules')['__getitem__'](module)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_96_err){if (!$p['isinstance']($pyjs_dbg_96_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_96_err);}throw $pyjs_dbg_96_err;
}})()['__contains__']('disabledFunctions'))?($p['bool']($and27=$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('disabledFunctions'))?$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('disabledFunctions')['__contains__']('clone'):$and27):$and26):$and25);
			$pyjs['track']['lineno']=146;
			$pyjs['track']['lineno']=146;
			var $pyjs__ret = ($p['bool']($and29=correctAction)?($p['bool']($and30=correctHandler)?($p['bool']($and31=hasAccess)?!$p['bool'](isDisabled):$and31):$and30):$and29);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['module'],['handler'],['actionName']]);
		$cls_definition['isSuitableFor'] = $method;
		$pyjs['track']['lineno']=148;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
			var $iter2_nextval,$iter2_type,$iter2_iter,s,$iter2_idx,selection,$pyjs__trackstack_size_1,$iter2_array;
			$pyjs['track']={'module':'actions.hierarchy', 'lineno':148};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.hierarchy';
			$pyjs['track']['lineno']=148;
			$pyjs['track']['lineno']=149;
			selection = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_97_err){if (!$p['isinstance']($pyjs_dbg_97_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_97_err);}throw $pyjs_dbg_97_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_98_err){if (!$p['isinstance']($pyjs_dbg_98_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_98_err);}throw $pyjs_dbg_98_err;
}})()['getCurrentSelection']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_99_err){if (!$p['isinstance']($pyjs_dbg_99_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_99_err);}throw $pyjs_dbg_99_err;
}})();
			$pyjs['track']['lineno']=150;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool'](selection));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_100_err){if (!$p['isinstance']($pyjs_dbg_100_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_100_err);}throw $pyjs_dbg_100_err;
}})()) {
				$pyjs['track']['lineno']=151;
				$pyjs['track']['lineno']=151;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=152;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter2_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return selection;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_101_err){if (!$p['isinstance']($pyjs_dbg_101_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_101_err);}throw $pyjs_dbg_101_err;
}})();
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				s = $iter2_nextval['$nextval'];
				$pyjs['track']['lineno']=153;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['openEditor'](s['__getitem__']('key'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_102_err){if (!$p['isinstance']($pyjs_dbg_102_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_102_err);}throw $pyjs_dbg_102_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='actions.hierarchy';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=155;
		$method = $pyjs__bind_method2('openEditor', function(key) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
			}
			var edwg,pane;
			$pyjs['track']={'module':'actions.hierarchy', 'lineno':155};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.hierarchy';
			$pyjs['track']['lineno']=155;
			$pyjs['track']['lineno']=156;
			pane = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(null, $m['Pane'], null, null, [{'closeable':true, 'iconClasses':(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('modul_%s', $p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_104_err){if (!$p['isinstance']($pyjs_dbg_104_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_104_err);}throw $pyjs_dbg_104_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_105_err){if (!$p['isinstance']($pyjs_dbg_105_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_105_err);}throw $pyjs_dbg_105_err;
}})(), 'module'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_106_err){if (!$p['isinstance']($pyjs_dbg_106_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_106_err);}throw $pyjs_dbg_106_err;
}})(), 'apptype_hierarchy', 'action_edit']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_107_err){if (!$p['isinstance']($pyjs_dbg_107_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_107_err);}throw $pyjs_dbg_107_err;
}})()}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Clone');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_103_err){if (!$p['isinstance']($pyjs_dbg_103_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_103_err);}throw $pyjs_dbg_103_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_108_err){if (!$p['isinstance']($pyjs_dbg_108_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_108_err);}throw $pyjs_dbg_108_err;
}})();
			$pyjs['track']['lineno']=157;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('mainWindow')['stackPane'](pane);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_109_err){if (!$p['isinstance']($pyjs_dbg_109_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_109_err);}throw $pyjs_dbg_109_err;
}})();
			$pyjs['track']['lineno']=158;
			edwg = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(null, $m['EditWidget'], null, null, [{'node':$p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_112_err){if (!$p['isinstance']($pyjs_dbg_112_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_112_err);}throw $pyjs_dbg_112_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_113_err){if (!$p['isinstance']($pyjs_dbg_113_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_113_err);}throw $pyjs_dbg_113_err;
}})(), 'rootNode'), 'key':key, 'clone':true}, $p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_110_err){if (!$p['isinstance']($pyjs_dbg_110_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_110_err);}throw $pyjs_dbg_110_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_111_err){if (!$p['isinstance']($pyjs_dbg_111_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_111_err);}throw $pyjs_dbg_111_err;
}})(), 'module'), $p['getattr']($m['EditWidget'], 'appHierarchy')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_114_err){if (!$p['isinstance']($pyjs_dbg_114_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_114_err);}throw $pyjs_dbg_114_err;
}})();
			$pyjs['track']['lineno']=160;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return pane['addWidget'](edwg);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_115_err){if (!$p['isinstance']($pyjs_dbg_115_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_115_err);}throw $pyjs_dbg_115_err;
}})();
			$pyjs['track']['lineno']=161;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return pane['focus']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_116_err){if (!$p['isinstance']($pyjs_dbg_116_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_116_err);}throw $pyjs_dbg_116_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['key']]);
		$cls_definition['openEditor'] = $method;
		$pyjs['track']['lineno']=163;
		$method = $pyjs__bind_method2('resetLoadingState', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'actions.hierarchy', 'lineno':163};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.hierarchy';
			$pyjs['track']['lineno']=163;
			$pyjs['track']['lineno']=164;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['resetLoadingState'] = $method;
		$pyjs['track']['lineno']=108;
		var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Button'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('CloneAction', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=166;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $p['getattr']($m['CloneAction'], 'isSuitableFor'), $m['CloneAction']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_117_err){if (!$p['isinstance']($pyjs_dbg_117_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_117_err);}throw $pyjs_dbg_117_err;
}})();
	$pyjs['track']['lineno']=169;
	$m['DeleteAction'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'actions.hierarchy';
		$pyjs['track']['lineno']=173;
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

			$pyjs['track']={'module':'actions.hierarchy', 'lineno':173};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.hierarchy';
			$pyjs['track']['lineno']=173;
			$pyjs['track']['lineno']=174;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['DeleteAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_118_err){if (!$p['isinstance']($pyjs_dbg_118_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_118_err);}throw $pyjs_dbg_118_err;
}})(), '__init__', args, kwargs, [{}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Delete');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_119_err){if (!$p['isinstance']($pyjs_dbg_119_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_119_err);}throw $pyjs_dbg_119_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_120_err){if (!$p['isinstance']($pyjs_dbg_120_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_120_err);}throw $pyjs_dbg_120_err;
}})();
			$pyjs['track']['lineno']=175;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('class', 'icon delete');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_121_err){if (!$p['isinstance']($pyjs_dbg_121_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_121_err);}throw $pyjs_dbg_121_err;
}})();
			$pyjs['track']['lineno']=176;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('disabled', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_122_err){if (!$p['isinstance']($pyjs_dbg_122_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_122_err);}throw $pyjs_dbg_122_err;
}})();
			$pyjs['track']['lineno']=177;
			self['isDisabled'] = true;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=179;
		$method = $pyjs__bind_method2('onAttach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'actions.hierarchy', 'lineno':179};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.hierarchy';
			$pyjs['track']['lineno']=179;
			$pyjs['track']['lineno']=180;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['DeleteAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_123_err){if (!$p['isinstance']($pyjs_dbg_123_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_123_err);}throw $pyjs_dbg_123_err;
}})()['onAttach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_124_err){if (!$p['isinstance']($pyjs_dbg_124_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_124_err);}throw $pyjs_dbg_124_err;
}})();
			$pyjs['track']['lineno']=181;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_125_err){if (!$p['isinstance']($pyjs_dbg_125_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_125_err);}throw $pyjs_dbg_125_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_126_err){if (!$p['isinstance']($pyjs_dbg_126_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_126_err);}throw $pyjs_dbg_126_err;
}})()['selectionChangedEvent']['register'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_127_err){if (!$p['isinstance']($pyjs_dbg_127_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_127_err);}throw $pyjs_dbg_127_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onAttach'] = $method;
		$pyjs['track']['lineno']=183;
		$method = $pyjs__bind_method2('onDetach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'actions.hierarchy', 'lineno':183};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.hierarchy';
			$pyjs['track']['lineno']=183;
			$pyjs['track']['lineno']=184;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_128_err){if (!$p['isinstance']($pyjs_dbg_128_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_128_err);}throw $pyjs_dbg_128_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_129_err){if (!$p['isinstance']($pyjs_dbg_129_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_129_err);}throw $pyjs_dbg_129_err;
}})()['selectionChangedEvent']['unregister'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_130_err){if (!$p['isinstance']($pyjs_dbg_130_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_130_err);}throw $pyjs_dbg_130_err;
}})();
			$pyjs['track']['lineno']=185;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['DeleteAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_131_err){if (!$p['isinstance']($pyjs_dbg_131_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_131_err);}throw $pyjs_dbg_131_err;
}})()['onDetach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_132_err){if (!$p['isinstance']($pyjs_dbg_132_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_132_err);}throw $pyjs_dbg_132_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onDetach'] = $method;
		$pyjs['track']['lineno']=187;
		$method = $pyjs__bind_method2('onSelectionChanged', function(table, selection) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				table = arguments[1];
				selection = arguments[2];
			}

			$pyjs['track']={'module':'actions.hierarchy', 'lineno':187};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.hierarchy';
			$pyjs['track']['lineno']=187;
			$pyjs['track']['lineno']=188;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](selection);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_133_err){if (!$p['isinstance']($pyjs_dbg_133_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_133_err);}throw $pyjs_dbg_133_err;
}})()) {
				$pyjs['track']['lineno']=189;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, 'isDisabled'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_134_err){if (!$p['isinstance']($pyjs_dbg_134_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_134_err);}throw $pyjs_dbg_134_err;
}})()) {
					$pyjs['track']['lineno']=190;
					self['isDisabled'] = false;
				}
				$pyjs['track']['lineno']=191;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__setitem__']('disabled', false);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_135_err){if (!$p['isinstance']($pyjs_dbg_135_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_135_err);}throw $pyjs_dbg_135_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=193;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']($p['getattr'](self, 'isDisabled')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_136_err){if (!$p['isinstance']($pyjs_dbg_136_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_136_err);}throw $pyjs_dbg_136_err;
}})()) {
					$pyjs['track']['lineno']=194;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['__setitem__']('disabled', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_137_err){if (!$p['isinstance']($pyjs_dbg_137_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_137_err);}throw $pyjs_dbg_137_err;
}})();
					$pyjs['track']['lineno']=195;
					self['isDisabled'] = true;
				}
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['table'],['selection']]);
		$cls_definition['onSelectionChanged'] = $method;
		$pyjs['track']['lineno']=199;
		$method = $pyjs__bind_method2('isSuitableFor', function(module, handler, actionName) {
			var correctHandler,isDisabled,$and41,$and40,$and42,$or24,$or20,$or21,$or22,$or23,$and38,$and39,$and34,$and35,$and36,$and37,$and33,correctAction,hasAccess,$add7,$add8,$or19;
			$pyjs['track']={'module':'actions.hierarchy', 'lineno':199};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.hierarchy';
			$pyjs['track']['lineno']=199;
			$pyjs['track']['lineno']=200;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($or19=(module === null))?$or19:!(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('modules')['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_138_err){if (!$p['isinstance']($pyjs_dbg_138_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_138_err);}throw $pyjs_dbg_138_err;
}})()['__contains__'](module)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_139_err){if (!$p['isinstance']($pyjs_dbg_139_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_139_err);}throw $pyjs_dbg_139_err;
}})()) {
				$pyjs['track']['lineno']=201;
				$pyjs['track']['lineno']=201;
				var $pyjs__ret = false;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=203;
			correctAction = $p['op_eq'](actionName, 'delete');
			$pyjs['track']['lineno']=204;
			correctHandler = ($p['bool']($or21=$p['op_eq'](handler, 'hierarchy'))?$or21:(function(){try{try{$pyjs['in_try_except'] += 1;
			return handler['startswith']('hierarchy.');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_140_err){if (!$p['isinstance']($pyjs_dbg_140_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_140_err);}throw $pyjs_dbg_140_err;
}})());
			$pyjs['track']['lineno']=205;
			hasAccess = ($p['bool']($and33=$m['conf']['__getitem__']('currentUser'))?($p['bool']($or23=$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']('root'))?$or23:$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']($p['__op_add']($add7=module,$add8='-delete'))):$and33);
			$pyjs['track']['lineno']=206;
			isDisabled = ($p['bool']($and35=(module !== null))?($p['bool']($and36=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('modules')['__getitem__'](module)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_141_err){if (!$p['isinstance']($pyjs_dbg_141_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_141_err);}throw $pyjs_dbg_141_err;
}})()['__contains__']('disabledFunctions'))?($p['bool']($and37=$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('disabledFunctions'))?$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('disabledFunctions')['__contains__']('delete'):$and37):$and36):$and35);
			$pyjs['track']['lineno']=208;
			$pyjs['track']['lineno']=208;
			var $pyjs__ret = ($p['bool']($and39=correctAction)?($p['bool']($and40=correctHandler)?($p['bool']($and41=hasAccess)?!$p['bool'](isDisabled):$and41):$and40):$and39);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['module'],['handler'],['actionName']]);
		$cls_definition['isSuitableFor'] = $method;
		$pyjs['track']['lineno']=211;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
			var selection,d;
			$pyjs['track']={'module':'actions.hierarchy', 'lineno':211};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.hierarchy';
			$pyjs['track']['lineno']=211;
			$pyjs['track']['lineno']=212;
			selection = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_142_err){if (!$p['isinstance']($pyjs_dbg_142_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_142_err);}throw $pyjs_dbg_142_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_143_err){if (!$p['isinstance']($pyjs_dbg_143_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_143_err);}throw $pyjs_dbg_143_err;
}})()['getCurrentSelection']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_144_err){if (!$p['isinstance']($pyjs_dbg_144_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_144_err);}throw $pyjs_dbg_144_err;
}})();
			$pyjs['track']['lineno']=213;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool'](selection));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_145_err){if (!$p['isinstance']($pyjs_dbg_145_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_145_err);}throw $pyjs_dbg_145_err;
}})()) {
				$pyjs['track']['lineno']=214;
				$pyjs['track']['lineno']=214;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=215;
			d = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['html5']['ext'], 'YesNoDialog', null, null, [{'title':(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Delete them?');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_148_err){if (!$p['isinstance']($pyjs_dbg_148_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_148_err);}throw $pyjs_dbg_148_err;
}})(), 'yesCallback':$p['getattr'](self, 'doDelete'), 'yesLabel':(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Delete');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_149_err){if (!$p['isinstance']($pyjs_dbg_149_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_149_err);}throw $pyjs_dbg_149_err;
}})(), 'noLabel':(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Keep');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_150_err){if (!$p['isinstance']($pyjs_dbg_150_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_150_err);}throw $pyjs_dbg_150_err;
}})()}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(null, $m['translate'], null, null, [{'amt':(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len'](selection);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_146_err){if (!$p['isinstance']($pyjs_dbg_146_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_146_err);}throw $pyjs_dbg_146_err;
}})()}, 'Delete {amt} Entries?']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_147_err){if (!$p['isinstance']($pyjs_dbg_147_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_147_err);}throw $pyjs_dbg_147_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_151_err){if (!$p['isinstance']($pyjs_dbg_151_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_151_err);}throw $pyjs_dbg_151_err;
}})();
			$pyjs['track']['lineno']=216;
			d['deleteList'] = function(){
				var $iter3_idx,$iter3_nextval,$iter3_type,$collcomp1,$iter3_iter,$iter3_array,x,$pyjs__trackstack_size_1;
	$collcomp1 = $p['list']();
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter3_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return selection;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_152_err){if (!$p['isinstance']($pyjs_dbg_152_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_152_err);}throw $pyjs_dbg_152_err;
}})();
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				x = $iter3_nextval['$nextval'];
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $collcomp1['append'](x['__getitem__']('key'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_153_err){if (!$p['isinstance']($pyjs_dbg_153_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_153_err);}throw $pyjs_dbg_153_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='actions.hierarchy';

	return $collcomp1;}();
			$pyjs['track']['lineno']=217;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return d['__getitem__']('class')['append']('delete');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_154_err){if (!$p['isinstance']($pyjs_dbg_154_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_154_err);}throw $pyjs_dbg_154_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=219;
		$method = $pyjs__bind_method2('doDelete', function(dialog) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				dialog = arguments[1];
			}
			var $iter4_nextval,deleteList,$iter4_idx,$iter4_type,$pyjs__trackstack_size_1,$iter4_array,x,$iter4_iter;
			$pyjs['track']={'module':'actions.hierarchy', 'lineno':219};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.hierarchy';
			$pyjs['track']['lineno']=219;
			$pyjs['track']['lineno']=220;
			deleteList = $p['getattr'](dialog, 'deleteList');
			$pyjs['track']['lineno']=221;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter4_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return deleteList;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_155_err){if (!$p['isinstance']($pyjs_dbg_155_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_155_err);}throw $pyjs_dbg_155_err;
}})();
			$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
			while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
				x = $iter4_nextval['$nextval'];
				$pyjs['track']['lineno']=222;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'secure':true, 'modifies':true}, $p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_156_err){if (!$p['isinstance']($pyjs_dbg_156_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_156_err);}throw $pyjs_dbg_156_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_157_err){if (!$p['isinstance']($pyjs_dbg_157_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_157_err);}throw $pyjs_dbg_157_err;
}})(), 'module'), 'delete', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([['key', x]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_158_err){if (!$p['isinstance']($pyjs_dbg_158_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_158_err);}throw $pyjs_dbg_158_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_159_err){if (!$p['isinstance']($pyjs_dbg_159_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_159_err);}throw $pyjs_dbg_159_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='actions.hierarchy';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['dialog']]);
		$cls_definition['doDelete'] = $method;
		$pyjs['track']['lineno']=224;
		$method = $pyjs__bind_method2('resetLoadingState', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'actions.hierarchy', 'lineno':224};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.hierarchy';
			$pyjs['track']['lineno']=224;
			$pyjs['track']['lineno']=225;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['resetLoadingState'] = $method;
		$pyjs['track']['lineno']=169;
		var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Button'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('DeleteAction', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=227;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $p['getattr']($m['DeleteAction'], 'isSuitableFor'), $m['DeleteAction']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_160_err){if (!$p['isinstance']($pyjs_dbg_160_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_160_err);}throw $pyjs_dbg_160_err;
}})();
	$pyjs['track']['lineno']=229;
	$m['ReloadAction'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'actions.hierarchy';
		$pyjs['track']['lineno']=233;
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

			$pyjs['track']={'module':'actions.hierarchy', 'lineno':233};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.hierarchy';
			$pyjs['track']['lineno']=233;
			$pyjs['track']['lineno']=234;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['ReloadAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_161_err){if (!$p['isinstance']($pyjs_dbg_161_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_161_err);}throw $pyjs_dbg_161_err;
}})(), '__init__', args, kwargs, [{}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Reload');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_162_err){if (!$p['isinstance']($pyjs_dbg_162_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_162_err);}throw $pyjs_dbg_162_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_163_err){if (!$p['isinstance']($pyjs_dbg_163_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_163_err);}throw $pyjs_dbg_163_err;
}})();
			$pyjs['track']['lineno']=235;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('class', 'icon reload');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_164_err){if (!$p['isinstance']($pyjs_dbg_164_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_164_err);}throw $pyjs_dbg_164_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=238;
		$method = $pyjs__bind_method2('isSuitableFor', function(module, handler, actionName) {
			var correctHandler,correctAction,$and44,$and43,$or25,$or26;
			$pyjs['track']={'module':'actions.hierarchy', 'lineno':238};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.hierarchy';
			$pyjs['track']['lineno']=238;
			$pyjs['track']['lineno']=239;
			correctAction = $p['op_eq'](actionName, 'reload');
			$pyjs['track']['lineno']=240;
			correctHandler = ($p['bool']($or25=$p['op_eq'](handler, 'hierarchy'))?$or25:(function(){try{try{$pyjs['in_try_except'] += 1;
			return handler['startswith']('hierarchy.');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_165_err){if (!$p['isinstance']($pyjs_dbg_165_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_165_err);}throw $pyjs_dbg_165_err;
}})());
			$pyjs['track']['lineno']=241;
			$pyjs['track']['lineno']=241;
			var $pyjs__ret = ($p['bool']($and43=correctAction)?correctHandler:$and43);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['module'],['handler'],['actionName']]);
		$cls_definition['isSuitableFor'] = $method;
		$pyjs['track']['lineno']=243;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];

			$pyjs['track']={'module':'actions.hierarchy', 'lineno':243};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.hierarchy';
			$pyjs['track']['lineno']=243;
			$pyjs['track']['lineno']=244;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__getitem__']('class')['append']('is_loading');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_166_err){if (!$p['isinstance']($pyjs_dbg_166_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_166_err);}throw $pyjs_dbg_166_err;
}})();
			$pyjs['track']['lineno']=245;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['NetworkService']['notifyChange']($p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_167_err){if (!$p['isinstance']($pyjs_dbg_167_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_167_err);}throw $pyjs_dbg_167_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_168_err){if (!$p['isinstance']($pyjs_dbg_168_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_168_err);}throw $pyjs_dbg_168_err;
}})(), 'module'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_169_err){if (!$p['isinstance']($pyjs_dbg_169_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_169_err);}throw $pyjs_dbg_169_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=247;
		$method = $pyjs__bind_method2('resetLoadingState', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'actions.hierarchy', 'lineno':247};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.hierarchy';
			$pyjs['track']['lineno']=247;
			$pyjs['track']['lineno']=248;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](self['__getitem__']('class')['__contains__']('is_loading'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_170_err){if (!$p['isinstance']($pyjs_dbg_170_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_170_err);}throw $pyjs_dbg_170_err;
}})()) {
				$pyjs['track']['lineno']=249;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__getitem__']('class')['remove']('is_loading');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_171_err){if (!$p['isinstance']($pyjs_dbg_171_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_171_err);}throw $pyjs_dbg_171_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['resetLoadingState'] = $method;
		$pyjs['track']['lineno']=229;
		var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Button'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('ReloadAction', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=251;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $p['getattr']($m['ReloadAction'], 'isSuitableFor'), $m['ReloadAction']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_172_err){if (!$p['isinstance']($pyjs_dbg_172_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_172_err);}throw $pyjs_dbg_172_err;
}})();
	$pyjs['track']['lineno']=254;
	$m['SelectRootNode'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'actions.hierarchy';
		$pyjs['track']['lineno']=258;
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

			$pyjs['track']={'module':'actions.hierarchy', 'lineno':258};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.hierarchy';
			$pyjs['track']['lineno']=258;
			$pyjs['track']['lineno']=259;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['SelectRootNode'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_173_err){if (!$p['isinstance']($pyjs_dbg_173_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_173_err);}throw $pyjs_dbg_173_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_174_err){if (!$p['isinstance']($pyjs_dbg_174_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_174_err);}throw $pyjs_dbg_174_err;
}})();
			$pyjs['track']['lineno']=260;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['sinkEvent']('onChange');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_175_err){if (!$p['isinstance']($pyjs_dbg_175_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_175_err);}throw $pyjs_dbg_175_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=262;
		$method = $pyjs__bind_method2('onAttach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'actions.hierarchy', 'lineno':262};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.hierarchy';
			$pyjs['track']['lineno']=262;
			$pyjs['track']['lineno']=263;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['SelectRootNode'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_176_err){if (!$p['isinstance']($pyjs_dbg_176_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_176_err);}throw $pyjs_dbg_176_err;
}})()['onAttach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_177_err){if (!$p['isinstance']($pyjs_dbg_177_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_177_err);}throw $pyjs_dbg_177_err;
}})();
			$pyjs['track']['lineno']=264;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['update']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_178_err){if (!$p['isinstance']($pyjs_dbg_178_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_178_err);}throw $pyjs_dbg_178_err;
}})();
			$pyjs['track']['lineno']=265;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_179_err){if (!$p['isinstance']($pyjs_dbg_179_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_179_err);}throw $pyjs_dbg_179_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_180_err){if (!$p['isinstance']($pyjs_dbg_180_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_180_err);}throw $pyjs_dbg_180_err;
}})()['rootNodeChangedEvent']['register'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_181_err){if (!$p['isinstance']($pyjs_dbg_181_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_181_err);}throw $pyjs_dbg_181_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onAttach'] = $method;
		$pyjs['track']['lineno']=267;
		$method = $pyjs__bind_method2('onDetach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'actions.hierarchy', 'lineno':267};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.hierarchy';
			$pyjs['track']['lineno']=267;
			$pyjs['track']['lineno']=268;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_182_err){if (!$p['isinstance']($pyjs_dbg_182_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_182_err);}throw $pyjs_dbg_182_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_183_err){if (!$p['isinstance']($pyjs_dbg_183_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_183_err);}throw $pyjs_dbg_183_err;
}})()['rootNodeChangedEvent']['unregister'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_184_err){if (!$p['isinstance']($pyjs_dbg_184_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_184_err);}throw $pyjs_dbg_184_err;
}})();
			$pyjs['track']['lineno']=269;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['SelectRootNode'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_185_err){if (!$p['isinstance']($pyjs_dbg_185_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_185_err);}throw $pyjs_dbg_185_err;
}})()['onDetach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_186_err){if (!$p['isinstance']($pyjs_dbg_186_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_186_err);}throw $pyjs_dbg_186_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onDetach'] = $method;
		$pyjs['track']['lineno']=271;
		$method = $pyjs__bind_method2('update', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'actions.hierarchy', 'lineno':271};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.hierarchy';
			$pyjs['track']['lineno']=271;
			$pyjs['track']['lineno']=272;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['removeAllChildren']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_187_err){if (!$p['isinstance']($pyjs_dbg_187_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_187_err);}throw $pyjs_dbg_187_err;
}})();
			$pyjs['track']['lineno']=273;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'successHandler':$p['getattr'](self, 'onRootNodesAvaiable'), 'cacheable':true}, $p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_188_err){if (!$p['isinstance']($pyjs_dbg_188_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_188_err);}throw $pyjs_dbg_188_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_189_err){if (!$p['isinstance']($pyjs_dbg_189_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_189_err);}throw $pyjs_dbg_189_err;
}})(), 'module'), 'listRootNodes']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_190_err){if (!$p['isinstance']($pyjs_dbg_190_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_190_err);}throw $pyjs_dbg_190_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['update'] = $method;
		$pyjs['track']['lineno']=277;
		$method = $pyjs__bind_method2('onRootNodeChanged', function(newNode) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				newNode = arguments[1];
			}
			var $iter5_nextval,$iter5_idx,option,$iter5_array,$pyjs__trackstack_size_1,$iter5_iter,$iter5_type;
			$pyjs['track']={'module':'actions.hierarchy', 'lineno':277};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.hierarchy';
			$pyjs['track']['lineno']=277;
			$pyjs['track']['lineno']=278;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter5_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, '_children');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_191_err){if (!$p['isinstance']($pyjs_dbg_191_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_191_err);}throw $pyjs_dbg_191_err;
}})();
			$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
			while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
				option = $iter5_nextval['$nextval'];
				$pyjs['track']['lineno']=279;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq'](option['__getitem__']('value'), newNode));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_192_err){if (!$p['isinstance']($pyjs_dbg_192_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_192_err);}throw $pyjs_dbg_192_err;
}})()) {
					$pyjs['track']['lineno']=280;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return option['__setitem__']('selected', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_193_err){if (!$p['isinstance']($pyjs_dbg_193_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_193_err);}throw $pyjs_dbg_193_err;
}})();
					$pyjs['track']['lineno']=281;
					$pyjs['track']['lineno']=281;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='actions.hierarchy';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['newNode']]);
		$cls_definition['onRootNodeChanged'] = $method;
		$pyjs['track']['lineno']=283;
		$method = $pyjs__bind_method2('onRootNodesAvaiable', function(req) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				req = arguments[1];
			}
			var node,option,$iter6_idx,$iter6_type,res,$iter6_array,$pyjs__trackstack_size_1,$iter6_iter,$iter6_nextval;
			$pyjs['track']={'module':'actions.hierarchy', 'lineno':283};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.hierarchy';
			$pyjs['track']['lineno']=283;
			$pyjs['track']['lineno']=284;
			res = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['NetworkService']['decode'](req);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_194_err){if (!$p['isinstance']($pyjs_dbg_194_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_194_err);}throw $pyjs_dbg_194_err;
}})();
			$pyjs['track']['lineno']=285;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter6_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return res;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_195_err){if (!$p['isinstance']($pyjs_dbg_195_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_195_err);}throw $pyjs_dbg_195_err;
}})();
			$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
			while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
				node = $iter6_nextval['$nextval'];
				$pyjs['track']['lineno']=286;
				option = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Option']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_196_err){if (!$p['isinstance']($pyjs_dbg_196_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_196_err);}throw $pyjs_dbg_196_err;
}})();
				$pyjs['track']['lineno']=287;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return option['__setitem__']('value', node['__getitem__']('key'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_197_err){if (!$p['isinstance']($pyjs_dbg_197_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_197_err);}throw $pyjs_dbg_197_err;
}})();
				$pyjs['track']['lineno']=288;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return option['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['TextNode'](node['__getitem__']('name'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_198_err){if (!$p['isinstance']($pyjs_dbg_198_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_198_err);}throw $pyjs_dbg_198_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_199_err){if (!$p['isinstance']($pyjs_dbg_199_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_199_err);}throw $pyjs_dbg_199_err;
}})();
				$pyjs['track']['lineno']=289;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq'](node['__getitem__']('key'), $p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_200_err){if (!$p['isinstance']($pyjs_dbg_200_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_200_err);}throw $pyjs_dbg_200_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_201_err){if (!$p['isinstance']($pyjs_dbg_201_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_201_err);}throw $pyjs_dbg_201_err;
}})(), 'rootNode')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_202_err){if (!$p['isinstance']($pyjs_dbg_202_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_202_err);}throw $pyjs_dbg_202_err;
}})()) {
					$pyjs['track']['lineno']=290;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return option['__setitem__']('selected', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_203_err){if (!$p['isinstance']($pyjs_dbg_203_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_203_err);}throw $pyjs_dbg_203_err;
}})();
				}
				$pyjs['track']['lineno']=291;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['appendChild'](option);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_204_err){if (!$p['isinstance']($pyjs_dbg_204_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_204_err);}throw $pyjs_dbg_204_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='actions.hierarchy';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['req']]);
		$cls_definition['onRootNodesAvaiable'] = $method;
		$pyjs['track']['lineno']=293;
		$method = $pyjs__bind_method2('onChange', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var newRootNode;
			$pyjs['track']={'module':'actions.hierarchy', 'lineno':293};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.hierarchy';
			$pyjs['track']['lineno']=293;
			$pyjs['track']['lineno']=294;
			newRootNode = $p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__getitem__']('options')['item'](self['__getitem__']('selectedIndex'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_205_err){if (!$p['isinstance']($pyjs_dbg_205_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_205_err);}throw $pyjs_dbg_205_err;
}})(), 'value');
			$pyjs['track']['lineno']=295;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_206_err){if (!$p['isinstance']($pyjs_dbg_206_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_206_err);}throw $pyjs_dbg_206_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_207_err){if (!$p['isinstance']($pyjs_dbg_207_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_207_err);}throw $pyjs_dbg_207_err;
}})()['setRootNode'](newRootNode);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_208_err){if (!$p['isinstance']($pyjs_dbg_208_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_208_err);}throw $pyjs_dbg_208_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onChange'] = $method;
		$pyjs['track']['lineno']=298;
		$method = $pyjs__bind_method2('isSuitableFor', function(module, handler, actionName) {
			var $and45,$and46,$or28,$or27;
			$pyjs['track']={'module':'actions.hierarchy', 'lineno':298};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.hierarchy';
			$pyjs['track']['lineno']=298;
			$pyjs['track']['lineno']=299;
			$pyjs['track']['lineno']=299;
			var $pyjs__ret = ($p['bool']($and45=$p['op_eq'](actionName, 'selectrootnode'))?($p['bool']($or27=$p['op_eq'](handler, 'hierarchy'))?$or27:(function(){try{try{$pyjs['in_try_except'] += 1;
			return handler['startswith']('hierarchy.');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_209_err){if (!$p['isinstance']($pyjs_dbg_209_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_209_err);}throw $pyjs_dbg_209_err;
}})()):$and45);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['module'],['handler'],['actionName']]);
		$cls_definition['isSuitableFor'] = $method;
		$pyjs['track']['lineno']=254;
		var $bases = new Array($p['getattr']($m['html5'], 'Select'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('SelectRootNode', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=301;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $p['getattr']($m['SelectRootNode'], 'isSuitableFor'), $m['SelectRootNode']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_210_err){if (!$p['isinstance']($pyjs_dbg_210_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_210_err);}throw $pyjs_dbg_210_err;
}})();
	return this;
}; /* end actions.hierarchy */


/* end module: actions.hierarchy */


/*
PYJS_DEPS: ['html5', 'network.NetworkService', 'network', 'priorityqueue.actionDelegateSelector', 'priorityqueue', 'widgets.edit.EditWidget', 'widgets', 'widgets.edit', 'config.conf', 'config', 'pane.Pane', 'pane', 'i18n.translate', 'i18n']
*/
