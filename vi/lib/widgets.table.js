/* start module: widgets.table */
$pyjs['loaded_modules']['widgets.table'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['widgets.table']['__was_initialized__']) return $pyjs['loaded_modules']['widgets.table'];
	if(typeof $pyjs['loaded_modules']['widgets'] == 'undefined' || !$pyjs['loaded_modules']['widgets']['__was_initialized__']) $p['___import___']('widgets', null);
	var $m = $pyjs['loaded_modules']['widgets.table'];
	$m['__repr__'] = function() { return '<module: widgets.table>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'widgets.table';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['widgets']['table'] = $pyjs['loaded_modules']['widgets.table'];
	$m.__track_lines__[1] = 'widgets.table.py, line 1:\n    import html5, utils';
	$m.__track_lines__[2] = 'widgets.table.py, line 2:\n    from event import EventDispatcher';
	$m.__track_lines__[3] = 'widgets.table.py, line 3:\n    from html5.keycodes import *';
	$m.__track_lines__[4] = 'widgets.table.py, line 4:\n    from network import DeferredCall';
	$m.__track_lines__[6] = 'widgets.table.py, line 6:\n    class SelectTable( html5.Table ):';
	$m.__track_lines__[22] = 'widgets.table.py, line 22:\n    def __init__(self, checkboxes=False, indexes=False, *args, **kwargs):';
	$m.__track_lines__[23] = 'widgets.table.py, line 23:\n    super(SelectTable,self).__init__(*args,**kwargs)';
	$m.__track_lines__[26] = 'widgets.table.py, line 26:\n    self.selectionChangedEvent = EventDispatcher("selectionChanged")';
	$m.__track_lines__[27] = 'widgets.table.py, line 27:\n    self.selectionActivatedEvent = EventDispatcher("selectionActivated")';
	$m.__track_lines__[28] = 'widgets.table.py, line 28:\n    self.cursorMovedEvent = EventDispatcher("cursorMoved")';
	$m.__track_lines__[29] = 'widgets.table.py, line 29:\n    self.tableChangedEvent = EventDispatcher("tableChanged")';
	$m.__track_lines__[31] = 'widgets.table.py, line 31:\n    self.sinkEvent( "onDblClick", "onMouseMove", "onMouseDown",';
	$m.__track_lines__[35] = 'widgets.table.py, line 35:\n    self["tabindex"] = 1';
	$m.__track_lines__[37] = 'widgets.table.py, line 37:\n    self._selectedRows = [] # List of row-indexes currently selected';
	$m.__track_lines__[38] = 'widgets.table.py, line 38:\n    self._currentRow = None # Rowindex of the cursor row';
	$m.__track_lines__[39] = 'widgets.table.py, line 39:\n    self._isMouseDown = False # Tracks status of the left mouse button';
	$m.__track_lines__[40] = 'widgets.table.py, line 40:\n    self._isCtlPressed = False # Tracks status of the ctrl key';
	$m.__track_lines__[41] = 'widgets.table.py, line 41:\n    self._ctlStartRow = None # Stores the row where a multi-selection (using the ctrl key) started';
	$m.__track_lines__[42] = 'widgets.table.py, line 42:\n    self._selectionChangedListener = [] # All objects getting informed when the selection changes';
	$m.__track_lines__[43] = 'widgets.table.py, line 43:\n    self._selectionActivatedListeners = [] # All objects getting informed when items are selected';
	$m.__track_lines__[44] = 'widgets.table.py, line 44:\n    self._cursorMovedListeners = [] # All objects getting informed when the cursor moves';
	$m.__track_lines__[46] = 'widgets.table.py, line 46:\n    self.indexes = indexes';
	$m.__track_lines__[47] = 'widgets.table.py, line 47:\n    self.indexes_col = 0 if indexes else -1';
	$m.__track_lines__[49] = 'widgets.table.py, line 49:\n    self._checkboxes = {} # The checkbox items per row (better to use a dict!)';
	$m.__track_lines__[50] = 'widgets.table.py, line 50:\n    self.checkboxes = checkboxes';
	$m.__track_lines__[51] = 'widgets.table.py, line 51:\n    self.checkboxes_col = (self.indexes_col + 1) if checkboxes else -1';
	$m.__track_lines__[53] = 'widgets.table.py, line 53:\n    def onAttach(self):';
	$m.__track_lines__[54] = 'widgets.table.py, line 54:\n    super(SelectTable, self).onAttach()';
	$m.__track_lines__[55] = 'widgets.table.py, line 55:\n    self.focus()';
	$m.__track_lines__[57] = 'widgets.table.py, line 57:\n    def setHeader(self, headers):';
	$m.__track_lines__[64] = 'widgets.table.py, line 64:\n    tr = html5.Tr()';
	$m.__track_lines__[67] = 'widgets.table.py, line 67:\n    if self.indexes:';
	$m.__track_lines__[68] = 'widgets.table.py, line 68:\n    th = html5.Th()';
	$m.__track_lines__[69] = 'widgets.table.py, line 69:\n    th[ "class" ] = "index"';
	$m.__track_lines__[70] = 'widgets.table.py, line 70:\n    tr.appendChild( th )';
	$m.__track_lines__[73] = 'widgets.table.py, line 73:\n    if self.checkboxes:';
	$m.__track_lines__[74] = 'widgets.table.py, line 74:\n    th = html5.Th() # fixme..';
	$m.__track_lines__[75] = 'widgets.table.py, line 75:\n    th[ "class" ] = "check"';
	$m.__track_lines__[76] = 'widgets.table.py, line 76:\n    tr.appendChild( th )';
	$m.__track_lines__[79] = 'widgets.table.py, line 79:\n    for head in headers:';
	$m.__track_lines__[80] = 'widgets.table.py, line 80:\n    th = html5.Th()';
	$m.__track_lines__[81] = 'widgets.table.py, line 81:\n    th.appendChild( html5.TextNode( head ) )';
	$m.__track_lines__[82] = 'widgets.table.py, line 82:\n    tr.appendChild( th )';
	$m.__track_lines__[84] = 'widgets.table.py, line 84:\n    self.head.removeAllChildren()';
	$m.__track_lines__[85] = 'widgets.table.py, line 85:\n    self.head.appendChild( tr )';
	$m.__track_lines__[87] = 'widgets.table.py, line 87:\n    def getTrByIndex(self, idx):';
	$m.__track_lines__[94] = 'widgets.table.py, line 94:\n    for c in self.body._children:';
	$m.__track_lines__[95] = 'widgets.table.py, line 95:\n    if idx <= 0:';
	$m.__track_lines__[96] = 'widgets.table.py, line 96:\n    return c';
	$m.__track_lines__[97] = 'widgets.table.py, line 97:\n    idx -= c["rowspan"]';
	$m.__track_lines__[99] = 'widgets.table.py, line 99:\n    return None';
	$m.__track_lines__[101] = 'widgets.table.py, line 101:\n    def getIndexByTr(self,tr):';
	$m.__track_lines__[109] = 'widgets.table.py, line 109:\n    idx = 0';
	$m.__track_lines__[110] = 'widgets.table.py, line 110:\n    for c in self.body._children:';
	$m.__track_lines__[111] = 'widgets.table.py, line 111:\n    if c.element == tr:';
	$m.__track_lines__[112] = 'widgets.table.py, line 112:\n    return( idx )';
	$m.__track_lines__[113] = 'widgets.table.py, line 113:\n    idx += c["rowspan"]';
	$m.__track_lines__[114] = 'widgets.table.py, line 114:\n    return( idx )';
	$m.__track_lines__[116] = 'widgets.table.py, line 116:\n    def _rowForEvent(self, event ):';
	$m.__track_lines__[120] = 'widgets.table.py, line 120:\n    try:';
	$m.__track_lines__[122] = 'widgets.table.py, line 122:\n    tc = event.srcElement';
	$m.__track_lines__[125] = 'widgets.table.py, line 125:\n    tc = event.target';
	$m.__track_lines__[127] = 'widgets.table.py, line 127:\n    if tc is None:';
	$m.__track_lines__[128] = 'widgets.table.py, line 128:\n    return( None )';
	$m.__track_lines__[130] = 'widgets.table.py, line 130:\n    tr = tc.parentElement';
	$m.__track_lines__[132] = 'widgets.table.py, line 132:\n    while( tr.parentElement is not None ):';
	$m.__track_lines__[133] = 'widgets.table.py, line 133:\n    if tr.parentElement == self.body.element:';
	$m.__track_lines__[134] = 'widgets.table.py, line 134:\n    return( tr )';
	$m.__track_lines__[135] = 'widgets.table.py, line 135:\n    tr = tr.parentElement';
	$m.__track_lines__[137] = 'widgets.table.py, line 137:\n    return( None )';
	$m.__track_lines__[139] = 'widgets.table.py, line 139:\n    def onChange(self, event):';
	$m.__track_lines__[140] = 'widgets.table.py, line 140:\n    tr = self._rowForEvent( event )';
	$m.__track_lines__[141] = 'widgets.table.py, line 141:\n    if tr is None:';
	$m.__track_lines__[142] = 'widgets.table.py, line 142:\n    return';
	$m.__track_lines__[144] = 'widgets.table.py, line 144:\n    row = self.getIndexByTr( tr )';
	$m.__track_lines__[146] = 'widgets.table.py, line 146:\n    if self.checkboxes and html5.utils.doesEventHitWidgetOrChildren(event, self._checkboxes[row]):';
	$m.__track_lines__[147] = 'widgets.table.py, line 147:\n    self._checkboxes[ row ][ "checked" ] = row in self._selectedRows';
	$m.__track_lines__[149] = 'widgets.table.py, line 149:\n    def onMouseDown(self, event):';
	$m.__track_lines__[150] = 'widgets.table.py, line 150:\n    tr = self._rowForEvent( event )';
	$m.__track_lines__[151] = 'widgets.table.py, line 151:\n    if tr is None:';
	$m.__track_lines__[152] = 'widgets.table.py, line 152:\n    return';
	$m.__track_lines__[154] = 'widgets.table.py, line 154:\n    row = self.getIndexByTr( tr )';
	$m.__track_lines__[156] = 'widgets.table.py, line 156:\n    if self._isCtlPressed:';
	$m.__track_lines__[157] = 'widgets.table.py, line 157:\n    if row in self._selectedRows:';
	$m.__track_lines__[158] = 'widgets.table.py, line 158:\n    self.removeSelectedRow( row )';
	$m.__track_lines__[160] = 'widgets.table.py, line 160:\n    self.addSelectedRow( row )';
	$m.__track_lines__[163] = 'widgets.table.py, line 163:\n    if row in self._selectedRows:';
	$m.__track_lines__[164] = 'widgets.table.py, line 164:\n    self.removeSelectedRow( row )';
	$m.__track_lines__[166] = 'widgets.table.py, line 166:\n    self.addSelectedRow( row )';
	$m.__track_lines__[169] = 'widgets.table.py, line 169:\n    self._isMouseDown = True';
	$m.__track_lines__[171] = 'widgets.table.py, line 171:\n    if self.checkboxes:';
	$m.__track_lines__[172] = 'widgets.table.py, line 172:\n    if row in self._selectedRows:';
	$m.__track_lines__[173] = 'widgets.table.py, line 173:\n    self.removeSelectedRow( row )';
	$m.__track_lines__[175] = 'widgets.table.py, line 175:\n    self.addSelectedRow( row )';
	$m.__track_lines__[177] = 'widgets.table.py, line 177:\n    self.setCursorRow(self.getIndexByTr(tr), removeExistingSelection=not self.checkboxes)';
	$m.__track_lines__[179] = 'widgets.table.py, line 179:\n    event.preventDefault()';
	$m.__track_lines__[180] = 'widgets.table.py, line 180:\n    self.focus()';
	$m.__track_lines__[182] = 'widgets.table.py, line 182:\n    def onMouseOut(self, event):';
	$m.__track_lines__[183] = 'widgets.table.py, line 183:\n    self._isMouseDown = False';
	$m.__track_lines__[185] = 'widgets.table.py, line 185:\n    def onMouseUp(self, event):';
	$m.__track_lines__[186] = 'widgets.table.py, line 186:\n    self._isMouseDown = False';
	$m.__track_lines__[188] = 'widgets.table.py, line 188:\n    def onMouseMove(self, event):';
	$m.__track_lines__[189] = 'widgets.table.py, line 189:\n    if self._isMouseDown:';
	$m.__track_lines__[190] = 'widgets.table.py, line 190:\n    tr = self._rowForEvent( event )';
	$m.__track_lines__[191] = 'widgets.table.py, line 191:\n    if tr is None:';
	$m.__track_lines__[192] = 'widgets.table.py, line 192:\n    return';
	$m.__track_lines__[193] = 'widgets.table.py, line 193:\n    self.addSelectedRow( self.getIndexByTr(tr) )';
	$m.__track_lines__[194] = 'widgets.table.py, line 194:\n    event.preventDefault()';
	$m.__track_lines__[196] = 'widgets.table.py, line 196:\n    def onKeyDown(self, event):';
	$m.__track_lines__[197] = 'widgets.table.py, line 197:\n    if isArrowDown(event.keyCode): #Arrow down';
	$m.__track_lines__[199] = 'widgets.table.py, line 199:\n    if self._currentRow is None:';
	$m.__track_lines__[200] = 'widgets.table.py, line 200:\n    self.setCursorRow(0)';
	$m.__track_lines__[203] = 'widgets.table.py, line 203:\n    if self._isCtlPressed:';
	$m.__track_lines__[205] = 'widgets.table.py, line 205:\n    if self._ctlStartRow > self._currentRow:';
	$m.__track_lines__[206] = 'widgets.table.py, line 206:\n    self.removeSelectedRow( self._currentRow )';
	$m.__track_lines__[208] = 'widgets.table.py, line 208:\n    self.addSelectedRow( self._currentRow )';
	$m.__track_lines__[210] = 'widgets.table.py, line 210:\n    if self._currentRow+1 < self.getRowCount():';
	$m.__track_lines__[211] = 'widgets.table.py, line 211:\n    self.addSelectedRow( self._currentRow+1 )';
	$m.__track_lines__[213] = 'widgets.table.py, line 213:\n    if self._currentRow+1 < self.getRowCount():';
	$m.__track_lines__[214] = 'widgets.table.py, line 214:\n    self.setCursorRow(self._currentRow+1,';
	$m.__track_lines__[216] = 'widgets.table.py, line 216:\n    event.preventDefault()';
	$m.__track_lines__[220] = 'widgets.table.py, line 220:\n    if self._currentRow is None:';
	$m.__track_lines__[221] = 'widgets.table.py, line 221:\n    self.setCursorRow(0)';
	$m.__track_lines__[224] = 'widgets.table.py, line 224:\n    if self._isCtlPressed: #Check if we extend a selection';
	$m.__track_lines__[225] = 'widgets.table.py, line 225:\n    if self._ctlStartRow < self._currentRow:';
	$m.__track_lines__[226] = 'widgets.table.py, line 226:\n    self.removeSelectedRow( self._currentRow )';
	$m.__track_lines__[228] = 'widgets.table.py, line 228:\n    self.addSelectedRow( self._currentRow )';
	$m.__track_lines__[230] = 'widgets.table.py, line 230:\n    if self._currentRow>0:';
	$m.__track_lines__[231] = 'widgets.table.py, line 231:\n    self.addSelectedRow( self._currentRow-1 )';
	$m.__track_lines__[233] = 'widgets.table.py, line 233:\n    if self._currentRow>0: #Move the cursor if possible';
	$m.__track_lines__[234] = 'widgets.table.py, line 234:\n    self.setCursorRow(self._currentRow-1,';
	$m.__track_lines__[237] = 'widgets.table.py, line 237:\n    event.preventDefault()';
	$m.__track_lines__[241] = 'widgets.table.py, line 241:\n    if len( self._selectedRows )>0:';
	$m.__track_lines__[242] = 'widgets.table.py, line 242:\n    self.selectionActivatedEvent.fire( self, self._selectedRows )';
	$m.__track_lines__[243] = 'widgets.table.py, line 243:\n    event.preventDefault()';
	$m.__track_lines__[244] = 'widgets.table.py, line 244:\n    return';
	$m.__track_lines__[246] = 'widgets.table.py, line 246:\n    if self._currentRow is not None:';
	$m.__track_lines__[247] = 'widgets.table.py, line 247:\n    self.selectionActivatedEvent.fire( self, [self._currentRow] )';
	$m.__track_lines__[248] = 'widgets.table.py, line 248:\n    event.preventDefault()';
	$m.__track_lines__[249] = 'widgets.table.py, line 249:\n    return';
	$m.__track_lines__[252] = 'widgets.table.py, line 252:\n    self._isCtlPressed = True';
	$m.__track_lines__[253] = 'widgets.table.py, line 253:\n    self._ctlStartRow = self._currentRow or 0';
	$m.__track_lines__[255] = 'widgets.table.py, line 255:\n    if self._currentRow is not None and not self._currentRow in self._selectedRows:';
	$m.__track_lines__[256] = 'widgets.table.py, line 256:\n    self.addSelectedRow( self._currentRow )';
	$m.__track_lines__[257] = 'widgets.table.py, line 257:\n    self.setCursorRow( None, removeExistingSelection=False )';
	$m.__track_lines__[259] = 'widgets.table.py, line 259:\n    def onKeyUp(self, event):';
	$m.__track_lines__[260] = 'widgets.table.py, line 260:\n    if isSingleSelectionKey( event.keyCode ):';
	$m.__track_lines__[261] = 'widgets.table.py, line 261:\n    self._isCtlPressed = False';
	$m.__track_lines__[262] = 'widgets.table.py, line 262:\n    self._ctlStartRow = None';
	$m.__track_lines__[264] = 'widgets.table.py, line 264:\n    def onDblClick(self, event):';
	$m.__track_lines__[265] = 'widgets.table.py, line 265:\n    if self._currentRow is not None:';
	$m.__track_lines__[266] = 'widgets.table.py, line 266:\n    self.selectionActivatedEvent.fire( self, [self._currentRow] )';
	$m.__track_lines__[267] = 'widgets.table.py, line 267:\n    event.preventDefault()';
	$m.__track_lines__[269] = 'widgets.table.py, line 269:\n    def addSelectedRow(self, row):';
	$m.__track_lines__[273] = 'widgets.table.py, line 273:\n    if row in self._selectedRows:';
	$m.__track_lines__[274] = 'widgets.table.py, line 274:\n    return';
	$m.__track_lines__[276] = 'widgets.table.py, line 276:\n    self._selectedRows.append( row )';
	$m.__track_lines__[278] = 'widgets.table.py, line 278:\n    tr = self.getTrByIndex( row )';
	$m.__track_lines__[279] = 'widgets.table.py, line 279:\n    tr["class"].append("is_selected")';
	$m.__track_lines__[281] = 'widgets.table.py, line 281:\n    if self.checkboxes:';
	$m.__track_lines__[282] = 'widgets.table.py, line 282:\n    self._checkboxes[ row ][ "checked" ] = True';
	$m.__track_lines__[284] = 'widgets.table.py, line 284:\n    self.selectionChangedEvent.fire( self, self.getCurrentSelection() )';
	$m.__track_lines__[286] = 'widgets.table.py, line 286:\n    print("Currently selected rows: %s" % str(self._selectedRows))';
	$m.__track_lines__[288] = 'widgets.table.py, line 288:\n    def removeSelectedRow(self, row):';
	$m.__track_lines__[294] = 'widgets.table.py, line 294:\n    if not row in self._selectedRows:';
	$m.__track_lines__[295] = 'widgets.table.py, line 295:\n    return';
	$m.__track_lines__[297] = 'widgets.table.py, line 297:\n    self._selectedRows.remove( row )';
	$m.__track_lines__[299] = 'widgets.table.py, line 299:\n    tr = self.getTrByIndex( row )';
	$m.__track_lines__[300] = 'widgets.table.py, line 300:\n    tr["class"].remove("is_selected")';
	$m.__track_lines__[302] = 'widgets.table.py, line 302:\n    if self.checkboxes:';
	$m.__track_lines__[303] = 'widgets.table.py, line 303:\n    self._checkboxes[ row ][ "checked" ] = False';
	$m.__track_lines__[305] = 'widgets.table.py, line 305:\n    self.selectionChangedEvent.fire( self, self.getCurrentSelection() )';
	$m.__track_lines__[307] = 'widgets.table.py, line 307:\n    def selectRow(self, newRow ):';
	$m.__track_lines__[314] = 'widgets.table.py, line 314:\n    self.setCursorRow( newRow )';
	$m.__track_lines__[316] = 'widgets.table.py, line 316:\n    for row in self._selectedRows[:]:';
	$m.__track_lines__[317] = 'widgets.table.py, line 317:\n    if row!=newRow:';
	$m.__track_lines__[318] = 'widgets.table.py, line 318:\n    self.removeSelectedRow( row )';
	$m.__track_lines__[320] = 'widgets.table.py, line 320:\n    if not newRow in self._selectedRows:';
	$m.__track_lines__[321] = 'widgets.table.py, line 321:\n    self._selectedRows.append( newRow )';
	$m.__track_lines__[322] = 'widgets.table.py, line 322:\n    tr = self.getTrByIndex( newRow )';
	$m.__track_lines__[323] = 'widgets.table.py, line 323:\n    tr["class"].append("is_selected")';
	$m.__track_lines__[325] = 'widgets.table.py, line 325:\n    self.selectionChangedEvent.fire( self, self.getCurrentSelection() )';
	$m.__track_lines__[327] = 'widgets.table.py, line 327:\n    def setCursorRow(self, row, removeExistingSelection=True ):';
	$m.__track_lines__[332] = 'widgets.table.py, line 332:\n    if self._currentRow is not None:';
	$m.__track_lines__[333] = 'widgets.table.py, line 333:\n    self.getTrByIndex(self._currentRow)["class"].remove("is_focused")';
	$m.__track_lines__[335] = 'widgets.table.py, line 335:\n    self._currentRow = row';
	$m.__track_lines__[336] = 'widgets.table.py, line 336:\n    if self._currentRow is not None:';
	$m.__track_lines__[337] = 'widgets.table.py, line 337:\n    self.getTrByIndex(self._currentRow)["class"].append("is_focused")';
	$m.__track_lines__[338] = 'widgets.table.py, line 338:\n    self.cursorMovedEvent.fire( self, row )';
	$m.__track_lines__[340] = 'widgets.table.py, line 340:\n    if removeExistingSelection:';
	$m.__track_lines__[341] = 'widgets.table.py, line 341:\n    for row in self._selectedRows[:]:';
	$m.__track_lines__[342] = 'widgets.table.py, line 342:\n    self.removeSelectedRow( row )';
	$m.__track_lines__[343] = 'widgets.table.py, line 343:\n    self.selectionChangedEvent.fire( self, self.getCurrentSelection() )';
	$m.__track_lines__[345] = 'widgets.table.py, line 345:\n    DeferredCall(self.focusRow, row)';
	$m.__track_lines__[347] = 'widgets.table.py, line 347:\n    def focusRow(self, row):';
	$m.__track_lines__[348] = 'widgets.table.py, line 348:\n    tr = self.getTrByIndex(row)';
	$m.__track_lines__[351] = 'widgets.table.py, line 351:\n    def getCurrentSelection(self):';
	$m.__track_lines__[356] = 'widgets.table.py, line 356:\n    if self._selectedRows:';
	$m.__track_lines__[357] = 'widgets.table.py, line 357:\n    return self._selectedRows[:]';
	$m.__track_lines__[359] = 'widgets.table.py, line 359:\n    return [self._currentRow]';
	$m.__track_lines__[361] = 'widgets.table.py, line 361:\n    return None';
	$m.__track_lines__[363] = 'widgets.table.py, line 363:\n    def clear(self):';
	$m.__track_lines__[367] = 'widgets.table.py, line 367:\n    super(SelectTable, self).clear()';
	$m.__track_lines__[368] = 'widgets.table.py, line 368:\n    self._currentRow = None';
	$m.__track_lines__[369] = 'widgets.table.py, line 369:\n    self._selectedRows = []';
	$m.__track_lines__[371] = 'widgets.table.py, line 371:\n    self.selectionChangedEvent.fire(self, self.getCurrentSelection())';
	$m.__track_lines__[372] = 'widgets.table.py, line 372:\n    self.tableChangedEvent.fire(self, self.getRowCount())';
	$m.__track_lines__[374] = 'widgets.table.py, line 374:\n    def removeRow(self, row):';
	$m.__track_lines__[378] = 'widgets.table.py, line 378:\n    if row in self._selectedRows:';
	$m.__track_lines__[379] = 'widgets.table.py, line 379:\n    self._selectedRows.remove( row )';
	$m.__track_lines__[380] = 'widgets.table.py, line 380:\n    self.selectionChangedEvent.fire( self )';
	$m.__track_lines__[382] = 'widgets.table.py, line 382:\n    if self._currentRow == row:';
	$m.__track_lines__[383] = 'widgets.table.py, line 383:\n    self._currentRow = None';
	$m.__track_lines__[384] = 'widgets.table.py, line 384:\n    self.cursorMovedEvent.fire( self )';
	$m.__track_lines__[386] = 'widgets.table.py, line 386:\n    self.tableChangedEvent.fire(self, self.getRowCount())';
	$m.__track_lines__[387] = 'widgets.table.py, line 387:\n    super( SelectTable, self ).removeRow( row )';
	$m.__track_lines__[389] = 'widgets.table.py, line 389:\n    def _extraCols(self):';
	$m.__track_lines__[390] = 'widgets.table.py, line 390:\n    return int( self.checkboxes ) + int( self.indexes )';
	$m.__track_lines__[392] = 'widgets.table.py, line 392:\n    def prepareCol(self, row, col):';
	$m.__track_lines__[397] = 'widgets.table.py, line 397:\n    super( SelectTable, self ).prepareCol( row, col + self._extraCols() - 1 )';
	$m.__track_lines__[399] = 'widgets.table.py, line 399:\n    if self.checkboxes:';
	$m.__track_lines__[400] = 'widgets.table.py, line 400:\n    checkbox = html5.Input()';
	$m.__track_lines__[401] = 'widgets.table.py, line 401:\n    checkbox[ "type" ] = "checkbox"';
	$m.__track_lines__[402] = 'widgets.table.py, line 402:\n    checkbox[ "class" ].append( "check" )';
	$m.__track_lines__[403] = 'widgets.table.py, line 403:\n    checkbox[ "checked" ] = False';
	$m.__track_lines__[405] = 'widgets.table.py, line 405:\n    self["cell"][ row ][ self.checkboxes_col ] = checkbox';
	$m.__track_lines__[406] = 'widgets.table.py, line 406:\n    self._checkboxes[ row ] = checkbox';
	$m.__track_lines__[408] = 'widgets.table.py, line 408:\n    if self.indexes:';
	$m.__track_lines__[409] = 'widgets.table.py, line 409:\n    lbl = html5.Label( str( row + 1 ) )';
	$m.__track_lines__[410] = 'widgets.table.py, line 410:\n    lbl[ "class" ].append( "index" )';
	$m.__track_lines__[411] = 'widgets.table.py, line 411:\n    self["cell"][ row ][ self.indexes_col ] = lbl';
	$m.__track_lines__[413] = 'widgets.table.py, line 413:\n    self.tableChangedEvent.fire(self, self.getRowCount())';
	$m.__track_lines__[415] = 'widgets.table.py, line 415:\n    def setCell(self, row, col, val):';
	$m.__track_lines__[420] = 'widgets.table.py, line 420:\n    self[ "cell" ][ row ][ col + self._extraCols() ] = val';
	$m.__track_lines__[422] = 'widgets.table.py, line 422:\n    def selectAll(self):';
	$m.__track_lines__[426] = 'widgets.table.py, line 426:\n    self._selectedRows = range(0, self.getRowCount() )';
	$m.__track_lines__[428] = 'widgets.table.py, line 428:\n    for row in self._selectedRows:';
	$m.__track_lines__[429] = 'widgets.table.py, line 429:\n    tr = self.getTrByIndex( row )';
	$m.__track_lines__[431] = 'widgets.table.py, line 431:\n    if not "is_selected" in tr["class"]:';
	$m.__track_lines__[432] = 'widgets.table.py, line 432:\n    tr["class"].append("is_selected")';
	$m.__track_lines__[434] = 'widgets.table.py, line 434:\n    if self.checkboxes:';
	$m.__track_lines__[435] = 'widgets.table.py, line 435:\n    self._checkboxes[ row ][ "checked" ] = True';
	$m.__track_lines__[437] = 'widgets.table.py, line 437:\n    self.selectionChangedEvent.fire( self, self.getCurrentSelection() )';
	$m.__track_lines__[438] = 'widgets.table.py, line 438:\n    return len(self._selectedRows)';
	$m.__track_lines__[440] = 'widgets.table.py, line 440:\n    def unSelectAll(self):';
	$m.__track_lines__[444] = 'widgets.table.py, line 444:\n    unsel = len(self._selectedRows)';
	$m.__track_lines__[446] = 'widgets.table.py, line 446:\n    for row in self._selectedRows:';
	$m.__track_lines__[447] = 'widgets.table.py, line 447:\n    tr = self.getTrByIndex( row )';
	$m.__track_lines__[448] = 'widgets.table.py, line 448:\n    tr["class"].remove("is_selected")';
	$m.__track_lines__[450] = 'widgets.table.py, line 450:\n    if self.checkboxes:';
	$m.__track_lines__[451] = 'widgets.table.py, line 451:\n    self._checkboxes[ row ][ "checked" ] = False';
	$m.__track_lines__[453] = 'widgets.table.py, line 453:\n    self._selectedRows = []';
	$m.__track_lines__[454] = 'widgets.table.py, line 454:\n    self.selectionChangedEvent.fire( self, self.getCurrentSelection() )';
	$m.__track_lines__[455] = 'widgets.table.py, line 455:\n    return unsel';
	$m.__track_lines__[457] = 'widgets.table.py, line 457:\n    def invertSelection(self):';
	$m.__track_lines__[461] = 'widgets.table.py, line 461:\n    current = self._selectedRows[:]';
	$m.__track_lines__[462] = 'widgets.table.py, line 462:\n    self._selectedRows = []';
	$m.__track_lines__[464] = 'widgets.table.py, line 464:\n    for row in range(0, self.getRowCount() ):';
	$m.__track_lines__[465] = 'widgets.table.py, line 465:\n    tr = self.getTrByIndex( row )';
	$m.__track_lines__[467] = 'widgets.table.py, line 467:\n    if row in current:';
	$m.__track_lines__[468] = 'widgets.table.py, line 468:\n    tr["class"].remove("is_selected")';
	$m.__track_lines__[470] = 'widgets.table.py, line 470:\n    self._selectedRows.append(row)';
	$m.__track_lines__[471] = 'widgets.table.py, line 471:\n    tr["class"].append("is_selected")';
	$m.__track_lines__[473] = 'widgets.table.py, line 473:\n    if self.checkboxes:';
	$m.__track_lines__[474] = 'widgets.table.py, line 474:\n    self._checkboxes[ row ][ "checked" ] = row in self._selectedRows';
	$m.__track_lines__[476] = 'widgets.table.py, line 476:\n    self.selectionChangedEvent.fire( self, self.getCurrentSelection() )';
	$m.__track_lines__[477] = 'widgets.table.py, line 477:\n    return len(self._selectedRows), len(current)';
	$m.__track_lines__[481] = 'widgets.table.py, line 481:\n    class DataTable( html5.Div ):';
	$m.__track_lines__[486] = 'widgets.table.py, line 486:\n    def __init__( self, _loadOnDisplay = False, *args, **kwargs ):';
	$m.__track_lines__[487] = 'widgets.table.py, line 487:\n    super( DataTable, self ).__init__( )';
	$m.__track_lines__[488] = 'widgets.table.py, line 488:\n    self.table = SelectTable( *args, **kwargs )';
	$m.__track_lines__[489] = 'widgets.table.py, line 489:\n    self.appendChild(self.table)';
	$m.__track_lines__[491] = 'widgets.table.py, line 491:\n    self._loadOnDisplay = _loadOnDisplay # Load all data content continuously when displaying';
	$m.__track_lines__[493] = 'widgets.table.py, line 493:\n    self._model = [] # List of values we are displaying right now';
	$m.__track_lines__[494] = 'widgets.table.py, line 494:\n    self._shownFields = [] # List of keys we display from the model';
	$m.__track_lines__[495] = 'widgets.table.py, line 495:\n    self._modelIdx = 0 # Internal counter to distinguish between 2 rows with identical data';
	$m.__track_lines__[496] = 'widgets.table.py, line 496:\n    self._isAjaxLoading = False # Determines if we already requested the next batch of rows';
	$m.__track_lines__[497] = 'widgets.table.py, line 497:\n    self._dataProvider = None # Which object to call if we need more data';
	$m.__track_lines__[498] = 'widgets.table.py, line 498:\n    self._cellRender = {} # Map of renders for a given field';
	$m.__track_lines__[501] = 'widgets.table.py, line 501:\n    self.selectionChangedEvent = EventDispatcher("selectionChanged")';
	$m.__track_lines__[502] = 'widgets.table.py, line 502:\n    self.selectionActivatedEvent = EventDispatcher("selectionActivated")';
	$m.__track_lines__[503] = 'widgets.table.py, line 503:\n    self.tableChangedEvent = EventDispatcher("tableChanged")';
	$m.__track_lines__[505] = 'widgets.table.py, line 505:\n    self.table.selectionChangedEvent.register( self )';
	$m.__track_lines__[506] = 'widgets.table.py, line 506:\n    self.table.selectionActivatedEvent.register( self )';
	$m.__track_lines__[507] = 'widgets.table.py, line 507:\n    self.table.tableChangedEvent.register( self )';
	$m.__track_lines__[510] = 'widgets.table.py, line 510:\n    for f in ["cursorMovedEvent","setHeader"]:';
	$m.__track_lines__[511] = 'widgets.table.py, line 511:\n    setattr( self, f, getattr(self.table,f))';
	$m.__track_lines__[513] = 'widgets.table.py, line 513:\n    self.cursorMovedEvent.register( self )';
	$m.__track_lines__[514] = 'widgets.table.py, line 514:\n    self["style"]["overflow"] = "scroll"';
	$m.__track_lines__[515] = 'widgets.table.py, line 515:\n    self.recalcHeight()';
	$m.__track_lines__[516] = 'widgets.table.py, line 516:\n    self.sinkEvent("onScroll")';
	$m.__track_lines__[519] = 'widgets.table.py, line 519:\n    def recalcHeight(self, *args, **kwargs):';
	$m.__track_lines__[520] = 'widgets.table.py, line 520:\n    self["style"]["max-height"] = "%spx" % (int(eval("window.top.innerHeight"))-280)';
	$m.__track_lines__[522] = 'widgets.table.py, line 522:\n    def setDataProvider(self,obj):';
	$m.__track_lines__[531] = 'widgets.table.py, line 531:\n    assert obj==None or "onNextBatchNeeded" in dir(obj),\\';
	$m.__track_lines__[534] = 'widgets.table.py, line 534:\n    self._dataProvider = obj';
	$m.__track_lines__[535] = 'widgets.table.py, line 535:\n    self._isAjaxLoading = False';
	$m.__track_lines__[537] = 'widgets.table.py, line 537:\n    if "is_loading" in self.table["class"]:';
	$m.__track_lines__[538] = 'widgets.table.py, line 538:\n    self.table["class"].remove("is_loading")';
	$m.__track_lines__[540] = 'widgets.table.py, line 540:\n    def onCursorMoved(self, table, row):';
	$m.__track_lines__[544] = 'widgets.table.py, line 544:\n    tr = table.getTrByIndex( row )';
	$m.__track_lines__[545] = 'widgets.table.py, line 545:\n    if tr is None:';
	$m.__track_lines__[546] = 'widgets.table.py, line 546:\n    return';
	$m.__track_lines__[547] = 'widgets.table.py, line 547:\n    return #FIXME';
	$m.__track_lines__[548] = 'widgets.table.py, line 548:\n    if self.element.scrollTop>tr.offsetTop:';
	$m.__track_lines__[549] = 'widgets.table.py, line 549:\n    self.element.scrollTop = tr.offsetTop';
	$m.__track_lines__[551] = 'widgets.table.py, line 551:\n    self.element.scrollTop = tr.offsetTop+tr.clientHeight-self.element.clientHeight';
	$m.__track_lines__[553] = 'widgets.table.py, line 553:\n    def getRowCount(self):';
	$m.__track_lines__[558] = 'widgets.table.py, line 558:\n    return( len( self._model ))';
	$m.__track_lines__[561] = 'widgets.table.py, line 561:\n    def add(self, obj):';
	$m.__track_lines__[567] = 'widgets.table.py, line 567:\n    obj["_uniqeIndex"] = self._modelIdx';
	$m.__track_lines__[568] = 'widgets.table.py, line 568:\n    self._modelIdx += 1';
	$m.__track_lines__[569] = 'widgets.table.py, line 569:\n    self._model.append( obj )';
	$m.__track_lines__[570] = 'widgets.table.py, line 570:\n    self._renderObject( obj )';
	$m.__track_lines__[571] = 'widgets.table.py, line 571:\n    self._isAjaxLoading = False';
	$m.__track_lines__[572] = 'widgets.table.py, line 572:\n    if "is_loading" in self.table["class"]:';
	$m.__track_lines__[573] = 'widgets.table.py, line 573:\n    self.table["class"].remove("is_loading")';
	$m.__track_lines__[574] = 'widgets.table.py, line 574:\n    self.testIfNextBatchNeededImmediately()';
	$m.__track_lines__[576] = 'widgets.table.py, line 576:\n    def extend(self, objList):';
	$m.__track_lines__[581] = 'widgets.table.py, line 581:\n    self.table.prepareGrid( len(objList), len(self._shownFields) )';
	$m.__track_lines__[582] = 'widgets.table.py, line 582:\n    for obj in objList:';
	$m.__track_lines__[583] = 'widgets.table.py, line 583:\n    obj["_uniqeIndex"] = self._modelIdx';
	$m.__track_lines__[584] = 'widgets.table.py, line 584:\n    self._modelIdx += 1';
	$m.__track_lines__[585] = 'widgets.table.py, line 585:\n    self._model.append( obj )';
	$m.__track_lines__[586] = 'widgets.table.py, line 586:\n    self._renderObject( obj, tableIsPrepared=True )';
	$m.__track_lines__[587] = 'widgets.table.py, line 587:\n    self._isAjaxLoading = False';
	$m.__track_lines__[588] = 'widgets.table.py, line 588:\n    if "is_loading" in self.table["class"]:';
	$m.__track_lines__[589] = 'widgets.table.py, line 589:\n    self.table["class"].remove("is_loading")';
	$m.__track_lines__[590] = 'widgets.table.py, line 590:\n    self.testIfNextBatchNeededImmediately()';
	$m.__track_lines__[592] = 'widgets.table.py, line 592:\n    def testIfNextBatchNeededImmediately(self):';
	$m.__track_lines__[598] = 'widgets.table.py, line 598:\n    sumHeight = 0';
	$m.__track_lines__[599] = 'widgets.table.py, line 599:\n    for c in self.table._children:';
	$m.__track_lines__[600] = 'widgets.table.py, line 600:\n    if "clientHeight" in dir(c.element):';
	$m.__track_lines__[601] = 'widgets.table.py, line 601:\n    sumHeight += c.element.clientHeight';
	$m.__track_lines__[603] = 'widgets.table.py, line 603:\n    if (not self._isAjaxLoading';
	$m.__track_lines__[607] = 'widgets.table.py, line 607:\n    if self._dataProvider:';
	$m.__track_lines__[608] = 'widgets.table.py, line 608:\n    self._isAjaxLoading = True';
	$m.__track_lines__[609] = 'widgets.table.py, line 609:\n    if not "is_loading" in self.table["class"]:';
	$m.__track_lines__[610] = 'widgets.table.py, line 610:\n    self.table["class"].append("is_loading")';
	$m.__track_lines__[611] = 'widgets.table.py, line 611:\n    self._dataProvider.onNextBatchNeeded()';
	$m.__track_lines__[613] = 'widgets.table.py, line 613:\n    def remove(self, objOrIndex):';
	$m.__track_lines__[619] = 'widgets.table.py, line 619:\n    if isinstance( objOrIndex, dict ):';
	$m.__track_lines__[620] = 'widgets.table.py, line 620:\n    assert objOrIndex in self._model, "Cannot remove unknown object from Table"';
	$m.__track_lines__[621] = 'widgets.table.py, line 621:\n    objOrIndex = self._model.index( objOrIndex )';
	$m.__track_lines__[622] = 'widgets.table.py, line 622:\n    if isinstance( objOrIndex, int ):';
	$m.__track_lines__[623] = 'widgets.table.py, line 623:\n    assert objOrIndex>0 and objOrIndex<len(self._model), "Modelindex out of range"';
	$m.__track_lines__[624] = 'widgets.table.py, line 624:\n    self._model.remove( self._model[objOrIndex] )';
	$m.__track_lines__[625] = 'widgets.table.py, line 625:\n    self.table.removeRow( objOrIndex )';
	$m.__track_lines__[627] = 'widgets.table.py, line 627:\n    raise TypeError("Expected int or dict, got %s" % str(type(objOrIndex)))';
	$m.__track_lines__[629] = 'widgets.table.py, line 629:\n    def clear(self, keepModel=False):';
	$m.__track_lines__[633] = 'widgets.table.py, line 633:\n    self.table.clear()';
	$m.__track_lines__[634] = 'widgets.table.py, line 634:\n    if not keepModel:';
	$m.__track_lines__[635] = 'widgets.table.py, line 635:\n    self._model = []';
	$m.__track_lines__[637] = 'widgets.table.py, line 637:\n    def _renderObject(self, obj, tableIsPrepared=False):';
	$m.__track_lines__[644] = 'widgets.table.py, line 644:\n    if not self._shownFields:';
	$m.__track_lines__[645] = 'widgets.table.py, line 645:\n    return';
	$m.__track_lines__[647] = 'widgets.table.py, line 647:\n    rowIdx = self._model.index(obj)';
	$m.__track_lines__[648] = 'widgets.table.py, line 648:\n    cellIdx = 0';
	$m.__track_lines__[650] = 'widgets.table.py, line 650:\n    if not tableIsPrepared:';
	$m.__track_lines__[651] = 'widgets.table.py, line 651:\n    self.table.prepareCol( rowIdx, len( self._shownFields ) - 1 )';
	$m.__track_lines__[653] = 'widgets.table.py, line 653:\n    for field in self._shownFields:';
	$m.__track_lines__[654] = 'widgets.table.py, line 654:\n    if field in self._cellRender.keys():';
	$m.__track_lines__[655] = 'widgets.table.py, line 655:\n    lbl = self._cellRender[ field ].render( obj, field )';
	$m.__track_lines__[657] = 'widgets.table.py, line 657:\n    lbl = html5.Label(obj[field])';
	$m.__track_lines__[659] = 'widgets.table.py, line 659:\n    lbl = html5.Label("...")';
	$m.__track_lines__[661] = 'widgets.table.py, line 661:\n    self.table.setCell( rowIdx, cellIdx, lbl )';
	$m.__track_lines__[662] = 'widgets.table.py, line 662:\n    cellIdx += 1';
	$m.__track_lines__[664] = 'widgets.table.py, line 664:\n    def rebuildTable(self):';
	$m.__track_lines__[669] = 'widgets.table.py, line 669:\n    self.clear( keepModel=True )';
	$m.__track_lines__[670] = 'widgets.table.py, line 670:\n    self.table.prepareGrid( len(self._model), len(self._shownFields))';
	$m.__track_lines__[671] = 'widgets.table.py, line 671:\n    for obj in self._model:';
	$m.__track_lines__[672] = 'widgets.table.py, line 672:\n    self._renderObject( obj, tableIsPrepared=True )';
	$m.__track_lines__[674] = 'widgets.table.py, line 674:\n    def setShownFields(self,fields):';
	$m.__track_lines__[682] = 'widgets.table.py, line 682:\n    self._shownFields = fields';
	$m.__track_lines__[683] = 'widgets.table.py, line 683:\n    self.rebuildTable()';
	$m.__track_lines__[685] = 'widgets.table.py, line 685:\n    def onScroll(self, event):';
	$m.__track_lines__[689] = 'widgets.table.py, line 689:\n    if self._loadOnDisplay:';
	$m.__track_lines__[690] = 'widgets.table.py, line 690:\n    return';
	$m.__track_lines__[692] = 'widgets.table.py, line 692:\n    self.recalcHeight()';
	$m.__track_lines__[694] = 'widgets.table.py, line 694:\n    if ( ( self.element.scrollTop + self.element.clientHeight )';
	$m.__track_lines__[698] = 'widgets.table.py, line 698:\n    if self._dataProvider:';
	$m.__track_lines__[700] = 'widgets.table.py, line 700:\n    self._isAjaxLoading = True';
	$m.__track_lines__[701] = 'widgets.table.py, line 701:\n    if not "is_loading" in self.table["class"]:';
	$m.__track_lines__[702] = 'widgets.table.py, line 702:\n    self.table["class"].append("is_loading")';
	$m.__track_lines__[704] = 'widgets.table.py, line 704:\n    self._dataProvider.onNextBatchNeeded()';
	$m.__track_lines__[706] = 'widgets.table.py, line 706:\n    def onSelectionChanged( self, table, rows ):';
	$m.__track_lines__[710] = 'widgets.table.py, line 710:\n    vals = [ self._model[x] for x in (rows or []) ]';
	$m.__track_lines__[711] = 'widgets.table.py, line 711:\n    self.selectionChangedEvent.fire( self, vals )';
	$m.__track_lines__[713] = 'widgets.table.py, line 713:\n    def onSelectionActivated( self, table, rows ):';
	$m.__track_lines__[717] = 'widgets.table.py, line 717:\n    vals = [ self._model[x] for x in rows]';
	$m.__track_lines__[718] = 'widgets.table.py, line 718:\n    self.selectionActivatedEvent.fire( self, vals )';
	$m.__track_lines__[720] = 'widgets.table.py, line 720:\n    def onTableChanged( self, table, rowCount ):';
	$m.__track_lines__[724] = 'widgets.table.py, line 724:\n    self.tableChangedEvent.fire(self, rowCount)';
	$m.__track_lines__[726] = 'widgets.table.py, line 726:\n    def getCurrentSelection(self):';
	$m.__track_lines__[731] = 'widgets.table.py, line 731:\n    rows = self.table.getCurrentSelection()';
	$m.__track_lines__[732] = 'widgets.table.py, line 732:\n    if not self._model or not rows:';
	$m.__track_lines__[733] = 'widgets.table.py, line 733:\n    return( [] )';
	$m.__track_lines__[734] = 'widgets.table.py, line 734:\n    return( [ self._model[x] for x in rows ] )';
	$m.__track_lines__[736] = 'widgets.table.py, line 736:\n    def setCellRender(self, field, render):';
	$m.__track_lines__[742] = 'widgets.table.py, line 742:\n    if render is None:';
	$m.__track_lines__[743] = 'widgets.table.py, line 743:\n    if field in self._cellRender.keys():';
	$m.__track_lines__[744] = 'widgets.table.py, line 744:\n    del self._cellRender[ field ]';
	$m.__track_lines__[746] = 'widgets.table.py, line 746:\n    assert "render" in dir(render), "The render must provide a \'render\' method"';
	$m.__track_lines__[747] = 'widgets.table.py, line 747:\n    self._cellRender[ field ] = render';
	$m.__track_lines__[748] = 'widgets.table.py, line 748:\n    self.rebuildTable()';
	$m.__track_lines__[750] = 'widgets.table.py, line 750:\n    def setCellRenders(self, renders ):';
	$m.__track_lines__[755] = 'widgets.table.py, line 755:\n    assert isinstance( renders, dict )';
	$m.__track_lines__[756] = 'widgets.table.py, line 756:\n    for field, render in renders.items():';
	$m.__track_lines__[757] = 'widgets.table.py, line 757:\n    if render is None:';
	$m.__track_lines__[758] = 'widgets.table.py, line 758:\n    if field in self._cellRender.keys():';
	$m.__track_lines__[759] = 'widgets.table.py, line 759:\n    del self._cellRender[ field ]';
	$m.__track_lines__[761] = 'widgets.table.py, line 761:\n    assert "render" in dir(render), "The render must provide a \'render\' method"';
	$m.__track_lines__[762] = 'widgets.table.py, line 762:\n    self._cellRender[ field ] = render';
	$m.__track_lines__[763] = 'widgets.table.py, line 763:\n    self.rebuildTable()';
	$m.__track_lines__[765] = 'widgets.table.py, line 765:\n    def activateCurrentSelection(self):';
	$m.__track_lines__[770] = 'widgets.table.py, line 770:\n    selection = self.getCurrentSelection()';
	$m.__track_lines__[771] = 'widgets.table.py, line 771:\n    if len( selection )>0:';
	$m.__track_lines__[772] = 'widgets.table.py, line 772:\n    self.selectionActivatedEvent.fire( self, selection )';


	$pyjs['track']['module']='widgets.table';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=1;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['html5'] = $p['___import___']('html5', 'widgets');
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['utils'] = $p['___import___']('utils', 'widgets');
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=2;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['EventDispatcher'] = $p['___import___']('event.EventDispatcher', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=3;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$p['__import_all__']('html5.keycodes', 'widgets', $m, null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=4;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['DeferredCall'] = $p['___import___']('network.DeferredCall', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=6;
	$m['SelectTable'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.table';
		$pyjs['track']['lineno']=22;
		$method = $pyjs__bind_method2('__init__', function(checkboxes, indexes) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,2,arguments['length']-1));

				var kwargs = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				checkboxes = arguments[1];
				indexes = arguments[2];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,3,arguments['length']-1));

				var kwargs = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof indexes != 'undefined') {
					if (indexes !== null && typeof indexes['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = indexes;
						indexes = arguments[3];
					}
				} else 				if (typeof checkboxes != 'undefined') {
					if (checkboxes !== null && typeof checkboxes['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = checkboxes;
						checkboxes = arguments[3];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[3];
					}
				} else {
				}
			}
			if (typeof checkboxes == 'undefined') checkboxes=arguments['callee']['__args__'][3][1];
			if (typeof indexes == 'undefined') indexes=arguments['callee']['__args__'][4][1];
			var $add2,$add1;
			$pyjs['track']={'module':'widgets.table', 'lineno':22};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=22;
			$pyjs['track']['lineno']=23;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['SelectTable'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs['track']['lineno']=26;
			self['selectionChangedEvent'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['EventDispatcher']('selectionChanged');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			$pyjs['track']['lineno']=27;
			self['selectionActivatedEvent'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['EventDispatcher']('selectionActivated');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
			$pyjs['track']['lineno']=28;
			self['cursorMovedEvent'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['EventDispatcher']('cursorMoved');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
			$pyjs['track']['lineno']=29;
			self['tableChangedEvent'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['EventDispatcher']('tableChanged');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
			$pyjs['track']['lineno']=31;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['sinkEvent']('onDblClick', 'onMouseMove', 'onMouseDown', 'onMouseUp', 'onKeyDown', 'onKeyUp', 'onMouseOut', 'onChange');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
			$pyjs['track']['lineno']=35;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('tabindex', 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
			$pyjs['track']['lineno']=37;
			self['_selectedRows'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
			$pyjs['track']['lineno']=38;
			self['_currentRow'] = null;
			$pyjs['track']['lineno']=39;
			self['_isMouseDown'] = false;
			$pyjs['track']['lineno']=40;
			self['_isCtlPressed'] = false;
			$pyjs['track']['lineno']=41;
			self['_ctlStartRow'] = null;
			$pyjs['track']['lineno']=42;
			self['_selectionChangedListener'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
			$pyjs['track']['lineno']=43;
			self['_selectionActivatedListeners'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
			$pyjs['track']['lineno']=44;
			self['_cursorMovedListeners'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
			$pyjs['track']['lineno']=46;
			self['indexes'] = indexes;
			$pyjs['track']['lineno']=47;
			self['indexes_col'] = ($p['bool'](indexes)? (0) : ((typeof ($usub1=1)=='number'?
				-$usub1:
				$p['op_usub']($usub1))));
			$pyjs['track']['lineno']=49;
			self['_checkboxes'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
			$pyjs['track']['lineno']=50;
			self['checkboxes'] = checkboxes;
			$pyjs['track']['lineno']=51;
			self['checkboxes_col'] = ($p['bool'](checkboxes)? ($p['__op_add']($add1=$p['getattr'](self, 'indexes_col'),$add2=1)) : ((typeof ($usub2=1)=='number'?
				-$usub2:
				$p['op_usub']($usub2))));
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['checkboxes', false],['indexes', false]]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=53;
		$method = $pyjs__bind_method2('onAttach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'widgets.table', 'lineno':53};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=53;
			$pyjs['track']['lineno']=54;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['SelectTable'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})()['onAttach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
			$pyjs['track']['lineno']=55;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['focus']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onAttach'] = $method;
		$pyjs['track']['lineno']=57;
		$method = $pyjs__bind_method2('setHeader', function(headers) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				headers = arguments[1];
			}
			var head,$iter1_nextval,$iter1_type,tr,$iter1_iter,$iter1_array,th,$pyjs__trackstack_size_1,$iter1_idx;
			$pyjs['track']={'module':'widgets.table', 'lineno':57};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=57;
			$pyjs['track']['lineno']=64;
			tr = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Tr']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
			$pyjs['track']['lineno']=67;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'indexes'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})()) {
				$pyjs['track']['lineno']=68;
				th = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Th']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
				$pyjs['track']['lineno']=69;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return th['__setitem__']('class', 'index');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
				$pyjs['track']['lineno']=70;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return tr['appendChild'](th);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
			}
			$pyjs['track']['lineno']=73;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'checkboxes'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})()) {
				$pyjs['track']['lineno']=74;
				th = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Th']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
				$pyjs['track']['lineno']=75;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return th['__setitem__']('class', 'check');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
				$pyjs['track']['lineno']=76;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return tr['appendChild'](th);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
			}
			$pyjs['track']['lineno']=79;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter1_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return headers;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				head = $iter1_nextval['$nextval'];
				$pyjs['track']['lineno']=80;
				th = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Th']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
				$pyjs['track']['lineno']=81;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return th['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['TextNode'](head);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})();
				$pyjs['track']['lineno']=82;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return tr['appendChild'](th);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=84;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['head']['removeAllChildren']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
			$pyjs['track']['lineno']=85;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['head']['appendChild'](tr);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['headers']]);
		$cls_definition['setHeader'] = $method;
		$pyjs['track']['lineno']=87;
		$method = $pyjs__bind_method2('getTrByIndex', function(idx) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				idx = arguments[1];
			}
			var c,$iter2_nextval,$iter2_type,$iter2_iter,$iter2_idx,$pyjs__trackstack_size_1,$sub2,$sub1,$iter2_array;
			$pyjs['track']={'module':'widgets.table', 'lineno':87};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=87;
			$pyjs['track']['lineno']=94;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter2_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr']($p['getattr'](self, 'body'), '_children');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				c = $iter2_nextval['$nextval'];
				$pyjs['track']['lineno']=95;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['cmp'](idx, 0) < 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})()) {
					$pyjs['track']['lineno']=96;
					$pyjs['track']['lineno']=96;
					var $pyjs__ret = c;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=97;
				idx = $p['__op_sub']($sub1=idx,$sub2=c['__getitem__']('rowspan'));
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=99;
			$pyjs['track']['lineno']=99;
			var $pyjs__ret = null;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['idx']]);
		$cls_definition['getTrByIndex'] = $method;
		$pyjs['track']['lineno']=101;
		$method = $pyjs__bind_method2('getIndexByTr', function(tr) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				tr = arguments[1];
			}
			var c,$iter3_idx,idx,$iter3_array,$add3,$iter3_iter,$add4,$iter3_type,$pyjs__trackstack_size_1,$iter3_nextval;
			$pyjs['track']={'module':'widgets.table', 'lineno':101};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=101;
			$pyjs['track']['lineno']=109;
			idx = 0;
			$pyjs['track']['lineno']=110;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter3_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr']($p['getattr'](self, 'body'), '_children');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})();
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				c = $iter3_nextval['$nextval'];
				$pyjs['track']['lineno']=111;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq']($p['getattr'](c, 'element'), tr));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})()) {
					$pyjs['track']['lineno']=112;
					$pyjs['track']['lineno']=112;
					var $pyjs__ret = idx;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=113;
				idx = $p['__op_add']($add3=idx,$add4=c['__getitem__']('rowspan'));
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=114;
			$pyjs['track']['lineno']=114;
			var $pyjs__ret = idx;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['tr']]);
		$cls_definition['getIndexByTr'] = $method;
		$pyjs['track']['lineno']=116;
		$method = $pyjs__bind_method2('_rowForEvent', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $pyjs_try_err,tr,tc;
			$pyjs['track']={'module':'widgets.table', 'lineno':116};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=116;
			$pyjs['track']['lineno']=120;
			var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
			try {
				try {
					$pyjs['in_try_except'] += 1;
					$pyjs['track']['lineno']=122;
					tc = $p['getattr'](event, 'srcElement');
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
				$pyjs['track']['module']='widgets.table';
				if (true) {
					$pyjs['track']['lineno']=125;
					tc = $p['getattr'](event, 'target');
				}
			}
			$pyjs['track']['lineno']=127;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((tc === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})()) {
				$pyjs['track']['lineno']=128;
				$pyjs['track']['lineno']=128;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=130;
			tr = $p['getattr'](tc, 'parentElement');
			$pyjs['track']['lineno']=132;
			while ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['getattr'](tr, 'parentElement') !== null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})()) {
				$pyjs['track']['lineno']=133;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq']($p['getattr'](tr, 'parentElement'), $p['getattr']($p['getattr'](self, 'body'), 'element')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})()) {
					$pyjs['track']['lineno']=134;
					$pyjs['track']['lineno']=134;
					var $pyjs__ret = tr;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=135;
				tr = $p['getattr'](tr, 'parentElement');
			}
			$pyjs['track']['lineno']=137;
			$pyjs['track']['lineno']=137;
			var $pyjs__ret = null;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['_rowForEvent'] = $method;
		$pyjs['track']['lineno']=139;
		$method = $pyjs__bind_method2('onChange', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $and1,tr,$and2,row;
			$pyjs['track']={'module':'widgets.table', 'lineno':139};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=139;
			$pyjs['track']['lineno']=140;
			tr = (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['_rowForEvent'](event);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})();
			$pyjs['track']['lineno']=141;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((tr === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})()) {
				$pyjs['track']['lineno']=142;
				$pyjs['track']['lineno']=142;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=144;
			row = (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['getIndexByTr'](tr);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})();
			$pyjs['track']['lineno']=146;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and1=$p['getattr'](self, 'checkboxes'))?(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['utils']['doesEventHitWidgetOrChildren'](event, $p['getattr'](self, '_checkboxes')['__getitem__'](row));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})():$and1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})()) {
				$pyjs['track']['lineno']=147;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, '_checkboxes')['__getitem__'](row)['__setitem__']('checked', $p['getattr'](self, '_selectedRows')['__contains__'](row));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onChange'] = $method;
		$pyjs['track']['lineno']=149;
		$method = $pyjs__bind_method2('onMouseDown', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var tr,$and3,$and4,row;
			$pyjs['track']={'module':'widgets.table', 'lineno':149};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=149;
			$pyjs['track']['lineno']=150;
			tr = (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['_rowForEvent'](event);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})();
			$pyjs['track']['lineno']=151;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((tr === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})()) {
				$pyjs['track']['lineno']=152;
				$pyjs['track']['lineno']=152;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=154;
			row = (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['getIndexByTr'](tr);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})();
			$pyjs['track']['lineno']=156;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, '_isCtlPressed'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})()) {
				$pyjs['track']['lineno']=157;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, '_selectedRows')['__contains__'](row));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})()) {
					$pyjs['track']['lineno']=158;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['removeSelectedRow'](row);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=160;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['addSelectedRow'](row);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})();
				}
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and3=$p['getattr'](self, 'checkboxes'))?(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['utils']['doesEventHitWidgetOrChildren'](event, $p['getattr'](self, '_checkboxes')['__getitem__'](row));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})():$and3));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})()) {
				$pyjs['track']['lineno']=163;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, '_selectedRows')['__contains__'](row));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})()) {
					$pyjs['track']['lineno']=164;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['removeSelectedRow'](row);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=166;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['addSelectedRow'](row);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})();
				}
			}
			else {
				$pyjs['track']['lineno']=169;
				self['_isMouseDown'] = true;
				$pyjs['track']['lineno']=171;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, 'checkboxes'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})()) {
					$pyjs['track']['lineno']=172;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['getattr'](self, '_selectedRows')['__contains__'](row));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})()) {
						$pyjs['track']['lineno']=173;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return self['removeSelectedRow'](row);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})();
					}
					else {
						$pyjs['track']['lineno']=175;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return self['addSelectedRow'](row);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})();
					}
				}
				$pyjs['track']['lineno']=177;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call(self, 'setCursorRow', null, null, [{'removeExistingSelection':!$p['bool']($p['getattr'](self, 'checkboxes'))}, (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['getIndexByTr'](tr);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})();
			}
			$pyjs['track']['lineno']=179;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return event['preventDefault']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})();
			$pyjs['track']['lineno']=180;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['focus']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onMouseDown'] = $method;
		$pyjs['track']['lineno']=182;
		$method = $pyjs__bind_method2('onMouseOut', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'widgets.table', 'lineno':182};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=182;
			$pyjs['track']['lineno']=183;
			self['_isMouseDown'] = false;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onMouseOut'] = $method;
		$pyjs['track']['lineno']=185;
		$method = $pyjs__bind_method2('onMouseUp', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'widgets.table', 'lineno':185};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=185;
			$pyjs['track']['lineno']=186;
			self['_isMouseDown'] = false;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onMouseUp'] = $method;
		$pyjs['track']['lineno']=188;
		$method = $pyjs__bind_method2('onMouseMove', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var tr;
			$pyjs['track']={'module':'widgets.table', 'lineno':188};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=188;
			$pyjs['track']['lineno']=189;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, '_isMouseDown'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})()) {
				$pyjs['track']['lineno']=190;
				tr = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['_rowForEvent'](event);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})();
				$pyjs['track']['lineno']=191;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((tr === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})()) {
					$pyjs['track']['lineno']=192;
					$pyjs['track']['lineno']=192;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=193;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['addSelectedRow']((function(){try{try{$pyjs['in_try_except'] += 1;
				return self['getIndexByTr'](tr);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})();
				$pyjs['track']['lineno']=194;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return event['preventDefault']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onMouseMove'] = $method;
		$pyjs['track']['lineno']=196;
		$method = $pyjs__bind_method2('onKeyDown', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $or1,$sub4,$or2,$and5,$and6,$sub6,$add6,$add7,$add12,$add5,$sub3,$add10,$add8,$add9,$sub5,$add11;
			$pyjs['track']={'module':'widgets.table', 'lineno':196};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=196;
			$pyjs['track']['lineno']=197;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (typeof isArrowDown == "undefined"?$m['isArrowDown']:isArrowDown)($p['getattr'](event, 'keyCode'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})()) {
				$pyjs['track']['lineno']=199;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['getattr'](self, '_currentRow') === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})()) {
					$pyjs['track']['lineno']=200;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['setCursorRow'](0);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=203;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['getattr'](self, '_isCtlPressed'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})()) {
						$pyjs['track']['lineno']=205;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](($p['cmp']($p['getattr'](self, '_ctlStartRow'), $p['getattr'](self, '_currentRow')) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})()) {
							$pyjs['track']['lineno']=206;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return self['removeSelectedRow']($p['getattr'](self, '_currentRow'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})();
						}
						else {
							$pyjs['track']['lineno']=208;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return self['addSelectedRow']($p['getattr'](self, '_currentRow'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})();
							$pyjs['track']['lineno']=210;
							if ((function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['bool'](($p['cmp']($p['__op_add']($add5=$p['getattr'](self, '_currentRow'),$add6=1), (function(){try{try{$pyjs['in_try_except'] += 1;
							return self['getRowCount']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})()) == -1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})()) {
								$pyjs['track']['lineno']=211;
								(function(){try{try{$pyjs['in_try_except'] += 1;
								return self['addSelectedRow']($p['__op_add']($add7=$p['getattr'](self, '_currentRow'),$add8=1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})();
							}
						}
					}
					$pyjs['track']['lineno']=213;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['cmp']($p['__op_add']($add9=$p['getattr'](self, '_currentRow'),$add10=1), (function(){try{try{$pyjs['in_try_except'] += 1;
					return self['getRowCount']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})()) == -1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
}})()) {
						$pyjs['track']['lineno']=214;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $pyjs_kwargs_call(self, 'setCursorRow', null, null, [{'removeExistingSelection':!$p['bool']($p['getattr'](self, '_isCtlPressed'))}, $p['__op_add']($add11=$p['getattr'](self, '_currentRow'),$add12=1)]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})();
					}
				}
				$pyjs['track']['lineno']=216;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return event['preventDefault']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})();
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (typeof isArrowUp == "undefined"?$m['isArrowUp']:isArrowUp)($p['getattr'](event, 'keyCode'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_88_err){if (!$p['isinstance']($pyjs_dbg_88_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_88_err);}throw $pyjs_dbg_88_err;
}})()) {
				$pyjs['track']['lineno']=220;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['getattr'](self, '_currentRow') === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_89_err){if (!$p['isinstance']($pyjs_dbg_89_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_89_err);}throw $pyjs_dbg_89_err;
}})()) {
					$pyjs['track']['lineno']=221;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['setCursorRow'](0);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_90_err){if (!$p['isinstance']($pyjs_dbg_90_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_90_err);}throw $pyjs_dbg_90_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=224;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['getattr'](self, '_isCtlPressed'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_91_err){if (!$p['isinstance']($pyjs_dbg_91_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_91_err);}throw $pyjs_dbg_91_err;
}})()) {
						$pyjs['track']['lineno']=225;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](($p['cmp']($p['getattr'](self, '_ctlStartRow'), $p['getattr'](self, '_currentRow')) == -1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_92_err){if (!$p['isinstance']($pyjs_dbg_92_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_92_err);}throw $pyjs_dbg_92_err;
}})()) {
							$pyjs['track']['lineno']=226;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return self['removeSelectedRow']($p['getattr'](self, '_currentRow'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_93_err){if (!$p['isinstance']($pyjs_dbg_93_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_93_err);}throw $pyjs_dbg_93_err;
}})();
						}
						else {
							$pyjs['track']['lineno']=228;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return self['addSelectedRow']($p['getattr'](self, '_currentRow'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_94_err){if (!$p['isinstance']($pyjs_dbg_94_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_94_err);}throw $pyjs_dbg_94_err;
}})();
							$pyjs['track']['lineno']=230;
							if ((function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['bool'](($p['cmp']($p['getattr'](self, '_currentRow'), 0) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_95_err){if (!$p['isinstance']($pyjs_dbg_95_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_95_err);}throw $pyjs_dbg_95_err;
}})()) {
								$pyjs['track']['lineno']=231;
								(function(){try{try{$pyjs['in_try_except'] += 1;
								return self['addSelectedRow']($p['__op_sub']($sub3=$p['getattr'](self, '_currentRow'),$sub4=1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_96_err){if (!$p['isinstance']($pyjs_dbg_96_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_96_err);}throw $pyjs_dbg_96_err;
}})();
							}
						}
					}
					$pyjs['track']['lineno']=233;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['cmp']($p['getattr'](self, '_currentRow'), 0) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_97_err){if (!$p['isinstance']($pyjs_dbg_97_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_97_err);}throw $pyjs_dbg_97_err;
}})()) {
						$pyjs['track']['lineno']=234;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $pyjs_kwargs_call(self, 'setCursorRow', null, null, [{'removeExistingSelection':!$p['bool']($p['getattr'](self, '_isCtlPressed'))}, $p['__op_sub']($sub5=$p['getattr'](self, '_currentRow'),$sub6=1)]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_98_err){if (!$p['isinstance']($pyjs_dbg_98_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_98_err);}throw $pyjs_dbg_98_err;
}})();
					}
				}
				$pyjs['track']['lineno']=237;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return event['preventDefault']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_99_err){if (!$p['isinstance']($pyjs_dbg_99_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_99_err);}throw $pyjs_dbg_99_err;
}})();
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (typeof isReturn == "undefined"?$m['isReturn']:isReturn)($p['getattr'](event, 'keyCode'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_100_err){if (!$p['isinstance']($pyjs_dbg_100_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_100_err);}throw $pyjs_dbg_100_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_101_err){if (!$p['isinstance']($pyjs_dbg_101_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_101_err);}throw $pyjs_dbg_101_err;
}})()) {
				$pyjs['track']['lineno']=241;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['len']($p['getattr'](self, '_selectedRows'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_102_err){if (!$p['isinstance']($pyjs_dbg_102_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_102_err);}throw $pyjs_dbg_102_err;
}})(), 0) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_103_err){if (!$p['isinstance']($pyjs_dbg_103_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_103_err);}throw $pyjs_dbg_103_err;
}})()) {
					$pyjs['track']['lineno']=242;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['selectionActivatedEvent']['fire'](self, $p['getattr'](self, '_selectedRows'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_104_err){if (!$p['isinstance']($pyjs_dbg_104_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_104_err);}throw $pyjs_dbg_104_err;
}})();
					$pyjs['track']['lineno']=243;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return event['preventDefault']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_105_err){if (!$p['isinstance']($pyjs_dbg_105_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_105_err);}throw $pyjs_dbg_105_err;
}})();
					$pyjs['track']['lineno']=244;
					$pyjs['track']['lineno']=244;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=246;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['getattr'](self, '_currentRow') !== null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_106_err){if (!$p['isinstance']($pyjs_dbg_106_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_106_err);}throw $pyjs_dbg_106_err;
}})()) {
					$pyjs['track']['lineno']=247;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['selectionActivatedEvent']['fire'](self, (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['list']([$p['getattr'](self, '_currentRow')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_107_err){if (!$p['isinstance']($pyjs_dbg_107_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_107_err);}throw $pyjs_dbg_107_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_108_err){if (!$p['isinstance']($pyjs_dbg_108_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_108_err);}throw $pyjs_dbg_108_err;
}})();
					$pyjs['track']['lineno']=248;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return event['preventDefault']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_109_err){if (!$p['isinstance']($pyjs_dbg_109_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_109_err);}throw $pyjs_dbg_109_err;
}})();
					$pyjs['track']['lineno']=249;
					$pyjs['track']['lineno']=249;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (typeof isSingleSelectionKey == "undefined"?$m['isSingleSelectionKey']:isSingleSelectionKey)($p['getattr'](event, 'keyCode'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_110_err){if (!$p['isinstance']($pyjs_dbg_110_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_110_err);}throw $pyjs_dbg_110_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_111_err){if (!$p['isinstance']($pyjs_dbg_111_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_111_err);}throw $pyjs_dbg_111_err;
}})()) {
				$pyjs['track']['lineno']=252;
				self['_isCtlPressed'] = true;
				$pyjs['track']['lineno']=253;
				self['_ctlStartRow'] = ($p['bool']($or1=$p['getattr'](self, '_currentRow'))?$or1:0);
				$pyjs['track']['lineno']=255;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($and5=($p['getattr'](self, '_currentRow') !== null))?!$p['bool']($p['getattr'](self, '_selectedRows')['__contains__']($p['getattr'](self, '_currentRow'))):$and5));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_112_err){if (!$p['isinstance']($pyjs_dbg_112_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_112_err);}throw $pyjs_dbg_112_err;
}})()) {
					$pyjs['track']['lineno']=256;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['addSelectedRow']($p['getattr'](self, '_currentRow'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_113_err){if (!$p['isinstance']($pyjs_dbg_113_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_113_err);}throw $pyjs_dbg_113_err;
}})();
					$pyjs['track']['lineno']=257;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $pyjs_kwargs_call(self, 'setCursorRow', null, null, [{'removeExistingSelection':false}, null]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_114_err){if (!$p['isinstance']($pyjs_dbg_114_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_114_err);}throw $pyjs_dbg_114_err;
}})();
				}
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onKeyDown'] = $method;
		$pyjs['track']['lineno']=259;
		$method = $pyjs__bind_method2('onKeyUp', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'widgets.table', 'lineno':259};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=259;
			$pyjs['track']['lineno']=260;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (typeof isSingleSelectionKey == "undefined"?$m['isSingleSelectionKey']:isSingleSelectionKey)($p['getattr'](event, 'keyCode'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_115_err){if (!$p['isinstance']($pyjs_dbg_115_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_115_err);}throw $pyjs_dbg_115_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_116_err){if (!$p['isinstance']($pyjs_dbg_116_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_116_err);}throw $pyjs_dbg_116_err;
}})()) {
				$pyjs['track']['lineno']=261;
				self['_isCtlPressed'] = false;
				$pyjs['track']['lineno']=262;
				self['_ctlStartRow'] = null;
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onKeyUp'] = $method;
		$pyjs['track']['lineno']=264;
		$method = $pyjs__bind_method2('onDblClick', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'widgets.table', 'lineno':264};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=264;
			$pyjs['track']['lineno']=265;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['getattr'](self, '_currentRow') !== null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_117_err){if (!$p['isinstance']($pyjs_dbg_117_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_117_err);}throw $pyjs_dbg_117_err;
}})()) {
				$pyjs['track']['lineno']=266;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['selectionActivatedEvent']['fire'](self, (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([$p['getattr'](self, '_currentRow')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_118_err){if (!$p['isinstance']($pyjs_dbg_118_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_118_err);}throw $pyjs_dbg_118_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_119_err){if (!$p['isinstance']($pyjs_dbg_119_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_119_err);}throw $pyjs_dbg_119_err;
}})();
			}
			$pyjs['track']['lineno']=267;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return event['preventDefault']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_120_err){if (!$p['isinstance']($pyjs_dbg_120_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_120_err);}throw $pyjs_dbg_120_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDblClick'] = $method;
		$pyjs['track']['lineno']=269;
		$method = $pyjs__bind_method2('addSelectedRow', function(row) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
			}
			var tr;
			$pyjs['track']={'module':'widgets.table', 'lineno':269};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=269;
			$pyjs['track']['lineno']=273;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, '_selectedRows')['__contains__'](row));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_121_err){if (!$p['isinstance']($pyjs_dbg_121_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_121_err);}throw $pyjs_dbg_121_err;
}})()) {
				$pyjs['track']['lineno']=274;
				$pyjs['track']['lineno']=274;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=276;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['_selectedRows']['append'](row);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_122_err){if (!$p['isinstance']($pyjs_dbg_122_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_122_err);}throw $pyjs_dbg_122_err;
}})();
			$pyjs['track']['lineno']=278;
			tr = (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['getTrByIndex'](row);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_123_err){if (!$p['isinstance']($pyjs_dbg_123_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_123_err);}throw $pyjs_dbg_123_err;
}})();
			$pyjs['track']['lineno']=279;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return tr['__getitem__']('class')['append']('is_selected');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_124_err){if (!$p['isinstance']($pyjs_dbg_124_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_124_err);}throw $pyjs_dbg_124_err;
}})();
			$pyjs['track']['lineno']=281;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'checkboxes'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_125_err){if (!$p['isinstance']($pyjs_dbg_125_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_125_err);}throw $pyjs_dbg_125_err;
}})()) {
				$pyjs['track']['lineno']=282;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, '_checkboxes')['__getitem__'](row)['__setitem__']('checked', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_126_err){if (!$p['isinstance']($pyjs_dbg_126_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_126_err);}throw $pyjs_dbg_126_err;
}})();
			}
			$pyjs['track']['lineno']=284;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['selectionChangedEvent']['fire'](self, (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['getCurrentSelection']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_127_err){if (!$p['isinstance']($pyjs_dbg_127_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_127_err);}throw $pyjs_dbg_127_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_128_err){if (!$p['isinstance']($pyjs_dbg_128_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_128_err);}throw $pyjs_dbg_128_err;
}})();
			$pyjs['track']['lineno']=286;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['printFunc']([(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('Currently selected rows: %s', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['str']($p['getattr'](self, '_selectedRows'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_129_err){if (!$p['isinstance']($pyjs_dbg_129_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_129_err);}throw $pyjs_dbg_129_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_130_err){if (!$p['isinstance']($pyjs_dbg_130_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_130_err);}throw $pyjs_dbg_130_err;
}})()], 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_131_err){if (!$p['isinstance']($pyjs_dbg_131_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_131_err);}throw $pyjs_dbg_131_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['row']]);
		$cls_definition['addSelectedRow'] = $method;
		$pyjs['track']['lineno']=288;
		$method = $pyjs__bind_method2('removeSelectedRow', function(row) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
			}
			var tr;
			$pyjs['track']={'module':'widgets.table', 'lineno':288};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=288;
			$pyjs['track']['lineno']=294;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool']($p['getattr'](self, '_selectedRows')['__contains__'](row)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_132_err){if (!$p['isinstance']($pyjs_dbg_132_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_132_err);}throw $pyjs_dbg_132_err;
}})()) {
				$pyjs['track']['lineno']=295;
				$pyjs['track']['lineno']=295;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=297;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['_selectedRows']['remove'](row);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_133_err){if (!$p['isinstance']($pyjs_dbg_133_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_133_err);}throw $pyjs_dbg_133_err;
}})();
			$pyjs['track']['lineno']=299;
			tr = (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['getTrByIndex'](row);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_134_err){if (!$p['isinstance']($pyjs_dbg_134_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_134_err);}throw $pyjs_dbg_134_err;
}})();
			$pyjs['track']['lineno']=300;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return tr['__getitem__']('class')['remove']('is_selected');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_135_err){if (!$p['isinstance']($pyjs_dbg_135_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_135_err);}throw $pyjs_dbg_135_err;
}})();
			$pyjs['track']['lineno']=302;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'checkboxes'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_136_err){if (!$p['isinstance']($pyjs_dbg_136_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_136_err);}throw $pyjs_dbg_136_err;
}})()) {
				$pyjs['track']['lineno']=303;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, '_checkboxes')['__getitem__'](row)['__setitem__']('checked', false);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_137_err){if (!$p['isinstance']($pyjs_dbg_137_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_137_err);}throw $pyjs_dbg_137_err;
}})();
			}
			$pyjs['track']['lineno']=305;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['selectionChangedEvent']['fire'](self, (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['getCurrentSelection']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_138_err){if (!$p['isinstance']($pyjs_dbg_138_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_138_err);}throw $pyjs_dbg_138_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_139_err){if (!$p['isinstance']($pyjs_dbg_139_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_139_err);}throw $pyjs_dbg_139_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['row']]);
		$cls_definition['removeSelectedRow'] = $method;
		$pyjs['track']['lineno']=307;
		$method = $pyjs__bind_method2('selectRow', function(newRow) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				newRow = arguments[1];
			}
			var $iter4_nextval,tr,$iter4_idx,$iter4_type,$pyjs__trackstack_size_1,$iter4_array,$iter4_iter,row;
			$pyjs['track']={'module':'widgets.table', 'lineno':307};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=307;
			$pyjs['track']['lineno']=314;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['setCursorRow'](newRow);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_140_err){if (!$p['isinstance']($pyjs_dbg_140_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_140_err);}throw $pyjs_dbg_140_err;
}})();
			$pyjs['track']['lineno']=316;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter4_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__getslice']($p['getattr'](self, '_selectedRows'), 0, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_141_err){if (!$p['isinstance']($pyjs_dbg_141_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_141_err);}throw $pyjs_dbg_141_err;
}})();
			$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
			while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
				row = $iter4_nextval['$nextval'];
				$pyjs['track']['lineno']=317;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['op_eq'](row, newRow));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_142_err){if (!$p['isinstance']($pyjs_dbg_142_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_142_err);}throw $pyjs_dbg_142_err;
}})()) {
					$pyjs['track']['lineno']=318;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['removeSelectedRow'](row);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_143_err){if (!$p['isinstance']($pyjs_dbg_143_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_143_err);}throw $pyjs_dbg_143_err;
}})();
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=320;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool']($p['getattr'](self, '_selectedRows')['__contains__'](newRow)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_144_err){if (!$p['isinstance']($pyjs_dbg_144_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_144_err);}throw $pyjs_dbg_144_err;
}})()) {
				$pyjs['track']['lineno']=321;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['_selectedRows']['append'](newRow);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_145_err){if (!$p['isinstance']($pyjs_dbg_145_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_145_err);}throw $pyjs_dbg_145_err;
}})();
				$pyjs['track']['lineno']=322;
				tr = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['getTrByIndex'](newRow);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_146_err){if (!$p['isinstance']($pyjs_dbg_146_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_146_err);}throw $pyjs_dbg_146_err;
}})();
				$pyjs['track']['lineno']=323;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return tr['__getitem__']('class')['append']('is_selected');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_147_err){if (!$p['isinstance']($pyjs_dbg_147_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_147_err);}throw $pyjs_dbg_147_err;
}})();
			}
			$pyjs['track']['lineno']=325;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['selectionChangedEvent']['fire'](self, (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['getCurrentSelection']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_148_err){if (!$p['isinstance']($pyjs_dbg_148_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_148_err);}throw $pyjs_dbg_148_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_149_err){if (!$p['isinstance']($pyjs_dbg_149_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_149_err);}throw $pyjs_dbg_149_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['newRow']]);
		$cls_definition['selectRow'] = $method;
		$pyjs['track']['lineno']=327;
		$method = $pyjs__bind_method2('setCursorRow', function(row, removeExistingSelection) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				removeExistingSelection = arguments[2];
			}
			if (typeof removeExistingSelection == 'undefined') removeExistingSelection=arguments['callee']['__args__'][4][1];
			var $iter5_nextval,$iter5_array,$pyjs__trackstack_size_1,$iter5_iter,$iter5_idx,$iter5_type;
			$pyjs['track']={'module':'widgets.table', 'lineno':327};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=327;
			$pyjs['track']['lineno']=332;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['getattr'](self, '_currentRow') !== null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_150_err){if (!$p['isinstance']($pyjs_dbg_150_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_150_err);}throw $pyjs_dbg_150_err;
}})()) {
				$pyjs['track']['lineno']=333;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['getTrByIndex']($p['getattr'](self, '_currentRow'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_151_err){if (!$p['isinstance']($pyjs_dbg_151_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_151_err);}throw $pyjs_dbg_151_err;
}})()['__getitem__']('class')['remove']('is_focused');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_152_err){if (!$p['isinstance']($pyjs_dbg_152_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_152_err);}throw $pyjs_dbg_152_err;
}})();
			}
			$pyjs['track']['lineno']=335;
			self['_currentRow'] = row;
			$pyjs['track']['lineno']=336;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['getattr'](self, '_currentRow') !== null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_153_err){if (!$p['isinstance']($pyjs_dbg_153_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_153_err);}throw $pyjs_dbg_153_err;
}})()) {
				$pyjs['track']['lineno']=337;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['getTrByIndex']($p['getattr'](self, '_currentRow'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_154_err){if (!$p['isinstance']($pyjs_dbg_154_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_154_err);}throw $pyjs_dbg_154_err;
}})()['__getitem__']('class')['append']('is_focused');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_155_err){if (!$p['isinstance']($pyjs_dbg_155_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_155_err);}throw $pyjs_dbg_155_err;
}})();
				$pyjs['track']['lineno']=338;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['cursorMovedEvent']['fire'](self, row);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_156_err){if (!$p['isinstance']($pyjs_dbg_156_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_156_err);}throw $pyjs_dbg_156_err;
}})();
			}
			$pyjs['track']['lineno']=340;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](removeExistingSelection);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_157_err){if (!$p['isinstance']($pyjs_dbg_157_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_157_err);}throw $pyjs_dbg_157_err;
}})()) {
				$pyjs['track']['lineno']=341;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter5_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['__getslice']($p['getattr'](self, '_selectedRows'), 0, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_158_err){if (!$p['isinstance']($pyjs_dbg_158_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_158_err);}throw $pyjs_dbg_158_err;
}})();
				$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
				while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
					row = $iter5_nextval['$nextval'];
					$pyjs['track']['lineno']=342;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['removeSelectedRow'](row);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_159_err){if (!$p['isinstance']($pyjs_dbg_159_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_159_err);}throw $pyjs_dbg_159_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='widgets.table';
				$pyjs['track']['lineno']=343;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['selectionChangedEvent']['fire'](self, (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['getCurrentSelection']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_160_err){if (!$p['isinstance']($pyjs_dbg_160_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_160_err);}throw $pyjs_dbg_160_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_161_err){if (!$p['isinstance']($pyjs_dbg_161_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_161_err);}throw $pyjs_dbg_161_err;
}})();
			}
			$pyjs['track']['lineno']=345;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['DeferredCall']($p['getattr'](self, 'focusRow'), row);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_162_err){if (!$p['isinstance']($pyjs_dbg_162_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_162_err);}throw $pyjs_dbg_162_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['row'],['removeExistingSelection', true]]);
		$cls_definition['setCursorRow'] = $method;
		$pyjs['track']['lineno']=347;
		$method = $pyjs__bind_method2('focusRow', function(row) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
			}
			var tr;
			$pyjs['track']={'module':'widgets.table', 'lineno':347};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=347;
			$pyjs['track']['lineno']=348;
			tr = (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['getTrByIndex'](row);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_163_err){if (!$p['isinstance']($pyjs_dbg_163_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_163_err);}throw $pyjs_dbg_163_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['row']]);
		$cls_definition['focusRow'] = $method;
		$pyjs['track']['lineno']=351;
		$method = $pyjs__bind_method2('getCurrentSelection', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'widgets.table', 'lineno':351};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=351;
			$pyjs['track']['lineno']=356;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, '_selectedRows'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_164_err){if (!$p['isinstance']($pyjs_dbg_164_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_164_err);}throw $pyjs_dbg_164_err;
}})()) {
				$pyjs['track']['lineno']=357;
				$pyjs['track']['lineno']=357;
				var $pyjs__ret = $p['__getslice']($p['getattr'](self, '_selectedRows'), 0, null);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['getattr'](self, '_currentRow') !== null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_165_err){if (!$p['isinstance']($pyjs_dbg_165_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_165_err);}throw $pyjs_dbg_165_err;
}})()) {
				$pyjs['track']['lineno']=359;
				$pyjs['track']['lineno']=359;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([$p['getattr'](self, '_currentRow')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_166_err){if (!$p['isinstance']($pyjs_dbg_166_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_166_err);}throw $pyjs_dbg_166_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=361;
			$pyjs['track']['lineno']=361;
			var $pyjs__ret = null;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getCurrentSelection'] = $method;
		$pyjs['track']['lineno']=363;
		$method = $pyjs__bind_method2('clear', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'widgets.table', 'lineno':363};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=363;
			$pyjs['track']['lineno']=367;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['SelectTable'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_167_err){if (!$p['isinstance']($pyjs_dbg_167_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_167_err);}throw $pyjs_dbg_167_err;
}})()['clear']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_168_err){if (!$p['isinstance']($pyjs_dbg_168_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_168_err);}throw $pyjs_dbg_168_err;
}})();
			$pyjs['track']['lineno']=368;
			self['_currentRow'] = null;
			$pyjs['track']['lineno']=369;
			self['_selectedRows'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_169_err){if (!$p['isinstance']($pyjs_dbg_169_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_169_err);}throw $pyjs_dbg_169_err;
}})();
			$pyjs['track']['lineno']=371;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['selectionChangedEvent']['fire'](self, (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['getCurrentSelection']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_170_err){if (!$p['isinstance']($pyjs_dbg_170_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_170_err);}throw $pyjs_dbg_170_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_171_err){if (!$p['isinstance']($pyjs_dbg_171_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_171_err);}throw $pyjs_dbg_171_err;
}})();
			$pyjs['track']['lineno']=372;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['tableChangedEvent']['fire'](self, (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['getRowCount']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_172_err){if (!$p['isinstance']($pyjs_dbg_172_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_172_err);}throw $pyjs_dbg_172_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_173_err){if (!$p['isinstance']($pyjs_dbg_173_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_173_err);}throw $pyjs_dbg_173_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clear'] = $method;
		$pyjs['track']['lineno']=374;
		$method = $pyjs__bind_method2('removeRow', function(row) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
			}

			$pyjs['track']={'module':'widgets.table', 'lineno':374};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=374;
			$pyjs['track']['lineno']=378;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, '_selectedRows')['__contains__'](row));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_174_err){if (!$p['isinstance']($pyjs_dbg_174_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_174_err);}throw $pyjs_dbg_174_err;
}})()) {
				$pyjs['track']['lineno']=379;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['_selectedRows']['remove'](row);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_175_err){if (!$p['isinstance']($pyjs_dbg_175_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_175_err);}throw $pyjs_dbg_175_err;
}})();
				$pyjs['track']['lineno']=380;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['selectionChangedEvent']['fire'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_176_err){if (!$p['isinstance']($pyjs_dbg_176_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_176_err);}throw $pyjs_dbg_176_err;
}})();
			}
			$pyjs['track']['lineno']=382;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq']($p['getattr'](self, '_currentRow'), row));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_177_err){if (!$p['isinstance']($pyjs_dbg_177_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_177_err);}throw $pyjs_dbg_177_err;
}})()) {
				$pyjs['track']['lineno']=383;
				self['_currentRow'] = null;
				$pyjs['track']['lineno']=384;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['cursorMovedEvent']['fire'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_178_err){if (!$p['isinstance']($pyjs_dbg_178_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_178_err);}throw $pyjs_dbg_178_err;
}})();
			}
			$pyjs['track']['lineno']=386;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['tableChangedEvent']['fire'](self, (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['getRowCount']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_179_err){if (!$p['isinstance']($pyjs_dbg_179_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_179_err);}throw $pyjs_dbg_179_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_180_err){if (!$p['isinstance']($pyjs_dbg_180_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_180_err);}throw $pyjs_dbg_180_err;
}})();
			$pyjs['track']['lineno']=387;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['SelectTable'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_181_err){if (!$p['isinstance']($pyjs_dbg_181_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_181_err);}throw $pyjs_dbg_181_err;
}})()['removeRow'](row);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_182_err){if (!$p['isinstance']($pyjs_dbg_182_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_182_err);}throw $pyjs_dbg_182_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['row']]);
		$cls_definition['removeRow'] = $method;
		$pyjs['track']['lineno']=389;
		$method = $pyjs__bind_method2('_extraCols', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add14,$add13;
			$pyjs['track']={'module':'widgets.table', 'lineno':389};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=389;
			$pyjs['track']['lineno']=390;
			$pyjs['track']['lineno']=390;
			var $pyjs__ret = $p['__op_add']($add13=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['float_int']($p['getattr'](self, 'checkboxes'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_183_err){if (!$p['isinstance']($pyjs_dbg_183_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_183_err);}throw $pyjs_dbg_183_err;
}})(),$add14=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['float_int']($p['getattr'](self, 'indexes'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_184_err){if (!$p['isinstance']($pyjs_dbg_184_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_184_err);}throw $pyjs_dbg_184_err;
}})());
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_extraCols'] = $method;
		$pyjs['track']['lineno']=392;
		$method = $pyjs__bind_method2('prepareCol', function(row, col) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				col = arguments[2];
			}
			var checkbox,$add18,lbl,$add15,$add16,$sub8,$sub7,$add17;
			$pyjs['track']={'module':'widgets.table', 'lineno':392};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=392;
			$pyjs['track']['lineno']=397;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['SelectTable'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_185_err){if (!$p['isinstance']($pyjs_dbg_185_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_185_err);}throw $pyjs_dbg_185_err;
}})()['prepareCol'](row, $p['__op_sub']($sub7=$p['__op_add']($add15=col,$add16=(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['_extraCols']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_186_err){if (!$p['isinstance']($pyjs_dbg_186_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_186_err);}throw $pyjs_dbg_186_err;
}})()),$sub8=1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_187_err){if (!$p['isinstance']($pyjs_dbg_187_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_187_err);}throw $pyjs_dbg_187_err;
}})();
			$pyjs['track']['lineno']=399;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'checkboxes'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_188_err){if (!$p['isinstance']($pyjs_dbg_188_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_188_err);}throw $pyjs_dbg_188_err;
}})()) {
				$pyjs['track']['lineno']=400;
				checkbox = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Input']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_189_err){if (!$p['isinstance']($pyjs_dbg_189_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_189_err);}throw $pyjs_dbg_189_err;
}})();
				$pyjs['track']['lineno']=401;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return checkbox['__setitem__']('type', 'checkbox');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_190_err){if (!$p['isinstance']($pyjs_dbg_190_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_190_err);}throw $pyjs_dbg_190_err;
}})();
				$pyjs['track']['lineno']=402;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return checkbox['__getitem__']('class')['append']('check');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_191_err){if (!$p['isinstance']($pyjs_dbg_191_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_191_err);}throw $pyjs_dbg_191_err;
}})();
				$pyjs['track']['lineno']=403;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return checkbox['__setitem__']('checked', false);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_192_err){if (!$p['isinstance']($pyjs_dbg_192_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_192_err);}throw $pyjs_dbg_192_err;
}})();
				$pyjs['track']['lineno']=405;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__getitem__']('cell')['__getitem__'](row)['__setitem__']($p['getattr'](self, 'checkboxes_col'), checkbox);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_193_err){if (!$p['isinstance']($pyjs_dbg_193_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_193_err);}throw $pyjs_dbg_193_err;
}})();
				$pyjs['track']['lineno']=406;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, '_checkboxes')['__setitem__'](row, checkbox);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_194_err){if (!$p['isinstance']($pyjs_dbg_194_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_194_err);}throw $pyjs_dbg_194_err;
}})();
			}
			$pyjs['track']['lineno']=408;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'indexes'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_195_err){if (!$p['isinstance']($pyjs_dbg_195_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_195_err);}throw $pyjs_dbg_195_err;
}})()) {
				$pyjs['track']['lineno']=409;
				lbl = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Label']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str']($p['__op_add']($add17=row,$add18=1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_196_err){if (!$p['isinstance']($pyjs_dbg_196_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_196_err);}throw $pyjs_dbg_196_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_197_err){if (!$p['isinstance']($pyjs_dbg_197_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_197_err);}throw $pyjs_dbg_197_err;
}})();
				$pyjs['track']['lineno']=410;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return lbl['__getitem__']('class')['append']('index');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_198_err){if (!$p['isinstance']($pyjs_dbg_198_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_198_err);}throw $pyjs_dbg_198_err;
}})();
				$pyjs['track']['lineno']=411;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__getitem__']('cell')['__getitem__'](row)['__setitem__']($p['getattr'](self, 'indexes_col'), lbl);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_199_err){if (!$p['isinstance']($pyjs_dbg_199_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_199_err);}throw $pyjs_dbg_199_err;
}})();
			}
			$pyjs['track']['lineno']=413;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['tableChangedEvent']['fire'](self, (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['getRowCount']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_200_err){if (!$p['isinstance']($pyjs_dbg_200_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_200_err);}throw $pyjs_dbg_200_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_201_err){if (!$p['isinstance']($pyjs_dbg_201_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_201_err);}throw $pyjs_dbg_201_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['row'],['col']]);
		$cls_definition['prepareCol'] = $method;
		$pyjs['track']['lineno']=415;
		$method = $pyjs__bind_method2('setCell', function(row, col, val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				col = arguments[2];
				val = arguments[3];
			}
			var $add20,$add19;
			$pyjs['track']={'module':'widgets.table', 'lineno':415};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=415;
			$pyjs['track']['lineno']=420;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__getitem__']('cell')['__getitem__'](row)['__setitem__']($p['__op_add']($add19=col,$add20=(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['_extraCols']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_202_err){if (!$p['isinstance']($pyjs_dbg_202_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_202_err);}throw $pyjs_dbg_202_err;
}})()), val);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_203_err){if (!$p['isinstance']($pyjs_dbg_203_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_203_err);}throw $pyjs_dbg_203_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['row'],['col'],['val']]);
		$cls_definition['setCell'] = $method;
		$pyjs['track']['lineno']=422;
		$method = $pyjs__bind_method2('selectAll', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter6_idx,$iter6_type,tr,$iter6_array,$pyjs__trackstack_size_1,$iter6_iter,row,$iter6_nextval;
			$pyjs['track']={'module':'widgets.table', 'lineno':422};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=422;
			$pyjs['track']['lineno']=426;
			self['_selectedRows'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['range'](0, (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['getRowCount']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_204_err){if (!$p['isinstance']($pyjs_dbg_204_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_204_err);}throw $pyjs_dbg_204_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_205_err){if (!$p['isinstance']($pyjs_dbg_205_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_205_err);}throw $pyjs_dbg_205_err;
}})();
			$pyjs['track']['lineno']=428;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter6_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, '_selectedRows');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_206_err){if (!$p['isinstance']($pyjs_dbg_206_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_206_err);}throw $pyjs_dbg_206_err;
}})();
			$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
			while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
				row = $iter6_nextval['$nextval'];
				$pyjs['track']['lineno']=429;
				tr = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['getTrByIndex'](row);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_207_err){if (!$p['isinstance']($pyjs_dbg_207_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_207_err);}throw $pyjs_dbg_207_err;
}})();
				$pyjs['track']['lineno']=431;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool'](tr['__getitem__']('class')['__contains__']('is_selected')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_208_err){if (!$p['isinstance']($pyjs_dbg_208_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_208_err);}throw $pyjs_dbg_208_err;
}})()) {
					$pyjs['track']['lineno']=432;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return tr['__getitem__']('class')['append']('is_selected');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_209_err){if (!$p['isinstance']($pyjs_dbg_209_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_209_err);}throw $pyjs_dbg_209_err;
}})();
				}
				$pyjs['track']['lineno']=434;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, 'checkboxes'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_210_err){if (!$p['isinstance']($pyjs_dbg_210_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_210_err);}throw $pyjs_dbg_210_err;
}})()) {
					$pyjs['track']['lineno']=435;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, '_checkboxes')['__getitem__'](row)['__setitem__']('checked', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_211_err){if (!$p['isinstance']($pyjs_dbg_211_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_211_err);}throw $pyjs_dbg_211_err;
}})();
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=437;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['selectionChangedEvent']['fire'](self, (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['getCurrentSelection']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_212_err){if (!$p['isinstance']($pyjs_dbg_212_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_212_err);}throw $pyjs_dbg_212_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_213_err){if (!$p['isinstance']($pyjs_dbg_213_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_213_err);}throw $pyjs_dbg_213_err;
}})();
			$pyjs['track']['lineno']=438;
			$pyjs['track']['lineno']=438;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len']($p['getattr'](self, '_selectedRows'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_214_err){if (!$p['isinstance']($pyjs_dbg_214_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_214_err);}throw $pyjs_dbg_214_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['selectAll'] = $method;
		$pyjs['track']['lineno']=440;
		$method = $pyjs__bind_method2('unSelectAll', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var unsel,$iter7_nextval,$iter7_iter,$iter7_array,tr,$iter7_idx,$iter7_type,$pyjs__trackstack_size_1,row;
			$pyjs['track']={'module':'widgets.table', 'lineno':440};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=440;
			$pyjs['track']['lineno']=444;
			unsel = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len']($p['getattr'](self, '_selectedRows'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_215_err){if (!$p['isinstance']($pyjs_dbg_215_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_215_err);}throw $pyjs_dbg_215_err;
}})();
			$pyjs['track']['lineno']=446;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter7_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, '_selectedRows');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_216_err){if (!$p['isinstance']($pyjs_dbg_216_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_216_err);}throw $pyjs_dbg_216_err;
}})();
			$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
			while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
				row = $iter7_nextval['$nextval'];
				$pyjs['track']['lineno']=447;
				tr = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['getTrByIndex'](row);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_217_err){if (!$p['isinstance']($pyjs_dbg_217_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_217_err);}throw $pyjs_dbg_217_err;
}})();
				$pyjs['track']['lineno']=448;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return tr['__getitem__']('class')['remove']('is_selected');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_218_err){if (!$p['isinstance']($pyjs_dbg_218_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_218_err);}throw $pyjs_dbg_218_err;
}})();
				$pyjs['track']['lineno']=450;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, 'checkboxes'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_219_err){if (!$p['isinstance']($pyjs_dbg_219_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_219_err);}throw $pyjs_dbg_219_err;
}})()) {
					$pyjs['track']['lineno']=451;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, '_checkboxes')['__getitem__'](row)['__setitem__']('checked', false);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_220_err){if (!$p['isinstance']($pyjs_dbg_220_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_220_err);}throw $pyjs_dbg_220_err;
}})();
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=453;
			self['_selectedRows'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_221_err){if (!$p['isinstance']($pyjs_dbg_221_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_221_err);}throw $pyjs_dbg_221_err;
}})();
			$pyjs['track']['lineno']=454;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['selectionChangedEvent']['fire'](self, (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['getCurrentSelection']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_222_err){if (!$p['isinstance']($pyjs_dbg_222_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_222_err);}throw $pyjs_dbg_222_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_223_err){if (!$p['isinstance']($pyjs_dbg_223_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_223_err);}throw $pyjs_dbg_223_err;
}})();
			$pyjs['track']['lineno']=455;
			$pyjs['track']['lineno']=455;
			var $pyjs__ret = unsel;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['unSelectAll'] = $method;
		$pyjs['track']['lineno']=457;
		$method = $pyjs__bind_method2('invertSelection', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter8_iter,$iter8_idx,tr,$iter8_array,current,$iter8_nextval,$pyjs__trackstack_size_1,$iter8_type,row;
			$pyjs['track']={'module':'widgets.table', 'lineno':457};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=457;
			$pyjs['track']['lineno']=461;
			current = $p['__getslice']($p['getattr'](self, '_selectedRows'), 0, null);
			$pyjs['track']['lineno']=462;
			self['_selectedRows'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_224_err){if (!$p['isinstance']($pyjs_dbg_224_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_224_err);}throw $pyjs_dbg_224_err;
}})();
			$pyjs['track']['lineno']=464;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter8_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['range'](0, (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['getRowCount']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_225_err){if (!$p['isinstance']($pyjs_dbg_225_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_225_err);}throw $pyjs_dbg_225_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_226_err){if (!$p['isinstance']($pyjs_dbg_226_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_226_err);}throw $pyjs_dbg_226_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_227_err){if (!$p['isinstance']($pyjs_dbg_227_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_227_err);}throw $pyjs_dbg_227_err;
}})();
			$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
			while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
				row = $iter8_nextval['$nextval'];
				$pyjs['track']['lineno']=465;
				tr = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['getTrByIndex'](row);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_228_err){if (!$p['isinstance']($pyjs_dbg_228_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_228_err);}throw $pyjs_dbg_228_err;
}})();
				$pyjs['track']['lineno']=467;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](current['__contains__'](row));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_229_err){if (!$p['isinstance']($pyjs_dbg_229_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_229_err);}throw $pyjs_dbg_229_err;
}})()) {
					$pyjs['track']['lineno']=468;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return tr['__getitem__']('class')['remove']('is_selected');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_230_err){if (!$p['isinstance']($pyjs_dbg_230_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_230_err);}throw $pyjs_dbg_230_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=470;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['_selectedRows']['append'](row);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_231_err){if (!$p['isinstance']($pyjs_dbg_231_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_231_err);}throw $pyjs_dbg_231_err;
}})();
					$pyjs['track']['lineno']=471;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return tr['__getitem__']('class')['append']('is_selected');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_232_err){if (!$p['isinstance']($pyjs_dbg_232_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_232_err);}throw $pyjs_dbg_232_err;
}})();
				}
				$pyjs['track']['lineno']=473;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, 'checkboxes'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_233_err){if (!$p['isinstance']($pyjs_dbg_233_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_233_err);}throw $pyjs_dbg_233_err;
}})()) {
					$pyjs['track']['lineno']=474;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, '_checkboxes')['__getitem__'](row)['__setitem__']('checked', $p['getattr'](self, '_selectedRows')['__contains__'](row));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_234_err){if (!$p['isinstance']($pyjs_dbg_234_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_234_err);}throw $pyjs_dbg_234_err;
}})();
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=476;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['selectionChangedEvent']['fire'](self, (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['getCurrentSelection']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_235_err){if (!$p['isinstance']($pyjs_dbg_235_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_235_err);}throw $pyjs_dbg_235_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_236_err){if (!$p['isinstance']($pyjs_dbg_236_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_236_err);}throw $pyjs_dbg_236_err;
}})();
			$pyjs['track']['lineno']=477;
			$pyjs['track']['lineno']=477;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple']([(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len']($p['getattr'](self, '_selectedRows'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_237_err){if (!$p['isinstance']($pyjs_dbg_237_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_237_err);}throw $pyjs_dbg_237_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len'](current);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_238_err){if (!$p['isinstance']($pyjs_dbg_238_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_238_err);}throw $pyjs_dbg_238_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_239_err){if (!$p['isinstance']($pyjs_dbg_239_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_239_err);}throw $pyjs_dbg_239_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['invertSelection'] = $method;
		$pyjs['track']['lineno']=6;
		var $bases = new Array($p['getattr']($m['html5'], 'Table'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('SelectTable', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=481;
	$m['DataTable'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.table';
		$pyjs['track']['lineno']=486;
		$method = $pyjs__bind_method2('__init__', function(_loadOnDisplay) {
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
				_loadOnDisplay = arguments[1];
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
				if (typeof _loadOnDisplay != 'undefined') {
					if (_loadOnDisplay !== null && typeof _loadOnDisplay['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = _loadOnDisplay;
						_loadOnDisplay = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}
			if (typeof _loadOnDisplay == 'undefined') _loadOnDisplay=arguments['callee']['__args__'][3][1];
			var f,$iter9_iter,$iter9_nextval,$iter9_idx,$iter9_array,$pyjs__trackstack_size_1,$iter9_type;
			$pyjs['track']={'module':'widgets.table', 'lineno':486};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=486;
			$pyjs['track']['lineno']=487;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['DataTable'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_240_err){if (!$p['isinstance']($pyjs_dbg_240_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_240_err);}throw $pyjs_dbg_240_err;
}})()['__init__']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_241_err){if (!$p['isinstance']($pyjs_dbg_241_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_241_err);}throw $pyjs_dbg_241_err;
}})();
			$pyjs['track']['lineno']=488;
			self['table'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(null, $m['SelectTable'], args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_242_err){if (!$p['isinstance']($pyjs_dbg_242_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_242_err);}throw $pyjs_dbg_242_err;
}})();
			$pyjs['track']['lineno']=489;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'table'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_243_err){if (!$p['isinstance']($pyjs_dbg_243_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_243_err);}throw $pyjs_dbg_243_err;
}})();
			$pyjs['track']['lineno']=491;
			self['_loadOnDisplay'] = _loadOnDisplay;
			$pyjs['track']['lineno']=493;
			self['_model'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_244_err){if (!$p['isinstance']($pyjs_dbg_244_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_244_err);}throw $pyjs_dbg_244_err;
}})();
			$pyjs['track']['lineno']=494;
			self['_shownFields'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_245_err){if (!$p['isinstance']($pyjs_dbg_245_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_245_err);}throw $pyjs_dbg_245_err;
}})();
			$pyjs['track']['lineno']=495;
			self['_modelIdx'] = 0;
			$pyjs['track']['lineno']=496;
			self['_isAjaxLoading'] = false;
			$pyjs['track']['lineno']=497;
			self['_dataProvider'] = null;
			$pyjs['track']['lineno']=498;
			self['_cellRender'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_246_err){if (!$p['isinstance']($pyjs_dbg_246_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_246_err);}throw $pyjs_dbg_246_err;
}})();
			$pyjs['track']['lineno']=501;
			self['selectionChangedEvent'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['EventDispatcher']('selectionChanged');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_247_err){if (!$p['isinstance']($pyjs_dbg_247_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_247_err);}throw $pyjs_dbg_247_err;
}})();
			$pyjs['track']['lineno']=502;
			self['selectionActivatedEvent'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['EventDispatcher']('selectionActivated');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_248_err){if (!$p['isinstance']($pyjs_dbg_248_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_248_err);}throw $pyjs_dbg_248_err;
}})();
			$pyjs['track']['lineno']=503;
			self['tableChangedEvent'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['EventDispatcher']('tableChanged');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_249_err){if (!$p['isinstance']($pyjs_dbg_249_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_249_err);}throw $pyjs_dbg_249_err;
}})();
			$pyjs['track']['lineno']=505;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['table']['selectionChangedEvent']['register'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_250_err){if (!$p['isinstance']($pyjs_dbg_250_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_250_err);}throw $pyjs_dbg_250_err;
}})();
			$pyjs['track']['lineno']=506;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['table']['selectionActivatedEvent']['register'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_251_err){if (!$p['isinstance']($pyjs_dbg_251_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_251_err);}throw $pyjs_dbg_251_err;
}})();
			$pyjs['track']['lineno']=507;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['table']['tableChangedEvent']['register'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_252_err){if (!$p['isinstance']($pyjs_dbg_252_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_252_err);}throw $pyjs_dbg_252_err;
}})();
			$pyjs['track']['lineno']=510;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter9_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list'](['cursorMovedEvent', 'setHeader']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_253_err){if (!$p['isinstance']($pyjs_dbg_253_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_253_err);}throw $pyjs_dbg_253_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_254_err){if (!$p['isinstance']($pyjs_dbg_254_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_254_err);}throw $pyjs_dbg_254_err;
}})();
			$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
			while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
				f = $iter9_nextval['$nextval'];
				$pyjs['track']['lineno']=511;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['setattr'](self, f, (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr']($p['getattr'](self, 'table'), f);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_255_err){if (!$p['isinstance']($pyjs_dbg_255_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_255_err);}throw $pyjs_dbg_255_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_256_err){if (!$p['isinstance']($pyjs_dbg_256_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_256_err);}throw $pyjs_dbg_256_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=513;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['cursorMovedEvent']['register'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_257_err){if (!$p['isinstance']($pyjs_dbg_257_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_257_err);}throw $pyjs_dbg_257_err;
}})();
			$pyjs['track']['lineno']=514;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__getitem__']('style')['__setitem__']('overflow', 'scroll');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_258_err){if (!$p['isinstance']($pyjs_dbg_258_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_258_err);}throw $pyjs_dbg_258_err;
}})();
			$pyjs['track']['lineno']=515;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['recalcHeight']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_259_err){if (!$p['isinstance']($pyjs_dbg_259_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_259_err);}throw $pyjs_dbg_259_err;
}})();
			$pyjs['track']['lineno']=516;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['sinkEvent']('onScroll');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_260_err){if (!$p['isinstance']($pyjs_dbg_260_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_260_err);}throw $pyjs_dbg_260_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['_loadOnDisplay', false]]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=519;
		$method = $pyjs__bind_method2('recalcHeight', function() {
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
			var $sub9,$sub10;
			$pyjs['track']={'module':'widgets.table', 'lineno':519};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=519;
			$pyjs['track']['lineno']=520;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__getitem__']('style')['__setitem__']('max-height', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('%spx', $p['__op_sub']($sub9=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['float_int']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (typeof eval == "undefined"?$m['eval']:eval)('window.top.innerHeight');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_261_err){if (!$p['isinstance']($pyjs_dbg_261_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_261_err);}throw $pyjs_dbg_261_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_262_err){if (!$p['isinstance']($pyjs_dbg_262_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_262_err);}throw $pyjs_dbg_262_err;
}})(),$sub10=280));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_263_err){if (!$p['isinstance']($pyjs_dbg_263_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_263_err);}throw $pyjs_dbg_263_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_264_err){if (!$p['isinstance']($pyjs_dbg_264_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_264_err);}throw $pyjs_dbg_264_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['recalcHeight'] = $method;
		$pyjs['track']['lineno']=522;
		$method = $pyjs__bind_method2('setDataProvider', function(obj) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				obj = arguments[1];
			}
			var $or4,$or3;
			$pyjs['track']={'module':'widgets.table', 'lineno':522};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=522;
			$pyjs['track']['lineno']=531;
			if (!( ($p['bool']($or3=$p['op_eq'](obj, null))?$or3:(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dir'](obj);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_265_err){if (!$p['isinstance']($pyjs_dbg_265_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_265_err);}throw $pyjs_dbg_265_err;
}})()['__contains__']('onNextBatchNeeded')) )) {
			   throw $p['AssertionError']("The dataProvider must provide a 'onNextBatchNeeded' function");
			 }
			$pyjs['track']['lineno']=534;
			self['_dataProvider'] = obj;
			$pyjs['track']['lineno']=535;
			self['_isAjaxLoading'] = false;
			$pyjs['track']['lineno']=537;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'table')['__getitem__']('class')['__contains__']('is_loading'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_266_err){if (!$p['isinstance']($pyjs_dbg_266_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_266_err);}throw $pyjs_dbg_266_err;
}})()) {
				$pyjs['track']['lineno']=538;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'table')['__getitem__']('class')['remove']('is_loading');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_267_err){if (!$p['isinstance']($pyjs_dbg_267_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_267_err);}throw $pyjs_dbg_267_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['obj']]);
		$cls_definition['setDataProvider'] = $method;
		$pyjs['track']['lineno']=540;
		$method = $pyjs__bind_method2('onCursorMoved', function(table, row) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				table = arguments[1];
				row = arguments[2];
			}
			var $add21,$sub12,$add22,tr,$add24,$sub11,$add23;
			$pyjs['track']={'module':'widgets.table', 'lineno':540};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=540;
			$pyjs['track']['lineno']=544;
			tr = (function(){try{try{$pyjs['in_try_except'] += 1;
			return table['getTrByIndex'](row);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_268_err){if (!$p['isinstance']($pyjs_dbg_268_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_268_err);}throw $pyjs_dbg_268_err;
}})();
			$pyjs['track']['lineno']=545;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((tr === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_269_err){if (!$p['isinstance']($pyjs_dbg_269_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_269_err);}throw $pyjs_dbg_269_err;
}})()) {
				$pyjs['track']['lineno']=546;
				$pyjs['track']['lineno']=546;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=547;
			$pyjs['track']['lineno']=547;
			var $pyjs__ret = null;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
			$pyjs['track']['lineno']=548;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['cmp']($p['getattr']($p['getattr'](self, 'element'), 'scrollTop'), $p['getattr'](tr, 'offsetTop')) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_270_err){if (!$p['isinstance']($pyjs_dbg_270_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_270_err);}throw $pyjs_dbg_270_err;
}})()) {
				$pyjs['track']['lineno']=549;
				$p['getattr'](self, 'element')['scrollTop'] = $p['getattr'](tr, 'offsetTop');
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['cmp']($p['__op_add']($add21=$p['getattr']($p['getattr'](self, 'element'), 'scrollTop'),$add22=$p['getattr']($p['getattr'](self, 'element'), 'clientHeight')), $p['getattr'](tr, 'offsetTop')) == -1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_271_err){if (!$p['isinstance']($pyjs_dbg_271_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_271_err);}throw $pyjs_dbg_271_err;
}})()) {
				$pyjs['track']['lineno']=551;
				$p['getattr'](self, 'element')['scrollTop'] = $p['__op_sub']($sub11=$p['__op_add']($add23=$p['getattr'](tr, 'offsetTop'),$add24=$p['getattr'](tr, 'clientHeight')),$sub12=$p['getattr']($p['getattr'](self, 'element'), 'clientHeight'));
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['table'],['row']]);
		$cls_definition['onCursorMoved'] = $method;
		$pyjs['track']['lineno']=553;
		$method = $pyjs__bind_method2('getRowCount', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'widgets.table', 'lineno':553};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=553;
			$pyjs['track']['lineno']=558;
			$pyjs['track']['lineno']=558;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len']($p['getattr'](self, '_model'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_272_err){if (!$p['isinstance']($pyjs_dbg_272_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_272_err);}throw $pyjs_dbg_272_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getRowCount'] = $method;
		$pyjs['track']['lineno']=561;
		$method = $pyjs__bind_method2('add', function(obj) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				obj = arguments[1];
			}
			var $add25,$add26;
			$pyjs['track']={'module':'widgets.table', 'lineno':561};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=561;
			$pyjs['track']['lineno']=567;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return obj['__setitem__']('_uniqeIndex', $p['getattr'](self, '_modelIdx'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_273_err){if (!$p['isinstance']($pyjs_dbg_273_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_273_err);}throw $pyjs_dbg_273_err;
}})();
			$pyjs['track']['lineno']=568;
			self['_modelIdx'] = $p['__op_add']($add25=$p['getattr'](self, '_modelIdx'),$add26=1);
			$pyjs['track']['lineno']=569;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['_model']['append'](obj);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_274_err){if (!$p['isinstance']($pyjs_dbg_274_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_274_err);}throw $pyjs_dbg_274_err;
}})();
			$pyjs['track']['lineno']=570;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['_renderObject'](obj);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_275_err){if (!$p['isinstance']($pyjs_dbg_275_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_275_err);}throw $pyjs_dbg_275_err;
}})();
			$pyjs['track']['lineno']=571;
			self['_isAjaxLoading'] = false;
			$pyjs['track']['lineno']=572;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'table')['__getitem__']('class')['__contains__']('is_loading'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_276_err){if (!$p['isinstance']($pyjs_dbg_276_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_276_err);}throw $pyjs_dbg_276_err;
}})()) {
				$pyjs['track']['lineno']=573;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'table')['__getitem__']('class')['remove']('is_loading');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_277_err){if (!$p['isinstance']($pyjs_dbg_277_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_277_err);}throw $pyjs_dbg_277_err;
}})();
			}
			$pyjs['track']['lineno']=574;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['testIfNextBatchNeededImmediately']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_278_err){if (!$p['isinstance']($pyjs_dbg_278_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_278_err);}throw $pyjs_dbg_278_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['obj']]);
		$cls_definition['add'] = $method;
		$pyjs['track']['lineno']=576;
		$method = $pyjs__bind_method2('extend', function(objList) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				objList = arguments[1];
			}
			var $add28,$iter10_nextval,obj,$iter10_array,$add27,$pyjs__trackstack_size_1,$iter10_type,$iter10_iter,$iter10_idx;
			$pyjs['track']={'module':'widgets.table', 'lineno':576};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=576;
			$pyjs['track']['lineno']=581;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['table']['prepareGrid']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len'](objList);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_279_err){if (!$p['isinstance']($pyjs_dbg_279_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_279_err);}throw $pyjs_dbg_279_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len']($p['getattr'](self, '_shownFields'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_280_err){if (!$p['isinstance']($pyjs_dbg_280_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_280_err);}throw $pyjs_dbg_280_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_281_err){if (!$p['isinstance']($pyjs_dbg_281_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_281_err);}throw $pyjs_dbg_281_err;
}})();
			$pyjs['track']['lineno']=582;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter10_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return objList;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_282_err){if (!$p['isinstance']($pyjs_dbg_282_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_282_err);}throw $pyjs_dbg_282_err;
}})();
			$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
			while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
				obj = $iter10_nextval['$nextval'];
				$pyjs['track']['lineno']=583;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return obj['__setitem__']('_uniqeIndex', $p['getattr'](self, '_modelIdx'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_283_err){if (!$p['isinstance']($pyjs_dbg_283_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_283_err);}throw $pyjs_dbg_283_err;
}})();
				$pyjs['track']['lineno']=584;
				self['_modelIdx'] = $p['__op_add']($add27=$p['getattr'](self, '_modelIdx'),$add28=1);
				$pyjs['track']['lineno']=585;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['_model']['append'](obj);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_284_err){if (!$p['isinstance']($pyjs_dbg_284_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_284_err);}throw $pyjs_dbg_284_err;
}})();
				$pyjs['track']['lineno']=586;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call(self, '_renderObject', null, null, [{'tableIsPrepared':true}, obj]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_285_err){if (!$p['isinstance']($pyjs_dbg_285_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_285_err);}throw $pyjs_dbg_285_err;
}})();
				$pyjs['track']['lineno']=587;
				self['_isAjaxLoading'] = false;
				$pyjs['track']['lineno']=588;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, 'table')['__getitem__']('class')['__contains__']('is_loading'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_286_err){if (!$p['isinstance']($pyjs_dbg_286_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_286_err);}throw $pyjs_dbg_286_err;
}})()) {
					$pyjs['track']['lineno']=589;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'table')['__getitem__']('class')['remove']('is_loading');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_287_err){if (!$p['isinstance']($pyjs_dbg_287_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_287_err);}throw $pyjs_dbg_287_err;
}})();
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=590;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['testIfNextBatchNeededImmediately']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_288_err){if (!$p['isinstance']($pyjs_dbg_288_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_288_err);}throw $pyjs_dbg_288_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['objList']]);
		$cls_definition['extend'] = $method;
		$pyjs['track']['lineno']=592;
		$method = $pyjs__bind_method2('testIfNextBatchNeededImmediately', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add29,$and8,c,$or6,$or5,$iter11_iter,$iter11_type,$and7,sumHeight,$iter11_array,$iter11_nextval,$iter11_idx,$pyjs__trackstack_size_1,$add30;
			$pyjs['track']={'module':'widgets.table', 'lineno':592};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=592;
			$pyjs['track']['lineno']=598;
			sumHeight = 0;
			$pyjs['track']['lineno']=599;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter11_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr']($p['getattr'](self, 'table'), '_children');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_289_err){if (!$p['isinstance']($pyjs_dbg_289_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_289_err);}throw $pyjs_dbg_289_err;
}})();
			$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
			while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
				c = $iter11_nextval['$nextval'];
				$pyjs['track']['lineno']=600;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dir']($p['getattr'](c, 'element'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_290_err){if (!$p['isinstance']($pyjs_dbg_290_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_290_err);}throw $pyjs_dbg_290_err;
}})()['__contains__']('clientHeight'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_291_err){if (!$p['isinstance']($pyjs_dbg_291_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_291_err);}throw $pyjs_dbg_291_err;
}})()) {
					$pyjs['track']['lineno']=601;
					sumHeight = $p['__op_add']($add29=sumHeight,$add30=$p['getattr']($p['getattr'](c, 'element'), 'clientHeight'));
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=603;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and7=!$p['bool']($p['getattr'](self, '_isAjaxLoading')))?($p['bool']($or5=$p['getattr'](self, '_loadOnDisplay'))?$or5:!$p['bool'](($p['cmp'](sumHeight, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['float_int']($p['__getslice'](self['__getitem__']('style')['__getitem__']('max-height'), 0, (typeof ($usub3=2)=='number'?
				-$usub3:
				$p['op_usub']($usub3))));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_292_err){if (!$p['isinstance']($pyjs_dbg_292_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_292_err);}throw $pyjs_dbg_292_err;
}})()) == 1))):$and7));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_293_err){if (!$p['isinstance']($pyjs_dbg_293_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_293_err);}throw $pyjs_dbg_293_err;
}})()) {
				$pyjs['track']['lineno']=607;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, '_dataProvider'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_294_err){if (!$p['isinstance']($pyjs_dbg_294_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_294_err);}throw $pyjs_dbg_294_err;
}})()) {
					$pyjs['track']['lineno']=608;
					self['_isAjaxLoading'] = true;
					$pyjs['track']['lineno']=609;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](!$p['bool']($p['getattr'](self, 'table')['__getitem__']('class')['__contains__']('is_loading')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_295_err){if (!$p['isinstance']($pyjs_dbg_295_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_295_err);}throw $pyjs_dbg_295_err;
}})()) {
						$pyjs['track']['lineno']=610;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](self, 'table')['__getitem__']('class')['append']('is_loading');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_296_err){if (!$p['isinstance']($pyjs_dbg_296_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_296_err);}throw $pyjs_dbg_296_err;
}})();
					}
					$pyjs['track']['lineno']=611;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['_dataProvider']['onNextBatchNeeded']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_297_err){if (!$p['isinstance']($pyjs_dbg_297_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_297_err);}throw $pyjs_dbg_297_err;
}})();
				}
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['testIfNextBatchNeededImmediately'] = $method;
		$pyjs['track']['lineno']=613;
		$method = $pyjs__bind_method2('remove', function(objOrIndex) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				objOrIndex = arguments[1];
			}
			var $and10,$and9;
			$pyjs['track']={'module':'widgets.table', 'lineno':613};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=613;
			$pyjs['track']['lineno']=619;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance'](objOrIndex, $p['dict']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_298_err){if (!$p['isinstance']($pyjs_dbg_298_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_298_err);}throw $pyjs_dbg_298_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_299_err){if (!$p['isinstance']($pyjs_dbg_299_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_299_err);}throw $pyjs_dbg_299_err;
}})()) {
				$pyjs['track']['lineno']=620;
				if (!( $p['getattr'](self, '_model')['__contains__'](objOrIndex) )) {
				   throw $p['AssertionError']('Cannot remove unknown object from Table');
				 }
				$pyjs['track']['lineno']=621;
				objOrIndex = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['_model']['index'](objOrIndex);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_300_err){if (!$p['isinstance']($pyjs_dbg_300_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_300_err);}throw $pyjs_dbg_300_err;
}})();
			}
			$pyjs['track']['lineno']=622;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance'](objOrIndex, $p['float_int']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_301_err){if (!$p['isinstance']($pyjs_dbg_301_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_301_err);}throw $pyjs_dbg_301_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_302_err){if (!$p['isinstance']($pyjs_dbg_302_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_302_err);}throw $pyjs_dbg_302_err;
}})()) {
				$pyjs['track']['lineno']=623;
				if (!( ($p['bool']($and9=($p['cmp'](objOrIndex, 0) == 1))?($p['cmp'](objOrIndex, (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['len']($p['getattr'](self, '_model'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_303_err){if (!$p['isinstance']($pyjs_dbg_303_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_303_err);}throw $pyjs_dbg_303_err;
}})()) == -1):$and9) )) {
				   throw $p['AssertionError']('Modelindex out of range');
				 }
				$pyjs['track']['lineno']=624;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['_model']['remove']($p['getattr'](self, '_model')['__getitem__'](objOrIndex));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_304_err){if (!$p['isinstance']($pyjs_dbg_304_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_304_err);}throw $pyjs_dbg_304_err;
}})();
				$pyjs['track']['lineno']=625;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['table']['removeRow'](objOrIndex);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_305_err){if (!$p['isinstance']($pyjs_dbg_305_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_305_err);}throw $pyjs_dbg_305_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=627;
				$pyjs['__active_exception_stack__'] = null;
				throw ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['TypeError']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('Expected int or dict, got %s', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['type'](objOrIndex);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_306_err){if (!$p['isinstance']($pyjs_dbg_306_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_306_err);}throw $pyjs_dbg_306_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_307_err){if (!$p['isinstance']($pyjs_dbg_307_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_307_err);}throw $pyjs_dbg_307_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_308_err){if (!$p['isinstance']($pyjs_dbg_308_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_308_err);}throw $pyjs_dbg_308_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_309_err){if (!$p['isinstance']($pyjs_dbg_309_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_309_err);}throw $pyjs_dbg_309_err;
}})());
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['objOrIndex']]);
		$cls_definition['remove'] = $method;
		$pyjs['track']['lineno']=629;
		$method = $pyjs__bind_method2('clear', function(keepModel) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				keepModel = arguments[1];
			}
			if (typeof keepModel == 'undefined') keepModel=arguments['callee']['__args__'][3][1];

			$pyjs['track']={'module':'widgets.table', 'lineno':629};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=629;
			$pyjs['track']['lineno']=633;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['table']['clear']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_310_err){if (!$p['isinstance']($pyjs_dbg_310_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_310_err);}throw $pyjs_dbg_310_err;
}})();
			$pyjs['track']['lineno']=634;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool'](keepModel));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_311_err){if (!$p['isinstance']($pyjs_dbg_311_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_311_err);}throw $pyjs_dbg_311_err;
}})()) {
				$pyjs['track']['lineno']=635;
				self['_model'] = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_312_err){if (!$p['isinstance']($pyjs_dbg_312_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_312_err);}throw $pyjs_dbg_312_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['keepModel', false]]);
		$cls_definition['clear'] = $method;
		$pyjs['track']['lineno']=637;
		$method = $pyjs__bind_method2('_renderObject', function(obj, tableIsPrepared) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				obj = arguments[1];
				tableIsPrepared = arguments[2];
			}
			if (typeof tableIsPrepared == 'undefined') tableIsPrepared=arguments['callee']['__args__'][4][1];
			var $iter12_type,lbl,rowIdx,$sub13,$iter12_idx,$add31,$iter12_array,cellIdx,$sub14,$iter12_iter,field,$add32,$pyjs__trackstack_size_1,$iter12_nextval;
			$pyjs['track']={'module':'widgets.table', 'lineno':637};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=637;
			$pyjs['track']['lineno']=644;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool']($p['getattr'](self, '_shownFields')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_313_err){if (!$p['isinstance']($pyjs_dbg_313_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_313_err);}throw $pyjs_dbg_313_err;
}})()) {
				$pyjs['track']['lineno']=645;
				$pyjs['track']['lineno']=645;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=647;
			rowIdx = (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['_model']['index'](obj);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_314_err){if (!$p['isinstance']($pyjs_dbg_314_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_314_err);}throw $pyjs_dbg_314_err;
}})();
			$pyjs['track']['lineno']=648;
			cellIdx = 0;
			$pyjs['track']['lineno']=650;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool'](tableIsPrepared));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_315_err){if (!$p['isinstance']($pyjs_dbg_315_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_315_err);}throw $pyjs_dbg_315_err;
}})()) {
				$pyjs['track']['lineno']=651;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['table']['prepareCol'](rowIdx, $p['__op_sub']($sub13=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['len']($p['getattr'](self, '_shownFields'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_316_err){if (!$p['isinstance']($pyjs_dbg_316_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_316_err);}throw $pyjs_dbg_316_err;
}})(),$sub14=1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_317_err){if (!$p['isinstance']($pyjs_dbg_317_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_317_err);}throw $pyjs_dbg_317_err;
}})();
			}
			$pyjs['track']['lineno']=653;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter12_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, '_shownFields');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_318_err){if (!$p['isinstance']($pyjs_dbg_318_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_318_err);}throw $pyjs_dbg_318_err;
}})();
			$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
			while (typeof($p['__wrapped_next']($iter12_nextval)['$nextval']) != 'undefined') {
				field = $iter12_nextval['$nextval'];
				$pyjs['track']['lineno']=654;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return self['_cellRender']['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_319_err){if (!$p['isinstance']($pyjs_dbg_319_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_319_err);}throw $pyjs_dbg_319_err;
}})()['__contains__'](field));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_320_err){if (!$p['isinstance']($pyjs_dbg_320_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_320_err);}throw $pyjs_dbg_320_err;
}})()) {
					$pyjs['track']['lineno']=655;
					lbl = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, '_cellRender')['__getitem__'](field)['render'](obj, field);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_321_err){if (!$p['isinstance']($pyjs_dbg_321_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_321_err);}throw $pyjs_dbg_321_err;
}})();
				}
				else if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return obj['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_322_err){if (!$p['isinstance']($pyjs_dbg_322_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_322_err);}throw $pyjs_dbg_322_err;
}})()['__contains__'](field));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_323_err){if (!$p['isinstance']($pyjs_dbg_323_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_323_err);}throw $pyjs_dbg_323_err;
}})()) {
					$pyjs['track']['lineno']=657;
					lbl = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['html5']['Label'](obj['__getitem__'](field));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_324_err){if (!$p['isinstance']($pyjs_dbg_324_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_324_err);}throw $pyjs_dbg_324_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=659;
					lbl = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['html5']['Label']('...');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_325_err){if (!$p['isinstance']($pyjs_dbg_325_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_325_err);}throw $pyjs_dbg_325_err;
}})();
				}
				$pyjs['track']['lineno']=661;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['table']['setCell'](rowIdx, cellIdx, lbl);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_326_err){if (!$p['isinstance']($pyjs_dbg_326_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_326_err);}throw $pyjs_dbg_326_err;
}})();
				$pyjs['track']['lineno']=662;
				cellIdx = $p['__op_add']($add31=cellIdx,$add32=1);
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.table';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['obj'],['tableIsPrepared', false]]);
		$cls_definition['_renderObject'] = $method;
		$pyjs['track']['lineno']=664;
		$method = $pyjs__bind_method2('rebuildTable', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter13_nextval,$iter13_iter,$iter13_type,$iter13_idx,$pyjs__trackstack_size_1,obj,$iter13_array;
			$pyjs['track']={'module':'widgets.table', 'lineno':664};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=664;
			$pyjs['track']['lineno']=669;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(self, 'clear', null, null, [{'keepModel':true}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_327_err){if (!$p['isinstance']($pyjs_dbg_327_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_327_err);}throw $pyjs_dbg_327_err;
}})();
			$pyjs['track']['lineno']=670;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['table']['prepareGrid']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len']($p['getattr'](self, '_model'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_328_err){if (!$p['isinstance']($pyjs_dbg_328_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_328_err);}throw $pyjs_dbg_328_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len']($p['getattr'](self, '_shownFields'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_329_err){if (!$p['isinstance']($pyjs_dbg_329_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_329_err);}throw $pyjs_dbg_329_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_330_err){if (!$p['isinstance']($pyjs_dbg_330_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_330_err);}throw $pyjs_dbg_330_err;
}})();
			$pyjs['track']['lineno']=671;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter13_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, '_model');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_331_err){if (!$p['isinstance']($pyjs_dbg_331_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_331_err);}throw $pyjs_dbg_331_err;
}})();
			$iter13_nextval=$p['__iter_prepare']($iter13_iter,false);
			while (typeof($p['__wrapped_next']($iter13_nextval)['$nextval']) != 'undefined') {
				obj = $iter13_nextval['$nextval'];
				$pyjs['track']['lineno']=672;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call(self, '_renderObject', null, null, [{'tableIsPrepared':true}, obj]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_332_err){if (!$p['isinstance']($pyjs_dbg_332_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_332_err);}throw $pyjs_dbg_332_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.table';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['rebuildTable'] = $method;
		$pyjs['track']['lineno']=674;
		$method = $pyjs__bind_method2('setShownFields', function(fields) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				fields = arguments[1];
			}

			$pyjs['track']={'module':'widgets.table', 'lineno':674};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=674;
			$pyjs['track']['lineno']=682;
			self['_shownFields'] = fields;
			$pyjs['track']['lineno']=683;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['rebuildTable']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_333_err){if (!$p['isinstance']($pyjs_dbg_333_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_333_err);}throw $pyjs_dbg_333_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['fields']]);
		$cls_definition['setShownFields'] = $method;
		$pyjs['track']['lineno']=685;
		$method = $pyjs__bind_method2('onScroll', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $add33,$add34,$and12,$and11;
			$pyjs['track']={'module':'widgets.table', 'lineno':685};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=685;
			$pyjs['track']['lineno']=689;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, '_loadOnDisplay'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_334_err){if (!$p['isinstance']($pyjs_dbg_334_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_334_err);}throw $pyjs_dbg_334_err;
}})()) {
				$pyjs['track']['lineno']=690;
				$pyjs['track']['lineno']=690;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=692;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['recalcHeight']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_335_err){if (!$p['isinstance']($pyjs_dbg_335_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_335_err);}throw $pyjs_dbg_335_err;
}})();
			$pyjs['track']['lineno']=694;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and11=((($p['cmp']($p['__op_add']($add33=$p['getattr']($p['getattr'](self, 'element'), 'scrollTop'),$add34=$p['getattr']($p['getattr'](self, 'element'), 'clientHeight')), $p['getattr']($p['getattr'](self, 'element'), 'scrollHeight')))|1) == 1))?!$p['bool']($p['getattr'](self, '_isAjaxLoading')):$and11));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_336_err){if (!$p['isinstance']($pyjs_dbg_336_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_336_err);}throw $pyjs_dbg_336_err;
}})()) {
				$pyjs['track']['lineno']=698;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, '_dataProvider'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_337_err){if (!$p['isinstance']($pyjs_dbg_337_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_337_err);}throw $pyjs_dbg_337_err;
}})()) {
					$pyjs['track']['lineno']=700;
					self['_isAjaxLoading'] = true;
					$pyjs['track']['lineno']=701;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](!$p['bool']($p['getattr'](self, 'table')['__getitem__']('class')['__contains__']('is_loading')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_338_err){if (!$p['isinstance']($pyjs_dbg_338_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_338_err);}throw $pyjs_dbg_338_err;
}})()) {
						$pyjs['track']['lineno']=702;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](self, 'table')['__getitem__']('class')['append']('is_loading');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_339_err){if (!$p['isinstance']($pyjs_dbg_339_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_339_err);}throw $pyjs_dbg_339_err;
}})();
					}
					$pyjs['track']['lineno']=704;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['_dataProvider']['onNextBatchNeeded']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_340_err){if (!$p['isinstance']($pyjs_dbg_340_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_340_err);}throw $pyjs_dbg_340_err;
}})();
				}
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onScroll'] = $method;
		$pyjs['track']['lineno']=706;
		$method = $pyjs__bind_method2('onSelectionChanged', function(table, rows) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				table = arguments[1];
				rows = arguments[2];
			}
			var vals;
			$pyjs['track']={'module':'widgets.table', 'lineno':706};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=706;
			$pyjs['track']['lineno']=710;
			vals = function(){
				var $iter14_array,$iter14_type,$or7,$collcomp1,$or8,$iter14_iter,$pyjs__trackstack_size_1,x,$iter14_idx,$iter14_nextval;
	$collcomp1 = $p['list']();
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter14_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return ($p['bool']($or7=rows)?$or7:(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_341_err){if (!$p['isinstance']($pyjs_dbg_341_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_341_err);}throw $pyjs_dbg_341_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_342_err){if (!$p['isinstance']($pyjs_dbg_342_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_342_err);}throw $pyjs_dbg_342_err;
}})();
			$iter14_nextval=$p['__iter_prepare']($iter14_iter,false);
			while (typeof($p['__wrapped_next']($iter14_nextval)['$nextval']) != 'undefined') {
				x = $iter14_nextval['$nextval'];
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $collcomp1['append']($p['getattr'](self, '_model')['__getitem__'](x));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_343_err){if (!$p['isinstance']($pyjs_dbg_343_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_343_err);}throw $pyjs_dbg_343_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.table';

	return $collcomp1;}();
			$pyjs['track']['lineno']=711;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['selectionChangedEvent']['fire'](self, vals);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_344_err){if (!$p['isinstance']($pyjs_dbg_344_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_344_err);}throw $pyjs_dbg_344_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['table'],['rows']]);
		$cls_definition['onSelectionChanged'] = $method;
		$pyjs['track']['lineno']=713;
		$method = $pyjs__bind_method2('onSelectionActivated', function(table, rows) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				table = arguments[1];
				rows = arguments[2];
			}
			var vals;
			$pyjs['track']={'module':'widgets.table', 'lineno':713};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=713;
			$pyjs['track']['lineno']=717;
			vals = function(){
				var $iter15_iter,$iter15_array,$collcomp2,$iter15_idx,$iter15_nextval,$iter15_type,x,$pyjs__trackstack_size_1;
	$collcomp2 = $p['list']();
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter15_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return rows;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_345_err){if (!$p['isinstance']($pyjs_dbg_345_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_345_err);}throw $pyjs_dbg_345_err;
}})();
			$iter15_nextval=$p['__iter_prepare']($iter15_iter,false);
			while (typeof($p['__wrapped_next']($iter15_nextval)['$nextval']) != 'undefined') {
				x = $iter15_nextval['$nextval'];
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $collcomp2['append']($p['getattr'](self, '_model')['__getitem__'](x));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_346_err){if (!$p['isinstance']($pyjs_dbg_346_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_346_err);}throw $pyjs_dbg_346_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.table';

	return $collcomp2;}();
			$pyjs['track']['lineno']=718;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['selectionActivatedEvent']['fire'](self, vals);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_347_err){if (!$p['isinstance']($pyjs_dbg_347_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_347_err);}throw $pyjs_dbg_347_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['table'],['rows']]);
		$cls_definition['onSelectionActivated'] = $method;
		$pyjs['track']['lineno']=720;
		$method = $pyjs__bind_method2('onTableChanged', function(table, rowCount) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				table = arguments[1];
				rowCount = arguments[2];
			}

			$pyjs['track']={'module':'widgets.table', 'lineno':720};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=720;
			$pyjs['track']['lineno']=724;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['tableChangedEvent']['fire'](self, rowCount);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_348_err){if (!$p['isinstance']($pyjs_dbg_348_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_348_err);}throw $pyjs_dbg_348_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['table'],['rowCount']]);
		$cls_definition['onTableChanged'] = $method;
		$pyjs['track']['lineno']=726;
		$method = $pyjs__bind_method2('getCurrentSelection', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var rows,$or9,$or10;
			$pyjs['track']={'module':'widgets.table', 'lineno':726};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=726;
			$pyjs['track']['lineno']=731;
			rows = (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['table']['getCurrentSelection']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_349_err){if (!$p['isinstance']($pyjs_dbg_349_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_349_err);}throw $pyjs_dbg_349_err;
}})();
			$pyjs['track']['lineno']=732;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($or9=!$p['bool']($p['getattr'](self, '_model')))?$or9:!$p['bool'](rows)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_350_err){if (!$p['isinstance']($pyjs_dbg_350_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_350_err);}throw $pyjs_dbg_350_err;
}})()) {
				$pyjs['track']['lineno']=733;
				$pyjs['track']['lineno']=733;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_351_err){if (!$p['isinstance']($pyjs_dbg_351_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_351_err);}throw $pyjs_dbg_351_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=734;
			$pyjs['track']['lineno']=734;
			var $pyjs__ret = function(){
				var $iter16_array,$iter16_type,$pyjs__trackstack_size_1,$collcomp3,$iter16_idx,x,$iter16_nextval,$iter16_iter;
	$collcomp3 = $p['list']();
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter16_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return rows;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_352_err){if (!$p['isinstance']($pyjs_dbg_352_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_352_err);}throw $pyjs_dbg_352_err;
}})();
			$iter16_nextval=$p['__iter_prepare']($iter16_iter,false);
			while (typeof($p['__wrapped_next']($iter16_nextval)['$nextval']) != 'undefined') {
				x = $iter16_nextval['$nextval'];
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $collcomp3['append']($p['getattr'](self, '_model')['__getitem__'](x));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_353_err){if (!$p['isinstance']($pyjs_dbg_353_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_353_err);}throw $pyjs_dbg_353_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.table';

	return $collcomp3;}();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getCurrentSelection'] = $method;
		$pyjs['track']['lineno']=736;
		$method = $pyjs__bind_method2('setCellRender', function(field, render) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				field = arguments[1];
				render = arguments[2];
			}

			$pyjs['track']={'module':'widgets.table', 'lineno':736};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=736;
			$pyjs['track']['lineno']=742;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((render === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_354_err){if (!$p['isinstance']($pyjs_dbg_354_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_354_err);}throw $pyjs_dbg_354_err;
}})()) {
				$pyjs['track']['lineno']=743;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return self['_cellRender']['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_355_err){if (!$p['isinstance']($pyjs_dbg_355_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_355_err);}throw $pyjs_dbg_355_err;
}})()['__contains__'](field));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_356_err){if (!$p['isinstance']($pyjs_dbg_356_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_356_err);}throw $pyjs_dbg_356_err;
}})()) {
					$pyjs['track']['lineno']=744;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, '_cellRender')['__delitem__'](field);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_357_err){if (!$p['isinstance']($pyjs_dbg_357_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_357_err);}throw $pyjs_dbg_357_err;
}})();
				}
			}
			else {
				$pyjs['track']['lineno']=746;
				if (!( (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dir'](render);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_358_err){if (!$p['isinstance']($pyjs_dbg_358_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_358_err);}throw $pyjs_dbg_358_err;
}})()['__contains__']('render') )) {
				   throw $p['AssertionError']("The render must provide a 'render' method");
				 }
				$pyjs['track']['lineno']=747;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, '_cellRender')['__setitem__'](field, render);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_359_err){if (!$p['isinstance']($pyjs_dbg_359_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_359_err);}throw $pyjs_dbg_359_err;
}})();
			}
			$pyjs['track']['lineno']=748;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['rebuildTable']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_360_err){if (!$p['isinstance']($pyjs_dbg_360_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_360_err);}throw $pyjs_dbg_360_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['field'],['render']]);
		$cls_definition['setCellRender'] = $method;
		$pyjs['track']['lineno']=750;
		$method = $pyjs__bind_method2('setCellRenders', function(renders) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				renders = arguments[1];
			}
			var $iter17_nextval,$iter17_iter,render,field,$pyjs__trackstack_size_1,$iter17_array,$iter17_idx,$iter17_type;
			$pyjs['track']={'module':'widgets.table', 'lineno':750};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=750;
			$pyjs['track']['lineno']=755;
			if (!( (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance'](renders, $p['dict']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_361_err){if (!$p['isinstance']($pyjs_dbg_361_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_361_err);}throw $pyjs_dbg_361_err;
}})() )) {
			   throw $p['AssertionError']();
			 }
			$pyjs['track']['lineno']=756;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter17_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return renders['items']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_363_err){if (!$p['isinstance']($pyjs_dbg_363_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_363_err);}throw $pyjs_dbg_363_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_364_err){if (!$p['isinstance']($pyjs_dbg_364_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_364_err);}throw $pyjs_dbg_364_err;
}})();
			$iter17_nextval=$p['__iter_prepare']($iter17_iter,false);
			while (typeof($p['__wrapped_next']($iter17_nextval)['$nextval']) != 'undefined') {
				var $tupleassign1 = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__ass_unpack']($iter17_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_362_err){if (!$p['isinstance']($pyjs_dbg_362_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_362_err);}throw $pyjs_dbg_362_err;
}})();
				field = $tupleassign1[0];
				render = $tupleassign1[1];
				$pyjs['track']['lineno']=757;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((render === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_365_err){if (!$p['isinstance']($pyjs_dbg_365_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_365_err);}throw $pyjs_dbg_365_err;
}})()) {
					$pyjs['track']['lineno']=758;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return self['_cellRender']['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_366_err){if (!$p['isinstance']($pyjs_dbg_366_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_366_err);}throw $pyjs_dbg_366_err;
}})()['__contains__'](field));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_367_err){if (!$p['isinstance']($pyjs_dbg_367_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_367_err);}throw $pyjs_dbg_367_err;
}})()) {
						$pyjs['track']['lineno']=759;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](self, '_cellRender')['__delitem__'](field);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_368_err){if (!$p['isinstance']($pyjs_dbg_368_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_368_err);}throw $pyjs_dbg_368_err;
}})();
					}
				}
				else {
					$pyjs['track']['lineno']=761;
					if (!( (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['dir'](render);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_369_err){if (!$p['isinstance']($pyjs_dbg_369_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_369_err);}throw $pyjs_dbg_369_err;
}})()['__contains__']('render') )) {
					   throw $p['AssertionError']("The render must provide a 'render' method");
					 }
					$pyjs['track']['lineno']=762;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, '_cellRender')['__setitem__'](field, render);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_370_err){if (!$p['isinstance']($pyjs_dbg_370_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_370_err);}throw $pyjs_dbg_370_err;
}})();
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=763;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['rebuildTable']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_371_err){if (!$p['isinstance']($pyjs_dbg_371_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_371_err);}throw $pyjs_dbg_371_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['renders']]);
		$cls_definition['setCellRenders'] = $method;
		$pyjs['track']['lineno']=765;
		$method = $pyjs__bind_method2('activateCurrentSelection', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var selection;
			$pyjs['track']={'module':'widgets.table', 'lineno':765};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.table';
			$pyjs['track']['lineno']=765;
			$pyjs['track']['lineno']=770;
			selection = (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['getCurrentSelection']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_372_err){if (!$p['isinstance']($pyjs_dbg_372_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_372_err);}throw $pyjs_dbg_372_err;
}})();
			$pyjs['track']['lineno']=771;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len'](selection);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_373_err){if (!$p['isinstance']($pyjs_dbg_373_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_373_err);}throw $pyjs_dbg_373_err;
}})(), 0) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_374_err){if (!$p['isinstance']($pyjs_dbg_374_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_374_err);}throw $pyjs_dbg_374_err;
}})()) {
				$pyjs['track']['lineno']=772;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['selectionActivatedEvent']['fire'](self, selection);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_375_err){if (!$p['isinstance']($pyjs_dbg_375_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_375_err);}throw $pyjs_dbg_375_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['activateCurrentSelection'] = $method;
		$pyjs['track']['lineno']=481;
		var $bases = new Array($p['getattr']($m['html5'], 'Div'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('DataTable', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end widgets.table */


/* end module: widgets.table */


/*
PYJS_DEPS: ['html5', 'utils', 'event.EventDispatcher', 'event', 'html5.keycodes', 'network.DeferredCall', 'network']
*/
