/* start module: widgets.edit */
$pyjs['loaded_modules']['widgets.edit'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['widgets.edit']['__was_initialized__']) return $pyjs['loaded_modules']['widgets.edit'];
	if(typeof $pyjs['loaded_modules']['widgets'] == 'undefined' || !$pyjs['loaded_modules']['widgets']['__was_initialized__']) $p['___import___']('widgets', null);
	var $m = $pyjs['loaded_modules']['widgets.edit'];
	$m['__repr__'] = function() { return '<module: widgets.edit>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'widgets.edit';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['widgets']['edit'] = $pyjs['loaded_modules']['widgets.edit'];
	$m.__track_lines__[1] = 'widgets.edit.py, line 1:\n    # -*- coding: utf-8 -*-';
	$m.__track_lines__[2] = 'widgets.edit.py, line 2:\n    import html5, utils';
	$m.__track_lines__[4] = 'widgets.edit.py, line 4:\n    from html5.a import A';
	$m.__track_lines__[5] = 'widgets.edit.py, line 5:\n    from html5.form import Fieldset';
	$m.__track_lines__[6] = 'widgets.edit.py, line 6:\n    from html5.ext import YesNoDialog';
	$m.__track_lines__[8] = 'widgets.edit.py, line 8:\n    from network import NetworkService';
	$m.__track_lines__[9] = 'widgets.edit.py, line 9:\n    from config import conf';
	$m.__track_lines__[10] = 'widgets.edit.py, line 10:\n    from priorityqueue import editBoneSelector';
	$m.__track_lines__[11] = 'widgets.edit.py, line 11:\n    from widgets.tooltip import ToolTip';
	$m.__track_lines__[12] = 'widgets.edit.py, line 12:\n    from widgets.actionbar import ActionBar';
	$m.__track_lines__[13] = 'widgets.edit.py, line 13:\n    from i18n import translate';
	$m.__track_lines__[15] = 'widgets.edit.py, line 15:\n    class InvalidBoneValueException(ValueError):';
	$m.__track_lines__[16] = 'widgets.edit.py, line 16:\n    pass';
	$m.__track_lines__[18] = 'widgets.edit.py, line 18:\n    class InternalEdit(html5.Div):';
	$m.__track_lines__[20] = 'widgets.edit.py, line 20:\n    def __init__(self, skelStructure, values=None, errorInformation=None, readOnly=False, defaultCat=""):';
	$m.__track_lines__[21] = 'widgets.edit.py, line 21:\n    super(InternalEdit, self).__init__()';
	$m.__track_lines__[22] = 'widgets.edit.py, line 22:\n    self.editIdx = 1';
	$m.__track_lines__[23] = 'widgets.edit.py, line 23:\n    self.skelStructure = skelStructure';
	$m.__track_lines__[24] = 'widgets.edit.py, line 24:\n    self.values = values';
	$m.__track_lines__[25] = 'widgets.edit.py, line 25:\n    self.errorInformation = errorInformation';
	$m.__track_lines__[26] = 'widgets.edit.py, line 26:\n    self.defaultCat = defaultCat';
	$m.__track_lines__[28] = 'widgets.edit.py, line 28:\n    self.form = html5.Form()';
	$m.__track_lines__[29] = 'widgets.edit.py, line 29:\n    self.appendChild(self.form)';
	$m.__track_lines__[31] = 'widgets.edit.py, line 31:\n    self.renderStructure(readOnly=readOnly)';
	$m.__track_lines__[33] = 'widgets.edit.py, line 33:\n    if values:';
	$m.__track_lines__[34] = 'widgets.edit.py, line 34:\n    self.unserialize( values )';
	$m.__track_lines__[36] = 'widgets.edit.py, line 36:\n    def renderStructure(self, readOnly = False):';
	$m.__track_lines__[37] = 'widgets.edit.py, line 37:\n    self.bones = {}';
	$m.__track_lines__[39] = 'widgets.edit.py, line 39:\n    tmpDict = {k: v for k, v in self.skelStructure}';
	$m.__track_lines__[40] = 'widgets.edit.py, line 40:\n    fieldSets = {}';
	$m.__track_lines__[41] = 'widgets.edit.py, line 41:\n    currRow = 0';
	$m.__track_lines__[43] = 'widgets.edit.py, line 43:\n    defaultCat = self.defaultCat';
	$m.__track_lines__[44] = 'widgets.edit.py, line 44:\n    firstCat = True';
	$m.__track_lines__[46] = 'widgets.edit.py, line 46:\n    for key, bone in self.skelStructure:';
	$m.__track_lines__[49] = 'widgets.edit.py, line 49:\n    if not bone["visible"]:';
	$m.__track_lines__[50] = 'widgets.edit.py, line 50:\n    continue';
	$m.__track_lines__[53] = 'widgets.edit.py, line 53:\n    if readOnly:';
	$m.__track_lines__[54] = 'widgets.edit.py, line 54:\n    tmpDict[key]["readonly"] = True';
	$m.__track_lines__[56] = 'widgets.edit.py, line 56:\n    cat = defaultCat';
	$m.__track_lines__[58] = 'widgets.edit.py, line 58:\n    if ("params" in bone.keys()';
	$m.__track_lines__[61] = 'widgets.edit.py, line 61:\n    cat = bone["params"]["category"]';
	$m.__track_lines__[63] = 'widgets.edit.py, line 63:\n    if cat is not None and not cat in fieldSets.keys():';
	$m.__track_lines__[64] = 'widgets.edit.py, line 64:\n    fs = html5.Fieldset()';
	$m.__track_lines__[65] = 'widgets.edit.py, line 65:\n    fs["class"] = cat';
	$m.__track_lines__[67] = 'widgets.edit.py, line 67:\n    if firstCat:';
	$m.__track_lines__[68] = 'widgets.edit.py, line 68:\n    fs["class"].append("active")';
	$m.__track_lines__[69] = 'widgets.edit.py, line 69:\n    firstCat = False';
	$m.__track_lines__[71] = 'widgets.edit.py, line 71:\n    fs["name"] = cat or "empty"';
	$m.__track_lines__[72] = 'widgets.edit.py, line 72:\n    legend = html5.Legend()';
	$m.__track_lines__[73] = 'widgets.edit.py, line 73:\n    fshref = fieldset_A()';
	$m.__track_lines__[74] = 'widgets.edit.py, line 74:\n    fshref.appendChild(html5.TextNode(cat))';
	$m.__track_lines__[75] = 'widgets.edit.py, line 75:\n    legend.appendChild( fshref )';
	$m.__track_lines__[76] = 'widgets.edit.py, line 76:\n    fs.appendChild(legend)';
	$m.__track_lines__[77] = 'widgets.edit.py, line 77:\n    section = html5.Section()';
	$m.__track_lines__[78] = 'widgets.edit.py, line 78:\n    fs.appendChild(section)';
	$m.__track_lines__[79] = 'widgets.edit.py, line 79:\n    fs._section = section';
	$m.__track_lines__[80] = 'widgets.edit.py, line 80:\n    fieldSets[cat] = fs';
	$m.__track_lines__[82] = 'widgets.edit.py, line 82:\n    wdgGen = editBoneSelector.select(None, key, tmpDict)';
	$m.__track_lines__[83] = 'widgets.edit.py, line 83:\n    widget = wdgGen.fromSkelStructure(None, key, tmpDict)';
	$m.__track_lines__[84] = 'widgets.edit.py, line 84:\n    widget["id"] = "vi_%s_%s_%s_%s_bn_%s" % (self.editIdx, None, "internal", cat or "empty", key)';
	$m.__track_lines__[86] = 'widgets.edit.py, line 86:\n    descrLbl = html5.Label(bone["descr"])';
	$m.__track_lines__[87] = 'widgets.edit.py, line 87:\n    descrLbl["class"].append(key)';
	$m.__track_lines__[88] = 'widgets.edit.py, line 88:\n    descrLbl["class"].append(bone["type"].replace(".","_"))';
	$m.__track_lines__[89] = 'widgets.edit.py, line 89:\n    descrLbl["for"] = "vi_%s_%s_%s_%s_bn_%s" % ( self.editIdx, None, "internal", cat or "empty", key)';
	$m.__track_lines__[91] = 'widgets.edit.py, line 91:\n    if bone["required"]:';
	$m.__track_lines__[92] = 'widgets.edit.py, line 92:\n    descrLbl["class"].append("is_required")';
	$m.__track_lines__[94] = 'widgets.edit.py, line 94:\n    if (bone["required"]';
	$m.__track_lines__[97] = 'widgets.edit.py, line 97:\n    descrLbl["class"].append("is_invalid")';
	$m.__track_lines__[98] = 'widgets.edit.py, line 98:\n    if bone["error"]:';
	$m.__track_lines__[99] = 'widgets.edit.py, line 99:\n    descrLbl["title"] = bone["error"]';
	$m.__track_lines__[101] = 'widgets.edit.py, line 101:\n    descrLbl["title"] = self.errorInformation[ key ]';
	$m.__track_lines__[102] = 'widgets.edit.py, line 102:\n    fieldSets[ cat ]["class"].append("is_incomplete")';
	$m.__track_lines__[104] = 'widgets.edit.py, line 104:\n    if bone["required"] and not (bone["error"] is not None or (self.errorInformation and key in self.errorInformation.keys())):';
	$m.__track_lines__[105] = 'widgets.edit.py, line 105:\n    descrLbl["class"].append("is_valid")';
	$m.__track_lines__[107] = 'widgets.edit.py, line 107:\n    if "params" in bone.keys() and isinstance(bone["params"], dict) and "tooltip" in bone["params"].keys():';
	$m.__track_lines__[108] = 'widgets.edit.py, line 108:\n    tmp = html5.Span()';
	$m.__track_lines__[109] = 'widgets.edit.py, line 109:\n    tmp.appendChild(descrLbl)';
	$m.__track_lines__[110] = 'widgets.edit.py, line 110:\n    tmp.appendChild( ToolTip(longText=bone["params"]["tooltip"]) )';
	$m.__track_lines__[111] = 'widgets.edit.py, line 111:\n    descrLbl = tmp';
	$m.__track_lines__[113] = 'widgets.edit.py, line 113:\n    containerDiv = html5.Div()';
	$m.__track_lines__[114] = 'widgets.edit.py, line 114:\n    containerDiv.appendChild( descrLbl )';
	$m.__track_lines__[115] = 'widgets.edit.py, line 115:\n    containerDiv.appendChild( widget )';
	$m.__track_lines__[117] = 'widgets.edit.py, line 117:\n    if cat is not None:';
	$m.__track_lines__[118] = 'widgets.edit.py, line 118:\n    fieldSets[cat]._section.appendChild(containerDiv)';
	$m.__track_lines__[120] = 'widgets.edit.py, line 120:\n    self.form.appendChild(containerDiv)';
	$m.__track_lines__[122] = 'widgets.edit.py, line 122:\n    containerDiv["class"].append("bone")';
	$m.__track_lines__[123] = 'widgets.edit.py, line 123:\n    containerDiv["class"].append("bone_"+key)';
	$m.__track_lines__[124] = 'widgets.edit.py, line 124:\n    containerDiv["class"].append( bone["type"].replace(".","_") )';
	$m.__track_lines__[126] = 'widgets.edit.py, line 126:\n    if "." in bone["type"]:';
	$m.__track_lines__[127] = 'widgets.edit.py, line 127:\n    for t in bone["type"].split("."):';
	$m.__track_lines__[128] = 'widgets.edit.py, line 128:\n    containerDiv["class"].append(t)';
	$m.__track_lines__[130] = 'widgets.edit.py, line 130:\n    currRow += 1';
	$m.__track_lines__[131] = 'widgets.edit.py, line 131:\n    self.bones[key] = widget';
	$m.__track_lines__[133] = 'widgets.edit.py, line 133:\n    if len(fieldSets)==1:';
	$m.__track_lines__[134] = 'widgets.edit.py, line 134:\n    for (k,v) in fieldSets.items():';
	$m.__track_lines__[135] = 'widgets.edit.py, line 135:\n    if not "active" in v["class"]:';
	$m.__track_lines__[136] = 'widgets.edit.py, line 136:\n    v["class"].append("active")';
	$m.__track_lines__[138] = 'widgets.edit.py, line 138:\n    tmpList = [(k,v) for (k,v) in fieldSets.items()]';
	$m.__track_lines__[139] = 'widgets.edit.py, line 139:\n    tmpList.sort( key=lambda x:x[0])';
	$m.__track_lines__[141] = 'widgets.edit.py, line 141:\n    for k,v in tmpList:';
	$m.__track_lines__[142] = 'widgets.edit.py, line 142:\n    self.form.appendChild( v )';
	$m.__track_lines__[143] = 'widgets.edit.py, line 143:\n    v._section = None';
	$m.__track_lines__[145] = 'widgets.edit.py, line 145:\n    def doSave( self, closeOnSuccess=False, *args, **kwargs ):';
	$m.__track_lines__[149] = 'widgets.edit.py, line 149:\n    self.closeOnSuccess = closeOnSuccess';
	$m.__track_lines__[151] = 'widgets.edit.py, line 151:\n    res = {}';
	$m.__track_lines__[153] = 'widgets.edit.py, line 153:\n    for key, bone in self.bones.items():';
	$m.__track_lines__[154] = 'widgets.edit.py, line 154:\n    try:';
	$m.__track_lines__[155] = 'widgets.edit.py, line 155:\n    res.update( bone.serializeForPost( ) )';
	$m.__track_lines__[158] = 'widgets.edit.py, line 158:\n    lbl = bone.parent()._children[0]';
	$m.__track_lines__[159] = 'widgets.edit.py, line 159:\n    if "is_valid" in lbl["class"]:';
	$m.__track_lines__[160] = 'widgets.edit.py, line 160:\n    lbl["class"].remove("is_valid")';
	$m.__track_lines__[161] = 'widgets.edit.py, line 161:\n    lbl["class"].append("is_invalid")';
	$m.__track_lines__[162] = 'widgets.edit.py, line 162:\n    self.actionbar.resetLoadingState()';
	$m.__track_lines__[163] = 'widgets.edit.py, line 163:\n    return None';
	$m.__track_lines__[165] = 'widgets.edit.py, line 165:\n    return res';
	$m.__track_lines__[167] = 'widgets.edit.py, line 167:\n    def unserialize(self, data):';
	$m.__track_lines__[171] = 'widgets.edit.py, line 171:\n    for bone in self.bones.values():';
	$m.__track_lines__[172] = 'widgets.edit.py, line 172:\n    bone.unserialize( data )';
	$m.__track_lines__[174] = 'widgets.edit.py, line 174:\n    def parseHashParameters( src, prefix="" ):';
	$m.__track_lines__[186] = 'widgets.edit.py, line 186:\n    res = {}';
	$m.__track_lines__[187] = 'widgets.edit.py, line 187:\n    processedPrefixes = [] #Dont process a prefix twice';
	$m.__track_lines__[189] = 'widgets.edit.py, line 189:\n    for k,v in src.items():';
	$m.__track_lines__[190] = 'widgets.edit.py, line 190:\n    if prefix and not k.startswith( prefix ):';
	$m.__track_lines__[191] = 'widgets.edit.py, line 191:\n    continue';
	$m.__track_lines__[193] = 'widgets.edit.py, line 193:\n    if prefix:';
	$m.__track_lines__[194] = 'widgets.edit.py, line 194:\n    k = k.replace(prefix,"")';
	$m.__track_lines__[196] = 'widgets.edit.py, line 196:\n    if not "." in k:';
	$m.__track_lines__[197] = 'widgets.edit.py, line 197:\n    if k in res.keys():';
	$m.__track_lines__[198] = 'widgets.edit.py, line 198:\n    if not isinstance( res[k], list ):';
	$m.__track_lines__[199] = 'widgets.edit.py, line 199:\n    res[k] = [ res[k] ]';
	$m.__track_lines__[200] = 'widgets.edit.py, line 200:\n    res[k].append( v )';
	$m.__track_lines__[202] = 'widgets.edit.py, line 202:\n    res[ k ] = v';
	$m.__track_lines__[205] = 'widgets.edit.py, line 205:\n    newPrefix = k[ :k.find(".")  ]';
	$m.__track_lines__[207] = 'widgets.edit.py, line 207:\n    if newPrefix in processedPrefixes: #We did this already';
	$m.__track_lines__[208] = 'widgets.edit.py, line 208:\n    continue';
	$m.__track_lines__[210] = 'widgets.edit.py, line 210:\n    processedPrefixes.append( newPrefix )';
	$m.__track_lines__[212] = 'widgets.edit.py, line 212:\n    if newPrefix in res.keys():';
	$m.__track_lines__[213] = 'widgets.edit.py, line 213:\n    if not isinstance( res[ newPrefix ], list ):';
	$m.__track_lines__[214] = 'widgets.edit.py, line 214:\n    res[ newPrefix ] = [ res[ newPrefix ] ]';
	$m.__track_lines__[215] = 'widgets.edit.py, line 215:\n    res[ newPrefix ].append( parseHashParameters( src, prefix="%s%s." %(prefix,newPrefix)) )';
	$m.__track_lines__[218] = 'widgets.edit.py, line 218:\n    res[ newPrefix ] = parseHashParameters( src, prefix="%s%s." %(prefix,newPrefix))';
	$m.__track_lines__[220] = 'widgets.edit.py, line 220:\n    if all( [x.isdigit() for x in res.keys()]):';
	$m.__track_lines__[221] = 'widgets.edit.py, line 221:\n    newRes = []';
	$m.__track_lines__[222] = 'widgets.edit.py, line 222:\n    keys = [int(x) for x in res.keys()]';
	$m.__track_lines__[223] = 'widgets.edit.py, line 223:\n    keys.sort()';
	$m.__track_lines__[225] = 'widgets.edit.py, line 225:\n    for k in keys:';
	$m.__track_lines__[226] = 'widgets.edit.py, line 226:\n    newRes.append( res[str(k)] )';
	$m.__track_lines__[228] = 'widgets.edit.py, line 228:\n    return newRes';
	$m.__track_lines__[230] = 'widgets.edit.py, line 230:\n    return res';
	$m.__track_lines__[233] = 'widgets.edit.py, line 233:\n    class EditWidget(html5.Div):';
	$m.__track_lines__[234] = 'widgets.edit.py, line 234:\n    appList = "list"';
	$m.__track_lines__[235] = 'widgets.edit.py, line 235:\n    appHierarchy = "hierarchy"';
	$m.__track_lines__[236] = 'widgets.edit.py, line 236:\n    appTree = "tree"';
	$m.__track_lines__[237] = 'widgets.edit.py, line 237:\n    appSingleton = "singleton"';
	$m.__track_lines__[238] = 'widgets.edit.py, line 238:\n    __editIdx_ = 0 #Internal counter to ensure unique ids';
	$m.__track_lines__[240] = 'widgets.edit.py, line 240:\n    def __init__(self, module, applicationType, key=0, node=None, skelType=None, clone=False,';
	$m.__track_lines__[260] = 'widgets.edit.py, line 260:\n    if not module in conf["modules"].keys():';
	$m.__track_lines__[261] = 'widgets.edit.py, line 261:\n    conf["mainWindow"].log("error", translate("The modulee \'{modulee}\' does not exist.", modulee=module))';
	$m.__track_lines__[262] = 'widgets.edit.py, line 262:\n    assert module in conf["modules"].keys()';
	$m.__track_lines__[264] = 'widgets.edit.py, line 264:\n    super( EditWidget, self ).__init__( *args, **kwargs )';
	$m.__track_lines__[265] = 'widgets.edit.py, line 265:\n    self.module = module';
	$m.__track_lines__[268] = 'widgets.edit.py, line 268:\n    assert applicationType in [ EditWidget.appList, EditWidget.appHierarchy, EditWidget.appTree, EditWidget.appSingleton ] #Invalid Application-Type?';
	$m.__track_lines__[270] = 'widgets.edit.py, line 270:\n    if applicationType==EditWidget.appHierarchy or applicationType==EditWidget.appTree:';
	$m.__track_lines__[271] = 'widgets.edit.py, line 271:\n    assert key is not None or node is not None #Need either an id or an node';
	$m.__track_lines__[273] = 'widgets.edit.py, line 273:\n    if clone:';
	$m.__track_lines__[274] = 'widgets.edit.py, line 274:\n    assert key is not None #Need an id if we should clone an entry';
	$m.__track_lines__[275] = 'widgets.edit.py, line 275:\n    assert not applicationType==EditWidget.appSingleton # We cant clone a singleton';
	$m.__track_lines__[276] = 'widgets.edit.py, line 276:\n    if applicationType==EditWidget.appHierarchy or applicationType==EditWidget.appTree:';
	$m.__track_lines__[277] = 'widgets.edit.py, line 277:\n    assert node is not None #We still need a rootNode for cloning';
	$m.__track_lines__[278] = 'widgets.edit.py, line 278:\n    if applicationType==EditWidget.appTree:';
	$m.__track_lines__[279] = 'widgets.edit.py, line 279:\n    assert node is not None #We still need a path for cloning #FIXME';
	$m.__track_lines__[281] = 'widgets.edit.py, line 281:\n    self.clone_of = key';
	$m.__track_lines__[283] = 'widgets.edit.py, line 283:\n    self.clone_of = None';
	$m.__track_lines__[286] = 'widgets.edit.py, line 286:\n    self.editIdx = EditWidget.__editIdx_ #Internal counter to ensure unique ids';
	$m.__track_lines__[287] = 'widgets.edit.py, line 287:\n    EditWidget.__editIdx_ += 1';
	$m.__track_lines__[288] = 'widgets.edit.py, line 288:\n    self.applicationType = applicationType';
	$m.__track_lines__[289] = 'widgets.edit.py, line 289:\n    self.key = key';
	$m.__track_lines__[290] = 'widgets.edit.py, line 290:\n    self.mode = "edit" if self.key or applicationType == EditWidget.appSingleton else "add"';
	$m.__track_lines__[291] = 'widgets.edit.py, line 291:\n    self.node = node';
	$m.__track_lines__[292] = 'widgets.edit.py, line 292:\n    self.skelType = skelType';
	$m.__track_lines__[293] = 'widgets.edit.py, line 293:\n    self.clone = clone';
	$m.__track_lines__[294] = 'widgets.edit.py, line 294:\n    self.bones = {}';
	$m.__track_lines__[295] = 'widgets.edit.py, line 295:\n    self.closeOnSuccess = False';
	$m.__track_lines__[296] = 'widgets.edit.py, line 296:\n    self.logaction = logaction';
	$m.__track_lines__[298] = 'widgets.edit.py, line 298:\n    self._lastData = {} #Dict of structure and values received';
	$m.__track_lines__[300] = 'widgets.edit.py, line 300:\n    if hashArgs:';
	$m.__track_lines__[301] = 'widgets.edit.py, line 301:\n    self._hashArgs = parseHashParameters( hashArgs )';
	$m.__track_lines__[302] = "widgets.edit.py, line 302:\n    '''";
	$m.__track_lines__[311] = 'widgets.edit.py, line 311:\n    self._hashArgs = None';
	$m.__track_lines__[313] = 'widgets.edit.py, line 313:\n    self.editTaskID = None';
	$m.__track_lines__[314] = 'widgets.edit.py, line 314:\n    self.wasInitialRequest = True #Wherever the last request attempted to save data or just fetched the form';
	$m.__track_lines__[315] = 'widgets.edit.py, line 315:\n    self.actionbar = ActionBar(self.module, self.applicationType, self.mode)';
	$m.__track_lines__[316] = 'widgets.edit.py, line 316:\n    self.appendChild( self.actionbar )';
	$m.__track_lines__[317] = 'widgets.edit.py, line 317:\n    self.form = html5.Form()';
	$m.__track_lines__[318] = 'widgets.edit.py, line 318:\n    self.appendChild(self.form)';
	$m.__track_lines__[320] = 'widgets.edit.py, line 320:\n    if applicationType == EditWidget.appSingleton:';
	$m.__track_lines__[321] = 'widgets.edit.py, line 321:\n    self.actionbar.setActions(["save.singleton", "reset"])';
	$m.__track_lines__[323] = 'widgets.edit.py, line 323:\n    self.actionbar.setActions(["save.close", "save.continue", "reset"])';
	$m.__track_lines__[325] = 'widgets.edit.py, line 325:\n    self.reloadData()';
	$m.__track_lines__[327] = 'widgets.edit.py, line 327:\n    def onDetach(self):';
	$m.__track_lines__[328] = 'widgets.edit.py, line 328:\n    utils.setPreventUnloading(False)';
	$m.__track_lines__[330] = 'widgets.edit.py, line 330:\n    def onAttach(self):';
	$m.__track_lines__[331] = 'widgets.edit.py, line 331:\n    utils.setPreventUnloading(True)';
	$m.__track_lines__[333] = 'widgets.edit.py, line 333:\n    def showErrorMsg(self, req=None, code=None):';
	$m.__track_lines__[337] = 'widgets.edit.py, line 337:\n    try:';
	$m.__track_lines__[338] = 'widgets.edit.py, line 338:\n    print(req.result)';
	$m.__track_lines__[339] = 'widgets.edit.py, line 339:\n    print(NetworkService.decode(req))';
	$m.__track_lines__[341] = 'widgets.edit.py, line 341:\n    pass';
	$m.__track_lines__[343] = 'widgets.edit.py, line 343:\n    if code and (code==401 or code==403):';
	$m.__track_lines__[344] = 'widgets.edit.py, line 344:\n    txt = translate("Access denied!")';
	$m.__track_lines__[346] = 'widgets.edit.py, line 346:\n    txt = translate("An error occurred: {code}", code=code or 0)';
	$m.__track_lines__[348] = 'widgets.edit.py, line 348:\n    conf["mainWindow"].log("error", txt)';
	$m.__track_lines__[350] = 'widgets.edit.py, line 350:\n    if self.wasInitialRequest:';
	$m.__track_lines__[351] = 'widgets.edit.py, line 351:\n    conf["mainWindow"].removeWidget(self)';
	$m.__track_lines__[353] = 'widgets.edit.py, line 353:\n    def reloadData(self):';
	$m.__track_lines__[354] = 'widgets.edit.py, line 354:\n    self.save( {} )';
	$m.__track_lines__[355] = 'widgets.edit.py, line 355:\n    return';
	$m.__track_lines__[357] = 'widgets.edit.py, line 357:\n    def save(self, data ):';
	$m.__track_lines__[365] = 'widgets.edit.py, line 365:\n    self.wasInitialRequest = not len(data)>0';
	$m.__track_lines__[367] = 'widgets.edit.py, line 367:\n    if self.module=="_tasks":';
	$m.__track_lines__[368] = 'widgets.edit.py, line 368:\n    NetworkService.request(None, "/admin/%s/execute/%s" % (self.module, self.key), data,';
	$m.__track_lines__[374] = 'widgets.edit.py, line 374:\n    if self.key and (not self.clone or not data):';
	$m.__track_lines__[375] = 'widgets.edit.py, line 375:\n    NetworkService.request(self.module, "edit/%s" % self.key, data,';
	$m.__track_lines__[380] = 'widgets.edit.py, line 380:\n    NetworkService.request(self.module, "add", data,';
	$m.__track_lines__[386] = 'widgets.edit.py, line 386:\n    if self.key and (not self.clone or not data):';
	$m.__track_lines__[387] = 'widgets.edit.py, line 387:\n    NetworkService.request(self.module, "edit/%s" % self.key, data,';
	$m.__track_lines__[392] = 'widgets.edit.py, line 392:\n    NetworkService.request(self.module, "add/%s" % self.node, data,';
	$m.__track_lines__[398] = 'widgets.edit.py, line 398:\n    if self.key and not self.clone:';
	$m.__track_lines__[399] = 'widgets.edit.py, line 399:\n    NetworkService.request(self.module, "edit/%s/%s" % (self.skelType, self.key), data,';
	$m.__track_lines__[404] = 'widgets.edit.py, line 404:\n    NetworkService.request(self.module, "add/%s/%s" % (self.skelType, self.node), data,';
	$m.__track_lines__[410] = 'widgets.edit.py, line 410:\n    NetworkService.request(self.module, "edit", data,';
	$m.__track_lines__[415] = 'widgets.edit.py, line 415:\n    raise NotImplementedError() #Should never reach this';
	$m.__track_lines__[417] = 'widgets.edit.py, line 417:\n    def clear(self):';
	$m.__track_lines__[421] = 'widgets.edit.py, line 421:\n    for c in self.form._children[ : ]:';
	$m.__track_lines__[422] = 'widgets.edit.py, line 422:\n    self.form.removeChild( c )';
	$m.__track_lines__[424] = 'widgets.edit.py, line 424:\n    def closeOrContinue(self, sender=None ):';
	$m.__track_lines__[425] = 'widgets.edit.py, line 425:\n    NetworkService.notifyChange(self.module, key=self.key)';
	$m.__track_lines__[427] = 'widgets.edit.py, line 427:\n    if self.closeOnSuccess:';
	$m.__track_lines__[428] = 'widgets.edit.py, line 428:\n    if self.module == "_tasks":';
	$m.__track_lines__[429] = 'widgets.edit.py, line 429:\n    self.parent().close()';
	$m.__track_lines__[430] = 'widgets.edit.py, line 430:\n    return';
	$m.__track_lines__[432] = 'widgets.edit.py, line 432:\n    conf["mainWindow"].removeWidget(self)';
	$m.__track_lines__[433] = 'widgets.edit.py, line 433:\n    return';
	$m.__track_lines__[435] = 'widgets.edit.py, line 435:\n    self.clear()';
	$m.__track_lines__[436] = 'widgets.edit.py, line 436:\n    self.bones = {}';
	$m.__track_lines__[438] = 'widgets.edit.py, line 438:\n    if self.mode == "add":';
	$m.__track_lines__[439] = 'widgets.edit.py, line 439:\n    self.key = 0';
	$m.__track_lines__[441] = 'widgets.edit.py, line 441:\n    self.reloadData()';
	$m.__track_lines__[443] = 'widgets.edit.py, line 443:\n    def doCloneHierarchy(self, sender=None ):';
	$m.__track_lines__[444] = 'widgets.edit.py, line 444:\n    if self.applicationType == EditWidget.appHierarchy:';
	$m.__track_lines__[445] = 'widgets.edit.py, line 445:\n    NetworkService.request( self.module, "clone",';
	$m.__track_lines__[450] = 'widgets.edit.py, line 450:\n    NetworkService.request( conf[ "modules" ][ self.module ][ "rootNodeOf" ], "clone",';
	$m.__track_lines__[454] = 'widgets.edit.py, line 454:\n    def cloneComplete(self, request):';
	$m.__track_lines__[455] = 'widgets.edit.py, line 455:\n    logDiv = html5.Div()';
	$m.__track_lines__[456] = 'widgets.edit.py, line 456:\n    logDiv["class"].append("msg")';
	$m.__track_lines__[457] = 'widgets.edit.py, line 457:\n    spanMsg = html5.Span()';
	$m.__track_lines__[458] = 'widgets.edit.py, line 458:\n    spanMsg.appendChild( html5.TextNode( translate( u"The hierarchy will be cloned in the background." ) ) )';
	$m.__track_lines__[459] = 'widgets.edit.py, line 459:\n    spanMsg["class"].append("msgspan")';
	$m.__track_lines__[460] = 'widgets.edit.py, line 460:\n    logDiv.appendChild(spanMsg)';
	$m.__track_lines__[462] = 'widgets.edit.py, line 462:\n    conf["mainWindow"].log("success",logDiv)';
	$m.__track_lines__[463] = 'widgets.edit.py, line 463:\n    self.closeOrContinue()';
	$m.__track_lines__[465] = 'widgets.edit.py, line 465:\n    def setData(self, request=None, data=None, ignoreMissing=False, askHierarchyCloning=True):';
	$m.__track_lines__[474] = 'widgets.edit.py, line 474:\n    assert (request or data)';
	$m.__track_lines__[476] = 'widgets.edit.py, line 476:\n    if request:';
	$m.__track_lines__[477] = 'widgets.edit.py, line 477:\n    data = NetworkService.decode( request )';
	$m.__track_lines__[479] = 'widgets.edit.py, line 479:\n    if "action" in data and (data["action"] == "addSuccess" or data["action"] == "editSuccess"):';
	$m.__track_lines__[480] = 'widgets.edit.py, line 480:\n    logDiv = html5.Div()';
	$m.__track_lines__[481] = 'widgets.edit.py, line 481:\n    logDiv["class"].append("msg")';
	$m.__track_lines__[482] = 'widgets.edit.py, line 482:\n    spanMsg = html5.Span()';
	$m.__track_lines__[484] = 'widgets.edit.py, line 484:\n    spanMsg.appendChild( html5.TextNode( translate( self.logaction ) ) )';
	$m.__track_lines__[485] = 'widgets.edit.py, line 485:\n    spanMsg["class"].append("msgspan")';
	$m.__track_lines__[486] = 'widgets.edit.py, line 486:\n    logDiv.appendChild(spanMsg)';
	$m.__track_lines__[488] = 'widgets.edit.py, line 488:\n    if self.module in conf["modules"].keys():';
	$m.__track_lines__[489] = 'widgets.edit.py, line 489:\n    spanMsg = html5.Span()';
	$m.__track_lines__[490] = 'widgets.edit.py, line 490:\n    if self.module.startswith( "_" ):';
	$m.__track_lines__[491] = 'widgets.edit.py, line 491:\n    spanMsg.appendChild( html5.TextNode( self.key ) )';
	$m.__track_lines__[493] = 'widgets.edit.py, line 493:\n    spanMsg.appendChild( html5.TextNode( conf["modules"][self.module]["name"] ))';
	$m.__track_lines__[494] = 'widgets.edit.py, line 494:\n    spanMsg["class"].append("modulespan")';
	$m.__track_lines__[495] = 'widgets.edit.py, line 495:\n    logDiv.appendChild(spanMsg)';
	$m.__track_lines__[497] = 'widgets.edit.py, line 497:\n    if "values" in data.keys() and "name" in data["values"].keys():';
	$m.__track_lines__[498] = 'widgets.edit.py, line 498:\n    spanMsg = html5.Span()';
	$m.__track_lines__[500] = 'widgets.edit.py, line 500:\n    name = data["values"]["name"]';
	$m.__track_lines__[501] = 'widgets.edit.py, line 501:\n    if isinstance(name, dict):';
	$m.__track_lines__[502] = 'widgets.edit.py, line 502:\n    if conf["currentlanguage"] in name.keys():';
	$m.__track_lines__[503] = 'widgets.edit.py, line 503:\n    name = name[conf["currentlanguage"]]';
	$m.__track_lines__[505] = 'widgets.edit.py, line 505:\n    name = name.values()';
	$m.__track_lines__[507] = 'widgets.edit.py, line 507:\n    if isinstance(name, list):';
	$m.__track_lines__[508] = 'widgets.edit.py, line 508:\n    name = ", ".join(name)';
	$m.__track_lines__[510] = 'widgets.edit.py, line 510:\n    spanMsg.appendChild(html5.TextNode(str(html5.utils.unescape(name))))';
	$m.__track_lines__[511] = 'widgets.edit.py, line 511:\n    spanMsg["class"].append("namespan")';
	$m.__track_lines__[512] = 'widgets.edit.py, line 512:\n    logDiv.appendChild(spanMsg)';
	$m.__track_lines__[514] = 'widgets.edit.py, line 514:\n    try:';
	$m.__track_lines__[515] = 'widgets.edit.py, line 515:\n    self.key = data["values"]["key"]';
	$m.__track_lines__[517] = 'widgets.edit.py, line 517:\n    self.key = None';
	$m.__track_lines__[519] = 'widgets.edit.py, line 519:\n    conf["mainWindow"].log("success",logDiv)';
	$m.__track_lines__[521] = 'widgets.edit.py, line 521:\n    if askHierarchyCloning and self.clone:';
	$m.__track_lines__[523] = 'widgets.edit.py, line 523:\n    if self.applicationType == EditWidget.appList and "rootNodeOf" in conf[ "modules" ][ self.module ]:';
	$m.__track_lines__[524] = 'widgets.edit.py, line 524:\n    YesNoDialog( translate( u"Do you want to clone the entire hierarchy?" ),';
	$m.__track_lines__[526] = 'widgets.edit.py, line 526:\n    return';
	$m.__track_lines__[529] = 'widgets.edit.py, line 529:\n    YesNoDialog( translate( u"Do you want to clone all subentries of this item?" ),';
	$m.__track_lines__[531] = 'widgets.edit.py, line 531:\n    return';
	$m.__track_lines__[533] = 'widgets.edit.py, line 533:\n    self.closeOrContinue()';
	$m.__track_lines__[534] = 'widgets.edit.py, line 534:\n    return';
	$m.__track_lines__[537] = 'widgets.edit.py, line 537:\n    self.clear()';
	$m.__track_lines__[538] = 'widgets.edit.py, line 538:\n    self.bones = {}';
	$m.__track_lines__[539] = 'widgets.edit.py, line 539:\n    self.containers = {}';
	$m.__track_lines__[540] = 'widgets.edit.py, line 540:\n    self.actionbar.resetLoadingState()';
	$m.__track_lines__[541] = 'widgets.edit.py, line 541:\n    self.dataCache = data';
	$m.__track_lines__[543] = 'widgets.edit.py, line 543:\n    tmpDict = {k: v for k, v in data["structure"]}';
	$m.__track_lines__[544] = 'widgets.edit.py, line 544:\n    fieldSets = {}';
	$m.__track_lines__[545] = 'widgets.edit.py, line 545:\n    currRow = 0';
	$m.__track_lines__[546] = 'widgets.edit.py, line 546:\n    hasMissing = False';
	$m.__track_lines__[547] = 'widgets.edit.py, line 547:\n    defaultCat = conf["modules"][self.module].get("visibleName", self.module)';
	$m.__track_lines__[549] = 'widgets.edit.py, line 549:\n    for key, bone in data["structure"]:';
	$m.__track_lines__[550] = 'widgets.edit.py, line 550:\n    if not bone["visible"]:';
	$m.__track_lines__[551] = 'widgets.edit.py, line 551:\n    continue';
	$m.__track_lines__[553] = 'widgets.edit.py, line 553:\n    cat = defaultCat';
	$m.__track_lines__[555] = 'widgets.edit.py, line 555:\n    if ("params" in bone.keys()';
	$m.__track_lines__[558] = 'widgets.edit.py, line 558:\n    cat = bone["params"]["category"]';
	$m.__track_lines__[560] = 'widgets.edit.py, line 560:\n    if not cat in fieldSets.keys():';
	$m.__track_lines__[561] = 'widgets.edit.py, line 561:\n    fs = html5.Fieldset()';
	$m.__track_lines__[562] = 'widgets.edit.py, line 562:\n    fs.addClass("active" if not fieldSets else "inactive")';
	$m.__track_lines__[566] = 'widgets.edit.py, line 566:\n    fs["name"] = cat';
	$m.__track_lines__[567] = 'widgets.edit.py, line 567:\n    legend = html5.Legend()';
	$m.__track_lines__[568] = 'widgets.edit.py, line 568:\n    fshref = fieldset_A()';
	$m.__track_lines__[569] = 'widgets.edit.py, line 569:\n    fshref.appendChild(html5.TextNode(cat) )';
	$m.__track_lines__[570] = 'widgets.edit.py, line 570:\n    legend.appendChild( fshref )';
	$m.__track_lines__[571] = 'widgets.edit.py, line 571:\n    fs.appendChild(legend)';
	$m.__track_lines__[572] = 'widgets.edit.py, line 572:\n    section = html5.Section()';
	$m.__track_lines__[573] = 'widgets.edit.py, line 573:\n    fs.appendChild(section)';
	$m.__track_lines__[574] = 'widgets.edit.py, line 574:\n    fs._section = section';
	$m.__track_lines__[575] = 'widgets.edit.py, line 575:\n    fieldSets[cat] = fs';
	$m.__track_lines__[577] = 'widgets.edit.py, line 577:\n    wdgGen = editBoneSelector.select(self.module, key, tmpDict)';
	$m.__track_lines__[578] = 'widgets.edit.py, line 578:\n    widget = wdgGen.fromSkelStructure(self.module, key, tmpDict)';
	$m.__track_lines__[579] = 'widgets.edit.py, line 579:\n    widget["id"] = "vi_%s_%s_%s_%s_bn_%s" % (self.editIdx, self.module, self.mode, cat, key)';
	$m.__track_lines__[585] = 'widgets.edit.py, line 585:\n    descrLbl = html5.Label(key if conf["showBoneNames"] else bone.get("descr", key))';
	$m.__track_lines__[586] = 'widgets.edit.py, line 586:\n    descrLbl["class"].append(key)';
	$m.__track_lines__[587] = 'widgets.edit.py, line 587:\n    descrLbl["class"].append(bone["type"].replace(".","_"))';
	$m.__track_lines__[588] = 'widgets.edit.py, line 588:\n    descrLbl["for"] = "vi_%s_%s_%s_%s_bn_%s" % (self.editIdx, self.module, self.mode, cat, key)';
	$m.__track_lines__[589] = 'widgets.edit.py, line 589:\n    print(key, bone["required"], bone["error"])';
	$m.__track_lines__[590] = 'widgets.edit.py, line 590:\n    if bone["required"]:';
	$m.__track_lines__[591] = 'widgets.edit.py, line 591:\n    descrLbl["class"].append("is_required")';
	$m.__track_lines__[593] = 'widgets.edit.py, line 593:\n    if bone["error"] is not None:';
	$m.__track_lines__[594] = 'widgets.edit.py, line 594:\n    descrLbl["class"].append("is_invalid")';
	$m.__track_lines__[595] = 'widgets.edit.py, line 595:\n    descrLbl["title"] = bone["error"]';
	$m.__track_lines__[596] = 'widgets.edit.py, line 596:\n    fieldSets[ cat ]["class"].append("is_incomplete")';
	$m.__track_lines__[597] = 'widgets.edit.py, line 597:\n    hasMissing = True';
	$m.__track_lines__[599] = 'widgets.edit.py, line 599:\n    descrLbl["class"].append("is_valid")';
	$m.__track_lines__[601] = 'widgets.edit.py, line 601:\n    if isinstance(bone["error"], dict):';
	$m.__track_lines__[602] = 'widgets.edit.py, line 602:\n    widget.setExtendedErrorInformation(bone["error"])';
	$m.__track_lines__[604] = 'widgets.edit.py, line 604:\n    containerDiv = html5.Div()';
	$m.__track_lines__[605] = 'widgets.edit.py, line 605:\n    containerDiv.appendChild(descrLbl)';
	$m.__track_lines__[606] = 'widgets.edit.py, line 606:\n    containerDiv.appendChild(widget)';
	$m.__track_lines__[608] = 'widgets.edit.py, line 608:\n    if ("params" in bone.keys()';
	$m.__track_lines__[611] = 'widgets.edit.py, line 611:\n    containerDiv.appendChild(ToolTip(longText=bone["params"]["tooltip"]))';
	$m.__track_lines__[613] = 'widgets.edit.py, line 613:\n    fieldSets[cat]._section.appendChild(containerDiv)';
	$m.__track_lines__[614] = 'widgets.edit.py, line 614:\n    containerDiv.addClass("bone", "bone_%s" % key, bone["type"].replace(".","_"))';
	$m.__track_lines__[616] = 'widgets.edit.py, line 616:\n    if "." in bone["type"]:';
	$m.__track_lines__[617] = 'widgets.edit.py, line 617:\n    for t in bone["type"].split("."):';
	$m.__track_lines__[618] = 'widgets.edit.py, line 618:\n    containerDiv["class"].append(t)';
	$m.__track_lines__[620] = 'widgets.edit.py, line 620:\n    currRow += 1';
	$m.__track_lines__[621] = 'widgets.edit.py, line 621:\n    self.bones[ key ] = widget';
	$m.__track_lines__[622] = 'widgets.edit.py, line 622:\n    self.containers[ key ] = containerDiv';
	$m.__track_lines__[624] = 'widgets.edit.py, line 624:\n    tmpList = [(k,v) for (k,v) in fieldSets.items()]';
	$m.__track_lines__[625] = 'widgets.edit.py, line 625:\n    tmpList.sort(key=lambda x:x[0])';
	$m.__track_lines__[627] = 'widgets.edit.py, line 627:\n    for k, v in tmpList:';
	$m.__track_lines__[628] = 'widgets.edit.py, line 628:\n    self.form.appendChild( v )';
	$m.__track_lines__[629] = 'widgets.edit.py, line 629:\n    v._section = None';
	$m.__track_lines__[631] = 'widgets.edit.py, line 631:\n    self.unserialize(data["values"])';
	$m.__track_lines__[633] = 'widgets.edit.py, line 633:\n    if self._hashArgs: #Apply the default values (if any)';
	$m.__track_lines__[634] = 'widgets.edit.py, line 634:\n    self.unserialize(self._hashArgs)';
	$m.__track_lines__[635] = 'widgets.edit.py, line 635:\n    self._hashArgs = None';
	$m.__track_lines__[637] = 'widgets.edit.py, line 637:\n    self._lastData = data';
	$m.__track_lines__[639] = 'widgets.edit.py, line 639:\n    if hasMissing and not self.wasInitialRequest:';
	$m.__track_lines__[640] = 'widgets.edit.py, line 640:\n    conf["mainWindow"].log("warning",translate("Could not save entry!"))';
	$m.__track_lines__[642] = 'widgets.edit.py, line 642:\n    def unserialize(self, data):';
	$m.__track_lines__[646] = 'widgets.edit.py, line 646:\n    for bone in self.bones.values():';
	$m.__track_lines__[647] = 'widgets.edit.py, line 647:\n    bone.unserialize(data)';
	$m.__track_lines__[649] = 'widgets.edit.py, line 649:\n    def doSave( self, closeOnSuccess=False, *args, **kwargs ):';
	$m.__track_lines__[653] = 'widgets.edit.py, line 653:\n    self.closeOnSuccess = closeOnSuccess';
	$m.__track_lines__[654] = 'widgets.edit.py, line 654:\n    res = {}';
	$m.__track_lines__[655] = 'widgets.edit.py, line 655:\n    for key, bone in self.bones.items():';
	$m.__track_lines__[656] = 'widgets.edit.py, line 656:\n    try:';
	$m.__track_lines__[657] = 'widgets.edit.py, line 657:\n    res.update( bone.serializeForPost( ) )';
	$m.__track_lines__[660] = 'widgets.edit.py, line 660:\n    lbl = bone.parent()._children[0]';
	$m.__track_lines__[661] = 'widgets.edit.py, line 661:\n    if "is_valid" in lbl["class"]:';
	$m.__track_lines__[662] = 'widgets.edit.py, line 662:\n    lbl["class"].remove("is_valid")';
	$m.__track_lines__[663] = 'widgets.edit.py, line 663:\n    lbl["class"].append("is_invalid")';
	$m.__track_lines__[664] = 'widgets.edit.py, line 664:\n    self.actionbar.resetLoadingState()';
	$m.__track_lines__[665] = 'widgets.edit.py, line 665:\n    return';
	$m.__track_lines__[666] = 'widgets.edit.py, line 666:\n    self.save( res )';
	$m.__track_lines__[668] = 'widgets.edit.py, line 668:\n    class fieldset_A(A):';
	$m.__track_lines__[669] = 'widgets.edit.py, line 669:\n    _baseClass = "a"';
	$m.__track_lines__[671] = 'widgets.edit.py, line 671:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[672] = 'widgets.edit.py, line 672:\n    super(fieldset_A,self).__init__(*args, **kwargs )';
	$m.__track_lines__[673] = 'widgets.edit.py, line 673:\n    self.sinkEvent("onClick")';
	$m.__track_lines__[675] = 'widgets.edit.py, line 675:\n    def onClick(self,event):';
	$m.__track_lines__[676] = 'widgets.edit.py, line 676:\n    for element in self.parent().parent().parent()._children:';
	$m.__track_lines__[677] = 'widgets.edit.py, line 677:\n    if isinstance(element,Fieldset):';
	$m.__track_lines__[678] = 'widgets.edit.py, line 678:\n    if html5.utils.doesEventHitWidgetOrChildren(event, element):';
	$m.__track_lines__[679] = 'widgets.edit.py, line 679:\n    if not "active" in element["class"]:';
	$m.__track_lines__[680] = 'widgets.edit.py, line 680:\n    element["class"].append("active")';
	$m.__track_lines__[681] = 'widgets.edit.py, line 681:\n    element["class"].remove("inactive")';
	$m.__track_lines__[683] = 'widgets.edit.py, line 683:\n    if not "inactive" in element["class"]:';
	$m.__track_lines__[684] = 'widgets.edit.py, line 684:\n    element["class"].append("inactive")';
	$m.__track_lines__[685] = 'widgets.edit.py, line 685:\n    element["class"].remove("active")';
	$m.__track_lines__[687] = 'widgets.edit.py, line 687:\n    if not "inactive" in element["class"] and isinstance(element,fieldset_A):';
	$m.__track_lines__[688] = 'widgets.edit.py, line 688:\n    element["class"].append("inactive")';
	$m.__track_lines__[689] = 'widgets.edit.py, line 689:\n    element["class"].remove("active")';
	$m.__track_lines__[690] = 'widgets.edit.py, line 690:\n    if len(element._children)>0 and isinstance(element,fieldset_A) and hasattr(element._children[1],"_children"): #subelement crawler';
	$m.__track_lines__[691] = 'widgets.edit.py, line 691:\n    for sube in element._children[1]._children:';
	$m.__track_lines__[692] = 'widgets.edit.py, line 692:\n    if isinstance(sube,fieldset_A):';
	$m.__track_lines__[693] = 'widgets.edit.py, line 693:\n    if not "inactive" in sube["class"]:';
	$m.__track_lines__[694] = 'widgets.edit.py, line 694:\n    sube.parent["class"].append("inactive")';
	$m.__track_lines__[695] = 'widgets.edit.py, line 695:\n    sube["class"].remove("active")';


	$pyjs['track']['module']='widgets.edit';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=2;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['html5'] = $p['___import___']('html5', 'widgets');
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['utils'] = $p['___import___']('utils', 'widgets');
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=4;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['A'] = $p['___import___']('html5.a.A', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=5;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Fieldset'] = $p['___import___']('html5.form.Fieldset', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=6;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['YesNoDialog'] = $p['___import___']('html5.ext.YesNoDialog', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=8;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['NetworkService'] = $p['___import___']('network.NetworkService', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=9;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['conf'] = $p['___import___']('config.conf', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=10;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['editBoneSelector'] = $p['___import___']('priorityqueue.editBoneSelector', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=11;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['ToolTip'] = $p['___import___']('widgets.tooltip.ToolTip', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=12;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['ActionBar'] = $p['___import___']('widgets.actionbar.ActionBar', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=13;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['translate'] = $p['___import___']('i18n.translate', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=15;
	$m['InvalidBoneValueException'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.edit';
		$pyjs['track']['lineno']=16;
		$pyjs['track']['lineno']=15;
		var $bases = new Array($p['ValueError']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('InvalidBoneValueException', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=18;
	$m['InternalEdit'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.edit';
		$pyjs['track']['lineno']=20;
		$method = $pyjs__bind_method2('__init__', function(skelStructure, values, errorInformation, readOnly, defaultCat) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				skelStructure = arguments[1];
				values = arguments[2];
				errorInformation = arguments[3];
				readOnly = arguments[4];
				defaultCat = arguments[5];
			}
			if (typeof values == 'undefined') values=arguments['callee']['__args__'][4][1];
			if (typeof errorInformation == 'undefined') errorInformation=arguments['callee']['__args__'][5][1];
			if (typeof readOnly == 'undefined') readOnly=arguments['callee']['__args__'][6][1];
			if (typeof defaultCat == 'undefined') defaultCat=arguments['callee']['__args__'][7][1];

			$pyjs['track']={'module':'widgets.edit', 'lineno':20};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.edit';
			$pyjs['track']['lineno']=20;
			$pyjs['track']['lineno']=21;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['InternalEdit'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()['__init__']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs['track']['lineno']=22;
			self['editIdx'] = 1;
			$pyjs['track']['lineno']=23;
			self['skelStructure'] = skelStructure;
			$pyjs['track']['lineno']=24;
			self['values'] = values;
			$pyjs['track']['lineno']=25;
			self['errorInformation'] = errorInformation;
			$pyjs['track']['lineno']=26;
			self['defaultCat'] = defaultCat;
			$pyjs['track']['lineno']=28;
			self['form'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Form']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			$pyjs['track']['lineno']=29;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'form'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
			$pyjs['track']['lineno']=31;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(self, 'renderStructure', null, null, [{'readOnly':readOnly}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
			$pyjs['track']['lineno']=33;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](values);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})()) {
				$pyjs['track']['lineno']=34;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['unserialize'](values);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['skelStructure'],['values', null],['errorInformation', null],['readOnly', false],['defaultCat', '']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=36;
		$method = $pyjs__bind_method2('renderStructure', function(readOnly) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				readOnly = arguments[1];
			}
			if (typeof readOnly == 'undefined') readOnly=arguments['callee']['__args__'][3][1];
			var $and10,$and8,descrLbl,$iter6_array,$and14,$lambda1,$and9,$iter6_type,$iter3_type,$or9,$or7,firstCat,tmpList,$or6,fshref,$iter4_type,$or1,containerDiv,$iter4_iter,$iter6_iter,defaultCat,tmp,$iter4_idx,$iter3_idx,$or8,$iter6_idx,$iter2_iter,t,$iter3_iter,fieldSets,$iter6_nextval,wdgGen,$iter3_array,$or10,$or5,$or4,widget,fs,$iter2_type,$or3,$or2,tmpDict,$and1,$and2,$and3,$and4,$and5,$and6,$and7,$and12,$and13,$iter2_idx,$and11,$and16,key,$and15,$iter3_nextval,legend,$iter2_nextval,$iter4_nextval,k,v,cat,$add2,$add3,$add1,$pyjs__trackstack_size_2,bone,$add4,$pyjs__trackstack_size_1,$iter4_array,currRow,section,$iter2_array;
			$pyjs['track']={'module':'widgets.edit', 'lineno':36};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.edit';
			$pyjs['track']['lineno']=36;
			$pyjs['track']['lineno']=37;
			self['bones'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
			$pyjs['track']['lineno']=39;
			tmpDict = function(){
				var $iter1_nextval,$iter1_type,k,$pyjs__trackstack_size_1,$collcomp1,$iter1_iter,$iter1_idx,v,$iter1_array;
	$collcomp1 = $p['dict']();
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter1_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'skelStructure');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				var $tupleassign1 = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__ass_unpack']($iter1_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
				k = $tupleassign1[0];
				v = $tupleassign1[1];
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $collcomp1['__setitem__'](k, v);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.edit';

	return $collcomp1;}();
			$pyjs['track']['lineno']=40;
			fieldSets = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
			$pyjs['track']['lineno']=41;
			currRow = 0;
			$pyjs['track']['lineno']=43;
			defaultCat = $p['getattr'](self, 'defaultCat');
			$pyjs['track']['lineno']=44;
			firstCat = true;
			$pyjs['track']['lineno']=46;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter2_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'skelStructure');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				var $tupleassign2 = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__ass_unpack']($iter2_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
				key = $tupleassign2[0];
				bone = $tupleassign2[1];
				$pyjs['track']['lineno']=49;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool'](bone['__getitem__']('visible')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})()) {
					$pyjs['track']['lineno']=50;
					continue;
				}
				$pyjs['track']['lineno']=53;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](readOnly);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})()) {
					$pyjs['track']['lineno']=54;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return tmpDict['__getitem__'](key)['__setitem__']('readonly', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
				}
				$pyjs['track']['lineno']=56;
				cat = defaultCat;
				$pyjs['track']['lineno']=58;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($and1=(function(){try{try{$pyjs['in_try_except'] += 1;
				return bone['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})()['__contains__']('params'))?($p['bool']($and2=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](bone['__getitem__']('params'), $p['dict']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})())?(function(){try{try{$pyjs['in_try_except'] += 1;
				return bone['__getitem__']('params')['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})()['__contains__']('category'):$and2):$and1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})()) {
					$pyjs['track']['lineno']=61;
					cat = bone['__getitem__']('params')['__getitem__']('category');
				}
				$pyjs['track']['lineno']=63;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($and4=(cat !== null))?!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return fieldSets['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})()['__contains__'](cat)):$and4));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})()) {
					$pyjs['track']['lineno']=64;
					fs = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['html5']['Fieldset']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
					$pyjs['track']['lineno']=65;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return fs['__setitem__']('class', cat);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
					$pyjs['track']['lineno']=67;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](firstCat);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})()) {
						$pyjs['track']['lineno']=68;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return fs['__getitem__']('class')['append']('active');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
						$pyjs['track']['lineno']=69;
						firstCat = false;
					}
					$pyjs['track']['lineno']=71;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return fs['__setitem__']('name', ($p['bool']($or1=cat)?$or1:'empty'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})();
					$pyjs['track']['lineno']=72;
					legend = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['html5']['Legend']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})();
					$pyjs['track']['lineno']=73;
					fshref = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (typeof fieldset_A == "undefined"?$m['fieldset_A']:fieldset_A)();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
					$pyjs['track']['lineno']=74;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return fshref['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['html5']['TextNode'](cat);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
					$pyjs['track']['lineno']=75;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return legend['appendChild'](fshref);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
					$pyjs['track']['lineno']=76;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return fs['appendChild'](legend);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})();
					$pyjs['track']['lineno']=77;
					section = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['html5']['Section']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})();
					$pyjs['track']['lineno']=78;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return fs['appendChild'](section);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})();
					$pyjs['track']['lineno']=79;
					fs['_section'] = section;
					$pyjs['track']['lineno']=80;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return fieldSets['__setitem__'](cat, fs);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})();
				}
				$pyjs['track']['lineno']=82;
				wdgGen = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['editBoneSelector']['select'](null, key, tmpDict);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})();
				$pyjs['track']['lineno']=83;
				widget = (function(){try{try{$pyjs['in_try_except'] += 1;
				return wdgGen['fromSkelStructure'](null, key, tmpDict);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})();
				$pyjs['track']['lineno']=84;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return widget['__setitem__']('id', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('vi_%s_%s_%s_%s_bn_%s', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$p['getattr'](self, 'editIdx'), null, 'internal', ($p['bool']($or3=cat)?$or3:'empty'), key]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})();
				$pyjs['track']['lineno']=86;
				descrLbl = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Label'](bone['__getitem__']('descr'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})();
				$pyjs['track']['lineno']=87;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return descrLbl['__getitem__']('class')['append'](key);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})();
				$pyjs['track']['lineno']=88;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return descrLbl['__getitem__']('class')['append']((function(){try{try{$pyjs['in_try_except'] += 1;
				return bone['__getitem__']('type')['$$replace']('.', '_');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})();
				$pyjs['track']['lineno']=89;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return descrLbl['__setitem__']('for', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('vi_%s_%s_%s_%s_bn_%s', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$p['getattr'](self, 'editIdx'), null, 'internal', ($p['bool']($or5=cat)?$or5:'empty'), key]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})();
				$pyjs['track']['lineno']=91;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](bone['__getitem__']('required'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})()) {
					$pyjs['track']['lineno']=92;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return descrLbl['__getitem__']('class')['append']('is_required');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})();
				}
				$pyjs['track']['lineno']=94;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($and6=bone['__getitem__']('required'))?($p['bool']($or7=(bone['__getitem__']('error') !== null))?$or7:($p['bool']($and8=$p['getattr'](self, 'errorInformation'))?(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['errorInformation']['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})()['__contains__'](key):$and8)):$and6));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})()) {
					$pyjs['track']['lineno']=97;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return descrLbl['__getitem__']('class')['append']('is_invalid');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})();
					$pyjs['track']['lineno']=98;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](bone['__getitem__']('error'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})()) {
						$pyjs['track']['lineno']=99;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return descrLbl['__setitem__']('title', bone['__getitem__']('error'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})();
					}
					else {
						$pyjs['track']['lineno']=101;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return descrLbl['__setitem__']('title', $p['getattr'](self, 'errorInformation')['__getitem__'](key));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})();
					}
					$pyjs['track']['lineno']=102;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return fieldSets['__getitem__'](cat)['__getitem__']('class')['append']('is_incomplete');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})();
				}
				$pyjs['track']['lineno']=104;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($and10=bone['__getitem__']('required'))?!$p['bool'](($p['bool']($or9=(bone['__getitem__']('error') !== null))?$or9:($p['bool']($and12=$p['getattr'](self, 'errorInformation'))?(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['errorInformation']['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})()['__contains__'](key):$and12))):$and10));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})()) {
					$pyjs['track']['lineno']=105;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return descrLbl['__getitem__']('class')['append']('is_valid');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})();
				}
				$pyjs['track']['lineno']=107;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($and14=(function(){try{try{$pyjs['in_try_except'] += 1;
				return bone['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})()['__contains__']('params'))?($p['bool']($and15=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](bone['__getitem__']('params'), $p['dict']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})())?(function(){try{try{$pyjs['in_try_except'] += 1;
				return bone['__getitem__']('params')['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})()['__contains__']('tooltip'):$and15):$and14));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})()) {
					$pyjs['track']['lineno']=108;
					tmp = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['html5']['Span']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})();
					$pyjs['track']['lineno']=109;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return tmp['appendChild'](descrLbl);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})();
					$pyjs['track']['lineno']=110;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return tmp['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $pyjs_kwargs_call(null, $m['ToolTip'], null, null, [{'longText':bone['__getitem__']('params')['__getitem__']('tooltip')}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})();
					$pyjs['track']['lineno']=111;
					descrLbl = tmp;
				}
				$pyjs['track']['lineno']=113;
				containerDiv = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Div']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})();
				$pyjs['track']['lineno']=114;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return containerDiv['appendChild'](descrLbl);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})();
				$pyjs['track']['lineno']=115;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return containerDiv['appendChild'](widget);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})();
				$pyjs['track']['lineno']=117;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((cat !== null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})()) {
					$pyjs['track']['lineno']=118;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return fieldSets['__getitem__'](cat)['_section']['appendChild'](containerDiv);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=120;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['form']['appendChild'](containerDiv);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})();
				}
				$pyjs['track']['lineno']=122;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return containerDiv['__getitem__']('class')['append']('bone');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})();
				$pyjs['track']['lineno']=123;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return containerDiv['__getitem__']('class')['append']($p['__op_add']($add1='bone_',$add2=key));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})();
				$pyjs['track']['lineno']=124;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return containerDiv['__getitem__']('class')['append']((function(){try{try{$pyjs['in_try_except'] += 1;
				return bone['__getitem__']('type')['$$replace']('.', '_');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})();
				$pyjs['track']['lineno']=126;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](bone['__getitem__']('type')['__contains__']('.'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})()) {
					$pyjs['track']['lineno']=127;
					$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
					$iter3_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return bone['__getitem__']('type')['$$split']('.');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})();
					$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
					while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
						t = $iter3_nextval['$nextval'];
						$pyjs['track']['lineno']=128;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return containerDiv['__getitem__']('class')['append'](t);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='widgets.edit';
				}
				$pyjs['track']['lineno']=130;
				currRow = $p['__op_add']($add3=currRow,$add4=1);
				$pyjs['track']['lineno']=131;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'bones')['__setitem__'](key, widget);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.edit';
			$pyjs['track']['lineno']=133;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len'](fieldSets);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})(), 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})()) {
				$pyjs['track']['lineno']=134;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter4_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return fieldSets['items']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_88_err){if (!$p['isinstance']($pyjs_dbg_88_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_88_err);}throw $pyjs_dbg_88_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_89_err){if (!$p['isinstance']($pyjs_dbg_89_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_89_err);}throw $pyjs_dbg_89_err;
}})();
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
					var $tupleassign3 = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['__ass_unpack']($iter4_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})();
					k = $tupleassign3[0];
					v = $tupleassign3[1];
					$pyjs['track']['lineno']=135;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](!$p['bool'](v['__getitem__']('class')['__contains__']('active')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_90_err){if (!$p['isinstance']($pyjs_dbg_90_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_90_err);}throw $pyjs_dbg_90_err;
}})()) {
						$pyjs['track']['lineno']=136;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return v['__getitem__']('class')['append']('active');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_91_err){if (!$p['isinstance']($pyjs_dbg_91_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_91_err);}throw $pyjs_dbg_91_err;
}})();
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='widgets.edit';
			}
			$pyjs['track']['lineno']=138;
			tmpList = function(){
				var $iter5_nextval,$iter5_idx,k,v,$collcomp2,$iter5_iter,$iter5_array,$iter5_type,$pyjs__trackstack_size_1;
	$collcomp2 = $p['list']();
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter5_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return fieldSets['items']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_93_err){if (!$p['isinstance']($pyjs_dbg_93_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_93_err);}throw $pyjs_dbg_93_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_94_err){if (!$p['isinstance']($pyjs_dbg_94_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_94_err);}throw $pyjs_dbg_94_err;
}})();
			$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
			while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
				var $tupleassign4 = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__ass_unpack']($iter5_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_92_err){if (!$p['isinstance']($pyjs_dbg_92_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_92_err);}throw $pyjs_dbg_92_err;
}})();
				k = $tupleassign4[0];
				v = $tupleassign4[1];
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $collcomp2['append']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([k, v]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_95_err){if (!$p['isinstance']($pyjs_dbg_95_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_95_err);}throw $pyjs_dbg_95_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_96_err){if (!$p['isinstance']($pyjs_dbg_96_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_96_err);}throw $pyjs_dbg_96_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.edit';

	return $collcomp2;}();
			$pyjs['track']['lineno']=139;
			var 			$lambda1 = function(x) {

				$pyjs['track']={'module':'widgets.edit','lineno':139};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='widgets.edit';
				$pyjs['track']['lineno']=139;
				$pyjs['track']['lineno']=139;
				$pyjs['track']['lineno']=139;
				var $pyjs__ret = x['__getitem__'](0);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			};
			$lambda1['__name__'] = '$lambda1';

			$lambda1['__bind_type__'] = 0;
			$lambda1['__args__'] = [null,null,['x']];
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(tmpList, 'sort', null, null, [{'key':$lambda1}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_97_err){if (!$p['isinstance']($pyjs_dbg_97_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_97_err);}throw $pyjs_dbg_97_err;
}})();
			$pyjs['track']['lineno']=141;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter6_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return tmpList;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_99_err){if (!$p['isinstance']($pyjs_dbg_99_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_99_err);}throw $pyjs_dbg_99_err;
}})();
			$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
			while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
				var $tupleassign5 = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__ass_unpack']($iter6_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_98_err){if (!$p['isinstance']($pyjs_dbg_98_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_98_err);}throw $pyjs_dbg_98_err;
}})();
				k = $tupleassign5[0];
				v = $tupleassign5[1];
				$pyjs['track']['lineno']=142;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['form']['appendChild'](v);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_100_err){if (!$p['isinstance']($pyjs_dbg_100_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_100_err);}throw $pyjs_dbg_100_err;
}})();
				$pyjs['track']['lineno']=143;
				v['_section'] = null;
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.edit';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['readOnly', false]]);
		$cls_definition['renderStructure'] = $method;
		$pyjs['track']['lineno']=145;
		$method = $pyjs__bind_method2('doSave', function(closeOnSuccess) {
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
				closeOnSuccess = arguments[1];
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
				if (typeof closeOnSuccess != 'undefined') {
					if (closeOnSuccess !== null && typeof closeOnSuccess['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = closeOnSuccess;
						closeOnSuccess = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}
			if (typeof closeOnSuccess == 'undefined') closeOnSuccess=arguments['callee']['__args__'][3][1];
			var key,$iter7_array,$iter7_nextval,$iter7_idx,res,$pyjs_try_err,$iter7_iter,$iter7_type,$pyjs__trackstack_size_1,lbl,bone;
			$pyjs['track']={'module':'widgets.edit', 'lineno':145};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.edit';
			$pyjs['track']['lineno']=145;
			$pyjs['track']['lineno']=149;
			self['closeOnSuccess'] = closeOnSuccess;
			$pyjs['track']['lineno']=151;
			res = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_101_err){if (!$p['isinstance']($pyjs_dbg_101_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_101_err);}throw $pyjs_dbg_101_err;
}})();
			$pyjs['track']['lineno']=153;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter7_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['bones']['items']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_103_err){if (!$p['isinstance']($pyjs_dbg_103_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_103_err);}throw $pyjs_dbg_103_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_104_err){if (!$p['isinstance']($pyjs_dbg_104_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_104_err);}throw $pyjs_dbg_104_err;
}})();
			$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
			while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
				var $tupleassign6 = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__ass_unpack']($iter7_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_102_err){if (!$p['isinstance']($pyjs_dbg_102_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_102_err);}throw $pyjs_dbg_102_err;
}})();
				key = $tupleassign6[0];
				bone = $tupleassign6[1];
				$pyjs['track']['lineno']=154;
				var $pyjs__trackstack_size_2 = $pyjs['trackstack']['length'];
				try {
					try {
						$pyjs['in_try_except'] += 1;
						$pyjs['track']['lineno']=155;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return res['update']((function(){try{try{$pyjs['in_try_except'] += 1;
						return bone['serializeForPost']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_105_err){if (!$p['isinstance']($pyjs_dbg_105_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_105_err);}throw $pyjs_dbg_105_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_106_err){if (!$p['isinstance']($pyjs_dbg_106_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_106_err);}throw $pyjs_dbg_106_err;
}})();
					} finally { $pyjs['in_try_except'] -= 1; }
				} catch($pyjs_try_err) {
					$pyjs['__last_exception_stack__'] = sys['save_exception_stack']($pyjs__trackstack_size_2 - 1);
					$pyjs['__active_exception_stack__'] = null;
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='widgets.edit';
					if (($pyjs_try_err_name == $m['InvalidBoneValueException']['__name__'])||$p['_isinstance']($pyjs_try_err,$m['InvalidBoneValueException'])) {
						$pyjs['track']['lineno']=158;
						lbl = $p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
						return bone['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_107_err){if (!$p['isinstance']($pyjs_dbg_107_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_107_err);}throw $pyjs_dbg_107_err;
}})(), '_children')['__getitem__'](0);
						$pyjs['track']['lineno']=159;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](lbl['__getitem__']('class')['__contains__']('is_valid'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_108_err){if (!$p['isinstance']($pyjs_dbg_108_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_108_err);}throw $pyjs_dbg_108_err;
}})()) {
							$pyjs['track']['lineno']=160;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return lbl['__getitem__']('class')['remove']('is_valid');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_109_err){if (!$p['isinstance']($pyjs_dbg_109_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_109_err);}throw $pyjs_dbg_109_err;
}})();
						}
						$pyjs['track']['lineno']=161;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return lbl['__getitem__']('class')['append']('is_invalid');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_110_err){if (!$p['isinstance']($pyjs_dbg_110_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_110_err);}throw $pyjs_dbg_110_err;
}})();
						$pyjs['track']['lineno']=162;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return self['actionbar']['resetLoadingState']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_111_err){if (!$p['isinstance']($pyjs_dbg_111_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_111_err);}throw $pyjs_dbg_111_err;
}})();
						$pyjs['track']['lineno']=163;
						$pyjs['track']['lineno']=163;
						var $pyjs__ret = null;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.edit';
			$pyjs['track']['lineno']=165;
			$pyjs['track']['lineno']=165;
			var $pyjs__ret = res;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, ['args',['kwargs'],['self'],['closeOnSuccess', false]]);
		$cls_definition['doSave'] = $method;
		$pyjs['track']['lineno']=167;
		$method = $pyjs__bind_method2('unserialize', function(data) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}
			var $iter8_idx,$iter8_array,$iter8_iter,$iter8_nextval,$pyjs__trackstack_size_1,$iter8_type,bone;
			$pyjs['track']={'module':'widgets.edit', 'lineno':167};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.edit';
			$pyjs['track']['lineno']=167;
			$pyjs['track']['lineno']=171;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter8_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['bones']['values']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_112_err){if (!$p['isinstance']($pyjs_dbg_112_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_112_err);}throw $pyjs_dbg_112_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_113_err){if (!$p['isinstance']($pyjs_dbg_113_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_113_err);}throw $pyjs_dbg_113_err;
}})();
			$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
			while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
				bone = $iter8_nextval['$nextval'];
				$pyjs['track']['lineno']=172;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return bone['unserialize'](data);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_114_err){if (!$p['isinstance']($pyjs_dbg_114_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_114_err);}throw $pyjs_dbg_114_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.edit';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['data']]);
		$cls_definition['unserialize'] = $method;
		$pyjs['track']['lineno']=18;
		var $bases = new Array($p['getattr']($m['html5'], 'Div'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('InternalEdit', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=174;
	$m['parseHashParameters'] = function(src, prefix) {
		if (typeof prefix == 'undefined') prefix=arguments['callee']['__args__'][3][1];
		var $iter12_type,newRes,$iter9_iter,res,$iter9_nextval,$iter9_idx,$iter9_type,keys,v,$iter12_array,$and17,$and18,processedPrefixes,k,$iter12_nextval,$iter12_iter,$pyjs__trackstack_size_1,$iter12_idx,$iter9_array,newPrefix;
		$pyjs['track']={'module':'widgets.edit','lineno':174};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='widgets.edit';
		$pyjs['track']['lineno']=174;
		$pyjs['track']['lineno']=186;
		res = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_115_err){if (!$p['isinstance']($pyjs_dbg_115_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_115_err);}throw $pyjs_dbg_115_err;
}})();
		$pyjs['track']['lineno']=187;
		processedPrefixes = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_116_err){if (!$p['isinstance']($pyjs_dbg_116_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_116_err);}throw $pyjs_dbg_116_err;
}})();
		$pyjs['track']['lineno']=189;
		$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
		$iter9_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
		return (function(){try{try{$pyjs['in_try_except'] += 1;
		return src['items']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_118_err){if (!$p['isinstance']($pyjs_dbg_118_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_118_err);}throw $pyjs_dbg_118_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_119_err){if (!$p['isinstance']($pyjs_dbg_119_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_119_err);}throw $pyjs_dbg_119_err;
}})();
		$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
		while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
			var $tupleassign7 = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['__ass_unpack']($iter9_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_117_err){if (!$p['isinstance']($pyjs_dbg_117_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_117_err);}throw $pyjs_dbg_117_err;
}})();
			k = $tupleassign7[0];
			v = $tupleassign7[1];
			$pyjs['track']['lineno']=190;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and17=prefix)?!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return k['startswith'](prefix);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_120_err){if (!$p['isinstance']($pyjs_dbg_120_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_120_err);}throw $pyjs_dbg_120_err;
}})()):$and17));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_121_err){if (!$p['isinstance']($pyjs_dbg_121_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_121_err);}throw $pyjs_dbg_121_err;
}})()) {
				$pyjs['track']['lineno']=191;
				continue;
			}
			$pyjs['track']['lineno']=193;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](prefix);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_122_err){if (!$p['isinstance']($pyjs_dbg_122_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_122_err);}throw $pyjs_dbg_122_err;
}})()) {
				$pyjs['track']['lineno']=194;
				k = (function(){try{try{$pyjs['in_try_except'] += 1;
				return k['$$replace'](prefix, '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_123_err){if (!$p['isinstance']($pyjs_dbg_123_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_123_err);}throw $pyjs_dbg_123_err;
}})();
			}
			$pyjs['track']['lineno']=196;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool'](k['__contains__']('.')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_124_err){if (!$p['isinstance']($pyjs_dbg_124_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_124_err);}throw $pyjs_dbg_124_err;
}})()) {
				$pyjs['track']['lineno']=197;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return res['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_125_err){if (!$p['isinstance']($pyjs_dbg_125_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_125_err);}throw $pyjs_dbg_125_err;
}})()['__contains__'](k));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_126_err){if (!$p['isinstance']($pyjs_dbg_126_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_126_err);}throw $pyjs_dbg_126_err;
}})()) {
					$pyjs['track']['lineno']=198;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['isinstance'](res['__getitem__'](k), $p['list']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_127_err){if (!$p['isinstance']($pyjs_dbg_127_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_127_err);}throw $pyjs_dbg_127_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_128_err){if (!$p['isinstance']($pyjs_dbg_128_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_128_err);}throw $pyjs_dbg_128_err;
}})()) {
						$pyjs['track']['lineno']=199;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return res['__setitem__'](k, (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['list']([res['__getitem__'](k)]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_129_err){if (!$p['isinstance']($pyjs_dbg_129_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_129_err);}throw $pyjs_dbg_129_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_130_err){if (!$p['isinstance']($pyjs_dbg_130_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_130_err);}throw $pyjs_dbg_130_err;
}})();
					}
					$pyjs['track']['lineno']=200;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return res['__getitem__'](k)['append'](v);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_131_err){if (!$p['isinstance']($pyjs_dbg_131_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_131_err);}throw $pyjs_dbg_131_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=202;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return res['__setitem__'](k, v);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_132_err){if (!$p['isinstance']($pyjs_dbg_132_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_132_err);}throw $pyjs_dbg_132_err;
}})();
				}
			}
			else {
				$pyjs['track']['lineno']=205;
				newPrefix = $p['__getslice'](k, 0, (function(){try{try{$pyjs['in_try_except'] += 1;
				return k['find']('.');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_133_err){if (!$p['isinstance']($pyjs_dbg_133_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_133_err);}throw $pyjs_dbg_133_err;
}})());
				$pyjs['track']['lineno']=207;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](processedPrefixes['__contains__'](newPrefix));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_134_err){if (!$p['isinstance']($pyjs_dbg_134_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_134_err);}throw $pyjs_dbg_134_err;
}})()) {
					$pyjs['track']['lineno']=208;
					continue;
				}
				$pyjs['track']['lineno']=210;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return processedPrefixes['append'](newPrefix);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_135_err){if (!$p['isinstance']($pyjs_dbg_135_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_135_err);}throw $pyjs_dbg_135_err;
}})();
				$pyjs['track']['lineno']=212;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return res['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_136_err){if (!$p['isinstance']($pyjs_dbg_136_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_136_err);}throw $pyjs_dbg_136_err;
}})()['__contains__'](newPrefix));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_137_err){if (!$p['isinstance']($pyjs_dbg_137_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_137_err);}throw $pyjs_dbg_137_err;
}})()) {
					$pyjs['track']['lineno']=213;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['isinstance'](res['__getitem__'](newPrefix), $p['list']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_138_err){if (!$p['isinstance']($pyjs_dbg_138_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_138_err);}throw $pyjs_dbg_138_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_139_err){if (!$p['isinstance']($pyjs_dbg_139_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_139_err);}throw $pyjs_dbg_139_err;
}})()) {
						$pyjs['track']['lineno']=214;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return res['__setitem__'](newPrefix, (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['list']([res['__getitem__'](newPrefix)]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_140_err){if (!$p['isinstance']($pyjs_dbg_140_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_140_err);}throw $pyjs_dbg_140_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_141_err){if (!$p['isinstance']($pyjs_dbg_141_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_141_err);}throw $pyjs_dbg_141_err;
}})();
					}
					$pyjs['track']['lineno']=215;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return res['__getitem__'](newPrefix)['append']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $pyjs_kwargs_call(null, $m['parseHashParameters'], null, null, [{'prefix':(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['sprintf']('%s%s.', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([prefix, newPrefix]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_142_err){if (!$p['isinstance']($pyjs_dbg_142_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_142_err);}throw $pyjs_dbg_142_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_143_err){if (!$p['isinstance']($pyjs_dbg_143_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_143_err);}throw $pyjs_dbg_143_err;
}})()}, src]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_144_err){if (!$p['isinstance']($pyjs_dbg_144_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_144_err);}throw $pyjs_dbg_144_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_145_err){if (!$p['isinstance']($pyjs_dbg_145_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_145_err);}throw $pyjs_dbg_145_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=218;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return res['__setitem__'](newPrefix, (function(){try{try{$pyjs['in_try_except'] += 1;
					return $pyjs_kwargs_call(null, $m['parseHashParameters'], null, null, [{'prefix':(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['sprintf']('%s%s.', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([prefix, newPrefix]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_146_err){if (!$p['isinstance']($pyjs_dbg_146_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_146_err);}throw $pyjs_dbg_146_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_147_err){if (!$p['isinstance']($pyjs_dbg_147_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_147_err);}throw $pyjs_dbg_147_err;
}})()}, src]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_148_err){if (!$p['isinstance']($pyjs_dbg_148_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_148_err);}throw $pyjs_dbg_148_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_149_err){if (!$p['isinstance']($pyjs_dbg_149_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_149_err);}throw $pyjs_dbg_149_err;
}})();
				}
			}
		}
		if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
			$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
			$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
		}
		$pyjs['track']['module']='widgets.edit';
		$pyjs['track']['lineno']=220;
		if ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['all'](function(){
			var $iter10_nextval,$iter10_idx,$collcomp3,$iter10_array,$pyjs__trackstack_size_1,$iter10_type,x,$iter10_iter;
	$collcomp3 = $p['list']();
		$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
		$iter10_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
		return (function(){try{try{$pyjs['in_try_except'] += 1;
		return res['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_150_err){if (!$p['isinstance']($pyjs_dbg_150_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_150_err);}throw $pyjs_dbg_150_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_151_err){if (!$p['isinstance']($pyjs_dbg_151_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_151_err);}throw $pyjs_dbg_151_err;
}})();
		$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
		while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
			x = $iter10_nextval['$nextval'];
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $collcomp3['append']((function(){try{try{$pyjs['in_try_except'] += 1;
			return x['isdigit']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_152_err){if (!$p['isinstance']($pyjs_dbg_152_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_152_err);}throw $pyjs_dbg_152_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_153_err){if (!$p['isinstance']($pyjs_dbg_153_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_153_err);}throw $pyjs_dbg_153_err;
}})();
		}
		if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
			$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
			$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
		}
		$pyjs['track']['module']='widgets.edit';

	return $collcomp3;}());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_154_err){if (!$p['isinstance']($pyjs_dbg_154_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_154_err);}throw $pyjs_dbg_154_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_155_err){if (!$p['isinstance']($pyjs_dbg_155_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_155_err);}throw $pyjs_dbg_155_err;
}})()) {
			$pyjs['track']['lineno']=221;
			newRes = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_156_err){if (!$p['isinstance']($pyjs_dbg_156_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_156_err);}throw $pyjs_dbg_156_err;
}})();
			$pyjs['track']['lineno']=222;
			keys = function(){
				var $iter11_type,$iter11_iter,$collcomp4,$iter11_array,x,$iter11_nextval,$iter11_idx,$pyjs__trackstack_size_1;
	$collcomp4 = $p['list']();
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter11_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return res['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_157_err){if (!$p['isinstance']($pyjs_dbg_157_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_157_err);}throw $pyjs_dbg_157_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_158_err){if (!$p['isinstance']($pyjs_dbg_158_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_158_err);}throw $pyjs_dbg_158_err;
}})();
			$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
			while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
				x = $iter11_nextval['$nextval'];
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $collcomp4['append']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['float_int'](x);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_159_err){if (!$p['isinstance']($pyjs_dbg_159_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_159_err);}throw $pyjs_dbg_159_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_160_err){if (!$p['isinstance']($pyjs_dbg_160_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_160_err);}throw $pyjs_dbg_160_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.edit';

	return $collcomp4;}();
			$pyjs['track']['lineno']=223;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return keys['sort']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_161_err){if (!$p['isinstance']($pyjs_dbg_161_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_161_err);}throw $pyjs_dbg_161_err;
}})();
			$pyjs['track']['lineno']=225;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter12_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return keys;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_162_err){if (!$p['isinstance']($pyjs_dbg_162_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_162_err);}throw $pyjs_dbg_162_err;
}})();
			$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
			while (typeof($p['__wrapped_next']($iter12_nextval)['$nextval']) != 'undefined') {
				k = $iter12_nextval['$nextval'];
				$pyjs['track']['lineno']=226;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return newRes['append'](res['__getitem__']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str'](k);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_163_err){if (!$p['isinstance']($pyjs_dbg_163_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_163_err);}throw $pyjs_dbg_163_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_164_err){if (!$p['isinstance']($pyjs_dbg_164_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_164_err);}throw $pyjs_dbg_164_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.edit';
			$pyjs['track']['lineno']=228;
			$pyjs['track']['lineno']=228;
			var $pyjs__ret = newRes;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
		$pyjs['track']['lineno']=230;
		$pyjs['track']['lineno']=230;
		var $pyjs__ret = res;
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['parseHashParameters']['__name__'] = 'parseHashParameters';

	$m['parseHashParameters']['__bind_type__'] = 0;
	$m['parseHashParameters']['__args__'] = [null,null,['src'],['prefix', '']];
	$pyjs['track']['lineno']=233;
	$m['EditWidget'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.edit';
		$pyjs['track']['lineno']=234;
		$cls_definition['appList'] = 'list';
		$pyjs['track']['lineno']=235;
		$cls_definition['appHierarchy'] = 'hierarchy';
		$pyjs['track']['lineno']=236;
		$cls_definition['appTree'] = 'tree';
		$pyjs['track']['lineno']=237;
		$cls_definition['appSingleton'] = 'singleton';
		$pyjs['track']['lineno']=238;
		$cls_definition['__editIdx_'] = 0;
		$pyjs['track']['lineno']=240;
		$method = $pyjs__bind_method2('__init__', function(module, applicationType, key, node, skelType, clone, hashArgs, logaction) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,8,arguments['length']-1));

				var kwargs = arguments['length'] >= 9 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				module = arguments[1];
				applicationType = arguments[2];
				key = arguments[3];
				node = arguments[4];
				skelType = arguments[5];
				clone = arguments[6];
				hashArgs = arguments[7];
				logaction = arguments[8];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,9,arguments['length']-1));

				var kwargs = arguments['length'] >= 10 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof logaction != 'undefined') {
					if (logaction !== null && typeof logaction['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = logaction;
						logaction = arguments[9];
					}
				} else 				if (typeof hashArgs != 'undefined') {
					if (hashArgs !== null && typeof hashArgs['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = hashArgs;
						hashArgs = arguments[9];
					}
				} else 				if (typeof clone != 'undefined') {
					if (clone !== null && typeof clone['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = clone;
						clone = arguments[9];
					}
				} else 				if (typeof skelType != 'undefined') {
					if (skelType !== null && typeof skelType['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = skelType;
						skelType = arguments[9];
					}
				} else 				if (typeof node != 'undefined') {
					if (node !== null && typeof node['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = node;
						node = arguments[9];
					}
				} else 				if (typeof key != 'undefined') {
					if (key !== null && typeof key['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = key;
						key = arguments[9];
					}
				} else 				if (typeof applicationType != 'undefined') {
					if (applicationType !== null && typeof applicationType['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = applicationType;
						applicationType = arguments[9];
					}
				} else 				if (typeof module != 'undefined') {
					if (module !== null && typeof module['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = module;
						module = arguments[9];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[9];
					}
				} else {
				}
			}
			if (typeof key == 'undefined') key=arguments['callee']['__args__'][5][1];
			if (typeof node == 'undefined') node=arguments['callee']['__args__'][6][1];
			if (typeof skelType == 'undefined') skelType=arguments['callee']['__args__'][7][1];
			if (typeof clone == 'undefined') clone=arguments['callee']['__args__'][8][1];
			if (typeof hashArgs == 'undefined') hashArgs=arguments['callee']['__args__'][9][1];
			if (typeof logaction == 'undefined') logaction=arguments['callee']['__args__'][10][1];
			var $or18,$add5,$or15,$or14,$or17,$or12,$or11,$or13,$add6,$or16;
			$pyjs['track']={'module':'widgets.edit', 'lineno':240};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.edit';
			$pyjs['track']['lineno']=240;
			$pyjs['track']['lineno']=260;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('modules')['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_165_err){if (!$p['isinstance']($pyjs_dbg_165_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_165_err);}throw $pyjs_dbg_165_err;
}})()['__contains__'](module)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_166_err){if (!$p['isinstance']($pyjs_dbg_166_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_166_err);}throw $pyjs_dbg_166_err;
}})()) {
				$pyjs['track']['lineno']=261;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['conf']['__getitem__']('mainWindow')['log']('error', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call(null, $m['translate'], null, null, [{'modulee':module}, "The modulee '{modulee}' does not exist."]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_167_err){if (!$p['isinstance']($pyjs_dbg_167_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_167_err);}throw $pyjs_dbg_167_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_168_err){if (!$p['isinstance']($pyjs_dbg_168_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_168_err);}throw $pyjs_dbg_168_err;
}})();
				$pyjs['track']['lineno']=262;
				if (!( (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['conf']['__getitem__']('modules')['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_169_err){if (!$p['isinstance']($pyjs_dbg_169_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_169_err);}throw $pyjs_dbg_169_err;
}})()['__contains__'](module) )) {
				   throw $p['AssertionError']();
				 }
			}
			$pyjs['track']['lineno']=264;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['EditWidget'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_170_err){if (!$p['isinstance']($pyjs_dbg_170_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_170_err);}throw $pyjs_dbg_170_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_171_err){if (!$p['isinstance']($pyjs_dbg_171_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_171_err);}throw $pyjs_dbg_171_err;
}})();
			$pyjs['track']['lineno']=265;
			self['module'] = module;
			$pyjs['track']['lineno']=268;
			if (!( (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([$p['getattr']($m['EditWidget'], 'appList'), $p['getattr']($m['EditWidget'], 'appHierarchy'), $p['getattr']($m['EditWidget'], 'appTree'), $p['getattr']($m['EditWidget'], 'appSingleton')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_172_err){if (!$p['isinstance']($pyjs_dbg_172_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_172_err);}throw $pyjs_dbg_172_err;
}})()['__contains__'](applicationType) )) {
			   throw $p['AssertionError']();
			 }
			$pyjs['track']['lineno']=270;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($or11=$p['op_eq'](applicationType, $p['getattr']($m['EditWidget'], 'appHierarchy')))?$or11:$p['op_eq'](applicationType, $p['getattr']($m['EditWidget'], 'appTree'))));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_173_err){if (!$p['isinstance']($pyjs_dbg_173_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_173_err);}throw $pyjs_dbg_173_err;
}})()) {
				$pyjs['track']['lineno']=271;
				if (!( ($p['bool']($or13=(key !== null))?$or13:(node !== null)) )) {
				   throw $p['AssertionError']();
				 }
			}
			$pyjs['track']['lineno']=273;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](clone);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_174_err){if (!$p['isinstance']($pyjs_dbg_174_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_174_err);}throw $pyjs_dbg_174_err;
}})()) {
				$pyjs['track']['lineno']=274;
				if (!( (key !== null) )) {
				   throw $p['AssertionError']();
				 }
				$pyjs['track']['lineno']=275;
				if (!( !$p['bool']($p['op_eq'](applicationType, $p['getattr']($m['EditWidget'], 'appSingleton'))) )) {
				   throw $p['AssertionError']();
				 }
				$pyjs['track']['lineno']=276;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($or15=$p['op_eq'](applicationType, $p['getattr']($m['EditWidget'], 'appHierarchy')))?$or15:$p['op_eq'](applicationType, $p['getattr']($m['EditWidget'], 'appTree'))));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_175_err){if (!$p['isinstance']($pyjs_dbg_175_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_175_err);}throw $pyjs_dbg_175_err;
}})()) {
					$pyjs['track']['lineno']=277;
					if (!( (node !== null) )) {
					   throw $p['AssertionError']();
					 }
				}
				$pyjs['track']['lineno']=278;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq'](applicationType, $p['getattr']($m['EditWidget'], 'appTree')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_176_err){if (!$p['isinstance']($pyjs_dbg_176_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_176_err);}throw $pyjs_dbg_176_err;
}})()) {
					$pyjs['track']['lineno']=279;
					if (!( (node !== null) )) {
					   throw $p['AssertionError']();
					 }
				}
				$pyjs['track']['lineno']=281;
				self['clone_of'] = key;
			}
			else {
				$pyjs['track']['lineno']=283;
				self['clone_of'] = null;
			}
			$pyjs['track']['lineno']=286;
			self['editIdx'] = $p['getattr']($m['EditWidget'], '__editIdx_');
			$pyjs['track']['lineno']=287;
			$m['EditWidget']['__editIdx_'] = $p['__op_add']($add5=$p['getattr']($m['EditWidget'], '__editIdx_'),$add6=1);
			$pyjs['track']['lineno']=288;
			self['applicationType'] = applicationType;
			$pyjs['track']['lineno']=289;
			self['key'] = key;
			$pyjs['track']['lineno']=290;
			self['mode'] = ($p['bool'](($p['bool']($or17=$p['getattr'](self, 'key'))?$or17:$p['op_eq'](applicationType, $p['getattr']($m['EditWidget'], 'appSingleton'))))? ('edit') : ('add'));
			$pyjs['track']['lineno']=291;
			self['node'] = node;
			$pyjs['track']['lineno']=292;
			self['skelType'] = skelType;
			$pyjs['track']['lineno']=293;
			self['clone'] = clone;
			$pyjs['track']['lineno']=294;
			self['bones'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_177_err){if (!$p['isinstance']($pyjs_dbg_177_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_177_err);}throw $pyjs_dbg_177_err;
}})();
			$pyjs['track']['lineno']=295;
			self['closeOnSuccess'] = false;
			$pyjs['track']['lineno']=296;
			self['logaction'] = logaction;
			$pyjs['track']['lineno']=298;
			self['_lastData'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_178_err){if (!$p['isinstance']($pyjs_dbg_178_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_178_err);}throw $pyjs_dbg_178_err;
}})();
			$pyjs['track']['lineno']=300;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](hashArgs);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_179_err){if (!$p['isinstance']($pyjs_dbg_179_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_179_err);}throw $pyjs_dbg_179_err;
}})()) {
				$pyjs['track']['lineno']=301;
				self['_hashArgs'] = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['parseHashParameters'](hashArgs);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_180_err){if (!$p['isinstance']($pyjs_dbg_180_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_180_err);}throw $pyjs_dbg_180_err;
}})();
				$pyjs['track']['lineno']=302;
			}
			else {
				$pyjs['track']['lineno']=311;
				self['_hashArgs'] = null;
			}
			$pyjs['track']['lineno']=313;
			self['editTaskID'] = null;
			$pyjs['track']['lineno']=314;
			self['wasInitialRequest'] = true;
			$pyjs['track']['lineno']=315;
			self['actionbar'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['ActionBar']($p['getattr'](self, 'module'), $p['getattr'](self, 'applicationType'), $p['getattr'](self, 'mode'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_181_err){if (!$p['isinstance']($pyjs_dbg_181_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_181_err);}throw $pyjs_dbg_181_err;
}})();
			$pyjs['track']['lineno']=316;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'actionbar'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_182_err){if (!$p['isinstance']($pyjs_dbg_182_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_182_err);}throw $pyjs_dbg_182_err;
}})();
			$pyjs['track']['lineno']=317;
			self['form'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Form']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_183_err){if (!$p['isinstance']($pyjs_dbg_183_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_183_err);}throw $pyjs_dbg_183_err;
}})();
			$pyjs['track']['lineno']=318;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'form'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_184_err){if (!$p['isinstance']($pyjs_dbg_184_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_184_err);}throw $pyjs_dbg_184_err;
}})();
			$pyjs['track']['lineno']=320;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](applicationType, $p['getattr']($m['EditWidget'], 'appSingleton')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_185_err){if (!$p['isinstance']($pyjs_dbg_185_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_185_err);}throw $pyjs_dbg_185_err;
}})()) {
				$pyjs['track']['lineno']=321;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['actionbar']['setActions']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list'](['save.singleton', 'reset']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_186_err){if (!$p['isinstance']($pyjs_dbg_186_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_186_err);}throw $pyjs_dbg_186_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_187_err){if (!$p['isinstance']($pyjs_dbg_187_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_187_err);}throw $pyjs_dbg_187_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=323;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['actionbar']['setActions']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list'](['save.close', 'save.continue', 'reset']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_188_err){if (!$p['isinstance']($pyjs_dbg_188_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_188_err);}throw $pyjs_dbg_188_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_189_err){if (!$p['isinstance']($pyjs_dbg_189_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_189_err);}throw $pyjs_dbg_189_err;
}})();
			}
			$pyjs['track']['lineno']=325;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['reloadData']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_190_err){if (!$p['isinstance']($pyjs_dbg_190_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_190_err);}throw $pyjs_dbg_190_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['module'],['applicationType'],['key', 0],['node', null],['skelType', null],['clone', false],['hashArgs', null],['logaction', 'Entry saved!']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=327;
		$method = $pyjs__bind_method2('onDetach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'widgets.edit', 'lineno':327};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.edit';
			$pyjs['track']['lineno']=327;
			$pyjs['track']['lineno']=328;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['utils']['setPreventUnloading'](false);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_191_err){if (!$p['isinstance']($pyjs_dbg_191_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_191_err);}throw $pyjs_dbg_191_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onDetach'] = $method;
		$pyjs['track']['lineno']=330;
		$method = $pyjs__bind_method2('onAttach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'widgets.edit', 'lineno':330};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.edit';
			$pyjs['track']['lineno']=330;
			$pyjs['track']['lineno']=331;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['utils']['setPreventUnloading'](true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_192_err){if (!$p['isinstance']($pyjs_dbg_192_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_192_err);}throw $pyjs_dbg_192_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onAttach'] = $method;
		$pyjs['track']['lineno']=333;
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
			var $or20,$and19,$pyjs_try_err,txt,$and20,$or19,$or21,$or22;
			$pyjs['track']={'module':'widgets.edit', 'lineno':333};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.edit';
			$pyjs['track']['lineno']=333;
			$pyjs['track']['lineno']=337;
			var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
			try {
				try {
					$pyjs['in_try_except'] += 1;
					$pyjs['track']['lineno']=338;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['printFunc']([$p['getattr'](req, 'result')], 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_193_err){if (!$p['isinstance']($pyjs_dbg_193_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_193_err);}throw $pyjs_dbg_193_err;
}})();
					$pyjs['track']['lineno']=339;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['printFunc']([(function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['NetworkService']['decode'](req);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_194_err){if (!$p['isinstance']($pyjs_dbg_194_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_194_err);}throw $pyjs_dbg_194_err;
}})()], 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_195_err){if (!$p['isinstance']($pyjs_dbg_195_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_195_err);}throw $pyjs_dbg_195_err;
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
				$pyjs['track']['module']='widgets.edit';
				if (true) {
					$pyjs['track']['lineno']=341;
				}
			}
			$pyjs['track']['lineno']=343;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and19=code)?($p['bool']($or19=$p['op_eq'](code, 401))?$or19:$p['op_eq'](code, 403)):$and19));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_196_err){if (!$p['isinstance']($pyjs_dbg_196_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_196_err);}throw $pyjs_dbg_196_err;
}})()) {
				$pyjs['track']['lineno']=344;
				txt = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['translate']('Access denied!');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_197_err){if (!$p['isinstance']($pyjs_dbg_197_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_197_err);}throw $pyjs_dbg_197_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=346;
				txt = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call(null, $m['translate'], null, null, [{'code':($p['bool']($or21=code)?$or21:0)}, 'An error occurred: {code}']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_198_err){if (!$p['isinstance']($pyjs_dbg_198_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_198_err);}throw $pyjs_dbg_198_err;
}})();
			}
			$pyjs['track']['lineno']=348;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('mainWindow')['log']('error', txt);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_199_err){if (!$p['isinstance']($pyjs_dbg_199_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_199_err);}throw $pyjs_dbg_199_err;
}})();
			$pyjs['track']['lineno']=350;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'wasInitialRequest'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_200_err){if (!$p['isinstance']($pyjs_dbg_200_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_200_err);}throw $pyjs_dbg_200_err;
}})()) {
				$pyjs['track']['lineno']=351;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['conf']['__getitem__']('mainWindow')['removeWidget'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_201_err){if (!$p['isinstance']($pyjs_dbg_201_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_201_err);}throw $pyjs_dbg_201_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['req', null],['code', null]]);
		$cls_definition['showErrorMsg'] = $method;
		$pyjs['track']['lineno']=353;
		$method = $pyjs__bind_method2('reloadData', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'widgets.edit', 'lineno':353};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.edit';
			$pyjs['track']['lineno']=353;
			$pyjs['track']['lineno']=354;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['save']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_202_err){if (!$p['isinstance']($pyjs_dbg_202_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_202_err);}throw $pyjs_dbg_202_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_203_err){if (!$p['isinstance']($pyjs_dbg_203_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_203_err);}throw $pyjs_dbg_203_err;
}})();
			$pyjs['track']['lineno']=355;
			$pyjs['track']['lineno']=355;
			var $pyjs__ret = null;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['reloadData'] = $method;
		$pyjs['track']['lineno']=357;
		$method = $pyjs__bind_method2('save', function(data) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}
			var $and26,$and23,$or25,$or24,$and22,$and21,$and24,$or26,$and25,$or23;
			$pyjs['track']={'module':'widgets.edit', 'lineno':357};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.edit';
			$pyjs['track']['lineno']=357;
			$pyjs['track']['lineno']=365;
			self['wasInitialRequest'] = !$p['bool'](($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len'](data);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_204_err){if (!$p['isinstance']($pyjs_dbg_204_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_204_err);}throw $pyjs_dbg_204_err;
}})(), 0) == 1));
			$pyjs['track']['lineno']=367;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq']($p['getattr'](self, 'module'), '_tasks'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_205_err){if (!$p['isinstance']($pyjs_dbg_205_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_205_err);}throw $pyjs_dbg_205_err;
}})()) {
				$pyjs['track']['lineno']=368;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'secure':($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['len'](data);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_208_err){if (!$p['isinstance']($pyjs_dbg_208_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_208_err);}throw $pyjs_dbg_208_err;
}})(), 0) == 1), 'successHandler':$p['getattr'](self, 'setData'), 'failureHandler':$p['getattr'](self, 'showErrorMsg')}, null, (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('/admin/%s/execute/%s', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$p['getattr'](self, 'module'), $p['getattr'](self, 'key')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_206_err){if (!$p['isinstance']($pyjs_dbg_206_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_206_err);}throw $pyjs_dbg_206_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_207_err){if (!$p['isinstance']($pyjs_dbg_207_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_207_err);}throw $pyjs_dbg_207_err;
}})(), data]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_209_err){if (!$p['isinstance']($pyjs_dbg_209_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_209_err);}throw $pyjs_dbg_209_err;
}})();
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq']($p['getattr'](self, 'applicationType'), $p['getattr']($m['EditWidget'], 'appList')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_210_err){if (!$p['isinstance']($pyjs_dbg_210_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_210_err);}throw $pyjs_dbg_210_err;
}})()) {
				$pyjs['track']['lineno']=374;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($and21=$p['getattr'](self, 'key'))?($p['bool']($or23=!$p['bool']($p['getattr'](self, 'clone')))?$or23:!$p['bool'](data)):$and21));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_211_err){if (!$p['isinstance']($pyjs_dbg_211_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_211_err);}throw $pyjs_dbg_211_err;
}})()) {
					$pyjs['track']['lineno']=375;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'secure':($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len'](data);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_213_err){if (!$p['isinstance']($pyjs_dbg_213_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_213_err);}throw $pyjs_dbg_213_err;
}})(), 0) == 1), 'successHandler':$p['getattr'](self, 'setData'), 'failureHandler':$p['getattr'](self, 'showErrorMsg')}, $p['getattr'](self, 'module'), (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['sprintf']('edit/%s', $p['getattr'](self, 'key'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_212_err){if (!$p['isinstance']($pyjs_dbg_212_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_212_err);}throw $pyjs_dbg_212_err;
}})(), data]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_214_err){if (!$p['isinstance']($pyjs_dbg_214_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_214_err);}throw $pyjs_dbg_214_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=380;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'secure':($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len'](data);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_215_err){if (!$p['isinstance']($pyjs_dbg_215_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_215_err);}throw $pyjs_dbg_215_err;
}})(), 0) == 1), 'successHandler':$p['getattr'](self, 'setData'), 'failureHandler':$p['getattr'](self, 'showErrorMsg')}, $p['getattr'](self, 'module'), 'add', data]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_216_err){if (!$p['isinstance']($pyjs_dbg_216_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_216_err);}throw $pyjs_dbg_216_err;
}})();
				}
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq']($p['getattr'](self, 'applicationType'), $p['getattr']($m['EditWidget'], 'appHierarchy')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_217_err){if (!$p['isinstance']($pyjs_dbg_217_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_217_err);}throw $pyjs_dbg_217_err;
}})()) {
				$pyjs['track']['lineno']=386;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($and23=$p['getattr'](self, 'key'))?($p['bool']($or25=!$p['bool']($p['getattr'](self, 'clone')))?$or25:!$p['bool'](data)):$and23));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_218_err){if (!$p['isinstance']($pyjs_dbg_218_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_218_err);}throw $pyjs_dbg_218_err;
}})()) {
					$pyjs['track']['lineno']=387;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'secure':($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len'](data);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_220_err){if (!$p['isinstance']($pyjs_dbg_220_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_220_err);}throw $pyjs_dbg_220_err;
}})(), 0) == 1), 'successHandler':$p['getattr'](self, 'setData'), 'failureHandler':$p['getattr'](self, 'showErrorMsg')}, $p['getattr'](self, 'module'), (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['sprintf']('edit/%s', $p['getattr'](self, 'key'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_219_err){if (!$p['isinstance']($pyjs_dbg_219_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_219_err);}throw $pyjs_dbg_219_err;
}})(), data]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_221_err){if (!$p['isinstance']($pyjs_dbg_221_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_221_err);}throw $pyjs_dbg_221_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=392;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'secure':($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len'](data);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_223_err){if (!$p['isinstance']($pyjs_dbg_223_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_223_err);}throw $pyjs_dbg_223_err;
}})(), 0) == 1), 'successHandler':$p['getattr'](self, 'setData'), 'failureHandler':$p['getattr'](self, 'showErrorMsg')}, $p['getattr'](self, 'module'), (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['sprintf']('add/%s', $p['getattr'](self, 'node'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_222_err){if (!$p['isinstance']($pyjs_dbg_222_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_222_err);}throw $pyjs_dbg_222_err;
}})(), data]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_224_err){if (!$p['isinstance']($pyjs_dbg_224_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_224_err);}throw $pyjs_dbg_224_err;
}})();
				}
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq']($p['getattr'](self, 'applicationType'), $p['getattr']($m['EditWidget'], 'appTree')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_225_err){if (!$p['isinstance']($pyjs_dbg_225_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_225_err);}throw $pyjs_dbg_225_err;
}})()) {
				$pyjs['track']['lineno']=398;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($and25=$p['getattr'](self, 'key'))?!$p['bool']($p['getattr'](self, 'clone')):$and25));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_226_err){if (!$p['isinstance']($pyjs_dbg_226_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_226_err);}throw $pyjs_dbg_226_err;
}})()) {
					$pyjs['track']['lineno']=399;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'secure':($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len'](data);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_229_err){if (!$p['isinstance']($pyjs_dbg_229_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_229_err);}throw $pyjs_dbg_229_err;
}})(), 0) == 1), 'successHandler':$p['getattr'](self, 'setData'), 'failureHandler':$p['getattr'](self, 'showErrorMsg')}, $p['getattr'](self, 'module'), (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['sprintf']('edit/%s/%s', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([$p['getattr'](self, 'skelType'), $p['getattr'](self, 'key')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_227_err){if (!$p['isinstance']($pyjs_dbg_227_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_227_err);}throw $pyjs_dbg_227_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_228_err){if (!$p['isinstance']($pyjs_dbg_228_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_228_err);}throw $pyjs_dbg_228_err;
}})(), data]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_230_err){if (!$p['isinstance']($pyjs_dbg_230_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_230_err);}throw $pyjs_dbg_230_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=404;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'secure':($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len'](data);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_233_err){if (!$p['isinstance']($pyjs_dbg_233_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_233_err);}throw $pyjs_dbg_233_err;
}})(), 0) == 1), 'successHandler':$p['getattr'](self, 'setData'), 'failureHandler':$p['getattr'](self, 'showErrorMsg')}, $p['getattr'](self, 'module'), (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['sprintf']('add/%s/%s', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([$p['getattr'](self, 'skelType'), $p['getattr'](self, 'node')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_231_err){if (!$p['isinstance']($pyjs_dbg_231_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_231_err);}throw $pyjs_dbg_231_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_232_err){if (!$p['isinstance']($pyjs_dbg_232_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_232_err);}throw $pyjs_dbg_232_err;
}})(), data]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_234_err){if (!$p['isinstance']($pyjs_dbg_234_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_234_err);}throw $pyjs_dbg_234_err;
}})();
				}
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq']($p['getattr'](self, 'applicationType'), $p['getattr']($m['EditWidget'], 'appSingleton')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_235_err){if (!$p['isinstance']($pyjs_dbg_235_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_235_err);}throw $pyjs_dbg_235_err;
}})()) {
				$pyjs['track']['lineno']=410;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'secure':($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['len'](data);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_236_err){if (!$p['isinstance']($pyjs_dbg_236_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_236_err);}throw $pyjs_dbg_236_err;
}})(), 0) == 1), 'successHandler':$p['getattr'](self, 'setData'), 'failureHandler':$p['getattr'](self, 'showErrorMsg')}, $p['getattr'](self, 'module'), 'edit', data]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_237_err){if (!$p['isinstance']($pyjs_dbg_237_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_237_err);}throw $pyjs_dbg_237_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=415;
				$pyjs['__active_exception_stack__'] = null;
				throw ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['NotImplementedError']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_238_err){if (!$p['isinstance']($pyjs_dbg_238_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_238_err);}throw $pyjs_dbg_238_err;
}})());
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['data']]);
		$cls_definition['save'] = $method;
		$pyjs['track']['lineno']=417;
		$method = $pyjs__bind_method2('clear', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var c,$iter13_nextval,$iter13_iter,$iter13_type,$iter13_idx,$pyjs__trackstack_size_1,$iter13_array;
			$pyjs['track']={'module':'widgets.edit', 'lineno':417};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.edit';
			$pyjs['track']['lineno']=417;
			$pyjs['track']['lineno']=421;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter13_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__getslice']($p['getattr']($p['getattr'](self, 'form'), '_children'), 0, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_239_err){if (!$p['isinstance']($pyjs_dbg_239_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_239_err);}throw $pyjs_dbg_239_err;
}})();
			$iter13_nextval=$p['__iter_prepare']($iter13_iter,false);
			while (typeof($p['__wrapped_next']($iter13_nextval)['$nextval']) != 'undefined') {
				c = $iter13_nextval['$nextval'];
				$pyjs['track']['lineno']=422;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['form']['removeChild'](c);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_240_err){if (!$p['isinstance']($pyjs_dbg_240_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_240_err);}throw $pyjs_dbg_240_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.edit';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clear'] = $method;
		$pyjs['track']['lineno']=424;
		$method = $pyjs__bind_method2('closeOrContinue', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];

			$pyjs['track']={'module':'widgets.edit', 'lineno':424};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.edit';
			$pyjs['track']['lineno']=424;
			$pyjs['track']['lineno']=425;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['NetworkService'], 'notifyChange', null, null, [{'key':$p['getattr'](self, 'key')}, $p['getattr'](self, 'module')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_241_err){if (!$p['isinstance']($pyjs_dbg_241_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_241_err);}throw $pyjs_dbg_241_err;
}})();
			$pyjs['track']['lineno']=427;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'closeOnSuccess'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_242_err){if (!$p['isinstance']($pyjs_dbg_242_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_242_err);}throw $pyjs_dbg_242_err;
}})()) {
				$pyjs['track']['lineno']=428;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq']($p['getattr'](self, 'module'), '_tasks'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_243_err){if (!$p['isinstance']($pyjs_dbg_243_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_243_err);}throw $pyjs_dbg_243_err;
}})()) {
					$pyjs['track']['lineno']=429;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_244_err){if (!$p['isinstance']($pyjs_dbg_244_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_244_err);}throw $pyjs_dbg_244_err;
}})()['close']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_245_err){if (!$p['isinstance']($pyjs_dbg_245_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_245_err);}throw $pyjs_dbg_245_err;
}})();
					$pyjs['track']['lineno']=430;
					$pyjs['track']['lineno']=430;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=432;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['conf']['__getitem__']('mainWindow')['removeWidget'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_246_err){if (!$p['isinstance']($pyjs_dbg_246_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_246_err);}throw $pyjs_dbg_246_err;
}})();
				$pyjs['track']['lineno']=433;
				$pyjs['track']['lineno']=433;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=435;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['clear']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_247_err){if (!$p['isinstance']($pyjs_dbg_247_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_247_err);}throw $pyjs_dbg_247_err;
}})();
			$pyjs['track']['lineno']=436;
			self['bones'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_248_err){if (!$p['isinstance']($pyjs_dbg_248_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_248_err);}throw $pyjs_dbg_248_err;
}})();
			$pyjs['track']['lineno']=438;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq']($p['getattr'](self, 'mode'), 'add'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_249_err){if (!$p['isinstance']($pyjs_dbg_249_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_249_err);}throw $pyjs_dbg_249_err;
}})()) {
				$pyjs['track']['lineno']=439;
				self['key'] = 0;
			}
			$pyjs['track']['lineno']=441;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['reloadData']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_250_err){if (!$p['isinstance']($pyjs_dbg_250_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_250_err);}throw $pyjs_dbg_250_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['closeOrContinue'] = $method;
		$pyjs['track']['lineno']=443;
		$method = $pyjs__bind_method2('doCloneHierarchy', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];

			$pyjs['track']={'module':'widgets.edit', 'lineno':443};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.edit';
			$pyjs['track']['lineno']=443;
			$pyjs['track']['lineno']=444;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq']($p['getattr'](self, 'applicationType'), $p['getattr']($m['EditWidget'], 'appHierarchy')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_251_err){if (!$p['isinstance']($pyjs_dbg_251_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_251_err);}throw $pyjs_dbg_251_err;
}})()) {
				$pyjs['track']['lineno']=445;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'secure':true, 'successHandler':$p['getattr'](self, 'cloneComplete')}, $p['getattr'](self, 'module'), 'clone', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([['fromRepo', $p['getattr'](self, 'node')], ['toRepo', $p['getattr'](self, 'node')], ['fromParent', $p['getattr'](self, 'clone_of')], ['toParent', $p['getattr'](self, 'key')]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_252_err){if (!$p['isinstance']($pyjs_dbg_252_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_252_err);}throw $pyjs_dbg_252_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_253_err){if (!$p['isinstance']($pyjs_dbg_253_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_253_err);}throw $pyjs_dbg_253_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=450;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'secure':true, 'successHandler':$p['getattr'](self, 'cloneComplete')}, $m['conf']['__getitem__']('modules')['__getitem__']($p['getattr'](self, 'module'))['__getitem__']('rootNodeOf'), 'clone', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([['fromRepo', $p['getattr'](self, 'clone_of')], ['toRepo', $p['getattr'](self, 'key')]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_254_err){if (!$p['isinstance']($pyjs_dbg_254_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_254_err);}throw $pyjs_dbg_254_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_255_err){if (!$p['isinstance']($pyjs_dbg_255_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_255_err);}throw $pyjs_dbg_255_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['doCloneHierarchy'] = $method;
		$pyjs['track']['lineno']=454;
		$method = $pyjs__bind_method2('cloneComplete', function(request) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				request = arguments[1];
			}
			var spanMsg,logDiv;
			$pyjs['track']={'module':'widgets.edit', 'lineno':454};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.edit';
			$pyjs['track']['lineno']=454;
			$pyjs['track']['lineno']=455;
			logDiv = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Div']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_256_err){if (!$p['isinstance']($pyjs_dbg_256_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_256_err);}throw $pyjs_dbg_256_err;
}})();
			$pyjs['track']['lineno']=456;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return logDiv['__getitem__']('class')['append']('msg');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_257_err){if (!$p['isinstance']($pyjs_dbg_257_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_257_err);}throw $pyjs_dbg_257_err;
}})();
			$pyjs['track']['lineno']=457;
			spanMsg = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Span']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_258_err){if (!$p['isinstance']($pyjs_dbg_258_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_258_err);}throw $pyjs_dbg_258_err;
}})();
			$pyjs['track']['lineno']=458;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return spanMsg['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['TextNode']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('The hierarchy will be cloned in the background.');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_259_err){if (!$p['isinstance']($pyjs_dbg_259_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_259_err);}throw $pyjs_dbg_259_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_260_err){if (!$p['isinstance']($pyjs_dbg_260_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_260_err);}throw $pyjs_dbg_260_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_261_err){if (!$p['isinstance']($pyjs_dbg_261_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_261_err);}throw $pyjs_dbg_261_err;
}})();
			$pyjs['track']['lineno']=459;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return spanMsg['__getitem__']('class')['append']('msgspan');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_262_err){if (!$p['isinstance']($pyjs_dbg_262_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_262_err);}throw $pyjs_dbg_262_err;
}})();
			$pyjs['track']['lineno']=460;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return logDiv['appendChild'](spanMsg);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_263_err){if (!$p['isinstance']($pyjs_dbg_263_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_263_err);}throw $pyjs_dbg_263_err;
}})();
			$pyjs['track']['lineno']=462;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('mainWindow')['log']('success', logDiv);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_264_err){if (!$p['isinstance']($pyjs_dbg_264_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_264_err);}throw $pyjs_dbg_264_err;
}})();
			$pyjs['track']['lineno']=463;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['closeOrContinue']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_265_err){if (!$p['isinstance']($pyjs_dbg_265_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_265_err);}throw $pyjs_dbg_265_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['request']]);
		$cls_definition['cloneComplete'] = $method;
		$pyjs['track']['lineno']=465;
		$method = $pyjs__bind_method2('setData', function(request, data, ignoreMissing, askHierarchyCloning) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				request = arguments[1];
				data = arguments[2];
				ignoreMissing = arguments[3];
				askHierarchyCloning = arguments[4];
			}
			if (typeof request == 'undefined') request=arguments['callee']['__args__'][3][1];
			if (typeof data == 'undefined') data=arguments['callee']['__args__'][4][1];
			if (typeof ignoreMissing == 'undefined') ignoreMissing=arguments['callee']['__args__'][5][1];
			if (typeof askHierarchyCloning == 'undefined') askHierarchyCloning=arguments['callee']['__args__'][6][1];
			var $iter18_iter,descrLbl,$lambda2,$pyjs__trackstack_size_1,widget,$iter16_idx,$and29,$and28,fshref,containerDiv,cat,$and27,defaultCat,$iter15_iter,$iter16_type,v,$and41,$and40,$and43,legend,$and42,$iter18_idx,$pyjs_try_err,$or28,$or29,$add7,$iter16_nextval,$or27,t,$iter18_type,hasMissing,fs,wdgGen,tmpDict,$iter15_array,$add8,logDiv,$and38,$and39,key,$and34,$and35,$and36,$and37,$and30,$and31,$and32,$and33,$iter16_array,tmpList,$iter18_nextval,name,$iter18_array,k,$iter15_idx,$and44,$or30,$pyjs__trackstack_size_2,bone,$iter15_nextval,$iter15_type,$iter16_iter,currRow,spanMsg,section,fieldSets;
			$pyjs['track']={'module':'widgets.edit', 'lineno':465};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.edit';
			$pyjs['track']['lineno']=465;
			$pyjs['track']['lineno']=474;
			if (!( ($p['bool']($or27=request)?$or27:data) )) {
			   throw $p['AssertionError']();
			 }
			$pyjs['track']['lineno']=476;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](request);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_266_err){if (!$p['isinstance']($pyjs_dbg_266_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_266_err);}throw $pyjs_dbg_266_err;
}})()) {
				$pyjs['track']['lineno']=477;
				data = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['NetworkService']['decode'](request);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_267_err){if (!$p['isinstance']($pyjs_dbg_267_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_267_err);}throw $pyjs_dbg_267_err;
}})();
			}
			$pyjs['track']['lineno']=479;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and27=data['__contains__']('action'))?($p['bool']($or29=$p['op_eq'](data['__getitem__']('action'), 'addSuccess'))?$or29:$p['op_eq'](data['__getitem__']('action'), 'editSuccess')):$and27));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_268_err){if (!$p['isinstance']($pyjs_dbg_268_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_268_err);}throw $pyjs_dbg_268_err;
}})()) {
				$pyjs['track']['lineno']=480;
				logDiv = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Div']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_269_err){if (!$p['isinstance']($pyjs_dbg_269_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_269_err);}throw $pyjs_dbg_269_err;
}})();
				$pyjs['track']['lineno']=481;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return logDiv['__getitem__']('class')['append']('msg');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_270_err){if (!$p['isinstance']($pyjs_dbg_270_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_270_err);}throw $pyjs_dbg_270_err;
}})();
				$pyjs['track']['lineno']=482;
				spanMsg = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Span']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_271_err){if (!$p['isinstance']($pyjs_dbg_271_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_271_err);}throw $pyjs_dbg_271_err;
}})();
				$pyjs['track']['lineno']=484;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return spanMsg['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['TextNode']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['translate']($p['getattr'](self, 'logaction'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_272_err){if (!$p['isinstance']($pyjs_dbg_272_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_272_err);}throw $pyjs_dbg_272_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_273_err){if (!$p['isinstance']($pyjs_dbg_273_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_273_err);}throw $pyjs_dbg_273_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_274_err){if (!$p['isinstance']($pyjs_dbg_274_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_274_err);}throw $pyjs_dbg_274_err;
}})();
				$pyjs['track']['lineno']=485;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return spanMsg['__getitem__']('class')['append']('msgspan');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_275_err){if (!$p['isinstance']($pyjs_dbg_275_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_275_err);}throw $pyjs_dbg_275_err;
}})();
				$pyjs['track']['lineno']=486;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return logDiv['appendChild'](spanMsg);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_276_err){if (!$p['isinstance']($pyjs_dbg_276_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_276_err);}throw $pyjs_dbg_276_err;
}})();
				$pyjs['track']['lineno']=488;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['conf']['__getitem__']('modules')['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_277_err){if (!$p['isinstance']($pyjs_dbg_277_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_277_err);}throw $pyjs_dbg_277_err;
}})()['__contains__']($p['getattr'](self, 'module')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_278_err){if (!$p['isinstance']($pyjs_dbg_278_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_278_err);}throw $pyjs_dbg_278_err;
}})()) {
					$pyjs['track']['lineno']=489;
					spanMsg = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['html5']['Span']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_279_err){if (!$p['isinstance']($pyjs_dbg_279_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_279_err);}throw $pyjs_dbg_279_err;
}})();
					$pyjs['track']['lineno']=490;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return self['module']['startswith']('_');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_280_err){if (!$p['isinstance']($pyjs_dbg_280_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_280_err);}throw $pyjs_dbg_280_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_281_err){if (!$p['isinstance']($pyjs_dbg_281_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_281_err);}throw $pyjs_dbg_281_err;
}})()) {
						$pyjs['track']['lineno']=491;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return spanMsg['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['html5']['TextNode']($p['getattr'](self, 'key'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_282_err){if (!$p['isinstance']($pyjs_dbg_282_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_282_err);}throw $pyjs_dbg_282_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_283_err){if (!$p['isinstance']($pyjs_dbg_283_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_283_err);}throw $pyjs_dbg_283_err;
}})();
					}
					else {
						$pyjs['track']['lineno']=493;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return spanMsg['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['html5']['TextNode']($m['conf']['__getitem__']('modules')['__getitem__']($p['getattr'](self, 'module'))['__getitem__']('name'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_284_err){if (!$p['isinstance']($pyjs_dbg_284_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_284_err);}throw $pyjs_dbg_284_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_285_err){if (!$p['isinstance']($pyjs_dbg_285_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_285_err);}throw $pyjs_dbg_285_err;
}})();
					}
					$pyjs['track']['lineno']=494;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return spanMsg['__getitem__']('class')['append']('modulespan');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_286_err){if (!$p['isinstance']($pyjs_dbg_286_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_286_err);}throw $pyjs_dbg_286_err;
}})();
					$pyjs['track']['lineno']=495;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return logDiv['appendChild'](spanMsg);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_287_err){if (!$p['isinstance']($pyjs_dbg_287_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_287_err);}throw $pyjs_dbg_287_err;
}})();
				}
				$pyjs['track']['lineno']=497;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($and29=(function(){try{try{$pyjs['in_try_except'] += 1;
				return data['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_288_err){if (!$p['isinstance']($pyjs_dbg_288_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_288_err);}throw $pyjs_dbg_288_err;
}})()['__contains__']('values'))?(function(){try{try{$pyjs['in_try_except'] += 1;
				return data['__getitem__']('values')['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_289_err){if (!$p['isinstance']($pyjs_dbg_289_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_289_err);}throw $pyjs_dbg_289_err;
}})()['__contains__']('name'):$and29));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_290_err){if (!$p['isinstance']($pyjs_dbg_290_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_290_err);}throw $pyjs_dbg_290_err;
}})()) {
					$pyjs['track']['lineno']=498;
					spanMsg = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['html5']['Span']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_291_err){if (!$p['isinstance']($pyjs_dbg_291_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_291_err);}throw $pyjs_dbg_291_err;
}})();
					$pyjs['track']['lineno']=500;
					name = data['__getitem__']('values')['__getitem__']('name');
					$pyjs['track']['lineno']=501;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['isinstance'](name, $p['dict']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_292_err){if (!$p['isinstance']($pyjs_dbg_292_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_292_err);}throw $pyjs_dbg_292_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_293_err){if (!$p['isinstance']($pyjs_dbg_293_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_293_err);}throw $pyjs_dbg_293_err;
}})()) {
						$pyjs['track']['lineno']=502;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
						return name['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_294_err){if (!$p['isinstance']($pyjs_dbg_294_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_294_err);}throw $pyjs_dbg_294_err;
}})()['__contains__']($m['conf']['__getitem__']('currentlanguage')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_295_err){if (!$p['isinstance']($pyjs_dbg_295_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_295_err);}throw $pyjs_dbg_295_err;
}})()) {
							$pyjs['track']['lineno']=503;
							name = name['__getitem__']($m['conf']['__getitem__']('currentlanguage'));
						}
						else {
							$pyjs['track']['lineno']=505;
							name = (function(){try{try{$pyjs['in_try_except'] += 1;
							return name['values']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_296_err){if (!$p['isinstance']($pyjs_dbg_296_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_296_err);}throw $pyjs_dbg_296_err;
}})();
						}
					}
					$pyjs['track']['lineno']=507;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['isinstance'](name, $p['list']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_297_err){if (!$p['isinstance']($pyjs_dbg_297_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_297_err);}throw $pyjs_dbg_297_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_298_err){if (!$p['isinstance']($pyjs_dbg_298_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_298_err);}throw $pyjs_dbg_298_err;
}})()) {
						$pyjs['track']['lineno']=508;
						name = (function(){try{try{$pyjs['in_try_except'] += 1;
						return ', '['join'](name);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_299_err){if (!$p['isinstance']($pyjs_dbg_299_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_299_err);}throw $pyjs_dbg_299_err;
}})();
					}
					$pyjs['track']['lineno']=510;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return spanMsg['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['html5']['TextNode']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['str']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['html5']['utils']['unescape'](name);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_300_err){if (!$p['isinstance']($pyjs_dbg_300_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_300_err);}throw $pyjs_dbg_300_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_301_err){if (!$p['isinstance']($pyjs_dbg_301_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_301_err);}throw $pyjs_dbg_301_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_302_err){if (!$p['isinstance']($pyjs_dbg_302_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_302_err);}throw $pyjs_dbg_302_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_303_err){if (!$p['isinstance']($pyjs_dbg_303_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_303_err);}throw $pyjs_dbg_303_err;
}})();
					$pyjs['track']['lineno']=511;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return spanMsg['__getitem__']('class')['append']('namespan');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_304_err){if (!$p['isinstance']($pyjs_dbg_304_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_304_err);}throw $pyjs_dbg_304_err;
}})();
					$pyjs['track']['lineno']=512;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return logDiv['appendChild'](spanMsg);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_305_err){if (!$p['isinstance']($pyjs_dbg_305_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_305_err);}throw $pyjs_dbg_305_err;
}})();
				}
				$pyjs['track']['lineno']=514;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					try {
						$pyjs['in_try_except'] += 1;
						$pyjs['track']['lineno']=515;
						self['key'] = data['__getitem__']('values')['__getitem__']('key');
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
					$pyjs['track']['module']='widgets.edit';
					if (true) {
						$pyjs['track']['lineno']=517;
						self['key'] = null;
					}
				}
				$pyjs['track']['lineno']=519;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['conf']['__getitem__']('mainWindow')['log']('success', logDiv);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_306_err){if (!$p['isinstance']($pyjs_dbg_306_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_306_err);}throw $pyjs_dbg_306_err;
}})();
				$pyjs['track']['lineno']=521;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($and31=askHierarchyCloning)?$p['getattr'](self, 'clone'):$and31));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_307_err){if (!$p['isinstance']($pyjs_dbg_307_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_307_err);}throw $pyjs_dbg_307_err;
}})()) {
					$pyjs['track']['lineno']=523;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['bool']($and33=$p['op_eq']($p['getattr'](self, 'applicationType'), $p['getattr']($m['EditWidget'], 'appList')))?$m['conf']['__getitem__']('modules')['__getitem__']($p['getattr'](self, 'module'))['__contains__']('rootNodeOf'):$and33));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_308_err){if (!$p['isinstance']($pyjs_dbg_308_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_308_err);}throw $pyjs_dbg_308_err;
}})()) {
						$pyjs['track']['lineno']=524;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $pyjs_kwargs_call(null, $m['YesNoDialog'], null, null, [{'yesCallback':$p['getattr'](self, 'doCloneHierarchy'), 'noCallback':$p['getattr'](self, 'closeOrContinue')}, (function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['translate']('Do you want to clone the entire hierarchy?');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_309_err){if (!$p['isinstance']($pyjs_dbg_309_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_309_err);}throw $pyjs_dbg_309_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_310_err){if (!$p['isinstance']($pyjs_dbg_310_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_310_err);}throw $pyjs_dbg_310_err;
}})();
						$pyjs['track']['lineno']=526;
						$pyjs['track']['lineno']=526;
						var $pyjs__ret = null;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
					else if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_eq']($p['getattr'](self, 'applicationType'), $p['getattr']($m['EditWidget'], 'appHierarchy')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_311_err){if (!$p['isinstance']($pyjs_dbg_311_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_311_err);}throw $pyjs_dbg_311_err;
}})()) {
						$pyjs['track']['lineno']=529;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $pyjs_kwargs_call(null, $m['YesNoDialog'], null, null, [{'yesCallback':$p['getattr'](self, 'doCloneHierarchy'), 'noCallback':$p['getattr'](self, 'closeOrContinue')}, (function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['translate']('Do you want to clone all subentries of this item?');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_312_err){if (!$p['isinstance']($pyjs_dbg_312_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_312_err);}throw $pyjs_dbg_312_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_313_err){if (!$p['isinstance']($pyjs_dbg_313_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_313_err);}throw $pyjs_dbg_313_err;
}})();
						$pyjs['track']['lineno']=531;
						$pyjs['track']['lineno']=531;
						var $pyjs__ret = null;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
				}
				$pyjs['track']['lineno']=533;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['closeOrContinue']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_314_err){if (!$p['isinstance']($pyjs_dbg_314_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_314_err);}throw $pyjs_dbg_314_err;
}})();
				$pyjs['track']['lineno']=534;
				$pyjs['track']['lineno']=534;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=537;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['clear']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_315_err){if (!$p['isinstance']($pyjs_dbg_315_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_315_err);}throw $pyjs_dbg_315_err;
}})();
			$pyjs['track']['lineno']=538;
			self['bones'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_316_err){if (!$p['isinstance']($pyjs_dbg_316_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_316_err);}throw $pyjs_dbg_316_err;
}})();
			$pyjs['track']['lineno']=539;
			self['containers'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_317_err){if (!$p['isinstance']($pyjs_dbg_317_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_317_err);}throw $pyjs_dbg_317_err;
}})();
			$pyjs['track']['lineno']=540;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['actionbar']['resetLoadingState']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_318_err){if (!$p['isinstance']($pyjs_dbg_318_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_318_err);}throw $pyjs_dbg_318_err;
}})();
			$pyjs['track']['lineno']=541;
			self['dataCache'] = data;
			$pyjs['track']['lineno']=543;
			tmpDict = function(){
				var $iter14_array,$iter14_type,$collcomp5,$pyjs__trackstack_size_1,$iter14_iter,v,k,$iter14_idx,$iter14_nextval;
	$collcomp5 = $p['dict']();
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter14_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return data['__getitem__']('structure');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_320_err){if (!$p['isinstance']($pyjs_dbg_320_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_320_err);}throw $pyjs_dbg_320_err;
}})();
			$iter14_nextval=$p['__iter_prepare']($iter14_iter,false);
			while (typeof($p['__wrapped_next']($iter14_nextval)['$nextval']) != 'undefined') {
				var $tupleassign8 = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__ass_unpack']($iter14_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_319_err){if (!$p['isinstance']($pyjs_dbg_319_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_319_err);}throw $pyjs_dbg_319_err;
}})();
				k = $tupleassign8[0];
				v = $tupleassign8[1];
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $collcomp5['__setitem__'](k, v);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_321_err){if (!$p['isinstance']($pyjs_dbg_321_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_321_err);}throw $pyjs_dbg_321_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.edit';

	return $collcomp5;}();
			$pyjs['track']['lineno']=544;
			fieldSets = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_322_err){if (!$p['isinstance']($pyjs_dbg_322_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_322_err);}throw $pyjs_dbg_322_err;
}})();
			$pyjs['track']['lineno']=545;
			currRow = 0;
			$pyjs['track']['lineno']=546;
			hasMissing = false;
			$pyjs['track']['lineno']=547;
			defaultCat = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('modules')['__getitem__']($p['getattr'](self, 'module'))['get']('visibleName', $p['getattr'](self, 'module'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_323_err){if (!$p['isinstance']($pyjs_dbg_323_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_323_err);}throw $pyjs_dbg_323_err;
}})();
			$pyjs['track']['lineno']=549;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter15_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return data['__getitem__']('structure');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_325_err){if (!$p['isinstance']($pyjs_dbg_325_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_325_err);}throw $pyjs_dbg_325_err;
}})();
			$iter15_nextval=$p['__iter_prepare']($iter15_iter,false);
			while (typeof($p['__wrapped_next']($iter15_nextval)['$nextval']) != 'undefined') {
				var $tupleassign9 = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__ass_unpack']($iter15_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_324_err){if (!$p['isinstance']($pyjs_dbg_324_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_324_err);}throw $pyjs_dbg_324_err;
}})();
				key = $tupleassign9[0];
				bone = $tupleassign9[1];
				$pyjs['track']['lineno']=550;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool'](bone['__getitem__']('visible')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_326_err){if (!$p['isinstance']($pyjs_dbg_326_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_326_err);}throw $pyjs_dbg_326_err;
}})()) {
					$pyjs['track']['lineno']=551;
					continue;
				}
				$pyjs['track']['lineno']=553;
				cat = defaultCat;
				$pyjs['track']['lineno']=555;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($and35=(function(){try{try{$pyjs['in_try_except'] += 1;
				return bone['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_327_err){if (!$p['isinstance']($pyjs_dbg_327_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_327_err);}throw $pyjs_dbg_327_err;
}})()['__contains__']('params'))?($p['bool']($and36=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](bone['__getitem__']('params'), $p['dict']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_328_err){if (!$p['isinstance']($pyjs_dbg_328_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_328_err);}throw $pyjs_dbg_328_err;
}})())?(function(){try{try{$pyjs['in_try_except'] += 1;
				return bone['__getitem__']('params')['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_329_err){if (!$p['isinstance']($pyjs_dbg_329_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_329_err);}throw $pyjs_dbg_329_err;
}})()['__contains__']('category'):$and36):$and35));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_330_err){if (!$p['isinstance']($pyjs_dbg_330_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_330_err);}throw $pyjs_dbg_330_err;
}})()) {
					$pyjs['track']['lineno']=558;
					cat = bone['__getitem__']('params')['__getitem__']('category');
				}
				$pyjs['track']['lineno']=560;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return fieldSets['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_331_err){if (!$p['isinstance']($pyjs_dbg_331_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_331_err);}throw $pyjs_dbg_331_err;
}})()['__contains__'](cat)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_332_err){if (!$p['isinstance']($pyjs_dbg_332_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_332_err);}throw $pyjs_dbg_332_err;
}})()) {
					$pyjs['track']['lineno']=561;
					fs = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['html5']['Fieldset']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_333_err){if (!$p['isinstance']($pyjs_dbg_333_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_333_err);}throw $pyjs_dbg_333_err;
}})();
					$pyjs['track']['lineno']=562;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return fs['addClass'](($p['bool'](!$p['bool'](fieldSets))? ('active') : ('inactive')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_334_err){if (!$p['isinstance']($pyjs_dbg_334_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_334_err);}throw $pyjs_dbg_334_err;
}})();
					$pyjs['track']['lineno']=566;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return fs['__setitem__']('name', cat);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_335_err){if (!$p['isinstance']($pyjs_dbg_335_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_335_err);}throw $pyjs_dbg_335_err;
}})();
					$pyjs['track']['lineno']=567;
					legend = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['html5']['Legend']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_336_err){if (!$p['isinstance']($pyjs_dbg_336_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_336_err);}throw $pyjs_dbg_336_err;
}})();
					$pyjs['track']['lineno']=568;
					fshref = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (typeof fieldset_A == "undefined"?$m['fieldset_A']:fieldset_A)();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_337_err){if (!$p['isinstance']($pyjs_dbg_337_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_337_err);}throw $pyjs_dbg_337_err;
}})();
					$pyjs['track']['lineno']=569;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return fshref['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['html5']['TextNode'](cat);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_338_err){if (!$p['isinstance']($pyjs_dbg_338_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_338_err);}throw $pyjs_dbg_338_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_339_err){if (!$p['isinstance']($pyjs_dbg_339_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_339_err);}throw $pyjs_dbg_339_err;
}})();
					$pyjs['track']['lineno']=570;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return legend['appendChild'](fshref);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_340_err){if (!$p['isinstance']($pyjs_dbg_340_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_340_err);}throw $pyjs_dbg_340_err;
}})();
					$pyjs['track']['lineno']=571;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return fs['appendChild'](legend);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_341_err){if (!$p['isinstance']($pyjs_dbg_341_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_341_err);}throw $pyjs_dbg_341_err;
}})();
					$pyjs['track']['lineno']=572;
					section = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['html5']['Section']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_342_err){if (!$p['isinstance']($pyjs_dbg_342_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_342_err);}throw $pyjs_dbg_342_err;
}})();
					$pyjs['track']['lineno']=573;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return fs['appendChild'](section);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_343_err){if (!$p['isinstance']($pyjs_dbg_343_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_343_err);}throw $pyjs_dbg_343_err;
}})();
					$pyjs['track']['lineno']=574;
					fs['_section'] = section;
					$pyjs['track']['lineno']=575;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return fieldSets['__setitem__'](cat, fs);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_344_err){if (!$p['isinstance']($pyjs_dbg_344_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_344_err);}throw $pyjs_dbg_344_err;
}})();
				}
				$pyjs['track']['lineno']=577;
				wdgGen = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['editBoneSelector']['select']($p['getattr'](self, 'module'), key, tmpDict);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_345_err){if (!$p['isinstance']($pyjs_dbg_345_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_345_err);}throw $pyjs_dbg_345_err;
}})();
				$pyjs['track']['lineno']=578;
				widget = (function(){try{try{$pyjs['in_try_except'] += 1;
				return wdgGen['fromSkelStructure']($p['getattr'](self, 'module'), key, tmpDict);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_346_err){if (!$p['isinstance']($pyjs_dbg_346_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_346_err);}throw $pyjs_dbg_346_err;
}})();
				$pyjs['track']['lineno']=579;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return widget['__setitem__']('id', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('vi_%s_%s_%s_%s_bn_%s', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$p['getattr'](self, 'editIdx'), $p['getattr'](self, 'module'), $p['getattr'](self, 'mode'), cat, key]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_347_err){if (!$p['isinstance']($pyjs_dbg_347_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_347_err);}throw $pyjs_dbg_347_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_348_err){if (!$p['isinstance']($pyjs_dbg_348_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_348_err);}throw $pyjs_dbg_348_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_349_err){if (!$p['isinstance']($pyjs_dbg_349_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_349_err);}throw $pyjs_dbg_349_err;
}})();
				$pyjs['track']['lineno']=585;
				descrLbl = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Label'](($p['bool']($m['conf']['__getitem__']('showBoneNames'))? (key) : ((function(){try{try{$pyjs['in_try_except'] += 1;
				return bone['get']('descr', key);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_350_err){if (!$p['isinstance']($pyjs_dbg_350_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_350_err);}throw $pyjs_dbg_350_err;
}})())));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_351_err){if (!$p['isinstance']($pyjs_dbg_351_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_351_err);}throw $pyjs_dbg_351_err;
}})();
				$pyjs['track']['lineno']=586;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return descrLbl['__getitem__']('class')['append'](key);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_352_err){if (!$p['isinstance']($pyjs_dbg_352_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_352_err);}throw $pyjs_dbg_352_err;
}})();
				$pyjs['track']['lineno']=587;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return descrLbl['__getitem__']('class')['append']((function(){try{try{$pyjs['in_try_except'] += 1;
				return bone['__getitem__']('type')['$$replace']('.', '_');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_353_err){if (!$p['isinstance']($pyjs_dbg_353_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_353_err);}throw $pyjs_dbg_353_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_354_err){if (!$p['isinstance']($pyjs_dbg_354_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_354_err);}throw $pyjs_dbg_354_err;
}})();
				$pyjs['track']['lineno']=588;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return descrLbl['__setitem__']('for', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('vi_%s_%s_%s_%s_bn_%s', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$p['getattr'](self, 'editIdx'), $p['getattr'](self, 'module'), $p['getattr'](self, 'mode'), cat, key]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_355_err){if (!$p['isinstance']($pyjs_dbg_355_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_355_err);}throw $pyjs_dbg_355_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_356_err){if (!$p['isinstance']($pyjs_dbg_356_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_356_err);}throw $pyjs_dbg_356_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_357_err){if (!$p['isinstance']($pyjs_dbg_357_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_357_err);}throw $pyjs_dbg_357_err;
}})();
				$pyjs['track']['lineno']=589;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['printFunc']([(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([key, bone['__getitem__']('required'), bone['__getitem__']('error')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_358_err){if (!$p['isinstance']($pyjs_dbg_358_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_358_err);}throw $pyjs_dbg_358_err;
}})()], 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_359_err){if (!$p['isinstance']($pyjs_dbg_359_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_359_err);}throw $pyjs_dbg_359_err;
}})();
				$pyjs['track']['lineno']=590;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](bone['__getitem__']('required'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_360_err){if (!$p['isinstance']($pyjs_dbg_360_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_360_err);}throw $pyjs_dbg_360_err;
}})()) {
					$pyjs['track']['lineno']=591;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return descrLbl['__getitem__']('class')['append']('is_required');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_361_err){if (!$p['isinstance']($pyjs_dbg_361_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_361_err);}throw $pyjs_dbg_361_err;
}})();
					$pyjs['track']['lineno']=593;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((bone['__getitem__']('error') !== null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_362_err){if (!$p['isinstance']($pyjs_dbg_362_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_362_err);}throw $pyjs_dbg_362_err;
}})()) {
						$pyjs['track']['lineno']=594;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return descrLbl['__getitem__']('class')['append']('is_invalid');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_363_err){if (!$p['isinstance']($pyjs_dbg_363_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_363_err);}throw $pyjs_dbg_363_err;
}})();
						$pyjs['track']['lineno']=595;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return descrLbl['__setitem__']('title', bone['__getitem__']('error'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_364_err){if (!$p['isinstance']($pyjs_dbg_364_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_364_err);}throw $pyjs_dbg_364_err;
}})();
						$pyjs['track']['lineno']=596;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return fieldSets['__getitem__'](cat)['__getitem__']('class')['append']('is_incomplete');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_365_err){if (!$p['isinstance']($pyjs_dbg_365_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_365_err);}throw $pyjs_dbg_365_err;
}})();
						$pyjs['track']['lineno']=597;
						hasMissing = true;
					}
					else if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['bool']($and38=(bone['__getitem__']('error') === null))?!$p['bool']($p['getattr'](self, 'wasInitialRequest')):$and38));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_366_err){if (!$p['isinstance']($pyjs_dbg_366_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_366_err);}throw $pyjs_dbg_366_err;
}})()) {
						$pyjs['track']['lineno']=599;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return descrLbl['__getitem__']('class')['append']('is_valid');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_367_err){if (!$p['isinstance']($pyjs_dbg_367_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_367_err);}throw $pyjs_dbg_367_err;
}})();
					}
				}
				$pyjs['track']['lineno']=601;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](bone['__getitem__']('error'), $p['dict']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_368_err){if (!$p['isinstance']($pyjs_dbg_368_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_368_err);}throw $pyjs_dbg_368_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_369_err){if (!$p['isinstance']($pyjs_dbg_369_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_369_err);}throw $pyjs_dbg_369_err;
}})()) {
					$pyjs['track']['lineno']=602;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return widget['setExtendedErrorInformation'](bone['__getitem__']('error'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_370_err){if (!$p['isinstance']($pyjs_dbg_370_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_370_err);}throw $pyjs_dbg_370_err;
}})();
				}
				$pyjs['track']['lineno']=604;
				containerDiv = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Div']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_371_err){if (!$p['isinstance']($pyjs_dbg_371_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_371_err);}throw $pyjs_dbg_371_err;
}})();
				$pyjs['track']['lineno']=605;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return containerDiv['appendChild'](descrLbl);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_372_err){if (!$p['isinstance']($pyjs_dbg_372_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_372_err);}throw $pyjs_dbg_372_err;
}})();
				$pyjs['track']['lineno']=606;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return containerDiv['appendChild'](widget);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_373_err){if (!$p['isinstance']($pyjs_dbg_373_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_373_err);}throw $pyjs_dbg_373_err;
}})();
				$pyjs['track']['lineno']=608;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($and40=(function(){try{try{$pyjs['in_try_except'] += 1;
				return bone['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_374_err){if (!$p['isinstance']($pyjs_dbg_374_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_374_err);}throw $pyjs_dbg_374_err;
}})()['__contains__']('params'))?($p['bool']($and41=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](bone['__getitem__']('params'), $p['dict']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_375_err){if (!$p['isinstance']($pyjs_dbg_375_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_375_err);}throw $pyjs_dbg_375_err;
}})())?(function(){try{try{$pyjs['in_try_except'] += 1;
				return bone['__getitem__']('params')['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_376_err){if (!$p['isinstance']($pyjs_dbg_376_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_376_err);}throw $pyjs_dbg_376_err;
}})()['__contains__']('tooltip'):$and41):$and40));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_377_err){if (!$p['isinstance']($pyjs_dbg_377_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_377_err);}throw $pyjs_dbg_377_err;
}})()) {
					$pyjs['track']['lineno']=611;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return containerDiv['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $pyjs_kwargs_call(null, $m['ToolTip'], null, null, [{'longText':bone['__getitem__']('params')['__getitem__']('tooltip')}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_378_err){if (!$p['isinstance']($pyjs_dbg_378_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_378_err);}throw $pyjs_dbg_378_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_379_err){if (!$p['isinstance']($pyjs_dbg_379_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_379_err);}throw $pyjs_dbg_379_err;
}})();
				}
				$pyjs['track']['lineno']=613;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return fieldSets['__getitem__'](cat)['_section']['appendChild'](containerDiv);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_380_err){if (!$p['isinstance']($pyjs_dbg_380_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_380_err);}throw $pyjs_dbg_380_err;
}})();
				$pyjs['track']['lineno']=614;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return containerDiv['addClass']('bone', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('bone_%s', key);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_381_err){if (!$p['isinstance']($pyjs_dbg_381_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_381_err);}throw $pyjs_dbg_381_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
				return bone['__getitem__']('type')['$$replace']('.', '_');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_382_err){if (!$p['isinstance']($pyjs_dbg_382_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_382_err);}throw $pyjs_dbg_382_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_383_err){if (!$p['isinstance']($pyjs_dbg_383_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_383_err);}throw $pyjs_dbg_383_err;
}})();
				$pyjs['track']['lineno']=616;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](bone['__getitem__']('type')['__contains__']('.'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_384_err){if (!$p['isinstance']($pyjs_dbg_384_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_384_err);}throw $pyjs_dbg_384_err;
}})()) {
					$pyjs['track']['lineno']=617;
					$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
					$iter16_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return bone['__getitem__']('type')['$$split']('.');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_385_err){if (!$p['isinstance']($pyjs_dbg_385_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_385_err);}throw $pyjs_dbg_385_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_386_err){if (!$p['isinstance']($pyjs_dbg_386_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_386_err);}throw $pyjs_dbg_386_err;
}})();
					$iter16_nextval=$p['__iter_prepare']($iter16_iter,false);
					while (typeof($p['__wrapped_next']($iter16_nextval)['$nextval']) != 'undefined') {
						t = $iter16_nextval['$nextval'];
						$pyjs['track']['lineno']=618;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return containerDiv['__getitem__']('class')['append'](t);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_387_err){if (!$p['isinstance']($pyjs_dbg_387_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_387_err);}throw $pyjs_dbg_387_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='widgets.edit';
				}
				$pyjs['track']['lineno']=620;
				currRow = $p['__op_add']($add7=currRow,$add8=1);
				$pyjs['track']['lineno']=621;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'bones')['__setitem__'](key, widget);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_388_err){if (!$p['isinstance']($pyjs_dbg_388_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_388_err);}throw $pyjs_dbg_388_err;
}})();
				$pyjs['track']['lineno']=622;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'containers')['__setitem__'](key, containerDiv);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_389_err){if (!$p['isinstance']($pyjs_dbg_389_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_389_err);}throw $pyjs_dbg_389_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.edit';
			$pyjs['track']['lineno']=624;
			tmpList = function(){
				var $iter17_nextval,$iter17_iter,$collcomp6,k,v,$iter17_array,$iter17_type,$iter17_idx,$pyjs__trackstack_size_1;
	$collcomp6 = $p['list']();
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter17_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return fieldSets['items']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_391_err){if (!$p['isinstance']($pyjs_dbg_391_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_391_err);}throw $pyjs_dbg_391_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_392_err){if (!$p['isinstance']($pyjs_dbg_392_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_392_err);}throw $pyjs_dbg_392_err;
}})();
			$iter17_nextval=$p['__iter_prepare']($iter17_iter,false);
			while (typeof($p['__wrapped_next']($iter17_nextval)['$nextval']) != 'undefined') {
				var $tupleassign10 = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__ass_unpack']($iter17_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_390_err){if (!$p['isinstance']($pyjs_dbg_390_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_390_err);}throw $pyjs_dbg_390_err;
}})();
				k = $tupleassign10[0];
				v = $tupleassign10[1];
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $collcomp6['append']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([k, v]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_393_err){if (!$p['isinstance']($pyjs_dbg_393_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_393_err);}throw $pyjs_dbg_393_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_394_err){if (!$p['isinstance']($pyjs_dbg_394_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_394_err);}throw $pyjs_dbg_394_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.edit';

	return $collcomp6;}();
			$pyjs['track']['lineno']=625;
			var 			$lambda2 = function(x) {

				$pyjs['track']={'module':'widgets.edit','lineno':625};$pyjs['trackstack']['push']($pyjs['track']);
				$pyjs['track']['module']='widgets.edit';
				$pyjs['track']['lineno']=625;
				$pyjs['track']['lineno']=625;
				$pyjs['track']['lineno']=625;
				var $pyjs__ret = x['__getitem__'](0);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			};
			$lambda2['__name__'] = '$lambda2';

			$lambda2['__bind_type__'] = 0;
			$lambda2['__args__'] = [null,null,['x']];
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(tmpList, 'sort', null, null, [{'key':$lambda2}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_395_err){if (!$p['isinstance']($pyjs_dbg_395_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_395_err);}throw $pyjs_dbg_395_err;
}})();
			$pyjs['track']['lineno']=627;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter18_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return tmpList;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_397_err){if (!$p['isinstance']($pyjs_dbg_397_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_397_err);}throw $pyjs_dbg_397_err;
}})();
			$iter18_nextval=$p['__iter_prepare']($iter18_iter,false);
			while (typeof($p['__wrapped_next']($iter18_nextval)['$nextval']) != 'undefined') {
				var $tupleassign11 = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__ass_unpack']($iter18_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_396_err){if (!$p['isinstance']($pyjs_dbg_396_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_396_err);}throw $pyjs_dbg_396_err;
}})();
				k = $tupleassign11[0];
				v = $tupleassign11[1];
				$pyjs['track']['lineno']=628;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['form']['appendChild'](v);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_398_err){if (!$p['isinstance']($pyjs_dbg_398_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_398_err);}throw $pyjs_dbg_398_err;
}})();
				$pyjs['track']['lineno']=629;
				v['_section'] = null;
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.edit';
			$pyjs['track']['lineno']=631;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['unserialize'](data['__getitem__']('values'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_399_err){if (!$p['isinstance']($pyjs_dbg_399_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_399_err);}throw $pyjs_dbg_399_err;
}})();
			$pyjs['track']['lineno']=633;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, '_hashArgs'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_400_err){if (!$p['isinstance']($pyjs_dbg_400_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_400_err);}throw $pyjs_dbg_400_err;
}})()) {
				$pyjs['track']['lineno']=634;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['unserialize']($p['getattr'](self, '_hashArgs'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_401_err){if (!$p['isinstance']($pyjs_dbg_401_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_401_err);}throw $pyjs_dbg_401_err;
}})();
				$pyjs['track']['lineno']=635;
				self['_hashArgs'] = null;
			}
			$pyjs['track']['lineno']=637;
			self['_lastData'] = data;
			$pyjs['track']['lineno']=639;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and43=hasMissing)?!$p['bool']($p['getattr'](self, 'wasInitialRequest')):$and43));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_402_err){if (!$p['isinstance']($pyjs_dbg_402_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_402_err);}throw $pyjs_dbg_402_err;
}})()) {
				$pyjs['track']['lineno']=640;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['conf']['__getitem__']('mainWindow')['log']('warning', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['translate']('Could not save entry!');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_403_err){if (!$p['isinstance']($pyjs_dbg_403_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_403_err);}throw $pyjs_dbg_403_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_404_err){if (!$p['isinstance']($pyjs_dbg_404_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_404_err);}throw $pyjs_dbg_404_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['request', null],['data', null],['ignoreMissing', false],['askHierarchyCloning', true]]);
		$cls_definition['setData'] = $method;
		$pyjs['track']['lineno']=642;
		$method = $pyjs__bind_method2('unserialize', function(data) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}
			var $iter19_idx,$iter19_array,$iter19_iter,$iter19_nextval,$iter19_type,$pyjs__trackstack_size_1,bone;
			$pyjs['track']={'module':'widgets.edit', 'lineno':642};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.edit';
			$pyjs['track']['lineno']=642;
			$pyjs['track']['lineno']=646;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter19_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['bones']['values']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_405_err){if (!$p['isinstance']($pyjs_dbg_405_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_405_err);}throw $pyjs_dbg_405_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_406_err){if (!$p['isinstance']($pyjs_dbg_406_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_406_err);}throw $pyjs_dbg_406_err;
}})();
			$iter19_nextval=$p['__iter_prepare']($iter19_iter,false);
			while (typeof($p['__wrapped_next']($iter19_nextval)['$nextval']) != 'undefined') {
				bone = $iter19_nextval['$nextval'];
				$pyjs['track']['lineno']=647;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return bone['unserialize'](data);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_407_err){if (!$p['isinstance']($pyjs_dbg_407_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_407_err);}throw $pyjs_dbg_407_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.edit';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['data']]);
		$cls_definition['unserialize'] = $method;
		$pyjs['track']['lineno']=649;
		$method = $pyjs__bind_method2('doSave', function(closeOnSuccess) {
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
				closeOnSuccess = arguments[1];
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
				if (typeof closeOnSuccess != 'undefined') {
					if (closeOnSuccess !== null && typeof closeOnSuccess['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = closeOnSuccess;
						closeOnSuccess = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}
			if (typeof closeOnSuccess == 'undefined') closeOnSuccess=arguments['callee']['__args__'][3][1];
			var $iter20_iter,$iter20_nextval,$iter20_type,key,res,$pyjs_try_err,$iter20_idx,$pyjs__trackstack_size_1,lbl,bone,$iter20_array;
			$pyjs['track']={'module':'widgets.edit', 'lineno':649};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.edit';
			$pyjs['track']['lineno']=649;
			$pyjs['track']['lineno']=653;
			self['closeOnSuccess'] = closeOnSuccess;
			$pyjs['track']['lineno']=654;
			res = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_408_err){if (!$p['isinstance']($pyjs_dbg_408_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_408_err);}throw $pyjs_dbg_408_err;
}})();
			$pyjs['track']['lineno']=655;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter20_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['bones']['items']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_410_err){if (!$p['isinstance']($pyjs_dbg_410_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_410_err);}throw $pyjs_dbg_410_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_411_err){if (!$p['isinstance']($pyjs_dbg_411_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_411_err);}throw $pyjs_dbg_411_err;
}})();
			$iter20_nextval=$p['__iter_prepare']($iter20_iter,false);
			while (typeof($p['__wrapped_next']($iter20_nextval)['$nextval']) != 'undefined') {
				var $tupleassign12 = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__ass_unpack']($iter20_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_409_err){if (!$p['isinstance']($pyjs_dbg_409_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_409_err);}throw $pyjs_dbg_409_err;
}})();
				key = $tupleassign12[0];
				bone = $tupleassign12[1];
				$pyjs['track']['lineno']=656;
				var $pyjs__trackstack_size_2 = $pyjs['trackstack']['length'];
				try {
					try {
						$pyjs['in_try_except'] += 1;
						$pyjs['track']['lineno']=657;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return res['update']((function(){try{try{$pyjs['in_try_except'] += 1;
						return bone['serializeForPost']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_412_err){if (!$p['isinstance']($pyjs_dbg_412_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_412_err);}throw $pyjs_dbg_412_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_413_err){if (!$p['isinstance']($pyjs_dbg_413_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_413_err);}throw $pyjs_dbg_413_err;
}})();
					} finally { $pyjs['in_try_except'] -= 1; }
				} catch($pyjs_try_err) {
					$pyjs['__last_exception_stack__'] = sys['save_exception_stack']($pyjs__trackstack_size_2 - 1);
					$pyjs['__active_exception_stack__'] = null;
					var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
					$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='widgets.edit';
					if (($pyjs_try_err_name == $m['InvalidBoneValueException']['__name__'])||$p['_isinstance']($pyjs_try_err,$m['InvalidBoneValueException'])) {
						$pyjs['track']['lineno']=660;
						lbl = $p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
						return bone['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_414_err){if (!$p['isinstance']($pyjs_dbg_414_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_414_err);}throw $pyjs_dbg_414_err;
}})(), '_children')['__getitem__'](0);
						$pyjs['track']['lineno']=661;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](lbl['__getitem__']('class')['__contains__']('is_valid'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_415_err){if (!$p['isinstance']($pyjs_dbg_415_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_415_err);}throw $pyjs_dbg_415_err;
}})()) {
							$pyjs['track']['lineno']=662;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return lbl['__getitem__']('class')['remove']('is_valid');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_416_err){if (!$p['isinstance']($pyjs_dbg_416_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_416_err);}throw $pyjs_dbg_416_err;
}})();
						}
						$pyjs['track']['lineno']=663;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return lbl['__getitem__']('class')['append']('is_invalid');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_417_err){if (!$p['isinstance']($pyjs_dbg_417_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_417_err);}throw $pyjs_dbg_417_err;
}})();
						$pyjs['track']['lineno']=664;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return self['actionbar']['resetLoadingState']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_418_err){if (!$p['isinstance']($pyjs_dbg_418_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_418_err);}throw $pyjs_dbg_418_err;
}})();
						$pyjs['track']['lineno']=665;
						$pyjs['track']['lineno']=665;
						var $pyjs__ret = null;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.edit';
			$pyjs['track']['lineno']=666;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['save'](res);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_419_err){if (!$p['isinstance']($pyjs_dbg_419_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_419_err);}throw $pyjs_dbg_419_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['closeOnSuccess', false]]);
		$cls_definition['doSave'] = $method;
		$pyjs['track']['lineno']=233;
		var $bases = new Array($p['getattr']($m['html5'], 'Div'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('EditWidget', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=668;
	$m['fieldset_A'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.edit';
		$pyjs['track']['lineno']=669;
		$cls_definition['_baseClass'] = 'a';
		$pyjs['track']['lineno']=671;
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

			$pyjs['track']={'module':'widgets.edit', 'lineno':671};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.edit';
			$pyjs['track']['lineno']=671;
			$pyjs['track']['lineno']=672;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['fieldset_A'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_420_err){if (!$p['isinstance']($pyjs_dbg_420_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_420_err);}throw $pyjs_dbg_420_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_421_err){if (!$p['isinstance']($pyjs_dbg_421_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_421_err);}throw $pyjs_dbg_421_err;
}})();
			$pyjs['track']['lineno']=673;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['sinkEvent']('onClick');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_422_err){if (!$p['isinstance']($pyjs_dbg_422_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_422_err);}throw $pyjs_dbg_422_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=675;
		$method = $pyjs__bind_method2('onClick', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $iter22_array,$iter21_idx,$and46,$and49,$and48,$and45,$iter21_nextval,$iter22_nextval,$iter22_idx,element,$iter21_type,$iter21_iter,sube,$pyjs__trackstack_size_2,$iter22_type,$iter21_array,$pyjs__trackstack_size_1,$and47,$iter22_iter;
			$pyjs['track']={'module':'widgets.edit', 'lineno':675};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.edit';
			$pyjs['track']['lineno']=675;
			$pyjs['track']['lineno']=676;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter21_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_423_err){if (!$p['isinstance']($pyjs_dbg_423_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_423_err);}throw $pyjs_dbg_423_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_424_err){if (!$p['isinstance']($pyjs_dbg_424_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_424_err);}throw $pyjs_dbg_424_err;
}})()['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_425_err){if (!$p['isinstance']($pyjs_dbg_425_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_425_err);}throw $pyjs_dbg_425_err;
}})(), '_children');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_426_err){if (!$p['isinstance']($pyjs_dbg_426_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_426_err);}throw $pyjs_dbg_426_err;
}})();
			$iter21_nextval=$p['__iter_prepare']($iter21_iter,false);
			while (typeof($p['__wrapped_next']($iter21_nextval)['$nextval']) != 'undefined') {
				element = $iter21_nextval['$nextval'];
				$pyjs['track']['lineno']=677;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](element, $m['Fieldset']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_427_err){if (!$p['isinstance']($pyjs_dbg_427_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_427_err);}throw $pyjs_dbg_427_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_428_err){if (!$p['isinstance']($pyjs_dbg_428_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_428_err);}throw $pyjs_dbg_428_err;
}})()) {
					$pyjs['track']['lineno']=678;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['html5']['utils']['doesEventHitWidgetOrChildren'](event, element);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_429_err){if (!$p['isinstance']($pyjs_dbg_429_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_429_err);}throw $pyjs_dbg_429_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_430_err){if (!$p['isinstance']($pyjs_dbg_430_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_430_err);}throw $pyjs_dbg_430_err;
}})()) {
						$pyjs['track']['lineno']=679;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](!$p['bool'](element['__getitem__']('class')['__contains__']('active')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_431_err){if (!$p['isinstance']($pyjs_dbg_431_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_431_err);}throw $pyjs_dbg_431_err;
}})()) {
							$pyjs['track']['lineno']=680;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return element['__getitem__']('class')['append']('active');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_432_err){if (!$p['isinstance']($pyjs_dbg_432_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_432_err);}throw $pyjs_dbg_432_err;
}})();
							$pyjs['track']['lineno']=681;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return element['__getitem__']('class')['remove']('inactive');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_433_err){if (!$p['isinstance']($pyjs_dbg_433_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_433_err);}throw $pyjs_dbg_433_err;
}})();
						}
						else {
							$pyjs['track']['lineno']=683;
							if ((function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['bool'](!$p['bool'](element['__getitem__']('class')['__contains__']('inactive')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_434_err){if (!$p['isinstance']($pyjs_dbg_434_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_434_err);}throw $pyjs_dbg_434_err;
}})()) {
								$pyjs['track']['lineno']=684;
								(function(){try{try{$pyjs['in_try_except'] += 1;
								return element['__getitem__']('class')['append']('inactive');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_435_err){if (!$p['isinstance']($pyjs_dbg_435_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_435_err);}throw $pyjs_dbg_435_err;
}})();
							}
							$pyjs['track']['lineno']=685;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return element['__getitem__']('class')['remove']('active');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_436_err){if (!$p['isinstance']($pyjs_dbg_436_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_436_err);}throw $pyjs_dbg_436_err;
}})();
						}
					}
					else {
						$pyjs['track']['lineno']=687;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](($p['bool']($and45=!$p['bool'](element['__getitem__']('class')['__contains__']('inactive')))?(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['isinstance'](element, $m['fieldset_A']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_437_err){if (!$p['isinstance']($pyjs_dbg_437_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_437_err);}throw $pyjs_dbg_437_err;
}})():$and45));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_438_err){if (!$p['isinstance']($pyjs_dbg_438_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_438_err);}throw $pyjs_dbg_438_err;
}})()) {
							$pyjs['track']['lineno']=688;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return element['__getitem__']('class')['append']('inactive');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_439_err){if (!$p['isinstance']($pyjs_dbg_439_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_439_err);}throw $pyjs_dbg_439_err;
}})();
						}
						$pyjs['track']['lineno']=689;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return element['__getitem__']('class')['remove']('active');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_440_err){if (!$p['isinstance']($pyjs_dbg_440_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_440_err);}throw $pyjs_dbg_440_err;
}})();
						$pyjs['track']['lineno']=690;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](($p['bool']($and47=($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['len']($p['getattr'](element, '_children'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_441_err){if (!$p['isinstance']($pyjs_dbg_441_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_441_err);}throw $pyjs_dbg_441_err;
}})(), 0) == 1))?($p['bool']($and48=(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['isinstance'](element, $m['fieldset_A']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_442_err){if (!$p['isinstance']($pyjs_dbg_442_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_442_err);}throw $pyjs_dbg_442_err;
}})())?(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['hasattr']($p['getattr'](element, '_children')['__getitem__'](1), '_children');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_443_err){if (!$p['isinstance']($pyjs_dbg_443_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_443_err);}throw $pyjs_dbg_443_err;
}})():$and48):$and47));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_444_err){if (!$p['isinstance']($pyjs_dbg_444_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_444_err);}throw $pyjs_dbg_444_err;
}})()) {
							$pyjs['track']['lineno']=691;
							$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
							$iter22_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['getattr']($p['getattr'](element, '_children')['__getitem__'](1), '_children');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_445_err){if (!$p['isinstance']($pyjs_dbg_445_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_445_err);}throw $pyjs_dbg_445_err;
}})();
							$iter22_nextval=$p['__iter_prepare']($iter22_iter,false);
							while (typeof($p['__wrapped_next']($iter22_nextval)['$nextval']) != 'undefined') {
								sube = $iter22_nextval['$nextval'];
								$pyjs['track']['lineno']=692;
								if ((function(){try{try{$pyjs['in_try_except'] += 1;
									return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['isinstance'](sube, $m['fieldset_A']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_446_err){if (!$p['isinstance']($pyjs_dbg_446_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_446_err);}throw $pyjs_dbg_446_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_447_err){if (!$p['isinstance']($pyjs_dbg_447_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_447_err);}throw $pyjs_dbg_447_err;
}})()) {
									$pyjs['track']['lineno']=693;
									if ((function(){try{try{$pyjs['in_try_except'] += 1;
										return $p['bool'](!$p['bool'](sube['__getitem__']('class')['__contains__']('inactive')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_448_err){if (!$p['isinstance']($pyjs_dbg_448_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_448_err);}throw $pyjs_dbg_448_err;
}})()) {
										$pyjs['track']['lineno']=694;
										(function(){try{try{$pyjs['in_try_except'] += 1;
										return $p['getattr'](sube, 'parent')['__getitem__']('class')['append']('inactive');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_449_err){if (!$p['isinstance']($pyjs_dbg_449_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_449_err);}throw $pyjs_dbg_449_err;
}})();
									}
									$pyjs['track']['lineno']=695;
									(function(){try{try{$pyjs['in_try_except'] += 1;
									return sube['__getitem__']('class')['remove']('active');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_450_err){if (!$p['isinstance']($pyjs_dbg_450_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_450_err);}throw $pyjs_dbg_450_err;
}})();
								}
							}
							if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
								$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
								$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
							}
							$pyjs['track']['module']='widgets.edit';
						}
					}
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.edit';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=668;
		var $bases = new Array($m['A']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('fieldset_A', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end widgets.edit */


/* end module: widgets.edit */


/*
PYJS_DEPS: ['html5', 'utils', 'html5.a.A', 'html5.a', 'html5.form.Fieldset', 'html5.form', 'html5.ext.YesNoDialog', 'html5.ext', 'network.NetworkService', 'network', 'config.conf', 'config', 'priorityqueue.editBoneSelector', 'priorityqueue', 'widgets.tooltip.ToolTip', 'widgets', 'widgets.tooltip', 'widgets.actionbar.ActionBar', 'widgets.actionbar', 'i18n.translate', 'i18n']
*/
