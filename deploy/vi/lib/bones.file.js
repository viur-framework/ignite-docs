/* start module: bones.file */
$pyjs['loaded_modules']['bones.file'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['bones.file']['__was_initialized__']) return $pyjs['loaded_modules']['bones.file'];
	if(typeof $pyjs['loaded_modules']['bones'] == 'undefined' || !$pyjs['loaded_modules']['bones']['__was_initialized__']) $p['___import___']('bones', null);
	var $m = $pyjs['loaded_modules']['bones.file'];
	$m['__repr__'] = function() { return '<module: bones.file>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'bones.file';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['bones']['file'] = $pyjs['loaded_modules']['bones.file'];
	$m.__track_lines__[1] = 'bones.file.py, line 1:\n    # -*- coding: utf-8 -*-';
	$m.__track_lines__[2] = 'bones.file.py, line 2:\n    import html5, utils';
	$m.__track_lines__[3] = 'bones.file.py, line 3:\n    from priorityqueue import editBoneSelector, viewDelegateSelector, extractorDelegateSelector';
	$m.__track_lines__[4] = 'bones.file.py, line 4:\n    from widgets.file import FileWidget, LeafFileWidget';
	$m.__track_lines__[5] = 'bones.file.py, line 5:\n    from config import conf';
	$m.__track_lines__[6] = 'bones.file.py, line 6:\n    from bones.relational import RelationalMultiSelectionBone, RelationalSingleSelectionBone, RelationalMultiSelectionBoneEntry';
	$m.__track_lines__[7] = 'bones.file.py, line 7:\n    from widgets.file import Uploader';
	$m.__track_lines__[8] = 'bones.file.py, line 8:\n    from i18n import translate';
	$m.__track_lines__[9] = 'bones.file.py, line 9:\n    from network import NetworkService';
	$m.__track_lines__[10] = 'bones.file.py, line 10:\n    from widgets.edit import EditWidget';
	$m.__track_lines__[11] = 'bones.file.py, line 11:\n    from pane import Pane';
	$m.__track_lines__[12] = 'bones.file.py, line 12:\n    from bones.base import BaseBoneExtractor';
	$m.__track_lines__[14] = 'bones.file.py, line 14:\n    class FileBoneExtractor(BaseBoneExtractor):';
	$m.__track_lines__[15] = 'bones.file.py, line 15:\n    def __init__(self, modul, boneName, structure):';
	$m.__track_lines__[16] = 'bones.file.py, line 16:\n    super(FileBoneExtractor, self).__init__()';
	$m.__track_lines__[17] = 'bones.file.py, line 17:\n    self.format = "$(dest.name)"';
	$m.__track_lines__[18] = 'bones.file.py, line 18:\n    if "format" in structure[boneName].keys():';
	$m.__track_lines__[19] = 'bones.file.py, line 19:\n    self.format = structure[boneName]["format"]';
	$m.__track_lines__[20] = 'bones.file.py, line 20:\n    self.module = modul';
	$m.__track_lines__[21] = 'bones.file.py, line 21:\n    self.structure = structure';
	$m.__track_lines__[22] = 'bones.file.py, line 22:\n    self.boneName = boneName';
	$m.__track_lines__[24] = 'bones.file.py, line 24:\n    def renderFileentry(self, fileentry):';
	$m.__track_lines__[25] = 'bones.file.py, line 25:\n    origin = eval("window.location.origin")';
	$m.__track_lines__[26] = 'bones.file.py, line 26:\n    return ("%s %s/file/download/%s?download=1&fileName=%s" %';
	$m.__track_lines__[30] = 'bones.file.py, line 30:\n    def render(self, data, field ):';
	$m.__track_lines__[31] = 'bones.file.py, line 31:\n    assert field == self.boneName, "render() was called with field %s, expected %s" % (field,self.boneName)';
	$m.__track_lines__[32] = 'bones.file.py, line 32:\n    if field in data.keys():';
	$m.__track_lines__[33] = 'bones.file.py, line 33:\n    val = data[field]';
	$m.__track_lines__[35] = 'bones.file.py, line 35:\n    val = ""';
	$m.__track_lines__[37] = 'bones.file.py, line 37:\n    if isinstance(val, list):';
	$m.__track_lines__[38] = 'bones.file.py, line 38:\n    result = list()';
	$m.__track_lines__[39] = 'bones.file.py, line 39:\n    for f in val:';
	$m.__track_lines__[40] = 'bones.file.py, line 40:\n    result.append(self.renderFileentry(f))';
	$m.__track_lines__[41] = 'bones.file.py, line 41:\n    return ", ".join(result)';
	$m.__track_lines__[43] = 'bones.file.py, line 43:\n    return self.renderFileentry(val)';
	$m.__track_lines__[44] = 'bones.file.py, line 44:\n    return val';
	$m.__track_lines__[47] = 'bones.file.py, line 47:\n    class FileHref( html5.A ):';
	$m.__track_lines__[54] = 'bones.file.py, line 54:\n    def onAttach(self):';
	$m.__track_lines__[55] = 'bones.file.py, line 55:\n    super( FileHref, self ).onAttach()';
	$m.__track_lines__[56] = 'bones.file.py, line 56:\n    self.sinkEvent("onClick")';
	$m.__track_lines__[58] = 'bones.file.py, line 58:\n    def onClick(self, event):';
	$m.__track_lines__[59] = 'bones.file.py, line 59:\n    if isinstance( self.parent(), html5.Td ):';
	$m.__track_lines__[60] = 'bones.file.py, line 60:\n    event.preventDefault()';
	$m.__track_lines__[61] = 'bones.file.py, line 61:\n    event.stopPropagation()';
	$m.__track_lines__[64] = 'bones.file.py, line 64:\n    class FileViewBoneDelegate(object):';
	$m.__track_lines__[66] = 'bones.file.py, line 66:\n    def __init__(self, modul, boneName, structure):';
	$m.__track_lines__[67] = 'bones.file.py, line 67:\n    super(FileViewBoneDelegate, self).__init__()';
	$m.__track_lines__[68] = 'bones.file.py, line 68:\n    self.format = "$(name)"';
	$m.__track_lines__[70] = 'bones.file.py, line 70:\n    if "format" in structure[boneName].keys():';
	$m.__track_lines__[71] = 'bones.file.py, line 71:\n    self.format = structure[boneName]["format"]';
	$m.__track_lines__[73] = 'bones.file.py, line 73:\n    self.module = modul';
	$m.__track_lines__[74] = 'bones.file.py, line 74:\n    self.structure = structure';
	$m.__track_lines__[75] = 'bones.file.py, line 75:\n    self.boneName = boneName';
	$m.__track_lines__[77] = 'bones.file.py, line 77:\n    def renderFileentry(self, fileEntry):';
	$m.__track_lines__[78] = 'bones.file.py, line 78:\n    if not "dest" in fileEntry.keys():';
	$m.__track_lines__[79] = 'bones.file.py, line 79:\n    return None';
	$m.__track_lines__[81] = 'bones.file.py, line 81:\n    fileEntry = fileEntry["dest"]';
	$m.__track_lines__[83] = 'bones.file.py, line 83:\n    if not "name" in fileEntry.keys() and not "dlkey" in fileEntry.keys():';
	$m.__track_lines__[84] = 'bones.file.py, line 84:\n    return None';
	$m.__track_lines__[86] = 'bones.file.py, line 86:\n    adiv=FileHref()  #Fixme: We need a better method to accomplish this';
	$m.__track_lines__[87] = 'bones.file.py, line 87:\n    adiv["Title"] = str(fileEntry["name"])';
	$m.__track_lines__[88] = 'bones.file.py, line 88:\n    if "mimetype" in fileEntry.keys():';
	$m.__track_lines__[89] = 'bones.file.py, line 89:\n    try:';
	$m.__track_lines__[90] = 'bones.file.py, line 90:\n    ftype, fformat = fileEntry["mimetype"].split("/")';
	$m.__track_lines__[91] = 'bones.file.py, line 91:\n    adiv["class"].append("type_%s" % ftype )';
	$m.__track_lines__[92] = 'bones.file.py, line 92:\n    adiv["class"].append("format_%s" % fformat )';
	$m.__track_lines__[94] = 'bones.file.py, line 94:\n    pass';
	$m.__track_lines__[96] = 'bones.file.py, line 96:\n    if utils.getImagePreview( fileEntry ):';
	$m.__track_lines__[97] = 'bones.file.py, line 97:\n    aimg=html5.Img()';
	$m.__track_lines__[98] = 'bones.file.py, line 98:\n    aimg["src"] = utils.getImagePreview( fileEntry )';
	$m.__track_lines__[99] = 'bones.file.py, line 99:\n    aimg["alt"] = fileEntry["name"]';
	$m.__track_lines__[100] = 'bones.file.py, line 100:\n    adiv.appendChild(aimg)';
	$m.__track_lines__[102] = 'bones.file.py, line 102:\n    aspan=html5.Span()';
	$m.__track_lines__[103] = 'bones.file.py, line 103:\n    aspan.appendChild(html5.TextNode(str(fileEntry.get("name", ""))))#fixme: formatstring!';
	$m.__track_lines__[105] = 'bones.file.py, line 105:\n    adiv.appendChild(aspan)';
	$m.__track_lines__[106] = 'bones.file.py, line 106:\n    adiv["class"].append("fileBoneViewCell")';
	$m.__track_lines__[107] = 'bones.file.py, line 107:\n    adiv["draggable"]=True';
	$m.__track_lines__[108] = 'bones.file.py, line 108:\n    metamime="application/octet-stream"';
	$m.__track_lines__[110] = 'bones.file.py, line 110:\n    if "mimetype" in fileEntry.keys():';
	$m.__track_lines__[111] = 'bones.file.py, line 111:\n    metamime=str(fileEntry["mimetype"])';
	$m.__track_lines__[113] = 'bones.file.py, line 113:\n    adiv["download"]="%s:%s:/file/download/%s?download=1&fileName=%s" % (metamime, str(fileEntry["name"]),';
	$m.__track_lines__[115] = 'bones.file.py, line 115:\n    adiv["href"]="/file/download/%s?download=1&fileName=%s" % (str(fileEntry["dlkey"]), str(fileEntry["name"]))';
	$m.__track_lines__[116] = 'bones.file.py, line 116:\n    return adiv';
	$m.__track_lines__[118] = 'bones.file.py, line 118:\n    def render(self, data, field ):';
	$m.__track_lines__[119] = 'bones.file.py, line 119:\n    assert field == self.boneName, "render() was called with field %s, expected %s" % (field,self.boneName)';
	$m.__track_lines__[121] = 'bones.file.py, line 121:\n    if field in data.keys():';
	$m.__track_lines__[122] = 'bones.file.py, line 122:\n    val = data[field]';
	$m.__track_lines__[124] = 'bones.file.py, line 124:\n    val = ""';
	$m.__track_lines__[126] = 'bones.file.py, line 126:\n    if isinstance(val, list):';
	$m.__track_lines__[128] = 'bones.file.py, line 128:\n    cell = html5.Div()';
	$m.__track_lines__[130] = 'bones.file.py, line 130:\n    for f in val:';
	$m.__track_lines__[131] = 'bones.file.py, line 131:\n    if cell.children():';
	$m.__track_lines__[132] = 'bones.file.py, line 132:\n    cell.appendChild(html5.TextNode(", "))';
	$m.__track_lines__[134] = 'bones.file.py, line 134:\n    cell.appendChild(self.renderFileentry(f))';
	$m.__track_lines__[136] = 'bones.file.py, line 136:\n    return cell';
	$m.__track_lines__[139] = 'bones.file.py, line 139:\n    return self.renderFileentry(val)';
	$m.__track_lines__[141] = 'bones.file.py, line 141:\n    if val:';
	$m.__track_lines__[142] = 'bones.file.py, line 142:\n    return self.renderFileentry(val)';
	$m.__track_lines__[144] = 'bones.file.py, line 144:\n    return html5.Div()';
	$m.__track_lines__[146] = 'bones.file.py, line 146:\n    class FileMultiSelectionBoneEntry(RelationalMultiSelectionBoneEntry):';
	$m.__track_lines__[147] = 'bones.file.py, line 147:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[148] = 'bones.file.py, line 148:\n    super(FileMultiSelectionBoneEntry, self).__init__(*args, **kwargs)';
	$m.__track_lines__[149] = 'bones.file.py, line 149:\n    self["class"].append("fileentry")';
	$m.__track_lines__[151] = 'bones.file.py, line 151:\n    if utils.getImagePreview( self.data ) is not None:';
	$m.__track_lines__[152] = 'bones.file.py, line 152:\n    img = html5.Img()';
	$m.__track_lines__[153] = 'bones.file.py, line 153:\n    img["src"] = utils.getImagePreview( self.data )';
	$m.__track_lines__[154] = 'bones.file.py, line 154:\n    img["class"].append("previewimg")';
	$m.__track_lines__[155] = 'bones.file.py, line 155:\n    self.appendChild(img)';
	$m.__track_lines__[157] = 'bones.file.py, line 157:\n    self.element.removeChild(img.element)';
	$m.__track_lines__[158] = 'bones.file.py, line 158:\n    self.element.insertBefore(img.element, self.element.children.item(0))';
	$m.__track_lines__[160] = 'bones.file.py, line 160:\n    def fetchEntry(self, key):';
	$m.__track_lines__[161] = 'bones.file.py, line 161:\n    NetworkService.request(self.module,"view/leaf/"+key,';
	$m.__track_lines__[164] = 'bones.file.py, line 164:\n    def onEdit(self, *args, **kwargs):';
	$m.__track_lines__[168] = 'bones.file.py, line 168:\n    pane = Pane(translate("Edit"), closeable=True, iconClasses=[ "modul_%s" % self.parent.destModule,';
	$m.__track_lines__[170] = 'bones.file.py, line 170:\n    conf["mainWindow"].stackPane(pane, focus=True)';
	$m.__track_lines__[172] = 'bones.file.py, line 172:\n    try:';
	$m.__track_lines__[173] = 'bones.file.py, line 173:\n    edwg = EditWidget(self.parent.destModule, EditWidget.appTree, key=self.data["dest"]["key"], skelType="leaf")';
	$m.__track_lines__[174] = 'bones.file.py, line 174:\n    pane.addWidget(edwg)';
	$m.__track_lines__[176] = 'bones.file.py, line 176:\n    conf["mainWindow"].removePane(pane)';
	$m.__track_lines__[178] = 'bones.file.py, line 178:\n    class FileMultiSelectionBone( RelationalMultiSelectionBone ):';
	$m.__track_lines__[180] = 'bones.file.py, line 180:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[181] = 'bones.file.py, line 181:\n    super(FileMultiSelectionBone, self).__init__( *args, **kwargs )';
	$m.__track_lines__[182] = 'bones.file.py, line 182:\n    self.sinkEvent("onDragOver","onDrop")';
	$m.__track_lines__[183] = 'bones.file.py, line 183:\n    self["class"].append("supports_upload")';
	$m.__track_lines__[185] = 'bones.file.py, line 185:\n    def onDragOver(self, event):';
	$m.__track_lines__[186] = 'bones.file.py, line 186:\n    super(FileMultiSelectionBone,self).onDragOver(event)';
	$m.__track_lines__[187] = 'bones.file.py, line 187:\n    event.preventDefault()';
	$m.__track_lines__[188] = 'bones.file.py, line 188:\n    event.stopPropagation()';
	$m.__track_lines__[190] = 'bones.file.py, line 190:\n    def onDrop(self, event):';
	$m.__track_lines__[191] = 'bones.file.py, line 191:\n    event.preventDefault()';
	$m.__track_lines__[192] = 'bones.file.py, line 192:\n    event.stopPropagation()';
	$m.__track_lines__[193] = 'bones.file.py, line 193:\n    files = event.dataTransfer.files';
	$m.__track_lines__[194] = 'bones.file.py, line 194:\n    for x in range(0,files.length):';
	$m.__track_lines__[195] = 'bones.file.py, line 195:\n    ul = Uploader(files.item(x), None )';
	$m.__track_lines__[196] = 'bones.file.py, line 196:\n    ul.uploadSuccess.register( self )';
	$m.__track_lines__[198] = 'bones.file.py, line 198:\n    def onUploadSuccess(self, uploader, file ):';
	$m.__track_lines__[199] = 'bones.file.py, line 199:\n    self.setSelection([{"dest": file,"rel":{}}])';
	$m.__track_lines__[201] = 'bones.file.py, line 201:\n    def onShowSelector(self, *args, **kwargs):';
	$m.__track_lines__[205] = 'bones.file.py, line 205:\n    currentSelector = FileWidget(self.destModule, isSelector="leaf")';
	$m.__track_lines__[206] = 'bones.file.py, line 206:\n    currentSelector.selectionReturnEvent.register(self)';
	$m.__track_lines__[207] = 'bones.file.py, line 207:\n    conf["mainWindow"].stackWidget(currentSelector)';
	$m.__track_lines__[208] = 'bones.file.py, line 208:\n    self.parent()["class"].append("is_active")';
	$m.__track_lines__[210] = 'bones.file.py, line 210:\n    def onSelectionReturn(self, table, selection ):';
	$m.__track_lines__[214] = 'bones.file.py, line 214:\n    hasValidSelection = False';
	$m.__track_lines__[215] = 'bones.file.py, line 215:\n    for s in selection:';
	$m.__track_lines__[216] = 'bones.file.py, line 216:\n    if isinstance( s, LeafFileWidget ):';
	$m.__track_lines__[217] = 'bones.file.py, line 217:\n    hasValidSelection = True';
	$m.__track_lines__[218] = 'bones.file.py, line 218:\n    break';
	$m.__track_lines__[219] = "bones.file.py, line 219:\n    if not hasValidSelection: #Its just a folder that's been activated";
	$m.__track_lines__[220] = 'bones.file.py, line 220:\n    return';
	$m.__track_lines__[221] = 'bones.file.py, line 221:\n    self.setSelection( [{"dest": x.data, "rel": {}} for x in selection if isinstance(x, LeafFileWidget)] )';
	$m.__track_lines__[223] = 'bones.file.py, line 223:\n    def setSelection(self, selection):';
	$m.__track_lines__[229] = 'bones.file.py, line 229:\n    if selection is None:';
	$m.__track_lines__[230] = 'bones.file.py, line 230:\n    return';
	$m.__track_lines__[232] = 'bones.file.py, line 232:\n    for data in selection:';
	$m.__track_lines__[233] = 'bones.file.py, line 233:\n    entry = FileMultiSelectionBoneEntry(self, self.destModule, data, using=self.using, errorInfo={})';
	$m.__track_lines__[234] = 'bones.file.py, line 234:\n    self.addEntry( entry )';
	$m.__track_lines__[236] = 'bones.file.py, line 236:\n    class FileSingleSelectionBone( RelationalSingleSelectionBone ):';
	$m.__track_lines__[238] = 'bones.file.py, line 238:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[239] = 'bones.file.py, line 239:\n    super(FileSingleSelectionBone, self).__init__( *args, **kwargs )';
	$m.__track_lines__[240] = 'bones.file.py, line 240:\n    self.sinkEvent("onDragOver","onDrop")';
	$m.__track_lines__[241] = 'bones.file.py, line 241:\n    self["class"].append("supports_upload")';
	$m.__track_lines__[242] = 'bones.file.py, line 242:\n    self.previewImg = html5.Img()';
	$m.__track_lines__[243] = 'bones.file.py, line 243:\n    self.previewImg["class"].append("previewimg")';
	$m.__track_lines__[244] = 'bones.file.py, line 244:\n    self.appendChild( self.previewImg )';
	$m.__track_lines__[246] = 'bones.file.py, line 246:\n    def onDragOver(self, event):';
	$m.__track_lines__[247] = 'bones.file.py, line 247:\n    super(FileSingleSelectionBone,self).onDragOver(event)';
	$m.__track_lines__[248] = 'bones.file.py, line 248:\n    event.preventDefault()';
	$m.__track_lines__[249] = 'bones.file.py, line 249:\n    event.stopPropagation()';
	$m.__track_lines__[251] = 'bones.file.py, line 251:\n    def onDrop(self, event):';
	$m.__track_lines__[252] = 'bones.file.py, line 252:\n    event.preventDefault()';
	$m.__track_lines__[253] = 'bones.file.py, line 253:\n    event.stopPropagation()';
	$m.__track_lines__[254] = 'bones.file.py, line 254:\n    files = event.dataTransfer.files';
	$m.__track_lines__[256] = 'bones.file.py, line 256:\n    if files.length > 1:';
	$m.__track_lines__[257] = 'bones.file.py, line 257:\n    conf["mainWindow"].log("error",translate("You cannot drop more than one file here!"))';
	$m.__track_lines__[258] = 'bones.file.py, line 258:\n    return';
	$m.__track_lines__[260] = 'bones.file.py, line 260:\n    for x in range(0,files.length):';
	$m.__track_lines__[261] = 'bones.file.py, line 261:\n    ul = Uploader(files.item(x), None )';
	$m.__track_lines__[262] = 'bones.file.py, line 262:\n    ul.uploadSuccess.register( self )';
	$m.__track_lines__[264] = 'bones.file.py, line 264:\n    def onUploadSuccess(self, uploader, file):';
	$m.__track_lines__[265] = 'bones.file.py, line 265:\n    self.setSelection({"dest": file, "rel":{}})';
	$m.__track_lines__[267] = 'bones.file.py, line 267:\n    def onShowSelector(self, *args, **kwargs):';
	$m.__track_lines__[271] = 'bones.file.py, line 271:\n    currentSelector = FileWidget( self.destModule, isSelector="leaf" )';
	$m.__track_lines__[272] = 'bones.file.py, line 272:\n    currentSelector.selectionReturnEvent.register( self )';
	$m.__track_lines__[273] = 'bones.file.py, line 273:\n    conf["mainWindow"].stackWidget( currentSelector )';
	$m.__track_lines__[274] = 'bones.file.py, line 274:\n    self.parent()["class"].append("is_active")';
	$m.__track_lines__[276] = 'bones.file.py, line 276:\n    def onSelectionReturn(self, table, selection ):';
	$m.__track_lines__[280] = 'bones.file.py, line 280:\n    hasValidSelection = False';
	$m.__track_lines__[281] = 'bones.file.py, line 281:\n    for s in selection:';
	$m.__track_lines__[282] = 'bones.file.py, line 282:\n    if isinstance( s, LeafFileWidget ):';
	$m.__track_lines__[283] = 'bones.file.py, line 283:\n    hasValidSelection = True';
	$m.__track_lines__[284] = 'bones.file.py, line 284:\n    break';
	$m.__track_lines__[285] = "bones.file.py, line 285:\n    if not hasValidSelection: #Its just a folder that's been activated";
	$m.__track_lines__[286] = 'bones.file.py, line 286:\n    return';
	$m.__track_lines__[287] = 'bones.file.py, line 287:\n    self.setSelection([{"dest": x.data for x in selection if isinstance(x,LeafFileWidget)}][0] )';
	$m.__track_lines__[289] = 'bones.file.py, line 289:\n    def onEdit(self, *args, **kwargs):';
	$m.__track_lines__[293] = 'bones.file.py, line 293:\n    if not self.selection:';
	$m.__track_lines__[294] = 'bones.file.py, line 294:\n    return';
	$m.__track_lines__[296] = 'bones.file.py, line 296:\n    pane = Pane(translate("Edit"), closeable=True, iconClasses=[ "modul_%s" % self.destModule,';
	$m.__track_lines__[298] = 'bones.file.py, line 298:\n    conf["mainWindow"].stackPane(pane, focus=True)';
	$m.__track_lines__[300] = 'bones.file.py, line 300:\n    try:';
	$m.__track_lines__[301] = 'bones.file.py, line 301:\n    edwg = EditWidget(self.destModule, EditWidget.appTree, key=self.selection["dest"]["key"], skelType="leaf")';
	$m.__track_lines__[302] = 'bones.file.py, line 302:\n    pane.addWidget(edwg)';
	$m.__track_lines__[304] = 'bones.file.py, line 304:\n    conf["mainWindow"].removePane(pane)';
	$m.__track_lines__[306] = 'bones.file.py, line 306:\n    def setSelection(self, selection):';
	$m.__track_lines__[312] = 'bones.file.py, line 312:\n    self.selection = selection';
	$m.__track_lines__[314] = 'bones.file.py, line 314:\n    if selection:';
	$m.__track_lines__[315] = 'bones.file.py, line 315:\n    NetworkService.request(self.destModule, "view/leaf/%s" % selection["dest"]["key"],';
	$m.__track_lines__[318] = 'bones.file.py, line 318:\n    self.selectionTxt["value"] = translate("Loading...")';
	$m.__track_lines__[320] = 'bones.file.py, line 320:\n    previewUrl = utils.getImagePreview(self.selection["dest"])';
	$m.__track_lines__[322] = 'bones.file.py, line 322:\n    if previewUrl:';
	$m.__track_lines__[323] = 'bones.file.py, line 323:\n    self.previewImg["src"] = previewUrl';
	$m.__track_lines__[324] = 'bones.file.py, line 324:\n    self.previewImg["style"]["display"] = ""';
	$m.__track_lines__[326] = 'bones.file.py, line 326:\n    self.previewImg["style"]["display"] = "none"';
	$m.__track_lines__[328] = 'bones.file.py, line 328:\n    self.selectionTxt["value"] = ""';
	$m.__track_lines__[329] = 'bones.file.py, line 329:\n    self.previewImg["style"]["display"] = "none"';
	$m.__track_lines__[331] = 'bones.file.py, line 331:\n    self.updateButtons()';
	$m.__track_lines__[335] = 'bones.file.py, line 335:\n    def CheckForFileBoneSingleSelection( moduleName, boneName, skelStructure, *args, **kwargs ):';
	$m.__track_lines__[336] = 'bones.file.py, line 336:\n    isMultiple = "multiple" in skelStructure[boneName].keys() and skelStructure[boneName]["multiple"]';
	$m.__track_lines__[337] = 'bones.file.py, line 337:\n    return CheckForFileBone( moduleName, boneName, skelStructure ) and not isMultiple';
	$m.__track_lines__[339] = 'bones.file.py, line 339:\n    def CheckForFileBoneMultiSelection( moduleName, boneName, skelStructure, *args, **kwargs ):';
	$m.__track_lines__[340] = 'bones.file.py, line 340:\n    isMultiple = "multiple" in skelStructure[boneName].keys() and skelStructure[boneName]["multiple"]';
	$m.__track_lines__[341] = 'bones.file.py, line 341:\n    return CheckForFileBone( moduleName, boneName, skelStructure ) and isMultiple';
	$m.__track_lines__[343] = 'bones.file.py, line 343:\n    def CheckForFileBone(  moduleName, boneName, skelStucture, *args, **kwargs ):';
	$m.__track_lines__[345] = 'bones.file.py, line 345:\n    return( skelStucture[boneName]["type"].startswith("treeitem.file") )';
	$m.__track_lines__[348] = 'bones.file.py, line 348:\n    editBoneSelector.insert( 5, CheckForFileBoneSingleSelection, FileSingleSelectionBone)';
	$m.__track_lines__[349] = 'bones.file.py, line 349:\n    editBoneSelector.insert( 5, CheckForFileBoneMultiSelection, FileMultiSelectionBone)';
	$m.__track_lines__[350] = 'bones.file.py, line 350:\n    viewDelegateSelector.insert( 3, CheckForFileBone, FileViewBoneDelegate)';
	$m.__track_lines__[351] = 'bones.file.py, line 351:\n    extractorDelegateSelector.insert(3, CheckForFileBone, FileBoneExtractor)';


	$pyjs['track']['module']='bones.file';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=2;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['html5'] = $p['___import___']('html5', 'bones');
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['utils'] = $p['___import___']('utils', 'bones');
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=3;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['editBoneSelector'] = $p['___import___']('priorityqueue.editBoneSelector', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['viewDelegateSelector'] = $p['___import___']('priorityqueue.viewDelegateSelector', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['extractorDelegateSelector'] = $p['___import___']('priorityqueue.extractorDelegateSelector', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=4;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['FileWidget'] = $p['___import___']('widgets.file.FileWidget', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['LeafFileWidget'] = $p['___import___']('widgets.file.LeafFileWidget', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=5;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['conf'] = $p['___import___']('config.conf', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=6;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['RelationalMultiSelectionBone'] = $p['___import___']('bones.relational.RelationalMultiSelectionBone', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['RelationalSingleSelectionBone'] = $p['___import___']('bones.relational.RelationalSingleSelectionBone', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['RelationalMultiSelectionBoneEntry'] = $p['___import___']('bones.relational.RelationalMultiSelectionBoneEntry', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=7;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Uploader'] = $p['___import___']('widgets.file.Uploader', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=8;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['translate'] = $p['___import___']('i18n.translate', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=9;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['NetworkService'] = $p['___import___']('network.NetworkService', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=10;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['EditWidget'] = $p['___import___']('widgets.edit.EditWidget', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=11;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Pane'] = $p['___import___']('pane.Pane', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=12;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['BaseBoneExtractor'] = $p['___import___']('bones.base.BaseBoneExtractor', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=14;
	$m['FileBoneExtractor'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'bones.file';
		$pyjs['track']['lineno']=15;
		$method = $pyjs__bind_method2('__init__', function(modul, boneName, structure) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				modul = arguments[1];
				boneName = arguments[2];
				structure = arguments[3];
			}

			$pyjs['track']={'module':'bones.file', 'lineno':15};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.file';
			$pyjs['track']['lineno']=15;
			$pyjs['track']['lineno']=16;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['FileBoneExtractor'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()['__init__']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs['track']['lineno']=17;
			self['format'] = '$(dest.name)';
			$pyjs['track']['lineno']=18;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return structure['__getitem__'](boneName)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})()['__contains__']('format'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})()) {
				$pyjs['track']['lineno']=19;
				self['format'] = structure['__getitem__'](boneName)['__getitem__']('format');
			}
			$pyjs['track']['lineno']=20;
			self['module'] = modul;
			$pyjs['track']['lineno']=21;
			self['structure'] = structure;
			$pyjs['track']['lineno']=22;
			self['boneName'] = boneName;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['modul'],['boneName'],['structure']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=24;
		$method = $pyjs__bind_method2('renderFileentry', function(fileentry) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				fileentry = arguments[1];
			}
			var origin;
			$pyjs['track']={'module':'bones.file', 'lineno':24};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.file';
			$pyjs['track']['lineno']=24;
			$pyjs['track']['lineno']=25;
			origin = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (typeof eval == "undefined"?$m['eval']:eval)('window.location.origin');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
			$pyjs['track']['lineno']=26;
			$pyjs['track']['lineno']=26;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('%s %s/file/download/%s?download=1&fileName=%s', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple']([fileentry['__getitem__']('dest')['__getitem__']('name'), origin, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['str'](fileentry['__getitem__']('dest')['__getitem__']('dlkey'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['str'](fileentry['__getitem__']('dest')['__getitem__']('name'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['fileentry']]);
		$cls_definition['renderFileentry'] = $method;
		$pyjs['track']['lineno']=30;
		$method = $pyjs__bind_method2('render', function(data, field) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				field = arguments[2];
			}
			var $iter1_nextval,$iter1_type,val,$iter1_idx,f,$iter1_iter,result,$pyjs__trackstack_size_1,$iter1_array;
			$pyjs['track']={'module':'bones.file', 'lineno':30};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.file';
			$pyjs['track']['lineno']=30;
			$pyjs['track']['lineno']=31;
			if (!( $p['op_eq'](field, $p['getattr'](self, 'boneName')) )) {
			   throw $p['AssertionError']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('render() was called with field %s, expected %s', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple']([field, $p['getattr'](self, 'boneName')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})());
			 }
			$pyjs['track']['lineno']=32;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return data['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})()['__contains__'](field));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})()) {
				$pyjs['track']['lineno']=33;
				val = data['__getitem__'](field);
			}
			else {
				$pyjs['track']['lineno']=35;
				val = '';
			}
			$pyjs['track']['lineno']=37;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance'](val, $p['list']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})()) {
				$pyjs['track']['lineno']=38;
				result = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
				$pyjs['track']['lineno']=39;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter1_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return val;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					f = $iter1_nextval['$nextval'];
					$pyjs['track']['lineno']=40;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return result['append']((function(){try{try{$pyjs['in_try_except'] += 1;
					return self['renderFileentry'](f);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='bones.file';
				$pyjs['track']['lineno']=41;
				$pyjs['track']['lineno']=41;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return ', '['join'](result);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance'](val, $p['dict']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})()) {
				$pyjs['track']['lineno']=43;
				$pyjs['track']['lineno']=43;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['renderFileentry'](val);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=44;
			$pyjs['track']['lineno']=44;
			var $pyjs__ret = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['data'],['field']]);
		$cls_definition['render'] = $method;
		$pyjs['track']['lineno']=14;
		var $bases = new Array($m['BaseBoneExtractor']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('FileBoneExtractor', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=47;
	$m['FileHref'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'bones.file';
		$pyjs['track']['lineno']=54;
		$method = $pyjs__bind_method2('onAttach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'bones.file', 'lineno':54};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.file';
			$pyjs['track']['lineno']=54;
			$pyjs['track']['lineno']=55;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['FileHref'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})()['onAttach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
			$pyjs['track']['lineno']=56;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['sinkEvent']('onClick');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onAttach'] = $method;
		$pyjs['track']['lineno']=58;
		$method = $pyjs__bind_method2('onClick', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'bones.file', 'lineno':58};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.file';
			$pyjs['track']['lineno']=58;
			$pyjs['track']['lineno']=59;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance']((function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})(), $p['getattr']($m['html5'], 'Td'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})()) {
				$pyjs['track']['lineno']=60;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return event['preventDefault']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
				$pyjs['track']['lineno']=61;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return event['stopPropagation']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=47;
		var $bases = new Array($p['getattr']($m['html5'], 'A'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('FileHref', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=64;
	$m['FileViewBoneDelegate'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'bones.file';
		$pyjs['track']['lineno']=66;
		$method = $pyjs__bind_method2('__init__', function(modul, boneName, structure) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				modul = arguments[1];
				boneName = arguments[2];
				structure = arguments[3];
			}

			$pyjs['track']={'module':'bones.file', 'lineno':66};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.file';
			$pyjs['track']['lineno']=66;
			$pyjs['track']['lineno']=67;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['FileViewBoneDelegate'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})()['__init__']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
			$pyjs['track']['lineno']=68;
			self['format'] = '$(name)';
			$pyjs['track']['lineno']=70;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return structure['__getitem__'](boneName)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})()['__contains__']('format'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})()) {
				$pyjs['track']['lineno']=71;
				self['format'] = structure['__getitem__'](boneName)['__getitem__']('format');
			}
			$pyjs['track']['lineno']=73;
			self['module'] = modul;
			$pyjs['track']['lineno']=74;
			self['structure'] = structure;
			$pyjs['track']['lineno']=75;
			self['boneName'] = boneName;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['modul'],['boneName'],['structure']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=77;
		$method = $pyjs__bind_method2('renderFileentry', function(fileEntry) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				fileEntry = arguments[1];
			}
			var ftype,adiv,aspan,$and1,$pyjs_try_err,metamime,aimg,fformat,$and2;
			$pyjs['track']={'module':'bones.file', 'lineno':77};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.file';
			$pyjs['track']['lineno']=77;
			$pyjs['track']['lineno']=78;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return fileEntry['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})()['__contains__']('dest')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})()) {
				$pyjs['track']['lineno']=79;
				$pyjs['track']['lineno']=79;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=81;
			fileEntry = fileEntry['__getitem__']('dest');
			$pyjs['track']['lineno']=83;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and1=!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return fileEntry['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})()['__contains__']('name')))?!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return fileEntry['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})()['__contains__']('dlkey')):$and1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})()) {
				$pyjs['track']['lineno']=84;
				$pyjs['track']['lineno']=84;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=86;
			adiv = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['FileHref']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})();
			$pyjs['track']['lineno']=87;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return adiv['__setitem__']('Title', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['str'](fileEntry['__getitem__']('name'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})();
			$pyjs['track']['lineno']=88;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return fileEntry['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})()['__contains__']('mimetype'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})()) {
				$pyjs['track']['lineno']=89;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					try {
						$pyjs['in_try_except'] += 1;
						$pyjs['track']['lineno']=90;
						var $tupleassign1 = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['__ass_unpack']((function(){try{try{$pyjs['in_try_except'] += 1;
						return fileEntry['__getitem__']('mimetype')['$$split']('/');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})(), 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})();
						ftype = $tupleassign1[0];
						fformat = $tupleassign1[1];
						$pyjs['track']['lineno']=91;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return adiv['__getitem__']('class')['append']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['sprintf']('type_%s', ftype);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})();
						$pyjs['track']['lineno']=92;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return adiv['__getitem__']('class')['append']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['sprintf']('format_%s', fformat);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
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
					$pyjs['track']['module']='bones.file';
					if (true) {
						$pyjs['track']['lineno']=94;
					}
				}
			}
			$pyjs['track']['lineno']=96;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['utils']['getImagePreview'](fileEntry);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})()) {
				$pyjs['track']['lineno']=97;
				aimg = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Img']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})();
				$pyjs['track']['lineno']=98;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return aimg['__setitem__']('src', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['utils']['getImagePreview'](fileEntry);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})();
				$pyjs['track']['lineno']=99;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return aimg['__setitem__']('alt', fileEntry['__getitem__']('name'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})();
				$pyjs['track']['lineno']=100;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return adiv['appendChild'](aimg);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})();
			}
			$pyjs['track']['lineno']=102;
			aspan = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Span']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})();
			$pyjs['track']['lineno']=103;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return aspan['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['TextNode']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['str']((function(){try{try{$pyjs['in_try_except'] += 1;
			return fileEntry['get']('name', '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})();
			$pyjs['track']['lineno']=105;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return adiv['appendChild'](aspan);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})();
			$pyjs['track']['lineno']=106;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return adiv['__getitem__']('class')['append']('fileBoneViewCell');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})();
			$pyjs['track']['lineno']=107;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return adiv['__setitem__']('draggable', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})();
			$pyjs['track']['lineno']=108;
			metamime = 'application/octet-stream';
			$pyjs['track']['lineno']=110;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return fileEntry['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})()['__contains__']('mimetype'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})()) {
				$pyjs['track']['lineno']=111;
				metamime = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str'](fileEntry['__getitem__']('mimetype'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})();
			}
			$pyjs['track']['lineno']=113;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return adiv['__setitem__']('download', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('%s:%s:/file/download/%s?download=1&fileName=%s', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple']([metamime, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['str'](fileEntry['__getitem__']('name'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['str'](fileEntry['__getitem__']('dlkey'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['str'](fileEntry['__getitem__']('name'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})();
			$pyjs['track']['lineno']=115;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return adiv['__setitem__']('href', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('/file/download/%s?download=1&fileName=%s', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple']([(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['str'](fileEntry['__getitem__']('dlkey'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['str'](fileEntry['__getitem__']('name'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})();
			$pyjs['track']['lineno']=116;
			$pyjs['track']['lineno']=116;
			var $pyjs__ret = adiv;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['fileEntry']]);
		$cls_definition['renderFileentry'] = $method;
		$pyjs['track']['lineno']=118;
		$method = $pyjs__bind_method2('render', function(data, field) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				field = arguments[2];
			}
			var $iter2_nextval,$iter2_type,val,$iter2_iter,f,cell,$iter2_idx,$pyjs__trackstack_size_1,$iter2_array;
			$pyjs['track']={'module':'bones.file', 'lineno':118};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.file';
			$pyjs['track']['lineno']=118;
			$pyjs['track']['lineno']=119;
			if (!( $p['op_eq'](field, $p['getattr'](self, 'boneName')) )) {
			   throw $p['AssertionError']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('render() was called with field %s, expected %s', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple']([field, $p['getattr'](self, 'boneName')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})());
			 }
			$pyjs['track']['lineno']=121;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return data['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})()['__contains__'](field));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
}})()) {
				$pyjs['track']['lineno']=122;
				val = data['__getitem__'](field);
			}
			else {
				$pyjs['track']['lineno']=124;
				val = '';
			}
			$pyjs['track']['lineno']=126;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance'](val, $p['list']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})()) {
				$pyjs['track']['lineno']=128;
				cell = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Div']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})();
				$pyjs['track']['lineno']=130;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter2_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return val;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_88_err){if (!$p['isinstance']($pyjs_dbg_88_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_88_err);}throw $pyjs_dbg_88_err;
}})();
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					f = $iter2_nextval['$nextval'];
					$pyjs['track']['lineno']=131;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return cell['children']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_89_err){if (!$p['isinstance']($pyjs_dbg_89_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_89_err);}throw $pyjs_dbg_89_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_90_err){if (!$p['isinstance']($pyjs_dbg_90_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_90_err);}throw $pyjs_dbg_90_err;
}})()) {
						$pyjs['track']['lineno']=132;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return cell['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['html5']['TextNode'](', ');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_91_err){if (!$p['isinstance']($pyjs_dbg_91_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_91_err);}throw $pyjs_dbg_91_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_92_err){if (!$p['isinstance']($pyjs_dbg_92_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_92_err);}throw $pyjs_dbg_92_err;
}})();
					}
					$pyjs['track']['lineno']=134;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return cell['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
					return self['renderFileentry'](f);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_93_err){if (!$p['isinstance']($pyjs_dbg_93_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_93_err);}throw $pyjs_dbg_93_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_94_err){if (!$p['isinstance']($pyjs_dbg_94_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_94_err);}throw $pyjs_dbg_94_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='bones.file';
				$pyjs['track']['lineno']=136;
				$pyjs['track']['lineno']=136;
				var $pyjs__ret = cell;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance'](val, $p['dict']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_95_err){if (!$p['isinstance']($pyjs_dbg_95_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_95_err);}throw $pyjs_dbg_95_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_96_err){if (!$p['isinstance']($pyjs_dbg_96_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_96_err);}throw $pyjs_dbg_96_err;
}})()) {
				$pyjs['track']['lineno']=139;
				$pyjs['track']['lineno']=139;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['renderFileentry'](val);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_97_err){if (!$p['isinstance']($pyjs_dbg_97_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_97_err);}throw $pyjs_dbg_97_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=141;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](val);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_98_err){if (!$p['isinstance']($pyjs_dbg_98_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_98_err);}throw $pyjs_dbg_98_err;
}})()) {
				$pyjs['track']['lineno']=142;
				$pyjs['track']['lineno']=142;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['renderFileentry'](val);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_99_err){if (!$p['isinstance']($pyjs_dbg_99_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_99_err);}throw $pyjs_dbg_99_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=144;
			$pyjs['track']['lineno']=144;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Div']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_100_err){if (!$p['isinstance']($pyjs_dbg_100_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_100_err);}throw $pyjs_dbg_100_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['data'],['field']]);
		$cls_definition['render'] = $method;
		$pyjs['track']['lineno']=64;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('FileViewBoneDelegate', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=146;
	$m['FileMultiSelectionBoneEntry'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'bones.file';
		$pyjs['track']['lineno']=147;
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
			var img;
			$pyjs['track']={'module':'bones.file', 'lineno':147};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.file';
			$pyjs['track']['lineno']=147;
			$pyjs['track']['lineno']=148;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['FileMultiSelectionBoneEntry'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_101_err){if (!$p['isinstance']($pyjs_dbg_101_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_101_err);}throw $pyjs_dbg_101_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_102_err){if (!$p['isinstance']($pyjs_dbg_102_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_102_err);}throw $pyjs_dbg_102_err;
}})();
			$pyjs['track']['lineno']=149;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__getitem__']('class')['append']('fileentry');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_103_err){if (!$p['isinstance']($pyjs_dbg_103_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_103_err);}throw $pyjs_dbg_103_err;
}})();
			$pyjs['track']['lineno']=151;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['utils']['getImagePreview']($p['getattr'](self, 'data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_104_err){if (!$p['isinstance']($pyjs_dbg_104_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_104_err);}throw $pyjs_dbg_104_err;
}})() !== null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_105_err){if (!$p['isinstance']($pyjs_dbg_105_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_105_err);}throw $pyjs_dbg_105_err;
}})()) {
				$pyjs['track']['lineno']=152;
				img = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Img']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_106_err){if (!$p['isinstance']($pyjs_dbg_106_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_106_err);}throw $pyjs_dbg_106_err;
}})();
				$pyjs['track']['lineno']=153;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return img['__setitem__']('src', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['utils']['getImagePreview']($p['getattr'](self, 'data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_107_err){if (!$p['isinstance']($pyjs_dbg_107_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_107_err);}throw $pyjs_dbg_107_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_108_err){if (!$p['isinstance']($pyjs_dbg_108_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_108_err);}throw $pyjs_dbg_108_err;
}})();
				$pyjs['track']['lineno']=154;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return img['__getitem__']('class')['append']('previewimg');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_109_err){if (!$p['isinstance']($pyjs_dbg_109_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_109_err);}throw $pyjs_dbg_109_err;
}})();
				$pyjs['track']['lineno']=155;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['appendChild'](img);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_110_err){if (!$p['isinstance']($pyjs_dbg_110_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_110_err);}throw $pyjs_dbg_110_err;
}})();
				$pyjs['track']['lineno']=157;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['element']['removeChild']($p['getattr'](img, 'element'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_111_err){if (!$p['isinstance']($pyjs_dbg_111_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_111_err);}throw $pyjs_dbg_111_err;
}})();
				$pyjs['track']['lineno']=158;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['element']['insertBefore']($p['getattr'](img, 'element'), (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['element']['children']['item'](0);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_112_err){if (!$p['isinstance']($pyjs_dbg_112_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_112_err);}throw $pyjs_dbg_112_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_113_err){if (!$p['isinstance']($pyjs_dbg_113_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_113_err);}throw $pyjs_dbg_113_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=160;
		$method = $pyjs__bind_method2('fetchEntry', function(key) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
			}
			var $add2,$add1;
			$pyjs['track']={'module':'bones.file', 'lineno':160};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.file';
			$pyjs['track']['lineno']=160;
			$pyjs['track']['lineno']=161;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'successHandler':$p['getattr'](self, 'onSelectionDataAvailable'), 'cacheable':true}, $p['getattr'](self, 'module'), $p['__op_add']($add1='view/leaf/',$add2=key)]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_114_err){if (!$p['isinstance']($pyjs_dbg_114_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_114_err);}throw $pyjs_dbg_114_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['key']]);
		$cls_definition['fetchEntry'] = $method;
		$pyjs['track']['lineno']=164;
		$method = $pyjs__bind_method2('onEdit', function() {
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
			var edwg,$pyjs_try_err,pane;
			$pyjs['track']={'module':'bones.file', 'lineno':164};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.file';
			$pyjs['track']['lineno']=164;
			$pyjs['track']['lineno']=168;
			pane = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(null, $m['Pane'], null, null, [{'closeable':true, 'iconClasses':(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('modul_%s', $p['getattr']($p['getattr'](self, 'parent'), 'destModule'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_116_err){if (!$p['isinstance']($pyjs_dbg_116_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_116_err);}throw $pyjs_dbg_116_err;
}})(), 'apptype_list', 'action_edit']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_117_err){if (!$p['isinstance']($pyjs_dbg_117_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_117_err);}throw $pyjs_dbg_117_err;
}})()}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Edit');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_115_err){if (!$p['isinstance']($pyjs_dbg_115_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_115_err);}throw $pyjs_dbg_115_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_118_err){if (!$p['isinstance']($pyjs_dbg_118_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_118_err);}throw $pyjs_dbg_118_err;
}})();
			$pyjs['track']['lineno']=170;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['conf']['__getitem__']('mainWindow'), 'stackPane', null, null, [{'focus':true}, pane]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_119_err){if (!$p['isinstance']($pyjs_dbg_119_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_119_err);}throw $pyjs_dbg_119_err;
}})();
			$pyjs['track']['lineno']=172;
			var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
			try {
				try {
					$pyjs['in_try_except'] += 1;
					$pyjs['track']['lineno']=173;
					edwg = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $pyjs_kwargs_call(null, $m['EditWidget'], null, null, [{'key':$p['getattr'](self, 'data')['__getitem__']('dest')['__getitem__']('key'), 'skelType':'leaf'}, $p['getattr']($p['getattr'](self, 'parent'), 'destModule'), $p['getattr']($m['EditWidget'], 'appTree')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_120_err){if (!$p['isinstance']($pyjs_dbg_120_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_120_err);}throw $pyjs_dbg_120_err;
}})();
					$pyjs['track']['lineno']=174;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return pane['addWidget'](edwg);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_121_err){if (!$p['isinstance']($pyjs_dbg_121_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_121_err);}throw $pyjs_dbg_121_err;
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
				$pyjs['track']['module']='bones.file';
				if (($pyjs_try_err_name == $p['AssertionError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AssertionError'])) {
					$pyjs['track']['lineno']=176;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['conf']['__getitem__']('mainWindow')['removePane'](pane);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_122_err){if (!$p['isinstance']($pyjs_dbg_122_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_122_err);}throw $pyjs_dbg_122_err;
}})();
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['onEdit'] = $method;
		$pyjs['track']['lineno']=146;
		var $bases = new Array($m['RelationalMultiSelectionBoneEntry']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('FileMultiSelectionBoneEntry', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=178;
	$m['FileMultiSelectionBone'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'bones.file';
		$pyjs['track']['lineno']=180;
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

			$pyjs['track']={'module':'bones.file', 'lineno':180};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.file';
			$pyjs['track']['lineno']=180;
			$pyjs['track']['lineno']=181;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['FileMultiSelectionBone'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_123_err){if (!$p['isinstance']($pyjs_dbg_123_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_123_err);}throw $pyjs_dbg_123_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_124_err){if (!$p['isinstance']($pyjs_dbg_124_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_124_err);}throw $pyjs_dbg_124_err;
}})();
			$pyjs['track']['lineno']=182;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['sinkEvent']('onDragOver', 'onDrop');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_125_err){if (!$p['isinstance']($pyjs_dbg_125_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_125_err);}throw $pyjs_dbg_125_err;
}})();
			$pyjs['track']['lineno']=183;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__getitem__']('class')['append']('supports_upload');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_126_err){if (!$p['isinstance']($pyjs_dbg_126_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_126_err);}throw $pyjs_dbg_126_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=185;
		$method = $pyjs__bind_method2('onDragOver', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'bones.file', 'lineno':185};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.file';
			$pyjs['track']['lineno']=185;
			$pyjs['track']['lineno']=186;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['FileMultiSelectionBone'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_127_err){if (!$p['isinstance']($pyjs_dbg_127_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_127_err);}throw $pyjs_dbg_127_err;
}})()['onDragOver'](event);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_128_err){if (!$p['isinstance']($pyjs_dbg_128_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_128_err);}throw $pyjs_dbg_128_err;
}})();
			$pyjs['track']['lineno']=187;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return event['preventDefault']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_129_err){if (!$p['isinstance']($pyjs_dbg_129_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_129_err);}throw $pyjs_dbg_129_err;
}})();
			$pyjs['track']['lineno']=188;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return event['stopPropagation']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_130_err){if (!$p['isinstance']($pyjs_dbg_130_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_130_err);}throw $pyjs_dbg_130_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDragOver'] = $method;
		$pyjs['track']['lineno']=190;
		$method = $pyjs__bind_method2('onDrop', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var files,$iter3_idx,$iter3_array,ul,$iter3_iter,$iter3_type,x,$pyjs__trackstack_size_1,$iter3_nextval;
			$pyjs['track']={'module':'bones.file', 'lineno':190};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.file';
			$pyjs['track']['lineno']=190;
			$pyjs['track']['lineno']=191;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return event['preventDefault']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_131_err){if (!$p['isinstance']($pyjs_dbg_131_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_131_err);}throw $pyjs_dbg_131_err;
}})();
			$pyjs['track']['lineno']=192;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return event['stopPropagation']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_132_err){if (!$p['isinstance']($pyjs_dbg_132_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_132_err);}throw $pyjs_dbg_132_err;
}})();
			$pyjs['track']['lineno']=193;
			files = $p['getattr']($p['getattr'](event, 'dataTransfer'), 'files');
			$pyjs['track']['lineno']=194;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter3_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['range'](0, $p['getattr'](files, 'length'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_133_err){if (!$p['isinstance']($pyjs_dbg_133_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_133_err);}throw $pyjs_dbg_133_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_134_err){if (!$p['isinstance']($pyjs_dbg_134_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_134_err);}throw $pyjs_dbg_134_err;
}})();
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				x = $iter3_nextval['$nextval'];
				$pyjs['track']['lineno']=195;
				ul = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['Uploader']((function(){try{try{$pyjs['in_try_except'] += 1;
				return files['item'](x);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_135_err){if (!$p['isinstance']($pyjs_dbg_135_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_135_err);}throw $pyjs_dbg_135_err;
}})(), null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_136_err){if (!$p['isinstance']($pyjs_dbg_136_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_136_err);}throw $pyjs_dbg_136_err;
}})();
				$pyjs['track']['lineno']=196;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return ul['uploadSuccess']['register'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_137_err){if (!$p['isinstance']($pyjs_dbg_137_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_137_err);}throw $pyjs_dbg_137_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='bones.file';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDrop'] = $method;
		$pyjs['track']['lineno']=198;
		$method = $pyjs__bind_method2('onUploadSuccess', function(uploader, file) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				uploader = arguments[1];
				file = arguments[2];
			}

			$pyjs['track']={'module':'bones.file', 'lineno':198};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.file';
			$pyjs['track']['lineno']=198;
			$pyjs['track']['lineno']=199;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['setSelection']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([['dest', file], ['rel', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_138_err){if (!$p['isinstance']($pyjs_dbg_138_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_138_err);}throw $pyjs_dbg_138_err;
}})()]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_139_err){if (!$p['isinstance']($pyjs_dbg_139_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_139_err);}throw $pyjs_dbg_139_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_140_err){if (!$p['isinstance']($pyjs_dbg_140_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_140_err);}throw $pyjs_dbg_140_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_141_err){if (!$p['isinstance']($pyjs_dbg_141_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_141_err);}throw $pyjs_dbg_141_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['uploader'],['file']]);
		$cls_definition['onUploadSuccess'] = $method;
		$pyjs['track']['lineno']=201;
		$method = $pyjs__bind_method2('onShowSelector', function() {
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
			var currentSelector;
			$pyjs['track']={'module':'bones.file', 'lineno':201};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.file';
			$pyjs['track']['lineno']=201;
			$pyjs['track']['lineno']=205;
			currentSelector = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(null, $m['FileWidget'], null, null, [{'isSelector':'leaf'}, $p['getattr'](self, 'destModule')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_142_err){if (!$p['isinstance']($pyjs_dbg_142_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_142_err);}throw $pyjs_dbg_142_err;
}})();
			$pyjs['track']['lineno']=206;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return currentSelector['selectionReturnEvent']['register'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_143_err){if (!$p['isinstance']($pyjs_dbg_143_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_143_err);}throw $pyjs_dbg_143_err;
}})();
			$pyjs['track']['lineno']=207;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('mainWindow')['stackWidget'](currentSelector);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_144_err){if (!$p['isinstance']($pyjs_dbg_144_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_144_err);}throw $pyjs_dbg_144_err;
}})();
			$pyjs['track']['lineno']=208;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_145_err){if (!$p['isinstance']($pyjs_dbg_145_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_145_err);}throw $pyjs_dbg_145_err;
}})()['__getitem__']('class')['append']('is_active');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_146_err){if (!$p['isinstance']($pyjs_dbg_146_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_146_err);}throw $pyjs_dbg_146_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['onShowSelector'] = $method;
		$pyjs['track']['lineno']=210;
		$method = $pyjs__bind_method2('onSelectionReturn', function(table, selection) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				table = arguments[1];
				selection = arguments[2];
			}
			var $iter4_nextval,$iter4_idx,s,hasValidSelection,$iter4_type,$pyjs__trackstack_size_1,$iter4_array,$iter4_iter;
			$pyjs['track']={'module':'bones.file', 'lineno':210};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.file';
			$pyjs['track']['lineno']=210;
			$pyjs['track']['lineno']=214;
			hasValidSelection = false;
			$pyjs['track']['lineno']=215;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter4_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return selection;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_147_err){if (!$p['isinstance']($pyjs_dbg_147_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_147_err);}throw $pyjs_dbg_147_err;
}})();
			$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
			while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
				s = $iter4_nextval['$nextval'];
				$pyjs['track']['lineno']=216;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](s, $m['LeafFileWidget']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_148_err){if (!$p['isinstance']($pyjs_dbg_148_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_148_err);}throw $pyjs_dbg_148_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_149_err){if (!$p['isinstance']($pyjs_dbg_149_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_149_err);}throw $pyjs_dbg_149_err;
}})()) {
					$pyjs['track']['lineno']=217;
					hasValidSelection = true;
					$pyjs['track']['lineno']=218;
					break;
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='bones.file';
			$pyjs['track']['lineno']=219;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool'](hasValidSelection));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_150_err){if (!$p['isinstance']($pyjs_dbg_150_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_150_err);}throw $pyjs_dbg_150_err;
}})()) {
				$pyjs['track']['lineno']=220;
				$pyjs['track']['lineno']=220;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=221;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['setSelection'](function(){
				var $iter5_nextval,x,$iter5_idx,$pyjs__trackstack_size_1,$collcomp1,$iter5_iter,$iter5_array,$iter5_type;
	$collcomp1 = $p['list']();
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter5_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return selection;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_151_err){if (!$p['isinstance']($pyjs_dbg_151_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_151_err);}throw $pyjs_dbg_151_err;
}})();
			$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
			while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
				x = $iter5_nextval['$nextval'];
				$pyjs['track']['lineno']=221;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](x, $m['LeafFileWidget']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_152_err){if (!$p['isinstance']($pyjs_dbg_152_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_152_err);}throw $pyjs_dbg_152_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_153_err){if (!$p['isinstance']($pyjs_dbg_153_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_153_err);}throw $pyjs_dbg_153_err;
}})()) {
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $collcomp1['append']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['dict']([['dest', $p['getattr'](x, 'data')], ['rel', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_154_err){if (!$p['isinstance']($pyjs_dbg_154_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_154_err);}throw $pyjs_dbg_154_err;
}})()]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_155_err){if (!$p['isinstance']($pyjs_dbg_155_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_155_err);}throw $pyjs_dbg_155_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_156_err){if (!$p['isinstance']($pyjs_dbg_156_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_156_err);}throw $pyjs_dbg_156_err;
}})();
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='bones.file';

	return $collcomp1;}());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_157_err){if (!$p['isinstance']($pyjs_dbg_157_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_157_err);}throw $pyjs_dbg_157_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['table'],['selection']]);
		$cls_definition['onSelectionReturn'] = $method;
		$pyjs['track']['lineno']=223;
		$method = $pyjs__bind_method2('setSelection', function(selection) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				selection = arguments[1];
			}
			var $iter6_idx,$iter6_type,$iter6_array,$pyjs__trackstack_size_1,entry,$iter6_iter,data,$iter6_nextval;
			$pyjs['track']={'module':'bones.file', 'lineno':223};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.file';
			$pyjs['track']['lineno']=223;
			$pyjs['track']['lineno']=229;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((selection === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_158_err){if (!$p['isinstance']($pyjs_dbg_158_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_158_err);}throw $pyjs_dbg_158_err;
}})()) {
				$pyjs['track']['lineno']=230;
				$pyjs['track']['lineno']=230;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=232;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter6_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return selection;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_159_err){if (!$p['isinstance']($pyjs_dbg_159_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_159_err);}throw $pyjs_dbg_159_err;
}})();
			$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
			while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
				data = $iter6_nextval['$nextval'];
				$pyjs['track']['lineno']=233;
				entry = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call(null, $m['FileMultiSelectionBoneEntry'], null, null, [{'using':$p['getattr'](self, 'using'), 'errorInfo':(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_160_err){if (!$p['isinstance']($pyjs_dbg_160_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_160_err);}throw $pyjs_dbg_160_err;
}})()}, self, $p['getattr'](self, 'destModule'), data]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_161_err){if (!$p['isinstance']($pyjs_dbg_161_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_161_err);}throw $pyjs_dbg_161_err;
}})();
				$pyjs['track']['lineno']=234;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['addEntry'](entry);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_162_err){if (!$p['isinstance']($pyjs_dbg_162_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_162_err);}throw $pyjs_dbg_162_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='bones.file';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['selection']]);
		$cls_definition['setSelection'] = $method;
		$pyjs['track']['lineno']=178;
		var $bases = new Array($m['RelationalMultiSelectionBone']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('FileMultiSelectionBone', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=236;
	$m['FileSingleSelectionBone'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'bones.file';
		$pyjs['track']['lineno']=238;
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

			$pyjs['track']={'module':'bones.file', 'lineno':238};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.file';
			$pyjs['track']['lineno']=238;
			$pyjs['track']['lineno']=239;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['FileSingleSelectionBone'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_163_err){if (!$p['isinstance']($pyjs_dbg_163_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_163_err);}throw $pyjs_dbg_163_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_164_err){if (!$p['isinstance']($pyjs_dbg_164_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_164_err);}throw $pyjs_dbg_164_err;
}})();
			$pyjs['track']['lineno']=240;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['sinkEvent']('onDragOver', 'onDrop');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_165_err){if (!$p['isinstance']($pyjs_dbg_165_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_165_err);}throw $pyjs_dbg_165_err;
}})();
			$pyjs['track']['lineno']=241;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__getitem__']('class')['append']('supports_upload');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_166_err){if (!$p['isinstance']($pyjs_dbg_166_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_166_err);}throw $pyjs_dbg_166_err;
}})();
			$pyjs['track']['lineno']=242;
			self['previewImg'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Img']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_167_err){if (!$p['isinstance']($pyjs_dbg_167_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_167_err);}throw $pyjs_dbg_167_err;
}})();
			$pyjs['track']['lineno']=243;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'previewImg')['__getitem__']('class')['append']('previewimg');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_168_err){if (!$p['isinstance']($pyjs_dbg_168_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_168_err);}throw $pyjs_dbg_168_err;
}})();
			$pyjs['track']['lineno']=244;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'previewImg'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_169_err){if (!$p['isinstance']($pyjs_dbg_169_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_169_err);}throw $pyjs_dbg_169_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=246;
		$method = $pyjs__bind_method2('onDragOver', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'bones.file', 'lineno':246};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.file';
			$pyjs['track']['lineno']=246;
			$pyjs['track']['lineno']=247;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['FileSingleSelectionBone'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_170_err){if (!$p['isinstance']($pyjs_dbg_170_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_170_err);}throw $pyjs_dbg_170_err;
}})()['onDragOver'](event);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_171_err){if (!$p['isinstance']($pyjs_dbg_171_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_171_err);}throw $pyjs_dbg_171_err;
}})();
			$pyjs['track']['lineno']=248;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return event['preventDefault']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_172_err){if (!$p['isinstance']($pyjs_dbg_172_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_172_err);}throw $pyjs_dbg_172_err;
}})();
			$pyjs['track']['lineno']=249;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return event['stopPropagation']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_173_err){if (!$p['isinstance']($pyjs_dbg_173_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_173_err);}throw $pyjs_dbg_173_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDragOver'] = $method;
		$pyjs['track']['lineno']=251;
		$method = $pyjs__bind_method2('onDrop', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var files,$iter7_nextval,$iter7_iter,$iter7_array,ul,$iter7_idx,x,$iter7_type,$pyjs__trackstack_size_1;
			$pyjs['track']={'module':'bones.file', 'lineno':251};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.file';
			$pyjs['track']['lineno']=251;
			$pyjs['track']['lineno']=252;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return event['preventDefault']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_174_err){if (!$p['isinstance']($pyjs_dbg_174_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_174_err);}throw $pyjs_dbg_174_err;
}})();
			$pyjs['track']['lineno']=253;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return event['stopPropagation']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_175_err){if (!$p['isinstance']($pyjs_dbg_175_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_175_err);}throw $pyjs_dbg_175_err;
}})();
			$pyjs['track']['lineno']=254;
			files = $p['getattr']($p['getattr'](event, 'dataTransfer'), 'files');
			$pyjs['track']['lineno']=256;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['cmp']($p['getattr'](files, 'length'), 1) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_176_err){if (!$p['isinstance']($pyjs_dbg_176_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_176_err);}throw $pyjs_dbg_176_err;
}})()) {
				$pyjs['track']['lineno']=257;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['conf']['__getitem__']('mainWindow')['log']('error', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['translate']('You cannot drop more than one file here!');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_177_err){if (!$p['isinstance']($pyjs_dbg_177_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_177_err);}throw $pyjs_dbg_177_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_178_err){if (!$p['isinstance']($pyjs_dbg_178_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_178_err);}throw $pyjs_dbg_178_err;
}})();
				$pyjs['track']['lineno']=258;
				$pyjs['track']['lineno']=258;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=260;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter7_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['range'](0, $p['getattr'](files, 'length'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_179_err){if (!$p['isinstance']($pyjs_dbg_179_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_179_err);}throw $pyjs_dbg_179_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_180_err){if (!$p['isinstance']($pyjs_dbg_180_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_180_err);}throw $pyjs_dbg_180_err;
}})();
			$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
			while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
				x = $iter7_nextval['$nextval'];
				$pyjs['track']['lineno']=261;
				ul = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['Uploader']((function(){try{try{$pyjs['in_try_except'] += 1;
				return files['item'](x);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_181_err){if (!$p['isinstance']($pyjs_dbg_181_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_181_err);}throw $pyjs_dbg_181_err;
}})(), null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_182_err){if (!$p['isinstance']($pyjs_dbg_182_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_182_err);}throw $pyjs_dbg_182_err;
}})();
				$pyjs['track']['lineno']=262;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return ul['uploadSuccess']['register'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_183_err){if (!$p['isinstance']($pyjs_dbg_183_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_183_err);}throw $pyjs_dbg_183_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='bones.file';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDrop'] = $method;
		$pyjs['track']['lineno']=264;
		$method = $pyjs__bind_method2('onUploadSuccess', function(uploader, file) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				uploader = arguments[1];
				file = arguments[2];
			}

			$pyjs['track']={'module':'bones.file', 'lineno':264};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.file';
			$pyjs['track']['lineno']=264;
			$pyjs['track']['lineno']=265;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['setSelection']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([['dest', file], ['rel', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_184_err){if (!$p['isinstance']($pyjs_dbg_184_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_184_err);}throw $pyjs_dbg_184_err;
}})()]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_185_err){if (!$p['isinstance']($pyjs_dbg_185_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_185_err);}throw $pyjs_dbg_185_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_186_err){if (!$p['isinstance']($pyjs_dbg_186_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_186_err);}throw $pyjs_dbg_186_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['uploader'],['file']]);
		$cls_definition['onUploadSuccess'] = $method;
		$pyjs['track']['lineno']=267;
		$method = $pyjs__bind_method2('onShowSelector', function() {
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
			var currentSelector;
			$pyjs['track']={'module':'bones.file', 'lineno':267};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.file';
			$pyjs['track']['lineno']=267;
			$pyjs['track']['lineno']=271;
			currentSelector = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(null, $m['FileWidget'], null, null, [{'isSelector':'leaf'}, $p['getattr'](self, 'destModule')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_187_err){if (!$p['isinstance']($pyjs_dbg_187_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_187_err);}throw $pyjs_dbg_187_err;
}})();
			$pyjs['track']['lineno']=272;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return currentSelector['selectionReturnEvent']['register'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_188_err){if (!$p['isinstance']($pyjs_dbg_188_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_188_err);}throw $pyjs_dbg_188_err;
}})();
			$pyjs['track']['lineno']=273;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('mainWindow')['stackWidget'](currentSelector);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_189_err){if (!$p['isinstance']($pyjs_dbg_189_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_189_err);}throw $pyjs_dbg_189_err;
}})();
			$pyjs['track']['lineno']=274;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_190_err){if (!$p['isinstance']($pyjs_dbg_190_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_190_err);}throw $pyjs_dbg_190_err;
}})()['__getitem__']('class')['append']('is_active');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_191_err){if (!$p['isinstance']($pyjs_dbg_191_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_191_err);}throw $pyjs_dbg_191_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['onShowSelector'] = $method;
		$pyjs['track']['lineno']=276;
		$method = $pyjs__bind_method2('onSelectionReturn', function(table, selection) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				table = arguments[1];
				selection = arguments[2];
			}
			var $iter8_idx,$iter8_array,$iter8_iter,s,hasValidSelection,$pyjs__trackstack_size_1,$iter8_type,$iter8_nextval;
			$pyjs['track']={'module':'bones.file', 'lineno':276};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.file';
			$pyjs['track']['lineno']=276;
			$pyjs['track']['lineno']=280;
			hasValidSelection = false;
			$pyjs['track']['lineno']=281;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter8_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return selection;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_192_err){if (!$p['isinstance']($pyjs_dbg_192_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_192_err);}throw $pyjs_dbg_192_err;
}})();
			$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
			while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
				s = $iter8_nextval['$nextval'];
				$pyjs['track']['lineno']=282;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](s, $m['LeafFileWidget']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_193_err){if (!$p['isinstance']($pyjs_dbg_193_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_193_err);}throw $pyjs_dbg_193_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_194_err){if (!$p['isinstance']($pyjs_dbg_194_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_194_err);}throw $pyjs_dbg_194_err;
}})()) {
					$pyjs['track']['lineno']=283;
					hasValidSelection = true;
					$pyjs['track']['lineno']=284;
					break;
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='bones.file';
			$pyjs['track']['lineno']=285;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool'](hasValidSelection));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_195_err){if (!$p['isinstance']($pyjs_dbg_195_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_195_err);}throw $pyjs_dbg_195_err;
}})()) {
				$pyjs['track']['lineno']=286;
				$pyjs['track']['lineno']=286;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=287;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['setSelection']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([function(){
				var $iter9_iter,$iter9_nextval,$collcomp2,$iter9_array,$iter9_idx,$pyjs__trackstack_size_1,x,$iter9_type;
	$collcomp2 = $p['dict']();
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter9_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return selection;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_196_err){if (!$p['isinstance']($pyjs_dbg_196_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_196_err);}throw $pyjs_dbg_196_err;
}})();
			$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
			while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
				x = $iter9_nextval['$nextval'];
				$pyjs['track']['lineno']=287;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](x, $m['LeafFileWidget']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_197_err){if (!$p['isinstance']($pyjs_dbg_197_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_197_err);}throw $pyjs_dbg_197_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_198_err){if (!$p['isinstance']($pyjs_dbg_198_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_198_err);}throw $pyjs_dbg_198_err;
}})()) {
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $collcomp2['__setitem__']('dest', $p['getattr'](x, 'data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_199_err){if (!$p['isinstance']($pyjs_dbg_199_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_199_err);}throw $pyjs_dbg_199_err;
}})();
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='bones.file';

	return $collcomp2;}()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_200_err){if (!$p['isinstance']($pyjs_dbg_200_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_200_err);}throw $pyjs_dbg_200_err;
}})()['__getitem__'](0));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_201_err){if (!$p['isinstance']($pyjs_dbg_201_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_201_err);}throw $pyjs_dbg_201_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['table'],['selection']]);
		$cls_definition['onSelectionReturn'] = $method;
		$pyjs['track']['lineno']=289;
		$method = $pyjs__bind_method2('onEdit', function() {
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
			var edwg,$pyjs_try_err,pane;
			$pyjs['track']={'module':'bones.file', 'lineno':289};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.file';
			$pyjs['track']['lineno']=289;
			$pyjs['track']['lineno']=293;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool']($p['getattr'](self, 'selection')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_202_err){if (!$p['isinstance']($pyjs_dbg_202_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_202_err);}throw $pyjs_dbg_202_err;
}})()) {
				$pyjs['track']['lineno']=294;
				$pyjs['track']['lineno']=294;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=296;
			pane = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(null, $m['Pane'], null, null, [{'closeable':true, 'iconClasses':(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('modul_%s', $p['getattr'](self, 'destModule'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_204_err){if (!$p['isinstance']($pyjs_dbg_204_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_204_err);}throw $pyjs_dbg_204_err;
}})(), 'apptype_list', 'action_edit']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_205_err){if (!$p['isinstance']($pyjs_dbg_205_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_205_err);}throw $pyjs_dbg_205_err;
}})()}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Edit');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_203_err){if (!$p['isinstance']($pyjs_dbg_203_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_203_err);}throw $pyjs_dbg_203_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_206_err){if (!$p['isinstance']($pyjs_dbg_206_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_206_err);}throw $pyjs_dbg_206_err;
}})();
			$pyjs['track']['lineno']=298;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['conf']['__getitem__']('mainWindow'), 'stackPane', null, null, [{'focus':true}, pane]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_207_err){if (!$p['isinstance']($pyjs_dbg_207_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_207_err);}throw $pyjs_dbg_207_err;
}})();
			$pyjs['track']['lineno']=300;
			var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
			try {
				try {
					$pyjs['in_try_except'] += 1;
					$pyjs['track']['lineno']=301;
					edwg = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $pyjs_kwargs_call(null, $m['EditWidget'], null, null, [{'key':$p['getattr'](self, 'selection')['__getitem__']('dest')['__getitem__']('key'), 'skelType':'leaf'}, $p['getattr'](self, 'destModule'), $p['getattr']($m['EditWidget'], 'appTree')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_208_err){if (!$p['isinstance']($pyjs_dbg_208_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_208_err);}throw $pyjs_dbg_208_err;
}})();
					$pyjs['track']['lineno']=302;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return pane['addWidget'](edwg);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_209_err){if (!$p['isinstance']($pyjs_dbg_209_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_209_err);}throw $pyjs_dbg_209_err;
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
				$pyjs['track']['module']='bones.file';
				if (($pyjs_try_err_name == $p['AssertionError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AssertionError'])) {
					$pyjs['track']['lineno']=304;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['conf']['__getitem__']('mainWindow')['removePane'](pane);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_210_err){if (!$p['isinstance']($pyjs_dbg_210_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_210_err);}throw $pyjs_dbg_210_err;
}})();
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['onEdit'] = $method;
		$pyjs['track']['lineno']=306;
		$method = $pyjs__bind_method2('setSelection', function(selection) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				selection = arguments[1];
			}
			var previewUrl;
			$pyjs['track']={'module':'bones.file', 'lineno':306};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.file';
			$pyjs['track']['lineno']=306;
			$pyjs['track']['lineno']=312;
			self['selection'] = selection;
			$pyjs['track']['lineno']=314;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](selection);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_211_err){if (!$p['isinstance']($pyjs_dbg_211_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_211_err);}throw $pyjs_dbg_211_err;
}})()) {
				$pyjs['track']['lineno']=315;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'successHandler':$p['getattr'](self, 'onSelectionDataAvailable'), 'cacheable':true}, $p['getattr'](self, 'destModule'), (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('view/leaf/%s', selection['__getitem__']('dest')['__getitem__']('key'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_212_err){if (!$p['isinstance']($pyjs_dbg_212_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_212_err);}throw $pyjs_dbg_212_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_213_err){if (!$p['isinstance']($pyjs_dbg_213_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_213_err);}throw $pyjs_dbg_213_err;
}})();
				$pyjs['track']['lineno']=318;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'selectionTxt')['__setitem__']('value', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['translate']('Loading...');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_214_err){if (!$p['isinstance']($pyjs_dbg_214_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_214_err);}throw $pyjs_dbg_214_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_215_err){if (!$p['isinstance']($pyjs_dbg_215_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_215_err);}throw $pyjs_dbg_215_err;
}})();
				$pyjs['track']['lineno']=320;
				previewUrl = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['utils']['getImagePreview']($p['getattr'](self, 'selection')['__getitem__']('dest'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_216_err){if (!$p['isinstance']($pyjs_dbg_216_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_216_err);}throw $pyjs_dbg_216_err;
}})();
				$pyjs['track']['lineno']=322;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](previewUrl);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_217_err){if (!$p['isinstance']($pyjs_dbg_217_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_217_err);}throw $pyjs_dbg_217_err;
}})()) {
					$pyjs['track']['lineno']=323;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'previewImg')['__setitem__']('src', previewUrl);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_218_err){if (!$p['isinstance']($pyjs_dbg_218_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_218_err);}throw $pyjs_dbg_218_err;
}})();
					$pyjs['track']['lineno']=324;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'previewImg')['__getitem__']('style')['__setitem__']('display', '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_219_err){if (!$p['isinstance']($pyjs_dbg_219_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_219_err);}throw $pyjs_dbg_219_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=326;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'previewImg')['__getitem__']('style')['__setitem__']('display', 'none');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_220_err){if (!$p['isinstance']($pyjs_dbg_220_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_220_err);}throw $pyjs_dbg_220_err;
}})();
				}
			}
			else {
				$pyjs['track']['lineno']=328;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'selectionTxt')['__setitem__']('value', '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_221_err){if (!$p['isinstance']($pyjs_dbg_221_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_221_err);}throw $pyjs_dbg_221_err;
}})();
				$pyjs['track']['lineno']=329;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'previewImg')['__getitem__']('style')['__setitem__']('display', 'none');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_222_err){if (!$p['isinstance']($pyjs_dbg_222_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_222_err);}throw $pyjs_dbg_222_err;
}})();
			}
			$pyjs['track']['lineno']=331;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['updateButtons']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_223_err){if (!$p['isinstance']($pyjs_dbg_223_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_223_err);}throw $pyjs_dbg_223_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['selection']]);
		$cls_definition['setSelection'] = $method;
		$pyjs['track']['lineno']=236;
		var $bases = new Array($m['RelationalSingleSelectionBone']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('FileSingleSelectionBone', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=335;
	$m['CheckForFileBoneSingleSelection'] = function(moduleName, boneName, skelStructure) {
		var args = $p['tuple']($pyjs_array_slice['call'](arguments,3,arguments['length']-1));

		var kwargs = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
		if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
			if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
			kwargs = arguments[arguments['length']+1];
		} else {
			delete kwargs['$pyjs_is_kwarg'];
		}
		if (typeof kwargs == 'undefined') {
			kwargs = $p['__empty_dict']();
			if (typeof skelStructure != 'undefined') {
				if (skelStructure !== null && typeof skelStructure['$pyjs_is_kwarg'] != 'undefined') {
					kwargs = skelStructure;
					skelStructure = arguments[3];
				}
			} else 			if (typeof boneName != 'undefined') {
				if (boneName !== null && typeof boneName['$pyjs_is_kwarg'] != 'undefined') {
					kwargs = boneName;
					boneName = arguments[3];
				}
			} else 			if (typeof moduleName != 'undefined') {
				if (moduleName !== null && typeof moduleName['$pyjs_is_kwarg'] != 'undefined') {
					kwargs = moduleName;
					moduleName = arguments[3];
				}
			} else {
			}
		}
		var $and3,$and4,$and5,$and6,isMultiple;
		$pyjs['track']={'module':'bones.file','lineno':335};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='bones.file';
		$pyjs['track']['lineno']=335;
		$pyjs['track']['lineno']=336;
		isMultiple = ($p['bool']($and3=(function(){try{try{$pyjs['in_try_except'] += 1;
		return skelStructure['__getitem__'](boneName)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_224_err){if (!$p['isinstance']($pyjs_dbg_224_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_224_err);}throw $pyjs_dbg_224_err;
}})()['__contains__']('multiple'))?skelStructure['__getitem__'](boneName)['__getitem__']('multiple'):$and3);
		$pyjs['track']['lineno']=337;
		$pyjs['track']['lineno']=337;
		var $pyjs__ret = ($p['bool']($and5=(function(){try{try{$pyjs['in_try_except'] += 1;
		return (typeof CheckForFileBone == "undefined"?$m['CheckForFileBone']:CheckForFileBone)(moduleName, boneName, skelStructure);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_225_err){if (!$p['isinstance']($pyjs_dbg_225_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_225_err);}throw $pyjs_dbg_225_err;
}})())?!$p['bool'](isMultiple):$and5);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['CheckForFileBoneSingleSelection']['__name__'] = 'CheckForFileBoneSingleSelection';

	$m['CheckForFileBoneSingleSelection']['__bind_type__'] = 0;
	$m['CheckForFileBoneSingleSelection']['__args__'] = ['args',['kwargs'],['moduleName'],['boneName'],['skelStructure']];
	$pyjs['track']['lineno']=339;
	$m['CheckForFileBoneMultiSelection'] = function(moduleName, boneName, skelStructure) {
		var args = $p['tuple']($pyjs_array_slice['call'](arguments,3,arguments['length']-1));

		var kwargs = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
		if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
			if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
			kwargs = arguments[arguments['length']+1];
		} else {
			delete kwargs['$pyjs_is_kwarg'];
		}
		if (typeof kwargs == 'undefined') {
			kwargs = $p['__empty_dict']();
			if (typeof skelStructure != 'undefined') {
				if (skelStructure !== null && typeof skelStructure['$pyjs_is_kwarg'] != 'undefined') {
					kwargs = skelStructure;
					skelStructure = arguments[3];
				}
			} else 			if (typeof boneName != 'undefined') {
				if (boneName !== null && typeof boneName['$pyjs_is_kwarg'] != 'undefined') {
					kwargs = boneName;
					boneName = arguments[3];
				}
			} else 			if (typeof moduleName != 'undefined') {
				if (moduleName !== null && typeof moduleName['$pyjs_is_kwarg'] != 'undefined') {
					kwargs = moduleName;
					moduleName = arguments[3];
				}
			} else {
			}
		}
		var $and8,$and9,$and7,$and10,isMultiple;
		$pyjs['track']={'module':'bones.file','lineno':339};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='bones.file';
		$pyjs['track']['lineno']=339;
		$pyjs['track']['lineno']=340;
		isMultiple = ($p['bool']($and7=(function(){try{try{$pyjs['in_try_except'] += 1;
		return skelStructure['__getitem__'](boneName)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_226_err){if (!$p['isinstance']($pyjs_dbg_226_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_226_err);}throw $pyjs_dbg_226_err;
}})()['__contains__']('multiple'))?skelStructure['__getitem__'](boneName)['__getitem__']('multiple'):$and7);
		$pyjs['track']['lineno']=341;
		$pyjs['track']['lineno']=341;
		var $pyjs__ret = ($p['bool']($and9=(function(){try{try{$pyjs['in_try_except'] += 1;
		return (typeof CheckForFileBone == "undefined"?$m['CheckForFileBone']:CheckForFileBone)(moduleName, boneName, skelStructure);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_227_err){if (!$p['isinstance']($pyjs_dbg_227_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_227_err);}throw $pyjs_dbg_227_err;
}})())?isMultiple:$and9);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['CheckForFileBoneMultiSelection']['__name__'] = 'CheckForFileBoneMultiSelection';

	$m['CheckForFileBoneMultiSelection']['__bind_type__'] = 0;
	$m['CheckForFileBoneMultiSelection']['__args__'] = ['args',['kwargs'],['moduleName'],['boneName'],['skelStructure']];
	$pyjs['track']['lineno']=343;
	$m['CheckForFileBone'] = function(moduleName, boneName, skelStucture) {
		var args = $p['tuple']($pyjs_array_slice['call'](arguments,3,arguments['length']-1));

		var kwargs = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
		if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
			if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
			kwargs = arguments[arguments['length']+1];
		} else {
			delete kwargs['$pyjs_is_kwarg'];
		}
		if (typeof kwargs == 'undefined') {
			kwargs = $p['__empty_dict']();
			if (typeof skelStucture != 'undefined') {
				if (skelStucture !== null && typeof skelStucture['$pyjs_is_kwarg'] != 'undefined') {
					kwargs = skelStucture;
					skelStucture = arguments[3];
				}
			} else 			if (typeof boneName != 'undefined') {
				if (boneName !== null && typeof boneName['$pyjs_is_kwarg'] != 'undefined') {
					kwargs = boneName;
					boneName = arguments[3];
				}
			} else 			if (typeof moduleName != 'undefined') {
				if (moduleName !== null && typeof moduleName['$pyjs_is_kwarg'] != 'undefined') {
					kwargs = moduleName;
					moduleName = arguments[3];
				}
			} else {
			}
		}

		$pyjs['track']={'module':'bones.file','lineno':343};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='bones.file';
		$pyjs['track']['lineno']=343;
		$pyjs['track']['lineno']=345;
		$pyjs['track']['lineno']=345;
		var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
		return skelStucture['__getitem__'](boneName)['__getitem__']('type')['startswith']('treeitem.file');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_228_err){if (!$p['isinstance']($pyjs_dbg_228_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_228_err);}throw $pyjs_dbg_228_err;
}})();
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['CheckForFileBone']['__name__'] = 'CheckForFileBone';

	$m['CheckForFileBone']['__bind_type__'] = 0;
	$m['CheckForFileBone']['__args__'] = ['args',['kwargs'],['moduleName'],['boneName'],['skelStucture']];
	$pyjs['track']['lineno']=348;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['editBoneSelector']['insert'](5, $m['CheckForFileBoneSingleSelection'], $m['FileSingleSelectionBone']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_229_err){if (!$p['isinstance']($pyjs_dbg_229_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_229_err);}throw $pyjs_dbg_229_err;
}})();
	$pyjs['track']['lineno']=349;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['editBoneSelector']['insert'](5, $m['CheckForFileBoneMultiSelection'], $m['FileMultiSelectionBone']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_230_err){if (!$p['isinstance']($pyjs_dbg_230_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_230_err);}throw $pyjs_dbg_230_err;
}})();
	$pyjs['track']['lineno']=350;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['viewDelegateSelector']['insert'](3, $m['CheckForFileBone'], $m['FileViewBoneDelegate']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_231_err){if (!$p['isinstance']($pyjs_dbg_231_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_231_err);}throw $pyjs_dbg_231_err;
}})();
	$pyjs['track']['lineno']=351;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['extractorDelegateSelector']['insert'](3, $m['CheckForFileBone'], $m['FileBoneExtractor']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_232_err){if (!$p['isinstance']($pyjs_dbg_232_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_232_err);}throw $pyjs_dbg_232_err;
}})();
	return this;
}; /* end bones.file */


/* end module: bones.file */


/*
PYJS_DEPS: ['html5', 'utils', 'priorityqueue.editBoneSelector', 'priorityqueue', 'priorityqueue.viewDelegateSelector', 'priorityqueue.extractorDelegateSelector', 'widgets.file.FileWidget', 'widgets', 'widgets.file', 'widgets.file.LeafFileWidget', 'config.conf', 'config', 'bones.relational.RelationalMultiSelectionBone', 'bones', 'bones.relational', 'bones.relational.RelationalSingleSelectionBone', 'bones.relational.RelationalMultiSelectionBoneEntry', 'widgets.file.Uploader', 'i18n.translate', 'i18n', 'network.NetworkService', 'network', 'widgets.edit.EditWidget', 'widgets.edit', 'pane.Pane', 'pane', 'bones.base.BaseBoneExtractor', 'bones.base']
*/
