/* start module: bones.text */
$pyjs['loaded_modules']['bones.text'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['bones.text']['__was_initialized__']) return $pyjs['loaded_modules']['bones.text'];
	if(typeof $pyjs['loaded_modules']['bones'] == 'undefined' || !$pyjs['loaded_modules']['bones']['__was_initialized__']) $p['___import___']('bones', null);
	var $m = $pyjs['loaded_modules']['bones.text'];
	$m['__repr__'] = function() { return '<module: bones.text>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'bones.text';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['bones']['text'] = $pyjs['loaded_modules']['bones.text'];
	$m.__track_lines__[1] = 'bones.text.py, line 1:\n    # -*- coding: utf-8 -*-';
	$m.__track_lines__[2] = 'bones.text.py, line 2:\n    import html5';
	$m.__track_lines__[4] = 'bones.text.py, line 4:\n    from priorityqueue import editBoneSelector, viewDelegateSelector, extractorDelegateSelector';
	$m.__track_lines__[5] = 'bones.text.py, line 5:\n    from config import conf';
	$m.__track_lines__[6] = 'bones.text.py, line 6:\n    from widgets.wysiwyg import Wysiwyg';
	$m.__track_lines__[7] = 'bones.text.py, line 7:\n    from i18n import translate';
	$m.__track_lines__[8] = 'bones.text.py, line 8:\n    from bones.base import BaseBoneExtractor';
	$m.__track_lines__[10] = 'bones.text.py, line 10:\n    class TextBoneExtractor(BaseBoneExtractor):';
	$m.__track_lines__[12] = 'bones.text.py, line 12:\n    def render(self, data, field):';
	$m.__track_lines__[13] = 'bones.text.py, line 13:\n    if field in data.keys():';
	$m.__track_lines__[15] = 'bones.text.py, line 15:\n    if isinstance(data[field], dict):';
	$m.__track_lines__[16] = 'bones.text.py, line 16:\n    resstr = ""';
	$m.__track_lines__[17] = 'bones.text.py, line 17:\n    if "currentlanguage" in conf.keys():';
	$m.__track_lines__[18] = 'bones.text.py, line 18:\n    if conf["currentlanguage"] in data[field].keys():';
	$m.__track_lines__[19] = 'bones.text.py, line 19:\n    resstr = data[field][conf["currentlanguage"]].replace("&quot;", "").replace(";", " ").replace(\'"\', "\'")';
	$m.__track_lines__[21] = 'bones.text.py, line 21:\n    if data[field].keys().length > 0:';
	$m.__track_lines__[22] = 'bones.text.py, line 22:\n    resstr = data[field][data[field].keys()[0]].replace("&quot;", "").replace(";", " ").replace(\'"\', "\'")';
	$m.__track_lines__[23] = 'bones.text.py, line 23:\n    return \'"%s"\' % resstr';
	$m.__track_lines__[26] = 'bones.text.py, line 26:\n    return str(\'"%s"\' % data[field].replace("&quot;", "").replace(";", " ").replace(\'"\', "\'"))';
	$m.__track_lines__[27] = 'bones.text.py, line 27:\n    return conf["empty_value"]';
	$m.__track_lines__[30] = 'bones.text.py, line 30:\n    class TextViewBoneDelegate( object ):';
	$m.__track_lines__[31] = 'bones.text.py, line 31:\n    def __init__(self, moduleName, boneName, skelStructure, *args, **kwargs ):';
	$m.__track_lines__[32] = 'bones.text.py, line 32:\n    super( TextViewBoneDelegate, self ).__init__()';
	$m.__track_lines__[33] = 'bones.text.py, line 33:\n    self.skelStructure = skelStructure';
	$m.__track_lines__[34] = 'bones.text.py, line 34:\n    self.boneName = boneName';
	$m.__track_lines__[35] = 'bones.text.py, line 35:\n    self.moduleName=moduleName';
	$m.__track_lines__[37] = 'bones.text.py, line 37:\n    def render( self, data, field ):';
	$m.__track_lines__[38] = 'bones.text.py, line 38:\n    if field in data.keys():';
	$m.__track_lines__[40] = 'bones.text.py, line 40:\n    if isinstance(data[field],dict):';
	$m.__track_lines__[41] = 'bones.text.py, line 41:\n    resstr=""';
	$m.__track_lines__[42] = 'bones.text.py, line 42:\n    if "currentlanguage" in conf.keys():';
	$m.__track_lines__[43] = 'bones.text.py, line 43:\n    if conf["currentlanguage"] in data[field].keys():';
	$m.__track_lines__[44] = 'bones.text.py, line 44:\n    resstr=data[field][conf["currentlanguage"]]';
	$m.__track_lines__[46] = 'bones.text.py, line 46:\n    if data[field].keys().length>0:';
	$m.__track_lines__[47] = 'bones.text.py, line 47:\n    resstr=data[field][data[field].keys()[0]]';
	$m.__track_lines__[48] = 'bones.text.py, line 48:\n    aspan=html5.Span()';
	$m.__track_lines__[49] = 'bones.text.py, line 49:\n    aspan.appendChild(html5.TextNode(resstr))';
	$m.__track_lines__[50] = 'bones.text.py, line 50:\n    aspan["Title"]=str( data[field])';
	$m.__track_lines__[51] = 'bones.text.py, line 51:\n    return (aspan)';
	$m.__track_lines__[54] = 'bones.text.py, line 54:\n    return( html5.Label(str( data[field])))';
	$m.__track_lines__[55] = 'bones.text.py, line 55:\n    return( html5.Label( conf[ "empty_value" ] ) )';
	$m.__track_lines__[57] = 'bones.text.py, line 57:\n    class TextEditBone( html5.Div ):';
	$m.__track_lines__[58] = 'bones.text.py, line 58:\n    def __init__(self, moduleName, boneName,readOnly, isPlainText, languages=None, descrHint=None, *args, **kwargs ):';
	$m.__track_lines__[59] = 'bones.text.py, line 59:\n    super( TextEditBone,  self ).__init__( *args, **kwargs )';
	$m.__track_lines__[60] = 'bones.text.py, line 60:\n    self.boneName = boneName';
	$m.__track_lines__[61] = 'bones.text.py, line 61:\n    self.readOnly = readOnly';
	$m.__track_lines__[62] = 'bones.text.py, line 62:\n    self.selectedLang=False';
	$m.__track_lines__[63] = 'bones.text.py, line 63:\n    self.isPlainText = isPlainText';
	$m.__track_lines__[64] = 'bones.text.py, line 64:\n    self.languages = languages';
	$m.__track_lines__[65] = 'bones.text.py, line 65:\n    self.descrHint = descrHint';
	$m.__track_lines__[66] = 'bones.text.py, line 66:\n    self.currentEditor = None';
	$m.__track_lines__[67] = 'bones.text.py, line 67:\n    self.valuesdict = dict()';
	$m.__track_lines__[70] = 'bones.text.py, line 70:\n    if self.languages:';
	$m.__track_lines__[71] = 'bones.text.py, line 71:\n    if "currentlanguage" in conf and conf["currentlanguage"] in self.languages:';
	$m.__track_lines__[72] = 'bones.text.py, line 72:\n    self.selectedLang=conf["currentlanguage"]';
	$m.__track_lines__[74] = 'bones.text.py, line 74:\n    self.selectedLang=self.languages[0]';
	$m.__track_lines__[76] = 'bones.text.py, line 76:\n    self.langButContainer=html5.Div()';
	$m.__track_lines__[77] = 'bones.text.py, line 77:\n    self.langButContainer["class"].append("languagebuttons")';
	$m.__track_lines__[79] = 'bones.text.py, line 79:\n    for lang in self.languages:';
	$m.__track_lines__[80] = 'bones.text.py, line 80:\n    abut=html5.ext.Button(lang,self.changeLang)';
	$m.__track_lines__[81] = 'bones.text.py, line 81:\n    abut["value"]=lang';
	$m.__track_lines__[82] = 'bones.text.py, line 82:\n    self.langButContainer.appendChild(abut)';
	$m.__track_lines__[84] = 'bones.text.py, line 84:\n    self.appendChild(self.langButContainer)';
	$m.__track_lines__[85] = 'bones.text.py, line 85:\n    self.refreshLangButContainer()';
	$m.__track_lines__[87] = 'bones.text.py, line 87:\n    self.input=html5.Textarea()';
	$m.__track_lines__[88] = 'bones.text.py, line 88:\n    self.appendChild(self.input)';
	$m.__track_lines__[89] = 'bones.text.py, line 89:\n    self.previewDiv = html5.Div()';
	$m.__track_lines__[90] = 'bones.text.py, line 90:\n    self.previewDiv["class"].append("preview")';
	$m.__track_lines__[91] = 'bones.text.py, line 91:\n    self.appendChild(self.previewDiv)';
	$m.__track_lines__[93] = 'bones.text.py, line 93:\n    if self.isPlainText:';
	$m.__track_lines__[94] = 'bones.text.py, line 94:\n    self.previewDiv["style"]["display"] = "none"';
	$m.__track_lines__[96] = 'bones.text.py, line 96:\n    self.input["style"]["display"] = "none"';
	$m.__track_lines__[98] = 'bones.text.py, line 98:\n    if readOnly:';
	$m.__track_lines__[99] = 'bones.text.py, line 99:\n    self.input["readonly"] = True';
	$m.__track_lines__[102] = 'bones.text.py, line 102:\n    openEditorBtn = html5.ext.Button(translate("Edit Text"), self.openTxt )';
	$m.__track_lines__[103] = 'bones.text.py, line 103:\n    openEditorBtn["class"].append("textedit")';
	$m.__track_lines__[104] = 'bones.text.py, line 104:\n    openEditorBtn["class"].append("icon")';
	$m.__track_lines__[105] = 'bones.text.py, line 105:\n    self.appendChild( openEditorBtn )';
	$m.__track_lines__[107] = 'bones.text.py, line 107:\n    self.sinkEvent("onClick")';
	$m.__track_lines__[109] = 'bones.text.py, line 109:\n    def _setDisabled(self, disable):';
	$m.__track_lines__[113] = 'bones.text.py, line 113:\n    super(TextEditBone, self)._setDisabled( disable )';
	$m.__track_lines__[114] = 'bones.text.py, line 114:\n    if not disable and not self._disabledState and "is_active" in self.parent()["class"]:';
	$m.__track_lines__[115] = 'bones.text.py, line 115:\n    self.parent()["class"].remove("is_active")';
	$m.__track_lines__[117] = 'bones.text.py, line 117:\n    def openTxt(self, *args, **kwargs):';
	$m.__track_lines__[118] = 'bones.text.py, line 118:\n    assert self.currentEditor is None';
	$m.__track_lines__[119] = 'bones.text.py, line 119:\n    actionBarHint = self.boneName';
	$m.__track_lines__[120] = 'bones.text.py, line 120:\n    if self.descrHint:';
	$m.__track_lines__[121] = 'bones.text.py, line 121:\n    actionBarHint = self.descrHint';
	$m.__track_lines__[122] = 'bones.text.py, line 122:\n    self.currentEditor = Wysiwyg( self.input["value"], actionBarHint=actionBarHint )';
	$m.__track_lines__[123] = 'bones.text.py, line 123:\n    self.currentEditor.saveTextEvent.register( self )';
	$m.__track_lines__[124] = 'bones.text.py, line 124:\n    self.currentEditor.abortTextEvent.register(self)';
	$m.__track_lines__[125] = 'bones.text.py, line 125:\n    conf["mainWindow"].stackWidget( self.currentEditor )';
	$m.__track_lines__[126] = 'bones.text.py, line 126:\n    self.parent()["class"].append("is_active")';
	$m.__track_lines__[128] = 'bones.text.py, line 128:\n    def closeEditor(self):';
	$m.__track_lines__[129] = 'bones.text.py, line 129:\n    if not self.currentEditor:';
	$m.__track_lines__[130] = 'bones.text.py, line 130:\n    return';
	$m.__track_lines__[132] = 'bones.text.py, line 132:\n    conf["mainWindow"].removeWidget( self.currentEditor )';
	$m.__track_lines__[133] = 'bones.text.py, line 133:\n    self.currentEditor = None';
	$m.__track_lines__[135] = 'bones.text.py, line 135:\n    def onSaveText(self, editor, txt ):';
	$m.__track_lines__[136] = 'bones.text.py, line 136:\n    assert self.currentEditor is not None';
	$m.__track_lines__[138] = 'bones.text.py, line 138:\n    self.input["value"] = txt';
	$m.__track_lines__[140] = 'bones.text.py, line 140:\n    if not self.isPlainText:';
	$m.__track_lines__[141] = 'bones.text.py, line 141:\n    self.previewDiv.element.innerHTML = self.input["value"]';
	$m.__track_lines__[143] = 'bones.text.py, line 143:\n    self.closeEditor()';
	$m.__track_lines__[145] = 'bones.text.py, line 145:\n    def onAbortText(self, editor):';
	$m.__track_lines__[146] = 'bones.text.py, line 146:\n    assert self.currentEditor is not None';
	$m.__track_lines__[147] = 'bones.text.py, line 147:\n    self.closeEditor()';
	$m.__track_lines__[149] = 'bones.text.py, line 149:\n    def changeLang(self,btn):';
	$m.__track_lines__[150] = 'bones.text.py, line 150:\n    self.valuesdict[self.selectedLang]=self.input["value"]';
	$m.__track_lines__[151] = 'bones.text.py, line 151:\n    self.selectedLang=btn["value"]';
	$m.__track_lines__[152] = 'bones.text.py, line 152:\n    if self.selectedLang in self.valuesdict.keys():';
	$m.__track_lines__[153] = 'bones.text.py, line 153:\n    self.input["value"]=self.valuesdict[self.selectedLang]';
	$m.__track_lines__[155] = 'bones.text.py, line 155:\n    self.input["value"] = ""';
	$m.__track_lines__[156] = 'bones.text.py, line 156:\n    if not self.isPlainText:';
	$m.__track_lines__[157] = 'bones.text.py, line 157:\n    self.previewDiv.element.innerHTML = self.input["value"]';
	$m.__track_lines__[158] = 'bones.text.py, line 158:\n    self.refreshLangButContainer()';
	$m.__track_lines__[160] = 'bones.text.py, line 160:\n    def refreshLangButContainer(self):';
	$m.__track_lines__[161] = 'bones.text.py, line 161:\n    for abut in self.langButContainer._children:';
	$m.__track_lines__[163] = 'bones.text.py, line 163:\n    if abut["value"] in self.valuesdict and self.valuesdict[abut["value"]]:';
	$m.__track_lines__[164] = 'bones.text.py, line 164:\n    if not "is_filled" in abut["class"]:';
	$m.__track_lines__[165] = 'bones.text.py, line 165:\n    abut["class"].append("is_filled")';
	$m.__track_lines__[167] = 'bones.text.py, line 167:\n    if not "is_unfilled" in abut["class"]:';
	$m.__track_lines__[168] = 'bones.text.py, line 168:\n    abut["class"].append("is_unfilled")';
	$m.__track_lines__[170] = 'bones.text.py, line 170:\n    if abut["value"]==self.selectedLang:';
	$m.__track_lines__[171] = 'bones.text.py, line 171:\n    if not "is_active" in abut["class"]:';
	$m.__track_lines__[172] = 'bones.text.py, line 172:\n    abut["class"].append("is_active")';
	$m.__track_lines__[174] = 'bones.text.py, line 174:\n    abut["class"].remove("is_active")';
	$m.__track_lines__[177] = 'bones.text.py, line 176:\n    @staticmethod ... def fromSkelStructure( moduleName, boneName, skelStructure ):';
	$m.__track_lines__[178] = 'bones.text.py, line 178:\n    readOnly = "readonly" in skelStructure[ boneName ].keys() and skelStructure[ boneName ]["readonly"]';
	$m.__track_lines__[179] = 'bones.text.py, line 179:\n    isPlainText = "validHtml" in skelStructure[ boneName ].keys() and not skelStructure[ boneName ]["validHtml"]';
	$m.__track_lines__[180] = 'bones.text.py, line 180:\n    langs = skelStructure[ boneName ]["languages"] if ("languages" in skelStructure[ boneName ].keys() and skelStructure[ boneName ]["languages"]) else None';
	$m.__track_lines__[181] = 'bones.text.py, line 181:\n    descr = skelStructure[ boneName ]["descr"] if "descr" in skelStructure[ boneName ].keys() else None';
	$m.__track_lines__[182] = 'bones.text.py, line 182:\n    return( TextEditBone( moduleName, boneName, readOnly, isPlainText, langs, descrHint=descr ) )';
	$m.__track_lines__[184] = 'bones.text.py, line 184:\n    def unserialize(self, data):';
	$m.__track_lines__[185] = 'bones.text.py, line 185:\n    self.valuesdict.clear()';
	$m.__track_lines__[186] = 'bones.text.py, line 186:\n    if self.boneName in data.keys():';
	$m.__track_lines__[187] = 'bones.text.py, line 187:\n    if self.languages:';
	$m.__track_lines__[188] = 'bones.text.py, line 188:\n    for lang in self.languages:';
	$m.__track_lines__[189] = 'bones.text.py, line 189:\n    if self.boneName in data.keys() and isinstance(data[self.boneName],dict) and lang in data[ self.boneName ].keys():';
	$m.__track_lines__[190] = 'bones.text.py, line 190:\n    self.valuesdict[lang]=data[ self.boneName ][lang]';
	$m.__track_lines__[192] = 'bones.text.py, line 192:\n    self.valuesdict[lang]=""';
	$m.__track_lines__[193] = 'bones.text.py, line 193:\n    self.input["value"] = self.valuesdict[self.selectedLang]';
	$m.__track_lines__[195] = 'bones.text.py, line 195:\n    self.input["value"] = data[ self.boneName ] if data[ self.boneName ] else ""';
	$m.__track_lines__[196] = 'bones.text.py, line 196:\n    if not self.isPlainText:';
	$m.__track_lines__[197] = 'bones.text.py, line 197:\n    self.previewDiv.element.innerHTML = self.input["value"]';
	$m.__track_lines__[199] = 'bones.text.py, line 199:\n    def serializeForPost(self):';
	$m.__track_lines__[200] = 'bones.text.py, line 200:\n    if self.selectedLang:';
	$m.__track_lines__[201] = 'bones.text.py, line 201:\n    self.valuesdict[self.selectedLang] = self.input["value"]';
	$m.__track_lines__[202] = 'bones.text.py, line 202:\n    return {self.boneName: self.valuesdict}';
	$m.__track_lines__[204] = 'bones.text.py, line 204:\n    return {self.boneName: self.input["value"]}';
	$m.__track_lines__[206] = 'bones.text.py, line 206:\n    def onClick(self, event):';
	$m.__track_lines__[207] = 'bones.text.py, line 207:\n    if html5.utils.doesEventHitWidgetOrChildren(event, self.previewDiv):';
	$m.__track_lines__[208] = 'bones.text.py, line 208:\n    event.stopPropagation()';
	$m.__track_lines__[209] = 'bones.text.py, line 209:\n    event.preventDefault()';
	$m.__track_lines__[210] = 'bones.text.py, line 210:\n    if not self.readOnly:';
	$m.__track_lines__[211] = 'bones.text.py, line 211:\n    self.openTxt()';
	$m.__track_lines__[213] = 'bones.text.py, line 213:\n    def setExtendedErrorInformation(self, errorInfo ):';
	$m.__track_lines__[214] = 'bones.text.py, line 214:\n    pass';
	$m.__track_lines__[217] = 'bones.text.py, line 217:\n    def CheckForTextBone(  moduleName, boneName, skelStucture, *args, **kwargs ):';
	$m.__track_lines__[218] = 'bones.text.py, line 218:\n    return( skelStucture[boneName]["type"]=="text" )';
	$m.__track_lines__[221] = 'bones.text.py, line 221:\n    editBoneSelector.insert( 3, CheckForTextBone, TextEditBone)';
	$m.__track_lines__[222] = 'bones.text.py, line 222:\n    viewDelegateSelector.insert( 3, CheckForTextBone, TextViewBoneDelegate)';
	$m.__track_lines__[223] = 'bones.text.py, line 223:\n    extractorDelegateSelector.insert(3, CheckForTextBone, TextBoneExtractor)';


	$pyjs['track']['module']='bones.text';
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
	$m['extractorDelegateSelector'] = $p['___import___']('priorityqueue.extractorDelegateSelector', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=5;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['conf'] = $p['___import___']('config.conf', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=6;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Wysiwyg'] = $p['___import___']('widgets.wysiwyg.Wysiwyg', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=7;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['translate'] = $p['___import___']('i18n.translate', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=8;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['BaseBoneExtractor'] = $p['___import___']('bones.base.BaseBoneExtractor', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=10;
	$m['TextBoneExtractor'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'bones.text';
		$pyjs['track']['lineno']=12;
		$method = $pyjs__bind_method2('render', function(data, field) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				field = arguments[2];
			}
			var resstr;
			$pyjs['track']={'module':'bones.text', 'lineno':12};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.text';
			$pyjs['track']['lineno']=12;
			$pyjs['track']['lineno']=13;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return data['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()['__contains__'](field));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})()) {
				$pyjs['track']['lineno']=15;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](data['__getitem__'](field), $p['dict']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})()) {
					$pyjs['track']['lineno']=16;
					resstr = '';
					$pyjs['track']['lineno']=17;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['conf']['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})()['__contains__']('currentlanguage'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})()) {
						$pyjs['track']['lineno']=18;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
						return data['__getitem__'](field)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})()['__contains__']($m['conf']['__getitem__']('currentlanguage')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})()) {
							$pyjs['track']['lineno']=19;
							resstr = (function(){try{try{$pyjs['in_try_except'] += 1;
							return (function(){try{try{$pyjs['in_try_except'] += 1;
							return (function(){try{try{$pyjs['in_try_except'] += 1;
							return data['__getitem__'](field)['__getitem__']($m['conf']['__getitem__']('currentlanguage'))['$$replace']('&quot;', '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})()['$$replace'](';', ' ');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})()['$$replace']('"', "'");
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
						}
						else {
							$pyjs['track']['lineno']=21;
							if ((function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['bool'](($p['cmp']($p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
							return data['__getitem__'](field)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})(), 'length'), 0) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})()) {
								$pyjs['track']['lineno']=22;
								resstr = (function(){try{try{$pyjs['in_try_except'] += 1;
								return (function(){try{try{$pyjs['in_try_except'] += 1;
								return (function(){try{try{$pyjs['in_try_except'] += 1;
								return data['__getitem__'](field)['__getitem__']((function(){try{try{$pyjs['in_try_except'] += 1;
								return data['__getitem__'](field)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})()['__getitem__'](0))['$$replace']('&quot;', '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})()['$$replace'](';', ' ');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})()['$$replace']('"', "'");
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
							}
						}
					}
					$pyjs['track']['lineno']=23;
					$pyjs['track']['lineno']=23;
					var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['sprintf']('"%s"', resstr);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=26;
					$pyjs['track']['lineno']=26;
					var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['str']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['sprintf']('"%s"', (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return data['__getitem__'](field)['$$replace']('&quot;', '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})()['$$replace'](';', ' ');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})()['$$replace']('"', "'");
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
			}
			$pyjs['track']['lineno']=27;
			$pyjs['track']['lineno']=27;
			var $pyjs__ret = $m['conf']['__getitem__']('empty_value');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['data'],['field']]);
		$cls_definition['render'] = $method;
		$pyjs['track']['lineno']=10;
		var $bases = new Array($m['BaseBoneExtractor']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('TextBoneExtractor', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=30;
	$m['TextViewBoneDelegate'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'bones.text';
		$pyjs['track']['lineno']=31;
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

			$pyjs['track']={'module':'bones.text', 'lineno':31};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.text';
			$pyjs['track']['lineno']=31;
			$pyjs['track']['lineno']=32;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['TextViewBoneDelegate'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})()['__init__']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
			$pyjs['track']['lineno']=33;
			self['skelStructure'] = skelStructure;
			$pyjs['track']['lineno']=34;
			self['boneName'] = boneName;
			$pyjs['track']['lineno']=35;
			self['moduleName'] = moduleName;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['moduleName'],['boneName'],['skelStructure']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=37;
		$method = $pyjs__bind_method2('render', function(data, field) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				field = arguments[2];
			}
			var aspan,resstr;
			$pyjs['track']={'module':'bones.text', 'lineno':37};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.text';
			$pyjs['track']['lineno']=37;
			$pyjs['track']['lineno']=38;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return data['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})()['__contains__'](field));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})()) {
				$pyjs['track']['lineno']=40;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](data['__getitem__'](field), $p['dict']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})()) {
					$pyjs['track']['lineno']=41;
					resstr = '';
					$pyjs['track']['lineno']=42;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['conf']['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})()['__contains__']('currentlanguage'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})()) {
						$pyjs['track']['lineno']=43;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
						return data['__getitem__'](field)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})()['__contains__']($m['conf']['__getitem__']('currentlanguage')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})()) {
							$pyjs['track']['lineno']=44;
							resstr = data['__getitem__'](field)['__getitem__']($m['conf']['__getitem__']('currentlanguage'));
						}
						else {
							$pyjs['track']['lineno']=46;
							if ((function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['bool'](($p['cmp']($p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
							return data['__getitem__'](field)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})(), 'length'), 0) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})()) {
								$pyjs['track']['lineno']=47;
								resstr = data['__getitem__'](field)['__getitem__']((function(){try{try{$pyjs['in_try_except'] += 1;
								return data['__getitem__'](field)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})()['__getitem__'](0));
							}
						}
					}
					$pyjs['track']['lineno']=48;
					aspan = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['html5']['Span']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})();
					$pyjs['track']['lineno']=49;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return aspan['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['html5']['TextNode'](resstr);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})();
					$pyjs['track']['lineno']=50;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return aspan['__setitem__']('Title', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['str'](data['__getitem__'](field));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})();
					$pyjs['track']['lineno']=51;
					$pyjs['track']['lineno']=51;
					var $pyjs__ret = aspan;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=54;
					$pyjs['track']['lineno']=54;
					var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['html5']['Label']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['str'](data['__getitem__'](field));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
			}
			$pyjs['track']['lineno']=55;
			$pyjs['track']['lineno']=55;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Label']($m['conf']['__getitem__']('empty_value'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['data'],['field']]);
		$cls_definition['render'] = $method;
		$pyjs['track']['lineno']=30;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('TextViewBoneDelegate', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=57;
	$m['TextEditBone'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'bones.text';
		$pyjs['track']['lineno']=58;
		$method = $pyjs__bind_method2('__init__', function(moduleName, boneName, readOnly, isPlainText, languages, descrHint) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,6,arguments['length']-1));

				var kwargs = arguments['length'] >= 7 ? arguments[arguments['length']-1] : arguments[arguments['length']];
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
				isPlainText = arguments[4];
				languages = arguments[5];
				descrHint = arguments[6];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,7,arguments['length']-1));

				var kwargs = arguments['length'] >= 8 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof descrHint != 'undefined') {
					if (descrHint !== null && typeof descrHint['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = descrHint;
						descrHint = arguments[7];
					}
				} else 				if (typeof languages != 'undefined') {
					if (languages !== null && typeof languages['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = languages;
						languages = arguments[7];
					}
				} else 				if (typeof isPlainText != 'undefined') {
					if (isPlainText !== null && typeof isPlainText['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = isPlainText;
						isPlainText = arguments[7];
					}
				} else 				if (typeof readOnly != 'undefined') {
					if (readOnly !== null && typeof readOnly['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = readOnly;
						readOnly = arguments[7];
					}
				} else 				if (typeof boneName != 'undefined') {
					if (boneName !== null && typeof boneName['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = boneName;
						boneName = arguments[7];
					}
				} else 				if (typeof moduleName != 'undefined') {
					if (moduleName !== null && typeof moduleName['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = moduleName;
						moduleName = arguments[7];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[7];
					}
				} else {
				}
			}
			if (typeof languages == 'undefined') languages=arguments['callee']['__args__'][7][1];
			if (typeof descrHint == 'undefined') descrHint=arguments['callee']['__args__'][8][1];
			var $iter1_iter,$iter1_array,$iter1_nextval,$and1,$and2,$and3,$and4,abut,lang,$iter1_type,openEditorBtn,$iter1_idx,$pyjs__trackstack_size_1;
			$pyjs['track']={'module':'bones.text', 'lineno':58};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.text';
			$pyjs['track']['lineno']=58;
			$pyjs['track']['lineno']=59;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['TextEditBone'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})();
			$pyjs['track']['lineno']=60;
			self['boneName'] = boneName;
			$pyjs['track']['lineno']=61;
			self['readOnly'] = readOnly;
			$pyjs['track']['lineno']=62;
			self['selectedLang'] = false;
			$pyjs['track']['lineno']=63;
			self['isPlainText'] = isPlainText;
			$pyjs['track']['lineno']=64;
			self['languages'] = languages;
			$pyjs['track']['lineno']=65;
			self['descrHint'] = descrHint;
			$pyjs['track']['lineno']=66;
			self['currentEditor'] = null;
			$pyjs['track']['lineno']=67;
			self['valuesdict'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})();
			$pyjs['track']['lineno']=70;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'languages'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})()) {
				$pyjs['track']['lineno']=71;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($and1=$m['conf']['__contains__']('currentlanguage'))?$p['getattr'](self, 'languages')['__contains__']($m['conf']['__getitem__']('currentlanguage')):$and1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})()) {
					$pyjs['track']['lineno']=72;
					self['selectedLang'] = $m['conf']['__getitem__']('currentlanguage');
				}
				else if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['len']($p['getattr'](self, 'languages'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})(), 0) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})()) {
					$pyjs['track']['lineno']=74;
					self['selectedLang'] = $p['getattr'](self, 'languages')['__getitem__'](0);
				}
				$pyjs['track']['lineno']=76;
				self['langButContainer'] = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Div']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})();
				$pyjs['track']['lineno']=77;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'langButContainer')['__getitem__']('class')['append']('languagebuttons');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})();
				$pyjs['track']['lineno']=79;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter1_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'languages');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})();
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					lang = $iter1_nextval['$nextval'];
					$pyjs['track']['lineno']=80;
					abut = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['html5']['ext']['Button'](lang, $p['getattr'](self, 'changeLang'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})();
					$pyjs['track']['lineno']=81;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return abut['__setitem__']('value', lang);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})();
					$pyjs['track']['lineno']=82;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['langButContainer']['appendChild'](abut);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='bones.text';
				$pyjs['track']['lineno']=84;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['appendChild']($p['getattr'](self, 'langButContainer'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})();
				$pyjs['track']['lineno']=85;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['refreshLangButContainer']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})();
			}
			$pyjs['track']['lineno']=87;
			self['input'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Textarea']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})();
			$pyjs['track']['lineno']=88;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'input'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})();
			$pyjs['track']['lineno']=89;
			self['previewDiv'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Div']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})();
			$pyjs['track']['lineno']=90;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'previewDiv')['__getitem__']('class')['append']('preview');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})();
			$pyjs['track']['lineno']=91;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'previewDiv'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})();
			$pyjs['track']['lineno']=93;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'isPlainText'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})()) {
				$pyjs['track']['lineno']=94;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'previewDiv')['__getitem__']('style')['__setitem__']('display', 'none');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=96;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'input')['__getitem__']('style')['__setitem__']('display', 'none');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})();
			}
			$pyjs['track']['lineno']=98;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](readOnly);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})()) {
				$pyjs['track']['lineno']=99;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'input')['__setitem__']('readonly', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})();
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and3=!$p['bool'](readOnly))?!$p['bool']($p['getattr'](self, 'isPlainText')):$and3));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})()) {
				$pyjs['track']['lineno']=102;
				openEditorBtn = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['ext']['Button']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['translate']('Edit Text');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})(), $p['getattr'](self, 'openTxt'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})();
				$pyjs['track']['lineno']=103;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return openEditorBtn['__getitem__']('class')['append']('textedit');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})();
				$pyjs['track']['lineno']=104;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return openEditorBtn['__getitem__']('class')['append']('icon');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})();
				$pyjs['track']['lineno']=105;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['appendChild'](openEditorBtn);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})();
			}
			$pyjs['track']['lineno']=107;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['sinkEvent']('onClick');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['moduleName'],['boneName'],['readOnly'],['isPlainText'],['languages', null],['descrHint', null]]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=109;
		$method = $pyjs__bind_method2('_setDisabled', function(disable) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				disable = arguments[1];
			}
			var $and5,$and6,$and7;
			$pyjs['track']={'module':'bones.text', 'lineno':109};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.text';
			$pyjs['track']['lineno']=109;
			$pyjs['track']['lineno']=113;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['TextEditBone'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})()['_setDisabled'](disable);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})();
			$pyjs['track']['lineno']=114;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and5=!$p['bool'](disable))?($p['bool']($and6=!$p['bool']($p['getattr'](self, '_disabledState')))?(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})()['__getitem__']('class')['__contains__']('is_active'):$and6):$and5));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})()) {
				$pyjs['track']['lineno']=115;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})()['__getitem__']('class')['remove']('is_active');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['disable']]);
		$cls_definition['_setDisabled'] = $method;
		$pyjs['track']['lineno']=117;
		$method = $pyjs__bind_method2('openTxt', function() {
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
			var actionBarHint;
			$pyjs['track']={'module':'bones.text', 'lineno':117};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.text';
			$pyjs['track']['lineno']=117;
			$pyjs['track']['lineno']=118;
			if (!( ($p['getattr'](self, 'currentEditor') === null) )) {
			   throw $p['AssertionError']();
			 }
			$pyjs['track']['lineno']=119;
			actionBarHint = $p['getattr'](self, 'boneName');
			$pyjs['track']['lineno']=120;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'descrHint'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})()) {
				$pyjs['track']['lineno']=121;
				actionBarHint = $p['getattr'](self, 'descrHint');
			}
			$pyjs['track']['lineno']=122;
			self['currentEditor'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(null, $m['Wysiwyg'], null, null, [{'actionBarHint':actionBarHint}, $p['getattr'](self, 'input')['__getitem__']('value')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
}})();
			$pyjs['track']['lineno']=123;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['currentEditor']['saveTextEvent']['register'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})();
			$pyjs['track']['lineno']=124;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['currentEditor']['abortTextEvent']['register'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})();
			$pyjs['track']['lineno']=125;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('mainWindow')['stackWidget']($p['getattr'](self, 'currentEditor'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})();
			$pyjs['track']['lineno']=126;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_88_err){if (!$p['isinstance']($pyjs_dbg_88_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_88_err);}throw $pyjs_dbg_88_err;
}})()['__getitem__']('class')['append']('is_active');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_89_err){if (!$p['isinstance']($pyjs_dbg_89_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_89_err);}throw $pyjs_dbg_89_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['openTxt'] = $method;
		$pyjs['track']['lineno']=128;
		$method = $pyjs__bind_method2('closeEditor', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'bones.text', 'lineno':128};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.text';
			$pyjs['track']['lineno']=128;
			$pyjs['track']['lineno']=129;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool']($p['getattr'](self, 'currentEditor')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_90_err){if (!$p['isinstance']($pyjs_dbg_90_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_90_err);}throw $pyjs_dbg_90_err;
}})()) {
				$pyjs['track']['lineno']=130;
				$pyjs['track']['lineno']=130;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=132;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('mainWindow')['removeWidget']($p['getattr'](self, 'currentEditor'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_91_err){if (!$p['isinstance']($pyjs_dbg_91_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_91_err);}throw $pyjs_dbg_91_err;
}})();
			$pyjs['track']['lineno']=133;
			self['currentEditor'] = null;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['closeEditor'] = $method;
		$pyjs['track']['lineno']=135;
		$method = $pyjs__bind_method2('onSaveText', function(editor, txt) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				editor = arguments[1];
				txt = arguments[2];
			}

			$pyjs['track']={'module':'bones.text', 'lineno':135};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.text';
			$pyjs['track']['lineno']=135;
			$pyjs['track']['lineno']=136;
			if (!( ($p['getattr'](self, 'currentEditor') !== null) )) {
			   throw $p['AssertionError']();
			 }
			$pyjs['track']['lineno']=138;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'input')['__setitem__']('value', txt);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_92_err){if (!$p['isinstance']($pyjs_dbg_92_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_92_err);}throw $pyjs_dbg_92_err;
}})();
			$pyjs['track']['lineno']=140;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool']($p['getattr'](self, 'isPlainText')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_93_err){if (!$p['isinstance']($pyjs_dbg_93_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_93_err);}throw $pyjs_dbg_93_err;
}})()) {
				$pyjs['track']['lineno']=141;
				$p['getattr']($p['getattr'](self, 'previewDiv'), 'element')['innerHTML'] = $p['getattr'](self, 'input')['__getitem__']('value');
			}
			$pyjs['track']['lineno']=143;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['closeEditor']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_94_err){if (!$p['isinstance']($pyjs_dbg_94_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_94_err);}throw $pyjs_dbg_94_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['editor'],['txt']]);
		$cls_definition['onSaveText'] = $method;
		$pyjs['track']['lineno']=145;
		$method = $pyjs__bind_method2('onAbortText', function(editor) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				editor = arguments[1];
			}

			$pyjs['track']={'module':'bones.text', 'lineno':145};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.text';
			$pyjs['track']['lineno']=145;
			$pyjs['track']['lineno']=146;
			if (!( ($p['getattr'](self, 'currentEditor') !== null) )) {
			   throw $p['AssertionError']();
			 }
			$pyjs['track']['lineno']=147;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['closeEditor']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_95_err){if (!$p['isinstance']($pyjs_dbg_95_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_95_err);}throw $pyjs_dbg_95_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['editor']]);
		$cls_definition['onAbortText'] = $method;
		$pyjs['track']['lineno']=149;
		$method = $pyjs__bind_method2('changeLang', function(btn) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				btn = arguments[1];
			}

			$pyjs['track']={'module':'bones.text', 'lineno':149};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.text';
			$pyjs['track']['lineno']=149;
			$pyjs['track']['lineno']=150;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'valuesdict')['__setitem__']($p['getattr'](self, 'selectedLang'), $p['getattr'](self, 'input')['__getitem__']('value'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_96_err){if (!$p['isinstance']($pyjs_dbg_96_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_96_err);}throw $pyjs_dbg_96_err;
}})();
			$pyjs['track']['lineno']=151;
			self['selectedLang'] = btn['__getitem__']('value');
			$pyjs['track']['lineno']=152;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return self['valuesdict']['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_97_err){if (!$p['isinstance']($pyjs_dbg_97_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_97_err);}throw $pyjs_dbg_97_err;
}})()['__contains__']($p['getattr'](self, 'selectedLang')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_98_err){if (!$p['isinstance']($pyjs_dbg_98_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_98_err);}throw $pyjs_dbg_98_err;
}})()) {
				$pyjs['track']['lineno']=153;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'input')['__setitem__']('value', $p['getattr'](self, 'valuesdict')['__getitem__']($p['getattr'](self, 'selectedLang')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_99_err){if (!$p['isinstance']($pyjs_dbg_99_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_99_err);}throw $pyjs_dbg_99_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=155;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'input')['__setitem__']('value', '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_100_err){if (!$p['isinstance']($pyjs_dbg_100_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_100_err);}throw $pyjs_dbg_100_err;
}})();
			}
			$pyjs['track']['lineno']=156;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool']($p['getattr'](self, 'isPlainText')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_101_err){if (!$p['isinstance']($pyjs_dbg_101_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_101_err);}throw $pyjs_dbg_101_err;
}})()) {
				$pyjs['track']['lineno']=157;
				$p['getattr']($p['getattr'](self, 'previewDiv'), 'element')['innerHTML'] = $p['getattr'](self, 'input')['__getitem__']('value');
			}
			$pyjs['track']['lineno']=158;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['refreshLangButContainer']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_102_err){if (!$p['isinstance']($pyjs_dbg_102_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_102_err);}throw $pyjs_dbg_102_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['btn']]);
		$cls_definition['changeLang'] = $method;
		$pyjs['track']['lineno']=160;
		$method = $pyjs__bind_method2('refreshLangButContainer', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $and8,$and9,$iter2_nextval,$iter2_type,$iter2_iter,abut,$iter2_idx,$pyjs__trackstack_size_1,$iter2_array;
			$pyjs['track']={'module':'bones.text', 'lineno':160};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.text';
			$pyjs['track']['lineno']=160;
			$pyjs['track']['lineno']=161;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter2_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr']($p['getattr'](self, 'langButContainer'), '_children');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_103_err){if (!$p['isinstance']($pyjs_dbg_103_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_103_err);}throw $pyjs_dbg_103_err;
}})();
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				abut = $iter2_nextval['$nextval'];
				$pyjs['track']['lineno']=163;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($and8=$p['getattr'](self, 'valuesdict')['__contains__'](abut['__getitem__']('value')))?$p['getattr'](self, 'valuesdict')['__getitem__'](abut['__getitem__']('value')):$and8));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_104_err){if (!$p['isinstance']($pyjs_dbg_104_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_104_err);}throw $pyjs_dbg_104_err;
}})()) {
					$pyjs['track']['lineno']=164;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](!$p['bool'](abut['__getitem__']('class')['__contains__']('is_filled')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_105_err){if (!$p['isinstance']($pyjs_dbg_105_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_105_err);}throw $pyjs_dbg_105_err;
}})()) {
						$pyjs['track']['lineno']=165;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return abut['__getitem__']('class')['append']('is_filled');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_106_err){if (!$p['isinstance']($pyjs_dbg_106_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_106_err);}throw $pyjs_dbg_106_err;
}})();
					}
				}
				else {
					$pyjs['track']['lineno']=167;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](!$p['bool'](abut['__getitem__']('class')['__contains__']('is_unfilled')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_107_err){if (!$p['isinstance']($pyjs_dbg_107_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_107_err);}throw $pyjs_dbg_107_err;
}})()) {
						$pyjs['track']['lineno']=168;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return abut['__getitem__']('class')['append']('is_unfilled');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_108_err){if (!$p['isinstance']($pyjs_dbg_108_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_108_err);}throw $pyjs_dbg_108_err;
}})();
					}
				}
				$pyjs['track']['lineno']=170;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq'](abut['__getitem__']('value'), $p['getattr'](self, 'selectedLang')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_109_err){if (!$p['isinstance']($pyjs_dbg_109_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_109_err);}throw $pyjs_dbg_109_err;
}})()) {
					$pyjs['track']['lineno']=171;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](!$p['bool'](abut['__getitem__']('class')['__contains__']('is_active')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_110_err){if (!$p['isinstance']($pyjs_dbg_110_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_110_err);}throw $pyjs_dbg_110_err;
}})()) {
						$pyjs['track']['lineno']=172;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return abut['__getitem__']('class')['append']('is_active');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_111_err){if (!$p['isinstance']($pyjs_dbg_111_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_111_err);}throw $pyjs_dbg_111_err;
}})();
					}
				}
				else {
					$pyjs['track']['lineno']=174;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return abut['__getitem__']('class')['remove']('is_active');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_112_err){if (!$p['isinstance']($pyjs_dbg_112_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_112_err);}throw $pyjs_dbg_112_err;
}})();
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='bones.text';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['refreshLangButContainer'] = $method;
		$pyjs['track']['lineno']=177;
		$method = $pyjs__bind_method2('fromSkelStructure', function(moduleName, boneName, skelStructure) {
			var descr,readOnly,$and12,$and13,$and10,$and11,$and14,$and15,langs,isPlainText;
			$pyjs['track']={'module':'bones.text', 'lineno':177};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.text';
			$pyjs['track']['lineno']=177;
			$pyjs['track']['lineno']=178;
			readOnly = ($p['bool']($and10=(function(){try{try{$pyjs['in_try_except'] += 1;
			return skelStructure['__getitem__'](boneName)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_113_err){if (!$p['isinstance']($pyjs_dbg_113_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_113_err);}throw $pyjs_dbg_113_err;
}})()['__contains__']('readonly'))?skelStructure['__getitem__'](boneName)['__getitem__']('readonly'):$and10);
			$pyjs['track']['lineno']=179;
			isPlainText = ($p['bool']($and12=(function(){try{try{$pyjs['in_try_except'] += 1;
			return skelStructure['__getitem__'](boneName)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_114_err){if (!$p['isinstance']($pyjs_dbg_114_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_114_err);}throw $pyjs_dbg_114_err;
}})()['__contains__']('validHtml'))?!$p['bool'](skelStructure['__getitem__'](boneName)['__getitem__']('validHtml')):$and12);
			$pyjs['track']['lineno']=180;
			langs = ($p['bool'](($p['bool']($and14=(function(){try{try{$pyjs['in_try_except'] += 1;
			return skelStructure['__getitem__'](boneName)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_115_err){if (!$p['isinstance']($pyjs_dbg_115_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_115_err);}throw $pyjs_dbg_115_err;
}})()['__contains__']('languages'))?skelStructure['__getitem__'](boneName)['__getitem__']('languages'):$and14))? (skelStructure['__getitem__'](boneName)['__getitem__']('languages')) : (null));
			$pyjs['track']['lineno']=181;
			descr = ($p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return skelStructure['__getitem__'](boneName)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_116_err){if (!$p['isinstance']($pyjs_dbg_116_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_116_err);}throw $pyjs_dbg_116_err;
}})()['__contains__']('descr'))? (skelStructure['__getitem__'](boneName)['__getitem__']('descr')) : (null));
			$pyjs['track']['lineno']=182;
			$pyjs['track']['lineno']=182;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(null, $m['TextEditBone'], null, null, [{'descrHint':descr}, moduleName, boneName, readOnly, isPlainText, langs]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_117_err){if (!$p['isinstance']($pyjs_dbg_117_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_117_err);}throw $pyjs_dbg_117_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['moduleName'],['boneName'],['skelStructure']]);
		$cls_definition['fromSkelStructure'] = $method;
		$pyjs['track']['lineno']=184;
		$method = $pyjs__bind_method2('unserialize', function(data) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}
			var lang,$iter3_idx,$iter3_type,$pyjs__trackstack_size_1,$and16,$iter3_iter,$iter3_array,$and18,$iter3_nextval,$and17;
			$pyjs['track']={'module':'bones.text', 'lineno':184};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.text';
			$pyjs['track']['lineno']=184;
			$pyjs['track']['lineno']=185;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['valuesdict']['clear']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_118_err){if (!$p['isinstance']($pyjs_dbg_118_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_118_err);}throw $pyjs_dbg_118_err;
}})();
			$pyjs['track']['lineno']=186;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return data['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_119_err){if (!$p['isinstance']($pyjs_dbg_119_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_119_err);}throw $pyjs_dbg_119_err;
}})()['__contains__']($p['getattr'](self, 'boneName')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_120_err){if (!$p['isinstance']($pyjs_dbg_120_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_120_err);}throw $pyjs_dbg_120_err;
}})()) {
				$pyjs['track']['lineno']=187;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, 'languages'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_121_err){if (!$p['isinstance']($pyjs_dbg_121_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_121_err);}throw $pyjs_dbg_121_err;
}})()) {
					$pyjs['track']['lineno']=188;
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter3_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'languages');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_122_err){if (!$p['isinstance']($pyjs_dbg_122_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_122_err);}throw $pyjs_dbg_122_err;
}})();
					$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
					while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
						lang = $iter3_nextval['$nextval'];
						$pyjs['track']['lineno']=189;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](($p['bool']($and16=(function(){try{try{$pyjs['in_try_except'] += 1;
						return data['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_123_err){if (!$p['isinstance']($pyjs_dbg_123_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_123_err);}throw $pyjs_dbg_123_err;
}})()['__contains__']($p['getattr'](self, 'boneName')))?($p['bool']($and17=(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['isinstance'](data['__getitem__']($p['getattr'](self, 'boneName')), $p['dict']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_124_err){if (!$p['isinstance']($pyjs_dbg_124_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_124_err);}throw $pyjs_dbg_124_err;
}})())?(function(){try{try{$pyjs['in_try_except'] += 1;
						return data['__getitem__']($p['getattr'](self, 'boneName'))['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_125_err){if (!$p['isinstance']($pyjs_dbg_125_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_125_err);}throw $pyjs_dbg_125_err;
}})()['__contains__'](lang):$and17):$and16));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_126_err){if (!$p['isinstance']($pyjs_dbg_126_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_126_err);}throw $pyjs_dbg_126_err;
}})()) {
							$pyjs['track']['lineno']=190;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['getattr'](self, 'valuesdict')['__setitem__'](lang, data['__getitem__']($p['getattr'](self, 'boneName'))['__getitem__'](lang));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_127_err){if (!$p['isinstance']($pyjs_dbg_127_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_127_err);}throw $pyjs_dbg_127_err;
}})();
						}
						else {
							$pyjs['track']['lineno']=192;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['getattr'](self, 'valuesdict')['__setitem__'](lang, '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_128_err){if (!$p['isinstance']($pyjs_dbg_128_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_128_err);}throw $pyjs_dbg_128_err;
}})();
						}
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='bones.text';
					$pyjs['track']['lineno']=193;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'input')['__setitem__']('value', $p['getattr'](self, 'valuesdict')['__getitem__']($p['getattr'](self, 'selectedLang')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_129_err){if (!$p['isinstance']($pyjs_dbg_129_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_129_err);}throw $pyjs_dbg_129_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=195;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'input')['__setitem__']('value', ($p['bool'](data['__getitem__']($p['getattr'](self, 'boneName')))? (data['__getitem__']($p['getattr'](self, 'boneName'))) : ('')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_130_err){if (!$p['isinstance']($pyjs_dbg_130_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_130_err);}throw $pyjs_dbg_130_err;
}})();
				}
			}
			$pyjs['track']['lineno']=196;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool']($p['getattr'](self, 'isPlainText')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_131_err){if (!$p['isinstance']($pyjs_dbg_131_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_131_err);}throw $pyjs_dbg_131_err;
}})()) {
				$pyjs['track']['lineno']=197;
				$p['getattr']($p['getattr'](self, 'previewDiv'), 'element')['innerHTML'] = $p['getattr'](self, 'input')['__getitem__']('value');
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['data']]);
		$cls_definition['unserialize'] = $method;
		$pyjs['track']['lineno']=199;
		$method = $pyjs__bind_method2('serializeForPost', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'bones.text', 'lineno':199};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.text';
			$pyjs['track']['lineno']=199;
			$pyjs['track']['lineno']=200;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'selectedLang'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_132_err){if (!$p['isinstance']($pyjs_dbg_132_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_132_err);}throw $pyjs_dbg_132_err;
}})()) {
				$pyjs['track']['lineno']=201;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'valuesdict')['__setitem__']($p['getattr'](self, 'selectedLang'), $p['getattr'](self, 'input')['__getitem__']('value'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_133_err){if (!$p['isinstance']($pyjs_dbg_133_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_133_err);}throw $pyjs_dbg_133_err;
}})();
				$pyjs['track']['lineno']=202;
				$pyjs['track']['lineno']=202;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([[$p['getattr'](self, 'boneName'), $p['getattr'](self, 'valuesdict')]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_134_err){if (!$p['isinstance']($pyjs_dbg_134_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_134_err);}throw $pyjs_dbg_134_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			else {
				$pyjs['track']['lineno']=204;
				$pyjs['track']['lineno']=204;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([[$p['getattr'](self, 'boneName'), $p['getattr'](self, 'input')['__getitem__']('value')]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_135_err){if (!$p['isinstance']($pyjs_dbg_135_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_135_err);}throw $pyjs_dbg_135_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['serializeForPost'] = $method;
		$pyjs['track']['lineno']=206;
		$method = $pyjs__bind_method2('onClick', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'bones.text', 'lineno':206};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.text';
			$pyjs['track']['lineno']=206;
			$pyjs['track']['lineno']=207;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['utils']['doesEventHitWidgetOrChildren'](event, $p['getattr'](self, 'previewDiv'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_136_err){if (!$p['isinstance']($pyjs_dbg_136_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_136_err);}throw $pyjs_dbg_136_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_137_err){if (!$p['isinstance']($pyjs_dbg_137_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_137_err);}throw $pyjs_dbg_137_err;
}})()) {
				$pyjs['track']['lineno']=208;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return event['stopPropagation']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_138_err){if (!$p['isinstance']($pyjs_dbg_138_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_138_err);}throw $pyjs_dbg_138_err;
}})();
				$pyjs['track']['lineno']=209;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return event['preventDefault']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_139_err){if (!$p['isinstance']($pyjs_dbg_139_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_139_err);}throw $pyjs_dbg_139_err;
}})();
				$pyjs['track']['lineno']=210;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']($p['getattr'](self, 'readOnly')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_140_err){if (!$p['isinstance']($pyjs_dbg_140_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_140_err);}throw $pyjs_dbg_140_err;
}})()) {
					$pyjs['track']['lineno']=211;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['openTxt']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_141_err){if (!$p['isinstance']($pyjs_dbg_141_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_141_err);}throw $pyjs_dbg_141_err;
}})();
				}
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=213;
		$method = $pyjs__bind_method2('setExtendedErrorInformation', function(errorInfo) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				errorInfo = arguments[1];
			}

			$pyjs['track']={'module':'bones.text', 'lineno':213};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.text';
			$pyjs['track']['lineno']=213;
			$pyjs['track']['lineno']=214;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['errorInfo']]);
		$cls_definition['setExtendedErrorInformation'] = $method;
		$pyjs['track']['lineno']=57;
		var $bases = new Array($p['getattr']($m['html5'], 'Div'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('TextEditBone', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=217;
	$m['CheckForTextBone'] = function(moduleName, boneName, skelStucture) {
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

		$pyjs['track']={'module':'bones.text','lineno':217};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='bones.text';
		$pyjs['track']['lineno']=217;
		$pyjs['track']['lineno']=218;
		$pyjs['track']['lineno']=218;
		var $pyjs__ret = $p['op_eq'](skelStucture['__getitem__'](boneName)['__getitem__']('type'), 'text');
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['CheckForTextBone']['__name__'] = 'CheckForTextBone';

	$m['CheckForTextBone']['__bind_type__'] = 0;
	$m['CheckForTextBone']['__args__'] = ['args',['kwargs'],['moduleName'],['boneName'],['skelStucture']];
	$pyjs['track']['lineno']=221;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['editBoneSelector']['insert'](3, $m['CheckForTextBone'], $m['TextEditBone']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_142_err){if (!$p['isinstance']($pyjs_dbg_142_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_142_err);}throw $pyjs_dbg_142_err;
}})();
	$pyjs['track']['lineno']=222;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['viewDelegateSelector']['insert'](3, $m['CheckForTextBone'], $m['TextViewBoneDelegate']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_143_err){if (!$p['isinstance']($pyjs_dbg_143_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_143_err);}throw $pyjs_dbg_143_err;
}})();
	$pyjs['track']['lineno']=223;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['extractorDelegateSelector']['insert'](3, $m['CheckForTextBone'], $m['TextBoneExtractor']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_144_err){if (!$p['isinstance']($pyjs_dbg_144_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_144_err);}throw $pyjs_dbg_144_err;
}})();
	return this;
}; /* end bones.text */


/* end module: bones.text */


/*
PYJS_DEPS: ['html5', 'priorityqueue.editBoneSelector', 'priorityqueue', 'priorityqueue.viewDelegateSelector', 'priorityqueue.extractorDelegateSelector', 'config.conf', 'config', 'widgets.wysiwyg.Wysiwyg', 'widgets', 'widgets.wysiwyg', 'i18n.translate', 'i18n', 'bones.base.BaseBoneExtractor', 'bones', 'bones.base']
*/
