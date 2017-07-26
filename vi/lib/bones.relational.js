/* start module: bones.relational */
$pyjs['loaded_modules']['bones.relational'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['bones.relational']['__was_initialized__']) return $pyjs['loaded_modules']['bones.relational'];
	if(typeof $pyjs['loaded_modules']['bones'] == 'undefined' || !$pyjs['loaded_modules']['bones']['__was_initialized__']) $p['___import___']('bones', null);
	var $m = $pyjs['loaded_modules']['bones.relational'];
	$m['__repr__'] = function() { return '<module: bones.relational>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'bones.relational';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['bones']['relational'] = $pyjs['loaded_modules']['bones.relational'];
	$m.__track_lines__[1] = 'bones.relational.py, line 1:\n    # -*- coding: utf-8 -*-';
	$m.__track_lines__[2] = 'bones.relational.py, line 2:\n    import html5, json, utils';
	$m.__track_lines__[3] = 'bones.relational.py, line 3:\n    from priorityqueue import editBoneSelector, viewDelegateSelector, extendedSearchWidgetSelector, extractorDelegateSelector';
	$m.__track_lines__[4] = 'bones.relational.py, line 4:\n    from event import EventDispatcher';
	$m.__track_lines__[5] = 'bones.relational.py, line 5:\n    from widgets.list import ListWidget';
	$m.__track_lines__[6] = 'bones.relational.py, line 6:\n    from widgets.edit import InternalEdit, EditWidget';
	$m.__track_lines__[7] = 'bones.relational.py, line 7:\n    from config import conf';
	$m.__track_lines__[8] = 'bones.relational.py, line 8:\n    from i18n import translate';
	$m.__track_lines__[9] = 'bones.relational.py, line 9:\n    from network import NetworkService';
	$m.__track_lines__[10] = 'bones.relational.py, line 10:\n    from pane import Pane';
	$m.__track_lines__[11] = 'bones.relational.py, line 11:\n    from bones.base import BaseBoneExtractor';
	$m.__track_lines__[13] = 'bones.relational.py, line 13:\n    def getDefaultValues(structure):';
	$m.__track_lines__[14] = 'bones.relational.py, line 14:\n    defaultValues = {}';
	$m.__track_lines__[15] = 'bones.relational.py, line 15:\n    for k, v in {k: v for k, v in structure}.items():';
	$m.__track_lines__[16] = 'bones.relational.py, line 16:\n    if "params" in v.keys() and v["params"] and "defaultValue" in v["params"].keys():';
	$m.__track_lines__[17] = 'bones.relational.py, line 17:\n    defaultValues[k] = v["params"]["defaultValue"]';
	$m.__track_lines__[19] = 'bones.relational.py, line 19:\n    return defaultValues';
	$m.__track_lines__[21] = 'bones.relational.py, line 21:\n    class RelationalBoneExtractor(BaseBoneExtractor):';
	$m.__track_lines__[22] = 'bones.relational.py, line 22:\n    def __init__(self, module, boneName, structure):';
	$m.__track_lines__[23] = 'bones.relational.py, line 23:\n    super(RelationalBoneExtractor, self).__init__(module, boneName, structure)';
	$m.__track_lines__[24] = 'bones.relational.py, line 24:\n    self.format = "$(dest.name)"';
	$m.__track_lines__[26] = 'bones.relational.py, line 26:\n    if "format" in structure[boneName].keys():';
	$m.__track_lines__[27] = 'bones.relational.py, line 27:\n    self.format = structure[boneName]["format"]';
	$m.__track_lines__[29] = 'bones.relational.py, line 29:\n    def render(self, data, field ):';
	$m.__track_lines__[30] = 'bones.relational.py, line 30:\n    assert field == self.boneName, "render() was called with field %s, expected %s" % (field, self.boneName)';
	$m.__track_lines__[32] = 'bones.relational.py, line 32:\n    if field in data.keys():';
	$m.__track_lines__[33] = 'bones.relational.py, line 33:\n    val = data[field]';
	$m.__track_lines__[35] = 'bones.relational.py, line 35:\n    val = ""';
	$m.__track_lines__[37] = 'bones.relational.py, line 37:\n    structure = self.structure[self.boneName]';
	$m.__track_lines__[39] = 'bones.relational.py, line 39:\n    try:';
	$m.__track_lines__[40] = 'bones.relational.py, line 40:\n    if not isinstance(val, list):';
	$m.__track_lines__[41] = 'bones.relational.py, line 41:\n    val = [val]';
	$m.__track_lines__[43] = 'bones.relational.py, line 43:\n    val = ", ".join([(utils.formatString(';
	$m.__track_lines__[51] = 'bones.relational.py, line 51:\n    print("Cannot build relational format, maybe garbage received?")';
	$m.__track_lines__[52] = 'bones.relational.py, line 52:\n    print(val)';
	$m.__track_lines__[53] = 'bones.relational.py, line 53:\n    val = ""';
	$m.__track_lines__[55] = 'bones.relational.py, line 55:\n    return val';
	$m.__track_lines__[57] = 'bones.relational.py, line 57:\n    def raw(self, data, field):';
	$m.__track_lines__[58] = 'bones.relational.py, line 58:\n    assert field == self.boneName, "render() was called with field %s, expected %s" % (field, self.boneName)';
	$m.__track_lines__[60] = 'bones.relational.py, line 60:\n    if not field in data.keys():';
	$m.__track_lines__[61] = 'bones.relational.py, line 61:\n    return None';
	$m.__track_lines__[63] = 'bones.relational.py, line 63:\n    val = data[field]';
	$m.__track_lines__[64] = 'bones.relational.py, line 64:\n    structure = self.skelStructure[self.boneName]';
	$m.__track_lines__[66] = 'bones.relational.py, line 66:\n    try:';
	$m.__track_lines__[67] = 'bones.relational.py, line 67:\n    if not isinstance(val, list):';
	$m.__track_lines__[68] = 'bones.relational.py, line 68:\n    val = [val]';
	$m.__track_lines__[70] = 'bones.relational.py, line 70:\n    val = [(utils.formatString(';
	$m.__track_lines__[78] = 'bones.relational.py, line 78:\n    print("Cannot build relational format, maybe garbage received?")';
	$m.__track_lines__[79] = 'bones.relational.py, line 79:\n    print(val)';
	$m.__track_lines__[80] = 'bones.relational.py, line 80:\n    return None';
	$m.__track_lines__[82] = 'bones.relational.py, line 82:\n    return val[0] if len(val) == 1 else val';
	$m.__track_lines__[84] = 'bones.relational.py, line 84:\n    class RelationalViewBoneDelegate(object):';
	$m.__track_lines__[86] = 'bones.relational.py, line 86:\n    def __init__(self, module, boneName, structure):';
	$m.__track_lines__[87] = 'bones.relational.py, line 87:\n    super(RelationalViewBoneDelegate, self).__init__()';
	$m.__track_lines__[88] = 'bones.relational.py, line 88:\n    self.format = "$(dest.name)"';
	$m.__track_lines__[90] = 'bones.relational.py, line 90:\n    if "format" in structure[boneName].keys():';
	$m.__track_lines__[91] = 'bones.relational.py, line 91:\n    self.format = structure[boneName]["format"]';
	$m.__track_lines__[93] = 'bones.relational.py, line 93:\n    self.module = module';
	$m.__track_lines__[94] = 'bones.relational.py, line 94:\n    self.structure = structure';
	$m.__track_lines__[95] = 'bones.relational.py, line 95:\n    self.boneName = boneName';
	$m.__track_lines__[97] = 'bones.relational.py, line 97:\n    def render(self, data, field):';
	$m.__track_lines__[98] = 'bones.relational.py, line 98:\n    assert field == self.boneName, "render() was called with field %s, expected %s" % (field, self.boneName)';
	$m.__track_lines__[99] = 'bones.relational.py, line 99:\n    val = data.get(field, "")';
	$m.__track_lines__[101] = 'bones.relational.py, line 101:\n    structure = self.structure[self.boneName]';
	$m.__track_lines__[103] = 'bones.relational.py, line 103:\n    lbl = html5.Label()';
	$m.__track_lines__[105] = 'bones.relational.py, line 105:\n    if not val:';
	$m.__track_lines__[106] = 'bones.relational.py, line 106:\n    return lbl';
	$m.__track_lines__[108] = 'bones.relational.py, line 108:\n    try:';
	$m.__track_lines__[109] = 'bones.relational.py, line 109:\n    if not isinstance(val, list):';
	$m.__track_lines__[110] = 'bones.relational.py, line 110:\n    val = [val]';
	$m.__track_lines__[111] = 'bones.relational.py, line 111:\n    count = 1';
	$m.__track_lines__[113] = 'bones.relational.py, line 113:\n    count = len(val)';
	$m.__track_lines__[114] = 'bones.relational.py, line 114:\n    if conf["maxMultiBoneEntries"] and count >= conf["maxMultiBoneEntries"]:';
	$m.__track_lines__[115] = 'bones.relational.py, line 115:\n    val = val[:conf["maxMultiBoneEntries"] - 1]';
	$m.__track_lines__[117] = 'bones.relational.py, line 117:\n    if structure["using"]:';
	$m.__track_lines__[118] = 'bones.relational.py, line 118:\n    res = "\\n".join([(utils.formatString(';
	$m.__track_lines__[125] = 'bones.relational.py, line 125:\n    res = "\\n".join([(utils.formatString(';
	$m.__track_lines__[132] = 'bones.relational.py, line 132:\n    if conf["maxMultiBoneEntries"] and count >= conf["maxMultiBoneEntries"]:';
	$m.__track_lines__[133] = 'bones.relational.py, line 133:\n    res += "\\n%s" % translate("and {count} more", count=count - conf["maxMultiBoneEntries"] - 1)';
	$m.__track_lines__[137] = 'bones.relational.py, line 137:\n    print("Cannot build relational format, maybe garbage received?")';
	$m.__track_lines__[138] = 'bones.relational.py, line 138:\n    print(val)';
	$m.__track_lines__[140] = 'bones.relational.py, line 140:\n    res = ""';
	$m.__track_lines__[142] = 'bones.relational.py, line 142:\n    html5.utils.textToHtml(lbl, res)';
	$m.__track_lines__[143] = 'bones.relational.py, line 143:\n    return lbl';
	$m.__track_lines__[146] = 'bones.relational.py, line 146:\n    class RelationalSingleSelectionBone(html5.Div):';
	$m.__track_lines__[151] = 'bones.relational.py, line 151:\n    def __init__(self, srcModule, boneName, readOnly, destModule, format="$(dest.name)", required=False,';
	$m.__track_lines__[165] = 'bones.relational.py, line 165:\n    super( RelationalSingleSelectionBone,  self ).__init__( *args, **kwargs )';
	$m.__track_lines__[166] = 'bones.relational.py, line 166:\n    self.srcModule = srcModule';
	$m.__track_lines__[167] = 'bones.relational.py, line 167:\n    self.boneName = boneName';
	$m.__track_lines__[168] = 'bones.relational.py, line 168:\n    self.readOnly = readOnly';
	$m.__track_lines__[169] = 'bones.relational.py, line 169:\n    self.destModule = destModule';
	$m.__track_lines__[170] = 'bones.relational.py, line 170:\n    self.format = format';
	$m.__track_lines__[171] = 'bones.relational.py, line 171:\n    self.using = using';
	$m.__track_lines__[172] = 'bones.relational.py, line 172:\n    self.usingDescr = usingDescr';
	$m.__track_lines__[174] = 'bones.relational.py, line 174:\n    self.selection = None';
	$m.__track_lines__[175] = 'bones.relational.py, line 175:\n    self.selectionTxt = html5.Input()';
	$m.__track_lines__[176] = 'bones.relational.py, line 176:\n    self.selectionTxt["type"] = "text"';
	$m.__track_lines__[177] = 'bones.relational.py, line 177:\n    self.selectionTxt["readonly"] = True';
	$m.__track_lines__[178] = 'bones.relational.py, line 178:\n    self.appendChild( self.selectionTxt )';
	$m.__track_lines__[179] = 'bones.relational.py, line 179:\n    self.ie = None';
	$m.__track_lines__[182] = 'bones.relational.py, line 182:\n    if (destModule in conf["modules"].keys()';
	$m.__track_lines__[185] = 'bones.relational.py, line 185:\n    self.selectBtn = html5.ext.Button(translate("Select"), self.onShowSelector)';
	$m.__track_lines__[186] = 'bones.relational.py, line 186:\n    self.selectBtn["class"].append("icon")';
	$m.__track_lines__[187] = 'bones.relational.py, line 187:\n    self.selectBtn["class"].append("select")';
	$m.__track_lines__[188] = 'bones.relational.py, line 188:\n    self.appendChild( self.selectBtn )';
	$m.__track_lines__[190] = 'bones.relational.py, line 190:\n    self.selectBtn = None';
	$m.__track_lines__[193] = 'bones.relational.py, line 193:\n    if (destModule in conf["modules"].keys()';
	$m.__track_lines__[195] = 'bones.relational.py, line 195:\n    self.editBtn = html5.ext.Button(translate("Edit"), self.onEdit )';
	$m.__track_lines__[196] = 'bones.relational.py, line 196:\n    self.editBtn["class"].append("icon")';
	$m.__track_lines__[197] = 'bones.relational.py, line 197:\n    self.editBtn["class"].append("edit")';
	$m.__track_lines__[198] = 'bones.relational.py, line 198:\n    self.appendChild( self.editBtn )';
	$m.__track_lines__[200] = 'bones.relational.py, line 200:\n    self.editBtn = None';
	$m.__track_lines__[203] = 'bones.relational.py, line 203:\n    if (not required and not readOnly';
	$m.__track_lines__[209] = 'bones.relational.py, line 209:\n    self.remBtn = html5.ext.Button(translate("Remove"), self.onRemove )';
	$m.__track_lines__[210] = 'bones.relational.py, line 210:\n    self.remBtn["class"].append("icon")';
	$m.__track_lines__[211] = 'bones.relational.py, line 211:\n    self.remBtn["class"].append("cancel")';
	$m.__track_lines__[212] = 'bones.relational.py, line 212:\n    self.appendChild( self.remBtn )';
	$m.__track_lines__[214] = 'bones.relational.py, line 214:\n    self.remBtn = None';
	$m.__track_lines__[216] = 'bones.relational.py, line 216:\n    if self.readOnly:';
	$m.__track_lines__[217] = 'bones.relational.py, line 217:\n    self["disabled"] = True';
	$m.__track_lines__[219] = 'bones.relational.py, line 219:\n    def _setDisabled(self, disable):';
	$m.__track_lines__[223] = 'bones.relational.py, line 223:\n    super(RelationalSingleSelectionBone, self)._setDisabled( disable )';
	$m.__track_lines__[224] = 'bones.relational.py, line 224:\n    if not disable and not self._disabledState and "is_active" in self.parent()["class"]:';
	$m.__track_lines__[225] = 'bones.relational.py, line 225:\n    self.parent()["class"].remove("is_active")';
	$m.__track_lines__[228] = 'bones.relational.py, line 227:\n    @classmethod ... def fromSkelStructure( cls, moduleName, boneName, skelStructure ):';
	$m.__track_lines__[238] = 'bones.relational.py, line 238:\n    readOnly = "readonly" in skelStructure[ boneName ].keys() and skelStructure[ boneName ]["readonly"]';
	$m.__track_lines__[240] = 'bones.relational.py, line 240:\n    if "required" in skelStructure[boneName].keys() and skelStructure[boneName]["required"]:';
	$m.__track_lines__[241] = 'bones.relational.py, line 241:\n    required = True';
	$m.__track_lines__[243] = 'bones.relational.py, line 243:\n    required = False';
	$m.__track_lines__[245] = 'bones.relational.py, line 245:\n    if "module" in skelStructure[boneName].keys():';
	$m.__track_lines__[246] = 'bones.relational.py, line 246:\n    destModule = skelStructure[boneName]["module"]';
	$m.__track_lines__[248] = 'bones.relational.py, line 248:\n    destModule = skelStructure[boneName]["type"].split(".")[1]';
	$m.__track_lines__[250] = 'bones.relational.py, line 250:\n    format = "$(name)"';
	$m.__track_lines__[251] = 'bones.relational.py, line 251:\n    if "format" in skelStructure[ boneName ].keys():';
	$m.__track_lines__[252] = 'bones.relational.py, line 252:\n    format = skelStructure[ boneName ]["format"]';
	$m.__track_lines__[254] = 'bones.relational.py, line 254:\n    if "using" in skelStructure[ boneName ].keys() and skelStructure[ boneName ]["using"]:';
	$m.__track_lines__[255] = 'bones.relational.py, line 255:\n    using = skelStructure[ boneName ]["using"]';
	$m.__track_lines__[257] = 'bones.relational.py, line 257:\n    using = None';
	$m.__track_lines__[259] = 'bones.relational.py, line 259:\n    if ("params" in skelStructure[boneName].keys()';
	$m.__track_lines__[262] = 'bones.relational.py, line 262:\n    usingDescr = skelStructure[boneName]["params"]["usingDescr"]';
	$m.__track_lines__[264] = 'bones.relational.py, line 264:\n    usingDescr = skelStructure[boneName].get("descr", boneName)';
	$m.__track_lines__[266] = 'bones.relational.py, line 266:\n    return cls(moduleName, boneName, readOnly, destModule=destModule,';
	$m.__track_lines__[269] = 'bones.relational.py, line 269:\n    def onEdit(self, *args, **kwargs):';
	$m.__track_lines__[273] = 'bones.relational.py, line 273:\n    if not self.selection:';
	$m.__track_lines__[274] = 'bones.relational.py, line 274:\n    return';
	$m.__track_lines__[276] = 'bones.relational.py, line 276:\n    pane = Pane(translate("Edit"), closeable=True,';
	$m.__track_lines__[278] = 'bones.relational.py, line 278:\n    conf["mainWindow"].stackPane( pane, focus=True )';
	$m.__track_lines__[280] = 'bones.relational.py, line 280:\n    try:';
	$m.__track_lines__[281] = 'bones.relational.py, line 281:\n    edwg = EditWidget(self.destModule, EditWidget.appList, key=self.selection["dest"]["key"])';
	$m.__track_lines__[282] = 'bones.relational.py, line 282:\n    pane.addWidget(edwg)';
	$m.__track_lines__[285] = 'bones.relational.py, line 285:\n    conf["mainWindow"].removePane(pane)';
	$m.__track_lines__[287] = 'bones.relational.py, line 287:\n    def onRemove(self, *args, **kwargs):';
	$m.__track_lines__[288] = 'bones.relational.py, line 288:\n    self.setSelection(None)';
	$m.__track_lines__[290] = 'bones.relational.py, line 290:\n    def unserialize(self, data):';
	$m.__track_lines__[296] = 'bones.relational.py, line 296:\n    if self.boneName in data.keys():';
	$m.__track_lines__[297] = 'bones.relational.py, line 297:\n    val = data[ self.boneName ]';
	$m.__track_lines__[298] = 'bones.relational.py, line 298:\n    if isinstance( val, list ):';
	$m.__track_lines__[299] = 'bones.relational.py, line 299:\n    if len(val)>0:';
	$m.__track_lines__[300] = 'bones.relational.py, line 300:\n    val = val[0]';
	$m.__track_lines__[302] = 'bones.relational.py, line 302:\n    val = None';
	$m.__track_lines__[303] = 'bones.relational.py, line 303:\n    if isinstance( val, dict ):';
	$m.__track_lines__[304] = 'bones.relational.py, line 304:\n    self.setSelection( val )';
	$m.__track_lines__[305] = 'bones.relational.py, line 305:\n    if self.using:';
	$m.__track_lines__[306] = 'bones.relational.py, line 306:\n    if self.ie:';
	$m.__track_lines__[307] = 'bones.relational.py, line 307:\n    self.removeChild(self.ie)';
	$m.__track_lines__[309] = 'bones.relational.py, line 309:\n    print("2 WITH ", data["rel"])';
	$m.__track_lines__[311] = 'bones.relational.py, line 311:\n    self.ie = InternalEdit(self.using, val["rel"], {},';
	$m.__track_lines__[313] = 'bones.relational.py, line 313:\n    self.appendChild( self.ie )';
	$m.__track_lines__[315] = 'bones.relational.py, line 315:\n    self.setSelection(None)';
	$m.__track_lines__[317] = 'bones.relational.py, line 317:\n    def serializeForPost(self):';
	$m.__track_lines__[322] = 'bones.relational.py, line 322:\n    if not (self.selection and "dest" in self.selection.keys() and "key" in self.selection["dest"].keys()):';
	$m.__track_lines__[324] = 'bones.relational.py, line 324:\n    return {}';
	$m.__track_lines__[325] = 'bones.relational.py, line 325:\n    res = {}';
	$m.__track_lines__[326] = 'bones.relational.py, line 326:\n    if self.ie:';
	$m.__track_lines__[327] = 'bones.relational.py, line 327:\n    res.update(self.ie.doSave())';
	$m.__track_lines__[328] = 'bones.relational.py, line 328:\n    res["key"] = self.selection["dest"]["key"]';
	$m.__track_lines__[329] = 'bones.relational.py, line 329:\n    r = {"%s.0.%s" % (self.boneName, k): v for (k,v ) in res.items()}';
	$m.__track_lines__[330] = 'bones.relational.py, line 330:\n    return r';
	$m.__track_lines__[333] = 'bones.relational.py, line 333:\n    def serializeForDocument(self):';
	$m.__track_lines__[334] = 'bones.relational.py, line 334:\n    return self.serialize()';
	$m.__track_lines__[336] = 'bones.relational.py, line 336:\n    def onShowSelector(self, *args, **kwargs):';
	$m.__track_lines__[341] = 'bones.relational.py, line 341:\n    try:';
	$m.__track_lines__[342] = 'bones.relational.py, line 342:\n    currentSelector = ListWidget( self.destModule, isSelector=True )';
	$m.__track_lines__[344] = 'bones.relational.py, line 344:\n    return';
	$m.__track_lines__[346] = 'bones.relational.py, line 346:\n    currentSelector.selectionActivatedEvent.register( self )';
	$m.__track_lines__[347] = 'bones.relational.py, line 347:\n    conf["mainWindow"].stackWidget( currentSelector )';
	$m.__track_lines__[348] = 'bones.relational.py, line 348:\n    self.parent()["class"].append("is_active")';
	$m.__track_lines__[350] = 'bones.relational.py, line 350:\n    def onSelectionActivated(self, table, selection ):';
	$m.__track_lines__[354] = 'bones.relational.py, line 354:\n    if selection:';
	$m.__track_lines__[355] = 'bones.relational.py, line 355:\n    self.setSelection({"dest": selection[0]})';
	$m.__track_lines__[357] = 'bones.relational.py, line 357:\n    self.setSelection(None)';
	$m.__track_lines__[359] = 'bones.relational.py, line 359:\n    def setSelection(self, selection):';
	$m.__track_lines__[365] = 'bones.relational.py, line 365:\n    if not selection:';
	$m.__track_lines__[366] = 'bones.relational.py, line 366:\n    selection = {}';
	$m.__track_lines__[367] = 'bones.relational.py, line 367:\n    self.selection = None';
	$m.__track_lines__[369] = 'bones.relational.py, line 369:\n    if not self.selection:';
	$m.__track_lines__[370] = 'bones.relational.py, line 370:\n    self.selection = {}';
	$m.__track_lines__[372] = 'bones.relational.py, line 372:\n    self.selection.update(selection)';
	$m.__track_lines__[374] = 'bones.relational.py, line 374:\n    if selection:';
	$m.__track_lines__[375] = 'bones.relational.py, line 375:\n    NetworkService.request(self.destModule, "view/%s" % selection["dest"]["key"],';
	$m.__track_lines__[378] = 'bones.relational.py, line 378:\n    self.selectionTxt["value"] = translate("Loading...")';
	$m.__track_lines__[380] = 'bones.relational.py, line 380:\n    if self.using and not self.ie:';
	$m.__track_lines__[381] = 'bones.relational.py, line 381:\n    self.ie = InternalEdit(self.using, getDefaultValues(self.using), {},';
	$m.__track_lines__[383] = 'bones.relational.py, line 383:\n    self.appendChild(self.ie)';
	$m.__track_lines__[385] = 'bones.relational.py, line 385:\n    self.selectionTxt["value"] = ""';
	$m.__track_lines__[387] = 'bones.relational.py, line 387:\n    self.updateButtons()';
	$m.__track_lines__[389] = 'bones.relational.py, line 389:\n    def updateButtons(self):';
	$m.__track_lines__[393] = 'bones.relational.py, line 393:\n    if self.selection:';
	$m.__track_lines__[394] = 'bones.relational.py, line 394:\n    if self.editBtn:';
	$m.__track_lines__[395] = 'bones.relational.py, line 395:\n    self.editBtn[ "disabled" ] = False';
	$m.__track_lines__[396] = 'bones.relational.py, line 396:\n    if self.remBtn:';
	$m.__track_lines__[397] = 'bones.relational.py, line 397:\n    self.remBtn[ "disabled"] = False';
	$m.__track_lines__[399] = 'bones.relational.py, line 399:\n    if self.editBtn:';
	$m.__track_lines__[400] = 'bones.relational.py, line 400:\n    self.editBtn[ "disabled" ] = True';
	$m.__track_lines__[401] = 'bones.relational.py, line 401:\n    if self.remBtn:';
	$m.__track_lines__[402] = 'bones.relational.py, line 402:\n    self.remBtn[ "disabled"] = True';
	$m.__track_lines__[404] = 'bones.relational.py, line 404:\n    def onAttach(self):';
	$m.__track_lines__[405] = 'bones.relational.py, line 405:\n    super(RelationalSingleSelectionBone, self).onAttach()';
	$m.__track_lines__[406] = 'bones.relational.py, line 406:\n    NetworkService.registerChangeListener(self)';
	$m.__track_lines__[408] = 'bones.relational.py, line 408:\n    def onDetach(self):';
	$m.__track_lines__[409] = 'bones.relational.py, line 409:\n    NetworkService.removeChangeListener(self)';
	$m.__track_lines__[410] = 'bones.relational.py, line 410:\n    super(RelationalSingleSelectionBone, self).onDetach()';
	$m.__track_lines__[412] = 'bones.relational.py, line 412:\n    def onDataChanged(self, module, **kwargs):';
	$m.__track_lines__[413] = 'bones.relational.py, line 413:\n    if module == self.destModule:';
	$m.__track_lines__[414] = 'bones.relational.py, line 414:\n    self.setSelection(self.selection)';
	$m.__track_lines__[416] = 'bones.relational.py, line 416:\n    def onSelectionDataAvailable(self, req):';
	$m.__track_lines__[420] = 'bones.relational.py, line 420:\n    data = NetworkService.decode(req)';
	$m.__track_lines__[421] = 'bones.relational.py, line 421:\n    assert self.selection["dest"]["key"] == data["values"]["key"]';
	$m.__track_lines__[423] = 'bones.relational.py, line 423:\n    if self.using:';
	$m.__track_lines__[424] = 'bones.relational.py, line 424:\n    res = (utils.formatString(';
	$m.__track_lines__[431] = 'bones.relational.py, line 431:\n    res = (utils.formatString(';
	$m.__track_lines__[437] = 'bones.relational.py, line 437:\n    self.selectionTxt["value"] = res';
	$m.__track_lines__[439] = 'bones.relational.py, line 439:\n    class RelationalMultiSelectionBoneEntry(html5.Div):';
	$m.__track_lines__[445] = 'bones.relational.py, line 445:\n    def __init__(self, parent, module, data, using, errorInfo, *args, **kwargs ):';
	$m.__track_lines__[454] = 'bones.relational.py, line 454:\n    super(RelationalMultiSelectionBoneEntry, self).__init__(*args, **kwargs)';
	$m.__track_lines__[456] = 'bones.relational.py, line 456:\n    self["draggable"] = not parent.readOnly';
	$m.__track_lines__[457] = 'bones.relational.py, line 457:\n    self.sinkEvent("onDrop", "onDragOver", "onDragStart", "onDragEnd", "onChange")';
	$m.__track_lines__[459] = 'bones.relational.py, line 459:\n    self.parent = parent';
	$m.__track_lines__[460] = 'bones.relational.py, line 460:\n    self.module = module';
	$m.__track_lines__[461] = 'bones.relational.py, line 461:\n    self.data = data';
	$m.__track_lines__[463] = 'bones.relational.py, line 463:\n    self.txtLbl = html5.Label()';
	$m.__track_lines__[465] = 'bones.relational.py, line 465:\n    wrapperDiv = html5.Div()';
	$m.__track_lines__[466] = 'bones.relational.py, line 466:\n    wrapperDiv.appendChild(self.txtLbl)';
	$m.__track_lines__[467] = 'bones.relational.py, line 467:\n    wrapperDiv["class"].append("labelwrapper")';
	$m.__track_lines__[469] = 'bones.relational.py, line 469:\n    if not parent.readOnly:';
	$m.__track_lines__[470] = 'bones.relational.py, line 470:\n    remBtn = html5.ext.Button(translate("Remove"), self.onRemove)';
	$m.__track_lines__[471] = 'bones.relational.py, line 471:\n    remBtn["class"].append("icon")';
	$m.__track_lines__[472] = 'bones.relational.py, line 472:\n    remBtn["class"].append("cancel")';
	$m.__track_lines__[473] = 'bones.relational.py, line 473:\n    wrapperDiv.appendChild(remBtn)';
	$m.__track_lines__[475] = 'bones.relational.py, line 475:\n    self.appendChild(wrapperDiv)';
	$m.__track_lines__[477] = 'bones.relational.py, line 477:\n    if using:';
	$m.__track_lines__[478] = 'bones.relational.py, line 478:\n    self.ie = InternalEdit(using, data["rel"], errorInfo,';
	$m.__track_lines__[481] = 'bones.relational.py, line 481:\n    self.appendChild(self.ie)';
	$m.__track_lines__[483] = 'bones.relational.py, line 483:\n    self.ie = None';
	$m.__track_lines__[485] = 'bones.relational.py, line 485:\n    self.updateLabel()';
	$m.__track_lines__[487] = 'bones.relational.py, line 487:\n    def updateLabel(self, data = None):';
	$m.__track_lines__[488] = 'bones.relational.py, line 488:\n    if data is None:';
	$m.__track_lines__[489] = 'bones.relational.py, line 489:\n    data = self.data';
	$m.__track_lines__[491] = 'bones.relational.py, line 491:\n    self.txtLbl.removeAllChildren()';
	$m.__track_lines__[492] = 'bones.relational.py, line 492:\n    txt = utils.formatString(self.parent.format, data["dest"], self.parent.relskel,';
	$m.__track_lines__[495] = 'bones.relational.py, line 495:\n    if self.ie:';
	$m.__track_lines__[496] = 'bones.relational.py, line 496:\n    txt = utils.formatString(txt, self.ie.doSave(), self.parent.using,';
	$m.__track_lines__[499] = 'bones.relational.py, line 499:\n    html5.utils.textToHtml(self.txtLbl, txt)';
	$m.__track_lines__[501] = 'bones.relational.py, line 501:\n    def onDragStart(self, event):';
	$m.__track_lines__[502] = 'bones.relational.py, line 502:\n    if self.parent.readOnly:';
	$m.__track_lines__[503] = 'bones.relational.py, line 503:\n    return';
	$m.__track_lines__[505] = 'bones.relational.py, line 505:\n    self.parent.currentDrag = self';
	$m.__track_lines__[506] = 'bones.relational.py, line 506:\n    event.dataTransfer.setData("application/json", json.dumps(self.data))';
	$m.__track_lines__[507] = 'bones.relational.py, line 507:\n    event.stopPropagation()';
	$m.__track_lines__[509] = 'bones.relational.py, line 509:\n    def onDragOver(self, event):';
	$m.__track_lines__[510] = 'bones.relational.py, line 510:\n    if self.parent.readOnly:';
	$m.__track_lines__[511] = 'bones.relational.py, line 511:\n    return';
	$m.__track_lines__[513] = 'bones.relational.py, line 513:\n    event.preventDefault()';
	$m.__track_lines__[515] = 'bones.relational.py, line 515:\n    def onDragEnd(self, event):';
	$m.__track_lines__[516] = 'bones.relational.py, line 516:\n    if self.parent.readOnly:';
	$m.__track_lines__[517] = 'bones.relational.py, line 517:\n    return';
	$m.__track_lines__[519] = 'bones.relational.py, line 519:\n    self.parent.currentDrag = None';
	$m.__track_lines__[520] = 'bones.relational.py, line 520:\n    event.stopPropagation()';
	$m.__track_lines__[522] = 'bones.relational.py, line 522:\n    def onDrop(self, event):';
	$m.__track_lines__[523] = 'bones.relational.py, line 523:\n    if self.parent.readOnly:';
	$m.__track_lines__[524] = 'bones.relational.py, line 524:\n    return';
	$m.__track_lines__[526] = 'bones.relational.py, line 526:\n    event.preventDefault()';
	$m.__track_lines__[527] = 'bones.relational.py, line 527:\n    event.stopPropagation()';
	$m.__track_lines__[529] = 'bones.relational.py, line 529:\n    if self.parent.currentDrag and self.parent.currentDrag != self:';
	$m.__track_lines__[530] = 'bones.relational.py, line 530:\n    if self.element.offsetTop > self.parent.currentDrag.element.offsetTop:';
	$m.__track_lines__[531] = 'bones.relational.py, line 531:\n    if self.parent.entries[-1] is self:';
	$m.__track_lines__[532] = 'bones.relational.py, line 532:\n    self.parent.moveEntry(self.parent.currentDrag)';
	$m.__track_lines__[534] = 'bones.relational.py, line 534:\n    self.parent.moveEntry(self.parent.currentDrag, self.parent.entries[self.parent.entries.index(self) + 1])';
	$m.__track_lines__[536] = 'bones.relational.py, line 536:\n    self.parent.moveEntry(self.parent.currentDrag, self)';
	$m.__track_lines__[538] = 'bones.relational.py, line 538:\n    self.parent.currentDrag = None';
	$m.__track_lines__[540] = 'bones.relational.py, line 540:\n    def onChange(self, event):';
	$m.__track_lines__[541] = 'bones.relational.py, line 541:\n    data = self.data.copy()';
	$m.__track_lines__[542] = 'bones.relational.py, line 542:\n    data["rel"].update(self.ie.doSave())';
	$m.__track_lines__[544] = 'bones.relational.py, line 544:\n    self.updateLabel(data)';
	$m.__track_lines__[546] = 'bones.relational.py, line 546:\n    def onRemove(self, *args, **kwargs):';
	$m.__track_lines__[547] = 'bones.relational.py, line 547:\n    self.parent.removeEntry(self)';
	$m.__track_lines__[549] = 'bones.relational.py, line 549:\n    def serialize(self):';
	$m.__track_lines__[550] = 'bones.relational.py, line 550:\n    if self.ie:';
	$m.__track_lines__[551] = 'bones.relational.py, line 551:\n    res = {}';
	$m.__track_lines__[552] = 'bones.relational.py, line 552:\n    res.update(self.ie.doSave())';
	$m.__track_lines__[553] = 'bones.relational.py, line 553:\n    res["key"] = self.data["dest"]["key"]';
	$m.__track_lines__[554] = 'bones.relational.py, line 554:\n    return res';
	$m.__track_lines__[556] = 'bones.relational.py, line 556:\n    return {"key": self.data["dest"]["key"]}';
	$m.__track_lines__[559] = 'bones.relational.py, line 559:\n    class RelationalMultiSelectionBone(html5.Div):';
	$m.__track_lines__[564] = 'bones.relational.py, line 564:\n    def __init__(self, srcModule, boneName, readOnly, destModule, format="$(name)", using=None, usingDescr=None,';
	$m.__track_lines__[578] = 'bones.relational.py, line 578:\n    super( RelationalMultiSelectionBone,  self ).__init__( *args, **kwargs )';
	$m.__track_lines__[580] = 'bones.relational.py, line 580:\n    self.srcModule = srcModule';
	$m.__track_lines__[581] = 'bones.relational.py, line 581:\n    self.boneName = boneName';
	$m.__track_lines__[582] = 'bones.relational.py, line 582:\n    self.readOnly = readOnly';
	$m.__track_lines__[583] = 'bones.relational.py, line 583:\n    self.destModule = destModule';
	$m.__track_lines__[584] = 'bones.relational.py, line 584:\n    self.format = format';
	$m.__track_lines__[585] = 'bones.relational.py, line 585:\n    self.using = using';
	$m.__track_lines__[586] = 'bones.relational.py, line 586:\n    self.usingDescr = usingDescr';
	$m.__track_lines__[587] = 'bones.relational.py, line 587:\n    self.relskel = relskel';
	$m.__track_lines__[589] = 'bones.relational.py, line 589:\n    self.entries = []';
	$m.__track_lines__[590] = 'bones.relational.py, line 590:\n    self.extendedErrorInformation = {}';
	$m.__track_lines__[591] = 'bones.relational.py, line 591:\n    self.currentDrag = None';
	$m.__track_lines__[593] = 'bones.relational.py, line 593:\n    self.selectionDiv = html5.Div()';
	$m.__track_lines__[594] = 'bones.relational.py, line 594:\n    self.selectionDiv["class"].append("selectioncontainer")';
	$m.__track_lines__[595] = 'bones.relational.py, line 595:\n    self.appendChild(self.selectionDiv)';
	$m.__track_lines__[597] = 'bones.relational.py, line 597:\n    if (destModule in conf["modules"].keys()';
	$m.__track_lines__[600] = 'bones.relational.py, line 600:\n    self.selectBtn = html5.ext.Button("Select", self.onShowSelector)';
	$m.__track_lines__[601] = 'bones.relational.py, line 601:\n    self.selectBtn["class"].append("icon")';
	$m.__track_lines__[602] = 'bones.relational.py, line 602:\n    self.selectBtn["class"].append("select")';
	$m.__track_lines__[603] = 'bones.relational.py, line 603:\n    self.appendChild( self.selectBtn )';
	$m.__track_lines__[605] = 'bones.relational.py, line 605:\n    self.selectBtn = None';
	$m.__track_lines__[607] = 'bones.relational.py, line 607:\n    if self.readOnly:';
	$m.__track_lines__[608] = 'bones.relational.py, line 608:\n    self["disabled"] = True';
	$m.__track_lines__[610] = 'bones.relational.py, line 610:\n    self.sinkEvent("onDragOver")';
	$m.__track_lines__[612] = 'bones.relational.py, line 612:\n    def _setDisabled(self, disable):';
	$m.__track_lines__[616] = 'bones.relational.py, line 616:\n    super(RelationalMultiSelectionBone, self)._setDisabled( disable )';
	$m.__track_lines__[617] = 'bones.relational.py, line 617:\n    if not disable and not self._disabledState and "is_active" in self.parent()["class"]:';
	$m.__track_lines__[618] = 'bones.relational.py, line 618:\n    self.parent()["class"].remove("is_active")';
	$m.__track_lines__[621] = 'bones.relational.py, line 620:\n    @classmethod ... def fromSkelStructure( cls, moduleName, boneName, skelStructure ):';
	$m.__track_lines__[631] = 'bones.relational.py, line 631:\n    readOnly = bool(skelStructure[boneName].get("readonly", False))';
	$m.__track_lines__[633] = 'bones.relational.py, line 633:\n    if "module" in skelStructure[ boneName ].keys():';
	$m.__track_lines__[634] = 'bones.relational.py, line 634:\n    destModule = skelStructure[ boneName ][ "module" ]';
	$m.__track_lines__[636] = 'bones.relational.py, line 636:\n    destModule = skelStructure[ boneName ]["type"].split(".")[1]';
	$m.__track_lines__[638] = 'bones.relational.py, line 638:\n    format = skelStructure[boneName].get("format", "$(name)")';
	$m.__track_lines__[639] = 'bones.relational.py, line 639:\n    using = skelStructure[boneName].get("using")';
	$m.__track_lines__[641] = 'bones.relational.py, line 641:\n    if ("params" in skelStructure[boneName].keys()';
	$m.__track_lines__[644] = 'bones.relational.py, line 644:\n    usingDescr = skelStructure[boneName]["params"]["usingDescr"]';
	$m.__track_lines__[646] = 'bones.relational.py, line 646:\n    usingDescr = skelStructure[boneName].get("descr", boneName)';
	$m.__track_lines__[648] = 'bones.relational.py, line 648:\n    return cls(moduleName, boneName, readOnly,';
	$m.__track_lines__[652] = 'bones.relational.py, line 652:\n    def unserialize(self, data):';
	$m.__track_lines__[658] = 'bones.relational.py, line 658:\n    if self.boneName in data.keys():';
	$m.__track_lines__[659] = 'bones.relational.py, line 659:\n    val = data[ self.boneName ]';
	$m.__track_lines__[660] = 'bones.relational.py, line 660:\n    if isinstance( val, dict ):';
	$m.__track_lines__[661] = 'bones.relational.py, line 661:\n    val = [ val ]';
	$m.__track_lines__[662] = 'bones.relational.py, line 662:\n    self.setSelection( val )';
	$m.__track_lines__[664] = 'bones.relational.py, line 664:\n    def serializeForPost(self):';
	$m.__track_lines__[670] = 'bones.relational.py, line 670:\n    res = {}';
	$m.__track_lines__[671] = 'bones.relational.py, line 671:\n    idx = 0';
	$m.__track_lines__[672] = 'bones.relational.py, line 672:\n    for entry in self.entries:';
	$m.__track_lines__[673] = 'bones.relational.py, line 673:\n    currRes = entry.serialize()';
	$m.__track_lines__[674] = 'bones.relational.py, line 674:\n    if isinstance( currRes, dict ):';
	$m.__track_lines__[675] = 'bones.relational.py, line 675:\n    for k,v in currRes.items():';
	$m.__track_lines__[676] = 'bones.relational.py, line 676:\n    res["%s.%s.%s" % (self.boneName,idx,k) ] = v';
	$m.__track_lines__[678] = 'bones.relational.py, line 678:\n    res["%s.%s.key" % (self.boneName,idx) ] = currRes';
	$m.__track_lines__[679] = 'bones.relational.py, line 679:\n    idx += 1';
	$m.__track_lines__[680] = 'bones.relational.py, line 680:\n    return( res )';
	$m.__track_lines__[683] = 'bones.relational.py, line 683:\n    def serializeForDocument(self):';
	$m.__track_lines__[684] = 'bones.relational.py, line 684:\n    return self.serialize()';
	$m.__track_lines__[686] = 'bones.relational.py, line 686:\n    def onShowSelector(self, *args, **kwargs):';
	$m.__track_lines__[690] = 'bones.relational.py, line 690:\n    currentSelector = ListWidget( self.destModule, isSelector=True )';
	$m.__track_lines__[691] = 'bones.relational.py, line 691:\n    currentSelector.selectionActivatedEvent.register( self )';
	$m.__track_lines__[692] = 'bones.relational.py, line 692:\n    conf["mainWindow"].stackWidget( currentSelector )';
	$m.__track_lines__[693] = 'bones.relational.py, line 693:\n    self.parent()["class"].append("is_active")';
	$m.__track_lines__[695] = 'bones.relational.py, line 695:\n    def onSelectionActivated(self, table, selection ):';
	$m.__track_lines__[699] = 'bones.relational.py, line 699:\n    selection = [{"dest": data, "rel": getDefaultValues(self.using) if self.using else None} for data in selection]';
	$m.__track_lines__[700] = 'bones.relational.py, line 700:\n    self.setSelection(selection)';
	$m.__track_lines__[702] = 'bones.relational.py, line 702:\n    def setSelection(self, selection):';
	$m.__track_lines__[708] = 'bones.relational.py, line 708:\n    if selection is None:';
	$m.__track_lines__[709] = 'bones.relational.py, line 709:\n    return';
	$m.__track_lines__[710] = 'bones.relational.py, line 710:\n    for data in selection:';
	$m.__track_lines__[711] = 'bones.relational.py, line 711:\n    errIdx = len( self. entries )';
	$m.__track_lines__[712] = 'bones.relational.py, line 712:\n    errDict = {}';
	$m.__track_lines__[713] = 'bones.relational.py, line 713:\n    if self.extendedErrorInformation:';
	$m.__track_lines__[714] = 'bones.relational.py, line 714:\n    for k,v in self.extendedErrorInformation.items():';
	$m.__track_lines__[715] = 'bones.relational.py, line 715:\n    k = k.replace("%s." % self.boneName, "")';
	$m.__track_lines__[716] = 'bones.relational.py, line 716:\n    if 1:';
	$m.__track_lines__[717] = 'bones.relational.py, line 717:\n    idx, errKey = k.split(".")';
	$m.__track_lines__[718] = 'bones.relational.py, line 718:\n    idx = int( idx )';
	$m.__track_lines__[720] = 'bones.relational.py, line 720:\n    continue';
	$m.__track_lines__[721] = 'bones.relational.py, line 721:\n    if idx == errIdx:';
	$m.__track_lines__[722] = 'bones.relational.py, line 722:\n    errDict[ errKey ] = v';
	$m.__track_lines__[723] = 'bones.relational.py, line 723:\n    entry = RelationalMultiSelectionBoneEntry( self, self.destModule, data, self.using, errDict )';
	$m.__track_lines__[724] = 'bones.relational.py, line 724:\n    self.addEntry( entry )';
	$m.__track_lines__[726] = 'bones.relational.py, line 726:\n    def addEntry(self, entry):';
	$m.__track_lines__[731] = 'bones.relational.py, line 731:\n    assert entry not in self.entries, "Entry %s is already in relationalBone" % str(entry)';
	$m.__track_lines__[732] = 'bones.relational.py, line 732:\n    self.entries.append(entry)';
	$m.__track_lines__[733] = 'bones.relational.py, line 733:\n    self.selectionDiv.appendChild(entry)';
	$m.__track_lines__[735] = 'bones.relational.py, line 735:\n    def removeEntry(self, entry ):';
	$m.__track_lines__[740] = 'bones.relational.py, line 740:\n    assert entry in self.entries, "Cannot remove unknown entry %s from relationalBone" % str(entry)';
	$m.__track_lines__[741] = 'bones.relational.py, line 741:\n    self.selectionDiv.removeChild( entry )';
	$m.__track_lines__[742] = 'bones.relational.py, line 742:\n    self.entries.remove( entry )';
	$m.__track_lines__[744] = 'bones.relational.py, line 744:\n    def moveEntry(self, entry, before = None):';
	$m.__track_lines__[745] = 'bones.relational.py, line 745:\n    assert entry in self.entries, "Cannot remove unknown entry %s from relationalBone" % str(entry)';
	$m.__track_lines__[746] = 'bones.relational.py, line 746:\n    self.entries.remove(entry)';
	$m.__track_lines__[748] = 'bones.relational.py, line 748:\n    if before:';
	$m.__track_lines__[749] = 'bones.relational.py, line 749:\n    assert before in self.entries, "Cannot remove unknown entry %s from relationalBone" % str(before)';
	$m.__track_lines__[750] = 'bones.relational.py, line 750:\n    self.selectionDiv.insertBefore(entry, before)';
	$m.__track_lines__[751] = 'bones.relational.py, line 751:\n    self.entries.insert(self.entries.index(before), entry)';
	$m.__track_lines__[753] = 'bones.relational.py, line 753:\n    self.addEntry(entry)';
	$m.__track_lines__[755] = 'bones.relational.py, line 755:\n    def setExtendedErrorInformation(self, errorInfo ):';
	$m.__track_lines__[756] = 'bones.relational.py, line 756:\n    print("------- EXTENDEND ERROR INFO --------")';
	$m.__track_lines__[757] = 'bones.relational.py, line 757:\n    print( errorInfo )';
	$m.__track_lines__[758] = 'bones.relational.py, line 758:\n    self.extendedErrorInformation = errorInfo';
	$m.__track_lines__[759] = 'bones.relational.py, line 759:\n    for k,v in errorInfo.items():';
	$m.__track_lines__[760] = 'bones.relational.py, line 760:\n    k = k.replace("%s." % self.boneName, "")';
	$m.__track_lines__[761] = 'bones.relational.py, line 761:\n    if 1:';
	$m.__track_lines__[762] = 'bones.relational.py, line 762:\n    idx, err = k.split(".")';
	$m.__track_lines__[763] = 'bones.relational.py, line 763:\n    idx = int( idx )';
	$m.__track_lines__[765] = 'bones.relational.py, line 765:\n    continue';
	$m.__track_lines__[766] = 'bones.relational.py, line 766:\n    print("k: %s, v: %s" % (k,v))';
	$m.__track_lines__[767] = 'bones.relational.py, line 767:\n    print("idx: %s" % idx )';
	$m.__track_lines__[768] = 'bones.relational.py, line 768:\n    print( len(self.entries))';
	$m.__track_lines__[769] = 'bones.relational.py, line 769:\n    if idx>=0 and idx < len(self.entries):';
	$m.__track_lines__[770] = 'bones.relational.py, line 770:\n    self.entries[ idx ].setError( err )';
	$m.__track_lines__[771] = 'bones.relational.py, line 771:\n    pass';
	$m.__track_lines__[774] = 'bones.relational.py, line 774:\n    class RelationalSearch( html5.Div ):';
	$m.__track_lines__[775] = 'bones.relational.py, line 775:\n    def __init__(self, extension, view, module, *args, **kwargs ):';
	$m.__track_lines__[776] = 'bones.relational.py, line 776:\n    super( RelationalSearch, self ).__init__( *args, **kwargs )';
	$m.__track_lines__[777] = 'bones.relational.py, line 777:\n    self.view = view';
	$m.__track_lines__[778] = 'bones.relational.py, line 778:\n    self.extension = extension';
	$m.__track_lines__[779] = 'bones.relational.py, line 779:\n    self.module = module';
	$m.__track_lines__[780] = 'bones.relational.py, line 780:\n    self.currentSelection = None';
	$m.__track_lines__[781] = 'bones.relational.py, line 781:\n    self.filterChangedEvent = EventDispatcher("filterChanged")';
	$m.__track_lines__[782] = 'bones.relational.py, line 782:\n    self.appendChild( html5.TextNode("RELATIONAL SEARCH"))';
	$m.__track_lines__[783] = 'bones.relational.py, line 783:\n    self.appendChild( html5.TextNode(extension["name"]))';
	$m.__track_lines__[784] = 'bones.relational.py, line 784:\n    self.currentEntry = html5.Span()';
	$m.__track_lines__[785] = 'bones.relational.py, line 785:\n    self.appendChild(self.currentEntry)';
	$m.__track_lines__[786] = 'bones.relational.py, line 786:\n    btn = html5.ext.Button("Select", self.openSelector)';
	$m.__track_lines__[787] = 'bones.relational.py, line 787:\n    self.appendChild( btn )';
	$m.__track_lines__[788] = 'bones.relational.py, line 788:\n    btn = html5.ext.Button("Clear", self.clearSelection)';
	$m.__track_lines__[789] = 'bones.relational.py, line 789:\n    self.appendChild( btn )';
	$m.__track_lines__[791] = 'bones.relational.py, line 791:\n    def clearSelection(self, *args, **kwargs):';
	$m.__track_lines__[792] = 'bones.relational.py, line 792:\n    self.currentSelection = None';
	$m.__track_lines__[793] = 'bones.relational.py, line 793:\n    self.filterChangedEvent.fire()';
	$m.__track_lines__[795] = 'bones.relational.py, line 795:\n    def openSelector(self, *args, **kwargs):';
	$m.__track_lines__[796] = 'bones.relational.py, line 796:\n    currentSelector = ListWidget( self.extension["module"], isSelector=True )';
	$m.__track_lines__[797] = 'bones.relational.py, line 797:\n    currentSelector.selectionActivatedEvent.register( self )';
	$m.__track_lines__[798] = 'bones.relational.py, line 798:\n    conf["mainWindow"].stackWidget( currentSelector )';
	$m.__track_lines__[800] = 'bones.relational.py, line 800:\n    def onSelectionActivated(self, table,selection):';
	$m.__track_lines__[801] = 'bones.relational.py, line 801:\n    self.currentSelection = selection';
	$m.__track_lines__[802] = 'bones.relational.py, line 802:\n    self.filterChangedEvent.fire()';
	$m.__track_lines__[805] = 'bones.relational.py, line 805:\n    def updateFilter(self, filter):';
	$m.__track_lines__[806] = 'bones.relational.py, line 806:\n    if self.currentSelection:';
	$m.__track_lines__[807] = 'bones.relational.py, line 807:\n    self.currentEntry.element.innerHTML = self.currentSelection[0]["name"]';
	$m.__track_lines__[808] = 'bones.relational.py, line 808:\n    newId = self.currentSelection[0]["key"]';
	$m.__track_lines__[809] = 'bones.relational.py, line 809:\n    filter[ self.extension["target"]+".key" ] = newId';
	$m.__track_lines__[811] = 'bones.relational.py, line 811:\n    self.currentEntry.element.innerHTML = ""';
	$m.__track_lines__[812] = 'bones.relational.py, line 812:\n    return( filter )';
	$m.__track_lines__[815] = 'bones.relational.py, line 814:\n    @staticmethod ... def canHandleExtension( extension, view, module ):';
	$m.__track_lines__[816] = 'bones.relational.py, line 816:\n    return( isinstance( extension, dict) and "type" in extension.keys() and (extension["type"]=="relational" or extension["type"].startswith("relational.") ) )';
	$m.__track_lines__[819] = 'bones.relational.py, line 819:\n    def CheckForRelationalBoneSelection( moduleName, boneName, skelStructure, *args, **kwargs ):';
	$m.__track_lines__[820] = 'bones.relational.py, line 820:\n    return skelStructure[boneName]["type"].startswith("relational.")';
	$m.__track_lines__[822] = 'bones.relational.py, line 822:\n    def CheckForRelationalBoneMultiSelection( moduleName, boneName, skelStructure, *args, **kwargs ):';
	$m.__track_lines__[823] = 'bones.relational.py, line 823:\n    isMultiple = "multiple" in skelStructure[boneName].keys() and skelStructure[boneName]["multiple"]';
	$m.__track_lines__[824] = 'bones.relational.py, line 824:\n    return isMultiple and skelStructure[boneName]["type"].startswith("relational.")';
	$m.__track_lines__[826] = 'bones.relational.py, line 826:\n    def CheckForRelationalBoneSingleSelection( moduleName, boneName, skelStructure, *args, **kwargs ):';
	$m.__track_lines__[827] = 'bones.relational.py, line 827:\n    isMultiple = "multiple" in skelStructure[boneName].keys() and skelStructure[boneName]["multiple"]';
	$m.__track_lines__[828] = 'bones.relational.py, line 828:\n    return not isMultiple and skelStructure[boneName]["type"].startswith("relational.")';
	$m.__track_lines__[831] = 'bones.relational.py, line 831:\n    editBoneSelector.insert( 5, CheckForRelationalBoneMultiSelection, RelationalMultiSelectionBone)';
	$m.__track_lines__[832] = 'bones.relational.py, line 832:\n    editBoneSelector.insert( 5, CheckForRelationalBoneSingleSelection, RelationalSingleSelectionBone)';
	$m.__track_lines__[833] = 'bones.relational.py, line 833:\n    viewDelegateSelector.insert( 5, CheckForRelationalBoneSelection, RelationalViewBoneDelegate)';
	$m.__track_lines__[834] = 'bones.relational.py, line 834:\n    extendedSearchWidgetSelector.insert( 1, RelationalSearch.canHandleExtension, RelationalSearch )';
	$m.__track_lines__[835] = 'bones.relational.py, line 835:\n    extractorDelegateSelector.insert(4, CheckForRelationalBoneSelection, RelationalBoneExtractor)';


	$pyjs['track']['module']='bones.relational';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=2;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['html5'] = $p['___import___']('html5', 'bones');
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['json'] = $p['___import___']('json', 'bones');
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
	$m['extendedSearchWidgetSelector'] = $p['___import___']('priorityqueue.extendedSearchWidgetSelector', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['extractorDelegateSelector'] = $p['___import___']('priorityqueue.extractorDelegateSelector', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=4;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['EventDispatcher'] = $p['___import___']('event.EventDispatcher', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=5;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['ListWidget'] = $p['___import___']('widgets.list.ListWidget', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=6;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['InternalEdit'] = $p['___import___']('widgets.edit.InternalEdit', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['EditWidget'] = $p['___import___']('widgets.edit.EditWidget', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=7;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['conf'] = $p['___import___']('config.conf', 'bones', null, false);
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
	$m['Pane'] = $p['___import___']('pane.Pane', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=11;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['BaseBoneExtractor'] = $p['___import___']('bones.base.BaseBoneExtractor', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=13;
	$m['getDefaultValues'] = function(structure) {
		var $and3,$iter1_nextval,$iter1_type,$and1,k,$pyjs__trackstack_size_1,defaultValues,$iter1_iter,$iter1_array,v,$and2,$iter1_idx;
		$pyjs['track']={'module':'bones.relational','lineno':13};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='bones.relational';
		$pyjs['track']['lineno']=13;
		$pyjs['track']['lineno']=14;
		defaultValues = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})();
		$pyjs['track']['lineno']=15;
		$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
		$iter1_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
		return (function(){try{try{$pyjs['in_try_except'] += 1;
		return function(){
			var $iter2_nextval,$iter2_type,$iter2_iter,k,$pyjs__trackstack_size_1,$collcomp1,$iter2_idx,v,$iter2_array;
	$collcomp1 = $p['dict']();
		$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
		$iter2_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
		return structure;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
		$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
		while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
			var $tupleassign2 = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['__ass_unpack']($iter2_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			k = $tupleassign2[0];
			v = $tupleassign2[1];
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $collcomp1['__setitem__'](k, v);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
		}
		if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
			$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
			$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
		}
		$pyjs['track']['module']='bones.relational';

	return $collcomp1;}()['items']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
		$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
		while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
			var $tupleassign1 = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['__ass_unpack']($iter1_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			k = $tupleassign1[0];
			v = $tupleassign1[1];
			$pyjs['track']['lineno']=16;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and1=(function(){try{try{$pyjs['in_try_except'] += 1;
			return v['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})()['__contains__']('params'))?($p['bool']($and2=v['__getitem__']('params'))?(function(){try{try{$pyjs['in_try_except'] += 1;
			return v['__getitem__']('params')['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})()['__contains__']('defaultValue'):$and2):$and1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})()) {
				$pyjs['track']['lineno']=17;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return defaultValues['__setitem__'](k, v['__getitem__']('params')['__getitem__']('defaultValue'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
			}
		}
		if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
			$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
			$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
		}
		$pyjs['track']['module']='bones.relational';
		$pyjs['track']['lineno']=19;
		$pyjs['track']['lineno']=19;
		var $pyjs__ret = defaultValues;
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['getDefaultValues']['__name__'] = 'getDefaultValues';

	$m['getDefaultValues']['__bind_type__'] = 0;
	$m['getDefaultValues']['__args__'] = [null,null,['structure']];
	$pyjs['track']['lineno']=21;
	$m['RelationalBoneExtractor'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'bones.relational';
		$pyjs['track']['lineno']=22;
		$method = $pyjs__bind_method2('__init__', function(module, boneName, structure) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				module = arguments[1];
				boneName = arguments[2];
				structure = arguments[3];
			}

			$pyjs['track']={'module':'bones.relational', 'lineno':22};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.relational';
			$pyjs['track']['lineno']=22;
			$pyjs['track']['lineno']=23;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['RelationalBoneExtractor'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})()['__init__'](module, boneName, structure);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
			$pyjs['track']['lineno']=24;
			self['format'] = '$(dest.name)';
			$pyjs['track']['lineno']=26;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return structure['__getitem__'](boneName)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})()['__contains__']('format'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})()) {
				$pyjs['track']['lineno']=27;
				self['format'] = structure['__getitem__'](boneName)['__getitem__']('format');
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['module'],['boneName'],['structure']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=29;
		$method = $pyjs__bind_method2('render', function(data, field) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				field = arguments[2];
			}
			var val,$pyjs_try_err,structure;
			$pyjs['track']={'module':'bones.relational', 'lineno':29};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.relational';
			$pyjs['track']['lineno']=29;
			$pyjs['track']['lineno']=30;
			if (!( $p['op_eq'](field, $p['getattr'](self, 'boneName')) )) {
			   throw $p['AssertionError']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('render() was called with field %s, expected %s', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple']([field, $p['getattr'](self, 'boneName')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})());
			 }
			$pyjs['track']['lineno']=32;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return data['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})()['__contains__'](field));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})()) {
				$pyjs['track']['lineno']=33;
				val = data['__getitem__'](field);
			}
			else {
				$pyjs['track']['lineno']=35;
				val = '';
			}
			$pyjs['track']['lineno']=37;
			structure = $p['getattr'](self, 'structure')['__getitem__']($p['getattr'](self, 'boneName'));
			$pyjs['track']['lineno']=39;
			var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
			try {
				try {
					$pyjs['in_try_except'] += 1;
					$pyjs['track']['lineno']=40;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['isinstance'](val, $p['list']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})()) {
						$pyjs['track']['lineno']=41;
						val = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['list']([val]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
					}
					$pyjs['track']['lineno']=43;
					val = (function(){try{try{$pyjs['in_try_except'] += 1;
					return ', '['join'](function(){
						var $iter3_idx,$or1,$or2,$iter3_nextval,$iter3_array,$collcomp2,$pyjs__trackstack_size_2,$iter3_iter,$iter3_type,x;
	$collcomp2 = $p['list']();
					$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
					$iter3_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return val;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
					$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
					while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
						x = $iter3_nextval['$nextval'];
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $collcomp2['append'](($p['bool']($or1=(function(){try{try{$pyjs['in_try_except'] += 1;
						return $pyjs_kwargs_call($m['utils'], 'formatString', null, null, [{'prefix':(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['list'](['rel']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})(), 'language':$m['conf']['__getitem__']('currentlanguage')}, (function(){try{try{$pyjs['in_try_except'] += 1;
						return $pyjs_kwargs_call($m['utils'], 'formatString', null, null, [{'prefix':(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['list'](['dest']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})(), 'language':$m['conf']['__getitem__']('currentlanguage')}, $p['getattr'](self, 'format'), x['__getitem__']('dest'), structure['__getitem__']('relskel')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})(), x['__getitem__']('rel'), structure['__getitem__']('using')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})())?$or1:x['__getitem__']('key')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='bones.relational';

	return $collcomp2;}());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
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
				$pyjs['track']['module']='bones.relational';
				if (true) {
					$pyjs['track']['lineno']=51;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['printFunc'](['Cannot build relational format, maybe garbage received?'], 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
					$pyjs['track']['lineno']=52;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['printFunc']([val], 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
					$pyjs['track']['lineno']=53;
					val = '';
				}
			}
			$pyjs['track']['lineno']=55;
			$pyjs['track']['lineno']=55;
			var $pyjs__ret = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['data'],['field']]);
		$cls_definition['render'] = $method;
		$pyjs['track']['lineno']=57;
		$method = $pyjs__bind_method2('raw', function(data, field) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				field = arguments[2];
			}
			var val,$pyjs_try_err,structure;
			$pyjs['track']={'module':'bones.relational', 'lineno':57};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.relational';
			$pyjs['track']['lineno']=57;
			$pyjs['track']['lineno']=58;
			if (!( $p['op_eq'](field, $p['getattr'](self, 'boneName')) )) {
			   throw $p['AssertionError']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('render() was called with field %s, expected %s', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple']([field, $p['getattr'](self, 'boneName')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})());
			 }
			$pyjs['track']['lineno']=60;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return data['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})()['__contains__'](field)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})()) {
				$pyjs['track']['lineno']=61;
				$pyjs['track']['lineno']=61;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=63;
			val = data['__getitem__'](field);
			$pyjs['track']['lineno']=64;
			structure = $p['getattr'](self, 'skelStructure')['__getitem__']($p['getattr'](self, 'boneName'));
			$pyjs['track']['lineno']=66;
			var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
			try {
				try {
					$pyjs['in_try_except'] += 1;
					$pyjs['track']['lineno']=67;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['isinstance'](val, $p['list']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})()) {
						$pyjs['track']['lineno']=68;
						val = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['list']([val]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})();
					}
					$pyjs['track']['lineno']=70;
					val = function(){
						var $or4,$or3,$iter4_nextval,$collcomp3,$iter4_idx,$pyjs__trackstack_size_2,$iter4_type,$iter4_array,x,$iter4_iter;
	$collcomp3 = $p['list']();
					$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
					$iter4_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return val;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})();
					$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
					while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
						x = $iter4_nextval['$nextval'];
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $collcomp3['append'](($p['bool']($or3=(function(){try{try{$pyjs['in_try_except'] += 1;
						return $pyjs_kwargs_call($m['utils'], 'formatString', null, null, [{'prefix':(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['list'](['rel']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})(), 'language':$m['conf']['__getitem__']('currentlanguage')}, (function(){try{try{$pyjs['in_try_except'] += 1;
						return $pyjs_kwargs_call($m['utils'], 'formatString', null, null, [{'prefix':(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['list'](['dest']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})(), 'language':$m['conf']['__getitem__']('currentlanguage')}, $p['getattr'](self, 'format'), x['__getitem__']('dest'), structure['__getitem__']('relskel')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})(), x['__getitem__']('rel'), structure['__getitem__']('using')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})())?$or3:x['__getitem__']('key')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='bones.relational';

	return $collcomp3;}();
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
				$pyjs['track']['module']='bones.relational';
				if (true) {
					$pyjs['track']['lineno']=78;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['printFunc'](['Cannot build relational format, maybe garbage received?'], 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})();
					$pyjs['track']['lineno']=79;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['printFunc']([val], 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})();
					$pyjs['track']['lineno']=80;
					$pyjs['track']['lineno']=80;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
			}
			$pyjs['track']['lineno']=82;
			$pyjs['track']['lineno']=82;
			var $pyjs__ret = ($p['bool']($p['op_eq']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len'](val);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})(), 1))? (val['__getitem__'](0)) : (val));
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['data'],['field']]);
		$cls_definition['raw'] = $method;
		$pyjs['track']['lineno']=21;
		var $bases = new Array($m['BaseBoneExtractor']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('RelationalBoneExtractor', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=84;
	$m['RelationalViewBoneDelegate'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'bones.relational';
		$pyjs['track']['lineno']=86;
		$method = $pyjs__bind_method2('__init__', function(module, boneName, structure) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				module = arguments[1];
				boneName = arguments[2];
				structure = arguments[3];
			}

			$pyjs['track']={'module':'bones.relational', 'lineno':86};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.relational';
			$pyjs['track']['lineno']=86;
			$pyjs['track']['lineno']=87;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['RelationalViewBoneDelegate'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})()['__init__']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})();
			$pyjs['track']['lineno']=88;
			self['format'] = '$(dest.name)';
			$pyjs['track']['lineno']=90;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return structure['__getitem__'](boneName)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})()['__contains__']('format'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})()) {
				$pyjs['track']['lineno']=91;
				self['format'] = structure['__getitem__'](boneName)['__getitem__']('format');
			}
			$pyjs['track']['lineno']=93;
			self['module'] = module;
			$pyjs['track']['lineno']=94;
			self['structure'] = structure;
			$pyjs['track']['lineno']=95;
			self['boneName'] = boneName;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['module'],['boneName'],['structure']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=97;
		$method = $pyjs__bind_method2('render', function(data, field) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				field = arguments[2];
			}
			var count,$pyjs_try_err,val,$sub6,res,$and4,$and5,$and6,$and7,$add2,$add1,$sub5,$sub3,$sub2,$sub1,lbl,structure,$sub4;
			$pyjs['track']={'module':'bones.relational', 'lineno':97};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.relational';
			$pyjs['track']['lineno']=97;
			$pyjs['track']['lineno']=98;
			if (!( $p['op_eq'](field, $p['getattr'](self, 'boneName')) )) {
			   throw $p['AssertionError']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('render() was called with field %s, expected %s', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple']([field, $p['getattr'](self, 'boneName')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})());
			 }
			$pyjs['track']['lineno']=99;
			val = (function(){try{try{$pyjs['in_try_except'] += 1;
			return data['get'](field, '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})();
			$pyjs['track']['lineno']=101;
			structure = $p['getattr'](self, 'structure')['__getitem__']($p['getattr'](self, 'boneName'));
			$pyjs['track']['lineno']=103;
			lbl = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Label']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})();
			$pyjs['track']['lineno']=105;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool'](val));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})()) {
				$pyjs['track']['lineno']=106;
				$pyjs['track']['lineno']=106;
				var $pyjs__ret = lbl;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=108;
			var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
			try {
				try {
					$pyjs['in_try_except'] += 1;
					$pyjs['track']['lineno']=109;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['isinstance'](val, $p['list']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})()) {
						$pyjs['track']['lineno']=110;
						val = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['list']([val]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})();
						$pyjs['track']['lineno']=111;
						count = 1;
					}
					else {
						$pyjs['track']['lineno']=113;
						count = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['len'](val);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})();
						$pyjs['track']['lineno']=114;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](($p['bool']($and4=$m['conf']['__getitem__']('maxMultiBoneEntries'))?((($p['cmp'](count, $m['conf']['__getitem__']('maxMultiBoneEntries')))|1) == 1):$and4));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})()) {
							$pyjs['track']['lineno']=115;
							val = $p['__getslice'](val, 0, $p['__op_sub']($sub1=$m['conf']['__getitem__']('maxMultiBoneEntries'),$sub2=1));
						}
					}
					$pyjs['track']['lineno']=117;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](structure['__getitem__']('using'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})()) {
						$pyjs['track']['lineno']=118;
						res = (function(){try{try{$pyjs['in_try_except'] += 1;
						return '\n'['join'](function(){
							var $iter5_nextval,x,$or6,$or5,$iter5_idx,$collcomp4,$iter5_iter,$pyjs__trackstack_size_2,$iter5_array,$iter5_type;
	$collcomp4 = $p['list']();
						$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
						$iter5_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return val;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})();
						$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
						while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
							x = $iter5_nextval['$nextval'];
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $collcomp4['append'](($p['bool']($or5=(function(){try{try{$pyjs['in_try_except'] += 1;
							return $pyjs_kwargs_call($m['utils'], 'formatString', null, null, [{'prefix':(function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['list'](['rel']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})(), 'language':$m['conf']['__getitem__']('currentlanguage')}, (function(){try{try{$pyjs['in_try_except'] += 1;
							return $pyjs_kwargs_call($m['utils'], 'formatString', null, null, [{'prefix':(function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['list'](['dest']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})(), 'language':$m['conf']['__getitem__']('currentlanguage')}, $p['getattr'](self, 'format'), x['__getitem__']('dest'), structure['__getitem__']('relskel')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})(), x['__getitem__']('rel'), structure['__getitem__']('using')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})())?$or5:x['__getitem__']('key')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})();
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='bones.relational';

	return $collcomp4;}());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})();
					}
					else {
						$pyjs['track']['lineno']=125;
						res = (function(){try{try{$pyjs['in_try_except'] += 1;
						return '\n'['join'](function(){
							var $or7,$iter6_idx,$iter6_type,$collcomp5,$or8,$iter6_array,$pyjs__trackstack_size_2,x,$iter6_iter,$iter6_nextval;
	$collcomp5 = $p['list']();
						$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
						$iter6_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return val;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})();
						$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
						while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
							x = $iter6_nextval['$nextval'];
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $collcomp5['append'](($p['bool']($or7=(function(){try{try{$pyjs['in_try_except'] += 1;
							return $pyjs_kwargs_call($m['utils'], 'formatString', null, null, [{'language':$m['conf']['__getitem__']('currentlanguage')}, (function(){try{try{$pyjs['in_try_except'] += 1;
							return $pyjs_kwargs_call($m['utils'], 'formatString', null, null, [{'prefix':(function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['list'](['dest']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})(), 'language':$m['conf']['__getitem__']('currentlanguage')}, $p['getattr'](self, 'format'), x['__getitem__']('dest'), structure['__getitem__']('relskel')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})(), x['__getitem__']('dest'), structure['__getitem__']('relskel')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})())?$or7:x['__getitem__']('key')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})();
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='bones.relational';

	return $collcomp5;}());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})();
					}
					$pyjs['track']['lineno']=132;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['bool']($and6=$m['conf']['__getitem__']('maxMultiBoneEntries'))?((($p['cmp'](count, $m['conf']['__getitem__']('maxMultiBoneEntries')))|1) == 1):$and6));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})()) {
						$pyjs['track']['lineno']=133;
						res = $p['__op_add']($add1=res,$add2=(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['sprintf']('\n%s', (function(){try{try{$pyjs['in_try_except'] += 1;
						return $pyjs_kwargs_call(null, $m['translate'], null, null, [{'count':$p['__op_sub']($sub5=$p['__op_sub']($sub3=count,$sub4=$m['conf']['__getitem__']('maxMultiBoneEntries')),$sub6=1)}, 'and {count} more']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})());
					}
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
				$pyjs['track']['module']='bones.relational';
				if (true) {
					$pyjs['track']['lineno']=137;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['printFunc'](['Cannot build relational format, maybe garbage received?'], 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})();
					$pyjs['track']['lineno']=138;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['printFunc']([val], 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})();
					$pyjs['track']['lineno']=140;
					res = '';
				}
			}
			$pyjs['track']['lineno']=142;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['utils']['textToHtml'](lbl, res);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})();
			$pyjs['track']['lineno']=143;
			$pyjs['track']['lineno']=143;
			var $pyjs__ret = lbl;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['data'],['field']]);
		$cls_definition['render'] = $method;
		$pyjs['track']['lineno']=84;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('RelationalViewBoneDelegate', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=146;
	$m['RelationalSingleSelectionBone'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'bones.relational';
		$pyjs['track']['lineno']=151;
		$method = $pyjs__bind_method2('__init__', function(srcModule, boneName, readOnly, destModule, format, required, using, usingDescr) {
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
				srcModule = arguments[1];
				boneName = arguments[2];
				readOnly = arguments[3];
				destModule = arguments[4];
				format = arguments[5];
				required = arguments[6];
				using = arguments[7];
				usingDescr = arguments[8];
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
				if (typeof usingDescr != 'undefined') {
					if (usingDescr !== null && typeof usingDescr['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = usingDescr;
						usingDescr = arguments[9];
					}
				} else 				if (typeof using != 'undefined') {
					if (using !== null && typeof using['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = using;
						using = arguments[9];
					}
				} else 				if (typeof required != 'undefined') {
					if (required !== null && typeof required['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = required;
						required = arguments[9];
					}
				} else 				if (typeof format != 'undefined') {
					if (format !== null && typeof format['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = format;
						format = arguments[9];
					}
				} else 				if (typeof destModule != 'undefined') {
					if (destModule !== null && typeof destModule['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = destModule;
						destModule = arguments[9];
					}
				} else 				if (typeof readOnly != 'undefined') {
					if (readOnly !== null && typeof readOnly['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = readOnly;
						readOnly = arguments[9];
					}
				} else 				if (typeof boneName != 'undefined') {
					if (boneName !== null && typeof boneName['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = boneName;
						boneName = arguments[9];
					}
				} else 				if (typeof srcModule != 'undefined') {
					if (srcModule !== null && typeof srcModule['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = srcModule;
						srcModule = arguments[9];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[9];
					}
				} else {
				}
			}
			if (typeof format == 'undefined') format=arguments['callee']['__args__'][7][1];
			if (typeof required == 'undefined') required=arguments['callee']['__args__'][8][1];
			if (typeof using == 'undefined') using=arguments['callee']['__args__'][9][1];
			if (typeof usingDescr == 'undefined') usingDescr=arguments['callee']['__args__'][10][1];
			var $or14,$add6,$add7,$and8,$and9,$or13,$or9,$and12,$and13,$and10,$and11,$and14,$add3,$add5,$or11,$or10,$add4,$or12,$add8;
			$pyjs['track']={'module':'bones.relational', 'lineno':151};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.relational';
			$pyjs['track']['lineno']=151;
			$pyjs['track']['lineno']=165;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['RelationalSingleSelectionBone'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})();
			$pyjs['track']['lineno']=166;
			self['srcModule'] = srcModule;
			$pyjs['track']['lineno']=167;
			self['boneName'] = boneName;
			$pyjs['track']['lineno']=168;
			self['readOnly'] = readOnly;
			$pyjs['track']['lineno']=169;
			self['destModule'] = destModule;
			$pyjs['track']['lineno']=170;
			self['format'] = format;
			$pyjs['track']['lineno']=171;
			self['using'] = using;
			$pyjs['track']['lineno']=172;
			self['usingDescr'] = usingDescr;
			$pyjs['track']['lineno']=174;
			self['selection'] = null;
			$pyjs['track']['lineno']=175;
			self['selectionTxt'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Input']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
}})();
			$pyjs['track']['lineno']=176;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'selectionTxt')['__setitem__']('type', 'text');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})();
			$pyjs['track']['lineno']=177;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'selectionTxt')['__setitem__']('readonly', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})();
			$pyjs['track']['lineno']=178;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'selectionTxt'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})();
			$pyjs['track']['lineno']=179;
			self['ie'] = null;
			$pyjs['track']['lineno']=182;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and8=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('modules')['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_88_err){if (!$p['isinstance']($pyjs_dbg_88_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_88_err);}throw $pyjs_dbg_88_err;
}})()['__contains__'](destModule))?($p['bool']($or9=$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']('root'))?$or9:$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']($p['__op_add']($add3=destModule,$add4='-view'))):$and8));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_89_err){if (!$p['isinstance']($pyjs_dbg_89_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_89_err);}throw $pyjs_dbg_89_err;
}})()) {
				$pyjs['track']['lineno']=185;
				self['selectBtn'] = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['ext']['Button']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['translate']('Select');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_90_err){if (!$p['isinstance']($pyjs_dbg_90_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_90_err);}throw $pyjs_dbg_90_err;
}})(), $p['getattr'](self, 'onShowSelector'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_91_err){if (!$p['isinstance']($pyjs_dbg_91_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_91_err);}throw $pyjs_dbg_91_err;
}})();
				$pyjs['track']['lineno']=186;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'selectBtn')['__getitem__']('class')['append']('icon');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_92_err){if (!$p['isinstance']($pyjs_dbg_92_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_92_err);}throw $pyjs_dbg_92_err;
}})();
				$pyjs['track']['lineno']=187;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'selectBtn')['__getitem__']('class')['append']('select');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_93_err){if (!$p['isinstance']($pyjs_dbg_93_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_93_err);}throw $pyjs_dbg_93_err;
}})();
				$pyjs['track']['lineno']=188;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['appendChild']($p['getattr'](self, 'selectBtn'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_94_err){if (!$p['isinstance']($pyjs_dbg_94_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_94_err);}throw $pyjs_dbg_94_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=190;
				self['selectBtn'] = null;
			}
			$pyjs['track']['lineno']=193;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and10=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('modules')['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_95_err){if (!$p['isinstance']($pyjs_dbg_95_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_95_err);}throw $pyjs_dbg_95_err;
}})()['__contains__'](destModule))?($p['bool']($or11=$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']('root'))?$or11:$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']($p['__op_add']($add5=destModule,$add6='-edit'))):$and10));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_96_err){if (!$p['isinstance']($pyjs_dbg_96_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_96_err);}throw $pyjs_dbg_96_err;
}})()) {
				$pyjs['track']['lineno']=195;
				self['editBtn'] = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['ext']['Button']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['translate']('Edit');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_97_err){if (!$p['isinstance']($pyjs_dbg_97_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_97_err);}throw $pyjs_dbg_97_err;
}})(), $p['getattr'](self, 'onEdit'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_98_err){if (!$p['isinstance']($pyjs_dbg_98_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_98_err);}throw $pyjs_dbg_98_err;
}})();
				$pyjs['track']['lineno']=196;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'editBtn')['__getitem__']('class')['append']('icon');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_99_err){if (!$p['isinstance']($pyjs_dbg_99_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_99_err);}throw $pyjs_dbg_99_err;
}})();
				$pyjs['track']['lineno']=197;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'editBtn')['__getitem__']('class')['append']('edit');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_100_err){if (!$p['isinstance']($pyjs_dbg_100_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_100_err);}throw $pyjs_dbg_100_err;
}})();
				$pyjs['track']['lineno']=198;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['appendChild']($p['getattr'](self, 'editBtn'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_101_err){if (!$p['isinstance']($pyjs_dbg_101_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_101_err);}throw $pyjs_dbg_101_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=200;
				self['editBtn'] = null;
			}
			$pyjs['track']['lineno']=203;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and12=!$p['bool'](required))?($p['bool']($and13=!$p['bool'](readOnly))?($p['bool']($or13=$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']('root'))?$or13:$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']($p['__op_add']($add7=destModule,$add8='-view'))):$and13):$and12));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_102_err){if (!$p['isinstance']($pyjs_dbg_102_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_102_err);}throw $pyjs_dbg_102_err;
}})()) {
				$pyjs['track']['lineno']=209;
				self['remBtn'] = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['ext']['Button']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['translate']('Remove');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_103_err){if (!$p['isinstance']($pyjs_dbg_103_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_103_err);}throw $pyjs_dbg_103_err;
}})(), $p['getattr'](self, 'onRemove'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_104_err){if (!$p['isinstance']($pyjs_dbg_104_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_104_err);}throw $pyjs_dbg_104_err;
}})();
				$pyjs['track']['lineno']=210;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'remBtn')['__getitem__']('class')['append']('icon');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_105_err){if (!$p['isinstance']($pyjs_dbg_105_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_105_err);}throw $pyjs_dbg_105_err;
}})();
				$pyjs['track']['lineno']=211;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'remBtn')['__getitem__']('class')['append']('cancel');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_106_err){if (!$p['isinstance']($pyjs_dbg_106_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_106_err);}throw $pyjs_dbg_106_err;
}})();
				$pyjs['track']['lineno']=212;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['appendChild']($p['getattr'](self, 'remBtn'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_107_err){if (!$p['isinstance']($pyjs_dbg_107_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_107_err);}throw $pyjs_dbg_107_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=214;
				self['remBtn'] = null;
			}
			$pyjs['track']['lineno']=216;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'readOnly'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_108_err){if (!$p['isinstance']($pyjs_dbg_108_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_108_err);}throw $pyjs_dbg_108_err;
}})()) {
				$pyjs['track']['lineno']=217;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__setitem__']('disabled', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_109_err){if (!$p['isinstance']($pyjs_dbg_109_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_109_err);}throw $pyjs_dbg_109_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['srcModule'],['boneName'],['readOnly'],['destModule'],['format', '$(dest.name)'],['required', false],['using', null],['usingDescr', null]]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=219;
		$method = $pyjs__bind_method2('_setDisabled', function(disable) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				disable = arguments[1];
			}
			var $and16,$and17,$and15;
			$pyjs['track']={'module':'bones.relational', 'lineno':219};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.relational';
			$pyjs['track']['lineno']=219;
			$pyjs['track']['lineno']=223;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['RelationalSingleSelectionBone'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_110_err){if (!$p['isinstance']($pyjs_dbg_110_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_110_err);}throw $pyjs_dbg_110_err;
}})()['_setDisabled'](disable);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_111_err){if (!$p['isinstance']($pyjs_dbg_111_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_111_err);}throw $pyjs_dbg_111_err;
}})();
			$pyjs['track']['lineno']=224;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and15=!$p['bool'](disable))?($p['bool']($and16=!$p['bool']($p['getattr'](self, '_disabledState')))?(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_112_err){if (!$p['isinstance']($pyjs_dbg_112_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_112_err);}throw $pyjs_dbg_112_err;
}})()['__getitem__']('class')['__contains__']('is_active'):$and16):$and15));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_113_err){if (!$p['isinstance']($pyjs_dbg_113_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_113_err);}throw $pyjs_dbg_113_err;
}})()) {
				$pyjs['track']['lineno']=225;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_114_err){if (!$p['isinstance']($pyjs_dbg_114_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_114_err);}throw $pyjs_dbg_114_err;
}})()['__getitem__']('class')['remove']('is_active');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_115_err){if (!$p['isinstance']($pyjs_dbg_115_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_115_err);}throw $pyjs_dbg_115_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['disable']]);
		$cls_definition['_setDisabled'] = $method;
		$pyjs['track']['lineno']=228;
		$method = $pyjs__bind_method2('fromSkelStructure', function(moduleName, boneName, skelStructure) {
    var cls = this['prototype'];
			var $and20,format,required,usingDescr,$and26,readOnly,$and25,using,$and23,$and22,$and18,$and19,$and24,$and21,destModule;
			$pyjs['track']={'module':'bones.relational', 'lineno':228};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.relational';
			$pyjs['track']['lineno']=228;
			$pyjs['track']['lineno']=238;
			readOnly = ($p['bool']($and18=(function(){try{try{$pyjs['in_try_except'] += 1;
			return skelStructure['__getitem__'](boneName)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_116_err){if (!$p['isinstance']($pyjs_dbg_116_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_116_err);}throw $pyjs_dbg_116_err;
}})()['__contains__']('readonly'))?skelStructure['__getitem__'](boneName)['__getitem__']('readonly'):$and18);
			$pyjs['track']['lineno']=240;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and20=(function(){try{try{$pyjs['in_try_except'] += 1;
			return skelStructure['__getitem__'](boneName)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_117_err){if (!$p['isinstance']($pyjs_dbg_117_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_117_err);}throw $pyjs_dbg_117_err;
}})()['__contains__']('required'))?skelStructure['__getitem__'](boneName)['__getitem__']('required'):$and20));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_118_err){if (!$p['isinstance']($pyjs_dbg_118_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_118_err);}throw $pyjs_dbg_118_err;
}})()) {
				$pyjs['track']['lineno']=241;
				required = true;
			}
			else {
				$pyjs['track']['lineno']=243;
				required = false;
			}
			$pyjs['track']['lineno']=245;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return skelStructure['__getitem__'](boneName)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_119_err){if (!$p['isinstance']($pyjs_dbg_119_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_119_err);}throw $pyjs_dbg_119_err;
}})()['__contains__']('module'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_120_err){if (!$p['isinstance']($pyjs_dbg_120_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_120_err);}throw $pyjs_dbg_120_err;
}})()) {
				$pyjs['track']['lineno']=246;
				destModule = skelStructure['__getitem__'](boneName)['__getitem__']('module');
			}
			else {
				$pyjs['track']['lineno']=248;
				destModule = (function(){try{try{$pyjs['in_try_except'] += 1;
				return skelStructure['__getitem__'](boneName)['__getitem__']('type')['$$split']('.');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_121_err){if (!$p['isinstance']($pyjs_dbg_121_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_121_err);}throw $pyjs_dbg_121_err;
}})()['__getitem__'](1);
			}
			$pyjs['track']['lineno']=250;
			format = '$(name)';
			$pyjs['track']['lineno']=251;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return skelStructure['__getitem__'](boneName)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_122_err){if (!$p['isinstance']($pyjs_dbg_122_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_122_err);}throw $pyjs_dbg_122_err;
}})()['__contains__']('format'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_123_err){if (!$p['isinstance']($pyjs_dbg_123_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_123_err);}throw $pyjs_dbg_123_err;
}})()) {
				$pyjs['track']['lineno']=252;
				format = skelStructure['__getitem__'](boneName)['__getitem__']('format');
			}
			$pyjs['track']['lineno']=254;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and22=(function(){try{try{$pyjs['in_try_except'] += 1;
			return skelStructure['__getitem__'](boneName)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_124_err){if (!$p['isinstance']($pyjs_dbg_124_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_124_err);}throw $pyjs_dbg_124_err;
}})()['__contains__']('using'))?skelStructure['__getitem__'](boneName)['__getitem__']('using'):$and22));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_125_err){if (!$p['isinstance']($pyjs_dbg_125_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_125_err);}throw $pyjs_dbg_125_err;
}})()) {
				$pyjs['track']['lineno']=255;
				using = skelStructure['__getitem__'](boneName)['__getitem__']('using');
			}
			else {
				$pyjs['track']['lineno']=257;
				using = null;
			}
			$pyjs['track']['lineno']=259;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and24=(function(){try{try{$pyjs['in_try_except'] += 1;
			return skelStructure['__getitem__'](boneName)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_126_err){if (!$p['isinstance']($pyjs_dbg_126_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_126_err);}throw $pyjs_dbg_126_err;
}})()['__contains__']('params'))?($p['bool']($and25=skelStructure['__getitem__'](boneName)['__getitem__']('params'))?(function(){try{try{$pyjs['in_try_except'] += 1;
			return skelStructure['__getitem__'](boneName)['__getitem__']('params')['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_127_err){if (!$p['isinstance']($pyjs_dbg_127_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_127_err);}throw $pyjs_dbg_127_err;
}})()['__contains__']('usingDescr'):$and25):$and24));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_128_err){if (!$p['isinstance']($pyjs_dbg_128_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_128_err);}throw $pyjs_dbg_128_err;
}})()) {
				$pyjs['track']['lineno']=262;
				usingDescr = skelStructure['__getitem__'](boneName)['__getitem__']('params')['__getitem__']('usingDescr');
			}
			else {
				$pyjs['track']['lineno']=264;
				usingDescr = (function(){try{try{$pyjs['in_try_except'] += 1;
				return skelStructure['__getitem__'](boneName)['get']('descr', boneName);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_129_err){if (!$p['isinstance']($pyjs_dbg_129_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_129_err);}throw $pyjs_dbg_129_err;
}})();
			}
			$pyjs['track']['lineno']=266;
			$pyjs['track']['lineno']=266;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(null, cls, null, null, [{'destModule':destModule, 'format':format, 'required':required, 'using':using, 'usingDescr':usingDescr}, moduleName, boneName, readOnly]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_130_err){if (!$p['isinstance']($pyjs_dbg_130_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_130_err);}throw $pyjs_dbg_130_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 2, [null,null,['cls'],['moduleName'],['boneName'],['skelStructure']]);
		$cls_definition['fromSkelStructure'] = $method;
		$pyjs['track']['lineno']=269;
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
			$pyjs['track']={'module':'bones.relational', 'lineno':269};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.relational';
			$pyjs['track']['lineno']=269;
			$pyjs['track']['lineno']=273;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool']($p['getattr'](self, 'selection')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_131_err){if (!$p['isinstance']($pyjs_dbg_131_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_131_err);}throw $pyjs_dbg_131_err;
}})()) {
				$pyjs['track']['lineno']=274;
				$pyjs['track']['lineno']=274;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=276;
			pane = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(null, $m['Pane'], null, null, [{'closeable':true, 'iconClasses':(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('module_%s', $p['getattr'](self, 'destModule'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_133_err){if (!$p['isinstance']($pyjs_dbg_133_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_133_err);}throw $pyjs_dbg_133_err;
}})(), 'apptype_list', 'action_edit']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_134_err){if (!$p['isinstance']($pyjs_dbg_134_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_134_err);}throw $pyjs_dbg_134_err;
}})()}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Edit');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_132_err){if (!$p['isinstance']($pyjs_dbg_132_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_132_err);}throw $pyjs_dbg_132_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_135_err){if (!$p['isinstance']($pyjs_dbg_135_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_135_err);}throw $pyjs_dbg_135_err;
}})();
			$pyjs['track']['lineno']=278;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['conf']['__getitem__']('mainWindow'), 'stackPane', null, null, [{'focus':true}, pane]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_136_err){if (!$p['isinstance']($pyjs_dbg_136_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_136_err);}throw $pyjs_dbg_136_err;
}})();
			$pyjs['track']['lineno']=280;
			var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
			try {
				try {
					$pyjs['in_try_except'] += 1;
					$pyjs['track']['lineno']=281;
					edwg = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $pyjs_kwargs_call(null, $m['EditWidget'], null, null, [{'key':$p['getattr'](self, 'selection')['__getitem__']('dest')['__getitem__']('key')}, $p['getattr'](self, 'destModule'), $p['getattr']($m['EditWidget'], 'appList')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_137_err){if (!$p['isinstance']($pyjs_dbg_137_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_137_err);}throw $pyjs_dbg_137_err;
}})();
					$pyjs['track']['lineno']=282;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return pane['addWidget'](edwg);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_138_err){if (!$p['isinstance']($pyjs_dbg_138_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_138_err);}throw $pyjs_dbg_138_err;
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
				$pyjs['track']['module']='bones.relational';
				if (($pyjs_try_err_name == $p['AssertionError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AssertionError'])) {
					$pyjs['track']['lineno']=285;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['conf']['__getitem__']('mainWindow')['removePane'](pane);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_139_err){if (!$p['isinstance']($pyjs_dbg_139_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_139_err);}throw $pyjs_dbg_139_err;
}})();
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['onEdit'] = $method;
		$pyjs['track']['lineno']=287;
		$method = $pyjs__bind_method2('onRemove', function() {
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

			$pyjs['track']={'module':'bones.relational', 'lineno':287};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.relational';
			$pyjs['track']['lineno']=287;
			$pyjs['track']['lineno']=288;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['setSelection'](null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_140_err){if (!$p['isinstance']($pyjs_dbg_140_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_140_err);}throw $pyjs_dbg_140_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['onRemove'] = $method;
		$pyjs['track']['lineno']=290;
		$method = $pyjs__bind_method2('unserialize', function(data) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}
			var val;
			$pyjs['track']={'module':'bones.relational', 'lineno':290};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.relational';
			$pyjs['track']['lineno']=290;
			$pyjs['track']['lineno']=296;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return data['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_141_err){if (!$p['isinstance']($pyjs_dbg_141_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_141_err);}throw $pyjs_dbg_141_err;
}})()['__contains__']($p['getattr'](self, 'boneName')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_142_err){if (!$p['isinstance']($pyjs_dbg_142_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_142_err);}throw $pyjs_dbg_142_err;
}})()) {
				$pyjs['track']['lineno']=297;
				val = data['__getitem__']($p['getattr'](self, 'boneName'));
				$pyjs['track']['lineno']=298;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](val, $p['list']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_143_err){if (!$p['isinstance']($pyjs_dbg_143_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_143_err);}throw $pyjs_dbg_143_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_144_err){if (!$p['isinstance']($pyjs_dbg_144_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_144_err);}throw $pyjs_dbg_144_err;
}})()) {
					$pyjs['track']['lineno']=299;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len'](val);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_145_err){if (!$p['isinstance']($pyjs_dbg_145_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_145_err);}throw $pyjs_dbg_145_err;
}})(), 0) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_146_err){if (!$p['isinstance']($pyjs_dbg_146_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_146_err);}throw $pyjs_dbg_146_err;
}})()) {
						$pyjs['track']['lineno']=300;
						val = val['__getitem__'](0);
					}
					else {
						$pyjs['track']['lineno']=302;
						val = null;
					}
				}
				$pyjs['track']['lineno']=303;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](val, $p['dict']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_147_err){if (!$p['isinstance']($pyjs_dbg_147_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_147_err);}throw $pyjs_dbg_147_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_148_err){if (!$p['isinstance']($pyjs_dbg_148_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_148_err);}throw $pyjs_dbg_148_err;
}})()) {
					$pyjs['track']['lineno']=304;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['setSelection'](val);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_149_err){if (!$p['isinstance']($pyjs_dbg_149_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_149_err);}throw $pyjs_dbg_149_err;
}})();
					$pyjs['track']['lineno']=305;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['getattr'](self, 'using'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_150_err){if (!$p['isinstance']($pyjs_dbg_150_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_150_err);}throw $pyjs_dbg_150_err;
}})()) {
						$pyjs['track']['lineno']=306;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']($p['getattr'](self, 'ie'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_151_err){if (!$p['isinstance']($pyjs_dbg_151_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_151_err);}throw $pyjs_dbg_151_err;
}})()) {
							$pyjs['track']['lineno']=307;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return self['removeChild']($p['getattr'](self, 'ie'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_152_err){if (!$p['isinstance']($pyjs_dbg_152_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_152_err);}throw $pyjs_dbg_152_err;
}})();
						}
						$pyjs['track']['lineno']=309;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['printFunc']([(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['tuple'](['2 WITH ', data['__getitem__']('rel')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_153_err){if (!$p['isinstance']($pyjs_dbg_153_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_153_err);}throw $pyjs_dbg_153_err;
}})()], 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_154_err){if (!$p['isinstance']($pyjs_dbg_154_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_154_err);}throw $pyjs_dbg_154_err;
}})();
						$pyjs['track']['lineno']=311;
						self['ie'] = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $pyjs_kwargs_call(null, $m['InternalEdit'], null, null, [{'readOnly':$p['getattr'](self, 'readOnly'), 'defaultCat':$p['getattr'](self, 'usingDescr')}, $p['getattr'](self, 'using'), val['__getitem__']('rel'), (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_155_err){if (!$p['isinstance']($pyjs_dbg_155_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_155_err);}throw $pyjs_dbg_155_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_156_err){if (!$p['isinstance']($pyjs_dbg_156_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_156_err);}throw $pyjs_dbg_156_err;
}})();
						$pyjs['track']['lineno']=313;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return self['appendChild']($p['getattr'](self, 'ie'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_157_err){if (!$p['isinstance']($pyjs_dbg_157_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_157_err);}throw $pyjs_dbg_157_err;
}})();
					}
				}
				else {
					$pyjs['track']['lineno']=315;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['setSelection'](null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_158_err){if (!$p['isinstance']($pyjs_dbg_158_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_158_err);}throw $pyjs_dbg_158_err;
}})();
				}
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['data']]);
		$cls_definition['unserialize'] = $method;
		$pyjs['track']['lineno']=317;
		$method = $pyjs__bind_method2('serializeForPost', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var res,$and29,r,$and28,$and27;
			$pyjs['track']={'module':'bones.relational', 'lineno':317};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.relational';
			$pyjs['track']['lineno']=317;
			$pyjs['track']['lineno']=322;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool'](($p['bool']($and27=$p['getattr'](self, 'selection'))?($p['bool']($and28=(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['selection']['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_159_err){if (!$p['isinstance']($pyjs_dbg_159_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_159_err);}throw $pyjs_dbg_159_err;
}})()['__contains__']('dest'))?(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'selection')['__getitem__']('dest')['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_160_err){if (!$p['isinstance']($pyjs_dbg_160_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_160_err);}throw $pyjs_dbg_160_err;
}})()['__contains__']('key'):$and28):$and27)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_161_err){if (!$p['isinstance']($pyjs_dbg_161_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_161_err);}throw $pyjs_dbg_161_err;
}})()) {
				$pyjs['track']['lineno']=324;
				$pyjs['track']['lineno']=324;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_162_err){if (!$p['isinstance']($pyjs_dbg_162_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_162_err);}throw $pyjs_dbg_162_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=325;
			res = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_163_err){if (!$p['isinstance']($pyjs_dbg_163_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_163_err);}throw $pyjs_dbg_163_err;
}})();
			$pyjs['track']['lineno']=326;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'ie'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_164_err){if (!$p['isinstance']($pyjs_dbg_164_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_164_err);}throw $pyjs_dbg_164_err;
}})()) {
				$pyjs['track']['lineno']=327;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return res['update']((function(){try{try{$pyjs['in_try_except'] += 1;
				return self['ie']['doSave']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_165_err){if (!$p['isinstance']($pyjs_dbg_165_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_165_err);}throw $pyjs_dbg_165_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_166_err){if (!$p['isinstance']($pyjs_dbg_166_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_166_err);}throw $pyjs_dbg_166_err;
}})();
			}
			$pyjs['track']['lineno']=328;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return res['__setitem__']('key', $p['getattr'](self, 'selection')['__getitem__']('dest')['__getitem__']('key'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_167_err){if (!$p['isinstance']($pyjs_dbg_167_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_167_err);}throw $pyjs_dbg_167_err;
}})();
			$pyjs['track']['lineno']=329;
			r = function(){
				var v,$iter7_nextval,$collcomp6,k,$iter7_array,$iter7_idx,$iter7_type,$pyjs__trackstack_size_1,$iter7_iter;
	$collcomp6 = $p['dict']();
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter7_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return res['items']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_169_err){if (!$p['isinstance']($pyjs_dbg_169_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_169_err);}throw $pyjs_dbg_169_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_170_err){if (!$p['isinstance']($pyjs_dbg_170_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_170_err);}throw $pyjs_dbg_170_err;
}})();
			$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
			while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
				var $tupleassign3 = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__ass_unpack']($iter7_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_168_err){if (!$p['isinstance']($pyjs_dbg_168_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_168_err);}throw $pyjs_dbg_168_err;
}})();
				k = $tupleassign3[0];
				v = $tupleassign3[1];
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $collcomp6['__setitem__']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('%s.0.%s', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$p['getattr'](self, 'boneName'), k]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_171_err){if (!$p['isinstance']($pyjs_dbg_171_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_171_err);}throw $pyjs_dbg_171_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_172_err){if (!$p['isinstance']($pyjs_dbg_172_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_172_err);}throw $pyjs_dbg_172_err;
}})(), v);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_173_err){if (!$p['isinstance']($pyjs_dbg_173_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_173_err);}throw $pyjs_dbg_173_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='bones.relational';

	return $collcomp6;}();
			$pyjs['track']['lineno']=330;
			$pyjs['track']['lineno']=330;
			var $pyjs__ret = r;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['serializeForPost'] = $method;
		$pyjs['track']['lineno']=333;
		$method = $pyjs__bind_method2('serializeForDocument', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'bones.relational', 'lineno':333};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.relational';
			$pyjs['track']['lineno']=333;
			$pyjs['track']['lineno']=334;
			$pyjs['track']['lineno']=334;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['serialize']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_174_err){if (!$p['isinstance']($pyjs_dbg_174_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_174_err);}throw $pyjs_dbg_174_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['serializeForDocument'] = $method;
		$pyjs['track']['lineno']=336;
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
			var currentSelector,$pyjs_try_err;
			$pyjs['track']={'module':'bones.relational', 'lineno':336};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.relational';
			$pyjs['track']['lineno']=336;
			$pyjs['track']['lineno']=341;
			var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
			try {
				try {
					$pyjs['in_try_except'] += 1;
					$pyjs['track']['lineno']=342;
					currentSelector = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $pyjs_kwargs_call(null, $m['ListWidget'], null, null, [{'isSelector':true}, $p['getattr'](self, 'destModule')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_175_err){if (!$p['isinstance']($pyjs_dbg_175_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_175_err);}throw $pyjs_dbg_175_err;
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
				$pyjs['track']['module']='bones.relational';
				if (($pyjs_try_err_name == $p['AssertionError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['AssertionError'])) {
					$pyjs['track']['lineno']=344;
					$pyjs['track']['lineno']=344;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
			}
			$pyjs['track']['lineno']=346;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return currentSelector['selectionActivatedEvent']['register'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_176_err){if (!$p['isinstance']($pyjs_dbg_176_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_176_err);}throw $pyjs_dbg_176_err;
}})();
			$pyjs['track']['lineno']=347;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('mainWindow')['stackWidget'](currentSelector);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_177_err){if (!$p['isinstance']($pyjs_dbg_177_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_177_err);}throw $pyjs_dbg_177_err;
}})();
			$pyjs['track']['lineno']=348;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_178_err){if (!$p['isinstance']($pyjs_dbg_178_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_178_err);}throw $pyjs_dbg_178_err;
}})()['__getitem__']('class')['append']('is_active');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_179_err){if (!$p['isinstance']($pyjs_dbg_179_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_179_err);}throw $pyjs_dbg_179_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['onShowSelector'] = $method;
		$pyjs['track']['lineno']=350;
		$method = $pyjs__bind_method2('onSelectionActivated', function(table, selection) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				table = arguments[1];
				selection = arguments[2];
			}

			$pyjs['track']={'module':'bones.relational', 'lineno':350};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.relational';
			$pyjs['track']['lineno']=350;
			$pyjs['track']['lineno']=354;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](selection);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_180_err){if (!$p['isinstance']($pyjs_dbg_180_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_180_err);}throw $pyjs_dbg_180_err;
}})()) {
				$pyjs['track']['lineno']=355;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['setSelection']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([['dest', selection['__getitem__'](0)]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_181_err){if (!$p['isinstance']($pyjs_dbg_181_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_181_err);}throw $pyjs_dbg_181_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_182_err){if (!$p['isinstance']($pyjs_dbg_182_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_182_err);}throw $pyjs_dbg_182_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=357;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['setSelection'](null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_183_err){if (!$p['isinstance']($pyjs_dbg_183_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_183_err);}throw $pyjs_dbg_183_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['table'],['selection']]);
		$cls_definition['onSelectionActivated'] = $method;
		$pyjs['track']['lineno']=359;
		$method = $pyjs__bind_method2('setSelection', function(selection) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				selection = arguments[1];
			}
			var $and30,$and31;
			$pyjs['track']={'module':'bones.relational', 'lineno':359};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.relational';
			$pyjs['track']['lineno']=359;
			$pyjs['track']['lineno']=365;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool'](selection));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_184_err){if (!$p['isinstance']($pyjs_dbg_184_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_184_err);}throw $pyjs_dbg_184_err;
}})()) {
				$pyjs['track']['lineno']=366;
				selection = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_185_err){if (!$p['isinstance']($pyjs_dbg_185_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_185_err);}throw $pyjs_dbg_185_err;
}})();
				$pyjs['track']['lineno']=367;
				self['selection'] = null;
			}
			$pyjs['track']['lineno']=369;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool']($p['getattr'](self, 'selection')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_186_err){if (!$p['isinstance']($pyjs_dbg_186_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_186_err);}throw $pyjs_dbg_186_err;
}})()) {
				$pyjs['track']['lineno']=370;
				self['selection'] = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_187_err){if (!$p['isinstance']($pyjs_dbg_187_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_187_err);}throw $pyjs_dbg_187_err;
}})();
			}
			$pyjs['track']['lineno']=372;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['selection']['update'](selection);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_188_err){if (!$p['isinstance']($pyjs_dbg_188_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_188_err);}throw $pyjs_dbg_188_err;
}})();
			$pyjs['track']['lineno']=374;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](selection);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_189_err){if (!$p['isinstance']($pyjs_dbg_189_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_189_err);}throw $pyjs_dbg_189_err;
}})()) {
				$pyjs['track']['lineno']=375;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'successHandler':$p['getattr'](self, 'onSelectionDataAvailable'), 'cacheable':true}, $p['getattr'](self, 'destModule'), (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('view/%s', selection['__getitem__']('dest')['__getitem__']('key'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_190_err){if (!$p['isinstance']($pyjs_dbg_190_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_190_err);}throw $pyjs_dbg_190_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_191_err){if (!$p['isinstance']($pyjs_dbg_191_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_191_err);}throw $pyjs_dbg_191_err;
}})();
				$pyjs['track']['lineno']=378;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'selectionTxt')['__setitem__']('value', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['translate']('Loading...');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_192_err){if (!$p['isinstance']($pyjs_dbg_192_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_192_err);}throw $pyjs_dbg_192_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_193_err){if (!$p['isinstance']($pyjs_dbg_193_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_193_err);}throw $pyjs_dbg_193_err;
}})();
				$pyjs['track']['lineno']=380;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($and30=$p['getattr'](self, 'using'))?!$p['bool']($p['getattr'](self, 'ie')):$and30));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_194_err){if (!$p['isinstance']($pyjs_dbg_194_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_194_err);}throw $pyjs_dbg_194_err;
}})()) {
					$pyjs['track']['lineno']=381;
					self['ie'] = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $pyjs_kwargs_call(null, $m['InternalEdit'], null, null, [{'readOnly':$p['getattr'](self, 'readOnly'), 'defaultCat':$p['getattr'](self, 'usingDescr')}, $p['getattr'](self, 'using'), (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['getDefaultValues']($p['getattr'](self, 'using'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_195_err){if (!$p['isinstance']($pyjs_dbg_195_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_195_err);}throw $pyjs_dbg_195_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_196_err){if (!$p['isinstance']($pyjs_dbg_196_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_196_err);}throw $pyjs_dbg_196_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_197_err){if (!$p['isinstance']($pyjs_dbg_197_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_197_err);}throw $pyjs_dbg_197_err;
}})();
					$pyjs['track']['lineno']=383;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['appendChild']($p['getattr'](self, 'ie'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_198_err){if (!$p['isinstance']($pyjs_dbg_198_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_198_err);}throw $pyjs_dbg_198_err;
}})();
				}
			}
			else {
				$pyjs['track']['lineno']=385;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'selectionTxt')['__setitem__']('value', '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_199_err){if (!$p['isinstance']($pyjs_dbg_199_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_199_err);}throw $pyjs_dbg_199_err;
}})();
			}
			$pyjs['track']['lineno']=387;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['updateButtons']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_200_err){if (!$p['isinstance']($pyjs_dbg_200_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_200_err);}throw $pyjs_dbg_200_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['selection']]);
		$cls_definition['setSelection'] = $method;
		$pyjs['track']['lineno']=389;
		$method = $pyjs__bind_method2('updateButtons', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'bones.relational', 'lineno':389};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.relational';
			$pyjs['track']['lineno']=389;
			$pyjs['track']['lineno']=393;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'selection'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_201_err){if (!$p['isinstance']($pyjs_dbg_201_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_201_err);}throw $pyjs_dbg_201_err;
}})()) {
				$pyjs['track']['lineno']=394;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, 'editBtn'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_202_err){if (!$p['isinstance']($pyjs_dbg_202_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_202_err);}throw $pyjs_dbg_202_err;
}})()) {
					$pyjs['track']['lineno']=395;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'editBtn')['__setitem__']('disabled', false);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_203_err){if (!$p['isinstance']($pyjs_dbg_203_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_203_err);}throw $pyjs_dbg_203_err;
}})();
				}
				$pyjs['track']['lineno']=396;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, 'remBtn'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_204_err){if (!$p['isinstance']($pyjs_dbg_204_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_204_err);}throw $pyjs_dbg_204_err;
}})()) {
					$pyjs['track']['lineno']=397;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'remBtn')['__setitem__']('disabled', false);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_205_err){if (!$p['isinstance']($pyjs_dbg_205_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_205_err);}throw $pyjs_dbg_205_err;
}})();
				}
			}
			else {
				$pyjs['track']['lineno']=399;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, 'editBtn'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_206_err){if (!$p['isinstance']($pyjs_dbg_206_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_206_err);}throw $pyjs_dbg_206_err;
}})()) {
					$pyjs['track']['lineno']=400;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'editBtn')['__setitem__']('disabled', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_207_err){if (!$p['isinstance']($pyjs_dbg_207_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_207_err);}throw $pyjs_dbg_207_err;
}})();
				}
				$pyjs['track']['lineno']=401;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, 'remBtn'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_208_err){if (!$p['isinstance']($pyjs_dbg_208_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_208_err);}throw $pyjs_dbg_208_err;
}})()) {
					$pyjs['track']['lineno']=402;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'remBtn')['__setitem__']('disabled', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_209_err){if (!$p['isinstance']($pyjs_dbg_209_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_209_err);}throw $pyjs_dbg_209_err;
}})();
				}
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['updateButtons'] = $method;
		$pyjs['track']['lineno']=404;
		$method = $pyjs__bind_method2('onAttach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'bones.relational', 'lineno':404};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.relational';
			$pyjs['track']['lineno']=404;
			$pyjs['track']['lineno']=405;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['RelationalSingleSelectionBone'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_210_err){if (!$p['isinstance']($pyjs_dbg_210_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_210_err);}throw $pyjs_dbg_210_err;
}})()['onAttach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_211_err){if (!$p['isinstance']($pyjs_dbg_211_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_211_err);}throw $pyjs_dbg_211_err;
}})();
			$pyjs['track']['lineno']=406;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['NetworkService']['registerChangeListener'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_212_err){if (!$p['isinstance']($pyjs_dbg_212_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_212_err);}throw $pyjs_dbg_212_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onAttach'] = $method;
		$pyjs['track']['lineno']=408;
		$method = $pyjs__bind_method2('onDetach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'bones.relational', 'lineno':408};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.relational';
			$pyjs['track']['lineno']=408;
			$pyjs['track']['lineno']=409;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['NetworkService']['removeChangeListener'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_213_err){if (!$p['isinstance']($pyjs_dbg_213_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_213_err);}throw $pyjs_dbg_213_err;
}})();
			$pyjs['track']['lineno']=410;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['RelationalSingleSelectionBone'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_214_err){if (!$p['isinstance']($pyjs_dbg_214_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_214_err);}throw $pyjs_dbg_214_err;
}})()['onDetach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_215_err){if (!$p['isinstance']($pyjs_dbg_215_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_215_err);}throw $pyjs_dbg_215_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onDetach'] = $method;
		$pyjs['track']['lineno']=412;
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

			$pyjs['track']={'module':'bones.relational', 'lineno':412};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.relational';
			$pyjs['track']['lineno']=412;
			$pyjs['track']['lineno']=413;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](module, $p['getattr'](self, 'destModule')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_216_err){if (!$p['isinstance']($pyjs_dbg_216_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_216_err);}throw $pyjs_dbg_216_err;
}})()) {
				$pyjs['track']['lineno']=414;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['setSelection']($p['getattr'](self, 'selection'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_217_err){if (!$p['isinstance']($pyjs_dbg_217_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_217_err);}throw $pyjs_dbg_217_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,['kwargs'],['self'],['module']]);
		$cls_definition['onDataChanged'] = $method;
		$pyjs['track']['lineno']=416;
		$method = $pyjs__bind_method2('onSelectionDataAvailable', function(req) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				req = arguments[1];
			}
			var res,$or15,$or17,$or16,data,$or18;
			$pyjs['track']={'module':'bones.relational', 'lineno':416};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.relational';
			$pyjs['track']['lineno']=416;
			$pyjs['track']['lineno']=420;
			data = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['NetworkService']['decode'](req);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_218_err){if (!$p['isinstance']($pyjs_dbg_218_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_218_err);}throw $pyjs_dbg_218_err;
}})();
			$pyjs['track']['lineno']=421;
			if (!( $p['op_eq']($p['getattr'](self, 'selection')['__getitem__']('dest')['__getitem__']('key'), data['__getitem__']('values')['__getitem__']('key')) )) {
			   throw $p['AssertionError']();
			 }
			$pyjs['track']['lineno']=423;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'using'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_219_err){if (!$p['isinstance']($pyjs_dbg_219_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_219_err);}throw $pyjs_dbg_219_err;
}})()) {
				$pyjs['track']['lineno']=424;
				res = ($p['bool']($or15=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call($m['utils'], 'formatString', null, null, [{'prefix':(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list'](['rel']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_222_err){if (!$p['isinstance']($pyjs_dbg_222_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_222_err);}throw $pyjs_dbg_222_err;
}})(), 'language':$m['conf']['__getitem__']('currentlanguage')}, (function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call($m['utils'], 'formatString', null, null, [{'prefix':(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list'](['dest']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_220_err){if (!$p['isinstance']($pyjs_dbg_220_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_220_err);}throw $pyjs_dbg_220_err;
}})(), 'language':$m['conf']['__getitem__']('currentlanguage')}, $p['getattr'](self, 'format'), data['__getitem__']('values'), data['__getitem__']('structure')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_221_err){if (!$p['isinstance']($pyjs_dbg_221_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_221_err);}throw $pyjs_dbg_221_err;
}})(), $p['getattr'](self, 'selection')['__getitem__']('rel'), $p['getattr'](self, 'using')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_223_err){if (!$p['isinstance']($pyjs_dbg_223_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_223_err);}throw $pyjs_dbg_223_err;
}})())?$or15:data['__getitem__']('values')['__getitem__']('key'));
			}
			else {
				$pyjs['track']['lineno']=431;
				res = ($p['bool']($or17=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call($m['utils'], 'formatString', null, null, [{'language':$m['conf']['__getitem__']('currentlanguage')}, (function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call($m['utils'], 'formatString', null, null, [{'prefix':(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list'](['dest']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_224_err){if (!$p['isinstance']($pyjs_dbg_224_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_224_err);}throw $pyjs_dbg_224_err;
}})(), 'language':$m['conf']['__getitem__']('currentlanguage')}, $p['getattr'](self, 'format'), data['__getitem__']('values'), data['__getitem__']('structure')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_225_err){if (!$p['isinstance']($pyjs_dbg_225_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_225_err);}throw $pyjs_dbg_225_err;
}})(), data['__getitem__']('values'), data['__getitem__']('structure')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_226_err){if (!$p['isinstance']($pyjs_dbg_226_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_226_err);}throw $pyjs_dbg_226_err;
}})())?$or17:data['__getitem__']('values')['__getitem__']('key'));
			}
			$pyjs['track']['lineno']=437;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'selectionTxt')['__setitem__']('value', res);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_227_err){if (!$p['isinstance']($pyjs_dbg_227_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_227_err);}throw $pyjs_dbg_227_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['req']]);
		$cls_definition['onSelectionDataAvailable'] = $method;
		$pyjs['track']['lineno']=146;
		var $bases = new Array($p['getattr']($m['html5'], 'Div'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('RelationalSingleSelectionBone', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=439;
	$m['RelationalMultiSelectionBoneEntry'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'bones.relational';
		$pyjs['track']['lineno']=445;
		$method = $pyjs__bind_method2('__init__', function(parent, module, data, using, errorInfo) {
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
				parent = arguments[1];
				module = arguments[2];
				data = arguments[3];
				using = arguments[4];
				errorInfo = arguments[5];
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
				if (typeof errorInfo != 'undefined') {
					if (errorInfo !== null && typeof errorInfo['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = errorInfo;
						errorInfo = arguments[6];
					}
				} else 				if (typeof using != 'undefined') {
					if (using !== null && typeof using['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = using;
						using = arguments[6];
					}
				} else 				if (typeof data != 'undefined') {
					if (data !== null && typeof data['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = data;
						data = arguments[6];
					}
				} else 				if (typeof module != 'undefined') {
					if (module !== null && typeof module['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = module;
						module = arguments[6];
					}
				} else 				if (typeof parent != 'undefined') {
					if (parent !== null && typeof parent['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = parent;
						parent = arguments[6];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[6];
					}
				} else {
				}
			}
			var wrapperDiv,remBtn;
			$pyjs['track']={'module':'bones.relational', 'lineno':445};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.relational';
			$pyjs['track']['lineno']=445;
			$pyjs['track']['lineno']=454;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['RelationalMultiSelectionBoneEntry'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_228_err){if (!$p['isinstance']($pyjs_dbg_228_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_228_err);}throw $pyjs_dbg_228_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_229_err){if (!$p['isinstance']($pyjs_dbg_229_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_229_err);}throw $pyjs_dbg_229_err;
}})();
			$pyjs['track']['lineno']=456;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('draggable', !$p['bool']($p['getattr'](parent, 'readOnly')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_230_err){if (!$p['isinstance']($pyjs_dbg_230_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_230_err);}throw $pyjs_dbg_230_err;
}})();
			$pyjs['track']['lineno']=457;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['sinkEvent']('onDrop', 'onDragOver', 'onDragStart', 'onDragEnd', 'onChange');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_231_err){if (!$p['isinstance']($pyjs_dbg_231_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_231_err);}throw $pyjs_dbg_231_err;
}})();
			$pyjs['track']['lineno']=459;
			self['parent'] = parent;
			$pyjs['track']['lineno']=460;
			self['module'] = module;
			$pyjs['track']['lineno']=461;
			self['data'] = data;
			$pyjs['track']['lineno']=463;
			self['txtLbl'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Label']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_232_err){if (!$p['isinstance']($pyjs_dbg_232_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_232_err);}throw $pyjs_dbg_232_err;
}})();
			$pyjs['track']['lineno']=465;
			wrapperDiv = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Div']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_233_err){if (!$p['isinstance']($pyjs_dbg_233_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_233_err);}throw $pyjs_dbg_233_err;
}})();
			$pyjs['track']['lineno']=466;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return wrapperDiv['appendChild']($p['getattr'](self, 'txtLbl'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_234_err){if (!$p['isinstance']($pyjs_dbg_234_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_234_err);}throw $pyjs_dbg_234_err;
}})();
			$pyjs['track']['lineno']=467;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return wrapperDiv['__getitem__']('class')['append']('labelwrapper');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_235_err){if (!$p['isinstance']($pyjs_dbg_235_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_235_err);}throw $pyjs_dbg_235_err;
}})();
			$pyjs['track']['lineno']=469;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool']($p['getattr'](parent, 'readOnly')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_236_err){if (!$p['isinstance']($pyjs_dbg_236_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_236_err);}throw $pyjs_dbg_236_err;
}})()) {
				$pyjs['track']['lineno']=470;
				remBtn = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['ext']['Button']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['translate']('Remove');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_237_err){if (!$p['isinstance']($pyjs_dbg_237_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_237_err);}throw $pyjs_dbg_237_err;
}})(), $p['getattr'](self, 'onRemove'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_238_err){if (!$p['isinstance']($pyjs_dbg_238_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_238_err);}throw $pyjs_dbg_238_err;
}})();
				$pyjs['track']['lineno']=471;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return remBtn['__getitem__']('class')['append']('icon');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_239_err){if (!$p['isinstance']($pyjs_dbg_239_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_239_err);}throw $pyjs_dbg_239_err;
}})();
				$pyjs['track']['lineno']=472;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return remBtn['__getitem__']('class')['append']('cancel');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_240_err){if (!$p['isinstance']($pyjs_dbg_240_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_240_err);}throw $pyjs_dbg_240_err;
}})();
				$pyjs['track']['lineno']=473;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return wrapperDiv['appendChild'](remBtn);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_241_err){if (!$p['isinstance']($pyjs_dbg_241_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_241_err);}throw $pyjs_dbg_241_err;
}})();
			}
			$pyjs['track']['lineno']=475;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild'](wrapperDiv);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_242_err){if (!$p['isinstance']($pyjs_dbg_242_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_242_err);}throw $pyjs_dbg_242_err;
}})();
			$pyjs['track']['lineno']=477;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](using);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_243_err){if (!$p['isinstance']($pyjs_dbg_243_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_243_err);}throw $pyjs_dbg_243_err;
}})()) {
				$pyjs['track']['lineno']=478;
				self['ie'] = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call(null, $m['InternalEdit'], null, null, [{'readOnly':$p['getattr'](parent, 'readOnly'), 'defaultCat':$p['getattr'](parent, 'usingDescr')}, using, data['__getitem__']('rel'), errorInfo]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_244_err){if (!$p['isinstance']($pyjs_dbg_244_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_244_err);}throw $pyjs_dbg_244_err;
}})();
				$pyjs['track']['lineno']=481;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['appendChild']($p['getattr'](self, 'ie'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_245_err){if (!$p['isinstance']($pyjs_dbg_245_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_245_err);}throw $pyjs_dbg_245_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=483;
				self['ie'] = null;
			}
			$pyjs['track']['lineno']=485;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['updateLabel']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_246_err){if (!$p['isinstance']($pyjs_dbg_246_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_246_err);}throw $pyjs_dbg_246_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['parent'],['module'],['data'],['using'],['errorInfo']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=487;
		$method = $pyjs__bind_method2('updateLabel', function(data) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}
			if (typeof data == 'undefined') data=arguments['callee']['__args__'][3][1];
			var txt;
			$pyjs['track']={'module':'bones.relational', 'lineno':487};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.relational';
			$pyjs['track']['lineno']=487;
			$pyjs['track']['lineno']=488;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((data === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_247_err){if (!$p['isinstance']($pyjs_dbg_247_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_247_err);}throw $pyjs_dbg_247_err;
}})()) {
				$pyjs['track']['lineno']=489;
				data = $p['getattr'](self, 'data');
			}
			$pyjs['track']['lineno']=491;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['txtLbl']['removeAllChildren']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_248_err){if (!$p['isinstance']($pyjs_dbg_248_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_248_err);}throw $pyjs_dbg_248_err;
}})();
			$pyjs['track']['lineno']=492;
			txt = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['utils'], 'formatString', null, null, [{'prefix':(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list'](['dest']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_249_err){if (!$p['isinstance']($pyjs_dbg_249_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_249_err);}throw $pyjs_dbg_249_err;
}})(), 'language':$m['conf']['__getitem__']('currentlanguage')}, $p['getattr']($p['getattr'](self, 'parent'), 'format'), data['__getitem__']('dest'), $p['getattr']($p['getattr'](self, 'parent'), 'relskel')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_250_err){if (!$p['isinstance']($pyjs_dbg_250_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_250_err);}throw $pyjs_dbg_250_err;
}})();
			$pyjs['track']['lineno']=495;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'ie'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_251_err){if (!$p['isinstance']($pyjs_dbg_251_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_251_err);}throw $pyjs_dbg_251_err;
}})()) {
				$pyjs['track']['lineno']=496;
				txt = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call($m['utils'], 'formatString', null, null, [{'prefix':(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list'](['rel']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_253_err){if (!$p['isinstance']($pyjs_dbg_253_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_253_err);}throw $pyjs_dbg_253_err;
}})(), 'language':$m['conf']['__getitem__']('currentlanguage')}, txt, (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['ie']['doSave']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_252_err){if (!$p['isinstance']($pyjs_dbg_252_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_252_err);}throw $pyjs_dbg_252_err;
}})(), $p['getattr']($p['getattr'](self, 'parent'), 'using')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_254_err){if (!$p['isinstance']($pyjs_dbg_254_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_254_err);}throw $pyjs_dbg_254_err;
}})();
			}
			$pyjs['track']['lineno']=499;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['utils']['textToHtml']($p['getattr'](self, 'txtLbl'), txt);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_255_err){if (!$p['isinstance']($pyjs_dbg_255_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_255_err);}throw $pyjs_dbg_255_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['data', null]]);
		$cls_definition['updateLabel'] = $method;
		$pyjs['track']['lineno']=501;
		$method = $pyjs__bind_method2('onDragStart', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'bones.relational', 'lineno':501};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.relational';
			$pyjs['track']['lineno']=501;
			$pyjs['track']['lineno']=502;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr']($p['getattr'](self, 'parent'), 'readOnly'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_256_err){if (!$p['isinstance']($pyjs_dbg_256_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_256_err);}throw $pyjs_dbg_256_err;
}})()) {
				$pyjs['track']['lineno']=503;
				$pyjs['track']['lineno']=503;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=505;
			$p['getattr'](self, 'parent')['currentDrag'] = self;
			$pyjs['track']['lineno']=506;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return event['dataTransfer']['setData']('application/json', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['json']['dumps']($p['getattr'](self, 'data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_257_err){if (!$p['isinstance']($pyjs_dbg_257_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_257_err);}throw $pyjs_dbg_257_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_258_err){if (!$p['isinstance']($pyjs_dbg_258_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_258_err);}throw $pyjs_dbg_258_err;
}})();
			$pyjs['track']['lineno']=507;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return event['stopPropagation']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_259_err){if (!$p['isinstance']($pyjs_dbg_259_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_259_err);}throw $pyjs_dbg_259_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDragStart'] = $method;
		$pyjs['track']['lineno']=509;
		$method = $pyjs__bind_method2('onDragOver', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'bones.relational', 'lineno':509};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.relational';
			$pyjs['track']['lineno']=509;
			$pyjs['track']['lineno']=510;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr']($p['getattr'](self, 'parent'), 'readOnly'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_260_err){if (!$p['isinstance']($pyjs_dbg_260_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_260_err);}throw $pyjs_dbg_260_err;
}})()) {
				$pyjs['track']['lineno']=511;
				$pyjs['track']['lineno']=511;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=513;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return event['preventDefault']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_261_err){if (!$p['isinstance']($pyjs_dbg_261_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_261_err);}throw $pyjs_dbg_261_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDragOver'] = $method;
		$pyjs['track']['lineno']=515;
		$method = $pyjs__bind_method2('onDragEnd', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'bones.relational', 'lineno':515};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.relational';
			$pyjs['track']['lineno']=515;
			$pyjs['track']['lineno']=516;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr']($p['getattr'](self, 'parent'), 'readOnly'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_262_err){if (!$p['isinstance']($pyjs_dbg_262_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_262_err);}throw $pyjs_dbg_262_err;
}})()) {
				$pyjs['track']['lineno']=517;
				$pyjs['track']['lineno']=517;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=519;
			$p['getattr'](self, 'parent')['currentDrag'] = null;
			$pyjs['track']['lineno']=520;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return event['stopPropagation']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_263_err){if (!$p['isinstance']($pyjs_dbg_263_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_263_err);}throw $pyjs_dbg_263_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDragEnd'] = $method;
		$pyjs['track']['lineno']=522;
		$method = $pyjs__bind_method2('onDrop', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $add10,$add9,$and32,$and33;
			$pyjs['track']={'module':'bones.relational', 'lineno':522};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.relational';
			$pyjs['track']['lineno']=522;
			$pyjs['track']['lineno']=523;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr']($p['getattr'](self, 'parent'), 'readOnly'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_264_err){if (!$p['isinstance']($pyjs_dbg_264_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_264_err);}throw $pyjs_dbg_264_err;
}})()) {
				$pyjs['track']['lineno']=524;
				$pyjs['track']['lineno']=524;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=526;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return event['preventDefault']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_265_err){if (!$p['isinstance']($pyjs_dbg_265_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_265_err);}throw $pyjs_dbg_265_err;
}})();
			$pyjs['track']['lineno']=527;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return event['stopPropagation']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_266_err){if (!$p['isinstance']($pyjs_dbg_266_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_266_err);}throw $pyjs_dbg_266_err;
}})();
			$pyjs['track']['lineno']=529;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and32=$p['getattr']($p['getattr'](self, 'parent'), 'currentDrag'))?!$p['op_eq']($p['getattr']($p['getattr'](self, 'parent'), 'currentDrag'), self):$and32));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_267_err){if (!$p['isinstance']($pyjs_dbg_267_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_267_err);}throw $pyjs_dbg_267_err;
}})()) {
				$pyjs['track']['lineno']=530;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['cmp']($p['getattr']($p['getattr'](self, 'element'), 'offsetTop'), $p['getattr']($p['getattr']($p['getattr']($p['getattr'](self, 'parent'), 'currentDrag'), 'element'), 'offsetTop')) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_268_err){if (!$p['isinstance']($pyjs_dbg_268_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_268_err);}throw $pyjs_dbg_268_err;
}})()) {
					$pyjs['track']['lineno']=531;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['getattr']($p['getattr'](self, 'parent'), 'entries')['__getitem__']((typeof ($usub1=1)=='number'?
						-$usub1:
						$p['op_usub']($usub1))) === self));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_269_err){if (!$p['isinstance']($pyjs_dbg_269_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_269_err);}throw $pyjs_dbg_269_err;
}})()) {
						$pyjs['track']['lineno']=532;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return self['parent']['moveEntry']($p['getattr']($p['getattr'](self, 'parent'), 'currentDrag'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_270_err){if (!$p['isinstance']($pyjs_dbg_270_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_270_err);}throw $pyjs_dbg_270_err;
}})();
					}
					else {
						$pyjs['track']['lineno']=534;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return self['parent']['moveEntry']($p['getattr']($p['getattr'](self, 'parent'), 'currentDrag'), $p['getattr']($p['getattr'](self, 'parent'), 'entries')['__getitem__']($p['__op_add']($add9=(function(){try{try{$pyjs['in_try_except'] += 1;
						return self['parent']['entries']['index'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_271_err){if (!$p['isinstance']($pyjs_dbg_271_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_271_err);}throw $pyjs_dbg_271_err;
}})(),$add10=1)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_272_err){if (!$p['isinstance']($pyjs_dbg_272_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_272_err);}throw $pyjs_dbg_272_err;
}})();
					}
				}
				else {
					$pyjs['track']['lineno']=536;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['parent']['moveEntry']($p['getattr']($p['getattr'](self, 'parent'), 'currentDrag'), self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_273_err){if (!$p['isinstance']($pyjs_dbg_273_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_273_err);}throw $pyjs_dbg_273_err;
}})();
				}
			}
			$pyjs['track']['lineno']=538;
			$p['getattr'](self, 'parent')['currentDrag'] = null;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDrop'] = $method;
		$pyjs['track']['lineno']=540;
		$method = $pyjs__bind_method2('onChange', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var data;
			$pyjs['track']={'module':'bones.relational', 'lineno':540};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.relational';
			$pyjs['track']['lineno']=540;
			$pyjs['track']['lineno']=541;
			data = (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['data']['copy']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_274_err){if (!$p['isinstance']($pyjs_dbg_274_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_274_err);}throw $pyjs_dbg_274_err;
}})();
			$pyjs['track']['lineno']=542;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return data['__getitem__']('rel')['update']((function(){try{try{$pyjs['in_try_except'] += 1;
			return self['ie']['doSave']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_275_err){if (!$p['isinstance']($pyjs_dbg_275_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_275_err);}throw $pyjs_dbg_275_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_276_err){if (!$p['isinstance']($pyjs_dbg_276_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_276_err);}throw $pyjs_dbg_276_err;
}})();
			$pyjs['track']['lineno']=544;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['updateLabel'](data);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_277_err){if (!$p['isinstance']($pyjs_dbg_277_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_277_err);}throw $pyjs_dbg_277_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onChange'] = $method;
		$pyjs['track']['lineno']=546;
		$method = $pyjs__bind_method2('onRemove', function() {
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

			$pyjs['track']={'module':'bones.relational', 'lineno':546};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.relational';
			$pyjs['track']['lineno']=546;
			$pyjs['track']['lineno']=547;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']['removeEntry'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_278_err){if (!$p['isinstance']($pyjs_dbg_278_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_278_err);}throw $pyjs_dbg_278_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['onRemove'] = $method;
		$pyjs['track']['lineno']=549;
		$method = $pyjs__bind_method2('serialize', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var res;
			$pyjs['track']={'module':'bones.relational', 'lineno':549};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.relational';
			$pyjs['track']['lineno']=549;
			$pyjs['track']['lineno']=550;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'ie'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_279_err){if (!$p['isinstance']($pyjs_dbg_279_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_279_err);}throw $pyjs_dbg_279_err;
}})()) {
				$pyjs['track']['lineno']=551;
				res = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_280_err){if (!$p['isinstance']($pyjs_dbg_280_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_280_err);}throw $pyjs_dbg_280_err;
}})();
				$pyjs['track']['lineno']=552;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return res['update']((function(){try{try{$pyjs['in_try_except'] += 1;
				return self['ie']['doSave']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_281_err){if (!$p['isinstance']($pyjs_dbg_281_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_281_err);}throw $pyjs_dbg_281_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_282_err){if (!$p['isinstance']($pyjs_dbg_282_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_282_err);}throw $pyjs_dbg_282_err;
}})();
				$pyjs['track']['lineno']=553;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return res['__setitem__']('key', $p['getattr'](self, 'data')['__getitem__']('dest')['__getitem__']('key'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_283_err){if (!$p['isinstance']($pyjs_dbg_283_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_283_err);}throw $pyjs_dbg_283_err;
}})();
				$pyjs['track']['lineno']=554;
				$pyjs['track']['lineno']=554;
				var $pyjs__ret = res;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			else {
				$pyjs['track']['lineno']=556;
				$pyjs['track']['lineno']=556;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([['key', $p['getattr'](self, 'data')['__getitem__']('dest')['__getitem__']('key')]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_284_err){if (!$p['isinstance']($pyjs_dbg_284_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_284_err);}throw $pyjs_dbg_284_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['serialize'] = $method;
		$pyjs['track']['lineno']=439;
		var $bases = new Array($p['getattr']($m['html5'], 'Div'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('RelationalMultiSelectionBoneEntry', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=559;
	$m['RelationalMultiSelectionBone'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'bones.relational';
		$pyjs['track']['lineno']=564;
		$method = $pyjs__bind_method2('__init__', function(srcModule, boneName, readOnly, destModule, format, using, usingDescr, relskel) {
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
				srcModule = arguments[1];
				boneName = arguments[2];
				readOnly = arguments[3];
				destModule = arguments[4];
				format = arguments[5];
				using = arguments[6];
				usingDescr = arguments[7];
				relskel = arguments[8];
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
				if (typeof relskel != 'undefined') {
					if (relskel !== null && typeof relskel['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = relskel;
						relskel = arguments[9];
					}
				} else 				if (typeof usingDescr != 'undefined') {
					if (usingDescr !== null && typeof usingDescr['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = usingDescr;
						usingDescr = arguments[9];
					}
				} else 				if (typeof using != 'undefined') {
					if (using !== null && typeof using['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = using;
						using = arguments[9];
					}
				} else 				if (typeof format != 'undefined') {
					if (format !== null && typeof format['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = format;
						format = arguments[9];
					}
				} else 				if (typeof destModule != 'undefined') {
					if (destModule !== null && typeof destModule['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = destModule;
						destModule = arguments[9];
					}
				} else 				if (typeof readOnly != 'undefined') {
					if (readOnly !== null && typeof readOnly['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = readOnly;
						readOnly = arguments[9];
					}
				} else 				if (typeof boneName != 'undefined') {
					if (boneName !== null && typeof boneName['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = boneName;
						boneName = arguments[9];
					}
				} else 				if (typeof srcModule != 'undefined') {
					if (srcModule !== null && typeof srcModule['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = srcModule;
						srcModule = arguments[9];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[9];
					}
				} else {
				}
			}
			if (typeof format == 'undefined') format=arguments['callee']['__args__'][7][1];
			if (typeof using == 'undefined') using=arguments['callee']['__args__'][8][1];
			if (typeof usingDescr == 'undefined') usingDescr=arguments['callee']['__args__'][9][1];
			if (typeof relskel == 'undefined') relskel=arguments['callee']['__args__'][10][1];
			var $add12,$or20,$add11,$and35,$and34,$or19;
			$pyjs['track']={'module':'bones.relational', 'lineno':564};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.relational';
			$pyjs['track']['lineno']=564;
			$pyjs['track']['lineno']=578;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['RelationalMultiSelectionBone'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_285_err){if (!$p['isinstance']($pyjs_dbg_285_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_285_err);}throw $pyjs_dbg_285_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_286_err){if (!$p['isinstance']($pyjs_dbg_286_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_286_err);}throw $pyjs_dbg_286_err;
}})();
			$pyjs['track']['lineno']=580;
			self['srcModule'] = srcModule;
			$pyjs['track']['lineno']=581;
			self['boneName'] = boneName;
			$pyjs['track']['lineno']=582;
			self['readOnly'] = readOnly;
			$pyjs['track']['lineno']=583;
			self['destModule'] = destModule;
			$pyjs['track']['lineno']=584;
			self['format'] = format;
			$pyjs['track']['lineno']=585;
			self['using'] = using;
			$pyjs['track']['lineno']=586;
			self['usingDescr'] = usingDescr;
			$pyjs['track']['lineno']=587;
			self['relskel'] = relskel;
			$pyjs['track']['lineno']=589;
			self['entries'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_287_err){if (!$p['isinstance']($pyjs_dbg_287_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_287_err);}throw $pyjs_dbg_287_err;
}})();
			$pyjs['track']['lineno']=590;
			self['extendedErrorInformation'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_288_err){if (!$p['isinstance']($pyjs_dbg_288_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_288_err);}throw $pyjs_dbg_288_err;
}})();
			$pyjs['track']['lineno']=591;
			self['currentDrag'] = null;
			$pyjs['track']['lineno']=593;
			self['selectionDiv'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Div']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_289_err){if (!$p['isinstance']($pyjs_dbg_289_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_289_err);}throw $pyjs_dbg_289_err;
}})();
			$pyjs['track']['lineno']=594;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'selectionDiv')['__getitem__']('class')['append']('selectioncontainer');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_290_err){if (!$p['isinstance']($pyjs_dbg_290_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_290_err);}throw $pyjs_dbg_290_err;
}})();
			$pyjs['track']['lineno']=595;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'selectionDiv'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_291_err){if (!$p['isinstance']($pyjs_dbg_291_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_291_err);}throw $pyjs_dbg_291_err;
}})();
			$pyjs['track']['lineno']=597;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and34=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('modules')['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_292_err){if (!$p['isinstance']($pyjs_dbg_292_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_292_err);}throw $pyjs_dbg_292_err;
}})()['__contains__'](destModule))?($p['bool']($or19=$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']('root'))?$or19:$m['conf']['__getitem__']('currentUser')['__getitem__']('access')['__contains__']($p['__op_add']($add11=destModule,$add12='-view'))):$and34));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_293_err){if (!$p['isinstance']($pyjs_dbg_293_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_293_err);}throw $pyjs_dbg_293_err;
}})()) {
				$pyjs['track']['lineno']=600;
				self['selectBtn'] = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['ext']['Button']('Select', $p['getattr'](self, 'onShowSelector'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_294_err){if (!$p['isinstance']($pyjs_dbg_294_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_294_err);}throw $pyjs_dbg_294_err;
}})();
				$pyjs['track']['lineno']=601;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'selectBtn')['__getitem__']('class')['append']('icon');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_295_err){if (!$p['isinstance']($pyjs_dbg_295_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_295_err);}throw $pyjs_dbg_295_err;
}})();
				$pyjs['track']['lineno']=602;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'selectBtn')['__getitem__']('class')['append']('select');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_296_err){if (!$p['isinstance']($pyjs_dbg_296_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_296_err);}throw $pyjs_dbg_296_err;
}})();
				$pyjs['track']['lineno']=603;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['appendChild']($p['getattr'](self, 'selectBtn'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_297_err){if (!$p['isinstance']($pyjs_dbg_297_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_297_err);}throw $pyjs_dbg_297_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=605;
				self['selectBtn'] = null;
			}
			$pyjs['track']['lineno']=607;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'readOnly'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_298_err){if (!$p['isinstance']($pyjs_dbg_298_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_298_err);}throw $pyjs_dbg_298_err;
}})()) {
				$pyjs['track']['lineno']=608;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__setitem__']('disabled', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_299_err){if (!$p['isinstance']($pyjs_dbg_299_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_299_err);}throw $pyjs_dbg_299_err;
}})();
			}
			$pyjs['track']['lineno']=610;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['sinkEvent']('onDragOver');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_300_err){if (!$p['isinstance']($pyjs_dbg_300_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_300_err);}throw $pyjs_dbg_300_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['srcModule'],['boneName'],['readOnly'],['destModule'],['format', '$(name)'],['using', null],['usingDescr', null],['relskel', null]]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=612;
		$method = $pyjs__bind_method2('_setDisabled', function(disable) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				disable = arguments[1];
			}
			var $and38,$and36,$and37;
			$pyjs['track']={'module':'bones.relational', 'lineno':612};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.relational';
			$pyjs['track']['lineno']=612;
			$pyjs['track']['lineno']=616;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['RelationalMultiSelectionBone'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_301_err){if (!$p['isinstance']($pyjs_dbg_301_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_301_err);}throw $pyjs_dbg_301_err;
}})()['_setDisabled'](disable);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_302_err){if (!$p['isinstance']($pyjs_dbg_302_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_302_err);}throw $pyjs_dbg_302_err;
}})();
			$pyjs['track']['lineno']=617;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and36=!$p['bool'](disable))?($p['bool']($and37=!$p['bool']($p['getattr'](self, '_disabledState')))?(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_303_err){if (!$p['isinstance']($pyjs_dbg_303_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_303_err);}throw $pyjs_dbg_303_err;
}})()['__getitem__']('class')['__contains__']('is_active'):$and37):$and36));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_304_err){if (!$p['isinstance']($pyjs_dbg_304_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_304_err);}throw $pyjs_dbg_304_err;
}})()) {
				$pyjs['track']['lineno']=618;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_305_err){if (!$p['isinstance']($pyjs_dbg_305_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_305_err);}throw $pyjs_dbg_305_err;
}})()['__getitem__']('class')['remove']('is_active');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_306_err){if (!$p['isinstance']($pyjs_dbg_306_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_306_err);}throw $pyjs_dbg_306_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['disable']]);
		$cls_definition['_setDisabled'] = $method;
		$pyjs['track']['lineno']=621;
		$method = $pyjs__bind_method2('fromSkelStructure', function(moduleName, boneName, skelStructure) {
    var cls = this['prototype'];
			var format,$and41,$and40,usingDescr,readOnly,$and39,using,destModule;
			$pyjs['track']={'module':'bones.relational', 'lineno':621};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.relational';
			$pyjs['track']['lineno']=621;
			$pyjs['track']['lineno']=631;
			readOnly = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return skelStructure['__getitem__'](boneName)['get']('readonly', false);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_307_err){if (!$p['isinstance']($pyjs_dbg_307_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_307_err);}throw $pyjs_dbg_307_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_308_err){if (!$p['isinstance']($pyjs_dbg_308_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_308_err);}throw $pyjs_dbg_308_err;
}})();
			$pyjs['track']['lineno']=633;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return skelStructure['__getitem__'](boneName)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_309_err){if (!$p['isinstance']($pyjs_dbg_309_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_309_err);}throw $pyjs_dbg_309_err;
}})()['__contains__']('module'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_310_err){if (!$p['isinstance']($pyjs_dbg_310_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_310_err);}throw $pyjs_dbg_310_err;
}})()) {
				$pyjs['track']['lineno']=634;
				destModule = skelStructure['__getitem__'](boneName)['__getitem__']('module');
			}
			else {
				$pyjs['track']['lineno']=636;
				destModule = (function(){try{try{$pyjs['in_try_except'] += 1;
				return skelStructure['__getitem__'](boneName)['__getitem__']('type')['$$split']('.');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_311_err){if (!$p['isinstance']($pyjs_dbg_311_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_311_err);}throw $pyjs_dbg_311_err;
}})()['__getitem__'](1);
			}
			$pyjs['track']['lineno']=638;
			format = (function(){try{try{$pyjs['in_try_except'] += 1;
			return skelStructure['__getitem__'](boneName)['get']('format', '$(name)');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_312_err){if (!$p['isinstance']($pyjs_dbg_312_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_312_err);}throw $pyjs_dbg_312_err;
}})();
			$pyjs['track']['lineno']=639;
			using = (function(){try{try{$pyjs['in_try_except'] += 1;
			return skelStructure['__getitem__'](boneName)['get']('using');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_313_err){if (!$p['isinstance']($pyjs_dbg_313_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_313_err);}throw $pyjs_dbg_313_err;
}})();
			$pyjs['track']['lineno']=641;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and39=(function(){try{try{$pyjs['in_try_except'] += 1;
			return skelStructure['__getitem__'](boneName)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_314_err){if (!$p['isinstance']($pyjs_dbg_314_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_314_err);}throw $pyjs_dbg_314_err;
}})()['__contains__']('params'))?($p['bool']($and40=skelStructure['__getitem__'](boneName)['__getitem__']('params'))?(function(){try{try{$pyjs['in_try_except'] += 1;
			return skelStructure['__getitem__'](boneName)['__getitem__']('params')['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_315_err){if (!$p['isinstance']($pyjs_dbg_315_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_315_err);}throw $pyjs_dbg_315_err;
}})()['__contains__']('usingDescr'):$and40):$and39));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_316_err){if (!$p['isinstance']($pyjs_dbg_316_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_316_err);}throw $pyjs_dbg_316_err;
}})()) {
				$pyjs['track']['lineno']=644;
				usingDescr = skelStructure['__getitem__'](boneName)['__getitem__']('params')['__getitem__']('usingDescr');
			}
			else {
				$pyjs['track']['lineno']=646;
				usingDescr = (function(){try{try{$pyjs['in_try_except'] += 1;
				return skelStructure['__getitem__'](boneName)['get']('descr', boneName);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_317_err){if (!$p['isinstance']($pyjs_dbg_317_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_317_err);}throw $pyjs_dbg_317_err;
}})();
			}
			$pyjs['track']['lineno']=648;
			$pyjs['track']['lineno']=648;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(null, cls, null, null, [{'destModule':destModule, 'format':format, 'using':using, 'usingDescr':usingDescr, 'relskel':(function(){try{try{$pyjs['in_try_except'] += 1;
			return skelStructure['__getitem__'](boneName)['get']('relskel');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_318_err){if (!$p['isinstance']($pyjs_dbg_318_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_318_err);}throw $pyjs_dbg_318_err;
}})()}, moduleName, boneName, readOnly]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_319_err){if (!$p['isinstance']($pyjs_dbg_319_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_319_err);}throw $pyjs_dbg_319_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 2, [null,null,['cls'],['moduleName'],['boneName'],['skelStructure']]);
		$cls_definition['fromSkelStructure'] = $method;
		$pyjs['track']['lineno']=652;
		$method = $pyjs__bind_method2('unserialize', function(data) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}
			var val;
			$pyjs['track']={'module':'bones.relational', 'lineno':652};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.relational';
			$pyjs['track']['lineno']=652;
			$pyjs['track']['lineno']=658;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return data['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_320_err){if (!$p['isinstance']($pyjs_dbg_320_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_320_err);}throw $pyjs_dbg_320_err;
}})()['__contains__']($p['getattr'](self, 'boneName')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_321_err){if (!$p['isinstance']($pyjs_dbg_321_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_321_err);}throw $pyjs_dbg_321_err;
}})()) {
				$pyjs['track']['lineno']=659;
				val = data['__getitem__']($p['getattr'](self, 'boneName'));
				$pyjs['track']['lineno']=660;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](val, $p['dict']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_322_err){if (!$p['isinstance']($pyjs_dbg_322_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_322_err);}throw $pyjs_dbg_322_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_323_err){if (!$p['isinstance']($pyjs_dbg_323_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_323_err);}throw $pyjs_dbg_323_err;
}})()) {
					$pyjs['track']['lineno']=661;
					val = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['list']([val]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_324_err){if (!$p['isinstance']($pyjs_dbg_324_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_324_err);}throw $pyjs_dbg_324_err;
}})();
				}
				$pyjs['track']['lineno']=662;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['setSelection'](val);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_325_err){if (!$p['isinstance']($pyjs_dbg_325_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_325_err);}throw $pyjs_dbg_325_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['data']]);
		$cls_definition['unserialize'] = $method;
		$pyjs['track']['lineno']=664;
		$method = $pyjs__bind_method2('serializeForPost', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add14,$iter9_array,$iter8_idx,idx,$iter9_iter,res,v,$iter8_array,currRes,$iter9_type,$iter8_iter,$add13,$iter9_nextval,$pyjs__trackstack_size_2,$iter8_nextval,$iter9_idx,$pyjs__trackstack_size_1,entry,$iter8_type,k;
			$pyjs['track']={'module':'bones.relational', 'lineno':664};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.relational';
			$pyjs['track']['lineno']=664;
			$pyjs['track']['lineno']=670;
			res = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_326_err){if (!$p['isinstance']($pyjs_dbg_326_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_326_err);}throw $pyjs_dbg_326_err;
}})();
			$pyjs['track']['lineno']=671;
			idx = 0;
			$pyjs['track']['lineno']=672;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter8_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'entries');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_327_err){if (!$p['isinstance']($pyjs_dbg_327_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_327_err);}throw $pyjs_dbg_327_err;
}})();
			$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
			while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
				entry = $iter8_nextval['$nextval'];
				$pyjs['track']['lineno']=673;
				currRes = (function(){try{try{$pyjs['in_try_except'] += 1;
				return entry['serialize']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_328_err){if (!$p['isinstance']($pyjs_dbg_328_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_328_err);}throw $pyjs_dbg_328_err;
}})();
				$pyjs['track']['lineno']=674;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](currRes, $p['dict']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_329_err){if (!$p['isinstance']($pyjs_dbg_329_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_329_err);}throw $pyjs_dbg_329_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_330_err){if (!$p['isinstance']($pyjs_dbg_330_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_330_err);}throw $pyjs_dbg_330_err;
}})()) {
					$pyjs['track']['lineno']=675;
					$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
					$iter9_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return currRes['items']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_332_err){if (!$p['isinstance']($pyjs_dbg_332_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_332_err);}throw $pyjs_dbg_332_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_333_err){if (!$p['isinstance']($pyjs_dbg_333_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_333_err);}throw $pyjs_dbg_333_err;
}})();
					$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
					while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
						var $tupleassign4 = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['__ass_unpack']($iter9_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_331_err){if (!$p['isinstance']($pyjs_dbg_331_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_331_err);}throw $pyjs_dbg_331_err;
}})();
						k = $tupleassign4[0];
						v = $tupleassign4[1];
						$pyjs['track']['lineno']=676;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return res['__setitem__']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['sprintf']('%s.%s.%s', (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['tuple']([$p['getattr'](self, 'boneName'), idx, k]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_334_err){if (!$p['isinstance']($pyjs_dbg_334_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_334_err);}throw $pyjs_dbg_334_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_335_err){if (!$p['isinstance']($pyjs_dbg_335_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_335_err);}throw $pyjs_dbg_335_err;
}})(), v);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_336_err){if (!$p['isinstance']($pyjs_dbg_336_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_336_err);}throw $pyjs_dbg_336_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='bones.relational';
				}
				else {
					$pyjs['track']['lineno']=678;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return res['__setitem__']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['sprintf']('%s.%s.key', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([$p['getattr'](self, 'boneName'), idx]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_337_err){if (!$p['isinstance']($pyjs_dbg_337_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_337_err);}throw $pyjs_dbg_337_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_338_err){if (!$p['isinstance']($pyjs_dbg_338_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_338_err);}throw $pyjs_dbg_338_err;
}})(), currRes);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_339_err){if (!$p['isinstance']($pyjs_dbg_339_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_339_err);}throw $pyjs_dbg_339_err;
}})();
				}
				$pyjs['track']['lineno']=679;
				idx = $p['__op_add']($add13=idx,$add14=1);
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='bones.relational';
			$pyjs['track']['lineno']=680;
			$pyjs['track']['lineno']=680;
			var $pyjs__ret = res;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['serializeForPost'] = $method;
		$pyjs['track']['lineno']=683;
		$method = $pyjs__bind_method2('serializeForDocument', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'bones.relational', 'lineno':683};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.relational';
			$pyjs['track']['lineno']=683;
			$pyjs['track']['lineno']=684;
			$pyjs['track']['lineno']=684;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['serialize']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_340_err){if (!$p['isinstance']($pyjs_dbg_340_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_340_err);}throw $pyjs_dbg_340_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['serializeForDocument'] = $method;
		$pyjs['track']['lineno']=686;
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
			$pyjs['track']={'module':'bones.relational', 'lineno':686};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.relational';
			$pyjs['track']['lineno']=686;
			$pyjs['track']['lineno']=690;
			currentSelector = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(null, $m['ListWidget'], null, null, [{'isSelector':true}, $p['getattr'](self, 'destModule')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_341_err){if (!$p['isinstance']($pyjs_dbg_341_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_341_err);}throw $pyjs_dbg_341_err;
}})();
			$pyjs['track']['lineno']=691;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return currentSelector['selectionActivatedEvent']['register'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_342_err){if (!$p['isinstance']($pyjs_dbg_342_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_342_err);}throw $pyjs_dbg_342_err;
}})();
			$pyjs['track']['lineno']=692;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('mainWindow')['stackWidget'](currentSelector);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_343_err){if (!$p['isinstance']($pyjs_dbg_343_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_343_err);}throw $pyjs_dbg_343_err;
}})();
			$pyjs['track']['lineno']=693;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_344_err){if (!$p['isinstance']($pyjs_dbg_344_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_344_err);}throw $pyjs_dbg_344_err;
}})()['__getitem__']('class')['append']('is_active');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_345_err){if (!$p['isinstance']($pyjs_dbg_345_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_345_err);}throw $pyjs_dbg_345_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['onShowSelector'] = $method;
		$pyjs['track']['lineno']=695;
		$method = $pyjs__bind_method2('onSelectionActivated', function(table, selection) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				table = arguments[1];
				selection = arguments[2];
			}

			$pyjs['track']={'module':'bones.relational', 'lineno':695};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.relational';
			$pyjs['track']['lineno']=695;
			$pyjs['track']['lineno']=699;
			selection = function(){
				var $iter10_nextval,$collcomp7,$iter10_idx,$iter10_array,$pyjs__trackstack_size_1,$iter10_type,$iter10_iter,data;
	$collcomp7 = $p['list']();
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter10_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return selection;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_346_err){if (!$p['isinstance']($pyjs_dbg_346_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_346_err);}throw $pyjs_dbg_346_err;
}})();
			$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
			while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
				data = $iter10_nextval['$nextval'];
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $collcomp7['append']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([['dest', data], ['rel', ($p['bool']($p['getattr'](self, 'using'))? ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['getDefaultValues']($p['getattr'](self, 'using'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_347_err){if (!$p['isinstance']($pyjs_dbg_347_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_347_err);}throw $pyjs_dbg_347_err;
}})()) : (null))]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_348_err){if (!$p['isinstance']($pyjs_dbg_348_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_348_err);}throw $pyjs_dbg_348_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_349_err){if (!$p['isinstance']($pyjs_dbg_349_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_349_err);}throw $pyjs_dbg_349_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='bones.relational';

	return $collcomp7;}();
			$pyjs['track']['lineno']=700;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['setSelection'](selection);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_350_err){if (!$p['isinstance']($pyjs_dbg_350_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_350_err);}throw $pyjs_dbg_350_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['table'],['selection']]);
		$cls_definition['onSelectionActivated'] = $method;
		$pyjs['track']['lineno']=702;
		$method = $pyjs__bind_method2('setSelection', function(selection) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				selection = arguments[1];
			}
			var errKey,$iter11_idx,errIdx,$iter11_iter,$pyjs__trackstack_size_1,$iter12_array,$iter11_array,$iter11_nextval,data,errDict,idx,$iter12_type,$iter11_type,$iter12_nextval,$iter12_iter,$pyjs__trackstack_size_2,v,entry,$iter12_idx,k;
			$pyjs['track']={'module':'bones.relational', 'lineno':702};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.relational';
			$pyjs['track']['lineno']=702;
			$pyjs['track']['lineno']=708;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((selection === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_351_err){if (!$p['isinstance']($pyjs_dbg_351_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_351_err);}throw $pyjs_dbg_351_err;
}})()) {
				$pyjs['track']['lineno']=709;
				$pyjs['track']['lineno']=709;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=710;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter11_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return selection;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_352_err){if (!$p['isinstance']($pyjs_dbg_352_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_352_err);}throw $pyjs_dbg_352_err;
}})();
			$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
			while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
				data = $iter11_nextval['$nextval'];
				$pyjs['track']['lineno']=711;
				errIdx = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['len']($p['getattr'](self, 'entries'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_353_err){if (!$p['isinstance']($pyjs_dbg_353_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_353_err);}throw $pyjs_dbg_353_err;
}})();
				$pyjs['track']['lineno']=712;
				errDict = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_354_err){if (!$p['isinstance']($pyjs_dbg_354_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_354_err);}throw $pyjs_dbg_354_err;
}})();
				$pyjs['track']['lineno']=713;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, 'extendedErrorInformation'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_355_err){if (!$p['isinstance']($pyjs_dbg_355_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_355_err);}throw $pyjs_dbg_355_err;
}})()) {
					$pyjs['track']['lineno']=714;
					$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
					$iter12_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return self['extendedErrorInformation']['items']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_357_err){if (!$p['isinstance']($pyjs_dbg_357_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_357_err);}throw $pyjs_dbg_357_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_358_err){if (!$p['isinstance']($pyjs_dbg_358_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_358_err);}throw $pyjs_dbg_358_err;
}})();
					$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
					while (typeof($p['__wrapped_next']($iter12_nextval)['$nextval']) != 'undefined') {
						var $tupleassign5 = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['__ass_unpack']($iter12_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_356_err){if (!$p['isinstance']($pyjs_dbg_356_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_356_err);}throw $pyjs_dbg_356_err;
}})();
						k = $tupleassign5[0];
						v = $tupleassign5[1];
						$pyjs['track']['lineno']=715;
						k = (function(){try{try{$pyjs['in_try_except'] += 1;
						return k['$$replace']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['sprintf']('%s.', $p['getattr'](self, 'boneName'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_359_err){if (!$p['isinstance']($pyjs_dbg_359_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_359_err);}throw $pyjs_dbg_359_err;
}})(), '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_360_err){if (!$p['isinstance']($pyjs_dbg_360_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_360_err);}throw $pyjs_dbg_360_err;
}})();
						$pyjs['track']['lineno']=716;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_361_err){if (!$p['isinstance']($pyjs_dbg_361_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_361_err);}throw $pyjs_dbg_361_err;
}})()) {
							$pyjs['track']['lineno']=717;
							var $tupleassign6 = (function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['__ass_unpack']((function(){try{try{$pyjs['in_try_except'] += 1;
							return k['$$split']('.');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_362_err){if (!$p['isinstance']($pyjs_dbg_362_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_362_err);}throw $pyjs_dbg_362_err;
}})(), 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_363_err){if (!$p['isinstance']($pyjs_dbg_363_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_363_err);}throw $pyjs_dbg_363_err;
}})();
							idx = $tupleassign6[0];
							errKey = $tupleassign6[1];
							$pyjs['track']['lineno']=718;
							idx = (function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['float_int'](idx);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_364_err){if (!$p['isinstance']($pyjs_dbg_364_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_364_err);}throw $pyjs_dbg_364_err;
}})();
						}
						else {
							$pyjs['track']['lineno']=720;
							continue;
						}
						$pyjs['track']['lineno']=721;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']($p['op_eq'](idx, errIdx));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_365_err){if (!$p['isinstance']($pyjs_dbg_365_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_365_err);}throw $pyjs_dbg_365_err;
}})()) {
							$pyjs['track']['lineno']=722;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return errDict['__setitem__'](errKey, v);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_366_err){if (!$p['isinstance']($pyjs_dbg_366_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_366_err);}throw $pyjs_dbg_366_err;
}})();
						}
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='bones.relational';
				}
				$pyjs['track']['lineno']=723;
				entry = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['RelationalMultiSelectionBoneEntry'](self, $p['getattr'](self, 'destModule'), data, $p['getattr'](self, 'using'), errDict);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_367_err){if (!$p['isinstance']($pyjs_dbg_367_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_367_err);}throw $pyjs_dbg_367_err;
}})();
				$pyjs['track']['lineno']=724;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['addEntry'](entry);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_368_err){if (!$p['isinstance']($pyjs_dbg_368_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_368_err);}throw $pyjs_dbg_368_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='bones.relational';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['selection']]);
		$cls_definition['setSelection'] = $method;
		$pyjs['track']['lineno']=726;
		$method = $pyjs__bind_method2('addEntry', function(entry) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				entry = arguments[1];
			}

			$pyjs['track']={'module':'bones.relational', 'lineno':726};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.relational';
			$pyjs['track']['lineno']=726;
			$pyjs['track']['lineno']=731;
			if (!( !$p['getattr'](self, 'entries')['__contains__'](entry) )) {
			   throw $p['AssertionError']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('Entry %s is already in relationalBone', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['str'](entry);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_369_err){if (!$p['isinstance']($pyjs_dbg_369_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_369_err);}throw $pyjs_dbg_369_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_370_err){if (!$p['isinstance']($pyjs_dbg_370_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_370_err);}throw $pyjs_dbg_370_err;
}})());
			 }
			$pyjs['track']['lineno']=732;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['entries']['append'](entry);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_371_err){if (!$p['isinstance']($pyjs_dbg_371_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_371_err);}throw $pyjs_dbg_371_err;
}})();
			$pyjs['track']['lineno']=733;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['selectionDiv']['appendChild'](entry);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_372_err){if (!$p['isinstance']($pyjs_dbg_372_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_372_err);}throw $pyjs_dbg_372_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['entry']]);
		$cls_definition['addEntry'] = $method;
		$pyjs['track']['lineno']=735;
		$method = $pyjs__bind_method2('removeEntry', function(entry) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				entry = arguments[1];
			}

			$pyjs['track']={'module':'bones.relational', 'lineno':735};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.relational';
			$pyjs['track']['lineno']=735;
			$pyjs['track']['lineno']=740;
			if (!( $p['getattr'](self, 'entries')['__contains__'](entry) )) {
			   throw $p['AssertionError']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('Cannot remove unknown entry %s from relationalBone', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['str'](entry);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_373_err){if (!$p['isinstance']($pyjs_dbg_373_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_373_err);}throw $pyjs_dbg_373_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_374_err){if (!$p['isinstance']($pyjs_dbg_374_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_374_err);}throw $pyjs_dbg_374_err;
}})());
			 }
			$pyjs['track']['lineno']=741;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['selectionDiv']['removeChild'](entry);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_375_err){if (!$p['isinstance']($pyjs_dbg_375_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_375_err);}throw $pyjs_dbg_375_err;
}})();
			$pyjs['track']['lineno']=742;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['entries']['remove'](entry);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_376_err){if (!$p['isinstance']($pyjs_dbg_376_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_376_err);}throw $pyjs_dbg_376_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['entry']]);
		$cls_definition['removeEntry'] = $method;
		$pyjs['track']['lineno']=744;
		$method = $pyjs__bind_method2('moveEntry', function(entry, before) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				entry = arguments[1];
				before = arguments[2];
			}
			if (typeof before == 'undefined') before=arguments['callee']['__args__'][4][1];

			$pyjs['track']={'module':'bones.relational', 'lineno':744};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.relational';
			$pyjs['track']['lineno']=744;
			$pyjs['track']['lineno']=745;
			if (!( $p['getattr'](self, 'entries')['__contains__'](entry) )) {
			   throw $p['AssertionError']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('Cannot remove unknown entry %s from relationalBone', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['str'](entry);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_377_err){if (!$p['isinstance']($pyjs_dbg_377_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_377_err);}throw $pyjs_dbg_377_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_378_err){if (!$p['isinstance']($pyjs_dbg_378_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_378_err);}throw $pyjs_dbg_378_err;
}})());
			 }
			$pyjs['track']['lineno']=746;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['entries']['remove'](entry);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_379_err){if (!$p['isinstance']($pyjs_dbg_379_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_379_err);}throw $pyjs_dbg_379_err;
}})();
			$pyjs['track']['lineno']=748;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](before);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_380_err){if (!$p['isinstance']($pyjs_dbg_380_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_380_err);}throw $pyjs_dbg_380_err;
}})()) {
				$pyjs['track']['lineno']=749;
				if (!( $p['getattr'](self, 'entries')['__contains__'](before) )) {
				   throw $p['AssertionError']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('Cannot remove unknown entry %s from relationalBone', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str'](before);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_381_err){if (!$p['isinstance']($pyjs_dbg_381_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_381_err);}throw $pyjs_dbg_381_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_382_err){if (!$p['isinstance']($pyjs_dbg_382_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_382_err);}throw $pyjs_dbg_382_err;
}})());
				 }
				$pyjs['track']['lineno']=750;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['selectionDiv']['insertBefore'](entry, before);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_383_err){if (!$p['isinstance']($pyjs_dbg_383_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_383_err);}throw $pyjs_dbg_383_err;
}})();
				$pyjs['track']['lineno']=751;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['entries']['insert']((function(){try{try{$pyjs['in_try_except'] += 1;
				return self['entries']['index'](before);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_384_err){if (!$p['isinstance']($pyjs_dbg_384_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_384_err);}throw $pyjs_dbg_384_err;
}})(), entry);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_385_err){if (!$p['isinstance']($pyjs_dbg_385_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_385_err);}throw $pyjs_dbg_385_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=753;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['addEntry'](entry);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_386_err){if (!$p['isinstance']($pyjs_dbg_386_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_386_err);}throw $pyjs_dbg_386_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['entry'],['before', null]]);
		$cls_definition['moveEntry'] = $method;
		$pyjs['track']['lineno']=755;
		$method = $pyjs__bind_method2('setExtendedErrorInformation', function(errorInfo) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				errorInfo = arguments[1];
			}
			var $iter13_nextval,err,idx,$iter13_iter,$pyjs__trackstack_size_1,$and43,$iter13_type,$and42,$iter13_idx,v,k,$iter13_array;
			$pyjs['track']={'module':'bones.relational', 'lineno':755};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.relational';
			$pyjs['track']['lineno']=755;
			$pyjs['track']['lineno']=756;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['printFunc'](['------- EXTENDEND ERROR INFO --------'], 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_387_err){if (!$p['isinstance']($pyjs_dbg_387_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_387_err);}throw $pyjs_dbg_387_err;
}})();
			$pyjs['track']['lineno']=757;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['printFunc']([errorInfo], 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_388_err){if (!$p['isinstance']($pyjs_dbg_388_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_388_err);}throw $pyjs_dbg_388_err;
}})();
			$pyjs['track']['lineno']=758;
			self['extendedErrorInformation'] = errorInfo;
			$pyjs['track']['lineno']=759;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter13_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return errorInfo['items']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_390_err){if (!$p['isinstance']($pyjs_dbg_390_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_390_err);}throw $pyjs_dbg_390_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_391_err){if (!$p['isinstance']($pyjs_dbg_391_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_391_err);}throw $pyjs_dbg_391_err;
}})();
			$iter13_nextval=$p['__iter_prepare']($iter13_iter,false);
			while (typeof($p['__wrapped_next']($iter13_nextval)['$nextval']) != 'undefined') {
				var $tupleassign7 = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__ass_unpack']($iter13_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_389_err){if (!$p['isinstance']($pyjs_dbg_389_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_389_err);}throw $pyjs_dbg_389_err;
}})();
				k = $tupleassign7[0];
				v = $tupleassign7[1];
				$pyjs['track']['lineno']=760;
				k = (function(){try{try{$pyjs['in_try_except'] += 1;
				return k['$$replace']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('%s.', $p['getattr'](self, 'boneName'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_392_err){if (!$p['isinstance']($pyjs_dbg_392_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_392_err);}throw $pyjs_dbg_392_err;
}})(), '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_393_err){if (!$p['isinstance']($pyjs_dbg_393_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_393_err);}throw $pyjs_dbg_393_err;
}})();
				$pyjs['track']['lineno']=761;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_394_err){if (!$p['isinstance']($pyjs_dbg_394_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_394_err);}throw $pyjs_dbg_394_err;
}})()) {
					$pyjs['track']['lineno']=762;
					var $tupleassign8 = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['__ass_unpack']((function(){try{try{$pyjs['in_try_except'] += 1;
					return k['$$split']('.');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_395_err){if (!$p['isinstance']($pyjs_dbg_395_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_395_err);}throw $pyjs_dbg_395_err;
}})(), 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_396_err){if (!$p['isinstance']($pyjs_dbg_396_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_396_err);}throw $pyjs_dbg_396_err;
}})();
					idx = $tupleassign8[0];
					err = $tupleassign8[1];
					$pyjs['track']['lineno']=763;
					idx = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['float_int'](idx);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_397_err){if (!$p['isinstance']($pyjs_dbg_397_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_397_err);}throw $pyjs_dbg_397_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=765;
					continue;
				}
				$pyjs['track']['lineno']=766;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['printFunc']([(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('k: %s, v: %s', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([k, v]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_398_err){if (!$p['isinstance']($pyjs_dbg_398_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_398_err);}throw $pyjs_dbg_398_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_399_err){if (!$p['isinstance']($pyjs_dbg_399_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_399_err);}throw $pyjs_dbg_399_err;
}})()], 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_400_err){if (!$p['isinstance']($pyjs_dbg_400_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_400_err);}throw $pyjs_dbg_400_err;
}})();
				$pyjs['track']['lineno']=767;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['printFunc']([(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('idx: %s', idx);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_401_err){if (!$p['isinstance']($pyjs_dbg_401_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_401_err);}throw $pyjs_dbg_401_err;
}})()], 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_402_err){if (!$p['isinstance']($pyjs_dbg_402_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_402_err);}throw $pyjs_dbg_402_err;
}})();
				$pyjs['track']['lineno']=768;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['printFunc']([(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['len']($p['getattr'](self, 'entries'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_403_err){if (!$p['isinstance']($pyjs_dbg_403_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_403_err);}throw $pyjs_dbg_403_err;
}})()], 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_404_err){if (!$p['isinstance']($pyjs_dbg_404_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_404_err);}throw $pyjs_dbg_404_err;
}})();
				$pyjs['track']['lineno']=769;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($and42=((($p['cmp'](idx, 0))|1) == 1))?($p['cmp'](idx, (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['len']($p['getattr'](self, 'entries'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_405_err){if (!$p['isinstance']($pyjs_dbg_405_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_405_err);}throw $pyjs_dbg_405_err;
}})()) == -1):$and42));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_406_err){if (!$p['isinstance']($pyjs_dbg_406_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_406_err);}throw $pyjs_dbg_406_err;
}})()) {
					$pyjs['track']['lineno']=770;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'entries')['__getitem__'](idx)['setError'](err);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_407_err){if (!$p['isinstance']($pyjs_dbg_407_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_407_err);}throw $pyjs_dbg_407_err;
}})();
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='bones.relational';
			$pyjs['track']['lineno']=771;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['errorInfo']]);
		$cls_definition['setExtendedErrorInformation'] = $method;
		$pyjs['track']['lineno']=559;
		var $bases = new Array($p['getattr']($m['html5'], 'Div'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('RelationalMultiSelectionBone', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=774;
	$m['RelationalSearch'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'bones.relational';
		$pyjs['track']['lineno']=775;
		$method = $pyjs__bind_method2('__init__', function(extension, view, module) {
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
				module = arguments[3];
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
				if (typeof module != 'undefined') {
					if (module !== null && typeof module['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = module;
						module = arguments[4];
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
			var btn;
			$pyjs['track']={'module':'bones.relational', 'lineno':775};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.relational';
			$pyjs['track']['lineno']=775;
			$pyjs['track']['lineno']=776;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['RelationalSearch'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_408_err){if (!$p['isinstance']($pyjs_dbg_408_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_408_err);}throw $pyjs_dbg_408_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_409_err){if (!$p['isinstance']($pyjs_dbg_409_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_409_err);}throw $pyjs_dbg_409_err;
}})();
			$pyjs['track']['lineno']=777;
			self['view'] = view;
			$pyjs['track']['lineno']=778;
			self['extension'] = extension;
			$pyjs['track']['lineno']=779;
			self['module'] = module;
			$pyjs['track']['lineno']=780;
			self['currentSelection'] = null;
			$pyjs['track']['lineno']=781;
			self['filterChangedEvent'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['EventDispatcher']('filterChanged');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_410_err){if (!$p['isinstance']($pyjs_dbg_410_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_410_err);}throw $pyjs_dbg_410_err;
}})();
			$pyjs['track']['lineno']=782;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['TextNode']('RELATIONAL SEARCH');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_411_err){if (!$p['isinstance']($pyjs_dbg_411_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_411_err);}throw $pyjs_dbg_411_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_412_err){if (!$p['isinstance']($pyjs_dbg_412_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_412_err);}throw $pyjs_dbg_412_err;
}})();
			$pyjs['track']['lineno']=783;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['TextNode'](extension['__getitem__']('name'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_413_err){if (!$p['isinstance']($pyjs_dbg_413_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_413_err);}throw $pyjs_dbg_413_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_414_err){if (!$p['isinstance']($pyjs_dbg_414_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_414_err);}throw $pyjs_dbg_414_err;
}})();
			$pyjs['track']['lineno']=784;
			self['currentEntry'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Span']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_415_err){if (!$p['isinstance']($pyjs_dbg_415_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_415_err);}throw $pyjs_dbg_415_err;
}})();
			$pyjs['track']['lineno']=785;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'currentEntry'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_416_err){if (!$p['isinstance']($pyjs_dbg_416_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_416_err);}throw $pyjs_dbg_416_err;
}})();
			$pyjs['track']['lineno']=786;
			btn = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['ext']['Button']('Select', $p['getattr'](self, 'openSelector'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_417_err){if (!$p['isinstance']($pyjs_dbg_417_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_417_err);}throw $pyjs_dbg_417_err;
}})();
			$pyjs['track']['lineno']=787;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild'](btn);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_418_err){if (!$p['isinstance']($pyjs_dbg_418_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_418_err);}throw $pyjs_dbg_418_err;
}})();
			$pyjs['track']['lineno']=788;
			btn = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['ext']['Button']('Clear', $p['getattr'](self, 'clearSelection'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_419_err){if (!$p['isinstance']($pyjs_dbg_419_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_419_err);}throw $pyjs_dbg_419_err;
}})();
			$pyjs['track']['lineno']=789;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild'](btn);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_420_err){if (!$p['isinstance']($pyjs_dbg_420_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_420_err);}throw $pyjs_dbg_420_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['extension'],['view'],['module']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=791;
		$method = $pyjs__bind_method2('clearSelection', function() {
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

			$pyjs['track']={'module':'bones.relational', 'lineno':791};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.relational';
			$pyjs['track']['lineno']=791;
			$pyjs['track']['lineno']=792;
			self['currentSelection'] = null;
			$pyjs['track']['lineno']=793;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['filterChangedEvent']['fire']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_421_err){if (!$p['isinstance']($pyjs_dbg_421_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_421_err);}throw $pyjs_dbg_421_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['clearSelection'] = $method;
		$pyjs['track']['lineno']=795;
		$method = $pyjs__bind_method2('openSelector', function() {
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
			$pyjs['track']={'module':'bones.relational', 'lineno':795};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.relational';
			$pyjs['track']['lineno']=795;
			$pyjs['track']['lineno']=796;
			currentSelector = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(null, $m['ListWidget'], null, null, [{'isSelector':true}, $p['getattr'](self, 'extension')['__getitem__']('module')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_422_err){if (!$p['isinstance']($pyjs_dbg_422_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_422_err);}throw $pyjs_dbg_422_err;
}})();
			$pyjs['track']['lineno']=797;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return currentSelector['selectionActivatedEvent']['register'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_423_err){if (!$p['isinstance']($pyjs_dbg_423_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_423_err);}throw $pyjs_dbg_423_err;
}})();
			$pyjs['track']['lineno']=798;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('mainWindow')['stackWidget'](currentSelector);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_424_err){if (!$p['isinstance']($pyjs_dbg_424_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_424_err);}throw $pyjs_dbg_424_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['openSelector'] = $method;
		$pyjs['track']['lineno']=800;
		$method = $pyjs__bind_method2('onSelectionActivated', function(table, selection) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				table = arguments[1];
				selection = arguments[2];
			}

			$pyjs['track']={'module':'bones.relational', 'lineno':800};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.relational';
			$pyjs['track']['lineno']=800;
			$pyjs['track']['lineno']=801;
			self['currentSelection'] = selection;
			$pyjs['track']['lineno']=802;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['filterChangedEvent']['fire']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_425_err){if (!$p['isinstance']($pyjs_dbg_425_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_425_err);}throw $pyjs_dbg_425_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['table'],['selection']]);
		$cls_definition['onSelectionActivated'] = $method;
		$pyjs['track']['lineno']=805;
		$method = $pyjs__bind_method2('updateFilter', function(filter) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				filter = arguments[1];
			}
			var $add15,newId,$add16;
			$pyjs['track']={'module':'bones.relational', 'lineno':805};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.relational';
			$pyjs['track']['lineno']=805;
			$pyjs['track']['lineno']=806;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'currentSelection'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_426_err){if (!$p['isinstance']($pyjs_dbg_426_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_426_err);}throw $pyjs_dbg_426_err;
}})()) {
				$pyjs['track']['lineno']=807;
				$p['getattr']($p['getattr'](self, 'currentEntry'), 'element')['innerHTML'] = $p['getattr'](self, 'currentSelection')['__getitem__'](0)['__getitem__']('name');
				$pyjs['track']['lineno']=808;
				newId = $p['getattr'](self, 'currentSelection')['__getitem__'](0)['__getitem__']('key');
				$pyjs['track']['lineno']=809;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return filter['__setitem__']($p['__op_add']($add15=$p['getattr'](self, 'extension')['__getitem__']('target'),$add16='.key'), newId);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_427_err){if (!$p['isinstance']($pyjs_dbg_427_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_427_err);}throw $pyjs_dbg_427_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=811;
				$p['getattr']($p['getattr'](self, 'currentEntry'), 'element')['innerHTML'] = '';
			}
			$pyjs['track']['lineno']=812;
			$pyjs['track']['lineno']=812;
			var $pyjs__ret = filter;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['filter']]);
		$cls_definition['updateFilter'] = $method;
		$pyjs['track']['lineno']=815;
		$method = $pyjs__bind_method2('canHandleExtension', function(extension, view, module) {
			var $and45,$and44,$and46,$or21,$or22;
			$pyjs['track']={'module':'bones.relational', 'lineno':815};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.relational';
			$pyjs['track']['lineno']=815;
			$pyjs['track']['lineno']=816;
			$pyjs['track']['lineno']=816;
			var $pyjs__ret = ($p['bool']($and44=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance'](extension, $p['dict']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_428_err){if (!$p['isinstance']($pyjs_dbg_428_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_428_err);}throw $pyjs_dbg_428_err;
}})())?($p['bool']($and45=(function(){try{try{$pyjs['in_try_except'] += 1;
			return extension['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_429_err){if (!$p['isinstance']($pyjs_dbg_429_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_429_err);}throw $pyjs_dbg_429_err;
}})()['__contains__']('type'))?($p['bool']($or21=$p['op_eq'](extension['__getitem__']('type'), 'relational'))?$or21:(function(){try{try{$pyjs['in_try_except'] += 1;
			return extension['__getitem__']('type')['startswith']('relational.');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_430_err){if (!$p['isinstance']($pyjs_dbg_430_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_430_err);}throw $pyjs_dbg_430_err;
}})()):$and45):$and44);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['extension'],['view'],['module']]);
		$cls_definition['canHandleExtension'] = $method;
		$pyjs['track']['lineno']=774;
		var $bases = new Array($p['getattr']($m['html5'], 'Div'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('RelationalSearch', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=819;
	$m['CheckForRelationalBoneSelection'] = function(moduleName, boneName, skelStructure) {
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

		$pyjs['track']={'module':'bones.relational','lineno':819};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='bones.relational';
		$pyjs['track']['lineno']=819;
		$pyjs['track']['lineno']=820;
		$pyjs['track']['lineno']=820;
		var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
		return skelStructure['__getitem__'](boneName)['__getitem__']('type')['startswith']('relational.');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_431_err){if (!$p['isinstance']($pyjs_dbg_431_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_431_err);}throw $pyjs_dbg_431_err;
}})();
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['CheckForRelationalBoneSelection']['__name__'] = 'CheckForRelationalBoneSelection';

	$m['CheckForRelationalBoneSelection']['__bind_type__'] = 0;
	$m['CheckForRelationalBoneSelection']['__args__'] = ['args',['kwargs'],['moduleName'],['boneName'],['skelStructure']];
	$pyjs['track']['lineno']=822;
	$m['CheckForRelationalBoneMultiSelection'] = function(moduleName, boneName, skelStructure) {
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
		var $and49,$and48,$and47,$and50,isMultiple;
		$pyjs['track']={'module':'bones.relational','lineno':822};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='bones.relational';
		$pyjs['track']['lineno']=822;
		$pyjs['track']['lineno']=823;
		isMultiple = ($p['bool']($and47=(function(){try{try{$pyjs['in_try_except'] += 1;
		return skelStructure['__getitem__'](boneName)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_432_err){if (!$p['isinstance']($pyjs_dbg_432_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_432_err);}throw $pyjs_dbg_432_err;
}})()['__contains__']('multiple'))?skelStructure['__getitem__'](boneName)['__getitem__']('multiple'):$and47);
		$pyjs['track']['lineno']=824;
		$pyjs['track']['lineno']=824;
		var $pyjs__ret = ($p['bool']($and49=isMultiple)?(function(){try{try{$pyjs['in_try_except'] += 1;
		return skelStructure['__getitem__'](boneName)['__getitem__']('type')['startswith']('relational.');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_433_err){if (!$p['isinstance']($pyjs_dbg_433_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_433_err);}throw $pyjs_dbg_433_err;
}})():$and49);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['CheckForRelationalBoneMultiSelection']['__name__'] = 'CheckForRelationalBoneMultiSelection';

	$m['CheckForRelationalBoneMultiSelection']['__bind_type__'] = 0;
	$m['CheckForRelationalBoneMultiSelection']['__args__'] = ['args',['kwargs'],['moduleName'],['boneName'],['skelStructure']];
	$pyjs['track']['lineno']=826;
	$m['CheckForRelationalBoneSingleSelection'] = function(moduleName, boneName, skelStructure) {
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
		var $and54,$and52,$and53,$and51,isMultiple;
		$pyjs['track']={'module':'bones.relational','lineno':826};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='bones.relational';
		$pyjs['track']['lineno']=826;
		$pyjs['track']['lineno']=827;
		isMultiple = ($p['bool']($and51=(function(){try{try{$pyjs['in_try_except'] += 1;
		return skelStructure['__getitem__'](boneName)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_434_err){if (!$p['isinstance']($pyjs_dbg_434_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_434_err);}throw $pyjs_dbg_434_err;
}})()['__contains__']('multiple'))?skelStructure['__getitem__'](boneName)['__getitem__']('multiple'):$and51);
		$pyjs['track']['lineno']=828;
		$pyjs['track']['lineno']=828;
		var $pyjs__ret = ($p['bool']($and53=!$p['bool'](isMultiple))?(function(){try{try{$pyjs['in_try_except'] += 1;
		return skelStructure['__getitem__'](boneName)['__getitem__']('type')['startswith']('relational.');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_435_err){if (!$p['isinstance']($pyjs_dbg_435_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_435_err);}throw $pyjs_dbg_435_err;
}})():$and53);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['CheckForRelationalBoneSingleSelection']['__name__'] = 'CheckForRelationalBoneSingleSelection';

	$m['CheckForRelationalBoneSingleSelection']['__bind_type__'] = 0;
	$m['CheckForRelationalBoneSingleSelection']['__args__'] = ['args',['kwargs'],['moduleName'],['boneName'],['skelStructure']];
	$pyjs['track']['lineno']=831;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['editBoneSelector']['insert'](5, $m['CheckForRelationalBoneMultiSelection'], $m['RelationalMultiSelectionBone']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_436_err){if (!$p['isinstance']($pyjs_dbg_436_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_436_err);}throw $pyjs_dbg_436_err;
}})();
	$pyjs['track']['lineno']=832;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['editBoneSelector']['insert'](5, $m['CheckForRelationalBoneSingleSelection'], $m['RelationalSingleSelectionBone']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_437_err){if (!$p['isinstance']($pyjs_dbg_437_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_437_err);}throw $pyjs_dbg_437_err;
}})();
	$pyjs['track']['lineno']=833;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['viewDelegateSelector']['insert'](5, $m['CheckForRelationalBoneSelection'], $m['RelationalViewBoneDelegate']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_438_err){if (!$p['isinstance']($pyjs_dbg_438_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_438_err);}throw $pyjs_dbg_438_err;
}})();
	$pyjs['track']['lineno']=834;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['extendedSearchWidgetSelector']['insert'](1, $p['getattr']($m['RelationalSearch'], 'canHandleExtension'), $m['RelationalSearch']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_439_err){if (!$p['isinstance']($pyjs_dbg_439_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_439_err);}throw $pyjs_dbg_439_err;
}})();
	$pyjs['track']['lineno']=835;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['extractorDelegateSelector']['insert'](4, $m['CheckForRelationalBoneSelection'], $m['RelationalBoneExtractor']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_440_err){if (!$p['isinstance']($pyjs_dbg_440_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_440_err);}throw $pyjs_dbg_440_err;
}})();
	return this;
}; /* end bones.relational */


/* end module: bones.relational */


/*
PYJS_DEPS: ['html5', 'json', 'utils', 'priorityqueue.editBoneSelector', 'priorityqueue', 'priorityqueue.viewDelegateSelector', 'priorityqueue.extendedSearchWidgetSelector', 'priorityqueue.extractorDelegateSelector', 'event.EventDispatcher', 'event', 'widgets.list.ListWidget', 'widgets', 'widgets.list', 'widgets.edit.InternalEdit', 'widgets.edit', 'widgets.edit.EditWidget', 'config.conf', 'config', 'i18n.translate', 'i18n', 'network.NetworkService', 'network', 'pane.Pane', 'pane', 'bones.base.BaseBoneExtractor', 'bones', 'bones.base']
*/
