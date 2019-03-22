/* start module: actions.list */
$pyjs['loaded_modules']['actions.list'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['actions.list']['__was_initialized__']) return $pyjs['loaded_modules']['actions.list'];
	if(typeof $pyjs['loaded_modules']['actions'] == 'undefined' || !$pyjs['loaded_modules']['actions']['__was_initialized__']) $p['___import___']('actions', null);
	var $m = $pyjs['loaded_modules']['actions.list'];
	$m['__repr__'] = function() { return '<module: actions.list>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'actions.list';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['actions']['list'] = $pyjs['loaded_modules']['actions.list'];
	$m.__track_lines__[1] = 'actions.list.py, line 1:\n    import html5, utils';
	$m.__track_lines__[2] = 'actions.list.py, line 2:\n    from network import NetworkService';
	$m.__track_lines__[3] = 'actions.list.py, line 3:\n    from priorityqueue import actionDelegateSelector';
	$m.__track_lines__[4] = 'actions.list.py, line 4:\n    from widgets.edit import EditWidget';
	$m.__track_lines__[5] = 'actions.list.py, line 5:\n    from config import conf';
	$m.__track_lines__[6] = 'actions.list.py, line 6:\n    from pane import Pane';
	$m.__track_lines__[7] = 'actions.list.py, line 7:\n    from widgets.repeatdate import RepeatDatePopup';
	$m.__track_lines__[8] = 'actions.list.py, line 8:\n    from widgets.csvexport import ExportCsvStarter';
	$m.__track_lines__[9] = 'actions.list.py, line 9:\n    from widgets.table import DataTable';
	$m.__track_lines__[10] = 'actions.list.py, line 10:\n    from widgets.preview import Preview';
	$m.__track_lines__[11] = 'actions.list.py, line 11:\n    from sidebarwidgets.internalpreview import InternalPreview';
	$m.__track_lines__[12] = 'actions.list.py, line 12:\n    from sidebarwidgets.filterselector import FilterSelector';
	$m.__track_lines__[13] = 'actions.list.py, line 13:\n    from i18n import translate';
	$m.__track_lines__[15] = 'actions.list.py, line 15:\n    class EditPane( Pane ):';
	$m.__track_lines__[16] = 'actions.list.py, line 16:\n    pass';
	$m.__track_lines__[18] = 'actions.list.py, line 18:\n    """';
	$m.__track_lines__[21] = 'actions.list.py, line 21:\n    class AddAction( html5.ext.Button ):';
	$m.__track_lines__[25] = 'actions.list.py, line 25:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[26] = 'actions.list.py, line 26:\n    super( AddAction, self ).__init__(translate("Add"), *args, **kwargs )';
	$m.__track_lines__[27] = 'actions.list.py, line 27:\n    self["class"] = "icon add list"';
	$m.__track_lines__[30] = 'actions.list.py, line 29:\n    @staticmethod ... def isSuitableFor( module, handler, actionName ):';
	$m.__track_lines__[31] = 'actions.list.py, line 31:\n    if module is None or module not in conf["modules"].keys():';
	$m.__track_lines__[32] = 'actions.list.py, line 32:\n    return False';
	$m.__track_lines__[34] = 'actions.list.py, line 34:\n    correctAction = actionName=="add"';
	$m.__track_lines__[35] = 'actions.list.py, line 35:\n    correctHandler = handler == "list" or handler.startswith("list.")';
	$m.__track_lines__[36] = 'actions.list.py, line 36:\n    hasAccess = conf["currentUser"] and ("root" in conf["currentUser"]["access"] or module+"-add" in conf["currentUser"]["access"])';
	$m.__track_lines__[37] = 'actions.list.py, line 37:\n    isDisabled = module is not None and "disabledFunctions" in conf["modules"][module].keys() and conf["modules"][module]["disabledFunctions"] and "add" in conf["modules"][module]["disabledFunctions"]';
	$m.__track_lines__[39] = 'actions.list.py, line 39:\n    return correctAction and correctHandler and hasAccess and not isDisabled';
	$m.__track_lines__[41] = 'actions.list.py, line 41:\n    def onClick(self, sender=None):';
	$m.__track_lines__[42] = 'actions.list.py, line 42:\n    pane = EditPane(translate("Add"), closeable=True, iconClasses=["modul_%s" % self.parent().parent().module, "apptype_list", "action_add" ])';
	$m.__track_lines__[43] = 'actions.list.py, line 43:\n    conf["mainWindow"].stackPane( pane )';
	$m.__track_lines__[44] = 'actions.list.py, line 44:\n    edwg = EditWidget( self.parent().parent().module, EditWidget.appList )';
	$m.__track_lines__[45] = 'actions.list.py, line 45:\n    pane.addWidget( edwg )';
	$m.__track_lines__[46] = 'actions.list.py, line 46:\n    pane.focus()';
	$m.__track_lines__[48] = 'actions.list.py, line 48:\n    def resetLoadingState(self):';
	$m.__track_lines__[49] = 'actions.list.py, line 49:\n    pass';
	$m.__track_lines__[51] = 'actions.list.py, line 51:\n    actionDelegateSelector.insert( 1, AddAction.isSuitableFor, AddAction )';
	$m.__track_lines__[54] = 'actions.list.py, line 54:\n    class EditAction( html5.ext.Button ):';
	$m.__track_lines__[59] = 'actions.list.py, line 59:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[60] = 'actions.list.py, line 60:\n    super( EditAction, self ).__init__( translate("Edit"), *args, **kwargs )';
	$m.__track_lines__[61] = 'actions.list.py, line 61:\n    self["class"] = "icon edit"';
	$m.__track_lines__[62] = 'actions.list.py, line 62:\n    self["disabled"]= True';
	$m.__track_lines__[63] = 'actions.list.py, line 63:\n    self.isDisabled=True';
	$m.__track_lines__[65] = 'actions.list.py, line 65:\n    def onAttach(self):';
	$m.__track_lines__[66] = 'actions.list.py, line 66:\n    super(EditAction,self).onAttach()';
	$m.__track_lines__[67] = 'actions.list.py, line 67:\n    self.parent().parent().selectionChangedEvent.register( self )';
	$m.__track_lines__[68] = 'actions.list.py, line 68:\n    self.parent().parent().selectionActivatedEvent.register( self )';
	$m.__track_lines__[70] = 'actions.list.py, line 70:\n    def onDetach(self):';
	$m.__track_lines__[71] = 'actions.list.py, line 71:\n    self.parent().parent().selectionChangedEvent.unregister( self )';
	$m.__track_lines__[72] = 'actions.list.py, line 72:\n    self.parent().parent().selectionActivatedEvent.unregister( self )';
	$m.__track_lines__[73] = 'actions.list.py, line 73:\n    super(EditAction,self).onDetach()';
	$m.__track_lines__[75] = 'actions.list.py, line 75:\n    def onSelectionChanged(self, table, selection ):';
	$m.__track_lines__[76] = 'actions.list.py, line 76:\n    if len(selection)>0:';
	$m.__track_lines__[77] = 'actions.list.py, line 77:\n    if self.isDisabled:';
	$m.__track_lines__[78] = 'actions.list.py, line 78:\n    self.isDisabled = False';
	$m.__track_lines__[79] = 'actions.list.py, line 79:\n    self["disabled"]= False';
	$m.__track_lines__[81] = 'actions.list.py, line 81:\n    if not self.isDisabled:';
	$m.__track_lines__[82] = 'actions.list.py, line 82:\n    self["disabled"]= True';
	$m.__track_lines__[83] = 'actions.list.py, line 83:\n    self.isDisabled = True';
	$m.__track_lines__[85] = 'actions.list.py, line 85:\n    def onSelectionActivated(self, table, selection ):';
	$m.__track_lines__[86] = 'actions.list.py, line 86:\n    if not self.parent().parent().isSelector and len(selection)==1:';
	$m.__track_lines__[87] = 'actions.list.py, line 87:\n    self.openEditor( selection[0]["key"] )';
	$m.__track_lines__[90] = 'actions.list.py, line 89:\n    @staticmethod ... def isSuitableFor( module, handler, actionName ):';
	$m.__track_lines__[91] = 'actions.list.py, line 91:\n    if module is None or module not in conf["modules"].keys():';
	$m.__track_lines__[92] = 'actions.list.py, line 92:\n    return False';
	$m.__track_lines__[94] = 'actions.list.py, line 94:\n    correctAction = actionName=="edit"';
	$m.__track_lines__[95] = 'actions.list.py, line 95:\n    correctHandler = handler == "list" or handler.startswith("list.")';
	$m.__track_lines__[96] = 'actions.list.py, line 96:\n    hasAccess = conf["currentUser"] and ("root" in conf["currentUser"]["access"] or module+"-edit" in conf["currentUser"]["access"])';
	$m.__track_lines__[97] = 'actions.list.py, line 97:\n    isDisabled = module is not None and "disabledFunctions" in conf["modules"][module].keys() and conf["modules"][module]["disabledFunctions"] and "edit" in conf["modules"][module]["disabledFunctions"]';
	$m.__track_lines__[99] = 'actions.list.py, line 99:\n    return correctAction and correctHandler and hasAccess and not isDisabled';
	$m.__track_lines__[101] = 'actions.list.py, line 101:\n    def onClick(self, sender=None):';
	$m.__track_lines__[102] = 'actions.list.py, line 102:\n    selection = self.parent().parent().getCurrentSelection()';
	$m.__track_lines__[103] = 'actions.list.py, line 103:\n    if not selection:';
	$m.__track_lines__[104] = 'actions.list.py, line 104:\n    return';
	$m.__track_lines__[105] = 'actions.list.py, line 105:\n    for s in selection:';
	$m.__track_lines__[106] = 'actions.list.py, line 106:\n    self.openEditor( s["key"] )';
	$m.__track_lines__[108] = 'actions.list.py, line 108:\n    def openEditor(self, key):';
	$m.__track_lines__[109] = 'actions.list.py, line 109:\n    pane = Pane(translate("Edit"), closeable=True, iconClasses=["modul_%s" % self.parent().parent().module, "apptype_list", "action_edit" ])';
	$m.__track_lines__[110] = 'actions.list.py, line 110:\n    conf["mainWindow"].stackPane( pane, focus=True )';
	$m.__track_lines__[111] = 'actions.list.py, line 111:\n    edwg = EditWidget(self.parent().parent().module, EditWidget.appList, key=key)';
	$m.__track_lines__[112] = 'actions.list.py, line 112:\n    pane.addWidget( edwg )';
	$m.__track_lines__[114] = 'actions.list.py, line 114:\n    def resetLoadingState(self):';
	$m.__track_lines__[115] = 'actions.list.py, line 115:\n    pass';
	$m.__track_lines__[117] = 'actions.list.py, line 117:\n    actionDelegateSelector.insert( 1, EditAction.isSuitableFor, EditAction )';
	$m.__track_lines__[120] = 'actions.list.py, line 120:\n    class CloneAction( html5.ext.Button ):';
	$m.__track_lines__[125] = 'actions.list.py, line 125:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[126] = 'actions.list.py, line 126:\n    super( CloneAction, self ).__init__( translate("Clone"), *args, **kwargs )';
	$m.__track_lines__[127] = 'actions.list.py, line 127:\n    self["class"] = "icon clone"';
	$m.__track_lines__[128] = 'actions.list.py, line 128:\n    self["disabled"]= True';
	$m.__track_lines__[129] = 'actions.list.py, line 129:\n    self.isDisabled=True';
	$m.__track_lines__[131] = 'actions.list.py, line 131:\n    def onAttach(self):';
	$m.__track_lines__[132] = 'actions.list.py, line 132:\n    super(CloneAction,self).onAttach()';
	$m.__track_lines__[133] = 'actions.list.py, line 133:\n    self.parent().parent().selectionChangedEvent.register( self )';
	$m.__track_lines__[135] = 'actions.list.py, line 135:\n    def onDetach(self):';
	$m.__track_lines__[136] = 'actions.list.py, line 136:\n    self.parent().parent().selectionChangedEvent.unregister( self )';
	$m.__track_lines__[137] = 'actions.list.py, line 137:\n    super(CloneAction,self).onDetach()';
	$m.__track_lines__[139] = 'actions.list.py, line 139:\n    def onSelectionChanged(self, table, selection ):';
	$m.__track_lines__[140] = 'actions.list.py, line 140:\n    if len(selection)>0:';
	$m.__track_lines__[141] = 'actions.list.py, line 141:\n    if self.isDisabled:';
	$m.__track_lines__[142] = 'actions.list.py, line 142:\n    self.isDisabled = False';
	$m.__track_lines__[143] = 'actions.list.py, line 143:\n    self["disabled"]= False';
	$m.__track_lines__[145] = 'actions.list.py, line 145:\n    if not self.isDisabled:';
	$m.__track_lines__[146] = 'actions.list.py, line 146:\n    self["disabled"]= True';
	$m.__track_lines__[147] = 'actions.list.py, line 147:\n    self.isDisabled = True';
	$m.__track_lines__[150] = 'actions.list.py, line 149:\n    @staticmethod ... def isSuitableFor( module, handler, actionName ):';
	$m.__track_lines__[151] = 'actions.list.py, line 151:\n    if module is None or module not in conf["modules"].keys():';
	$m.__track_lines__[152] = 'actions.list.py, line 152:\n    return False';
	$m.__track_lines__[154] = 'actions.list.py, line 154:\n    correctAction = actionName=="clone"';
	$m.__track_lines__[155] = 'actions.list.py, line 155:\n    correctHandler = handler == "list" or handler.startswith("list.")';
	$m.__track_lines__[156] = 'actions.list.py, line 156:\n    hasAccess = conf["currentUser"] and ("root" in conf["currentUser"]["access"] or module+"-edit" in conf["currentUser"]["access"])';
	$m.__track_lines__[157] = 'actions.list.py, line 157:\n    isDisabled = module is not None and "disabledFunctions" in conf["modules"][module].keys() and conf["modules"][module]["disabledFunctions"] and "clone" in conf["modules"][module]["disabledFunctions"]';
	$m.__track_lines__[159] = 'actions.list.py, line 159:\n    return correctAction and correctHandler and hasAccess and not isDisabled';
	$m.__track_lines__[161] = 'actions.list.py, line 161:\n    def onClick(self, sender=None):';
	$m.__track_lines__[162] = 'actions.list.py, line 162:\n    selection = self.parent().parent().getCurrentSelection()';
	$m.__track_lines__[163] = 'actions.list.py, line 163:\n    if not selection:';
	$m.__track_lines__[164] = 'actions.list.py, line 164:\n    return';
	$m.__track_lines__[165] = 'actions.list.py, line 165:\n    for s in selection:';
	$m.__track_lines__[166] = 'actions.list.py, line 166:\n    self.openEditor( s["key"] )';
	$m.__track_lines__[168] = 'actions.list.py, line 168:\n    def openEditor(self, key):';
	$m.__track_lines__[169] = 'actions.list.py, line 169:\n    pane = Pane(translate("Clone"), closeable=True, iconClasses=["modul_%s" % self.parent().parent().module, "apptype_list", "action_edit" ])';
	$m.__track_lines__[170] = 'actions.list.py, line 170:\n    conf["mainWindow"].stackPane( pane )';
	$m.__track_lines__[171] = 'actions.list.py, line 171:\n    edwg = EditWidget(self.parent().parent().module, EditWidget.appList, key=key, clone=True)';
	$m.__track_lines__[172] = 'actions.list.py, line 172:\n    pane.addWidget( edwg )';
	$m.__track_lines__[173] = 'actions.list.py, line 173:\n    pane.focus()';
	$m.__track_lines__[175] = 'actions.list.py, line 175:\n    def resetLoadingState(self):';
	$m.__track_lines__[176] = 'actions.list.py, line 176:\n    pass';
	$m.__track_lines__[178] = 'actions.list.py, line 178:\n    actionDelegateSelector.insert( 1, CloneAction.isSuitableFor, CloneAction )';
	$m.__track_lines__[182] = 'actions.list.py, line 182:\n    class DeleteAction( html5.ext.Button ):';
	$m.__track_lines__[186] = 'actions.list.py, line 186:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[187] = 'actions.list.py, line 187:\n    super( DeleteAction, self ).__init__( translate("Delete"), *args, **kwargs )';
	$m.__track_lines__[188] = 'actions.list.py, line 188:\n    self["class"] = "icon delete"';
	$m.__track_lines__[189] = 'actions.list.py, line 189:\n    self["disabled"]= True';
	$m.__track_lines__[190] = 'actions.list.py, line 190:\n    self.isDisabled=True';
	$m.__track_lines__[192] = 'actions.list.py, line 192:\n    def onAttach(self):';
	$m.__track_lines__[193] = 'actions.list.py, line 193:\n    super(DeleteAction,self).onAttach()';
	$m.__track_lines__[194] = 'actions.list.py, line 194:\n    self.parent().parent().selectionChangedEvent.register( self )';
	$m.__track_lines__[196] = 'actions.list.py, line 196:\n    def onDetach(self):';
	$m.__track_lines__[197] = 'actions.list.py, line 197:\n    self.parent().parent().selectionChangedEvent.unregister( self )';
	$m.__track_lines__[198] = 'actions.list.py, line 198:\n    super(DeleteAction,self).onDetach()';
	$m.__track_lines__[200] = 'actions.list.py, line 200:\n    def onSelectionChanged(self, table, selection ):';
	$m.__track_lines__[201] = 'actions.list.py, line 201:\n    if len(selection)>0:';
	$m.__track_lines__[202] = 'actions.list.py, line 202:\n    if self.isDisabled:';
	$m.__track_lines__[203] = 'actions.list.py, line 203:\n    self.isDisabled = False';
	$m.__track_lines__[204] = 'actions.list.py, line 204:\n    self["disabled"]= False';
	$m.__track_lines__[206] = 'actions.list.py, line 206:\n    if not self.isDisabled:';
	$m.__track_lines__[207] = 'actions.list.py, line 207:\n    self["disabled"]= True';
	$m.__track_lines__[208] = 'actions.list.py, line 208:\n    self.isDisabled = True';
	$m.__track_lines__[211] = 'actions.list.py, line 210:\n    @staticmethod ... def isSuitableFor( module, handler, actionName ):';
	$m.__track_lines__[212] = 'actions.list.py, line 212:\n    if module is None or module not in conf["modules"].keys():';
	$m.__track_lines__[213] = 'actions.list.py, line 213:\n    return False';
	$m.__track_lines__[215] = 'actions.list.py, line 215:\n    correctAction = actionName=="delete"';
	$m.__track_lines__[216] = 'actions.list.py, line 216:\n    correctHandler = handler == "list" or handler.startswith("list.")';
	$m.__track_lines__[217] = 'actions.list.py, line 217:\n    hasAccess = conf["currentUser"] and ("root" in conf["currentUser"]["access"] or module+"-delete" in conf["currentUser"]["access"])';
	$m.__track_lines__[218] = 'actions.list.py, line 218:\n    isDisabled = module is not None and "disabledFunctions" in conf["modules"][module].keys() and conf["modules"][module]["disabledFunctions"] and "delete" in conf["modules"][module]["disabledFunctions"]';
	$m.__track_lines__[220] = 'actions.list.py, line 220:\n    return correctAction and correctHandler and hasAccess and not isDisabled';
	$m.__track_lines__[222] = 'actions.list.py, line 222:\n    def onClick(self, sender=None):';
	$m.__track_lines__[223] = 'actions.list.py, line 223:\n    selection = self.parent().parent().getCurrentSelection()';
	$m.__track_lines__[224] = 'actions.list.py, line 224:\n    if not selection:';
	$m.__track_lines__[225] = 'actions.list.py, line 225:\n    return';
	$m.__track_lines__[226] = 'actions.list.py, line 226:\n    d = html5.ext.YesNoDialog(translate("Delete {amt} Entries?",amt=len(selection)) ,title=translate("Delete them?"), yesCallback=self.doDelete, yesLabel=translate("Delete"), noLabel=translate("Keep") )';
	$m.__track_lines__[227] = 'actions.list.py, line 227:\n    d.deleteList = [x["key"] for x in selection]';
	$m.__track_lines__[228] = 'actions.list.py, line 228:\n    d["class"].append( "delete" )';
	$m.__track_lines__[230] = 'actions.list.py, line 230:\n    def doDelete(self, dialog):';
	$m.__track_lines__[231] = 'actions.list.py, line 231:\n    deleteList = dialog.deleteList';
	$m.__track_lines__[232] = 'actions.list.py, line 232:\n    for x in deleteList:';
	$m.__track_lines__[233] = 'actions.list.py, line 233:\n    NetworkService.request( self.parent().parent().module, "delete", {"key": x}, secure=True, modifies=True )';
	$m.__track_lines__[235] = 'actions.list.py, line 235:\n    def resetLoadingState(self):';
	$m.__track_lines__[236] = 'actions.list.py, line 236:\n    pass';
	$m.__track_lines__[238] = 'actions.list.py, line 238:\n    actionDelegateSelector.insert( 1, DeleteAction.isSuitableFor, DeleteAction )';
	$m.__track_lines__[240] = 'actions.list.py, line 240:\n    class ListPreviewAction(html5.Span):';
	$m.__track_lines__[242] = 'actions.list.py, line 242:\n    def __init__(self, *args, **kwargs ):';
	$m.__track_lines__[243] = 'actions.list.py, line 243:\n    super(ListPreviewAction, self ).__init__(*args, **kwargs)';
	$m.__track_lines__[245] = 'actions.list.py, line 245:\n    self.urlCb = html5.Select()';
	$m.__track_lines__[246] = 'actions.list.py, line 246:\n    self.appendChild(self.urlCb)';
	$m.__track_lines__[248] = 'actions.list.py, line 248:\n    btn = html5.ext.Button(translate("Preview"), callback=self.onClick)';
	$m.__track_lines__[249] = 'actions.list.py, line 249:\n    btn["class"] = "icon preview"';
	$m.__track_lines__[250] = 'actions.list.py, line 250:\n    self.appendChild(btn)';
	$m.__track_lines__[251] = 'actions.list.py, line 251:\n    self.urls = None';
	$m.__track_lines__[253] = 'actions.list.py, line 253:\n    self["disabled"] = True';
	$m.__track_lines__[254] = 'actions.list.py, line 254:\n    self.isDisabled = True';
	$m.__track_lines__[256] = 'actions.list.py, line 256:\n    def onChange(self, event):';
	$m.__track_lines__[257] = 'actions.list.py, line 257:\n    event.stopPropagation()';
	$m.__track_lines__[258] = 'actions.list.py, line 258:\n    newUrl = self.urlCb["options"].item(self.urlCb["selectedIndex"]).value';
	$m.__track_lines__[259] = 'actions.list.py, line 259:\n    self.setUrl(newUrl)';
	$m.__track_lines__[261] = 'actions.list.py, line 261:\n    def rebuildCB(self, *args, **kwargs):';
	$m.__track_lines__[262] = 'actions.list.py, line 262:\n    self.urlCb.removeAllChildren()';
	$m.__track_lines__[264] = 'actions.list.py, line 264:\n    if isinstance(self.urls, list):';
	$m.__track_lines__[265] = 'actions.list.py, line 265:\n    self.urls = {x: x for x in self.urls}';
	$m.__track_lines__[267] = 'actions.list.py, line 267:\n    if not isinstance(self.urls, dict) or len(self.urls.keys()) == 1:';
	$m.__track_lines__[268] = 'actions.list.py, line 268:\n    self.urlCb["style"]["display"] = "none"';
	$m.__track_lines__[269] = 'actions.list.py, line 269:\n    return';
	$m.__track_lines__[271] = 'actions.list.py, line 271:\n    for name, url in self.urls.items():';
	$m.__track_lines__[272] = 'actions.list.py, line 272:\n    o = html5.Option()';
	$m.__track_lines__[273] = 'actions.list.py, line 273:\n    o["value"] = url';
	$m.__track_lines__[274] = 'actions.list.py, line 274:\n    o.appendChild(html5.TextNode(name))';
	$m.__track_lines__[275] = 'actions.list.py, line 275:\n    self.urlCb.appendChild(o)';
	$m.__track_lines__[277] = 'actions.list.py, line 277:\n    self.urlCb["style"]["display"] = ""';
	$m.__track_lines__[279] = 'actions.list.py, line 279:\n    def onAttach(self):';
	$m.__track_lines__[280] = 'actions.list.py, line 280:\n    super(ListPreviewAction,self).onAttach()';
	$m.__track_lines__[281] = 'actions.list.py, line 281:\n    self.parent().parent().selectionChangedEvent.register(self)';
	$m.__track_lines__[283] = 'actions.list.py, line 283:\n    module = self.parent().parent().module';
	$m.__track_lines__[284] = 'actions.list.py, line 284:\n    if module in conf["modules"].keys():';
	$m.__track_lines__[285] = 'actions.list.py, line 285:\n    moduleConfig = conf["modules"][module]';
	$m.__track_lines__[287] = 'actions.list.py, line 287:\n    self.urls = moduleConfig.get("preview", moduleConfig.get("previewurls"))';
	$m.__track_lines__[288] = 'actions.list.py, line 288:\n    if self.urls:';
	$m.__track_lines__[289] = 'actions.list.py, line 289:\n    self.rebuildCB()';
	$m.__track_lines__[291] = 'actions.list.py, line 291:\n    def onDetach(self):';
	$m.__track_lines__[292] = 'actions.list.py, line 292:\n    self.parent().parent().selectionChangedEvent.unregister(self)';
	$m.__track_lines__[293] = 'actions.list.py, line 293:\n    super(ListPreviewAction, self).onDetach()';
	$m.__track_lines__[295] = 'actions.list.py, line 295:\n    def onSelectionChanged(self, table, selection):';
	$m.__track_lines__[296] = 'actions.list.py, line 296:\n    if len(selection) > 0:';
	$m.__track_lines__[297] = 'actions.list.py, line 297:\n    if self.isDisabled:';
	$m.__track_lines__[298] = 'actions.list.py, line 298:\n    self.isDisabled = False';
	$m.__track_lines__[299] = 'actions.list.py, line 299:\n    self["disabled"] = False';
	$m.__track_lines__[302] = 'actions.list.py, line 302:\n    if not self.isDisabled:';
	$m.__track_lines__[303] = 'actions.list.py, line 303:\n    self["disabled"]= True';
	$m.__track_lines__[304] = 'actions.list.py, line 304:\n    self.isDisabled = True';
	$m.__track_lines__[306] = 'actions.list.py, line 306:\n    def onClick(self, sender=None):';
	$m.__track_lines__[307] = 'actions.list.py, line 307:\n    if self.urls is None:';
	$m.__track_lines__[308] = 'actions.list.py, line 308:\n    return';
	$m.__track_lines__[310] = 'actions.list.py, line 310:\n    selection = self.parent().parent().getCurrentSelection()';
	$m.__track_lines__[312] = 'actions.list.py, line 312:\n    if not selection:';
	$m.__track_lines__[313] = 'actions.list.py, line 313:\n    return';
	$m.__track_lines__[315] = 'actions.list.py, line 315:\n    for entry in selection:';
	$m.__track_lines__[316] = 'actions.list.py, line 316:\n    if isinstance(self.urls, str):';
	$m.__track_lines__[317] = 'actions.list.py, line 317:\n    newUrl = self.urls';
	$m.__track_lines__[319] = 'actions.list.py, line 319:\n    newUrl = self.urls.values()[0]';
	$m.__track_lines__[321] = 'actions.list.py, line 321:\n    newUrl = self.urlCb["options"].item(self.urlCb["selectedIndex"]).value';
	$m.__track_lines__[323] = 'actions.list.py, line 323:\n    newUrl = newUrl \\';
	$m.__track_lines__[327] = 'actions.list.py, line 327:\n    for k, v in entry.items():';
	$m.__track_lines__[328] = 'actions.list.py, line 328:\n    newUrl = newUrl.replace("{{%s}}" % k, v)';
	$m.__track_lines__[330] = 'actions.list.py, line 330:\n    newUrl = newUrl.replace("\'", "\\\\\'")';
	$m.__track_lines__[332] = 'actions.list.py, line 332:\n    target = "%s-%s" % (self.parent().parent().module, entry.get("key"))';
	$m.__track_lines__[333] = 'actions.list.py, line 333:\n    eval("""window.open(\'""" + newUrl + """\', \'""" + target + """\');""")';
	$m.__track_lines__[336] = 'actions.list.py, line 335:\n    @staticmethod ... def isSuitableFor( module, handler, actionName ):';
	$m.__track_lines__[337] = 'actions.list.py, line 337:\n    if module is None or module not in conf["modules"].keys():';
	$m.__track_lines__[338] = 'actions.list.py, line 338:\n    return False';
	$m.__track_lines__[340] = 'actions.list.py, line 340:\n    correctAction = actionName=="preview"';
	$m.__track_lines__[341] = 'actions.list.py, line 341:\n    correctHandler = handler == "list" or handler.startswith("list.")';
	$m.__track_lines__[342] = 'actions.list.py, line 342:\n    hasAccess = conf["currentUser"] and ("root" in conf["currentUser"]["access"] or module+"-view" in conf["currentUser"]["access"])';
	$m.__track_lines__[343] = 'actions.list.py, line 343:\n    isDisabled = module is not None and "disabledFunctions" in conf["modules"][module].keys() and conf["modules"][module]["disabledFunctions"] and "view" in conf["modules"][module]["disabledFunctions"]';
	$m.__track_lines__[344] = 'actions.list.py, line 344:\n    isAvailable = conf["modules"][module].get("preview", conf["modules"][module].get("previewurls"))';
	$m.__track_lines__[346] = 'actions.list.py, line 346:\n    return correctAction and correctHandler and hasAccess and not isDisabled and isAvailable';
	$m.__track_lines__[348] = 'actions.list.py, line 348:\n    actionDelegateSelector.insert( 2, ListPreviewAction.isSuitableFor, ListPreviewAction )';
	$m.__track_lines__[351] = 'actions.list.py, line 351:\n    class ListPreviewInlineAction( html5.ext.Button ):';
	$m.__track_lines__[352] = 'actions.list.py, line 352:\n    def __init__(self, *args, **kwargs ):';
	$m.__track_lines__[353] = 'actions.list.py, line 353:\n    super( ListPreviewInlineAction, self ).__init__( translate("Preview"), *args, **kwargs )';
	$m.__track_lines__[354] = 'actions.list.py, line 354:\n    self["class"] = "icon preview"';
	$m.__track_lines__[355] = 'actions.list.py, line 355:\n    self["disabled"] = True';
	$m.__track_lines__[356] = 'actions.list.py, line 356:\n    self.urls = None';
	$m.__track_lines__[358] = 'actions.list.py, line 358:\n    def onAttach(self):';
	$m.__track_lines__[359] = 'actions.list.py, line 359:\n    super( ListPreviewInlineAction,self ).onAttach()';
	$m.__track_lines__[360] = 'actions.list.py, line 360:\n    self.parent().parent().selectionChangedEvent.register( self )';
	$m.__track_lines__[362] = 'actions.list.py, line 362:\n    def onDetach(self):';
	$m.__track_lines__[363] = 'actions.list.py, line 363:\n    self.parent().parent().selectionChangedEvent.unregister( self )';
	$m.__track_lines__[364] = 'actions.list.py, line 364:\n    super( ListPreviewInlineAction, self ).onDetach()';
	$m.__track_lines__[366] = 'actions.list.py, line 366:\n    def onSelectionChanged(self, table, selection):';
	$m.__track_lines__[367] = 'actions.list.py, line 367:\n    if self.parent().parent().isSelector:';
	$m.__track_lines__[368] = 'actions.list.py, line 368:\n    return';
	$m.__track_lines__[371] = 'actions.list.py, line 371:\n    module = self.parent().parent().module';
	$m.__track_lines__[372] = 'actions.list.py, line 372:\n    if conf["modules"][module].get("disableInternalPreview", not conf["internalPreview"]):';
	$m.__track_lines__[373] = 'actions.list.py, line 373:\n    return';
	$m.__track_lines__[376] = 'actions.list.py, line 376:\n    if (self.parent().parent().sideBar.getWidget()';
	$m.__track_lines__[378] = 'actions.list.py, line 378:\n    return';
	$m.__track_lines__[382] = 'actions.list.py, line 382:\n    if len(selection) == 1:';
	$m.__track_lines__[383] = 'actions.list.py, line 383:\n    preview = InternalPreview( self.parent().parent().module, self.parent().parent()._structure, selection[0])';
	$m.__track_lines__[384] = 'actions.list.py, line 384:\n    self.parent().parent().sideBar.setWidget( preview )';
	$m.__track_lines__[386] = 'actions.list.py, line 386:\n    if isinstance( self.parent().parent().sideBar.getWidget(), InternalPreview ):';
	$m.__track_lines__[387] = 'actions.list.py, line 387:\n    self.parent().parent().sideBar.setWidget( None )';
	$m.__track_lines__[390] = 'actions.list.py, line 389:\n    @staticmethod ... def isSuitableFor( module, handler, actionName ):';
	$m.__track_lines__[391] = 'actions.list.py, line 391:\n    if module is None or module not in conf["modules"].keys():';
	$m.__track_lines__[392] = 'actions.list.py, line 392:\n    return False';
	$m.__track_lines__[394] = 'actions.list.py, line 394:\n    correctAction = actionName == "preview"';
	$m.__track_lines__[395] = 'actions.list.py, line 395:\n    correctHandler = handler == "list" or handler.startswith("list.")';
	$m.__track_lines__[396] = 'actions.list.py, line 396:\n    hasAccess = conf["currentUser"] and ("root" in conf["currentUser"]["access"] or module+"-view" in conf["currentUser"]["access"])';
	$m.__track_lines__[397] = 'actions.list.py, line 397:\n    isDisabled = module is not None and "disabledFunctions" in conf["modules"][module].keys() and conf["modules"][module]["disabledFunctions"] and "view" in conf["modules"][module]["disabledFunctions"]';
	$m.__track_lines__[399] = 'actions.list.py, line 399:\n    return correctAction and correctHandler and hasAccess and not isDisabled';
	$m.__track_lines__[401] = 'actions.list.py, line 401:\n    actionDelegateSelector.insert( 1, ListPreviewInlineAction.isSuitableFor, ListPreviewInlineAction )';
	$m.__track_lines__[404] = 'actions.list.py, line 404:\n    class CloseAction( html5.ext.Button ):';
	$m.__track_lines__[405] = 'actions.list.py, line 405:\n    def __init__(self, *args, **kwargs ):';
	$m.__track_lines__[406] = 'actions.list.py, line 406:\n    super( CloseAction, self ).__init__( translate("Close"), *args, **kwargs )';
	$m.__track_lines__[407] = 'actions.list.py, line 407:\n    self["class"] = "icon close"';
	$m.__track_lines__[409] = 'actions.list.py, line 409:\n    def onClick(self, sender=None):';
	$m.__track_lines__[410] = 'actions.list.py, line 410:\n    conf["mainWindow"].removeWidget( self.parent().parent() )';
	$m.__track_lines__[413] = 'actions.list.py, line 412:\n    @staticmethod ... def isSuitableFor( module, handler, actionName ):';
	$m.__track_lines__[414] = 'actions.list.py, line 414:\n    return actionName=="close"';
	$m.__track_lines__[416] = 'actions.list.py, line 416:\n    actionDelegateSelector.insert( 1, CloseAction.isSuitableFor, CloseAction )';
	$m.__track_lines__[418] = 'actions.list.py, line 418:\n    class ActivateSelectionAction( html5.ext.Button ):';
	$m.__track_lines__[419] = 'actions.list.py, line 419:\n    def __init__(self, *args, **kwargs ):';
	$m.__track_lines__[420] = 'actions.list.py, line 420:\n    super( ActivateSelectionAction, self ).__init__( translate("Select"), *args, **kwargs )';
	$m.__track_lines__[421] = 'actions.list.py, line 421:\n    self["class"] = "icon activateselection"';
	$m.__track_lines__[423] = 'actions.list.py, line 423:\n    def onClick(self, sender=None):';
	$m.__track_lines__[424] = 'actions.list.py, line 424:\n    self.parent().parent().activateCurrentSelection()';
	$m.__track_lines__[427] = 'actions.list.py, line 426:\n    @staticmethod ... def isSuitableFor( module, handler, actionName ):';
	$m.__track_lines__[428] = 'actions.list.py, line 428:\n    return actionName=="select"';
	$m.__track_lines__[430] = 'actions.list.py, line 430:\n    actionDelegateSelector.insert( 1, ActivateSelectionAction.isSuitableFor, ActivateSelectionAction )';
	$m.__track_lines__[433] = 'actions.list.py, line 433:\n    class SelectFieldsPopup( html5.ext.Popup ):';
	$m.__track_lines__[434] = 'actions.list.py, line 434:\n    def __init__(self, listWdg, *args, **kwargs):';
	$m.__track_lines__[435] = 'actions.list.py, line 435:\n    if not listWdg._structure:';
	$m.__track_lines__[436] = 'actions.list.py, line 436:\n    return';
	$m.__track_lines__[438] = 'actions.list.py, line 438:\n    super( SelectFieldsPopup, self ).__init__( title=translate("Select fields"), *args, **kwargs )';
	$m.__track_lines__[440] = 'actions.list.py, line 440:\n    self["class"].append("selectfields")';
	$m.__track_lines__[441] = 'actions.list.py, line 441:\n    self.listWdg = listWdg';
	$m.__track_lines__[442] = 'actions.list.py, line 442:\n    self.checkboxes = []';
	$m.__track_lines__[444] = 'actions.list.py, line 444:\n    ul = html5.Ul()';
	$m.__track_lines__[445] = 'actions.list.py, line 445:\n    self.appendChild( ul )';
	$m.__track_lines__[447] = 'actions.list.py, line 447:\n    for key, bone in self.listWdg._structure:';
	$m.__track_lines__[448] = 'actions.list.py, line 448:\n    li = html5.Li()';
	$m.__track_lines__[449] = 'actions.list.py, line 449:\n    ul.appendChild( li )';
	$m.__track_lines__[451] = 'actions.list.py, line 451:\n    chkBox = html5.Input()';
	$m.__track_lines__[452] = 'actions.list.py, line 452:\n    chkBox["type"] = "checkbox"';
	$m.__track_lines__[453] = 'actions.list.py, line 453:\n    chkBox["value"] = key';
	$m.__track_lines__[455] = 'actions.list.py, line 455:\n    li.appendChild(chkBox)';
	$m.__track_lines__[456] = 'actions.list.py, line 456:\n    self.checkboxes.append( chkBox )';
	$m.__track_lines__[458] = 'actions.list.py, line 458:\n    if key in self.listWdg.getFields():';
	$m.__track_lines__[459] = 'actions.list.py, line 459:\n    chkBox["checked"] = True';
	$m.__track_lines__[460] = 'actions.list.py, line 460:\n    lbl = html5.Label(bone["descr"],forElem=chkBox)';
	$m.__track_lines__[461] = 'actions.list.py, line 461:\n    li.appendChild(lbl)';
	$m.__track_lines__[464] = 'actions.list.py, line 464:\n    div = html5.Div()';
	$m.__track_lines__[465] = 'actions.list.py, line 465:\n    div[ "class" ].append( "selectiontools" )';
	$m.__track_lines__[467] = 'actions.list.py, line 467:\n    self.appendChild( div )';
	$m.__track_lines__[469] = 'actions.list.py, line 469:\n    self.selectAllBtn =  html5.ext.Button( translate( "Select all" ), callback=self.doSelectAll )';
	$m.__track_lines__[470] = 'actions.list.py, line 470:\n    self.selectAllBtn[ "class" ].append( "icon" )';
	$m.__track_lines__[471] = 'actions.list.py, line 471:\n    self.selectAllBtn[ "class" ].append( "selectall" )';
	$m.__track_lines__[472] = 'actions.list.py, line 472:\n    self.unselectAllBtn =  html5.ext.Button( translate( "Unselect all" ), callback=self.doUnselectAll )';
	$m.__track_lines__[473] = 'actions.list.py, line 473:\n    self.unselectAllBtn[ "class" ].append( "icon" )';
	$m.__track_lines__[474] = 'actions.list.py, line 474:\n    self.unselectAllBtn[ "class" ].append( "unselectall" )';
	$m.__track_lines__[475] = 'actions.list.py, line 475:\n    self.invertSelectionBtn =  html5.ext.Button( translate( "Invert selection" ), callback=self.doInvertSelection )';
	$m.__track_lines__[476] = 'actions.list.py, line 476:\n    self.invertSelectionBtn[ "class" ].append( "icon" )';
	$m.__track_lines__[477] = 'actions.list.py, line 477:\n    self.invertSelectionBtn[ "class" ].append( "selectinvert" )';
	$m.__track_lines__[479] = 'actions.list.py, line 479:\n    div.appendChild(self.selectAllBtn)';
	$m.__track_lines__[480] = 'actions.list.py, line 480:\n    div.appendChild(self.unselectAllBtn)';
	$m.__track_lines__[481] = 'actions.list.py, line 481:\n    div.appendChild(self.invertSelectionBtn)';
	$m.__track_lines__[484] = 'actions.list.py, line 484:\n    self.cancelBtn = html5.ext.Button( translate( "Cancel" ), callback=self.doCancel)';
	$m.__track_lines__[485] = 'actions.list.py, line 485:\n    self.cancelBtn["class"].append("btn_no")';
	$m.__track_lines__[487] = 'actions.list.py, line 487:\n    self.applyBtn = html5.ext.Button( translate( "Apply" ), callback=self.doApply)';
	$m.__track_lines__[488] = 'actions.list.py, line 488:\n    self.applyBtn["class"].append("btn_yes")';
	$m.__track_lines__[490] = 'actions.list.py, line 490:\n    self.appendChild(self.applyBtn)';
	$m.__track_lines__[491] = 'actions.list.py, line 491:\n    self.appendChild(self.cancelBtn)';
	$m.__track_lines__[493] = 'actions.list.py, line 493:\n    def doApply(self, *args, **kwargs):';
	$m.__track_lines__[494] = 'actions.list.py, line 494:\n    self.applyBtn["class"].append("is_loading")';
	$m.__track_lines__[495] = 'actions.list.py, line 495:\n    self.applyBtn["disabled"] = True';
	$m.__track_lines__[497] = 'actions.list.py, line 497:\n    res = []';
	$m.__track_lines__[498] = 'actions.list.py, line 498:\n    for c in self.checkboxes:';
	$m.__track_lines__[499] = 'actions.list.py, line 499:\n    if c["checked"]:';
	$m.__track_lines__[500] = 'actions.list.py, line 500:\n    res.append( c["value"] )';
	$m.__track_lines__[502] = 'actions.list.py, line 502:\n    self.listWdg.setFields( res )';
	$m.__track_lines__[503] = 'actions.list.py, line 503:\n    self.close()';
	$m.__track_lines__[505] = 'actions.list.py, line 505:\n    def doCancel(self, *args, **kwargs):';
	$m.__track_lines__[506] = 'actions.list.py, line 506:\n    self.close()';
	$m.__track_lines__[508] = 'actions.list.py, line 508:\n    def doSelectAll(self, *args, **kwargs):';
	$m.__track_lines__[509] = 'actions.list.py, line 509:\n    for cb in self.checkboxes:';
	$m.__track_lines__[510] = 'actions.list.py, line 510:\n    if cb[ "checked" ] == False:';
	$m.__track_lines__[511] = 'actions.list.py, line 511:\n    cb[ "checked" ] = True';
	$m.__track_lines__[513] = 'actions.list.py, line 513:\n    def doUnselectAll(self, *args, **kwargs):';
	$m.__track_lines__[514] = 'actions.list.py, line 514:\n    for cb in self.checkboxes:';
	$m.__track_lines__[515] = 'actions.list.py, line 515:\n    if cb[ "checked" ] == True:';
	$m.__track_lines__[516] = 'actions.list.py, line 516:\n    cb[ "checked" ] = False';
	$m.__track_lines__[518] = 'actions.list.py, line 518:\n    def doInvertSelection(self, *args, **kwargs):';
	$m.__track_lines__[519] = 'actions.list.py, line 519:\n    for cb in self.checkboxes:';
	$m.__track_lines__[520] = 'actions.list.py, line 520:\n    if cb[ "checked" ] == False:';
	$m.__track_lines__[521] = 'actions.list.py, line 521:\n    cb[ "checked" ] = True';
	$m.__track_lines__[523] = 'actions.list.py, line 523:\n    cb[ "checked" ] = False';
	$m.__track_lines__[525] = 'actions.list.py, line 525:\n    class SelectFieldsAction( html5.ext.Button ):';
	$m.__track_lines__[526] = 'actions.list.py, line 526:\n    def __init__(self, *args, **kwargs ):';
	$m.__track_lines__[527] = 'actions.list.py, line 527:\n    super( SelectFieldsAction, self ).__init__( translate("Select fields"), *args, **kwargs )';
	$m.__track_lines__[528] = 'actions.list.py, line 528:\n    self["class"] = "icon selectfields"';
	$m.__track_lines__[529] = 'actions.list.py, line 529:\n    self["disabled"] = self.isDisabled = True';
	$m.__track_lines__[531] = 'actions.list.py, line 531:\n    def onClick(self, sender=None):';
	$m.__track_lines__[532] = 'actions.list.py, line 532:\n    SelectFieldsPopup( self.parent().parent() )';
	$m.__track_lines__[534] = 'actions.list.py, line 534:\n    def onAttach(self):';
	$m.__track_lines__[535] = 'actions.list.py, line 535:\n    super(SelectFieldsAction,self).onAttach()';
	$m.__track_lines__[536] = 'actions.list.py, line 536:\n    self.parent().parent().tableChangedEvent.register( self )';
	$m.__track_lines__[538] = 'actions.list.py, line 538:\n    def onDetach(self):';
	$m.__track_lines__[539] = 'actions.list.py, line 539:\n    self.parent().parent().tableChangedEvent.unregister( self )';
	$m.__track_lines__[540] = 'actions.list.py, line 540:\n    super(SelectFieldsAction,self).onDetach()';
	$m.__track_lines__[542] = 'actions.list.py, line 542:\n    def onTableChanged(self, table, count):';
	$m.__track_lines__[543] = 'actions.list.py, line 543:\n    if count > 0:';
	$m.__track_lines__[544] = 'actions.list.py, line 544:\n    self["disabled"] = self.isDisabled = False';
	$m.__track_lines__[546] = 'actions.list.py, line 546:\n    self["disabled"] = self.isDisabled = True';
	$m.__track_lines__[549] = 'actions.list.py, line 548:\n    @staticmethod ... def isSuitableFor( module, handler, actionName ):';
	$m.__track_lines__[550] = 'actions.list.py, line 550:\n    return actionName=="selectfields"';
	$m.__track_lines__[552] = 'actions.list.py, line 552:\n    actionDelegateSelector.insert( 1, SelectFieldsAction.isSuitableFor, SelectFieldsAction )';
	$m.__track_lines__[554] = 'actions.list.py, line 554:\n    class ReloadAction( html5.ext.Button ):';
	$m.__track_lines__[558] = 'actions.list.py, line 558:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[559] = 'actions.list.py, line 559:\n    super( ReloadAction, self ).__init__( translate("Reload"), *args, **kwargs )';
	$m.__track_lines__[560] = 'actions.list.py, line 560:\n    self["class"] = "icon reload"';
	$m.__track_lines__[563] = 'actions.list.py, line 562:\n    @staticmethod ... def isSuitableFor( module, handler, actionName ):';
	$m.__track_lines__[564] = 'actions.list.py, line 564:\n    correctAction = actionName=="reload"';
	$m.__track_lines__[565] = 'actions.list.py, line 565:\n    correctHandler = handler == "list" or handler.startswith("list.")';
	$m.__track_lines__[566] = 'actions.list.py, line 566:\n    return correctAction and correctHandler';
	$m.__track_lines__[568] = 'actions.list.py, line 568:\n    def onClick(self, sender=None):';
	$m.__track_lines__[569] = 'actions.list.py, line 569:\n    self["class"].append("is_loading")';
	$m.__track_lines__[570] = 'actions.list.py, line 570:\n    NetworkService.notifyChange( self.parent().parent().module )';
	$m.__track_lines__[572] = 'actions.list.py, line 572:\n    def resetLoadingState(self):';
	$m.__track_lines__[573] = 'actions.list.py, line 573:\n    if "is_loading" in self["class"]:';
	$m.__track_lines__[574] = 'actions.list.py, line 574:\n    self["class"].remove("is_loading")';
	$m.__track_lines__[577] = 'actions.list.py, line 577:\n    actionDelegateSelector.insert( 1, ReloadAction.isSuitableFor, ReloadAction )';
	$m.__track_lines__[580] = 'actions.list.py, line 580:\n    class ListSelectFilterAction( html5.ext.Button ):';
	$m.__track_lines__[581] = 'actions.list.py, line 581:\n    def __init__(self, *args, **kwargs ):';
	$m.__track_lines__[582] = 'actions.list.py, line 582:\n    super( ListSelectFilterAction, self ).__init__( translate("Select Filter"), *args, **kwargs )';
	$m.__track_lines__[583] = 'actions.list.py, line 583:\n    self["class"] = "icon selectfilter"';
	$m.__track_lines__[584] = 'actions.list.py, line 584:\n    self.urls = None';
	$m.__track_lines__[585] = 'actions.list.py, line 585:\n    self.filterSelector = None';
	$m.__track_lines__[587] = 'actions.list.py, line 587:\n    def onAttach(self):';
	$m.__track_lines__[588] = 'actions.list.py, line 588:\n    super(ListSelectFilterAction,self).onAttach()';
	$m.__track_lines__[589] = 'actions.list.py, line 589:\n    modul = self.parent().parent().module';
	$m.__track_lines__[590] = 'actions.list.py, line 590:\n    if self.parent().parent().filterID:';
	$m.__track_lines__[592] = 'actions.list.py, line 592:\n    self["disabled"] = True';
	$m.__track_lines__[593] = 'actions.list.py, line 593:\n    if modul in conf["modules"].keys():';
	$m.__track_lines__[594] = 'actions.list.py, line 594:\n    modulConfig = conf["modules"][modul]';
	$m.__track_lines__[595] = 'actions.list.py, line 595:\n    if "disabledFunctions" in modulConfig.keys() and modulConfig[ "disabledFunctions" ] and "fulltext-search" in modulConfig[ "disabledFunctions" ]:';
	$m.__track_lines__[597] = 'actions.list.py, line 597:\n    if not "views" in modulConfig.keys() or not modulConfig["views"]:';
	$m.__track_lines__[599] = 'actions.list.py, line 599:\n    self["disabled"] = True';
	$m.__track_lines__[601] = 'actions.list.py, line 601:\n    def onClick(self, sender=None):';
	$m.__track_lines__[602] = 'actions.list.py, line 602:\n    if isinstance(self.parent().parent().sideBar.getWidget(), FilterSelector):';
	$m.__track_lines__[603] = 'actions.list.py, line 603:\n    self.parent().parent().sideBar.setWidget(None)';
	$m.__track_lines__[604] = 'actions.list.py, line 604:\n    self.filterSelector = None';
	$m.__track_lines__[606] = 'actions.list.py, line 606:\n    self.filterSelector = FilterSelector(self.parent().parent().module)';
	$m.__track_lines__[607] = 'actions.list.py, line 607:\n    self.parent().parent().sideBar.setWidget(self.filterSelector)';
	$m.__track_lines__[610] = 'actions.list.py, line 609:\n    @staticmethod ... def isSuitableFor( module, handler, actionName ):';
	$m.__track_lines__[611] = 'actions.list.py, line 611:\n    if module is None or module not in conf["modules"].keys():';
	$m.__track_lines__[612] = 'actions.list.py, line 612:\n    return False';
	$m.__track_lines__[614] = 'actions.list.py, line 614:\n    correctAction = actionName=="selectfilter"';
	$m.__track_lines__[615] = 'actions.list.py, line 615:\n    correctHandler = handler == "list" or handler.startswith("list.")';
	$m.__track_lines__[616] = 'actions.list.py, line 616:\n    hasAccess = conf["currentUser"] and ("root" in conf["currentUser"]["access"] or module+"-view" in conf["currentUser"]["access"])';
	$m.__track_lines__[617] = 'actions.list.py, line 617:\n    isDisabled = module is not None and "disabledFunctions" in conf["modules"][module].keys() and conf["modules"][module]["disabledFunctions"] and "view" in conf["modules"][module]["disabledFunctions"]';
	$m.__track_lines__[619] = 'actions.list.py, line 619:\n    return correctAction and correctHandler and hasAccess and not isDisabled';
	$m.__track_lines__[621] = 'actions.list.py, line 621:\n    actionDelegateSelector.insert( 1, ListSelectFilterAction.isSuitableFor, ListSelectFilterAction )';
	$m.__track_lines__[623] = 'actions.list.py, line 623:\n    class RecurrentDateAction( html5.ext.Button ):';
	$m.__track_lines__[628] = 'actions.list.py, line 628:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[629] = 'actions.list.py, line 629:\n    super( RecurrentDateAction, self ).__init__( translate("Recurrent Events"), *args, **kwargs )';
	$m.__track_lines__[630] = 'actions.list.py, line 630:\n    self["class"] = "icon createrecurrent_small"';
	$m.__track_lines__[631] = 'actions.list.py, line 631:\n    self["disabled"]= True';
	$m.__track_lines__[632] = 'actions.list.py, line 632:\n    self.isDisabled=True';
	$m.__track_lines__[634] = 'actions.list.py, line 634:\n    def onAttach(self):';
	$m.__track_lines__[635] = 'actions.list.py, line 635:\n    super(RecurrentDateAction,self).onAttach()';
	$m.__track_lines__[636] = 'actions.list.py, line 636:\n    self.parent().parent().selectionChangedEvent.register( self )';
	$m.__track_lines__[638] = 'actions.list.py, line 638:\n    def onDetach(self):';
	$m.__track_lines__[639] = 'actions.list.py, line 639:\n    self.parent().parent().selectionChangedEvent.unregister( self )';
	$m.__track_lines__[640] = 'actions.list.py, line 640:\n    super(RecurrentDateAction,self).onDetach()';
	$m.__track_lines__[642] = 'actions.list.py, line 642:\n    def onSelectionChanged(self, table, selection ):';
	$m.__track_lines__[643] = 'actions.list.py, line 643:\n    if len(selection)>0:';
	$m.__track_lines__[644] = 'actions.list.py, line 644:\n    if self.isDisabled:';
	$m.__track_lines__[645] = 'actions.list.py, line 645:\n    self.isDisabled = False';
	$m.__track_lines__[646] = 'actions.list.py, line 646:\n    self["disabled"]= False';
	$m.__track_lines__[648] = 'actions.list.py, line 648:\n    if not self.isDisabled:';
	$m.__track_lines__[649] = 'actions.list.py, line 649:\n    self["disabled"]= True';
	$m.__track_lines__[650] = 'actions.list.py, line 650:\n    self.isDisabled = True';
	$m.__track_lines__[653] = 'actions.list.py, line 652:\n    @staticmethod ... def isSuitableFor( module, handler, actionName ):';
	$m.__track_lines__[654] = 'actions.list.py, line 654:\n    if module is None or module not in conf["modules"].keys():';
	$m.__track_lines__[655] = 'actions.list.py, line 655:\n    return False';
	$m.__track_lines__[657] = 'actions.list.py, line 657:\n    correctAction = actionName=="repeatdate"';
	$m.__track_lines__[658] = 'actions.list.py, line 658:\n    correctHandler = handler == "list.calendar" or handler.startswith("list.calendar.")';
	$m.__track_lines__[659] = 'actions.list.py, line 659:\n    hasAccess = conf["currentUser"] and ("root" in conf["currentUser"]["access"] or module+"-edit" in conf["currentUser"]["access"])';
	$m.__track_lines__[660] = 'actions.list.py, line 660:\n    isDisabled = module is not None and "disabledFunctions" in conf["modules"][module].keys() and conf["modules"][module]["disabledFunctions"] and "edit" in conf["modules"][module]["disabledFunctions"]';
	$m.__track_lines__[662] = 'actions.list.py, line 662:\n    return correctAction and correctHandler and hasAccess and not isDisabled';
	$m.__track_lines__[664] = 'actions.list.py, line 664:\n    def onClick(self, sender=None):';
	$m.__track_lines__[665] = 'actions.list.py, line 665:\n    selection = self.parent().parent().getCurrentSelection()';
	$m.__track_lines__[666] = 'actions.list.py, line 666:\n    if not selection:';
	$m.__track_lines__[667] = 'actions.list.py, line 667:\n    return';
	$m.__track_lines__[668] = 'actions.list.py, line 668:\n    for s in selection:';
	$m.__track_lines__[669] = 'actions.list.py, line 669:\n    self.openEditor( s["key"] )';
	$m.__track_lines__[671] = 'actions.list.py, line 671:\n    def openEditor(self, key):';
	$m.__track_lines__[672] = 'actions.list.py, line 672:\n    pane = Pane(translate("Recurrent Events"), closeable=True, iconClasses=["modul_%s" % self.parent().parent().module, "apptype_list", "action_edit" ])';
	$m.__track_lines__[673] = 'actions.list.py, line 673:\n    conf["mainWindow"].stackPane( pane )';
	$m.__track_lines__[674] = 'actions.list.py, line 674:\n    edwg = RepeatDatePopup(self.parent().parent().module, key=key)';
	$m.__track_lines__[675] = 'actions.list.py, line 675:\n    pane.addWidget( edwg )';
	$m.__track_lines__[676] = 'actions.list.py, line 676:\n    pane.focus()';
	$m.__track_lines__[678] = 'actions.list.py, line 678:\n    def resetLoadingState(self):';
	$m.__track_lines__[679] = 'actions.list.py, line 679:\n    pass';
	$m.__track_lines__[681] = 'actions.list.py, line 681:\n    actionDelegateSelector.insert( 1, RecurrentDateAction.isSuitableFor, RecurrentDateAction )';
	$m.__track_lines__[683] = 'actions.list.py, line 683:\n    class CreateRecurrentAction( html5.ext.Button ):';
	$m.__track_lines__[684] = 'actions.list.py, line 684:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[685] = 'actions.list.py, line 685:\n    super(CreateRecurrentAction, self ).__init__( translate("Save-Close"), *args, **kwargs )';
	$m.__track_lines__[686] = 'actions.list.py, line 686:\n    self["class"] = "icon save close"';
	$m.__track_lines__[689] = 'actions.list.py, line 688:\n    @staticmethod ... def isSuitableFor( module, handler, actionName ):';
	$m.__track_lines__[690] = 'actions.list.py, line 690:\n    return actionName=="create.recurrent"';
	$m.__track_lines__[692] = 'actions.list.py, line 692:\n    def onClick(self, sender=None):';
	$m.__track_lines__[693] = 'actions.list.py, line 693:\n    self["class"].append("is_loading")';
	$m.__track_lines__[694] = 'actions.list.py, line 694:\n    self.parent().parent().doSave(closeOnSuccess=True)';
	$m.__track_lines__[696] = 'actions.list.py, line 696:\n    actionDelegateSelector.insert( 1, CreateRecurrentAction.isSuitableFor, CreateRecurrentAction)';
	$m.__track_lines__[698] = 'actions.list.py, line 698:\n    class ExportCsvAction(html5.ext.Button):';
	$m.__track_lines__[699] = 'actions.list.py, line 699:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[700] = 'actions.list.py, line 700:\n    super(ExportCsvAction, self).__init__(translate("CSV Export"), *args, **kwargs)';
	$m.__track_lines__[701] = 'actions.list.py, line 701:\n    self["class"] = "icon download"';
	$m.__track_lines__[703] = 'actions.list.py, line 703:\n    def onClick(self, sender = None):';
	$m.__track_lines__[704] = 'actions.list.py, line 704:\n    ExportCsvStarter(self.parent().parent())';
	$m.__track_lines__[707] = 'actions.list.py, line 706:\n    @staticmethod ... def isSuitableFor(module, handler, actionName):';
	$m.__track_lines__[708] = 'actions.list.py, line 708:\n    return actionName == "exportcsv" and (handler == "list" or handler.startswith("list."))';
	$m.__track_lines__[710] = 'actions.list.py, line 710:\n    actionDelegateSelector.insert(1, ExportCsvAction.isSuitableFor, ExportCsvAction)';
	$m.__track_lines__[712] = 'actions.list.py, line 712:\n    class SelectAllAction(html5.ext.Button):';
	$m.__track_lines__[713] = 'actions.list.py, line 713:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[714] = 'actions.list.py, line 714:\n    super(SelectAllAction, self ).__init__(translate("Select all"), *args, **kwargs)';
	$m.__track_lines__[715] = 'actions.list.py, line 715:\n    self["class"] = "icon selectall"';
	$m.__track_lines__[716] = 'actions.list.py, line 716:\n    self["disabled"] = self.isDisabled = True';
	$m.__track_lines__[719] = 'actions.list.py, line 718:\n    @staticmethod ... def isSuitableFor(module, handler, actionName):';
	$m.__track_lines__[720] = 'actions.list.py, line 720:\n    return actionName == "selectall" and (handler == "list" or handler.startswith("list."))';
	$m.__track_lines__[722] = 'actions.list.py, line 722:\n    def onClick(self, sender=None):';
	$m.__track_lines__[723] = 'actions.list.py, line 723:\n    cnt = self.parent().parent().table.table.selectAll()';
	$m.__track_lines__[724] = 'actions.list.py, line 724:\n    conf["mainWindow"].log("info", translate(u"{items} items had been selected", items=cnt))';
	$m.__track_lines__[726] = 'actions.list.py, line 726:\n    def onAttach(self):';
	$m.__track_lines__[727] = 'actions.list.py, line 727:\n    super(SelectAllAction,self).onAttach()';
	$m.__track_lines__[728] = 'actions.list.py, line 728:\n    self.parent().parent().tableChangedEvent.register( self )';
	$m.__track_lines__[730] = 'actions.list.py, line 730:\n    def onDetach(self):';
	$m.__track_lines__[731] = 'actions.list.py, line 731:\n    self.parent().parent().tableChangedEvent.unregister( self )';
	$m.__track_lines__[732] = 'actions.list.py, line 732:\n    super(SelectAllAction,self).onDetach()';
	$m.__track_lines__[734] = 'actions.list.py, line 734:\n    def onTableChanged(self, table, count):';
	$m.__track_lines__[735] = 'actions.list.py, line 735:\n    if count > 0:';
	$m.__track_lines__[736] = 'actions.list.py, line 736:\n    self["disabled"] = self.isDisabled = False';
	$m.__track_lines__[738] = 'actions.list.py, line 738:\n    self["disabled"] = self.isDisabled = True';
	$m.__track_lines__[740] = 'actions.list.py, line 740:\n    actionDelegateSelector.insert(1, SelectAllAction.isSuitableFor, SelectAllAction)';
	$m.__track_lines__[743] = 'actions.list.py, line 743:\n    class UnSelectAllAction(html5.ext.Button):';
	$m.__track_lines__[744] = 'actions.list.py, line 744:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[745] = 'actions.list.py, line 745:\n    super(UnSelectAllAction, self ).__init__(translate("Unselect all"), *args, **kwargs)';
	$m.__track_lines__[746] = 'actions.list.py, line 746:\n    self["class"] = "icon unselectall"';
	$m.__track_lines__[747] = 'actions.list.py, line 747:\n    self["disabled"] = self.isDisabled = True';
	$m.__track_lines__[750] = 'actions.list.py, line 749:\n    @staticmethod ... def isSuitableFor(module, handler, actionName):';
	$m.__track_lines__[751] = 'actions.list.py, line 751:\n    return actionName == "unselectall" and (handler == "list" or handler.startswith("list."))';
	$m.__track_lines__[753] = 'actions.list.py, line 753:\n    def onClick(self, sender=None):';
	$m.__track_lines__[754] = 'actions.list.py, line 754:\n    cnt = self.parent().parent().table.table.unSelectAll()';
	$m.__track_lines__[755] = 'actions.list.py, line 755:\n    conf["mainWindow"].log("info", translate(u"{items} items had been unselected", items=cnt))';
	$m.__track_lines__[757] = 'actions.list.py, line 757:\n    def onAttach(self):';
	$m.__track_lines__[758] = 'actions.list.py, line 758:\n    super(UnSelectAllAction,self).onAttach()';
	$m.__track_lines__[759] = 'actions.list.py, line 759:\n    self.parent().parent().tableChangedEvent.register( self )';
	$m.__track_lines__[761] = 'actions.list.py, line 761:\n    def onDetach(self):';
	$m.__track_lines__[762] = 'actions.list.py, line 762:\n    self.parent().parent().tableChangedEvent.unregister( self )';
	$m.__track_lines__[763] = 'actions.list.py, line 763:\n    super(UnSelectAllAction,self).onDetach()';
	$m.__track_lines__[765] = 'actions.list.py, line 765:\n    def onTableChanged(self, table, count):';
	$m.__track_lines__[766] = 'actions.list.py, line 766:\n    if count > 0:';
	$m.__track_lines__[767] = 'actions.list.py, line 767:\n    self["disabled"] = self.isDisabled = False';
	$m.__track_lines__[769] = 'actions.list.py, line 769:\n    self["disabled"] = self.isDisabled = True';
	$m.__track_lines__[771] = 'actions.list.py, line 771:\n    actionDelegateSelector.insert(1, UnSelectAllAction.isSuitableFor, UnSelectAllAction)';
	$m.__track_lines__[773] = 'actions.list.py, line 773:\n    class SelectInvertAction(html5.ext.Button):';
	$m.__track_lines__[774] = 'actions.list.py, line 774:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[775] = 'actions.list.py, line 775:\n    super(SelectInvertAction, self ).__init__(translate("Invert selection"), *args, **kwargs)';
	$m.__track_lines__[776] = 'actions.list.py, line 776:\n    self["class"] = "icon selectinvert"';
	$m.__track_lines__[777] = 'actions.list.py, line 777:\n    self["disabled"] = self.isDisabled = True';
	$m.__track_lines__[780] = 'actions.list.py, line 779:\n    @staticmethod ... def isSuitableFor(modul, handler, actionName):';
	$m.__track_lines__[781] = 'actions.list.py, line 781:\n    return actionName == "selectinvert" and (handler == "list" or handler.startswith("list."))';
	$m.__track_lines__[783] = 'actions.list.py, line 783:\n    def onClick(self, sender=None):';
	$m.__track_lines__[784] = 'actions.list.py, line 784:\n    (added, removed) = self.parent().parent().table.table.invertSelection()';
	$m.__track_lines__[786] = 'actions.list.py, line 786:\n    if removed and added:';
	$m.__track_lines__[787] = 'actions.list.py, line 787:\n    conf["mainWindow"].log("info", translate(u"{added} items selected, {removed} items deselected",';
	$m.__track_lines__[790] = 'actions.list.py, line 790:\n    conf["mainWindow"].log("info", translate(u"{items} items had been selected", items=added))';
	$m.__track_lines__[792] = 'actions.list.py, line 792:\n    conf["mainWindow"].log("info", translate(u"{items} items had been unselected", items=removed))';
	$m.__track_lines__[794] = 'actions.list.py, line 794:\n    def onAttach(self):';
	$m.__track_lines__[795] = 'actions.list.py, line 795:\n    super(SelectInvertAction,self).onAttach()';
	$m.__track_lines__[796] = 'actions.list.py, line 796:\n    self.parent().parent().tableChangedEvent.register( self )';
	$m.__track_lines__[798] = 'actions.list.py, line 798:\n    def onDetach(self):';
	$m.__track_lines__[799] = 'actions.list.py, line 799:\n    self.parent().parent().tableChangedEvent.unregister( self )';
	$m.__track_lines__[800] = 'actions.list.py, line 800:\n    super(SelectInvertAction,self).onDetach()';
	$m.__track_lines__[802] = 'actions.list.py, line 802:\n    def onTableChanged(self, table, count):';
	$m.__track_lines__[803] = 'actions.list.py, line 803:\n    if count > 0:';
	$m.__track_lines__[804] = 'actions.list.py, line 804:\n    self["disabled"] = self.isDisabled = False';
	$m.__track_lines__[806] = 'actions.list.py, line 806:\n    self["disabled"] = self.isDisabled = True';
	$m.__track_lines__[808] = 'actions.list.py, line 808:\n    actionDelegateSelector.insert(1, SelectInvertAction.isSuitableFor, SelectInvertAction)';


	$pyjs['track']['module']='actions.list';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=1;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['html5'] = $p['___import___']('html5', 'actions');
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['utils'] = $p['___import___']('utils', 'actions');
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
	$m['RepeatDatePopup'] = $p['___import___']('widgets.repeatdate.RepeatDatePopup', 'actions', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=8;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['ExportCsvStarter'] = $p['___import___']('widgets.csvexport.ExportCsvStarter', 'actions', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=9;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['DataTable'] = $p['___import___']('widgets.table.DataTable', 'actions', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=10;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Preview'] = $p['___import___']('widgets.preview.Preview', 'actions', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=11;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['InternalPreview'] = $p['___import___']('sidebarwidgets.internalpreview.InternalPreview', 'actions', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=12;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['FilterSelector'] = $p['___import___']('sidebarwidgets.filterselector.FilterSelector', 'actions', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=13;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['translate'] = $p['___import___']('i18n.translate', 'actions', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=15;
	$m['EditPane'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'actions.list';
		$pyjs['track']['lineno']=16;
		$pyjs['track']['lineno']=15;
		var $bases = new Array($m['Pane']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('EditPane', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=18;
	$pyjs['track']['lineno']=21;
	$m['AddAction'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'actions.list';
		$pyjs['track']['lineno']=25;
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

			$pyjs['track']={'module':'actions.list', 'lineno':25};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=25;
			$pyjs['track']['lineno']=26;
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
			$pyjs['track']['lineno']=27;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('class', 'icon add list');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=30;
		$method = $pyjs__bind_method2('isSuitableFor', function(module, handler, actionName) {
			var $and8,$and9,correctHandler,isDisabled,$or2,$or5,$or4,$or6,$or1,$or3,$and1,$and2,$and3,$and4,$and5,$and6,$and7,$and10,correctAction,hasAccess,$add2,$add1;
			$pyjs['track']={'module':'actions.list', 'lineno':30};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=30;
			$pyjs['track']['lineno']=31;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($or1=(module === null))?$or1:!(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('modules')['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})()['__contains__'](module)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})()) {
				$pyjs['track']['lineno']=32;
				$pyjs['track']['lineno']=32;
				var $pyjs__ret = false;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=34;
			correctAction = $p['op_eq'](actionName, 'add');
			$pyjs['track']['lineno']=35;
			correctHandler = ($p['bool']($or3=$p['op_eq'](handler, 'list'))?$or3:(function(){try{try{$pyjs['in_try_except'] += 1;
			return handler['startswith']('list.');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})());
			$pyjs['track']['lineno']=36;
			hasAccess = ($p['bool']($and1=$m['conf']['__getitem__']('currentUser'))?($p['bool']($or5=$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']('root'))?$or5:$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']($p['__op_add']($add1=module,$add2='-add'))):$and1);
			$pyjs['track']['lineno']=37;
			isDisabled = ($p['bool']($and3=(module !== null))?($p['bool']($and4=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('modules')['__getitem__'](module)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})()['__contains__']('disabledFunctions'))?($p['bool']($and5=$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('disabledFunctions'))?$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('disabledFunctions')['__contains__']('add'):$and5):$and4):$and3);
			$pyjs['track']['lineno']=39;
			$pyjs['track']['lineno']=39;
			var $pyjs__ret = ($p['bool']($and7=correctAction)?($p['bool']($and8=correctHandler)?($p['bool']($and9=hasAccess)?!$p['bool'](isDisabled):$and9):$and8):$and7);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['module'],['handler'],['actionName']]);
		$cls_definition['isSuitableFor'] = $method;
		$pyjs['track']['lineno']=41;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
			var edwg,pane;
			$pyjs['track']={'module':'actions.list', 'lineno':41};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=41;
			$pyjs['track']['lineno']=42;
			pane = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(null, $m['EditPane'], null, null, [{'closeable':true, 'iconClasses':(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('modul_%s', $p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})(), 'module'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})(), 'apptype_list', 'action_add']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})()}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Add');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
			$pyjs['track']['lineno']=43;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('mainWindow')['stackPane'](pane);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
			$pyjs['track']['lineno']=44;
			edwg = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['EditWidget']($p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})(), 'module'), $p['getattr']($m['EditWidget'], 'appList'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
			$pyjs['track']['lineno']=45;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return pane['addWidget'](edwg);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
			$pyjs['track']['lineno']=46;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return pane['focus']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=48;
		$method = $pyjs__bind_method2('resetLoadingState', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'actions.list', 'lineno':48};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=48;
			$pyjs['track']['lineno']=49;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['resetLoadingState'] = $method;
		$pyjs['track']['lineno']=21;
		var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Button'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('AddAction', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=51;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $p['getattr']($m['AddAction'], 'isSuitableFor'), $m['AddAction']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
	$pyjs['track']['lineno']=54;
	$m['EditAction'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'actions.list';
		$pyjs['track']['lineno']=59;
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

			$pyjs['track']={'module':'actions.list', 'lineno':59};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=59;
			$pyjs['track']['lineno']=60;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['EditAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})(), '__init__', args, kwargs, [{}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Edit');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
			$pyjs['track']['lineno']=61;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('class', 'icon edit');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
			$pyjs['track']['lineno']=62;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('disabled', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
			$pyjs['track']['lineno']=63;
			self['isDisabled'] = true;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=65;
		$method = $pyjs__bind_method2('onAttach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'actions.list', 'lineno':65};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=65;
			$pyjs['track']['lineno']=66;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['EditAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})()['onAttach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})();
			$pyjs['track']['lineno']=67;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})()['selectionChangedEvent']['register'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
			$pyjs['track']['lineno']=68;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})()['selectionActivatedEvent']['register'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onAttach'] = $method;
		$pyjs['track']['lineno']=70;
		$method = $pyjs__bind_method2('onDetach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'actions.list', 'lineno':70};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=70;
			$pyjs['track']['lineno']=71;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})()['selectionChangedEvent']['unregister'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})();
			$pyjs['track']['lineno']=72;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})()['selectionActivatedEvent']['unregister'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})();
			$pyjs['track']['lineno']=73;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['EditAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})()['onDetach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onDetach'] = $method;
		$pyjs['track']['lineno']=75;
		$method = $pyjs__bind_method2('onSelectionChanged', function(table, selection) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				table = arguments[1];
				selection = arguments[2];
			}

			$pyjs['track']={'module':'actions.list', 'lineno':75};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=75;
			$pyjs['track']['lineno']=76;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len'](selection);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})(), 0) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})()) {
				$pyjs['track']['lineno']=77;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, 'isDisabled'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})()) {
					$pyjs['track']['lineno']=78;
					self['isDisabled'] = false;
				}
				$pyjs['track']['lineno']=79;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__setitem__']('disabled', false);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=81;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']($p['getattr'](self, 'isDisabled')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})()) {
					$pyjs['track']['lineno']=82;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['__setitem__']('disabled', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})();
					$pyjs['track']['lineno']=83;
					self['isDisabled'] = true;
				}
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['table'],['selection']]);
		$cls_definition['onSelectionChanged'] = $method;
		$pyjs['track']['lineno']=85;
		$method = $pyjs__bind_method2('onSelectionActivated', function(table, selection) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				table = arguments[1];
				selection = arguments[2];
			}
			var $and12,$and11;
			$pyjs['track']={'module':'actions.list', 'lineno':85};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=85;
			$pyjs['track']['lineno']=86;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and11=!$p['bool']($p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})(), 'isSelector')))?$p['op_eq']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len'](selection);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})(), 1):$and11));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})()) {
				$pyjs['track']['lineno']=87;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['openEditor'](selection['__getitem__'](0)['__getitem__']('key'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['table'],['selection']]);
		$cls_definition['onSelectionActivated'] = $method;
		$pyjs['track']['lineno']=90;
		$method = $pyjs__bind_method2('isSuitableFor', function(module, handler, actionName) {
			var $and22,$and21,$and20,correctHandler,isDisabled,$or7,correctAction,$or9,$or8,$and13,$and16,$and17,$and14,$and15,$and18,$and19,hasAccess,$add3,$or11,$or10,$add4,$or12;
			$pyjs['track']={'module':'actions.list', 'lineno':90};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=90;
			$pyjs['track']['lineno']=91;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($or7=(module === null))?$or7:!(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('modules')['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})()['__contains__'](module)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})()) {
				$pyjs['track']['lineno']=92;
				$pyjs['track']['lineno']=92;
				var $pyjs__ret = false;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=94;
			correctAction = $p['op_eq'](actionName, 'edit');
			$pyjs['track']['lineno']=95;
			correctHandler = ($p['bool']($or9=$p['op_eq'](handler, 'list'))?$or9:(function(){try{try{$pyjs['in_try_except'] += 1;
			return handler['startswith']('list.');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})());
			$pyjs['track']['lineno']=96;
			hasAccess = ($p['bool']($and13=$m['conf']['__getitem__']('currentUser'))?($p['bool']($or11=$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']('root'))?$or11:$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']($p['__op_add']($add3=module,$add4='-edit'))):$and13);
			$pyjs['track']['lineno']=97;
			isDisabled = ($p['bool']($and15=(module !== null))?($p['bool']($and16=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('modules')['__getitem__'](module)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})()['__contains__']('disabledFunctions'))?($p['bool']($and17=$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('disabledFunctions'))?$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('disabledFunctions')['__contains__']('edit'):$and17):$and16):$and15);
			$pyjs['track']['lineno']=99;
			$pyjs['track']['lineno']=99;
			var $pyjs__ret = ($p['bool']($and19=correctAction)?($p['bool']($and20=correctHandler)?($p['bool']($and21=hasAccess)?!$p['bool'](isDisabled):$and21):$and20):$and19);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['module'],['handler'],['actionName']]);
		$cls_definition['isSuitableFor'] = $method;
		$pyjs['track']['lineno']=101;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
			var selection,$iter1_nextval,$iter1_idx,$iter1_iter,s,$iter1_array,$pyjs__trackstack_size_1,$iter1_type;
			$pyjs['track']={'module':'actions.list', 'lineno':101};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=101;
			$pyjs['track']['lineno']=102;
			selection = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})()['getCurrentSelection']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})();
			$pyjs['track']['lineno']=103;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool'](selection));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})()) {
				$pyjs['track']['lineno']=104;
				$pyjs['track']['lineno']=104;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=105;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter1_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return selection;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})();
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				s = $iter1_nextval['$nextval'];
				$pyjs['track']['lineno']=106;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['openEditor'](s['__getitem__']('key'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='actions.list';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=108;
		$method = $pyjs__bind_method2('openEditor', function(key) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
			}
			var edwg,pane;
			$pyjs['track']={'module':'actions.list', 'lineno':108};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=108;
			$pyjs['track']['lineno']=109;
			pane = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(null, $m['Pane'], null, null, [{'closeable':true, 'iconClasses':(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('modul_%s', $p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})(), 'module'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})(), 'apptype_list', 'action_edit']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})()}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Edit');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})();
			$pyjs['track']['lineno']=110;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['conf']['__getitem__']('mainWindow'), 'stackPane', null, null, [{'focus':true}, pane]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})();
			$pyjs['track']['lineno']=111;
			edwg = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(null, $m['EditWidget'], null, null, [{'key':key}, $p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})(), 'module'), $p['getattr']($m['EditWidget'], 'appList')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})();
			$pyjs['track']['lineno']=112;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return pane['addWidget'](edwg);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['key']]);
		$cls_definition['openEditor'] = $method;
		$pyjs['track']['lineno']=114;
		$method = $pyjs__bind_method2('resetLoadingState', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'actions.list', 'lineno':114};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=114;
			$pyjs['track']['lineno']=115;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['resetLoadingState'] = $method;
		$pyjs['track']['lineno']=54;
		var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Button'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('EditAction', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=117;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $p['getattr']($m['EditAction'], 'isSuitableFor'), $m['EditAction']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})();
	$pyjs['track']['lineno']=120;
	$m['CloneAction'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'actions.list';
		$pyjs['track']['lineno']=125;
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

			$pyjs['track']={'module':'actions.list', 'lineno':125};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=125;
			$pyjs['track']['lineno']=126;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['CloneAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})(), '__init__', args, kwargs, [{}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Clone');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})();
			$pyjs['track']['lineno']=127;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('class', 'icon clone');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})();
			$pyjs['track']['lineno']=128;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('disabled', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})();
			$pyjs['track']['lineno']=129;
			self['isDisabled'] = true;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=131;
		$method = $pyjs__bind_method2('onAttach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'actions.list', 'lineno':131};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=131;
			$pyjs['track']['lineno']=132;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['CloneAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})()['onAttach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})();
			$pyjs['track']['lineno']=133;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
}})()['selectionChangedEvent']['register'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})();
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

			$pyjs['track']={'module':'actions.list', 'lineno':135};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=135;
			$pyjs['track']['lineno']=136;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})()['selectionChangedEvent']['unregister'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_88_err){if (!$p['isinstance']($pyjs_dbg_88_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_88_err);}throw $pyjs_dbg_88_err;
}})();
			$pyjs['track']['lineno']=137;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['CloneAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_89_err){if (!$p['isinstance']($pyjs_dbg_89_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_89_err);}throw $pyjs_dbg_89_err;
}})()['onDetach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_90_err){if (!$p['isinstance']($pyjs_dbg_90_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_90_err);}throw $pyjs_dbg_90_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onDetach'] = $method;
		$pyjs['track']['lineno']=139;
		$method = $pyjs__bind_method2('onSelectionChanged', function(table, selection) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				table = arguments[1];
				selection = arguments[2];
			}

			$pyjs['track']={'module':'actions.list', 'lineno':139};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=139;
			$pyjs['track']['lineno']=140;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len'](selection);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_91_err){if (!$p['isinstance']($pyjs_dbg_91_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_91_err);}throw $pyjs_dbg_91_err;
}})(), 0) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_92_err){if (!$p['isinstance']($pyjs_dbg_92_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_92_err);}throw $pyjs_dbg_92_err;
}})()) {
				$pyjs['track']['lineno']=141;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, 'isDisabled'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_93_err){if (!$p['isinstance']($pyjs_dbg_93_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_93_err);}throw $pyjs_dbg_93_err;
}})()) {
					$pyjs['track']['lineno']=142;
					self['isDisabled'] = false;
				}
				$pyjs['track']['lineno']=143;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__setitem__']('disabled', false);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_94_err){if (!$p['isinstance']($pyjs_dbg_94_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_94_err);}throw $pyjs_dbg_94_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=145;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']($p['getattr'](self, 'isDisabled')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_95_err){if (!$p['isinstance']($pyjs_dbg_95_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_95_err);}throw $pyjs_dbg_95_err;
}})()) {
					$pyjs['track']['lineno']=146;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['__setitem__']('disabled', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_96_err){if (!$p['isinstance']($pyjs_dbg_96_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_96_err);}throw $pyjs_dbg_96_err;
}})();
					$pyjs['track']['lineno']=147;
					self['isDisabled'] = true;
				}
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['table'],['selection']]);
		$cls_definition['onSelectionChanged'] = $method;
		$pyjs['track']['lineno']=150;
		$method = $pyjs__bind_method2('isSuitableFor', function(module, handler, actionName) {
			var $and29,$and28,$and23,$and27,$and26,$and25,$and24,correctHandler,isDisabled,correctAction,$and30,$and31,$and32,hasAccess,$or15,$or14,$or17,$or16,$add6,$or13,$add5,$or18;
			$pyjs['track']={'module':'actions.list', 'lineno':150};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=150;
			$pyjs['track']['lineno']=151;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($or13=(module === null))?$or13:!(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('modules')['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_97_err){if (!$p['isinstance']($pyjs_dbg_97_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_97_err);}throw $pyjs_dbg_97_err;
}})()['__contains__'](module)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_98_err){if (!$p['isinstance']($pyjs_dbg_98_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_98_err);}throw $pyjs_dbg_98_err;
}})()) {
				$pyjs['track']['lineno']=152;
				$pyjs['track']['lineno']=152;
				var $pyjs__ret = false;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=154;
			correctAction = $p['op_eq'](actionName, 'clone');
			$pyjs['track']['lineno']=155;
			correctHandler = ($p['bool']($or15=$p['op_eq'](handler, 'list'))?$or15:(function(){try{try{$pyjs['in_try_except'] += 1;
			return handler['startswith']('list.');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_99_err){if (!$p['isinstance']($pyjs_dbg_99_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_99_err);}throw $pyjs_dbg_99_err;
}})());
			$pyjs['track']['lineno']=156;
			hasAccess = ($p['bool']($and23=$m['conf']['__getitem__']('currentUser'))?($p['bool']($or17=$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']('root'))?$or17:$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']($p['__op_add']($add5=module,$add6='-edit'))):$and23);
			$pyjs['track']['lineno']=157;
			isDisabled = ($p['bool']($and25=(module !== null))?($p['bool']($and26=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('modules')['__getitem__'](module)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_100_err){if (!$p['isinstance']($pyjs_dbg_100_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_100_err);}throw $pyjs_dbg_100_err;
}})()['__contains__']('disabledFunctions'))?($p['bool']($and27=$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('disabledFunctions'))?$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('disabledFunctions')['__contains__']('clone'):$and27):$and26):$and25);
			$pyjs['track']['lineno']=159;
			$pyjs['track']['lineno']=159;
			var $pyjs__ret = ($p['bool']($and29=correctAction)?($p['bool']($and30=correctHandler)?($p['bool']($and31=hasAccess)?!$p['bool'](isDisabled):$and31):$and30):$and29);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['module'],['handler'],['actionName']]);
		$cls_definition['isSuitableFor'] = $method;
		$pyjs['track']['lineno']=161;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
			var $iter2_nextval,$iter2_type,$iter2_iter,s,$iter2_idx,selection,$pyjs__trackstack_size_1,$iter2_array;
			$pyjs['track']={'module':'actions.list', 'lineno':161};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=161;
			$pyjs['track']['lineno']=162;
			selection = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_101_err){if (!$p['isinstance']($pyjs_dbg_101_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_101_err);}throw $pyjs_dbg_101_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_102_err){if (!$p['isinstance']($pyjs_dbg_102_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_102_err);}throw $pyjs_dbg_102_err;
}})()['getCurrentSelection']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_103_err){if (!$p['isinstance']($pyjs_dbg_103_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_103_err);}throw $pyjs_dbg_103_err;
}})();
			$pyjs['track']['lineno']=163;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool'](selection));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_104_err){if (!$p['isinstance']($pyjs_dbg_104_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_104_err);}throw $pyjs_dbg_104_err;
}})()) {
				$pyjs['track']['lineno']=164;
				$pyjs['track']['lineno']=164;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=165;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter2_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return selection;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_105_err){if (!$p['isinstance']($pyjs_dbg_105_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_105_err);}throw $pyjs_dbg_105_err;
}})();
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				s = $iter2_nextval['$nextval'];
				$pyjs['track']['lineno']=166;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['openEditor'](s['__getitem__']('key'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_106_err){if (!$p['isinstance']($pyjs_dbg_106_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_106_err);}throw $pyjs_dbg_106_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='actions.list';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=168;
		$method = $pyjs__bind_method2('openEditor', function(key) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
			}
			var edwg,pane;
			$pyjs['track']={'module':'actions.list', 'lineno':168};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=168;
			$pyjs['track']['lineno']=169;
			pane = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(null, $m['Pane'], null, null, [{'closeable':true, 'iconClasses':(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('modul_%s', $p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_108_err){if (!$p['isinstance']($pyjs_dbg_108_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_108_err);}throw $pyjs_dbg_108_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_109_err){if (!$p['isinstance']($pyjs_dbg_109_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_109_err);}throw $pyjs_dbg_109_err;
}})(), 'module'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_110_err){if (!$p['isinstance']($pyjs_dbg_110_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_110_err);}throw $pyjs_dbg_110_err;
}})(), 'apptype_list', 'action_edit']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_111_err){if (!$p['isinstance']($pyjs_dbg_111_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_111_err);}throw $pyjs_dbg_111_err;
}})()}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Clone');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_107_err){if (!$p['isinstance']($pyjs_dbg_107_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_107_err);}throw $pyjs_dbg_107_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_112_err){if (!$p['isinstance']($pyjs_dbg_112_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_112_err);}throw $pyjs_dbg_112_err;
}})();
			$pyjs['track']['lineno']=170;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('mainWindow')['stackPane'](pane);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_113_err){if (!$p['isinstance']($pyjs_dbg_113_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_113_err);}throw $pyjs_dbg_113_err;
}})();
			$pyjs['track']['lineno']=171;
			edwg = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(null, $m['EditWidget'], null, null, [{'key':key, 'clone':true}, $p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_114_err){if (!$p['isinstance']($pyjs_dbg_114_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_114_err);}throw $pyjs_dbg_114_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_115_err){if (!$p['isinstance']($pyjs_dbg_115_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_115_err);}throw $pyjs_dbg_115_err;
}})(), 'module'), $p['getattr']($m['EditWidget'], 'appList')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_116_err){if (!$p['isinstance']($pyjs_dbg_116_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_116_err);}throw $pyjs_dbg_116_err;
}})();
			$pyjs['track']['lineno']=172;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return pane['addWidget'](edwg);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_117_err){if (!$p['isinstance']($pyjs_dbg_117_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_117_err);}throw $pyjs_dbg_117_err;
}})();
			$pyjs['track']['lineno']=173;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return pane['focus']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_118_err){if (!$p['isinstance']($pyjs_dbg_118_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_118_err);}throw $pyjs_dbg_118_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['key']]);
		$cls_definition['openEditor'] = $method;
		$pyjs['track']['lineno']=175;
		$method = $pyjs__bind_method2('resetLoadingState', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'actions.list', 'lineno':175};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=175;
			$pyjs['track']['lineno']=176;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['resetLoadingState'] = $method;
		$pyjs['track']['lineno']=120;
		var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Button'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('CloneAction', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=178;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $p['getattr']($m['CloneAction'], 'isSuitableFor'), $m['CloneAction']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_119_err){if (!$p['isinstance']($pyjs_dbg_119_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_119_err);}throw $pyjs_dbg_119_err;
}})();
	$pyjs['track']['lineno']=182;
	$m['DeleteAction'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'actions.list';
		$pyjs['track']['lineno']=186;
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

			$pyjs['track']={'module':'actions.list', 'lineno':186};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=186;
			$pyjs['track']['lineno']=187;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['DeleteAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_120_err){if (!$p['isinstance']($pyjs_dbg_120_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_120_err);}throw $pyjs_dbg_120_err;
}})(), '__init__', args, kwargs, [{}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Delete');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_121_err){if (!$p['isinstance']($pyjs_dbg_121_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_121_err);}throw $pyjs_dbg_121_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_122_err){if (!$p['isinstance']($pyjs_dbg_122_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_122_err);}throw $pyjs_dbg_122_err;
}})();
			$pyjs['track']['lineno']=188;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('class', 'icon delete');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_123_err){if (!$p['isinstance']($pyjs_dbg_123_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_123_err);}throw $pyjs_dbg_123_err;
}})();
			$pyjs['track']['lineno']=189;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('disabled', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_124_err){if (!$p['isinstance']($pyjs_dbg_124_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_124_err);}throw $pyjs_dbg_124_err;
}})();
			$pyjs['track']['lineno']=190;
			self['isDisabled'] = true;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=192;
		$method = $pyjs__bind_method2('onAttach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'actions.list', 'lineno':192};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=192;
			$pyjs['track']['lineno']=193;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['DeleteAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_125_err){if (!$p['isinstance']($pyjs_dbg_125_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_125_err);}throw $pyjs_dbg_125_err;
}})()['onAttach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_126_err){if (!$p['isinstance']($pyjs_dbg_126_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_126_err);}throw $pyjs_dbg_126_err;
}})();
			$pyjs['track']['lineno']=194;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_127_err){if (!$p['isinstance']($pyjs_dbg_127_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_127_err);}throw $pyjs_dbg_127_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_128_err){if (!$p['isinstance']($pyjs_dbg_128_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_128_err);}throw $pyjs_dbg_128_err;
}})()['selectionChangedEvent']['register'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_129_err){if (!$p['isinstance']($pyjs_dbg_129_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_129_err);}throw $pyjs_dbg_129_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onAttach'] = $method;
		$pyjs['track']['lineno']=196;
		$method = $pyjs__bind_method2('onDetach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'actions.list', 'lineno':196};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=196;
			$pyjs['track']['lineno']=197;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_130_err){if (!$p['isinstance']($pyjs_dbg_130_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_130_err);}throw $pyjs_dbg_130_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_131_err){if (!$p['isinstance']($pyjs_dbg_131_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_131_err);}throw $pyjs_dbg_131_err;
}})()['selectionChangedEvent']['unregister'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_132_err){if (!$p['isinstance']($pyjs_dbg_132_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_132_err);}throw $pyjs_dbg_132_err;
}})();
			$pyjs['track']['lineno']=198;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['DeleteAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_133_err){if (!$p['isinstance']($pyjs_dbg_133_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_133_err);}throw $pyjs_dbg_133_err;
}})()['onDetach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_134_err){if (!$p['isinstance']($pyjs_dbg_134_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_134_err);}throw $pyjs_dbg_134_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onDetach'] = $method;
		$pyjs['track']['lineno']=200;
		$method = $pyjs__bind_method2('onSelectionChanged', function(table, selection) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				table = arguments[1];
				selection = arguments[2];
			}

			$pyjs['track']={'module':'actions.list', 'lineno':200};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=200;
			$pyjs['track']['lineno']=201;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len'](selection);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_135_err){if (!$p['isinstance']($pyjs_dbg_135_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_135_err);}throw $pyjs_dbg_135_err;
}})(), 0) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_136_err){if (!$p['isinstance']($pyjs_dbg_136_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_136_err);}throw $pyjs_dbg_136_err;
}})()) {
				$pyjs['track']['lineno']=202;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, 'isDisabled'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_137_err){if (!$p['isinstance']($pyjs_dbg_137_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_137_err);}throw $pyjs_dbg_137_err;
}})()) {
					$pyjs['track']['lineno']=203;
					self['isDisabled'] = false;
				}
				$pyjs['track']['lineno']=204;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__setitem__']('disabled', false);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_138_err){if (!$p['isinstance']($pyjs_dbg_138_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_138_err);}throw $pyjs_dbg_138_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=206;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']($p['getattr'](self, 'isDisabled')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_139_err){if (!$p['isinstance']($pyjs_dbg_139_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_139_err);}throw $pyjs_dbg_139_err;
}})()) {
					$pyjs['track']['lineno']=207;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['__setitem__']('disabled', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_140_err){if (!$p['isinstance']($pyjs_dbg_140_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_140_err);}throw $pyjs_dbg_140_err;
}})();
					$pyjs['track']['lineno']=208;
					self['isDisabled'] = true;
				}
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['table'],['selection']]);
		$cls_definition['onSelectionChanged'] = $method;
		$pyjs['track']['lineno']=211;
		$method = $pyjs__bind_method2('isSuitableFor', function(module, handler, actionName) {
			var correctHandler,isDisabled,$and41,$and40,$and42,$or24,$or20,$or21,$or22,$or23,$and38,$and39,$and34,$and35,$and36,$and37,$and33,correctAction,hasAccess,$add7,$add8,$or19;
			$pyjs['track']={'module':'actions.list', 'lineno':211};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=211;
			$pyjs['track']['lineno']=212;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($or19=(module === null))?$or19:!(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('modules')['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_141_err){if (!$p['isinstance']($pyjs_dbg_141_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_141_err);}throw $pyjs_dbg_141_err;
}})()['__contains__'](module)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_142_err){if (!$p['isinstance']($pyjs_dbg_142_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_142_err);}throw $pyjs_dbg_142_err;
}})()) {
				$pyjs['track']['lineno']=213;
				$pyjs['track']['lineno']=213;
				var $pyjs__ret = false;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=215;
			correctAction = $p['op_eq'](actionName, 'delete');
			$pyjs['track']['lineno']=216;
			correctHandler = ($p['bool']($or21=$p['op_eq'](handler, 'list'))?$or21:(function(){try{try{$pyjs['in_try_except'] += 1;
			return handler['startswith']('list.');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_143_err){if (!$p['isinstance']($pyjs_dbg_143_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_143_err);}throw $pyjs_dbg_143_err;
}})());
			$pyjs['track']['lineno']=217;
			hasAccess = ($p['bool']($and33=$m['conf']['__getitem__']('currentUser'))?($p['bool']($or23=$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']('root'))?$or23:$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']($p['__op_add']($add7=module,$add8='-delete'))):$and33);
			$pyjs['track']['lineno']=218;
			isDisabled = ($p['bool']($and35=(module !== null))?($p['bool']($and36=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('modules')['__getitem__'](module)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_144_err){if (!$p['isinstance']($pyjs_dbg_144_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_144_err);}throw $pyjs_dbg_144_err;
}})()['__contains__']('disabledFunctions'))?($p['bool']($and37=$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('disabledFunctions'))?$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('disabledFunctions')['__contains__']('delete'):$and37):$and36):$and35);
			$pyjs['track']['lineno']=220;
			$pyjs['track']['lineno']=220;
			var $pyjs__ret = ($p['bool']($and39=correctAction)?($p['bool']($and40=correctHandler)?($p['bool']($and41=hasAccess)?!$p['bool'](isDisabled):$and41):$and40):$and39);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['module'],['handler'],['actionName']]);
		$cls_definition['isSuitableFor'] = $method;
		$pyjs['track']['lineno']=222;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
			var selection,d;
			$pyjs['track']={'module':'actions.list', 'lineno':222};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=222;
			$pyjs['track']['lineno']=223;
			selection = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_145_err){if (!$p['isinstance']($pyjs_dbg_145_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_145_err);}throw $pyjs_dbg_145_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_146_err){if (!$p['isinstance']($pyjs_dbg_146_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_146_err);}throw $pyjs_dbg_146_err;
}})()['getCurrentSelection']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_147_err){if (!$p['isinstance']($pyjs_dbg_147_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_147_err);}throw $pyjs_dbg_147_err;
}})();
			$pyjs['track']['lineno']=224;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool'](selection));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_148_err){if (!$p['isinstance']($pyjs_dbg_148_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_148_err);}throw $pyjs_dbg_148_err;
}})()) {
				$pyjs['track']['lineno']=225;
				$pyjs['track']['lineno']=225;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=226;
			d = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['html5']['ext'], 'YesNoDialog', null, null, [{'title':(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Delete them?');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_151_err){if (!$p['isinstance']($pyjs_dbg_151_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_151_err);}throw $pyjs_dbg_151_err;
}})(), 'yesCallback':$p['getattr'](self, 'doDelete'), 'yesLabel':(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Delete');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_152_err){if (!$p['isinstance']($pyjs_dbg_152_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_152_err);}throw $pyjs_dbg_152_err;
}})(), 'noLabel':(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Keep');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_153_err){if (!$p['isinstance']($pyjs_dbg_153_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_153_err);}throw $pyjs_dbg_153_err;
}})()}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(null, $m['translate'], null, null, [{'amt':(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len'](selection);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_149_err){if (!$p['isinstance']($pyjs_dbg_149_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_149_err);}throw $pyjs_dbg_149_err;
}})()}, 'Delete {amt} Entries?']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_150_err){if (!$p['isinstance']($pyjs_dbg_150_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_150_err);}throw $pyjs_dbg_150_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_154_err){if (!$p['isinstance']($pyjs_dbg_154_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_154_err);}throw $pyjs_dbg_154_err;
}})();
			$pyjs['track']['lineno']=227;
			d['deleteList'] = function(){
				var $iter3_idx,$iter3_nextval,$iter3_type,$collcomp1,$iter3_iter,$iter3_array,x,$pyjs__trackstack_size_1;
	$collcomp1 = $p['list']();
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter3_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return selection;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_155_err){if (!$p['isinstance']($pyjs_dbg_155_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_155_err);}throw $pyjs_dbg_155_err;
}})();
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				x = $iter3_nextval['$nextval'];
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $collcomp1['append'](x['__getitem__']('key'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_156_err){if (!$p['isinstance']($pyjs_dbg_156_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_156_err);}throw $pyjs_dbg_156_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='actions.list';

	return $collcomp1;}();
			$pyjs['track']['lineno']=228;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return d['__getitem__']('class')['append']('delete');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_157_err){if (!$p['isinstance']($pyjs_dbg_157_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_157_err);}throw $pyjs_dbg_157_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=230;
		$method = $pyjs__bind_method2('doDelete', function(dialog) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				dialog = arguments[1];
			}
			var $iter4_nextval,deleteList,$iter4_idx,$iter4_type,$pyjs__trackstack_size_1,$iter4_array,x,$iter4_iter;
			$pyjs['track']={'module':'actions.list', 'lineno':230};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=230;
			$pyjs['track']['lineno']=231;
			deleteList = $p['getattr'](dialog, 'deleteList');
			$pyjs['track']['lineno']=232;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter4_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return deleteList;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_158_err){if (!$p['isinstance']($pyjs_dbg_158_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_158_err);}throw $pyjs_dbg_158_err;
}})();
			$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
			while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
				x = $iter4_nextval['$nextval'];
				$pyjs['track']['lineno']=233;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'secure':true, 'modifies':true}, $p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_159_err){if (!$p['isinstance']($pyjs_dbg_159_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_159_err);}throw $pyjs_dbg_159_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_160_err){if (!$p['isinstance']($pyjs_dbg_160_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_160_err);}throw $pyjs_dbg_160_err;
}})(), 'module'), 'delete', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([['key', x]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_161_err){if (!$p['isinstance']($pyjs_dbg_161_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_161_err);}throw $pyjs_dbg_161_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_162_err){if (!$p['isinstance']($pyjs_dbg_162_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_162_err);}throw $pyjs_dbg_162_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='actions.list';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['dialog']]);
		$cls_definition['doDelete'] = $method;
		$pyjs['track']['lineno']=235;
		$method = $pyjs__bind_method2('resetLoadingState', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'actions.list', 'lineno':235};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=235;
			$pyjs['track']['lineno']=236;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['resetLoadingState'] = $method;
		$pyjs['track']['lineno']=182;
		var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Button'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('DeleteAction', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=238;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $p['getattr']($m['DeleteAction'], 'isSuitableFor'), $m['DeleteAction']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_163_err){if (!$p['isinstance']($pyjs_dbg_163_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_163_err);}throw $pyjs_dbg_163_err;
}})();
	$pyjs['track']['lineno']=240;
	$m['ListPreviewAction'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'actions.list';
		$pyjs['track']['lineno']=242;
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
			var btn;
			$pyjs['track']={'module':'actions.list', 'lineno':242};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=242;
			$pyjs['track']['lineno']=243;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['ListPreviewAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_164_err){if (!$p['isinstance']($pyjs_dbg_164_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_164_err);}throw $pyjs_dbg_164_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_165_err){if (!$p['isinstance']($pyjs_dbg_165_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_165_err);}throw $pyjs_dbg_165_err;
}})();
			$pyjs['track']['lineno']=245;
			self['urlCb'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Select']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_166_err){if (!$p['isinstance']($pyjs_dbg_166_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_166_err);}throw $pyjs_dbg_166_err;
}})();
			$pyjs['track']['lineno']=246;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'urlCb'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_167_err){if (!$p['isinstance']($pyjs_dbg_167_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_167_err);}throw $pyjs_dbg_167_err;
}})();
			$pyjs['track']['lineno']=248;
			btn = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['html5']['ext'], 'Button', null, null, [{'callback':$p['getattr'](self, 'onClick')}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Preview');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_168_err){if (!$p['isinstance']($pyjs_dbg_168_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_168_err);}throw $pyjs_dbg_168_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_169_err){if (!$p['isinstance']($pyjs_dbg_169_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_169_err);}throw $pyjs_dbg_169_err;
}})();
			$pyjs['track']['lineno']=249;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return btn['__setitem__']('class', 'icon preview');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_170_err){if (!$p['isinstance']($pyjs_dbg_170_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_170_err);}throw $pyjs_dbg_170_err;
}})();
			$pyjs['track']['lineno']=250;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild'](btn);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_171_err){if (!$p['isinstance']($pyjs_dbg_171_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_171_err);}throw $pyjs_dbg_171_err;
}})();
			$pyjs['track']['lineno']=251;
			self['urls'] = null;
			$pyjs['track']['lineno']=253;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('disabled', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_172_err){if (!$p['isinstance']($pyjs_dbg_172_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_172_err);}throw $pyjs_dbg_172_err;
}})();
			$pyjs['track']['lineno']=254;
			self['isDisabled'] = true;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=256;
		$method = $pyjs__bind_method2('onChange', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var newUrl;
			$pyjs['track']={'module':'actions.list', 'lineno':256};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=256;
			$pyjs['track']['lineno']=257;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return event['stopPropagation']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_173_err){if (!$p['isinstance']($pyjs_dbg_173_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_173_err);}throw $pyjs_dbg_173_err;
}})();
			$pyjs['track']['lineno']=258;
			newUrl = $p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'urlCb')['__getitem__']('options')['item']($p['getattr'](self, 'urlCb')['__getitem__']('selectedIndex'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_174_err){if (!$p['isinstance']($pyjs_dbg_174_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_174_err);}throw $pyjs_dbg_174_err;
}})(), 'value');
			$pyjs['track']['lineno']=259;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['setUrl'](newUrl);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_175_err){if (!$p['isinstance']($pyjs_dbg_175_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_175_err);}throw $pyjs_dbg_175_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onChange'] = $method;
		$pyjs['track']['lineno']=261;
		$method = $pyjs__bind_method2('rebuildCB', function() {
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
			var name,$iter6_idx,$iter6_type,o,url,$iter6_array,$or25,$or26,$pyjs__trackstack_size_1,$iter6_iter,$iter6_nextval;
			$pyjs['track']={'module':'actions.list', 'lineno':261};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=261;
			$pyjs['track']['lineno']=262;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['urlCb']['removeAllChildren']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_176_err){if (!$p['isinstance']($pyjs_dbg_176_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_176_err);}throw $pyjs_dbg_176_err;
}})();
			$pyjs['track']['lineno']=264;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance']($p['getattr'](self, 'urls'), $p['list']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_177_err){if (!$p['isinstance']($pyjs_dbg_177_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_177_err);}throw $pyjs_dbg_177_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_178_err){if (!$p['isinstance']($pyjs_dbg_178_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_178_err);}throw $pyjs_dbg_178_err;
}})()) {
				$pyjs['track']['lineno']=265;
				self['urls'] = function(){
					var $iter5_nextval,x,$iter5_idx,$pyjs__trackstack_size_1,$collcomp2,$iter5_iter,$iter5_array,$iter5_type;
	$collcomp2 = $p['dict']();
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter5_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'urls');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_179_err){if (!$p['isinstance']($pyjs_dbg_179_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_179_err);}throw $pyjs_dbg_179_err;
}})();
				$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
				while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
					x = $iter5_nextval['$nextval'];
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $collcomp2['__setitem__'](x, x);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_180_err){if (!$p['isinstance']($pyjs_dbg_180_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_180_err);}throw $pyjs_dbg_180_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='actions.list';

	return $collcomp2;}();
			}
			$pyjs['track']['lineno']=267;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($or25=!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance']($p['getattr'](self, 'urls'), $p['dict']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_181_err){if (!$p['isinstance']($pyjs_dbg_181_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_181_err);}throw $pyjs_dbg_181_err;
}})()))?$or25:$p['op_eq']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len']((function(){try{try{$pyjs['in_try_except'] += 1;
			return self['urls']['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_182_err){if (!$p['isinstance']($pyjs_dbg_182_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_182_err);}throw $pyjs_dbg_182_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_183_err){if (!$p['isinstance']($pyjs_dbg_183_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_183_err);}throw $pyjs_dbg_183_err;
}})(), 1)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_184_err){if (!$p['isinstance']($pyjs_dbg_184_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_184_err);}throw $pyjs_dbg_184_err;
}})()) {
				$pyjs['track']['lineno']=268;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'urlCb')['__getitem__']('style')['__setitem__']('display', 'none');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_185_err){if (!$p['isinstance']($pyjs_dbg_185_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_185_err);}throw $pyjs_dbg_185_err;
}})();
				$pyjs['track']['lineno']=269;
				$pyjs['track']['lineno']=269;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=271;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter6_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['urls']['items']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_187_err){if (!$p['isinstance']($pyjs_dbg_187_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_187_err);}throw $pyjs_dbg_187_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_188_err){if (!$p['isinstance']($pyjs_dbg_188_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_188_err);}throw $pyjs_dbg_188_err;
}})();
			$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
			while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
				var $tupleassign1 = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__ass_unpack']($iter6_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_186_err){if (!$p['isinstance']($pyjs_dbg_186_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_186_err);}throw $pyjs_dbg_186_err;
}})();
				name = $tupleassign1[0];
				url = $tupleassign1[1];
				$pyjs['track']['lineno']=272;
				o = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Option']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_189_err){if (!$p['isinstance']($pyjs_dbg_189_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_189_err);}throw $pyjs_dbg_189_err;
}})();
				$pyjs['track']['lineno']=273;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return o['__setitem__']('value', url);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_190_err){if (!$p['isinstance']($pyjs_dbg_190_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_190_err);}throw $pyjs_dbg_190_err;
}})();
				$pyjs['track']['lineno']=274;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return o['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['TextNode'](name);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_191_err){if (!$p['isinstance']($pyjs_dbg_191_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_191_err);}throw $pyjs_dbg_191_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_192_err){if (!$p['isinstance']($pyjs_dbg_192_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_192_err);}throw $pyjs_dbg_192_err;
}})();
				$pyjs['track']['lineno']=275;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['urlCb']['appendChild'](o);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_193_err){if (!$p['isinstance']($pyjs_dbg_193_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_193_err);}throw $pyjs_dbg_193_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=277;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'urlCb')['__getitem__']('style')['__setitem__']('display', '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_194_err){if (!$p['isinstance']($pyjs_dbg_194_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_194_err);}throw $pyjs_dbg_194_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['rebuildCB'] = $method;
		$pyjs['track']['lineno']=279;
		$method = $pyjs__bind_method2('onAttach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var moduleConfig,module;
			$pyjs['track']={'module':'actions.list', 'lineno':279};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=279;
			$pyjs['track']['lineno']=280;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['ListPreviewAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_195_err){if (!$p['isinstance']($pyjs_dbg_195_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_195_err);}throw $pyjs_dbg_195_err;
}})()['onAttach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_196_err){if (!$p['isinstance']($pyjs_dbg_196_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_196_err);}throw $pyjs_dbg_196_err;
}})();
			$pyjs['track']['lineno']=281;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_197_err){if (!$p['isinstance']($pyjs_dbg_197_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_197_err);}throw $pyjs_dbg_197_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_198_err){if (!$p['isinstance']($pyjs_dbg_198_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_198_err);}throw $pyjs_dbg_198_err;
}})()['selectionChangedEvent']['register'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_199_err){if (!$p['isinstance']($pyjs_dbg_199_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_199_err);}throw $pyjs_dbg_199_err;
}})();
			$pyjs['track']['lineno']=283;
			module = $p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_200_err){if (!$p['isinstance']($pyjs_dbg_200_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_200_err);}throw $pyjs_dbg_200_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_201_err){if (!$p['isinstance']($pyjs_dbg_201_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_201_err);}throw $pyjs_dbg_201_err;
}})(), 'module');
			$pyjs['track']['lineno']=284;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('modules')['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_202_err){if (!$p['isinstance']($pyjs_dbg_202_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_202_err);}throw $pyjs_dbg_202_err;
}})()['__contains__'](module));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_203_err){if (!$p['isinstance']($pyjs_dbg_203_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_203_err);}throw $pyjs_dbg_203_err;
}})()) {
				$pyjs['track']['lineno']=285;
				moduleConfig = $m['conf']['__getitem__']('modules')['__getitem__'](module);
				$pyjs['track']['lineno']=287;
				self['urls'] = (function(){try{try{$pyjs['in_try_except'] += 1;
				return moduleConfig['get']('preview', (function(){try{try{$pyjs['in_try_except'] += 1;
				return moduleConfig['get']('previewurls');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_204_err){if (!$p['isinstance']($pyjs_dbg_204_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_204_err);}throw $pyjs_dbg_204_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_205_err){if (!$p['isinstance']($pyjs_dbg_205_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_205_err);}throw $pyjs_dbg_205_err;
}})();
				$pyjs['track']['lineno']=288;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, 'urls'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_206_err){if (!$p['isinstance']($pyjs_dbg_206_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_206_err);}throw $pyjs_dbg_206_err;
}})()) {
					$pyjs['track']['lineno']=289;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['rebuildCB']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_207_err){if (!$p['isinstance']($pyjs_dbg_207_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_207_err);}throw $pyjs_dbg_207_err;
}})();
				}
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onAttach'] = $method;
		$pyjs['track']['lineno']=291;
		$method = $pyjs__bind_method2('onDetach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'actions.list', 'lineno':291};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=291;
			$pyjs['track']['lineno']=292;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_208_err){if (!$p['isinstance']($pyjs_dbg_208_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_208_err);}throw $pyjs_dbg_208_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_209_err){if (!$p['isinstance']($pyjs_dbg_209_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_209_err);}throw $pyjs_dbg_209_err;
}})()['selectionChangedEvent']['unregister'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_210_err){if (!$p['isinstance']($pyjs_dbg_210_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_210_err);}throw $pyjs_dbg_210_err;
}})();
			$pyjs['track']['lineno']=293;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['ListPreviewAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_211_err){if (!$p['isinstance']($pyjs_dbg_211_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_211_err);}throw $pyjs_dbg_211_err;
}})()['onDetach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_212_err){if (!$p['isinstance']($pyjs_dbg_212_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_212_err);}throw $pyjs_dbg_212_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onDetach'] = $method;
		$pyjs['track']['lineno']=295;
		$method = $pyjs__bind_method2('onSelectionChanged', function(table, selection) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				table = arguments[1];
				selection = arguments[2];
			}

			$pyjs['track']={'module':'actions.list', 'lineno':295};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=295;
			$pyjs['track']['lineno']=296;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len'](selection);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_213_err){if (!$p['isinstance']($pyjs_dbg_213_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_213_err);}throw $pyjs_dbg_213_err;
}})(), 0) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_214_err){if (!$p['isinstance']($pyjs_dbg_214_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_214_err);}throw $pyjs_dbg_214_err;
}})()) {
				$pyjs['track']['lineno']=297;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, 'isDisabled'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_215_err){if (!$p['isinstance']($pyjs_dbg_215_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_215_err);}throw $pyjs_dbg_215_err;
}})()) {
					$pyjs['track']['lineno']=298;
					self['isDisabled'] = false;
					$pyjs['track']['lineno']=299;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['__setitem__']('disabled', false);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_216_err){if (!$p['isinstance']($pyjs_dbg_216_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_216_err);}throw $pyjs_dbg_216_err;
}})();
				}
			}
			else {
				$pyjs['track']['lineno']=302;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']($p['getattr'](self, 'isDisabled')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_217_err){if (!$p['isinstance']($pyjs_dbg_217_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_217_err);}throw $pyjs_dbg_217_err;
}})()) {
					$pyjs['track']['lineno']=303;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['__setitem__']('disabled', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_218_err){if (!$p['isinstance']($pyjs_dbg_218_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_218_err);}throw $pyjs_dbg_218_err;
}})();
					$pyjs['track']['lineno']=304;
					self['isDisabled'] = true;
				}
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['table'],['selection']]);
		$cls_definition['onSelectionChanged'] = $method;
		$pyjs['track']['lineno']=306;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
			var selection,$add13,$iter8_iter,$iter7_type,$iter8_idx,$iter7_iter,$iter8_type,$pyjs__trackstack_size_1,$add14,$add15,$add16,$add10,$iter8_nextval,$add12,$iter7_idx,target,newUrl,$iter7_nextval,k,$iter7_array,$iter8_array,$pyjs__trackstack_size_2,v,entry,$add9,$add11;
			$pyjs['track']={'module':'actions.list', 'lineno':306};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=306;
			$pyjs['track']['lineno']=307;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['getattr'](self, 'urls') === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_219_err){if (!$p['isinstance']($pyjs_dbg_219_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_219_err);}throw $pyjs_dbg_219_err;
}})()) {
				$pyjs['track']['lineno']=308;
				$pyjs['track']['lineno']=308;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=310;
			selection = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_220_err){if (!$p['isinstance']($pyjs_dbg_220_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_220_err);}throw $pyjs_dbg_220_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_221_err){if (!$p['isinstance']($pyjs_dbg_221_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_221_err);}throw $pyjs_dbg_221_err;
}})()['getCurrentSelection']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_222_err){if (!$p['isinstance']($pyjs_dbg_222_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_222_err);}throw $pyjs_dbg_222_err;
}})();
			$pyjs['track']['lineno']=312;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool'](selection));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_223_err){if (!$p['isinstance']($pyjs_dbg_223_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_223_err);}throw $pyjs_dbg_223_err;
}})()) {
				$pyjs['track']['lineno']=313;
				$pyjs['track']['lineno']=313;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=315;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter7_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return selection;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_224_err){if (!$p['isinstance']($pyjs_dbg_224_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_224_err);}throw $pyjs_dbg_224_err;
}})();
			$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
			while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
				entry = $iter7_nextval['$nextval'];
				$pyjs['track']['lineno']=316;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance']($p['getattr'](self, 'urls'), $p['str']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_225_err){if (!$p['isinstance']($pyjs_dbg_225_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_225_err);}throw $pyjs_dbg_225_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_226_err){if (!$p['isinstance']($pyjs_dbg_226_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_226_err);}throw $pyjs_dbg_226_err;
}})()) {
					$pyjs['track']['lineno']=317;
					newUrl = $p['getattr'](self, 'urls');
				}
				else if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['len']((function(){try{try{$pyjs['in_try_except'] += 1;
				return self['urls']['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_227_err){if (!$p['isinstance']($pyjs_dbg_227_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_227_err);}throw $pyjs_dbg_227_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_228_err){if (!$p['isinstance']($pyjs_dbg_228_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_228_err);}throw $pyjs_dbg_228_err;
}})(), 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_229_err){if (!$p['isinstance']($pyjs_dbg_229_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_229_err);}throw $pyjs_dbg_229_err;
}})()) {
					$pyjs['track']['lineno']=319;
					newUrl = (function(){try{try{$pyjs['in_try_except'] += 1;
					return self['urls']['values']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_230_err){if (!$p['isinstance']($pyjs_dbg_230_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_230_err);}throw $pyjs_dbg_230_err;
}})()['__getitem__'](0);
				}
				else {
					$pyjs['track']['lineno']=321;
					newUrl = $p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'urlCb')['__getitem__']('options')['item']($p['getattr'](self, 'urlCb')['__getitem__']('selectedIndex'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_231_err){if (!$p['isinstance']($pyjs_dbg_231_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_231_err);}throw $pyjs_dbg_231_err;
}})(), 'value');
				}
				$pyjs['track']['lineno']=323;
				newUrl = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return newUrl['$$replace']('{{modul}}', $p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_232_err){if (!$p['isinstance']($pyjs_dbg_232_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_232_err);}throw $pyjs_dbg_232_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_233_err){if (!$p['isinstance']($pyjs_dbg_233_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_233_err);}throw $pyjs_dbg_233_err;
}})(), 'module'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_234_err){if (!$p['isinstance']($pyjs_dbg_234_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_234_err);}throw $pyjs_dbg_234_err;
}})()['$$replace']('{{module}}', $p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_235_err){if (!$p['isinstance']($pyjs_dbg_235_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_235_err);}throw $pyjs_dbg_235_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_236_err){if (!$p['isinstance']($pyjs_dbg_236_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_236_err);}throw $pyjs_dbg_236_err;
}})(), 'module'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_237_err){if (!$p['isinstance']($pyjs_dbg_237_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_237_err);}throw $pyjs_dbg_237_err;
}})();
				$pyjs['track']['lineno']=327;
				$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
				$iter8_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return entry['items']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_239_err){if (!$p['isinstance']($pyjs_dbg_239_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_239_err);}throw $pyjs_dbg_239_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_240_err){if (!$p['isinstance']($pyjs_dbg_240_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_240_err);}throw $pyjs_dbg_240_err;
}})();
				$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
				while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
					var $tupleassign2 = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['__ass_unpack']($iter8_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_238_err){if (!$p['isinstance']($pyjs_dbg_238_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_238_err);}throw $pyjs_dbg_238_err;
}})();
					k = $tupleassign2[0];
					v = $tupleassign2[1];
					$pyjs['track']['lineno']=328;
					newUrl = (function(){try{try{$pyjs['in_try_except'] += 1;
					return newUrl['$$replace']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['sprintf']('{{%s}}', k);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_241_err){if (!$p['isinstance']($pyjs_dbg_241_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_241_err);}throw $pyjs_dbg_241_err;
}})(), v);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_242_err){if (!$p['isinstance']($pyjs_dbg_242_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_242_err);}throw $pyjs_dbg_242_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='actions.list';
				$pyjs['track']['lineno']=330;
				newUrl = (function(){try{try{$pyjs['in_try_except'] += 1;
				return newUrl['$$replace']("'", "\\'");
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_243_err){if (!$p['isinstance']($pyjs_dbg_243_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_243_err);}throw $pyjs_dbg_243_err;
}})();
				$pyjs['track']['lineno']=332;
				target = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('%s-%s', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_244_err){if (!$p['isinstance']($pyjs_dbg_244_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_244_err);}throw $pyjs_dbg_244_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_245_err){if (!$p['isinstance']($pyjs_dbg_245_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_245_err);}throw $pyjs_dbg_245_err;
}})(), 'module'), (function(){try{try{$pyjs['in_try_except'] += 1;
				return entry['get']('key');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_246_err){if (!$p['isinstance']($pyjs_dbg_246_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_246_err);}throw $pyjs_dbg_246_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_247_err){if (!$p['isinstance']($pyjs_dbg_247_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_247_err);}throw $pyjs_dbg_247_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_248_err){if (!$p['isinstance']($pyjs_dbg_248_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_248_err);}throw $pyjs_dbg_248_err;
}})();
				$pyjs['track']['lineno']=333;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return (typeof eval == "undefined"?$m['eval']:eval)($p['__op_add']($add15=$p['__op_add']($add13=$p['__op_add']($add11=$p['__op_add']($add9="window.open('",$add10=newUrl),$add12="', '"),$add14=target),$add16="');"));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_249_err){if (!$p['isinstance']($pyjs_dbg_249_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_249_err);}throw $pyjs_dbg_249_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='actions.list';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=336;
		$method = $pyjs__bind_method2('isSuitableFor', function(module, handler, actionName) {
			var correctHandler,$and48,$and45,$and44,$and47,$and46,$and43,$or28,$or29,$or27,correctAction,$add17,$and49,$add18,hasAccess,$and52,$and53,$and50,$and51,$or32,$or31,$or30,isAvailable,isDisabled;
			$pyjs['track']={'module':'actions.list', 'lineno':336};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=336;
			$pyjs['track']['lineno']=337;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($or27=(module === null))?$or27:!(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('modules')['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_250_err){if (!$p['isinstance']($pyjs_dbg_250_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_250_err);}throw $pyjs_dbg_250_err;
}})()['__contains__'](module)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_251_err){if (!$p['isinstance']($pyjs_dbg_251_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_251_err);}throw $pyjs_dbg_251_err;
}})()) {
				$pyjs['track']['lineno']=338;
				$pyjs['track']['lineno']=338;
				var $pyjs__ret = false;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=340;
			correctAction = $p['op_eq'](actionName, 'preview');
			$pyjs['track']['lineno']=341;
			correctHandler = ($p['bool']($or29=$p['op_eq'](handler, 'list'))?$or29:(function(){try{try{$pyjs['in_try_except'] += 1;
			return handler['startswith']('list.');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_252_err){if (!$p['isinstance']($pyjs_dbg_252_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_252_err);}throw $pyjs_dbg_252_err;
}})());
			$pyjs['track']['lineno']=342;
			hasAccess = ($p['bool']($and43=$m['conf']['__getitem__']('currentUser'))?($p['bool']($or31=$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']('root'))?$or31:$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']($p['__op_add']($add17=module,$add18='-view'))):$and43);
			$pyjs['track']['lineno']=343;
			isDisabled = ($p['bool']($and45=(module !== null))?($p['bool']($and46=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('modules')['__getitem__'](module)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_253_err){if (!$p['isinstance']($pyjs_dbg_253_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_253_err);}throw $pyjs_dbg_253_err;
}})()['__contains__']('disabledFunctions'))?($p['bool']($and47=$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('disabledFunctions'))?$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('disabledFunctions')['__contains__']('view'):$and47):$and46):$and45);
			$pyjs['track']['lineno']=344;
			isAvailable = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('modules')['__getitem__'](module)['get']('preview', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('modules')['__getitem__'](module)['get']('previewurls');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_254_err){if (!$p['isinstance']($pyjs_dbg_254_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_254_err);}throw $pyjs_dbg_254_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_255_err){if (!$p['isinstance']($pyjs_dbg_255_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_255_err);}throw $pyjs_dbg_255_err;
}})();
			$pyjs['track']['lineno']=346;
			$pyjs['track']['lineno']=346;
			var $pyjs__ret = ($p['bool']($and49=correctAction)?($p['bool']($and50=correctHandler)?($p['bool']($and51=hasAccess)?($p['bool']($and52=!$p['bool'](isDisabled))?isAvailable:$and52):$and51):$and50):$and49);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['module'],['handler'],['actionName']]);
		$cls_definition['isSuitableFor'] = $method;
		$pyjs['track']['lineno']=240;
		var $bases = new Array($p['getattr']($m['html5'], 'Span'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('ListPreviewAction', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=348;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](2, $p['getattr']($m['ListPreviewAction'], 'isSuitableFor'), $m['ListPreviewAction']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_256_err){if (!$p['isinstance']($pyjs_dbg_256_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_256_err);}throw $pyjs_dbg_256_err;
}})();
	$pyjs['track']['lineno']=351;
	$m['ListPreviewInlineAction'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'actions.list';
		$pyjs['track']['lineno']=352;
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

			$pyjs['track']={'module':'actions.list', 'lineno':352};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=352;
			$pyjs['track']['lineno']=353;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['ListPreviewInlineAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_257_err){if (!$p['isinstance']($pyjs_dbg_257_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_257_err);}throw $pyjs_dbg_257_err;
}})(), '__init__', args, kwargs, [{}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Preview');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_258_err){if (!$p['isinstance']($pyjs_dbg_258_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_258_err);}throw $pyjs_dbg_258_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_259_err){if (!$p['isinstance']($pyjs_dbg_259_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_259_err);}throw $pyjs_dbg_259_err;
}})();
			$pyjs['track']['lineno']=354;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('class', 'icon preview');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_260_err){if (!$p['isinstance']($pyjs_dbg_260_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_260_err);}throw $pyjs_dbg_260_err;
}})();
			$pyjs['track']['lineno']=355;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('disabled', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_261_err){if (!$p['isinstance']($pyjs_dbg_261_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_261_err);}throw $pyjs_dbg_261_err;
}})();
			$pyjs['track']['lineno']=356;
			self['urls'] = null;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=358;
		$method = $pyjs__bind_method2('onAttach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'actions.list', 'lineno':358};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=358;
			$pyjs['track']['lineno']=359;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['ListPreviewInlineAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_262_err){if (!$p['isinstance']($pyjs_dbg_262_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_262_err);}throw $pyjs_dbg_262_err;
}})()['onAttach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_263_err){if (!$p['isinstance']($pyjs_dbg_263_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_263_err);}throw $pyjs_dbg_263_err;
}})();
			$pyjs['track']['lineno']=360;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_264_err){if (!$p['isinstance']($pyjs_dbg_264_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_264_err);}throw $pyjs_dbg_264_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_265_err){if (!$p['isinstance']($pyjs_dbg_265_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_265_err);}throw $pyjs_dbg_265_err;
}})()['selectionChangedEvent']['register'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_266_err){if (!$p['isinstance']($pyjs_dbg_266_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_266_err);}throw $pyjs_dbg_266_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onAttach'] = $method;
		$pyjs['track']['lineno']=362;
		$method = $pyjs__bind_method2('onDetach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'actions.list', 'lineno':362};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=362;
			$pyjs['track']['lineno']=363;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_267_err){if (!$p['isinstance']($pyjs_dbg_267_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_267_err);}throw $pyjs_dbg_267_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_268_err){if (!$p['isinstance']($pyjs_dbg_268_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_268_err);}throw $pyjs_dbg_268_err;
}})()['selectionChangedEvent']['unregister'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_269_err){if (!$p['isinstance']($pyjs_dbg_269_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_269_err);}throw $pyjs_dbg_269_err;
}})();
			$pyjs['track']['lineno']=364;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['ListPreviewInlineAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_270_err){if (!$p['isinstance']($pyjs_dbg_270_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_270_err);}throw $pyjs_dbg_270_err;
}})()['onDetach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_271_err){if (!$p['isinstance']($pyjs_dbg_271_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_271_err);}throw $pyjs_dbg_271_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onDetach'] = $method;
		$pyjs['track']['lineno']=366;
		$method = $pyjs__bind_method2('onSelectionChanged', function(table, selection) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				table = arguments[1];
				selection = arguments[2];
			}
			var $and55,module,preview,$and54;
			$pyjs['track']={'module':'actions.list', 'lineno':366};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=366;
			$pyjs['track']['lineno']=367;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_272_err){if (!$p['isinstance']($pyjs_dbg_272_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_272_err);}throw $pyjs_dbg_272_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_273_err){if (!$p['isinstance']($pyjs_dbg_273_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_273_err);}throw $pyjs_dbg_273_err;
}})(), 'isSelector'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_274_err){if (!$p['isinstance']($pyjs_dbg_274_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_274_err);}throw $pyjs_dbg_274_err;
}})()) {
				$pyjs['track']['lineno']=368;
				$pyjs['track']['lineno']=368;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=371;
			module = $p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_275_err){if (!$p['isinstance']($pyjs_dbg_275_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_275_err);}throw $pyjs_dbg_275_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_276_err){if (!$p['isinstance']($pyjs_dbg_276_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_276_err);}throw $pyjs_dbg_276_err;
}})(), 'module');
			$pyjs['track']['lineno']=372;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('modules')['__getitem__'](module)['get']('disableInternalPreview', !$p['bool']($m['conf']['__getitem__']('internalPreview')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_277_err){if (!$p['isinstance']($pyjs_dbg_277_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_277_err);}throw $pyjs_dbg_277_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_278_err){if (!$p['isinstance']($pyjs_dbg_278_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_278_err);}throw $pyjs_dbg_278_err;
}})()) {
				$pyjs['track']['lineno']=373;
				$pyjs['track']['lineno']=373;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=376;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and54=(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_279_err){if (!$p['isinstance']($pyjs_dbg_279_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_279_err);}throw $pyjs_dbg_279_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_280_err){if (!$p['isinstance']($pyjs_dbg_280_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_280_err);}throw $pyjs_dbg_280_err;
}})()['sideBar']['getWidget']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_281_err){if (!$p['isinstance']($pyjs_dbg_281_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_281_err);}throw $pyjs_dbg_281_err;
}})())?!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_282_err){if (!$p['isinstance']($pyjs_dbg_282_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_282_err);}throw $pyjs_dbg_282_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_283_err){if (!$p['isinstance']($pyjs_dbg_283_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_283_err);}throw $pyjs_dbg_283_err;
}})()['sideBar']['getWidget']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_284_err){if (!$p['isinstance']($pyjs_dbg_284_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_284_err);}throw $pyjs_dbg_284_err;
}})(), $m['InternalPreview']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_285_err){if (!$p['isinstance']($pyjs_dbg_285_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_285_err);}throw $pyjs_dbg_285_err;
}})()):$and54));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_286_err){if (!$p['isinstance']($pyjs_dbg_286_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_286_err);}throw $pyjs_dbg_286_err;
}})()) {
				$pyjs['track']['lineno']=378;
				$pyjs['track']['lineno']=378;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=382;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len'](selection);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_287_err){if (!$p['isinstance']($pyjs_dbg_287_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_287_err);}throw $pyjs_dbg_287_err;
}})(), 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_288_err){if (!$p['isinstance']($pyjs_dbg_288_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_288_err);}throw $pyjs_dbg_288_err;
}})()) {
				$pyjs['track']['lineno']=383;
				preview = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['InternalPreview']($p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_289_err){if (!$p['isinstance']($pyjs_dbg_289_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_289_err);}throw $pyjs_dbg_289_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_290_err){if (!$p['isinstance']($pyjs_dbg_290_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_290_err);}throw $pyjs_dbg_290_err;
}})(), 'module'), $p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_291_err){if (!$p['isinstance']($pyjs_dbg_291_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_291_err);}throw $pyjs_dbg_291_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_292_err){if (!$p['isinstance']($pyjs_dbg_292_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_292_err);}throw $pyjs_dbg_292_err;
}})(), '_structure'), selection['__getitem__'](0));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_293_err){if (!$p['isinstance']($pyjs_dbg_293_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_293_err);}throw $pyjs_dbg_293_err;
}})();
				$pyjs['track']['lineno']=384;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_294_err){if (!$p['isinstance']($pyjs_dbg_294_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_294_err);}throw $pyjs_dbg_294_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_295_err){if (!$p['isinstance']($pyjs_dbg_295_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_295_err);}throw $pyjs_dbg_295_err;
}})()['sideBar']['setWidget'](preview);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_296_err){if (!$p['isinstance']($pyjs_dbg_296_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_296_err);}throw $pyjs_dbg_296_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=386;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance']((function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_297_err){if (!$p['isinstance']($pyjs_dbg_297_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_297_err);}throw $pyjs_dbg_297_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_298_err){if (!$p['isinstance']($pyjs_dbg_298_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_298_err);}throw $pyjs_dbg_298_err;
}})()['sideBar']['getWidget']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_299_err){if (!$p['isinstance']($pyjs_dbg_299_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_299_err);}throw $pyjs_dbg_299_err;
}})(), $m['InternalPreview']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_300_err){if (!$p['isinstance']($pyjs_dbg_300_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_300_err);}throw $pyjs_dbg_300_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_301_err){if (!$p['isinstance']($pyjs_dbg_301_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_301_err);}throw $pyjs_dbg_301_err;
}})()) {
					$pyjs['track']['lineno']=387;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_302_err){if (!$p['isinstance']($pyjs_dbg_302_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_302_err);}throw $pyjs_dbg_302_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_303_err){if (!$p['isinstance']($pyjs_dbg_303_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_303_err);}throw $pyjs_dbg_303_err;
}})()['sideBar']['setWidget'](null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_304_err){if (!$p['isinstance']($pyjs_dbg_304_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_304_err);}throw $pyjs_dbg_304_err;
}})();
				}
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['table'],['selection']]);
		$cls_definition['onSelectionChanged'] = $method;
		$pyjs['track']['lineno']=390;
		$method = $pyjs__bind_method2('isSuitableFor', function(module, handler, actionName) {
			var $and65,$and64,$and63,$and62,$and61,$and60,correctHandler,$add20,isDisabled,correctAction,$add19,$and58,hasAccess,$and56,$and57,$and59,$or33,$or37,$or36,$or35,$or34,$or38;
			$pyjs['track']={'module':'actions.list', 'lineno':390};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=390;
			$pyjs['track']['lineno']=391;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($or33=(module === null))?$or33:!(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('modules')['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_305_err){if (!$p['isinstance']($pyjs_dbg_305_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_305_err);}throw $pyjs_dbg_305_err;
}})()['__contains__'](module)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_306_err){if (!$p['isinstance']($pyjs_dbg_306_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_306_err);}throw $pyjs_dbg_306_err;
}})()) {
				$pyjs['track']['lineno']=392;
				$pyjs['track']['lineno']=392;
				var $pyjs__ret = false;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=394;
			correctAction = $p['op_eq'](actionName, 'preview');
			$pyjs['track']['lineno']=395;
			correctHandler = ($p['bool']($or35=$p['op_eq'](handler, 'list'))?$or35:(function(){try{try{$pyjs['in_try_except'] += 1;
			return handler['startswith']('list.');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_307_err){if (!$p['isinstance']($pyjs_dbg_307_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_307_err);}throw $pyjs_dbg_307_err;
}})());
			$pyjs['track']['lineno']=396;
			hasAccess = ($p['bool']($and56=$m['conf']['__getitem__']('currentUser'))?($p['bool']($or37=$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']('root'))?$or37:$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']($p['__op_add']($add19=module,$add20='-view'))):$and56);
			$pyjs['track']['lineno']=397;
			isDisabled = ($p['bool']($and58=(module !== null))?($p['bool']($and59=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('modules')['__getitem__'](module)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_308_err){if (!$p['isinstance']($pyjs_dbg_308_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_308_err);}throw $pyjs_dbg_308_err;
}})()['__contains__']('disabledFunctions'))?($p['bool']($and60=$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('disabledFunctions'))?$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('disabledFunctions')['__contains__']('view'):$and60):$and59):$and58);
			$pyjs['track']['lineno']=399;
			$pyjs['track']['lineno']=399;
			var $pyjs__ret = ($p['bool']($and62=correctAction)?($p['bool']($and63=correctHandler)?($p['bool']($and64=hasAccess)?!$p['bool'](isDisabled):$and64):$and63):$and62);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['module'],['handler'],['actionName']]);
		$cls_definition['isSuitableFor'] = $method;
		$pyjs['track']['lineno']=351;
		var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Button'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('ListPreviewInlineAction', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=401;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $p['getattr']($m['ListPreviewInlineAction'], 'isSuitableFor'), $m['ListPreviewInlineAction']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_309_err){if (!$p['isinstance']($pyjs_dbg_309_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_309_err);}throw $pyjs_dbg_309_err;
}})();
	$pyjs['track']['lineno']=404;
	$m['CloseAction'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'actions.list';
		$pyjs['track']['lineno']=405;
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

			$pyjs['track']={'module':'actions.list', 'lineno':405};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=405;
			$pyjs['track']['lineno']=406;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['CloseAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_310_err){if (!$p['isinstance']($pyjs_dbg_310_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_310_err);}throw $pyjs_dbg_310_err;
}})(), '__init__', args, kwargs, [{}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Close');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_311_err){if (!$p['isinstance']($pyjs_dbg_311_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_311_err);}throw $pyjs_dbg_311_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_312_err){if (!$p['isinstance']($pyjs_dbg_312_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_312_err);}throw $pyjs_dbg_312_err;
}})();
			$pyjs['track']['lineno']=407;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('class', 'icon close');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_313_err){if (!$p['isinstance']($pyjs_dbg_313_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_313_err);}throw $pyjs_dbg_313_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=409;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];

			$pyjs['track']={'module':'actions.list', 'lineno':409};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=409;
			$pyjs['track']['lineno']=410;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('mainWindow')['removeWidget']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_314_err){if (!$p['isinstance']($pyjs_dbg_314_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_314_err);}throw $pyjs_dbg_314_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_315_err){if (!$p['isinstance']($pyjs_dbg_315_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_315_err);}throw $pyjs_dbg_315_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_316_err){if (!$p['isinstance']($pyjs_dbg_316_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_316_err);}throw $pyjs_dbg_316_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=413;
		$method = $pyjs__bind_method2('isSuitableFor', function(module, handler, actionName) {

			$pyjs['track']={'module':'actions.list', 'lineno':413};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=413;
			$pyjs['track']['lineno']=414;
			$pyjs['track']['lineno']=414;
			var $pyjs__ret = $p['op_eq'](actionName, 'close');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['module'],['handler'],['actionName']]);
		$cls_definition['isSuitableFor'] = $method;
		$pyjs['track']['lineno']=404;
		var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Button'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('CloseAction', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=416;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $p['getattr']($m['CloseAction'], 'isSuitableFor'), $m['CloseAction']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_317_err){if (!$p['isinstance']($pyjs_dbg_317_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_317_err);}throw $pyjs_dbg_317_err;
}})();
	$pyjs['track']['lineno']=418;
	$m['ActivateSelectionAction'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'actions.list';
		$pyjs['track']['lineno']=419;
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

			$pyjs['track']={'module':'actions.list', 'lineno':419};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=419;
			$pyjs['track']['lineno']=420;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['ActivateSelectionAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_318_err){if (!$p['isinstance']($pyjs_dbg_318_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_318_err);}throw $pyjs_dbg_318_err;
}})(), '__init__', args, kwargs, [{}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Select');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_319_err){if (!$p['isinstance']($pyjs_dbg_319_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_319_err);}throw $pyjs_dbg_319_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_320_err){if (!$p['isinstance']($pyjs_dbg_320_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_320_err);}throw $pyjs_dbg_320_err;
}})();
			$pyjs['track']['lineno']=421;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('class', 'icon activateselection');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_321_err){if (!$p['isinstance']($pyjs_dbg_321_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_321_err);}throw $pyjs_dbg_321_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=423;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];

			$pyjs['track']={'module':'actions.list', 'lineno':423};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=423;
			$pyjs['track']['lineno']=424;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_322_err){if (!$p['isinstance']($pyjs_dbg_322_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_322_err);}throw $pyjs_dbg_322_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_323_err){if (!$p['isinstance']($pyjs_dbg_323_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_323_err);}throw $pyjs_dbg_323_err;
}})()['activateCurrentSelection']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_324_err){if (!$p['isinstance']($pyjs_dbg_324_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_324_err);}throw $pyjs_dbg_324_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=427;
		$method = $pyjs__bind_method2('isSuitableFor', function(module, handler, actionName) {

			$pyjs['track']={'module':'actions.list', 'lineno':427};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=427;
			$pyjs['track']['lineno']=428;
			$pyjs['track']['lineno']=428;
			var $pyjs__ret = $p['op_eq'](actionName, 'select');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['module'],['handler'],['actionName']]);
		$cls_definition['isSuitableFor'] = $method;
		$pyjs['track']['lineno']=418;
		var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Button'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('ActivateSelectionAction', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=430;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $p['getattr']($m['ActivateSelectionAction'], 'isSuitableFor'), $m['ActivateSelectionAction']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_325_err){if (!$p['isinstance']($pyjs_dbg_325_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_325_err);}throw $pyjs_dbg_325_err;
}})();
	$pyjs['track']['lineno']=433;
	$m['SelectFieldsPopup'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'actions.list';
		$pyjs['track']['lineno']=434;
		$method = $pyjs__bind_method2('__init__', function(listWdg) {
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
				listWdg = arguments[1];
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
				if (typeof listWdg != 'undefined') {
					if (listWdg !== null && typeof listWdg['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = listWdg;
						listWdg = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}
			var $iter9_iter,lbl,$iter9_nextval,$iter9_idx,chkBox,$iter9_array,ul,key,li,div,$pyjs__trackstack_size_1,$iter9_type,bone;
			$pyjs['track']={'module':'actions.list', 'lineno':434};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=434;
			$pyjs['track']['lineno']=435;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool']($p['getattr'](listWdg, '_structure')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_326_err){if (!$p['isinstance']($pyjs_dbg_326_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_326_err);}throw $pyjs_dbg_326_err;
}})()) {
				$pyjs['track']['lineno']=436;
				$pyjs['track']['lineno']=436;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=438;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['SelectFieldsPopup'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_327_err){if (!$p['isinstance']($pyjs_dbg_327_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_327_err);}throw $pyjs_dbg_327_err;
}})(), '__init__', args, kwargs, [{'title':(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Select fields');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_328_err){if (!$p['isinstance']($pyjs_dbg_328_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_328_err);}throw $pyjs_dbg_328_err;
}})()}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_329_err){if (!$p['isinstance']($pyjs_dbg_329_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_329_err);}throw $pyjs_dbg_329_err;
}})();
			$pyjs['track']['lineno']=440;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__getitem__']('class')['append']('selectfields');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_330_err){if (!$p['isinstance']($pyjs_dbg_330_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_330_err);}throw $pyjs_dbg_330_err;
}})();
			$pyjs['track']['lineno']=441;
			self['listWdg'] = listWdg;
			$pyjs['track']['lineno']=442;
			self['checkboxes'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_331_err){if (!$p['isinstance']($pyjs_dbg_331_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_331_err);}throw $pyjs_dbg_331_err;
}})();
			$pyjs['track']['lineno']=444;
			ul = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Ul']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_332_err){if (!$p['isinstance']($pyjs_dbg_332_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_332_err);}throw $pyjs_dbg_332_err;
}})();
			$pyjs['track']['lineno']=445;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild'](ul);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_333_err){if (!$p['isinstance']($pyjs_dbg_333_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_333_err);}throw $pyjs_dbg_333_err;
}})();
			$pyjs['track']['lineno']=447;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter9_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr']($p['getattr'](self, 'listWdg'), '_structure');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_335_err){if (!$p['isinstance']($pyjs_dbg_335_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_335_err);}throw $pyjs_dbg_335_err;
}})();
			$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
			while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
				var $tupleassign3 = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__ass_unpack']($iter9_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_334_err){if (!$p['isinstance']($pyjs_dbg_334_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_334_err);}throw $pyjs_dbg_334_err;
}})();
				key = $tupleassign3[0];
				bone = $tupleassign3[1];
				$pyjs['track']['lineno']=448;
				li = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Li']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_336_err){if (!$p['isinstance']($pyjs_dbg_336_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_336_err);}throw $pyjs_dbg_336_err;
}})();
				$pyjs['track']['lineno']=449;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return ul['appendChild'](li);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_337_err){if (!$p['isinstance']($pyjs_dbg_337_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_337_err);}throw $pyjs_dbg_337_err;
}})();
				$pyjs['track']['lineno']=451;
				chkBox = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Input']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_338_err){if (!$p['isinstance']($pyjs_dbg_338_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_338_err);}throw $pyjs_dbg_338_err;
}})();
				$pyjs['track']['lineno']=452;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return chkBox['__setitem__']('type', 'checkbox');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_339_err){if (!$p['isinstance']($pyjs_dbg_339_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_339_err);}throw $pyjs_dbg_339_err;
}})();
				$pyjs['track']['lineno']=453;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return chkBox['__setitem__']('value', key);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_340_err){if (!$p['isinstance']($pyjs_dbg_340_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_340_err);}throw $pyjs_dbg_340_err;
}})();
				$pyjs['track']['lineno']=455;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return li['appendChild'](chkBox);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_341_err){if (!$p['isinstance']($pyjs_dbg_341_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_341_err);}throw $pyjs_dbg_341_err;
}})();
				$pyjs['track']['lineno']=456;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['checkboxes']['append'](chkBox);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_342_err){if (!$p['isinstance']($pyjs_dbg_342_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_342_err);}throw $pyjs_dbg_342_err;
}})();
				$pyjs['track']['lineno']=458;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return self['listWdg']['getFields']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_343_err){if (!$p['isinstance']($pyjs_dbg_343_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_343_err);}throw $pyjs_dbg_343_err;
}})()['__contains__'](key));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_344_err){if (!$p['isinstance']($pyjs_dbg_344_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_344_err);}throw $pyjs_dbg_344_err;
}})()) {
					$pyjs['track']['lineno']=459;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return chkBox['__setitem__']('checked', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_345_err){if (!$p['isinstance']($pyjs_dbg_345_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_345_err);}throw $pyjs_dbg_345_err;
}})();
				}
				$pyjs['track']['lineno']=460;
				lbl = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call($m['html5'], 'Label', null, null, [{'forElem':chkBox}, bone['__getitem__']('descr')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_346_err){if (!$p['isinstance']($pyjs_dbg_346_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_346_err);}throw $pyjs_dbg_346_err;
}})();
				$pyjs['track']['lineno']=461;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return li['appendChild'](lbl);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_347_err){if (!$p['isinstance']($pyjs_dbg_347_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_347_err);}throw $pyjs_dbg_347_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=464;
			div = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Div']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_348_err){if (!$p['isinstance']($pyjs_dbg_348_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_348_err);}throw $pyjs_dbg_348_err;
}})();
			$pyjs['track']['lineno']=465;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return div['__getitem__']('class')['append']('selectiontools');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_349_err){if (!$p['isinstance']($pyjs_dbg_349_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_349_err);}throw $pyjs_dbg_349_err;
}})();
			$pyjs['track']['lineno']=467;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild'](div);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_350_err){if (!$p['isinstance']($pyjs_dbg_350_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_350_err);}throw $pyjs_dbg_350_err;
}})();
			$pyjs['track']['lineno']=469;
			self['selectAllBtn'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['html5']['ext'], 'Button', null, null, [{'callback':$p['getattr'](self, 'doSelectAll')}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Select all');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_351_err){if (!$p['isinstance']($pyjs_dbg_351_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_351_err);}throw $pyjs_dbg_351_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_352_err){if (!$p['isinstance']($pyjs_dbg_352_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_352_err);}throw $pyjs_dbg_352_err;
}})();
			$pyjs['track']['lineno']=470;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'selectAllBtn')['__getitem__']('class')['append']('icon');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_353_err){if (!$p['isinstance']($pyjs_dbg_353_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_353_err);}throw $pyjs_dbg_353_err;
}})();
			$pyjs['track']['lineno']=471;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'selectAllBtn')['__getitem__']('class')['append']('selectall');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_354_err){if (!$p['isinstance']($pyjs_dbg_354_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_354_err);}throw $pyjs_dbg_354_err;
}})();
			$pyjs['track']['lineno']=472;
			self['unselectAllBtn'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['html5']['ext'], 'Button', null, null, [{'callback':$p['getattr'](self, 'doUnselectAll')}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Unselect all');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_355_err){if (!$p['isinstance']($pyjs_dbg_355_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_355_err);}throw $pyjs_dbg_355_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_356_err){if (!$p['isinstance']($pyjs_dbg_356_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_356_err);}throw $pyjs_dbg_356_err;
}})();
			$pyjs['track']['lineno']=473;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'unselectAllBtn')['__getitem__']('class')['append']('icon');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_357_err){if (!$p['isinstance']($pyjs_dbg_357_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_357_err);}throw $pyjs_dbg_357_err;
}})();
			$pyjs['track']['lineno']=474;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'unselectAllBtn')['__getitem__']('class')['append']('unselectall');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_358_err){if (!$p['isinstance']($pyjs_dbg_358_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_358_err);}throw $pyjs_dbg_358_err;
}})();
			$pyjs['track']['lineno']=475;
			self['invertSelectionBtn'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['html5']['ext'], 'Button', null, null, [{'callback':$p['getattr'](self, 'doInvertSelection')}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Invert selection');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_359_err){if (!$p['isinstance']($pyjs_dbg_359_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_359_err);}throw $pyjs_dbg_359_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_360_err){if (!$p['isinstance']($pyjs_dbg_360_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_360_err);}throw $pyjs_dbg_360_err;
}})();
			$pyjs['track']['lineno']=476;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'invertSelectionBtn')['__getitem__']('class')['append']('icon');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_361_err){if (!$p['isinstance']($pyjs_dbg_361_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_361_err);}throw $pyjs_dbg_361_err;
}})();
			$pyjs['track']['lineno']=477;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'invertSelectionBtn')['__getitem__']('class')['append']('selectinvert');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_362_err){if (!$p['isinstance']($pyjs_dbg_362_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_362_err);}throw $pyjs_dbg_362_err;
}})();
			$pyjs['track']['lineno']=479;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return div['appendChild']($p['getattr'](self, 'selectAllBtn'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_363_err){if (!$p['isinstance']($pyjs_dbg_363_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_363_err);}throw $pyjs_dbg_363_err;
}})();
			$pyjs['track']['lineno']=480;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return div['appendChild']($p['getattr'](self, 'unselectAllBtn'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_364_err){if (!$p['isinstance']($pyjs_dbg_364_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_364_err);}throw $pyjs_dbg_364_err;
}})();
			$pyjs['track']['lineno']=481;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return div['appendChild']($p['getattr'](self, 'invertSelectionBtn'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_365_err){if (!$p['isinstance']($pyjs_dbg_365_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_365_err);}throw $pyjs_dbg_365_err;
}})();
			$pyjs['track']['lineno']=484;
			self['cancelBtn'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['html5']['ext'], 'Button', null, null, [{'callback':$p['getattr'](self, 'doCancel')}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Cancel');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_366_err){if (!$p['isinstance']($pyjs_dbg_366_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_366_err);}throw $pyjs_dbg_366_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_367_err){if (!$p['isinstance']($pyjs_dbg_367_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_367_err);}throw $pyjs_dbg_367_err;
}})();
			$pyjs['track']['lineno']=485;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'cancelBtn')['__getitem__']('class')['append']('btn_no');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_368_err){if (!$p['isinstance']($pyjs_dbg_368_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_368_err);}throw $pyjs_dbg_368_err;
}})();
			$pyjs['track']['lineno']=487;
			self['applyBtn'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['html5']['ext'], 'Button', null, null, [{'callback':$p['getattr'](self, 'doApply')}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Apply');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_369_err){if (!$p['isinstance']($pyjs_dbg_369_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_369_err);}throw $pyjs_dbg_369_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_370_err){if (!$p['isinstance']($pyjs_dbg_370_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_370_err);}throw $pyjs_dbg_370_err;
}})();
			$pyjs['track']['lineno']=488;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'applyBtn')['__getitem__']('class')['append']('btn_yes');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_371_err){if (!$p['isinstance']($pyjs_dbg_371_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_371_err);}throw $pyjs_dbg_371_err;
}})();
			$pyjs['track']['lineno']=490;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'applyBtn'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_372_err){if (!$p['isinstance']($pyjs_dbg_372_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_372_err);}throw $pyjs_dbg_372_err;
}})();
			$pyjs['track']['lineno']=491;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'cancelBtn'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_373_err){if (!$p['isinstance']($pyjs_dbg_373_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_373_err);}throw $pyjs_dbg_373_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['listWdg']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=493;
		$method = $pyjs__bind_method2('doApply', function() {
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
			var c,$iter10_nextval,res,$iter10_array,$iter10_type,$iter10_iter,$pyjs__trackstack_size_1,$iter10_idx;
			$pyjs['track']={'module':'actions.list', 'lineno':493};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=493;
			$pyjs['track']['lineno']=494;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'applyBtn')['__getitem__']('class')['append']('is_loading');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_374_err){if (!$p['isinstance']($pyjs_dbg_374_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_374_err);}throw $pyjs_dbg_374_err;
}})();
			$pyjs['track']['lineno']=495;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'applyBtn')['__setitem__']('disabled', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_375_err){if (!$p['isinstance']($pyjs_dbg_375_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_375_err);}throw $pyjs_dbg_375_err;
}})();
			$pyjs['track']['lineno']=497;
			res = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_376_err){if (!$p['isinstance']($pyjs_dbg_376_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_376_err);}throw $pyjs_dbg_376_err;
}})();
			$pyjs['track']['lineno']=498;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter10_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'checkboxes');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_377_err){if (!$p['isinstance']($pyjs_dbg_377_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_377_err);}throw $pyjs_dbg_377_err;
}})();
			$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
			while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
				c = $iter10_nextval['$nextval'];
				$pyjs['track']['lineno']=499;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](c['__getitem__']('checked'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_378_err){if (!$p['isinstance']($pyjs_dbg_378_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_378_err);}throw $pyjs_dbg_378_err;
}})()) {
					$pyjs['track']['lineno']=500;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return res['append'](c['__getitem__']('value'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_379_err){if (!$p['isinstance']($pyjs_dbg_379_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_379_err);}throw $pyjs_dbg_379_err;
}})();
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=502;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['listWdg']['setFields'](res);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_380_err){if (!$p['isinstance']($pyjs_dbg_380_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_380_err);}throw $pyjs_dbg_380_err;
}})();
			$pyjs['track']['lineno']=503;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['close']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_381_err){if (!$p['isinstance']($pyjs_dbg_381_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_381_err);}throw $pyjs_dbg_381_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['doApply'] = $method;
		$pyjs['track']['lineno']=505;
		$method = $pyjs__bind_method2('doCancel', function() {
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

			$pyjs['track']={'module':'actions.list', 'lineno':505};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=505;
			$pyjs['track']['lineno']=506;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['close']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_382_err){if (!$p['isinstance']($pyjs_dbg_382_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_382_err);}throw $pyjs_dbg_382_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['doCancel'] = $method;
		$pyjs['track']['lineno']=508;
		$method = $pyjs__bind_method2('doSelectAll', function() {
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
			var $iter11_type,$iter11_iter,$iter11_array,$pyjs__trackstack_size_1,$iter11_nextval,$iter11_idx,cb;
			$pyjs['track']={'module':'actions.list', 'lineno':508};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=508;
			$pyjs['track']['lineno']=509;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter11_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'checkboxes');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_383_err){if (!$p['isinstance']($pyjs_dbg_383_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_383_err);}throw $pyjs_dbg_383_err;
}})();
			$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
			while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
				cb = $iter11_nextval['$nextval'];
				$pyjs['track']['lineno']=510;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq'](cb['__getitem__']('checked'), false));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_384_err){if (!$p['isinstance']($pyjs_dbg_384_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_384_err);}throw $pyjs_dbg_384_err;
}})()) {
					$pyjs['track']['lineno']=511;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return cb['__setitem__']('checked', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_385_err){if (!$p['isinstance']($pyjs_dbg_385_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_385_err);}throw $pyjs_dbg_385_err;
}})();
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='actions.list';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['doSelectAll'] = $method;
		$pyjs['track']['lineno']=513;
		$method = $pyjs__bind_method2('doUnselectAll', function() {
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
			var cb,$iter12_type,$iter12_array,$iter12_nextval,$iter12_iter,$pyjs__trackstack_size_1,$iter12_idx;
			$pyjs['track']={'module':'actions.list', 'lineno':513};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=513;
			$pyjs['track']['lineno']=514;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter12_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'checkboxes');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_386_err){if (!$p['isinstance']($pyjs_dbg_386_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_386_err);}throw $pyjs_dbg_386_err;
}})();
			$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
			while (typeof($p['__wrapped_next']($iter12_nextval)['$nextval']) != 'undefined') {
				cb = $iter12_nextval['$nextval'];
				$pyjs['track']['lineno']=515;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq'](cb['__getitem__']('checked'), true));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_387_err){if (!$p['isinstance']($pyjs_dbg_387_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_387_err);}throw $pyjs_dbg_387_err;
}})()) {
					$pyjs['track']['lineno']=516;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return cb['__setitem__']('checked', false);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_388_err){if (!$p['isinstance']($pyjs_dbg_388_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_388_err);}throw $pyjs_dbg_388_err;
}})();
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='actions.list';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['doUnselectAll'] = $method;
		$pyjs['track']['lineno']=518;
		$method = $pyjs__bind_method2('doInvertSelection', function() {
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
			var $iter13_nextval,$iter13_iter,cb,$iter13_array,$iter13_idx,$pyjs__trackstack_size_1,$iter13_type;
			$pyjs['track']={'module':'actions.list', 'lineno':518};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=518;
			$pyjs['track']['lineno']=519;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter13_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'checkboxes');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_389_err){if (!$p['isinstance']($pyjs_dbg_389_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_389_err);}throw $pyjs_dbg_389_err;
}})();
			$iter13_nextval=$p['__iter_prepare']($iter13_iter,false);
			while (typeof($p['__wrapped_next']($iter13_nextval)['$nextval']) != 'undefined') {
				cb = $iter13_nextval['$nextval'];
				$pyjs['track']['lineno']=520;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq'](cb['__getitem__']('checked'), false));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_390_err){if (!$p['isinstance']($pyjs_dbg_390_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_390_err);}throw $pyjs_dbg_390_err;
}})()) {
					$pyjs['track']['lineno']=521;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return cb['__setitem__']('checked', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_391_err){if (!$p['isinstance']($pyjs_dbg_391_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_391_err);}throw $pyjs_dbg_391_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=523;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return cb['__setitem__']('checked', false);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_392_err){if (!$p['isinstance']($pyjs_dbg_392_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_392_err);}throw $pyjs_dbg_392_err;
}})();
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='actions.list';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['doInvertSelection'] = $method;
		$pyjs['track']['lineno']=433;
		var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Popup'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('SelectFieldsPopup', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=525;
	$m['SelectFieldsAction'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'actions.list';
		$pyjs['track']['lineno']=526;
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
			var $assign1;
			$pyjs['track']={'module':'actions.list', 'lineno':526};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=526;
			$pyjs['track']['lineno']=527;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['SelectFieldsAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_393_err){if (!$p['isinstance']($pyjs_dbg_393_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_393_err);}throw $pyjs_dbg_393_err;
}})(), '__init__', args, kwargs, [{}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Select fields');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_394_err){if (!$p['isinstance']($pyjs_dbg_394_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_394_err);}throw $pyjs_dbg_394_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_395_err){if (!$p['isinstance']($pyjs_dbg_395_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_395_err);}throw $pyjs_dbg_395_err;
}})();
			$pyjs['track']['lineno']=528;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('class', 'icon selectfields');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_396_err){if (!$p['isinstance']($pyjs_dbg_396_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_396_err);}throw $pyjs_dbg_396_err;
}})();
			$pyjs['track']['lineno']=529;
			$assign1 = true;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('disabled', $assign1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_397_err){if (!$p['isinstance']($pyjs_dbg_397_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_397_err);}throw $pyjs_dbg_397_err;
}})();
			self['isDisabled'] = $assign1;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=531;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];

			$pyjs['track']={'module':'actions.list', 'lineno':531};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=531;
			$pyjs['track']['lineno']=532;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['SelectFieldsPopup']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_398_err){if (!$p['isinstance']($pyjs_dbg_398_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_398_err);}throw $pyjs_dbg_398_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_399_err){if (!$p['isinstance']($pyjs_dbg_399_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_399_err);}throw $pyjs_dbg_399_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_400_err){if (!$p['isinstance']($pyjs_dbg_400_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_400_err);}throw $pyjs_dbg_400_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=534;
		$method = $pyjs__bind_method2('onAttach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'actions.list', 'lineno':534};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=534;
			$pyjs['track']['lineno']=535;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['SelectFieldsAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_401_err){if (!$p['isinstance']($pyjs_dbg_401_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_401_err);}throw $pyjs_dbg_401_err;
}})()['onAttach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_402_err){if (!$p['isinstance']($pyjs_dbg_402_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_402_err);}throw $pyjs_dbg_402_err;
}})();
			$pyjs['track']['lineno']=536;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_403_err){if (!$p['isinstance']($pyjs_dbg_403_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_403_err);}throw $pyjs_dbg_403_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_404_err){if (!$p['isinstance']($pyjs_dbg_404_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_404_err);}throw $pyjs_dbg_404_err;
}})()['tableChangedEvent']['register'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_405_err){if (!$p['isinstance']($pyjs_dbg_405_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_405_err);}throw $pyjs_dbg_405_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onAttach'] = $method;
		$pyjs['track']['lineno']=538;
		$method = $pyjs__bind_method2('onDetach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'actions.list', 'lineno':538};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=538;
			$pyjs['track']['lineno']=539;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_406_err){if (!$p['isinstance']($pyjs_dbg_406_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_406_err);}throw $pyjs_dbg_406_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_407_err){if (!$p['isinstance']($pyjs_dbg_407_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_407_err);}throw $pyjs_dbg_407_err;
}})()['tableChangedEvent']['unregister'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_408_err){if (!$p['isinstance']($pyjs_dbg_408_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_408_err);}throw $pyjs_dbg_408_err;
}})();
			$pyjs['track']['lineno']=540;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['SelectFieldsAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_409_err){if (!$p['isinstance']($pyjs_dbg_409_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_409_err);}throw $pyjs_dbg_409_err;
}})()['onDetach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_410_err){if (!$p['isinstance']($pyjs_dbg_410_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_410_err);}throw $pyjs_dbg_410_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onDetach'] = $method;
		$pyjs['track']['lineno']=542;
		$method = $pyjs__bind_method2('onTableChanged', function(table, count) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				table = arguments[1];
				count = arguments[2];
			}
			var $assign3,$assign2;
			$pyjs['track']={'module':'actions.list', 'lineno':542};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=542;
			$pyjs['track']['lineno']=543;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['cmp'](count, 0) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_411_err){if (!$p['isinstance']($pyjs_dbg_411_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_411_err);}throw $pyjs_dbg_411_err;
}})()) {
				$pyjs['track']['lineno']=544;
				$assign2 = false;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__setitem__']('disabled', $assign2);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_412_err){if (!$p['isinstance']($pyjs_dbg_412_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_412_err);}throw $pyjs_dbg_412_err;
}})();
				self['isDisabled'] = $assign2;
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool']($p['getattr'](self, 'isDisabled')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_413_err){if (!$p['isinstance']($pyjs_dbg_413_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_413_err);}throw $pyjs_dbg_413_err;
}})()) {
				$pyjs['track']['lineno']=546;
				$assign3 = true;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__setitem__']('disabled', $assign3);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_414_err){if (!$p['isinstance']($pyjs_dbg_414_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_414_err);}throw $pyjs_dbg_414_err;
}})();
				self['isDisabled'] = $assign3;
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['table'],['count']]);
		$cls_definition['onTableChanged'] = $method;
		$pyjs['track']['lineno']=549;
		$method = $pyjs__bind_method2('isSuitableFor', function(module, handler, actionName) {

			$pyjs['track']={'module':'actions.list', 'lineno':549};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=549;
			$pyjs['track']['lineno']=550;
			$pyjs['track']['lineno']=550;
			var $pyjs__ret = $p['op_eq'](actionName, 'selectfields');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['module'],['handler'],['actionName']]);
		$cls_definition['isSuitableFor'] = $method;
		$pyjs['track']['lineno']=525;
		var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Button'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('SelectFieldsAction', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=552;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $p['getattr']($m['SelectFieldsAction'], 'isSuitableFor'), $m['SelectFieldsAction']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_415_err){if (!$p['isinstance']($pyjs_dbg_415_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_415_err);}throw $pyjs_dbg_415_err;
}})();
	$pyjs['track']['lineno']=554;
	$m['ReloadAction'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'actions.list';
		$pyjs['track']['lineno']=558;
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

			$pyjs['track']={'module':'actions.list', 'lineno':558};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=558;
			$pyjs['track']['lineno']=559;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['ReloadAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_416_err){if (!$p['isinstance']($pyjs_dbg_416_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_416_err);}throw $pyjs_dbg_416_err;
}})(), '__init__', args, kwargs, [{}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Reload');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_417_err){if (!$p['isinstance']($pyjs_dbg_417_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_417_err);}throw $pyjs_dbg_417_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_418_err){if (!$p['isinstance']($pyjs_dbg_418_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_418_err);}throw $pyjs_dbg_418_err;
}})();
			$pyjs['track']['lineno']=560;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('class', 'icon reload');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_419_err){if (!$p['isinstance']($pyjs_dbg_419_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_419_err);}throw $pyjs_dbg_419_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=563;
		$method = $pyjs__bind_method2('isSuitableFor', function(module, handler, actionName) {
			var correctHandler,correctAction,$and67,$and66,$or39,$or40;
			$pyjs['track']={'module':'actions.list', 'lineno':563};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=563;
			$pyjs['track']['lineno']=564;
			correctAction = $p['op_eq'](actionName, 'reload');
			$pyjs['track']['lineno']=565;
			correctHandler = ($p['bool']($or39=$p['op_eq'](handler, 'list'))?$or39:(function(){try{try{$pyjs['in_try_except'] += 1;
			return handler['startswith']('list.');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_420_err){if (!$p['isinstance']($pyjs_dbg_420_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_420_err);}throw $pyjs_dbg_420_err;
}})());
			$pyjs['track']['lineno']=566;
			$pyjs['track']['lineno']=566;
			var $pyjs__ret = ($p['bool']($and66=correctAction)?correctHandler:$and66);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['module'],['handler'],['actionName']]);
		$cls_definition['isSuitableFor'] = $method;
		$pyjs['track']['lineno']=568;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];

			$pyjs['track']={'module':'actions.list', 'lineno':568};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=568;
			$pyjs['track']['lineno']=569;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__getitem__']('class')['append']('is_loading');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_421_err){if (!$p['isinstance']($pyjs_dbg_421_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_421_err);}throw $pyjs_dbg_421_err;
}})();
			$pyjs['track']['lineno']=570;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['NetworkService']['notifyChange']($p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_422_err){if (!$p['isinstance']($pyjs_dbg_422_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_422_err);}throw $pyjs_dbg_422_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_423_err){if (!$p['isinstance']($pyjs_dbg_423_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_423_err);}throw $pyjs_dbg_423_err;
}})(), 'module'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_424_err){if (!$p['isinstance']($pyjs_dbg_424_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_424_err);}throw $pyjs_dbg_424_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=572;
		$method = $pyjs__bind_method2('resetLoadingState', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'actions.list', 'lineno':572};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=572;
			$pyjs['track']['lineno']=573;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](self['__getitem__']('class')['__contains__']('is_loading'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_425_err){if (!$p['isinstance']($pyjs_dbg_425_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_425_err);}throw $pyjs_dbg_425_err;
}})()) {
				$pyjs['track']['lineno']=574;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__getitem__']('class')['remove']('is_loading');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_426_err){if (!$p['isinstance']($pyjs_dbg_426_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_426_err);}throw $pyjs_dbg_426_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['resetLoadingState'] = $method;
		$pyjs['track']['lineno']=554;
		var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Button'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('ReloadAction', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=577;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $p['getattr']($m['ReloadAction'], 'isSuitableFor'), $m['ReloadAction']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_427_err){if (!$p['isinstance']($pyjs_dbg_427_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_427_err);}throw $pyjs_dbg_427_err;
}})();
	$pyjs['track']['lineno']=580;
	$m['ListSelectFilterAction'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'actions.list';
		$pyjs['track']['lineno']=581;
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

			$pyjs['track']={'module':'actions.list', 'lineno':581};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=581;
			$pyjs['track']['lineno']=582;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['ListSelectFilterAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_428_err){if (!$p['isinstance']($pyjs_dbg_428_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_428_err);}throw $pyjs_dbg_428_err;
}})(), '__init__', args, kwargs, [{}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Select Filter');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_429_err){if (!$p['isinstance']($pyjs_dbg_429_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_429_err);}throw $pyjs_dbg_429_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_430_err){if (!$p['isinstance']($pyjs_dbg_430_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_430_err);}throw $pyjs_dbg_430_err;
}})();
			$pyjs['track']['lineno']=583;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('class', 'icon selectfilter');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_431_err){if (!$p['isinstance']($pyjs_dbg_431_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_431_err);}throw $pyjs_dbg_431_err;
}})();
			$pyjs['track']['lineno']=584;
			self['urls'] = null;
			$pyjs['track']['lineno']=585;
			self['filterSelector'] = null;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=587;
		$method = $pyjs__bind_method2('onAttach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $and70,modulConfig,$or42,$or41,modul,$and69,$and68;
			$pyjs['track']={'module':'actions.list', 'lineno':587};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=587;
			$pyjs['track']['lineno']=588;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['ListSelectFilterAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_432_err){if (!$p['isinstance']($pyjs_dbg_432_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_432_err);}throw $pyjs_dbg_432_err;
}})()['onAttach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_433_err){if (!$p['isinstance']($pyjs_dbg_433_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_433_err);}throw $pyjs_dbg_433_err;
}})();
			$pyjs['track']['lineno']=589;
			modul = $p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_434_err){if (!$p['isinstance']($pyjs_dbg_434_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_434_err);}throw $pyjs_dbg_434_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_435_err){if (!$p['isinstance']($pyjs_dbg_435_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_435_err);}throw $pyjs_dbg_435_err;
}})(), 'module');
			$pyjs['track']['lineno']=590;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_436_err){if (!$p['isinstance']($pyjs_dbg_436_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_436_err);}throw $pyjs_dbg_436_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_437_err){if (!$p['isinstance']($pyjs_dbg_437_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_437_err);}throw $pyjs_dbg_437_err;
}})(), 'filterID'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_438_err){if (!$p['isinstance']($pyjs_dbg_438_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_438_err);}throw $pyjs_dbg_438_err;
}})()) {
				$pyjs['track']['lineno']=592;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__setitem__']('disabled', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_439_err){if (!$p['isinstance']($pyjs_dbg_439_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_439_err);}throw $pyjs_dbg_439_err;
}})();
			}
			$pyjs['track']['lineno']=593;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('modules')['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_440_err){if (!$p['isinstance']($pyjs_dbg_440_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_440_err);}throw $pyjs_dbg_440_err;
}})()['__contains__'](modul));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_441_err){if (!$p['isinstance']($pyjs_dbg_441_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_441_err);}throw $pyjs_dbg_441_err;
}})()) {
				$pyjs['track']['lineno']=594;
				modulConfig = $m['conf']['__getitem__']('modules')['__getitem__'](modul);
				$pyjs['track']['lineno']=595;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($and68=(function(){try{try{$pyjs['in_try_except'] += 1;
				return modulConfig['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_442_err){if (!$p['isinstance']($pyjs_dbg_442_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_442_err);}throw $pyjs_dbg_442_err;
}})()['__contains__']('disabledFunctions'))?($p['bool']($and69=modulConfig['__getitem__']('disabledFunctions'))?modulConfig['__getitem__']('disabledFunctions')['__contains__']('fulltext-search'):$and69):$and68));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_443_err){if (!$p['isinstance']($pyjs_dbg_443_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_443_err);}throw $pyjs_dbg_443_err;
}})()) {
					$pyjs['track']['lineno']=597;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['bool']($or41=!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return modulConfig['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_444_err){if (!$p['isinstance']($pyjs_dbg_444_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_444_err);}throw $pyjs_dbg_444_err;
}})()['__contains__']('views')))?$or41:!$p['bool'](modulConfig['__getitem__']('views'))));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_445_err){if (!$p['isinstance']($pyjs_dbg_445_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_445_err);}throw $pyjs_dbg_445_err;
}})()) {
						$pyjs['track']['lineno']=599;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return self['__setitem__']('disabled', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_446_err){if (!$p['isinstance']($pyjs_dbg_446_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_446_err);}throw $pyjs_dbg_446_err;
}})();
					}
				}
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onAttach'] = $method;
		$pyjs['track']['lineno']=601;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];

			$pyjs['track']={'module':'actions.list', 'lineno':601};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=601;
			$pyjs['track']['lineno']=602;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_447_err){if (!$p['isinstance']($pyjs_dbg_447_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_447_err);}throw $pyjs_dbg_447_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_448_err){if (!$p['isinstance']($pyjs_dbg_448_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_448_err);}throw $pyjs_dbg_448_err;
}})()['sideBar']['getWidget']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_449_err){if (!$p['isinstance']($pyjs_dbg_449_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_449_err);}throw $pyjs_dbg_449_err;
}})(), $m['FilterSelector']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_450_err){if (!$p['isinstance']($pyjs_dbg_450_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_450_err);}throw $pyjs_dbg_450_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_451_err){if (!$p['isinstance']($pyjs_dbg_451_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_451_err);}throw $pyjs_dbg_451_err;
}})()) {
				$pyjs['track']['lineno']=603;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_452_err){if (!$p['isinstance']($pyjs_dbg_452_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_452_err);}throw $pyjs_dbg_452_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_453_err){if (!$p['isinstance']($pyjs_dbg_453_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_453_err);}throw $pyjs_dbg_453_err;
}})()['sideBar']['setWidget'](null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_454_err){if (!$p['isinstance']($pyjs_dbg_454_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_454_err);}throw $pyjs_dbg_454_err;
}})();
				$pyjs['track']['lineno']=604;
				self['filterSelector'] = null;
			}
			else {
				$pyjs['track']['lineno']=606;
				self['filterSelector'] = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['FilterSelector']($p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_455_err){if (!$p['isinstance']($pyjs_dbg_455_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_455_err);}throw $pyjs_dbg_455_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_456_err){if (!$p['isinstance']($pyjs_dbg_456_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_456_err);}throw $pyjs_dbg_456_err;
}})(), 'module'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_457_err){if (!$p['isinstance']($pyjs_dbg_457_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_457_err);}throw $pyjs_dbg_457_err;
}})();
				$pyjs['track']['lineno']=607;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_458_err){if (!$p['isinstance']($pyjs_dbg_458_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_458_err);}throw $pyjs_dbg_458_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_459_err){if (!$p['isinstance']($pyjs_dbg_459_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_459_err);}throw $pyjs_dbg_459_err;
}})()['sideBar']['setWidget']($p['getattr'](self, 'filterSelector'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_460_err){if (!$p['isinstance']($pyjs_dbg_460_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_460_err);}throw $pyjs_dbg_460_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=610;
		$method = $pyjs__bind_method2('isSuitableFor', function(module, handler, actionName) {
			var $and79,correctHandler,$add21,isDisabled,$add22,$or48,$or43,$or46,$or47,$or44,$or45,correctAction,$and80,$and78,hasAccess,$and71,$and72,$and73,$and74,$and75,$and76,$and77;
			$pyjs['track']={'module':'actions.list', 'lineno':610};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=610;
			$pyjs['track']['lineno']=611;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($or43=(module === null))?$or43:!(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('modules')['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_461_err){if (!$p['isinstance']($pyjs_dbg_461_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_461_err);}throw $pyjs_dbg_461_err;
}})()['__contains__'](module)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_462_err){if (!$p['isinstance']($pyjs_dbg_462_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_462_err);}throw $pyjs_dbg_462_err;
}})()) {
				$pyjs['track']['lineno']=612;
				$pyjs['track']['lineno']=612;
				var $pyjs__ret = false;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=614;
			correctAction = $p['op_eq'](actionName, 'selectfilter');
			$pyjs['track']['lineno']=615;
			correctHandler = ($p['bool']($or45=$p['op_eq'](handler, 'list'))?$or45:(function(){try{try{$pyjs['in_try_except'] += 1;
			return handler['startswith']('list.');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_463_err){if (!$p['isinstance']($pyjs_dbg_463_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_463_err);}throw $pyjs_dbg_463_err;
}})());
			$pyjs['track']['lineno']=616;
			hasAccess = ($p['bool']($and71=$m['conf']['__getitem__']('currentUser'))?($p['bool']($or47=$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']('root'))?$or47:$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']($p['__op_add']($add21=module,$add22='-view'))):$and71);
			$pyjs['track']['lineno']=617;
			isDisabled = ($p['bool']($and73=(module !== null))?($p['bool']($and74=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('modules')['__getitem__'](module)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_464_err){if (!$p['isinstance']($pyjs_dbg_464_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_464_err);}throw $pyjs_dbg_464_err;
}})()['__contains__']('disabledFunctions'))?($p['bool']($and75=$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('disabledFunctions'))?$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('disabledFunctions')['__contains__']('view'):$and75):$and74):$and73);
			$pyjs['track']['lineno']=619;
			$pyjs['track']['lineno']=619;
			var $pyjs__ret = ($p['bool']($and77=correctAction)?($p['bool']($and78=correctHandler)?($p['bool']($and79=hasAccess)?!$p['bool'](isDisabled):$and79):$and78):$and77);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['module'],['handler'],['actionName']]);
		$cls_definition['isSuitableFor'] = $method;
		$pyjs['track']['lineno']=580;
		var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Button'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('ListSelectFilterAction', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=621;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $p['getattr']($m['ListSelectFilterAction'], 'isSuitableFor'), $m['ListSelectFilterAction']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_465_err){if (!$p['isinstance']($pyjs_dbg_465_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_465_err);}throw $pyjs_dbg_465_err;
}})();
	$pyjs['track']['lineno']=623;
	$m['RecurrentDateAction'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'actions.list';
		$pyjs['track']['lineno']=628;
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

			$pyjs['track']={'module':'actions.list', 'lineno':628};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=628;
			$pyjs['track']['lineno']=629;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['RecurrentDateAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_466_err){if (!$p['isinstance']($pyjs_dbg_466_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_466_err);}throw $pyjs_dbg_466_err;
}})(), '__init__', args, kwargs, [{}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Recurrent Events');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_467_err){if (!$p['isinstance']($pyjs_dbg_467_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_467_err);}throw $pyjs_dbg_467_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_468_err){if (!$p['isinstance']($pyjs_dbg_468_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_468_err);}throw $pyjs_dbg_468_err;
}})();
			$pyjs['track']['lineno']=630;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('class', 'icon createrecurrent_small');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_469_err){if (!$p['isinstance']($pyjs_dbg_469_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_469_err);}throw $pyjs_dbg_469_err;
}})();
			$pyjs['track']['lineno']=631;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('disabled', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_470_err){if (!$p['isinstance']($pyjs_dbg_470_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_470_err);}throw $pyjs_dbg_470_err;
}})();
			$pyjs['track']['lineno']=632;
			self['isDisabled'] = true;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=634;
		$method = $pyjs__bind_method2('onAttach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'actions.list', 'lineno':634};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=634;
			$pyjs['track']['lineno']=635;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['RecurrentDateAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_471_err){if (!$p['isinstance']($pyjs_dbg_471_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_471_err);}throw $pyjs_dbg_471_err;
}})()['onAttach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_472_err){if (!$p['isinstance']($pyjs_dbg_472_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_472_err);}throw $pyjs_dbg_472_err;
}})();
			$pyjs['track']['lineno']=636;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_473_err){if (!$p['isinstance']($pyjs_dbg_473_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_473_err);}throw $pyjs_dbg_473_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_474_err){if (!$p['isinstance']($pyjs_dbg_474_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_474_err);}throw $pyjs_dbg_474_err;
}})()['selectionChangedEvent']['register'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_475_err){if (!$p['isinstance']($pyjs_dbg_475_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_475_err);}throw $pyjs_dbg_475_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onAttach'] = $method;
		$pyjs['track']['lineno']=638;
		$method = $pyjs__bind_method2('onDetach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'actions.list', 'lineno':638};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=638;
			$pyjs['track']['lineno']=639;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_476_err){if (!$p['isinstance']($pyjs_dbg_476_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_476_err);}throw $pyjs_dbg_476_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_477_err){if (!$p['isinstance']($pyjs_dbg_477_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_477_err);}throw $pyjs_dbg_477_err;
}})()['selectionChangedEvent']['unregister'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_478_err){if (!$p['isinstance']($pyjs_dbg_478_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_478_err);}throw $pyjs_dbg_478_err;
}})();
			$pyjs['track']['lineno']=640;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['RecurrentDateAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_479_err){if (!$p['isinstance']($pyjs_dbg_479_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_479_err);}throw $pyjs_dbg_479_err;
}})()['onDetach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_480_err){if (!$p['isinstance']($pyjs_dbg_480_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_480_err);}throw $pyjs_dbg_480_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onDetach'] = $method;
		$pyjs['track']['lineno']=642;
		$method = $pyjs__bind_method2('onSelectionChanged', function(table, selection) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				table = arguments[1];
				selection = arguments[2];
			}

			$pyjs['track']={'module':'actions.list', 'lineno':642};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=642;
			$pyjs['track']['lineno']=643;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len'](selection);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_481_err){if (!$p['isinstance']($pyjs_dbg_481_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_481_err);}throw $pyjs_dbg_481_err;
}})(), 0) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_482_err){if (!$p['isinstance']($pyjs_dbg_482_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_482_err);}throw $pyjs_dbg_482_err;
}})()) {
				$pyjs['track']['lineno']=644;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, 'isDisabled'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_483_err){if (!$p['isinstance']($pyjs_dbg_483_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_483_err);}throw $pyjs_dbg_483_err;
}})()) {
					$pyjs['track']['lineno']=645;
					self['isDisabled'] = false;
				}
				$pyjs['track']['lineno']=646;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__setitem__']('disabled', false);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_484_err){if (!$p['isinstance']($pyjs_dbg_484_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_484_err);}throw $pyjs_dbg_484_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=648;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']($p['getattr'](self, 'isDisabled')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_485_err){if (!$p['isinstance']($pyjs_dbg_485_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_485_err);}throw $pyjs_dbg_485_err;
}})()) {
					$pyjs['track']['lineno']=649;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['__setitem__']('disabled', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_486_err){if (!$p['isinstance']($pyjs_dbg_486_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_486_err);}throw $pyjs_dbg_486_err;
}})();
					$pyjs['track']['lineno']=650;
					self['isDisabled'] = true;
				}
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['table'],['selection']]);
		$cls_definition['onSelectionChanged'] = $method;
		$pyjs['track']['lineno']=653;
		$method = $pyjs__bind_method2('isSuitableFor', function(module, handler, actionName) {
			var correctHandler,isDisabled,$add24,$and89,$and88,$or49,$and81,$and83,$and82,$and85,$and84,$and87,$and86,correctAction,$and90,hasAccess,$or54,$or51,$or50,$or53,$or52,$add23;
			$pyjs['track']={'module':'actions.list', 'lineno':653};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=653;
			$pyjs['track']['lineno']=654;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($or49=(module === null))?$or49:!(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('modules')['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_487_err){if (!$p['isinstance']($pyjs_dbg_487_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_487_err);}throw $pyjs_dbg_487_err;
}})()['__contains__'](module)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_488_err){if (!$p['isinstance']($pyjs_dbg_488_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_488_err);}throw $pyjs_dbg_488_err;
}})()) {
				$pyjs['track']['lineno']=655;
				$pyjs['track']['lineno']=655;
				var $pyjs__ret = false;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=657;
			correctAction = $p['op_eq'](actionName, 'repeatdate');
			$pyjs['track']['lineno']=658;
			correctHandler = ($p['bool']($or51=$p['op_eq'](handler, 'list.calendar'))?$or51:(function(){try{try{$pyjs['in_try_except'] += 1;
			return handler['startswith']('list.calendar.');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_489_err){if (!$p['isinstance']($pyjs_dbg_489_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_489_err);}throw $pyjs_dbg_489_err;
}})());
			$pyjs['track']['lineno']=659;
			hasAccess = ($p['bool']($and81=$m['conf']['__getitem__']('currentUser'))?($p['bool']($or53=$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']('root'))?$or53:$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']($p['__op_add']($add23=module,$add24='-edit'))):$and81);
			$pyjs['track']['lineno']=660;
			isDisabled = ($p['bool']($and83=(module !== null))?($p['bool']($and84=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('modules')['__getitem__'](module)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_490_err){if (!$p['isinstance']($pyjs_dbg_490_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_490_err);}throw $pyjs_dbg_490_err;
}})()['__contains__']('disabledFunctions'))?($p['bool']($and85=$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('disabledFunctions'))?$m['conf']['__getitem__']('modules')['__getitem__'](module)['__getitem__']('disabledFunctions')['__contains__']('edit'):$and85):$and84):$and83);
			$pyjs['track']['lineno']=662;
			$pyjs['track']['lineno']=662;
			var $pyjs__ret = ($p['bool']($and87=correctAction)?($p['bool']($and88=correctHandler)?($p['bool']($and89=hasAccess)?!$p['bool'](isDisabled):$and89):$and88):$and87);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['module'],['handler'],['actionName']]);
		$cls_definition['isSuitableFor'] = $method;
		$pyjs['track']['lineno']=664;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
			var $iter14_array,selection,$iter14_type,s,$iter14_iter,$pyjs__trackstack_size_1,$iter14_idx,$iter14_nextval;
			$pyjs['track']={'module':'actions.list', 'lineno':664};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=664;
			$pyjs['track']['lineno']=665;
			selection = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_491_err){if (!$p['isinstance']($pyjs_dbg_491_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_491_err);}throw $pyjs_dbg_491_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_492_err){if (!$p['isinstance']($pyjs_dbg_492_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_492_err);}throw $pyjs_dbg_492_err;
}})()['getCurrentSelection']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_493_err){if (!$p['isinstance']($pyjs_dbg_493_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_493_err);}throw $pyjs_dbg_493_err;
}})();
			$pyjs['track']['lineno']=666;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool'](selection));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_494_err){if (!$p['isinstance']($pyjs_dbg_494_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_494_err);}throw $pyjs_dbg_494_err;
}})()) {
				$pyjs['track']['lineno']=667;
				$pyjs['track']['lineno']=667;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=668;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter14_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return selection;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_495_err){if (!$p['isinstance']($pyjs_dbg_495_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_495_err);}throw $pyjs_dbg_495_err;
}})();
			$iter14_nextval=$p['__iter_prepare']($iter14_iter,false);
			while (typeof($p['__wrapped_next']($iter14_nextval)['$nextval']) != 'undefined') {
				s = $iter14_nextval['$nextval'];
				$pyjs['track']['lineno']=669;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['openEditor'](s['__getitem__']('key'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_496_err){if (!$p['isinstance']($pyjs_dbg_496_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_496_err);}throw $pyjs_dbg_496_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='actions.list';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=671;
		$method = $pyjs__bind_method2('openEditor', function(key) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
			}
			var edwg,pane;
			$pyjs['track']={'module':'actions.list', 'lineno':671};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=671;
			$pyjs['track']['lineno']=672;
			pane = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(null, $m['Pane'], null, null, [{'closeable':true, 'iconClasses':(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('modul_%s', $p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_498_err){if (!$p['isinstance']($pyjs_dbg_498_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_498_err);}throw $pyjs_dbg_498_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_499_err){if (!$p['isinstance']($pyjs_dbg_499_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_499_err);}throw $pyjs_dbg_499_err;
}})(), 'module'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_500_err){if (!$p['isinstance']($pyjs_dbg_500_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_500_err);}throw $pyjs_dbg_500_err;
}})(), 'apptype_list', 'action_edit']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_501_err){if (!$p['isinstance']($pyjs_dbg_501_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_501_err);}throw $pyjs_dbg_501_err;
}})()}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Recurrent Events');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_497_err){if (!$p['isinstance']($pyjs_dbg_497_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_497_err);}throw $pyjs_dbg_497_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_502_err){if (!$p['isinstance']($pyjs_dbg_502_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_502_err);}throw $pyjs_dbg_502_err;
}})();
			$pyjs['track']['lineno']=673;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('mainWindow')['stackPane'](pane);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_503_err){if (!$p['isinstance']($pyjs_dbg_503_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_503_err);}throw $pyjs_dbg_503_err;
}})();
			$pyjs['track']['lineno']=674;
			edwg = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(null, $m['RepeatDatePopup'], null, null, [{'key':key}, $p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_504_err){if (!$p['isinstance']($pyjs_dbg_504_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_504_err);}throw $pyjs_dbg_504_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_505_err){if (!$p['isinstance']($pyjs_dbg_505_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_505_err);}throw $pyjs_dbg_505_err;
}})(), 'module')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_506_err){if (!$p['isinstance']($pyjs_dbg_506_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_506_err);}throw $pyjs_dbg_506_err;
}})();
			$pyjs['track']['lineno']=675;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return pane['addWidget'](edwg);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_507_err){if (!$p['isinstance']($pyjs_dbg_507_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_507_err);}throw $pyjs_dbg_507_err;
}})();
			$pyjs['track']['lineno']=676;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return pane['focus']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_508_err){if (!$p['isinstance']($pyjs_dbg_508_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_508_err);}throw $pyjs_dbg_508_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['key']]);
		$cls_definition['openEditor'] = $method;
		$pyjs['track']['lineno']=678;
		$method = $pyjs__bind_method2('resetLoadingState', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'actions.list', 'lineno':678};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=678;
			$pyjs['track']['lineno']=679;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['resetLoadingState'] = $method;
		$pyjs['track']['lineno']=623;
		var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Button'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('RecurrentDateAction', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=681;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $p['getattr']($m['RecurrentDateAction'], 'isSuitableFor'), $m['RecurrentDateAction']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_509_err){if (!$p['isinstance']($pyjs_dbg_509_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_509_err);}throw $pyjs_dbg_509_err;
}})();
	$pyjs['track']['lineno']=683;
	$m['CreateRecurrentAction'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'actions.list';
		$pyjs['track']['lineno']=684;
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

			$pyjs['track']={'module':'actions.list', 'lineno':684};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=684;
			$pyjs['track']['lineno']=685;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['CreateRecurrentAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_510_err){if (!$p['isinstance']($pyjs_dbg_510_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_510_err);}throw $pyjs_dbg_510_err;
}})(), '__init__', args, kwargs, [{}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Save-Close');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_511_err){if (!$p['isinstance']($pyjs_dbg_511_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_511_err);}throw $pyjs_dbg_511_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_512_err){if (!$p['isinstance']($pyjs_dbg_512_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_512_err);}throw $pyjs_dbg_512_err;
}})();
			$pyjs['track']['lineno']=686;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('class', 'icon save close');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_513_err){if (!$p['isinstance']($pyjs_dbg_513_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_513_err);}throw $pyjs_dbg_513_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=689;
		$method = $pyjs__bind_method2('isSuitableFor', function(module, handler, actionName) {

			$pyjs['track']={'module':'actions.list', 'lineno':689};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=689;
			$pyjs['track']['lineno']=690;
			$pyjs['track']['lineno']=690;
			var $pyjs__ret = $p['op_eq'](actionName, 'create.recurrent');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['module'],['handler'],['actionName']]);
		$cls_definition['isSuitableFor'] = $method;
		$pyjs['track']['lineno']=692;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];

			$pyjs['track']={'module':'actions.list', 'lineno':692};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=692;
			$pyjs['track']['lineno']=693;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__getitem__']('class')['append']('is_loading');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_514_err){if (!$p['isinstance']($pyjs_dbg_514_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_514_err);}throw $pyjs_dbg_514_err;
}})();
			$pyjs['track']['lineno']=694;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_515_err){if (!$p['isinstance']($pyjs_dbg_515_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_515_err);}throw $pyjs_dbg_515_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_516_err){if (!$p['isinstance']($pyjs_dbg_516_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_516_err);}throw $pyjs_dbg_516_err;
}})(), 'doSave', null, null, [{'closeOnSuccess':true}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_517_err){if (!$p['isinstance']($pyjs_dbg_517_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_517_err);}throw $pyjs_dbg_517_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=683;
		var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Button'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('CreateRecurrentAction', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=696;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $p['getattr']($m['CreateRecurrentAction'], 'isSuitableFor'), $m['CreateRecurrentAction']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_518_err){if (!$p['isinstance']($pyjs_dbg_518_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_518_err);}throw $pyjs_dbg_518_err;
}})();
	$pyjs['track']['lineno']=698;
	$m['ExportCsvAction'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'actions.list';
		$pyjs['track']['lineno']=699;
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

			$pyjs['track']={'module':'actions.list', 'lineno':699};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=699;
			$pyjs['track']['lineno']=700;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['ExportCsvAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_519_err){if (!$p['isinstance']($pyjs_dbg_519_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_519_err);}throw $pyjs_dbg_519_err;
}})(), '__init__', args, kwargs, [{}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('CSV Export');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_520_err){if (!$p['isinstance']($pyjs_dbg_520_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_520_err);}throw $pyjs_dbg_520_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_521_err){if (!$p['isinstance']($pyjs_dbg_521_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_521_err);}throw $pyjs_dbg_521_err;
}})();
			$pyjs['track']['lineno']=701;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('class', 'icon download');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_522_err){if (!$p['isinstance']($pyjs_dbg_522_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_522_err);}throw $pyjs_dbg_522_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=703;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];

			$pyjs['track']={'module':'actions.list', 'lineno':703};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=703;
			$pyjs['track']['lineno']=704;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['ExportCsvStarter']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_523_err){if (!$p['isinstance']($pyjs_dbg_523_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_523_err);}throw $pyjs_dbg_523_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_524_err){if (!$p['isinstance']($pyjs_dbg_524_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_524_err);}throw $pyjs_dbg_524_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_525_err){if (!$p['isinstance']($pyjs_dbg_525_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_525_err);}throw $pyjs_dbg_525_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=707;
		$method = $pyjs__bind_method2('isSuitableFor', function(module, handler, actionName) {
			var $and92,$and91,$or55,$or56;
			$pyjs['track']={'module':'actions.list', 'lineno':707};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=707;
			$pyjs['track']['lineno']=708;
			$pyjs['track']['lineno']=708;
			var $pyjs__ret = ($p['bool']($and91=$p['op_eq'](actionName, 'exportcsv'))?($p['bool']($or55=$p['op_eq'](handler, 'list'))?$or55:(function(){try{try{$pyjs['in_try_except'] += 1;
			return handler['startswith']('list.');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_526_err){if (!$p['isinstance']($pyjs_dbg_526_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_526_err);}throw $pyjs_dbg_526_err;
}})()):$and91);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['module'],['handler'],['actionName']]);
		$cls_definition['isSuitableFor'] = $method;
		$pyjs['track']['lineno']=698;
		var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Button'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('ExportCsvAction', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=710;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $p['getattr']($m['ExportCsvAction'], 'isSuitableFor'), $m['ExportCsvAction']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_527_err){if (!$p['isinstance']($pyjs_dbg_527_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_527_err);}throw $pyjs_dbg_527_err;
}})();
	$pyjs['track']['lineno']=712;
	$m['SelectAllAction'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'actions.list';
		$pyjs['track']['lineno']=713;
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
			var $assign4;
			$pyjs['track']={'module':'actions.list', 'lineno':713};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=713;
			$pyjs['track']['lineno']=714;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['SelectAllAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_528_err){if (!$p['isinstance']($pyjs_dbg_528_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_528_err);}throw $pyjs_dbg_528_err;
}})(), '__init__', args, kwargs, [{}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Select all');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_529_err){if (!$p['isinstance']($pyjs_dbg_529_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_529_err);}throw $pyjs_dbg_529_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_530_err){if (!$p['isinstance']($pyjs_dbg_530_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_530_err);}throw $pyjs_dbg_530_err;
}})();
			$pyjs['track']['lineno']=715;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('class', 'icon selectall');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_531_err){if (!$p['isinstance']($pyjs_dbg_531_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_531_err);}throw $pyjs_dbg_531_err;
}})();
			$pyjs['track']['lineno']=716;
			$assign4 = true;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('disabled', $assign4);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_532_err){if (!$p['isinstance']($pyjs_dbg_532_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_532_err);}throw $pyjs_dbg_532_err;
}})();
			self['isDisabled'] = $assign4;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=719;
		$method = $pyjs__bind_method2('isSuitableFor', function(module, handler, actionName) {
			var $or58,$and94,$and93,$or57;
			$pyjs['track']={'module':'actions.list', 'lineno':719};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=719;
			$pyjs['track']['lineno']=720;
			$pyjs['track']['lineno']=720;
			var $pyjs__ret = ($p['bool']($and93=$p['op_eq'](actionName, 'selectall'))?($p['bool']($or57=$p['op_eq'](handler, 'list'))?$or57:(function(){try{try{$pyjs['in_try_except'] += 1;
			return handler['startswith']('list.');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_533_err){if (!$p['isinstance']($pyjs_dbg_533_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_533_err);}throw $pyjs_dbg_533_err;
}})()):$and93);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['module'],['handler'],['actionName']]);
		$cls_definition['isSuitableFor'] = $method;
		$pyjs['track']['lineno']=722;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
			var cnt;
			$pyjs['track']={'module':'actions.list', 'lineno':722};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=722;
			$pyjs['track']['lineno']=723;
			cnt = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_534_err){if (!$p['isinstance']($pyjs_dbg_534_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_534_err);}throw $pyjs_dbg_534_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_535_err){if (!$p['isinstance']($pyjs_dbg_535_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_535_err);}throw $pyjs_dbg_535_err;
}})()['table']['table']['selectAll']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_536_err){if (!$p['isinstance']($pyjs_dbg_536_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_536_err);}throw $pyjs_dbg_536_err;
}})();
			$pyjs['track']['lineno']=724;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('mainWindow')['log']('info', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(null, $m['translate'], null, null, [{'items':cnt}, '{items} items had been selected']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_537_err){if (!$p['isinstance']($pyjs_dbg_537_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_537_err);}throw $pyjs_dbg_537_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_538_err){if (!$p['isinstance']($pyjs_dbg_538_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_538_err);}throw $pyjs_dbg_538_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=726;
		$method = $pyjs__bind_method2('onAttach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'actions.list', 'lineno':726};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=726;
			$pyjs['track']['lineno']=727;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['SelectAllAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_539_err){if (!$p['isinstance']($pyjs_dbg_539_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_539_err);}throw $pyjs_dbg_539_err;
}})()['onAttach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_540_err){if (!$p['isinstance']($pyjs_dbg_540_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_540_err);}throw $pyjs_dbg_540_err;
}})();
			$pyjs['track']['lineno']=728;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_541_err){if (!$p['isinstance']($pyjs_dbg_541_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_541_err);}throw $pyjs_dbg_541_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_542_err){if (!$p['isinstance']($pyjs_dbg_542_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_542_err);}throw $pyjs_dbg_542_err;
}})()['tableChangedEvent']['register'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_543_err){if (!$p['isinstance']($pyjs_dbg_543_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_543_err);}throw $pyjs_dbg_543_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onAttach'] = $method;
		$pyjs['track']['lineno']=730;
		$method = $pyjs__bind_method2('onDetach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'actions.list', 'lineno':730};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=730;
			$pyjs['track']['lineno']=731;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_544_err){if (!$p['isinstance']($pyjs_dbg_544_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_544_err);}throw $pyjs_dbg_544_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_545_err){if (!$p['isinstance']($pyjs_dbg_545_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_545_err);}throw $pyjs_dbg_545_err;
}})()['tableChangedEvent']['unregister'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_546_err){if (!$p['isinstance']($pyjs_dbg_546_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_546_err);}throw $pyjs_dbg_546_err;
}})();
			$pyjs['track']['lineno']=732;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['SelectAllAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_547_err){if (!$p['isinstance']($pyjs_dbg_547_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_547_err);}throw $pyjs_dbg_547_err;
}})()['onDetach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_548_err){if (!$p['isinstance']($pyjs_dbg_548_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_548_err);}throw $pyjs_dbg_548_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onDetach'] = $method;
		$pyjs['track']['lineno']=734;
		$method = $pyjs__bind_method2('onTableChanged', function(table, count) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				table = arguments[1];
				count = arguments[2];
			}
			var $assign6,$assign5;
			$pyjs['track']={'module':'actions.list', 'lineno':734};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=734;
			$pyjs['track']['lineno']=735;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['cmp'](count, 0) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_549_err){if (!$p['isinstance']($pyjs_dbg_549_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_549_err);}throw $pyjs_dbg_549_err;
}})()) {
				$pyjs['track']['lineno']=736;
				$assign5 = false;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__setitem__']('disabled', $assign5);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_550_err){if (!$p['isinstance']($pyjs_dbg_550_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_550_err);}throw $pyjs_dbg_550_err;
}})();
				self['isDisabled'] = $assign5;
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool']($p['getattr'](self, 'isDisabled')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_551_err){if (!$p['isinstance']($pyjs_dbg_551_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_551_err);}throw $pyjs_dbg_551_err;
}})()) {
				$pyjs['track']['lineno']=738;
				$assign6 = true;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__setitem__']('disabled', $assign6);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_552_err){if (!$p['isinstance']($pyjs_dbg_552_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_552_err);}throw $pyjs_dbg_552_err;
}})();
				self['isDisabled'] = $assign6;
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['table'],['count']]);
		$cls_definition['onTableChanged'] = $method;
		$pyjs['track']['lineno']=712;
		var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Button'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('SelectAllAction', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=740;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $p['getattr']($m['SelectAllAction'], 'isSuitableFor'), $m['SelectAllAction']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_553_err){if (!$p['isinstance']($pyjs_dbg_553_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_553_err);}throw $pyjs_dbg_553_err;
}})();
	$pyjs['track']['lineno']=743;
	$m['UnSelectAllAction'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'actions.list';
		$pyjs['track']['lineno']=744;
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
			var $assign7;
			$pyjs['track']={'module':'actions.list', 'lineno':744};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=744;
			$pyjs['track']['lineno']=745;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['UnSelectAllAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_554_err){if (!$p['isinstance']($pyjs_dbg_554_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_554_err);}throw $pyjs_dbg_554_err;
}})(), '__init__', args, kwargs, [{}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Unselect all');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_555_err){if (!$p['isinstance']($pyjs_dbg_555_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_555_err);}throw $pyjs_dbg_555_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_556_err){if (!$p['isinstance']($pyjs_dbg_556_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_556_err);}throw $pyjs_dbg_556_err;
}})();
			$pyjs['track']['lineno']=746;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('class', 'icon unselectall');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_557_err){if (!$p['isinstance']($pyjs_dbg_557_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_557_err);}throw $pyjs_dbg_557_err;
}})();
			$pyjs['track']['lineno']=747;
			$assign7 = true;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('disabled', $assign7);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_558_err){if (!$p['isinstance']($pyjs_dbg_558_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_558_err);}throw $pyjs_dbg_558_err;
}})();
			self['isDisabled'] = $assign7;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=750;
		$method = $pyjs__bind_method2('isSuitableFor', function(module, handler, actionName) {
			var $or60,$or59,$and96,$and95;
			$pyjs['track']={'module':'actions.list', 'lineno':750};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=750;
			$pyjs['track']['lineno']=751;
			$pyjs['track']['lineno']=751;
			var $pyjs__ret = ($p['bool']($and95=$p['op_eq'](actionName, 'unselectall'))?($p['bool']($or59=$p['op_eq'](handler, 'list'))?$or59:(function(){try{try{$pyjs['in_try_except'] += 1;
			return handler['startswith']('list.');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_559_err){if (!$p['isinstance']($pyjs_dbg_559_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_559_err);}throw $pyjs_dbg_559_err;
}})()):$and95);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['module'],['handler'],['actionName']]);
		$cls_definition['isSuitableFor'] = $method;
		$pyjs['track']['lineno']=753;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
			var cnt;
			$pyjs['track']={'module':'actions.list', 'lineno':753};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=753;
			$pyjs['track']['lineno']=754;
			cnt = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_560_err){if (!$p['isinstance']($pyjs_dbg_560_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_560_err);}throw $pyjs_dbg_560_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_561_err){if (!$p['isinstance']($pyjs_dbg_561_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_561_err);}throw $pyjs_dbg_561_err;
}})()['table']['table']['unSelectAll']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_562_err){if (!$p['isinstance']($pyjs_dbg_562_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_562_err);}throw $pyjs_dbg_562_err;
}})();
			$pyjs['track']['lineno']=755;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('mainWindow')['log']('info', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(null, $m['translate'], null, null, [{'items':cnt}, '{items} items had been unselected']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_563_err){if (!$p['isinstance']($pyjs_dbg_563_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_563_err);}throw $pyjs_dbg_563_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_564_err){if (!$p['isinstance']($pyjs_dbg_564_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_564_err);}throw $pyjs_dbg_564_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=757;
		$method = $pyjs__bind_method2('onAttach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'actions.list', 'lineno':757};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=757;
			$pyjs['track']['lineno']=758;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['UnSelectAllAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_565_err){if (!$p['isinstance']($pyjs_dbg_565_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_565_err);}throw $pyjs_dbg_565_err;
}})()['onAttach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_566_err){if (!$p['isinstance']($pyjs_dbg_566_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_566_err);}throw $pyjs_dbg_566_err;
}})();
			$pyjs['track']['lineno']=759;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_567_err){if (!$p['isinstance']($pyjs_dbg_567_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_567_err);}throw $pyjs_dbg_567_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_568_err){if (!$p['isinstance']($pyjs_dbg_568_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_568_err);}throw $pyjs_dbg_568_err;
}})()['tableChangedEvent']['register'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_569_err){if (!$p['isinstance']($pyjs_dbg_569_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_569_err);}throw $pyjs_dbg_569_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onAttach'] = $method;
		$pyjs['track']['lineno']=761;
		$method = $pyjs__bind_method2('onDetach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'actions.list', 'lineno':761};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=761;
			$pyjs['track']['lineno']=762;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_570_err){if (!$p['isinstance']($pyjs_dbg_570_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_570_err);}throw $pyjs_dbg_570_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_571_err){if (!$p['isinstance']($pyjs_dbg_571_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_571_err);}throw $pyjs_dbg_571_err;
}})()['tableChangedEvent']['unregister'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_572_err){if (!$p['isinstance']($pyjs_dbg_572_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_572_err);}throw $pyjs_dbg_572_err;
}})();
			$pyjs['track']['lineno']=763;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['UnSelectAllAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_573_err){if (!$p['isinstance']($pyjs_dbg_573_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_573_err);}throw $pyjs_dbg_573_err;
}})()['onDetach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_574_err){if (!$p['isinstance']($pyjs_dbg_574_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_574_err);}throw $pyjs_dbg_574_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onDetach'] = $method;
		$pyjs['track']['lineno']=765;
		$method = $pyjs__bind_method2('onTableChanged', function(table, count) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				table = arguments[1];
				count = arguments[2];
			}
			var $assign9,$assign8;
			$pyjs['track']={'module':'actions.list', 'lineno':765};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=765;
			$pyjs['track']['lineno']=766;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['cmp'](count, 0) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_575_err){if (!$p['isinstance']($pyjs_dbg_575_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_575_err);}throw $pyjs_dbg_575_err;
}})()) {
				$pyjs['track']['lineno']=767;
				$assign8 = false;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__setitem__']('disabled', $assign8);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_576_err){if (!$p['isinstance']($pyjs_dbg_576_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_576_err);}throw $pyjs_dbg_576_err;
}})();
				self['isDisabled'] = $assign8;
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool']($p['getattr'](self, 'isDisabled')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_577_err){if (!$p['isinstance']($pyjs_dbg_577_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_577_err);}throw $pyjs_dbg_577_err;
}})()) {
				$pyjs['track']['lineno']=769;
				$assign9 = true;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__setitem__']('disabled', $assign9);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_578_err){if (!$p['isinstance']($pyjs_dbg_578_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_578_err);}throw $pyjs_dbg_578_err;
}})();
				self['isDisabled'] = $assign9;
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['table'],['count']]);
		$cls_definition['onTableChanged'] = $method;
		$pyjs['track']['lineno']=743;
		var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Button'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('UnSelectAllAction', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=771;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $p['getattr']($m['UnSelectAllAction'], 'isSuitableFor'), $m['UnSelectAllAction']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_579_err){if (!$p['isinstance']($pyjs_dbg_579_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_579_err);}throw $pyjs_dbg_579_err;
}})();
	$pyjs['track']['lineno']=773;
	$m['SelectInvertAction'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'actions.list';
		$pyjs['track']['lineno']=774;
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
			var $assign10;
			$pyjs['track']={'module':'actions.list', 'lineno':774};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=774;
			$pyjs['track']['lineno']=775;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['SelectInvertAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_580_err){if (!$p['isinstance']($pyjs_dbg_580_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_580_err);}throw $pyjs_dbg_580_err;
}})(), '__init__', args, kwargs, [{}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Invert selection');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_581_err){if (!$p['isinstance']($pyjs_dbg_581_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_581_err);}throw $pyjs_dbg_581_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_582_err){if (!$p['isinstance']($pyjs_dbg_582_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_582_err);}throw $pyjs_dbg_582_err;
}})();
			$pyjs['track']['lineno']=776;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('class', 'icon selectinvert');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_583_err){if (!$p['isinstance']($pyjs_dbg_583_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_583_err);}throw $pyjs_dbg_583_err;
}})();
			$pyjs['track']['lineno']=777;
			$assign10 = true;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('disabled', $assign10);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_584_err){if (!$p['isinstance']($pyjs_dbg_584_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_584_err);}throw $pyjs_dbg_584_err;
}})();
			self['isDisabled'] = $assign10;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=780;
		$method = $pyjs__bind_method2('isSuitableFor', function(modul, handler, actionName) {
			var $or62,$or61,$and98,$and97;
			$pyjs['track']={'module':'actions.list', 'lineno':780};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=780;
			$pyjs['track']['lineno']=781;
			$pyjs['track']['lineno']=781;
			var $pyjs__ret = ($p['bool']($and97=$p['op_eq'](actionName, 'selectinvert'))?($p['bool']($or61=$p['op_eq'](handler, 'list'))?$or61:(function(){try{try{$pyjs['in_try_except'] += 1;
			return handler['startswith']('list.');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_585_err){if (!$p['isinstance']($pyjs_dbg_585_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_585_err);}throw $pyjs_dbg_585_err;
}})()):$and97);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['modul'],['handler'],['actionName']]);
		$cls_definition['isSuitableFor'] = $method;
		$pyjs['track']['lineno']=783;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
			var added,$and100,$and99,removed;
			$pyjs['track']={'module':'actions.list', 'lineno':783};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=783;
			$pyjs['track']['lineno']=784;
			var $tupleassign4 = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__ass_unpack']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_586_err){if (!$p['isinstance']($pyjs_dbg_586_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_586_err);}throw $pyjs_dbg_586_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_587_err){if (!$p['isinstance']($pyjs_dbg_587_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_587_err);}throw $pyjs_dbg_587_err;
}})()['table']['table']['invertSelection']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_588_err){if (!$p['isinstance']($pyjs_dbg_588_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_588_err);}throw $pyjs_dbg_588_err;
}})(), 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_589_err){if (!$p['isinstance']($pyjs_dbg_589_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_589_err);}throw $pyjs_dbg_589_err;
}})();
			added = $tupleassign4[0];
			removed = $tupleassign4[1];
			$pyjs['track']['lineno']=786;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and99=removed)?added:$and99));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_590_err){if (!$p['isinstance']($pyjs_dbg_590_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_590_err);}throw $pyjs_dbg_590_err;
}})()) {
				$pyjs['track']['lineno']=787;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['conf']['__getitem__']('mainWindow')['log']('info', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call(null, $m['translate'], null, null, [{'added':added, 'removed':removed}, '{added} items selected, {removed} items deselected']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_591_err){if (!$p['isinstance']($pyjs_dbg_591_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_591_err);}throw $pyjs_dbg_591_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_592_err){if (!$p['isinstance']($pyjs_dbg_592_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_592_err);}throw $pyjs_dbg_592_err;
}})();
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](removed, 0));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_593_err){if (!$p['isinstance']($pyjs_dbg_593_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_593_err);}throw $pyjs_dbg_593_err;
}})()) {
				$pyjs['track']['lineno']=790;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['conf']['__getitem__']('mainWindow')['log']('info', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call(null, $m['translate'], null, null, [{'items':added}, '{items} items had been selected']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_594_err){if (!$p['isinstance']($pyjs_dbg_594_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_594_err);}throw $pyjs_dbg_594_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_595_err){if (!$p['isinstance']($pyjs_dbg_595_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_595_err);}throw $pyjs_dbg_595_err;
}})();
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](added, 0));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_596_err){if (!$p['isinstance']($pyjs_dbg_596_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_596_err);}throw $pyjs_dbg_596_err;
}})()) {
				$pyjs['track']['lineno']=792;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['conf']['__getitem__']('mainWindow')['log']('info', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call(null, $m['translate'], null, null, [{'items':removed}, '{items} items had been unselected']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_597_err){if (!$p['isinstance']($pyjs_dbg_597_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_597_err);}throw $pyjs_dbg_597_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_598_err){if (!$p['isinstance']($pyjs_dbg_598_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_598_err);}throw $pyjs_dbg_598_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=794;
		$method = $pyjs__bind_method2('onAttach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'actions.list', 'lineno':794};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=794;
			$pyjs['track']['lineno']=795;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['SelectInvertAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_599_err){if (!$p['isinstance']($pyjs_dbg_599_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_599_err);}throw $pyjs_dbg_599_err;
}})()['onAttach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_600_err){if (!$p['isinstance']($pyjs_dbg_600_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_600_err);}throw $pyjs_dbg_600_err;
}})();
			$pyjs['track']['lineno']=796;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_601_err){if (!$p['isinstance']($pyjs_dbg_601_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_601_err);}throw $pyjs_dbg_601_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_602_err){if (!$p['isinstance']($pyjs_dbg_602_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_602_err);}throw $pyjs_dbg_602_err;
}})()['tableChangedEvent']['register'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_603_err){if (!$p['isinstance']($pyjs_dbg_603_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_603_err);}throw $pyjs_dbg_603_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onAttach'] = $method;
		$pyjs['track']['lineno']=798;
		$method = $pyjs__bind_method2('onDetach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'actions.list', 'lineno':798};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=798;
			$pyjs['track']['lineno']=799;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_604_err){if (!$p['isinstance']($pyjs_dbg_604_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_604_err);}throw $pyjs_dbg_604_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_605_err){if (!$p['isinstance']($pyjs_dbg_605_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_605_err);}throw $pyjs_dbg_605_err;
}})()['tableChangedEvent']['unregister'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_606_err){if (!$p['isinstance']($pyjs_dbg_606_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_606_err);}throw $pyjs_dbg_606_err;
}})();
			$pyjs['track']['lineno']=800;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['SelectInvertAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_607_err){if (!$p['isinstance']($pyjs_dbg_607_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_607_err);}throw $pyjs_dbg_607_err;
}})()['onDetach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_608_err){if (!$p['isinstance']($pyjs_dbg_608_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_608_err);}throw $pyjs_dbg_608_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onDetach'] = $method;
		$pyjs['track']['lineno']=802;
		$method = $pyjs__bind_method2('onTableChanged', function(table, count) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				table = arguments[1];
				count = arguments[2];
			}
			var $assign11,$assign12;
			$pyjs['track']={'module':'actions.list', 'lineno':802};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='actions.list';
			$pyjs['track']['lineno']=802;
			$pyjs['track']['lineno']=803;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['cmp'](count, 0) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_609_err){if (!$p['isinstance']($pyjs_dbg_609_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_609_err);}throw $pyjs_dbg_609_err;
}})()) {
				$pyjs['track']['lineno']=804;
				$assign11 = false;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__setitem__']('disabled', $assign11);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_610_err){if (!$p['isinstance']($pyjs_dbg_610_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_610_err);}throw $pyjs_dbg_610_err;
}})();
				self['isDisabled'] = $assign11;
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool']($p['getattr'](self, 'isDisabled')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_611_err){if (!$p['isinstance']($pyjs_dbg_611_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_611_err);}throw $pyjs_dbg_611_err;
}})()) {
				$pyjs['track']['lineno']=806;
				$assign12 = true;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__setitem__']('disabled', $assign12);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_612_err){if (!$p['isinstance']($pyjs_dbg_612_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_612_err);}throw $pyjs_dbg_612_err;
}})();
				self['isDisabled'] = $assign12;
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['table'],['count']]);
		$cls_definition['onTableChanged'] = $method;
		$pyjs['track']['lineno']=773;
		var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Button'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('SelectInvertAction', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=808;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $p['getattr']($m['SelectInvertAction'], 'isSuitableFor'), $m['SelectInvertAction']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_613_err){if (!$p['isinstance']($pyjs_dbg_613_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_613_err);}throw $pyjs_dbg_613_err;
}})();
	return this;
}; /* end actions.list */


/* end module: actions.list */


/*
PYJS_DEPS: ['html5', 'utils', 'network.NetworkService', 'network', 'priorityqueue.actionDelegateSelector', 'priorityqueue', 'widgets.edit.EditWidget', 'widgets', 'widgets.edit', 'config.conf', 'config', 'pane.Pane', 'pane', 'widgets.repeatdate.RepeatDatePopup', 'widgets.repeatdate', 'widgets.csvexport.ExportCsvStarter', 'widgets.csvexport', 'widgets.table.DataTable', 'widgets.table', 'widgets.preview.Preview', 'widgets.preview', 'sidebarwidgets.internalpreview.InternalPreview', 'sidebarwidgets', 'sidebarwidgets.internalpreview', 'sidebarwidgets.filterselector.FilterSelector', 'sidebarwidgets.filterselector', 'i18n.translate', 'i18n']
*/
