/* start module: bones.string */
$pyjs['loaded_modules']['bones.string'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['bones.string']['__was_initialized__']) return $pyjs['loaded_modules']['bones.string'];
	if(typeof $pyjs['loaded_modules']['bones'] == 'undefined' || !$pyjs['loaded_modules']['bones']['__was_initialized__']) $p['___import___']('bones', null);
	var $m = $pyjs['loaded_modules']['bones.string'];
	$m['__repr__'] = function() { return '<module: bones.string>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'bones.string';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['bones']['string'] = $pyjs['loaded_modules']['bones.string'];
	$m.__track_lines__[1] = 'bones.string.py, line 1:\n    # -*- coding: utf-8 -*-';
	$m.__track_lines__[2] = 'bones.string.py, line 2:\n    import html5';
	$m.__track_lines__[4] = 'bones.string.py, line 4:\n    from priorityqueue import editBoneSelector, viewDelegateSelector, extendedSearchWidgetSelector, extractorDelegateSelector';
	$m.__track_lines__[5] = 'bones.string.py, line 5:\n    from config import conf';
	$m.__track_lines__[6] = 'bones.string.py, line 6:\n    from event import EventDispatcher';
	$m.__track_lines__[7] = 'bones.string.py, line 7:\n    from html5.keycodes import *';
	$m.__track_lines__[8] = 'bones.string.py, line 8:\n    from i18n import translate';
	$m.__track_lines__[9] = 'bones.string.py, line 9:\n    from bones.base import BaseBoneExtractor';
	$m.__track_lines__[11] = 'bones.string.py, line 11:\n    class StringBoneExtractor(BaseBoneExtractor):';
	$m.__track_lines__[13] = 'bones.string.py, line 13:\n    def render(self, data, field):';
	$m.__track_lines__[14] = 'bones.string.py, line 14:\n    if field in data.keys():';
	$m.__track_lines__[16] = 'bones.string.py, line 16:\n    if isinstance(data[field], dict):';
	$m.__track_lines__[17] = 'bones.string.py, line 17:\n    resstr = ""';
	$m.__track_lines__[18] = 'bones.string.py, line 18:\n    if "currentlanguage" in conf.keys():';
	$m.__track_lines__[19] = 'bones.string.py, line 19:\n    if conf["currentlanguage"] in data[field].keys():';
	$m.__track_lines__[20] = 'bones.string.py, line 20:\n    resstr = data[field][conf["currentlanguage"]].replace("&quot;", "\'").replace(";", " ").replace(\'"\', "\'")';
	$m.__track_lines__[22] = 'bones.string.py, line 22:\n    if len(data[field].keys()) > 0:';
	$m.__track_lines__[23] = 'bones.string.py, line 23:\n    resstr = data[field][data[field].keys()[0]].replace("&quot;", "\'").replace(";", " ").replace(\'"\', "\'")';
	$m.__track_lines__[24] = 'bones.string.py, line 24:\n    return \'"%s"\' % resstr';
	$m.__track_lines__[26] = 'bones.string.py, line 26:\n    return ", ".join([item.replace("&quot;", "").replace(";", " ").replace(\'"\', "\'") for item in data[field]])';
	$m.__track_lines__[28] = 'bones.string.py, line 28:\n    return str(\'"%s"\' % data[field].replace("&quot;", "").replace(";", " ").replace(\'"\', "\'"))';
	$m.__track_lines__[29] = 'bones.string.py, line 29:\n    return conf["empty_value"]';
	$m.__track_lines__[31] = 'bones.string.py, line 31:\n    class StringViewBoneDelegate( object ):';
	$m.__track_lines__[32] = 'bones.string.py, line 32:\n    def __init__(self, moduleName, boneName, skelStructure, *args, **kwargs ):';
	$m.__track_lines__[33] = 'bones.string.py, line 33:\n    super( StringViewBoneDelegate, self ).__init__()';
	$m.__track_lines__[34] = 'bones.string.py, line 34:\n    self.skelStructure = skelStructure';
	$m.__track_lines__[35] = 'bones.string.py, line 35:\n    self.boneName = boneName';
	$m.__track_lines__[36] = 'bones.string.py, line 36:\n    self.moduleName=moduleName';
	$m.__track_lines__[38] = 'bones.string.py, line 38:\n    def render( self, data, field ):';
	$m.__track_lines__[39] = 'bones.string.py, line 39:\n    if field in data.keys():';
	$m.__track_lines__[41] = 'bones.string.py, line 41:\n    if isinstance(data[field],dict):';
	$m.__track_lines__[42] = 'bones.string.py, line 42:\n    resstr=""';
	$m.__track_lines__[43] = 'bones.string.py, line 43:\n    if "currentlanguage" in conf.keys():';
	$m.__track_lines__[44] = 'bones.string.py, line 44:\n    if conf["currentlanguage"] in data[field].keys():';
	$m.__track_lines__[45] = 'bones.string.py, line 45:\n    resstr=data[field][conf["currentlanguage"]]';
	$m.__track_lines__[47] = 'bones.string.py, line 47:\n    if len(data[field].keys())>0:';
	$m.__track_lines__[48] = 'bones.string.py, line 48:\n    resstr=data[field][data[field].keys()[0]]';
	$m.__track_lines__[49] = 'bones.string.py, line 49:\n    return (self.getViewElement(resstr,data[field]))';
	$m.__track_lines__[54] = 'bones.string.py, line 54:\n    if isinstance( data[field], list ):';
	$m.__track_lines__[55] = 'bones.string.py, line 55:\n    output = ", ".join( data[field] )';
	$m.__track_lines__[57] = 'bones.string.py, line 57:\n    output=str( data[field] )';
	$m.__track_lines__[59] = 'bones.string.py, line 59:\n    return self.getViewElement( output,False )';
	$m.__track_lines__[61] = 'bones.string.py, line 61:\n    return self.getViewElement( conf[ "empty_value" ], False )';
	$m.__track_lines__[63] = 'bones.string.py, line 63:\n    def getViewElement(self, labelstr, datafield):';
	$m.__track_lines__[64] = 'bones.string.py, line 64:\n    labelstr = html5.utils.unescape(labelstr)';
	$m.__track_lines__[66] = 'bones.string.py, line 66:\n    if not datafield:';
	$m.__track_lines__[67] = 'bones.string.py, line 67:\n    return( html5.Label(labelstr))';
	$m.__track_lines__[69] = 'bones.string.py, line 69:\n    aspan=html5.Span()';
	$m.__track_lines__[70] = 'bones.string.py, line 70:\n    aspan.appendChild(html5.TextNode(labelstr))';
	$m.__track_lines__[71] = 'bones.string.py, line 71:\n    aspan["Title"] = str(datafield)';
	$m.__track_lines__[72] = 'bones.string.py, line 72:\n    return aspan';
	$m.__track_lines__[74] = 'bones.string.py, line 74:\n    class Tag(html5.Span):';
	$m.__track_lines__[75] = 'bones.string.py, line 75:\n    def __init__(self, parentBone, tag, isEditMode, readonly=False, *args, **kwargs ):';
	$m.__track_lines__[76] = 'bones.string.py, line 76:\n    super(Tag, self).__init__(*args, **kwargs)';
	$m.__track_lines__[77] = 'bones.string.py, line 77:\n    self["class"].append("tag")';
	$m.__track_lines__[79] = 'bones.string.py, line 79:\n    self.parentBone = parentBone';
	$m.__track_lines__[81] = 'bones.string.py, line 81:\n    self.input = html5.Input()';
	$m.__track_lines__[82] = 'bones.string.py, line 82:\n    self.input["type"] = "text"';
	$m.__track_lines__[83] = 'bones.string.py, line 83:\n    self.input["value"] = tag';
	$m.__track_lines__[84] = 'bones.string.py, line 84:\n    self.appendChild(self.input)';
	$m.__track_lines__[86] = 'bones.string.py, line 86:\n    if readonly:';
	$m.__track_lines__[87] = 'bones.string.py, line 87:\n    self.input["readonly"] = True';
	$m.__track_lines__[89] = 'bones.string.py, line 89:\n    self["draggable"] = True';
	$m.__track_lines__[90] = 'bones.string.py, line 90:\n    self.sinkEvent("onDrop", "onDragOver", "onDragStart", "onDragEnd")';
	$m.__track_lines__[92] = 'bones.string.py, line 92:\n    delBtn = html5.ext.Button(translate("Delete"), self.onDelBtnClick)';
	$m.__track_lines__[93] = 'bones.string.py, line 93:\n    delBtn["class"].append("icon delete tag")';
	$m.__track_lines__[94] = 'bones.string.py, line 94:\n    self.appendChild(delBtn)';
	$m.__track_lines__[96] = 'bones.string.py, line 96:\n    def onDelBtnClick(self, *args, **kwargs):';
	$m.__track_lines__[97] = 'bones.string.py, line 97:\n    self.parent().removeChild(self)';
	$m.__track_lines__[99] = 'bones.string.py, line 99:\n    def focus(self):';
	$m.__track_lines__[100] = 'bones.string.py, line 100:\n    self.input.focus()';
	$m.__track_lines__[102] = 'bones.string.py, line 102:\n    def onDragStart(self, event):';
	$m.__track_lines__[103] = 'bones.string.py, line 103:\n    self.parentBone.currentTagToDrag = self';
	$m.__track_lines__[104] = 'bones.string.py, line 104:\n    event.dataTransfer.setData("text", self.input["value"])';
	$m.__track_lines__[105] = 'bones.string.py, line 105:\n    event.stopPropagation()';
	$m.__track_lines__[107] = 'bones.string.py, line 107:\n    def onDragOver(self, event):';
	$m.__track_lines__[108] = 'bones.string.py, line 108:\n    event.preventDefault()';
	$m.__track_lines__[110] = 'bones.string.py, line 110:\n    def onDragEnd(self, event):';
	$m.__track_lines__[111] = 'bones.string.py, line 111:\n    self.parentBone.currentTagToDrag = None';
	$m.__track_lines__[112] = 'bones.string.py, line 112:\n    event.stopPropagation()';
	$m.__track_lines__[114] = 'bones.string.py, line 114:\n    def onDrop(self, event):';
	$m.__track_lines__[115] = 'bones.string.py, line 115:\n    event.preventDefault()';
	$m.__track_lines__[116] = 'bones.string.py, line 116:\n    event.stopPropagation()';
	$m.__track_lines__[118] = 'bones.string.py, line 118:\n    tagToDrop = self.parentBone.currentTagToDrag';
	$m.__track_lines__[120] = 'bones.string.py, line 120:\n    if tagToDrop and tagToDrop != self:';
	$m.__track_lines__[121] = 'bones.string.py, line 121:\n    if self.element.offsetTop > tagToDrop.element.offsetTop:';
	$m.__track_lines__[122] = 'bones.string.py, line 122:\n    parentChilds = self.parent().children()';
	$m.__track_lines__[124] = 'bones.string.py, line 124:\n    if parentChilds[-1] is self:';
	$m.__track_lines__[125] = 'bones.string.py, line 125:\n    self.parent().appendChild(tagToDrop)';
	$m.__track_lines__[127] = 'bones.string.py, line 127:\n    self.parent().insertBefore(tagToDrop, parentChilds[parentChilds.index(self) + 1])';
	$m.__track_lines__[129] = 'bones.string.py, line 129:\n    self.parent().insertBefore(tagToDrop, self)';
	$m.__track_lines__[131] = 'bones.string.py, line 131:\n    self.parentBone.currentTagToDrag = None';
	$m.__track_lines__[133] = 'bones.string.py, line 133:\n    class StringEditBone(html5.Div):';
	$m.__track_lines__[134] = 'bones.string.py, line 134:\n    def __init__(self, moduleName, boneName, readOnly, multiple=False, languages=None, *args, **kwargs ):';
	$m.__track_lines__[135] = 'bones.string.py, line 135:\n    super( StringEditBone,  self ).__init__( *args, **kwargs )';
	$m.__track_lines__[136] = 'bones.string.py, line 136:\n    self.moduleName = moduleName';
	$m.__track_lines__[137] = 'bones.string.py, line 137:\n    self.boneName = boneName';
	$m.__track_lines__[138] = 'bones.string.py, line 138:\n    self.readOnly = readOnly';
	$m.__track_lines__[139] = 'bones.string.py, line 139:\n    self.multiple = multiple';
	$m.__track_lines__[140] = 'bones.string.py, line 140:\n    self.languages = languages';
	$m.__track_lines__[141] = 'bones.string.py, line 141:\n    self.boneName = boneName';
	$m.__track_lines__[142] = 'bones.string.py, line 142:\n    self.currentTagToDrag = None';
	$m.__track_lines__[143] = 'bones.string.py, line 143:\n    self.currentLanguage = None';
	$m.__track_lines__[145] = 'bones.string.py, line 145:\n    if self.languages and self.multiple:';
	$m.__track_lines__[146] = 'bones.string.py, line 146:\n    self["class"].append("is_translated")';
	$m.__track_lines__[147] = 'bones.string.py, line 147:\n    self["class"].append("is_multiple")';
	$m.__track_lines__[148] = 'bones.string.py, line 148:\n    self.languagesContainer = html5.Div()';
	$m.__track_lines__[149] = 'bones.string.py, line 149:\n    self.appendChild( self.languagesContainer )';
	$m.__track_lines__[150] = 'bones.string.py, line 150:\n    self.buttonContainer = html5.Div()';
	$m.__track_lines__[151] = 'bones.string.py, line 151:\n    self.buttonContainer["class"] = "languagebuttons"';
	$m.__track_lines__[152] = 'bones.string.py, line 152:\n    self.appendChild( self.buttonContainer )';
	$m.__track_lines__[153] = 'bones.string.py, line 153:\n    self.langEdits = {}';
	$m.__track_lines__[154] = 'bones.string.py, line 154:\n    self.langBtns = {}';
	$m.__track_lines__[156] = 'bones.string.py, line 156:\n    for lang in self.languages:';
	$m.__track_lines__[157] = 'bones.string.py, line 157:\n    tagContainer = html5.Div()';
	$m.__track_lines__[158] = 'bones.string.py, line 158:\n    tagContainer["class"].append("lang_%s" % lang )';
	$m.__track_lines__[159] = 'bones.string.py, line 159:\n    tagContainer["class"].append("tagcontainer")';
	$m.__track_lines__[160] = 'bones.string.py, line 160:\n    tagContainer["style"]["display"] = "none"';
	$m.__track_lines__[162] = 'bones.string.py, line 162:\n    langBtn = html5.ext.Button(lang, callback=self.onLangBtnClicked)';
	$m.__track_lines__[163] = 'bones.string.py, line 163:\n    langBtn.lang = lang';
	$m.__track_lines__[164] = 'bones.string.py, line 164:\n    self.buttonContainer.appendChild(langBtn)';
	$m.__track_lines__[166] = 'bones.string.py, line 166:\n    if not self.readOnly:';
	$m.__track_lines__[167] = 'bones.string.py, line 167:\n    addBtn = html5.ext.Button(translate("New"), callback=self.onBtnGenTag)';
	$m.__track_lines__[168] = 'bones.string.py, line 168:\n    addBtn["class"].append("icon new tag")';
	$m.__track_lines__[169] = 'bones.string.py, line 169:\n    addBtn.lang = lang';
	$m.__track_lines__[170] = 'bones.string.py, line 170:\n    tagContainer.appendChild(addBtn)';
	$m.__track_lines__[172] = 'bones.string.py, line 172:\n    self.languagesContainer.appendChild(tagContainer)';
	$m.__track_lines__[173] = 'bones.string.py, line 173:\n    self.langEdits[lang] = tagContainer';
	$m.__track_lines__[174] = 'bones.string.py, line 174:\n    self.langBtns[lang] = langBtn';
	$m.__track_lines__[176] = 'bones.string.py, line 176:\n    self.setLang(self.languages[0])';
	$m.__track_lines__[179] = 'bones.string.py, line 179:\n    self["class"].append("is_translated")';
	$m.__track_lines__[180] = 'bones.string.py, line 180:\n    self.languagesContainer = html5.Div()';
	$m.__track_lines__[181] = 'bones.string.py, line 181:\n    self.appendChild( self.languagesContainer )';
	$m.__track_lines__[182] = 'bones.string.py, line 182:\n    self.buttonContainer = html5.Div()';
	$m.__track_lines__[183] = 'bones.string.py, line 183:\n    self.buttonContainer["class"] = "languagebuttons"';
	$m.__track_lines__[184] = 'bones.string.py, line 184:\n    self.appendChild( self.buttonContainer )';
	$m.__track_lines__[185] = 'bones.string.py, line 185:\n    self.langEdits = {}';
	$m.__track_lines__[186] = 'bones.string.py, line 186:\n    self.langBtns = {}';
	$m.__track_lines__[188] = 'bones.string.py, line 188:\n    for lang in self.languages:';
	$m.__track_lines__[189] = 'bones.string.py, line 189:\n    langBtn = html5.ext.Button(lang, callback=self.onLangBtnClicked)';
	$m.__track_lines__[190] = 'bones.string.py, line 190:\n    langBtn.lang = lang';
	$m.__track_lines__[191] = 'bones.string.py, line 191:\n    self.buttonContainer.appendChild(langBtn)';
	$m.__track_lines__[193] = 'bones.string.py, line 193:\n    inputField = html5.Input()';
	$m.__track_lines__[194] = 'bones.string.py, line 194:\n    inputField["type"] = "text"';
	$m.__track_lines__[195] = 'bones.string.py, line 195:\n    inputField["style"]["display"] = "none"';
	$m.__track_lines__[196] = 'bones.string.py, line 196:\n    inputField["class"].append("lang_%s" % lang)';
	$m.__track_lines__[198] = 'bones.string.py, line 198:\n    if self.readOnly:';
	$m.__track_lines__[199] = 'bones.string.py, line 199:\n    inputField["readonly"] = True';
	$m.__track_lines__[201] = 'bones.string.py, line 201:\n    self.languagesContainer.appendChild( inputField )';
	$m.__track_lines__[202] = 'bones.string.py, line 202:\n    self.langEdits[lang] = inputField';
	$m.__track_lines__[203] = 'bones.string.py, line 203:\n    self.langBtns[lang] = langBtn';
	$m.__track_lines__[205] = 'bones.string.py, line 205:\n    self.setLang(self.languages[0])';
	$m.__track_lines__[208] = 'bones.string.py, line 208:\n    self["class"].append("is_multiple")';
	$m.__track_lines__[209] = 'bones.string.py, line 209:\n    self.tagContainer = html5.Div()';
	$m.__track_lines__[210] = 'bones.string.py, line 210:\n    self.tagContainer["class"].append("tagcontainer")';
	$m.__track_lines__[211] = 'bones.string.py, line 211:\n    self.appendChild(self.tagContainer)';
	$m.__track_lines__[213] = 'bones.string.py, line 213:\n    if not self.readOnly:';
	$m.__track_lines__[214] = 'bones.string.py, line 214:\n    addBtn = html5.ext.Button(translate("New"), callback=self.onBtnGenTag)';
	$m.__track_lines__[215] = 'bones.string.py, line 215:\n    addBtn.lang = None';
	$m.__track_lines__[216] = 'bones.string.py, line 216:\n    addBtn["class"].append("icon new tag")';
	$m.__track_lines__[218] = 'bones.string.py, line 218:\n    self.tagContainer.appendChild(addBtn)';
	$m.__track_lines__[221] = 'bones.string.py, line 221:\n    self.input = html5.Input()';
	$m.__track_lines__[222] = 'bones.string.py, line 222:\n    self.input["type"] = "text"';
	$m.__track_lines__[223] = 'bones.string.py, line 223:\n    self.appendChild( self.input )';
	$m.__track_lines__[225] = 'bones.string.py, line 225:\n    if self.readOnly:';
	$m.__track_lines__[226] = 'bones.string.py, line 226:\n    self.input["readonly"] = True';
	$m.__track_lines__[229] = 'bones.string.py, line 228:\n    @staticmethod ... def fromSkelStructure( moduleName, boneName, skelStructure ):';
	$m.__track_lines__[230] = 'bones.string.py, line 230:\n    readOnly = "readonly" in skelStructure[ boneName ].keys() and skelStructure[ boneName ]["readonly"]';
	$m.__track_lines__[232] = 'bones.string.py, line 232:\n    if boneName in skelStructure.keys():';
	$m.__track_lines__[233] = 'bones.string.py, line 233:\n    if "multiple" in skelStructure[ boneName ].keys():';
	$m.__track_lines__[234] = 'bones.string.py, line 234:\n    multiple = skelStructure[ boneName ]["multiple"]';
	$m.__track_lines__[236] = 'bones.string.py, line 236:\n    multiple = False';
	$m.__track_lines__[237] = 'bones.string.py, line 237:\n    if "languages" in skelStructure[ boneName ].keys():';
	$m.__track_lines__[238] = 'bones.string.py, line 238:\n    languages = skelStructure[ boneName ]["languages"]';
	$m.__track_lines__[240] = 'bones.string.py, line 240:\n    languages = None';
	$m.__track_lines__[241] = 'bones.string.py, line 241:\n    return( StringEditBone( moduleName, boneName, readOnly, multiple=multiple, languages=languages ) )';
	$m.__track_lines__[243] = 'bones.string.py, line 243:\n    def onLangBtnClicked(self, btn):';
	$m.__track_lines__[244] = 'bones.string.py, line 244:\n    self.setLang( btn.lang )';
	$m.__track_lines__[246] = 'bones.string.py, line 246:\n    def isFilled(self, lang=None):';
	$m.__track_lines__[247] = 'bones.string.py, line 247:\n    if self.languages:';
	$m.__track_lines__[248] = 'bones.string.py, line 248:\n    if lang is None:';
	$m.__track_lines__[249] = 'bones.string.py, line 249:\n    lang = self.languages[0]';
	$m.__track_lines__[251] = 'bones.string.py, line 251:\n    if self.multiple:';
	$m.__track_lines__[252] = 'bones.string.py, line 252:\n    for item in self.langEdits[lang]._children:';
	$m.__track_lines__[253] = 'bones.string.py, line 253:\n    if isinstance(item, Tag) and item.input["value"]:';
	$m.__track_lines__[254] = 'bones.string.py, line 254:\n    return True';
	$m.__track_lines__[256] = 'bones.string.py, line 256:\n    return False';
	$m.__track_lines__[258] = 'bones.string.py, line 258:\n    return bool(len(self.langEdits[lang]["value"]))';
	$m.__track_lines__[261] = 'bones.string.py, line 261:\n    for item in self.tagContainer._children:';
	$m.__track_lines__[262] = 'bones.string.py, line 262:\n    if isinstance(item, Tag) and item.input["value"]:';
	$m.__track_lines__[263] = 'bones.string.py, line 263:\n    return True';
	$m.__track_lines__[265] = 'bones.string.py, line 265:\n    return False';
	$m.__track_lines__[267] = 'bones.string.py, line 267:\n    return bool(len(self.input["value"]))';
	$m.__track_lines__[269] = 'bones.string.py, line 269:\n    def _updateLanguageButtons(self):';
	$m.__track_lines__[270] = 'bones.string.py, line 270:\n    if not self.languages:';
	$m.__track_lines__[271] = 'bones.string.py, line 271:\n    return';
	$m.__track_lines__[273] = 'bones.string.py, line 273:\n    for lang in self.languages:';
	$m.__track_lines__[274] = 'bones.string.py, line 274:\n    if self.isFilled(lang):';
	$m.__track_lines__[275] = 'bones.string.py, line 275:\n    self.langBtns[lang]["class"].remove("is_unfilled")';
	$m.__track_lines__[276] = 'bones.string.py, line 276:\n    if not "is_filled" in self.langBtns[lang]["class"]:';
	$m.__track_lines__[277] = 'bones.string.py, line 277:\n    self.langBtns[lang]["class"].append("is_filled")';
	$m.__track_lines__[279] = 'bones.string.py, line 279:\n    self.langBtns[lang]["class"].remove("is_filled")';
	$m.__track_lines__[280] = 'bones.string.py, line 280:\n    if not "is_unfilled" in self.langBtns[lang]["class"]:';
	$m.__track_lines__[281] = 'bones.string.py, line 281:\n    self.langBtns[lang]["class"].append("is_unfilled")';
	$m.__track_lines__[283] = 'bones.string.py, line 283:\n    if lang == self.currentLanguage:';
	$m.__track_lines__[287] = 'bones.string.py, line 287:\n    if not "is_active" in self.langBtns[lang]["class"]:';
	$m.__track_lines__[288] = 'bones.string.py, line 288:\n    self.langBtns[lang]["class"].append("is_active")';
	$m.__track_lines__[290] = 'bones.string.py, line 290:\n    self.langBtns[lang]["class"].remove("is_active")';
	$m.__track_lines__[292] = 'bones.string.py, line 292:\n    def setLang(self, lang):';
	$m.__track_lines__[293] = 'bones.string.py, line 293:\n    if self.currentLanguage:';
	$m.__track_lines__[294] = 'bones.string.py, line 294:\n    self.langEdits[ self.currentLanguage ]["style"]["display"] = "none"';
	$m.__track_lines__[296] = 'bones.string.py, line 296:\n    self.currentLanguage = lang';
	$m.__track_lines__[297] = 'bones.string.py, line 297:\n    self.langEdits[ self.currentLanguage ]["style"]["display"] = ""';
	$m.__track_lines__[298] = 'bones.string.py, line 298:\n    self._updateLanguageButtons()';
	$m.__track_lines__[300] = 'bones.string.py, line 300:\n    for btn in self.buttonContainer._children:';
	$m.__track_lines__[301] = 'bones.string.py, line 301:\n    if btn.lang == lang:';
	$m.__track_lines__[302] = 'bones.string.py, line 302:\n    if "is_active" not in btn[ "class" ]:';
	$m.__track_lines__[303] = 'bones.string.py, line 303:\n    btn[ "class" ].append( "is_active" )';
	$m.__track_lines__[305] = 'bones.string.py, line 305:\n    btn[ "class" ].remove( "is_active" )';
	$m.__track_lines__[307] = 'bones.string.py, line 307:\n    def onBtnGenTag(self, btn):';
	$m.__track_lines__[308] = 'bones.string.py, line 308:\n    tag = self.genTag("", lang=btn.lang)';
	$m.__track_lines__[309] = 'bones.string.py, line 309:\n    tag.focus()';
	$m.__track_lines__[311] = 'bones.string.py, line 311:\n    def unserialize(self, data, extendedErrorInformation=None):';
	$m.__track_lines__[312] = 'bones.string.py, line 312:\n    if not self.boneName in data.keys():';
	$m.__track_lines__[313] = 'bones.string.py, line 313:\n    return';
	$m.__track_lines__[315] = 'bones.string.py, line 315:\n    data = data[self.boneName]';
	$m.__track_lines__[316] = 'bones.string.py, line 316:\n    if not data:';
	$m.__track_lines__[317] = 'bones.string.py, line 317:\n    return';
	$m.__track_lines__[319] = 'bones.string.py, line 319:\n    if self.languages and self.multiple:';
	$m.__track_lines__[320] = 'bones.string.py, line 320:\n    assert isinstance(data, dict)';
	$m.__track_lines__[322] = 'bones.string.py, line 322:\n    for lang in self.languages:';
	$m.__track_lines__[324] = 'bones.string.py, line 324:\n    if lang in data.keys():';
	$m.__track_lines__[325] = 'bones.string.py, line 325:\n    val = data[lang]';
	$m.__track_lines__[327] = 'bones.string.py, line 327:\n    if isinstance(val, str):';
	$m.__track_lines__[328] = 'bones.string.py, line 328:\n    self.genTag(html5.utils.unescape(val), lang=lang)';
	$m.__track_lines__[330] = 'bones.string.py, line 330:\n    for v in val:';
	$m.__track_lines__[331] = 'bones.string.py, line 331:\n    self.genTag(html5.utils.unescape(v), lang=lang)';
	$m.__track_lines__[334] = 'bones.string.py, line 334:\n    assert isinstance(data,dict)';
	$m.__track_lines__[336] = 'bones.string.py, line 336:\n    for lang in self.languages:';
	$m.__track_lines__[337] = 'bones.string.py, line 337:\n    if lang in data.keys() and data[lang]:';
	$m.__track_lines__[338] = 'bones.string.py, line 338:\n    self.langEdits[lang]["value"] = html5.utils.unescape(str(data[lang]))';
	$m.__track_lines__[340] = 'bones.string.py, line 340:\n    self.langEdits[lang]["value"] = ""';
	$m.__track_lines__[344] = 'bones.string.py, line 344:\n    if isinstance( data,list ):';
	$m.__track_lines__[345] = 'bones.string.py, line 345:\n    for tagStr in data:';
	$m.__track_lines__[346] = 'bones.string.py, line 346:\n    self.genTag(html5.utils.unescape(tagStr))';
	$m.__track_lines__[348] = 'bones.string.py, line 348:\n    self.genTag(html5.utils.unescape(data))';
	$m.__track_lines__[351] = 'bones.string.py, line 351:\n    self.input["value"] = html5.utils.unescape(str(data))';
	$m.__track_lines__[353] = 'bones.string.py, line 353:\n    self._updateLanguageButtons()';
	$m.__track_lines__[355] = 'bones.string.py, line 355:\n    def serializeForPost(self):';
	$m.__track_lines__[356] = 'bones.string.py, line 356:\n    res = {}';
	$m.__track_lines__[358] = 'bones.string.py, line 358:\n    if self.languages and self.multiple:';
	$m.__track_lines__[359] = 'bones.string.py, line 359:\n    for lang in self.languages:';
	$m.__track_lines__[360] = 'bones.string.py, line 360:\n    res[ "%s.%s" % (self.boneName, lang ) ] = []';
	$m.__track_lines__[361] = 'bones.string.py, line 361:\n    for child in self.langEdits[ lang ]._children:';
	$m.__track_lines__[362] = 'bones.string.py, line 362:\n    if isinstance( child, Tag ):';
	$m.__track_lines__[363] = 'bones.string.py, line 363:\n    res[ "%s.%s" % (self.boneName, lang ) ].append( child.input["value"] )';
	$m.__track_lines__[366] = 'bones.string.py, line 366:\n    for lang in self.languages:';
	$m.__track_lines__[367] = 'bones.string.py, line 367:\n    txt = self.langEdits[ lang ]["value"]';
	$m.__track_lines__[368] = 'bones.string.py, line 368:\n    if txt:';
	$m.__track_lines__[369] = 'bones.string.py, line 369:\n    res[ "%s.%s" % (self.boneName, lang) ] = txt';
	$m.__track_lines__[372] = 'bones.string.py, line 372:\n    res[ self.boneName ] = []';
	$m.__track_lines__[373] = 'bones.string.py, line 373:\n    for child in self.tagContainer._children:';
	$m.__track_lines__[374] = 'bones.string.py, line 374:\n    if isinstance( child, Tag ):';
	$m.__track_lines__[375] = 'bones.string.py, line 375:\n    res[ self.boneName ].append( child.input["value"] )';
	$m.__track_lines__[378] = 'bones.string.py, line 378:\n    res[ self.boneName ] = self.input["value"]';
	$m.__track_lines__[380] = 'bones.string.py, line 380:\n    return res';
	$m.__track_lines__[382] = 'bones.string.py, line 382:\n    def serializeForDocument(self):';
	$m.__track_lines__[383] = 'bones.string.py, line 383:\n    return self.serialize()';
	$m.__track_lines__[385] = 'bones.string.py, line 385:\n    def genTag(self, tag, editMode=False, lang=None):';
	$m.__track_lines__[386] = 'bones.string.py, line 386:\n    tag = Tag(self, tag, editMode, readonly = self.readOnly)';
	$m.__track_lines__[388] = 'bones.string.py, line 388:\n    if lang is not None:';
	$m.__track_lines__[389] = 'bones.string.py, line 389:\n    self.langEdits[lang].appendChild(tag)';
	$m.__track_lines__[391] = 'bones.string.py, line 391:\n    self.tagContainer.appendChild(tag)';
	$m.__track_lines__[393] = 'bones.string.py, line 393:\n    return tag';
	$m.__track_lines__[396] = 'bones.string.py, line 396:\n    def CheckForStringBone(  moduleName, boneName, skelStucture, *args, **kwargs ):';
	$m.__track_lines__[397] = 'bones.string.py, line 397:\n    return str(skelStucture[boneName]["type"]).startswith("str")';
	$m.__track_lines__[400] = 'bones.string.py, line 400:\n    class ExtendedStringSearch( html5.Div ):';
	$m.__track_lines__[401] = 'bones.string.py, line 401:\n    def __init__(self, extension, view, modul, *args, **kwargs ):';
	$m.__track_lines__[402] = 'bones.string.py, line 402:\n    super( ExtendedStringSearch, self ).__init__( *args, **kwargs )';
	$m.__track_lines__[403] = 'bones.string.py, line 403:\n    self.view = view';
	$m.__track_lines__[404] = 'bones.string.py, line 404:\n    self.extension = extension';
	$m.__track_lines__[405] = 'bones.string.py, line 405:\n    self.module = modul';
	$m.__track_lines__[406] = 'bones.string.py, line 406:\n    self.opMode = extension["mode"]';
	$m.__track_lines__[407] = 'bones.string.py, line 407:\n    self.filterChangedEvent = EventDispatcher("filterChanged")';
	$m.__track_lines__[408] = 'bones.string.py, line 408:\n    assert self.opMode in ["equals","from", "to", "prefix","range"]';
	$m.__track_lines__[409] = 'bones.string.py, line 409:\n    self.appendChild( html5.TextNode(extension["name"]))';
	$m.__track_lines__[410] = 'bones.string.py, line 410:\n    self.sinkEvent("onKeyDown")';
	$m.__track_lines__[411] = 'bones.string.py, line 411:\n    if self.opMode in ["equals","from", "to", "prefix"]:';
	$m.__track_lines__[412] = 'bones.string.py, line 412:\n    self.input = html5.Input()';
	$m.__track_lines__[413] = 'bones.string.py, line 413:\n    self.input["type"] = "text"';
	$m.__track_lines__[414] = 'bones.string.py, line 414:\n    self.appendChild( self.input )';
	$m.__track_lines__[416] = 'bones.string.py, line 416:\n    self.input1 = html5.Input()';
	$m.__track_lines__[417] = 'bones.string.py, line 417:\n    self.input1["type"] = "text"';
	$m.__track_lines__[418] = 'bones.string.py, line 418:\n    self.appendChild( self.input1 )';
	$m.__track_lines__[419] = 'bones.string.py, line 419:\n    self.appendChild( html5.TextNode("to") )';
	$m.__track_lines__[420] = 'bones.string.py, line 420:\n    self.input2 = html5.Input()';
	$m.__track_lines__[421] = 'bones.string.py, line 421:\n    self.input2["type"] = "text"';
	$m.__track_lines__[422] = 'bones.string.py, line 422:\n    self.appendChild( self.input2 )';
	$m.__track_lines__[424] = 'bones.string.py, line 424:\n    def onKeyDown(self, event):';
	$m.__track_lines__[425] = 'bones.string.py, line 425:\n    if isReturn(event.keyCode):';
	$m.__track_lines__[426] = 'bones.string.py, line 426:\n    self.filterChangedEvent.fire()';
	$m.__track_lines__[428] = 'bones.string.py, line 428:\n    def updateFilter(self, filter):';
	$m.__track_lines__[429] = 'bones.string.py, line 429:\n    if self.opMode=="equals":';
	$m.__track_lines__[430] = 'bones.string.py, line 430:\n    filter[ self.extension["target"] ] = self.input["value"]';
	$m.__track_lines__[432] = 'bones.string.py, line 432:\n    filter[ self.extension["target"]+"$gt" ] = self.input["value"]';
	$m.__track_lines__[434] = 'bones.string.py, line 434:\n    filter[ self.extension["target"]+"$lt" ] = self.input["value"]';
	$m.__track_lines__[436] = 'bones.string.py, line 436:\n    filter[ self.extension["target"]+"$lk" ] = self.input["value"]';
	$m.__track_lines__[438] = 'bones.string.py, line 438:\n    filter[ self.extension["target"]+"$gt" ] = self.input1["value"]';
	$m.__track_lines__[439] = 'bones.string.py, line 439:\n    filter[ self.extension["target"]+"$lt" ] = self.input2["value"]';
	$m.__track_lines__[440] = 'bones.string.py, line 440:\n    return( filter )';
	$m.__track_lines__[443] = 'bones.string.py, line 442:\n    @staticmethod ... def canHandleExtension( extension, view, modul ):';
	$m.__track_lines__[444] = 'bones.string.py, line 444:\n    return( isinstance( extension, dict) and "type" in extension.keys() and (extension["type"]=="string" or extension["type"].startswith("string.") ) )';
	$m.__track_lines__[448] = 'bones.string.py, line 448:\n    editBoneSelector.insert( 3, CheckForStringBone, StringEditBone)';
	$m.__track_lines__[449] = 'bones.string.py, line 449:\n    viewDelegateSelector.insert( 3, CheckForStringBone, StringViewBoneDelegate)';
	$m.__track_lines__[450] = 'bones.string.py, line 450:\n    extendedSearchWidgetSelector.insert( 1, ExtendedStringSearch.canHandleExtension, ExtendedStringSearch )';
	$m.__track_lines__[451] = 'bones.string.py, line 451:\n    extractorDelegateSelector.insert(3, CheckForStringBone, StringBoneExtractor)';


	$pyjs['track']['module']='bones.string';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=2;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['html5'] = $p['___import___']('html5', 'bones');
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=4;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['editBoneSelector'] = $p['___import___']('priorityqueue.editBoneSelector', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['viewDelegateSelector'] = $p['___import___']('priorityqueue.viewDelegateSelector', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['extendedSearchWidgetSelector'] = $p['___import___']('priorityqueue.extendedSearchWidgetSelector', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['extractorDelegateSelector'] = $p['___import___']('priorityqueue.extractorDelegateSelector', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=5;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['conf'] = $p['___import___']('config.conf', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=6;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['EventDispatcher'] = $p['___import___']('event.EventDispatcher', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=7;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$p['__import_all__']('html5.keycodes', 'bones', $m, null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=8;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['translate'] = $p['___import___']('i18n.translate', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=9;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['BaseBoneExtractor'] = $p['___import___']('bones.base.BaseBoneExtractor', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=11;
	$m['StringBoneExtractor'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'bones.string';
		$pyjs['track']['lineno']=13;
		$method = $pyjs__bind_method2('render', function(data, field) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				field = arguments[2];
			}
			var resstr;
			$pyjs['track']={'module':'bones.string', 'lineno':13};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.string';
			$pyjs['track']['lineno']=13;
			$pyjs['track']['lineno']=14;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return data['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()['__contains__'](field));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})()) {
				$pyjs['track']['lineno']=16;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](data['__getitem__'](field), $p['dict']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})()) {
					$pyjs['track']['lineno']=17;
					resstr = '';
					$pyjs['track']['lineno']=18;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['conf']['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})()['__contains__']('currentlanguage'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})()) {
						$pyjs['track']['lineno']=19;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
						return data['__getitem__'](field)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})()['__contains__']($m['conf']['__getitem__']('currentlanguage')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})()) {
							$pyjs['track']['lineno']=20;
							resstr = (function(){try{try{$pyjs['in_try_except'] += 1;
							return (function(){try{try{$pyjs['in_try_except'] += 1;
							return (function(){try{try{$pyjs['in_try_except'] += 1;
							return data['__getitem__'](field)['__getitem__']($m['conf']['__getitem__']('currentlanguage'))['$$replace']('&quot;', "'");
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})()['$$replace'](';', ' ');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})()['$$replace']('"', "'");
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
						}
						else {
							$pyjs['track']['lineno']=22;
							if ((function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['bool'](($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['len']((function(){try{try{$pyjs['in_try_except'] += 1;
							return data['__getitem__'](field)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})(), 0) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})()) {
								$pyjs['track']['lineno']=23;
								resstr = (function(){try{try{$pyjs['in_try_except'] += 1;
								return (function(){try{try{$pyjs['in_try_except'] += 1;
								return (function(){try{try{$pyjs['in_try_except'] += 1;
								return data['__getitem__'](field)['__getitem__']((function(){try{try{$pyjs['in_try_except'] += 1;
								return data['__getitem__'](field)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})()['__getitem__'](0))['$$replace']('&quot;', "'");
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})()['$$replace'](';', ' ');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})()['$$replace']('"', "'");
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
							}
						}
					}
					$pyjs['track']['lineno']=24;
					$pyjs['track']['lineno']=24;
					var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['sprintf']('"%s"', resstr);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](data['__getitem__'](field), $p['list']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})()) {
					$pyjs['track']['lineno']=26;
					$pyjs['track']['lineno']=26;
					var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
					return ', '['join'](function(){
						var $iter1_nextval,$iter1_type,$collcomp1,$iter1_iter,item,$iter1_idx,$pyjs__trackstack_size_1,$iter1_array;
	$collcomp1 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter1_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return data['__getitem__'](field);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
					$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
					while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
						item = $iter1_nextval['$nextval'];
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $collcomp1['append']((function(){try{try{$pyjs['in_try_except'] += 1;
						return (function(){try{try{$pyjs['in_try_except'] += 1;
						return (function(){try{try{$pyjs['in_try_except'] += 1;
						return item['$$replace']('&quot;', '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})()['$$replace'](';', ' ');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})()['$$replace']('"', "'");
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='bones.string';

	return $collcomp1;}());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=28;
					$pyjs['track']['lineno']=28;
					var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['str']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['sprintf']('"%s"', (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return data['__getitem__'](field)['$$replace']('&quot;', '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})()['$$replace'](';', ' ');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})()['$$replace']('"', "'");
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
			}
			$pyjs['track']['lineno']=29;
			$pyjs['track']['lineno']=29;
			var $pyjs__ret = $m['conf']['__getitem__']('empty_value');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['data'],['field']]);
		$cls_definition['render'] = $method;
		$pyjs['track']['lineno']=11;
		var $bases = new Array($m['BaseBoneExtractor']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('StringBoneExtractor', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=31;
	$m['StringViewBoneDelegate'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'bones.string';
		$pyjs['track']['lineno']=32;
		$method = $pyjs__bind_method2('__init__', function(moduleName, boneName, skelStructure) {
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
				moduleName = arguments[1];
				boneName = arguments[2];
				skelStructure = arguments[3];
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
				if (typeof skelStructure != 'undefined') {
					if (skelStructure !== null && typeof skelStructure['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = skelStructure;
						skelStructure = arguments[4];
					}
				} else 				if (typeof boneName != 'undefined') {
					if (boneName !== null && typeof boneName['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = boneName;
						boneName = arguments[4];
					}
				} else 				if (typeof moduleName != 'undefined') {
					if (moduleName !== null && typeof moduleName['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = moduleName;
						moduleName = arguments[4];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[4];
					}
				} else {
				}
			}

			$pyjs['track']={'module':'bones.string', 'lineno':32};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.string';
			$pyjs['track']['lineno']=32;
			$pyjs['track']['lineno']=33;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['StringViewBoneDelegate'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})()['__init__']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})();
			$pyjs['track']['lineno']=34;
			self['skelStructure'] = skelStructure;
			$pyjs['track']['lineno']=35;
			self['boneName'] = boneName;
			$pyjs['track']['lineno']=36;
			self['moduleName'] = moduleName;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['moduleName'],['boneName'],['skelStructure']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=38;
		$method = $pyjs__bind_method2('render', function(data, field) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				field = arguments[2];
			}
			var resstr,output;
			$pyjs['track']={'module':'bones.string', 'lineno':38};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.string';
			$pyjs['track']['lineno']=38;
			$pyjs['track']['lineno']=39;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return data['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})()['__contains__'](field));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})()) {
				$pyjs['track']['lineno']=41;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](data['__getitem__'](field), $p['dict']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})()) {
					$pyjs['track']['lineno']=42;
					resstr = '';
					$pyjs['track']['lineno']=43;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['conf']['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})()['__contains__']('currentlanguage'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})()) {
						$pyjs['track']['lineno']=44;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
						return data['__getitem__'](field)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})()['__contains__']($m['conf']['__getitem__']('currentlanguage')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})()) {
							$pyjs['track']['lineno']=45;
							resstr = data['__getitem__'](field)['__getitem__']($m['conf']['__getitem__']('currentlanguage'));
						}
						else {
							$pyjs['track']['lineno']=47;
							if ((function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['bool'](($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['len']((function(){try{try{$pyjs['in_try_except'] += 1;
							return data['__getitem__'](field)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})(), 0) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})()) {
								$pyjs['track']['lineno']=48;
								resstr = data['__getitem__'](field)['__getitem__']((function(){try{try{$pyjs['in_try_except'] += 1;
								return data['__getitem__'](field)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})()['__getitem__'](0));
							}
						}
					}
					$pyjs['track']['lineno']=49;
					$pyjs['track']['lineno']=49;
					var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
					return self['getViewElement'](resstr, data['__getitem__'](field));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=54;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['isinstance'](data['__getitem__'](field), $p['list']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})()) {
						$pyjs['track']['lineno']=55;
						output = (function(){try{try{$pyjs['in_try_except'] += 1;
						return ', '['join'](data['__getitem__'](field));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})();
					}
					else {
						$pyjs['track']['lineno']=57;
						output = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['str'](data['__getitem__'](field));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})();
					}
					$pyjs['track']['lineno']=59;
					$pyjs['track']['lineno']=59;
					var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
					return self['getViewElement'](output, false);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
			}
			$pyjs['track']['lineno']=61;
			$pyjs['track']['lineno']=61;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['getViewElement']($m['conf']['__getitem__']('empty_value'), false);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['data'],['field']]);
		$cls_definition['render'] = $method;
		$pyjs['track']['lineno']=63;
		$method = $pyjs__bind_method2('getViewElement', function(labelstr, datafield) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				labelstr = arguments[1];
				datafield = arguments[2];
			}
			var aspan;
			$pyjs['track']={'module':'bones.string', 'lineno':63};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.string';
			$pyjs['track']['lineno']=63;
			$pyjs['track']['lineno']=64;
			labelstr = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['utils']['unescape'](labelstr);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})();
			$pyjs['track']['lineno']=66;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool'](datafield));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})()) {
				$pyjs['track']['lineno']=67;
				$pyjs['track']['lineno']=67;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Label'](labelstr);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			else {
				$pyjs['track']['lineno']=69;
				aspan = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Span']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})();
				$pyjs['track']['lineno']=70;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return aspan['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['TextNode'](labelstr);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})();
				$pyjs['track']['lineno']=71;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return aspan['__setitem__']('Title', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str'](datafield);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})();
				$pyjs['track']['lineno']=72;
				$pyjs['track']['lineno']=72;
				var $pyjs__ret = aspan;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['labelstr'],['datafield']]);
		$cls_definition['getViewElement'] = $method;
		$pyjs['track']['lineno']=31;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('StringViewBoneDelegate', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=74;
	$m['Tag'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'bones.string';
		$pyjs['track']['lineno']=75;
		$method = $pyjs__bind_method2('__init__', function(parentBone, tag, isEditMode, readonly) {
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
				parentBone = arguments[1];
				tag = arguments[2];
				isEditMode = arguments[3];
				readonly = arguments[4];
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
				if (typeof readonly != 'undefined') {
					if (readonly !== null && typeof readonly['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = readonly;
						readonly = arguments[5];
					}
				} else 				if (typeof isEditMode != 'undefined') {
					if (isEditMode !== null && typeof isEditMode['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = isEditMode;
						isEditMode = arguments[5];
					}
				} else 				if (typeof tag != 'undefined') {
					if (tag !== null && typeof tag['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = tag;
						tag = arguments[5];
					}
				} else 				if (typeof parentBone != 'undefined') {
					if (parentBone !== null && typeof parentBone['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = parentBone;
						parentBone = arguments[5];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[5];
					}
				} else {
				}
			}
			if (typeof readonly == 'undefined') readonly=arguments['callee']['__args__'][6][1];
			var delBtn;
			$pyjs['track']={'module':'bones.string', 'lineno':75};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.string';
			$pyjs['track']['lineno']=75;
			$pyjs['track']['lineno']=76;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['Tag'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})();
			$pyjs['track']['lineno']=77;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__getitem__']('class')['append']('tag');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})();
			$pyjs['track']['lineno']=79;
			self['parentBone'] = parentBone;
			$pyjs['track']['lineno']=81;
			self['input'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Input']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})();
			$pyjs['track']['lineno']=82;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'input')['__setitem__']('type', 'text');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})();
			$pyjs['track']['lineno']=83;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'input')['__setitem__']('value', tag);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})();
			$pyjs['track']['lineno']=84;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'input'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})();
			$pyjs['track']['lineno']=86;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](readonly);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})()) {
				$pyjs['track']['lineno']=87;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'input')['__setitem__']('readonly', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=89;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__setitem__']('draggable', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})();
				$pyjs['track']['lineno']=90;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['sinkEvent']('onDrop', 'onDragOver', 'onDragStart', 'onDragEnd');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})();
				$pyjs['track']['lineno']=92;
				delBtn = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['ext']['Button']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['translate']('Delete');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})(), $p['getattr'](self, 'onDelBtnClick'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})();
				$pyjs['track']['lineno']=93;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return delBtn['__getitem__']('class')['append']('icon delete tag');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})();
				$pyjs['track']['lineno']=94;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['appendChild'](delBtn);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['parentBone'],['tag'],['isEditMode'],['readonly', false]]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=96;
		$method = $pyjs__bind_method2('onDelBtnClick', function() {
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

			$pyjs['track']={'module':'bones.string', 'lineno':96};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.string';
			$pyjs['track']['lineno']=96;
			$pyjs['track']['lineno']=97;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})()['removeChild'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['onDelBtnClick'] = $method;
		$pyjs['track']['lineno']=99;
		$method = $pyjs__bind_method2('focus', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'bones.string', 'lineno':99};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.string';
			$pyjs['track']['lineno']=99;
			$pyjs['track']['lineno']=100;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['input']['focus']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['focus'] = $method;
		$pyjs['track']['lineno']=102;
		$method = $pyjs__bind_method2('onDragStart', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'bones.string', 'lineno':102};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.string';
			$pyjs['track']['lineno']=102;
			$pyjs['track']['lineno']=103;
			$p['getattr'](self, 'parentBone')['currentTagToDrag'] = self;
			$pyjs['track']['lineno']=104;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return event['dataTransfer']['setData']('text', $p['getattr'](self, 'input')['__getitem__']('value'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})();
			$pyjs['track']['lineno']=105;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return event['stopPropagation']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDragStart'] = $method;
		$pyjs['track']['lineno']=107;
		$method = $pyjs__bind_method2('onDragOver', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'bones.string', 'lineno':107};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.string';
			$pyjs['track']['lineno']=107;
			$pyjs['track']['lineno']=108;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return event['preventDefault']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDragOver'] = $method;
		$pyjs['track']['lineno']=110;
		$method = $pyjs__bind_method2('onDragEnd', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'bones.string', 'lineno':110};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.string';
			$pyjs['track']['lineno']=110;
			$pyjs['track']['lineno']=111;
			$p['getattr'](self, 'parentBone')['currentTagToDrag'] = null;
			$pyjs['track']['lineno']=112;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return event['stopPropagation']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDragEnd'] = $method;
		$pyjs['track']['lineno']=114;
		$method = $pyjs__bind_method2('onDrop', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var tagToDrop,$add2,$add1,$and1,parentChilds,$and2;
			$pyjs['track']={'module':'bones.string', 'lineno':114};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.string';
			$pyjs['track']['lineno']=114;
			$pyjs['track']['lineno']=115;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return event['preventDefault']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
}})();
			$pyjs['track']['lineno']=116;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return event['stopPropagation']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})();
			$pyjs['track']['lineno']=118;
			tagToDrop = $p['getattr']($p['getattr'](self, 'parentBone'), 'currentTagToDrag');
			$pyjs['track']['lineno']=120;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and1=tagToDrop)?!$p['op_eq'](tagToDrop, self):$and1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})()) {
				$pyjs['track']['lineno']=121;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['cmp']($p['getattr']($p['getattr'](self, 'element'), 'offsetTop'), $p['getattr']($p['getattr'](tagToDrop, 'element'), 'offsetTop')) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})()) {
					$pyjs['track']['lineno']=122;
					parentChilds = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_88_err){if (!$p['isinstance']($pyjs_dbg_88_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_88_err);}throw $pyjs_dbg_88_err;
}})()['children']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_89_err){if (!$p['isinstance']($pyjs_dbg_89_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_89_err);}throw $pyjs_dbg_89_err;
}})();
					$pyjs['track']['lineno']=124;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((parentChilds['__getitem__']((typeof ($usub1=1)=='number'?
						-$usub1:
						$p['op_usub']($usub1))) === self));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_90_err){if (!$p['isinstance']($pyjs_dbg_90_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_90_err);}throw $pyjs_dbg_90_err;
}})()) {
						$pyjs['track']['lineno']=125;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return (function(){try{try{$pyjs['in_try_except'] += 1;
						return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_91_err){if (!$p['isinstance']($pyjs_dbg_91_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_91_err);}throw $pyjs_dbg_91_err;
}})()['appendChild'](tagToDrop);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_92_err){if (!$p['isinstance']($pyjs_dbg_92_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_92_err);}throw $pyjs_dbg_92_err;
}})();
					}
					else {
						$pyjs['track']['lineno']=127;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return (function(){try{try{$pyjs['in_try_except'] += 1;
						return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_93_err){if (!$p['isinstance']($pyjs_dbg_93_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_93_err);}throw $pyjs_dbg_93_err;
}})()['insertBefore'](tagToDrop, parentChilds['__getitem__']($p['__op_add']($add1=(function(){try{try{$pyjs['in_try_except'] += 1;
						return parentChilds['index'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_94_err){if (!$p['isinstance']($pyjs_dbg_94_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_94_err);}throw $pyjs_dbg_94_err;
}})(),$add2=1)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_95_err){if (!$p['isinstance']($pyjs_dbg_95_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_95_err);}throw $pyjs_dbg_95_err;
}})();
					}
				}
				else {
					$pyjs['track']['lineno']=129;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_96_err){if (!$p['isinstance']($pyjs_dbg_96_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_96_err);}throw $pyjs_dbg_96_err;
}})()['insertBefore'](tagToDrop, self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_97_err){if (!$p['isinstance']($pyjs_dbg_97_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_97_err);}throw $pyjs_dbg_97_err;
}})();
				}
			}
			$pyjs['track']['lineno']=131;
			$p['getattr'](self, 'parentBone')['currentTagToDrag'] = null;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDrop'] = $method;
		$pyjs['track']['lineno']=74;
		var $bases = new Array($p['getattr']($m['html5'], 'Span'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Tag', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=133;
	$m['StringEditBone'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'bones.string';
		$pyjs['track']['lineno']=134;
		$method = $pyjs__bind_method2('__init__', function(moduleName, boneName, readOnly, multiple, languages) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,5,arguments['length']-1));

				var kwargs = arguments['length'] >= 6 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				moduleName = arguments[1];
				boneName = arguments[2];
				readOnly = arguments[3];
				multiple = arguments[4];
				languages = arguments[5];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,6,arguments['length']-1));

				var kwargs = arguments['length'] >= 7 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof languages != 'undefined') {
					if (languages !== null && typeof languages['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = languages;
						languages = arguments[6];
					}
				} else 				if (typeof multiple != 'undefined') {
					if (multiple !== null && typeof multiple['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = multiple;
						multiple = arguments[6];
					}
				} else 				if (typeof readOnly != 'undefined') {
					if (readOnly !== null && typeof readOnly['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = readOnly;
						readOnly = arguments[6];
					}
				} else 				if (typeof boneName != 'undefined') {
					if (boneName !== null && typeof boneName['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = boneName;
						boneName = arguments[6];
					}
				} else 				if (typeof moduleName != 'undefined') {
					if (moduleName !== null && typeof moduleName['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = moduleName;
						moduleName = arguments[6];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[6];
					}
				} else {
				}
			}
			if (typeof multiple == 'undefined') multiple=arguments['callee']['__args__'][6][1];
			if (typeof languages == 'undefined') languages=arguments['callee']['__args__'][7][1];
			var inputField,$iter3_array,$iter2_type,$iter3_idx,$iter2_iter,tagContainer,$iter3_iter,addBtn,$and8,$and3,$and4,$and5,$and6,$and7,$iter2_idx,$iter2_nextval,$iter3_type,lang,langBtn,$pyjs__trackstack_size_1,$iter3_nextval,$iter2_array;
			$pyjs['track']={'module':'bones.string', 'lineno':134};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.string';
			$pyjs['track']['lineno']=134;
			$pyjs['track']['lineno']=135;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['StringEditBone'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_98_err){if (!$p['isinstance']($pyjs_dbg_98_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_98_err);}throw $pyjs_dbg_98_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_99_err){if (!$p['isinstance']($pyjs_dbg_99_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_99_err);}throw $pyjs_dbg_99_err;
}})();
			$pyjs['track']['lineno']=136;
			self['moduleName'] = moduleName;
			$pyjs['track']['lineno']=137;
			self['boneName'] = boneName;
			$pyjs['track']['lineno']=138;
			self['readOnly'] = readOnly;
			$pyjs['track']['lineno']=139;
			self['multiple'] = multiple;
			$pyjs['track']['lineno']=140;
			self['languages'] = languages;
			$pyjs['track']['lineno']=141;
			self['boneName'] = boneName;
			$pyjs['track']['lineno']=142;
			self['currentTagToDrag'] = null;
			$pyjs['track']['lineno']=143;
			self['currentLanguage'] = null;
			$pyjs['track']['lineno']=145;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and3=$p['getattr'](self, 'languages'))?$p['getattr'](self, 'multiple'):$and3));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_100_err){if (!$p['isinstance']($pyjs_dbg_100_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_100_err);}throw $pyjs_dbg_100_err;
}})()) {
				$pyjs['track']['lineno']=146;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__getitem__']('class')['append']('is_translated');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_101_err){if (!$p['isinstance']($pyjs_dbg_101_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_101_err);}throw $pyjs_dbg_101_err;
}})();
				$pyjs['track']['lineno']=147;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__getitem__']('class')['append']('is_multiple');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_102_err){if (!$p['isinstance']($pyjs_dbg_102_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_102_err);}throw $pyjs_dbg_102_err;
}})();
				$pyjs['track']['lineno']=148;
				self['languagesContainer'] = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Div']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_103_err){if (!$p['isinstance']($pyjs_dbg_103_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_103_err);}throw $pyjs_dbg_103_err;
}})();
				$pyjs['track']['lineno']=149;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['appendChild']($p['getattr'](self, 'languagesContainer'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_104_err){if (!$p['isinstance']($pyjs_dbg_104_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_104_err);}throw $pyjs_dbg_104_err;
}})();
				$pyjs['track']['lineno']=150;
				self['buttonContainer'] = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Div']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_105_err){if (!$p['isinstance']($pyjs_dbg_105_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_105_err);}throw $pyjs_dbg_105_err;
}})();
				$pyjs['track']['lineno']=151;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'buttonContainer')['__setitem__']('class', 'languagebuttons');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_106_err){if (!$p['isinstance']($pyjs_dbg_106_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_106_err);}throw $pyjs_dbg_106_err;
}})();
				$pyjs['track']['lineno']=152;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['appendChild']($p['getattr'](self, 'buttonContainer'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_107_err){if (!$p['isinstance']($pyjs_dbg_107_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_107_err);}throw $pyjs_dbg_107_err;
}})();
				$pyjs['track']['lineno']=153;
				self['langEdits'] = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_108_err){if (!$p['isinstance']($pyjs_dbg_108_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_108_err);}throw $pyjs_dbg_108_err;
}})();
				$pyjs['track']['lineno']=154;
				self['langBtns'] = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_109_err){if (!$p['isinstance']($pyjs_dbg_109_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_109_err);}throw $pyjs_dbg_109_err;
}})();
				$pyjs['track']['lineno']=156;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter2_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'languages');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_110_err){if (!$p['isinstance']($pyjs_dbg_110_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_110_err);}throw $pyjs_dbg_110_err;
}})();
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					lang = $iter2_nextval['$nextval'];
					$pyjs['track']['lineno']=157;
					tagContainer = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['html5']['Div']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_111_err){if (!$p['isinstance']($pyjs_dbg_111_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_111_err);}throw $pyjs_dbg_111_err;
}})();
					$pyjs['track']['lineno']=158;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return tagContainer['__getitem__']('class')['append']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['sprintf']('lang_%s', lang);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_112_err){if (!$p['isinstance']($pyjs_dbg_112_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_112_err);}throw $pyjs_dbg_112_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_113_err){if (!$p['isinstance']($pyjs_dbg_113_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_113_err);}throw $pyjs_dbg_113_err;
}})();
					$pyjs['track']['lineno']=159;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return tagContainer['__getitem__']('class')['append']('tagcontainer');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_114_err){if (!$p['isinstance']($pyjs_dbg_114_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_114_err);}throw $pyjs_dbg_114_err;
}})();
					$pyjs['track']['lineno']=160;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return tagContainer['__getitem__']('style')['__setitem__']('display', 'none');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_115_err){if (!$p['isinstance']($pyjs_dbg_115_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_115_err);}throw $pyjs_dbg_115_err;
}})();
					$pyjs['track']['lineno']=162;
					langBtn = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $pyjs_kwargs_call($m['html5']['ext'], 'Button', null, null, [{'callback':$p['getattr'](self, 'onLangBtnClicked')}, lang]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_116_err){if (!$p['isinstance']($pyjs_dbg_116_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_116_err);}throw $pyjs_dbg_116_err;
}})();
					$pyjs['track']['lineno']=163;
					langBtn['lang'] = lang;
					$pyjs['track']['lineno']=164;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['buttonContainer']['appendChild'](langBtn);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_117_err){if (!$p['isinstance']($pyjs_dbg_117_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_117_err);}throw $pyjs_dbg_117_err;
}})();
					$pyjs['track']['lineno']=166;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](!$p['bool']($p['getattr'](self, 'readOnly')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_118_err){if (!$p['isinstance']($pyjs_dbg_118_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_118_err);}throw $pyjs_dbg_118_err;
}})()) {
						$pyjs['track']['lineno']=167;
						addBtn = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $pyjs_kwargs_call($m['html5']['ext'], 'Button', null, null, [{'callback':$p['getattr'](self, 'onBtnGenTag')}, (function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['translate']('New');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_119_err){if (!$p['isinstance']($pyjs_dbg_119_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_119_err);}throw $pyjs_dbg_119_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_120_err){if (!$p['isinstance']($pyjs_dbg_120_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_120_err);}throw $pyjs_dbg_120_err;
}})();
						$pyjs['track']['lineno']=168;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return addBtn['__getitem__']('class')['append']('icon new tag');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_121_err){if (!$p['isinstance']($pyjs_dbg_121_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_121_err);}throw $pyjs_dbg_121_err;
}})();
						$pyjs['track']['lineno']=169;
						addBtn['lang'] = lang;
						$pyjs['track']['lineno']=170;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return tagContainer['appendChild'](addBtn);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_122_err){if (!$p['isinstance']($pyjs_dbg_122_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_122_err);}throw $pyjs_dbg_122_err;
}})();
					}
					$pyjs['track']['lineno']=172;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['languagesContainer']['appendChild'](tagContainer);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_123_err){if (!$p['isinstance']($pyjs_dbg_123_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_123_err);}throw $pyjs_dbg_123_err;
}})();
					$pyjs['track']['lineno']=173;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'langEdits')['__setitem__'](lang, tagContainer);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_124_err){if (!$p['isinstance']($pyjs_dbg_124_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_124_err);}throw $pyjs_dbg_124_err;
}})();
					$pyjs['track']['lineno']=174;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'langBtns')['__setitem__'](lang, langBtn);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_125_err){if (!$p['isinstance']($pyjs_dbg_125_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_125_err);}throw $pyjs_dbg_125_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='bones.string';
				$pyjs['track']['lineno']=176;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['setLang']($p['getattr'](self, 'languages')['__getitem__'](0));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_126_err){if (!$p['isinstance']($pyjs_dbg_126_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_126_err);}throw $pyjs_dbg_126_err;
}})();
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and5=$p['getattr'](self, 'languages'))?!$p['bool']($p['getattr'](self, 'multiple')):$and5));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_127_err){if (!$p['isinstance']($pyjs_dbg_127_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_127_err);}throw $pyjs_dbg_127_err;
}})()) {
				$pyjs['track']['lineno']=179;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__getitem__']('class')['append']('is_translated');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_128_err){if (!$p['isinstance']($pyjs_dbg_128_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_128_err);}throw $pyjs_dbg_128_err;
}})();
				$pyjs['track']['lineno']=180;
				self['languagesContainer'] = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Div']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_129_err){if (!$p['isinstance']($pyjs_dbg_129_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_129_err);}throw $pyjs_dbg_129_err;
}})();
				$pyjs['track']['lineno']=181;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['appendChild']($p['getattr'](self, 'languagesContainer'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_130_err){if (!$p['isinstance']($pyjs_dbg_130_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_130_err);}throw $pyjs_dbg_130_err;
}})();
				$pyjs['track']['lineno']=182;
				self['buttonContainer'] = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Div']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_131_err){if (!$p['isinstance']($pyjs_dbg_131_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_131_err);}throw $pyjs_dbg_131_err;
}})();
				$pyjs['track']['lineno']=183;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'buttonContainer')['__setitem__']('class', 'languagebuttons');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_132_err){if (!$p['isinstance']($pyjs_dbg_132_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_132_err);}throw $pyjs_dbg_132_err;
}})();
				$pyjs['track']['lineno']=184;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['appendChild']($p['getattr'](self, 'buttonContainer'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_133_err){if (!$p['isinstance']($pyjs_dbg_133_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_133_err);}throw $pyjs_dbg_133_err;
}})();
				$pyjs['track']['lineno']=185;
				self['langEdits'] = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_134_err){if (!$p['isinstance']($pyjs_dbg_134_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_134_err);}throw $pyjs_dbg_134_err;
}})();
				$pyjs['track']['lineno']=186;
				self['langBtns'] = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_135_err){if (!$p['isinstance']($pyjs_dbg_135_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_135_err);}throw $pyjs_dbg_135_err;
}})();
				$pyjs['track']['lineno']=188;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter3_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'languages');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_136_err){if (!$p['isinstance']($pyjs_dbg_136_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_136_err);}throw $pyjs_dbg_136_err;
}})();
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
					lang = $iter3_nextval['$nextval'];
					$pyjs['track']['lineno']=189;
					langBtn = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $pyjs_kwargs_call($m['html5']['ext'], 'Button', null, null, [{'callback':$p['getattr'](self, 'onLangBtnClicked')}, lang]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_137_err){if (!$p['isinstance']($pyjs_dbg_137_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_137_err);}throw $pyjs_dbg_137_err;
}})();
					$pyjs['track']['lineno']=190;
					langBtn['lang'] = lang;
					$pyjs['track']['lineno']=191;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['buttonContainer']['appendChild'](langBtn);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_138_err){if (!$p['isinstance']($pyjs_dbg_138_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_138_err);}throw $pyjs_dbg_138_err;
}})();
					$pyjs['track']['lineno']=193;
					inputField = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['html5']['Input']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_139_err){if (!$p['isinstance']($pyjs_dbg_139_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_139_err);}throw $pyjs_dbg_139_err;
}})();
					$pyjs['track']['lineno']=194;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return inputField['__setitem__']('type', 'text');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_140_err){if (!$p['isinstance']($pyjs_dbg_140_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_140_err);}throw $pyjs_dbg_140_err;
}})();
					$pyjs['track']['lineno']=195;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return inputField['__getitem__']('style')['__setitem__']('display', 'none');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_141_err){if (!$p['isinstance']($pyjs_dbg_141_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_141_err);}throw $pyjs_dbg_141_err;
}})();
					$pyjs['track']['lineno']=196;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return inputField['__getitem__']('class')['append']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['sprintf']('lang_%s', lang);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_142_err){if (!$p['isinstance']($pyjs_dbg_142_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_142_err);}throw $pyjs_dbg_142_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_143_err){if (!$p['isinstance']($pyjs_dbg_143_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_143_err);}throw $pyjs_dbg_143_err;
}})();
					$pyjs['track']['lineno']=198;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['getattr'](self, 'readOnly'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_144_err){if (!$p['isinstance']($pyjs_dbg_144_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_144_err);}throw $pyjs_dbg_144_err;
}})()) {
						$pyjs['track']['lineno']=199;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return inputField['__setitem__']('readonly', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_145_err){if (!$p['isinstance']($pyjs_dbg_145_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_145_err);}throw $pyjs_dbg_145_err;
}})();
					}
					$pyjs['track']['lineno']=201;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['languagesContainer']['appendChild'](inputField);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_146_err){if (!$p['isinstance']($pyjs_dbg_146_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_146_err);}throw $pyjs_dbg_146_err;
}})();
					$pyjs['track']['lineno']=202;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'langEdits')['__setitem__'](lang, inputField);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_147_err){if (!$p['isinstance']($pyjs_dbg_147_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_147_err);}throw $pyjs_dbg_147_err;
}})();
					$pyjs['track']['lineno']=203;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'langBtns')['__setitem__'](lang, langBtn);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_148_err){if (!$p['isinstance']($pyjs_dbg_148_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_148_err);}throw $pyjs_dbg_148_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='bones.string';
				$pyjs['track']['lineno']=205;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['setLang']($p['getattr'](self, 'languages')['__getitem__'](0));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_149_err){if (!$p['isinstance']($pyjs_dbg_149_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_149_err);}throw $pyjs_dbg_149_err;
}})();
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and7=!$p['bool']($p['getattr'](self, 'languages')))?$p['getattr'](self, 'multiple'):$and7));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_150_err){if (!$p['isinstance']($pyjs_dbg_150_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_150_err);}throw $pyjs_dbg_150_err;
}})()) {
				$pyjs['track']['lineno']=208;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__getitem__']('class')['append']('is_multiple');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_151_err){if (!$p['isinstance']($pyjs_dbg_151_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_151_err);}throw $pyjs_dbg_151_err;
}})();
				$pyjs['track']['lineno']=209;
				self['tagContainer'] = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Div']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_152_err){if (!$p['isinstance']($pyjs_dbg_152_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_152_err);}throw $pyjs_dbg_152_err;
}})();
				$pyjs['track']['lineno']=210;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'tagContainer')['__getitem__']('class')['append']('tagcontainer');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_153_err){if (!$p['isinstance']($pyjs_dbg_153_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_153_err);}throw $pyjs_dbg_153_err;
}})();
				$pyjs['track']['lineno']=211;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['appendChild']($p['getattr'](self, 'tagContainer'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_154_err){if (!$p['isinstance']($pyjs_dbg_154_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_154_err);}throw $pyjs_dbg_154_err;
}})();
				$pyjs['track']['lineno']=213;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']($p['getattr'](self, 'readOnly')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_155_err){if (!$p['isinstance']($pyjs_dbg_155_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_155_err);}throw $pyjs_dbg_155_err;
}})()) {
					$pyjs['track']['lineno']=214;
					addBtn = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $pyjs_kwargs_call($m['html5']['ext'], 'Button', null, null, [{'callback':$p['getattr'](self, 'onBtnGenTag')}, (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['translate']('New');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_156_err){if (!$p['isinstance']($pyjs_dbg_156_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_156_err);}throw $pyjs_dbg_156_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_157_err){if (!$p['isinstance']($pyjs_dbg_157_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_157_err);}throw $pyjs_dbg_157_err;
}})();
					$pyjs['track']['lineno']=215;
					addBtn['lang'] = null;
					$pyjs['track']['lineno']=216;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return addBtn['__getitem__']('class')['append']('icon new tag');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_158_err){if (!$p['isinstance']($pyjs_dbg_158_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_158_err);}throw $pyjs_dbg_158_err;
}})();
					$pyjs['track']['lineno']=218;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['tagContainer']['appendChild'](addBtn);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_159_err){if (!$p['isinstance']($pyjs_dbg_159_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_159_err);}throw $pyjs_dbg_159_err;
}})();
				}
			}
			else {
				$pyjs['track']['lineno']=221;
				self['input'] = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Input']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_160_err){if (!$p['isinstance']($pyjs_dbg_160_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_160_err);}throw $pyjs_dbg_160_err;
}})();
				$pyjs['track']['lineno']=222;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'input')['__setitem__']('type', 'text');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_161_err){if (!$p['isinstance']($pyjs_dbg_161_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_161_err);}throw $pyjs_dbg_161_err;
}})();
				$pyjs['track']['lineno']=223;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['appendChild']($p['getattr'](self, 'input'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_162_err){if (!$p['isinstance']($pyjs_dbg_162_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_162_err);}throw $pyjs_dbg_162_err;
}})();
				$pyjs['track']['lineno']=225;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, 'readOnly'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_163_err){if (!$p['isinstance']($pyjs_dbg_163_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_163_err);}throw $pyjs_dbg_163_err;
}})()) {
					$pyjs['track']['lineno']=226;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'input')['__setitem__']('readonly', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_164_err){if (!$p['isinstance']($pyjs_dbg_164_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_164_err);}throw $pyjs_dbg_164_err;
}})();
				}
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['moduleName'],['boneName'],['readOnly'],['multiple', false],['languages', null]]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=229;
		$method = $pyjs__bind_method2('fromSkelStructure', function(moduleName, boneName, skelStructure) {
			var multiple,$and9,readOnly,languages,$and10;
			$pyjs['track']={'module':'bones.string', 'lineno':229};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.string';
			$pyjs['track']['lineno']=229;
			$pyjs['track']['lineno']=230;
			readOnly = ($p['bool']($and9=(function(){try{try{$pyjs['in_try_except'] += 1;
			return skelStructure['__getitem__'](boneName)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_165_err){if (!$p['isinstance']($pyjs_dbg_165_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_165_err);}throw $pyjs_dbg_165_err;
}})()['__contains__']('readonly'))?skelStructure['__getitem__'](boneName)['__getitem__']('readonly'):$and9);
			$pyjs['track']['lineno']=232;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return skelStructure['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_166_err){if (!$p['isinstance']($pyjs_dbg_166_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_166_err);}throw $pyjs_dbg_166_err;
}})()['__contains__'](boneName));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_167_err){if (!$p['isinstance']($pyjs_dbg_167_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_167_err);}throw $pyjs_dbg_167_err;
}})()) {
				$pyjs['track']['lineno']=233;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return skelStructure['__getitem__'](boneName)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_168_err){if (!$p['isinstance']($pyjs_dbg_168_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_168_err);}throw $pyjs_dbg_168_err;
}})()['__contains__']('multiple'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_169_err){if (!$p['isinstance']($pyjs_dbg_169_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_169_err);}throw $pyjs_dbg_169_err;
}})()) {
					$pyjs['track']['lineno']=234;
					multiple = skelStructure['__getitem__'](boneName)['__getitem__']('multiple');
				}
				else {
					$pyjs['track']['lineno']=236;
					multiple = false;
				}
				$pyjs['track']['lineno']=237;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return skelStructure['__getitem__'](boneName)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_170_err){if (!$p['isinstance']($pyjs_dbg_170_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_170_err);}throw $pyjs_dbg_170_err;
}})()['__contains__']('languages'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_171_err){if (!$p['isinstance']($pyjs_dbg_171_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_171_err);}throw $pyjs_dbg_171_err;
}})()) {
					$pyjs['track']['lineno']=238;
					languages = skelStructure['__getitem__'](boneName)['__getitem__']('languages');
				}
				else {
					$pyjs['track']['lineno']=240;
					languages = null;
				}
			}
			$pyjs['track']['lineno']=241;
			$pyjs['track']['lineno']=241;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(null, $m['StringEditBone'], null, null, [{'multiple':multiple, 'languages':languages}, moduleName, boneName, readOnly]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_172_err){if (!$p['isinstance']($pyjs_dbg_172_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_172_err);}throw $pyjs_dbg_172_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['moduleName'],['boneName'],['skelStructure']]);
		$cls_definition['fromSkelStructure'] = $method;
		$pyjs['track']['lineno']=243;
		$method = $pyjs__bind_method2('onLangBtnClicked', function(btn) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				btn = arguments[1];
			}

			$pyjs['track']={'module':'bones.string', 'lineno':243};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.string';
			$pyjs['track']['lineno']=243;
			$pyjs['track']['lineno']=244;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['setLang']($p['getattr'](btn, 'lang'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_173_err){if (!$p['isinstance']($pyjs_dbg_173_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_173_err);}throw $pyjs_dbg_173_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['btn']]);
		$cls_definition['onLangBtnClicked'] = $method;
		$pyjs['track']['lineno']=246;
		$method = $pyjs__bind_method2('isFilled', function(lang) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				lang = arguments[1];
			}
			if (typeof lang == 'undefined') lang=arguments['callee']['__args__'][3][1];
			var $and12,$iter5_idx,$iter5_iter,$and14,$and13,$iter5_array,$iter4_nextval,$iter4_idx,item,$iter5_nextval,$and11,$iter4_type,$pyjs__trackstack_size_1,$iter4_array,$iter5_type,$iter4_iter;
			$pyjs['track']={'module':'bones.string', 'lineno':246};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.string';
			$pyjs['track']['lineno']=246;
			$pyjs['track']['lineno']=247;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'languages'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_174_err){if (!$p['isinstance']($pyjs_dbg_174_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_174_err);}throw $pyjs_dbg_174_err;
}})()) {
				$pyjs['track']['lineno']=248;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((lang === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_175_err){if (!$p['isinstance']($pyjs_dbg_175_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_175_err);}throw $pyjs_dbg_175_err;
}})()) {
					$pyjs['track']['lineno']=249;
					lang = $p['getattr'](self, 'languages')['__getitem__'](0);
				}
				$pyjs['track']['lineno']=251;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, 'multiple'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_176_err){if (!$p['isinstance']($pyjs_dbg_176_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_176_err);}throw $pyjs_dbg_176_err;
}})()) {
					$pyjs['track']['lineno']=252;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter4_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr']($p['getattr'](self, 'langEdits')['__getitem__'](lang), '_children');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_177_err){if (!$p['isinstance']($pyjs_dbg_177_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_177_err);}throw $pyjs_dbg_177_err;
}})();
					$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
					while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
						item = $iter4_nextval['$nextval'];
						$pyjs['track']['lineno']=253;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](($p['bool']($and11=(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['isinstance'](item, $m['Tag']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_178_err){if (!$p['isinstance']($pyjs_dbg_178_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_178_err);}throw $pyjs_dbg_178_err;
}})())?$p['getattr'](item, 'input')['__getitem__']('value'):$and11));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_179_err){if (!$p['isinstance']($pyjs_dbg_179_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_179_err);}throw $pyjs_dbg_179_err;
}})()) {
							$pyjs['track']['lineno']=254;
							$pyjs['track']['lineno']=254;
							var $pyjs__ret = true;
							$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
							return $pyjs__ret;
						}
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='bones.string';
					$pyjs['track']['lineno']=256;
					$pyjs['track']['lineno']=256;
					var $pyjs__ret = false;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=258;
					$pyjs['track']['lineno']=258;
					var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len']($p['getattr'](self, 'langEdits')['__getitem__'](lang)['__getitem__']('value'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_180_err){if (!$p['isinstance']($pyjs_dbg_180_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_180_err);}throw $pyjs_dbg_180_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_181_err){if (!$p['isinstance']($pyjs_dbg_181_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_181_err);}throw $pyjs_dbg_181_err;
}})();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'multiple'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_182_err){if (!$p['isinstance']($pyjs_dbg_182_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_182_err);}throw $pyjs_dbg_182_err;
}})()) {
				$pyjs['track']['lineno']=261;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter5_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr']($p['getattr'](self, 'tagContainer'), '_children');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_183_err){if (!$p['isinstance']($pyjs_dbg_183_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_183_err);}throw $pyjs_dbg_183_err;
}})();
				$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
				while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
					item = $iter5_nextval['$nextval'];
					$pyjs['track']['lineno']=262;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['bool']($and13=(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['isinstance'](item, $m['Tag']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_184_err){if (!$p['isinstance']($pyjs_dbg_184_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_184_err);}throw $pyjs_dbg_184_err;
}})())?$p['getattr'](item, 'input')['__getitem__']('value'):$and13));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_185_err){if (!$p['isinstance']($pyjs_dbg_185_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_185_err);}throw $pyjs_dbg_185_err;
}})()) {
						$pyjs['track']['lineno']=263;
						$pyjs['track']['lineno']=263;
						var $pyjs__ret = true;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='bones.string';
				$pyjs['track']['lineno']=265;
				$pyjs['track']['lineno']=265;
				var $pyjs__ret = false;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=267;
			$pyjs['track']['lineno']=267;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len']($p['getattr'](self, 'input')['__getitem__']('value'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_186_err){if (!$p['isinstance']($pyjs_dbg_186_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_186_err);}throw $pyjs_dbg_186_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_187_err){if (!$p['isinstance']($pyjs_dbg_187_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_187_err);}throw $pyjs_dbg_187_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['lang', null]]);
		$cls_definition['isFilled'] = $method;
		$pyjs['track']['lineno']=269;
		$method = $pyjs__bind_method2('_updateLanguageButtons', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var lang,$iter6_idx,$iter6_type,$iter6_array,$pyjs__trackstack_size_1,$iter6_iter,$iter6_nextval;
			$pyjs['track']={'module':'bones.string', 'lineno':269};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.string';
			$pyjs['track']['lineno']=269;
			$pyjs['track']['lineno']=270;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool']($p['getattr'](self, 'languages')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_188_err){if (!$p['isinstance']($pyjs_dbg_188_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_188_err);}throw $pyjs_dbg_188_err;
}})()) {
				$pyjs['track']['lineno']=271;
				$pyjs['track']['lineno']=271;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=273;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter6_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'languages');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_189_err){if (!$p['isinstance']($pyjs_dbg_189_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_189_err);}throw $pyjs_dbg_189_err;
}})();
			$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
			while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
				lang = $iter6_nextval['$nextval'];
				$pyjs['track']['lineno']=274;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return self['isFilled'](lang);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_190_err){if (!$p['isinstance']($pyjs_dbg_190_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_190_err);}throw $pyjs_dbg_190_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_191_err){if (!$p['isinstance']($pyjs_dbg_191_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_191_err);}throw $pyjs_dbg_191_err;
}})()) {
					$pyjs['track']['lineno']=275;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'langBtns')['__getitem__'](lang)['__getitem__']('class')['remove']('is_unfilled');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_192_err){if (!$p['isinstance']($pyjs_dbg_192_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_192_err);}throw $pyjs_dbg_192_err;
}})();
					$pyjs['track']['lineno']=276;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](!$p['bool']($p['getattr'](self, 'langBtns')['__getitem__'](lang)['__getitem__']('class')['__contains__']('is_filled')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_193_err){if (!$p['isinstance']($pyjs_dbg_193_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_193_err);}throw $pyjs_dbg_193_err;
}})()) {
						$pyjs['track']['lineno']=277;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](self, 'langBtns')['__getitem__'](lang)['__getitem__']('class')['append']('is_filled');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_194_err){if (!$p['isinstance']($pyjs_dbg_194_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_194_err);}throw $pyjs_dbg_194_err;
}})();
					}
				}
				else {
					$pyjs['track']['lineno']=279;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'langBtns')['__getitem__'](lang)['__getitem__']('class')['remove']('is_filled');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_195_err){if (!$p['isinstance']($pyjs_dbg_195_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_195_err);}throw $pyjs_dbg_195_err;
}})();
					$pyjs['track']['lineno']=280;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](!$p['bool']($p['getattr'](self, 'langBtns')['__getitem__'](lang)['__getitem__']('class')['__contains__']('is_unfilled')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_196_err){if (!$p['isinstance']($pyjs_dbg_196_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_196_err);}throw $pyjs_dbg_196_err;
}})()) {
						$pyjs['track']['lineno']=281;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](self, 'langBtns')['__getitem__'](lang)['__getitem__']('class')['append']('is_unfilled');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_197_err){if (!$p['isinstance']($pyjs_dbg_197_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_197_err);}throw $pyjs_dbg_197_err;
}})();
					}
				}
				$pyjs['track']['lineno']=283;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq'](lang, $p['getattr'](self, 'currentLanguage')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_198_err){if (!$p['isinstance']($pyjs_dbg_198_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_198_err);}throw $pyjs_dbg_198_err;
}})()) {
					$pyjs['track']['lineno']=287;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](!$p['bool']($p['getattr'](self, 'langBtns')['__getitem__'](lang)['__getitem__']('class')['__contains__']('is_active')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_199_err){if (!$p['isinstance']($pyjs_dbg_199_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_199_err);}throw $pyjs_dbg_199_err;
}})()) {
						$pyjs['track']['lineno']=288;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](self, 'langBtns')['__getitem__'](lang)['__getitem__']('class')['append']('is_active');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_200_err){if (!$p['isinstance']($pyjs_dbg_200_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_200_err);}throw $pyjs_dbg_200_err;
}})();
					}
				}
				else {
					$pyjs['track']['lineno']=290;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'langBtns')['__getitem__'](lang)['__getitem__']('class')['remove']('is_active');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_201_err){if (!$p['isinstance']($pyjs_dbg_201_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_201_err);}throw $pyjs_dbg_201_err;
}})();
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='bones.string';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_updateLanguageButtons'] = $method;
		$pyjs['track']['lineno']=292;
		$method = $pyjs__bind_method2('setLang', function(lang) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				lang = arguments[1];
			}
			var btn,$iter7_nextval,$iter7_iter,$iter7_array,$iter7_idx,$iter7_type,$pyjs__trackstack_size_1;
			$pyjs['track']={'module':'bones.string', 'lineno':292};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.string';
			$pyjs['track']['lineno']=292;
			$pyjs['track']['lineno']=293;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'currentLanguage'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_202_err){if (!$p['isinstance']($pyjs_dbg_202_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_202_err);}throw $pyjs_dbg_202_err;
}})()) {
				$pyjs['track']['lineno']=294;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'langEdits')['__getitem__']($p['getattr'](self, 'currentLanguage'))['__getitem__']('style')['__setitem__']('display', 'none');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_203_err){if (!$p['isinstance']($pyjs_dbg_203_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_203_err);}throw $pyjs_dbg_203_err;
}})();
			}
			$pyjs['track']['lineno']=296;
			self['currentLanguage'] = lang;
			$pyjs['track']['lineno']=297;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'langEdits')['__getitem__']($p['getattr'](self, 'currentLanguage'))['__getitem__']('style')['__setitem__']('display', '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_204_err){if (!$p['isinstance']($pyjs_dbg_204_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_204_err);}throw $pyjs_dbg_204_err;
}})();
			$pyjs['track']['lineno']=298;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['_updateLanguageButtons']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_205_err){if (!$p['isinstance']($pyjs_dbg_205_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_205_err);}throw $pyjs_dbg_205_err;
}})();
			$pyjs['track']['lineno']=300;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter7_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr']($p['getattr'](self, 'buttonContainer'), '_children');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_206_err){if (!$p['isinstance']($pyjs_dbg_206_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_206_err);}throw $pyjs_dbg_206_err;
}})();
			$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
			while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
				btn = $iter7_nextval['$nextval'];
				$pyjs['track']['lineno']=301;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq']($p['getattr'](btn, 'lang'), lang));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_207_err){if (!$p['isinstance']($pyjs_dbg_207_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_207_err);}throw $pyjs_dbg_207_err;
}})()) {
					$pyjs['track']['lineno']=302;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](!btn['__getitem__']('class')['__contains__']('is_active'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_208_err){if (!$p['isinstance']($pyjs_dbg_208_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_208_err);}throw $pyjs_dbg_208_err;
}})()) {
						$pyjs['track']['lineno']=303;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return btn['__getitem__']('class')['append']('is_active');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_209_err){if (!$p['isinstance']($pyjs_dbg_209_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_209_err);}throw $pyjs_dbg_209_err;
}})();
					}
				}
				else {
					$pyjs['track']['lineno']=305;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return btn['__getitem__']('class')['remove']('is_active');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_210_err){if (!$p['isinstance']($pyjs_dbg_210_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_210_err);}throw $pyjs_dbg_210_err;
}})();
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='bones.string';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['lang']]);
		$cls_definition['setLang'] = $method;
		$pyjs['track']['lineno']=307;
		$method = $pyjs__bind_method2('onBtnGenTag', function(btn) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				btn = arguments[1];
			}
			var tag;
			$pyjs['track']={'module':'bones.string', 'lineno':307};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.string';
			$pyjs['track']['lineno']=307;
			$pyjs['track']['lineno']=308;
			tag = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(self, 'genTag', null, null, [{'lang':$p['getattr'](btn, 'lang')}, '']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_211_err){if (!$p['isinstance']($pyjs_dbg_211_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_211_err);}throw $pyjs_dbg_211_err;
}})();
			$pyjs['track']['lineno']=309;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return tag['focus']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_212_err){if (!$p['isinstance']($pyjs_dbg_212_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_212_err);}throw $pyjs_dbg_212_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['btn']]);
		$cls_definition['onBtnGenTag'] = $method;
		$pyjs['track']['lineno']=311;
		$method = $pyjs__bind_method2('unserialize', function(data, extendedErrorInformation) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				extendedErrorInformation = arguments[2];
			}
			if (typeof extendedErrorInformation == 'undefined') extendedErrorInformation=arguments['callee']['__args__'][4][1];
			var $iter11_nextval,$iter10_nextval,$iter11_array,$iter8_iter,$and22,$iter10_iter,$and20,$and21,val,$iter9_iter,$iter9_nextval,$iter9_idx,$iter11_idx,$iter9_type,$iter10_idx,$iter8_idx,$iter11_iter,$iter8_type,$pyjs__trackstack_size_1,$and16,$iter8_nextval,$and15,$and18,$and19,lang,tagStr,$iter11_type,$iter8_array,$iter10_array,$pyjs__trackstack_size_2,v,$iter10_type,$iter9_array,$and17;
			$pyjs['track']={'module':'bones.string', 'lineno':311};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.string';
			$pyjs['track']['lineno']=311;
			$pyjs['track']['lineno']=312;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return data['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_213_err){if (!$p['isinstance']($pyjs_dbg_213_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_213_err);}throw $pyjs_dbg_213_err;
}})()['__contains__']($p['getattr'](self, 'boneName'))));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_214_err){if (!$p['isinstance']($pyjs_dbg_214_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_214_err);}throw $pyjs_dbg_214_err;
}})()) {
				$pyjs['track']['lineno']=313;
				$pyjs['track']['lineno']=313;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=315;
			data = data['__getitem__']($p['getattr'](self, 'boneName'));
			$pyjs['track']['lineno']=316;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool'](data));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_215_err){if (!$p['isinstance']($pyjs_dbg_215_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_215_err);}throw $pyjs_dbg_215_err;
}})()) {
				$pyjs['track']['lineno']=317;
				$pyjs['track']['lineno']=317;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=319;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and15=$p['getattr'](self, 'languages'))?$p['getattr'](self, 'multiple'):$and15));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_216_err){if (!$p['isinstance']($pyjs_dbg_216_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_216_err);}throw $pyjs_dbg_216_err;
}})()) {
				$pyjs['track']['lineno']=320;
				if (!( (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](data, $p['dict']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_217_err){if (!$p['isinstance']($pyjs_dbg_217_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_217_err);}throw $pyjs_dbg_217_err;
}})() )) {
				   throw $p['AssertionError']();
				 }
				$pyjs['track']['lineno']=322;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter8_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'languages');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_218_err){if (!$p['isinstance']($pyjs_dbg_218_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_218_err);}throw $pyjs_dbg_218_err;
}})();
				$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
				while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
					lang = $iter8_nextval['$nextval'];
					$pyjs['track']['lineno']=324;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return data['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_219_err){if (!$p['isinstance']($pyjs_dbg_219_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_219_err);}throw $pyjs_dbg_219_err;
}})()['__contains__'](lang));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_220_err){if (!$p['isinstance']($pyjs_dbg_220_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_220_err);}throw $pyjs_dbg_220_err;
}})()) {
						$pyjs['track']['lineno']=325;
						val = data['__getitem__'](lang);
						$pyjs['track']['lineno']=327;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['isinstance'](val, $p['str']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_221_err){if (!$p['isinstance']($pyjs_dbg_221_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_221_err);}throw $pyjs_dbg_221_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_222_err){if (!$p['isinstance']($pyjs_dbg_222_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_222_err);}throw $pyjs_dbg_222_err;
}})()) {
							$pyjs['track']['lineno']=328;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $pyjs_kwargs_call(self, 'genTag', null, null, [{'lang':lang}, (function(){try{try{$pyjs['in_try_except'] += 1;
							return $m['html5']['utils']['unescape'](val);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_223_err){if (!$p['isinstance']($pyjs_dbg_223_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_223_err);}throw $pyjs_dbg_223_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_224_err){if (!$p['isinstance']($pyjs_dbg_224_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_224_err);}throw $pyjs_dbg_224_err;
}})();
						}
						else if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['isinstance'](val, $p['list']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_225_err){if (!$p['isinstance']($pyjs_dbg_225_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_225_err);}throw $pyjs_dbg_225_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_226_err){if (!$p['isinstance']($pyjs_dbg_226_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_226_err);}throw $pyjs_dbg_226_err;
}})()) {
							$pyjs['track']['lineno']=330;
							$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
							$iter9_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
							return val;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_227_err){if (!$p['isinstance']($pyjs_dbg_227_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_227_err);}throw $pyjs_dbg_227_err;
}})();
							$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
							while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
								v = $iter9_nextval['$nextval'];
								$pyjs['track']['lineno']=331;
								(function(){try{try{$pyjs['in_try_except'] += 1;
								return $pyjs_kwargs_call(self, 'genTag', null, null, [{'lang':lang}, (function(){try{try{$pyjs['in_try_except'] += 1;
								return $m['html5']['utils']['unescape'](v);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_228_err){if (!$p['isinstance']($pyjs_dbg_228_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_228_err);}throw $pyjs_dbg_228_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_229_err){if (!$p['isinstance']($pyjs_dbg_229_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_229_err);}throw $pyjs_dbg_229_err;
}})();
							}
							if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
								$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
								$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
							}
							$pyjs['track']['module']='bones.string';
						}
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='bones.string';
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and17=$p['getattr'](self, 'languages'))?!$p['bool']($p['getattr'](self, 'multiple')):$and17));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_230_err){if (!$p['isinstance']($pyjs_dbg_230_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_230_err);}throw $pyjs_dbg_230_err;
}})()) {
				$pyjs['track']['lineno']=334;
				if (!( (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](data, $p['dict']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_231_err){if (!$p['isinstance']($pyjs_dbg_231_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_231_err);}throw $pyjs_dbg_231_err;
}})() )) {
				   throw $p['AssertionError']();
				 }
				$pyjs['track']['lineno']=336;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter10_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'languages');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_232_err){if (!$p['isinstance']($pyjs_dbg_232_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_232_err);}throw $pyjs_dbg_232_err;
}})();
				$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
				while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
					lang = $iter10_nextval['$nextval'];
					$pyjs['track']['lineno']=337;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['bool']($and19=(function(){try{try{$pyjs['in_try_except'] += 1;
					return data['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_233_err){if (!$p['isinstance']($pyjs_dbg_233_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_233_err);}throw $pyjs_dbg_233_err;
}})()['__contains__'](lang))?data['__getitem__'](lang):$and19));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_234_err){if (!$p['isinstance']($pyjs_dbg_234_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_234_err);}throw $pyjs_dbg_234_err;
}})()) {
						$pyjs['track']['lineno']=338;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](self, 'langEdits')['__getitem__'](lang)['__setitem__']('value', (function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['html5']['utils']['unescape']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['str'](data['__getitem__'](lang));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_235_err){if (!$p['isinstance']($pyjs_dbg_235_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_235_err);}throw $pyjs_dbg_235_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_236_err){if (!$p['isinstance']($pyjs_dbg_236_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_236_err);}throw $pyjs_dbg_236_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_237_err){if (!$p['isinstance']($pyjs_dbg_237_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_237_err);}throw $pyjs_dbg_237_err;
}})();
					}
					else {
						$pyjs['track']['lineno']=340;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](self, 'langEdits')['__getitem__'](lang)['__setitem__']('value', '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_238_err){if (!$p['isinstance']($pyjs_dbg_238_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_238_err);}throw $pyjs_dbg_238_err;
}})();
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='bones.string';
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and21=!$p['bool']($p['getattr'](self, 'languages')))?$p['getattr'](self, 'multiple'):$and21));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_239_err){if (!$p['isinstance']($pyjs_dbg_239_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_239_err);}throw $pyjs_dbg_239_err;
}})()) {
				$pyjs['track']['lineno']=344;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](data, $p['list']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_240_err){if (!$p['isinstance']($pyjs_dbg_240_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_240_err);}throw $pyjs_dbg_240_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_241_err){if (!$p['isinstance']($pyjs_dbg_241_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_241_err);}throw $pyjs_dbg_241_err;
}})()) {
					$pyjs['track']['lineno']=345;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter11_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return data;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_242_err){if (!$p['isinstance']($pyjs_dbg_242_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_242_err);}throw $pyjs_dbg_242_err;
}})();
					$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
					while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
						tagStr = $iter11_nextval['$nextval'];
						$pyjs['track']['lineno']=346;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return self['genTag']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['html5']['utils']['unescape'](tagStr);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_243_err){if (!$p['isinstance']($pyjs_dbg_243_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_243_err);}throw $pyjs_dbg_243_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_244_err){if (!$p['isinstance']($pyjs_dbg_244_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_244_err);}throw $pyjs_dbg_244_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='bones.string';
				}
				else {
					$pyjs['track']['lineno']=348;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['genTag']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['html5']['utils']['unescape'](data);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_245_err){if (!$p['isinstance']($pyjs_dbg_245_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_245_err);}throw $pyjs_dbg_245_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_246_err){if (!$p['isinstance']($pyjs_dbg_246_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_246_err);}throw $pyjs_dbg_246_err;
}})();
				}
			}
			else {
				$pyjs['track']['lineno']=351;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'input')['__setitem__']('value', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['utils']['unescape']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str'](data);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_247_err){if (!$p['isinstance']($pyjs_dbg_247_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_247_err);}throw $pyjs_dbg_247_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_248_err){if (!$p['isinstance']($pyjs_dbg_248_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_248_err);}throw $pyjs_dbg_248_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_249_err){if (!$p['isinstance']($pyjs_dbg_249_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_249_err);}throw $pyjs_dbg_249_err;
}})();
			}
			$pyjs['track']['lineno']=353;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['_updateLanguageButtons']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_250_err){if (!$p['isinstance']($pyjs_dbg_250_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_250_err);}throw $pyjs_dbg_250_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['data'],['extendedErrorInformation', null]]);
		$cls_definition['unserialize'] = $method;
		$pyjs['track']['lineno']=355;
		$method = $pyjs__bind_method2('serializeForPost', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $and29,$and28,$iter13_idx,$and23,txt,$and27,$and26,$and25,$and24,$iter15_iter,res,$iter13_type,$iter14_array,$iter15_array,$iter14_type,$iter15_type,$iter12_array,$iter14_iter,child,$and30,$iter14_idx,$iter14_nextval,lang,$iter13_nextval,$iter13_iter,$iter12_type,$iter15_idx,$iter13_array,$iter12_iter,$pyjs__trackstack_size_2,$iter15_nextval,$pyjs__trackstack_size_1,$iter12_idx,$iter12_nextval;
			$pyjs['track']={'module':'bones.string', 'lineno':355};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.string';
			$pyjs['track']['lineno']=355;
			$pyjs['track']['lineno']=356;
			res = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_251_err){if (!$p['isinstance']($pyjs_dbg_251_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_251_err);}throw $pyjs_dbg_251_err;
}})();
			$pyjs['track']['lineno']=358;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and23=$p['getattr'](self, 'languages'))?$p['getattr'](self, 'multiple'):$and23));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_252_err){if (!$p['isinstance']($pyjs_dbg_252_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_252_err);}throw $pyjs_dbg_252_err;
}})()) {
				$pyjs['track']['lineno']=359;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter12_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'languages');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_253_err){if (!$p['isinstance']($pyjs_dbg_253_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_253_err);}throw $pyjs_dbg_253_err;
}})();
				$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
				while (typeof($p['__wrapped_next']($iter12_nextval)['$nextval']) != 'undefined') {
					lang = $iter12_nextval['$nextval'];
					$pyjs['track']['lineno']=360;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return res['__setitem__']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['sprintf']('%s.%s', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([$p['getattr'](self, 'boneName'), lang]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_255_err){if (!$p['isinstance']($pyjs_dbg_255_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_255_err);}throw $pyjs_dbg_255_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_256_err){if (!$p['isinstance']($pyjs_dbg_256_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_256_err);}throw $pyjs_dbg_256_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_254_err){if (!$p['isinstance']($pyjs_dbg_254_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_254_err);}throw $pyjs_dbg_254_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_257_err){if (!$p['isinstance']($pyjs_dbg_257_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_257_err);}throw $pyjs_dbg_257_err;
}})();
					$pyjs['track']['lineno']=361;
					$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
					$iter13_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr']($p['getattr'](self, 'langEdits')['__getitem__'](lang), '_children');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_258_err){if (!$p['isinstance']($pyjs_dbg_258_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_258_err);}throw $pyjs_dbg_258_err;
}})();
					$iter13_nextval=$p['__iter_prepare']($iter13_iter,false);
					while (typeof($p['__wrapped_next']($iter13_nextval)['$nextval']) != 'undefined') {
						child = $iter13_nextval['$nextval'];
						$pyjs['track']['lineno']=362;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['isinstance'](child, $m['Tag']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_259_err){if (!$p['isinstance']($pyjs_dbg_259_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_259_err);}throw $pyjs_dbg_259_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_260_err){if (!$p['isinstance']($pyjs_dbg_260_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_260_err);}throw $pyjs_dbg_260_err;
}})()) {
							$pyjs['track']['lineno']=363;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return res['__getitem__']((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['sprintf']('%s.%s', (function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['tuple']([$p['getattr'](self, 'boneName'), lang]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_261_err){if (!$p['isinstance']($pyjs_dbg_261_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_261_err);}throw $pyjs_dbg_261_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_262_err){if (!$p['isinstance']($pyjs_dbg_262_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_262_err);}throw $pyjs_dbg_262_err;
}})())['append']($p['getattr'](child, 'input')['__getitem__']('value'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_263_err){if (!$p['isinstance']($pyjs_dbg_263_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_263_err);}throw $pyjs_dbg_263_err;
}})();
						}
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='bones.string';
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='bones.string';
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and25=$p['getattr'](self, 'languages'))?!$p['bool']($p['getattr'](self, 'multiple')):$and25));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_264_err){if (!$p['isinstance']($pyjs_dbg_264_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_264_err);}throw $pyjs_dbg_264_err;
}})()) {
				$pyjs['track']['lineno']=366;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter14_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'languages');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_265_err){if (!$p['isinstance']($pyjs_dbg_265_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_265_err);}throw $pyjs_dbg_265_err;
}})();
				$iter14_nextval=$p['__iter_prepare']($iter14_iter,false);
				while (typeof($p['__wrapped_next']($iter14_nextval)['$nextval']) != 'undefined') {
					lang = $iter14_nextval['$nextval'];
					$pyjs['track']['lineno']=367;
					txt = $p['getattr'](self, 'langEdits')['__getitem__'](lang)['__getitem__']('value');
					$pyjs['track']['lineno']=368;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](txt);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_266_err){if (!$p['isinstance']($pyjs_dbg_266_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_266_err);}throw $pyjs_dbg_266_err;
}})()) {
						$pyjs['track']['lineno']=369;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return res['__setitem__']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['sprintf']('%s.%s', (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['tuple']([$p['getattr'](self, 'boneName'), lang]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_267_err){if (!$p['isinstance']($pyjs_dbg_267_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_267_err);}throw $pyjs_dbg_267_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_268_err){if (!$p['isinstance']($pyjs_dbg_268_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_268_err);}throw $pyjs_dbg_268_err;
}})(), txt);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_269_err){if (!$p['isinstance']($pyjs_dbg_269_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_269_err);}throw $pyjs_dbg_269_err;
}})();
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='bones.string';
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and27=!$p['bool']($p['getattr'](self, 'languages')))?$p['getattr'](self, 'multiple'):$and27));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_270_err){if (!$p['isinstance']($pyjs_dbg_270_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_270_err);}throw $pyjs_dbg_270_err;
}})()) {
				$pyjs['track']['lineno']=372;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return res['__setitem__']($p['getattr'](self, 'boneName'), (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_271_err){if (!$p['isinstance']($pyjs_dbg_271_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_271_err);}throw $pyjs_dbg_271_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_272_err){if (!$p['isinstance']($pyjs_dbg_272_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_272_err);}throw $pyjs_dbg_272_err;
}})();
				$pyjs['track']['lineno']=373;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter15_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr']($p['getattr'](self, 'tagContainer'), '_children');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_273_err){if (!$p['isinstance']($pyjs_dbg_273_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_273_err);}throw $pyjs_dbg_273_err;
}})();
				$iter15_nextval=$p['__iter_prepare']($iter15_iter,false);
				while (typeof($p['__wrapped_next']($iter15_nextval)['$nextval']) != 'undefined') {
					child = $iter15_nextval['$nextval'];
					$pyjs['track']['lineno']=374;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['isinstance'](child, $m['Tag']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_274_err){if (!$p['isinstance']($pyjs_dbg_274_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_274_err);}throw $pyjs_dbg_274_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_275_err){if (!$p['isinstance']($pyjs_dbg_275_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_275_err);}throw $pyjs_dbg_275_err;
}})()) {
						$pyjs['track']['lineno']=375;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return res['__getitem__']($p['getattr'](self, 'boneName'))['append']($p['getattr'](child, 'input')['__getitem__']('value'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_276_err){if (!$p['isinstance']($pyjs_dbg_276_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_276_err);}throw $pyjs_dbg_276_err;
}})();
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='bones.string';
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and29=!$p['bool']($p['getattr'](self, 'languages')))?!$p['bool']($p['getattr'](self, 'multiple')):$and29));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_277_err){if (!$p['isinstance']($pyjs_dbg_277_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_277_err);}throw $pyjs_dbg_277_err;
}})()) {
				$pyjs['track']['lineno']=378;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return res['__setitem__']($p['getattr'](self, 'boneName'), $p['getattr'](self, 'input')['__getitem__']('value'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_278_err){if (!$p['isinstance']($pyjs_dbg_278_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_278_err);}throw $pyjs_dbg_278_err;
}})();
			}
			$pyjs['track']['lineno']=380;
			$pyjs['track']['lineno']=380;
			var $pyjs__ret = res;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['serializeForPost'] = $method;
		$pyjs['track']['lineno']=382;
		$method = $pyjs__bind_method2('serializeForDocument', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'bones.string', 'lineno':382};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.string';
			$pyjs['track']['lineno']=382;
			$pyjs['track']['lineno']=383;
			$pyjs['track']['lineno']=383;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['serialize']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_279_err){if (!$p['isinstance']($pyjs_dbg_279_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_279_err);}throw $pyjs_dbg_279_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['serializeForDocument'] = $method;
		$pyjs['track']['lineno']=385;
		$method = $pyjs__bind_method2('genTag', function(tag, editMode, lang) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				tag = arguments[1];
				editMode = arguments[2];
				lang = arguments[3];
			}
			if (typeof editMode == 'undefined') editMode=arguments['callee']['__args__'][4][1];
			if (typeof lang == 'undefined') lang=arguments['callee']['__args__'][5][1];

			$pyjs['track']={'module':'bones.string', 'lineno':385};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.string';
			$pyjs['track']['lineno']=385;
			$pyjs['track']['lineno']=386;
			tag = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(null, $m['Tag'], null, null, [{'readonly':$p['getattr'](self, 'readOnly')}, self, tag, editMode]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_280_err){if (!$p['isinstance']($pyjs_dbg_280_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_280_err);}throw $pyjs_dbg_280_err;
}})();
			$pyjs['track']['lineno']=388;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((lang !== null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_281_err){if (!$p['isinstance']($pyjs_dbg_281_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_281_err);}throw $pyjs_dbg_281_err;
}})()) {
				$pyjs['track']['lineno']=389;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'langEdits')['__getitem__'](lang)['appendChild'](tag);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_282_err){if (!$p['isinstance']($pyjs_dbg_282_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_282_err);}throw $pyjs_dbg_282_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=391;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['tagContainer']['appendChild'](tag);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_283_err){if (!$p['isinstance']($pyjs_dbg_283_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_283_err);}throw $pyjs_dbg_283_err;
}})();
			}
			$pyjs['track']['lineno']=393;
			$pyjs['track']['lineno']=393;
			var $pyjs__ret = tag;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['tag'],['editMode', false],['lang', null]]);
		$cls_definition['genTag'] = $method;
		$pyjs['track']['lineno']=133;
		var $bases = new Array($p['getattr']($m['html5'], 'Div'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('StringEditBone', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=396;
	$m['CheckForStringBone'] = function(moduleName, boneName, skelStucture) {
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

		$pyjs['track']={'module':'bones.string','lineno':396};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='bones.string';
		$pyjs['track']['lineno']=396;
		$pyjs['track']['lineno']=397;
		$pyjs['track']['lineno']=397;
		var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
		return (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['str'](skelStucture['__getitem__'](boneName)['__getitem__']('type'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_284_err){if (!$p['isinstance']($pyjs_dbg_284_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_284_err);}throw $pyjs_dbg_284_err;
}})()['startswith']('str');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_285_err){if (!$p['isinstance']($pyjs_dbg_285_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_285_err);}throw $pyjs_dbg_285_err;
}})();
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['CheckForStringBone']['__name__'] = 'CheckForStringBone';

	$m['CheckForStringBone']['__bind_type__'] = 0;
	$m['CheckForStringBone']['__args__'] = ['args',['kwargs'],['moduleName'],['boneName'],['skelStucture']];
	$pyjs['track']['lineno']=400;
	$m['ExtendedStringSearch'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'bones.string';
		$pyjs['track']['lineno']=401;
		$method = $pyjs__bind_method2('__init__', function(extension, view, modul) {
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
				extension = arguments[1];
				view = arguments[2];
				modul = arguments[3];
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
				if (typeof modul != 'undefined') {
					if (modul !== null && typeof modul['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = modul;
						modul = arguments[4];
					}
				} else 				if (typeof view != 'undefined') {
					if (view !== null && typeof view['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = view;
						view = arguments[4];
					}
				} else 				if (typeof extension != 'undefined') {
					if (extension !== null && typeof extension['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = extension;
						extension = arguments[4];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[4];
					}
				} else {
				}
			}

			$pyjs['track']={'module':'bones.string', 'lineno':401};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.string';
			$pyjs['track']['lineno']=401;
			$pyjs['track']['lineno']=402;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['ExtendedStringSearch'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_286_err){if (!$p['isinstance']($pyjs_dbg_286_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_286_err);}throw $pyjs_dbg_286_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_287_err){if (!$p['isinstance']($pyjs_dbg_287_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_287_err);}throw $pyjs_dbg_287_err;
}})();
			$pyjs['track']['lineno']=403;
			self['view'] = view;
			$pyjs['track']['lineno']=404;
			self['extension'] = extension;
			$pyjs['track']['lineno']=405;
			self['module'] = modul;
			$pyjs['track']['lineno']=406;
			self['opMode'] = extension['__getitem__']('mode');
			$pyjs['track']['lineno']=407;
			self['filterChangedEvent'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['EventDispatcher']('filterChanged');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_288_err){if (!$p['isinstance']($pyjs_dbg_288_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_288_err);}throw $pyjs_dbg_288_err;
}})();
			$pyjs['track']['lineno']=408;
			if (!( (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list'](['equals', 'from', 'to', 'prefix', 'range']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_289_err){if (!$p['isinstance']($pyjs_dbg_289_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_289_err);}throw $pyjs_dbg_289_err;
}})()['__contains__']($p['getattr'](self, 'opMode')) )) {
			   throw $p['AssertionError']();
			 }
			$pyjs['track']['lineno']=409;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['TextNode'](extension['__getitem__']('name'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_290_err){if (!$p['isinstance']($pyjs_dbg_290_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_290_err);}throw $pyjs_dbg_290_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_291_err){if (!$p['isinstance']($pyjs_dbg_291_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_291_err);}throw $pyjs_dbg_291_err;
}})();
			$pyjs['track']['lineno']=410;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['sinkEvent']('onKeyDown');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_292_err){if (!$p['isinstance']($pyjs_dbg_292_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_292_err);}throw $pyjs_dbg_292_err;
}})();
			$pyjs['track']['lineno']=411;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list'](['equals', 'from', 'to', 'prefix']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_293_err){if (!$p['isinstance']($pyjs_dbg_293_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_293_err);}throw $pyjs_dbg_293_err;
}})()['__contains__']($p['getattr'](self, 'opMode')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_294_err){if (!$p['isinstance']($pyjs_dbg_294_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_294_err);}throw $pyjs_dbg_294_err;
}})()) {
				$pyjs['track']['lineno']=412;
				self['input'] = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Input']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_295_err){if (!$p['isinstance']($pyjs_dbg_295_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_295_err);}throw $pyjs_dbg_295_err;
}})();
				$pyjs['track']['lineno']=413;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'input')['__setitem__']('type', 'text');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_296_err){if (!$p['isinstance']($pyjs_dbg_296_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_296_err);}throw $pyjs_dbg_296_err;
}})();
				$pyjs['track']['lineno']=414;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['appendChild']($p['getattr'](self, 'input'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_297_err){if (!$p['isinstance']($pyjs_dbg_297_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_297_err);}throw $pyjs_dbg_297_err;
}})();
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq']($p['getattr'](self, 'opMode'), 'range'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_298_err){if (!$p['isinstance']($pyjs_dbg_298_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_298_err);}throw $pyjs_dbg_298_err;
}})()) {
				$pyjs['track']['lineno']=416;
				self['input1'] = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Input']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_299_err){if (!$p['isinstance']($pyjs_dbg_299_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_299_err);}throw $pyjs_dbg_299_err;
}})();
				$pyjs['track']['lineno']=417;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'input1')['__setitem__']('type', 'text');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_300_err){if (!$p['isinstance']($pyjs_dbg_300_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_300_err);}throw $pyjs_dbg_300_err;
}})();
				$pyjs['track']['lineno']=418;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['appendChild']($p['getattr'](self, 'input1'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_301_err){if (!$p['isinstance']($pyjs_dbg_301_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_301_err);}throw $pyjs_dbg_301_err;
}})();
				$pyjs['track']['lineno']=419;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['TextNode']('to');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_302_err){if (!$p['isinstance']($pyjs_dbg_302_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_302_err);}throw $pyjs_dbg_302_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_303_err){if (!$p['isinstance']($pyjs_dbg_303_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_303_err);}throw $pyjs_dbg_303_err;
}})();
				$pyjs['track']['lineno']=420;
				self['input2'] = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Input']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_304_err){if (!$p['isinstance']($pyjs_dbg_304_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_304_err);}throw $pyjs_dbg_304_err;
}})();
				$pyjs['track']['lineno']=421;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'input2')['__setitem__']('type', 'text');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_305_err){if (!$p['isinstance']($pyjs_dbg_305_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_305_err);}throw $pyjs_dbg_305_err;
}})();
				$pyjs['track']['lineno']=422;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['appendChild']($p['getattr'](self, 'input2'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_306_err){if (!$p['isinstance']($pyjs_dbg_306_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_306_err);}throw $pyjs_dbg_306_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['extension'],['view'],['modul']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=424;
		$method = $pyjs__bind_method2('onKeyDown', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'bones.string', 'lineno':424};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.string';
			$pyjs['track']['lineno']=424;
			$pyjs['track']['lineno']=425;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (typeof isReturn == "undefined"?$m['isReturn']:isReturn)($p['getattr'](event, 'keyCode'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_307_err){if (!$p['isinstance']($pyjs_dbg_307_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_307_err);}throw $pyjs_dbg_307_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_308_err){if (!$p['isinstance']($pyjs_dbg_308_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_308_err);}throw $pyjs_dbg_308_err;
}})()) {
				$pyjs['track']['lineno']=426;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['filterChangedEvent']['fire']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_309_err){if (!$p['isinstance']($pyjs_dbg_309_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_309_err);}throw $pyjs_dbg_309_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onKeyDown'] = $method;
		$pyjs['track']['lineno']=428;
		$method = $pyjs__bind_method2('updateFilter', function(filter) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				filter = arguments[1];
			}
			var $add12,$add3,$add6,$add7,$add4,$add5,$add10,$add8,$add9,$add11;
			$pyjs['track']={'module':'bones.string', 'lineno':428};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.string';
			$pyjs['track']['lineno']=428;
			$pyjs['track']['lineno']=429;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq']($p['getattr'](self, 'opMode'), 'equals'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_310_err){if (!$p['isinstance']($pyjs_dbg_310_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_310_err);}throw $pyjs_dbg_310_err;
}})()) {
				$pyjs['track']['lineno']=430;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return filter['__setitem__']($p['getattr'](self, 'extension')['__getitem__']('target'), $p['getattr'](self, 'input')['__getitem__']('value'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_311_err){if (!$p['isinstance']($pyjs_dbg_311_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_311_err);}throw $pyjs_dbg_311_err;
}})();
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq']($p['getattr'](self, 'opMode'), 'from'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_312_err){if (!$p['isinstance']($pyjs_dbg_312_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_312_err);}throw $pyjs_dbg_312_err;
}})()) {
				$pyjs['track']['lineno']=432;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return filter['__setitem__']($p['__op_add']($add3=$p['getattr'](self, 'extension')['__getitem__']('target'),$add4='$gt'), $p['getattr'](self, 'input')['__getitem__']('value'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_313_err){if (!$p['isinstance']($pyjs_dbg_313_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_313_err);}throw $pyjs_dbg_313_err;
}})();
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq']($p['getattr'](self, 'opMode'), 'to'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_314_err){if (!$p['isinstance']($pyjs_dbg_314_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_314_err);}throw $pyjs_dbg_314_err;
}})()) {
				$pyjs['track']['lineno']=434;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return filter['__setitem__']($p['__op_add']($add5=$p['getattr'](self, 'extension')['__getitem__']('target'),$add6='$lt'), $p['getattr'](self, 'input')['__getitem__']('value'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_315_err){if (!$p['isinstance']($pyjs_dbg_315_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_315_err);}throw $pyjs_dbg_315_err;
}})();
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq']($p['getattr'](self, 'opMode'), 'prefix'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_316_err){if (!$p['isinstance']($pyjs_dbg_316_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_316_err);}throw $pyjs_dbg_316_err;
}})()) {
				$pyjs['track']['lineno']=436;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return filter['__setitem__']($p['__op_add']($add7=$p['getattr'](self, 'extension')['__getitem__']('target'),$add8='$lk'), $p['getattr'](self, 'input')['__getitem__']('value'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_317_err){if (!$p['isinstance']($pyjs_dbg_317_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_317_err);}throw $pyjs_dbg_317_err;
}})();
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq']($p['getattr'](self, 'opMode'), 'range'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_318_err){if (!$p['isinstance']($pyjs_dbg_318_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_318_err);}throw $pyjs_dbg_318_err;
}})()) {
				$pyjs['track']['lineno']=438;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return filter['__setitem__']($p['__op_add']($add9=$p['getattr'](self, 'extension')['__getitem__']('target'),$add10='$gt'), $p['getattr'](self, 'input1')['__getitem__']('value'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_319_err){if (!$p['isinstance']($pyjs_dbg_319_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_319_err);}throw $pyjs_dbg_319_err;
}})();
				$pyjs['track']['lineno']=439;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return filter['__setitem__']($p['__op_add']($add11=$p['getattr'](self, 'extension')['__getitem__']('target'),$add12='$lt'), $p['getattr'](self, 'input2')['__getitem__']('value'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_320_err){if (!$p['isinstance']($pyjs_dbg_320_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_320_err);}throw $pyjs_dbg_320_err;
}})();
			}
			$pyjs['track']['lineno']=440;
			$pyjs['track']['lineno']=440;
			var $pyjs__ret = filter;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['filter']]);
		$cls_definition['updateFilter'] = $method;
		$pyjs['track']['lineno']=443;
		$method = $pyjs__bind_method2('canHandleExtension', function(extension, view, modul) {
			var $or1,$or2,$and31,$and32,$and33;
			$pyjs['track']={'module':'bones.string', 'lineno':443};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.string';
			$pyjs['track']['lineno']=443;
			$pyjs['track']['lineno']=444;
			$pyjs['track']['lineno']=444;
			var $pyjs__ret = ($p['bool']($and31=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance'](extension, $p['dict']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_321_err){if (!$p['isinstance']($pyjs_dbg_321_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_321_err);}throw $pyjs_dbg_321_err;
}})())?($p['bool']($and32=(function(){try{try{$pyjs['in_try_except'] += 1;
			return extension['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_322_err){if (!$p['isinstance']($pyjs_dbg_322_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_322_err);}throw $pyjs_dbg_322_err;
}})()['__contains__']('type'))?($p['bool']($or1=$p['op_eq'](extension['__getitem__']('type'), 'string'))?$or1:(function(){try{try{$pyjs['in_try_except'] += 1;
			return extension['__getitem__']('type')['startswith']('string.');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_323_err){if (!$p['isinstance']($pyjs_dbg_323_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_323_err);}throw $pyjs_dbg_323_err;
}})()):$and32):$and31);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['extension'],['view'],['modul']]);
		$cls_definition['canHandleExtension'] = $method;
		$pyjs['track']['lineno']=400;
		var $bases = new Array($p['getattr']($m['html5'], 'Div'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('ExtendedStringSearch', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=448;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['editBoneSelector']['insert'](3, $m['CheckForStringBone'], $m['StringEditBone']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_324_err){if (!$p['isinstance']($pyjs_dbg_324_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_324_err);}throw $pyjs_dbg_324_err;
}})();
	$pyjs['track']['lineno']=449;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['viewDelegateSelector']['insert'](3, $m['CheckForStringBone'], $m['StringViewBoneDelegate']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_325_err){if (!$p['isinstance']($pyjs_dbg_325_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_325_err);}throw $pyjs_dbg_325_err;
}})();
	$pyjs['track']['lineno']=450;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['extendedSearchWidgetSelector']['insert'](1, $p['getattr']($m['ExtendedStringSearch'], 'canHandleExtension'), $m['ExtendedStringSearch']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_326_err){if (!$p['isinstance']($pyjs_dbg_326_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_326_err);}throw $pyjs_dbg_326_err;
}})();
	$pyjs['track']['lineno']=451;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['extractorDelegateSelector']['insert'](3, $m['CheckForStringBone'], $m['StringBoneExtractor']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_327_err){if (!$p['isinstance']($pyjs_dbg_327_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_327_err);}throw $pyjs_dbg_327_err;
}})();
	return this;
}; /* end bones.string */


/* end module: bones.string */


/*
PYJS_DEPS: ['html5', 'priorityqueue.editBoneSelector', 'priorityqueue', 'priorityqueue.viewDelegateSelector', 'priorityqueue.extendedSearchWidgetSelector', 'priorityqueue.extractorDelegateSelector', 'config.conf', 'config', 'event.EventDispatcher', 'event', 'html5.keycodes', 'i18n.translate', 'i18n', 'bones.base.BaseBoneExtractor', 'bones', 'bones.base']
*/
