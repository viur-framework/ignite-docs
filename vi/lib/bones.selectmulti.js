/* start module: bones.selectmulti */
$pyjs['loaded_modules']['bones.selectmulti'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['bones.selectmulti']['__was_initialized__']) return $pyjs['loaded_modules']['bones.selectmulti'];
	if(typeof $pyjs['loaded_modules']['bones'] == 'undefined' || !$pyjs['loaded_modules']['bones']['__was_initialized__']) $p['___import___']('bones', null);
	var $m = $pyjs['loaded_modules']['bones.selectmulti'];
	$m['__repr__'] = function() { return '<module: bones.selectmulti>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'bones.selectmulti';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['bones']['selectmulti'] = $pyjs['loaded_modules']['bones.selectmulti'];
	$m.__track_lines__[1] = 'bones.selectmulti.py, line 1:\n    # -*- coding: utf-8 -*-';
	$m.__track_lines__[2] = 'bones.selectmulti.py, line 2:\n    import html5, utils';
	$m.__track_lines__[3] = 'bones.selectmulti.py, line 3:\n    from priorityqueue import editBoneSelector, viewDelegateSelector, extendedSearchWidgetSelector, extractorDelegateSelector';
	$m.__track_lines__[4] = 'bones.selectmulti.py, line 4:\n    from event import EventDispatcher';
	$m.__track_lines__[5] = 'bones.selectmulti.py, line 5:\n    from i18n import translate';
	$m.__track_lines__[6] = 'bones.selectmulti.py, line 6:\n    from config import conf';
	$m.__track_lines__[7] = 'bones.selectmulti.py, line 7:\n    from bones.base import BaseBoneExtractor';
	$m.__track_lines__[9] = 'bones.selectmulti.py, line 9:\n    class SelectMultiBoneExtractor(BaseBoneExtractor):';
	$m.__track_lines__[10] = 'bones.selectmulti.py, line 10:\n    def __init__(self, moduleName, boneName, skelStructure, *args, **kwargs ):';
	$m.__track_lines__[11] = 'bones.selectmulti.py, line 11:\n    super(SelectMultiBoneExtractor, self ).__init__()';
	$m.__track_lines__[12] = 'bones.selectmulti.py, line 12:\n    self.skelStructure = skelStructure';
	$m.__track_lines__[13] = 'bones.selectmulti.py, line 13:\n    self.boneName = boneName';
	$m.__track_lines__[14] = 'bones.selectmulti.py, line 14:\n    self.moduleName=moduleName';
	$m.__track_lines__[16] = 'bones.selectmulti.py, line 16:\n    def render( self, data, field ):';
	$m.__track_lines__[17] = 'bones.selectmulti.py, line 17:\n    if field in data.keys():';
	$m.__track_lines__[18] = 'bones.selectmulti.py, line 18:\n    result = list()';
	$m.__track_lines__[19] = 'bones.selectmulti.py, line 19:\n    for fieldKey in data[field]:';
	$m.__track_lines__[20] = 'bones.selectmulti.py, line 20:\n    if not fieldKey in self.skelStructure[field]["values"].keys():';
	$m.__track_lines__[21] = 'bones.selectmulti.py, line 21:\n    result.append(fieldKey)';
	$m.__track_lines__[23] = 'bones.selectmulti.py, line 23:\n    value = self.skelStructure[field]["values"][fieldKey]';
	$m.__track_lines__[24] = 'bones.selectmulti.py, line 24:\n    if value:';
	$m.__track_lines__[25] = 'bones.selectmulti.py, line 25:\n    result.append(value)';
	$m.__track_lines__[26] = 'bones.selectmulti.py, line 26:\n    return ",".join(result)';
	$m.__track_lines__[28] = 'bones.selectmulti.py, line 28:\n    return conf[ "empty_value" ]';
	$m.__track_lines__[30] = 'bones.selectmulti.py, line 30:\n    class SelectMultiViewBoneDelegate( object ):';
	$m.__track_lines__[31] = 'bones.selectmulti.py, line 31:\n    def __init__(self, moduleName, boneName, skelStructure, *args, **kwargs ):';
	$m.__track_lines__[32] = 'bones.selectmulti.py, line 32:\n    super( SelectMultiViewBoneDelegate, self ).__init__()';
	$m.__track_lines__[33] = 'bones.selectmulti.py, line 33:\n    self.skelStructure = skelStructure';
	$m.__track_lines__[34] = 'bones.selectmulti.py, line 34:\n    self.boneName = boneName';
	$m.__track_lines__[35] = 'bones.selectmulti.py, line 35:\n    self.moduleName = moduleName';
	$m.__track_lines__[37] = 'bones.selectmulti.py, line 37:\n    def render( self, data, field ):';
	$m.__track_lines__[38] = 'bones.selectmulti.py, line 38:\n    if field in data.keys():';
	$m.__track_lines__[39] = 'bones.selectmulti.py, line 39:\n    result = html5.Ul()';
	$m.__track_lines__[40] = 'bones.selectmulti.py, line 40:\n    options = {k: v for k, v in self.skelStructure[field]["values"]}';
	$m.__track_lines__[42] = 'bones.selectmulti.py, line 42:\n    for i, fieldKey in enumerate(data[field]):';
	$m.__track_lines__[43] = 'bones.selectmulti.py, line 43:\n    if conf["maxMultiBoneEntries"] and i == conf["maxMultiBoneEntries"]:';
	$m.__track_lines__[44] = 'bones.selectmulti.py, line 44:\n    ali = html5.Li()';
	$m.__track_lines__[46] = 'bones.selectmulti.py, line 45:\n    ali.appendChild( ... html5.TextNode(translate("and {count} more",';
	$m.__track_lines__[48] = 'bones.selectmulti.py, line 48:\n    ali["class"].append("selectmulti_more_li")';
	$m.__track_lines__[50] = 'bones.selectmulti.py, line 50:\n    result.appendChild(ali)';
	$m.__track_lines__[51] = 'bones.selectmulti.py, line 51:\n    break';
	$m.__track_lines__[53] = 'bones.selectmulti.py, line 53:\n    ali = html5.Li()';
	$m.__track_lines__[54] = 'bones.selectmulti.py, line 54:\n    ali.appendChild(html5.TextNode(options.get(fieldKey, fieldKey)))';
	$m.__track_lines__[55] = 'bones.selectmulti.py, line 55:\n    ali["Title"] = fieldKey';
	$m.__track_lines__[57] = 'bones.selectmulti.py, line 57:\n    result.appendChild(ali)';
	$m.__track_lines__[59] = 'bones.selectmulti.py, line 59:\n    return result';
	$m.__track_lines__[61] = 'bones.selectmulti.py, line 61:\n    return html5.Label(conf["empty_value"])';
	$m.__track_lines__[63] = 'bones.selectmulti.py, line 63:\n    class SelectMultiEditBone(html5.Div):';
	$m.__track_lines__[65] = 'bones.selectmulti.py, line 65:\n    def __init__(self, moduleName, boneName, readOnly, values, *args, **kwargs):';
	$m.__track_lines__[66] = 'bones.selectmulti.py, line 66:\n    super(SelectMultiEditBone,  self ).__init__(*args, **kwargs)';
	$m.__track_lines__[67] = 'bones.selectmulti.py, line 67:\n    self.boneName = boneName';
	$m.__track_lines__[68] = 'bones.selectmulti.py, line 68:\n    self.readOnly = readOnly';
	$m.__track_lines__[71] = 'bones.selectmulti.py, line 71:\n    if isinstance(values, dict):';
	$m.__track_lines__[72] = 'bones.selectmulti.py, line 72:\n    self.values = [(k, v) for k, v in values.items()]';
	$m.__track_lines__[74] = 'bones.selectmulti.py, line 74:\n    self.values = values';
	$m.__track_lines__[77] = 'bones.selectmulti.py, line 77:\n    for key, value in self.values:';
	$m.__track_lines__[78] = 'bones.selectmulti.py, line 78:\n    alabel = html5.Label()';
	$m.__track_lines__[79] = 'bones.selectmulti.py, line 79:\n    acheckbox = html5.Input()';
	$m.__track_lines__[80] = 'bones.selectmulti.py, line 80:\n    acheckbox["type"] = "checkbox"';
	$m.__track_lines__[81] = 'bones.selectmulti.py, line 81:\n    acheckbox["name"] = key';
	$m.__track_lines__[82] = 'bones.selectmulti.py, line 82:\n    alabel.appendChild(acheckbox)';
	$m.__track_lines__[84] = 'bones.selectmulti.py, line 84:\n    aspan = html5.Span()';
	$m.__track_lines__[85] = 'bones.selectmulti.py, line 85:\n    aspan.element.innerHTML = value';
	$m.__track_lines__[86] = 'bones.selectmulti.py, line 86:\n    alabel.appendChild(aspan)';
	$m.__track_lines__[88] = 'bones.selectmulti.py, line 88:\n    self.appendChild(alabel)';
	$m.__track_lines__[90] = 'bones.selectmulti.py, line 90:\n    if self.readOnly:';
	$m.__track_lines__[91] = 'bones.selectmulti.py, line 91:\n    self["disabled"] = True';
	$m.__track_lines__[94] = 'bones.selectmulti.py, line 93:\n    @staticmethod ... def fromSkelStructure( moduleName, boneName, skelStructure ):';
	$m.__track_lines__[95] = 'bones.selectmulti.py, line 95:\n    return SelectMultiEditBone(moduleName, boneName,';
	$m.__track_lines__[99] = 'bones.selectmulti.py, line 99:\n    def unserialize(self, data):';
	$m.__track_lines__[100] = 'bones.selectmulti.py, line 100:\n    if self.boneName in data.keys():';
	$m.__track_lines__[101] = 'bones.selectmulti.py, line 101:\n    self.val = data[ self.boneName ] if data[ self.boneName ] else []';
	$m.__track_lines__[102] = 'bones.selectmulti.py, line 102:\n    for alabel in self._children:';
	$m.__track_lines__[103] = 'bones.selectmulti.py, line 103:\n    if alabel._children[0]["name"] in self.val:';
	$m.__track_lines__[104] = 'bones.selectmulti.py, line 104:\n    alabel._children[0]["checked"]=True';
	$m.__track_lines__[106] = 'bones.selectmulti.py, line 106:\n    def serializeForPost(self):';
	$m.__track_lines__[107] = 'bones.selectmulti.py, line 107:\n    value=[]';
	$m.__track_lines__[108] = 'bones.selectmulti.py, line 108:\n    for alabel in self._children:';
	$m.__track_lines__[109] = 'bones.selectmulti.py, line 109:\n    if alabel._children[0]["checked"]:';
	$m.__track_lines__[110] = 'bones.selectmulti.py, line 110:\n    value.append(alabel._children[0]["name"])';
	$m.__track_lines__[111] = 'bones.selectmulti.py, line 111:\n    return( { self.boneName: value } )';
	$m.__track_lines__[113] = 'bones.selectmulti.py, line 113:\n    def serializeForDocument(self):';
	$m.__track_lines__[114] = 'bones.selectmulti.py, line 114:\n    return( self.serialize( ) )';
	$m.__track_lines__[116] = 'bones.selectmulti.py, line 116:\n    def setExtendedErrorInformation(self, errorInfo ):';
	$m.__track_lines__[117] = 'bones.selectmulti.py, line 117:\n    pass';
	$m.__track_lines__[119] = 'bones.selectmulti.py, line 119:\n    class ExtendedSelectMultiSearch( html5.Div ):';
	$m.__track_lines__[120] = 'bones.selectmulti.py, line 120:\n    def __init__(self, extension, view, modul, *args, **kwargs ):';
	$m.__track_lines__[121] = 'bones.selectmulti.py, line 121:\n    super( ExtendedSelectMultiSearch, self ).__init__( *args, **kwargs )';
	$m.__track_lines__[122] = 'bones.selectmulti.py, line 122:\n    self.view = view';
	$m.__track_lines__[123] = 'bones.selectmulti.py, line 123:\n    self.extension = extension';
	$m.__track_lines__[124] = 'bones.selectmulti.py, line 124:\n    self.module = modul';
	$m.__track_lines__[125] = 'bones.selectmulti.py, line 125:\n    self.filterChangedEvent = EventDispatcher("filterChanged")';
	$m.__track_lines__[126] = 'bones.selectmulti.py, line 126:\n    self.appendChild( html5.TextNode(extension["name"]))';
	$m.__track_lines__[127] = 'bones.selectmulti.py, line 127:\n    self.selectionCb = html5.Select()';
	$m.__track_lines__[128] = 'bones.selectmulti.py, line 128:\n    self.appendChild( self.selectionCb )';
	$m.__track_lines__[129] = 'bones.selectmulti.py, line 129:\n    o = html5.Option()';
	$m.__track_lines__[130] = 'bones.selectmulti.py, line 130:\n    o["value"] = ""';
	$m.__track_lines__[131] = 'bones.selectmulti.py, line 131:\n    o.appendChild(html5.TextNode(translate("Ignore")))';
	$m.__track_lines__[132] = 'bones.selectmulti.py, line 132:\n    self.selectionCb.appendChild(o)';
	$m.__track_lines__[133] = 'bones.selectmulti.py, line 133:\n    for k,v in extension["values"].items():';
	$m.__track_lines__[134] = 'bones.selectmulti.py, line 134:\n    o = html5.Option()';
	$m.__track_lines__[135] = 'bones.selectmulti.py, line 135:\n    o["value"] = k';
	$m.__track_lines__[136] = 'bones.selectmulti.py, line 136:\n    o.appendChild(html5.TextNode(v))';
	$m.__track_lines__[137] = 'bones.selectmulti.py, line 137:\n    self.selectionCb.appendChild(o)';
	$m.__track_lines__[138] = 'bones.selectmulti.py, line 138:\n    self.sinkEvent("onChange")';
	$m.__track_lines__[140] = 'bones.selectmulti.py, line 140:\n    def onChange(self, event):';
	$m.__track_lines__[141] = 'bones.selectmulti.py, line 141:\n    event.stopPropagation()';
	$m.__track_lines__[142] = 'bones.selectmulti.py, line 142:\n    self.filterChangedEvent.fire()';
	$m.__track_lines__[144] = 'bones.selectmulti.py, line 144:\n    def updateFilter(self, filter):';
	$m.__track_lines__[145] = 'bones.selectmulti.py, line 145:\n    val = self.selectionCb["options"].item(self.selectionCb["selectedIndex"]).value';
	$m.__track_lines__[146] = 'bones.selectmulti.py, line 146:\n    if not val:';
	$m.__track_lines__[147] = 'bones.selectmulti.py, line 147:\n    if self.extension["target"] in filter.keys():';
	$m.__track_lines__[148] = 'bones.selectmulti.py, line 148:\n    del filter[ self.extension["target"] ]';
	$m.__track_lines__[150] = 'bones.selectmulti.py, line 150:\n    filter[ self.extension["target"] ] = val';
	$m.__track_lines__[151] = 'bones.selectmulti.py, line 151:\n    return( filter )';
	$m.__track_lines__[154] = 'bones.selectmulti.py, line 153:\n    @staticmethod ... def canHandleExtension( extension, view, modul ):';
	$m.__track_lines__[155] = 'bones.selectmulti.py, line 155:\n    return( isinstance( extension, dict) and "type" in extension.keys() and (extension["type"]=="selectmulti" or extension["type"].startswith("selectmulti.") ) )';
	$m.__track_lines__[157] = 'bones.selectmulti.py, line 157:\n    def CheckForSelectMultiBone(  moduleName, boneName, skelStucture, *args, **kwargs ):';
	$m.__track_lines__[158] = 'bones.selectmulti.py, line 158:\n    return skelStucture[boneName]["type"].startswith("selectmulti")';
	$m.__track_lines__[161] = 'bones.selectmulti.py, line 161:\n    editBoneSelector.insert( 3, CheckForSelectMultiBone, SelectMultiEditBone)';
	$m.__track_lines__[162] = 'bones.selectmulti.py, line 162:\n    viewDelegateSelector.insert( 3, CheckForSelectMultiBone, SelectMultiViewBoneDelegate)';
	$m.__track_lines__[163] = 'bones.selectmulti.py, line 163:\n    extendedSearchWidgetSelector.insert( 1, ExtendedSelectMultiSearch.canHandleExtension, ExtendedSelectMultiSearch )';
	$m.__track_lines__[164] = 'bones.selectmulti.py, line 164:\n    extractorDelegateSelector.insert(3, CheckForSelectMultiBone, SelectMultiBoneExtractor)';
	$m.__track_lines__[167] = 'bones.selectmulti.py, line 167:\n    class AccessMultiSelectBone( html5.Div ):';
	$m.__track_lines__[168] = 'bones.selectmulti.py, line 168:\n    states = [ "view", "edit", "add", "delete" ]';
	$m.__track_lines__[170] = 'bones.selectmulti.py, line 170:\n    def __init__(self, moduleName, boneName, readOnly, values, *args, **kwargs ):';
	$m.__track_lines__[171] = 'bones.selectmulti.py, line 171:\n    super( AccessMultiSelectBone,  self ).__init__( *args, **kwargs )';
	$m.__track_lines__[172] = 'bones.selectmulti.py, line 172:\n    self.boneName = boneName';
	$m.__track_lines__[173] = 'bones.selectmulti.py, line 173:\n    self.moduleName = moduleName';
	$m.__track_lines__[174] = 'bones.selectmulti.py, line 174:\n    self.readOnly = readOnly';
	$m.__track_lines__[175] = 'bones.selectmulti.py, line 175:\n    print(values)';
	$m.__track_lines__[176] = 'bones.selectmulti.py, line 176:\n    self.values = {k: v for k, v in values}';
	$m.__track_lines__[178] = 'bones.selectmulti.py, line 178:\n    self.modules = {}';
	$m.__track_lines__[179] = 'bones.selectmulti.py, line 179:\n    self.modulesbox = {}';
	$m.__track_lines__[180] = 'bones.selectmulti.py, line 180:\n    self.flags = {}';
	$m.__track_lines__[182] = 'bones.selectmulti.py, line 182:\n    self.sinkEvent( "onClick" )';
	$m.__track_lines__[184] = 'bones.selectmulti.py, line 184:\n    for value in self.values:';
	$m.__track_lines__[185] = 'bones.selectmulti.py, line 185:\n    module = self.parseskelaccess( value )';
	$m.__track_lines__[186] = 'bones.selectmulti.py, line 186:\n    if not module:';
	$m.__track_lines__[187] = 'bones.selectmulti.py, line 187:\n    self.flags[ value ] = None';
	$m.__track_lines__[189] = 'bones.selectmulti.py, line 189:\n    self.modules[ module[ 0 ] ] = {}';
	$m.__track_lines__[192] = 'bones.selectmulti.py, line 192:\n    for flag in sorted( self.flags.keys() ):';
	$m.__track_lines__[193] = 'bones.selectmulti.py, line 193:\n    label = html5.Label()';
	$m.__track_lines__[195] = 'bones.selectmulti.py, line 195:\n    checkbox = html5.Input()';
	$m.__track_lines__[196] = 'bones.selectmulti.py, line 196:\n    checkbox["type"] = "checkbox"';
	$m.__track_lines__[197] = 'bones.selectmulti.py, line 197:\n    checkbox["name"] = flag';
	$m.__track_lines__[198] = 'bones.selectmulti.py, line 198:\n    label.appendChild( checkbox )';
	$m.__track_lines__[200] = 'bones.selectmulti.py, line 200:\n    self.flags[ flag ] = checkbox';
	$m.__track_lines__[202] = 'bones.selectmulti.py, line 202:\n    span = html5.Span()';
	$m.__track_lines__[203] = 'bones.selectmulti.py, line 203:\n    span.appendChild( html5.TextNode( flag ) )';
	$m.__track_lines__[204] = 'bones.selectmulti.py, line 204:\n    label.appendChild( span )';
	$m.__track_lines__[206] = 'bones.selectmulti.py, line 206:\n    self.appendChild( label )';
	$m.__track_lines__[209] = 'bones.selectmulti.py, line 209:\n    for module in sorted( self.modules.keys() ):';
	$m.__track_lines__[210] = 'bones.selectmulti.py, line 210:\n    label = html5.Label()';
	$m.__track_lines__[212] = 'bones.selectmulti.py, line 212:\n    span = html5.Span()';
	$m.__track_lines__[213] = 'bones.selectmulti.py, line 213:\n    span.appendChild( html5.TextNode( module ) )';
	$m.__track_lines__[214] = 'bones.selectmulti.py, line 214:\n    label.appendChild( span )';
	$m.__track_lines__[216] = 'bones.selectmulti.py, line 216:\n    ul = html5.Ul()';
	$m.__track_lines__[218] = 'bones.selectmulti.py, line 218:\n    checkbox = html5.Input()';
	$m.__track_lines__[219] = 'bones.selectmulti.py, line 219:\n    checkbox["type"] = "checkbox"';
	$m.__track_lines__[220] = 'bones.selectmulti.py, line 220:\n    checkbox["name"] = module';
	$m.__track_lines__[221] = 'bones.selectmulti.py, line 221:\n    self.modulesbox[ module ] = checkbox';
	$m.__track_lines__[223] = 'bones.selectmulti.py, line 223:\n    li = html5.Li()';
	$m.__track_lines__[224] = 'bones.selectmulti.py, line 224:\n    li.appendChild( checkbox )';
	$m.__track_lines__[225] = 'bones.selectmulti.py, line 225:\n    ul.appendChild( li )';
	$m.__track_lines__[227] = 'bones.selectmulti.py, line 227:\n    for state in self.states:';
	$m.__track_lines__[228] = 'bones.selectmulti.py, line 228:\n    li = html5.Li()';
	$m.__track_lines__[229] = 'bones.selectmulti.py, line 229:\n    li[ "class" ] = [ "access-state", state ]';
	$m.__track_lines__[232] = 'bones.selectmulti.py, line 232:\n    if ( "%s-%s" % (module, state) ) not in self.values:';
	$m.__track_lines__[233] = 'bones.selectmulti.py, line 233:\n    li[ "class" ].append( "disabled" )';
	$m.__track_lines__[235] = 'bones.selectmulti.py, line 235:\n    ul.appendChild( li )';
	$m.__track_lines__[237] = 'bones.selectmulti.py, line 237:\n    self.modules[ module ][ state ] = li';
	$m.__track_lines__[239] = 'bones.selectmulti.py, line 239:\n    label.appendChild( ul )';
	$m.__track_lines__[241] = 'bones.selectmulti.py, line 241:\n    self.appendChild( label )';
	$m.__track_lines__[243] = 'bones.selectmulti.py, line 243:\n    def parseskelaccess( self, value ):';
	$m.__track_lines__[244] = 'bones.selectmulti.py, line 244:\n    for state in self.states:';
	$m.__track_lines__[245] = 'bones.selectmulti.py, line 245:\n    if value.endswith( state ):';
	$m.__track_lines__[246] = 'bones.selectmulti.py, line 246:\n    return ( value[ 0 :  -( len( state ) + 1 ) ], state )';
	$m.__track_lines__[248] = 'bones.selectmulti.py, line 248:\n    return False';
	$m.__track_lines__[250] = 'bones.selectmulti.py, line 250:\n    def onClick( self, event ):';
	$m.__track_lines__[251] = 'bones.selectmulti.py, line 251:\n    for module, toggles in self.modules.items():';
	$m.__track_lines__[252] = 'bones.selectmulti.py, line 252:\n    for toggle in toggles.values():';
	$m.__track_lines__[253] = 'bones.selectmulti.py, line 253:\n    if html5.utils.doesEventHitWidgetOrChildren(event, toggle):';
	$m.__track_lines__[254] = 'bones.selectmulti.py, line 254:\n    if not "disabled" in toggle[ "class" ]:';
	$m.__track_lines__[255] = 'bones.selectmulti.py, line 255:\n    if "active" in toggle[ "class" ]:';
	$m.__track_lines__[256] = 'bones.selectmulti.py, line 256:\n    toggle[ "class" ].remove( "active" )';
	$m.__track_lines__[260] = 'bones.selectmulti.py, line 260:\n    if "view" in toggle[ "class" ]:';
	$m.__track_lines__[261] = 'bones.selectmulti.py, line 261:\n    for rm in [ "add", "delete", "edit" ]:';
	$m.__track_lines__[262] = 'bones.selectmulti.py, line 262:\n    self.modules[ module ][ rm ][ "class" ].remove( "active" )';
	$m.__track_lines__[265] = 'bones.selectmulti.py, line 265:\n    toggle[ "class" ].append( "active" )';
	$m.__track_lines__[267] = 'bones.selectmulti.py, line 267:\n    self.checkmodulesbox( module )';
	$m.__track_lines__[269] = 'bones.selectmulti.py, line 269:\n    event.preventDefault()';
	$m.__track_lines__[270] = 'bones.selectmulti.py, line 270:\n    return';
	$m.__track_lines__[272] = 'bones.selectmulti.py, line 272:\n    if html5.utils.doesEventHitWidgetOrChildren(event, self.modulesbox[module]):';
	$m.__track_lines__[273] = 'bones.selectmulti.py, line 273:\n    self.modulesbox[ module ].parent()["class"].remove("partly")';
	$m.__track_lines__[275] = 'bones.selectmulti.py, line 275:\n    for toggle in toggles.values():';
	$m.__track_lines__[276] = 'bones.selectmulti.py, line 276:\n    if not "disabled" in toggle[ "class" ]:';
	$m.__track_lines__[277] = 'bones.selectmulti.py, line 277:\n    if self.modulesbox[ module ][ "checked" ]:';
	$m.__track_lines__[278] = 'bones.selectmulti.py, line 278:\n    if not "active" in toggle[ "class" ]:';
	$m.__track_lines__[279] = 'bones.selectmulti.py, line 279:\n    toggle[ "class" ].append( "active" )';
	$m.__track_lines__[281] = 'bones.selectmulti.py, line 281:\n    toggle[ "class" ].remove( "active" )';
	$m.__track_lines__[283] = 'bones.selectmulti.py, line 283:\n    return';
	$m.__track_lines__[285] = 'bones.selectmulti.py, line 285:\n    def checkmodulesbox(self, module):';
	$m.__track_lines__[286] = 'bones.selectmulti.py, line 286:\n    on = 0';
	$m.__track_lines__[287] = 'bones.selectmulti.py, line 287:\n    all = 0';
	$m.__track_lines__[289] = 'bones.selectmulti.py, line 289:\n    for item in self.modules[ module ].values():';
	$m.__track_lines__[290] = 'bones.selectmulti.py, line 290:\n    if not "disabled" in item[ "class" ]:';
	$m.__track_lines__[291] = 'bones.selectmulti.py, line 291:\n    all += 1';
	$m.__track_lines__[293] = 'bones.selectmulti.py, line 293:\n    if "active" in item[ "class" ]:';
	$m.__track_lines__[294] = 'bones.selectmulti.py, line 294:\n    on += 1';
	$m.__track_lines__[296] = 'bones.selectmulti.py, line 296:\n    if on == 0 or on == all:';
	$m.__track_lines__[297] = 'bones.selectmulti.py, line 297:\n    self.modulesbox[ module ].parent()[ "class" ].remove( "partly" )';
	$m.__track_lines__[298] = 'bones.selectmulti.py, line 298:\n    self.modulesbox[ module ][ "indeterminate" ] = False';
	$m.__track_lines__[299] = 'bones.selectmulti.py, line 299:\n    self.modulesbox[ module ][ "checked" ] = ( on == all )';
	$m.__track_lines__[301] = 'bones.selectmulti.py, line 301:\n    self.modulesbox[ module ][ "checked" ] = False';
	$m.__track_lines__[302] = 'bones.selectmulti.py, line 302:\n    self.modulesbox[ module ][ "indeterminate" ] = True';
	$m.__track_lines__[304] = 'bones.selectmulti.py, line 304:\n    if not "partly" in self.modulesbox[ module ].parent()[ "class" ]:';
	$m.__track_lines__[305] = 'bones.selectmulti.py, line 305:\n    self.modulesbox[ module ].parent()[ "class" ].append( "partly" )';
	$m.__track_lines__[308] = 'bones.selectmulti.py, line 307:\n    @staticmethod ... def fromSkelStructure( moduleName, boneName, skelStructure ):';
	$m.__track_lines__[309] = 'bones.selectmulti.py, line 309:\n    return AccessMultiSelectBone(moduleName, boneName, skelStructure[ boneName ].get("readonly", False),';
	$m.__track_lines__[312] = 'bones.selectmulti.py, line 312:\n    def unserialize(self, data):';
	$m.__track_lines__[313] = 'bones.selectmulti.py, line 313:\n    if self.boneName in data.keys():';
	$m.__track_lines__[314] = 'bones.selectmulti.py, line 314:\n    values = data[ self.boneName ] if data[ self.boneName ] else []';
	$m.__track_lines__[316] = 'bones.selectmulti.py, line 316:\n    for name, elem in self.flags.items():';
	$m.__track_lines__[317] = 'bones.selectmulti.py, line 317:\n    if name in values:';
	$m.__track_lines__[318] = 'bones.selectmulti.py, line 318:\n    elem[ "checked" ] = True';
	$m.__track_lines__[320] = 'bones.selectmulti.py, line 320:\n    for module in self.modules:';
	$m.__track_lines__[321] = 'bones.selectmulti.py, line 321:\n    for state in self.states:';
	$m.__track_lines__[322] = 'bones.selectmulti.py, line 322:\n    if "%s-%s" % ( module, state ) in values:';
	$m.__track_lines__[323] = 'bones.selectmulti.py, line 323:\n    if not "active" in self.modules[ module ][ state ][ "class" ]:';
	$m.__track_lines__[324] = 'bones.selectmulti.py, line 324:\n    self.modules[ module ][ state ][ "class" ].append( "active" )';
	$m.__track_lines__[326] = 'bones.selectmulti.py, line 326:\n    self.checkmodulesbox( module )';
	$m.__track_lines__[329] = 'bones.selectmulti.py, line 329:\n    def serializeForPost(self):';
	$m.__track_lines__[330] = 'bones.selectmulti.py, line 330:\n    ret = []';
	$m.__track_lines__[332] = 'bones.selectmulti.py, line 332:\n    for name, elem in self.flags.items():';
	$m.__track_lines__[333] = 'bones.selectmulti.py, line 333:\n    if elem[ "checked" ]:';
	$m.__track_lines__[334] = 'bones.selectmulti.py, line 334:\n    ret.append( name )';
	$m.__track_lines__[336] = 'bones.selectmulti.py, line 336:\n    for module in self.modules:';
	$m.__track_lines__[337] = 'bones.selectmulti.py, line 337:\n    for state in self.states:';
	$m.__track_lines__[338] = 'bones.selectmulti.py, line 338:\n    if "active" in self.modules[ module ][ state ][ "class" ]:';
	$m.__track_lines__[339] = 'bones.selectmulti.py, line 339:\n    ret.append( "%s-%s" % ( module, state ) )';
	$m.__track_lines__[341] = 'bones.selectmulti.py, line 341:\n    return { self.boneName: ret }';
	$m.__track_lines__[343] = 'bones.selectmulti.py, line 343:\n    def serializeForDocument(self):';
	$m.__track_lines__[344] = 'bones.selectmulti.py, line 344:\n    return self.serialize()';
	$m.__track_lines__[346] = 'bones.selectmulti.py, line 346:\n    def CheckForAccessMultiSelectBone( moduleName, boneName, skelStucture ):';
	$m.__track_lines__[347] = 'bones.selectmulti.py, line 347:\n    if skelStucture[boneName]["type"] == "selectmulti.access":';
	$m.__track_lines__[348] = 'bones.selectmulti.py, line 348:\n    return True';
	$m.__track_lines__[350] = 'bones.selectmulti.py, line 350:\n    return False';
	$m.__track_lines__[353] = 'bones.selectmulti.py, line 353:\n    editBoneSelector.insert( 4, CheckForAccessMultiSelectBone, AccessMultiSelectBone )';


	$pyjs['track']['module']='bones.selectmulti';
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
	$m['translate'] = $p['___import___']('i18n.translate', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=6;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['conf'] = $p['___import___']('config.conf', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=7;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['BaseBoneExtractor'] = $p['___import___']('bones.base.BaseBoneExtractor', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=9;
	$m['SelectMultiBoneExtractor'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'bones.selectmulti';
		$pyjs['track']['lineno']=10;
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

			$pyjs['track']={'module':'bones.selectmulti', 'lineno':10};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.selectmulti';
			$pyjs['track']['lineno']=10;
			$pyjs['track']['lineno']=11;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['SelectMultiBoneExtractor'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()['__init__']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs['track']['lineno']=12;
			self['skelStructure'] = skelStructure;
			$pyjs['track']['lineno']=13;
			self['boneName'] = boneName;
			$pyjs['track']['lineno']=14;
			self['moduleName'] = moduleName;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['moduleName'],['boneName'],['skelStructure']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=16;
		$method = $pyjs__bind_method2('render', function(data, field) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				field = arguments[2];
			}
			var $iter1_nextval,$iter1_type,$iter1_idx,value,$iter1_iter,fieldKey,result,$pyjs__trackstack_size_1,$iter1_array;
			$pyjs['track']={'module':'bones.selectmulti', 'lineno':16};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.selectmulti';
			$pyjs['track']['lineno']=16;
			$pyjs['track']['lineno']=17;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return data['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})()['__contains__'](field));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})()) {
				$pyjs['track']['lineno']=18;
				result = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
				$pyjs['track']['lineno']=19;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter1_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return data['__getitem__'](field);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					fieldKey = $iter1_nextval['$nextval'];
					$pyjs['track']['lineno']=20;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'skelStructure')['__getitem__'](field)['__getitem__']('values')['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})()['__contains__'](fieldKey)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})()) {
						$pyjs['track']['lineno']=21;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return result['append'](fieldKey);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
					}
					else {
						$pyjs['track']['lineno']=23;
						value = $p['getattr'](self, 'skelStructure')['__getitem__'](field)['__getitem__']('values')['__getitem__'](fieldKey);
						$pyjs['track']['lineno']=24;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](value);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})()) {
							$pyjs['track']['lineno']=25;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return result['append'](value);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
						}
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='bones.selectmulti';
				$pyjs['track']['lineno']=26;
				$pyjs['track']['lineno']=26;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return ','['join'](result);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=28;
			$pyjs['track']['lineno']=28;
			var $pyjs__ret = $m['conf']['__getitem__']('empty_value');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['data'],['field']]);
		$cls_definition['render'] = $method;
		$pyjs['track']['lineno']=9;
		var $bases = new Array($m['BaseBoneExtractor']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('SelectMultiBoneExtractor', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=30;
	$m['SelectMultiViewBoneDelegate'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'bones.selectmulti';
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

			$pyjs['track']={'module':'bones.selectmulti', 'lineno':31};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.selectmulti';
			$pyjs['track']['lineno']=31;
			$pyjs['track']['lineno']=32;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['SelectMultiViewBoneDelegate'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})()['__init__']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
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
			var $iter3_idx,$sub4,fieldKey,i,$and1,$iter3_array,$pyjs__trackstack_size_1,$sub3,$and2,result,$iter3_type,ali,$sub2,$sub1,$iter3_nextval,options,$iter3_iter;
			$pyjs['track']={'module':'bones.selectmulti', 'lineno':37};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.selectmulti';
			$pyjs['track']['lineno']=37;
			$pyjs['track']['lineno']=38;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return data['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})()['__contains__'](field));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})()) {
				$pyjs['track']['lineno']=39;
				result = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Ul']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
				$pyjs['track']['lineno']=40;
				options = function(){
					var $iter2_nextval,$iter2_type,$iter2_iter,k,$pyjs__trackstack_size_1,$collcomp1,$iter2_idx,v,$iter2_array;
	$collcomp1 = $p['dict']();
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter2_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'skelStructure')['__getitem__'](field)['__getitem__']('values');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					var $tupleassign1 = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['__ass_unpack']($iter2_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
					k = $tupleassign1[0];
					v = $tupleassign1[1];
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $collcomp1['__setitem__'](k, v);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='bones.selectmulti';

	return $collcomp1;}();
				$pyjs['track']['lineno']=42;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter3_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['enumerate'](data['__getitem__'](field));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
					var $tupleassign2 = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['__ass_unpack']($iter3_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
					i = $tupleassign2[0];
					fieldKey = $tupleassign2[1];
					$pyjs['track']['lineno']=43;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['bool']($and1=$m['conf']['__getitem__']('maxMultiBoneEntries'))?$p['op_eq'](i, $m['conf']['__getitem__']('maxMultiBoneEntries')):$and1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})()) {
						$pyjs['track']['lineno']=44;
						ali = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['html5']['Li']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
						$pyjs['track']['lineno']=46;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return ali['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['html5']['TextNode']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $pyjs_kwargs_call(null, $m['translate'], null, null, [{'count':$p['__op_sub']($sub3=$p['__op_sub']($sub1=(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['len'](data['__getitem__'](field));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})(),$sub2=$m['conf']['__getitem__']('maxMultiBoneEntries')),$sub4=1)}, 'and {count} more']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})();
						$pyjs['track']['lineno']=48;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return ali['__getitem__']('class')['append']('selectmulti_more_li');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
						$pyjs['track']['lineno']=50;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return result['appendChild'](ali);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
						$pyjs['track']['lineno']=51;
						break;
					}
					$pyjs['track']['lineno']=53;
					ali = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['html5']['Li']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
					$pyjs['track']['lineno']=54;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return ali['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['html5']['TextNode']((function(){try{try{$pyjs['in_try_except'] += 1;
					return options['get'](fieldKey, fieldKey);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})();
					$pyjs['track']['lineno']=55;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return ali['__setitem__']('Title', fieldKey);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})();
					$pyjs['track']['lineno']=57;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return result['appendChild'](ali);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='bones.selectmulti';
				$pyjs['track']['lineno']=59;
				$pyjs['track']['lineno']=59;
				var $pyjs__ret = result;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=61;
			$pyjs['track']['lineno']=61;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Label']($m['conf']['__getitem__']('empty_value'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
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
		return $p['_create_class']('SelectMultiViewBoneDelegate', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=63;
	$m['SelectMultiEditBone'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'bones.selectmulti';
		$pyjs['track']['lineno']=65;
		$method = $pyjs__bind_method2('__init__', function(moduleName, boneName, readOnly, values) {
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
				moduleName = arguments[1];
				boneName = arguments[2];
				readOnly = arguments[3];
				values = arguments[4];
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
				if (typeof values != 'undefined') {
					if (values !== null && typeof values['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = values;
						values = arguments[5];
					}
				} else 				if (typeof readOnly != 'undefined') {
					if (readOnly !== null && typeof readOnly['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = readOnly;
						readOnly = arguments[5];
					}
				} else 				if (typeof boneName != 'undefined') {
					if (boneName !== null && typeof boneName['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = boneName;
						boneName = arguments[5];
					}
				} else 				if (typeof moduleName != 'undefined') {
					if (moduleName !== null && typeof moduleName['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = moduleName;
						moduleName = arguments[5];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[5];
					}
				} else {
				}
			}
			var $iter5_nextval,$iter5_idx,aspan,$iter5_array,value,alabel,$iter5_iter,key,$iter5_type,$pyjs__trackstack_size_1,acheckbox;
			$pyjs['track']={'module':'bones.selectmulti', 'lineno':65};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.selectmulti';
			$pyjs['track']['lineno']=65;
			$pyjs['track']['lineno']=66;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['SelectMultiEditBone'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})();
			$pyjs['track']['lineno']=67;
			self['boneName'] = boneName;
			$pyjs['track']['lineno']=68;
			self['readOnly'] = readOnly;
			$pyjs['track']['lineno']=71;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance'](values, $p['dict']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})()) {
				$pyjs['track']['lineno']=72;
				self['values'] = function(){
					var $iter4_nextval,k,$pyjs__trackstack_size_1,$collcomp2,$iter4_idx,$iter4_type,v,$iter4_array,$iter4_iter;
	$collcomp2 = $p['list']();
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter4_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return values['items']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})();
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
					var $tupleassign3 = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['__ass_unpack']($iter4_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})();
					k = $tupleassign3[0];
					v = $tupleassign3[1];
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $collcomp2['append']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([k, v]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='bones.selectmulti';

	return $collcomp2;}();
			}
			else {
				$pyjs['track']['lineno']=74;
				self['values'] = values;
			}
			$pyjs['track']['lineno']=77;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter5_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'values');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})();
			$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
			while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
				var $tupleassign4 = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__ass_unpack']($iter5_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})();
				key = $tupleassign4[0];
				value = $tupleassign4[1];
				$pyjs['track']['lineno']=78;
				alabel = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Label']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})();
				$pyjs['track']['lineno']=79;
				acheckbox = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Input']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})();
				$pyjs['track']['lineno']=80;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return acheckbox['__setitem__']('type', 'checkbox');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})();
				$pyjs['track']['lineno']=81;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return acheckbox['__setitem__']('name', key);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})();
				$pyjs['track']['lineno']=82;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return alabel['appendChild'](acheckbox);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})();
				$pyjs['track']['lineno']=84;
				aspan = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Span']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})();
				$pyjs['track']['lineno']=85;
				$p['getattr'](aspan, 'element')['innerHTML'] = value;
				$pyjs['track']['lineno']=86;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return alabel['appendChild'](aspan);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})();
				$pyjs['track']['lineno']=88;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['appendChild'](alabel);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='bones.selectmulti';
			$pyjs['track']['lineno']=90;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'readOnly'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})()) {
				$pyjs['track']['lineno']=91;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__setitem__']('disabled', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['moduleName'],['boneName'],['readOnly'],['values']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=94;
		$method = $pyjs__bind_method2('fromSkelStructure', function(moduleName, boneName, skelStructure) {

			$pyjs['track']={'module':'bones.selectmulti', 'lineno':94};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.selectmulti';
			$pyjs['track']['lineno']=94;
			$pyjs['track']['lineno']=95;
			$pyjs['track']['lineno']=95;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['SelectMultiEditBone'](moduleName, boneName, (function(){try{try{$pyjs['in_try_except'] += 1;
			return skelStructure['__getitem__'](boneName)['get']('readonly', false);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
			return skelStructure['__getitem__'](boneName)['get']('values', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['moduleName'],['boneName'],['skelStructure']]);
		$cls_definition['fromSkelStructure'] = $method;
		$pyjs['track']['lineno']=99;
		$method = $pyjs__bind_method2('unserialize', function(data) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}
			var $iter6_idx,$iter6_type,alabel,$iter6_array,$pyjs__trackstack_size_1,$iter6_iter,$iter6_nextval;
			$pyjs['track']={'module':'bones.selectmulti', 'lineno':99};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.selectmulti';
			$pyjs['track']['lineno']=99;
			$pyjs['track']['lineno']=100;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return data['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})()['__contains__']($p['getattr'](self, 'boneName')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})()) {
				$pyjs['track']['lineno']=101;
				self['val'] = ($p['bool'](data['__getitem__']($p['getattr'](self, 'boneName')))? (data['__getitem__']($p['getattr'](self, 'boneName'))) : ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})()));
				$pyjs['track']['lineno']=102;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter6_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, '_children');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})();
				$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
				while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
					alabel = $iter6_nextval['$nextval'];
					$pyjs['track']['lineno']=103;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['getattr'](self, 'val')['__contains__']($p['getattr'](alabel, '_children')['__getitem__'](0)['__getitem__']('name')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})()) {
						$pyjs['track']['lineno']=104;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](alabel, '_children')['__getitem__'](0)['__setitem__']('checked', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})();
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='bones.selectmulti';
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['data']]);
		$cls_definition['unserialize'] = $method;
		$pyjs['track']['lineno']=106;
		$method = $pyjs__bind_method2('serializeForPost', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter7_nextval,$iter7_iter,$iter7_array,value,alabel,$iter7_idx,$iter7_type,$pyjs__trackstack_size_1;
			$pyjs['track']={'module':'bones.selectmulti', 'lineno':106};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.selectmulti';
			$pyjs['track']['lineno']=106;
			$pyjs['track']['lineno']=107;
			value = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})();
			$pyjs['track']['lineno']=108;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter7_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, '_children');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})();
			$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
			while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
				alabel = $iter7_nextval['$nextval'];
				$pyjs['track']['lineno']=109;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](alabel, '_children')['__getitem__'](0)['__getitem__']('checked'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})()) {
					$pyjs['track']['lineno']=110;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return value['append']($p['getattr'](alabel, '_children')['__getitem__'](0)['__getitem__']('name'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})();
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='bones.selectmulti';
			$pyjs['track']['lineno']=111;
			$pyjs['track']['lineno']=111;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([[$p['getattr'](self, 'boneName'), value]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['serializeForPost'] = $method;
		$pyjs['track']['lineno']=113;
		$method = $pyjs__bind_method2('serializeForDocument', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'bones.selectmulti', 'lineno':113};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.selectmulti';
			$pyjs['track']['lineno']=113;
			$pyjs['track']['lineno']=114;
			$pyjs['track']['lineno']=114;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['serialize']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['serializeForDocument'] = $method;
		$pyjs['track']['lineno']=116;
		$method = $pyjs__bind_method2('setExtendedErrorInformation', function(errorInfo) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				errorInfo = arguments[1];
			}

			$pyjs['track']={'module':'bones.selectmulti', 'lineno':116};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.selectmulti';
			$pyjs['track']['lineno']=116;
			$pyjs['track']['lineno']=117;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['errorInfo']]);
		$cls_definition['setExtendedErrorInformation'] = $method;
		$pyjs['track']['lineno']=63;
		var $bases = new Array($p['getattr']($m['html5'], 'Div'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('SelectMultiEditBone', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=119;
	$m['ExtendedSelectMultiSearch'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'bones.selectmulti';
		$pyjs['track']['lineno']=120;
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
			var v,$iter8_idx,$iter8_array,o,$iter8_iter,$iter8_nextval,$iter8_type,k,$pyjs__trackstack_size_1;
			$pyjs['track']={'module':'bones.selectmulti', 'lineno':120};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.selectmulti';
			$pyjs['track']['lineno']=120;
			$pyjs['track']['lineno']=121;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['ExtendedSelectMultiSearch'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})();
			$pyjs['track']['lineno']=122;
			self['view'] = view;
			$pyjs['track']['lineno']=123;
			self['extension'] = extension;
			$pyjs['track']['lineno']=124;
			self['module'] = modul;
			$pyjs['track']['lineno']=125;
			self['filterChangedEvent'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['EventDispatcher']('filterChanged');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})();
			$pyjs['track']['lineno']=126;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['TextNode'](extension['__getitem__']('name'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})();
			$pyjs['track']['lineno']=127;
			self['selectionCb'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Select']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})();
			$pyjs['track']['lineno']=128;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'selectionCb'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})();
			$pyjs['track']['lineno']=129;
			o = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Option']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})();
			$pyjs['track']['lineno']=130;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return o['__setitem__']('value', '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
}})();
			$pyjs['track']['lineno']=131;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return o['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['TextNode']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Ignore');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})();
			$pyjs['track']['lineno']=132;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['selectionCb']['appendChild'](o);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_88_err){if (!$p['isinstance']($pyjs_dbg_88_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_88_err);}throw $pyjs_dbg_88_err;
}})();
			$pyjs['track']['lineno']=133;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter8_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return extension['__getitem__']('values')['items']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_90_err){if (!$p['isinstance']($pyjs_dbg_90_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_90_err);}throw $pyjs_dbg_90_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_91_err){if (!$p['isinstance']($pyjs_dbg_91_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_91_err);}throw $pyjs_dbg_91_err;
}})();
			$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
			while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
				var $tupleassign5 = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__ass_unpack']($iter8_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_89_err){if (!$p['isinstance']($pyjs_dbg_89_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_89_err);}throw $pyjs_dbg_89_err;
}})();
				k = $tupleassign5[0];
				v = $tupleassign5[1];
				$pyjs['track']['lineno']=134;
				o = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Option']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_92_err){if (!$p['isinstance']($pyjs_dbg_92_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_92_err);}throw $pyjs_dbg_92_err;
}})();
				$pyjs['track']['lineno']=135;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return o['__setitem__']('value', k);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_93_err){if (!$p['isinstance']($pyjs_dbg_93_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_93_err);}throw $pyjs_dbg_93_err;
}})();
				$pyjs['track']['lineno']=136;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return o['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['TextNode'](v);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_94_err){if (!$p['isinstance']($pyjs_dbg_94_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_94_err);}throw $pyjs_dbg_94_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_95_err){if (!$p['isinstance']($pyjs_dbg_95_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_95_err);}throw $pyjs_dbg_95_err;
}})();
				$pyjs['track']['lineno']=137;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['selectionCb']['appendChild'](o);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_96_err){if (!$p['isinstance']($pyjs_dbg_96_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_96_err);}throw $pyjs_dbg_96_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='bones.selectmulti';
			$pyjs['track']['lineno']=138;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['sinkEvent']('onChange');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_97_err){if (!$p['isinstance']($pyjs_dbg_97_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_97_err);}throw $pyjs_dbg_97_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['extension'],['view'],['modul']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=140;
		$method = $pyjs__bind_method2('onChange', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'bones.selectmulti', 'lineno':140};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.selectmulti';
			$pyjs['track']['lineno']=140;
			$pyjs['track']['lineno']=141;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return event['stopPropagation']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_98_err){if (!$p['isinstance']($pyjs_dbg_98_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_98_err);}throw $pyjs_dbg_98_err;
}})();
			$pyjs['track']['lineno']=142;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['filterChangedEvent']['fire']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_99_err){if (!$p['isinstance']($pyjs_dbg_99_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_99_err);}throw $pyjs_dbg_99_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onChange'] = $method;
		$pyjs['track']['lineno']=144;
		$method = $pyjs__bind_method2('updateFilter', function(filter) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				filter = arguments[1];
			}
			var val;
			$pyjs['track']={'module':'bones.selectmulti', 'lineno':144};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.selectmulti';
			$pyjs['track']['lineno']=144;
			$pyjs['track']['lineno']=145;
			val = $p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'selectionCb')['__getitem__']('options')['item']($p['getattr'](self, 'selectionCb')['__getitem__']('selectedIndex'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_100_err){if (!$p['isinstance']($pyjs_dbg_100_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_100_err);}throw $pyjs_dbg_100_err;
}})(), 'value');
			$pyjs['track']['lineno']=146;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool'](val));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_101_err){if (!$p['isinstance']($pyjs_dbg_101_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_101_err);}throw $pyjs_dbg_101_err;
}})()) {
				$pyjs['track']['lineno']=147;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return filter['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_102_err){if (!$p['isinstance']($pyjs_dbg_102_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_102_err);}throw $pyjs_dbg_102_err;
}})()['__contains__']($p['getattr'](self, 'extension')['__getitem__']('target')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_103_err){if (!$p['isinstance']($pyjs_dbg_103_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_103_err);}throw $pyjs_dbg_103_err;
}})()) {
					$pyjs['track']['lineno']=148;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return filter['__delitem__']($p['getattr'](self, 'extension')['__getitem__']('target'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_104_err){if (!$p['isinstance']($pyjs_dbg_104_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_104_err);}throw $pyjs_dbg_104_err;
}})();
				}
			}
			else {
				$pyjs['track']['lineno']=150;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return filter['__setitem__']($p['getattr'](self, 'extension')['__getitem__']('target'), val);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_105_err){if (!$p['isinstance']($pyjs_dbg_105_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_105_err);}throw $pyjs_dbg_105_err;
}})();
			}
			$pyjs['track']['lineno']=151;
			$pyjs['track']['lineno']=151;
			var $pyjs__ret = filter;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['filter']]);
		$cls_definition['updateFilter'] = $method;
		$pyjs['track']['lineno']=154;
		$method = $pyjs__bind_method2('canHandleExtension', function(extension, view, modul) {
			var $or1,$or2,$and3,$and4,$and5;
			$pyjs['track']={'module':'bones.selectmulti', 'lineno':154};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.selectmulti';
			$pyjs['track']['lineno']=154;
			$pyjs['track']['lineno']=155;
			$pyjs['track']['lineno']=155;
			var $pyjs__ret = ($p['bool']($and3=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance'](extension, $p['dict']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_106_err){if (!$p['isinstance']($pyjs_dbg_106_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_106_err);}throw $pyjs_dbg_106_err;
}})())?($p['bool']($and4=(function(){try{try{$pyjs['in_try_except'] += 1;
			return extension['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_107_err){if (!$p['isinstance']($pyjs_dbg_107_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_107_err);}throw $pyjs_dbg_107_err;
}})()['__contains__']('type'))?($p['bool']($or1=$p['op_eq'](extension['__getitem__']('type'), 'selectmulti'))?$or1:(function(){try{try{$pyjs['in_try_except'] += 1;
			return extension['__getitem__']('type')['startswith']('selectmulti.');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_108_err){if (!$p['isinstance']($pyjs_dbg_108_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_108_err);}throw $pyjs_dbg_108_err;
}})()):$and4):$and3);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['extension'],['view'],['modul']]);
		$cls_definition['canHandleExtension'] = $method;
		$pyjs['track']['lineno']=119;
		var $bases = new Array($p['getattr']($m['html5'], 'Div'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('ExtendedSelectMultiSearch', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=157;
	$m['CheckForSelectMultiBone'] = function(moduleName, boneName, skelStucture) {
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

		$pyjs['track']={'module':'bones.selectmulti','lineno':157};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='bones.selectmulti';
		$pyjs['track']['lineno']=157;
		$pyjs['track']['lineno']=158;
		$pyjs['track']['lineno']=158;
		var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
		return skelStucture['__getitem__'](boneName)['__getitem__']('type')['startswith']('selectmulti');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_109_err){if (!$p['isinstance']($pyjs_dbg_109_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_109_err);}throw $pyjs_dbg_109_err;
}})();
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['CheckForSelectMultiBone']['__name__'] = 'CheckForSelectMultiBone';

	$m['CheckForSelectMultiBone']['__bind_type__'] = 0;
	$m['CheckForSelectMultiBone']['__args__'] = ['args',['kwargs'],['moduleName'],['boneName'],['skelStucture']];
	$pyjs['track']['lineno']=161;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['editBoneSelector']['insert'](3, $m['CheckForSelectMultiBone'], $m['SelectMultiEditBone']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_110_err){if (!$p['isinstance']($pyjs_dbg_110_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_110_err);}throw $pyjs_dbg_110_err;
}})();
	$pyjs['track']['lineno']=162;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['viewDelegateSelector']['insert'](3, $m['CheckForSelectMultiBone'], $m['SelectMultiViewBoneDelegate']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_111_err){if (!$p['isinstance']($pyjs_dbg_111_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_111_err);}throw $pyjs_dbg_111_err;
}})();
	$pyjs['track']['lineno']=163;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['extendedSearchWidgetSelector']['insert'](1, $p['getattr']($m['ExtendedSelectMultiSearch'], 'canHandleExtension'), $m['ExtendedSelectMultiSearch']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_112_err){if (!$p['isinstance']($pyjs_dbg_112_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_112_err);}throw $pyjs_dbg_112_err;
}})();
	$pyjs['track']['lineno']=164;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['extractorDelegateSelector']['insert'](3, $m['CheckForSelectMultiBone'], $m['SelectMultiBoneExtractor']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_113_err){if (!$p['isinstance']($pyjs_dbg_113_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_113_err);}throw $pyjs_dbg_113_err;
}})();
	$pyjs['track']['lineno']=167;
	$m['AccessMultiSelectBone'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'bones.selectmulti';
		$pyjs['track']['lineno']=168;
		$cls_definition['states'] = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['list'](['view', 'edit', 'add', 'delete']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_114_err){if (!$p['isinstance']($pyjs_dbg_114_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_114_err);}throw $pyjs_dbg_114_err;
}})();
		$pyjs['track']['lineno']=170;
		$method = $pyjs__bind_method2('__init__', function(moduleName, boneName, readOnly, values) {
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
				moduleName = arguments[1];
				boneName = arguments[2];
				readOnly = arguments[3];
				values = arguments[4];
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
				if (typeof values != 'undefined') {
					if (values !== null && typeof values['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = values;
						values = arguments[5];
					}
				} else 				if (typeof readOnly != 'undefined') {
					if (readOnly !== null && typeof readOnly['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = readOnly;
						readOnly = arguments[5];
					}
				} else 				if (typeof boneName != 'undefined') {
					if (boneName !== null && typeof boneName['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = boneName;
						boneName = arguments[5];
					}
				} else 				if (typeof moduleName != 'undefined') {
					if (moduleName !== null && typeof moduleName['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = moduleName;
						moduleName = arguments[5];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[5];
					}
				} else {
				}
			}
			var $iter10_nextval,module,checkbox,value,$iter10_iter,li,$iter13_array,span,$$label,state,$pyjs__trackstack_size_2,$iter11_idx,$iter13_type,$iter13_iter,$iter11_iter,$iter12_array,flag,$iter11_array,$iter11_nextval,$iter13_nextval,$iter12_type,$iter11_type,$iter10_array,$iter12_nextval,$iter12_iter,ul,$pyjs__trackstack_size_1,$iter10_type,$iter12_idx,$iter10_idx,$iter13_idx;
			$pyjs['track']={'module':'bones.selectmulti', 'lineno':170};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.selectmulti';
			$pyjs['track']['lineno']=170;
			$pyjs['track']['lineno']=171;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['AccessMultiSelectBone'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_115_err){if (!$p['isinstance']($pyjs_dbg_115_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_115_err);}throw $pyjs_dbg_115_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_116_err){if (!$p['isinstance']($pyjs_dbg_116_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_116_err);}throw $pyjs_dbg_116_err;
}})();
			$pyjs['track']['lineno']=172;
			self['boneName'] = boneName;
			$pyjs['track']['lineno']=173;
			self['moduleName'] = moduleName;
			$pyjs['track']['lineno']=174;
			self['readOnly'] = readOnly;
			$pyjs['track']['lineno']=175;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['printFunc']([values], 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_117_err){if (!$p['isinstance']($pyjs_dbg_117_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_117_err);}throw $pyjs_dbg_117_err;
}})();
			$pyjs['track']['lineno']=176;
			self['values'] = function(){
				var $iter9_iter,$collcomp3,k,$pyjs__trackstack_size_1,$iter9_nextval,$iter9_idx,$iter9_type,v,$iter9_array;
	$collcomp3 = $p['dict']();
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter9_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return values;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_119_err){if (!$p['isinstance']($pyjs_dbg_119_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_119_err);}throw $pyjs_dbg_119_err;
}})();
			$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
			while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
				var $tupleassign6 = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__ass_unpack']($iter9_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_118_err){if (!$p['isinstance']($pyjs_dbg_118_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_118_err);}throw $pyjs_dbg_118_err;
}})();
				k = $tupleassign6[0];
				v = $tupleassign6[1];
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $collcomp3['__setitem__'](k, v);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_120_err){if (!$p['isinstance']($pyjs_dbg_120_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_120_err);}throw $pyjs_dbg_120_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='bones.selectmulti';

	return $collcomp3;}();
			$pyjs['track']['lineno']=178;
			self['modules'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_121_err){if (!$p['isinstance']($pyjs_dbg_121_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_121_err);}throw $pyjs_dbg_121_err;
}})();
			$pyjs['track']['lineno']=179;
			self['modulesbox'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_122_err){if (!$p['isinstance']($pyjs_dbg_122_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_122_err);}throw $pyjs_dbg_122_err;
}})();
			$pyjs['track']['lineno']=180;
			self['flags'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_123_err){if (!$p['isinstance']($pyjs_dbg_123_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_123_err);}throw $pyjs_dbg_123_err;
}})();
			$pyjs['track']['lineno']=182;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['sinkEvent']('onClick');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_124_err){if (!$p['isinstance']($pyjs_dbg_124_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_124_err);}throw $pyjs_dbg_124_err;
}})();
			$pyjs['track']['lineno']=184;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter10_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'values');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_125_err){if (!$p['isinstance']($pyjs_dbg_125_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_125_err);}throw $pyjs_dbg_125_err;
}})();
			$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
			while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
				value = $iter10_nextval['$nextval'];
				$pyjs['track']['lineno']=185;
				module = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['parseskelaccess'](value);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_126_err){if (!$p['isinstance']($pyjs_dbg_126_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_126_err);}throw $pyjs_dbg_126_err;
}})();
				$pyjs['track']['lineno']=186;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool'](module));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_127_err){if (!$p['isinstance']($pyjs_dbg_127_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_127_err);}throw $pyjs_dbg_127_err;
}})()) {
					$pyjs['track']['lineno']=187;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'flags')['__setitem__'](value, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_128_err){if (!$p['isinstance']($pyjs_dbg_128_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_128_err);}throw $pyjs_dbg_128_err;
}})();
				}
				else if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return self['modules']['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_129_err){if (!$p['isinstance']($pyjs_dbg_129_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_129_err);}throw $pyjs_dbg_129_err;
}})()['__contains__'](module['__getitem__'](0))));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_130_err){if (!$p['isinstance']($pyjs_dbg_130_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_130_err);}throw $pyjs_dbg_130_err;
}})()) {
					$pyjs['track']['lineno']=189;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'modules')['__setitem__'](module['__getitem__'](0), (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_131_err){if (!$p['isinstance']($pyjs_dbg_131_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_131_err);}throw $pyjs_dbg_131_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_132_err){if (!$p['isinstance']($pyjs_dbg_132_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_132_err);}throw $pyjs_dbg_132_err;
}})();
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='bones.selectmulti';
			$pyjs['track']['lineno']=192;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter11_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sorted']((function(){try{try{$pyjs['in_try_except'] += 1;
			return self['flags']['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_133_err){if (!$p['isinstance']($pyjs_dbg_133_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_133_err);}throw $pyjs_dbg_133_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_134_err){if (!$p['isinstance']($pyjs_dbg_134_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_134_err);}throw $pyjs_dbg_134_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_135_err){if (!$p['isinstance']($pyjs_dbg_135_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_135_err);}throw $pyjs_dbg_135_err;
}})();
			$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
			while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
				flag = $iter11_nextval['$nextval'];
				$pyjs['track']['lineno']=193;
				$$label = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Label']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_136_err){if (!$p['isinstance']($pyjs_dbg_136_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_136_err);}throw $pyjs_dbg_136_err;
}})();
				$pyjs['track']['lineno']=195;
				checkbox = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Input']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_137_err){if (!$p['isinstance']($pyjs_dbg_137_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_137_err);}throw $pyjs_dbg_137_err;
}})();
				$pyjs['track']['lineno']=196;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return checkbox['__setitem__']('type', 'checkbox');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_138_err){if (!$p['isinstance']($pyjs_dbg_138_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_138_err);}throw $pyjs_dbg_138_err;
}})();
				$pyjs['track']['lineno']=197;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return checkbox['__setitem__']('name', flag);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_139_err){if (!$p['isinstance']($pyjs_dbg_139_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_139_err);}throw $pyjs_dbg_139_err;
}})();
				$pyjs['track']['lineno']=198;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $$label['appendChild'](checkbox);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_140_err){if (!$p['isinstance']($pyjs_dbg_140_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_140_err);}throw $pyjs_dbg_140_err;
}})();
				$pyjs['track']['lineno']=200;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'flags')['__setitem__'](flag, checkbox);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_141_err){if (!$p['isinstance']($pyjs_dbg_141_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_141_err);}throw $pyjs_dbg_141_err;
}})();
				$pyjs['track']['lineno']=202;
				span = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Span']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_142_err){if (!$p['isinstance']($pyjs_dbg_142_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_142_err);}throw $pyjs_dbg_142_err;
}})();
				$pyjs['track']['lineno']=203;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return span['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['TextNode'](flag);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_143_err){if (!$p['isinstance']($pyjs_dbg_143_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_143_err);}throw $pyjs_dbg_143_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_144_err){if (!$p['isinstance']($pyjs_dbg_144_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_144_err);}throw $pyjs_dbg_144_err;
}})();
				$pyjs['track']['lineno']=204;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $$label['appendChild'](span);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_145_err){if (!$p['isinstance']($pyjs_dbg_145_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_145_err);}throw $pyjs_dbg_145_err;
}})();
				$pyjs['track']['lineno']=206;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['appendChild']($$label);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_146_err){if (!$p['isinstance']($pyjs_dbg_146_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_146_err);}throw $pyjs_dbg_146_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='bones.selectmulti';
			$pyjs['track']['lineno']=209;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter12_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sorted']((function(){try{try{$pyjs['in_try_except'] += 1;
			return self['modules']['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_147_err){if (!$p['isinstance']($pyjs_dbg_147_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_147_err);}throw $pyjs_dbg_147_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_148_err){if (!$p['isinstance']($pyjs_dbg_148_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_148_err);}throw $pyjs_dbg_148_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_149_err){if (!$p['isinstance']($pyjs_dbg_149_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_149_err);}throw $pyjs_dbg_149_err;
}})();
			$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
			while (typeof($p['__wrapped_next']($iter12_nextval)['$nextval']) != 'undefined') {
				module = $iter12_nextval['$nextval'];
				$pyjs['track']['lineno']=210;
				$$label = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Label']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_150_err){if (!$p['isinstance']($pyjs_dbg_150_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_150_err);}throw $pyjs_dbg_150_err;
}})();
				$pyjs['track']['lineno']=212;
				span = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Span']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_151_err){if (!$p['isinstance']($pyjs_dbg_151_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_151_err);}throw $pyjs_dbg_151_err;
}})();
				$pyjs['track']['lineno']=213;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return span['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['TextNode'](module);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_152_err){if (!$p['isinstance']($pyjs_dbg_152_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_152_err);}throw $pyjs_dbg_152_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_153_err){if (!$p['isinstance']($pyjs_dbg_153_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_153_err);}throw $pyjs_dbg_153_err;
}})();
				$pyjs['track']['lineno']=214;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $$label['appendChild'](span);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_154_err){if (!$p['isinstance']($pyjs_dbg_154_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_154_err);}throw $pyjs_dbg_154_err;
}})();
				$pyjs['track']['lineno']=216;
				ul = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Ul']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_155_err){if (!$p['isinstance']($pyjs_dbg_155_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_155_err);}throw $pyjs_dbg_155_err;
}})();
				$pyjs['track']['lineno']=218;
				checkbox = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Input']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_156_err){if (!$p['isinstance']($pyjs_dbg_156_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_156_err);}throw $pyjs_dbg_156_err;
}})();
				$pyjs['track']['lineno']=219;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return checkbox['__setitem__']('type', 'checkbox');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_157_err){if (!$p['isinstance']($pyjs_dbg_157_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_157_err);}throw $pyjs_dbg_157_err;
}})();
				$pyjs['track']['lineno']=220;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return checkbox['__setitem__']('name', module);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_158_err){if (!$p['isinstance']($pyjs_dbg_158_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_158_err);}throw $pyjs_dbg_158_err;
}})();
				$pyjs['track']['lineno']=221;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'modulesbox')['__setitem__'](module, checkbox);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_159_err){if (!$p['isinstance']($pyjs_dbg_159_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_159_err);}throw $pyjs_dbg_159_err;
}})();
				$pyjs['track']['lineno']=223;
				li = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Li']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_160_err){if (!$p['isinstance']($pyjs_dbg_160_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_160_err);}throw $pyjs_dbg_160_err;
}})();
				$pyjs['track']['lineno']=224;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return li['appendChild'](checkbox);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_161_err){if (!$p['isinstance']($pyjs_dbg_161_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_161_err);}throw $pyjs_dbg_161_err;
}})();
				$pyjs['track']['lineno']=225;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return ul['appendChild'](li);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_162_err){if (!$p['isinstance']($pyjs_dbg_162_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_162_err);}throw $pyjs_dbg_162_err;
}})();
				$pyjs['track']['lineno']=227;
				$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
				$iter13_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'states');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_163_err){if (!$p['isinstance']($pyjs_dbg_163_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_163_err);}throw $pyjs_dbg_163_err;
}})();
				$iter13_nextval=$p['__iter_prepare']($iter13_iter,false);
				while (typeof($p['__wrapped_next']($iter13_nextval)['$nextval']) != 'undefined') {
					state = $iter13_nextval['$nextval'];
					$pyjs['track']['lineno']=228;
					li = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['html5']['Li']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_164_err){if (!$p['isinstance']($pyjs_dbg_164_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_164_err);}throw $pyjs_dbg_164_err;
}})();
					$pyjs['track']['lineno']=229;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return li['__setitem__']('class', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['list'](['access-state', state]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_165_err){if (!$p['isinstance']($pyjs_dbg_165_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_165_err);}throw $pyjs_dbg_165_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_166_err){if (!$p['isinstance']($pyjs_dbg_166_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_166_err);}throw $pyjs_dbg_166_err;
}})();
					$pyjs['track']['lineno']=232;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](!$p['getattr'](self, 'values')['__contains__']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['sprintf']('%s-%s', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([module, state]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_167_err){if (!$p['isinstance']($pyjs_dbg_167_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_167_err);}throw $pyjs_dbg_167_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_168_err){if (!$p['isinstance']($pyjs_dbg_168_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_168_err);}throw $pyjs_dbg_168_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_169_err){if (!$p['isinstance']($pyjs_dbg_169_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_169_err);}throw $pyjs_dbg_169_err;
}})()) {
						$pyjs['track']['lineno']=233;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return li['__getitem__']('class')['append']('disabled');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_170_err){if (!$p['isinstance']($pyjs_dbg_170_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_170_err);}throw $pyjs_dbg_170_err;
}})();
					}
					$pyjs['track']['lineno']=235;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return ul['appendChild'](li);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_171_err){if (!$p['isinstance']($pyjs_dbg_171_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_171_err);}throw $pyjs_dbg_171_err;
}})();
					$pyjs['track']['lineno']=237;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'modules')['__getitem__'](module)['__setitem__'](state, li);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_172_err){if (!$p['isinstance']($pyjs_dbg_172_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_172_err);}throw $pyjs_dbg_172_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='bones.selectmulti';
				$pyjs['track']['lineno']=239;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $$label['appendChild'](ul);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_173_err){if (!$p['isinstance']($pyjs_dbg_173_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_173_err);}throw $pyjs_dbg_173_err;
}})();
				$pyjs['track']['lineno']=241;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['appendChild']($$label);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_174_err){if (!$p['isinstance']($pyjs_dbg_174_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_174_err);}throw $pyjs_dbg_174_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='bones.selectmulti';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['moduleName'],['boneName'],['readOnly'],['values']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=243;
		$method = $pyjs__bind_method2('parseskelaccess', function(value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}
			var $iter14_array,$iter14_type,$add2,state,$add1,$iter14_iter,$pyjs__trackstack_size_1,$iter14_idx,$iter14_nextval;
			$pyjs['track']={'module':'bones.selectmulti', 'lineno':243};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.selectmulti';
			$pyjs['track']['lineno']=243;
			$pyjs['track']['lineno']=244;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter14_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'states');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_175_err){if (!$p['isinstance']($pyjs_dbg_175_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_175_err);}throw $pyjs_dbg_175_err;
}})();
			$iter14_nextval=$p['__iter_prepare']($iter14_iter,false);
			while (typeof($p['__wrapped_next']($iter14_nextval)['$nextval']) != 'undefined') {
				state = $iter14_nextval['$nextval'];
				$pyjs['track']['lineno']=245;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return value['endswith'](state);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_176_err){if (!$p['isinstance']($pyjs_dbg_176_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_176_err);}throw $pyjs_dbg_176_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_177_err){if (!$p['isinstance']($pyjs_dbg_177_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_177_err);}throw $pyjs_dbg_177_err;
}})()) {
					$pyjs['track']['lineno']=246;
					$pyjs['track']['lineno']=246;
					var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([$p['__getslice'](value, 0, (typeof ($usub1=$p['__op_add']($add1=(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len'](state);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_178_err){if (!$p['isinstance']($pyjs_dbg_178_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_178_err);}throw $pyjs_dbg_178_err;
}})(),$add2=1))=='number'?
						-$usub1:
						$p['op_usub']($usub1))), state]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_179_err){if (!$p['isinstance']($pyjs_dbg_179_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_179_err);}throw $pyjs_dbg_179_err;
}})();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='bones.selectmulti';
			$pyjs['track']['lineno']=248;
			$pyjs['track']['lineno']=248;
			var $pyjs__ret = false;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['parseskelaccess'] = $method;
		$pyjs['track']['lineno']=250;
		$method = $pyjs__bind_method2('onClick', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $iter18_type,$pyjs__trackstack_size_1,module,$iter16_idx,toggle,$iter17_type,$iter16_iter,$iter17_iter,$iter15_iter,$iter16_type,$iter18_idx,$iter16_nextval,$iter18_nextval,$iter17_nextval,$iter18_iter,toggles,$iter15_array,$iter17_array,rm,$iter16_array,$iter18_array,$iter15_idx,$pyjs__trackstack_size_2,$pyjs__trackstack_size_3,$iter15_nextval,$iter15_type,$iter17_idx;
			$pyjs['track']={'module':'bones.selectmulti', 'lineno':250};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.selectmulti';
			$pyjs['track']['lineno']=250;
			$pyjs['track']['lineno']=251;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter15_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['modules']['items']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_181_err){if (!$p['isinstance']($pyjs_dbg_181_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_181_err);}throw $pyjs_dbg_181_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_182_err){if (!$p['isinstance']($pyjs_dbg_182_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_182_err);}throw $pyjs_dbg_182_err;
}})();
			$iter15_nextval=$p['__iter_prepare']($iter15_iter,false);
			while (typeof($p['__wrapped_next']($iter15_nextval)['$nextval']) != 'undefined') {
				var $tupleassign7 = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__ass_unpack']($iter15_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_180_err){if (!$p['isinstance']($pyjs_dbg_180_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_180_err);}throw $pyjs_dbg_180_err;
}})();
				module = $tupleassign7[0];
				toggles = $tupleassign7[1];
				$pyjs['track']['lineno']=252;
				$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
				$iter16_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return toggles['values']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_183_err){if (!$p['isinstance']($pyjs_dbg_183_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_183_err);}throw $pyjs_dbg_183_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_184_err){if (!$p['isinstance']($pyjs_dbg_184_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_184_err);}throw $pyjs_dbg_184_err;
}})();
				$iter16_nextval=$p['__iter_prepare']($iter16_iter,false);
				while (typeof($p['__wrapped_next']($iter16_nextval)['$nextval']) != 'undefined') {
					toggle = $iter16_nextval['$nextval'];
					$pyjs['track']['lineno']=253;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['html5']['utils']['doesEventHitWidgetOrChildren'](event, toggle);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_185_err){if (!$p['isinstance']($pyjs_dbg_185_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_185_err);}throw $pyjs_dbg_185_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_186_err){if (!$p['isinstance']($pyjs_dbg_186_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_186_err);}throw $pyjs_dbg_186_err;
}})()) {
						$pyjs['track']['lineno']=254;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](!$p['bool'](toggle['__getitem__']('class')['__contains__']('disabled')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_187_err){if (!$p['isinstance']($pyjs_dbg_187_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_187_err);}throw $pyjs_dbg_187_err;
}})()) {
							$pyjs['track']['lineno']=255;
							if ((function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['bool'](toggle['__getitem__']('class')['__contains__']('active'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_188_err){if (!$p['isinstance']($pyjs_dbg_188_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_188_err);}throw $pyjs_dbg_188_err;
}})()) {
								$pyjs['track']['lineno']=256;
								(function(){try{try{$pyjs['in_try_except'] += 1;
								return toggle['__getitem__']('class')['remove']('active');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_189_err){if (!$p['isinstance']($pyjs_dbg_189_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_189_err);}throw $pyjs_dbg_189_err;
}})();
								$pyjs['track']['lineno']=260;
								if ((function(){try{try{$pyjs['in_try_except'] += 1;
									return $p['bool'](toggle['__getitem__']('class')['__contains__']('view'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_190_err){if (!$p['isinstance']($pyjs_dbg_190_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_190_err);}throw $pyjs_dbg_190_err;
}})()) {
									$pyjs['track']['lineno']=261;
									$pyjs__trackstack_size_3=$pyjs['trackstack']['length'];
									$iter17_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
									return (function(){try{try{$pyjs['in_try_except'] += 1;
									return $p['list'](['add', 'delete', 'edit']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_191_err){if (!$p['isinstance']($pyjs_dbg_191_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_191_err);}throw $pyjs_dbg_191_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_192_err){if (!$p['isinstance']($pyjs_dbg_192_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_192_err);}throw $pyjs_dbg_192_err;
}})();
									$iter17_nextval=$p['__iter_prepare']($iter17_iter,false);
									while (typeof($p['__wrapped_next']($iter17_nextval)['$nextval']) != 'undefined') {
										rm = $iter17_nextval['$nextval'];
										$pyjs['track']['lineno']=262;
										(function(){try{try{$pyjs['in_try_except'] += 1;
										return $p['getattr'](self, 'modules')['__getitem__'](module)['__getitem__'](rm)['__getitem__']('class')['remove']('active');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_193_err){if (!$p['isinstance']($pyjs_dbg_193_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_193_err);}throw $pyjs_dbg_193_err;
}})();
									}
									if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_3) {
										$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_3);
										$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
									}
									$pyjs['track']['module']='bones.selectmulti';
								}
							}
							else {
								$pyjs['track']['lineno']=265;
								(function(){try{try{$pyjs['in_try_except'] += 1;
								return toggle['__getitem__']('class')['append']('active');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_194_err){if (!$p['isinstance']($pyjs_dbg_194_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_194_err);}throw $pyjs_dbg_194_err;
}})();
							}
						}
						$pyjs['track']['lineno']=267;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return self['checkmodulesbox'](module);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_195_err){if (!$p['isinstance']($pyjs_dbg_195_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_195_err);}throw $pyjs_dbg_195_err;
}})();
						$pyjs['track']['lineno']=269;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return event['preventDefault']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_196_err){if (!$p['isinstance']($pyjs_dbg_196_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_196_err);}throw $pyjs_dbg_196_err;
}})();
						$pyjs['track']['lineno']=270;
						$pyjs['track']['lineno']=270;
						var $pyjs__ret = null;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='bones.selectmulti';
				$pyjs['track']['lineno']=272;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['utils']['doesEventHitWidgetOrChildren'](event, $p['getattr'](self, 'modulesbox')['__getitem__'](module));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_197_err){if (!$p['isinstance']($pyjs_dbg_197_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_197_err);}throw $pyjs_dbg_197_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_198_err){if (!$p['isinstance']($pyjs_dbg_198_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_198_err);}throw $pyjs_dbg_198_err;
}})()) {
					$pyjs['track']['lineno']=273;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'modulesbox')['__getitem__'](module)['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_199_err){if (!$p['isinstance']($pyjs_dbg_199_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_199_err);}throw $pyjs_dbg_199_err;
}})()['__getitem__']('class')['remove']('partly');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_200_err){if (!$p['isinstance']($pyjs_dbg_200_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_200_err);}throw $pyjs_dbg_200_err;
}})();
					$pyjs['track']['lineno']=275;
					$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
					$iter18_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return toggles['values']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_201_err){if (!$p['isinstance']($pyjs_dbg_201_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_201_err);}throw $pyjs_dbg_201_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_202_err){if (!$p['isinstance']($pyjs_dbg_202_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_202_err);}throw $pyjs_dbg_202_err;
}})();
					$iter18_nextval=$p['__iter_prepare']($iter18_iter,false);
					while (typeof($p['__wrapped_next']($iter18_nextval)['$nextval']) != 'undefined') {
						toggle = $iter18_nextval['$nextval'];
						$pyjs['track']['lineno']=276;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](!$p['bool'](toggle['__getitem__']('class')['__contains__']('disabled')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_203_err){if (!$p['isinstance']($pyjs_dbg_203_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_203_err);}throw $pyjs_dbg_203_err;
}})()) {
							$pyjs['track']['lineno']=277;
							if ((function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['bool']($p['getattr'](self, 'modulesbox')['__getitem__'](module)['__getitem__']('checked'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_204_err){if (!$p['isinstance']($pyjs_dbg_204_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_204_err);}throw $pyjs_dbg_204_err;
}})()) {
								$pyjs['track']['lineno']=278;
								if ((function(){try{try{$pyjs['in_try_except'] += 1;
									return $p['bool'](!$p['bool'](toggle['__getitem__']('class')['__contains__']('active')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_205_err){if (!$p['isinstance']($pyjs_dbg_205_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_205_err);}throw $pyjs_dbg_205_err;
}})()) {
									$pyjs['track']['lineno']=279;
									(function(){try{try{$pyjs['in_try_except'] += 1;
									return toggle['__getitem__']('class')['append']('active');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_206_err){if (!$p['isinstance']($pyjs_dbg_206_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_206_err);}throw $pyjs_dbg_206_err;
}})();
								}
							}
							else {
								$pyjs['track']['lineno']=281;
								(function(){try{try{$pyjs['in_try_except'] += 1;
								return toggle['__getitem__']('class')['remove']('active');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_207_err){if (!$p['isinstance']($pyjs_dbg_207_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_207_err);}throw $pyjs_dbg_207_err;
}})();
							}
						}
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='bones.selectmulti';
					$pyjs['track']['lineno']=283;
					$pyjs['track']['lineno']=283;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='bones.selectmulti';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=285;
		$method = $pyjs__bind_method2('checkmodulesbox', function(module) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				module = arguments[1];
			}
			var on,all,$iter19_idx,$or3,item,$add5,$iter19_array,$iter19_iter,$iter19_nextval,$iter19_type,$add6,$add4,$pyjs__trackstack_size_1,$or4,$add3;
			$pyjs['track']={'module':'bones.selectmulti', 'lineno':285};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.selectmulti';
			$pyjs['track']['lineno']=285;
			$pyjs['track']['lineno']=286;
			on = 0;
			$pyjs['track']['lineno']=287;
			all = 0;
			$pyjs['track']['lineno']=289;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter19_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'modules')['__getitem__'](module)['values']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_208_err){if (!$p['isinstance']($pyjs_dbg_208_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_208_err);}throw $pyjs_dbg_208_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_209_err){if (!$p['isinstance']($pyjs_dbg_209_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_209_err);}throw $pyjs_dbg_209_err;
}})();
			$iter19_nextval=$p['__iter_prepare']($iter19_iter,false);
			while (typeof($p['__wrapped_next']($iter19_nextval)['$nextval']) != 'undefined') {
				item = $iter19_nextval['$nextval'];
				$pyjs['track']['lineno']=290;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool'](item['__getitem__']('class')['__contains__']('disabled')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_210_err){if (!$p['isinstance']($pyjs_dbg_210_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_210_err);}throw $pyjs_dbg_210_err;
}})()) {
					$pyjs['track']['lineno']=291;
					all = $p['__op_add']($add3=all,$add4=1);
				}
				$pyjs['track']['lineno']=293;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](item['__getitem__']('class')['__contains__']('active'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_211_err){if (!$p['isinstance']($pyjs_dbg_211_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_211_err);}throw $pyjs_dbg_211_err;
}})()) {
					$pyjs['track']['lineno']=294;
					on = $p['__op_add']($add5=on,$add6=1);
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='bones.selectmulti';
			$pyjs['track']['lineno']=296;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($or3=$p['op_eq'](on, 0))?$or3:$p['op_eq'](on, all)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_212_err){if (!$p['isinstance']($pyjs_dbg_212_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_212_err);}throw $pyjs_dbg_212_err;
}})()) {
				$pyjs['track']['lineno']=297;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'modulesbox')['__getitem__'](module)['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_213_err){if (!$p['isinstance']($pyjs_dbg_213_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_213_err);}throw $pyjs_dbg_213_err;
}})()['__getitem__']('class')['remove']('partly');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_214_err){if (!$p['isinstance']($pyjs_dbg_214_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_214_err);}throw $pyjs_dbg_214_err;
}})();
				$pyjs['track']['lineno']=298;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'modulesbox')['__getitem__'](module)['__setitem__']('indeterminate', false);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_215_err){if (!$p['isinstance']($pyjs_dbg_215_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_215_err);}throw $pyjs_dbg_215_err;
}})();
				$pyjs['track']['lineno']=299;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'modulesbox')['__getitem__'](module)['__setitem__']('checked', $p['op_eq'](on, all));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_216_err){if (!$p['isinstance']($pyjs_dbg_216_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_216_err);}throw $pyjs_dbg_216_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=301;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'modulesbox')['__getitem__'](module)['__setitem__']('checked', false);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_217_err){if (!$p['isinstance']($pyjs_dbg_217_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_217_err);}throw $pyjs_dbg_217_err;
}})();
				$pyjs['track']['lineno']=302;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'modulesbox')['__getitem__'](module)['__setitem__']('indeterminate', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_218_err){if (!$p['isinstance']($pyjs_dbg_218_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_218_err);}throw $pyjs_dbg_218_err;
}})();
				$pyjs['track']['lineno']=304;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'modulesbox')['__getitem__'](module)['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_219_err){if (!$p['isinstance']($pyjs_dbg_219_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_219_err);}throw $pyjs_dbg_219_err;
}})()['__getitem__']('class')['__contains__']('partly')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_220_err){if (!$p['isinstance']($pyjs_dbg_220_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_220_err);}throw $pyjs_dbg_220_err;
}})()) {
					$pyjs['track']['lineno']=305;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'modulesbox')['__getitem__'](module)['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_221_err){if (!$p['isinstance']($pyjs_dbg_221_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_221_err);}throw $pyjs_dbg_221_err;
}})()['__getitem__']('class')['append']('partly');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_222_err){if (!$p['isinstance']($pyjs_dbg_222_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_222_err);}throw $pyjs_dbg_222_err;
}})();
				}
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['module']]);
		$cls_definition['checkmodulesbox'] = $method;
		$pyjs['track']['lineno']=308;
		$method = $pyjs__bind_method2('fromSkelStructure', function(moduleName, boneName, skelStructure) {

			$pyjs['track']={'module':'bones.selectmulti', 'lineno':308};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.selectmulti';
			$pyjs['track']['lineno']=308;
			$pyjs['track']['lineno']=309;
			$pyjs['track']['lineno']=309;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['AccessMultiSelectBone'](moduleName, boneName, (function(){try{try{$pyjs['in_try_except'] += 1;
			return skelStructure['__getitem__'](boneName)['get']('readonly', false);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_223_err){if (!$p['isinstance']($pyjs_dbg_223_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_223_err);}throw $pyjs_dbg_223_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
			return skelStructure['__getitem__'](boneName)['get']('values', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_224_err){if (!$p['isinstance']($pyjs_dbg_224_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_224_err);}throw $pyjs_dbg_224_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_225_err){if (!$p['isinstance']($pyjs_dbg_225_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_225_err);}throw $pyjs_dbg_225_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_226_err){if (!$p['isinstance']($pyjs_dbg_226_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_226_err);}throw $pyjs_dbg_226_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['moduleName'],['boneName'],['skelStructure']]);
		$cls_definition['fromSkelStructure'] = $method;
		$pyjs['track']['lineno']=312;
		$method = $pyjs__bind_method2('unserialize', function(data) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
			}
			var $iter20_nextval,$iter22_array,module,$iter22_idx,$iter22_type,$iter20_array,state,$pyjs__trackstack_size_2,$iter22_iter,$iter20_iter,$iter21_idx,$iter21_nextval,$iter22_nextval,$iter21_iter,$iter20_type,name,elem,$iter21_type,$iter20_idx,values,$iter21_array,$pyjs__trackstack_size_1;
			$pyjs['track']={'module':'bones.selectmulti', 'lineno':312};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.selectmulti';
			$pyjs['track']['lineno']=312;
			$pyjs['track']['lineno']=313;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return data['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_227_err){if (!$p['isinstance']($pyjs_dbg_227_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_227_err);}throw $pyjs_dbg_227_err;
}})()['__contains__']($p['getattr'](self, 'boneName')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_228_err){if (!$p['isinstance']($pyjs_dbg_228_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_228_err);}throw $pyjs_dbg_228_err;
}})()) {
				$pyjs['track']['lineno']=314;
				values = ($p['bool'](data['__getitem__']($p['getattr'](self, 'boneName')))? (data['__getitem__']($p['getattr'](self, 'boneName'))) : ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_229_err){if (!$p['isinstance']($pyjs_dbg_229_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_229_err);}throw $pyjs_dbg_229_err;
}})()));
				$pyjs['track']['lineno']=316;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter20_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['flags']['items']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_231_err){if (!$p['isinstance']($pyjs_dbg_231_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_231_err);}throw $pyjs_dbg_231_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_232_err){if (!$p['isinstance']($pyjs_dbg_232_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_232_err);}throw $pyjs_dbg_232_err;
}})();
				$iter20_nextval=$p['__iter_prepare']($iter20_iter,false);
				while (typeof($p['__wrapped_next']($iter20_nextval)['$nextval']) != 'undefined') {
					var $tupleassign8 = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['__ass_unpack']($iter20_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_230_err){if (!$p['isinstance']($pyjs_dbg_230_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_230_err);}throw $pyjs_dbg_230_err;
}})();
					name = $tupleassign8[0];
					elem = $tupleassign8[1];
					$pyjs['track']['lineno']=317;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](values['__contains__'](name));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_233_err){if (!$p['isinstance']($pyjs_dbg_233_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_233_err);}throw $pyjs_dbg_233_err;
}})()) {
						$pyjs['track']['lineno']=318;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return elem['__setitem__']('checked', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_234_err){if (!$p['isinstance']($pyjs_dbg_234_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_234_err);}throw $pyjs_dbg_234_err;
}})();
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='bones.selectmulti';
				$pyjs['track']['lineno']=320;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter21_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'modules');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_235_err){if (!$p['isinstance']($pyjs_dbg_235_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_235_err);}throw $pyjs_dbg_235_err;
}})();
				$iter21_nextval=$p['__iter_prepare']($iter21_iter,false);
				while (typeof($p['__wrapped_next']($iter21_nextval)['$nextval']) != 'undefined') {
					module = $iter21_nextval['$nextval'];
					$pyjs['track']['lineno']=321;
					$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
					$iter22_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'states');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_236_err){if (!$p['isinstance']($pyjs_dbg_236_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_236_err);}throw $pyjs_dbg_236_err;
}})();
					$iter22_nextval=$p['__iter_prepare']($iter22_iter,false);
					while (typeof($p['__wrapped_next']($iter22_nextval)['$nextval']) != 'undefined') {
						state = $iter22_nextval['$nextval'];
						$pyjs['track']['lineno']=322;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](values['__contains__']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['sprintf']('%s-%s', (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['tuple']([module, state]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_237_err){if (!$p['isinstance']($pyjs_dbg_237_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_237_err);}throw $pyjs_dbg_237_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_238_err){if (!$p['isinstance']($pyjs_dbg_238_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_238_err);}throw $pyjs_dbg_238_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_239_err){if (!$p['isinstance']($pyjs_dbg_239_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_239_err);}throw $pyjs_dbg_239_err;
}})()) {
							$pyjs['track']['lineno']=323;
							if ((function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['bool'](!$p['bool']($p['getattr'](self, 'modules')['__getitem__'](module)['__getitem__'](state)['__getitem__']('class')['__contains__']('active')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_240_err){if (!$p['isinstance']($pyjs_dbg_240_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_240_err);}throw $pyjs_dbg_240_err;
}})()) {
								$pyjs['track']['lineno']=324;
								(function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['getattr'](self, 'modules')['__getitem__'](module)['__getitem__'](state)['__getitem__']('class')['append']('active');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_241_err){if (!$p['isinstance']($pyjs_dbg_241_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_241_err);}throw $pyjs_dbg_241_err;
}})();
							}
						}
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='bones.selectmulti';
					$pyjs['track']['lineno']=326;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['checkmodulesbox'](module);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_242_err){if (!$p['isinstance']($pyjs_dbg_242_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_242_err);}throw $pyjs_dbg_242_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='bones.selectmulti';
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['data']]);
		$cls_definition['unserialize'] = $method;
		$pyjs['track']['lineno']=329;
		$method = $pyjs__bind_method2('serializeForPost', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter23_type,$iter25_nextval,$iter25_array,module,$iter23_idx,$iter23_iter,ret,$iter24_type,state,$iter24_iter,$iter24_nextval,$iter23_array,$iter25_type,name,$iter23_nextval,$iter24_idx,elem,$iter25_iter,$iter24_array,$pyjs__trackstack_size_2,$iter25_idx,$pyjs__trackstack_size_1;
			$pyjs['track']={'module':'bones.selectmulti', 'lineno':329};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.selectmulti';
			$pyjs['track']['lineno']=329;
			$pyjs['track']['lineno']=330;
			ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_243_err){if (!$p['isinstance']($pyjs_dbg_243_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_243_err);}throw $pyjs_dbg_243_err;
}})();
			$pyjs['track']['lineno']=332;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter23_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['flags']['items']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_245_err){if (!$p['isinstance']($pyjs_dbg_245_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_245_err);}throw $pyjs_dbg_245_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_246_err){if (!$p['isinstance']($pyjs_dbg_246_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_246_err);}throw $pyjs_dbg_246_err;
}})();
			$iter23_nextval=$p['__iter_prepare']($iter23_iter,false);
			while (typeof($p['__wrapped_next']($iter23_nextval)['$nextval']) != 'undefined') {
				var $tupleassign9 = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__ass_unpack']($iter23_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_244_err){if (!$p['isinstance']($pyjs_dbg_244_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_244_err);}throw $pyjs_dbg_244_err;
}})();
				name = $tupleassign9[0];
				elem = $tupleassign9[1];
				$pyjs['track']['lineno']=333;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](elem['__getitem__']('checked'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_247_err){if (!$p['isinstance']($pyjs_dbg_247_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_247_err);}throw $pyjs_dbg_247_err;
}})()) {
					$pyjs['track']['lineno']=334;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return ret['append'](name);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_248_err){if (!$p['isinstance']($pyjs_dbg_248_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_248_err);}throw $pyjs_dbg_248_err;
}})();
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='bones.selectmulti';
			$pyjs['track']['lineno']=336;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter24_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'modules');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_249_err){if (!$p['isinstance']($pyjs_dbg_249_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_249_err);}throw $pyjs_dbg_249_err;
}})();
			$iter24_nextval=$p['__iter_prepare']($iter24_iter,false);
			while (typeof($p['__wrapped_next']($iter24_nextval)['$nextval']) != 'undefined') {
				module = $iter24_nextval['$nextval'];
				$pyjs['track']['lineno']=337;
				$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
				$iter25_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'states');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_250_err){if (!$p['isinstance']($pyjs_dbg_250_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_250_err);}throw $pyjs_dbg_250_err;
}})();
				$iter25_nextval=$p['__iter_prepare']($iter25_iter,false);
				while (typeof($p['__wrapped_next']($iter25_nextval)['$nextval']) != 'undefined') {
					state = $iter25_nextval['$nextval'];
					$pyjs['track']['lineno']=338;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['getattr'](self, 'modules')['__getitem__'](module)['__getitem__'](state)['__getitem__']('class')['__contains__']('active'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_251_err){if (!$p['isinstance']($pyjs_dbg_251_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_251_err);}throw $pyjs_dbg_251_err;
}})()) {
						$pyjs['track']['lineno']=339;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return ret['append']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['sprintf']('%s-%s', (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['tuple']([module, state]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_252_err){if (!$p['isinstance']($pyjs_dbg_252_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_252_err);}throw $pyjs_dbg_252_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_253_err){if (!$p['isinstance']($pyjs_dbg_253_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_253_err);}throw $pyjs_dbg_253_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_254_err){if (!$p['isinstance']($pyjs_dbg_254_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_254_err);}throw $pyjs_dbg_254_err;
}})();
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='bones.selectmulti';
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='bones.selectmulti';
			$pyjs['track']['lineno']=341;
			$pyjs['track']['lineno']=341;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([[$p['getattr'](self, 'boneName'), ret]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_255_err){if (!$p['isinstance']($pyjs_dbg_255_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_255_err);}throw $pyjs_dbg_255_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['serializeForPost'] = $method;
		$pyjs['track']['lineno']=343;
		$method = $pyjs__bind_method2('serializeForDocument', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'bones.selectmulti', 'lineno':343};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.selectmulti';
			$pyjs['track']['lineno']=343;
			$pyjs['track']['lineno']=344;
			$pyjs['track']['lineno']=344;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['serialize']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_256_err){if (!$p['isinstance']($pyjs_dbg_256_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_256_err);}throw $pyjs_dbg_256_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['serializeForDocument'] = $method;
		$pyjs['track']['lineno']=167;
		var $bases = new Array($p['getattr']($m['html5'], 'Div'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('AccessMultiSelectBone', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=346;
	$m['CheckForAccessMultiSelectBone'] = function(moduleName, boneName, skelStucture) {

		$pyjs['track']={'module':'bones.selectmulti','lineno':346};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='bones.selectmulti';
		$pyjs['track']['lineno']=346;
		$pyjs['track']['lineno']=347;
		if ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool']($p['op_eq'](skelStucture['__getitem__'](boneName)['__getitem__']('type'), 'selectmulti.access'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_257_err){if (!$p['isinstance']($pyjs_dbg_257_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_257_err);}throw $pyjs_dbg_257_err;
}})()) {
			$pyjs['track']['lineno']=348;
			$pyjs['track']['lineno']=348;
			var $pyjs__ret = true;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
		$pyjs['track']['lineno']=350;
		$pyjs['track']['lineno']=350;
		var $pyjs__ret = false;
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['CheckForAccessMultiSelectBone']['__name__'] = 'CheckForAccessMultiSelectBone';

	$m['CheckForAccessMultiSelectBone']['__bind_type__'] = 0;
	$m['CheckForAccessMultiSelectBone']['__args__'] = [null,null,['moduleName'],['boneName'],['skelStucture']];
	$pyjs['track']['lineno']=353;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['editBoneSelector']['insert'](4, $m['CheckForAccessMultiSelectBone'], $m['AccessMultiSelectBone']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_258_err){if (!$p['isinstance']($pyjs_dbg_258_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_258_err);}throw $pyjs_dbg_258_err;
}})();
	return this;
}; /* end bones.selectmulti */


/* end module: bones.selectmulti */


/*
PYJS_DEPS: ['html5', 'utils', 'priorityqueue.editBoneSelector', 'priorityqueue', 'priorityqueue.viewDelegateSelector', 'priorityqueue.extendedSearchWidgetSelector', 'priorityqueue.extractorDelegateSelector', 'event.EventDispatcher', 'event', 'i18n.translate', 'i18n', 'config.conf', 'config', 'bones.base.BaseBoneExtractor', 'bones', 'bones.base']
*/
