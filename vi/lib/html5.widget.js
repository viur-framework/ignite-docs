/* start module: html5.widget */
$pyjs['loaded_modules']['html5.widget'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['html5.widget']['__was_initialized__']) return $pyjs['loaded_modules']['html5.widget'];
	if(typeof $pyjs['loaded_modules']['html5'] == 'undefined' || !$pyjs['loaded_modules']['html5']['__was_initialized__']) $p['___import___']('html5', null);
	var $m = $pyjs['loaded_modules']['html5.widget'];
	$m['__repr__'] = function() { return '<module: html5.widget>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'html5.widget';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['html5']['widget'] = $pyjs['loaded_modules']['html5.widget'];
	$m.__track_lines__[1] = 'html5.widget.py, line 1:\n    # -*- coding: utf-8 -*-';
	$m.__track_lines__[2] = 'html5.widget.py, line 2:\n    from html5 import document, textnode';
	$m.__track_lines__[4] = 'html5.widget.py, line 4:\n    class ClassWrapper( list ):';
	$m.__track_lines__[5] = 'html5.widget.py, line 5:\n    def __init__( self, targetWidget ):';
	$m.__track_lines__[6] = 'html5.widget.py, line 6:\n    super( ClassWrapper, self ).__init__( )';
	$m.__track_lines__[7] = 'html5.widget.py, line 7:\n    self.targetWidget = targetWidget';
	$m.__track_lines__[8] = 'html5.widget.py, line 8:\n    clsStr = targetWidget.element.getAttribute("class")';
	$m.__track_lines__[9] = 'html5.widget.py, line 9:\n    if clsStr:';
	$m.__track_lines__[10] = 'html5.widget.py, line 10:\n    for c in clsStr.split(" "):';
	$m.__track_lines__[11] = 'html5.widget.py, line 11:\n    list.append( self, c )';
	$m.__track_lines__[13] = 'html5.widget.py, line 13:\n    def _updateElem(self):';
	$m.__track_lines__[14] = 'html5.widget.py, line 14:\n    if len(self)==0:';
	$m.__track_lines__[15] = 'html5.widget.py, line 15:\n    self.targetWidget.element.removeAttribute("class")';
	$m.__track_lines__[17] = 'html5.widget.py, line 17:\n    self.targetWidget.element.setAttribute("class", " ".join( self ) )';
	$m.__track_lines__[19] = 'html5.widget.py, line 19:\n    def append(self, p_object):';
	$m.__track_lines__[20] = 'html5.widget.py, line 20:\n    list.append( self, p_object )';
	$m.__track_lines__[21] = 'html5.widget.py, line 21:\n    self._updateElem()';
	$m.__track_lines__[23] = 'html5.widget.py, line 23:\n    def clear(self):';
	$m.__track_lines__[24] = 'html5.widget.py, line 24:\n    list.clear( self )';
	$m.__track_lines__[25] = 'html5.widget.py, line 25:\n    self._updateElem()';
	$m.__track_lines__[27] = 'html5.widget.py, line 27:\n    def remove(self, value):';
	$m.__track_lines__[28] = 'html5.widget.py, line 28:\n    try:';
	$m.__track_lines__[29] = 'html5.widget.py, line 29:\n    list.remove( self, value )';
	$m.__track_lines__[31] = 'html5.widget.py, line 31:\n    pass';
	$m.__track_lines__[32] = 'html5.widget.py, line 32:\n    self._updateElem()';
	$m.__track_lines__[34] = 'html5.widget.py, line 34:\n    def extend(self, iterable):';
	$m.__track_lines__[35] = 'html5.widget.py, line 35:\n    list.extend( self, iterable )';
	$m.__track_lines__[36] = 'html5.widget.py, line 36:\n    self._updateElem()';
	$m.__track_lines__[38] = 'html5.widget.py, line 38:\n    def insert(self, index, p_object):';
	$m.__track_lines__[39] = 'html5.widget.py, line 39:\n    list.insert( self, index, p_object )';
	$m.__track_lines__[40] = 'html5.widget.py, line 40:\n    self._updateElem()';
	$m.__track_lines__[42] = 'html5.widget.py, line 42:\n    def pop(self, index=None):';
	$m.__track_lines__[43] = 'html5.widget.py, line 43:\n    list.pop( self, index )';
	$m.__track_lines__[44] = 'html5.widget.py, line 44:\n    self._updateElem()';
	$m.__track_lines__[47] = 'html5.widget.py, line 47:\n    class DataWrapper(dict):';
	$m.__track_lines__[48] = 'html5.widget.py, line 48:\n    def __init__(self,targetWidget):';
	$m.__track_lines__[49] = 'html5.widget.py, line 49:\n    super(DataWrapper,self).__init__()';
	$m.__track_lines__[50] = 'html5.widget.py, line 50:\n    self.targetWidget = targetWidget';
	$m.__track_lines__[51] = 'html5.widget.py, line 51:\n    alldata =targetWidget.element';
	$m.__track_lines__[52] = 'html5.widget.py, line 52:\n    for data in dir(alldata.dataset):';
	$m.__track_lines__[53] = 'html5.widget.py, line 53:\n    dict.__setitem__(self,data,getattr(alldata.dataset,data))';
	$m.__track_lines__[55] = 'html5.widget.py, line 55:\n    def __setitem__(self,key,value):';
	$m.__track_lines__[56] = 'html5.widget.py, line 56:\n    dict.__setitem__(self,key,value)';
	$m.__track_lines__[57] = 'html5.widget.py, line 57:\n    self.targetWidget.element.setAttribute(str("data-"+key),value)';
	$m.__track_lines__[59] = 'html5.widget.py, line 59:\n    def update(self, E=None, **F):';
	$m.__track_lines__[60] = 'html5.widget.py, line 60:\n    dict.update( self, E, **F)';
	$m.__track_lines__[61] = 'html5.widget.py, line 61:\n    if E is not None and "keys" in dir(E):';
	$m.__track_lines__[62] = 'html5.widget.py, line 62:\n    for key in E:';
	$m.__track_lines__[63] = 'html5.widget.py, line 63:\n    self.targetWidget.element.setAttribute(str("data-"+key),E["data-"+key])';
	$m.__track_lines__[65] = 'html5.widget.py, line 65:\n    for (key, val) in E:';
	$m.__track_lines__[66] = 'html5.widget.py, line 66:\n    self.targetWidget.element.setAttribute(str("data-"+key),"data-"+val)';
	$m.__track_lines__[67] = 'html5.widget.py, line 67:\n    for key in F:';
	$m.__track_lines__[68] = 'html5.widget.py, line 68:\n    self.targetWidget.element.setAttribute(str("data-"+key),F["data-"+key])';
	$m.__track_lines__[70] = 'html5.widget.py, line 70:\n    class StyleWrapper( dict ):';
	$m.__track_lines__[71] = 'html5.widget.py, line 71:\n    def __init__( self, targetWidget ):';
	$m.__track_lines__[72] = 'html5.widget.py, line 72:\n    super( StyleWrapper, self ).__init__( )';
	$m.__track_lines__[73] = 'html5.widget.py, line 73:\n    self.targetWidget = targetWidget';
	$m.__track_lines__[74] = 'html5.widget.py, line 74:\n    style = targetWidget.element.style';
	$m.__track_lines__[75] = 'html5.widget.py, line 75:\n    for key in dir(style):';
	$m.__track_lines__[77] = 'html5.widget.py, line 77:\n    realKey = ""';
	$m.__track_lines__[78] = 'html5.widget.py, line 78:\n    for currChar in key:';
	$m.__track_lines__[79] = 'html5.widget.py, line 79:\n    if currChar.isupper():';
	$m.__track_lines__[80] = 'html5.widget.py, line 80:\n    realKey += "-"';
	$m.__track_lines__[81] = 'html5.widget.py, line 81:\n    realKey += currChar.lower()';
	$m.__track_lines__[82] = 'html5.widget.py, line 82:\n    val = style.getPropertyValue(realKey)';
	$m.__track_lines__[83] = 'html5.widget.py, line 83:\n    if val:';
	$m.__track_lines__[84] = 'html5.widget.py, line 84:\n    dict.__setitem__(self,realKey,val)';
	$m.__track_lines__[86] = 'html5.widget.py, line 86:\n    def __setitem__(self, key, value):';
	$m.__track_lines__[87] = 'html5.widget.py, line 87:\n    dict.__setitem__( self, key, value )';
	$m.__track_lines__[88] = 'html5.widget.py, line 88:\n    self.targetWidget.element.style.setProperty( key, value )';
	$m.__track_lines__[90] = 'html5.widget.py, line 90:\n    def update(self, E=None, **F):';
	$m.__track_lines__[91] = 'html5.widget.py, line 91:\n    dict.update( self, E, **F)';
	$m.__track_lines__[92] = 'html5.widget.py, line 92:\n    if E is not None and "keys" in dir(E):';
	$m.__track_lines__[93] = 'html5.widget.py, line 93:\n    for key in E:';
	$m.__track_lines__[94] = 'html5.widget.py, line 94:\n    self.targetWidget.element.style.setProperty( key, E[key] )';
	$m.__track_lines__[96] = 'html5.widget.py, line 96:\n    for (key, val) in E:';
	$m.__track_lines__[97] = 'html5.widget.py, line 97:\n    self.targetWidget.element.style.setProperty( key, val )';
	$m.__track_lines__[98] = 'html5.widget.py, line 98:\n    for key in F:';
	$m.__track_lines__[99] = 'html5.widget.py, line 99:\n    self.targetWidget.element.style.setProperty( key, F[key] )';
	$m.__track_lines__[101] = 'html5.widget.py, line 101:\n    class Widget( object ):';
	$m.__track_lines__[102] = 'html5.widget.py, line 102:\n    _baseClass = None';
	$m.__track_lines__[103] = 'html5.widget.py, line 103:\n    _namespace = None';
	$m.__track_lines__[105] = 'html5.widget.py, line 105:\n    def __init__(self, *args, **kwargs ):';
	$m.__track_lines__[106] = 'html5.widget.py, line 106:\n    if "_wrapElem" in kwargs.keys():';
	$m.__track_lines__[107] = 'html5.widget.py, line 107:\n    self.element = kwargs["_wrapElem"]';
	$m.__track_lines__[108] = 'html5.widget.py, line 108:\n    del kwargs["_wrapElem"]';
	$m.__track_lines__[110] = 'html5.widget.py, line 110:\n    assert self._baseClass is not None';
	$m.__track_lines__[111] = 'html5.widget.py, line 111:\n    self.element = document.createElement(self._baseClass, ns=self._namespace)';
	$m.__track_lines__[112] = 'html5.widget.py, line 112:\n    super( Widget, self ).__init__( *args, **kwargs )';
	$m.__track_lines__[113] = 'html5.widget.py, line 113:\n    self._children = []';
	$m.__track_lines__[114] = 'html5.widget.py, line 114:\n    self._catchedEvents = []';
	$m.__track_lines__[115] = 'html5.widget.py, line 115:\n    self._disabledState = None';
	$m.__track_lines__[116] = 'html5.widget.py, line 116:\n    self._isAttached = False';
	$m.__track_lines__[117] = 'html5.widget.py, line 117:\n    self._parent = None';
	$m.__track_lines__[119] = 'html5.widget.py, line 119:\n    def sinkEvent(self, *args):';
	$m.__track_lines__[120] = 'html5.widget.py, line 120:\n    for eventName in args:';
	$m.__track_lines__[121] = 'html5.widget.py, line 121:\n    if eventName in self._catchedEvents or eventName.lower in ["onattach","ondetach"]:';
	$m.__track_lines__[122] = 'html5.widget.py, line 122:\n    continue';
	$m.__track_lines__[123] = 'html5.widget.py, line 123:\n    assert eventName in dir( self ), "%s must provide a %s method" % (str(self),eventName)';
	$m.__track_lines__[124] = 'html5.widget.py, line 124:\n    self._catchedEvents.append( eventName )';
	$m.__track_lines__[125] = 'html5.widget.py, line 125:\n    setattr( self.element, eventName.lower(), getattr(self, eventName))';
	$m.__track_lines__[127] = 'html5.widget.py, line 127:\n    def unsinkEvent(self, *args ):';
	$m.__track_lines__[128] = 'html5.widget.py, line 128:\n    for eventName in args:';
	$m.__track_lines__[129] = 'html5.widget.py, line 129:\n    if not eventName in self._catchedEvents:';
	$m.__track_lines__[130] = 'html5.widget.py, line 130:\n    continue';
	$m.__track_lines__[131] = 'html5.widget.py, line 131:\n    self._catchedEvents.remove( eventName )';
	$m.__track_lines__[132] = 'html5.widget.py, line 132:\n    setattr( self.element, eventName.lower(), None )';
	$m.__track_lines__[134] = 'html5.widget.py, line 134:\n    def _getDisabled(self):';
	$m.__track_lines__[135] = 'html5.widget.py, line 135:\n    return( self._disabledState is not None )';
	$m.__track_lines__[137] = 'html5.widget.py, line 137:\n    def _setDisabled(self, disable):';
	$m.__track_lines__[138] = 'html5.widget.py, line 138:\n    for child in self._children:';
	$m.__track_lines__[139] = 'html5.widget.py, line 139:\n    child._setDisabled( disable )';
	$m.__track_lines__[141] = 'html5.widget.py, line 141:\n    if disable:';
	$m.__track_lines__[142] = 'html5.widget.py, line 142:\n    if self._disabledState is not None:';
	$m.__track_lines__[143] = 'html5.widget.py, line 143:\n    self._disabledState["recursionCounter"] += 1';
	$m.__track_lines__[145] = 'html5.widget.py, line 145:\n    self._disabledState = { "events": self._catchedEvents[:], "recursionCounter": 1 }';
	$m.__track_lines__[146] = 'html5.widget.py, line 146:\n    self.unsinkEvent( *self._catchedEvents[:] )';
	$m.__track_lines__[149] = 'html5.widget.py, line 149:\n    if self._disabledState is None:';
	$m.__track_lines__[150] = 'html5.widget.py, line 150:\n    pass #Fixme: Print a warning instead?!';
	$m.__track_lines__[152] = 'html5.widget.py, line 152:\n    if self._disabledState["recursionCounter"] > 1:';
	$m.__track_lines__[153] = 'html5.widget.py, line 153:\n    self._disabledState["recursionCounter"] -= 1';
	$m.__track_lines__[155] = 'html5.widget.py, line 155:\n    self.sinkEvent( *self._disabledState["events"] )';
	$m.__track_lines__[156] = 'html5.widget.py, line 156:\n    self._disabledState = None';
	$m.__track_lines__[158] = 'html5.widget.py, line 158:\n    if self._getDisabled():';
	$m.__track_lines__[159] = 'html5.widget.py, line 159:\n    if not "is_disabled" in self["class"]:';
	$m.__track_lines__[160] = 'html5.widget.py, line 160:\n    self["class"].append("is_disabled")';
	$m.__track_lines__[162] = 'html5.widget.py, line 162:\n    if "is_disabled" in self["class"]:';
	$m.__track_lines__[163] = 'html5.widget.py, line 163:\n    self["class"].remove("is_disabled")';
	$m.__track_lines__[165] = 'html5.widget.py, line 165:\n    def _getTargetFuncName(self, key, type):';
	$m.__track_lines__[166] = 'html5.widget.py, line 166:\n    assert type in ["get","set"]';
	$m.__track_lines__[167] = 'html5.widget.py, line 167:\n    return( "_%s%s" % (type,(key[0].upper()+key[1:])))';
	$m.__track_lines__[169] = 'html5.widget.py, line 169:\n    def __getitem__(self, key):';
	$m.__track_lines__[170] = 'html5.widget.py, line 170:\n    funcName = self._getTargetFuncName( key, "get" )';
	$m.__track_lines__[171] = 'html5.widget.py, line 171:\n    if funcName in dir( self ):';
	$m.__track_lines__[173] = 'html5.widget.py, line 173:\n    return( getattr( self, funcName)() )';
	$m.__track_lines__[174] = 'html5.widget.py, line 174:\n    return( None )';
	$m.__track_lines__[176] = 'html5.widget.py, line 176:\n    def __setitem__(self, key, value):';
	$m.__track_lines__[177] = 'html5.widget.py, line 177:\n    funcName = self._getTargetFuncName( key, "set" )';
	$m.__track_lines__[178] = 'html5.widget.py, line 178:\n    if funcName in dir( self ):';
	$m.__track_lines__[180] = 'html5.widget.py, line 180:\n    return( getattr( self, funcName )( value ) )';
	$m.__track_lines__[181] = 'html5.widget.py, line 181:\n    raise ValueError( "%s is no valid attribute for %s" % (key, (self._baseClass or str(self))) )';
	$m.__track_lines__[183] = 'html5.widget.py, line 183:\n    def _getData(self):';
	$m.__track_lines__[189] = 'html5.widget.py, line 189:\n    return( DataWrapper( self ) )';
	$m.__track_lines__[192] = 'html5.widget.py, line 192:\n    def _getTranslate(self):';
	$m.__track_lines__[197] = 'html5.widget.py, line 197:\n    return True if self.element.translate=="yes" else False';
	$m.__track_lines__[199] = 'html5.widget.py, line 199:\n    def _setTranslate(self,val):';
	$m.__track_lines__[204] = 'html5.widget.py, line 204:\n    self.element.translate="yes" if val==True else "no"';
	$m.__track_lines__[206] = 'html5.widget.py, line 206:\n    def _getTitle(self):';
	$m.__track_lines__[211] = 'html5.widget.py, line 211:\n    return self.element.title';
	$m.__track_lines__[212] = 'html5.widget.py, line 212:\n    def _setTitle(self,val):';
	$m.__track_lines__[217] = 'html5.widget.py, line 217:\n    self.element.title=val';
	$m.__track_lines__[219] = 'html5.widget.py, line 219:\n    def _getTabindex(self):';
	$m.__track_lines__[224] = 'html5.widget.py, line 224:\n    return self.element.getAttribute("tabindex")';
	$m.__track_lines__[225] = 'html5.widget.py, line 225:\n    def _setTabindex(self,val):';
	$m.__track_lines__[230] = 'html5.widget.py, line 230:\n    self.element.setAttribute("tabindex",val)';
	$m.__track_lines__[232] = 'html5.widget.py, line 232:\n    def _getSpellcheck(self):';
	$m.__track_lines__[237] = 'html5.widget.py, line 237:\n    return(True if self.element.spellcheck=="true" else False)';
	$m.__track_lines__[238] = 'html5.widget.py, line 238:\n    def _setSpellcheck(self,val):';
	$m.__track_lines__[243] = 'html5.widget.py, line 243:\n    self.element.spellcheck=str(val).lower()';
	$m.__track_lines__[245] = 'html5.widget.py, line 245:\n    def _getLang(self):';
	$m.__track_lines__[250] = 'html5.widget.py, line 250:\n    return self.element.lang';
	$m.__track_lines__[251] = 'html5.widget.py, line 251:\n    def _setLang(self,val):';
	$m.__track_lines__[256] = 'html5.widget.py, line 256:\n    self.element.lang=val';
	$m.__track_lines__[258] = 'html5.widget.py, line 258:\n    def _getHidden(self):';
	$m.__track_lines__[263] = 'html5.widget.py, line 263:\n    return( True if self.element.hasAttribute("hidden") else False )';
	$m.__track_lines__[264] = 'html5.widget.py, line 264:\n    def _setHidden(self,val):';
	$m.__track_lines__[269] = 'html5.widget.py, line 269:\n    if val==True:';
	$m.__track_lines__[270] = 'html5.widget.py, line 270:\n    self.element.setAttribute("hidden","")';
	$m.__track_lines__[272] = 'html5.widget.py, line 272:\n    self.element.removeAttribute("hidden")';
	$m.__track_lines__[274] = 'html5.widget.py, line 274:\n    def _getDropzone(self):';
	$m.__track_lines__[279] = 'html5.widget.py, line 279:\n    return self.element.dropzone';
	$m.__track_lines__[280] = 'html5.widget.py, line 280:\n    def _setDropzone(self,val):';
	$m.__track_lines__[285] = 'html5.widget.py, line 285:\n    self.element.dropzone=val';
	$m.__track_lines__[287] = 'html5.widget.py, line 287:\n    def _getDraggable(self):';
	$m.__track_lines__[292] = 'html5.widget.py, line 292:\n    return(self.element.draggable if str(self.element.draggable)=="auto" else (True if str(self.element.draggable).lower()=="true" else False) )';
	$m.__track_lines__[293] = 'html5.widget.py, line 293:\n    def _setDraggable(self,val):';
	$m.__track_lines__[298] = 'html5.widget.py, line 298:\n    self.element.draggable=str(val).lower()';
	$m.__track_lines__[300] = 'html5.widget.py, line 300:\n    def _getDir(self):';
	$m.__track_lines__[305] = 'html5.widget.py, line 305:\n    return self.element.dir';
	$m.__track_lines__[306] = 'html5.widget.py, line 306:\n    def _setDir(self,val):';
	$m.__track_lines__[311] = 'html5.widget.py, line 311:\n    self.element.dir=val';
	$m.__track_lines__[313] = 'html5.widget.py, line 313:\n    def _getContextmenu(self):';
	$m.__track_lines__[318] = 'html5.widget.py, line 318:\n    return self.element.contextmenu';
	$m.__track_lines__[319] = 'html5.widget.py, line 319:\n    def _setContextmenu(self,val):';
	$m.__track_lines__[324] = 'html5.widget.py, line 324:\n    self.element.contextmenu=val';
	$m.__track_lines__[326] = 'html5.widget.py, line 326:\n    def _getContenteditable(self):';
	$m.__track_lines__[331] = 'html5.widget.py, line 331:\n    v = self.element.getAttribute("contenteditable")';
	$m.__track_lines__[332] = 'html5.widget.py, line 332:\n    return( str(v).lower()=="true" )';
	$m.__track_lines__[334] = 'html5.widget.py, line 334:\n    def _setContenteditable(self, val):';
	$m.__track_lines__[339] = 'html5.widget.py, line 339:\n    self.element.setAttribute("contenteditable",str(val).lower())';
	$m.__track_lines__[341] = 'html5.widget.py, line 341:\n    def _getAccesskey(self):';
	$m.__track_lines__[347] = 'html5.widget.py, line 347:\n    return( self.element.accesskey)';
	$m.__track_lines__[348] = 'html5.widget.py, line 348:\n    def _setAccesskey(self,val):';
	$m.__track_lines__[354] = 'html5.widget.py, line 354:\n    self.element.accesskey=val';
	$m.__track_lines__[356] = 'html5.widget.py, line 356:\n    def _getId(self):';
	$m.__track_lines__[362] = 'html5.widget.py, line 362:\n    return( self.element.id )';
	$m.__track_lines__[363] = 'html5.widget.py, line 363:\n    def _setId( self, val ):';
	$m.__track_lines__[369] = 'html5.widget.py, line 369:\n    self.element.id = val';
	$m.__track_lines__[371] = 'html5.widget.py, line 371:\n    def _getClass( self ):';
	$m.__track_lines__[376] = 'html5.widget.py, line 376:\n    return( ClassWrapper( self ) )';
	$m.__track_lines__[377] = 'html5.widget.py, line 377:\n    def _setClass(self, value):';
	$m.__track_lines__[385] = 'html5.widget.py, line 385:\n    if value is None:';
	$m.__track_lines__[386] = 'html5.widget.py, line 386:\n    self.element.setAttribute("class", " " )';
	$m.__track_lines__[388] = 'html5.widget.py, line 388:\n    self.element.setAttribute("class", value )';
	$m.__track_lines__[390] = 'html5.widget.py, line 390:\n    self.element.setAttribute("class", " ".join(value) )';
	$m.__track_lines__[392] = 'html5.widget.py, line 392:\n    raise ValueError("Class must be a String, a List or None")';
	$m.__track_lines__[394] = 'html5.widget.py, line 394:\n    def _getStyle(self):';
	$m.__track_lines__[400] = 'html5.widget.py, line 400:\n    return( StyleWrapper( self ) )';
	$m.__track_lines__[402] = 'html5.widget.py, line 402:\n    def hide(self):';
	$m.__track_lines__[407] = 'html5.widget.py, line 407:\n    if not self._getHidden():';
	$m.__track_lines__[408] = 'html5.widget.py, line 408:\n    self._setHidden( True )';
	$m.__track_lines__[410] = 'html5.widget.py, line 410:\n    def show(self):';
	$m.__track_lines__[415] = 'html5.widget.py, line 415:\n    if self._getHidden():';
	$m.__track_lines__[416] = 'html5.widget.py, line 416:\n    self._setHidden( False )';
	$m.__track_lines__[418] = 'html5.widget.py, line 418:\n    def onAttach(self):';
	$m.__track_lines__[419] = 'html5.widget.py, line 419:\n    self._isAttached = True';
	$m.__track_lines__[420] = 'html5.widget.py, line 420:\n    for c in self._children[:]:';
	$m.__track_lines__[421] = 'html5.widget.py, line 421:\n    c.onAttach()';
	$m.__track_lines__[423] = 'html5.widget.py, line 423:\n    def onDetach(self):';
	$m.__track_lines__[424] = 'html5.widget.py, line 424:\n    self._isAttached = False';
	$m.__track_lines__[425] = 'html5.widget.py, line 425:\n    for c in self._children[:]:';
	$m.__track_lines__[426] = 'html5.widget.py, line 426:\n    c.onDetach()';
	$m.__track_lines__[428] = 'html5.widget.py, line 428:\n    def insertBefore(self, insert, child):';
	$m.__track_lines__[429] = 'html5.widget.py, line 429:\n    assert child in self._children, "%s is not a child of %s" % (child, self)';
	$m.__track_lines__[431] = 'html5.widget.py, line 431:\n    if insert._parent:';
	$m.__track_lines__[432] = 'html5.widget.py, line 432:\n    insert._parent.removeChild(insert)';
	$m.__track_lines__[434] = 'html5.widget.py, line 434:\n    self.element.insertBefore(insert.element, child.element)';
	$m.__track_lines__[435] = 'html5.widget.py, line 435:\n    self._children.insert(self._children.index(child), insert)';
	$m.__track_lines__[437] = 'html5.widget.py, line 437:\n    insert._parent = self';
	$m.__track_lines__[438] = 'html5.widget.py, line 438:\n    if self._isAttached:';
	$m.__track_lines__[439] = 'html5.widget.py, line 439:\n    insert.onAttach()';
	$m.__track_lines__[441] = 'html5.widget.py, line 441:\n    def prependChild(self, child):';
	$m.__track_lines__[442] = 'html5.widget.py, line 442:\n    if not isinstance(child, Widget):';
	$m.__track_lines__[443] = 'html5.widget.py, line 443:\n    child = textnode.TextNode(str(child))';
	$m.__track_lines__[445] = 'html5.widget.py, line 445:\n    if child._parent:';
	$m.__track_lines__[446] = 'html5.widget.py, line 446:\n    child._parent._children.remove(child)';
	$m.__track_lines__[447] = 'html5.widget.py, line 447:\n    child._parent = None';
	$m.__track_lines__[449] = 'html5.widget.py, line 449:\n    if not self._children:';
	$m.__track_lines__[450] = 'html5.widget.py, line 450:\n    self.appendChild(child)';
	$m.__track_lines__[452] = 'html5.widget.py, line 452:\n    self.insertBefore(child, self.children(0))';
	$m.__track_lines__[454] = 'html5.widget.py, line 454:\n    def appendChild(self, child):';
	$m.__track_lines__[455] = 'html5.widget.py, line 455:\n    if not isinstance(child, Widget):';
	$m.__track_lines__[456] = 'html5.widget.py, line 456:\n    child = textnode.TextNode(str(child))';
	$m.__track_lines__[458] = 'html5.widget.py, line 458:\n    if child._parent:';
	$m.__track_lines__[459] = 'html5.widget.py, line 459:\n    child._parent._children.remove(child)';
	$m.__track_lines__[461] = 'html5.widget.py, line 461:\n    self._children.append( child )';
	$m.__track_lines__[462] = 'html5.widget.py, line 462:\n    self.element.appendChild( child.element )';
	$m.__track_lines__[463] = 'html5.widget.py, line 463:\n    child._parent = self';
	$m.__track_lines__[464] = 'html5.widget.py, line 464:\n    if self._isAttached:';
	$m.__track_lines__[465] = 'html5.widget.py, line 465:\n    child.onAttach()';
	$m.__track_lines__[467] = 'html5.widget.py, line 467:\n    def removeChild(self, child):';
	$m.__track_lines__[468] = 'html5.widget.py, line 468:\n    assert child in self._children, "%s is not a child of %s" % (child, self)';
	$m.__track_lines__[470] = 'html5.widget.py, line 470:\n    if child._isAttached:';
	$m.__track_lines__[471] = 'html5.widget.py, line 471:\n    child.onDetach()';
	$m.__track_lines__[473] = 'html5.widget.py, line 473:\n    self.element.removeChild( child.element )';
	$m.__track_lines__[474] = 'html5.widget.py, line 474:\n    self._children.remove( child )';
	$m.__track_lines__[475] = 'html5.widget.py, line 475:\n    child._parent = None';
	$m.__track_lines__[477] = 'html5.widget.py, line 477:\n    def removeAllChildren(self):';
	$m.__track_lines__[481] = 'html5.widget.py, line 481:\n    for child in self._children[:]:';
	$m.__track_lines__[482] = 'html5.widget.py, line 482:\n    self.removeChild( child )';
	$m.__track_lines__[484] = 'html5.widget.py, line 484:\n    def isParentOf(self, widget):';
	$m.__track_lines__[494] = 'html5.widget.py, line 494:\n    if self == widget:';
	$m.__track_lines__[495] = 'html5.widget.py, line 495:\n    return False';
	$m.__track_lines__[497] = 'html5.widget.py, line 497:\n    for child in self._children:';
	$m.__track_lines__[498] = 'html5.widget.py, line 498:\n    if child == widget:';
	$m.__track_lines__[499] = 'html5.widget.py, line 499:\n    return True';
	$m.__track_lines__[501] = 'html5.widget.py, line 501:\n    if child.isParentOf( widget ):';
	$m.__track_lines__[502] = 'html5.widget.py, line 502:\n    return True';
	$m.__track_lines__[504] = 'html5.widget.py, line 504:\n    return False';
	$m.__track_lines__[506] = 'html5.widget.py, line 506:\n    def isChildOf(self, widget):';
	$m.__track_lines__[516] = 'html5.widget.py, line 516:\n    if self == widget:';
	$m.__track_lines__[517] = 'html5.widget.py, line 517:\n    return False';
	$m.__track_lines__[519] = 'html5.widget.py, line 519:\n    parent = self.parent()';
	$m.__track_lines__[520] = 'html5.widget.py, line 520:\n    while parent:';
	$m.__track_lines__[521] = 'html5.widget.py, line 521:\n    if parent == widget:';
	$m.__track_lines__[522] = 'html5.widget.py, line 522:\n    return True';
	$m.__track_lines__[524] = 'html5.widget.py, line 524:\n    parent = widget.parent()';
	$m.__track_lines__[526] = 'html5.widget.py, line 526:\n    return False';
	$m.__track_lines__[528] = 'html5.widget.py, line 528:\n    def addClass(self, *args):';
	$m.__track_lines__[537] = 'html5.widget.py, line 537:\n    for item in args:';
	$m.__track_lines__[538] = 'html5.widget.py, line 538:\n    if isinstance(item, list):';
	$m.__track_lines__[539] = 'html5.widget.py, line 539:\n    self.addClass(item)';
	$m.__track_lines__[542] = 'html5.widget.py, line 542:\n    for sitem in item.split(" "):';
	$m.__track_lines__[543] = 'html5.widget.py, line 543:\n    if sitem not in self["class"]:';
	$m.__track_lines__[544] = 'html5.widget.py, line 544:\n    self["class"].append(sitem)';
	$m.__track_lines__[546] = 'html5.widget.py, line 546:\n    raise TypeError()';
	$m.__track_lines__[548] = 'html5.widget.py, line 548:\n    def removeClass(self, *args):';
	$m.__track_lines__[556] = 'html5.widget.py, line 556:\n    for item in args:';
	$m.__track_lines__[557] = 'html5.widget.py, line 557:\n    if isinstance(item, list):';
	$m.__track_lines__[558] = 'html5.widget.py, line 558:\n    self.removeClass(item)';
	$m.__track_lines__[561] = 'html5.widget.py, line 561:\n    for sitem in item.split(" "):';
	$m.__track_lines__[562] = 'html5.widget.py, line 562:\n    if sitem in self["class"]:';
	$m.__track_lines__[563] = 'html5.widget.py, line 563:\n    self["class"].remove(sitem)';
	$m.__track_lines__[565] = 'html5.widget.py, line 565:\n    raise TypeError()';
	$m.__track_lines__[567] = 'html5.widget.py, line 567:\n    def toggleClass(self, on, off = None):';
	$m.__track_lines__[583] = 'html5.widget.py, line 583:\n    if on in self["class"]:';
	$m.__track_lines__[584] = 'html5.widget.py, line 584:\n    self["class"].remove(on)';
	$m.__track_lines__[586] = 'html5.widget.py, line 586:\n    if off and off not in self["class"]:';
	$m.__track_lines__[587] = 'html5.widget.py, line 587:\n    self["class"].append(off)';
	$m.__track_lines__[589] = 'html5.widget.py, line 589:\n    return False';
	$m.__track_lines__[591] = 'html5.widget.py, line 591:\n    if off and off in self["class"]:';
	$m.__track_lines__[592] = 'html5.widget.py, line 592:\n    self["class"].remove(off)';
	$m.__track_lines__[594] = 'html5.widget.py, line 594:\n    self["class"].append(on)';
	$m.__track_lines__[595] = 'html5.widget.py, line 595:\n    return True';
	$m.__track_lines__[597] = 'html5.widget.py, line 597:\n    def onBlur(self, event):';
	$m.__track_lines__[598] = 'html5.widget.py, line 598:\n    pass';
	$m.__track_lines__[599] = 'html5.widget.py, line 599:\n    def onChange(self, event):';
	$m.__track_lines__[600] = 'html5.widget.py, line 600:\n    pass';
	$m.__track_lines__[601] = 'html5.widget.py, line 601:\n    def onContextMenu(self, event):';
	$m.__track_lines__[602] = 'html5.widget.py, line 602:\n    pass';
	$m.__track_lines__[603] = 'html5.widget.py, line 603:\n    def onFocus(self,event):';
	$m.__track_lines__[604] = 'html5.widget.py, line 604:\n    pass';
	$m.__track_lines__[605] = 'html5.widget.py, line 605:\n    def onFormChange(self,event):';
	$m.__track_lines__[606] = 'html5.widget.py, line 606:\n    pass';
	$m.__track_lines__[607] = 'html5.widget.py, line 607:\n    def onFormInput(self, event):';
	$m.__track_lines__[608] = 'html5.widget.py, line 608:\n    pass';
	$m.__track_lines__[609] = 'html5.widget.py, line 609:\n    def onInput(self, event):';
	$m.__track_lines__[610] = 'html5.widget.py, line 610:\n    pass';
	$m.__track_lines__[611] = 'html5.widget.py, line 611:\n    def onInvalid(self, event):';
	$m.__track_lines__[612] = 'html5.widget.py, line 612:\n    pass';
	$m.__track_lines__[613] = 'html5.widget.py, line 613:\n    def onReset(self, event):';
	$m.__track_lines__[614] = 'html5.widget.py, line 614:\n    pass';
	$m.__track_lines__[615] = 'html5.widget.py, line 615:\n    def onSelect(self, event):';
	$m.__track_lines__[616] = 'html5.widget.py, line 616:\n    pass';
	$m.__track_lines__[617] = 'html5.widget.py, line 617:\n    def onSubmit(self, event):';
	$m.__track_lines__[618] = 'html5.widget.py, line 618:\n    pass';
	$m.__track_lines__[619] = 'html5.widget.py, line 619:\n    def onKeyDown(self, event):';
	$m.__track_lines__[620] = 'html5.widget.py, line 620:\n    pass';
	$m.__track_lines__[621] = 'html5.widget.py, line 621:\n    def onKeyPress(self, event):';
	$m.__track_lines__[622] = 'html5.widget.py, line 622:\n    pass';
	$m.__track_lines__[623] = 'html5.widget.py, line 623:\n    def onKeyUp(self, event):';
	$m.__track_lines__[624] = 'html5.widget.py, line 624:\n    pass';
	$m.__track_lines__[625] = 'html5.widget.py, line 625:\n    def onClick(self, event):';
	$m.__track_lines__[626] = 'html5.widget.py, line 626:\n    pass';
	$m.__track_lines__[627] = 'html5.widget.py, line 627:\n    def onDblClick(self, event):';
	$m.__track_lines__[628] = 'html5.widget.py, line 628:\n    pass';
	$m.__track_lines__[629] = 'html5.widget.py, line 629:\n    def onDrag(self, event):';
	$m.__track_lines__[630] = 'html5.widget.py, line 630:\n    pass';
	$m.__track_lines__[631] = 'html5.widget.py, line 631:\n    def onDragEnd(self, event):';
	$m.__track_lines__[632] = 'html5.widget.py, line 632:\n    pass';
	$m.__track_lines__[633] = 'html5.widget.py, line 633:\n    def onDragEnter(self, event):';
	$m.__track_lines__[634] = 'html5.widget.py, line 634:\n    pass';
	$m.__track_lines__[635] = 'html5.widget.py, line 635:\n    def onDragLeave(self, event):';
	$m.__track_lines__[636] = 'html5.widget.py, line 636:\n    pass';
	$m.__track_lines__[637] = 'html5.widget.py, line 637:\n    def onDragOver(self, event):';
	$m.__track_lines__[638] = 'html5.widget.py, line 638:\n    pass';
	$m.__track_lines__[639] = 'html5.widget.py, line 639:\n    def onDragStart(self, event):';
	$m.__track_lines__[640] = 'html5.widget.py, line 640:\n    pass';
	$m.__track_lines__[641] = 'html5.widget.py, line 641:\n    def onDrop(self, event):';
	$m.__track_lines__[642] = 'html5.widget.py, line 642:\n    pass';
	$m.__track_lines__[643] = 'html5.widget.py, line 643:\n    def onMouseDown(self, event):';
	$m.__track_lines__[644] = 'html5.widget.py, line 644:\n    pass';
	$m.__track_lines__[645] = 'html5.widget.py, line 645:\n    def onMouseMove(self, event):';
	$m.__track_lines__[646] = 'html5.widget.py, line 646:\n    pass';
	$m.__track_lines__[647] = 'html5.widget.py, line 647:\n    def onMouseOut(self, event):';
	$m.__track_lines__[648] = 'html5.widget.py, line 648:\n    pass';
	$m.__track_lines__[649] = 'html5.widget.py, line 649:\n    def onMouseOver(self, event):';
	$m.__track_lines__[650] = 'html5.widget.py, line 650:\n    pass';
	$m.__track_lines__[651] = 'html5.widget.py, line 651:\n    def onMouseUp(self, event):';
	$m.__track_lines__[652] = 'html5.widget.py, line 652:\n    pass';
	$m.__track_lines__[653] = 'html5.widget.py, line 653:\n    def onMouseWheel(self, event):';
	$m.__track_lines__[654] = 'html5.widget.py, line 654:\n    pass';
	$m.__track_lines__[655] = 'html5.widget.py, line 655:\n    def onScroll(self, event):';
	$m.__track_lines__[656] = 'html5.widget.py, line 656:\n    pass';
	$m.__track_lines__[657] = 'html5.widget.py, line 657:\n    def onTouchStart(self, event):';
	$m.__track_lines__[658] = 'html5.widget.py, line 658:\n    pass';
	$m.__track_lines__[659] = 'html5.widget.py, line 659:\n    def onTouchEnd(self, event):';
	$m.__track_lines__[660] = 'html5.widget.py, line 660:\n    pass';
	$m.__track_lines__[661] = 'html5.widget.py, line 661:\n    def onTouchMove(self, event):';
	$m.__track_lines__[662] = 'html5.widget.py, line 662:\n    pass';
	$m.__track_lines__[663] = 'html5.widget.py, line 663:\n    def onTouchCancel(self, event):';
	$m.__track_lines__[664] = 'html5.widget.py, line 664:\n    pass';
	$m.__track_lines__[666] = 'html5.widget.py, line 666:\n    def focus(self):';
	$m.__track_lines__[667] = 'html5.widget.py, line 667:\n    self.element.focus()';
	$m.__track_lines__[669] = 'html5.widget.py, line 669:\n    def blur(self):';
	$m.__track_lines__[670] = 'html5.widget.py, line 670:\n    self.element.blur()';
	$m.__track_lines__[672] = 'html5.widget.py, line 672:\n    def parent(self):';
	$m.__track_lines__[673] = 'html5.widget.py, line 673:\n    return self._parent';
	$m.__track_lines__[675] = 'html5.widget.py, line 675:\n    def children(self, n = None):';
	$m.__track_lines__[688] = 'html5.widget.py, line 688:\n    if n is None:';
	$m.__track_lines__[689] = 'html5.widget.py, line 689:\n    return self._children[:]';
	$m.__track_lines__[691] = 'html5.widget.py, line 691:\n    if n >= 0 and n < len(self._children):';
	$m.__track_lines__[692] = 'html5.widget.py, line 692:\n    return self._children[n]';
	$m.__track_lines__[694] = 'html5.widget.py, line 694:\n    return None';
	$m.__track_lines__[696] = 'html5.widget.py, line 696:\n    def _getEventMap(self):';
	$m.__track_lines__[697] = 'html5.widget.py, line 697:\n    res = { "onblur": "onBlur",';
	$m.__track_lines__[732] = 'html5.widget.py, line 732:\n    return( res )';
	$m.__track_lines__[735] = 'html5.widget.py, line 735:\n    def sortChildren(self, key):';
	$m.__track_lines__[741] = 'html5.widget.py, line 741:\n    self._children.sort( key=key )';
	$m.__track_lines__[742] = 'html5.widget.py, line 742:\n    tmpl = self._children[ : ]';
	$m.__track_lines__[743] = 'html5.widget.py, line 743:\n    tmpl.reverse()';
	$m.__track_lines__[744] = 'html5.widget.py, line 744:\n    for c in tmpl:';
	$m.__track_lines__[745] = 'html5.widget.py, line 745:\n    self.element.removeChild( c.element )';
	$m.__track_lines__[746] = 'html5.widget.py, line 746:\n    self.element.insertBefore( c.element, self.element.children.item(0) )';


	$pyjs['track']['module']='html5.widget';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=2;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['document'] = $p['___import___']('html5.document', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['textnode'] = $p['___import___']('html5.textnode', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=4;
	$m['ClassWrapper'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.widget';
		$pyjs['track']['lineno']=5;
		$method = $pyjs__bind_method2('__init__', function(targetWidget) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				targetWidget = arguments[1];
			}
			var c,$iter1_nextval,$iter1_type,$pyjs__trackstack_size_1,$iter1_iter,$iter1_array,clsStr,$iter1_idx;
			$pyjs['track']={'module':'html5.widget', 'lineno':5};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=5;
			$pyjs['track']['lineno']=6;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['ClassWrapper'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()['__init__']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs['track']['lineno']=7;
			self['targetWidget'] = targetWidget;
			$pyjs['track']['lineno']=8;
			clsStr = (function(){try{try{$pyjs['in_try_except'] += 1;
			return targetWidget['element']['getAttribute']('class');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			$pyjs['track']['lineno']=9;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](clsStr);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})()) {
				$pyjs['track']['lineno']=10;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter1_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return clsStr['$$split'](' ');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					c = $iter1_nextval['$nextval'];
					$pyjs['track']['lineno']=11;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['list']['append'](self, c);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='html5.widget';
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['targetWidget']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=13;
		$method = $pyjs__bind_method2('_updateElem', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':13};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=13;
			$pyjs['track']['lineno']=14;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})(), 0));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})()) {
				$pyjs['track']['lineno']=15;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['targetWidget']['element']['removeAttribute']('class');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=17;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['targetWidget']['element']['setAttribute']('class', (function(){try{try{$pyjs['in_try_except'] += 1;
				return ' '['join'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_updateElem'] = $method;
		$pyjs['track']['lineno']=19;
		$method = $pyjs__bind_method2('append', function(p_object) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				p_object = arguments[1];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':19};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=19;
			$pyjs['track']['lineno']=20;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']['append'](self, p_object);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
			$pyjs['track']['lineno']=21;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['_updateElem']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['p_object']]);
		$cls_definition['append'] = $method;
		$pyjs['track']['lineno']=23;
		$method = $pyjs__bind_method2('clear', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':23};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=23;
			$pyjs['track']['lineno']=24;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']['clear'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
			$pyjs['track']['lineno']=25;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['_updateElem']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clear'] = $method;
		$pyjs['track']['lineno']=27;
		$method = $pyjs__bind_method2('remove', function(value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}
			var $pyjs_try_err;
			$pyjs['track']={'module':'html5.widget', 'lineno':27};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=27;
			$pyjs['track']['lineno']=28;
			var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
			try {
				try {
					$pyjs['in_try_except'] += 1;
					$pyjs['track']['lineno']=29;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['list']['remove'](self, value);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
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
				$pyjs['track']['module']='html5.widget';
				if (true) {
					$pyjs['track']['lineno']=31;
				}
			}
			$pyjs['track']['lineno']=32;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['_updateElem']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['remove'] = $method;
		$pyjs['track']['lineno']=34;
		$method = $pyjs__bind_method2('extend', function(iterable) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				iterable = arguments[1];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':34};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=34;
			$pyjs['track']['lineno']=35;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']['extend'](self, iterable);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
			$pyjs['track']['lineno']=36;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['_updateElem']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['iterable']]);
		$cls_definition['extend'] = $method;
		$pyjs['track']['lineno']=38;
		$method = $pyjs__bind_method2('insert', function(index, p_object) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				p_object = arguments[2];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':38};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=38;
			$pyjs['track']['lineno']=39;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']['insert'](self, index, p_object);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
			$pyjs['track']['lineno']=40;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['_updateElem']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['index'],['p_object']]);
		$cls_definition['insert'] = $method;
		$pyjs['track']['lineno']=42;
		$method = $pyjs__bind_method2('pop', function(index) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			if (typeof index == 'undefined') index=arguments['callee']['__args__'][3][1];

			$pyjs['track']={'module':'html5.widget', 'lineno':42};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=42;
			$pyjs['track']['lineno']=43;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']['pop'](self, index);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
			$pyjs['track']['lineno']=44;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['_updateElem']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['index', null]]);
		$cls_definition['pop'] = $method;
		$pyjs['track']['lineno']=4;
		var $bases = new Array($p['list']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('ClassWrapper', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=47;
	$m['DataWrapper'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.widget';
		$pyjs['track']['lineno']=48;
		$method = $pyjs__bind_method2('__init__', function(targetWidget) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				targetWidget = arguments[1];
			}
			var $iter2_nextval,$iter2_type,$iter2_iter,$iter2_idx,$iter2_array,$pyjs__trackstack_size_1,data,alldata;
			$pyjs['track']={'module':'html5.widget', 'lineno':48};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=48;
			$pyjs['track']['lineno']=49;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['DataWrapper'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})()['__init__']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
			$pyjs['track']['lineno']=50;
			self['targetWidget'] = targetWidget;
			$pyjs['track']['lineno']=51;
			alldata = $p['getattr'](targetWidget, 'element');
			$pyjs['track']['lineno']=52;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter2_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dir']($p['getattr'](alldata, 'dataset'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})();
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				data = $iter2_nextval['$nextval'];
				$pyjs['track']['lineno']=53;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']['__setitem__'](self, data, (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr']($p['getattr'](alldata, 'dataset'), data);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='html5.widget';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['targetWidget']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=55;
		$method = $pyjs__bind_method2('__setitem__', function(key, value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
				value = arguments[2];
			}
			var $add2,$add1;
			$pyjs['track']={'module':'html5.widget', 'lineno':55};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=55;
			$pyjs['track']['lineno']=56;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']['__setitem__'](self, key, value);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
			$pyjs['track']['lineno']=57;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['targetWidget']['element']['setAttribute']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['str']($p['__op_add']($add1='data-',$add2=key));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})(), value);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['key'],['value']]);
		$cls_definition['__setitem__'] = $method;
		$pyjs['track']['lineno']=59;
		$method = $pyjs__bind_method2('update', function(E) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var F = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (F === null || typeof F != 'object' || F['__name__'] != 'dict' || typeof F['$pyjs_is_kwarg'] == 'undefined') {
					var F = arguments[arguments['length']+1];
				} else {
					delete F['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				E = arguments[1];
				var F = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (F === null || typeof F != 'object' || F['__name__'] != 'dict' || typeof F['$pyjs_is_kwarg'] == 'undefined') {
					F = arguments[arguments['length']+1];
				} else {
					delete F['$pyjs_is_kwarg'];
				}
			}
			if (typeof F == 'undefined') {
				F = $p['__empty_dict']();
				if (typeof E != 'undefined') {
					if (E !== null && typeof E['$pyjs_is_kwarg'] != 'undefined') {
						F = E;
						E = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						F = self;
						self = arguments[2];
					}
				} else {
				}
			}
			if (typeof E == 'undefined') E=arguments['callee']['__args__'][3][1];
			var $iter5_nextval,$add12,$iter5_array,$iter3_type,$iter5_iter,$iter4_type,$iter5_type,$iter4_iter,$iter3_idx,val,$iter3_iter,$iter5_idx,$and1,$and2,$pyjs__trackstack_size_1,$add13,$add10,$add11,key,$iter3_array,$add14,$iter4_nextval,$iter4_idx,$add3,$add6,$add7,$add4,$add5,$iter4_array,$add8,$add9,$iter3_nextval;
			$pyjs['track']={'module':'html5.widget', 'lineno':59};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=59;
			$pyjs['track']['lineno']=60;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($p['dict'], 'update', null, F, [{}, self, E]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})();
			$pyjs['track']['lineno']=61;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and1=(E !== null))?(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dir'](E);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})()['__contains__']('keys'):$and1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})()) {
				$pyjs['track']['lineno']=62;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter3_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return E;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})();
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
					key = $iter3_nextval['$nextval'];
					$pyjs['track']['lineno']=63;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['targetWidget']['element']['setAttribute']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['str']($p['__op_add']($add3='data-',$add4=key));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})(), E['__getitem__']($p['__op_add']($add5='data-',$add6=key)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='html5.widget';
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](E);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})()) {
				$pyjs['track']['lineno']=65;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter4_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return E;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})();
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
					var $tupleassign1 = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['__ass_unpack']($iter4_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})();
					key = $tupleassign1[0];
					val = $tupleassign1[1];
					$pyjs['track']['lineno']=66;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['targetWidget']['element']['setAttribute']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['str']($p['__op_add']($add7='data-',$add8=key));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})(), $p['__op_add']($add9='data-',$add10=val));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='html5.widget';
			}
			$pyjs['track']['lineno']=67;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter5_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return F;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})();
			$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
			while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
				key = $iter5_nextval['$nextval'];
				$pyjs['track']['lineno']=68;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['targetWidget']['element']['setAttribute']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str']($p['__op_add']($add11='data-',$add12=key));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})(), F['__getitem__']($p['__op_add']($add13='data-',$add14=key)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='html5.widget';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,['F'],['self'],['E', null]]);
		$cls_definition['update'] = $method;
		$pyjs['track']['lineno']=47;
		var $bases = new Array($p['dict']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('DataWrapper', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=70;
	$m['StyleWrapper'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.widget';
		$pyjs['track']['lineno']=71;
		$method = $pyjs__bind_method2('__init__', function(targetWidget) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				targetWidget = arguments[1];
			}
			var $iter6_type,$iter6_iter,$iter6_nextval,style,val,$iter7_type,$iter6_idx,$iter7_iter,$add15,$add16,$add17,key,$iter7_idx,$add18,$iter7_nextval,$iter7_array,$iter6_array,realKey,$pyjs__trackstack_size_2,$pyjs__trackstack_size_1,currChar;
			$pyjs['track']={'module':'html5.widget', 'lineno':71};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=71;
			$pyjs['track']['lineno']=72;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['StyleWrapper'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})()['__init__']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})();
			$pyjs['track']['lineno']=73;
			self['targetWidget'] = targetWidget;
			$pyjs['track']['lineno']=74;
			style = $p['getattr']($p['getattr'](targetWidget, 'element'), 'style');
			$pyjs['track']['lineno']=75;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter6_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dir'](style);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})();
			$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
			while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
				key = $iter6_nextval['$nextval'];
				$pyjs['track']['lineno']=77;
				realKey = '';
				$pyjs['track']['lineno']=78;
				$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
				$iter7_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return key;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})();
				$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
				while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
					currChar = $iter7_nextval['$nextval'];
					$pyjs['track']['lineno']=79;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return currChar['isupper']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})()) {
						$pyjs['track']['lineno']=80;
						realKey = $p['__op_add']($add15=realKey,$add16='-');
					}
					$pyjs['track']['lineno']=81;
					realKey = $p['__op_add']($add17=realKey,$add18=(function(){try{try{$pyjs['in_try_except'] += 1;
					return currChar['lower']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})());
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='html5.widget';
				$pyjs['track']['lineno']=82;
				val = (function(){try{try{$pyjs['in_try_except'] += 1;
				return style['getPropertyValue'](realKey);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})();
				$pyjs['track']['lineno']=83;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](val);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})()) {
					$pyjs['track']['lineno']=84;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['dict']['__setitem__'](self, realKey, val);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})();
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='html5.widget';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['targetWidget']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=86;
		$method = $pyjs__bind_method2('__setitem__', function(key, value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
				value = arguments[2];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':86};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=86;
			$pyjs['track']['lineno']=87;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']['__setitem__'](self, key, value);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})();
			$pyjs['track']['lineno']=88;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['targetWidget']['element']['style']['setProperty'](key, value);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['key'],['value']]);
		$cls_definition['__setitem__'] = $method;
		$pyjs['track']['lineno']=90;
		$method = $pyjs__bind_method2('update', function(E) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var F = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (F === null || typeof F != 'object' || F['__name__'] != 'dict' || typeof F['$pyjs_is_kwarg'] == 'undefined') {
					var F = arguments[arguments['length']+1];
				} else {
					delete F['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				E = arguments[1];
				var F = arguments['length'] >= 3 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (F === null || typeof F != 'object' || F['__name__'] != 'dict' || typeof F['$pyjs_is_kwarg'] == 'undefined') {
					F = arguments[arguments['length']+1];
				} else {
					delete F['$pyjs_is_kwarg'];
				}
			}
			if (typeof F == 'undefined') {
				F = $p['__empty_dict']();
				if (typeof E != 'undefined') {
					if (E !== null && typeof E['$pyjs_is_kwarg'] != 'undefined') {
						F = E;
						E = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						F = self;
						self = arguments[2];
					}
				} else {
				}
			}
			if (typeof E == 'undefined') E=arguments['callee']['__args__'][3][1];
			var $iter10_nextval,$iter8_iter,$iter8_idx,$iter10_iter,val,$iter9_iter,$iter9_nextval,$iter9_idx,$iter9_type,$iter10_idx,$iter8_type,$and3,$and4,$iter8_nextval,key,$iter8_array,$iter10_array,$pyjs__trackstack_size_1,$iter10_type,$iter9_array;
			$pyjs['track']={'module':'html5.widget', 'lineno':90};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=90;
			$pyjs['track']['lineno']=91;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($p['dict'], 'update', null, F, [{}, self, E]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})();
			$pyjs['track']['lineno']=92;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and3=(E !== null))?(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dir'](E);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})()['__contains__']('keys'):$and3));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})()) {
				$pyjs['track']['lineno']=93;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter8_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return E;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})();
				$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
				while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
					key = $iter8_nextval['$nextval'];
					$pyjs['track']['lineno']=94;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['targetWidget']['element']['style']['setProperty'](key, E['__getitem__'](key));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='html5.widget';
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](E);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})()) {
				$pyjs['track']['lineno']=96;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter9_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return E;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})();
				$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
				while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
					var $tupleassign2 = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['__ass_unpack']($iter9_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})();
					key = $tupleassign2[0];
					val = $tupleassign2[1];
					$pyjs['track']['lineno']=97;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['targetWidget']['element']['style']['setProperty'](key, val);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='html5.widget';
			}
			$pyjs['track']['lineno']=98;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter10_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return F;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})();
			$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
			while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
				key = $iter10_nextval['$nextval'];
				$pyjs['track']['lineno']=99;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['targetWidget']['element']['style']['setProperty'](key, F['__getitem__'](key));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='html5.widget';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,['F'],['self'],['E', null]]);
		$cls_definition['update'] = $method;
		$pyjs['track']['lineno']=70;
		var $bases = new Array($p['dict']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('StyleWrapper', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=101;
	$m['Widget'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.widget';
		$pyjs['track']['lineno']=102;
		$cls_definition['_baseClass'] = null;
		$pyjs['track']['lineno']=103;
		$cls_definition['_namespace'] = null;
		$pyjs['track']['lineno']=105;
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

			$pyjs['track']={'module':'html5.widget', 'lineno':105};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=105;
			$pyjs['track']['lineno']=106;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return kwargs['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})()['__contains__']('_wrapElem'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})()) {
				$pyjs['track']['lineno']=107;
				self['element'] = kwargs['__getitem__']('_wrapElem');
				$pyjs['track']['lineno']=108;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return kwargs['__delitem__']('_wrapElem');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=110;
				if (!( ($p['getattr'](self, '_baseClass') !== null) )) {
				   throw $p['AssertionError']();
				 }
				$pyjs['track']['lineno']=111;
				self['element'] = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call($m['document'], 'createElement', null, null, [{'ns':$p['getattr'](self, '_namespace')}, $p['getattr'](self, '_baseClass')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})();
			}
			$pyjs['track']['lineno']=112;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['Widget'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})();
			$pyjs['track']['lineno']=113;
			self['_children'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})();
			$pyjs['track']['lineno']=114;
			self['_catchedEvents'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})();
			$pyjs['track']['lineno']=115;
			self['_disabledState'] = null;
			$pyjs['track']['lineno']=116;
			self['_isAttached'] = false;
			$pyjs['track']['lineno']=117;
			self['_parent'] = null;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=119;
		$method = $pyjs__bind_method2('sinkEvent', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var $iter11_type,$or1,$or2,$iter11_iter,eventName,$iter11_array,$iter11_nextval,$iter11_idx,$pyjs__trackstack_size_1;
			$pyjs['track']={'module':'html5.widget', 'lineno':119};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=119;
			$pyjs['track']['lineno']=120;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter11_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return args;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})();
			$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
			while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
				eventName = $iter11_nextval['$nextval'];
				$pyjs['track']['lineno']=121;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($or1=$p['getattr'](self, '_catchedEvents')['__contains__'](eventName))?$or1:(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list'](['onattach', 'ondetach']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})()['__contains__']($p['getattr'](eventName, 'lower'))));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})()) {
					$pyjs['track']['lineno']=122;
					continue;
				}
				$pyjs['track']['lineno']=123;
				if (!( (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dir'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})()['__contains__'](eventName) )) {
				   throw $p['AssertionError']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('%s must provide a %s method', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
}})(), eventName]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})());
				 }
				$pyjs['track']['lineno']=124;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['_catchedEvents']['append'](eventName);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})();
				$pyjs['track']['lineno']=125;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['setattr']($p['getattr'](self, 'element'), (function(){try{try{$pyjs['in_try_except'] += 1;
				return eventName['lower']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_88_err){if (!$p['isinstance']($pyjs_dbg_88_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_88_err);}throw $pyjs_dbg_88_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, eventName);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_89_err){if (!$p['isinstance']($pyjs_dbg_89_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_89_err);}throw $pyjs_dbg_89_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_90_err){if (!$p['isinstance']($pyjs_dbg_90_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_90_err);}throw $pyjs_dbg_90_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='html5.widget';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',null,['self']]);
		$cls_definition['sinkEvent'] = $method;
		$pyjs['track']['lineno']=127;
		$method = $pyjs__bind_method2('unsinkEvent', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var eventName,$iter12_type,$iter12_array,$iter12_nextval,$iter12_iter,$pyjs__trackstack_size_1,$iter12_idx;
			$pyjs['track']={'module':'html5.widget', 'lineno':127};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=127;
			$pyjs['track']['lineno']=128;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter12_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return args;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_91_err){if (!$p['isinstance']($pyjs_dbg_91_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_91_err);}throw $pyjs_dbg_91_err;
}})();
			$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
			while (typeof($p['__wrapped_next']($iter12_nextval)['$nextval']) != 'undefined') {
				eventName = $iter12_nextval['$nextval'];
				$pyjs['track']['lineno']=129;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']($p['getattr'](self, '_catchedEvents')['__contains__'](eventName)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_92_err){if (!$p['isinstance']($pyjs_dbg_92_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_92_err);}throw $pyjs_dbg_92_err;
}})()) {
					$pyjs['track']['lineno']=130;
					continue;
				}
				$pyjs['track']['lineno']=131;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['_catchedEvents']['remove'](eventName);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_93_err){if (!$p['isinstance']($pyjs_dbg_93_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_93_err);}throw $pyjs_dbg_93_err;
}})();
				$pyjs['track']['lineno']=132;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['setattr']($p['getattr'](self, 'element'), (function(){try{try{$pyjs['in_try_except'] += 1;
				return eventName['lower']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_94_err){if (!$p['isinstance']($pyjs_dbg_94_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_94_err);}throw $pyjs_dbg_94_err;
}})(), null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_95_err){if (!$p['isinstance']($pyjs_dbg_95_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_95_err);}throw $pyjs_dbg_95_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='html5.widget';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',null,['self']]);
		$cls_definition['unsinkEvent'] = $method;
		$pyjs['track']['lineno']=134;
		$method = $pyjs__bind_method2('_getDisabled', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':134};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=134;
			$pyjs['track']['lineno']=135;
			$pyjs['track']['lineno']=135;
			var $pyjs__ret = ($p['getattr'](self, '_disabledState') !== null);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getDisabled'] = $method;
		$pyjs['track']['lineno']=137;
		$method = $pyjs__bind_method2('_setDisabled', function(disable) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				disable = arguments[1];
			}
			var $augexpr1,$augexpr2,$iter13_nextval,$iter13_iter,$add20,$pyjs__trackstack_size_1,$augsub2,$augsub1,$iter13_type,$add19,$iter13_idx,child,$sub2,$sub1,$iter13_array;
			$pyjs['track']={'module':'html5.widget', 'lineno':137};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=137;
			$pyjs['track']['lineno']=138;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter13_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, '_children');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_96_err){if (!$p['isinstance']($pyjs_dbg_96_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_96_err);}throw $pyjs_dbg_96_err;
}})();
			$iter13_nextval=$p['__iter_prepare']($iter13_iter,false);
			while (typeof($p['__wrapped_next']($iter13_nextval)['$nextval']) != 'undefined') {
				child = $iter13_nextval['$nextval'];
				$pyjs['track']['lineno']=139;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return child['_setDisabled'](disable);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_97_err){if (!$p['isinstance']($pyjs_dbg_97_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_97_err);}throw $pyjs_dbg_97_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=141;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](disable);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_98_err){if (!$p['isinstance']($pyjs_dbg_98_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_98_err);}throw $pyjs_dbg_98_err;
}})()) {
				$pyjs['track']['lineno']=142;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['getattr'](self, '_disabledState') !== null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_99_err){if (!$p['isinstance']($pyjs_dbg_99_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_99_err);}throw $pyjs_dbg_99_err;
}})()) {
					$pyjs['track']['lineno']=143;
					var $augsub1 = 'recursionCounter';
					var $augexpr1 = $p['getattr'](self, '_disabledState');
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $augexpr1['__setitem__']($augsub1, $p['__op_add']($add19=$augexpr1['__getitem__']($augsub1),$add20=1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_100_err){if (!$p['isinstance']($pyjs_dbg_100_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_100_err);}throw $pyjs_dbg_100_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=145;
					self['_disabledState'] = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['dict']([['events', $p['__getslice']($p['getattr'](self, '_catchedEvents'), 0, null)], ['recursionCounter', 1]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_101_err){if (!$p['isinstance']($pyjs_dbg_101_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_101_err);}throw $pyjs_dbg_101_err;
}})();
					$pyjs['track']['lineno']=146;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $pyjs_kwargs_call(self, 'unsinkEvent', $p['__getslice']($p['getattr'](self, '_catchedEvents'), 0, null), null, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_102_err){if (!$p['isinstance']($pyjs_dbg_102_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_102_err);}throw $pyjs_dbg_102_err;
}})();
				}
			}
			else {
				$pyjs['track']['lineno']=149;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['getattr'](self, '_disabledState') === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_103_err){if (!$p['isinstance']($pyjs_dbg_103_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_103_err);}throw $pyjs_dbg_103_err;
}})()) {
					$pyjs['track']['lineno']=150;
				}
				else {
					$pyjs['track']['lineno']=152;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['cmp']($p['getattr'](self, '_disabledState')['__getitem__']('recursionCounter'), 1) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_104_err){if (!$p['isinstance']($pyjs_dbg_104_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_104_err);}throw $pyjs_dbg_104_err;
}})()) {
						$pyjs['track']['lineno']=153;
						var $augsub2 = 'recursionCounter';
						var $augexpr2 = $p['getattr'](self, '_disabledState');
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $augexpr2['__setitem__']($augsub2, $p['__op_sub']($sub1=$augexpr2['__getitem__']($augsub2),$sub2=1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_105_err){if (!$p['isinstance']($pyjs_dbg_105_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_105_err);}throw $pyjs_dbg_105_err;
}})();
					}
					else {
						$pyjs['track']['lineno']=155;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $pyjs_kwargs_call(self, 'sinkEvent', $p['getattr'](self, '_disabledState')['__getitem__']('events'), null, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_106_err){if (!$p['isinstance']($pyjs_dbg_106_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_106_err);}throw $pyjs_dbg_106_err;
}})();
						$pyjs['track']['lineno']=156;
						self['_disabledState'] = null;
					}
				}
			}
			$pyjs['track']['lineno']=158;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return self['_getDisabled']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_107_err){if (!$p['isinstance']($pyjs_dbg_107_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_107_err);}throw $pyjs_dbg_107_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_108_err){if (!$p['isinstance']($pyjs_dbg_108_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_108_err);}throw $pyjs_dbg_108_err;
}})()) {
				$pyjs['track']['lineno']=159;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool'](self['__getitem__']('class')['__contains__']('is_disabled')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_109_err){if (!$p['isinstance']($pyjs_dbg_109_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_109_err);}throw $pyjs_dbg_109_err;
}})()) {
					$pyjs['track']['lineno']=160;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['__getitem__']('class')['append']('is_disabled');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_110_err){if (!$p['isinstance']($pyjs_dbg_110_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_110_err);}throw $pyjs_dbg_110_err;
}})();
				}
			}
			else {
				$pyjs['track']['lineno']=162;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](self['__getitem__']('class')['__contains__']('is_disabled'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_111_err){if (!$p['isinstance']($pyjs_dbg_111_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_111_err);}throw $pyjs_dbg_111_err;
}})()) {
					$pyjs['track']['lineno']=163;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['__getitem__']('class')['remove']('is_disabled');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_112_err){if (!$p['isinstance']($pyjs_dbg_112_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_112_err);}throw $pyjs_dbg_112_err;
}})();
				}
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['disable']]);
		$cls_definition['_setDisabled'] = $method;
		$pyjs['track']['lineno']=165;
		$method = $pyjs__bind_method2('_getTargetFuncName', function(key, type) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
				type = arguments[2];
			}
			var $add21,$add22;
			$pyjs['track']={'module':'html5.widget', 'lineno':165};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=165;
			$pyjs['track']['lineno']=166;
			if (!( (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list'](['get', 'set']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_113_err){if (!$p['isinstance']($pyjs_dbg_113_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_113_err);}throw $pyjs_dbg_113_err;
}})()['__contains__'](type) )) {
			   throw $p['AssertionError']();
			 }
			$pyjs['track']['lineno']=167;
			$pyjs['track']['lineno']=167;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('_%s%s', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple']([type, $p['__op_add']($add21=(function(){try{try{$pyjs['in_try_except'] += 1;
			return key['__getitem__'](0)['upper']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_114_err){if (!$p['isinstance']($pyjs_dbg_114_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_114_err);}throw $pyjs_dbg_114_err;
}})(),$add22=$p['__getslice'](key, 1, null))]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_115_err){if (!$p['isinstance']($pyjs_dbg_115_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_115_err);}throw $pyjs_dbg_115_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_116_err){if (!$p['isinstance']($pyjs_dbg_116_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_116_err);}throw $pyjs_dbg_116_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['key'],['type']]);
		$cls_definition['_getTargetFuncName'] = $method;
		$pyjs['track']['lineno']=169;
		$method = $pyjs__bind_method2('__getitem__', function(key) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
			}
			var funcName;
			$pyjs['track']={'module':'html5.widget', 'lineno':169};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=169;
			$pyjs['track']['lineno']=170;
			funcName = (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['_getTargetFuncName'](key, 'get');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_117_err){if (!$p['isinstance']($pyjs_dbg_117_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_117_err);}throw $pyjs_dbg_117_err;
}})();
			$pyjs['track']['lineno']=171;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dir'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_118_err){if (!$p['isinstance']($pyjs_dbg_118_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_118_err);}throw $pyjs_dbg_118_err;
}})()['__contains__'](funcName));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_119_err){if (!$p['isinstance']($pyjs_dbg_119_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_119_err);}throw $pyjs_dbg_119_err;
}})()) {
				$pyjs['track']['lineno']=173;
				$pyjs['track']['lineno']=173;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, funcName);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_120_err){if (!$p['isinstance']($pyjs_dbg_120_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_120_err);}throw $pyjs_dbg_120_err;
}})()();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_121_err){if (!$p['isinstance']($pyjs_dbg_121_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_121_err);}throw $pyjs_dbg_121_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=174;
			$pyjs['track']['lineno']=174;
			var $pyjs__ret = null;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['key']]);
		$cls_definition['__getitem__'] = $method;
		$pyjs['track']['lineno']=176;
		$method = $pyjs__bind_method2('__setitem__', function(key, value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
				value = arguments[2];
			}
			var $or4,$or3,funcName;
			$pyjs['track']={'module':'html5.widget', 'lineno':176};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=176;
			$pyjs['track']['lineno']=177;
			funcName = (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['_getTargetFuncName'](key, 'set');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_122_err){if (!$p['isinstance']($pyjs_dbg_122_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_122_err);}throw $pyjs_dbg_122_err;
}})();
			$pyjs['track']['lineno']=178;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dir'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_123_err){if (!$p['isinstance']($pyjs_dbg_123_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_123_err);}throw $pyjs_dbg_123_err;
}})()['__contains__'](funcName));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_124_err){if (!$p['isinstance']($pyjs_dbg_124_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_124_err);}throw $pyjs_dbg_124_err;
}})()) {
				$pyjs['track']['lineno']=180;
				$pyjs['track']['lineno']=180;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, funcName);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_125_err){if (!$p['isinstance']($pyjs_dbg_125_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_125_err);}throw $pyjs_dbg_125_err;
}})()(value);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_126_err){if (!$p['isinstance']($pyjs_dbg_126_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_126_err);}throw $pyjs_dbg_126_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=181;
			$pyjs['__active_exception_stack__'] = null;
			throw ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['ValueError']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('%s is no valid attribute for %s', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple']([key, ($p['bool']($or3=$p['getattr'](self, '_baseClass'))?$or3:(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['str'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_127_err){if (!$p['isinstance']($pyjs_dbg_127_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_127_err);}throw $pyjs_dbg_127_err;
}})())]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_128_err){if (!$p['isinstance']($pyjs_dbg_128_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_128_err);}throw $pyjs_dbg_128_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_129_err){if (!$p['isinstance']($pyjs_dbg_129_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_129_err);}throw $pyjs_dbg_129_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_130_err){if (!$p['isinstance']($pyjs_dbg_130_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_130_err);}throw $pyjs_dbg_130_err;
}})());
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['key'],['value']]);
		$cls_definition['__setitem__'] = $method;
		$pyjs['track']['lineno']=183;
		$method = $pyjs__bind_method2('_getData', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':183};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=183;
			$pyjs['track']['lineno']=189;
			$pyjs['track']['lineno']=189;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['DataWrapper'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_131_err){if (!$p['isinstance']($pyjs_dbg_131_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_131_err);}throw $pyjs_dbg_131_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getData'] = $method;
		$pyjs['track']['lineno']=192;
		$method = $pyjs__bind_method2('_getTranslate', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':192};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=192;
			$pyjs['track']['lineno']=197;
			$pyjs['track']['lineno']=197;
			var $pyjs__ret = ($p['bool']($p['op_eq']($p['getattr']($p['getattr'](self, 'element'), 'translate'), 'yes'))? (true) : (false));
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getTranslate'] = $method;
		$pyjs['track']['lineno']=199;
		$method = $pyjs__bind_method2('_setTranslate', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':199};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=199;
			$pyjs['track']['lineno']=204;
			$p['getattr'](self, 'element')['translate'] = ($p['bool']($p['op_eq'](val, true))? ('yes') : ('no'));
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setTranslate'] = $method;
		$pyjs['track']['lineno']=206;
		$method = $pyjs__bind_method2('_getTitle', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':206};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=206;
			$pyjs['track']['lineno']=211;
			$pyjs['track']['lineno']=211;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'title');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getTitle'] = $method;
		$pyjs['track']['lineno']=212;
		$method = $pyjs__bind_method2('_setTitle', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':212};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=212;
			$pyjs['track']['lineno']=217;
			$p['getattr'](self, 'element')['title'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setTitle'] = $method;
		$pyjs['track']['lineno']=219;
		$method = $pyjs__bind_method2('_getTabindex', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':219};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=219;
			$pyjs['track']['lineno']=224;
			$pyjs['track']['lineno']=224;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['getAttribute']('tabindex');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_132_err){if (!$p['isinstance']($pyjs_dbg_132_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_132_err);}throw $pyjs_dbg_132_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getTabindex'] = $method;
		$pyjs['track']['lineno']=225;
		$method = $pyjs__bind_method2('_setTabindex', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':225};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=225;
			$pyjs['track']['lineno']=230;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['setAttribute']('tabindex', val);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_133_err){if (!$p['isinstance']($pyjs_dbg_133_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_133_err);}throw $pyjs_dbg_133_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setTabindex'] = $method;
		$pyjs['track']['lineno']=232;
		$method = $pyjs__bind_method2('_getSpellcheck', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':232};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=232;
			$pyjs['track']['lineno']=237;
			$pyjs['track']['lineno']=237;
			var $pyjs__ret = ($p['bool']($p['op_eq']($p['getattr']($p['getattr'](self, 'element'), 'spellcheck'), 'true'))? (true) : (false));
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getSpellcheck'] = $method;
		$pyjs['track']['lineno']=238;
		$method = $pyjs__bind_method2('_setSpellcheck', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':238};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=238;
			$pyjs['track']['lineno']=243;
			$p['getattr'](self, 'element')['spellcheck'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['str'](val);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_134_err){if (!$p['isinstance']($pyjs_dbg_134_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_134_err);}throw $pyjs_dbg_134_err;
}})()['lower']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_135_err){if (!$p['isinstance']($pyjs_dbg_135_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_135_err);}throw $pyjs_dbg_135_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setSpellcheck'] = $method;
		$pyjs['track']['lineno']=245;
		$method = $pyjs__bind_method2('_getLang', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':245};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=245;
			$pyjs['track']['lineno']=250;
			$pyjs['track']['lineno']=250;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'lang');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getLang'] = $method;
		$pyjs['track']['lineno']=251;
		$method = $pyjs__bind_method2('_setLang', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':251};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=251;
			$pyjs['track']['lineno']=256;
			$p['getattr'](self, 'element')['lang'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setLang'] = $method;
		$pyjs['track']['lineno']=258;
		$method = $pyjs__bind_method2('_getHidden', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':258};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=258;
			$pyjs['track']['lineno']=263;
			$pyjs['track']['lineno']=263;
			var $pyjs__ret = ($p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['hasAttribute']('hidden');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_136_err){if (!$p['isinstance']($pyjs_dbg_136_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_136_err);}throw $pyjs_dbg_136_err;
}})())? (true) : (false));
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getHidden'] = $method;
		$pyjs['track']['lineno']=264;
		$method = $pyjs__bind_method2('_setHidden', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':264};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=264;
			$pyjs['track']['lineno']=269;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](val, true));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_137_err){if (!$p['isinstance']($pyjs_dbg_137_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_137_err);}throw $pyjs_dbg_137_err;
}})()) {
				$pyjs['track']['lineno']=270;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['element']['setAttribute']('hidden', '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_138_err){if (!$p['isinstance']($pyjs_dbg_138_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_138_err);}throw $pyjs_dbg_138_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=272;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['element']['removeAttribute']('hidden');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_139_err){if (!$p['isinstance']($pyjs_dbg_139_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_139_err);}throw $pyjs_dbg_139_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setHidden'] = $method;
		$pyjs['track']['lineno']=274;
		$method = $pyjs__bind_method2('_getDropzone', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':274};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=274;
			$pyjs['track']['lineno']=279;
			$pyjs['track']['lineno']=279;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'dropzone');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getDropzone'] = $method;
		$pyjs['track']['lineno']=280;
		$method = $pyjs__bind_method2('_setDropzone', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':280};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=280;
			$pyjs['track']['lineno']=285;
			$p['getattr'](self, 'element')['dropzone'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setDropzone'] = $method;
		$pyjs['track']['lineno']=287;
		$method = $pyjs__bind_method2('_getDraggable', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':287};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=287;
			$pyjs['track']['lineno']=292;
			$pyjs['track']['lineno']=292;
			var $pyjs__ret = ($p['bool']($p['op_eq']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['str']($p['getattr']($p['getattr'](self, 'element'), 'draggable'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_140_err){if (!$p['isinstance']($pyjs_dbg_140_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_140_err);}throw $pyjs_dbg_140_err;
}})(), 'auto'))? ($p['getattr']($p['getattr'](self, 'element'), 'draggable')) : (($p['bool']($p['op_eq']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['str']($p['getattr']($p['getattr'](self, 'element'), 'draggable'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_141_err){if (!$p['isinstance']($pyjs_dbg_141_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_141_err);}throw $pyjs_dbg_141_err;
}})()['lower']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_142_err){if (!$p['isinstance']($pyjs_dbg_142_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_142_err);}throw $pyjs_dbg_142_err;
}})(), 'true'))? (true) : (false))));
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getDraggable'] = $method;
		$pyjs['track']['lineno']=293;
		$method = $pyjs__bind_method2('_setDraggable', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':293};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=293;
			$pyjs['track']['lineno']=298;
			$p['getattr'](self, 'element')['draggable'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['str'](val);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_143_err){if (!$p['isinstance']($pyjs_dbg_143_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_143_err);}throw $pyjs_dbg_143_err;
}})()['lower']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_144_err){if (!$p['isinstance']($pyjs_dbg_144_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_144_err);}throw $pyjs_dbg_144_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setDraggable'] = $method;
		$pyjs['track']['lineno']=300;
		$method = $pyjs__bind_method2('_getDir', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':300};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=300;
			$pyjs['track']['lineno']=305;
			$pyjs['track']['lineno']=305;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'dir');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getDir'] = $method;
		$pyjs['track']['lineno']=306;
		$method = $pyjs__bind_method2('_setDir', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':306};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=306;
			$pyjs['track']['lineno']=311;
			$p['getattr'](self, 'element')['dir'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setDir'] = $method;
		$pyjs['track']['lineno']=313;
		$method = $pyjs__bind_method2('_getContextmenu', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':313};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=313;
			$pyjs['track']['lineno']=318;
			$pyjs['track']['lineno']=318;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'contextmenu');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getContextmenu'] = $method;
		$pyjs['track']['lineno']=319;
		$method = $pyjs__bind_method2('_setContextmenu', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':319};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=319;
			$pyjs['track']['lineno']=324;
			$p['getattr'](self, 'element')['contextmenu'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setContextmenu'] = $method;
		$pyjs['track']['lineno']=326;
		$method = $pyjs__bind_method2('_getContenteditable', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var v;
			$pyjs['track']={'module':'html5.widget', 'lineno':326};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=326;
			$pyjs['track']['lineno']=331;
			v = (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['getAttribute']('contenteditable');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_145_err){if (!$p['isinstance']($pyjs_dbg_145_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_145_err);}throw $pyjs_dbg_145_err;
}})();
			$pyjs['track']['lineno']=332;
			$pyjs['track']['lineno']=332;
			var $pyjs__ret = $p['op_eq']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['str'](v);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_146_err){if (!$p['isinstance']($pyjs_dbg_146_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_146_err);}throw $pyjs_dbg_146_err;
}})()['lower']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_147_err){if (!$p['isinstance']($pyjs_dbg_147_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_147_err);}throw $pyjs_dbg_147_err;
}})(), 'true');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getContenteditable'] = $method;
		$pyjs['track']['lineno']=334;
		$method = $pyjs__bind_method2('_setContenteditable', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':334};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=334;
			$pyjs['track']['lineno']=339;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['setAttribute']('contenteditable', (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['str'](val);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_148_err){if (!$p['isinstance']($pyjs_dbg_148_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_148_err);}throw $pyjs_dbg_148_err;
}})()['lower']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_149_err){if (!$p['isinstance']($pyjs_dbg_149_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_149_err);}throw $pyjs_dbg_149_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_150_err){if (!$p['isinstance']($pyjs_dbg_150_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_150_err);}throw $pyjs_dbg_150_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setContenteditable'] = $method;
		$pyjs['track']['lineno']=341;
		$method = $pyjs__bind_method2('_getAccesskey', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':341};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=341;
			$pyjs['track']['lineno']=347;
			$pyjs['track']['lineno']=347;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'accesskey');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getAccesskey'] = $method;
		$pyjs['track']['lineno']=348;
		$method = $pyjs__bind_method2('_setAccesskey', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':348};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=348;
			$pyjs['track']['lineno']=354;
			$p['getattr'](self, 'element')['accesskey'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setAccesskey'] = $method;
		$pyjs['track']['lineno']=356;
		$method = $pyjs__bind_method2('_getId', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':356};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=356;
			$pyjs['track']['lineno']=362;
			$pyjs['track']['lineno']=362;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'id');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getId'] = $method;
		$pyjs['track']['lineno']=363;
		$method = $pyjs__bind_method2('_setId', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':363};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=363;
			$pyjs['track']['lineno']=369;
			$p['getattr'](self, 'element')['id'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setId'] = $method;
		$pyjs['track']['lineno']=371;
		$method = $pyjs__bind_method2('_getClass', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':371};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=371;
			$pyjs['track']['lineno']=376;
			$pyjs['track']['lineno']=376;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['ClassWrapper'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_151_err){if (!$p['isinstance']($pyjs_dbg_151_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_151_err);}throw $pyjs_dbg_151_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getClass'] = $method;
		$pyjs['track']['lineno']=377;
		$method = $pyjs__bind_method2('_setClass', function(value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':377};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=377;
			$pyjs['track']['lineno']=385;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((value === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_152_err){if (!$p['isinstance']($pyjs_dbg_152_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_152_err);}throw $pyjs_dbg_152_err;
}})()) {
				$pyjs['track']['lineno']=386;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['element']['setAttribute']('class', ' ');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_153_err){if (!$p['isinstance']($pyjs_dbg_153_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_153_err);}throw $pyjs_dbg_153_err;
}})();
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance'](value, $p['str']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_154_err){if (!$p['isinstance']($pyjs_dbg_154_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_154_err);}throw $pyjs_dbg_154_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_155_err){if (!$p['isinstance']($pyjs_dbg_155_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_155_err);}throw $pyjs_dbg_155_err;
}})()) {
				$pyjs['track']['lineno']=388;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['element']['setAttribute']('class', value);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_156_err){if (!$p['isinstance']($pyjs_dbg_156_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_156_err);}throw $pyjs_dbg_156_err;
}})();
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance'](value, $p['list']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_157_err){if (!$p['isinstance']($pyjs_dbg_157_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_157_err);}throw $pyjs_dbg_157_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_158_err){if (!$p['isinstance']($pyjs_dbg_158_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_158_err);}throw $pyjs_dbg_158_err;
}})()) {
				$pyjs['track']['lineno']=390;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['element']['setAttribute']('class', (function(){try{try{$pyjs['in_try_except'] += 1;
				return ' '['join'](value);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_159_err){if (!$p['isinstance']($pyjs_dbg_159_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_159_err);}throw $pyjs_dbg_159_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_160_err){if (!$p['isinstance']($pyjs_dbg_160_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_160_err);}throw $pyjs_dbg_160_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=392;
				$pyjs['__active_exception_stack__'] = null;
				throw ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['ValueError']('Class must be a String, a List or None');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_161_err){if (!$p['isinstance']($pyjs_dbg_161_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_161_err);}throw $pyjs_dbg_161_err;
}})());
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['_setClass'] = $method;
		$pyjs['track']['lineno']=394;
		$method = $pyjs__bind_method2('_getStyle', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':394};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=394;
			$pyjs['track']['lineno']=400;
			$pyjs['track']['lineno']=400;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['StyleWrapper'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_162_err){if (!$p['isinstance']($pyjs_dbg_162_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_162_err);}throw $pyjs_dbg_162_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getStyle'] = $method;
		$pyjs['track']['lineno']=402;
		$method = $pyjs__bind_method2('hide', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':402};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=402;
			$pyjs['track']['lineno']=407;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return self['_getHidden']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_163_err){if (!$p['isinstance']($pyjs_dbg_163_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_163_err);}throw $pyjs_dbg_163_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_164_err){if (!$p['isinstance']($pyjs_dbg_164_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_164_err);}throw $pyjs_dbg_164_err;
}})()) {
				$pyjs['track']['lineno']=408;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['_setHidden'](true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_165_err){if (!$p['isinstance']($pyjs_dbg_165_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_165_err);}throw $pyjs_dbg_165_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['hide'] = $method;
		$pyjs['track']['lineno']=410;
		$method = $pyjs__bind_method2('show', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':410};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=410;
			$pyjs['track']['lineno']=415;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return self['_getHidden']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_166_err){if (!$p['isinstance']($pyjs_dbg_166_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_166_err);}throw $pyjs_dbg_166_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_167_err){if (!$p['isinstance']($pyjs_dbg_167_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_167_err);}throw $pyjs_dbg_167_err;
}})()) {
				$pyjs['track']['lineno']=416;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['_setHidden'](false);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_168_err){if (!$p['isinstance']($pyjs_dbg_168_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_168_err);}throw $pyjs_dbg_168_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['show'] = $method;
		$pyjs['track']['lineno']=418;
		$method = $pyjs__bind_method2('onAttach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter14_array,$iter14_type,c,$iter14_iter,$pyjs__trackstack_size_1,$iter14_idx,$iter14_nextval;
			$pyjs['track']={'module':'html5.widget', 'lineno':418};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=418;
			$pyjs['track']['lineno']=419;
			self['_isAttached'] = true;
			$pyjs['track']['lineno']=420;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter14_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__getslice']($p['getattr'](self, '_children'), 0, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_169_err){if (!$p['isinstance']($pyjs_dbg_169_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_169_err);}throw $pyjs_dbg_169_err;
}})();
			$iter14_nextval=$p['__iter_prepare']($iter14_iter,false);
			while (typeof($p['__wrapped_next']($iter14_nextval)['$nextval']) != 'undefined') {
				c = $iter14_nextval['$nextval'];
				$pyjs['track']['lineno']=421;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return c['onAttach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_170_err){if (!$p['isinstance']($pyjs_dbg_170_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_170_err);}throw $pyjs_dbg_170_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='html5.widget';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onAttach'] = $method;
		$pyjs['track']['lineno']=423;
		$method = $pyjs__bind_method2('onDetach', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var c,$iter15_iter,$iter15_array,$iter15_idx,$iter15_nextval,$iter15_type,$pyjs__trackstack_size_1;
			$pyjs['track']={'module':'html5.widget', 'lineno':423};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=423;
			$pyjs['track']['lineno']=424;
			self['_isAttached'] = false;
			$pyjs['track']['lineno']=425;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter15_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__getslice']($p['getattr'](self, '_children'), 0, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_171_err){if (!$p['isinstance']($pyjs_dbg_171_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_171_err);}throw $pyjs_dbg_171_err;
}})();
			$iter15_nextval=$p['__iter_prepare']($iter15_iter,false);
			while (typeof($p['__wrapped_next']($iter15_nextval)['$nextval']) != 'undefined') {
				c = $iter15_nextval['$nextval'];
				$pyjs['track']['lineno']=426;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return c['onDetach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_172_err){if (!$p['isinstance']($pyjs_dbg_172_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_172_err);}throw $pyjs_dbg_172_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='html5.widget';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onDetach'] = $method;
		$pyjs['track']['lineno']=428;
		$method = $pyjs__bind_method2('insertBefore', function(insert, child) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				insert = arguments[1];
				child = arguments[2];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':428};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=428;
			$pyjs['track']['lineno']=429;
			if (!( $p['getattr'](self, '_children')['__contains__'](child) )) {
			   throw $p['AssertionError']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('%s is not a child of %s', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple']([child, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_173_err){if (!$p['isinstance']($pyjs_dbg_173_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_173_err);}throw $pyjs_dbg_173_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_174_err){if (!$p['isinstance']($pyjs_dbg_174_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_174_err);}throw $pyjs_dbg_174_err;
}})());
			 }
			$pyjs['track']['lineno']=431;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](insert, '_parent'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_175_err){if (!$p['isinstance']($pyjs_dbg_175_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_175_err);}throw $pyjs_dbg_175_err;
}})()) {
				$pyjs['track']['lineno']=432;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return insert['_parent']['removeChild'](insert);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_176_err){if (!$p['isinstance']($pyjs_dbg_176_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_176_err);}throw $pyjs_dbg_176_err;
}})();
			}
			$pyjs['track']['lineno']=434;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['insertBefore']($p['getattr'](insert, 'element'), $p['getattr'](child, 'element'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_177_err){if (!$p['isinstance']($pyjs_dbg_177_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_177_err);}throw $pyjs_dbg_177_err;
}})();
			$pyjs['track']['lineno']=435;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['_children']['insert']((function(){try{try{$pyjs['in_try_except'] += 1;
			return self['_children']['index'](child);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_178_err){if (!$p['isinstance']($pyjs_dbg_178_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_178_err);}throw $pyjs_dbg_178_err;
}})(), insert);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_179_err){if (!$p['isinstance']($pyjs_dbg_179_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_179_err);}throw $pyjs_dbg_179_err;
}})();
			$pyjs['track']['lineno']=437;
			insert['_parent'] = self;
			$pyjs['track']['lineno']=438;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, '_isAttached'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_180_err){if (!$p['isinstance']($pyjs_dbg_180_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_180_err);}throw $pyjs_dbg_180_err;
}})()) {
				$pyjs['track']['lineno']=439;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return insert['onAttach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_181_err){if (!$p['isinstance']($pyjs_dbg_181_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_181_err);}throw $pyjs_dbg_181_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['insert'],['child']]);
		$cls_definition['insertBefore'] = $method;
		$pyjs['track']['lineno']=441;
		$method = $pyjs__bind_method2('prependChild', function(child) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				child = arguments[1];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':441};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=441;
			$pyjs['track']['lineno']=442;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance'](child, $m['Widget']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_182_err){if (!$p['isinstance']($pyjs_dbg_182_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_182_err);}throw $pyjs_dbg_182_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_183_err){if (!$p['isinstance']($pyjs_dbg_183_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_183_err);}throw $pyjs_dbg_183_err;
}})()) {
				$pyjs['track']['lineno']=443;
				child = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['textnode']['TextNode']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str'](child);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_184_err){if (!$p['isinstance']($pyjs_dbg_184_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_184_err);}throw $pyjs_dbg_184_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_185_err){if (!$p['isinstance']($pyjs_dbg_185_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_185_err);}throw $pyjs_dbg_185_err;
}})();
			}
			$pyjs['track']['lineno']=445;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](child, '_parent'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_186_err){if (!$p['isinstance']($pyjs_dbg_186_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_186_err);}throw $pyjs_dbg_186_err;
}})()) {
				$pyjs['track']['lineno']=446;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return child['_parent']['_children']['remove'](child);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_187_err){if (!$p['isinstance']($pyjs_dbg_187_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_187_err);}throw $pyjs_dbg_187_err;
}})();
				$pyjs['track']['lineno']=447;
				child['_parent'] = null;
			}
			$pyjs['track']['lineno']=449;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool']($p['getattr'](self, '_children')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_188_err){if (!$p['isinstance']($pyjs_dbg_188_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_188_err);}throw $pyjs_dbg_188_err;
}})()) {
				$pyjs['track']['lineno']=450;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['appendChild'](child);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_189_err){if (!$p['isinstance']($pyjs_dbg_189_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_189_err);}throw $pyjs_dbg_189_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=452;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['insertBefore'](child, (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['children'](0);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_190_err){if (!$p['isinstance']($pyjs_dbg_190_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_190_err);}throw $pyjs_dbg_190_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_191_err){if (!$p['isinstance']($pyjs_dbg_191_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_191_err);}throw $pyjs_dbg_191_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['child']]);
		$cls_definition['prependChild'] = $method;
		$pyjs['track']['lineno']=454;
		$method = $pyjs__bind_method2('appendChild', function(child) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				child = arguments[1];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':454};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=454;
			$pyjs['track']['lineno']=455;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance'](child, $m['Widget']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_192_err){if (!$p['isinstance']($pyjs_dbg_192_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_192_err);}throw $pyjs_dbg_192_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_193_err){if (!$p['isinstance']($pyjs_dbg_193_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_193_err);}throw $pyjs_dbg_193_err;
}})()) {
				$pyjs['track']['lineno']=456;
				child = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['textnode']['TextNode']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str'](child);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_194_err){if (!$p['isinstance']($pyjs_dbg_194_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_194_err);}throw $pyjs_dbg_194_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_195_err){if (!$p['isinstance']($pyjs_dbg_195_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_195_err);}throw $pyjs_dbg_195_err;
}})();
			}
			$pyjs['track']['lineno']=458;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](child, '_parent'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_196_err){if (!$p['isinstance']($pyjs_dbg_196_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_196_err);}throw $pyjs_dbg_196_err;
}})()) {
				$pyjs['track']['lineno']=459;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return child['_parent']['_children']['remove'](child);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_197_err){if (!$p['isinstance']($pyjs_dbg_197_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_197_err);}throw $pyjs_dbg_197_err;
}})();
			}
			$pyjs['track']['lineno']=461;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['_children']['append'](child);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_198_err){if (!$p['isinstance']($pyjs_dbg_198_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_198_err);}throw $pyjs_dbg_198_err;
}})();
			$pyjs['track']['lineno']=462;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['appendChild']($p['getattr'](child, 'element'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_199_err){if (!$p['isinstance']($pyjs_dbg_199_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_199_err);}throw $pyjs_dbg_199_err;
}})();
			$pyjs['track']['lineno']=463;
			child['_parent'] = self;
			$pyjs['track']['lineno']=464;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, '_isAttached'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_200_err){if (!$p['isinstance']($pyjs_dbg_200_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_200_err);}throw $pyjs_dbg_200_err;
}})()) {
				$pyjs['track']['lineno']=465;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return child['onAttach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_201_err){if (!$p['isinstance']($pyjs_dbg_201_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_201_err);}throw $pyjs_dbg_201_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['child']]);
		$cls_definition['appendChild'] = $method;
		$pyjs['track']['lineno']=467;
		$method = $pyjs__bind_method2('removeChild', function(child) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				child = arguments[1];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':467};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=467;
			$pyjs['track']['lineno']=468;
			if (!( $p['getattr'](self, '_children')['__contains__'](child) )) {
			   throw $p['AssertionError']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('%s is not a child of %s', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple']([child, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_202_err){if (!$p['isinstance']($pyjs_dbg_202_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_202_err);}throw $pyjs_dbg_202_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_203_err){if (!$p['isinstance']($pyjs_dbg_203_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_203_err);}throw $pyjs_dbg_203_err;
}})());
			 }
			$pyjs['track']['lineno']=470;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](child, '_isAttached'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_204_err){if (!$p['isinstance']($pyjs_dbg_204_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_204_err);}throw $pyjs_dbg_204_err;
}})()) {
				$pyjs['track']['lineno']=471;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return child['onDetach']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_205_err){if (!$p['isinstance']($pyjs_dbg_205_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_205_err);}throw $pyjs_dbg_205_err;
}})();
			}
			$pyjs['track']['lineno']=473;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['removeChild']($p['getattr'](child, 'element'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_206_err){if (!$p['isinstance']($pyjs_dbg_206_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_206_err);}throw $pyjs_dbg_206_err;
}})();
			$pyjs['track']['lineno']=474;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['_children']['remove'](child);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_207_err){if (!$p['isinstance']($pyjs_dbg_207_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_207_err);}throw $pyjs_dbg_207_err;
}})();
			$pyjs['track']['lineno']=475;
			child['_parent'] = null;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['child']]);
		$cls_definition['removeChild'] = $method;
		$pyjs['track']['lineno']=477;
		$method = $pyjs__bind_method2('removeAllChildren', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter16_array,$iter16_type,$pyjs__trackstack_size_1,$iter16_idx,child,$iter16_nextval,$iter16_iter;
			$pyjs['track']={'module':'html5.widget', 'lineno':477};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=477;
			$pyjs['track']['lineno']=481;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter16_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__getslice']($p['getattr'](self, '_children'), 0, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_208_err){if (!$p['isinstance']($pyjs_dbg_208_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_208_err);}throw $pyjs_dbg_208_err;
}})();
			$iter16_nextval=$p['__iter_prepare']($iter16_iter,false);
			while (typeof($p['__wrapped_next']($iter16_nextval)['$nextval']) != 'undefined') {
				child = $iter16_nextval['$nextval'];
				$pyjs['track']['lineno']=482;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['removeChild'](child);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_209_err){if (!$p['isinstance']($pyjs_dbg_209_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_209_err);}throw $pyjs_dbg_209_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='html5.widget';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['removeAllChildren'] = $method;
		$pyjs['track']['lineno']=484;
		$method = $pyjs__bind_method2('isParentOf', function(widget) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}
			var $iter17_nextval,$iter17_iter,child,$iter17_array,$iter17_idx,$iter17_type,$pyjs__trackstack_size_1;
			$pyjs['track']={'module':'html5.widget', 'lineno':484};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=484;
			$pyjs['track']['lineno']=494;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](self, widget));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_210_err){if (!$p['isinstance']($pyjs_dbg_210_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_210_err);}throw $pyjs_dbg_210_err;
}})()) {
				$pyjs['track']['lineno']=495;
				$pyjs['track']['lineno']=495;
				var $pyjs__ret = false;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=497;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter17_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, '_children');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_211_err){if (!$p['isinstance']($pyjs_dbg_211_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_211_err);}throw $pyjs_dbg_211_err;
}})();
			$iter17_nextval=$p['__iter_prepare']($iter17_iter,false);
			while (typeof($p['__wrapped_next']($iter17_nextval)['$nextval']) != 'undefined') {
				child = $iter17_nextval['$nextval'];
				$pyjs['track']['lineno']=498;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq'](child, widget));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_212_err){if (!$p['isinstance']($pyjs_dbg_212_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_212_err);}throw $pyjs_dbg_212_err;
}})()) {
					$pyjs['track']['lineno']=499;
					$pyjs['track']['lineno']=499;
					var $pyjs__ret = true;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=501;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return child['isParentOf'](widget);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_213_err){if (!$p['isinstance']($pyjs_dbg_213_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_213_err);}throw $pyjs_dbg_213_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_214_err){if (!$p['isinstance']($pyjs_dbg_214_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_214_err);}throw $pyjs_dbg_214_err;
}})()) {
					$pyjs['track']['lineno']=502;
					$pyjs['track']['lineno']=502;
					var $pyjs__ret = true;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=504;
			$pyjs['track']['lineno']=504;
			var $pyjs__ret = false;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['isParentOf'] = $method;
		$pyjs['track']['lineno']=506;
		$method = $pyjs__bind_method2('isChildOf', function(widget) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}
			var parent;
			$pyjs['track']={'module':'html5.widget', 'lineno':506};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=506;
			$pyjs['track']['lineno']=516;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](self, widget));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_215_err){if (!$p['isinstance']($pyjs_dbg_215_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_215_err);}throw $pyjs_dbg_215_err;
}})()) {
				$pyjs['track']['lineno']=517;
				$pyjs['track']['lineno']=517;
				var $pyjs__ret = false;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=519;
			parent = (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_216_err){if (!$p['isinstance']($pyjs_dbg_216_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_216_err);}throw $pyjs_dbg_216_err;
}})();
			$pyjs['track']['lineno']=520;
			while ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](parent);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_217_err){if (!$p['isinstance']($pyjs_dbg_217_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_217_err);}throw $pyjs_dbg_217_err;
}})()) {
				$pyjs['track']['lineno']=521;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq'](parent, widget));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_218_err){if (!$p['isinstance']($pyjs_dbg_218_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_218_err);}throw $pyjs_dbg_218_err;
}})()) {
					$pyjs['track']['lineno']=522;
					$pyjs['track']['lineno']=522;
					var $pyjs__ret = true;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=524;
				parent = (function(){try{try{$pyjs['in_try_except'] += 1;
				return widget['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_219_err){if (!$p['isinstance']($pyjs_dbg_219_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_219_err);}throw $pyjs_dbg_219_err;
}})();
			}
			$pyjs['track']['lineno']=526;
			$pyjs['track']['lineno']=526;
			var $pyjs__ret = false;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['isChildOf'] = $method;
		$pyjs['track']['lineno']=528;
		$method = $pyjs__bind_method2('addClass', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var $iter18_type,$or5,$iter18_iter,$or6,sitem,$iter18_array,$iter19_iter,$iter19_nextval,$iter19_array,item,$iter18_idx,$iter19_type,$pyjs__trackstack_size_2,$pyjs__trackstack_size_1,$iter19_idx,$iter18_nextval;
			$pyjs['track']={'module':'html5.widget', 'lineno':528};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=528;
			$pyjs['track']['lineno']=537;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter18_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return args;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_220_err){if (!$p['isinstance']($pyjs_dbg_220_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_220_err);}throw $pyjs_dbg_220_err;
}})();
			$iter18_nextval=$p['__iter_prepare']($iter18_iter,false);
			while (typeof($p['__wrapped_next']($iter18_nextval)['$nextval']) != 'undefined') {
				item = $iter18_nextval['$nextval'];
				$pyjs['track']['lineno']=538;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](item, $p['list']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_221_err){if (!$p['isinstance']($pyjs_dbg_221_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_221_err);}throw $pyjs_dbg_221_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_222_err){if (!$p['isinstance']($pyjs_dbg_222_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_222_err);}throw $pyjs_dbg_222_err;
}})()) {
					$pyjs['track']['lineno']=539;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['addClass'](item);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_223_err){if (!$p['isinstance']($pyjs_dbg_223_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_223_err);}throw $pyjs_dbg_223_err;
}})();
				}
				else if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($or5=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](item, $p['str']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_224_err){if (!$p['isinstance']($pyjs_dbg_224_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_224_err);}throw $pyjs_dbg_224_err;
}})())?$or5:(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](item, (typeof unicode == "undefined"?$m['unicode']:unicode));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_225_err){if (!$p['isinstance']($pyjs_dbg_225_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_225_err);}throw $pyjs_dbg_225_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_226_err){if (!$p['isinstance']($pyjs_dbg_226_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_226_err);}throw $pyjs_dbg_226_err;
}})()) {
					$pyjs['track']['lineno']=542;
					$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
					$iter19_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return item['$$split'](' ');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_227_err){if (!$p['isinstance']($pyjs_dbg_227_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_227_err);}throw $pyjs_dbg_227_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_228_err){if (!$p['isinstance']($pyjs_dbg_228_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_228_err);}throw $pyjs_dbg_228_err;
}})();
					$iter19_nextval=$p['__iter_prepare']($iter19_iter,false);
					while (typeof($p['__wrapped_next']($iter19_nextval)['$nextval']) != 'undefined') {
						sitem = $iter19_nextval['$nextval'];
						$pyjs['track']['lineno']=543;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](!self['__getitem__']('class')['__contains__'](sitem));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_229_err){if (!$p['isinstance']($pyjs_dbg_229_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_229_err);}throw $pyjs_dbg_229_err;
}})()) {
							$pyjs['track']['lineno']=544;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return self['__getitem__']('class')['append'](sitem);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_230_err){if (!$p['isinstance']($pyjs_dbg_230_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_230_err);}throw $pyjs_dbg_230_err;
}})();
						}
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='html5.widget';
				}
				else {
					$pyjs['track']['lineno']=546;
					$pyjs['__active_exception_stack__'] = null;
					throw ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['TypeError']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_231_err){if (!$p['isinstance']($pyjs_dbg_231_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_231_err);}throw $pyjs_dbg_231_err;
}})());
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='html5.widget';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',null,['self']]);
		$cls_definition['addClass'] = $method;
		$pyjs['track']['lineno']=548;
		$method = $pyjs__bind_method2('removeClass', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var $iter20_iter,$iter20_nextval,$iter20_type,$iter21_idx,sitem,$or7,$or8,$iter21_type,item,$iter21_iter,$iter20_idx,$pyjs__trackstack_size_2,$iter21_array,$pyjs__trackstack_size_1,$iter21_nextval,$iter20_array;
			$pyjs['track']={'module':'html5.widget', 'lineno':548};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=548;
			$pyjs['track']['lineno']=556;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter20_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return args;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_232_err){if (!$p['isinstance']($pyjs_dbg_232_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_232_err);}throw $pyjs_dbg_232_err;
}})();
			$iter20_nextval=$p['__iter_prepare']($iter20_iter,false);
			while (typeof($p['__wrapped_next']($iter20_nextval)['$nextval']) != 'undefined') {
				item = $iter20_nextval['$nextval'];
				$pyjs['track']['lineno']=557;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](item, $p['list']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_233_err){if (!$p['isinstance']($pyjs_dbg_233_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_233_err);}throw $pyjs_dbg_233_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_234_err){if (!$p['isinstance']($pyjs_dbg_234_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_234_err);}throw $pyjs_dbg_234_err;
}})()) {
					$pyjs['track']['lineno']=558;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['removeClass'](item);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_235_err){if (!$p['isinstance']($pyjs_dbg_235_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_235_err);}throw $pyjs_dbg_235_err;
}})();
				}
				else if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($or7=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](item, $p['str']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_236_err){if (!$p['isinstance']($pyjs_dbg_236_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_236_err);}throw $pyjs_dbg_236_err;
}})())?$or7:(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](item, (typeof unicode == "undefined"?$m['unicode']:unicode));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_237_err){if (!$p['isinstance']($pyjs_dbg_237_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_237_err);}throw $pyjs_dbg_237_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_238_err){if (!$p['isinstance']($pyjs_dbg_238_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_238_err);}throw $pyjs_dbg_238_err;
}})()) {
					$pyjs['track']['lineno']=561;
					$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
					$iter21_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return item['$$split'](' ');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_239_err){if (!$p['isinstance']($pyjs_dbg_239_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_239_err);}throw $pyjs_dbg_239_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_240_err){if (!$p['isinstance']($pyjs_dbg_240_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_240_err);}throw $pyjs_dbg_240_err;
}})();
					$iter21_nextval=$p['__iter_prepare']($iter21_iter,false);
					while (typeof($p['__wrapped_next']($iter21_nextval)['$nextval']) != 'undefined') {
						sitem = $iter21_nextval['$nextval'];
						$pyjs['track']['lineno']=562;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](self['__getitem__']('class')['__contains__'](sitem));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_241_err){if (!$p['isinstance']($pyjs_dbg_241_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_241_err);}throw $pyjs_dbg_241_err;
}})()) {
							$pyjs['track']['lineno']=563;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return self['__getitem__']('class')['remove'](sitem);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_242_err){if (!$p['isinstance']($pyjs_dbg_242_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_242_err);}throw $pyjs_dbg_242_err;
}})();
						}
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='html5.widget';
				}
				else {
					$pyjs['track']['lineno']=565;
					$pyjs['__active_exception_stack__'] = null;
					throw ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['TypeError']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_243_err){if (!$p['isinstance']($pyjs_dbg_243_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_243_err);}throw $pyjs_dbg_243_err;
}})());
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='html5.widget';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',null,['self']]);
		$cls_definition['removeClass'] = $method;
		$pyjs['track']['lineno']=567;
		$method = $pyjs__bind_method2('toggleClass', function(on, off) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				on = arguments[1];
				off = arguments[2];
			}
			if (typeof off == 'undefined') off=arguments['callee']['__args__'][4][1];
			var $and8,$and5,$and6,$and7;
			$pyjs['track']={'module':'html5.widget', 'lineno':567};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=567;
			$pyjs['track']['lineno']=583;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](self['__getitem__']('class')['__contains__'](on));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_244_err){if (!$p['isinstance']($pyjs_dbg_244_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_244_err);}throw $pyjs_dbg_244_err;
}})()) {
				$pyjs['track']['lineno']=584;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__getitem__']('class')['remove'](on);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_245_err){if (!$p['isinstance']($pyjs_dbg_245_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_245_err);}throw $pyjs_dbg_245_err;
}})();
				$pyjs['track']['lineno']=586;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($and5=off)?!self['__getitem__']('class')['__contains__'](off):$and5));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_246_err){if (!$p['isinstance']($pyjs_dbg_246_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_246_err);}throw $pyjs_dbg_246_err;
}})()) {
					$pyjs['track']['lineno']=587;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['__getitem__']('class')['append'](off);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_247_err){if (!$p['isinstance']($pyjs_dbg_247_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_247_err);}throw $pyjs_dbg_247_err;
}})();
				}
				$pyjs['track']['lineno']=589;
				$pyjs['track']['lineno']=589;
				var $pyjs__ret = false;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=591;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and7=off)?self['__getitem__']('class')['__contains__'](off):$and7));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_248_err){if (!$p['isinstance']($pyjs_dbg_248_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_248_err);}throw $pyjs_dbg_248_err;
}})()) {
				$pyjs['track']['lineno']=592;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__getitem__']('class')['remove'](off);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_249_err){if (!$p['isinstance']($pyjs_dbg_249_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_249_err);}throw $pyjs_dbg_249_err;
}})();
			}
			$pyjs['track']['lineno']=594;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__getitem__']('class')['append'](on);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_250_err){if (!$p['isinstance']($pyjs_dbg_250_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_250_err);}throw $pyjs_dbg_250_err;
}})();
			$pyjs['track']['lineno']=595;
			$pyjs['track']['lineno']=595;
			var $pyjs__ret = true;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['on'],['off', null]]);
		$cls_definition['toggleClass'] = $method;
		$pyjs['track']['lineno']=597;
		$method = $pyjs__bind_method2('onBlur', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':597};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=597;
			$pyjs['track']['lineno']=598;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onBlur'] = $method;
		$pyjs['track']['lineno']=599;
		$method = $pyjs__bind_method2('onChange', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':599};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=599;
			$pyjs['track']['lineno']=600;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onChange'] = $method;
		$pyjs['track']['lineno']=601;
		$method = $pyjs__bind_method2('onContextMenu', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':601};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=601;
			$pyjs['track']['lineno']=602;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onContextMenu'] = $method;
		$pyjs['track']['lineno']=603;
		$method = $pyjs__bind_method2('onFocus', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':603};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=603;
			$pyjs['track']['lineno']=604;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onFocus'] = $method;
		$pyjs['track']['lineno']=605;
		$method = $pyjs__bind_method2('onFormChange', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':605};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=605;
			$pyjs['track']['lineno']=606;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onFormChange'] = $method;
		$pyjs['track']['lineno']=607;
		$method = $pyjs__bind_method2('onFormInput', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':607};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=607;
			$pyjs['track']['lineno']=608;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onFormInput'] = $method;
		$pyjs['track']['lineno']=609;
		$method = $pyjs__bind_method2('onInput', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':609};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=609;
			$pyjs['track']['lineno']=610;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onInput'] = $method;
		$pyjs['track']['lineno']=611;
		$method = $pyjs__bind_method2('onInvalid', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':611};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=611;
			$pyjs['track']['lineno']=612;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onInvalid'] = $method;
		$pyjs['track']['lineno']=613;
		$method = $pyjs__bind_method2('onReset', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':613};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=613;
			$pyjs['track']['lineno']=614;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onReset'] = $method;
		$pyjs['track']['lineno']=615;
		$method = $pyjs__bind_method2('onSelect', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':615};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=615;
			$pyjs['track']['lineno']=616;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onSelect'] = $method;
		$pyjs['track']['lineno']=617;
		$method = $pyjs__bind_method2('onSubmit', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':617};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=617;
			$pyjs['track']['lineno']=618;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onSubmit'] = $method;
		$pyjs['track']['lineno']=619;
		$method = $pyjs__bind_method2('onKeyDown', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':619};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=619;
			$pyjs['track']['lineno']=620;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onKeyDown'] = $method;
		$pyjs['track']['lineno']=621;
		$method = $pyjs__bind_method2('onKeyPress', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':621};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=621;
			$pyjs['track']['lineno']=622;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onKeyPress'] = $method;
		$pyjs['track']['lineno']=623;
		$method = $pyjs__bind_method2('onKeyUp', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':623};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=623;
			$pyjs['track']['lineno']=624;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onKeyUp'] = $method;
		$pyjs['track']['lineno']=625;
		$method = $pyjs__bind_method2('onClick', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':625};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=625;
			$pyjs['track']['lineno']=626;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=627;
		$method = $pyjs__bind_method2('onDblClick', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':627};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=627;
			$pyjs['track']['lineno']=628;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDblClick'] = $method;
		$pyjs['track']['lineno']=629;
		$method = $pyjs__bind_method2('onDrag', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':629};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=629;
			$pyjs['track']['lineno']=630;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDrag'] = $method;
		$pyjs['track']['lineno']=631;
		$method = $pyjs__bind_method2('onDragEnd', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':631};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=631;
			$pyjs['track']['lineno']=632;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDragEnd'] = $method;
		$pyjs['track']['lineno']=633;
		$method = $pyjs__bind_method2('onDragEnter', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':633};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=633;
			$pyjs['track']['lineno']=634;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDragEnter'] = $method;
		$pyjs['track']['lineno']=635;
		$method = $pyjs__bind_method2('onDragLeave', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':635};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=635;
			$pyjs['track']['lineno']=636;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDragLeave'] = $method;
		$pyjs['track']['lineno']=637;
		$method = $pyjs__bind_method2('onDragOver', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':637};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=637;
			$pyjs['track']['lineno']=638;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDragOver'] = $method;
		$pyjs['track']['lineno']=639;
		$method = $pyjs__bind_method2('onDragStart', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':639};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=639;
			$pyjs['track']['lineno']=640;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDragStart'] = $method;
		$pyjs['track']['lineno']=641;
		$method = $pyjs__bind_method2('onDrop', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':641};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=641;
			$pyjs['track']['lineno']=642;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDrop'] = $method;
		$pyjs['track']['lineno']=643;
		$method = $pyjs__bind_method2('onMouseDown', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':643};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=643;
			$pyjs['track']['lineno']=644;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onMouseDown'] = $method;
		$pyjs['track']['lineno']=645;
		$method = $pyjs__bind_method2('onMouseMove', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':645};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=645;
			$pyjs['track']['lineno']=646;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onMouseMove'] = $method;
		$pyjs['track']['lineno']=647;
		$method = $pyjs__bind_method2('onMouseOut', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':647};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=647;
			$pyjs['track']['lineno']=648;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onMouseOut'] = $method;
		$pyjs['track']['lineno']=649;
		$method = $pyjs__bind_method2('onMouseOver', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':649};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=649;
			$pyjs['track']['lineno']=650;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onMouseOver'] = $method;
		$pyjs['track']['lineno']=651;
		$method = $pyjs__bind_method2('onMouseUp', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':651};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=651;
			$pyjs['track']['lineno']=652;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onMouseUp'] = $method;
		$pyjs['track']['lineno']=653;
		$method = $pyjs__bind_method2('onMouseWheel', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':653};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=653;
			$pyjs['track']['lineno']=654;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onMouseWheel'] = $method;
		$pyjs['track']['lineno']=655;
		$method = $pyjs__bind_method2('onScroll', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':655};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=655;
			$pyjs['track']['lineno']=656;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onScroll'] = $method;
		$pyjs['track']['lineno']=657;
		$method = $pyjs__bind_method2('onTouchStart', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':657};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=657;
			$pyjs['track']['lineno']=658;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onTouchStart'] = $method;
		$pyjs['track']['lineno']=659;
		$method = $pyjs__bind_method2('onTouchEnd', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':659};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=659;
			$pyjs['track']['lineno']=660;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onTouchEnd'] = $method;
		$pyjs['track']['lineno']=661;
		$method = $pyjs__bind_method2('onTouchMove', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':661};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=661;
			$pyjs['track']['lineno']=662;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onTouchMove'] = $method;
		$pyjs['track']['lineno']=663;
		$method = $pyjs__bind_method2('onTouchCancel', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':663};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=663;
			$pyjs['track']['lineno']=664;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onTouchCancel'] = $method;
		$pyjs['track']['lineno']=666;
		$method = $pyjs__bind_method2('focus', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':666};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=666;
			$pyjs['track']['lineno']=667;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['focus']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_251_err){if (!$p['isinstance']($pyjs_dbg_251_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_251_err);}throw $pyjs_dbg_251_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['focus'] = $method;
		$pyjs['track']['lineno']=669;
		$method = $pyjs__bind_method2('blur', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':669};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=669;
			$pyjs['track']['lineno']=670;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['blur']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_252_err){if (!$p['isinstance']($pyjs_dbg_252_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_252_err);}throw $pyjs_dbg_252_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['blur'] = $method;
		$pyjs['track']['lineno']=672;
		$method = $pyjs__bind_method2('parent', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.widget', 'lineno':672};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=672;
			$pyjs['track']['lineno']=673;
			$pyjs['track']['lineno']=673;
			var $pyjs__ret = $p['getattr'](self, '_parent');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['parent'] = $method;
		$pyjs['track']['lineno']=675;
		$method = $pyjs__bind_method2('children', function(n) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				n = arguments[1];
			}
			if (typeof n == 'undefined') n=arguments['callee']['__args__'][3][1];
			var $and9,$and10;
			$pyjs['track']={'module':'html5.widget', 'lineno':675};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=675;
			$pyjs['track']['lineno']=688;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((n === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_253_err){if (!$p['isinstance']($pyjs_dbg_253_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_253_err);}throw $pyjs_dbg_253_err;
}})()) {
				$pyjs['track']['lineno']=689;
				$pyjs['track']['lineno']=689;
				var $pyjs__ret = $p['__getslice']($p['getattr'](self, '_children'), 0, null);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=691;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and9=((($p['cmp'](n, 0))|1) == 1))?($p['cmp'](n, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len']($p['getattr'](self, '_children'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_254_err){if (!$p['isinstance']($pyjs_dbg_254_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_254_err);}throw $pyjs_dbg_254_err;
}})()) == -1):$and9));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_255_err){if (!$p['isinstance']($pyjs_dbg_255_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_255_err);}throw $pyjs_dbg_255_err;
}})()) {
				$pyjs['track']['lineno']=692;
				$pyjs['track']['lineno']=692;
				var $pyjs__ret = $p['getattr'](self, '_children')['__getitem__'](n);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=694;
			$pyjs['track']['lineno']=694;
			var $pyjs__ret = null;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['n', null]]);
		$cls_definition['children'] = $method;
		$pyjs['track']['lineno']=696;
		$method = $pyjs__bind_method2('_getEventMap', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var res;
			$pyjs['track']={'module':'html5.widget', 'lineno':696};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=696;
			$pyjs['track']['lineno']=697;
			res = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([['onblur', 'onBlur'], ['onchange', 'onChange'], ['oncontextmenu', 'onContextMenu'], ['onfocus', 'onFocus'], ['onformchange', 'onFormChange'], ['onforminput', 'onFormInput'], ['oninput', 'onInput'], ['oninvalid', 'onInvalid'], ['onreset', 'onReset'], ['onselect', 'onSelect'], ['onsubmit', 'onSubmit'], ['onkeydown', 'onKeyDown'], ['onkeypress', 'onKeyPress'], ['onkeyup', 'onKeyUp'], ['onclick', 'onClick'], ['ondblclick', 'onDblClick'], ['ondrag', 'onDrag'], ['ondragend', 'onDragEnd'], ['ondragenter', 'onDragEnter'], ['ondragleave', 'onDragLeave'], ['ondragover', 'onDragOver'], ['ondragstart', 'onDragStart'], ['ondrop', 'onDrop'], ['onmousedown', 'onMouseDown'], ['onmousemove', 'onMouseMove'], ['onmouseout', 'onMouseOut'], ['onmouseover', 'onMouseOver'], ['onmouseup', 'onMouseUp'], ['onmousewheel', 'onMouseWheel'], ['onscroll', 'onScroll'], ['ontouchstart', 'onTouchStart'], ['ontouchend', 'onTouchEnd'], ['ontouchmove', 'onTouchMove'], ['ontouchcancel', 'onTouchCancel']]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_256_err){if (!$p['isinstance']($pyjs_dbg_256_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_256_err);}throw $pyjs_dbg_256_err;
}})();
			$pyjs['track']['lineno']=732;
			$pyjs['track']['lineno']=732;
			var $pyjs__ret = res;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getEventMap'] = $method;
		$pyjs['track']['lineno']=735;
		$method = $pyjs__bind_method2('sortChildren', function(key) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
			}
			var tmpl,c,$iter22_array,$iter22_nextval,$iter22_idx,$iter22_type,$pyjs__trackstack_size_1,$iter22_iter;
			$pyjs['track']={'module':'html5.widget', 'lineno':735};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.widget';
			$pyjs['track']['lineno']=735;
			$pyjs['track']['lineno']=741;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(self['_children'], 'sort', null, null, [{'key':key}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_257_err){if (!$p['isinstance']($pyjs_dbg_257_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_257_err);}throw $pyjs_dbg_257_err;
}})();
			$pyjs['track']['lineno']=742;
			tmpl = $p['__getslice']($p['getattr'](self, '_children'), 0, null);
			$pyjs['track']['lineno']=743;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return tmpl['reverse']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_258_err){if (!$p['isinstance']($pyjs_dbg_258_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_258_err);}throw $pyjs_dbg_258_err;
}})();
			$pyjs['track']['lineno']=744;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter22_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return tmpl;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_259_err){if (!$p['isinstance']($pyjs_dbg_259_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_259_err);}throw $pyjs_dbg_259_err;
}})();
			$iter22_nextval=$p['__iter_prepare']($iter22_iter,false);
			while (typeof($p['__wrapped_next']($iter22_nextval)['$nextval']) != 'undefined') {
				c = $iter22_nextval['$nextval'];
				$pyjs['track']['lineno']=745;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['element']['removeChild']($p['getattr'](c, 'element'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_260_err){if (!$p['isinstance']($pyjs_dbg_260_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_260_err);}throw $pyjs_dbg_260_err;
}})();
				$pyjs['track']['lineno']=746;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['element']['insertBefore']($p['getattr'](c, 'element'), (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['element']['children']['item'](0);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_261_err){if (!$p['isinstance']($pyjs_dbg_261_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_261_err);}throw $pyjs_dbg_261_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_262_err){if (!$p['isinstance']($pyjs_dbg_262_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_262_err);}throw $pyjs_dbg_262_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='html5.widget';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['key']]);
		$cls_definition['sortChildren'] = $method;
		$pyjs['track']['lineno']=101;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Widget', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end html5.widget */


/* end module: html5.widget */


/*
PYJS_DEPS: ['html5.document', 'html5', 'html5.textnode']
*/
