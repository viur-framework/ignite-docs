/* start module: widgets.wysiwyg */
$pyjs['loaded_modules']['widgets.wysiwyg'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['widgets.wysiwyg']['__was_initialized__']) return $pyjs['loaded_modules']['widgets.wysiwyg'];
	if(typeof $pyjs['loaded_modules']['widgets'] == 'undefined' || !$pyjs['loaded_modules']['widgets']['__was_initialized__']) $p['___import___']('widgets', null);
	var $m = $pyjs['loaded_modules']['widgets.wysiwyg'];
	$m['__repr__'] = function() { return '<module: widgets.wysiwyg>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'widgets.wysiwyg';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['widgets']['wysiwyg'] = $pyjs['loaded_modules']['widgets.wysiwyg'];
	$m.__track_lines__[1] = 'widgets.wysiwyg.py, line 1:\n    import html5';
	$m.__track_lines__[2] = 'widgets.wysiwyg.py, line 2:\n    from widgets.actionbar import ActionBar';
	$m.__track_lines__[3] = 'widgets.wysiwyg.py, line 3:\n    from event import EventDispatcher';
	$m.__track_lines__[4] = 'widgets.wysiwyg.py, line 4:\n    from time import time';
	$m.__track_lines__[5] = 'widgets.wysiwyg.py, line 5:\n    from priorityqueue import actionDelegateSelector';
	$m.__track_lines__[6] = 'widgets.wysiwyg.py, line 6:\n    import re';
	$m.__track_lines__[7] = 'widgets.wysiwyg.py, line 7:\n    from config import conf';
	$m.__track_lines__[8] = 'widgets.wysiwyg.py, line 8:\n    from widgets.file import FileWidget';
	$m.__track_lines__[9] = 'widgets.wysiwyg.py, line 9:\n    from i18n import translate';
	$m.__track_lines__[11] = 'widgets.wysiwyg.py, line 11:\n    class BasicEditorAction(html5.ext.Button):';
	$m.__track_lines__[13] = 'widgets.wysiwyg.py, line 13:\n    def execCommand(self, *args, **kwargs):';
	$m.__track_lines__[14] = 'widgets.wysiwyg.py, line 14:\n    return self.parent().parent().editor.execCommand(*args, **kwargs)';
	$m.__track_lines__[16] = 'widgets.wysiwyg.py, line 16:\n    class BasicTextAction(BasicEditorAction):';
	$m.__track_lines__[17] = 'widgets.wysiwyg.py, line 17:\n    cmd = None';
	$m.__track_lines__[18] = 'widgets.wysiwyg.py, line 18:\n    isActiveTag = None';
	$m.__track_lines__[19] = 'widgets.wysiwyg.py, line 19:\n    title = None';
	$m.__track_lines__[21] = 'widgets.wysiwyg.py, line 21:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[22] = 'widgets.wysiwyg.py, line 22:\n    assert self.cmd is not None';
	$m.__track_lines__[23] = 'widgets.wysiwyg.py, line 23:\n    super( BasicTextAction, self ).__init__( self.cmd, *args, **kwargs )';
	$m.__track_lines__[24] = 'widgets.wysiwyg.py, line 24:\n    self["class"] = "icon text style"';
	$m.__track_lines__[25] = 'widgets.wysiwyg.py, line 25:\n    self["class"].append( self.cmd )';
	$m.__track_lines__[26] = 'widgets.wysiwyg.py, line 26:\n    if self.title:';
	$m.__track_lines__[27] = 'widgets.wysiwyg.py, line 27:\n    self["title"] = self.title';
	$m.__track_lines__[29] = 'widgets.wysiwyg.py, line 29:\n    def onAttach(self):';
	$m.__track_lines__[30] = 'widgets.wysiwyg.py, line 30:\n    super(BasicTextAction, self).onAttach( )';
	$m.__track_lines__[31] = 'widgets.wysiwyg.py, line 31:\n    if self.isActiveTag:';
	$m.__track_lines__[32] = 'widgets.wysiwyg.py, line 32:\n    self.parent().parent().cursorMovedEvent.register( self )';
	$m.__track_lines__[34] = 'widgets.wysiwyg.py, line 34:\n    def onDetach(self):';
	$m.__track_lines__[35] = 'widgets.wysiwyg.py, line 35:\n    super(BasicTextAction, self).onDetach( )';
	$m.__track_lines__[36] = 'widgets.wysiwyg.py, line 36:\n    if self.isActiveTag:';
	$m.__track_lines__[37] = 'widgets.wysiwyg.py, line 37:\n    self.parent().parent().cursorMovedEvent.unregister( self )';
	$m.__track_lines__[39] = 'widgets.wysiwyg.py, line 39:\n    def onCursorMoved(self, nodeStack):';
	$m.__track_lines__[40] = 'widgets.wysiwyg.py, line 40:\n    if self.isActiveTag in [(x.tagName if "tagName" in dir(x) else "") for x in nodeStack]:';
	$m.__track_lines__[41] = 'widgets.wysiwyg.py, line 41:\n    if not "isactive" in self["class"]:';
	$m.__track_lines__[42] = 'widgets.wysiwyg.py, line 42:\n    self["class"].append("isactive")';
	$m.__track_lines__[44] = 'widgets.wysiwyg.py, line 44:\n    if "isactive" in self["class"]:';
	$m.__track_lines__[45] = 'widgets.wysiwyg.py, line 45:\n    self["class"].remove("isactive")';
	$m.__track_lines__[47] = 'widgets.wysiwyg.py, line 47:\n    def onClick(self, sender=None):';
	$m.__track_lines__[48] = 'widgets.wysiwyg.py, line 48:\n    self.execCommand(self.cmd)';
	$m.__track_lines__[50] = 'widgets.wysiwyg.py, line 50:\n    def resetLoadingState(self):';
	$m.__track_lines__[51] = 'widgets.wysiwyg.py, line 51:\n    pass';
	$m.__track_lines__[54] = 'widgets.wysiwyg.py, line 54:\n    class TextStyleBold( BasicTextAction ):';
	$m.__track_lines__[55] = 'widgets.wysiwyg.py, line 55:\n    cmd = "bold"';
	$m.__track_lines__[56] = 'widgets.wysiwyg.py, line 56:\n    isActiveTag = "B"';
	$m.__track_lines__[57] = 'widgets.wysiwyg.py, line 57:\n    title = translate("Bold")';
	$m.__track_lines__[62] = 'widgets.wysiwyg.py, line 62:\n    actionDelegateSelector.insert( 1, lambda modul, handler, actionName: actionName=="style.text.bold", TextStyleBold )';
	$m.__track_lines__[64] = 'widgets.wysiwyg.py, line 64:\n    class TextStyleItalic( BasicTextAction ):';
	$m.__track_lines__[65] = 'widgets.wysiwyg.py, line 65:\n    cmd = "italic"';
	$m.__track_lines__[66] = 'widgets.wysiwyg.py, line 66:\n    isActiveTag = "I"';
	$m.__track_lines__[67] = 'widgets.wysiwyg.py, line 67:\n    title = translate("Italic")';
	$m.__track_lines__[72] = 'widgets.wysiwyg.py, line 72:\n    actionDelegateSelector.insert( 1, lambda modul, handler, actionName: actionName=="style.text.italic", TextStyleItalic )';
	$m.__track_lines__[75] = 'widgets.wysiwyg.py, line 75:\n    class BasicFormatBlockAction( BasicTextAction ):';
	$m.__track_lines__[76] = 'widgets.wysiwyg.py, line 76:\n    def onClick(self, sender=None):';
	$m.__track_lines__[77] = 'widgets.wysiwyg.py, line 77:\n    self.execCommand("formatBlock", self.cmd)';
	$m.__track_lines__[79] = 'widgets.wysiwyg.py, line 79:\n    class TextStyleH1( BasicFormatBlockAction ):';
	$m.__track_lines__[80] = 'widgets.wysiwyg.py, line 80:\n    cmd = "H1"';
	$m.__track_lines__[81] = 'widgets.wysiwyg.py, line 81:\n    title = translate("H1")';
	$m.__track_lines__[83] = 'widgets.wysiwyg.py, line 83:\n    actionDelegateSelector.insert( 1, lambda modul, handler, actionName: actionName=="style.text.h1", TextStyleH1 )';
	$m.__track_lines__[85] = 'widgets.wysiwyg.py, line 85:\n    class TextStyleH2( BasicFormatBlockAction ):';
	$m.__track_lines__[86] = 'widgets.wysiwyg.py, line 86:\n    cmd = "H2"';
	$m.__track_lines__[87] = 'widgets.wysiwyg.py, line 87:\n    title = translate("H2")';
	$m.__track_lines__[89] = 'widgets.wysiwyg.py, line 89:\n    actionDelegateSelector.insert( 1, lambda modul, handler, actionName: actionName=="style.text.h2", TextStyleH2 )';
	$m.__track_lines__[91] = 'widgets.wysiwyg.py, line 91:\n    class TextStyleH3( BasicFormatBlockAction ):';
	$m.__track_lines__[92] = 'widgets.wysiwyg.py, line 92:\n    cmd = "H3"';
	$m.__track_lines__[93] = 'widgets.wysiwyg.py, line 93:\n    title = translate("H3")';
	$m.__track_lines__[95] = 'widgets.wysiwyg.py, line 95:\n    actionDelegateSelector.insert( 1, lambda modul, handler, actionName: actionName=="style.text.h3", TextStyleH3 )';
	$m.__track_lines__[97] = 'widgets.wysiwyg.py, line 97:\n    class TextStyleH4( BasicFormatBlockAction ):';
	$m.__track_lines__[98] = 'widgets.wysiwyg.py, line 98:\n    cmd = "H4"';
	$m.__track_lines__[99] = 'widgets.wysiwyg.py, line 99:\n    title = translate("H4")';
	$m.__track_lines__[101] = 'widgets.wysiwyg.py, line 101:\n    actionDelegateSelector.insert( 1, lambda modul, handler, actionName: actionName=="style.text.h4", TextStyleH4 )';
	$m.__track_lines__[103] = 'widgets.wysiwyg.py, line 103:\n    class TextStyleH5( BasicFormatBlockAction ):';
	$m.__track_lines__[104] = 'widgets.wysiwyg.py, line 104:\n    cmd = "H5"';
	$m.__track_lines__[105] = 'widgets.wysiwyg.py, line 105:\n    title = translate("H5")';
	$m.__track_lines__[107] = 'widgets.wysiwyg.py, line 107:\n    actionDelegateSelector.insert( 1, lambda modul, handler, actionName: actionName=="style.text.h5", TextStyleH5 )';
	$m.__track_lines__[109] = 'widgets.wysiwyg.py, line 109:\n    class TextStyleH6( BasicFormatBlockAction ):';
	$m.__track_lines__[110] = 'widgets.wysiwyg.py, line 110:\n    cmd = "H6"';
	$m.__track_lines__[111] = 'widgets.wysiwyg.py, line 111:\n    title = translate("H6")';
	$m.__track_lines__[113] = 'widgets.wysiwyg.py, line 113:\n    actionDelegateSelector.insert( 1, lambda modul, handler, actionName: actionName=="style.text.h6", TextStyleH6 )';
	$m.__track_lines__[116] = 'widgets.wysiwyg.py, line 116:\n    class TextStyleBlockQuote( BasicFormatBlockAction ):';
	$m.__track_lines__[117] = 'widgets.wysiwyg.py, line 117:\n    cmd = "BLOCKQUOTE"';
	$m.__track_lines__[118] = 'widgets.wysiwyg.py, line 118:\n    title = translate("Blockqoute")';
	$m.__track_lines__[122] = 'widgets.wysiwyg.py, line 122:\n    class TextStyleJustifyCenter( BasicTextAction ):';
	$m.__track_lines__[123] = 'widgets.wysiwyg.py, line 123:\n    cmd = "justifyCenter"';
	$m.__track_lines__[124] = 'widgets.wysiwyg.py, line 124:\n    title = translate("Justifiy Center")';
	$m.__track_lines__[125] = 'widgets.wysiwyg.py, line 125:\n    actionDelegateSelector.insert( 1, lambda modul, handler, actionName: actionName=="style.text.justifyCenter", TextStyleJustifyCenter )';
	$m.__track_lines__[127] = 'widgets.wysiwyg.py, line 127:\n    class TextStyleJustifyLeft( BasicTextAction ):';
	$m.__track_lines__[128] = 'widgets.wysiwyg.py, line 128:\n    cmd = "justifyLeft"';
	$m.__track_lines__[129] = 'widgets.wysiwyg.py, line 129:\n    title = translate("Justifiy Left")';
	$m.__track_lines__[130] = 'widgets.wysiwyg.py, line 130:\n    actionDelegateSelector.insert( 1, lambda modul, handler, actionName: actionName=="style.text.justifyLeft", TextStyleJustifyLeft )';
	$m.__track_lines__[132] = 'widgets.wysiwyg.py, line 132:\n    class TextStyleJustifyRight( BasicTextAction ):';
	$m.__track_lines__[133] = 'widgets.wysiwyg.py, line 133:\n    cmd = "justifyRight"';
	$m.__track_lines__[134] = 'widgets.wysiwyg.py, line 134:\n    title = translate("Justifiy Right")';
	$m.__track_lines__[135] = 'widgets.wysiwyg.py, line 135:\n    actionDelegateSelector.insert( 1, lambda modul, handler, actionName: actionName=="style.text.justifyRight", TextStyleJustifyRight )';
	$m.__track_lines__[139] = 'widgets.wysiwyg.py, line 139:\n    class TextInsertOrderedList( BasicTextAction ):';
	$m.__track_lines__[140] = 'widgets.wysiwyg.py, line 140:\n    cmd = "insertOrderedList"';
	$m.__track_lines__[141] = 'widgets.wysiwyg.py, line 141:\n    title = translate("Insert an ordered List")';
	$m.__track_lines__[142] = 'widgets.wysiwyg.py, line 142:\n    actionDelegateSelector.insert( 1, lambda modul, handler, actionName: actionName=="text.orderedList", TextInsertOrderedList )';
	$m.__track_lines__[144] = 'widgets.wysiwyg.py, line 144:\n    class TextInsertUnorderedList( BasicTextAction ):';
	$m.__track_lines__[145] = 'widgets.wysiwyg.py, line 145:\n    cmd = "insertUnorderedList"';
	$m.__track_lines__[146] = 'widgets.wysiwyg.py, line 146:\n    title = translate("Insert an unordered List")';
	$m.__track_lines__[147] = 'widgets.wysiwyg.py, line 147:\n    actionDelegateSelector.insert( 1, lambda modul, handler, actionName: actionName=="text.unorderedList", TextInsertUnorderedList )';
	$m.__track_lines__[152] = 'widgets.wysiwyg.py, line 152:\n    class TextIndent( BasicTextAction ):';
	$m.__track_lines__[153] = 'widgets.wysiwyg.py, line 153:\n    cmd = "indent"';
	$m.__track_lines__[154] = 'widgets.wysiwyg.py, line 154:\n    title = translate("Indent more")';
	$m.__track_lines__[155] = 'widgets.wysiwyg.py, line 155:\n    actionDelegateSelector.insert( 1, lambda modul, handler, actionName: actionName=="text.indent", TextIndent )';
	$m.__track_lines__[158] = 'widgets.wysiwyg.py, line 158:\n    class TextOutdent( BasicTextAction ):';
	$m.__track_lines__[159] = 'widgets.wysiwyg.py, line 159:\n    cmd = "outdent"';
	$m.__track_lines__[160] = 'widgets.wysiwyg.py, line 160:\n    title = translate("Indent less")';
	$m.__track_lines__[161] = 'widgets.wysiwyg.py, line 161:\n    actionDelegateSelector.insert( 1, lambda modul, handler, actionName: actionName=="text.outdent", TextOutdent )';
	$m.__track_lines__[165] = 'widgets.wysiwyg.py, line 165:\n    class TextRemoveFormat( BasicTextAction ):';
	$m.__track_lines__[166] = 'widgets.wysiwyg.py, line 166:\n    cmd = "removeformat"';
	$m.__track_lines__[167] = 'widgets.wysiwyg.py, line 167:\n    title = translate("Remove all formatting")';
	$m.__track_lines__[169] = 'widgets.wysiwyg.py, line 169:\n    def onClick(self, sender=None):';
	$m.__track_lines__[170] = 'widgets.wysiwyg.py, line 170:\n    self.execCommand(self.cmd)';
	$m.__track_lines__[172] = 'widgets.wysiwyg.py, line 172:\n    node = eval("window.top.getSelection().anchorNode")';
	$m.__track_lines__[174] = 'widgets.wysiwyg.py, line 174:\n    i = 10';
	$m.__track_lines__[175] = 'widgets.wysiwyg.py, line 175:\n    while i>0 and node and node != self.parent().parent().editor.element:';
	$m.__track_lines__[176] = 'widgets.wysiwyg.py, line 176:\n    i -= 1';
	$m.__track_lines__[178] = 'widgets.wysiwyg.py, line 178:\n    if not "tagName" in dir( node ):';
	$m.__track_lines__[179] = 'widgets.wysiwyg.py, line 179:\n    node = node.parentNode';
	$m.__track_lines__[180] = 'widgets.wysiwyg.py, line 180:\n    continue';
	$m.__track_lines__[182] = 'widgets.wysiwyg.py, line 182:\n    if node.tagName in ["H%s" % x for x in range(0,6)]:';
	$m.__track_lines__[183] = 'widgets.wysiwyg.py, line 183:\n    self.execCommand("formatBlock", "div")';
	$m.__track_lines__[184] = 'widgets.wysiwyg.py, line 184:\n    return';
	$m.__track_lines__[186] = 'widgets.wysiwyg.py, line 186:\n    node = node.parentNode';
	$m.__track_lines__[188] = 'widgets.wysiwyg.py, line 188:\n    actionDelegateSelector.insert( 1, lambda modul, handler, actionName: actionName=="text.removeformat", TextRemoveFormat )';
	$m.__track_lines__[194] = 'widgets.wysiwyg.py, line 194:\n    class TextInsertImageAction(BasicEditorAction):';
	$m.__track_lines__[195] = 'widgets.wysiwyg.py, line 195:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[196] = 'widgets.wysiwyg.py, line 196:\n    super( TextInsertImageAction, self ).__init__( translate("Insert Image"), *args, **kwargs )';
	$m.__track_lines__[197] = 'widgets.wysiwyg.py, line 197:\n    self["class"] = "icon text image"';
	$m.__track_lines__[198] = 'widgets.wysiwyg.py, line 198:\n    self["title"] = translate("Insert Image")';
	$m.__track_lines__[200] = 'widgets.wysiwyg.py, line 200:\n    def onClick(self, sender=None):';
	$m.__track_lines__[201] = 'widgets.wysiwyg.py, line 201:\n    currentSelector = FileWidget( "file", isSelector=True )';
	$m.__track_lines__[202] = 'widgets.wysiwyg.py, line 202:\n    currentSelector.selectionActivatedEvent.register( self )';
	$m.__track_lines__[203] = 'widgets.wysiwyg.py, line 203:\n    conf["mainWindow"].stackWidget( currentSelector )';
	$m.__track_lines__[205] = 'widgets.wysiwyg.py, line 205:\n    def onSelectionActivated(self, selectWdg, selection):';
	$m.__track_lines__[206] = 'widgets.wysiwyg.py, line 206:\n    print("onSelectionActivated")';
	$m.__track_lines__[208] = 'widgets.wysiwyg.py, line 208:\n    if not selection:';
	$m.__track_lines__[209] = 'widgets.wysiwyg.py, line 209:\n    return';
	$m.__track_lines__[211] = 'widgets.wysiwyg.py, line 211:\n    print(selection)';
	$m.__track_lines__[213] = 'widgets.wysiwyg.py, line 213:\n    for item in selection:';
	$m.__track_lines__[214] = 'widgets.wysiwyg.py, line 214:\n    dataUrl = "/file/download/%s/%s" % (item.data["dlkey"], item.data["name"].replace("\\"",""))';
	$m.__track_lines__[215] = 'widgets.wysiwyg.py, line 215:\n    if "mimetype" in item.data.keys() and item.data["mimetype"].startswith("image/"):';
	$m.__track_lines__[216] = 'widgets.wysiwyg.py, line 216:\n    self.execCommand("insertImage", dataUrl)';
	$m.__track_lines__[218] = 'widgets.wysiwyg.py, line 218:\n    self.execCommand("createLink", dataUrl + "?download=1")';
	$m.__track_lines__[221] = 'widgets.wysiwyg.py, line 220:\n    @staticmethod ... def isSuitableFor( modul, handler, actionName ):';
	$m.__track_lines__[222] = 'widgets.wysiwyg.py, line 222:\n    return( actionName=="text.image" )';
	$m.__track_lines__[224] = 'widgets.wysiwyg.py, line 224:\n    def resetLoadingState(self):';
	$m.__track_lines__[225] = 'widgets.wysiwyg.py, line 225:\n    pass';
	$m.__track_lines__[227] = 'widgets.wysiwyg.py, line 227:\n    actionDelegateSelector.insert( 1, TextInsertImageAction.isSuitableFor, TextInsertImageAction )';
	$m.__track_lines__[229] = 'widgets.wysiwyg.py, line 229:\n    class TextInsertLinkAction(BasicEditorAction):';
	$m.__track_lines__[230] = 'widgets.wysiwyg.py, line 230:\n    newLinkIdx = 0';
	$m.__track_lines__[231] = 'widgets.wysiwyg.py, line 231:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[232] = 'widgets.wysiwyg.py, line 232:\n    super( TextInsertLinkAction, self ).__init__( translate("Insert Link"), *args, **kwargs )';
	$m.__track_lines__[233] = 'widgets.wysiwyg.py, line 233:\n    self["class"] = "icon text link"';
	$m.__track_lines__[234] = 'widgets.wysiwyg.py, line 234:\n    self["title"] = translate("Insert Link")';
	$m.__track_lines__[236] = 'widgets.wysiwyg.py, line 236:\n    def onClick(self, sender=None):';
	$m.__track_lines__[237] = 'widgets.wysiwyg.py, line 237:\n    newLinkTarget = "#linkidx-%s-%s" % (TextInsertLinkAction.newLinkIdx, time() )';
	$m.__track_lines__[239] = 'widgets.wysiwyg.py, line 239:\n    self.execCommand("createLink", "#%s" % newLinkTarget)';
	$m.__track_lines__[240] = 'widgets.wysiwyg.py, line 240:\n    self.parent().parent().linkEditor.openLink(newLinkTarget)';
	$m.__track_lines__[242] = 'widgets.wysiwyg.py, line 242:\n    def createLink(self, dialog, value):';
	$m.__track_lines__[243] = 'widgets.wysiwyg.py, line 243:\n    if value:';
	$m.__track_lines__[244] = 'widgets.wysiwyg.py, line 244:\n    self.parent().parent().editor.focus()';
	$m.__track_lines__[247] = 'widgets.wysiwyg.py, line 246:\n    @staticmethod ... def isSuitableFor( modul, handler, actionName ):';
	$m.__track_lines__[248] = 'widgets.wysiwyg.py, line 248:\n    return( actionName=="text.link" )';
	$m.__track_lines__[250] = 'widgets.wysiwyg.py, line 250:\n    def resetLoadingState(self):';
	$m.__track_lines__[251] = 'widgets.wysiwyg.py, line 251:\n    pass';
	$m.__track_lines__[253] = 'widgets.wysiwyg.py, line 253:\n    actionDelegateSelector.insert( 1, TextInsertLinkAction.isSuitableFor, TextInsertLinkAction )';
	$m.__track_lines__[256] = 'widgets.wysiwyg.py, line 256:\n    class CreateTablePopup( html5.ext.Popup ):';
	$m.__track_lines__[257] = 'widgets.wysiwyg.py, line 257:\n    def __init__(self, targetNode, *args, **kwargs ):';
	$m.__track_lines__[258] = 'widgets.wysiwyg.py, line 258:\n    super( CreateTablePopup, self ).__init__( *args, **kwargs )';
	$m.__track_lines__[259] = 'widgets.wysiwyg.py, line 259:\n    assert targetNode';
	$m.__track_lines__[261] = 'widgets.wysiwyg.py, line 261:\n    while not "innerHTML" in dir(targetNode):';
	$m.__track_lines__[262] = 'widgets.wysiwyg.py, line 262:\n    targetNode = targetNode.parentNode';
	$m.__track_lines__[264] = 'widgets.wysiwyg.py, line 264:\n    self.targetNode = targetNode';
	$m.__track_lines__[265] = 'widgets.wysiwyg.py, line 265:\n    self["class"].append("createtable")';
	$m.__track_lines__[266] = 'widgets.wysiwyg.py, line 266:\n    self.rowInput = html5.Input()';
	$m.__track_lines__[267] = 'widgets.wysiwyg.py, line 267:\n    self.rowInput["type"] = "number"';
	$m.__track_lines__[268] = 'widgets.wysiwyg.py, line 268:\n    self.rowInput["value"] = 3';
	$m.__track_lines__[269] = 'widgets.wysiwyg.py, line 269:\n    self.appendChild( self.rowInput )';
	$m.__track_lines__[270] = 'widgets.wysiwyg.py, line 270:\n    l = html5.Label(translate("Rows"), forElem=self.rowInput)';
	$m.__track_lines__[271] = 'widgets.wysiwyg.py, line 271:\n    l["class"].append("rowlbl")';
	$m.__track_lines__[272] = 'widgets.wysiwyg.py, line 272:\n    self.appendChild( l )';
	$m.__track_lines__[273] = 'widgets.wysiwyg.py, line 273:\n    self.colInput = html5.Input()';
	$m.__track_lines__[274] = 'widgets.wysiwyg.py, line 274:\n    self.colInput["type"] = "number"';
	$m.__track_lines__[275] = 'widgets.wysiwyg.py, line 275:\n    self.colInput["value"] = 4';
	$m.__track_lines__[276] = 'widgets.wysiwyg.py, line 276:\n    self.appendChild( self.colInput )';
	$m.__track_lines__[277] = 'widgets.wysiwyg.py, line 277:\n    l = html5.Label(translate("Cols"), forElem=self.colInput)';
	$m.__track_lines__[278] = 'widgets.wysiwyg.py, line 278:\n    l["class"].append("collbl")';
	$m.__track_lines__[279] = 'widgets.wysiwyg.py, line 279:\n    self.appendChild( l )';
	$m.__track_lines__[280] = 'widgets.wysiwyg.py, line 280:\n    self.insertHeader = html5.Input()';
	$m.__track_lines__[281] = 'widgets.wysiwyg.py, line 281:\n    self.insertHeader["type"] = "checkbox"';
	$m.__track_lines__[282] = 'widgets.wysiwyg.py, line 282:\n    self.appendChild( self.insertHeader )';
	$m.__track_lines__[283] = 'widgets.wysiwyg.py, line 283:\n    l = html5.Label(translate("Insert Table Header"), forElem=self.insertHeader)';
	$m.__track_lines__[284] = 'widgets.wysiwyg.py, line 284:\n    l["class"].append("headerlbl")';
	$m.__track_lines__[285] = 'widgets.wysiwyg.py, line 285:\n    self.appendChild( l )';
	$m.__track_lines__[286] = 'widgets.wysiwyg.py, line 286:\n    self.appendChild( html5.ext.Button( "Cancel", callback=self.doClose ) )';
	$m.__track_lines__[287] = 'widgets.wysiwyg.py, line 287:\n    self.appendChild( html5.ext.Button( "Create", callback=self.createTable ) )';
	$m.__track_lines__[289] = 'widgets.wysiwyg.py, line 289:\n    def doClose(self, *args, **kwargs):';
	$m.__track_lines__[290] = 'widgets.wysiwyg.py, line 290:\n    self.targetNode = None';
	$m.__track_lines__[291] = 'widgets.wysiwyg.py, line 291:\n    self.close()';
	$m.__track_lines__[293] = 'widgets.wysiwyg.py, line 293:\n    def createTable(self, *args, **kwargs):';
	$m.__track_lines__[294] = 'widgets.wysiwyg.py, line 294:\n    rows = int(self.rowInput["value"])';
	$m.__track_lines__[295] = 'widgets.wysiwyg.py, line 295:\n    cols = int(self.colInput["value"])';
	$m.__track_lines__[296] = 'widgets.wysiwyg.py, line 296:\n    insertHeader = self.insertHeader["checked"]';
	$m.__track_lines__[297] = 'widgets.wysiwyg.py, line 297:\n    innerHtml = "<table>"';
	$m.__track_lines__[298] = 'widgets.wysiwyg.py, line 298:\n    if insertHeader:';
	$m.__track_lines__[299] = 'widgets.wysiwyg.py, line 299:\n    innerHtml += "<thead>"';
	$m.__track_lines__[300] = 'widgets.wysiwyg.py, line 300:\n    for c in range(0,cols):';
	$m.__track_lines__[301] = 'widgets.wysiwyg.py, line 301:\n    innerHtml += "<th>&nbsp;</th>"';
	$m.__track_lines__[302] = 'widgets.wysiwyg.py, line 302:\n    innerHtml += "</thead>"';
	$m.__track_lines__[303] = 'widgets.wysiwyg.py, line 303:\n    for x in range(0,rows):';
	$m.__track_lines__[304] = 'widgets.wysiwyg.py, line 304:\n    innerHtml += "<tr>"';
	$m.__track_lines__[305] = 'widgets.wysiwyg.py, line 305:\n    for y in range(0,cols):';
	$m.__track_lines__[306] = 'widgets.wysiwyg.py, line 306:\n    innerHtml += "<td>%s - %s</td>" % (x,y)';
	$m.__track_lines__[307] = 'widgets.wysiwyg.py, line 307:\n    innerHtml += "</tr>"';
	$m.__track_lines__[308] = 'widgets.wysiwyg.py, line 308:\n    innerHtml += "</table>"';
	$m.__track_lines__[309] = 'widgets.wysiwyg.py, line 309:\n    self.targetNode.innerHTML = self.targetNode.innerHTML+innerHtml';
	$m.__track_lines__[310] = 'widgets.wysiwyg.py, line 310:\n    self.doClose()';
	$m.__track_lines__[312] = 'widgets.wysiwyg.py, line 312:\n    class TextInsertTableAction( html5.ext.Button ):';
	$m.__track_lines__[313] = 'widgets.wysiwyg.py, line 313:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[314] = 'widgets.wysiwyg.py, line 314:\n    super( TextInsertTableAction, self ).__init__( translate("Insert Table"), *args, **kwargs )';
	$m.__track_lines__[315] = 'widgets.wysiwyg.py, line 315:\n    self["class"] = "icon text table"';
	$m.__track_lines__[316] = 'widgets.wysiwyg.py, line 316:\n    self["title"] = translate("Insert Table")';
	$m.__track_lines__[318] = 'widgets.wysiwyg.py, line 318:\n    def onClick(self, sender=None):';
	$m.__track_lines__[319] = 'widgets.wysiwyg.py, line 319:\n    self.parent().parent().editor.focus()';
	$m.__track_lines__[320] = 'widgets.wysiwyg.py, line 320:\n    node = eval("window.top.getSelection().anchorNode")';
	$m.__track_lines__[322] = 'widgets.wysiwyg.py, line 322:\n    if node:';
	$m.__track_lines__[323] = 'widgets.wysiwyg.py, line 323:\n    CreateTablePopup( node )';
	$m.__track_lines__[326] = 'widgets.wysiwyg.py, line 325:\n    @staticmethod ... def isSuitableFor( modul, handler, actionName ):';
	$m.__track_lines__[327] = 'widgets.wysiwyg.py, line 327:\n    return( actionName=="text.table" )';
	$m.__track_lines__[329] = 'widgets.wysiwyg.py, line 329:\n    def resetLoadingState(self):';
	$m.__track_lines__[330] = 'widgets.wysiwyg.py, line 330:\n    pass';
	$m.__track_lines__[332] = 'widgets.wysiwyg.py, line 332:\n    actionDelegateSelector.insert( 1, TextInsertTableAction.isSuitableFor, TextInsertTableAction )';
	$m.__track_lines__[334] = 'widgets.wysiwyg.py, line 334:\n    class TableInsertRowBeforeAction( html5.ext.Button ):';
	$m.__track_lines__[335] = 'widgets.wysiwyg.py, line 335:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[336] = 'widgets.wysiwyg.py, line 336:\n    super( TableInsertRowBeforeAction, self ).__init__( translate("Insert Table Row before"), *args, **kwargs )';
	$m.__track_lines__[337] = 'widgets.wysiwyg.py, line 337:\n    self["class"] = "icon text table newrow before"';
	$m.__track_lines__[338] = 'widgets.wysiwyg.py, line 338:\n    self["title"] = translate("Insert Table Row before")';
	$m.__track_lines__[340] = 'widgets.wysiwyg.py, line 340:\n    def onClick(self, sender=None):';
	$m.__track_lines__[341] = 'widgets.wysiwyg.py, line 341:\n    node = eval("window.top.getSelection().anchorNode")';
	$m.__track_lines__[342] = 'widgets.wysiwyg.py, line 342:\n    i = 10';
	$m.__track_lines__[343] = 'widgets.wysiwyg.py, line 343:\n    while i>0 and node and node != self.parent().parent().editor.element:';
	$m.__track_lines__[344] = 'widgets.wysiwyg.py, line 344:\n    i -= 1';
	$m.__track_lines__[345] = 'widgets.wysiwyg.py, line 345:\n    if not "tagName" in dir( node ):';
	$m.__track_lines__[346] = 'widgets.wysiwyg.py, line 346:\n    node = node.parentNode';
	$m.__track_lines__[347] = 'widgets.wysiwyg.py, line 347:\n    continue';
	$m.__track_lines__[348] = 'widgets.wysiwyg.py, line 348:\n    if node.tagName=="TR":';
	$m.__track_lines__[349] = 'widgets.wysiwyg.py, line 349:\n    tr = html5.document.createElement("tr")';
	$m.__track_lines__[350] = 'widgets.wysiwyg.py, line 350:\n    for c in range(0,node.children.length):';
	$m.__track_lines__[351] = 'widgets.wysiwyg.py, line 351:\n    td = html5.document.createElement("td")';
	$m.__track_lines__[352] = 'widgets.wysiwyg.py, line 352:\n    tr.appendChild( td )';
	$m.__track_lines__[353] = 'widgets.wysiwyg.py, line 353:\n    node.parentNode.insertBefore( tr, node )';
	$m.__track_lines__[354] = 'widgets.wysiwyg.py, line 354:\n    return';
	$m.__track_lines__[355] = 'widgets.wysiwyg.py, line 355:\n    node = node.parentNode';
	$m.__track_lines__[358] = 'widgets.wysiwyg.py, line 357:\n    @staticmethod ... def isSuitableFor( modul, handler, actionName ):';
	$m.__track_lines__[359] = 'widgets.wysiwyg.py, line 359:\n    return( actionName=="text.table.newrow.before" )';
	$m.__track_lines__[361] = 'widgets.wysiwyg.py, line 361:\n    def resetLoadingState(self):';
	$m.__track_lines__[362] = 'widgets.wysiwyg.py, line 362:\n    pass';
	$m.__track_lines__[364] = 'widgets.wysiwyg.py, line 364:\n    actionDelegateSelector.insert( 1, TableInsertRowBeforeAction.isSuitableFor, TableInsertRowBeforeAction )';
	$m.__track_lines__[366] = 'widgets.wysiwyg.py, line 366:\n    class TableInsertRowAfterAction( html5.ext.Button ):';
	$m.__track_lines__[367] = 'widgets.wysiwyg.py, line 367:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[368] = 'widgets.wysiwyg.py, line 368:\n    super( TableInsertRowAfterAction, self ).__init__( translate("Insert Table Row after"), *args, **kwargs )';
	$m.__track_lines__[369] = 'widgets.wysiwyg.py, line 369:\n    self["class"] = "icon text table newrow after"';
	$m.__track_lines__[370] = 'widgets.wysiwyg.py, line 370:\n    self["title"] = translate("Insert Table Row after")';
	$m.__track_lines__[372] = 'widgets.wysiwyg.py, line 372:\n    def onClick(self, sender=None):';
	$m.__track_lines__[373] = 'widgets.wysiwyg.py, line 373:\n    node = eval("window.top.getSelection().anchorNode")';
	$m.__track_lines__[374] = 'widgets.wysiwyg.py, line 374:\n    i = 10';
	$m.__track_lines__[375] = 'widgets.wysiwyg.py, line 375:\n    while i>0 and node and node != self.parent().parent().editor.element:';
	$m.__track_lines__[376] = 'widgets.wysiwyg.py, line 376:\n    i -= 1';
	$m.__track_lines__[377] = 'widgets.wysiwyg.py, line 377:\n    if not "tagName" in dir( node ):';
	$m.__track_lines__[378] = 'widgets.wysiwyg.py, line 378:\n    node = node.parentNode';
	$m.__track_lines__[379] = 'widgets.wysiwyg.py, line 379:\n    continue';
	$m.__track_lines__[380] = 'widgets.wysiwyg.py, line 380:\n    if node.tagName=="TR":';
	$m.__track_lines__[381] = 'widgets.wysiwyg.py, line 381:\n    tr = html5.document.createElement("tr")';
	$m.__track_lines__[382] = 'widgets.wysiwyg.py, line 382:\n    for c in range(0,node.children.length):';
	$m.__track_lines__[383] = 'widgets.wysiwyg.py, line 383:\n    td = html5.document.createElement("td")';
	$m.__track_lines__[384] = 'widgets.wysiwyg.py, line 384:\n    tr.appendChild( td )';
	$m.__track_lines__[385] = 'widgets.wysiwyg.py, line 385:\n    if node.nextSibling:';
	$m.__track_lines__[386] = 'widgets.wysiwyg.py, line 386:\n    node.parentNode.insertBefore( tr, node.nextSibling )';
	$m.__track_lines__[388] = 'widgets.wysiwyg.py, line 388:\n    node.parentNode.appendChild( tr )';
	$m.__track_lines__[389] = 'widgets.wysiwyg.py, line 389:\n    return';
	$m.__track_lines__[390] = 'widgets.wysiwyg.py, line 390:\n    node = node.parentNode';
	$m.__track_lines__[393] = 'widgets.wysiwyg.py, line 392:\n    @staticmethod ... def isSuitableFor( modul, handler, actionName ):';
	$m.__track_lines__[394] = 'widgets.wysiwyg.py, line 394:\n    return( actionName=="text.table.newrow.after" )';
	$m.__track_lines__[396] = 'widgets.wysiwyg.py, line 396:\n    def resetLoadingState(self):';
	$m.__track_lines__[397] = 'widgets.wysiwyg.py, line 397:\n    pass';
	$m.__track_lines__[399] = 'widgets.wysiwyg.py, line 399:\n    actionDelegateSelector.insert( 1, TableInsertRowAfterAction.isSuitableFor, TableInsertRowAfterAction )';
	$m.__track_lines__[401] = 'widgets.wysiwyg.py, line 401:\n    class TableInsertColBeforeAction( html5.ext.Button ):';
	$m.__track_lines__[402] = 'widgets.wysiwyg.py, line 402:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[403] = 'widgets.wysiwyg.py, line 403:\n    super( TableInsertColBeforeAction, self ).__init__( translate("Insert Table Col before"), *args, **kwargs )';
	$m.__track_lines__[404] = 'widgets.wysiwyg.py, line 404:\n    self["class"] = "icon text table newcol before"';
	$m.__track_lines__[405] = 'widgets.wysiwyg.py, line 405:\n    self["title"] = translate("Insert Table Col before")';
	$m.__track_lines__[407] = 'widgets.wysiwyg.py, line 407:\n    def onClick(self, sender=None):';
	$m.__track_lines__[408] = 'widgets.wysiwyg.py, line 408:\n    node = eval("window.top.getSelection().anchorNode")';
	$m.__track_lines__[409] = 'widgets.wysiwyg.py, line 409:\n    td = None';
	$m.__track_lines__[410] = 'widgets.wysiwyg.py, line 410:\n    tr = None';
	$m.__track_lines__[411] = 'widgets.wysiwyg.py, line 411:\n    table = None';
	$m.__track_lines__[412] = 'widgets.wysiwyg.py, line 412:\n    i = 10';
	$m.__track_lines__[414] = 'widgets.wysiwyg.py, line 414:\n    while i>0 and node and node != self.parent().parent().editor.element:';
	$m.__track_lines__[415] = 'widgets.wysiwyg.py, line 415:\n    i -= 1';
	$m.__track_lines__[416] = 'widgets.wysiwyg.py, line 416:\n    if not "tagName" in dir( node ):';
	$m.__track_lines__[417] = 'widgets.wysiwyg.py, line 417:\n    node = node.parentNode';
	$m.__track_lines__[418] = 'widgets.wysiwyg.py, line 418:\n    continue';
	$m.__track_lines__[419] = 'widgets.wysiwyg.py, line 419:\n    if node.tagName=="TD":';
	$m.__track_lines__[420] = 'widgets.wysiwyg.py, line 420:\n    td = node';
	$m.__track_lines__[422] = 'widgets.wysiwyg.py, line 422:\n    tr = node';
	$m.__track_lines__[424] = 'widgets.wysiwyg.py, line 424:\n    table = node';
	$m.__track_lines__[425] = 'widgets.wysiwyg.py, line 425:\n    break';
	$m.__track_lines__[426] = 'widgets.wysiwyg.py, line 426:\n    node = node.parentNode';
	$m.__track_lines__[427] = 'widgets.wysiwyg.py, line 427:\n    if td and tr and table:';
	$m.__track_lines__[428] = 'widgets.wysiwyg.py, line 428:\n    cellIdx = 0 # Before which column shall we insert a new col?';
	$m.__track_lines__[429] = 'widgets.wysiwyg.py, line 429:\n    for x in range(0, tr.children.length):';
	$m.__track_lines__[430] = 'widgets.wysiwyg.py, line 430:\n    if td==tr.children.item(x):';
	$m.__track_lines__[431] = 'widgets.wysiwyg.py, line 431:\n    break';
	$m.__track_lines__[432] = 'widgets.wysiwyg.py, line 432:\n    cellIdx += 1';
	$m.__track_lines__[433] = 'widgets.wysiwyg.py, line 433:\n    for trChildIdx in range(0,table.children.length):';
	$m.__track_lines__[434] = 'widgets.wysiwyg.py, line 434:\n    trChild = table.children.item(trChildIdx)';
	$m.__track_lines__[435] = 'widgets.wysiwyg.py, line 435:\n    if not "tagName" in dir( trChild ):';
	$m.__track_lines__[436] = 'widgets.wysiwyg.py, line 436:\n    continue';
	$m.__track_lines__[437] = 'widgets.wysiwyg.py, line 437:\n    if trChild.tagName=="THEAD":';
	$m.__track_lines__[439] = 'widgets.wysiwyg.py, line 439:\n    for childIdx in range(0,trChild.children.length):';
	$m.__track_lines__[440] = 'widgets.wysiwyg.py, line 440:\n    child = trChild.children.item(childIdx)';
	$m.__track_lines__[441] = 'widgets.wysiwyg.py, line 441:\n    if not "tagName" in dir( child ):';
	$m.__track_lines__[442] = 'widgets.wysiwyg.py, line 442:\n    continue';
	$m.__track_lines__[443] = 'widgets.wysiwyg.py, line 443:\n    if child.tagName=="TR":';
	$m.__track_lines__[444] = 'widgets.wysiwyg.py, line 444:\n    newTd = html5.document.createElement("th")';
	$m.__track_lines__[445] = 'widgets.wysiwyg.py, line 445:\n    child.insertBefore( newTd, child.children.item(cellIdx) )';
	$m.__track_lines__[448] = 'widgets.wysiwyg.py, line 448:\n    for childIdx in range(0,trChild.children.length):';
	$m.__track_lines__[449] = 'widgets.wysiwyg.py, line 449:\n    child = trChild.children.item(childIdx)';
	$m.__track_lines__[450] = 'widgets.wysiwyg.py, line 450:\n    if not "tagName" in dir( child ):';
	$m.__track_lines__[451] = 'widgets.wysiwyg.py, line 451:\n    continue';
	$m.__track_lines__[452] = 'widgets.wysiwyg.py, line 452:\n    if child.tagName=="TR":';
	$m.__track_lines__[453] = 'widgets.wysiwyg.py, line 453:\n    newTd = html5.document.createElement("td")';
	$m.__track_lines__[454] = 'widgets.wysiwyg.py, line 454:\n    child.insertBefore( newTd, child.children.item(cellIdx) )';
	$m.__track_lines__[457] = 'widgets.wysiwyg.py, line 456:\n    @staticmethod ... def isSuitableFor( modul, handler, actionName ):';
	$m.__track_lines__[458] = 'widgets.wysiwyg.py, line 458:\n    return( actionName=="text.table.newcol.before" )';
	$m.__track_lines__[460] = 'widgets.wysiwyg.py, line 460:\n    def resetLoadingState(self):';
	$m.__track_lines__[461] = 'widgets.wysiwyg.py, line 461:\n    pass';
	$m.__track_lines__[464] = 'widgets.wysiwyg.py, line 464:\n    actionDelegateSelector.insert( 1, TableInsertColBeforeAction.isSuitableFor, TableInsertColBeforeAction )';
	$m.__track_lines__[466] = 'widgets.wysiwyg.py, line 466:\n    class TableInsertColAfterAction( html5.ext.Button ):';
	$m.__track_lines__[467] = 'widgets.wysiwyg.py, line 467:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[468] = 'widgets.wysiwyg.py, line 468:\n    super( TableInsertColAfterAction, self ).__init__( translate("Insert Table Col after"), *args, **kwargs )';
	$m.__track_lines__[469] = 'widgets.wysiwyg.py, line 469:\n    self["class"] = "icon text table newcol after"';
	$m.__track_lines__[470] = 'widgets.wysiwyg.py, line 470:\n    self["title"] = translate("Insert Table Col after")';
	$m.__track_lines__[472] = 'widgets.wysiwyg.py, line 472:\n    def onClick(self, sender=None):';
	$m.__track_lines__[473] = 'widgets.wysiwyg.py, line 473:\n    node = eval("window.top.getSelection().anchorNode")';
	$m.__track_lines__[474] = 'widgets.wysiwyg.py, line 474:\n    td = None';
	$m.__track_lines__[475] = 'widgets.wysiwyg.py, line 475:\n    tr = None';
	$m.__track_lines__[476] = 'widgets.wysiwyg.py, line 476:\n    table = None';
	$m.__track_lines__[477] = 'widgets.wysiwyg.py, line 477:\n    i = 10';
	$m.__track_lines__[479] = 'widgets.wysiwyg.py, line 479:\n    while i>0 and node and node != self.parent().parent().editor.element:';
	$m.__track_lines__[480] = 'widgets.wysiwyg.py, line 480:\n    i -= 1';
	$m.__track_lines__[481] = 'widgets.wysiwyg.py, line 481:\n    if not "tagName" in dir( node ):';
	$m.__track_lines__[482] = 'widgets.wysiwyg.py, line 482:\n    node = node.parentNode';
	$m.__track_lines__[483] = 'widgets.wysiwyg.py, line 483:\n    continue';
	$m.__track_lines__[484] = 'widgets.wysiwyg.py, line 484:\n    if node.tagName=="TD":';
	$m.__track_lines__[485] = 'widgets.wysiwyg.py, line 485:\n    td = node';
	$m.__track_lines__[487] = 'widgets.wysiwyg.py, line 487:\n    tr = node';
	$m.__track_lines__[489] = 'widgets.wysiwyg.py, line 489:\n    table = node';
	$m.__track_lines__[490] = 'widgets.wysiwyg.py, line 490:\n    break';
	$m.__track_lines__[491] = 'widgets.wysiwyg.py, line 491:\n    node = node.parentNode';
	$m.__track_lines__[492] = 'widgets.wysiwyg.py, line 492:\n    if td and tr and table:';
	$m.__track_lines__[493] = 'widgets.wysiwyg.py, line 493:\n    cellIdx = 0 # Before which column shall we insert a new col?';
	$m.__track_lines__[494] = 'widgets.wysiwyg.py, line 494:\n    for x in range(0, tr.children.length):';
	$m.__track_lines__[495] = 'widgets.wysiwyg.py, line 495:\n    if td==tr.children.item(x):';
	$m.__track_lines__[496] = 'widgets.wysiwyg.py, line 496:\n    break';
	$m.__track_lines__[497] = 'widgets.wysiwyg.py, line 497:\n    cellIdx += 1';
	$m.__track_lines__[498] = 'widgets.wysiwyg.py, line 498:\n    for trChildIdx in range(0,table.children.length):';
	$m.__track_lines__[499] = 'widgets.wysiwyg.py, line 499:\n    trChild = table.children.item(trChildIdx)';
	$m.__track_lines__[500] = 'widgets.wysiwyg.py, line 500:\n    if not "tagName" in dir( trChild ):';
	$m.__track_lines__[501] = 'widgets.wysiwyg.py, line 501:\n    continue';
	$m.__track_lines__[502] = 'widgets.wysiwyg.py, line 502:\n    if trChild.tagName=="THEAD":';
	$m.__track_lines__[504] = 'widgets.wysiwyg.py, line 504:\n    for childIdx in range(0,trChild.children.length):';
	$m.__track_lines__[505] = 'widgets.wysiwyg.py, line 505:\n    child = trChild.children.item(childIdx)';
	$m.__track_lines__[506] = 'widgets.wysiwyg.py, line 506:\n    if not "tagName" in dir( child ):';
	$m.__track_lines__[507] = 'widgets.wysiwyg.py, line 507:\n    continue';
	$m.__track_lines__[508] = 'widgets.wysiwyg.py, line 508:\n    if child.tagName=="TR":';
	$m.__track_lines__[509] = 'widgets.wysiwyg.py, line 509:\n    newTd = html5.document.createElement("th")';
	$m.__track_lines__[510] = 'widgets.wysiwyg.py, line 510:\n    if cellIdx+1<child.children.length:';
	$m.__track_lines__[511] = 'widgets.wysiwyg.py, line 511:\n    child.insertBefore( newTd, child.children.item(cellIdx+1) )';
	$m.__track_lines__[513] = 'widgets.wysiwyg.py, line 513:\n    child.appendChild( newTd )';
	$m.__track_lines__[516] = 'widgets.wysiwyg.py, line 516:\n    for childIdx in range(0,trChild.children.length):';
	$m.__track_lines__[517] = 'widgets.wysiwyg.py, line 517:\n    child = trChild.children.item(childIdx)';
	$m.__track_lines__[518] = 'widgets.wysiwyg.py, line 518:\n    if not "tagName" in dir( child ):';
	$m.__track_lines__[519] = 'widgets.wysiwyg.py, line 519:\n    continue';
	$m.__track_lines__[520] = 'widgets.wysiwyg.py, line 520:\n    if child.tagName=="TR":';
	$m.__track_lines__[521] = 'widgets.wysiwyg.py, line 521:\n    newTd = html5.document.createElement("td")';
	$m.__track_lines__[522] = 'widgets.wysiwyg.py, line 522:\n    if cellIdx+1<child.children.length:';
	$m.__track_lines__[523] = 'widgets.wysiwyg.py, line 523:\n    child.insertBefore( newTd, child.children.item(cellIdx+1) )';
	$m.__track_lines__[525] = 'widgets.wysiwyg.py, line 525:\n    child.appendChild( newTd )';
	$m.__track_lines__[528] = 'widgets.wysiwyg.py, line 527:\n    @staticmethod ... def isSuitableFor( modul, handler, actionName ):';
	$m.__track_lines__[529] = 'widgets.wysiwyg.py, line 529:\n    return( actionName=="text.table.newcol.after" )';
	$m.__track_lines__[531] = 'widgets.wysiwyg.py, line 531:\n    def resetLoadingState(self):';
	$m.__track_lines__[532] = 'widgets.wysiwyg.py, line 532:\n    pass';
	$m.__track_lines__[534] = 'widgets.wysiwyg.py, line 534:\n    actionDelegateSelector.insert( 1, TableInsertColAfterAction.isSuitableFor, TableInsertColAfterAction )';
	$m.__track_lines__[537] = 'widgets.wysiwyg.py, line 537:\n    class TableRemoveRowAction( html5.ext.Button ):';
	$m.__track_lines__[538] = 'widgets.wysiwyg.py, line 538:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[539] = 'widgets.wysiwyg.py, line 539:\n    super( TableRemoveRowAction, self ).__init__( translate("Remove Table Row"), *args, **kwargs )';
	$m.__track_lines__[540] = 'widgets.wysiwyg.py, line 540:\n    self["class"] = "icon text table remove row"';
	$m.__track_lines__[541] = 'widgets.wysiwyg.py, line 541:\n    self["title"] = translate("Remove Table Row")';
	$m.__track_lines__[543] = 'widgets.wysiwyg.py, line 543:\n    def onClick(self, sender=None):';
	$m.__track_lines__[544] = 'widgets.wysiwyg.py, line 544:\n    node = eval("window.top.getSelection().anchorNode")';
	$m.__track_lines__[545] = 'widgets.wysiwyg.py, line 545:\n    i = 10';
	$m.__track_lines__[546] = 'widgets.wysiwyg.py, line 546:\n    while i>0 and node and node != self.parent().parent().editor.element:';
	$m.__track_lines__[547] = 'widgets.wysiwyg.py, line 547:\n    i -= 1';
	$m.__track_lines__[548] = 'widgets.wysiwyg.py, line 548:\n    if not "tagName" in dir( node ):';
	$m.__track_lines__[549] = 'widgets.wysiwyg.py, line 549:\n    node = node.parentNode';
	$m.__track_lines__[550] = 'widgets.wysiwyg.py, line 550:\n    continue';
	$m.__track_lines__[551] = 'widgets.wysiwyg.py, line 551:\n    if node.tagName=="TR":';
	$m.__track_lines__[552] = 'widgets.wysiwyg.py, line 552:\n    node.parentNode.removeChild(node)';
	$m.__track_lines__[553] = 'widgets.wysiwyg.py, line 553:\n    return';
	$m.__track_lines__[554] = 'widgets.wysiwyg.py, line 554:\n    node = node.parentNode';
	$m.__track_lines__[557] = 'widgets.wysiwyg.py, line 556:\n    @staticmethod ... def isSuitableFor( modul, handler, actionName ):';
	$m.__track_lines__[558] = 'widgets.wysiwyg.py, line 558:\n    return( actionName=="text.table.remove.row" )';
	$m.__track_lines__[560] = 'widgets.wysiwyg.py, line 560:\n    def resetLoadingState(self):';
	$m.__track_lines__[561] = 'widgets.wysiwyg.py, line 561:\n    pass';
	$m.__track_lines__[563] = 'widgets.wysiwyg.py, line 563:\n    actionDelegateSelector.insert( 1, TableRemoveRowAction.isSuitableFor, TableRemoveRowAction )';
	$m.__track_lines__[567] = 'widgets.wysiwyg.py, line 567:\n    class TableRemoveColAction( html5.ext.Button ):';
	$m.__track_lines__[568] = 'widgets.wysiwyg.py, line 568:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[569] = 'widgets.wysiwyg.py, line 569:\n    super( TableRemoveColAction, self ).__init__( translate("Remove Table Col"), *args, **kwargs )';
	$m.__track_lines__[570] = 'widgets.wysiwyg.py, line 570:\n    self["class"] = "icon text table remove col"';
	$m.__track_lines__[571] = 'widgets.wysiwyg.py, line 571:\n    self["title"] = translate("Remove Table Col")';
	$m.__track_lines__[573] = 'widgets.wysiwyg.py, line 573:\n    def onClick(self, sender=None):';
	$m.__track_lines__[574] = 'widgets.wysiwyg.py, line 574:\n    node = eval("window.top.getSelection().anchorNode")';
	$m.__track_lines__[575] = 'widgets.wysiwyg.py, line 575:\n    td = None';
	$m.__track_lines__[576] = 'widgets.wysiwyg.py, line 576:\n    tr = None';
	$m.__track_lines__[577] = 'widgets.wysiwyg.py, line 577:\n    table = None';
	$m.__track_lines__[578] = 'widgets.wysiwyg.py, line 578:\n    i = 10';
	$m.__track_lines__[580] = 'widgets.wysiwyg.py, line 580:\n    while i>0 and node and node != self.parent().parent().editor.element:';
	$m.__track_lines__[581] = 'widgets.wysiwyg.py, line 581:\n    i -= 1';
	$m.__track_lines__[582] = 'widgets.wysiwyg.py, line 582:\n    if not "tagName" in dir( node ):';
	$m.__track_lines__[583] = 'widgets.wysiwyg.py, line 583:\n    node = node.parentNode';
	$m.__track_lines__[584] = 'widgets.wysiwyg.py, line 584:\n    continue';
	$m.__track_lines__[585] = 'widgets.wysiwyg.py, line 585:\n    if node.tagName=="TD":';
	$m.__track_lines__[586] = 'widgets.wysiwyg.py, line 586:\n    td = node';
	$m.__track_lines__[588] = 'widgets.wysiwyg.py, line 588:\n    tr = node';
	$m.__track_lines__[590] = 'widgets.wysiwyg.py, line 590:\n    table = node';
	$m.__track_lines__[591] = 'widgets.wysiwyg.py, line 591:\n    break';
	$m.__track_lines__[592] = 'widgets.wysiwyg.py, line 592:\n    node = node.parentNode';
	$m.__track_lines__[593] = 'widgets.wysiwyg.py, line 593:\n    if td and tr and table:';
	$m.__track_lines__[594] = 'widgets.wysiwyg.py, line 594:\n    cellIdx = 0 # Which column shall we delete?';
	$m.__track_lines__[595] = 'widgets.wysiwyg.py, line 595:\n    for x in range(0, tr.children.length):';
	$m.__track_lines__[596] = 'widgets.wysiwyg.py, line 596:\n    if td==tr.children.item(x):';
	$m.__track_lines__[597] = 'widgets.wysiwyg.py, line 597:\n    break';
	$m.__track_lines__[598] = 'widgets.wysiwyg.py, line 598:\n    cellIdx += 1';
	$m.__track_lines__[599] = 'widgets.wysiwyg.py, line 599:\n    for trChildIdx in range(0,table.children.length):';
	$m.__track_lines__[600] = 'widgets.wysiwyg.py, line 600:\n    trChild = table.children.item(trChildIdx)';
	$m.__track_lines__[601] = 'widgets.wysiwyg.py, line 601:\n    if not "tagName" in dir( trChild ):';
	$m.__track_lines__[602] = 'widgets.wysiwyg.py, line 602:\n    continue';
	$m.__track_lines__[603] = 'widgets.wysiwyg.py, line 603:\n    if trChild.tagName=="THEAD":';
	$m.__track_lines__[605] = 'widgets.wysiwyg.py, line 605:\n    for childIdx in range(0,trChild.children.length):';
	$m.__track_lines__[606] = 'widgets.wysiwyg.py, line 606:\n    child = trChild.children.item(childIdx)';
	$m.__track_lines__[607] = 'widgets.wysiwyg.py, line 607:\n    if not "tagName" in dir( child ):';
	$m.__track_lines__[608] = 'widgets.wysiwyg.py, line 608:\n    continue';
	$m.__track_lines__[609] = 'widgets.wysiwyg.py, line 609:\n    if child.tagName=="TR":';
	$m.__track_lines__[610] = 'widgets.wysiwyg.py, line 610:\n    child.removeChild(child.children.item(cellIdx))';
	$m.__track_lines__[613] = 'widgets.wysiwyg.py, line 613:\n    for childIdx in range(0,trChild.children.length):';
	$m.__track_lines__[614] = 'widgets.wysiwyg.py, line 614:\n    child = trChild.children.item(childIdx)';
	$m.__track_lines__[615] = 'widgets.wysiwyg.py, line 615:\n    if not "tagName" in dir( child ):';
	$m.__track_lines__[616] = 'widgets.wysiwyg.py, line 616:\n    continue';
	$m.__track_lines__[617] = 'widgets.wysiwyg.py, line 617:\n    if child.tagName=="TR":';
	$m.__track_lines__[618] = 'widgets.wysiwyg.py, line 618:\n    child.removeChild(child.children.item(cellIdx))';
	$m.__track_lines__[621] = 'widgets.wysiwyg.py, line 620:\n    @staticmethod ... def isSuitableFor( modul, handler, actionName ):';
	$m.__track_lines__[622] = 'widgets.wysiwyg.py, line 622:\n    return( actionName=="text.table.remove.col" )';
	$m.__track_lines__[624] = 'widgets.wysiwyg.py, line 624:\n    def resetLoadingState(self):';
	$m.__track_lines__[625] = 'widgets.wysiwyg.py, line 625:\n    pass';
	$m.__track_lines__[627] = 'widgets.wysiwyg.py, line 627:\n    actionDelegateSelector.insert( 1, TableRemoveColAction.isSuitableFor, TableRemoveColAction )';
	$m.__track_lines__[629] = 'widgets.wysiwyg.py, line 629:\n    class TextSaveAction( html5.ext.Button ):';
	$m.__track_lines__[630] = 'widgets.wysiwyg.py, line 630:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[631] = 'widgets.wysiwyg.py, line 631:\n    super( TextSaveAction, self ).__init__( translate("Save"), *args, **kwargs )';
	$m.__track_lines__[632] = 'widgets.wysiwyg.py, line 632:\n    self["class"] = "icon text save"';
	$m.__track_lines__[633] = 'widgets.wysiwyg.py, line 633:\n    self["title"] = translate("Save")';
	$m.__track_lines__[635] = 'widgets.wysiwyg.py, line 635:\n    def onClick(self, event):';
	$m.__track_lines__[636] = 'widgets.wysiwyg.py, line 636:\n    self.parent().parent().saveText()';
	$m.__track_lines__[639] = 'widgets.wysiwyg.py, line 638:\n    @staticmethod ... def isSuitableFor( modul, handler, actionName ):';
	$m.__track_lines__[640] = 'widgets.wysiwyg.py, line 640:\n    return( actionName=="text.save" )';
	$m.__track_lines__[642] = 'widgets.wysiwyg.py, line 642:\n    actionDelegateSelector.insert( 1, TextSaveAction.isSuitableFor, TextSaveAction )';
	$m.__track_lines__[644] = 'widgets.wysiwyg.py, line 644:\n    class TextAbortAction( html5.ext.Button ):';
	$m.__track_lines__[645] = 'widgets.wysiwyg.py, line 645:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[646] = 'widgets.wysiwyg.py, line 646:\n    super( TextAbortAction, self ).__init__( translate("Abort"), *args, **kwargs )';
	$m.__track_lines__[647] = 'widgets.wysiwyg.py, line 647:\n    self["class"] = "icon text abort"';
	$m.__track_lines__[648] = 'widgets.wysiwyg.py, line 648:\n    self["title"] = translate("Abort")';
	$m.__track_lines__[650] = 'widgets.wysiwyg.py, line 650:\n    def onClick(self, event):';
	$m.__track_lines__[651] = 'widgets.wysiwyg.py, line 651:\n    if self.parent().parent().editor.changed():';
	$m.__track_lines__[652] = 'widgets.wysiwyg.py, line 652:\n    html5.ext.popup.YesNoDialog(translate("Any changes will be lost. Do you really want to abort?"),';
	$m.__track_lines__[655] = 'widgets.wysiwyg.py, line 655:\n    self.doAbort()';
	$m.__track_lines__[657] = 'widgets.wysiwyg.py, line 657:\n    def doAbort(self, *args, **kwargs):';
	$m.__track_lines__[658] = 'widgets.wysiwyg.py, line 658:\n    self.parent().parent().abortText()';
	$m.__track_lines__[661] = 'widgets.wysiwyg.py, line 660:\n    @staticmethod ... def isSuitableFor( modul, handler, actionName ):';
	$m.__track_lines__[662] = 'widgets.wysiwyg.py, line 662:\n    return( actionName=="text.abort" )';
	$m.__track_lines__[664] = 'widgets.wysiwyg.py, line 664:\n    actionDelegateSelector.insert( 1, TextAbortAction.isSuitableFor, TextAbortAction )';
	$m.__track_lines__[666] = 'widgets.wysiwyg.py, line 666:\n    class LinkEditor( html5.Div ):';
	$m.__track_lines__[667] = 'widgets.wysiwyg.py, line 667:\n    newLinkIdx = 0';
	$m.__track_lines__[668] = 'widgets.wysiwyg.py, line 668:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[669] = 'widgets.wysiwyg.py, line 669:\n    super( LinkEditor, self ).__init__( *args, **kwargs )';
	$m.__track_lines__[670] = 'widgets.wysiwyg.py, line 670:\n    self["class"].append("linkeditor")';
	$m.__track_lines__[671] = 'widgets.wysiwyg.py, line 671:\n    self["style"]["display"] = "none"';
	$m.__track_lines__[672] = 'widgets.wysiwyg.py, line 672:\n    self.linkTxt = html5.Input()';
	$m.__track_lines__[673] = 'widgets.wysiwyg.py, line 673:\n    self.linkTxt["type"] = "text"';
	$m.__track_lines__[674] = 'widgets.wysiwyg.py, line 674:\n    self.appendChild(self.linkTxt)';
	$m.__track_lines__[675] = 'widgets.wysiwyg.py, line 675:\n    l = html5.Label(translate("URL"), forElem=self.linkTxt)';
	$m.__track_lines__[676] = 'widgets.wysiwyg.py, line 676:\n    l["class"].append("urllbl")';
	$m.__track_lines__[677] = 'widgets.wysiwyg.py, line 677:\n    self.appendChild( l )';
	$m.__track_lines__[678] = 'widgets.wysiwyg.py, line 678:\n    self.newTab = html5.Input()';
	$m.__track_lines__[679] = 'widgets.wysiwyg.py, line 679:\n    self.newTab["type"] = "checkbox"';
	$m.__track_lines__[680] = 'widgets.wysiwyg.py, line 680:\n    self.appendChild(self.newTab)';
	$m.__track_lines__[681] = 'widgets.wysiwyg.py, line 681:\n    l = html5.Label(translate("New window"), forElem=self.newTab)';
	$m.__track_lines__[682] = 'widgets.wysiwyg.py, line 682:\n    l["class"].append("newwindowlbl")';
	$m.__track_lines__[683] = 'widgets.wysiwyg.py, line 683:\n    self.appendChild( l )';
	$m.__track_lines__[684] = 'widgets.wysiwyg.py, line 684:\n    self.currentElem = None';
	$m.__track_lines__[686] = 'widgets.wysiwyg.py, line 686:\n    def getAFromTagStack(self, tagStack):';
	$m.__track_lines__[687] = 'widgets.wysiwyg.py, line 687:\n    for elem in tagStack:';
	$m.__track_lines__[688] = 'widgets.wysiwyg.py, line 688:\n    if not "tagName" in dir(elem):';
	$m.__track_lines__[689] = 'widgets.wysiwyg.py, line 689:\n    continue';
	$m.__track_lines__[690] = 'widgets.wysiwyg.py, line 690:\n    if elem.tagName=="A":';
	$m.__track_lines__[691] = 'widgets.wysiwyg.py, line 691:\n    return( elem )';
	$m.__track_lines__[692] = 'widgets.wysiwyg.py, line 692:\n    return( None )';
	$m.__track_lines__[694] = 'widgets.wysiwyg.py, line 694:\n    def onCursorMoved(self, tagStack):';
	$m.__track_lines__[695] = 'widgets.wysiwyg.py, line 695:\n    newElem = self.getAFromTagStack(tagStack)';
	$m.__track_lines__[696] = 'widgets.wysiwyg.py, line 696:\n    if newElem is not None and self.currentElem is not None:';
	$m.__track_lines__[697] = 'widgets.wysiwyg.py, line 697:\n    self.doClose()';
	$m.__track_lines__[698] = 'widgets.wysiwyg.py, line 698:\n    self.doOpen( newElem )';
	$m.__track_lines__[700] = 'widgets.wysiwyg.py, line 700:\n    self.doOpen( newElem )';
	$m.__track_lines__[702] = 'widgets.wysiwyg.py, line 702:\n    self.doClose()';
	$m.__track_lines__[704] = 'widgets.wysiwyg.py, line 704:\n    def doOpen(self, elem):';
	$m.__track_lines__[705] = 'widgets.wysiwyg.py, line 705:\n    self.currentElem = elem';
	$m.__track_lines__[706] = 'widgets.wysiwyg.py, line 706:\n    self.linkTxt["value"] = self.currentElem.href';
	$m.__track_lines__[707] = 'widgets.wysiwyg.py, line 707:\n    self.newTab["checked"] = self.currentElem.target=="_blank"';
	$m.__track_lines__[709] = 'widgets.wysiwyg.py, line 709:\n    self.isOpen = True';
	$m.__track_lines__[710] = 'widgets.wysiwyg.py, line 710:\n    self["style"]["display"] = "block"';
	$m.__track_lines__[712] = 'widgets.wysiwyg.py, line 712:\n    def doClose(self):';
	$m.__track_lines__[713] = 'widgets.wysiwyg.py, line 713:\n    if self.currentElem is None:';
	$m.__track_lines__[714] = 'widgets.wysiwyg.py, line 714:\n    return';
	$m.__track_lines__[715] = 'widgets.wysiwyg.py, line 715:\n    self.currentElem.href = self.linkTxt["value"]';
	$m.__track_lines__[717] = 'widgets.wysiwyg.py, line 717:\n    if self.newTab["checked"]:';
	$m.__track_lines__[718] = 'widgets.wysiwyg.py, line 718:\n    self.currentElem.target = "_blank"';
	$m.__track_lines__[720] = 'widgets.wysiwyg.py, line 720:\n    self.currentElem.target = "_self"';
	$m.__track_lines__[722] = 'widgets.wysiwyg.py, line 722:\n    self["style"]["display"] = "none"';
	$m.__track_lines__[723] = 'widgets.wysiwyg.py, line 723:\n    self.currentElem = None';
	$m.__track_lines__[725] = 'widgets.wysiwyg.py, line 725:\n    def findHref(self, linkTarget, elem):';
	$m.__track_lines__[726] = 'widgets.wysiwyg.py, line 726:\n    if "tagName" in dir(elem):';
	$m.__track_lines__[727] = 'widgets.wysiwyg.py, line 727:\n    if elem.tagName == "A":';
	$m.__track_lines__[728] = 'widgets.wysiwyg.py, line 728:\n    if elem.href == linkTarget or elem.href.endswith(linkTarget):';
	$m.__track_lines__[729] = 'widgets.wysiwyg.py, line 729:\n    return( elem )';
	$m.__track_lines__[730] = 'widgets.wysiwyg.py, line 730:\n    if "children" in dir(elem):';
	$m.__track_lines__[731] = 'widgets.wysiwyg.py, line 731:\n    for x in range(0,elem.children.length):';
	$m.__track_lines__[732] = 'widgets.wysiwyg.py, line 732:\n    child = elem.children.item(x)';
	$m.__track_lines__[733] = 'widgets.wysiwyg.py, line 733:\n    r = self.findHref( linkTarget, child)';
	$m.__track_lines__[734] = 'widgets.wysiwyg.py, line 734:\n    if r is not None:';
	$m.__track_lines__[735] = 'widgets.wysiwyg.py, line 735:\n    return( r )';
	$m.__track_lines__[736] = 'widgets.wysiwyg.py, line 736:\n    return( None )';
	$m.__track_lines__[738] = 'widgets.wysiwyg.py, line 738:\n    def openLink(self, linkTarget):';
	$m.__track_lines__[739] = 'widgets.wysiwyg.py, line 739:\n    self.doOpen( self.findHref( linkTarget, self.parent().editor.element ) )';
	$m.__track_lines__[740] = 'widgets.wysiwyg.py, line 740:\n    self.linkTxt["value"] = ""';
	$m.__track_lines__[741] = 'widgets.wysiwyg.py, line 741:\n    self.linkTxt.focus()';
	$m.__track_lines__[744] = 'widgets.wysiwyg.py, line 744:\n    class ImageEditor( html5.Div ):';
	$m.__track_lines__[745] = 'widgets.wysiwyg.py, line 745:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[746] = 'widgets.wysiwyg.py, line 746:\n    super( ImageEditor, self ).__init__( *args, **kwargs )';
	$m.__track_lines__[747] = 'widgets.wysiwyg.py, line 747:\n    self["class"].append("imageeditor")';
	$m.__track_lines__[748] = 'widgets.wysiwyg.py, line 748:\n    self["style"]["display"] = "none"';
	$m.__track_lines__[749] = 'widgets.wysiwyg.py, line 749:\n    self.widthInput = html5.Input()';
	$m.__track_lines__[750] = 'widgets.wysiwyg.py, line 750:\n    self.widthInput["type"] = "number"';
	$m.__track_lines__[751] = 'widgets.wysiwyg.py, line 751:\n    self.appendChild(self.widthInput)';
	$m.__track_lines__[752] = 'widgets.wysiwyg.py, line 752:\n    l = html5.Label(translate("Width"), self.widthInput)';
	$m.__track_lines__[753] = 'widgets.wysiwyg.py, line 753:\n    l["class"].append("widthlbl")';
	$m.__track_lines__[754] = 'widgets.wysiwyg.py, line 754:\n    self.appendChild( l )';
	$m.__track_lines__[755] = 'widgets.wysiwyg.py, line 755:\n    self.keepAspectRatio = html5.Input()';
	$m.__track_lines__[756] = 'widgets.wysiwyg.py, line 756:\n    self.keepAspectRatio["type"] = "checkbox"';
	$m.__track_lines__[757] = 'widgets.wysiwyg.py, line 757:\n    self.appendChild( self.keepAspectRatio )';
	$m.__track_lines__[758] = 'widgets.wysiwyg.py, line 758:\n    l = html5.Label(translate("Keep aspect ratio"), self.keepAspectRatio)';
	$m.__track_lines__[759] = 'widgets.wysiwyg.py, line 759:\n    l["class"].append("aspectlbl")';
	$m.__track_lines__[760] = 'widgets.wysiwyg.py, line 760:\n    self.appendChild( l )';
	$m.__track_lines__[761] = 'widgets.wysiwyg.py, line 761:\n    self.heightInput = html5.Input()';
	$m.__track_lines__[762] = 'widgets.wysiwyg.py, line 762:\n    self.heightInput["type"] = "number"';
	$m.__track_lines__[763] = 'widgets.wysiwyg.py, line 763:\n    self.appendChild(self.heightInput)';
	$m.__track_lines__[764] = 'widgets.wysiwyg.py, line 764:\n    l = html5.Label(translate("Height"), self.heightInput)';
	$m.__track_lines__[765] = 'widgets.wysiwyg.py, line 765:\n    l["class"].append("heightlbl")';
	$m.__track_lines__[766] = 'widgets.wysiwyg.py, line 766:\n    self.appendChild( l )';
	$m.__track_lines__[767] = 'widgets.wysiwyg.py, line 767:\n    self.titleInput = html5.Input()';
	$m.__track_lines__[768] = 'widgets.wysiwyg.py, line 768:\n    self.titleInput["type"] = "text"';
	$m.__track_lines__[769] = 'widgets.wysiwyg.py, line 769:\n    self.appendChild(self.titleInput)';
	$m.__track_lines__[770] = 'widgets.wysiwyg.py, line 770:\n    l = html5.Label(translate("Title"), self.titleInput)';
	$m.__track_lines__[771] = 'widgets.wysiwyg.py, line 771:\n    l["class"].append("titlelbl")';
	$m.__track_lines__[772] = 'widgets.wysiwyg.py, line 772:\n    self.appendChild( l )';
	$m.__track_lines__[773] = 'widgets.wysiwyg.py, line 773:\n    self.currentElem = None';
	$m.__track_lines__[774] = 'widgets.wysiwyg.py, line 774:\n    self.sinkEvent("onChange")';
	$m.__track_lines__[776] = 'widgets.wysiwyg.py, line 776:\n    def onChange(self, event):';
	$m.__track_lines__[777] = 'widgets.wysiwyg.py, line 777:\n    super(ImageEditor,self).onChange( event )';
	$m.__track_lines__[778] = 'widgets.wysiwyg.py, line 778:\n    aspect = self.currentElem.naturalWidth/self.currentElem.naturalHeight';
	$m.__track_lines__[779] = 'widgets.wysiwyg.py, line 779:\n    if event.target == self.widthInput.element:';
	$m.__track_lines__[780] = 'widgets.wysiwyg.py, line 780:\n    if self.keepAspectRatio["checked"]:';
	$m.__track_lines__[781] = 'widgets.wysiwyg.py, line 781:\n    self.heightInput["value"] = int(float(self.widthInput["value"])/aspect)';
	$m.__track_lines__[783] = 'widgets.wysiwyg.py, line 783:\n    if self.keepAspectRatio["checked"]:';
	$m.__track_lines__[784] = 'widgets.wysiwyg.py, line 784:\n    self.widthInput["value"] = int(float(self.heightInput["value"])*aspect)';
	$m.__track_lines__[785] = 'widgets.wysiwyg.py, line 785:\n    self.currentElem.width = int(self.widthInput["value"])';
	$m.__track_lines__[786] = 'widgets.wysiwyg.py, line 786:\n    self.currentElem.height = int(self.heightInput["value"])';
	$m.__track_lines__[788] = 'widgets.wysiwyg.py, line 788:\n    def getImgFromTagStack(self, tagStack):';
	$m.__track_lines__[789] = 'widgets.wysiwyg.py, line 789:\n    for elem in tagStack:';
	$m.__track_lines__[790] = 'widgets.wysiwyg.py, line 790:\n    if not "tagName" in dir(elem):';
	$m.__track_lines__[791] = 'widgets.wysiwyg.py, line 791:\n    continue';
	$m.__track_lines__[792] = 'widgets.wysiwyg.py, line 792:\n    if elem.tagName=="IMG":';
	$m.__track_lines__[793] = 'widgets.wysiwyg.py, line 793:\n    return( elem )';
	$m.__track_lines__[794] = 'widgets.wysiwyg.py, line 794:\n    return( None )';
	$m.__track_lines__[796] = 'widgets.wysiwyg.py, line 796:\n    def onCursorMoved(self, tagStack):';
	$m.__track_lines__[797] = 'widgets.wysiwyg.py, line 797:\n    newElem = self.getImgFromTagStack(tagStack)';
	$m.__track_lines__[798] = 'widgets.wysiwyg.py, line 798:\n    if newElem is not None and self.currentElem is not None:';
	$m.__track_lines__[799] = 'widgets.wysiwyg.py, line 799:\n    self.doClose()';
	$m.__track_lines__[800] = 'widgets.wysiwyg.py, line 800:\n    self.doOpen( newElem )';
	$m.__track_lines__[802] = 'widgets.wysiwyg.py, line 802:\n    self.doOpen( newElem )';
	$m.__track_lines__[804] = 'widgets.wysiwyg.py, line 804:\n    self.doClose()';
	$m.__track_lines__[806] = 'widgets.wysiwyg.py, line 806:\n    def doOpen(self, elem):';
	$m.__track_lines__[807] = 'widgets.wysiwyg.py, line 807:\n    self.currentElem = elem';
	$m.__track_lines__[808] = 'widgets.wysiwyg.py, line 808:\n    self["style"]["display"] = ""';
	$m.__track_lines__[809] = 'widgets.wysiwyg.py, line 809:\n    self.heightInput["value"] = elem.height';
	$m.__track_lines__[810] = 'widgets.wysiwyg.py, line 810:\n    self.widthInput["value"] = elem.width';
	$m.__track_lines__[811] = 'widgets.wysiwyg.py, line 811:\n    self.titleInput["value"] = elem.title';
	$m.__track_lines__[813] = 'widgets.wysiwyg.py, line 813:\n    def doClose(self):';
	$m.__track_lines__[814] = 'widgets.wysiwyg.py, line 814:\n    if self.currentElem is None:';
	$m.__track_lines__[815] = 'widgets.wysiwyg.py, line 815:\n    return';
	$m.__track_lines__[816] = 'widgets.wysiwyg.py, line 816:\n    self.currentElem.width = int( self.widthInput["value"] )';
	$m.__track_lines__[817] = 'widgets.wysiwyg.py, line 817:\n    self.currentElem.height = int( self.heightInput["value"] )';
	$m.__track_lines__[818] = 'widgets.wysiwyg.py, line 818:\n    self.currentElem.title = self.titleInput["value"]';
	$m.__track_lines__[819] = 'widgets.wysiwyg.py, line 819:\n    self["style"]["display"] = "none"';
	$m.__track_lines__[820] = 'widgets.wysiwyg.py, line 820:\n    self.currentElem = None';
	$m.__track_lines__[822] = 'widgets.wysiwyg.py, line 822:\n    def findImg(self, linkTarget, elem):';
	$m.__track_lines__[823] = 'widgets.wysiwyg.py, line 823:\n    if "tagName" in dir(elem):';
	$m.__track_lines__[824] = 'widgets.wysiwyg.py, line 824:\n    if elem.tagName == "IMG":';
	$m.__track_lines__[825] = 'widgets.wysiwyg.py, line 825:\n    if elem.href == linkTarget or elem.href.endswith(linkTarget):';
	$m.__track_lines__[826] = 'widgets.wysiwyg.py, line 826:\n    return( elem )';
	$m.__track_lines__[827] = 'widgets.wysiwyg.py, line 827:\n    if "children" in dir(elem):';
	$m.__track_lines__[828] = 'widgets.wysiwyg.py, line 828:\n    for x in range(0,elem.children.length):';
	$m.__track_lines__[829] = 'widgets.wysiwyg.py, line 829:\n    child = elem.children.item(x)';
	$m.__track_lines__[830] = 'widgets.wysiwyg.py, line 830:\n    r = self.findImg( linkTarget, child)';
	$m.__track_lines__[831] = 'widgets.wysiwyg.py, line 831:\n    if r is not None:';
	$m.__track_lines__[832] = 'widgets.wysiwyg.py, line 832:\n    return( r )';
	$m.__track_lines__[833] = 'widgets.wysiwyg.py, line 833:\n    return( None )';
	$m.__track_lines__[835] = 'widgets.wysiwyg.py, line 835:\n    def openLink(self, linkTarget):';
	$m.__track_lines__[836] = 'widgets.wysiwyg.py, line 836:\n    self.doOpen( self.findHref( linkTarget, self.parent().editor.element ) )';
	$m.__track_lines__[837] = 'widgets.wysiwyg.py, line 837:\n    self.linkTxt["value"] = ""';
	$m.__track_lines__[838] = 'widgets.wysiwyg.py, line 838:\n    self.linkTxt.focus()';
	$m.__track_lines__[841] = 'widgets.wysiwyg.py, line 841:\n    class TextUndoAction( BasicTextAction ):';
	$m.__track_lines__[842] = 'widgets.wysiwyg.py, line 842:\n    cmd = "undo"';
	$m.__track_lines__[843] = 'widgets.wysiwyg.py, line 843:\n    title = translate("Undo the last action")';
	$m.__track_lines__[845] = 'widgets.wysiwyg.py, line 845:\n    actionDelegateSelector.insert( 1, lambda modul, handler, actionName: actionName=="text.undo", TextUndoAction )';
	$m.__track_lines__[847] = 'widgets.wysiwyg.py, line 847:\n    class TextRedoAction( BasicTextAction ):';
	$m.__track_lines__[848] = 'widgets.wysiwyg.py, line 848:\n    cmd = "redo"';
	$m.__track_lines__[849] = 'widgets.wysiwyg.py, line 849:\n    title = translate("Redo the last undone action")';
	$m.__track_lines__[851] = 'widgets.wysiwyg.py, line 851:\n    actionDelegateSelector.insert( 1, lambda modul, handler, actionName: actionName=="text.redo", TextRedoAction )';
	$m.__track_lines__[856] = 'widgets.wysiwyg.py, line 856:\n    class FlipViewAction( html5.ext.Button ):';
	$m.__track_lines__[857] = 'widgets.wysiwyg.py, line 857:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[858] = 'widgets.wysiwyg.py, line 858:\n    super( FlipViewAction, self ).__init__( translate("Flip View"), *args, **kwargs )';
	$m.__track_lines__[859] = 'widgets.wysiwyg.py, line 859:\n    self["class"] = "icon flipview"';
	$m.__track_lines__[860] = 'widgets.wysiwyg.py, line 860:\n    self["title"] = translate("Flip View")';
	$m.__track_lines__[862] = 'widgets.wysiwyg.py, line 862:\n    def onAttach(self):';
	$m.__track_lines__[863] = 'widgets.wysiwyg.py, line 863:\n    super( FlipViewAction, self ).onAttach()';
	$m.__track_lines__[864] = 'widgets.wysiwyg.py, line 864:\n    if self.parent().parent().isWysiwygMode:';
	$m.__track_lines__[865] = 'widgets.wysiwyg.py, line 865:\n    self["class"].append("is_wysiwyg")';
	$m.__track_lines__[867] = 'widgets.wysiwyg.py, line 867:\n    self["class"].append("is_htmlview")';
	$m.__track_lines__[869] = 'widgets.wysiwyg.py, line 869:\n    def onClick(self, sender=None):';
	$m.__track_lines__[870] = 'widgets.wysiwyg.py, line 870:\n    if "is_wysiwyg" in self["class"]:';
	$m.__track_lines__[871] = 'widgets.wysiwyg.py, line 871:\n    self["class"].remove("is_wysiwyg")';
	$m.__track_lines__[872] = 'widgets.wysiwyg.py, line 872:\n    if "is_htmlview" in self["class"]:';
	$m.__track_lines__[873] = 'widgets.wysiwyg.py, line 873:\n    self["class"].remove("is_htmlview")';
	$m.__track_lines__[875] = 'widgets.wysiwyg.py, line 875:\n    if self.parent().parent().flipView():';
	$m.__track_lines__[876] = 'widgets.wysiwyg.py, line 876:\n    self["class"].append("is_wysiwyg")';
	$m.__track_lines__[878] = 'widgets.wysiwyg.py, line 878:\n    self["class"].append("is_htmlview")';
	$m.__track_lines__[880] = 'widgets.wysiwyg.py, line 880:\n    def resetLoadingState(self):';
	$m.__track_lines__[881] = 'widgets.wysiwyg.py, line 881:\n    pass';
	$m.__track_lines__[882] = 'widgets.wysiwyg.py, line 882:\n    actionDelegateSelector.insert( 1, lambda modul, handler, actionName: actionName=="text.flipView", FlipViewAction )';
	$m.__track_lines__[884] = 'widgets.wysiwyg.py, line 884:\n    class Editor(html5.Div):';
	$m.__track_lines__[885] = 'widgets.wysiwyg.py, line 885:\n    def __init__(self, html, *args, **kwargs ):';
	$m.__track_lines__[886] = 'widgets.wysiwyg.py, line 886:\n    super(Editor, self).__init__(*args, **kwargs)';
	$m.__track_lines__[888] = 'widgets.wysiwyg.py, line 888:\n    self["contenteditable"] = True';
	$m.__track_lines__[889] = 'widgets.wysiwyg.py, line 889:\n    self.addClass("contentdiv")';
	$m.__track_lines__[891] = 'widgets.wysiwyg.py, line 891:\n    self.initial_txt = self.element.innerHTML = html';
	$m.__track_lines__[892] = 'widgets.wysiwyg.py, line 892:\n    self.sinkEvent("onBlur", "onFocus", "onKeyDown")';
	$m.__track_lines__[894] = 'widgets.wysiwyg.py, line 894:\n    def changed(self):';
	$m.__track_lines__[895] = 'widgets.wysiwyg.py, line 895:\n    return self.initial_txt != self.element.innerHTML';
	$m.__track_lines__[902] = 'widgets.wysiwyg.py, line 902:\n    def toggleSelection(self, tagName):';
	$m.__track_lines__[907] = 'widgets.wysiwyg.py, line 907:\n    sel = eval("window.top.document.getSelection()")';
	$m.__track_lines__[908] = 'widgets.wysiwyg.py, line 908:\n    range = sel.getRangeAt(0)';
	$m.__track_lines__[909] = 'widgets.wysiwyg.py, line 909:\n    current = range.extractContents()';
	$m.__track_lines__[911] = 'widgets.wysiwyg.py, line 911:\n    try:';
	$m.__track_lines__[912] = 'widgets.wysiwyg.py, line 912:\n    print(current)';
	$m.__track_lines__[913] = 'widgets.wysiwyg.py, line 913:\n    print(current.nodeType)';
	$m.__track_lines__[914] = 'widgets.wysiwyg.py, line 914:\n    print(current.tagName)';
	$m.__track_lines__[916] = 'widgets.wysiwyg.py, line 916:\n    pass';
	$m.__track_lines__[918] = 'widgets.wysiwyg.py, line 918:\n    if current.nodeType == 11 and current.firstElementChild: #DocumentFragment';
	$m.__track_lines__[919] = 'widgets.wysiwyg.py, line 919:\n    current = current.firstElementChild';
	$m.__track_lines__[921] = 'widgets.wysiwyg.py, line 921:\n    try:';
	$m.__track_lines__[922] = 'widgets.wysiwyg.py, line 922:\n    print(current)';
	$m.__track_lines__[923] = 'widgets.wysiwyg.py, line 923:\n    print(current.nodeType)';
	$m.__track_lines__[924] = 'widgets.wysiwyg.py, line 924:\n    print(current.tagName)';
	$m.__track_lines__[926] = 'widgets.wysiwyg.py, line 926:\n    pass';
	$m.__track_lines__[928] = 'widgets.wysiwyg.py, line 928:\n    if current and current.nodeType == 1 and str(current.tagName).upper() == tagName.upper():';
	$m.__track_lines__[929] = 'widgets.wysiwyg.py, line 929:\n    print("Toggle OFF")';
	$m.__track_lines__[931] = 'widgets.wysiwyg.py, line 931:\n    if current.hasChildNodes():';
	$m.__track_lines__[932] = 'widgets.wysiwyg.py, line 932:\n    while current.firstChild:';
	$m.__track_lines__[933] = 'widgets.wysiwyg.py, line 933:\n    range.insertNode(current.firstChild)';
	$m.__track_lines__[936] = 'widgets.wysiwyg.py, line 936:\n    print("Toggle ON")';
	$m.__track_lines__[938] = 'widgets.wysiwyg.py, line 938:\n    new = eval("window.top.document.createElement(\\"%s\\")" % tagName)';
	$m.__track_lines__[939] = 'widgets.wysiwyg.py, line 939:\n    new.appendChild(current)';
	$m.__track_lines__[941] = 'widgets.wysiwyg.py, line 941:\n    range.insertNode(new)';
	$m.__track_lines__[943] = 'widgets.wysiwyg.py, line 943:\n    print("%s done" % tagName)';
	$m.__track_lines__[945] = 'widgets.wysiwyg.py, line 945:\n    def execCommand(self, commandName, valueArgument=None):';
	$m.__track_lines__[950] = 'widgets.wysiwyg.py, line 950:\n    if valueArgument is None:';
	$m.__track_lines__[951] = 'widgets.wysiwyg.py, line 951:\n    valueArgument = "null"';
	$m.__track_lines__[953] = 'widgets.wysiwyg.py, line 953:\n    valueArgument = "\\"%s\\"" % str(valueArgument)';
	$m.__track_lines__[955] = 'widgets.wysiwyg.py, line 955:\n    print("execCommand(\\"%s\\", false, %s)" % (commandName, valueArgument))';
	$m.__track_lines__[956] = 'widgets.wysiwyg.py, line 956:\n    return bool(eval("window.top.document.execCommand(\\"%s\\", false, %s)" % (commandName, valueArgument)))';
	$m.__track_lines__[959] = 'widgets.wysiwyg.py, line 959:\n    class Wysiwyg( html5.Div ):';
	$m.__track_lines__[960] = 'widgets.wysiwyg.py, line 960:\n    def __init__(self, editHtml, actionBarHint=translate("Text Editor"), *args, **kwargs ):';
	$m.__track_lines__[961] = 'widgets.wysiwyg.py, line 961:\n    super( Wysiwyg, self ).__init__(*args, **kwargs)';
	$m.__track_lines__[962] = 'widgets.wysiwyg.py, line 962:\n    self.cursorMovedEvent = EventDispatcher("cursorMoved")';
	$m.__track_lines__[963] = 'widgets.wysiwyg.py, line 963:\n    self.saveTextEvent = EventDispatcher("saveText")';
	$m.__track_lines__[964] = 'widgets.wysiwyg.py, line 964:\n    self.abortTextEvent = EventDispatcher("abortText")';
	$m.__track_lines__[965] = 'widgets.wysiwyg.py, line 965:\n    self.textActions = ["style.text.bold",';
	$m.__track_lines__[987] = 'widgets.wysiwyg.py, line 987:\n    self.actionbar = ActionBar(None, None, actionBarHint)';
	$m.__track_lines__[988] = 'widgets.wysiwyg.py, line 988:\n    self.isWysiwygMode = True';
	$m.__track_lines__[989] = 'widgets.wysiwyg.py, line 989:\n    self.discardNextClickEvent = False';
	$m.__track_lines__[990] = 'widgets.wysiwyg.py, line 990:\n    self.appendChild( self.actionbar )';
	$m.__track_lines__[991] = 'widgets.wysiwyg.py, line 991:\n    self.tableDiv = html5.Div()';
	$m.__track_lines__[992] = 'widgets.wysiwyg.py, line 992:\n    self.tableDiv["class"].append("tableeditor")';
	$m.__track_lines__[993] = 'widgets.wysiwyg.py, line 993:\n    self.appendChild(self.tableDiv)';
	$m.__track_lines__[994] = 'widgets.wysiwyg.py, line 994:\n    for c in [TableInsertRowBeforeAction,TableInsertRowAfterAction,TableInsertColBeforeAction,TableInsertColAfterAction,TableRemoveRowAction,TableRemoveColAction]:';
	$m.__track_lines__[995] = 'widgets.wysiwyg.py, line 995:\n    self.tableDiv.appendChild( c() )';
	$m.__track_lines__[996] = 'widgets.wysiwyg.py, line 996:\n    self.tableDiv["style"]["display"]="none"';
	$m.__track_lines__[997] = 'widgets.wysiwyg.py, line 997:\n    self.linkEditor = LinkEditor()';
	$m.__track_lines__[998] = 'widgets.wysiwyg.py, line 998:\n    self.appendChild(self.linkEditor)';
	$m.__track_lines__[999] = 'widgets.wysiwyg.py, line 999:\n    self.imgEditor = ImageEditor()';
	$m.__track_lines__[1000] = 'widgets.wysiwyg.py, line 1000:\n    self.appendChild(self.imgEditor)';
	$m.__track_lines__[1002] = 'widgets.wysiwyg.py, line 1002:\n    self.editor = Editor(editHtml)';
	$m.__track_lines__[1004] = 'widgets.wysiwyg.py, line 1004:\n    self.appendChild( self.editor )';
	$m.__track_lines__[1005] = 'widgets.wysiwyg.py, line 1005:\n    self.actionbar.setActions( self.textActions )';
	$m.__track_lines__[1009] = 'widgets.wysiwyg.py, line 1009:\n    self.currentImage = None';
	$m.__track_lines__[1010] = 'widgets.wysiwyg.py, line 1010:\n    self.cursorImage = None';
	$m.__track_lines__[1011] = 'widgets.wysiwyg.py, line 1011:\n    self.lastMousePos = None';
	$m.__track_lines__[1012] = 'widgets.wysiwyg.py, line 1012:\n    self.sinkEvent("onMouseDown", "onMouseUp", "onMouseMove", "onClick")';
	$m.__track_lines__[1014] = 'widgets.wysiwyg.py, line 1014:\n    def flipView(self, *args, **kwargs ):';
	$m.__track_lines__[1015] = 'widgets.wysiwyg.py, line 1015:\n    htmlStr = self.editor.element.innerHTML';
	$m.__track_lines__[1016] = 'widgets.wysiwyg.py, line 1016:\n    if self.isWysiwygMode:';
	$m.__track_lines__[1017] = 'widgets.wysiwyg.py, line 1017:\n    self.imgEditor.doClose()';
	$m.__track_lines__[1018] = 'widgets.wysiwyg.py, line 1018:\n    self.linkEditor.doClose()';
	$m.__track_lines__[1019] = 'widgets.wysiwyg.py, line 1019:\n    self.tableDiv["style"]["display"] = None';
	$m.__track_lines__[1020] = 'widgets.wysiwyg.py, line 1020:\n    outStr = ""';
	$m.__track_lines__[1021] = 'widgets.wysiwyg.py, line 1021:\n    indent = 0';
	$m.__track_lines__[1022] = 'widgets.wysiwyg.py, line 1022:\n    indestStr = "&nbsp;&nbsp;&nbsp;"';
	$m.__track_lines__[1023] = 'widgets.wysiwyg.py, line 1023:\n    inStr = htmlStr.replace("&", "&amp;" ).replace("<", "&lt;" ).replace(">","&gt;")';
	$m.__track_lines__[1024] = 'widgets.wysiwyg.py, line 1024:\n    while inStr:';
	$m.__track_lines__[1025] = 'widgets.wysiwyg.py, line 1025:\n    if inStr.startswith("&lt;div&gt;"):';
	$m.__track_lines__[1026] = 'widgets.wysiwyg.py, line 1026:\n    outStr += "<br>"';
	$m.__track_lines__[1027] = 'widgets.wysiwyg.py, line 1027:\n    outStr += indestStr*indent';
	$m.__track_lines__[1028] = 'widgets.wysiwyg.py, line 1028:\n    indent +=1';
	$m.__track_lines__[1030] = 'widgets.wysiwyg.py, line 1030:\n    indent -=1';
	$m.__track_lines__[1031] = 'widgets.wysiwyg.py, line 1031:\n    outStr += "<br>"';
	$m.__track_lines__[1032] = 'widgets.wysiwyg.py, line 1032:\n    outStr += indestStr*indent';
	$m.__track_lines__[1034] = 'widgets.wysiwyg.py, line 1034:\n    outStr += "<br>"';
	$m.__track_lines__[1035] = 'widgets.wysiwyg.py, line 1035:\n    outStr += indestStr*indent';
	$m.__track_lines__[1037] = 'widgets.wysiwyg.py, line 1037:\n    outStr += "<br>"';
	$m.__track_lines__[1038] = 'widgets.wysiwyg.py, line 1038:\n    outStr += indestStr*indent';
	$m.__track_lines__[1039] = 'widgets.wysiwyg.py, line 1039:\n    indent +=1';
	$m.__track_lines__[1041] = 'widgets.wysiwyg.py, line 1041:\n    indent -=1';
	$m.__track_lines__[1042] = 'widgets.wysiwyg.py, line 1042:\n    outStr += "<br>"';
	$m.__track_lines__[1043] = 'widgets.wysiwyg.py, line 1043:\n    outStr += indestStr*indent';
	$m.__track_lines__[1045] = 'widgets.wysiwyg.py, line 1045:\n    outStr += "<br>"';
	$m.__track_lines__[1046] = 'widgets.wysiwyg.py, line 1046:\n    outStr += indestStr*indent';
	$m.__track_lines__[1047] = 'widgets.wysiwyg.py, line 1047:\n    indent +=1';
	$m.__track_lines__[1049] = 'widgets.wysiwyg.py, line 1049:\n    indent -=1';
	$m.__track_lines__[1050] = 'widgets.wysiwyg.py, line 1050:\n    outStr += "<br>"';
	$m.__track_lines__[1051] = 'widgets.wysiwyg.py, line 1051:\n    outStr += indestStr*indent';
	$m.__track_lines__[1053] = 'widgets.wysiwyg.py, line 1053:\n    outStr += "<br>"';
	$m.__track_lines__[1054] = 'widgets.wysiwyg.py, line 1054:\n    outStr += indestStr*indent';
	$m.__track_lines__[1056] = 'widgets.wysiwyg.py, line 1056:\n    outStr += "<br>"';
	$m.__track_lines__[1057] = 'widgets.wysiwyg.py, line 1057:\n    outStr += indestStr*indent';
	$m.__track_lines__[1059] = 'widgets.wysiwyg.py, line 1059:\n    outStr += "<br>"';
	$m.__track_lines__[1060] = 'widgets.wysiwyg.py, line 1060:\n    outStr += indestStr*indent';
	$m.__track_lines__[1061] = 'widgets.wysiwyg.py, line 1061:\n    indent +=1';
	$m.__track_lines__[1063] = 'widgets.wysiwyg.py, line 1063:\n    indent -=1';
	$m.__track_lines__[1064] = 'widgets.wysiwyg.py, line 1064:\n    outStr += "<br>"';
	$m.__track_lines__[1065] = 'widgets.wysiwyg.py, line 1065:\n    outStr += indestStr*indent';
	$m.__track_lines__[1067] = 'widgets.wysiwyg.py, line 1067:\n    outStr += "<br>"';
	$m.__track_lines__[1068] = 'widgets.wysiwyg.py, line 1068:\n    outStr += indestStr*indent';
	$m.__track_lines__[1069] = 'widgets.wysiwyg.py, line 1069:\n    indent +=1';
	$m.__track_lines__[1071] = 'widgets.wysiwyg.py, line 1071:\n    indent -=1';
	$m.__track_lines__[1072] = 'widgets.wysiwyg.py, line 1072:\n    outStr += "<br>"';
	$m.__track_lines__[1073] = 'widgets.wysiwyg.py, line 1073:\n    outStr += indestStr*indent';
	$m.__track_lines__[1074] = 'widgets.wysiwyg.py, line 1074:\n    outStr += inStr[0]';
	$m.__track_lines__[1075] = 'widgets.wysiwyg.py, line 1075:\n    inStr = inStr[ 1: ]';
	$m.__track_lines__[1076] = 'widgets.wysiwyg.py, line 1076:\n    self.editor.element.innerHTML = outStr';
	$m.__track_lines__[1077] = 'widgets.wysiwyg.py, line 1077:\n    self.actionbar.setActions( ["text.flipView"] )';
	$m.__track_lines__[1079] = "widgets.wysiwyg.py, line 1079:\n    htmlStr = re.sub(r'<[^>]*?>', '', htmlStr)";
	$m.__track_lines__[1080] = 'widgets.wysiwyg.py, line 1080:\n    htmlStr = htmlStr.replace("&nbsp;","").replace("&nbsp;","")';
	$m.__track_lines__[1081] = 'widgets.wysiwyg.py, line 1081:\n    self.editor.element.innerHTML = htmlStr.replace("&lt;", "<").replace("&gt;", ">").replace("&amp;", "&")';
	$m.__track_lines__[1082] = 'widgets.wysiwyg.py, line 1082:\n    self.actionbar.setActions( self.textActions )';
	$m.__track_lines__[1084] = 'widgets.wysiwyg.py, line 1084:\n    self.isWysiwygMode = not self.isWysiwygMode';
	$m.__track_lines__[1085] = 'widgets.wysiwyg.py, line 1085:\n    return self.isWysiwygMode';
	$m.__track_lines__[1088] = 'widgets.wysiwyg.py, line 1088:\n    def saveText(self, *args, **kwargs):';
	$m.__track_lines__[1089] = 'widgets.wysiwyg.py, line 1089:\n    self.saveTextEvent.fire(self, self.editor.element.innerHTML)';
	$m.__track_lines__[1091] = 'widgets.wysiwyg.py, line 1091:\n    def abortText(self, *args, **kwargs):';
	$m.__track_lines__[1092] = 'widgets.wysiwyg.py, line 1092:\n    self.abortTextEvent.fire(self)';
	$m.__track_lines__[1094] = 'widgets.wysiwyg.py, line 1094:\n    def onMouseDown(self, event):';
	$m.__track_lines__[1095] = 'widgets.wysiwyg.py, line 1095:\n    self.lastMousePos = None';
	$m.__track_lines__[1096] = 'widgets.wysiwyg.py, line 1096:\n    if event.target.tagName=="IMG":';
	$m.__track_lines__[1097] = 'widgets.wysiwyg.py, line 1097:\n    offsetLeft = event.pageX-event.target.offsetLeft';
	$m.__track_lines__[1098] = 'widgets.wysiwyg.py, line 1098:\n    offsetTop = event.pageY-event.target.offsetTop';
	$m.__track_lines__[1099] = 'widgets.wysiwyg.py, line 1099:\n    if event.target.offsetParent is not None:';
	$m.__track_lines__[1100] = 'widgets.wysiwyg.py, line 1100:\n    offsetLeft -= event.target.offsetParent.offsetLeft';
	$m.__track_lines__[1101] = 'widgets.wysiwyg.py, line 1101:\n    offsetTop -= event.target.offsetParent.offsetTop';
	$m.__track_lines__[1102] = 'widgets.wysiwyg.py, line 1102:\n    if offsetLeft>0.8*event.target.clientWidth and offsetTop>0.8*event.target.clientHeight:';
	$m.__track_lines__[1103] = 'widgets.wysiwyg.py, line 1103:\n    self.currentImage = event.target';
	$m.__track_lines__[1104] = 'widgets.wysiwyg.py, line 1104:\n    self.imgEditor.doOpen( event.target )';
	$m.__track_lines__[1105] = 'widgets.wysiwyg.py, line 1105:\n    self.discardNextClickEvent = True';
	$m.__track_lines__[1106] = 'widgets.wysiwyg.py, line 1106:\n    event.preventDefault()';
	$m.__track_lines__[1107] = 'widgets.wysiwyg.py, line 1107:\n    event.stopPropagation()';
	$m.__track_lines__[1109] = 'widgets.wysiwyg.py, line 1109:\n    self.currentImage = None';
	$m.__track_lines__[1110] = 'widgets.wysiwyg.py, line 1110:\n    super( Wysiwyg, self ).onMouseDown(event)';
	$m.__track_lines__[1112] = 'widgets.wysiwyg.py, line 1112:\n    node = eval("window.top.getSelection().anchorNode")';
	$m.__track_lines__[1114] = 'widgets.wysiwyg.py, line 1114:\n    while node and node != self.editor.element:';
	$m.__track_lines__[1116] = 'widgets.wysiwyg.py, line 1116:\n    node = node.parentNode';
	$m.__track_lines__[1118] = 'widgets.wysiwyg.py, line 1118:\n    def onMouseUp(self, event):';
	$m.__track_lines__[1119] = 'widgets.wysiwyg.py, line 1119:\n    self.currentImage = None';
	$m.__track_lines__[1120] = 'widgets.wysiwyg.py, line 1120:\n    self.lastMousePos = None';
	$m.__track_lines__[1121] = 'widgets.wysiwyg.py, line 1121:\n    super( Wysiwyg, self ).onMouseUp(event)';
	$m.__track_lines__[1123] = 'widgets.wysiwyg.py, line 1123:\n    def onMouseMove(self, event):';
	$m.__track_lines__[1124] = 'widgets.wysiwyg.py, line 1124:\n    if event.target.tagName=="IMG":';
	$m.__track_lines__[1125] = 'widgets.wysiwyg.py, line 1125:\n    offsetLeft = event.pageX-event.target.offsetLeft';
	$m.__track_lines__[1126] = 'widgets.wysiwyg.py, line 1126:\n    offsetTop = event.pageY-event.target.offsetTop';
	$m.__track_lines__[1127] = 'widgets.wysiwyg.py, line 1127:\n    if event.target.offsetParent is not None:';
	$m.__track_lines__[1128] = 'widgets.wysiwyg.py, line 1128:\n    offsetLeft -= event.target.offsetParent.offsetLeft';
	$m.__track_lines__[1129] = 'widgets.wysiwyg.py, line 1129:\n    offsetTop -= event.target.offsetParent.offsetTop';
	$m.__track_lines__[1130] = 'widgets.wysiwyg.py, line 1130:\n    if offsetLeft>0.8*event.target.clientWidth and offsetTop>0.8*event.target.clientHeight:';
	$m.__track_lines__[1131] = 'widgets.wysiwyg.py, line 1131:\n    self.cursorImage = event.target';
	$m.__track_lines__[1132] = 'widgets.wysiwyg.py, line 1132:\n    self.cursorImage.style.cursor = "se-resize"';
	$m.__track_lines__[1134] = 'widgets.wysiwyg.py, line 1134:\n    if self.cursorImage is not None:';
	$m.__track_lines__[1135] = 'widgets.wysiwyg.py, line 1135:\n    self.cursorImage.style.cursor = "default"';
	$m.__track_lines__[1136] = 'widgets.wysiwyg.py, line 1136:\n    self.cursorImage = None';
	$m.__track_lines__[1138] = 'widgets.wysiwyg.py, line 1138:\n    self.cursorImage.style.cursor = "default"';
	$m.__track_lines__[1139] = 'widgets.wysiwyg.py, line 1139:\n    self.cursorImage = None';
	$m.__track_lines__[1140] = 'widgets.wysiwyg.py, line 1140:\n    if self.currentImage is not None and event.target.tagName=="IMG" and self.currentImage==event.target:';
	$m.__track_lines__[1141] = 'widgets.wysiwyg.py, line 1141:\n    if self.lastMousePos is None:';
	$m.__track_lines__[1142] = 'widgets.wysiwyg.py, line 1142:\n    self.lastMousePos = (event.x, event.y)';
	$m.__track_lines__[1143] = 'widgets.wysiwyg.py, line 1143:\n    return';
	$m.__track_lines__[1144] = 'widgets.wysiwyg.py, line 1144:\n    x,y = self.lastMousePos';
	$m.__track_lines__[1145] = 'widgets.wysiwyg.py, line 1145:\n    self.lastMousePos = (event.x, event.y)';
	$m.__track_lines__[1146] = 'widgets.wysiwyg.py, line 1146:\n    event.target.width = event.target.clientWidth-(x-event.x)';
	$m.__track_lines__[1147] = 'widgets.wysiwyg.py, line 1147:\n    event.target.height = event.target.clientHeight-(y-event.y)';
	$m.__track_lines__[1148] = 'widgets.wysiwyg.py, line 1148:\n    event.preventDefault()';
	$m.__track_lines__[1149] = 'widgets.wysiwyg.py, line 1149:\n    event.stopPropagation()';
	$m.__track_lines__[1151] = 'widgets.wysiwyg.py, line 1151:\n    self.lastMousePos = None';
	$m.__track_lines__[1152] = 'widgets.wysiwyg.py, line 1152:\n    self.currentImage = None';
	$m.__track_lines__[1153] = 'widgets.wysiwyg.py, line 1153:\n    super( Wysiwyg, self ).onMouseMove(event)';
	$m.__track_lines__[1156] = 'widgets.wysiwyg.py, line 1156:\n    def onClick(self, event):';
	$m.__track_lines__[1157] = 'widgets.wysiwyg.py, line 1157:\n    if self.discardNextClickEvent:';
	$m.__track_lines__[1158] = 'widgets.wysiwyg.py, line 1158:\n    self.discardNextClickEvent = False';
	$m.__track_lines__[1159] = 'widgets.wysiwyg.py, line 1159:\n    return';
	$m.__track_lines__[1161] = 'widgets.wysiwyg.py, line 1161:\n    super(Wysiwyg, self).onClick( event )';
	$m.__track_lines__[1162] = 'widgets.wysiwyg.py, line 1162:\n    domWdg = event.target';
	$m.__track_lines__[1163] = 'widgets.wysiwyg.py, line 1163:\n    isEditorTarget = False';
	$m.__track_lines__[1165] = 'widgets.wysiwyg.py, line 1165:\n    while domWdg:';
	$m.__track_lines__[1166] = 'widgets.wysiwyg.py, line 1166:\n    if domWdg==self.editor.element:';
	$m.__track_lines__[1167] = 'widgets.wysiwyg.py, line 1167:\n    isEditorTarget = True';
	$m.__track_lines__[1168] = 'widgets.wysiwyg.py, line 1168:\n    break';
	$m.__track_lines__[1169] = 'widgets.wysiwyg.py, line 1169:\n    domWdg = domWdg.parentNode';
	$m.__track_lines__[1171] = 'widgets.wysiwyg.py, line 1171:\n    if not isEditorTarget:';
	$m.__track_lines__[1172] = 'widgets.wysiwyg.py, line 1172:\n    return';
	$m.__track_lines__[1174] = 'widgets.wysiwyg.py, line 1174:\n    node = eval("window.top.getSelection().anchorNode")';
	$m.__track_lines__[1175] = 'widgets.wysiwyg.py, line 1175:\n    nodeStack = []';
	$m.__track_lines__[1176] = 'widgets.wysiwyg.py, line 1176:\n    i = 10';
	$m.__track_lines__[1179] = 'widgets.wysiwyg.py, line 1179:\n    while i>0 and node and node != self.editor.element:';
	$m.__track_lines__[1180] = 'widgets.wysiwyg.py, line 1180:\n    i -= 1';
	$m.__track_lines__[1181] = 'widgets.wysiwyg.py, line 1181:\n    nodeStack.append(node)';
	$m.__track_lines__[1182] = 'widgets.wysiwyg.py, line 1182:\n    node = node.parentNode';
	$m.__track_lines__[1184] = 'widgets.wysiwyg.py, line 1184:\n    if "TABLE" in [(x.tagName if "tagName" in dir(x) else "") for x in nodeStack]:';
	$m.__track_lines__[1185] = 'widgets.wysiwyg.py, line 1185:\n    self.tableDiv["style"]["display"] = ""';
	$m.__track_lines__[1187] = 'widgets.wysiwyg.py, line 1187:\n    self.tableDiv["style"]["display"] = "none"';
	$m.__track_lines__[1189] = 'widgets.wysiwyg.py, line 1189:\n    self.linkEditor.onCursorMoved(nodeStack)';
	$m.__track_lines__[1190] = 'widgets.wysiwyg.py, line 1190:\n    self.imgEditor.onCursorMoved(nodeStack)';
	$m.__track_lines__[1191] = 'widgets.wysiwyg.py, line 1191:\n    self.cursorMovedEvent.fire( nodeStack )';
	var $lambda6,$lambda5,$lambda4,$lambda2,$lambda1,$lambda9,$lambda8,$lambda12,$lambda11,$lambda10,$lambda17,$lambda14,$lambda15,$lambda18,$lambda19,$lambda3,$lambda7,$lambda16,$lambda13;

	$pyjs['track']['module']='widgets.wysiwyg';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=1;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['html5'] = $p['___import___']('html5', 'widgets');
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=2;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['ActionBar'] = $p['___import___']('widgets.actionbar.ActionBar', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=3;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['EventDispatcher'] = $p['___import___']('event.EventDispatcher', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=4;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['time'] = $p['___import___']('time.time', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=5;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['actionDelegateSelector'] = $p['___import___']('priorityqueue.actionDelegateSelector', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=6;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['re'] = $p['___import___']('re', 'widgets');
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=7;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['conf'] = $p['___import___']('config.conf', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=8;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['FileWidget'] = $p['___import___']('widgets.file.FileWidget', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=9;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['translate'] = $p['___import___']('i18n.translate', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=11;
	$m['BasicEditorAction'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.wysiwyg';
		$pyjs['track']['lineno']=13;
		$method = $pyjs__bind_method2('execCommand', function() {
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

			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':13};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=13;
			$pyjs['track']['lineno']=14;
			$pyjs['track']['lineno']=14;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})()['editor'], 'execCommand', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['execCommand'] = $method;
		$pyjs['track']['lineno']=11;
		var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Button'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('BasicEditorAction', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=16;
	$m['BasicTextAction'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.wysiwyg';
		$pyjs['track']['lineno']=17;
		$cls_definition['cmd'] = null;
		$pyjs['track']['lineno']=18;
		$cls_definition['isActiveTag'] = null;
		$pyjs['track']['lineno']=19;
		$cls_definition['title'] = null;
		$pyjs['track']['lineno']=21;
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

			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':21};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=21;
			$pyjs['track']['lineno']=22;
			if (!( ($p['getattr'](self, 'cmd') !== null) )) {
			   throw $p['AssertionError']();
			 }
			$pyjs['track']['lineno']=23;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['BasicTextAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})(), '__init__', args, kwargs, [{}, $p['getattr'](self, 'cmd')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
			$pyjs['track']['lineno']=24;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('class', 'icon text style');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
			$pyjs['track']['lineno']=25;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__getitem__']('class')['append']($p['getattr'](self, 'cmd'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
			$pyjs['track']['lineno']=26;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'title'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})()) {
				$pyjs['track']['lineno']=27;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__setitem__']('title', $p['getattr'](self, 'title'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=29;
		$method = $pyjs__bind_method2('onAttach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':29};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=29;
			$pyjs['track']['lineno']=30;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['BasicTextAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})()['onAttach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
			$pyjs['track']['lineno']=31;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'isActiveTag'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})()) {
				$pyjs['track']['lineno']=32;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})()['cursorMovedEvent']['register'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onAttach'] = $method;
		$pyjs['track']['lineno']=34;
		$method = $pyjs__bind_method2('onDetach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':34};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=34;
			$pyjs['track']['lineno']=35;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['BasicTextAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})()['onDetach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
			$pyjs['track']['lineno']=36;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'isActiveTag'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})()) {
				$pyjs['track']['lineno']=37;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})()['cursorMovedEvent']['unregister'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onDetach'] = $method;
		$pyjs['track']['lineno']=39;
		$method = $pyjs__bind_method2('onCursorMoved', function(nodeStack) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				nodeStack = arguments[1];
			}

			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':39};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=39;
			$pyjs['track']['lineno']=40;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](function(){
				var $iter1_nextval,$iter1_type,$collcomp1,$iter1_iter,$iter1_idx,$pyjs__trackstack_size_1,x,$iter1_array;
	$collcomp1 = $p['list']();
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter1_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return nodeStack;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				x = $iter1_nextval['$nextval'];
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $collcomp1['append'](($p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dir'](x);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})()['__contains__']('tagName'))? ($p['getattr'](x, 'tagName')) : ('')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.wysiwyg';

	return $collcomp1;}()['__contains__']($p['getattr'](self, 'isActiveTag')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})()) {
				$pyjs['track']['lineno']=41;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool'](self['__getitem__']('class')['__contains__']('isactive')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})()) {
					$pyjs['track']['lineno']=42;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['__getitem__']('class')['append']('isactive');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
				}
			}
			else {
				$pyjs['track']['lineno']=44;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](self['__getitem__']('class')['__contains__']('isactive'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})()) {
					$pyjs['track']['lineno']=45;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['__getitem__']('class')['remove']('isactive');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})();
				}
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['nodeStack']]);
		$cls_definition['onCursorMoved'] = $method;
		$pyjs['track']['lineno']=47;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];

			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':47};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=47;
			$pyjs['track']['lineno']=48;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['execCommand']($p['getattr'](self, 'cmd'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=50;
		$method = $pyjs__bind_method2('resetLoadingState', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':50};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=50;
			$pyjs['track']['lineno']=51;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['resetLoadingState'] = $method;
		$pyjs['track']['lineno']=16;
		var $bases = new Array($m['BasicEditorAction']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('BasicTextAction', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=54;
	$m['TextStyleBold'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.wysiwyg';
		$pyjs['track']['lineno']=55;
		$cls_definition['cmd'] = 'bold';
		$pyjs['track']['lineno']=56;
		$cls_definition['isActiveTag'] = 'B';
		$pyjs['track']['lineno']=57;
		$cls_definition['title'] = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $m['translate']('Bold');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
		$pyjs['track']['lineno']=54;
		var $bases = new Array($m['BasicTextAction']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('TextStyleBold', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=62;
	var 	$lambda1 = function(modul, handler, actionName) {

		$pyjs['track']={'module':'widgets.wysiwyg','lineno':62};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='widgets.wysiwyg';
		$pyjs['track']['lineno']=62;
		$pyjs['track']['lineno']=62;
		$pyjs['track']['lineno']=62;
		var $pyjs__ret = $p['op_eq'](actionName, 'style.text.bold');
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$lambda1['__name__'] = '$lambda1';

	$lambda1['__bind_type__'] = 0;
	$lambda1['__args__'] = [null,null,['modul'],['handler'],['actionName']];
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $lambda1, $m['TextStyleBold']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
	$pyjs['track']['lineno']=64;
	$m['TextStyleItalic'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.wysiwyg';
		$pyjs['track']['lineno']=65;
		$cls_definition['cmd'] = 'italic';
		$pyjs['track']['lineno']=66;
		$cls_definition['isActiveTag'] = 'I';
		$pyjs['track']['lineno']=67;
		$cls_definition['title'] = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $m['translate']('Italic');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
		$pyjs['track']['lineno']=64;
		var $bases = new Array($m['BasicTextAction']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('TextStyleItalic', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=72;
	var 	$lambda2 = function(modul, handler, actionName) {

		$pyjs['track']={'module':'widgets.wysiwyg','lineno':72};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='widgets.wysiwyg';
		$pyjs['track']['lineno']=72;
		$pyjs['track']['lineno']=72;
		$pyjs['track']['lineno']=72;
		var $pyjs__ret = $p['op_eq'](actionName, 'style.text.italic');
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$lambda2['__name__'] = '$lambda2';

	$lambda2['__bind_type__'] = 0;
	$lambda2['__args__'] = [null,null,['modul'],['handler'],['actionName']];
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $lambda2, $m['TextStyleItalic']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})();
	$pyjs['track']['lineno']=75;
	$m['BasicFormatBlockAction'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.wysiwyg';
		$pyjs['track']['lineno']=76;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];

			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':76};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=76;
			$pyjs['track']['lineno']=77;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['execCommand']('formatBlock', $p['getattr'](self, 'cmd'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=75;
		var $bases = new Array($m['BasicTextAction']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('BasicFormatBlockAction', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=79;
	$m['TextStyleH1'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.wysiwyg';
		$pyjs['track']['lineno']=80;
		$cls_definition['cmd'] = 'H1';
		$pyjs['track']['lineno']=81;
		$cls_definition['title'] = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $m['translate']('H1');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})();
		$pyjs['track']['lineno']=79;
		var $bases = new Array($m['BasicFormatBlockAction']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('TextStyleH1', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=83;
	var 	$lambda3 = function(modul, handler, actionName) {

		$pyjs['track']={'module':'widgets.wysiwyg','lineno':83};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='widgets.wysiwyg';
		$pyjs['track']['lineno']=83;
		$pyjs['track']['lineno']=83;
		$pyjs['track']['lineno']=83;
		var $pyjs__ret = $p['op_eq'](actionName, 'style.text.h1');
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$lambda3['__name__'] = '$lambda3';

	$lambda3['__bind_type__'] = 0;
	$lambda3['__args__'] = [null,null,['modul'],['handler'],['actionName']];
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $lambda3, $m['TextStyleH1']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})();
	$pyjs['track']['lineno']=85;
	$m['TextStyleH2'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.wysiwyg';
		$pyjs['track']['lineno']=86;
		$cls_definition['cmd'] = 'H2';
		$pyjs['track']['lineno']=87;
		$cls_definition['title'] = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $m['translate']('H2');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})();
		$pyjs['track']['lineno']=85;
		var $bases = new Array($m['BasicFormatBlockAction']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('TextStyleH2', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=89;
	var 	$lambda4 = function(modul, handler, actionName) {

		$pyjs['track']={'module':'widgets.wysiwyg','lineno':89};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='widgets.wysiwyg';
		$pyjs['track']['lineno']=89;
		$pyjs['track']['lineno']=89;
		$pyjs['track']['lineno']=89;
		var $pyjs__ret = $p['op_eq'](actionName, 'style.text.h2');
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$lambda4['__name__'] = '$lambda4';

	$lambda4['__bind_type__'] = 0;
	$lambda4['__args__'] = [null,null,['modul'],['handler'],['actionName']];
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $lambda4, $m['TextStyleH2']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})();
	$pyjs['track']['lineno']=91;
	$m['TextStyleH3'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.wysiwyg';
		$pyjs['track']['lineno']=92;
		$cls_definition['cmd'] = 'H3';
		$pyjs['track']['lineno']=93;
		$cls_definition['title'] = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $m['translate']('H3');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})();
		$pyjs['track']['lineno']=91;
		var $bases = new Array($m['BasicFormatBlockAction']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('TextStyleH3', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=95;
	var 	$lambda5 = function(modul, handler, actionName) {

		$pyjs['track']={'module':'widgets.wysiwyg','lineno':95};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='widgets.wysiwyg';
		$pyjs['track']['lineno']=95;
		$pyjs['track']['lineno']=95;
		$pyjs['track']['lineno']=95;
		var $pyjs__ret = $p['op_eq'](actionName, 'style.text.h3');
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$lambda5['__name__'] = '$lambda5';

	$lambda5['__bind_type__'] = 0;
	$lambda5['__args__'] = [null,null,['modul'],['handler'],['actionName']];
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $lambda5, $m['TextStyleH3']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})();
	$pyjs['track']['lineno']=97;
	$m['TextStyleH4'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.wysiwyg';
		$pyjs['track']['lineno']=98;
		$cls_definition['cmd'] = 'H4';
		$pyjs['track']['lineno']=99;
		$cls_definition['title'] = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $m['translate']('H4');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})();
		$pyjs['track']['lineno']=97;
		var $bases = new Array($m['BasicFormatBlockAction']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('TextStyleH4', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=101;
	var 	$lambda6 = function(modul, handler, actionName) {

		$pyjs['track']={'module':'widgets.wysiwyg','lineno':101};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='widgets.wysiwyg';
		$pyjs['track']['lineno']=101;
		$pyjs['track']['lineno']=101;
		$pyjs['track']['lineno']=101;
		var $pyjs__ret = $p['op_eq'](actionName, 'style.text.h4');
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$lambda6['__name__'] = '$lambda6';

	$lambda6['__bind_type__'] = 0;
	$lambda6['__args__'] = [null,null,['modul'],['handler'],['actionName']];
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $lambda6, $m['TextStyleH4']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})();
	$pyjs['track']['lineno']=103;
	$m['TextStyleH5'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.wysiwyg';
		$pyjs['track']['lineno']=104;
		$cls_definition['cmd'] = 'H5';
		$pyjs['track']['lineno']=105;
		$cls_definition['title'] = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $m['translate']('H5');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})();
		$pyjs['track']['lineno']=103;
		var $bases = new Array($m['BasicFormatBlockAction']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('TextStyleH5', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=107;
	var 	$lambda7 = function(modul, handler, actionName) {

		$pyjs['track']={'module':'widgets.wysiwyg','lineno':107};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='widgets.wysiwyg';
		$pyjs['track']['lineno']=107;
		$pyjs['track']['lineno']=107;
		$pyjs['track']['lineno']=107;
		var $pyjs__ret = $p['op_eq'](actionName, 'style.text.h5');
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$lambda7['__name__'] = '$lambda7';

	$lambda7['__bind_type__'] = 0;
	$lambda7['__args__'] = [null,null,['modul'],['handler'],['actionName']];
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $lambda7, $m['TextStyleH5']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})();
	$pyjs['track']['lineno']=109;
	$m['TextStyleH6'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.wysiwyg';
		$pyjs['track']['lineno']=110;
		$cls_definition['cmd'] = 'H6';
		$pyjs['track']['lineno']=111;
		$cls_definition['title'] = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $m['translate']('H6');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})();
		$pyjs['track']['lineno']=109;
		var $bases = new Array($m['BasicFormatBlockAction']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('TextStyleH6', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=113;
	var 	$lambda8 = function(modul, handler, actionName) {

		$pyjs['track']={'module':'widgets.wysiwyg','lineno':113};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='widgets.wysiwyg';
		$pyjs['track']['lineno']=113;
		$pyjs['track']['lineno']=113;
		$pyjs['track']['lineno']=113;
		var $pyjs__ret = $p['op_eq'](actionName, 'style.text.h6');
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$lambda8['__name__'] = '$lambda8';

	$lambda8['__bind_type__'] = 0;
	$lambda8['__args__'] = [null,null,['modul'],['handler'],['actionName']];
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $lambda8, $m['TextStyleH6']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})();
	$pyjs['track']['lineno']=116;
	$m['TextStyleBlockQuote'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.wysiwyg';
		$pyjs['track']['lineno']=117;
		$cls_definition['cmd'] = 'BLOCKQUOTE';
		$pyjs['track']['lineno']=118;
		$cls_definition['title'] = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $m['translate']('Blockqoute');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})();
		$pyjs['track']['lineno']=116;
		var $bases = new Array($m['BasicFormatBlockAction']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('TextStyleBlockQuote', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=122;
	$m['TextStyleJustifyCenter'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.wysiwyg';
		$pyjs['track']['lineno']=123;
		$cls_definition['cmd'] = 'justifyCenter';
		$pyjs['track']['lineno']=124;
		$cls_definition['title'] = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $m['translate']('Justifiy Center');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})();
		$pyjs['track']['lineno']=122;
		var $bases = new Array($m['BasicTextAction']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('TextStyleJustifyCenter', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=125;
	var 	$lambda9 = function(modul, handler, actionName) {

		$pyjs['track']={'module':'widgets.wysiwyg','lineno':125};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='widgets.wysiwyg';
		$pyjs['track']['lineno']=125;
		$pyjs['track']['lineno']=125;
		$pyjs['track']['lineno']=125;
		var $pyjs__ret = $p['op_eq'](actionName, 'style.text.justifyCenter');
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$lambda9['__name__'] = '$lambda9';

	$lambda9['__bind_type__'] = 0;
	$lambda9['__args__'] = [null,null,['modul'],['handler'],['actionName']];
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $lambda9, $m['TextStyleJustifyCenter']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})();
	$pyjs['track']['lineno']=127;
	$m['TextStyleJustifyLeft'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.wysiwyg';
		$pyjs['track']['lineno']=128;
		$cls_definition['cmd'] = 'justifyLeft';
		$pyjs['track']['lineno']=129;
		$cls_definition['title'] = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $m['translate']('Justifiy Left');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})();
		$pyjs['track']['lineno']=127;
		var $bases = new Array($m['BasicTextAction']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('TextStyleJustifyLeft', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=130;
	var 	$lambda10 = function(modul, handler, actionName) {

		$pyjs['track']={'module':'widgets.wysiwyg','lineno':130};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='widgets.wysiwyg';
		$pyjs['track']['lineno']=130;
		$pyjs['track']['lineno']=130;
		$pyjs['track']['lineno']=130;
		var $pyjs__ret = $p['op_eq'](actionName, 'style.text.justifyLeft');
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$lambda10['__name__'] = '$lambda10';

	$lambda10['__bind_type__'] = 0;
	$lambda10['__args__'] = [null,null,['modul'],['handler'],['actionName']];
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $lambda10, $m['TextStyleJustifyLeft']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})();
	$pyjs['track']['lineno']=132;
	$m['TextStyleJustifyRight'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.wysiwyg';
		$pyjs['track']['lineno']=133;
		$cls_definition['cmd'] = 'justifyRight';
		$pyjs['track']['lineno']=134;
		$cls_definition['title'] = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $m['translate']('Justifiy Right');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})();
		$pyjs['track']['lineno']=132;
		var $bases = new Array($m['BasicTextAction']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('TextStyleJustifyRight', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=135;
	var 	$lambda11 = function(modul, handler, actionName) {

		$pyjs['track']={'module':'widgets.wysiwyg','lineno':135};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='widgets.wysiwyg';
		$pyjs['track']['lineno']=135;
		$pyjs['track']['lineno']=135;
		$pyjs['track']['lineno']=135;
		var $pyjs__ret = $p['op_eq'](actionName, 'style.text.justifyRight');
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$lambda11['__name__'] = '$lambda11';

	$lambda11['__bind_type__'] = 0;
	$lambda11['__args__'] = [null,null,['modul'],['handler'],['actionName']];
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $lambda11, $m['TextStyleJustifyRight']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})();
	$pyjs['track']['lineno']=139;
	$m['TextInsertOrderedList'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.wysiwyg';
		$pyjs['track']['lineno']=140;
		$cls_definition['cmd'] = 'insertOrderedList';
		$pyjs['track']['lineno']=141;
		$cls_definition['title'] = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $m['translate']('Insert an ordered List');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})();
		$pyjs['track']['lineno']=139;
		var $bases = new Array($m['BasicTextAction']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('TextInsertOrderedList', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=142;
	var 	$lambda12 = function(modul, handler, actionName) {

		$pyjs['track']={'module':'widgets.wysiwyg','lineno':142};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='widgets.wysiwyg';
		$pyjs['track']['lineno']=142;
		$pyjs['track']['lineno']=142;
		$pyjs['track']['lineno']=142;
		var $pyjs__ret = $p['op_eq'](actionName, 'text.orderedList');
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$lambda12['__name__'] = '$lambda12';

	$lambda12['__bind_type__'] = 0;
	$lambda12['__args__'] = [null,null,['modul'],['handler'],['actionName']];
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $lambda12, $m['TextInsertOrderedList']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})();
	$pyjs['track']['lineno']=144;
	$m['TextInsertUnorderedList'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.wysiwyg';
		$pyjs['track']['lineno']=145;
		$cls_definition['cmd'] = 'insertUnorderedList';
		$pyjs['track']['lineno']=146;
		$cls_definition['title'] = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $m['translate']('Insert an unordered List');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})();
		$pyjs['track']['lineno']=144;
		var $bases = new Array($m['BasicTextAction']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('TextInsertUnorderedList', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=147;
	var 	$lambda13 = function(modul, handler, actionName) {

		$pyjs['track']={'module':'widgets.wysiwyg','lineno':147};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='widgets.wysiwyg';
		$pyjs['track']['lineno']=147;
		$pyjs['track']['lineno']=147;
		$pyjs['track']['lineno']=147;
		var $pyjs__ret = $p['op_eq'](actionName, 'text.unorderedList');
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$lambda13['__name__'] = '$lambda13';

	$lambda13['__bind_type__'] = 0;
	$lambda13['__args__'] = [null,null,['modul'],['handler'],['actionName']];
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $lambda13, $m['TextInsertUnorderedList']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})();
	$pyjs['track']['lineno']=152;
	$m['TextIndent'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.wysiwyg';
		$pyjs['track']['lineno']=153;
		$cls_definition['cmd'] = 'indent';
		$pyjs['track']['lineno']=154;
		$cls_definition['title'] = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $m['translate']('Indent more');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})();
		$pyjs['track']['lineno']=152;
		var $bases = new Array($m['BasicTextAction']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('TextIndent', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=155;
	var 	$lambda14 = function(modul, handler, actionName) {

		$pyjs['track']={'module':'widgets.wysiwyg','lineno':155};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='widgets.wysiwyg';
		$pyjs['track']['lineno']=155;
		$pyjs['track']['lineno']=155;
		$pyjs['track']['lineno']=155;
		var $pyjs__ret = $p['op_eq'](actionName, 'text.indent');
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$lambda14['__name__'] = '$lambda14';

	$lambda14['__bind_type__'] = 0;
	$lambda14['__args__'] = [null,null,['modul'],['handler'],['actionName']];
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $lambda14, $m['TextIndent']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})();
	$pyjs['track']['lineno']=158;
	$m['TextOutdent'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.wysiwyg';
		$pyjs['track']['lineno']=159;
		$cls_definition['cmd'] = 'outdent';
		$pyjs['track']['lineno']=160;
		$cls_definition['title'] = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $m['translate']('Indent less');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})();
		$pyjs['track']['lineno']=158;
		var $bases = new Array($m['BasicTextAction']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('TextOutdent', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=161;
	var 	$lambda15 = function(modul, handler, actionName) {

		$pyjs['track']={'module':'widgets.wysiwyg','lineno':161};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='widgets.wysiwyg';
		$pyjs['track']['lineno']=161;
		$pyjs['track']['lineno']=161;
		$pyjs['track']['lineno']=161;
		var $pyjs__ret = $p['op_eq'](actionName, 'text.outdent');
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$lambda15['__name__'] = '$lambda15';

	$lambda15['__bind_type__'] = 0;
	$lambda15['__args__'] = [null,null,['modul'],['handler'],['actionName']];
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $lambda15, $m['TextOutdent']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})();
	$pyjs['track']['lineno']=165;
	$m['TextRemoveFormat'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.wysiwyg';
		$pyjs['track']['lineno']=166;
		$cls_definition['cmd'] = 'removeformat';
		$pyjs['track']['lineno']=167;
		$cls_definition['title'] = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $m['translate']('Remove all formatting');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})();
		$pyjs['track']['lineno']=169;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
			var node,i,$and1,$and3,$sub2,$sub1,$and2;
			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':169};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=169;
			$pyjs['track']['lineno']=170;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['execCommand']($p['getattr'](self, 'cmd'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})();
			$pyjs['track']['lineno']=172;
			node = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (typeof eval == "undefined"?$m['eval']:eval)('window.top.getSelection().anchorNode');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})();
			$pyjs['track']['lineno']=174;
			i = 10;
			$pyjs['track']['lineno']=175;
			while ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and1=($p['cmp'](i, 0) == 1))?($p['bool']($and2=node)?!$p['op_eq'](node, $p['getattr']($p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})(), 'editor'), 'element')):$and2):$and1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})()) {
				$pyjs['track']['lineno']=176;
				i = $p['__op_sub']($sub1=i,$sub2=1);
				$pyjs['track']['lineno']=178;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dir'](node);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})()['__contains__']('tagName')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})()) {
					$pyjs['track']['lineno']=179;
					node = $p['getattr'](node, 'parentNode');
					$pyjs['track']['lineno']=180;
					continue;
				}
				$pyjs['track']['lineno']=182;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](function(){
					var $iter2_nextval,$iter2_type,$iter2_iter,$collcomp2,$iter2_idx,$pyjs__trackstack_size_1,x,$iter2_array;
	$collcomp2 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter2_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['range'](0, 6);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})();
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					x = $iter2_nextval['$nextval'];
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $collcomp2['append']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['sprintf']('H%s', x);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='widgets.wysiwyg';

	return $collcomp2;}()['__contains__']($p['getattr'](node, 'tagName')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})()) {
					$pyjs['track']['lineno']=183;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['execCommand']('formatBlock', 'div');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})();
					$pyjs['track']['lineno']=184;
					$pyjs['track']['lineno']=184;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=186;
				node = $p['getattr'](node, 'parentNode');
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=165;
		var $bases = new Array($m['BasicTextAction']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('TextRemoveFormat', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=188;
	var 	$lambda16 = function(modul, handler, actionName) {

		$pyjs['track']={'module':'widgets.wysiwyg','lineno':188};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='widgets.wysiwyg';
		$pyjs['track']['lineno']=188;
		$pyjs['track']['lineno']=188;
		$pyjs['track']['lineno']=188;
		var $pyjs__ret = $p['op_eq'](actionName, 'text.removeformat');
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$lambda16['__name__'] = '$lambda16';

	$lambda16['__bind_type__'] = 0;
	$lambda16['__args__'] = [null,null,['modul'],['handler'],['actionName']];
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $lambda16, $m['TextRemoveFormat']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})();
	$pyjs['track']['lineno']=194;
	$m['TextInsertImageAction'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.wysiwyg';
		$pyjs['track']['lineno']=195;
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

			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':195};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=195;
			$pyjs['track']['lineno']=196;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['TextInsertImageAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})(), '__init__', args, kwargs, [{}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Insert Image');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})();
			$pyjs['track']['lineno']=197;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('class', 'icon text image');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})();
			$pyjs['track']['lineno']=198;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('title', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Insert Image');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=200;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
			var currentSelector;
			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':200};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=200;
			$pyjs['track']['lineno']=201;
			currentSelector = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(null, $m['FileWidget'], null, null, [{'isSelector':true}, 'file']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
}})();
			$pyjs['track']['lineno']=202;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return currentSelector['selectionActivatedEvent']['register'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})();
			$pyjs['track']['lineno']=203;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('mainWindow')['stackWidget'](currentSelector);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=205;
		$method = $pyjs__bind_method2('onSelectionActivated', function(selectWdg, selection) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				selectWdg = arguments[1];
				selection = arguments[2];
			}
			var dataUrl,$iter3_array,$and4,$and5,$add2,item,$iter3_idx,$iter3_iter,$iter3_type,$add1,$pyjs__trackstack_size_1,$iter3_nextval;
			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':205};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=205;
			$pyjs['track']['lineno']=206;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['printFunc'](['onSelectionActivated'], 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})();
			$pyjs['track']['lineno']=208;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool'](selection));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_88_err){if (!$p['isinstance']($pyjs_dbg_88_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_88_err);}throw $pyjs_dbg_88_err;
}})()) {
				$pyjs['track']['lineno']=209;
				$pyjs['track']['lineno']=209;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=211;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['printFunc']([selection], 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_89_err){if (!$p['isinstance']($pyjs_dbg_89_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_89_err);}throw $pyjs_dbg_89_err;
}})();
			$pyjs['track']['lineno']=213;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter3_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return selection;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_90_err){if (!$p['isinstance']($pyjs_dbg_90_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_90_err);}throw $pyjs_dbg_90_err;
}})();
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				item = $iter3_nextval['$nextval'];
				$pyjs['track']['lineno']=214;
				dataUrl = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('/file/download/%s/%s', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$p['getattr'](item, 'data')['__getitem__']('dlkey'), (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](item, 'data')['__getitem__']('name')['$$replace']('"', '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_91_err){if (!$p['isinstance']($pyjs_dbg_91_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_91_err);}throw $pyjs_dbg_91_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_92_err){if (!$p['isinstance']($pyjs_dbg_92_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_92_err);}throw $pyjs_dbg_92_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_93_err){if (!$p['isinstance']($pyjs_dbg_93_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_93_err);}throw $pyjs_dbg_93_err;
}})();
				$pyjs['track']['lineno']=215;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($and4=(function(){try{try{$pyjs['in_try_except'] += 1;
				return item['data']['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_94_err){if (!$p['isinstance']($pyjs_dbg_94_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_94_err);}throw $pyjs_dbg_94_err;
}})()['__contains__']('mimetype'))?(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](item, 'data')['__getitem__']('mimetype')['startswith']('image/');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_95_err){if (!$p['isinstance']($pyjs_dbg_95_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_95_err);}throw $pyjs_dbg_95_err;
}})():$and4));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_96_err){if (!$p['isinstance']($pyjs_dbg_96_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_96_err);}throw $pyjs_dbg_96_err;
}})()) {
					$pyjs['track']['lineno']=216;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['execCommand']('insertImage', dataUrl);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_97_err){if (!$p['isinstance']($pyjs_dbg_97_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_97_err);}throw $pyjs_dbg_97_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=218;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['execCommand']('createLink', $p['__op_add']($add1=dataUrl,$add2='?download=1'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_98_err){if (!$p['isinstance']($pyjs_dbg_98_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_98_err);}throw $pyjs_dbg_98_err;
}})();
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['selectWdg'],['selection']]);
		$cls_definition['onSelectionActivated'] = $method;
		$pyjs['track']['lineno']=221;
		$method = $pyjs__bind_method2('isSuitableFor', function(modul, handler, actionName) {

			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':221};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=221;
			$pyjs['track']['lineno']=222;
			$pyjs['track']['lineno']=222;
			var $pyjs__ret = $p['op_eq'](actionName, 'text.image');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['modul'],['handler'],['actionName']]);
		$cls_definition['isSuitableFor'] = $method;
		$pyjs['track']['lineno']=224;
		$method = $pyjs__bind_method2('resetLoadingState', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':224};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=224;
			$pyjs['track']['lineno']=225;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['resetLoadingState'] = $method;
		$pyjs['track']['lineno']=194;
		var $bases = new Array($m['BasicEditorAction']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('TextInsertImageAction', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=227;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $p['getattr']($m['TextInsertImageAction'], 'isSuitableFor'), $m['TextInsertImageAction']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_99_err){if (!$p['isinstance']($pyjs_dbg_99_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_99_err);}throw $pyjs_dbg_99_err;
}})();
	$pyjs['track']['lineno']=229;
	$m['TextInsertLinkAction'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.wysiwyg';
		$pyjs['track']['lineno']=230;
		$cls_definition['newLinkIdx'] = 0;
		$pyjs['track']['lineno']=231;
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

			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':231};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=231;
			$pyjs['track']['lineno']=232;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['TextInsertLinkAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_100_err){if (!$p['isinstance']($pyjs_dbg_100_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_100_err);}throw $pyjs_dbg_100_err;
}})(), '__init__', args, kwargs, [{}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Insert Link');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_101_err){if (!$p['isinstance']($pyjs_dbg_101_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_101_err);}throw $pyjs_dbg_101_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_102_err){if (!$p['isinstance']($pyjs_dbg_102_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_102_err);}throw $pyjs_dbg_102_err;
}})();
			$pyjs['track']['lineno']=233;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('class', 'icon text link');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_103_err){if (!$p['isinstance']($pyjs_dbg_103_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_103_err);}throw $pyjs_dbg_103_err;
}})();
			$pyjs['track']['lineno']=234;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('title', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Insert Link');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_104_err){if (!$p['isinstance']($pyjs_dbg_104_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_104_err);}throw $pyjs_dbg_104_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_105_err){if (!$p['isinstance']($pyjs_dbg_105_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_105_err);}throw $pyjs_dbg_105_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=236;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
			var newLinkTarget;
			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':236};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=236;
			$pyjs['track']['lineno']=237;
			newLinkTarget = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('#linkidx-%s-%s', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple']([$p['getattr']($m['TextInsertLinkAction'], 'newLinkIdx'), (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['time']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_106_err){if (!$p['isinstance']($pyjs_dbg_106_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_106_err);}throw $pyjs_dbg_106_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_107_err){if (!$p['isinstance']($pyjs_dbg_107_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_107_err);}throw $pyjs_dbg_107_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_108_err){if (!$p['isinstance']($pyjs_dbg_108_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_108_err);}throw $pyjs_dbg_108_err;
}})();
			$pyjs['track']['lineno']=239;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['execCommand']('createLink', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('#%s', newLinkTarget);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_109_err){if (!$p['isinstance']($pyjs_dbg_109_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_109_err);}throw $pyjs_dbg_109_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_110_err){if (!$p['isinstance']($pyjs_dbg_110_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_110_err);}throw $pyjs_dbg_110_err;
}})();
			$pyjs['track']['lineno']=240;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_111_err){if (!$p['isinstance']($pyjs_dbg_111_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_111_err);}throw $pyjs_dbg_111_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_112_err){if (!$p['isinstance']($pyjs_dbg_112_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_112_err);}throw $pyjs_dbg_112_err;
}})()['linkEditor']['openLink'](newLinkTarget);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_113_err){if (!$p['isinstance']($pyjs_dbg_113_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_113_err);}throw $pyjs_dbg_113_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=242;
		$method = $pyjs__bind_method2('createLink', function(dialog, value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				dialog = arguments[1];
				value = arguments[2];
			}

			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':242};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=242;
			$pyjs['track']['lineno']=243;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](value);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_114_err){if (!$p['isinstance']($pyjs_dbg_114_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_114_err);}throw $pyjs_dbg_114_err;
}})()) {
				$pyjs['track']['lineno']=244;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_115_err){if (!$p['isinstance']($pyjs_dbg_115_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_115_err);}throw $pyjs_dbg_115_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_116_err){if (!$p['isinstance']($pyjs_dbg_116_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_116_err);}throw $pyjs_dbg_116_err;
}})()['editor']['focus']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_117_err){if (!$p['isinstance']($pyjs_dbg_117_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_117_err);}throw $pyjs_dbg_117_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['dialog'],['value']]);
		$cls_definition['createLink'] = $method;
		$pyjs['track']['lineno']=247;
		$method = $pyjs__bind_method2('isSuitableFor', function(modul, handler, actionName) {

			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':247};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=247;
			$pyjs['track']['lineno']=248;
			$pyjs['track']['lineno']=248;
			var $pyjs__ret = $p['op_eq'](actionName, 'text.link');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['modul'],['handler'],['actionName']]);
		$cls_definition['isSuitableFor'] = $method;
		$pyjs['track']['lineno']=250;
		$method = $pyjs__bind_method2('resetLoadingState', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':250};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=250;
			$pyjs['track']['lineno']=251;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['resetLoadingState'] = $method;
		$pyjs['track']['lineno']=229;
		var $bases = new Array($m['BasicEditorAction']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('TextInsertLinkAction', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=253;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $p['getattr']($m['TextInsertLinkAction'], 'isSuitableFor'), $m['TextInsertLinkAction']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_118_err){if (!$p['isinstance']($pyjs_dbg_118_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_118_err);}throw $pyjs_dbg_118_err;
}})();
	$pyjs['track']['lineno']=256;
	$m['CreateTablePopup'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.wysiwyg';
		$pyjs['track']['lineno']=257;
		$method = $pyjs__bind_method2('__init__', function(targetNode) {
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
				targetNode = arguments[1];
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
				if (typeof targetNode != 'undefined') {
					if (targetNode !== null && typeof targetNode['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = targetNode;
						targetNode = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}
			var l;
			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':257};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=257;
			$pyjs['track']['lineno']=258;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['CreateTablePopup'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_119_err){if (!$p['isinstance']($pyjs_dbg_119_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_119_err);}throw $pyjs_dbg_119_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_120_err){if (!$p['isinstance']($pyjs_dbg_120_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_120_err);}throw $pyjs_dbg_120_err;
}})();
			$pyjs['track']['lineno']=259;
			if (!( targetNode )) {
			   throw $p['AssertionError']();
			 }
			$pyjs['track']['lineno']=261;
			while ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dir'](targetNode);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_121_err){if (!$p['isinstance']($pyjs_dbg_121_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_121_err);}throw $pyjs_dbg_121_err;
}})()['__contains__']('innerHTML')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_122_err){if (!$p['isinstance']($pyjs_dbg_122_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_122_err);}throw $pyjs_dbg_122_err;
}})()) {
				$pyjs['track']['lineno']=262;
				targetNode = $p['getattr'](targetNode, 'parentNode');
			}
			$pyjs['track']['lineno']=264;
			self['targetNode'] = targetNode;
			$pyjs['track']['lineno']=265;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__getitem__']('class')['append']('createtable');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_123_err){if (!$p['isinstance']($pyjs_dbg_123_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_123_err);}throw $pyjs_dbg_123_err;
}})();
			$pyjs['track']['lineno']=266;
			self['rowInput'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Input']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_124_err){if (!$p['isinstance']($pyjs_dbg_124_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_124_err);}throw $pyjs_dbg_124_err;
}})();
			$pyjs['track']['lineno']=267;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'rowInput')['__setitem__']('type', 'number');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_125_err){if (!$p['isinstance']($pyjs_dbg_125_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_125_err);}throw $pyjs_dbg_125_err;
}})();
			$pyjs['track']['lineno']=268;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'rowInput')['__setitem__']('value', 3);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_126_err){if (!$p['isinstance']($pyjs_dbg_126_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_126_err);}throw $pyjs_dbg_126_err;
}})();
			$pyjs['track']['lineno']=269;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'rowInput'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_127_err){if (!$p['isinstance']($pyjs_dbg_127_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_127_err);}throw $pyjs_dbg_127_err;
}})();
			$pyjs['track']['lineno']=270;
			l = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['html5'], 'Label', null, null, [{'forElem':$p['getattr'](self, 'rowInput')}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Rows');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_128_err){if (!$p['isinstance']($pyjs_dbg_128_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_128_err);}throw $pyjs_dbg_128_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_129_err){if (!$p['isinstance']($pyjs_dbg_129_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_129_err);}throw $pyjs_dbg_129_err;
}})();
			$pyjs['track']['lineno']=271;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return l['__getitem__']('class')['append']('rowlbl');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_130_err){if (!$p['isinstance']($pyjs_dbg_130_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_130_err);}throw $pyjs_dbg_130_err;
}})();
			$pyjs['track']['lineno']=272;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild'](l);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_131_err){if (!$p['isinstance']($pyjs_dbg_131_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_131_err);}throw $pyjs_dbg_131_err;
}})();
			$pyjs['track']['lineno']=273;
			self['colInput'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Input']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_132_err){if (!$p['isinstance']($pyjs_dbg_132_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_132_err);}throw $pyjs_dbg_132_err;
}})();
			$pyjs['track']['lineno']=274;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'colInput')['__setitem__']('type', 'number');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_133_err){if (!$p['isinstance']($pyjs_dbg_133_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_133_err);}throw $pyjs_dbg_133_err;
}})();
			$pyjs['track']['lineno']=275;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'colInput')['__setitem__']('value', 4);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_134_err){if (!$p['isinstance']($pyjs_dbg_134_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_134_err);}throw $pyjs_dbg_134_err;
}})();
			$pyjs['track']['lineno']=276;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'colInput'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_135_err){if (!$p['isinstance']($pyjs_dbg_135_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_135_err);}throw $pyjs_dbg_135_err;
}})();
			$pyjs['track']['lineno']=277;
			l = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['html5'], 'Label', null, null, [{'forElem':$p['getattr'](self, 'colInput')}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Cols');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_136_err){if (!$p['isinstance']($pyjs_dbg_136_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_136_err);}throw $pyjs_dbg_136_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_137_err){if (!$p['isinstance']($pyjs_dbg_137_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_137_err);}throw $pyjs_dbg_137_err;
}})();
			$pyjs['track']['lineno']=278;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return l['__getitem__']('class')['append']('collbl');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_138_err){if (!$p['isinstance']($pyjs_dbg_138_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_138_err);}throw $pyjs_dbg_138_err;
}})();
			$pyjs['track']['lineno']=279;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild'](l);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_139_err){if (!$p['isinstance']($pyjs_dbg_139_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_139_err);}throw $pyjs_dbg_139_err;
}})();
			$pyjs['track']['lineno']=280;
			self['insertHeader'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Input']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_140_err){if (!$p['isinstance']($pyjs_dbg_140_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_140_err);}throw $pyjs_dbg_140_err;
}})();
			$pyjs['track']['lineno']=281;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'insertHeader')['__setitem__']('type', 'checkbox');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_141_err){if (!$p['isinstance']($pyjs_dbg_141_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_141_err);}throw $pyjs_dbg_141_err;
}})();
			$pyjs['track']['lineno']=282;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'insertHeader'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_142_err){if (!$p['isinstance']($pyjs_dbg_142_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_142_err);}throw $pyjs_dbg_142_err;
}})();
			$pyjs['track']['lineno']=283;
			l = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['html5'], 'Label', null, null, [{'forElem':$p['getattr'](self, 'insertHeader')}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Insert Table Header');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_143_err){if (!$p['isinstance']($pyjs_dbg_143_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_143_err);}throw $pyjs_dbg_143_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_144_err){if (!$p['isinstance']($pyjs_dbg_144_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_144_err);}throw $pyjs_dbg_144_err;
}})();
			$pyjs['track']['lineno']=284;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return l['__getitem__']('class')['append']('headerlbl');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_145_err){if (!$p['isinstance']($pyjs_dbg_145_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_145_err);}throw $pyjs_dbg_145_err;
}})();
			$pyjs['track']['lineno']=285;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild'](l);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_146_err){if (!$p['isinstance']($pyjs_dbg_146_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_146_err);}throw $pyjs_dbg_146_err;
}})();
			$pyjs['track']['lineno']=286;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['html5']['ext'], 'Button', null, null, [{'callback':$p['getattr'](self, 'doClose')}, 'Cancel']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_147_err){if (!$p['isinstance']($pyjs_dbg_147_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_147_err);}throw $pyjs_dbg_147_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_148_err){if (!$p['isinstance']($pyjs_dbg_148_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_148_err);}throw $pyjs_dbg_148_err;
}})();
			$pyjs['track']['lineno']=287;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['html5']['ext'], 'Button', null, null, [{'callback':$p['getattr'](self, 'createTable')}, 'Create']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_149_err){if (!$p['isinstance']($pyjs_dbg_149_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_149_err);}throw $pyjs_dbg_149_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_150_err){if (!$p['isinstance']($pyjs_dbg_150_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_150_err);}throw $pyjs_dbg_150_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['targetNode']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=289;
		$method = $pyjs__bind_method2('doClose', function() {
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

			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':289};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=289;
			$pyjs['track']['lineno']=290;
			self['targetNode'] = null;
			$pyjs['track']['lineno']=291;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['close']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_151_err){if (!$p['isinstance']($pyjs_dbg_151_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_151_err);}throw $pyjs_dbg_151_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['doClose'] = $method;
		$pyjs['track']['lineno']=293;
		$method = $pyjs__bind_method2('createTable', function() {
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
			var $iter5_nextval,$iter6_type,$iter5_array,cols,$iter5_iter,$iter4_type,$iter5_type,$iter6_iter,$iter4_iter,$iter6_nextval,rows,insertHeader,$pyjs__trackstack_size_2,$iter5_idx,$iter6_idx,$add14,y,$iter6_array,$add17,$add10,$add11,$add12,$add13,$add18,c,$add15,$iter4_nextval,$add16,innerHtml,$iter4_idx,$add3,$add5,$add6,$add7,$add4,$pyjs__trackstack_size_1,$iter4_array,x,$add8,$add9;
			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':293};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=293;
			$pyjs['track']['lineno']=294;
			rows = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['float_int']($p['getattr'](self, 'rowInput')['__getitem__']('value'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_152_err){if (!$p['isinstance']($pyjs_dbg_152_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_152_err);}throw $pyjs_dbg_152_err;
}})();
			$pyjs['track']['lineno']=295;
			cols = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['float_int']($p['getattr'](self, 'colInput')['__getitem__']('value'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_153_err){if (!$p['isinstance']($pyjs_dbg_153_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_153_err);}throw $pyjs_dbg_153_err;
}})();
			$pyjs['track']['lineno']=296;
			insertHeader = $p['getattr'](self, 'insertHeader')['__getitem__']('checked');
			$pyjs['track']['lineno']=297;
			innerHtml = '<table>';
			$pyjs['track']['lineno']=298;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](insertHeader);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_154_err){if (!$p['isinstance']($pyjs_dbg_154_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_154_err);}throw $pyjs_dbg_154_err;
}})()) {
				$pyjs['track']['lineno']=299;
				innerHtml = $p['__op_add']($add3=innerHtml,$add4='<thead>');
				$pyjs['track']['lineno']=300;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter4_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['range'](0, cols);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_155_err){if (!$p['isinstance']($pyjs_dbg_155_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_155_err);}throw $pyjs_dbg_155_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_156_err){if (!$p['isinstance']($pyjs_dbg_156_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_156_err);}throw $pyjs_dbg_156_err;
}})();
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
					c = $iter4_nextval['$nextval'];
					$pyjs['track']['lineno']=301;
					innerHtml = $p['__op_add']($add5=innerHtml,$add6='<th>&nbsp;</th>');
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='widgets.wysiwyg';
				$pyjs['track']['lineno']=302;
				innerHtml = $p['__op_add']($add7=innerHtml,$add8='</thead>');
			}
			$pyjs['track']['lineno']=303;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter5_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['range'](0, rows);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_157_err){if (!$p['isinstance']($pyjs_dbg_157_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_157_err);}throw $pyjs_dbg_157_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_158_err){if (!$p['isinstance']($pyjs_dbg_158_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_158_err);}throw $pyjs_dbg_158_err;
}})();
			$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
			while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
				x = $iter5_nextval['$nextval'];
				$pyjs['track']['lineno']=304;
				innerHtml = $p['__op_add']($add9=innerHtml,$add10='<tr>');
				$pyjs['track']['lineno']=305;
				$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
				$iter6_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['range'](0, cols);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_159_err){if (!$p['isinstance']($pyjs_dbg_159_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_159_err);}throw $pyjs_dbg_159_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_160_err){if (!$p['isinstance']($pyjs_dbg_160_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_160_err);}throw $pyjs_dbg_160_err;
}})();
				$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
				while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
					y = $iter6_nextval['$nextval'];
					$pyjs['track']['lineno']=306;
					innerHtml = $p['__op_add']($add11=innerHtml,$add12=(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['sprintf']('<td>%s - %s</td>', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([x, y]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_161_err){if (!$p['isinstance']($pyjs_dbg_161_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_161_err);}throw $pyjs_dbg_161_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_162_err){if (!$p['isinstance']($pyjs_dbg_162_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_162_err);}throw $pyjs_dbg_162_err;
}})());
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='widgets.wysiwyg';
				$pyjs['track']['lineno']=307;
				innerHtml = $p['__op_add']($add13=innerHtml,$add14='</tr>');
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=308;
			innerHtml = $p['__op_add']($add15=innerHtml,$add16='</table>');
			$pyjs['track']['lineno']=309;
			$p['getattr'](self, 'targetNode')['innerHTML'] = $p['__op_add']($add17=$p['getattr']($p['getattr'](self, 'targetNode'), 'innerHTML'),$add18=innerHtml);
			$pyjs['track']['lineno']=310;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['doClose']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_163_err){if (!$p['isinstance']($pyjs_dbg_163_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_163_err);}throw $pyjs_dbg_163_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['createTable'] = $method;
		$pyjs['track']['lineno']=256;
		var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Popup'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('CreateTablePopup', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=312;
	$m['TextInsertTableAction'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.wysiwyg';
		$pyjs['track']['lineno']=313;
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

			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':313};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=313;
			$pyjs['track']['lineno']=314;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['TextInsertTableAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_164_err){if (!$p['isinstance']($pyjs_dbg_164_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_164_err);}throw $pyjs_dbg_164_err;
}})(), '__init__', args, kwargs, [{}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Insert Table');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_165_err){if (!$p['isinstance']($pyjs_dbg_165_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_165_err);}throw $pyjs_dbg_165_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_166_err){if (!$p['isinstance']($pyjs_dbg_166_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_166_err);}throw $pyjs_dbg_166_err;
}})();
			$pyjs['track']['lineno']=315;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('class', 'icon text table');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_167_err){if (!$p['isinstance']($pyjs_dbg_167_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_167_err);}throw $pyjs_dbg_167_err;
}})();
			$pyjs['track']['lineno']=316;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('title', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Insert Table');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_168_err){if (!$p['isinstance']($pyjs_dbg_168_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_168_err);}throw $pyjs_dbg_168_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_169_err){if (!$p['isinstance']($pyjs_dbg_169_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_169_err);}throw $pyjs_dbg_169_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=318;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
			var node;
			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':318};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=318;
			$pyjs['track']['lineno']=319;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_170_err){if (!$p['isinstance']($pyjs_dbg_170_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_170_err);}throw $pyjs_dbg_170_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_171_err){if (!$p['isinstance']($pyjs_dbg_171_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_171_err);}throw $pyjs_dbg_171_err;
}})()['editor']['focus']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_172_err){if (!$p['isinstance']($pyjs_dbg_172_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_172_err);}throw $pyjs_dbg_172_err;
}})();
			$pyjs['track']['lineno']=320;
			node = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (typeof eval == "undefined"?$m['eval']:eval)('window.top.getSelection().anchorNode');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_173_err){if (!$p['isinstance']($pyjs_dbg_173_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_173_err);}throw $pyjs_dbg_173_err;
}})();
			$pyjs['track']['lineno']=322;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](node);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_174_err){if (!$p['isinstance']($pyjs_dbg_174_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_174_err);}throw $pyjs_dbg_174_err;
}})()) {
				$pyjs['track']['lineno']=323;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['CreateTablePopup'](node);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_175_err){if (!$p['isinstance']($pyjs_dbg_175_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_175_err);}throw $pyjs_dbg_175_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=326;
		$method = $pyjs__bind_method2('isSuitableFor', function(modul, handler, actionName) {

			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':326};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=326;
			$pyjs['track']['lineno']=327;
			$pyjs['track']['lineno']=327;
			var $pyjs__ret = $p['op_eq'](actionName, 'text.table');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['modul'],['handler'],['actionName']]);
		$cls_definition['isSuitableFor'] = $method;
		$pyjs['track']['lineno']=329;
		$method = $pyjs__bind_method2('resetLoadingState', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':329};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=329;
			$pyjs['track']['lineno']=330;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['resetLoadingState'] = $method;
		$pyjs['track']['lineno']=312;
		var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Button'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('TextInsertTableAction', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=332;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $p['getattr']($m['TextInsertTableAction'], 'isSuitableFor'), $m['TextInsertTableAction']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_176_err){if (!$p['isinstance']($pyjs_dbg_176_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_176_err);}throw $pyjs_dbg_176_err;
}})();
	$pyjs['track']['lineno']=334;
	$m['TableInsertRowBeforeAction'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.wysiwyg';
		$pyjs['track']['lineno']=335;
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

			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':335};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=335;
			$pyjs['track']['lineno']=336;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['TableInsertRowBeforeAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_177_err){if (!$p['isinstance']($pyjs_dbg_177_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_177_err);}throw $pyjs_dbg_177_err;
}})(), '__init__', args, kwargs, [{}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Insert Table Row before');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_178_err){if (!$p['isinstance']($pyjs_dbg_178_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_178_err);}throw $pyjs_dbg_178_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_179_err){if (!$p['isinstance']($pyjs_dbg_179_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_179_err);}throw $pyjs_dbg_179_err;
}})();
			$pyjs['track']['lineno']=337;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('class', 'icon text table newrow before');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_180_err){if (!$p['isinstance']($pyjs_dbg_180_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_180_err);}throw $pyjs_dbg_180_err;
}})();
			$pyjs['track']['lineno']=338;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('title', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Insert Table Row before');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_181_err){if (!$p['isinstance']($pyjs_dbg_181_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_181_err);}throw $pyjs_dbg_181_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_182_err){if (!$p['isinstance']($pyjs_dbg_182_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_182_err);}throw $pyjs_dbg_182_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=340;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
			var node,$and8,c,$iter7_nextval,i,$iter7_iter,$iter7_array,tr,$and6,$and7,$iter7_idx,$sub3,td,$iter7_type,$pyjs__trackstack_size_1,$sub4;
			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':340};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=340;
			$pyjs['track']['lineno']=341;
			node = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (typeof eval == "undefined"?$m['eval']:eval)('window.top.getSelection().anchorNode');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_183_err){if (!$p['isinstance']($pyjs_dbg_183_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_183_err);}throw $pyjs_dbg_183_err;
}})();
			$pyjs['track']['lineno']=342;
			i = 10;
			$pyjs['track']['lineno']=343;
			while ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and6=($p['cmp'](i, 0) == 1))?($p['bool']($and7=node)?!$p['op_eq'](node, $p['getattr']($p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_184_err){if (!$p['isinstance']($pyjs_dbg_184_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_184_err);}throw $pyjs_dbg_184_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_185_err){if (!$p['isinstance']($pyjs_dbg_185_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_185_err);}throw $pyjs_dbg_185_err;
}})(), 'editor'), 'element')):$and7):$and6));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_186_err){if (!$p['isinstance']($pyjs_dbg_186_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_186_err);}throw $pyjs_dbg_186_err;
}})()) {
				$pyjs['track']['lineno']=344;
				i = $p['__op_sub']($sub3=i,$sub4=1);
				$pyjs['track']['lineno']=345;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dir'](node);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_187_err){if (!$p['isinstance']($pyjs_dbg_187_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_187_err);}throw $pyjs_dbg_187_err;
}})()['__contains__']('tagName')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_188_err){if (!$p['isinstance']($pyjs_dbg_188_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_188_err);}throw $pyjs_dbg_188_err;
}})()) {
					$pyjs['track']['lineno']=346;
					node = $p['getattr'](node, 'parentNode');
					$pyjs['track']['lineno']=347;
					continue;
				}
				$pyjs['track']['lineno']=348;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq']($p['getattr'](node, 'tagName'), 'TR'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_189_err){if (!$p['isinstance']($pyjs_dbg_189_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_189_err);}throw $pyjs_dbg_189_err;
}})()) {
					$pyjs['track']['lineno']=349;
					tr = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['html5']['document']['createElement']('tr');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_190_err){if (!$p['isinstance']($pyjs_dbg_190_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_190_err);}throw $pyjs_dbg_190_err;
}})();
					$pyjs['track']['lineno']=350;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter7_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['range'](0, $p['getattr']($p['getattr'](node, 'children'), 'length'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_191_err){if (!$p['isinstance']($pyjs_dbg_191_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_191_err);}throw $pyjs_dbg_191_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_192_err){if (!$p['isinstance']($pyjs_dbg_192_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_192_err);}throw $pyjs_dbg_192_err;
}})();
					$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
					while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
						c = $iter7_nextval['$nextval'];
						$pyjs['track']['lineno']=351;
						td = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['html5']['document']['createElement']('td');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_193_err){if (!$p['isinstance']($pyjs_dbg_193_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_193_err);}throw $pyjs_dbg_193_err;
}})();
						$pyjs['track']['lineno']=352;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return tr['appendChild'](td);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_194_err){if (!$p['isinstance']($pyjs_dbg_194_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_194_err);}throw $pyjs_dbg_194_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='widgets.wysiwyg';
					$pyjs['track']['lineno']=353;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return node['parentNode']['insertBefore'](tr, node);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_195_err){if (!$p['isinstance']($pyjs_dbg_195_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_195_err);}throw $pyjs_dbg_195_err;
}})();
					$pyjs['track']['lineno']=354;
					$pyjs['track']['lineno']=354;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=355;
				node = $p['getattr'](node, 'parentNode');
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=358;
		$method = $pyjs__bind_method2('isSuitableFor', function(modul, handler, actionName) {

			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':358};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=358;
			$pyjs['track']['lineno']=359;
			$pyjs['track']['lineno']=359;
			var $pyjs__ret = $p['op_eq'](actionName, 'text.table.newrow.before');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['modul'],['handler'],['actionName']]);
		$cls_definition['isSuitableFor'] = $method;
		$pyjs['track']['lineno']=361;
		$method = $pyjs__bind_method2('resetLoadingState', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':361};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=361;
			$pyjs['track']['lineno']=362;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['resetLoadingState'] = $method;
		$pyjs['track']['lineno']=334;
		var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Button'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('TableInsertRowBeforeAction', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=364;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $p['getattr']($m['TableInsertRowBeforeAction'], 'isSuitableFor'), $m['TableInsertRowBeforeAction']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_196_err){if (!$p['isinstance']($pyjs_dbg_196_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_196_err);}throw $pyjs_dbg_196_err;
}})();
	$pyjs['track']['lineno']=366;
	$m['TableInsertRowAfterAction'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.wysiwyg';
		$pyjs['track']['lineno']=367;
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

			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':367};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=367;
			$pyjs['track']['lineno']=368;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['TableInsertRowAfterAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_197_err){if (!$p['isinstance']($pyjs_dbg_197_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_197_err);}throw $pyjs_dbg_197_err;
}})(), '__init__', args, kwargs, [{}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Insert Table Row after');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_198_err){if (!$p['isinstance']($pyjs_dbg_198_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_198_err);}throw $pyjs_dbg_198_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_199_err){if (!$p['isinstance']($pyjs_dbg_199_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_199_err);}throw $pyjs_dbg_199_err;
}})();
			$pyjs['track']['lineno']=369;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('class', 'icon text table newrow after');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_200_err){if (!$p['isinstance']($pyjs_dbg_200_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_200_err);}throw $pyjs_dbg_200_err;
}})();
			$pyjs['track']['lineno']=370;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('title', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Insert Table Row after');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_201_err){if (!$p['isinstance']($pyjs_dbg_201_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_201_err);}throw $pyjs_dbg_201_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_202_err){if (!$p['isinstance']($pyjs_dbg_202_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_202_err);}throw $pyjs_dbg_202_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=372;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
			var node,$and9,c,$iter8_idx,i,$iter8_array,tr,$iter8_iter,$and10,$and11,$iter8_nextval,$pyjs__trackstack_size_1,$iter8_type,td,$sub6,$sub5;
			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':372};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=372;
			$pyjs['track']['lineno']=373;
			node = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (typeof eval == "undefined"?$m['eval']:eval)('window.top.getSelection().anchorNode');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_203_err){if (!$p['isinstance']($pyjs_dbg_203_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_203_err);}throw $pyjs_dbg_203_err;
}})();
			$pyjs['track']['lineno']=374;
			i = 10;
			$pyjs['track']['lineno']=375;
			while ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and9=($p['cmp'](i, 0) == 1))?($p['bool']($and10=node)?!$p['op_eq'](node, $p['getattr']($p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_204_err){if (!$p['isinstance']($pyjs_dbg_204_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_204_err);}throw $pyjs_dbg_204_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_205_err){if (!$p['isinstance']($pyjs_dbg_205_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_205_err);}throw $pyjs_dbg_205_err;
}})(), 'editor'), 'element')):$and10):$and9));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_206_err){if (!$p['isinstance']($pyjs_dbg_206_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_206_err);}throw $pyjs_dbg_206_err;
}})()) {
				$pyjs['track']['lineno']=376;
				i = $p['__op_sub']($sub5=i,$sub6=1);
				$pyjs['track']['lineno']=377;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dir'](node);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_207_err){if (!$p['isinstance']($pyjs_dbg_207_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_207_err);}throw $pyjs_dbg_207_err;
}})()['__contains__']('tagName')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_208_err){if (!$p['isinstance']($pyjs_dbg_208_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_208_err);}throw $pyjs_dbg_208_err;
}})()) {
					$pyjs['track']['lineno']=378;
					node = $p['getattr'](node, 'parentNode');
					$pyjs['track']['lineno']=379;
					continue;
				}
				$pyjs['track']['lineno']=380;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq']($p['getattr'](node, 'tagName'), 'TR'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_209_err){if (!$p['isinstance']($pyjs_dbg_209_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_209_err);}throw $pyjs_dbg_209_err;
}})()) {
					$pyjs['track']['lineno']=381;
					tr = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['html5']['document']['createElement']('tr');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_210_err){if (!$p['isinstance']($pyjs_dbg_210_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_210_err);}throw $pyjs_dbg_210_err;
}})();
					$pyjs['track']['lineno']=382;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter8_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['range'](0, $p['getattr']($p['getattr'](node, 'children'), 'length'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_211_err){if (!$p['isinstance']($pyjs_dbg_211_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_211_err);}throw $pyjs_dbg_211_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_212_err){if (!$p['isinstance']($pyjs_dbg_212_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_212_err);}throw $pyjs_dbg_212_err;
}})();
					$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
					while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
						c = $iter8_nextval['$nextval'];
						$pyjs['track']['lineno']=383;
						td = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['html5']['document']['createElement']('td');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_213_err){if (!$p['isinstance']($pyjs_dbg_213_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_213_err);}throw $pyjs_dbg_213_err;
}})();
						$pyjs['track']['lineno']=384;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return tr['appendChild'](td);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_214_err){if (!$p['isinstance']($pyjs_dbg_214_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_214_err);}throw $pyjs_dbg_214_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='widgets.wysiwyg';
					$pyjs['track']['lineno']=385;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['getattr'](node, 'nextSibling'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_215_err){if (!$p['isinstance']($pyjs_dbg_215_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_215_err);}throw $pyjs_dbg_215_err;
}})()) {
						$pyjs['track']['lineno']=386;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return node['parentNode']['insertBefore'](tr, $p['getattr'](node, 'nextSibling'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_216_err){if (!$p['isinstance']($pyjs_dbg_216_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_216_err);}throw $pyjs_dbg_216_err;
}})();
					}
					else {
						$pyjs['track']['lineno']=388;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return node['parentNode']['appendChild'](tr);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_217_err){if (!$p['isinstance']($pyjs_dbg_217_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_217_err);}throw $pyjs_dbg_217_err;
}})();
					}
					$pyjs['track']['lineno']=389;
					$pyjs['track']['lineno']=389;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=390;
				node = $p['getattr'](node, 'parentNode');
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=393;
		$method = $pyjs__bind_method2('isSuitableFor', function(modul, handler, actionName) {

			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':393};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=393;
			$pyjs['track']['lineno']=394;
			$pyjs['track']['lineno']=394;
			var $pyjs__ret = $p['op_eq'](actionName, 'text.table.newrow.after');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['modul'],['handler'],['actionName']]);
		$cls_definition['isSuitableFor'] = $method;
		$pyjs['track']['lineno']=396;
		$method = $pyjs__bind_method2('resetLoadingState', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':396};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=396;
			$pyjs['track']['lineno']=397;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['resetLoadingState'] = $method;
		$pyjs['track']['lineno']=366;
		var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Button'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('TableInsertRowAfterAction', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=399;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $p['getattr']($m['TableInsertRowAfterAction'], 'isSuitableFor'), $m['TableInsertRowAfterAction']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_218_err){if (!$p['isinstance']($pyjs_dbg_218_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_218_err);}throw $pyjs_dbg_218_err;
}})();
	$pyjs['track']['lineno']=401;
	$m['TableInsertColBeforeAction'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.wysiwyg';
		$pyjs['track']['lineno']=402;
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

			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':402};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=402;
			$pyjs['track']['lineno']=403;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['TableInsertColBeforeAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_219_err){if (!$p['isinstance']($pyjs_dbg_219_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_219_err);}throw $pyjs_dbg_219_err;
}})(), '__init__', args, kwargs, [{}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Insert Table Col before');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_220_err){if (!$p['isinstance']($pyjs_dbg_220_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_220_err);}throw $pyjs_dbg_220_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_221_err){if (!$p['isinstance']($pyjs_dbg_221_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_221_err);}throw $pyjs_dbg_221_err;
}})();
			$pyjs['track']['lineno']=404;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('class', 'icon text table newcol before');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_222_err){if (!$p['isinstance']($pyjs_dbg_222_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_222_err);}throw $pyjs_dbg_222_err;
}})();
			$pyjs['track']['lineno']=405;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('title', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Insert Table Col before');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_223_err){if (!$p['isinstance']($pyjs_dbg_223_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_223_err);}throw $pyjs_dbg_223_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_224_err){if (!$p['isinstance']($pyjs_dbg_224_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_224_err);}throw $pyjs_dbg_224_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=407;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
			var $iter10_nextval,tr,trChild,newTd,table,$iter10_iter,trChildIdx,$iter9_iter,$add20,$iter9_nextval,$iter9_idx,cellIdx,$sub8,td,$iter11_idx,$sub7,$iter9_type,node,$iter11_iter,$iter11_array,$iter10_idx,$iter12_array,$and12,$and13,$and16,$and17,$and14,$and15,$iter11_nextval,$add19,child,i,$iter12_type,$iter11_type,$iter10_array,$iter12_nextval,$iter12_iter,$pyjs__trackstack_size_2,$pyjs__trackstack_size_1,$iter10_type,x,childIdx,$iter12_idx,$iter9_array;
			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':407};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=407;
			$pyjs['track']['lineno']=408;
			node = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (typeof eval == "undefined"?$m['eval']:eval)('window.top.getSelection().anchorNode');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_225_err){if (!$p['isinstance']($pyjs_dbg_225_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_225_err);}throw $pyjs_dbg_225_err;
}})();
			$pyjs['track']['lineno']=409;
			td = null;
			$pyjs['track']['lineno']=410;
			tr = null;
			$pyjs['track']['lineno']=411;
			table = null;
			$pyjs['track']['lineno']=412;
			i = 10;
			$pyjs['track']['lineno']=414;
			while ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and12=($p['cmp'](i, 0) == 1))?($p['bool']($and13=node)?!$p['op_eq'](node, $p['getattr']($p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_226_err){if (!$p['isinstance']($pyjs_dbg_226_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_226_err);}throw $pyjs_dbg_226_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_227_err){if (!$p['isinstance']($pyjs_dbg_227_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_227_err);}throw $pyjs_dbg_227_err;
}})(), 'editor'), 'element')):$and13):$and12));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_228_err){if (!$p['isinstance']($pyjs_dbg_228_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_228_err);}throw $pyjs_dbg_228_err;
}})()) {
				$pyjs['track']['lineno']=415;
				i = $p['__op_sub']($sub7=i,$sub8=1);
				$pyjs['track']['lineno']=416;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dir'](node);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_229_err){if (!$p['isinstance']($pyjs_dbg_229_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_229_err);}throw $pyjs_dbg_229_err;
}})()['__contains__']('tagName')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_230_err){if (!$p['isinstance']($pyjs_dbg_230_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_230_err);}throw $pyjs_dbg_230_err;
}})()) {
					$pyjs['track']['lineno']=417;
					node = $p['getattr'](node, 'parentNode');
					$pyjs['track']['lineno']=418;
					continue;
				}
				$pyjs['track']['lineno']=419;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq']($p['getattr'](node, 'tagName'), 'TD'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_231_err){if (!$p['isinstance']($pyjs_dbg_231_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_231_err);}throw $pyjs_dbg_231_err;
}})()) {
					$pyjs['track']['lineno']=420;
					td = node;
				}
				else if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq']($p['getattr'](node, 'tagName'), 'TR'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_232_err){if (!$p['isinstance']($pyjs_dbg_232_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_232_err);}throw $pyjs_dbg_232_err;
}})()) {
					$pyjs['track']['lineno']=422;
					tr = node;
				}
				else if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq']($p['getattr'](node, 'tagName'), 'TABLE'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_233_err){if (!$p['isinstance']($pyjs_dbg_233_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_233_err);}throw $pyjs_dbg_233_err;
}})()) {
					$pyjs['track']['lineno']=424;
					table = node;
					$pyjs['track']['lineno']=425;
					break;
				}
				$pyjs['track']['lineno']=426;
				node = $p['getattr'](node, 'parentNode');
			}
			$pyjs['track']['lineno']=427;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and15=td)?($p['bool']($and16=tr)?table:$and16):$and15));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_234_err){if (!$p['isinstance']($pyjs_dbg_234_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_234_err);}throw $pyjs_dbg_234_err;
}})()) {
				$pyjs['track']['lineno']=428;
				cellIdx = 0;
				$pyjs['track']['lineno']=429;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter9_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['range'](0, $p['getattr']($p['getattr'](tr, 'children'), 'length'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_235_err){if (!$p['isinstance']($pyjs_dbg_235_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_235_err);}throw $pyjs_dbg_235_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_236_err){if (!$p['isinstance']($pyjs_dbg_236_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_236_err);}throw $pyjs_dbg_236_err;
}})();
				$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
				while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
					x = $iter9_nextval['$nextval'];
					$pyjs['track']['lineno']=430;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_eq'](td, (function(){try{try{$pyjs['in_try_except'] += 1;
					return tr['children']['item'](x);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_237_err){if (!$p['isinstance']($pyjs_dbg_237_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_237_err);}throw $pyjs_dbg_237_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_238_err){if (!$p['isinstance']($pyjs_dbg_238_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_238_err);}throw $pyjs_dbg_238_err;
}})()) {
						$pyjs['track']['lineno']=431;
						break;
					}
					$pyjs['track']['lineno']=432;
					cellIdx = $p['__op_add']($add19=cellIdx,$add20=1);
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='widgets.wysiwyg';
				$pyjs['track']['lineno']=433;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter10_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['range'](0, $p['getattr']($p['getattr'](table, 'children'), 'length'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_239_err){if (!$p['isinstance']($pyjs_dbg_239_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_239_err);}throw $pyjs_dbg_239_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_240_err){if (!$p['isinstance']($pyjs_dbg_240_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_240_err);}throw $pyjs_dbg_240_err;
}})();
				$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
				while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
					trChildIdx = $iter10_nextval['$nextval'];
					$pyjs['track']['lineno']=434;
					trChild = (function(){try{try{$pyjs['in_try_except'] += 1;
					return table['children']['item'](trChildIdx);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_241_err){if (!$p['isinstance']($pyjs_dbg_241_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_241_err);}throw $pyjs_dbg_241_err;
}})();
					$pyjs['track']['lineno']=435;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['dir'](trChild);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_242_err){if (!$p['isinstance']($pyjs_dbg_242_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_242_err);}throw $pyjs_dbg_242_err;
}})()['__contains__']('tagName')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_243_err){if (!$p['isinstance']($pyjs_dbg_243_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_243_err);}throw $pyjs_dbg_243_err;
}})()) {
						$pyjs['track']['lineno']=436;
						continue;
					}
					$pyjs['track']['lineno']=437;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_eq']($p['getattr'](trChild, 'tagName'), 'THEAD'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_244_err){if (!$p['isinstance']($pyjs_dbg_244_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_244_err);}throw $pyjs_dbg_244_err;
}})()) {
						$pyjs['track']['lineno']=439;
						$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
						$iter11_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['range'](0, $p['getattr']($p['getattr'](trChild, 'children'), 'length'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_245_err){if (!$p['isinstance']($pyjs_dbg_245_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_245_err);}throw $pyjs_dbg_245_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_246_err){if (!$p['isinstance']($pyjs_dbg_246_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_246_err);}throw $pyjs_dbg_246_err;
}})();
						$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
						while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
							childIdx = $iter11_nextval['$nextval'];
							$pyjs['track']['lineno']=440;
							child = (function(){try{try{$pyjs['in_try_except'] += 1;
							return trChild['children']['item'](childIdx);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_247_err){if (!$p['isinstance']($pyjs_dbg_247_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_247_err);}throw $pyjs_dbg_247_err;
}})();
							$pyjs['track']['lineno']=441;
							if ((function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['dir'](child);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_248_err){if (!$p['isinstance']($pyjs_dbg_248_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_248_err);}throw $pyjs_dbg_248_err;
}})()['__contains__']('tagName')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_249_err){if (!$p['isinstance']($pyjs_dbg_249_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_249_err);}throw $pyjs_dbg_249_err;
}})()) {
								$pyjs['track']['lineno']=442;
								continue;
							}
							$pyjs['track']['lineno']=443;
							if ((function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['bool']($p['op_eq']($p['getattr'](child, 'tagName'), 'TR'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_250_err){if (!$p['isinstance']($pyjs_dbg_250_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_250_err);}throw $pyjs_dbg_250_err;
}})()) {
								$pyjs['track']['lineno']=444;
								newTd = (function(){try{try{$pyjs['in_try_except'] += 1;
								return $m['html5']['document']['createElement']('th');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_251_err){if (!$p['isinstance']($pyjs_dbg_251_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_251_err);}throw $pyjs_dbg_251_err;
}})();
								$pyjs['track']['lineno']=445;
								(function(){try{try{$pyjs['in_try_except'] += 1;
								return child['insertBefore'](newTd, (function(){try{try{$pyjs['in_try_except'] += 1;
								return child['children']['item'](cellIdx);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_252_err){if (!$p['isinstance']($pyjs_dbg_252_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_252_err);}throw $pyjs_dbg_252_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_253_err){if (!$p['isinstance']($pyjs_dbg_253_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_253_err);}throw $pyjs_dbg_253_err;
}})();
							}
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='widgets.wysiwyg';
					}
					else if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_eq']($p['getattr'](trChild, 'tagName'), 'TBODY'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_254_err){if (!$p['isinstance']($pyjs_dbg_254_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_254_err);}throw $pyjs_dbg_254_err;
}})()) {
						$pyjs['track']['lineno']=448;
						$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
						$iter12_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['range'](0, $p['getattr']($p['getattr'](trChild, 'children'), 'length'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_255_err){if (!$p['isinstance']($pyjs_dbg_255_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_255_err);}throw $pyjs_dbg_255_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_256_err){if (!$p['isinstance']($pyjs_dbg_256_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_256_err);}throw $pyjs_dbg_256_err;
}})();
						$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
						while (typeof($p['__wrapped_next']($iter12_nextval)['$nextval']) != 'undefined') {
							childIdx = $iter12_nextval['$nextval'];
							$pyjs['track']['lineno']=449;
							child = (function(){try{try{$pyjs['in_try_except'] += 1;
							return trChild['children']['item'](childIdx);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_257_err){if (!$p['isinstance']($pyjs_dbg_257_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_257_err);}throw $pyjs_dbg_257_err;
}})();
							$pyjs['track']['lineno']=450;
							if ((function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['dir'](child);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_258_err){if (!$p['isinstance']($pyjs_dbg_258_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_258_err);}throw $pyjs_dbg_258_err;
}})()['__contains__']('tagName')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_259_err){if (!$p['isinstance']($pyjs_dbg_259_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_259_err);}throw $pyjs_dbg_259_err;
}})()) {
								$pyjs['track']['lineno']=451;
								continue;
							}
							$pyjs['track']['lineno']=452;
							if ((function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['bool']($p['op_eq']($p['getattr'](child, 'tagName'), 'TR'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_260_err){if (!$p['isinstance']($pyjs_dbg_260_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_260_err);}throw $pyjs_dbg_260_err;
}})()) {
								$pyjs['track']['lineno']=453;
								newTd = (function(){try{try{$pyjs['in_try_except'] += 1;
								return $m['html5']['document']['createElement']('td');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_261_err){if (!$p['isinstance']($pyjs_dbg_261_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_261_err);}throw $pyjs_dbg_261_err;
}})();
								$pyjs['track']['lineno']=454;
								(function(){try{try{$pyjs['in_try_except'] += 1;
								return child['insertBefore'](newTd, (function(){try{try{$pyjs['in_try_except'] += 1;
								return child['children']['item'](cellIdx);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_262_err){if (!$p['isinstance']($pyjs_dbg_262_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_262_err);}throw $pyjs_dbg_262_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_263_err){if (!$p['isinstance']($pyjs_dbg_263_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_263_err);}throw $pyjs_dbg_263_err;
}})();
							}
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='widgets.wysiwyg';
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='widgets.wysiwyg';
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=457;
		$method = $pyjs__bind_method2('isSuitableFor', function(modul, handler, actionName) {

			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':457};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=457;
			$pyjs['track']['lineno']=458;
			$pyjs['track']['lineno']=458;
			var $pyjs__ret = $p['op_eq'](actionName, 'text.table.newcol.before');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['modul'],['handler'],['actionName']]);
		$cls_definition['isSuitableFor'] = $method;
		$pyjs['track']['lineno']=460;
		$method = $pyjs__bind_method2('resetLoadingState', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':460};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=460;
			$pyjs['track']['lineno']=461;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['resetLoadingState'] = $method;
		$pyjs['track']['lineno']=401;
		var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Button'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('TableInsertColBeforeAction', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=464;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $p['getattr']($m['TableInsertColBeforeAction'], 'isSuitableFor'), $m['TableInsertColBeforeAction']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_264_err){if (!$p['isinstance']($pyjs_dbg_264_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_264_err);}throw $pyjs_dbg_264_err;
}})();
	$pyjs['track']['lineno']=466;
	$m['TableInsertColAfterAction'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.wysiwyg';
		$pyjs['track']['lineno']=467;
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

			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':467};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=467;
			$pyjs['track']['lineno']=468;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['TableInsertColAfterAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_265_err){if (!$p['isinstance']($pyjs_dbg_265_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_265_err);}throw $pyjs_dbg_265_err;
}})(), '__init__', args, kwargs, [{}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Insert Table Col after');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_266_err){if (!$p['isinstance']($pyjs_dbg_266_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_266_err);}throw $pyjs_dbg_266_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_267_err){if (!$p['isinstance']($pyjs_dbg_267_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_267_err);}throw $pyjs_dbg_267_err;
}})();
			$pyjs['track']['lineno']=469;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('class', 'icon text table newcol after');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_268_err){if (!$p['isinstance']($pyjs_dbg_268_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_268_err);}throw $pyjs_dbg_268_err;
}})();
			$pyjs['track']['lineno']=470;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('title', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Insert Table Col after');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_269_err){if (!$p['isinstance']($pyjs_dbg_269_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_269_err);}throw $pyjs_dbg_269_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_270_err){if (!$p['isinstance']($pyjs_dbg_270_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_270_err);}throw $pyjs_dbg_270_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=472;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
			var $add25,child,newTd,$iter16_idx,$iter13_idx,table,$and23,$and22,$and21,$and20,$iter16_iter,trChildIdx,$add29,$add28,$iter15_type,$iter15_iter,$iter16_type,$add21,$add22,tr,$add24,cellIdx,$add26,$sub9,$iter16_nextval,td,$iter13_type,node,$iter14_array,$iter15_array,$iter14_type,$sub10,$iter14_iter,trChild,$and18,$and19,$iter14_idx,$iter14_nextval,$iter16_array,$iter13_nextval,$iter13_iter,i,$add30,$iter15_idx,$add27,$iter13_array,$pyjs__trackstack_size_2,$iter15_nextval,$pyjs__trackstack_size_1,x,childIdx,$add23;
			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':472};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=472;
			$pyjs['track']['lineno']=473;
			node = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (typeof eval == "undefined"?$m['eval']:eval)('window.top.getSelection().anchorNode');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_271_err){if (!$p['isinstance']($pyjs_dbg_271_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_271_err);}throw $pyjs_dbg_271_err;
}})();
			$pyjs['track']['lineno']=474;
			td = null;
			$pyjs['track']['lineno']=475;
			tr = null;
			$pyjs['track']['lineno']=476;
			table = null;
			$pyjs['track']['lineno']=477;
			i = 10;
			$pyjs['track']['lineno']=479;
			while ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and18=($p['cmp'](i, 0) == 1))?($p['bool']($and19=node)?!$p['op_eq'](node, $p['getattr']($p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_272_err){if (!$p['isinstance']($pyjs_dbg_272_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_272_err);}throw $pyjs_dbg_272_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_273_err){if (!$p['isinstance']($pyjs_dbg_273_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_273_err);}throw $pyjs_dbg_273_err;
}})(), 'editor'), 'element')):$and19):$and18));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_274_err){if (!$p['isinstance']($pyjs_dbg_274_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_274_err);}throw $pyjs_dbg_274_err;
}})()) {
				$pyjs['track']['lineno']=480;
				i = $p['__op_sub']($sub9=i,$sub10=1);
				$pyjs['track']['lineno']=481;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dir'](node);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_275_err){if (!$p['isinstance']($pyjs_dbg_275_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_275_err);}throw $pyjs_dbg_275_err;
}})()['__contains__']('tagName')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_276_err){if (!$p['isinstance']($pyjs_dbg_276_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_276_err);}throw $pyjs_dbg_276_err;
}})()) {
					$pyjs['track']['lineno']=482;
					node = $p['getattr'](node, 'parentNode');
					$pyjs['track']['lineno']=483;
					continue;
				}
				$pyjs['track']['lineno']=484;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq']($p['getattr'](node, 'tagName'), 'TD'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_277_err){if (!$p['isinstance']($pyjs_dbg_277_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_277_err);}throw $pyjs_dbg_277_err;
}})()) {
					$pyjs['track']['lineno']=485;
					td = node;
				}
				else if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq']($p['getattr'](node, 'tagName'), 'TR'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_278_err){if (!$p['isinstance']($pyjs_dbg_278_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_278_err);}throw $pyjs_dbg_278_err;
}})()) {
					$pyjs['track']['lineno']=487;
					tr = node;
				}
				else if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq']($p['getattr'](node, 'tagName'), 'TABLE'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_279_err){if (!$p['isinstance']($pyjs_dbg_279_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_279_err);}throw $pyjs_dbg_279_err;
}})()) {
					$pyjs['track']['lineno']=489;
					table = node;
					$pyjs['track']['lineno']=490;
					break;
				}
				$pyjs['track']['lineno']=491;
				node = $p['getattr'](node, 'parentNode');
			}
			$pyjs['track']['lineno']=492;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and21=td)?($p['bool']($and22=tr)?table:$and22):$and21));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_280_err){if (!$p['isinstance']($pyjs_dbg_280_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_280_err);}throw $pyjs_dbg_280_err;
}})()) {
				$pyjs['track']['lineno']=493;
				cellIdx = 0;
				$pyjs['track']['lineno']=494;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter13_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['range'](0, $p['getattr']($p['getattr'](tr, 'children'), 'length'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_281_err){if (!$p['isinstance']($pyjs_dbg_281_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_281_err);}throw $pyjs_dbg_281_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_282_err){if (!$p['isinstance']($pyjs_dbg_282_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_282_err);}throw $pyjs_dbg_282_err;
}})();
				$iter13_nextval=$p['__iter_prepare']($iter13_iter,false);
				while (typeof($p['__wrapped_next']($iter13_nextval)['$nextval']) != 'undefined') {
					x = $iter13_nextval['$nextval'];
					$pyjs['track']['lineno']=495;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_eq'](td, (function(){try{try{$pyjs['in_try_except'] += 1;
					return tr['children']['item'](x);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_283_err){if (!$p['isinstance']($pyjs_dbg_283_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_283_err);}throw $pyjs_dbg_283_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_284_err){if (!$p['isinstance']($pyjs_dbg_284_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_284_err);}throw $pyjs_dbg_284_err;
}})()) {
						$pyjs['track']['lineno']=496;
						break;
					}
					$pyjs['track']['lineno']=497;
					cellIdx = $p['__op_add']($add21=cellIdx,$add22=1);
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='widgets.wysiwyg';
				$pyjs['track']['lineno']=498;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter14_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['range'](0, $p['getattr']($p['getattr'](table, 'children'), 'length'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_285_err){if (!$p['isinstance']($pyjs_dbg_285_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_285_err);}throw $pyjs_dbg_285_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_286_err){if (!$p['isinstance']($pyjs_dbg_286_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_286_err);}throw $pyjs_dbg_286_err;
}})();
				$iter14_nextval=$p['__iter_prepare']($iter14_iter,false);
				while (typeof($p['__wrapped_next']($iter14_nextval)['$nextval']) != 'undefined') {
					trChildIdx = $iter14_nextval['$nextval'];
					$pyjs['track']['lineno']=499;
					trChild = (function(){try{try{$pyjs['in_try_except'] += 1;
					return table['children']['item'](trChildIdx);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_287_err){if (!$p['isinstance']($pyjs_dbg_287_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_287_err);}throw $pyjs_dbg_287_err;
}})();
					$pyjs['track']['lineno']=500;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['dir'](trChild);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_288_err){if (!$p['isinstance']($pyjs_dbg_288_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_288_err);}throw $pyjs_dbg_288_err;
}})()['__contains__']('tagName')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_289_err){if (!$p['isinstance']($pyjs_dbg_289_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_289_err);}throw $pyjs_dbg_289_err;
}})()) {
						$pyjs['track']['lineno']=501;
						continue;
					}
					$pyjs['track']['lineno']=502;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_eq']($p['getattr'](trChild, 'tagName'), 'THEAD'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_290_err){if (!$p['isinstance']($pyjs_dbg_290_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_290_err);}throw $pyjs_dbg_290_err;
}})()) {
						$pyjs['track']['lineno']=504;
						$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
						$iter15_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['range'](0, $p['getattr']($p['getattr'](trChild, 'children'), 'length'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_291_err){if (!$p['isinstance']($pyjs_dbg_291_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_291_err);}throw $pyjs_dbg_291_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_292_err){if (!$p['isinstance']($pyjs_dbg_292_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_292_err);}throw $pyjs_dbg_292_err;
}})();
						$iter15_nextval=$p['__iter_prepare']($iter15_iter,false);
						while (typeof($p['__wrapped_next']($iter15_nextval)['$nextval']) != 'undefined') {
							childIdx = $iter15_nextval['$nextval'];
							$pyjs['track']['lineno']=505;
							child = (function(){try{try{$pyjs['in_try_except'] += 1;
							return trChild['children']['item'](childIdx);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_293_err){if (!$p['isinstance']($pyjs_dbg_293_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_293_err);}throw $pyjs_dbg_293_err;
}})();
							$pyjs['track']['lineno']=506;
							if ((function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['dir'](child);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_294_err){if (!$p['isinstance']($pyjs_dbg_294_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_294_err);}throw $pyjs_dbg_294_err;
}})()['__contains__']('tagName')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_295_err){if (!$p['isinstance']($pyjs_dbg_295_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_295_err);}throw $pyjs_dbg_295_err;
}})()) {
								$pyjs['track']['lineno']=507;
								continue;
							}
							$pyjs['track']['lineno']=508;
							if ((function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['bool']($p['op_eq']($p['getattr'](child, 'tagName'), 'TR'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_296_err){if (!$p['isinstance']($pyjs_dbg_296_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_296_err);}throw $pyjs_dbg_296_err;
}})()) {
								$pyjs['track']['lineno']=509;
								newTd = (function(){try{try{$pyjs['in_try_except'] += 1;
								return $m['html5']['document']['createElement']('th');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_297_err){if (!$p['isinstance']($pyjs_dbg_297_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_297_err);}throw $pyjs_dbg_297_err;
}})();
								$pyjs['track']['lineno']=510;
								if ((function(){try{try{$pyjs['in_try_except'] += 1;
									return $p['bool'](($p['cmp']($p['__op_add']($add23=cellIdx,$add24=1), $p['getattr']($p['getattr'](child, 'children'), 'length')) == -1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_298_err){if (!$p['isinstance']($pyjs_dbg_298_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_298_err);}throw $pyjs_dbg_298_err;
}})()) {
									$pyjs['track']['lineno']=511;
									(function(){try{try{$pyjs['in_try_except'] += 1;
									return child['insertBefore'](newTd, (function(){try{try{$pyjs['in_try_except'] += 1;
									return child['children']['item']($p['__op_add']($add25=cellIdx,$add26=1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_299_err){if (!$p['isinstance']($pyjs_dbg_299_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_299_err);}throw $pyjs_dbg_299_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_300_err){if (!$p['isinstance']($pyjs_dbg_300_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_300_err);}throw $pyjs_dbg_300_err;
}})();
								}
								else {
									$pyjs['track']['lineno']=513;
									(function(){try{try{$pyjs['in_try_except'] += 1;
									return child['appendChild'](newTd);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_301_err){if (!$p['isinstance']($pyjs_dbg_301_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_301_err);}throw $pyjs_dbg_301_err;
}})();
								}
							}
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='widgets.wysiwyg';
					}
					else if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_eq']($p['getattr'](trChild, 'tagName'), 'TBODY'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_302_err){if (!$p['isinstance']($pyjs_dbg_302_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_302_err);}throw $pyjs_dbg_302_err;
}})()) {
						$pyjs['track']['lineno']=516;
						$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
						$iter16_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['range'](0, $p['getattr']($p['getattr'](trChild, 'children'), 'length'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_303_err){if (!$p['isinstance']($pyjs_dbg_303_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_303_err);}throw $pyjs_dbg_303_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_304_err){if (!$p['isinstance']($pyjs_dbg_304_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_304_err);}throw $pyjs_dbg_304_err;
}})();
						$iter16_nextval=$p['__iter_prepare']($iter16_iter,false);
						while (typeof($p['__wrapped_next']($iter16_nextval)['$nextval']) != 'undefined') {
							childIdx = $iter16_nextval['$nextval'];
							$pyjs['track']['lineno']=517;
							child = (function(){try{try{$pyjs['in_try_except'] += 1;
							return trChild['children']['item'](childIdx);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_305_err){if (!$p['isinstance']($pyjs_dbg_305_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_305_err);}throw $pyjs_dbg_305_err;
}})();
							$pyjs['track']['lineno']=518;
							if ((function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['dir'](child);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_306_err){if (!$p['isinstance']($pyjs_dbg_306_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_306_err);}throw $pyjs_dbg_306_err;
}})()['__contains__']('tagName')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_307_err){if (!$p['isinstance']($pyjs_dbg_307_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_307_err);}throw $pyjs_dbg_307_err;
}})()) {
								$pyjs['track']['lineno']=519;
								continue;
							}
							$pyjs['track']['lineno']=520;
							if ((function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['bool']($p['op_eq']($p['getattr'](child, 'tagName'), 'TR'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_308_err){if (!$p['isinstance']($pyjs_dbg_308_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_308_err);}throw $pyjs_dbg_308_err;
}})()) {
								$pyjs['track']['lineno']=521;
								newTd = (function(){try{try{$pyjs['in_try_except'] += 1;
								return $m['html5']['document']['createElement']('td');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_309_err){if (!$p['isinstance']($pyjs_dbg_309_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_309_err);}throw $pyjs_dbg_309_err;
}})();
								$pyjs['track']['lineno']=522;
								if ((function(){try{try{$pyjs['in_try_except'] += 1;
									return $p['bool'](($p['cmp']($p['__op_add']($add27=cellIdx,$add28=1), $p['getattr']($p['getattr'](child, 'children'), 'length')) == -1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_310_err){if (!$p['isinstance']($pyjs_dbg_310_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_310_err);}throw $pyjs_dbg_310_err;
}})()) {
									$pyjs['track']['lineno']=523;
									(function(){try{try{$pyjs['in_try_except'] += 1;
									return child['insertBefore'](newTd, (function(){try{try{$pyjs['in_try_except'] += 1;
									return child['children']['item']($p['__op_add']($add29=cellIdx,$add30=1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_311_err){if (!$p['isinstance']($pyjs_dbg_311_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_311_err);}throw $pyjs_dbg_311_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_312_err){if (!$p['isinstance']($pyjs_dbg_312_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_312_err);}throw $pyjs_dbg_312_err;
}})();
								}
								else {
									$pyjs['track']['lineno']=525;
									(function(){try{try{$pyjs['in_try_except'] += 1;
									return child['appendChild'](newTd);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_313_err){if (!$p['isinstance']($pyjs_dbg_313_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_313_err);}throw $pyjs_dbg_313_err;
}})();
								}
							}
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='widgets.wysiwyg';
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='widgets.wysiwyg';
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=528;
		$method = $pyjs__bind_method2('isSuitableFor', function(modul, handler, actionName) {

			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':528};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=528;
			$pyjs['track']['lineno']=529;
			$pyjs['track']['lineno']=529;
			var $pyjs__ret = $p['op_eq'](actionName, 'text.table.newcol.after');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['modul'],['handler'],['actionName']]);
		$cls_definition['isSuitableFor'] = $method;
		$pyjs['track']['lineno']=531;
		$method = $pyjs__bind_method2('resetLoadingState', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':531};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=531;
			$pyjs['track']['lineno']=532;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['resetLoadingState'] = $method;
		$pyjs['track']['lineno']=466;
		var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Button'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('TableInsertColAfterAction', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=534;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $p['getattr']($m['TableInsertColAfterAction'], 'isSuitableFor'), $m['TableInsertColAfterAction']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_314_err){if (!$p['isinstance']($pyjs_dbg_314_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_314_err);}throw $pyjs_dbg_314_err;
}})();
	$pyjs['track']['lineno']=537;
	$m['TableRemoveRowAction'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.wysiwyg';
		$pyjs['track']['lineno']=538;
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

			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':538};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=538;
			$pyjs['track']['lineno']=539;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['TableRemoveRowAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_315_err){if (!$p['isinstance']($pyjs_dbg_315_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_315_err);}throw $pyjs_dbg_315_err;
}})(), '__init__', args, kwargs, [{}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Remove Table Row');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_316_err){if (!$p['isinstance']($pyjs_dbg_316_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_316_err);}throw $pyjs_dbg_316_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_317_err){if (!$p['isinstance']($pyjs_dbg_317_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_317_err);}throw $pyjs_dbg_317_err;
}})();
			$pyjs['track']['lineno']=540;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('class', 'icon text table remove row');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_318_err){if (!$p['isinstance']($pyjs_dbg_318_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_318_err);}throw $pyjs_dbg_318_err;
}})();
			$pyjs['track']['lineno']=541;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('title', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Remove Table Row');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_319_err){if (!$p['isinstance']($pyjs_dbg_319_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_319_err);}throw $pyjs_dbg_319_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_320_err){if (!$p['isinstance']($pyjs_dbg_320_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_320_err);}throw $pyjs_dbg_320_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=543;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
			var node,i,$sub12,$sub11,$and26,$and25,$and24;
			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':543};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=543;
			$pyjs['track']['lineno']=544;
			node = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (typeof eval == "undefined"?$m['eval']:eval)('window.top.getSelection().anchorNode');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_321_err){if (!$p['isinstance']($pyjs_dbg_321_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_321_err);}throw $pyjs_dbg_321_err;
}})();
			$pyjs['track']['lineno']=545;
			i = 10;
			$pyjs['track']['lineno']=546;
			while ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and24=($p['cmp'](i, 0) == 1))?($p['bool']($and25=node)?!$p['op_eq'](node, $p['getattr']($p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_322_err){if (!$p['isinstance']($pyjs_dbg_322_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_322_err);}throw $pyjs_dbg_322_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_323_err){if (!$p['isinstance']($pyjs_dbg_323_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_323_err);}throw $pyjs_dbg_323_err;
}})(), 'editor'), 'element')):$and25):$and24));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_324_err){if (!$p['isinstance']($pyjs_dbg_324_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_324_err);}throw $pyjs_dbg_324_err;
}})()) {
				$pyjs['track']['lineno']=547;
				i = $p['__op_sub']($sub11=i,$sub12=1);
				$pyjs['track']['lineno']=548;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dir'](node);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_325_err){if (!$p['isinstance']($pyjs_dbg_325_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_325_err);}throw $pyjs_dbg_325_err;
}})()['__contains__']('tagName')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_326_err){if (!$p['isinstance']($pyjs_dbg_326_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_326_err);}throw $pyjs_dbg_326_err;
}})()) {
					$pyjs['track']['lineno']=549;
					node = $p['getattr'](node, 'parentNode');
					$pyjs['track']['lineno']=550;
					continue;
				}
				$pyjs['track']['lineno']=551;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq']($p['getattr'](node, 'tagName'), 'TR'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_327_err){if (!$p['isinstance']($pyjs_dbg_327_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_327_err);}throw $pyjs_dbg_327_err;
}})()) {
					$pyjs['track']['lineno']=552;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return node['parentNode']['removeChild'](node);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_328_err){if (!$p['isinstance']($pyjs_dbg_328_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_328_err);}throw $pyjs_dbg_328_err;
}})();
					$pyjs['track']['lineno']=553;
					$pyjs['track']['lineno']=553;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=554;
				node = $p['getattr'](node, 'parentNode');
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=557;
		$method = $pyjs__bind_method2('isSuitableFor', function(modul, handler, actionName) {

			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':557};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=557;
			$pyjs['track']['lineno']=558;
			$pyjs['track']['lineno']=558;
			var $pyjs__ret = $p['op_eq'](actionName, 'text.table.remove.row');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['modul'],['handler'],['actionName']]);
		$cls_definition['isSuitableFor'] = $method;
		$pyjs['track']['lineno']=560;
		$method = $pyjs__bind_method2('resetLoadingState', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':560};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=560;
			$pyjs['track']['lineno']=561;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['resetLoadingState'] = $method;
		$pyjs['track']['lineno']=537;
		var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Button'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('TableRemoveRowAction', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=563;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $p['getattr']($m['TableRemoveRowAction'], 'isSuitableFor'), $m['TableRemoveRowAction']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_329_err){if (!$p['isinstance']($pyjs_dbg_329_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_329_err);}throw $pyjs_dbg_329_err;
}})();
	$pyjs['track']['lineno']=567;
	$m['TableRemoveColAction'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.wysiwyg';
		$pyjs['track']['lineno']=568;
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

			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':568};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=568;
			$pyjs['track']['lineno']=569;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['TableRemoveColAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_330_err){if (!$p['isinstance']($pyjs_dbg_330_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_330_err);}throw $pyjs_dbg_330_err;
}})(), '__init__', args, kwargs, [{}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Remove Table Col');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_331_err){if (!$p['isinstance']($pyjs_dbg_331_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_331_err);}throw $pyjs_dbg_331_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_332_err){if (!$p['isinstance']($pyjs_dbg_332_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_332_err);}throw $pyjs_dbg_332_err;
}})();
			$pyjs['track']['lineno']=570;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('class', 'icon text table remove col');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_333_err){if (!$p['isinstance']($pyjs_dbg_333_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_333_err);}throw $pyjs_dbg_333_err;
}})();
			$pyjs['track']['lineno']=571;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('title', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Remove Table Col');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_334_err){if (!$p['isinstance']($pyjs_dbg_334_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_334_err);}throw $pyjs_dbg_334_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_335_err){if (!$p['isinstance']($pyjs_dbg_335_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_335_err);}throw $pyjs_dbg_335_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=573;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
			var $iter17_nextval,$iter20_nextval,trChild,$iter20_array,$and29,$and28,table,$iter17_type,$and27,trChildIdx,$iter17_iter,tr,$iter19_nextval,cellIdx,$iter19_iter,$iter18_idx,$iter20_idx,td,$iter18_nextval,node,$iter20_iter,$iter18_iter,$sub13,$sub14,$iter18_type,$iter17_array,$iter20_type,$iter17_idx,$iter19_array,$and30,$and31,$and32,child,$iter19_idx,$iter18_array,i,$add31,$add32,$iter19_type,$pyjs__trackstack_size_2,$pyjs__trackstack_size_1,x,childIdx;
			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':573};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=573;
			$pyjs['track']['lineno']=574;
			node = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (typeof eval == "undefined"?$m['eval']:eval)('window.top.getSelection().anchorNode');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_336_err){if (!$p['isinstance']($pyjs_dbg_336_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_336_err);}throw $pyjs_dbg_336_err;
}})();
			$pyjs['track']['lineno']=575;
			td = null;
			$pyjs['track']['lineno']=576;
			tr = null;
			$pyjs['track']['lineno']=577;
			table = null;
			$pyjs['track']['lineno']=578;
			i = 10;
			$pyjs['track']['lineno']=580;
			while ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and27=($p['cmp'](i, 0) == 1))?($p['bool']($and28=node)?!$p['op_eq'](node, $p['getattr']($p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_337_err){if (!$p['isinstance']($pyjs_dbg_337_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_337_err);}throw $pyjs_dbg_337_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_338_err){if (!$p['isinstance']($pyjs_dbg_338_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_338_err);}throw $pyjs_dbg_338_err;
}})(), 'editor'), 'element')):$and28):$and27));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_339_err){if (!$p['isinstance']($pyjs_dbg_339_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_339_err);}throw $pyjs_dbg_339_err;
}})()) {
				$pyjs['track']['lineno']=581;
				i = $p['__op_sub']($sub13=i,$sub14=1);
				$pyjs['track']['lineno']=582;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dir'](node);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_340_err){if (!$p['isinstance']($pyjs_dbg_340_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_340_err);}throw $pyjs_dbg_340_err;
}})()['__contains__']('tagName')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_341_err){if (!$p['isinstance']($pyjs_dbg_341_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_341_err);}throw $pyjs_dbg_341_err;
}})()) {
					$pyjs['track']['lineno']=583;
					node = $p['getattr'](node, 'parentNode');
					$pyjs['track']['lineno']=584;
					continue;
				}
				$pyjs['track']['lineno']=585;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq']($p['getattr'](node, 'tagName'), 'TD'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_342_err){if (!$p['isinstance']($pyjs_dbg_342_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_342_err);}throw $pyjs_dbg_342_err;
}})()) {
					$pyjs['track']['lineno']=586;
					td = node;
				}
				else if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq']($p['getattr'](node, 'tagName'), 'TR'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_343_err){if (!$p['isinstance']($pyjs_dbg_343_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_343_err);}throw $pyjs_dbg_343_err;
}})()) {
					$pyjs['track']['lineno']=588;
					tr = node;
				}
				else if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq']($p['getattr'](node, 'tagName'), 'TABLE'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_344_err){if (!$p['isinstance']($pyjs_dbg_344_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_344_err);}throw $pyjs_dbg_344_err;
}})()) {
					$pyjs['track']['lineno']=590;
					table = node;
					$pyjs['track']['lineno']=591;
					break;
				}
				$pyjs['track']['lineno']=592;
				node = $p['getattr'](node, 'parentNode');
			}
			$pyjs['track']['lineno']=593;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and30=td)?($p['bool']($and31=tr)?table:$and31):$and30));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_345_err){if (!$p['isinstance']($pyjs_dbg_345_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_345_err);}throw $pyjs_dbg_345_err;
}})()) {
				$pyjs['track']['lineno']=594;
				cellIdx = 0;
				$pyjs['track']['lineno']=595;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter17_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['range'](0, $p['getattr']($p['getattr'](tr, 'children'), 'length'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_346_err){if (!$p['isinstance']($pyjs_dbg_346_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_346_err);}throw $pyjs_dbg_346_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_347_err){if (!$p['isinstance']($pyjs_dbg_347_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_347_err);}throw $pyjs_dbg_347_err;
}})();
				$iter17_nextval=$p['__iter_prepare']($iter17_iter,false);
				while (typeof($p['__wrapped_next']($iter17_nextval)['$nextval']) != 'undefined') {
					x = $iter17_nextval['$nextval'];
					$pyjs['track']['lineno']=596;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_eq'](td, (function(){try{try{$pyjs['in_try_except'] += 1;
					return tr['children']['item'](x);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_348_err){if (!$p['isinstance']($pyjs_dbg_348_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_348_err);}throw $pyjs_dbg_348_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_349_err){if (!$p['isinstance']($pyjs_dbg_349_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_349_err);}throw $pyjs_dbg_349_err;
}})()) {
						$pyjs['track']['lineno']=597;
						break;
					}
					$pyjs['track']['lineno']=598;
					cellIdx = $p['__op_add']($add31=cellIdx,$add32=1);
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='widgets.wysiwyg';
				$pyjs['track']['lineno']=599;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter18_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['range'](0, $p['getattr']($p['getattr'](table, 'children'), 'length'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_350_err){if (!$p['isinstance']($pyjs_dbg_350_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_350_err);}throw $pyjs_dbg_350_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_351_err){if (!$p['isinstance']($pyjs_dbg_351_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_351_err);}throw $pyjs_dbg_351_err;
}})();
				$iter18_nextval=$p['__iter_prepare']($iter18_iter,false);
				while (typeof($p['__wrapped_next']($iter18_nextval)['$nextval']) != 'undefined') {
					trChildIdx = $iter18_nextval['$nextval'];
					$pyjs['track']['lineno']=600;
					trChild = (function(){try{try{$pyjs['in_try_except'] += 1;
					return table['children']['item'](trChildIdx);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_352_err){if (!$p['isinstance']($pyjs_dbg_352_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_352_err);}throw $pyjs_dbg_352_err;
}})();
					$pyjs['track']['lineno']=601;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['dir'](trChild);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_353_err){if (!$p['isinstance']($pyjs_dbg_353_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_353_err);}throw $pyjs_dbg_353_err;
}})()['__contains__']('tagName')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_354_err){if (!$p['isinstance']($pyjs_dbg_354_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_354_err);}throw $pyjs_dbg_354_err;
}})()) {
						$pyjs['track']['lineno']=602;
						continue;
					}
					$pyjs['track']['lineno']=603;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_eq']($p['getattr'](trChild, 'tagName'), 'THEAD'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_355_err){if (!$p['isinstance']($pyjs_dbg_355_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_355_err);}throw $pyjs_dbg_355_err;
}})()) {
						$pyjs['track']['lineno']=605;
						$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
						$iter19_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['range'](0, $p['getattr']($p['getattr'](trChild, 'children'), 'length'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_356_err){if (!$p['isinstance']($pyjs_dbg_356_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_356_err);}throw $pyjs_dbg_356_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_357_err){if (!$p['isinstance']($pyjs_dbg_357_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_357_err);}throw $pyjs_dbg_357_err;
}})();
						$iter19_nextval=$p['__iter_prepare']($iter19_iter,false);
						while (typeof($p['__wrapped_next']($iter19_nextval)['$nextval']) != 'undefined') {
							childIdx = $iter19_nextval['$nextval'];
							$pyjs['track']['lineno']=606;
							child = (function(){try{try{$pyjs['in_try_except'] += 1;
							return trChild['children']['item'](childIdx);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_358_err){if (!$p['isinstance']($pyjs_dbg_358_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_358_err);}throw $pyjs_dbg_358_err;
}})();
							$pyjs['track']['lineno']=607;
							if ((function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['dir'](child);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_359_err){if (!$p['isinstance']($pyjs_dbg_359_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_359_err);}throw $pyjs_dbg_359_err;
}})()['__contains__']('tagName')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_360_err){if (!$p['isinstance']($pyjs_dbg_360_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_360_err);}throw $pyjs_dbg_360_err;
}})()) {
								$pyjs['track']['lineno']=608;
								continue;
							}
							$pyjs['track']['lineno']=609;
							if ((function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['bool']($p['op_eq']($p['getattr'](child, 'tagName'), 'TR'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_361_err){if (!$p['isinstance']($pyjs_dbg_361_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_361_err);}throw $pyjs_dbg_361_err;
}})()) {
								$pyjs['track']['lineno']=610;
								(function(){try{try{$pyjs['in_try_except'] += 1;
								return child['removeChild']((function(){try{try{$pyjs['in_try_except'] += 1;
								return child['children']['item'](cellIdx);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_362_err){if (!$p['isinstance']($pyjs_dbg_362_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_362_err);}throw $pyjs_dbg_362_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_363_err){if (!$p['isinstance']($pyjs_dbg_363_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_363_err);}throw $pyjs_dbg_363_err;
}})();
							}
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='widgets.wysiwyg';
					}
					else if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_eq']($p['getattr'](trChild, 'tagName'), 'TBODY'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_364_err){if (!$p['isinstance']($pyjs_dbg_364_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_364_err);}throw $pyjs_dbg_364_err;
}})()) {
						$pyjs['track']['lineno']=613;
						$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
						$iter20_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['range'](0, $p['getattr']($p['getattr'](trChild, 'children'), 'length'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_365_err){if (!$p['isinstance']($pyjs_dbg_365_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_365_err);}throw $pyjs_dbg_365_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_366_err){if (!$p['isinstance']($pyjs_dbg_366_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_366_err);}throw $pyjs_dbg_366_err;
}})();
						$iter20_nextval=$p['__iter_prepare']($iter20_iter,false);
						while (typeof($p['__wrapped_next']($iter20_nextval)['$nextval']) != 'undefined') {
							childIdx = $iter20_nextval['$nextval'];
							$pyjs['track']['lineno']=614;
							child = (function(){try{try{$pyjs['in_try_except'] += 1;
							return trChild['children']['item'](childIdx);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_367_err){if (!$p['isinstance']($pyjs_dbg_367_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_367_err);}throw $pyjs_dbg_367_err;
}})();
							$pyjs['track']['lineno']=615;
							if ((function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['dir'](child);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_368_err){if (!$p['isinstance']($pyjs_dbg_368_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_368_err);}throw $pyjs_dbg_368_err;
}})()['__contains__']('tagName')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_369_err){if (!$p['isinstance']($pyjs_dbg_369_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_369_err);}throw $pyjs_dbg_369_err;
}})()) {
								$pyjs['track']['lineno']=616;
								continue;
							}
							$pyjs['track']['lineno']=617;
							if ((function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['bool']($p['op_eq']($p['getattr'](child, 'tagName'), 'TR'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_370_err){if (!$p['isinstance']($pyjs_dbg_370_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_370_err);}throw $pyjs_dbg_370_err;
}})()) {
								$pyjs['track']['lineno']=618;
								(function(){try{try{$pyjs['in_try_except'] += 1;
								return child['removeChild']((function(){try{try{$pyjs['in_try_except'] += 1;
								return child['children']['item'](cellIdx);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_371_err){if (!$p['isinstance']($pyjs_dbg_371_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_371_err);}throw $pyjs_dbg_371_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_372_err){if (!$p['isinstance']($pyjs_dbg_372_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_372_err);}throw $pyjs_dbg_372_err;
}})();
							}
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='widgets.wysiwyg';
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='widgets.wysiwyg';
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=621;
		$method = $pyjs__bind_method2('isSuitableFor', function(modul, handler, actionName) {

			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':621};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=621;
			$pyjs['track']['lineno']=622;
			$pyjs['track']['lineno']=622;
			var $pyjs__ret = $p['op_eq'](actionName, 'text.table.remove.col');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['modul'],['handler'],['actionName']]);
		$cls_definition['isSuitableFor'] = $method;
		$pyjs['track']['lineno']=624;
		$method = $pyjs__bind_method2('resetLoadingState', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':624};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=624;
			$pyjs['track']['lineno']=625;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['resetLoadingState'] = $method;
		$pyjs['track']['lineno']=567;
		var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Button'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('TableRemoveColAction', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=627;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $p['getattr']($m['TableRemoveColAction'], 'isSuitableFor'), $m['TableRemoveColAction']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_373_err){if (!$p['isinstance']($pyjs_dbg_373_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_373_err);}throw $pyjs_dbg_373_err;
}})();
	$pyjs['track']['lineno']=629;
	$m['TextSaveAction'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.wysiwyg';
		$pyjs['track']['lineno']=630;
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

			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':630};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=630;
			$pyjs['track']['lineno']=631;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['TextSaveAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_374_err){if (!$p['isinstance']($pyjs_dbg_374_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_374_err);}throw $pyjs_dbg_374_err;
}})(), '__init__', args, kwargs, [{}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Save');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_375_err){if (!$p['isinstance']($pyjs_dbg_375_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_375_err);}throw $pyjs_dbg_375_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_376_err){if (!$p['isinstance']($pyjs_dbg_376_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_376_err);}throw $pyjs_dbg_376_err;
}})();
			$pyjs['track']['lineno']=632;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('class', 'icon text save');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_377_err){if (!$p['isinstance']($pyjs_dbg_377_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_377_err);}throw $pyjs_dbg_377_err;
}})();
			$pyjs['track']['lineno']=633;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('title', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Save');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_378_err){if (!$p['isinstance']($pyjs_dbg_378_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_378_err);}throw $pyjs_dbg_378_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_379_err){if (!$p['isinstance']($pyjs_dbg_379_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_379_err);}throw $pyjs_dbg_379_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=635;
		$method = $pyjs__bind_method2('onClick', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':635};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=635;
			$pyjs['track']['lineno']=636;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_380_err){if (!$p['isinstance']($pyjs_dbg_380_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_380_err);}throw $pyjs_dbg_380_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_381_err){if (!$p['isinstance']($pyjs_dbg_381_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_381_err);}throw $pyjs_dbg_381_err;
}})()['saveText']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_382_err){if (!$p['isinstance']($pyjs_dbg_382_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_382_err);}throw $pyjs_dbg_382_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=639;
		$method = $pyjs__bind_method2('isSuitableFor', function(modul, handler, actionName) {

			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':639};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=639;
			$pyjs['track']['lineno']=640;
			$pyjs['track']['lineno']=640;
			var $pyjs__ret = $p['op_eq'](actionName, 'text.save');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['modul'],['handler'],['actionName']]);
		$cls_definition['isSuitableFor'] = $method;
		$pyjs['track']['lineno']=629;
		var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Button'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('TextSaveAction', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=642;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $p['getattr']($m['TextSaveAction'], 'isSuitableFor'), $m['TextSaveAction']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_383_err){if (!$p['isinstance']($pyjs_dbg_383_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_383_err);}throw $pyjs_dbg_383_err;
}})();
	$pyjs['track']['lineno']=644;
	$m['TextAbortAction'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.wysiwyg';
		$pyjs['track']['lineno']=645;
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

			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':645};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=645;
			$pyjs['track']['lineno']=646;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['TextAbortAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_384_err){if (!$p['isinstance']($pyjs_dbg_384_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_384_err);}throw $pyjs_dbg_384_err;
}})(), '__init__', args, kwargs, [{}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Abort');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_385_err){if (!$p['isinstance']($pyjs_dbg_385_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_385_err);}throw $pyjs_dbg_385_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_386_err){if (!$p['isinstance']($pyjs_dbg_386_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_386_err);}throw $pyjs_dbg_386_err;
}})();
			$pyjs['track']['lineno']=647;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('class', 'icon text abort');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_387_err){if (!$p['isinstance']($pyjs_dbg_387_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_387_err);}throw $pyjs_dbg_387_err;
}})();
			$pyjs['track']['lineno']=648;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('title', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Abort');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_388_err){if (!$p['isinstance']($pyjs_dbg_388_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_388_err);}throw $pyjs_dbg_388_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_389_err){if (!$p['isinstance']($pyjs_dbg_389_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_389_err);}throw $pyjs_dbg_389_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=650;
		$method = $pyjs__bind_method2('onClick', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':650};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=650;
			$pyjs['track']['lineno']=651;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_390_err){if (!$p['isinstance']($pyjs_dbg_390_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_390_err);}throw $pyjs_dbg_390_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_391_err){if (!$p['isinstance']($pyjs_dbg_391_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_391_err);}throw $pyjs_dbg_391_err;
}})()['editor']['changed']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_392_err){if (!$p['isinstance']($pyjs_dbg_392_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_392_err);}throw $pyjs_dbg_392_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_393_err){if (!$p['isinstance']($pyjs_dbg_393_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_393_err);}throw $pyjs_dbg_393_err;
}})()) {
				$pyjs['track']['lineno']=652;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call($m['html5']['ext']['popup'], 'YesNoDialog', null, null, [{'yesCallback':$p['getattr'](self, 'doAbort')}, (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['translate']('Any changes will be lost. Do you really want to abort?');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_394_err){if (!$p['isinstance']($pyjs_dbg_394_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_394_err);}throw $pyjs_dbg_394_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_395_err){if (!$p['isinstance']($pyjs_dbg_395_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_395_err);}throw $pyjs_dbg_395_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=655;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['doAbort']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_396_err){if (!$p['isinstance']($pyjs_dbg_396_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_396_err);}throw $pyjs_dbg_396_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=657;
		$method = $pyjs__bind_method2('doAbort', function() {
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

			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':657};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=657;
			$pyjs['track']['lineno']=658;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_397_err){if (!$p['isinstance']($pyjs_dbg_397_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_397_err);}throw $pyjs_dbg_397_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_398_err){if (!$p['isinstance']($pyjs_dbg_398_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_398_err);}throw $pyjs_dbg_398_err;
}})()['abortText']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_399_err){if (!$p['isinstance']($pyjs_dbg_399_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_399_err);}throw $pyjs_dbg_399_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['doAbort'] = $method;
		$pyjs['track']['lineno']=661;
		$method = $pyjs__bind_method2('isSuitableFor', function(modul, handler, actionName) {

			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':661};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=661;
			$pyjs['track']['lineno']=662;
			$pyjs['track']['lineno']=662;
			var $pyjs__ret = $p['op_eq'](actionName, 'text.abort');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['modul'],['handler'],['actionName']]);
		$cls_definition['isSuitableFor'] = $method;
		$pyjs['track']['lineno']=644;
		var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Button'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('TextAbortAction', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=664;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $p['getattr']($m['TextAbortAction'], 'isSuitableFor'), $m['TextAbortAction']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_400_err){if (!$p['isinstance']($pyjs_dbg_400_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_400_err);}throw $pyjs_dbg_400_err;
}})();
	$pyjs['track']['lineno']=666;
	$m['LinkEditor'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.wysiwyg';
		$pyjs['track']['lineno']=667;
		$cls_definition['newLinkIdx'] = 0;
		$pyjs['track']['lineno']=668;
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
			var l;
			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':668};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=668;
			$pyjs['track']['lineno']=669;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['LinkEditor'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_401_err){if (!$p['isinstance']($pyjs_dbg_401_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_401_err);}throw $pyjs_dbg_401_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_402_err){if (!$p['isinstance']($pyjs_dbg_402_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_402_err);}throw $pyjs_dbg_402_err;
}})();
			$pyjs['track']['lineno']=670;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__getitem__']('class')['append']('linkeditor');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_403_err){if (!$p['isinstance']($pyjs_dbg_403_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_403_err);}throw $pyjs_dbg_403_err;
}})();
			$pyjs['track']['lineno']=671;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__getitem__']('style')['__setitem__']('display', 'none');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_404_err){if (!$p['isinstance']($pyjs_dbg_404_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_404_err);}throw $pyjs_dbg_404_err;
}})();
			$pyjs['track']['lineno']=672;
			self['linkTxt'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Input']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_405_err){if (!$p['isinstance']($pyjs_dbg_405_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_405_err);}throw $pyjs_dbg_405_err;
}})();
			$pyjs['track']['lineno']=673;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'linkTxt')['__setitem__']('type', 'text');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_406_err){if (!$p['isinstance']($pyjs_dbg_406_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_406_err);}throw $pyjs_dbg_406_err;
}})();
			$pyjs['track']['lineno']=674;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'linkTxt'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_407_err){if (!$p['isinstance']($pyjs_dbg_407_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_407_err);}throw $pyjs_dbg_407_err;
}})();
			$pyjs['track']['lineno']=675;
			l = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['html5'], 'Label', null, null, [{'forElem':$p['getattr'](self, 'linkTxt')}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('URL');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_408_err){if (!$p['isinstance']($pyjs_dbg_408_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_408_err);}throw $pyjs_dbg_408_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_409_err){if (!$p['isinstance']($pyjs_dbg_409_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_409_err);}throw $pyjs_dbg_409_err;
}})();
			$pyjs['track']['lineno']=676;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return l['__getitem__']('class')['append']('urllbl');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_410_err){if (!$p['isinstance']($pyjs_dbg_410_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_410_err);}throw $pyjs_dbg_410_err;
}})();
			$pyjs['track']['lineno']=677;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild'](l);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_411_err){if (!$p['isinstance']($pyjs_dbg_411_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_411_err);}throw $pyjs_dbg_411_err;
}})();
			$pyjs['track']['lineno']=678;
			self['newTab'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Input']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_412_err){if (!$p['isinstance']($pyjs_dbg_412_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_412_err);}throw $pyjs_dbg_412_err;
}})();
			$pyjs['track']['lineno']=679;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'newTab')['__setitem__']('type', 'checkbox');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_413_err){if (!$p['isinstance']($pyjs_dbg_413_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_413_err);}throw $pyjs_dbg_413_err;
}})();
			$pyjs['track']['lineno']=680;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'newTab'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_414_err){if (!$p['isinstance']($pyjs_dbg_414_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_414_err);}throw $pyjs_dbg_414_err;
}})();
			$pyjs['track']['lineno']=681;
			l = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['html5'], 'Label', null, null, [{'forElem':$p['getattr'](self, 'newTab')}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('New window');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_415_err){if (!$p['isinstance']($pyjs_dbg_415_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_415_err);}throw $pyjs_dbg_415_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_416_err){if (!$p['isinstance']($pyjs_dbg_416_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_416_err);}throw $pyjs_dbg_416_err;
}})();
			$pyjs['track']['lineno']=682;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return l['__getitem__']('class')['append']('newwindowlbl');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_417_err){if (!$p['isinstance']($pyjs_dbg_417_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_417_err);}throw $pyjs_dbg_417_err;
}})();
			$pyjs['track']['lineno']=683;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild'](l);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_418_err){if (!$p['isinstance']($pyjs_dbg_418_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_418_err);}throw $pyjs_dbg_418_err;
}})();
			$pyjs['track']['lineno']=684;
			self['currentElem'] = null;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=686;
		$method = $pyjs__bind_method2('getAFromTagStack', function(tagStack) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				tagStack = arguments[1];
			}
			var $iter21_idx,$iter21_nextval,elem,$iter21_type,$iter21_iter,$iter21_array,$pyjs__trackstack_size_1;
			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':686};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=686;
			$pyjs['track']['lineno']=687;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter21_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return tagStack;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_419_err){if (!$p['isinstance']($pyjs_dbg_419_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_419_err);}throw $pyjs_dbg_419_err;
}})();
			$iter21_nextval=$p['__iter_prepare']($iter21_iter,false);
			while (typeof($p['__wrapped_next']($iter21_nextval)['$nextval']) != 'undefined') {
				elem = $iter21_nextval['$nextval'];
				$pyjs['track']['lineno']=688;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dir'](elem);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_420_err){if (!$p['isinstance']($pyjs_dbg_420_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_420_err);}throw $pyjs_dbg_420_err;
}})()['__contains__']('tagName')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_421_err){if (!$p['isinstance']($pyjs_dbg_421_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_421_err);}throw $pyjs_dbg_421_err;
}})()) {
					$pyjs['track']['lineno']=689;
					continue;
				}
				$pyjs['track']['lineno']=690;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq']($p['getattr'](elem, 'tagName'), 'A'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_422_err){if (!$p['isinstance']($pyjs_dbg_422_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_422_err);}throw $pyjs_dbg_422_err;
}})()) {
					$pyjs['track']['lineno']=691;
					$pyjs['track']['lineno']=691;
					var $pyjs__ret = elem;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=692;
			$pyjs['track']['lineno']=692;
			var $pyjs__ret = null;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['tagStack']]);
		$cls_definition['getAFromTagStack'] = $method;
		$pyjs['track']['lineno']=694;
		$method = $pyjs__bind_method2('onCursorMoved', function(tagStack) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				tagStack = arguments[1];
			}
			var newElem,$and38,$and34,$and35,$and36,$and37,$and33;
			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':694};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=694;
			$pyjs['track']['lineno']=695;
			newElem = (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['getAFromTagStack'](tagStack);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_423_err){if (!$p['isinstance']($pyjs_dbg_423_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_423_err);}throw $pyjs_dbg_423_err;
}})();
			$pyjs['track']['lineno']=696;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and33=(newElem !== null))?($p['getattr'](self, 'currentElem') !== null):$and33));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_424_err){if (!$p['isinstance']($pyjs_dbg_424_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_424_err);}throw $pyjs_dbg_424_err;
}})()) {
				$pyjs['track']['lineno']=697;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['doClose']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_425_err){if (!$p['isinstance']($pyjs_dbg_425_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_425_err);}throw $pyjs_dbg_425_err;
}})();
				$pyjs['track']['lineno']=698;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['doOpen'](newElem);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_426_err){if (!$p['isinstance']($pyjs_dbg_426_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_426_err);}throw $pyjs_dbg_426_err;
}})();
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and35=($p['getattr'](self, 'currentElem') === null))?(newElem !== null):$and35));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_427_err){if (!$p['isinstance']($pyjs_dbg_427_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_427_err);}throw $pyjs_dbg_427_err;
}})()) {
				$pyjs['track']['lineno']=700;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['doOpen'](newElem);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_428_err){if (!$p['isinstance']($pyjs_dbg_428_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_428_err);}throw $pyjs_dbg_428_err;
}})();
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and37=($p['getattr'](self, 'currentElem') !== null))?(newElem === null):$and37));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_429_err){if (!$p['isinstance']($pyjs_dbg_429_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_429_err);}throw $pyjs_dbg_429_err;
}})()) {
				$pyjs['track']['lineno']=702;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['doClose']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_430_err){if (!$p['isinstance']($pyjs_dbg_430_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_430_err);}throw $pyjs_dbg_430_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['tagStack']]);
		$cls_definition['onCursorMoved'] = $method;
		$pyjs['track']['lineno']=704;
		$method = $pyjs__bind_method2('doOpen', function(elem) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				elem = arguments[1];
			}

			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':704};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=704;
			$pyjs['track']['lineno']=705;
			self['currentElem'] = elem;
			$pyjs['track']['lineno']=706;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'linkTxt')['__setitem__']('value', $p['getattr']($p['getattr'](self, 'currentElem'), 'href'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_431_err){if (!$p['isinstance']($pyjs_dbg_431_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_431_err);}throw $pyjs_dbg_431_err;
}})();
			$pyjs['track']['lineno']=707;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'newTab')['__setitem__']('checked', $p['op_eq']($p['getattr']($p['getattr'](self, 'currentElem'), 'target'), '_blank'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_432_err){if (!$p['isinstance']($pyjs_dbg_432_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_432_err);}throw $pyjs_dbg_432_err;
}})();
			$pyjs['track']['lineno']=709;
			self['isOpen'] = true;
			$pyjs['track']['lineno']=710;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__getitem__']('style')['__setitem__']('display', 'block');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_433_err){if (!$p['isinstance']($pyjs_dbg_433_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_433_err);}throw $pyjs_dbg_433_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['elem']]);
		$cls_definition['doOpen'] = $method;
		$pyjs['track']['lineno']=712;
		$method = $pyjs__bind_method2('doClose', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':712};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=712;
			$pyjs['track']['lineno']=713;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['getattr'](self, 'currentElem') === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_434_err){if (!$p['isinstance']($pyjs_dbg_434_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_434_err);}throw $pyjs_dbg_434_err;
}})()) {
				$pyjs['track']['lineno']=714;
				$pyjs['track']['lineno']=714;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=715;
			$p['getattr'](self, 'currentElem')['href'] = $p['getattr'](self, 'linkTxt')['__getitem__']('value');
			$pyjs['track']['lineno']=717;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'newTab')['__getitem__']('checked'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_435_err){if (!$p['isinstance']($pyjs_dbg_435_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_435_err);}throw $pyjs_dbg_435_err;
}})()) {
				$pyjs['track']['lineno']=718;
				$p['getattr'](self, 'currentElem')['target'] = '_blank';
			}
			else {
				$pyjs['track']['lineno']=720;
				$p['getattr'](self, 'currentElem')['target'] = '_self';
			}
			$pyjs['track']['lineno']=722;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__getitem__']('style')['__setitem__']('display', 'none');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_436_err){if (!$p['isinstance']($pyjs_dbg_436_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_436_err);}throw $pyjs_dbg_436_err;
}})();
			$pyjs['track']['lineno']=723;
			self['currentElem'] = null;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['doClose'] = $method;
		$pyjs['track']['lineno']=725;
		$method = $pyjs__bind_method2('findHref', function(linkTarget, elem) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				linkTarget = arguments[1];
				elem = arguments[2];
			}
			var child,$or1,$iter22_array,$or2,$pyjs__trackstack_size_1,$iter22_nextval,$iter22_idx,r,$iter22_type,x,$iter22_iter;
			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':725};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=725;
			$pyjs['track']['lineno']=726;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dir'](elem);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_437_err){if (!$p['isinstance']($pyjs_dbg_437_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_437_err);}throw $pyjs_dbg_437_err;
}})()['__contains__']('tagName'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_438_err){if (!$p['isinstance']($pyjs_dbg_438_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_438_err);}throw $pyjs_dbg_438_err;
}})()) {
				$pyjs['track']['lineno']=727;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq']($p['getattr'](elem, 'tagName'), 'A'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_439_err){if (!$p['isinstance']($pyjs_dbg_439_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_439_err);}throw $pyjs_dbg_439_err;
}})()) {
					$pyjs['track']['lineno']=728;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['bool']($or1=$p['op_eq']($p['getattr'](elem, 'href'), linkTarget))?$or1:(function(){try{try{$pyjs['in_try_except'] += 1;
					return elem['href']['endswith'](linkTarget);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_440_err){if (!$p['isinstance']($pyjs_dbg_440_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_440_err);}throw $pyjs_dbg_440_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_441_err){if (!$p['isinstance']($pyjs_dbg_441_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_441_err);}throw $pyjs_dbg_441_err;
}})()) {
						$pyjs['track']['lineno']=729;
						$pyjs['track']['lineno']=729;
						var $pyjs__ret = elem;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
				}
			}
			$pyjs['track']['lineno']=730;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dir'](elem);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_442_err){if (!$p['isinstance']($pyjs_dbg_442_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_442_err);}throw $pyjs_dbg_442_err;
}})()['__contains__']('children'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_443_err){if (!$p['isinstance']($pyjs_dbg_443_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_443_err);}throw $pyjs_dbg_443_err;
}})()) {
				$pyjs['track']['lineno']=731;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter22_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['range'](0, $p['getattr']($p['getattr'](elem, 'children'), 'length'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_444_err){if (!$p['isinstance']($pyjs_dbg_444_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_444_err);}throw $pyjs_dbg_444_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_445_err){if (!$p['isinstance']($pyjs_dbg_445_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_445_err);}throw $pyjs_dbg_445_err;
}})();
				$iter22_nextval=$p['__iter_prepare']($iter22_iter,false);
				while (typeof($p['__wrapped_next']($iter22_nextval)['$nextval']) != 'undefined') {
					x = $iter22_nextval['$nextval'];
					$pyjs['track']['lineno']=732;
					child = (function(){try{try{$pyjs['in_try_except'] += 1;
					return elem['children']['item'](x);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_446_err){if (!$p['isinstance']($pyjs_dbg_446_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_446_err);}throw $pyjs_dbg_446_err;
}})();
					$pyjs['track']['lineno']=733;
					r = (function(){try{try{$pyjs['in_try_except'] += 1;
					return self['findHref'](linkTarget, child);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_447_err){if (!$p['isinstance']($pyjs_dbg_447_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_447_err);}throw $pyjs_dbg_447_err;
}})();
					$pyjs['track']['lineno']=734;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((r !== null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_448_err){if (!$p['isinstance']($pyjs_dbg_448_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_448_err);}throw $pyjs_dbg_448_err;
}})()) {
						$pyjs['track']['lineno']=735;
						$pyjs['track']['lineno']=735;
						var $pyjs__ret = r;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='widgets.wysiwyg';
			}
			$pyjs['track']['lineno']=736;
			$pyjs['track']['lineno']=736;
			var $pyjs__ret = null;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['linkTarget'],['elem']]);
		$cls_definition['findHref'] = $method;
		$pyjs['track']['lineno']=738;
		$method = $pyjs__bind_method2('openLink', function(linkTarget) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				linkTarget = arguments[1];
			}

			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':738};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=738;
			$pyjs['track']['lineno']=739;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['doOpen']((function(){try{try{$pyjs['in_try_except'] += 1;
			return self['findHref'](linkTarget, $p['getattr']($p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_449_err){if (!$p['isinstance']($pyjs_dbg_449_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_449_err);}throw $pyjs_dbg_449_err;
}})(), 'editor'), 'element'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_450_err){if (!$p['isinstance']($pyjs_dbg_450_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_450_err);}throw $pyjs_dbg_450_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_451_err){if (!$p['isinstance']($pyjs_dbg_451_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_451_err);}throw $pyjs_dbg_451_err;
}})();
			$pyjs['track']['lineno']=740;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'linkTxt')['__setitem__']('value', '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_452_err){if (!$p['isinstance']($pyjs_dbg_452_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_452_err);}throw $pyjs_dbg_452_err;
}})();
			$pyjs['track']['lineno']=741;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['linkTxt']['focus']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_453_err){if (!$p['isinstance']($pyjs_dbg_453_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_453_err);}throw $pyjs_dbg_453_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['linkTarget']]);
		$cls_definition['openLink'] = $method;
		$pyjs['track']['lineno']=666;
		var $bases = new Array($p['getattr']($m['html5'], 'Div'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('LinkEditor', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=744;
	$m['ImageEditor'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.wysiwyg';
		$pyjs['track']['lineno']=745;
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
			var l;
			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':745};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=745;
			$pyjs['track']['lineno']=746;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['ImageEditor'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_454_err){if (!$p['isinstance']($pyjs_dbg_454_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_454_err);}throw $pyjs_dbg_454_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_455_err){if (!$p['isinstance']($pyjs_dbg_455_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_455_err);}throw $pyjs_dbg_455_err;
}})();
			$pyjs['track']['lineno']=747;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__getitem__']('class')['append']('imageeditor');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_456_err){if (!$p['isinstance']($pyjs_dbg_456_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_456_err);}throw $pyjs_dbg_456_err;
}})();
			$pyjs['track']['lineno']=748;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__getitem__']('style')['__setitem__']('display', 'none');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_457_err){if (!$p['isinstance']($pyjs_dbg_457_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_457_err);}throw $pyjs_dbg_457_err;
}})();
			$pyjs['track']['lineno']=749;
			self['widthInput'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Input']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_458_err){if (!$p['isinstance']($pyjs_dbg_458_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_458_err);}throw $pyjs_dbg_458_err;
}})();
			$pyjs['track']['lineno']=750;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'widthInput')['__setitem__']('type', 'number');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_459_err){if (!$p['isinstance']($pyjs_dbg_459_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_459_err);}throw $pyjs_dbg_459_err;
}})();
			$pyjs['track']['lineno']=751;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'widthInput'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_460_err){if (!$p['isinstance']($pyjs_dbg_460_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_460_err);}throw $pyjs_dbg_460_err;
}})();
			$pyjs['track']['lineno']=752;
			l = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Label']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Width');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_461_err){if (!$p['isinstance']($pyjs_dbg_461_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_461_err);}throw $pyjs_dbg_461_err;
}})(), $p['getattr'](self, 'widthInput'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_462_err){if (!$p['isinstance']($pyjs_dbg_462_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_462_err);}throw $pyjs_dbg_462_err;
}})();
			$pyjs['track']['lineno']=753;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return l['__getitem__']('class')['append']('widthlbl');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_463_err){if (!$p['isinstance']($pyjs_dbg_463_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_463_err);}throw $pyjs_dbg_463_err;
}})();
			$pyjs['track']['lineno']=754;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild'](l);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_464_err){if (!$p['isinstance']($pyjs_dbg_464_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_464_err);}throw $pyjs_dbg_464_err;
}})();
			$pyjs['track']['lineno']=755;
			self['keepAspectRatio'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Input']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_465_err){if (!$p['isinstance']($pyjs_dbg_465_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_465_err);}throw $pyjs_dbg_465_err;
}})();
			$pyjs['track']['lineno']=756;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'keepAspectRatio')['__setitem__']('type', 'checkbox');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_466_err){if (!$p['isinstance']($pyjs_dbg_466_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_466_err);}throw $pyjs_dbg_466_err;
}})();
			$pyjs['track']['lineno']=757;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'keepAspectRatio'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_467_err){if (!$p['isinstance']($pyjs_dbg_467_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_467_err);}throw $pyjs_dbg_467_err;
}})();
			$pyjs['track']['lineno']=758;
			l = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Label']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Keep aspect ratio');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_468_err){if (!$p['isinstance']($pyjs_dbg_468_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_468_err);}throw $pyjs_dbg_468_err;
}})(), $p['getattr'](self, 'keepAspectRatio'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_469_err){if (!$p['isinstance']($pyjs_dbg_469_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_469_err);}throw $pyjs_dbg_469_err;
}})();
			$pyjs['track']['lineno']=759;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return l['__getitem__']('class')['append']('aspectlbl');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_470_err){if (!$p['isinstance']($pyjs_dbg_470_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_470_err);}throw $pyjs_dbg_470_err;
}})();
			$pyjs['track']['lineno']=760;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild'](l);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_471_err){if (!$p['isinstance']($pyjs_dbg_471_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_471_err);}throw $pyjs_dbg_471_err;
}})();
			$pyjs['track']['lineno']=761;
			self['heightInput'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Input']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_472_err){if (!$p['isinstance']($pyjs_dbg_472_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_472_err);}throw $pyjs_dbg_472_err;
}})();
			$pyjs['track']['lineno']=762;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'heightInput')['__setitem__']('type', 'number');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_473_err){if (!$p['isinstance']($pyjs_dbg_473_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_473_err);}throw $pyjs_dbg_473_err;
}})();
			$pyjs['track']['lineno']=763;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'heightInput'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_474_err){if (!$p['isinstance']($pyjs_dbg_474_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_474_err);}throw $pyjs_dbg_474_err;
}})();
			$pyjs['track']['lineno']=764;
			l = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Label']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Height');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_475_err){if (!$p['isinstance']($pyjs_dbg_475_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_475_err);}throw $pyjs_dbg_475_err;
}})(), $p['getattr'](self, 'heightInput'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_476_err){if (!$p['isinstance']($pyjs_dbg_476_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_476_err);}throw $pyjs_dbg_476_err;
}})();
			$pyjs['track']['lineno']=765;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return l['__getitem__']('class')['append']('heightlbl');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_477_err){if (!$p['isinstance']($pyjs_dbg_477_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_477_err);}throw $pyjs_dbg_477_err;
}})();
			$pyjs['track']['lineno']=766;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild'](l);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_478_err){if (!$p['isinstance']($pyjs_dbg_478_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_478_err);}throw $pyjs_dbg_478_err;
}})();
			$pyjs['track']['lineno']=767;
			self['titleInput'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Input']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_479_err){if (!$p['isinstance']($pyjs_dbg_479_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_479_err);}throw $pyjs_dbg_479_err;
}})();
			$pyjs['track']['lineno']=768;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'titleInput')['__setitem__']('type', 'text');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_480_err){if (!$p['isinstance']($pyjs_dbg_480_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_480_err);}throw $pyjs_dbg_480_err;
}})();
			$pyjs['track']['lineno']=769;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'titleInput'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_481_err){if (!$p['isinstance']($pyjs_dbg_481_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_481_err);}throw $pyjs_dbg_481_err;
}})();
			$pyjs['track']['lineno']=770;
			l = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Label']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Title');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_482_err){if (!$p['isinstance']($pyjs_dbg_482_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_482_err);}throw $pyjs_dbg_482_err;
}})(), $p['getattr'](self, 'titleInput'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_483_err){if (!$p['isinstance']($pyjs_dbg_483_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_483_err);}throw $pyjs_dbg_483_err;
}})();
			$pyjs['track']['lineno']=771;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return l['__getitem__']('class')['append']('titlelbl');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_484_err){if (!$p['isinstance']($pyjs_dbg_484_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_484_err);}throw $pyjs_dbg_484_err;
}})();
			$pyjs['track']['lineno']=772;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild'](l);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_485_err){if (!$p['isinstance']($pyjs_dbg_485_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_485_err);}throw $pyjs_dbg_485_err;
}})();
			$pyjs['track']['lineno']=773;
			self['currentElem'] = null;
			$pyjs['track']['lineno']=774;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['sinkEvent']('onChange');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_486_err){if (!$p['isinstance']($pyjs_dbg_486_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_486_err);}throw $pyjs_dbg_486_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=776;
		$method = $pyjs__bind_method2('onChange', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $mul2,$mul1,aspect,$div2,$div3,$div1,$div4;
			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':776};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=776;
			$pyjs['track']['lineno']=777;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['ImageEditor'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_487_err){if (!$p['isinstance']($pyjs_dbg_487_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_487_err);}throw $pyjs_dbg_487_err;
}})()['onChange'](event);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_488_err){if (!$p['isinstance']($pyjs_dbg_488_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_488_err);}throw $pyjs_dbg_488_err;
}})();
			$pyjs['track']['lineno']=778;
			aspect = (typeof ($div1=$p['getattr']($p['getattr'](self, 'currentElem'), 'naturalWidth'))==typeof ($div2=$p['getattr']($p['getattr'](self, 'currentElem'), 'naturalHeight')) && typeof $div1=='number' && $div2 !== 0?
				$div1/$div2:
				$p['op_div']($div1,$div2));
			$pyjs['track']['lineno']=779;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq']($p['getattr'](event, 'target'), $p['getattr']($p['getattr'](self, 'widthInput'), 'element')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_489_err){if (!$p['isinstance']($pyjs_dbg_489_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_489_err);}throw $pyjs_dbg_489_err;
}})()) {
				$pyjs['track']['lineno']=780;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, 'keepAspectRatio')['__getitem__']('checked'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_490_err){if (!$p['isinstance']($pyjs_dbg_490_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_490_err);}throw $pyjs_dbg_490_err;
}})()) {
					$pyjs['track']['lineno']=781;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'heightInput')['__setitem__']('value', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['float_int']((typeof ($div3=(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['float']($p['getattr'](self, 'widthInput')['__getitem__']('value'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_491_err){if (!$p['isinstance']($pyjs_dbg_491_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_491_err);}throw $pyjs_dbg_491_err;
}})())==typeof ($div4=aspect) && typeof $div3=='number' && $div4 !== 0?
						$div3/$div4:
						$p['op_div']($div3,$div4)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_492_err){if (!$p['isinstance']($pyjs_dbg_492_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_492_err);}throw $pyjs_dbg_492_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_493_err){if (!$p['isinstance']($pyjs_dbg_493_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_493_err);}throw $pyjs_dbg_493_err;
}})();
				}
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq']($p['getattr'](event, 'target'), $p['getattr']($p['getattr'](self, 'heightInput'), 'element')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_494_err){if (!$p['isinstance']($pyjs_dbg_494_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_494_err);}throw $pyjs_dbg_494_err;
}})()) {
				$pyjs['track']['lineno']=783;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, 'keepAspectRatio')['__getitem__']('checked'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_495_err){if (!$p['isinstance']($pyjs_dbg_495_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_495_err);}throw $pyjs_dbg_495_err;
}})()) {
					$pyjs['track']['lineno']=784;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'widthInput')['__setitem__']('value', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['float_int']((typeof ($mul1=(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['float']($p['getattr'](self, 'heightInput')['__getitem__']('value'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_496_err){if (!$p['isinstance']($pyjs_dbg_496_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_496_err);}throw $pyjs_dbg_496_err;
}})())==typeof ($mul2=aspect) && typeof $mul1=='number'?
						$mul1*$mul2:
						$p['op_mul']($mul1,$mul2)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_497_err){if (!$p['isinstance']($pyjs_dbg_497_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_497_err);}throw $pyjs_dbg_497_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_498_err){if (!$p['isinstance']($pyjs_dbg_498_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_498_err);}throw $pyjs_dbg_498_err;
}})();
				}
			}
			$pyjs['track']['lineno']=785;
			$p['getattr'](self, 'currentElem')['width'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['float_int']($p['getattr'](self, 'widthInput')['__getitem__']('value'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_499_err){if (!$p['isinstance']($pyjs_dbg_499_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_499_err);}throw $pyjs_dbg_499_err;
}})();
			$pyjs['track']['lineno']=786;
			$p['getattr'](self, 'currentElem')['height'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['float_int']($p['getattr'](self, 'heightInput')['__getitem__']('value'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_500_err){if (!$p['isinstance']($pyjs_dbg_500_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_500_err);}throw $pyjs_dbg_500_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onChange'] = $method;
		$pyjs['track']['lineno']=788;
		$method = $pyjs__bind_method2('getImgFromTagStack', function(tagStack) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				tagStack = arguments[1];
			}
			var $iter23_type,$iter23_nextval,$iter23_iter,elem,$iter23_array,$pyjs__trackstack_size_1,$iter23_idx;
			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':788};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=788;
			$pyjs['track']['lineno']=789;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter23_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return tagStack;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_501_err){if (!$p['isinstance']($pyjs_dbg_501_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_501_err);}throw $pyjs_dbg_501_err;
}})();
			$iter23_nextval=$p['__iter_prepare']($iter23_iter,false);
			while (typeof($p['__wrapped_next']($iter23_nextval)['$nextval']) != 'undefined') {
				elem = $iter23_nextval['$nextval'];
				$pyjs['track']['lineno']=790;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dir'](elem);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_502_err){if (!$p['isinstance']($pyjs_dbg_502_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_502_err);}throw $pyjs_dbg_502_err;
}})()['__contains__']('tagName')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_503_err){if (!$p['isinstance']($pyjs_dbg_503_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_503_err);}throw $pyjs_dbg_503_err;
}})()) {
					$pyjs['track']['lineno']=791;
					continue;
				}
				$pyjs['track']['lineno']=792;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq']($p['getattr'](elem, 'tagName'), 'IMG'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_504_err){if (!$p['isinstance']($pyjs_dbg_504_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_504_err);}throw $pyjs_dbg_504_err;
}})()) {
					$pyjs['track']['lineno']=793;
					$pyjs['track']['lineno']=793;
					var $pyjs__ret = elem;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=794;
			$pyjs['track']['lineno']=794;
			var $pyjs__ret = null;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['tagStack']]);
		$cls_definition['getImgFromTagStack'] = $method;
		$pyjs['track']['lineno']=796;
		$method = $pyjs__bind_method2('onCursorMoved', function(tagStack) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				tagStack = arguments[1];
			}
			var newElem,$and41,$and40,$and43,$and42,$and39,$and44;
			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':796};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=796;
			$pyjs['track']['lineno']=797;
			newElem = (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['getImgFromTagStack'](tagStack);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_505_err){if (!$p['isinstance']($pyjs_dbg_505_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_505_err);}throw $pyjs_dbg_505_err;
}})();
			$pyjs['track']['lineno']=798;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and39=(newElem !== null))?($p['getattr'](self, 'currentElem') !== null):$and39));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_506_err){if (!$p['isinstance']($pyjs_dbg_506_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_506_err);}throw $pyjs_dbg_506_err;
}})()) {
				$pyjs['track']['lineno']=799;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['doClose']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_507_err){if (!$p['isinstance']($pyjs_dbg_507_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_507_err);}throw $pyjs_dbg_507_err;
}})();
				$pyjs['track']['lineno']=800;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['doOpen'](newElem);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_508_err){if (!$p['isinstance']($pyjs_dbg_508_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_508_err);}throw $pyjs_dbg_508_err;
}})();
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and41=($p['getattr'](self, 'currentElem') === null))?(newElem !== null):$and41));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_509_err){if (!$p['isinstance']($pyjs_dbg_509_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_509_err);}throw $pyjs_dbg_509_err;
}})()) {
				$pyjs['track']['lineno']=802;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['doOpen'](newElem);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_510_err){if (!$p['isinstance']($pyjs_dbg_510_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_510_err);}throw $pyjs_dbg_510_err;
}})();
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and43=($p['getattr'](self, 'currentElem') !== null))?(newElem === null):$and43));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_511_err){if (!$p['isinstance']($pyjs_dbg_511_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_511_err);}throw $pyjs_dbg_511_err;
}})()) {
				$pyjs['track']['lineno']=804;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['doClose']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_512_err){if (!$p['isinstance']($pyjs_dbg_512_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_512_err);}throw $pyjs_dbg_512_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['tagStack']]);
		$cls_definition['onCursorMoved'] = $method;
		$pyjs['track']['lineno']=806;
		$method = $pyjs__bind_method2('doOpen', function(elem) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				elem = arguments[1];
			}

			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':806};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=806;
			$pyjs['track']['lineno']=807;
			self['currentElem'] = elem;
			$pyjs['track']['lineno']=808;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__getitem__']('style')['__setitem__']('display', '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_513_err){if (!$p['isinstance']($pyjs_dbg_513_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_513_err);}throw $pyjs_dbg_513_err;
}})();
			$pyjs['track']['lineno']=809;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'heightInput')['__setitem__']('value', $p['getattr'](elem, 'height'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_514_err){if (!$p['isinstance']($pyjs_dbg_514_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_514_err);}throw $pyjs_dbg_514_err;
}})();
			$pyjs['track']['lineno']=810;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'widthInput')['__setitem__']('value', $p['getattr'](elem, 'width'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_515_err){if (!$p['isinstance']($pyjs_dbg_515_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_515_err);}throw $pyjs_dbg_515_err;
}})();
			$pyjs['track']['lineno']=811;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'titleInput')['__setitem__']('value', $p['getattr'](elem, 'title'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_516_err){if (!$p['isinstance']($pyjs_dbg_516_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_516_err);}throw $pyjs_dbg_516_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['elem']]);
		$cls_definition['doOpen'] = $method;
		$pyjs['track']['lineno']=813;
		$method = $pyjs__bind_method2('doClose', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':813};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=813;
			$pyjs['track']['lineno']=814;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['getattr'](self, 'currentElem') === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_517_err){if (!$p['isinstance']($pyjs_dbg_517_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_517_err);}throw $pyjs_dbg_517_err;
}})()) {
				$pyjs['track']['lineno']=815;
				$pyjs['track']['lineno']=815;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=816;
			$p['getattr'](self, 'currentElem')['width'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['float_int']($p['getattr'](self, 'widthInput')['__getitem__']('value'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_518_err){if (!$p['isinstance']($pyjs_dbg_518_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_518_err);}throw $pyjs_dbg_518_err;
}})();
			$pyjs['track']['lineno']=817;
			$p['getattr'](self, 'currentElem')['height'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['float_int']($p['getattr'](self, 'heightInput')['__getitem__']('value'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_519_err){if (!$p['isinstance']($pyjs_dbg_519_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_519_err);}throw $pyjs_dbg_519_err;
}})();
			$pyjs['track']['lineno']=818;
			$p['getattr'](self, 'currentElem')['title'] = $p['getattr'](self, 'titleInput')['__getitem__']('value');
			$pyjs['track']['lineno']=819;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__getitem__']('style')['__setitem__']('display', 'none');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_520_err){if (!$p['isinstance']($pyjs_dbg_520_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_520_err);}throw $pyjs_dbg_520_err;
}})();
			$pyjs['track']['lineno']=820;
			self['currentElem'] = null;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['doClose'] = $method;
		$pyjs['track']['lineno']=822;
		$method = $pyjs__bind_method2('findImg', function(linkTarget, elem) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				linkTarget = arguments[1];
				elem = arguments[2];
			}
			var $or4,child,$or3,$iter24_idx,$pyjs__trackstack_size_1,$iter24_type,$iter24_array,x,r,$iter24_iter,$iter24_nextval;
			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':822};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=822;
			$pyjs['track']['lineno']=823;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dir'](elem);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_521_err){if (!$p['isinstance']($pyjs_dbg_521_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_521_err);}throw $pyjs_dbg_521_err;
}})()['__contains__']('tagName'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_522_err){if (!$p['isinstance']($pyjs_dbg_522_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_522_err);}throw $pyjs_dbg_522_err;
}})()) {
				$pyjs['track']['lineno']=824;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq']($p['getattr'](elem, 'tagName'), 'IMG'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_523_err){if (!$p['isinstance']($pyjs_dbg_523_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_523_err);}throw $pyjs_dbg_523_err;
}})()) {
					$pyjs['track']['lineno']=825;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['bool']($or3=$p['op_eq']($p['getattr'](elem, 'href'), linkTarget))?$or3:(function(){try{try{$pyjs['in_try_except'] += 1;
					return elem['href']['endswith'](linkTarget);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_524_err){if (!$p['isinstance']($pyjs_dbg_524_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_524_err);}throw $pyjs_dbg_524_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_525_err){if (!$p['isinstance']($pyjs_dbg_525_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_525_err);}throw $pyjs_dbg_525_err;
}})()) {
						$pyjs['track']['lineno']=826;
						$pyjs['track']['lineno']=826;
						var $pyjs__ret = elem;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
				}
			}
			$pyjs['track']['lineno']=827;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dir'](elem);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_526_err){if (!$p['isinstance']($pyjs_dbg_526_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_526_err);}throw $pyjs_dbg_526_err;
}})()['__contains__']('children'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_527_err){if (!$p['isinstance']($pyjs_dbg_527_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_527_err);}throw $pyjs_dbg_527_err;
}})()) {
				$pyjs['track']['lineno']=828;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter24_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['range'](0, $p['getattr']($p['getattr'](elem, 'children'), 'length'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_528_err){if (!$p['isinstance']($pyjs_dbg_528_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_528_err);}throw $pyjs_dbg_528_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_529_err){if (!$p['isinstance']($pyjs_dbg_529_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_529_err);}throw $pyjs_dbg_529_err;
}})();
				$iter24_nextval=$p['__iter_prepare']($iter24_iter,false);
				while (typeof($p['__wrapped_next']($iter24_nextval)['$nextval']) != 'undefined') {
					x = $iter24_nextval['$nextval'];
					$pyjs['track']['lineno']=829;
					child = (function(){try{try{$pyjs['in_try_except'] += 1;
					return elem['children']['item'](x);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_530_err){if (!$p['isinstance']($pyjs_dbg_530_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_530_err);}throw $pyjs_dbg_530_err;
}})();
					$pyjs['track']['lineno']=830;
					r = (function(){try{try{$pyjs['in_try_except'] += 1;
					return self['findImg'](linkTarget, child);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_531_err){if (!$p['isinstance']($pyjs_dbg_531_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_531_err);}throw $pyjs_dbg_531_err;
}})();
					$pyjs['track']['lineno']=831;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((r !== null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_532_err){if (!$p['isinstance']($pyjs_dbg_532_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_532_err);}throw $pyjs_dbg_532_err;
}})()) {
						$pyjs['track']['lineno']=832;
						$pyjs['track']['lineno']=832;
						var $pyjs__ret = r;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='widgets.wysiwyg';
			}
			$pyjs['track']['lineno']=833;
			$pyjs['track']['lineno']=833;
			var $pyjs__ret = null;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['linkTarget'],['elem']]);
		$cls_definition['findImg'] = $method;
		$pyjs['track']['lineno']=835;
		$method = $pyjs__bind_method2('openLink', function(linkTarget) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				linkTarget = arguments[1];
			}

			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':835};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=835;
			$pyjs['track']['lineno']=836;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['doOpen']((function(){try{try{$pyjs['in_try_except'] += 1;
			return self['findHref'](linkTarget, $p['getattr']($p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_533_err){if (!$p['isinstance']($pyjs_dbg_533_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_533_err);}throw $pyjs_dbg_533_err;
}})(), 'editor'), 'element'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_534_err){if (!$p['isinstance']($pyjs_dbg_534_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_534_err);}throw $pyjs_dbg_534_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_535_err){if (!$p['isinstance']($pyjs_dbg_535_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_535_err);}throw $pyjs_dbg_535_err;
}})();
			$pyjs['track']['lineno']=837;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'linkTxt')['__setitem__']('value', '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_536_err){if (!$p['isinstance']($pyjs_dbg_536_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_536_err);}throw $pyjs_dbg_536_err;
}})();
			$pyjs['track']['lineno']=838;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['linkTxt']['focus']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_537_err){if (!$p['isinstance']($pyjs_dbg_537_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_537_err);}throw $pyjs_dbg_537_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['linkTarget']]);
		$cls_definition['openLink'] = $method;
		$pyjs['track']['lineno']=744;
		var $bases = new Array($p['getattr']($m['html5'], 'Div'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('ImageEditor', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=841;
	$m['TextUndoAction'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.wysiwyg';
		$pyjs['track']['lineno']=842;
		$cls_definition['cmd'] = 'undo';
		$pyjs['track']['lineno']=843;
		$cls_definition['title'] = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $m['translate']('Undo the last action');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_538_err){if (!$p['isinstance']($pyjs_dbg_538_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_538_err);}throw $pyjs_dbg_538_err;
}})();
		$pyjs['track']['lineno']=841;
		var $bases = new Array($m['BasicTextAction']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('TextUndoAction', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=845;
	var 	$lambda17 = function(modul, handler, actionName) {

		$pyjs['track']={'module':'widgets.wysiwyg','lineno':845};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='widgets.wysiwyg';
		$pyjs['track']['lineno']=845;
		$pyjs['track']['lineno']=845;
		$pyjs['track']['lineno']=845;
		var $pyjs__ret = $p['op_eq'](actionName, 'text.undo');
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$lambda17['__name__'] = '$lambda17';

	$lambda17['__bind_type__'] = 0;
	$lambda17['__args__'] = [null,null,['modul'],['handler'],['actionName']];
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $lambda17, $m['TextUndoAction']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_539_err){if (!$p['isinstance']($pyjs_dbg_539_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_539_err);}throw $pyjs_dbg_539_err;
}})();
	$pyjs['track']['lineno']=847;
	$m['TextRedoAction'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.wysiwyg';
		$pyjs['track']['lineno']=848;
		$cls_definition['cmd'] = 'redo';
		$pyjs['track']['lineno']=849;
		$cls_definition['title'] = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $m['translate']('Redo the last undone action');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_540_err){if (!$p['isinstance']($pyjs_dbg_540_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_540_err);}throw $pyjs_dbg_540_err;
}})();
		$pyjs['track']['lineno']=847;
		var $bases = new Array($m['BasicTextAction']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('TextRedoAction', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=851;
	var 	$lambda18 = function(modul, handler, actionName) {

		$pyjs['track']={'module':'widgets.wysiwyg','lineno':851};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='widgets.wysiwyg';
		$pyjs['track']['lineno']=851;
		$pyjs['track']['lineno']=851;
		$pyjs['track']['lineno']=851;
		var $pyjs__ret = $p['op_eq'](actionName, 'text.redo');
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$lambda18['__name__'] = '$lambda18';

	$lambda18['__bind_type__'] = 0;
	$lambda18['__args__'] = [null,null,['modul'],['handler'],['actionName']];
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $lambda18, $m['TextRedoAction']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_541_err){if (!$p['isinstance']($pyjs_dbg_541_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_541_err);}throw $pyjs_dbg_541_err;
}})();
	$pyjs['track']['lineno']=856;
	$m['FlipViewAction'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.wysiwyg';
		$pyjs['track']['lineno']=857;
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

			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':857};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=857;
			$pyjs['track']['lineno']=858;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['FlipViewAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_542_err){if (!$p['isinstance']($pyjs_dbg_542_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_542_err);}throw $pyjs_dbg_542_err;
}})(), '__init__', args, kwargs, [{}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Flip View');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_543_err){if (!$p['isinstance']($pyjs_dbg_543_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_543_err);}throw $pyjs_dbg_543_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_544_err){if (!$p['isinstance']($pyjs_dbg_544_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_544_err);}throw $pyjs_dbg_544_err;
}})();
			$pyjs['track']['lineno']=859;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('class', 'icon flipview');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_545_err){if (!$p['isinstance']($pyjs_dbg_545_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_545_err);}throw $pyjs_dbg_545_err;
}})();
			$pyjs['track']['lineno']=860;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('title', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Flip View');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_546_err){if (!$p['isinstance']($pyjs_dbg_546_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_546_err);}throw $pyjs_dbg_546_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_547_err){if (!$p['isinstance']($pyjs_dbg_547_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_547_err);}throw $pyjs_dbg_547_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=862;
		$method = $pyjs__bind_method2('onAttach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':862};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=862;
			$pyjs['track']['lineno']=863;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['FlipViewAction'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_548_err){if (!$p['isinstance']($pyjs_dbg_548_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_548_err);}throw $pyjs_dbg_548_err;
}})()['onAttach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_549_err){if (!$p['isinstance']($pyjs_dbg_549_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_549_err);}throw $pyjs_dbg_549_err;
}})();
			$pyjs['track']['lineno']=864;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_550_err){if (!$p['isinstance']($pyjs_dbg_550_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_550_err);}throw $pyjs_dbg_550_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_551_err){if (!$p['isinstance']($pyjs_dbg_551_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_551_err);}throw $pyjs_dbg_551_err;
}})(), 'isWysiwygMode'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_552_err){if (!$p['isinstance']($pyjs_dbg_552_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_552_err);}throw $pyjs_dbg_552_err;
}})()) {
				$pyjs['track']['lineno']=865;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__getitem__']('class')['append']('is_wysiwyg');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_553_err){if (!$p['isinstance']($pyjs_dbg_553_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_553_err);}throw $pyjs_dbg_553_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=867;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__getitem__']('class')['append']('is_htmlview');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_554_err){if (!$p['isinstance']($pyjs_dbg_554_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_554_err);}throw $pyjs_dbg_554_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onAttach'] = $method;
		$pyjs['track']['lineno']=869;
		$method = $pyjs__bind_method2('onClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];

			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':869};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=869;
			$pyjs['track']['lineno']=870;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](self['__getitem__']('class')['__contains__']('is_wysiwyg'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_555_err){if (!$p['isinstance']($pyjs_dbg_555_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_555_err);}throw $pyjs_dbg_555_err;
}})()) {
				$pyjs['track']['lineno']=871;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__getitem__']('class')['remove']('is_wysiwyg');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_556_err){if (!$p['isinstance']($pyjs_dbg_556_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_556_err);}throw $pyjs_dbg_556_err;
}})();
			}
			$pyjs['track']['lineno']=872;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](self['__getitem__']('class')['__contains__']('is_htmlview'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_557_err){if (!$p['isinstance']($pyjs_dbg_557_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_557_err);}throw $pyjs_dbg_557_err;
}})()) {
				$pyjs['track']['lineno']=873;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__getitem__']('class')['remove']('is_htmlview');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_558_err){if (!$p['isinstance']($pyjs_dbg_558_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_558_err);}throw $pyjs_dbg_558_err;
}})();
			}
			$pyjs['track']['lineno']=875;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_559_err){if (!$p['isinstance']($pyjs_dbg_559_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_559_err);}throw $pyjs_dbg_559_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_560_err){if (!$p['isinstance']($pyjs_dbg_560_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_560_err);}throw $pyjs_dbg_560_err;
}})()['flipView']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_561_err){if (!$p['isinstance']($pyjs_dbg_561_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_561_err);}throw $pyjs_dbg_561_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_562_err){if (!$p['isinstance']($pyjs_dbg_562_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_562_err);}throw $pyjs_dbg_562_err;
}})()) {
				$pyjs['track']['lineno']=876;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__getitem__']('class')['append']('is_wysiwyg');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_563_err){if (!$p['isinstance']($pyjs_dbg_563_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_563_err);}throw $pyjs_dbg_563_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=878;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__getitem__']('class')['append']('is_htmlview');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_564_err){if (!$p['isinstance']($pyjs_dbg_564_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_564_err);}throw $pyjs_dbg_564_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=880;
		$method = $pyjs__bind_method2('resetLoadingState', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':880};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=880;
			$pyjs['track']['lineno']=881;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['resetLoadingState'] = $method;
		$pyjs['track']['lineno']=856;
		var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Button'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('FlipViewAction', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=882;
	var 	$lambda19 = function(modul, handler, actionName) {

		$pyjs['track']={'module':'widgets.wysiwyg','lineno':882};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='widgets.wysiwyg';
		$pyjs['track']['lineno']=882;
		$pyjs['track']['lineno']=882;
		$pyjs['track']['lineno']=882;
		var $pyjs__ret = $p['op_eq'](actionName, 'text.flipView');
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$lambda19['__name__'] = '$lambda19';

	$lambda19['__bind_type__'] = 0;
	$lambda19['__args__'] = [null,null,['modul'],['handler'],['actionName']];
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['actionDelegateSelector']['insert'](1, $lambda19, $m['FlipViewAction']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_565_err){if (!$p['isinstance']($pyjs_dbg_565_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_565_err);}throw $pyjs_dbg_565_err;
}})();
	$pyjs['track']['lineno']=884;
	$m['Editor'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.wysiwyg';
		$pyjs['track']['lineno']=885;
		$method = $pyjs__bind_method2('__init__', function(html) {
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
				html = arguments[1];
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
				if (typeof html != 'undefined') {
					if (html !== null && typeof html['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = html;
						html = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}
			var $assign1;
			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':885};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=885;
			$pyjs['track']['lineno']=886;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['Editor'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_566_err){if (!$p['isinstance']($pyjs_dbg_566_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_566_err);}throw $pyjs_dbg_566_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_567_err){if (!$p['isinstance']($pyjs_dbg_567_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_567_err);}throw $pyjs_dbg_567_err;
}})();
			$pyjs['track']['lineno']=888;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('contenteditable', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_568_err){if (!$p['isinstance']($pyjs_dbg_568_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_568_err);}throw $pyjs_dbg_568_err;
}})();
			$pyjs['track']['lineno']=889;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['addClass']('contentdiv');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_569_err){if (!$p['isinstance']($pyjs_dbg_569_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_569_err);}throw $pyjs_dbg_569_err;
}})();
			$pyjs['track']['lineno']=891;
			$assign1 = html;
			self['initial_txt'] = $assign1;
			$p['getattr'](self, 'element')['innerHTML'] = $assign1;
			$pyjs['track']['lineno']=892;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['sinkEvent']('onBlur', 'onFocus', 'onKeyDown');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_570_err){if (!$p['isinstance']($pyjs_dbg_570_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_570_err);}throw $pyjs_dbg_570_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['html']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=894;
		$method = $pyjs__bind_method2('changed', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':894};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=894;
			$pyjs['track']['lineno']=895;
			$pyjs['track']['lineno']=895;
			var $pyjs__ret = !$p['op_eq']($p['getattr'](self, 'initial_txt'), $p['getattr']($p['getattr'](self, 'element'), 'innerHTML'));
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['changed'] = $method;
		$pyjs['track']['lineno']=902;
		$method = $pyjs__bind_method2('toggleSelection', function(tagName) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				tagName = arguments[1];
			}
			var $and49,$and48,$and45,$and46,current,range,$pyjs_try_err,$$new,sel,$and47;
			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':902};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=902;
			$pyjs['track']['lineno']=907;
			sel = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (typeof eval == "undefined"?$m['eval']:eval)('window.top.document.getSelection()');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_571_err){if (!$p['isinstance']($pyjs_dbg_571_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_571_err);}throw $pyjs_dbg_571_err;
}})();
			$pyjs['track']['lineno']=908;
			range = (function(){try{try{$pyjs['in_try_except'] += 1;
			return sel['getRangeAt'](0);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_572_err){if (!$p['isinstance']($pyjs_dbg_572_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_572_err);}throw $pyjs_dbg_572_err;
}})();
			$pyjs['track']['lineno']=909;
			current = (function(){try{try{$pyjs['in_try_except'] += 1;
			return range['extractContents']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_573_err){if (!$p['isinstance']($pyjs_dbg_573_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_573_err);}throw $pyjs_dbg_573_err;
}})();
			$pyjs['track']['lineno']=911;
			var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
			try {
				try {
					$pyjs['in_try_except'] += 1;
					$pyjs['track']['lineno']=912;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['printFunc']([current], 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_574_err){if (!$p['isinstance']($pyjs_dbg_574_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_574_err);}throw $pyjs_dbg_574_err;
}})();
					$pyjs['track']['lineno']=913;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['printFunc']([$p['getattr'](current, 'nodeType')], 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_575_err){if (!$p['isinstance']($pyjs_dbg_575_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_575_err);}throw $pyjs_dbg_575_err;
}})();
					$pyjs['track']['lineno']=914;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['printFunc']([$p['getattr'](current, 'tagName')], 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_576_err){if (!$p['isinstance']($pyjs_dbg_576_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_576_err);}throw $pyjs_dbg_576_err;
}})();
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
				$pyjs['track']['module']='widgets.wysiwyg';
				if (true) {
					$pyjs['track']['lineno']=916;
				}
			}
			$pyjs['track']['lineno']=918;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and45=$p['op_eq']($p['getattr'](current, 'nodeType'), 11))?$p['getattr'](current, 'firstElementChild'):$and45));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_577_err){if (!$p['isinstance']($pyjs_dbg_577_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_577_err);}throw $pyjs_dbg_577_err;
}})()) {
				$pyjs['track']['lineno']=919;
				current = $p['getattr'](current, 'firstElementChild');
			}
			$pyjs['track']['lineno']=921;
			var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
			try {
				try {
					$pyjs['in_try_except'] += 1;
					$pyjs['track']['lineno']=922;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['printFunc']([current], 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_578_err){if (!$p['isinstance']($pyjs_dbg_578_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_578_err);}throw $pyjs_dbg_578_err;
}})();
					$pyjs['track']['lineno']=923;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['printFunc']([$p['getattr'](current, 'nodeType')], 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_579_err){if (!$p['isinstance']($pyjs_dbg_579_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_579_err);}throw $pyjs_dbg_579_err;
}})();
					$pyjs['track']['lineno']=924;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['printFunc']([$p['getattr'](current, 'tagName')], 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_580_err){if (!$p['isinstance']($pyjs_dbg_580_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_580_err);}throw $pyjs_dbg_580_err;
}})();
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
				$pyjs['track']['module']='widgets.wysiwyg';
				if (true) {
					$pyjs['track']['lineno']=926;
				}
			}
			$pyjs['track']['lineno']=928;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and47=current)?($p['bool']($and48=$p['op_eq']($p['getattr'](current, 'nodeType'), 1))?$p['op_eq']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['str']($p['getattr'](current, 'tagName'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_581_err){if (!$p['isinstance']($pyjs_dbg_581_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_581_err);}throw $pyjs_dbg_581_err;
}})()['upper']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_582_err){if (!$p['isinstance']($pyjs_dbg_582_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_582_err);}throw $pyjs_dbg_582_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
			return tagName['upper']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_583_err){if (!$p['isinstance']($pyjs_dbg_583_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_583_err);}throw $pyjs_dbg_583_err;
}})()):$and48):$and47));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_584_err){if (!$p['isinstance']($pyjs_dbg_584_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_584_err);}throw $pyjs_dbg_584_err;
}})()) {
				$pyjs['track']['lineno']=929;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['printFunc'](['Toggle OFF'], 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_585_err){if (!$p['isinstance']($pyjs_dbg_585_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_585_err);}throw $pyjs_dbg_585_err;
}})();
				$pyjs['track']['lineno']=931;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return current['hasChildNodes']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_586_err){if (!$p['isinstance']($pyjs_dbg_586_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_586_err);}throw $pyjs_dbg_586_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_587_err){if (!$p['isinstance']($pyjs_dbg_587_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_587_err);}throw $pyjs_dbg_587_err;
}})()) {
					$pyjs['track']['lineno']=932;
					while ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['getattr'](current, 'firstChild'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_588_err){if (!$p['isinstance']($pyjs_dbg_588_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_588_err);}throw $pyjs_dbg_588_err;
}})()) {
						$pyjs['track']['lineno']=933;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return range['insertNode']($p['getattr'](current, 'firstChild'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_589_err){if (!$p['isinstance']($pyjs_dbg_589_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_589_err);}throw $pyjs_dbg_589_err;
}})();
					}
				}
			}
			else {
				$pyjs['track']['lineno']=936;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['printFunc'](['Toggle ON'], 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_590_err){if (!$p['isinstance']($pyjs_dbg_590_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_590_err);}throw $pyjs_dbg_590_err;
}})();
				$pyjs['track']['lineno']=938;
				$$new = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (typeof eval == "undefined"?$m['eval']:eval)((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('window.top.document.createElement("%s")', tagName);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_591_err){if (!$p['isinstance']($pyjs_dbg_591_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_591_err);}throw $pyjs_dbg_591_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_592_err){if (!$p['isinstance']($pyjs_dbg_592_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_592_err);}throw $pyjs_dbg_592_err;
}})();
				$pyjs['track']['lineno']=939;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $$new['appendChild'](current);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_593_err){if (!$p['isinstance']($pyjs_dbg_593_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_593_err);}throw $pyjs_dbg_593_err;
}})();
				$pyjs['track']['lineno']=941;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return range['insertNode']($$new);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_594_err){if (!$p['isinstance']($pyjs_dbg_594_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_594_err);}throw $pyjs_dbg_594_err;
}})();
			}
			$pyjs['track']['lineno']=943;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['printFunc']([(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('%s done', tagName);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_595_err){if (!$p['isinstance']($pyjs_dbg_595_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_595_err);}throw $pyjs_dbg_595_err;
}})()], 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_596_err){if (!$p['isinstance']($pyjs_dbg_596_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_596_err);}throw $pyjs_dbg_596_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['tagName']]);
		$cls_definition['toggleSelection'] = $method;
		$pyjs['track']['lineno']=945;
		$method = $pyjs__bind_method2('execCommand', function(commandName, valueArgument) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				commandName = arguments[1];
				valueArgument = arguments[2];
			}
			if (typeof valueArgument == 'undefined') valueArgument=arguments['callee']['__args__'][4][1];

			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':945};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=945;
			$pyjs['track']['lineno']=950;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((valueArgument === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_597_err){if (!$p['isinstance']($pyjs_dbg_597_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_597_err);}throw $pyjs_dbg_597_err;
}})()) {
				$pyjs['track']['lineno']=951;
				valueArgument = 'null';
			}
			else {
				$pyjs['track']['lineno']=953;
				valueArgument = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('"%s"', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str'](valueArgument);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_598_err){if (!$p['isinstance']($pyjs_dbg_598_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_598_err);}throw $pyjs_dbg_598_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_599_err){if (!$p['isinstance']($pyjs_dbg_599_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_599_err);}throw $pyjs_dbg_599_err;
}})();
			}
			$pyjs['track']['lineno']=955;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['printFunc']([(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('execCommand("%s", false, %s)', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple']([commandName, valueArgument]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_600_err){if (!$p['isinstance']($pyjs_dbg_600_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_600_err);}throw $pyjs_dbg_600_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_601_err){if (!$p['isinstance']($pyjs_dbg_601_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_601_err);}throw $pyjs_dbg_601_err;
}})()], 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_602_err){if (!$p['isinstance']($pyjs_dbg_602_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_602_err);}throw $pyjs_dbg_602_err;
}})();
			$pyjs['track']['lineno']=956;
			$pyjs['track']['lineno']=956;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (typeof eval == "undefined"?$m['eval']:eval)((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('window.top.document.execCommand("%s", false, %s)', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple']([commandName, valueArgument]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_603_err){if (!$p['isinstance']($pyjs_dbg_603_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_603_err);}throw $pyjs_dbg_603_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_604_err){if (!$p['isinstance']($pyjs_dbg_604_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_604_err);}throw $pyjs_dbg_604_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_605_err){if (!$p['isinstance']($pyjs_dbg_605_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_605_err);}throw $pyjs_dbg_605_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_606_err){if (!$p['isinstance']($pyjs_dbg_606_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_606_err);}throw $pyjs_dbg_606_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['commandName'],['valueArgument', null]]);
		$cls_definition['execCommand'] = $method;
		$pyjs['track']['lineno']=884;
		var $bases = new Array($p['getattr']($m['html5'], 'Div'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Editor', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=959;
	$m['Wysiwyg'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.wysiwyg';
		$pyjs['track']['lineno']=960;
		$method = $pyjs__bind_method2('__init__', function(editHtml, actionBarHint) {
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
				editHtml = arguments[1];
				actionBarHint = arguments[2];
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
				if (typeof actionBarHint != 'undefined') {
					if (actionBarHint !== null && typeof actionBarHint['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = actionBarHint;
						actionBarHint = arguments[3];
					}
				} else 				if (typeof editHtml != 'undefined') {
					if (editHtml !== null && typeof editHtml['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = editHtml;
						editHtml = arguments[3];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[3];
					}
				} else {
				}
			}
			if (typeof actionBarHint == 'undefined') actionBarHint=arguments['callee']['__args__'][4][1];
			var c,$iter26_idx,$iter26_nextval,$add33,$add36,$add34,$add35,$iter26_type,$iter26_array,$iter26_iter,$pyjs__trackstack_size_1;
			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':960};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=960;
			$pyjs['track']['lineno']=961;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['Wysiwyg'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_607_err){if (!$p['isinstance']($pyjs_dbg_607_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_607_err);}throw $pyjs_dbg_607_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_608_err){if (!$p['isinstance']($pyjs_dbg_608_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_608_err);}throw $pyjs_dbg_608_err;
}})();
			$pyjs['track']['lineno']=962;
			self['cursorMovedEvent'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['EventDispatcher']('cursorMoved');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_609_err){if (!$p['isinstance']($pyjs_dbg_609_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_609_err);}throw $pyjs_dbg_609_err;
}})();
			$pyjs['track']['lineno']=963;
			self['saveTextEvent'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['EventDispatcher']('saveText');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_610_err){if (!$p['isinstance']($pyjs_dbg_610_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_610_err);}throw $pyjs_dbg_610_err;
}})();
			$pyjs['track']['lineno']=964;
			self['abortTextEvent'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['EventDispatcher']('abortText');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_611_err){if (!$p['isinstance']($pyjs_dbg_611_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_611_err);}throw $pyjs_dbg_611_err;
}})();
			$pyjs['track']['lineno']=965;
			self['textActions'] = $p['__op_add']($add35=$p['__op_add']($add33=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list'](['style.text.bold', 'style.text.italic']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_612_err){if (!$p['isinstance']($pyjs_dbg_612_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_612_err);}throw $pyjs_dbg_612_err;
}})(),$add34=function(){
				var $iter25_nextval,$iter25_array,$collcomp3,$iter25_iter,$iter25_idx,$pyjs__trackstack_size_1,x,$iter25_type;
	$collcomp3 = $p['list']();
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter25_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['range'](0, 4);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_613_err){if (!$p['isinstance']($pyjs_dbg_613_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_613_err);}throw $pyjs_dbg_613_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_614_err){if (!$p['isinstance']($pyjs_dbg_614_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_614_err);}throw $pyjs_dbg_614_err;
}})();
			$iter25_nextval=$p['__iter_prepare']($iter25_iter,false);
			while (typeof($p['__wrapped_next']($iter25_nextval)['$nextval']) != 'undefined') {
				x = $iter25_nextval['$nextval'];
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $collcomp3['append']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('style.text.h%s', x);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_615_err){if (!$p['isinstance']($pyjs_dbg_615_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_615_err);}throw $pyjs_dbg_615_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_616_err){if (!$p['isinstance']($pyjs_dbg_616_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_616_err);}throw $pyjs_dbg_616_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.wysiwyg';

	return $collcomp3;}()),$add36=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list'](['text.removeformat', 'style.text.justifyCenter', 'style.text.justifyLeft', 'style.text.justifyRight', 'style.text.blockquote', 'text.orderedList', 'text.unorderedList', 'text.indent', 'text.outdent', 'text.image', 'text.link', 'text.table', 'text.flipView', 'text.undo', 'text.redo', 'text.abort', 'text.save']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_617_err){if (!$p['isinstance']($pyjs_dbg_617_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_617_err);}throw $pyjs_dbg_617_err;
}})());
			$pyjs['track']['lineno']=987;
			self['actionbar'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['ActionBar'](null, null, actionBarHint);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_618_err){if (!$p['isinstance']($pyjs_dbg_618_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_618_err);}throw $pyjs_dbg_618_err;
}})();
			$pyjs['track']['lineno']=988;
			self['isWysiwygMode'] = true;
			$pyjs['track']['lineno']=989;
			self['discardNextClickEvent'] = false;
			$pyjs['track']['lineno']=990;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'actionbar'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_619_err){if (!$p['isinstance']($pyjs_dbg_619_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_619_err);}throw $pyjs_dbg_619_err;
}})();
			$pyjs['track']['lineno']=991;
			self['tableDiv'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Div']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_620_err){if (!$p['isinstance']($pyjs_dbg_620_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_620_err);}throw $pyjs_dbg_620_err;
}})();
			$pyjs['track']['lineno']=992;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'tableDiv')['__getitem__']('class')['append']('tableeditor');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_621_err){if (!$p['isinstance']($pyjs_dbg_621_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_621_err);}throw $pyjs_dbg_621_err;
}})();
			$pyjs['track']['lineno']=993;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'tableDiv'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_622_err){if (!$p['isinstance']($pyjs_dbg_622_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_622_err);}throw $pyjs_dbg_622_err;
}})();
			$pyjs['track']['lineno']=994;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter26_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([$m['TableInsertRowBeforeAction'], $m['TableInsertRowAfterAction'], $m['TableInsertColBeforeAction'], $m['TableInsertColAfterAction'], $m['TableRemoveRowAction'], $m['TableRemoveColAction']]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_623_err){if (!$p['isinstance']($pyjs_dbg_623_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_623_err);}throw $pyjs_dbg_623_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_624_err){if (!$p['isinstance']($pyjs_dbg_624_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_624_err);}throw $pyjs_dbg_624_err;
}})();
			$iter26_nextval=$p['__iter_prepare']($iter26_iter,false);
			while (typeof($p['__wrapped_next']($iter26_nextval)['$nextval']) != 'undefined') {
				c = $iter26_nextval['$nextval'];
				$pyjs['track']['lineno']=995;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['tableDiv']['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
				return c();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_625_err){if (!$p['isinstance']($pyjs_dbg_625_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_625_err);}throw $pyjs_dbg_625_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_626_err){if (!$p['isinstance']($pyjs_dbg_626_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_626_err);}throw $pyjs_dbg_626_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=996;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'tableDiv')['__getitem__']('style')['__setitem__']('display', 'none');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_627_err){if (!$p['isinstance']($pyjs_dbg_627_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_627_err);}throw $pyjs_dbg_627_err;
}})();
			$pyjs['track']['lineno']=997;
			self['linkEditor'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['LinkEditor']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_628_err){if (!$p['isinstance']($pyjs_dbg_628_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_628_err);}throw $pyjs_dbg_628_err;
}})();
			$pyjs['track']['lineno']=998;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'linkEditor'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_629_err){if (!$p['isinstance']($pyjs_dbg_629_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_629_err);}throw $pyjs_dbg_629_err;
}})();
			$pyjs['track']['lineno']=999;
			self['imgEditor'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['ImageEditor']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_630_err){if (!$p['isinstance']($pyjs_dbg_630_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_630_err);}throw $pyjs_dbg_630_err;
}})();
			$pyjs['track']['lineno']=1000;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'imgEditor'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_631_err){if (!$p['isinstance']($pyjs_dbg_631_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_631_err);}throw $pyjs_dbg_631_err;
}})();
			$pyjs['track']['lineno']=1002;
			self['editor'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['Editor'](editHtml);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_632_err){if (!$p['isinstance']($pyjs_dbg_632_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_632_err);}throw $pyjs_dbg_632_err;
}})();
			$pyjs['track']['lineno']=1004;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'editor'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_633_err){if (!$p['isinstance']($pyjs_dbg_633_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_633_err);}throw $pyjs_dbg_633_err;
}})();
			$pyjs['track']['lineno']=1005;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['actionbar']['setActions']($p['getattr'](self, 'textActions'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_634_err){if (!$p['isinstance']($pyjs_dbg_634_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_634_err);}throw $pyjs_dbg_634_err;
}})();
			$pyjs['track']['lineno']=1009;
			self['currentImage'] = null;
			$pyjs['track']['lineno']=1010;
			self['cursorImage'] = null;
			$pyjs['track']['lineno']=1011;
			self['lastMousePos'] = null;
			$pyjs['track']['lineno']=1012;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['sinkEvent']('onMouseDown', 'onMouseUp', 'onMouseMove', 'onClick');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_635_err){if (!$p['isinstance']($pyjs_dbg_635_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_635_err);}throw $pyjs_dbg_635_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['editHtml'],['actionBarHint', (function(){try{try{$pyjs['in_try_except'] += 1;
		return $m['translate']('Text Editor');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_636_err){if (!$p['isinstance']($pyjs_dbg_636_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_636_err);}throw $pyjs_dbg_636_err;
}})()]]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=1014;
		$method = $pyjs__bind_method2('flipView', function() {
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
			var $sub22,$sub23,$sub20,$sub21,$sub24,$add83,$add82,$add81,$add80,$add87,$add86,$add85,$add84,$add88,$mul6,$mul28,$mul26,$mul27,$mul24,$mul25,$mul22,$mul23,$mul20,$mul21,$add76,$add77,$add74,$add75,$add72,$add73,$add70,$add71,$add78,$add79,$add65,$add64,$add67,$add66,$add61,$add60,$add63,$add62,$add69,$add68,$sub19,$sub18,$sub17,$sub16,$sub15,$mul17,$mul16,$mul15,$mul14,$add54,$mul12,$mul11,$add57,$add58,$add59,$add48,$mul19,$mul18,$add89,$add49,inStr,$add47,$add46,$add45,$add44,$add43,$add42,$add41,$add40,$add50,$add51,$add52,$add53,$mul9,$mul8,$mul7,$mul13,$mul5,$mul4,$mul3,$add55,$add38,$add39,$add56,$mul10,$add37,htmlStr,indent,indestStr,$add100,$add98,$add99,$add94,$add95,$add96,$add97,$add90,$add91,$add92,$add93,outStr;
			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':1014};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=1014;
			$pyjs['track']['lineno']=1015;
			htmlStr = $p['getattr']($p['getattr']($p['getattr'](self, 'editor'), 'element'), 'innerHTML');
			$pyjs['track']['lineno']=1016;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'isWysiwygMode'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_637_err){if (!$p['isinstance']($pyjs_dbg_637_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_637_err);}throw $pyjs_dbg_637_err;
}})()) {
				$pyjs['track']['lineno']=1017;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['imgEditor']['doClose']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_638_err){if (!$p['isinstance']($pyjs_dbg_638_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_638_err);}throw $pyjs_dbg_638_err;
}})();
				$pyjs['track']['lineno']=1018;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['linkEditor']['doClose']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_639_err){if (!$p['isinstance']($pyjs_dbg_639_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_639_err);}throw $pyjs_dbg_639_err;
}})();
				$pyjs['track']['lineno']=1019;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'tableDiv')['__getitem__']('style')['__setitem__']('display', null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_640_err){if (!$p['isinstance']($pyjs_dbg_640_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_640_err);}throw $pyjs_dbg_640_err;
}})();
				$pyjs['track']['lineno']=1020;
				outStr = '';
				$pyjs['track']['lineno']=1021;
				indent = 0;
				$pyjs['track']['lineno']=1022;
				indestStr = '&nbsp;&nbsp;&nbsp;';
				$pyjs['track']['lineno']=1023;
				inStr = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return htmlStr['$$replace']('&', '&amp;');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_641_err){if (!$p['isinstance']($pyjs_dbg_641_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_641_err);}throw $pyjs_dbg_641_err;
}})()['$$replace']('<', '&lt;');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_642_err){if (!$p['isinstance']($pyjs_dbg_642_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_642_err);}throw $pyjs_dbg_642_err;
}})()['$$replace']('>', '&gt;');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_643_err){if (!$p['isinstance']($pyjs_dbg_643_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_643_err);}throw $pyjs_dbg_643_err;
}})();
				$pyjs['track']['lineno']=1024;
				while ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](inStr);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_644_err){if (!$p['isinstance']($pyjs_dbg_644_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_644_err);}throw $pyjs_dbg_644_err;
}})()) {
					$pyjs['track']['lineno']=1025;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return inStr['startswith']('&lt;div&gt;');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_645_err){if (!$p['isinstance']($pyjs_dbg_645_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_645_err);}throw $pyjs_dbg_645_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_646_err){if (!$p['isinstance']($pyjs_dbg_646_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_646_err);}throw $pyjs_dbg_646_err;
}})()) {
						$pyjs['track']['lineno']=1026;
						outStr = $p['__op_add']($add37=outStr,$add38='<br>');
						$pyjs['track']['lineno']=1027;
						outStr = $p['__op_add']($add39=outStr,$add40=(typeof ($mul3=indestStr)==typeof ($mul4=indent) && typeof $mul3=='number'?
							$mul3*$mul4:
							$p['op_mul']($mul3,$mul4)));
						$pyjs['track']['lineno']=1028;
						indent = $p['__op_add']($add41=indent,$add42=1);
					}
					else if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return inStr['startswith']('&lt;/div&gt;');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_647_err){if (!$p['isinstance']($pyjs_dbg_647_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_647_err);}throw $pyjs_dbg_647_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_648_err){if (!$p['isinstance']($pyjs_dbg_648_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_648_err);}throw $pyjs_dbg_648_err;
}})()) {
						$pyjs['track']['lineno']=1030;
						indent = $p['__op_sub']($sub15=indent,$sub16=1);
						$pyjs['track']['lineno']=1031;
						outStr = $p['__op_add']($add43=outStr,$add44='<br>');
						$pyjs['track']['lineno']=1032;
						outStr = $p['__op_add']($add45=outStr,$add46=(typeof ($mul5=indestStr)==typeof ($mul6=indent) && typeof $mul5=='number'?
							$mul5*$mul6:
							$p['op_mul']($mul5,$mul6)));
					}
					else if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return inStr['startswith']('&lt;br');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_649_err){if (!$p['isinstance']($pyjs_dbg_649_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_649_err);}throw $pyjs_dbg_649_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_650_err){if (!$p['isinstance']($pyjs_dbg_650_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_650_err);}throw $pyjs_dbg_650_err;
}})()) {
						$pyjs['track']['lineno']=1034;
						outStr = $p['__op_add']($add47=outStr,$add48='<br>');
						$pyjs['track']['lineno']=1035;
						outStr = $p['__op_add']($add49=outStr,$add50=(typeof ($mul7=indestStr)==typeof ($mul8=indent) && typeof $mul7=='number'?
							$mul7*$mul8:
							$p['op_mul']($mul7,$mul8)));
					}
					else if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return inStr['startswith']('&lt;table');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_651_err){if (!$p['isinstance']($pyjs_dbg_651_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_651_err);}throw $pyjs_dbg_651_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_652_err){if (!$p['isinstance']($pyjs_dbg_652_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_652_err);}throw $pyjs_dbg_652_err;
}})()) {
						$pyjs['track']['lineno']=1037;
						outStr = $p['__op_add']($add51=outStr,$add52='<br>');
						$pyjs['track']['lineno']=1038;
						outStr = $p['__op_add']($add53=outStr,$add54=(typeof ($mul9=indestStr)==typeof ($mul10=indent) && typeof $mul9=='number'?
							$mul9*$mul10:
							$p['op_mul']($mul9,$mul10)));
						$pyjs['track']['lineno']=1039;
						indent = $p['__op_add']($add55=indent,$add56=1);
					}
					else if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return inStr['startswith']('&lt;/table');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_653_err){if (!$p['isinstance']($pyjs_dbg_653_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_653_err);}throw $pyjs_dbg_653_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_654_err){if (!$p['isinstance']($pyjs_dbg_654_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_654_err);}throw $pyjs_dbg_654_err;
}})()) {
						$pyjs['track']['lineno']=1041;
						indent = $p['__op_sub']($sub17=indent,$sub18=1);
						$pyjs['track']['lineno']=1042;
						outStr = $p['__op_add']($add57=outStr,$add58='<br>');
						$pyjs['track']['lineno']=1043;
						outStr = $p['__op_add']($add59=outStr,$add60=(typeof ($mul11=indestStr)==typeof ($mul12=indent) && typeof $mul11=='number'?
							$mul11*$mul12:
							$p['op_mul']($mul11,$mul12)));
					}
					else if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return inStr['startswith']('&lt;tr');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_655_err){if (!$p['isinstance']($pyjs_dbg_655_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_655_err);}throw $pyjs_dbg_655_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_656_err){if (!$p['isinstance']($pyjs_dbg_656_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_656_err);}throw $pyjs_dbg_656_err;
}})()) {
						$pyjs['track']['lineno']=1045;
						outStr = $p['__op_add']($add61=outStr,$add62='<br>');
						$pyjs['track']['lineno']=1046;
						outStr = $p['__op_add']($add63=outStr,$add64=(typeof ($mul13=indestStr)==typeof ($mul14=indent) && typeof $mul13=='number'?
							$mul13*$mul14:
							$p['op_mul']($mul13,$mul14)));
						$pyjs['track']['lineno']=1047;
						indent = $p['__op_add']($add65=indent,$add66=1);
					}
					else if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return inStr['startswith']('&lt;/tr');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_657_err){if (!$p['isinstance']($pyjs_dbg_657_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_657_err);}throw $pyjs_dbg_657_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_658_err){if (!$p['isinstance']($pyjs_dbg_658_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_658_err);}throw $pyjs_dbg_658_err;
}})()) {
						$pyjs['track']['lineno']=1049;
						indent = $p['__op_sub']($sub19=indent,$sub20=1);
						$pyjs['track']['lineno']=1050;
						outStr = $p['__op_add']($add67=outStr,$add68='<br>');
						$pyjs['track']['lineno']=1051;
						outStr = $p['__op_add']($add69=outStr,$add70=(typeof ($mul15=indestStr)==typeof ($mul16=indent) && typeof $mul15=='number'?
							$mul15*$mul16:
							$p['op_mul']($mul15,$mul16)));
					}
					else if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return inStr['startswith']('&lt;td');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_659_err){if (!$p['isinstance']($pyjs_dbg_659_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_659_err);}throw $pyjs_dbg_659_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_660_err){if (!$p['isinstance']($pyjs_dbg_660_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_660_err);}throw $pyjs_dbg_660_err;
}})()) {
						$pyjs['track']['lineno']=1053;
						outStr = $p['__op_add']($add71=outStr,$add72='<br>');
						$pyjs['track']['lineno']=1054;
						outStr = $p['__op_add']($add73=outStr,$add74=(typeof ($mul17=indestStr)==typeof ($mul18=indent) && typeof $mul17=='number'?
							$mul17*$mul18:
							$p['op_mul']($mul17,$mul18)));
					}
					else if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return inStr['startswith']('&lt;th&gt;');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_661_err){if (!$p['isinstance']($pyjs_dbg_661_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_661_err);}throw $pyjs_dbg_661_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_662_err){if (!$p['isinstance']($pyjs_dbg_662_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_662_err);}throw $pyjs_dbg_662_err;
}})()) {
						$pyjs['track']['lineno']=1056;
						outStr = $p['__op_add']($add75=outStr,$add76='<br>');
						$pyjs['track']['lineno']=1057;
						outStr = $p['__op_add']($add77=outStr,$add78=(typeof ($mul19=indestStr)==typeof ($mul20=indent) && typeof $mul19=='number'?
							$mul19*$mul20:
							$p['op_mul']($mul19,$mul20)));
					}
					else if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return inStr['startswith']('&lt;thead&gt;');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_663_err){if (!$p['isinstance']($pyjs_dbg_663_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_663_err);}throw $pyjs_dbg_663_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_664_err){if (!$p['isinstance']($pyjs_dbg_664_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_664_err);}throw $pyjs_dbg_664_err;
}})()) {
						$pyjs['track']['lineno']=1059;
						outStr = $p['__op_add']($add79=outStr,$add80='<br>');
						$pyjs['track']['lineno']=1060;
						outStr = $p['__op_add']($add81=outStr,$add82=(typeof ($mul21=indestStr)==typeof ($mul22=indent) && typeof $mul21=='number'?
							$mul21*$mul22:
							$p['op_mul']($mul21,$mul22)));
						$pyjs['track']['lineno']=1061;
						indent = $p['__op_add']($add83=indent,$add84=1);
					}
					else if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return inStr['startswith']('&lt;/thead&gt;');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_665_err){if (!$p['isinstance']($pyjs_dbg_665_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_665_err);}throw $pyjs_dbg_665_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_666_err){if (!$p['isinstance']($pyjs_dbg_666_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_666_err);}throw $pyjs_dbg_666_err;
}})()) {
						$pyjs['track']['lineno']=1063;
						indent = $p['__op_sub']($sub21=indent,$sub22=1);
						$pyjs['track']['lineno']=1064;
						outStr = $p['__op_add']($add85=outStr,$add86='<br>');
						$pyjs['track']['lineno']=1065;
						outStr = $p['__op_add']($add87=outStr,$add88=(typeof ($mul23=indestStr)==typeof ($mul24=indent) && typeof $mul23=='number'?
							$mul23*$mul24:
							$p['op_mul']($mul23,$mul24)));
					}
					else if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return inStr['startswith']('&lt;tbody&gt;');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_667_err){if (!$p['isinstance']($pyjs_dbg_667_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_667_err);}throw $pyjs_dbg_667_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_668_err){if (!$p['isinstance']($pyjs_dbg_668_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_668_err);}throw $pyjs_dbg_668_err;
}})()) {
						$pyjs['track']['lineno']=1067;
						outStr = $p['__op_add']($add89=outStr,$add90='<br>');
						$pyjs['track']['lineno']=1068;
						outStr = $p['__op_add']($add91=outStr,$add92=(typeof ($mul25=indestStr)==typeof ($mul26=indent) && typeof $mul25=='number'?
							$mul25*$mul26:
							$p['op_mul']($mul25,$mul26)));
						$pyjs['track']['lineno']=1069;
						indent = $p['__op_add']($add93=indent,$add94=1);
					}
					else if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return inStr['startswith']('&lt;/tbody&gt;');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_669_err){if (!$p['isinstance']($pyjs_dbg_669_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_669_err);}throw $pyjs_dbg_669_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_670_err){if (!$p['isinstance']($pyjs_dbg_670_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_670_err);}throw $pyjs_dbg_670_err;
}})()) {
						$pyjs['track']['lineno']=1071;
						indent = $p['__op_sub']($sub23=indent,$sub24=1);
						$pyjs['track']['lineno']=1072;
						outStr = $p['__op_add']($add95=outStr,$add96='<br>');
						$pyjs['track']['lineno']=1073;
						outStr = $p['__op_add']($add97=outStr,$add98=(typeof ($mul27=indestStr)==typeof ($mul28=indent) && typeof $mul27=='number'?
							$mul27*$mul28:
							$p['op_mul']($mul27,$mul28)));
					}
					$pyjs['track']['lineno']=1074;
					outStr = $p['__op_add']($add99=outStr,$add100=inStr['__getitem__'](0));
					$pyjs['track']['lineno']=1075;
					inStr = $p['__getslice'](inStr, 1, null);
				}
				$pyjs['track']['lineno']=1076;
				$p['getattr']($p['getattr'](self, 'editor'), 'element')['innerHTML'] = outStr;
				$pyjs['track']['lineno']=1077;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['actionbar']['setActions']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list'](['text.flipView']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_671_err){if (!$p['isinstance']($pyjs_dbg_671_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_671_err);}throw $pyjs_dbg_671_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_672_err){if (!$p['isinstance']($pyjs_dbg_672_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_672_err);}throw $pyjs_dbg_672_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=1079;
				htmlStr = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['re']['sub']('<[^>]*?>', '', htmlStr);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_673_err){if (!$p['isinstance']($pyjs_dbg_673_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_673_err);}throw $pyjs_dbg_673_err;
}})();
				$pyjs['track']['lineno']=1080;
				htmlStr = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return htmlStr['$$replace']('&nbsp;', '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_674_err){if (!$p['isinstance']($pyjs_dbg_674_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_674_err);}throw $pyjs_dbg_674_err;
}})()['$$replace']('&nbsp;', '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_675_err){if (!$p['isinstance']($pyjs_dbg_675_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_675_err);}throw $pyjs_dbg_675_err;
}})();
				$pyjs['track']['lineno']=1081;
				$p['getattr']($p['getattr'](self, 'editor'), 'element')['innerHTML'] = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return htmlStr['$$replace']('&lt;', '<');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_676_err){if (!$p['isinstance']($pyjs_dbg_676_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_676_err);}throw $pyjs_dbg_676_err;
}})()['$$replace']('&gt;', '>');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_677_err){if (!$p['isinstance']($pyjs_dbg_677_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_677_err);}throw $pyjs_dbg_677_err;
}})()['$$replace']('&amp;', '&');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_678_err){if (!$p['isinstance']($pyjs_dbg_678_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_678_err);}throw $pyjs_dbg_678_err;
}})();
				$pyjs['track']['lineno']=1082;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['actionbar']['setActions']($p['getattr'](self, 'textActions'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_679_err){if (!$p['isinstance']($pyjs_dbg_679_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_679_err);}throw $pyjs_dbg_679_err;
}})();
			}
			$pyjs['track']['lineno']=1084;
			self['isWysiwygMode'] = !$p['bool']($p['getattr'](self, 'isWysiwygMode'));
			$pyjs['track']['lineno']=1085;
			$pyjs['track']['lineno']=1085;
			var $pyjs__ret = $p['getattr'](self, 'isWysiwygMode');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['flipView'] = $method;
		$pyjs['track']['lineno']=1088;
		$method = $pyjs__bind_method2('saveText', function() {
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

			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':1088};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=1088;
			$pyjs['track']['lineno']=1089;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['saveTextEvent']['fire'](self, $p['getattr']($p['getattr']($p['getattr'](self, 'editor'), 'element'), 'innerHTML'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_680_err){if (!$p['isinstance']($pyjs_dbg_680_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_680_err);}throw $pyjs_dbg_680_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['saveText'] = $method;
		$pyjs['track']['lineno']=1091;
		$method = $pyjs__bind_method2('abortText', function() {
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

			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':1091};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=1091;
			$pyjs['track']['lineno']=1092;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['abortTextEvent']['fire'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_681_err){if (!$p['isinstance']($pyjs_dbg_681_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_681_err);}throw $pyjs_dbg_681_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['abortText'] = $method;
		$pyjs['track']['lineno']=1094;
		$method = $pyjs__bind_method2('onMouseDown', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $sub31,$sub30,$sub28,$sub32,$sub26,$sub27,$sub25,$mul29,$sub29,$and52,node,$and50,$mul30,$and53,offsetLeft,offsetTop,$and51,$mul31,$mul32;
			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':1094};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=1094;
			$pyjs['track']['lineno']=1095;
			self['lastMousePos'] = null;
			$pyjs['track']['lineno']=1096;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq']($p['getattr']($p['getattr'](event, 'target'), 'tagName'), 'IMG'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_682_err){if (!$p['isinstance']($pyjs_dbg_682_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_682_err);}throw $pyjs_dbg_682_err;
}})()) {
				$pyjs['track']['lineno']=1097;
				offsetLeft = $p['__op_sub']($sub25=$p['getattr'](event, 'pageX'),$sub26=$p['getattr']($p['getattr'](event, 'target'), 'offsetLeft'));
				$pyjs['track']['lineno']=1098;
				offsetTop = $p['__op_sub']($sub27=$p['getattr'](event, 'pageY'),$sub28=$p['getattr']($p['getattr'](event, 'target'), 'offsetTop'));
				$pyjs['track']['lineno']=1099;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['getattr']($p['getattr'](event, 'target'), 'offsetParent') !== null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_683_err){if (!$p['isinstance']($pyjs_dbg_683_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_683_err);}throw $pyjs_dbg_683_err;
}})()) {
					$pyjs['track']['lineno']=1100;
					offsetLeft = $p['__op_sub']($sub29=offsetLeft,$sub30=$p['getattr']($p['getattr']($p['getattr'](event, 'target'), 'offsetParent'), 'offsetLeft'));
					$pyjs['track']['lineno']=1101;
					offsetTop = $p['__op_sub']($sub31=offsetTop,$sub32=$p['getattr']($p['getattr']($p['getattr'](event, 'target'), 'offsetParent'), 'offsetTop'));
				}
				$pyjs['track']['lineno']=1102;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($and50=($p['cmp'](offsetLeft, (typeof ($mul29=0.8)==typeof ($mul30=$p['getattr']($p['getattr'](event, 'target'), 'clientWidth')) && typeof $mul29=='number'?
					$mul29*$mul30:
					$p['op_mul']($mul29,$mul30))) == 1))?($p['cmp'](offsetTop, (typeof ($mul31=0.8)==typeof ($mul32=$p['getattr']($p['getattr'](event, 'target'), 'clientHeight')) && typeof $mul31=='number'?
					$mul31*$mul32:
					$p['op_mul']($mul31,$mul32))) == 1):$and50));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_684_err){if (!$p['isinstance']($pyjs_dbg_684_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_684_err);}throw $pyjs_dbg_684_err;
}})()) {
					$pyjs['track']['lineno']=1103;
					self['currentImage'] = $p['getattr'](event, 'target');
				}
				$pyjs['track']['lineno']=1104;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['imgEditor']['doOpen']($p['getattr'](event, 'target'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_685_err){if (!$p['isinstance']($pyjs_dbg_685_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_685_err);}throw $pyjs_dbg_685_err;
}})();
				$pyjs['track']['lineno']=1105;
				self['discardNextClickEvent'] = true;
				$pyjs['track']['lineno']=1106;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return event['preventDefault']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_686_err){if (!$p['isinstance']($pyjs_dbg_686_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_686_err);}throw $pyjs_dbg_686_err;
}})();
				$pyjs['track']['lineno']=1107;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return event['stopPropagation']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_687_err){if (!$p['isinstance']($pyjs_dbg_687_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_687_err);}throw $pyjs_dbg_687_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=1109;
				self['currentImage'] = null;
				$pyjs['track']['lineno']=1110;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['$$super']($m['Wysiwyg'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_688_err){if (!$p['isinstance']($pyjs_dbg_688_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_688_err);}throw $pyjs_dbg_688_err;
}})()['onMouseDown'](event);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_689_err){if (!$p['isinstance']($pyjs_dbg_689_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_689_err);}throw $pyjs_dbg_689_err;
}})();
			}
			$pyjs['track']['lineno']=1112;
			node = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (typeof eval == "undefined"?$m['eval']:eval)('window.top.getSelection().anchorNode');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_690_err){if (!$p['isinstance']($pyjs_dbg_690_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_690_err);}throw $pyjs_dbg_690_err;
}})();
			$pyjs['track']['lineno']=1114;
			while ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and52=node)?!$p['op_eq'](node, $p['getattr']($p['getattr'](self, 'editor'), 'element')):$and52));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_691_err){if (!$p['isinstance']($pyjs_dbg_691_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_691_err);}throw $pyjs_dbg_691_err;
}})()) {
				$pyjs['track']['lineno']=1116;
				node = $p['getattr'](node, 'parentNode');
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onMouseDown'] = $method;
		$pyjs['track']['lineno']=1118;
		$method = $pyjs__bind_method2('onMouseUp', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':1118};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=1118;
			$pyjs['track']['lineno']=1119;
			self['currentImage'] = null;
			$pyjs['track']['lineno']=1120;
			self['lastMousePos'] = null;
			$pyjs['track']['lineno']=1121;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['Wysiwyg'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_692_err){if (!$p['isinstance']($pyjs_dbg_692_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_692_err);}throw $pyjs_dbg_692_err;
}})()['onMouseUp'](event);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_693_err){if (!$p['isinstance']($pyjs_dbg_693_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_693_err);}throw $pyjs_dbg_693_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onMouseUp'] = $method;
		$pyjs['track']['lineno']=1123;
		$method = $pyjs__bind_method2('onMouseMove', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $sub48,$sub40,$sub41,$sub42,$sub43,$sub44,$sub46,$sub47,$sub45,offsetLeft,offsetTop,$sub33,$sub35,$sub34,$sub37,$sub36,$sub39,$sub38,y,$mul34,$and58,$and56,$and57,$and54,$and55,$mul35,x,$mul36,$mul33;
			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':1123};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=1123;
			$pyjs['track']['lineno']=1124;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq']($p['getattr']($p['getattr'](event, 'target'), 'tagName'), 'IMG'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_694_err){if (!$p['isinstance']($pyjs_dbg_694_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_694_err);}throw $pyjs_dbg_694_err;
}})()) {
				$pyjs['track']['lineno']=1125;
				offsetLeft = $p['__op_sub']($sub33=$p['getattr'](event, 'pageX'),$sub34=$p['getattr']($p['getattr'](event, 'target'), 'offsetLeft'));
				$pyjs['track']['lineno']=1126;
				offsetTop = $p['__op_sub']($sub35=$p['getattr'](event, 'pageY'),$sub36=$p['getattr']($p['getattr'](event, 'target'), 'offsetTop'));
				$pyjs['track']['lineno']=1127;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['getattr']($p['getattr'](event, 'target'), 'offsetParent') !== null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_695_err){if (!$p['isinstance']($pyjs_dbg_695_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_695_err);}throw $pyjs_dbg_695_err;
}})()) {
					$pyjs['track']['lineno']=1128;
					offsetLeft = $p['__op_sub']($sub37=offsetLeft,$sub38=$p['getattr']($p['getattr']($p['getattr'](event, 'target'), 'offsetParent'), 'offsetLeft'));
					$pyjs['track']['lineno']=1129;
					offsetTop = $p['__op_sub']($sub39=offsetTop,$sub40=$p['getattr']($p['getattr']($p['getattr'](event, 'target'), 'offsetParent'), 'offsetTop'));
				}
				$pyjs['track']['lineno']=1130;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($and54=($p['cmp'](offsetLeft, (typeof ($mul33=0.8)==typeof ($mul34=$p['getattr']($p['getattr'](event, 'target'), 'clientWidth')) && typeof $mul33=='number'?
					$mul33*$mul34:
					$p['op_mul']($mul33,$mul34))) == 1))?($p['cmp'](offsetTop, (typeof ($mul35=0.8)==typeof ($mul36=$p['getattr']($p['getattr'](event, 'target'), 'clientHeight')) && typeof $mul35=='number'?
					$mul35*$mul36:
					$p['op_mul']($mul35,$mul36))) == 1):$and54));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_696_err){if (!$p['isinstance']($pyjs_dbg_696_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_696_err);}throw $pyjs_dbg_696_err;
}})()) {
					$pyjs['track']['lineno']=1131;
					self['cursorImage'] = $p['getattr'](event, 'target');
					$pyjs['track']['lineno']=1132;
					$p['getattr']($p['getattr'](self, 'cursorImage'), 'style')['cursor'] = 'se-resize';
				}
				else {
					$pyjs['track']['lineno']=1134;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['getattr'](self, 'cursorImage') !== null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_697_err){if (!$p['isinstance']($pyjs_dbg_697_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_697_err);}throw $pyjs_dbg_697_err;
}})()) {
						$pyjs['track']['lineno']=1135;
						$p['getattr']($p['getattr'](self, 'cursorImage'), 'style')['cursor'] = 'default';
						$pyjs['track']['lineno']=1136;
						self['cursorImage'] = null;
					}
				}
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['getattr'](self, 'cursorImage') !== null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_698_err){if (!$p['isinstance']($pyjs_dbg_698_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_698_err);}throw $pyjs_dbg_698_err;
}})()) {
				$pyjs['track']['lineno']=1138;
				$p['getattr']($p['getattr'](self, 'cursorImage'), 'style')['cursor'] = 'default';
				$pyjs['track']['lineno']=1139;
				self['cursorImage'] = null;
			}
			$pyjs['track']['lineno']=1140;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and56=($p['getattr'](self, 'currentImage') !== null))?($p['bool']($and57=$p['op_eq']($p['getattr']($p['getattr'](event, 'target'), 'tagName'), 'IMG'))?$p['op_eq']($p['getattr'](self, 'currentImage'), $p['getattr'](event, 'target')):$and57):$and56));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_699_err){if (!$p['isinstance']($pyjs_dbg_699_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_699_err);}throw $pyjs_dbg_699_err;
}})()) {
				$pyjs['track']['lineno']=1141;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['getattr'](self, 'lastMousePos') === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_700_err){if (!$p['isinstance']($pyjs_dbg_700_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_700_err);}throw $pyjs_dbg_700_err;
}})()) {
					$pyjs['track']['lineno']=1142;
					self['lastMousePos'] = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([$p['getattr'](event, 'x'), $p['getattr'](event, 'y')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_701_err){if (!$p['isinstance']($pyjs_dbg_701_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_701_err);}throw $pyjs_dbg_701_err;
}})();
					$pyjs['track']['lineno']=1143;
					$pyjs['track']['lineno']=1143;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=1144;
				var $tupleassign1 = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['__ass_unpack']($p['getattr'](self, 'lastMousePos'), 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_702_err){if (!$p['isinstance']($pyjs_dbg_702_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_702_err);}throw $pyjs_dbg_702_err;
}})();
				x = $tupleassign1[0];
				y = $tupleassign1[1];
				$pyjs['track']['lineno']=1145;
				self['lastMousePos'] = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$p['getattr'](event, 'x'), $p['getattr'](event, 'y')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_703_err){if (!$p['isinstance']($pyjs_dbg_703_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_703_err);}throw $pyjs_dbg_703_err;
}})();
				$pyjs['track']['lineno']=1146;
				$p['getattr'](event, 'target')['width'] = $p['__op_sub']($sub43=$p['getattr']($p['getattr'](event, 'target'), 'clientWidth'),$sub44=$p['__op_sub']($sub41=x,$sub42=$p['getattr'](event, 'x')));
				$pyjs['track']['lineno']=1147;
				$p['getattr'](event, 'target')['height'] = $p['__op_sub']($sub47=$p['getattr']($p['getattr'](event, 'target'), 'clientHeight'),$sub48=$p['__op_sub']($sub45=y,$sub46=$p['getattr'](event, 'y')));
				$pyjs['track']['lineno']=1148;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return event['preventDefault']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_704_err){if (!$p['isinstance']($pyjs_dbg_704_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_704_err);}throw $pyjs_dbg_704_err;
}})();
				$pyjs['track']['lineno']=1149;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return event['stopPropagation']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_705_err){if (!$p['isinstance']($pyjs_dbg_705_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_705_err);}throw $pyjs_dbg_705_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=1151;
				self['lastMousePos'] = null;
				$pyjs['track']['lineno']=1152;
				self['currentImage'] = null;
				$pyjs['track']['lineno']=1153;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['$$super']($m['Wysiwyg'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_706_err){if (!$p['isinstance']($pyjs_dbg_706_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_706_err);}throw $pyjs_dbg_706_err;
}})()['onMouseMove'](event);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_707_err){if (!$p['isinstance']($pyjs_dbg_707_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_707_err);}throw $pyjs_dbg_707_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onMouseMove'] = $method;
		$pyjs['track']['lineno']=1156;
		$method = $pyjs__bind_method2('onClick', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var node,isEditorTarget,nodeStack,$and59,i,$sub50,$sub49,$and61,$and60,domWdg;
			$pyjs['track']={'module':'widgets.wysiwyg', 'lineno':1156};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.wysiwyg';
			$pyjs['track']['lineno']=1156;
			$pyjs['track']['lineno']=1157;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'discardNextClickEvent'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_708_err){if (!$p['isinstance']($pyjs_dbg_708_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_708_err);}throw $pyjs_dbg_708_err;
}})()) {
				$pyjs['track']['lineno']=1158;
				self['discardNextClickEvent'] = false;
				$pyjs['track']['lineno']=1159;
				$pyjs['track']['lineno']=1159;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=1161;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['Wysiwyg'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_709_err){if (!$p['isinstance']($pyjs_dbg_709_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_709_err);}throw $pyjs_dbg_709_err;
}})()['onClick'](event);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_710_err){if (!$p['isinstance']($pyjs_dbg_710_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_710_err);}throw $pyjs_dbg_710_err;
}})();
			$pyjs['track']['lineno']=1162;
			domWdg = $p['getattr'](event, 'target');
			$pyjs['track']['lineno']=1163;
			isEditorTarget = false;
			$pyjs['track']['lineno']=1165;
			while ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](domWdg);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_711_err){if (!$p['isinstance']($pyjs_dbg_711_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_711_err);}throw $pyjs_dbg_711_err;
}})()) {
				$pyjs['track']['lineno']=1166;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq'](domWdg, $p['getattr']($p['getattr'](self, 'editor'), 'element')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_712_err){if (!$p['isinstance']($pyjs_dbg_712_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_712_err);}throw $pyjs_dbg_712_err;
}})()) {
					$pyjs['track']['lineno']=1167;
					isEditorTarget = true;
					$pyjs['track']['lineno']=1168;
					break;
				}
				$pyjs['track']['lineno']=1169;
				domWdg = $p['getattr'](domWdg, 'parentNode');
			}
			$pyjs['track']['lineno']=1171;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool'](isEditorTarget));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_713_err){if (!$p['isinstance']($pyjs_dbg_713_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_713_err);}throw $pyjs_dbg_713_err;
}})()) {
				$pyjs['track']['lineno']=1172;
				$pyjs['track']['lineno']=1172;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=1174;
			node = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (typeof eval == "undefined"?$m['eval']:eval)('window.top.getSelection().anchorNode');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_714_err){if (!$p['isinstance']($pyjs_dbg_714_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_714_err);}throw $pyjs_dbg_714_err;
}})();
			$pyjs['track']['lineno']=1175;
			nodeStack = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_715_err){if (!$p['isinstance']($pyjs_dbg_715_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_715_err);}throw $pyjs_dbg_715_err;
}})();
			$pyjs['track']['lineno']=1176;
			i = 10;
			$pyjs['track']['lineno']=1179;
			while ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and59=($p['cmp'](i, 0) == 1))?($p['bool']($and60=node)?!$p['op_eq'](node, $p['getattr']($p['getattr'](self, 'editor'), 'element')):$and60):$and59));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_716_err){if (!$p['isinstance']($pyjs_dbg_716_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_716_err);}throw $pyjs_dbg_716_err;
}})()) {
				$pyjs['track']['lineno']=1180;
				i = $p['__op_sub']($sub49=i,$sub50=1);
				$pyjs['track']['lineno']=1181;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return nodeStack['append'](node);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_717_err){if (!$p['isinstance']($pyjs_dbg_717_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_717_err);}throw $pyjs_dbg_717_err;
}})();
				$pyjs['track']['lineno']=1182;
				node = $p['getattr'](node, 'parentNode');
			}
			$pyjs['track']['lineno']=1184;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](function(){
				var $iter27_nextval,$iter27_array,$collcomp4,$iter27_idx,$iter27_iter,$pyjs__trackstack_size_1,x,$iter27_type;
	$collcomp4 = $p['list']();
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter27_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return nodeStack;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_718_err){if (!$p['isinstance']($pyjs_dbg_718_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_718_err);}throw $pyjs_dbg_718_err;
}})();
			$iter27_nextval=$p['__iter_prepare']($iter27_iter,false);
			while (typeof($p['__wrapped_next']($iter27_nextval)['$nextval']) != 'undefined') {
				x = $iter27_nextval['$nextval'];
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $collcomp4['append'](($p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dir'](x);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_719_err){if (!$p['isinstance']($pyjs_dbg_719_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_719_err);}throw $pyjs_dbg_719_err;
}})()['__contains__']('tagName'))? ($p['getattr'](x, 'tagName')) : ('')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_720_err){if (!$p['isinstance']($pyjs_dbg_720_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_720_err);}throw $pyjs_dbg_720_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.wysiwyg';

	return $collcomp4;}()['__contains__']('TABLE'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_721_err){if (!$p['isinstance']($pyjs_dbg_721_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_721_err);}throw $pyjs_dbg_721_err;
}})()) {
				$pyjs['track']['lineno']=1185;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'tableDiv')['__getitem__']('style')['__setitem__']('display', '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_722_err){if (!$p['isinstance']($pyjs_dbg_722_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_722_err);}throw $pyjs_dbg_722_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=1187;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'tableDiv')['__getitem__']('style')['__setitem__']('display', 'none');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_723_err){if (!$p['isinstance']($pyjs_dbg_723_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_723_err);}throw $pyjs_dbg_723_err;
}})();
			}
			$pyjs['track']['lineno']=1189;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['linkEditor']['onCursorMoved'](nodeStack);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_724_err){if (!$p['isinstance']($pyjs_dbg_724_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_724_err);}throw $pyjs_dbg_724_err;
}})();
			$pyjs['track']['lineno']=1190;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['imgEditor']['onCursorMoved'](nodeStack);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_725_err){if (!$p['isinstance']($pyjs_dbg_725_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_725_err);}throw $pyjs_dbg_725_err;
}})();
			$pyjs['track']['lineno']=1191;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['cursorMovedEvent']['fire'](nodeStack);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_726_err){if (!$p['isinstance']($pyjs_dbg_726_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_726_err);}throw $pyjs_dbg_726_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=959;
		var $bases = new Array($p['getattr']($m['html5'], 'Div'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Wysiwyg', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end widgets.wysiwyg */


/* end module: widgets.wysiwyg */


/*
PYJS_DEPS: ['html5', 'widgets.actionbar.ActionBar', 'widgets', 'widgets.actionbar', 'event.EventDispatcher', 'event', 'time.time', 'time', 'priorityqueue.actionDelegateSelector', 'priorityqueue', 're', 'config.conf', 'config', 'widgets.file.FileWidget', 'widgets.file', 'i18n.translate', 'i18n']
*/
