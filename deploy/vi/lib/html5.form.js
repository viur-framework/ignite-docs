/* start module: html5.form */
$pyjs['loaded_modules']['html5.form'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['html5.form']['__was_initialized__']) return $pyjs['loaded_modules']['html5.form'];
	if(typeof $pyjs['loaded_modules']['html5'] == 'undefined' || !$pyjs['loaded_modules']['html5']['__was_initialized__']) $p['___import___']('html5', null);
	var $m = $pyjs['loaded_modules']['html5.form'];
	$m['__repr__'] = function() { return '<module: html5.form>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'html5.form';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['html5']['form'] = $pyjs['loaded_modules']['html5.form'];
	$m.__track_lines__[1] = 'html5.form.py, line 1:\n    from html5.widget import Widget';
	$m.__track_lines__[2] = 'html5.form.py, line 2:\n    from html5.html5Attr._label import _Label';
	$m.__track_lines__[3] = 'html5.form.py, line 3:\n    from html5.html5Attr.media import Type,Dimensions';
	$m.__track_lines__[4] = 'html5.form.py, line 4:\n    from html5.html5Attr.form import _Form,Alt,Autofocus,Disabled,Name,Checked,Indeterminate,Value,Formhead,Autocomplete,Inputs,Required,Multiple,Size,__For';
	$m.__track_lines__[5] = 'html5.form.py, line 5:\n    from html5.html5Attr.href import Target';
	$m.__track_lines__[6] = 'html5.form.py, line 6:\n    from html5.html5Attr.src import Src';
	$m.__track_lines__[7] = 'html5.form.py, line 7:\n    from html5.textnode import TextNode';
	$m.__track_lines__[10] = 'html5.form.py, line 10:\n    class Button( Disabled,Widget,Type,_Form,Autofocus,Name,Value,Formhead):';
	$m.__track_lines__[11] = 'html5.form.py, line 11:\n    _baseClass = "button"';
	$m.__track_lines__[13] = 'html5.form.py, line 13:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[14] = 'html5.form.py, line 14:\n    Disabled.__init__( self, *args, **kwargs )';
	$m.__track_lines__[15] = 'html5.form.py, line 15:\n    Widget.__init__( self, *args, **kwargs )';
	$m.__track_lines__[16] = 'html5.form.py, line 16:\n    Type.__init__( self, *args, **kwargs )';
	$m.__track_lines__[17] = 'html5.form.py, line 17:\n    _Form.__init__( self, *args, **kwargs )';
	$m.__track_lines__[18] = 'html5.form.py, line 18:\n    Autofocus.__init__( self, *args, **kwargs )';
	$m.__track_lines__[19] = 'html5.form.py, line 19:\n    Name.__init__( self, *args, **kwargs )';
	$m.__track_lines__[20] = 'html5.form.py, line 20:\n    Value.__init__( self, *args, **kwargs )';
	$m.__track_lines__[21] = 'html5.form.py, line 21:\n    Formhead.__init__( self, *args, **kwargs )';
	$m.__track_lines__[24] = 'html5.form.py, line 24:\n    class Fieldset(Disabled,Widget,_Form,Name):';
	$m.__track_lines__[25] = 'html5.form.py, line 25:\n    _baseClass = "fieldset"';
	$m.__track_lines__[27] = 'html5.form.py, line 27:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[28] = 'html5.form.py, line 28:\n    Disabled.__init__( self, *args, **kwargs )';
	$m.__track_lines__[29] = 'html5.form.py, line 29:\n    Widget.__init__( self, *args, **kwargs )';
	$m.__track_lines__[30] = 'html5.form.py, line 30:\n    _Form.__init__( self, *args, **kwargs )';
	$m.__track_lines__[31] = 'html5.form.py, line 31:\n    Name.__init__( self, *args, **kwargs )';
	$m.__track_lines__[33] = 'html5.form.py, line 33:\n    class Form(Disabled,Widget,Name,Target,Autocomplete):';
	$m.__track_lines__[34] = 'html5.form.py, line 34:\n    _baseClass = "form"';
	$m.__track_lines__[36] = 'html5.form.py, line 36:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[37] = 'html5.form.py, line 37:\n    Disabled.__init__( self, *args, **kwargs )';
	$m.__track_lines__[38] = 'html5.form.py, line 38:\n    Widget.__init__( self, *args, **kwargs )';
	$m.__track_lines__[39] = 'html5.form.py, line 39:\n    Name.__init__( self, *args, **kwargs )';
	$m.__track_lines__[40] = 'html5.form.py, line 40:\n    Target.__init__( self, *args, **kwargs )';
	$m.__track_lines__[41] = 'html5.form.py, line 41:\n    Autocomplete.__init__( self, *args, **kwargs )';
	$m.__track_lines__[43] = 'html5.form.py, line 43:\n    def _getNovalidate(self):';
	$m.__track_lines__[44] = 'html5.form.py, line 44:\n    return( True if self.element.hasAttribute("novalidate") else False )';
	$m.__track_lines__[45] = 'html5.form.py, line 45:\n    def _setNovalidate(self,val):';
	$m.__track_lines__[46] = 'html5.form.py, line 46:\n    if val==True:';
	$m.__track_lines__[47] = 'html5.form.py, line 47:\n    self.element.setAttribute("novalidate","")';
	$m.__track_lines__[49] = 'html5.form.py, line 49:\n    self.element.removeAttribute("novalidate")';
	$m.__track_lines__[51] = 'html5.form.py, line 51:\n    def _getAction(self):';
	$m.__track_lines__[52] = 'html5.form.py, line 52:\n    return self.element.action';
	$m.__track_lines__[53] = 'html5.form.py, line 53:\n    def _setAction(self,val):';
	$m.__track_lines__[54] = 'html5.form.py, line 54:\n    self.element.action=val';
	$m.__track_lines__[56] = 'html5.form.py, line 56:\n    def _getMethod(self):';
	$m.__track_lines__[57] = 'html5.form.py, line 57:\n    return self.element.method';
	$m.__track_lines__[58] = 'html5.form.py, line 58:\n    def _setMethod(self,val):';
	$m.__track_lines__[59] = 'html5.form.py, line 59:\n    self.element.method=val';
	$m.__track_lines__[61] = 'html5.form.py, line 61:\n    def _getEnctype(self):';
	$m.__track_lines__[62] = 'html5.form.py, line 62:\n    return self.element.enctype';
	$m.__track_lines__[63] = 'html5.form.py, line 63:\n    def _setEnctype(self,val):';
	$m.__track_lines__[64] = 'html5.form.py, line 64:\n    self.element.enctype=val';
	$m.__track_lines__[66] = 'html5.form.py, line 66:\n    def _getAcceptCharset(self):';
	$m.__track_lines__[67] = 'html5.form.py, line 67:\n    return getattr(self.element,"accept-charset")';
	$m.__track_lines__[68] = 'html5.form.py, line 68:\n    def _setAcceptCharset(self,val):';
	$m.__track_lines__[69] = 'html5.form.py, line 69:\n    self.element.setAttribute("accept-charset",val)';
	$m.__track_lines__[71] = 'html5.form.py, line 71:\n    class Input(Disabled,Widget,Type,_Form,Alt,Autofocus,Checked,Indeterminate,Name,Dimensions,Value,Formhead,Autocomplete,Inputs,Multiple,Size,Src):';
	$m.__track_lines__[72] = 'html5.form.py, line 72:\n    _baseClass = "input"';
	$m.__track_lines__[74] = 'html5.form.py, line 74:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[75] = 'html5.form.py, line 75:\n    Disabled.__init__(self, *args, **kwargs)';
	$m.__track_lines__[76] = 'html5.form.py, line 76:\n    Widget.__init__(self, *args, **kwargs)';
	$m.__track_lines__[77] = 'html5.form.py, line 77:\n    Type.__init__(self, *args, **kwargs)';
	$m.__track_lines__[78] = 'html5.form.py, line 78:\n    _Form.__init__(self, *args, **kwargs)';
	$m.__track_lines__[79] = 'html5.form.py, line 79:\n    Alt.__init__(self, *args, **kwargs)';
	$m.__track_lines__[80] = 'html5.form.py, line 80:\n    Autofocus.__init__(self, *args, **kwargs)';
	$m.__track_lines__[81] = 'html5.form.py, line 81:\n    Checked.__init__(self, *args, **kwargs)';
	$m.__track_lines__[82] = 'html5.form.py, line 82:\n    Indeterminate.__init__(self, *args, **kwargs)';
	$m.__track_lines__[83] = 'html5.form.py, line 83:\n    Name.__init__(self, *args, **kwargs)';
	$m.__track_lines__[84] = 'html5.form.py, line 84:\n    Dimensions.__init__(self, *args, **kwargs)';
	$m.__track_lines__[85] = 'html5.form.py, line 85:\n    Value.__init__(self, *args, **kwargs)';
	$m.__track_lines__[86] = 'html5.form.py, line 86:\n    Formhead.__init__(self, *args, **kwargs)';
	$m.__track_lines__[87] = 'html5.form.py, line 87:\n    Autocomplete.__init__(self, *args, **kwargs)';
	$m.__track_lines__[88] = 'html5.form.py, line 88:\n    Inputs.__init__(self, *args, **kwargs)';
	$m.__track_lines__[89] = 'html5.form.py, line 89:\n    Multiple.__init__(self, *args, **kwargs)';
	$m.__track_lines__[90] = 'html5.form.py, line 90:\n    Size.__init__(self, *args, **kwargs)';
	$m.__track_lines__[91] = 'html5.form.py, line 91:\n    Src.__init__(self, *args, **kwargs)';
	$m.__track_lines__[94] = 'html5.form.py, line 94:\n    def _getAccept(self):';
	$m.__track_lines__[95] = 'html5.form.py, line 95:\n    return self.element.accept';
	$m.__track_lines__[96] = 'html5.form.py, line 96:\n    def _setAccept(self,val):';
	$m.__track_lines__[97] = 'html5.form.py, line 97:\n    self.element.accept=val';
	$m.__track_lines__[99] = 'html5.form.py, line 99:\n    def _getList(self):';
	$m.__track_lines__[100] = 'html5.form.py, line 100:\n    return self.element.list';
	$m.__track_lines__[101] = 'html5.form.py, line 101:\n    def _setList(self,val):';
	$m.__track_lines__[102] = 'html5.form.py, line 102:\n    self.element.list=val';
	$m.__track_lines__[104] = 'html5.form.py, line 104:\n    def _getMax(self):';
	$m.__track_lines__[105] = 'html5.form.py, line 105:\n    return self.element.max';
	$m.__track_lines__[106] = 'html5.form.py, line 106:\n    def _setMax(self,val):';
	$m.__track_lines__[107] = 'html5.form.py, line 107:\n    self.element.max=val';
	$m.__track_lines__[109] = 'html5.form.py, line 109:\n    def _getMin(self):';
	$m.__track_lines__[110] = 'html5.form.py, line 110:\n    return self.element.min';
	$m.__track_lines__[111] = 'html5.form.py, line 111:\n    def _setMin(self,val):';
	$m.__track_lines__[112] = 'html5.form.py, line 112:\n    self.element.min=val';
	$m.__track_lines__[114] = 'html5.form.py, line 114:\n    def _getPattern(self):';
	$m.__track_lines__[115] = 'html5.form.py, line 115:\n    return self.element.pattern';
	$m.__track_lines__[116] = 'html5.form.py, line 116:\n    def _setPattern(self,val):';
	$m.__track_lines__[117] = 'html5.form.py, line 117:\n    self.element.pattern=val';
	$m.__track_lines__[119] = 'html5.form.py, line 119:\n    def _getStep(self):';
	$m.__track_lines__[120] = 'html5.form.py, line 120:\n    return self.element.step';
	$m.__track_lines__[121] = 'html5.form.py, line 121:\n    def _setStep(self,val):';
	$m.__track_lines__[122] = 'html5.form.py, line 122:\n    self.element.step=val';
	$m.__track_lines__[124] = 'html5.form.py, line 124:\n    class Label( Widget,_Form,__For ):';
	$m.__track_lines__[125] = 'html5.form.py, line 125:\n    _baseClass = "label"';
	$m.__track_lines__[126] = 'html5.form.py, line 126:\n    autoIdCounter = 0';
	$m.__track_lines__[127] = 'html5.form.py, line 127:\n    def __init__(self, txt="", forElem=None, *args, **kwargs):';
	$m.__track_lines__[128] = 'html5.form.py, line 128:\n    super(Label,self).__init__( *args, **kwargs )';
	$m.__track_lines__[129] = 'html5.form.py, line 129:\n    if txt:';
	$m.__track_lines__[130] = 'html5.form.py, line 130:\n    self.appendChild(TextNode(txt))';
	$m.__track_lines__[131] = 'html5.form.py, line 131:\n    if forElem:';
	$m.__track_lines__[132] = 'html5.form.py, line 132:\n    if not forElem["id"]:';
	$m.__track_lines__[133] = 'html5.form.py, line 133:\n    idx = Label.autoIdCounter';
	$m.__track_lines__[134] = 'html5.form.py, line 134:\n    Label.autoIdCounter += 1';
	$m.__track_lines__[135] = 'html5.form.py, line 135:\n    forElem["id"] = "label-autoid-for-%s" % idx';
	$m.__track_lines__[136] = 'html5.form.py, line 136:\n    self["for"] = forElem["id"]';
	$m.__track_lines__[139] = 'html5.form.py, line 139:\n    class Optgroup( Disabled,Widget,_Label ):';
	$m.__track_lines__[140] = 'html5.form.py, line 140:\n    _baseClass = "optgroup"';
	$m.__track_lines__[142] = 'html5.form.py, line 142:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[143] = 'html5.form.py, line 143:\n    Disabled.__init__( self, *args, **kwargs )';
	$m.__track_lines__[144] = 'html5.form.py, line 144:\n    Widget.__init__( self, *args, **kwargs )';
	$m.__track_lines__[145] = 'html5.form.py, line 145:\n    _Label.__init__( self, *args, **kwargs )';
	$m.__track_lines__[148] = 'html5.form.py, line 148:\n    class Option( Disabled,Widget,_Label,Value ):';
	$m.__track_lines__[149] = 'html5.form.py, line 149:\n    _baseClass = "option"';
	$m.__track_lines__[151] = 'html5.form.py, line 151:\n    def __init__(self, txt = "", *args, **kwargs):';
	$m.__track_lines__[152] = 'html5.form.py, line 152:\n    Disabled.__init__( self, *args, **kwargs )';
	$m.__track_lines__[153] = 'html5.form.py, line 153:\n    Widget.__init__( self, *args, **kwargs )';
	$m.__track_lines__[154] = 'html5.form.py, line 154:\n    _Label.__init__( self, *args, **kwargs )';
	$m.__track_lines__[155] = 'html5.form.py, line 155:\n    Value.__init__( self, *args, **kwargs )';
	$m.__track_lines__[157] = 'html5.form.py, line 157:\n    if txt:';
	$m.__track_lines__[158] = 'html5.form.py, line 158:\n    self.appendChild(TextNode(txt))';
	$m.__track_lines__[160] = 'html5.form.py, line 160:\n    def _getSelected(self):';
	$m.__track_lines__[161] = 'html5.form.py, line 161:\n    return( True if self.element.selected else False )';
	$m.__track_lines__[163] = 'html5.form.py, line 163:\n    def _setSelected(self,val):';
	$m.__track_lines__[164] = 'html5.form.py, line 164:\n    if val==True:';
	$m.__track_lines__[165] = 'html5.form.py, line 165:\n    self.element.selected=True';
	$m.__track_lines__[167] = 'html5.form.py, line 167:\n    self.element.selected=False';
	$m.__track_lines__[169] = 'html5.form.py, line 169:\n    class Output( Widget,_Form,Name,__For ):';
	$m.__track_lines__[170] = 'html5.form.py, line 170:\n    _baseClass = "output"';
	$m.__track_lines__[172] = 'html5.form.py, line 172:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[173] = 'html5.form.py, line 173:\n    super(Output,self).__init__( *args, **kwargs )';
	$m.__track_lines__[177] = 'html5.form.py, line 177:\n    class Select( Disabled,Widget,_Form,Autofocus,Name,Required,Multiple,Size ):';
	$m.__track_lines__[178] = 'html5.form.py, line 178:\n    _baseClass = "select"';
	$m.__track_lines__[180] = 'html5.form.py, line 180:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[181] = 'html5.form.py, line 181:\n    Disabled.__init__( self, *args, **kwargs )';
	$m.__track_lines__[182] = 'html5.form.py, line 182:\n    Widget.__init__( self, *args, **kwargs )';
	$m.__track_lines__[183] = 'html5.form.py, line 183:\n    _Form.__init__( self, *args, **kwargs )';
	$m.__track_lines__[184] = 'html5.form.py, line 184:\n    Autofocus.__init__( self, *args, **kwargs )';
	$m.__track_lines__[185] = 'html5.form.py, line 185:\n    Name.__init__( self, *args, **kwargs )';
	$m.__track_lines__[186] = 'html5.form.py, line 186:\n    Required.__init__( self, *args, **kwargs )';
	$m.__track_lines__[187] = 'html5.form.py, line 187:\n    Multiple.__init__( self, *args, **kwargs )';
	$m.__track_lines__[188] = 'html5.form.py, line 188:\n    Size.__init__( self, *args, **kwargs )';
	$m.__track_lines__[190] = 'html5.form.py, line 190:\n    def _getSelectedIndex(self):';
	$m.__track_lines__[191] = 'html5.form.py, line 191:\n    return( self.element.selectedIndex )';
	$m.__track_lines__[193] = 'html5.form.py, line 193:\n    def _getOptions(self):';
	$m.__track_lines__[194] = 'html5.form.py, line 194:\n    return( self.element.options )';
	$m.__track_lines__[197] = 'html5.form.py, line 197:\n    class Textarea( Disabled, Widget,_Form ,Autofocus,Name,Inputs,Value):';
	$m.__track_lines__[198] = 'html5.form.py, line 198:\n    _baseClass = "textarea"';
	$m.__track_lines__[200] = 'html5.form.py, line 200:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[201] = 'html5.form.py, line 201:\n    Disabled.__init__(self, *args, **kwargs )';
	$m.__track_lines__[202] = 'html5.form.py, line 202:\n    Widget.__init__(self, *args, **kwargs )';
	$m.__track_lines__[203] = 'html5.form.py, line 203:\n    _Form.__init__(self, *args, **kwargs )';
	$m.__track_lines__[204] = 'html5.form.py, line 204:\n    Autofocus.__init__(self, *args, **kwargs )';
	$m.__track_lines__[205] = 'html5.form.py, line 205:\n    Name.__init__(self, *args, **kwargs )';
	$m.__track_lines__[206] = 'html5.form.py, line 206:\n    Inputs.__init__(self, *args, **kwargs )';
	$m.__track_lines__[207] = 'html5.form.py, line 207:\n    Value.__init__(self, *args, **kwargs )';
	$m.__track_lines__[211] = 'html5.form.py, line 211:\n    def _getCols(self):';
	$m.__track_lines__[212] = 'html5.form.py, line 212:\n    return self.element.cols';
	$m.__track_lines__[213] = 'html5.form.py, line 213:\n    def _setCols(self,val):';
	$m.__track_lines__[214] = 'html5.form.py, line 214:\n    self.element.cols=val';
	$m.__track_lines__[216] = 'html5.form.py, line 216:\n    def _getRows(self):';
	$m.__track_lines__[217] = 'html5.form.py, line 217:\n    return self.element.rows';
	$m.__track_lines__[218] = 'html5.form.py, line 218:\n    def _setRows(self,val):';
	$m.__track_lines__[219] = 'html5.form.py, line 219:\n    self.element.rows=val';
	$m.__track_lines__[221] = 'html5.form.py, line 221:\n    def _getWrap(self):';
	$m.__track_lines__[222] = 'html5.form.py, line 222:\n    return self.element.wrap';
	$m.__track_lines__[223] = 'html5.form.py, line 223:\n    def _setWrap(self,val):';
	$m.__track_lines__[224] = 'html5.form.py, line 224:\n    self.element.wrap=val';


	$pyjs['track']['module']='html5.form';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=1;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Widget'] = $p['___import___']('html5.widget.Widget', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=2;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['_Label'] = $p['___import___']('html5.html5Attr._label._Label', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=3;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Type'] = $p['___import___']('html5.html5Attr.media.Type', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Dimensions'] = $p['___import___']('html5.html5Attr.media.Dimensions', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=4;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['_Form'] = $p['___import___']('html5.html5Attr.form._Form', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Alt'] = $p['___import___']('html5.html5Attr.form.Alt', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Autofocus'] = $p['___import___']('html5.html5Attr.form.Autofocus', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Disabled'] = $p['___import___']('html5.html5Attr.form.Disabled', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Name'] = $p['___import___']('html5.html5Attr.form.Name', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Checked'] = $p['___import___']('html5.html5Attr.form.Checked', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Indeterminate'] = $p['___import___']('html5.html5Attr.form.Indeterminate', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Value'] = $p['___import___']('html5.html5Attr.form.Value', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Formhead'] = $p['___import___']('html5.html5Attr.form.Formhead', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Autocomplete'] = $p['___import___']('html5.html5Attr.form.Autocomplete', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Inputs'] = $p['___import___']('html5.html5Attr.form.Inputs', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Required'] = $p['___import___']('html5.html5Attr.form.Required', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Multiple'] = $p['___import___']('html5.html5Attr.form.Multiple', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Size'] = $p['___import___']('html5.html5Attr.form.Size', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['__For'] = $p['___import___']('html5.html5Attr.form.__For', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=5;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Target'] = $p['___import___']('html5.html5Attr.href.Target', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=6;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Src'] = $p['___import___']('html5.html5Attr.src.Src', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=7;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['TextNode'] = $p['___import___']('html5.textnode.TextNode', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=10;
	$m['Button'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.form';
		$pyjs['track']['lineno']=11;
		$cls_definition['_baseClass'] = 'button';
		$pyjs['track']['lineno']=13;
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

			$pyjs['track']={'module':'html5.form', 'lineno':13};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.form';
			$pyjs['track']['lineno']=13;
			$pyjs['track']['lineno']=14;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['Disabled'], '__init__', args, kwargs, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})();
			$pyjs['track']['lineno']=15;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['Widget'], '__init__', args, kwargs, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs['track']['lineno']=16;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['Type'], '__init__', args, kwargs, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			$pyjs['track']['lineno']=17;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['_Form'], '__init__', args, kwargs, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
			$pyjs['track']['lineno']=18;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['Autofocus'], '__init__', args, kwargs, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
			$pyjs['track']['lineno']=19;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['Name'], '__init__', args, kwargs, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
			$pyjs['track']['lineno']=20;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['Value'], '__init__', args, kwargs, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
			$pyjs['track']['lineno']=21;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['Formhead'], '__init__', args, kwargs, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=10;
		var $bases = new Array($m['Disabled'],$m['Widget'],$m['Type'],$m['_Form'],$m['Autofocus'],$m['Name'],$m['Value'],$m['Formhead']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Button', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=24;
	$m['Fieldset'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.form';
		$pyjs['track']['lineno']=25;
		$cls_definition['_baseClass'] = 'fieldset';
		$pyjs['track']['lineno']=27;
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

			$pyjs['track']={'module':'html5.form', 'lineno':27};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.form';
			$pyjs['track']['lineno']=27;
			$pyjs['track']['lineno']=28;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['Disabled'], '__init__', args, kwargs, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
			$pyjs['track']['lineno']=29;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['Widget'], '__init__', args, kwargs, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
			$pyjs['track']['lineno']=30;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['_Form'], '__init__', args, kwargs, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
			$pyjs['track']['lineno']=31;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['Name'], '__init__', args, kwargs, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=24;
		var $bases = new Array($m['Disabled'],$m['Widget'],$m['_Form'],$m['Name']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Fieldset', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=33;
	$m['Form'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.form';
		$pyjs['track']['lineno']=34;
		$cls_definition['_baseClass'] = 'form';
		$pyjs['track']['lineno']=36;
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

			$pyjs['track']={'module':'html5.form', 'lineno':36};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.form';
			$pyjs['track']['lineno']=36;
			$pyjs['track']['lineno']=37;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['Disabled'], '__init__', args, kwargs, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
			$pyjs['track']['lineno']=38;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['Widget'], '__init__', args, kwargs, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
			$pyjs['track']['lineno']=39;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['Name'], '__init__', args, kwargs, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
			$pyjs['track']['lineno']=40;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['Target'], '__init__', args, kwargs, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
			$pyjs['track']['lineno']=41;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['Autocomplete'], '__init__', args, kwargs, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=43;
		$method = $pyjs__bind_method2('_getNovalidate', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.form', 'lineno':43};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.form';
			$pyjs['track']['lineno']=43;
			$pyjs['track']['lineno']=44;
			$pyjs['track']['lineno']=44;
			var $pyjs__ret = ($p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['hasAttribute']('novalidate');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})())? (true) : (false));
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getNovalidate'] = $method;
		$pyjs['track']['lineno']=45;
		$method = $pyjs__bind_method2('_setNovalidate', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.form', 'lineno':45};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.form';
			$pyjs['track']['lineno']=45;
			$pyjs['track']['lineno']=46;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](val, true));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})()) {
				$pyjs['track']['lineno']=47;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['element']['setAttribute']('novalidate', '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=49;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['element']['removeAttribute']('novalidate');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setNovalidate'] = $method;
		$pyjs['track']['lineno']=51;
		$method = $pyjs__bind_method2('_getAction', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.form', 'lineno':51};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.form';
			$pyjs['track']['lineno']=51;
			$pyjs['track']['lineno']=52;
			$pyjs['track']['lineno']=52;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'action');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getAction'] = $method;
		$pyjs['track']['lineno']=53;
		$method = $pyjs__bind_method2('_setAction', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.form', 'lineno':53};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.form';
			$pyjs['track']['lineno']=53;
			$pyjs['track']['lineno']=54;
			$p['getattr'](self, 'element')['action'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setAction'] = $method;
		$pyjs['track']['lineno']=56;
		$method = $pyjs__bind_method2('_getMethod', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.form', 'lineno':56};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.form';
			$pyjs['track']['lineno']=56;
			$pyjs['track']['lineno']=57;
			$pyjs['track']['lineno']=57;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'method');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getMethod'] = $method;
		$pyjs['track']['lineno']=58;
		$method = $pyjs__bind_method2('_setMethod', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.form', 'lineno':58};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.form';
			$pyjs['track']['lineno']=58;
			$pyjs['track']['lineno']=59;
			$p['getattr'](self, 'element')['method'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setMethod'] = $method;
		$pyjs['track']['lineno']=61;
		$method = $pyjs__bind_method2('_getEnctype', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.form', 'lineno':61};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.form';
			$pyjs['track']['lineno']=61;
			$pyjs['track']['lineno']=62;
			$pyjs['track']['lineno']=62;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'enctype');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getEnctype'] = $method;
		$pyjs['track']['lineno']=63;
		$method = $pyjs__bind_method2('_setEnctype', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.form', 'lineno':63};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.form';
			$pyjs['track']['lineno']=63;
			$pyjs['track']['lineno']=64;
			$p['getattr'](self, 'element')['enctype'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setEnctype'] = $method;
		$pyjs['track']['lineno']=66;
		$method = $pyjs__bind_method2('_getAcceptCharset', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.form', 'lineno':66};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.form';
			$pyjs['track']['lineno']=66;
			$pyjs['track']['lineno']=67;
			$pyjs['track']['lineno']=67;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr']($p['getattr'](self, 'element'), 'accept-charset');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getAcceptCharset'] = $method;
		$pyjs['track']['lineno']=68;
		$method = $pyjs__bind_method2('_setAcceptCharset', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.form', 'lineno':68};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.form';
			$pyjs['track']['lineno']=68;
			$pyjs['track']['lineno']=69;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['setAttribute']('accept-charset', val);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setAcceptCharset'] = $method;
		$pyjs['track']['lineno']=33;
		var $bases = new Array($m['Disabled'],$m['Widget'],$m['Name'],$m['Target'],$m['Autocomplete']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Form', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=71;
	$m['Input'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.form';
		$pyjs['track']['lineno']=72;
		$cls_definition['_baseClass'] = 'input';
		$pyjs['track']['lineno']=74;
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

			$pyjs['track']={'module':'html5.form', 'lineno':74};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.form';
			$pyjs['track']['lineno']=74;
			$pyjs['track']['lineno']=75;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['Disabled'], '__init__', args, kwargs, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
			$pyjs['track']['lineno']=76;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['Widget'], '__init__', args, kwargs, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
			$pyjs['track']['lineno']=77;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['Type'], '__init__', args, kwargs, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
			$pyjs['track']['lineno']=78;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['_Form'], '__init__', args, kwargs, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
			$pyjs['track']['lineno']=79;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['Alt'], '__init__', args, kwargs, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})();
			$pyjs['track']['lineno']=80;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['Autofocus'], '__init__', args, kwargs, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})();
			$pyjs['track']['lineno']=81;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['Checked'], '__init__', args, kwargs, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
			$pyjs['track']['lineno']=82;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['Indeterminate'], '__init__', args, kwargs, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
			$pyjs['track']['lineno']=83;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['Name'], '__init__', args, kwargs, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
			$pyjs['track']['lineno']=84;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['Dimensions'], '__init__', args, kwargs, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
			$pyjs['track']['lineno']=85;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['Value'], '__init__', args, kwargs, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})();
			$pyjs['track']['lineno']=86;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['Formhead'], '__init__', args, kwargs, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})();
			$pyjs['track']['lineno']=87;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['Autocomplete'], '__init__', args, kwargs, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})();
			$pyjs['track']['lineno']=88;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['Inputs'], '__init__', args, kwargs, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})();
			$pyjs['track']['lineno']=89;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['Multiple'], '__init__', args, kwargs, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})();
			$pyjs['track']['lineno']=90;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['Size'], '__init__', args, kwargs, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})();
			$pyjs['track']['lineno']=91;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['Src'], '__init__', args, kwargs, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=94;
		$method = $pyjs__bind_method2('_getAccept', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.form', 'lineno':94};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.form';
			$pyjs['track']['lineno']=94;
			$pyjs['track']['lineno']=95;
			$pyjs['track']['lineno']=95;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'accept');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getAccept'] = $method;
		$pyjs['track']['lineno']=96;
		$method = $pyjs__bind_method2('_setAccept', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.form', 'lineno':96};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.form';
			$pyjs['track']['lineno']=96;
			$pyjs['track']['lineno']=97;
			$p['getattr'](self, 'element')['accept'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setAccept'] = $method;
		$pyjs['track']['lineno']=99;
		$method = $pyjs__bind_method2('_getList', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.form', 'lineno':99};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.form';
			$pyjs['track']['lineno']=99;
			$pyjs['track']['lineno']=100;
			$pyjs['track']['lineno']=100;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'list');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getList'] = $method;
		$pyjs['track']['lineno']=101;
		$method = $pyjs__bind_method2('_setList', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.form', 'lineno':101};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.form';
			$pyjs['track']['lineno']=101;
			$pyjs['track']['lineno']=102;
			$p['getattr'](self, 'element')['list'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setList'] = $method;
		$pyjs['track']['lineno']=104;
		$method = $pyjs__bind_method2('_getMax', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.form', 'lineno':104};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.form';
			$pyjs['track']['lineno']=104;
			$pyjs['track']['lineno']=105;
			$pyjs['track']['lineno']=105;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'max');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getMax'] = $method;
		$pyjs['track']['lineno']=106;
		$method = $pyjs__bind_method2('_setMax', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.form', 'lineno':106};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.form';
			$pyjs['track']['lineno']=106;
			$pyjs['track']['lineno']=107;
			$p['getattr'](self, 'element')['max'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setMax'] = $method;
		$pyjs['track']['lineno']=109;
		$method = $pyjs__bind_method2('_getMin', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.form', 'lineno':109};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.form';
			$pyjs['track']['lineno']=109;
			$pyjs['track']['lineno']=110;
			$pyjs['track']['lineno']=110;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'min');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getMin'] = $method;
		$pyjs['track']['lineno']=111;
		$method = $pyjs__bind_method2('_setMin', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.form', 'lineno':111};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.form';
			$pyjs['track']['lineno']=111;
			$pyjs['track']['lineno']=112;
			$p['getattr'](self, 'element')['min'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setMin'] = $method;
		$pyjs['track']['lineno']=114;
		$method = $pyjs__bind_method2('_getPattern', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.form', 'lineno':114};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.form';
			$pyjs['track']['lineno']=114;
			$pyjs['track']['lineno']=115;
			$pyjs['track']['lineno']=115;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'pattern');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getPattern'] = $method;
		$pyjs['track']['lineno']=116;
		$method = $pyjs__bind_method2('_setPattern', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.form', 'lineno':116};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.form';
			$pyjs['track']['lineno']=116;
			$pyjs['track']['lineno']=117;
			$p['getattr'](self, 'element')['pattern'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setPattern'] = $method;
		$pyjs['track']['lineno']=119;
		$method = $pyjs__bind_method2('_getStep', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.form', 'lineno':119};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.form';
			$pyjs['track']['lineno']=119;
			$pyjs['track']['lineno']=120;
			$pyjs['track']['lineno']=120;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'step');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getStep'] = $method;
		$pyjs['track']['lineno']=121;
		$method = $pyjs__bind_method2('_setStep', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.form', 'lineno':121};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.form';
			$pyjs['track']['lineno']=121;
			$pyjs['track']['lineno']=122;
			$p['getattr'](self, 'element')['step'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setStep'] = $method;
		$pyjs['track']['lineno']=71;
		var $bases = new Array($m['Disabled'],$m['Widget'],$m['Type'],$m['_Form'],$m['Alt'],$m['Autofocus'],$m['Checked'],$m['Indeterminate'],$m['Name'],$m['Dimensions'],$m['Value'],$m['Formhead'],$m['Autocomplete'],$m['Inputs'],$m['Multiple'],$m['Size'],$m['Src']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Input', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=124;
	$m['Label'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.form';
		$pyjs['track']['lineno']=125;
		$cls_definition['_baseClass'] = 'label';
		$pyjs['track']['lineno']=126;
		$cls_definition['autoIdCounter'] = 0;
		$pyjs['track']['lineno']=127;
		$method = $pyjs__bind_method2('__init__', function(txt, forElem) {
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
				txt = arguments[1];
				forElem = arguments[2];
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
				if (typeof forElem != 'undefined') {
					if (forElem !== null && typeof forElem['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = forElem;
						forElem = arguments[3];
					}
				} else 				if (typeof txt != 'undefined') {
					if (txt !== null && typeof txt['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = txt;
						txt = arguments[3];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[3];
					}
				} else {
				}
			}
			if (typeof txt == 'undefined') txt=arguments['callee']['__args__'][3][1];
			if (typeof forElem == 'undefined') forElem=arguments['callee']['__args__'][4][1];
			var idx,$add2,$add1;
			$pyjs['track']={'module':'html5.form', 'lineno':127};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.form';
			$pyjs['track']['lineno']=127;
			$pyjs['track']['lineno']=128;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['Label'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})();
			$pyjs['track']['lineno']=129;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](txt);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})()) {
				$pyjs['track']['lineno']=130;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['TextNode'](txt);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})();
			}
			$pyjs['track']['lineno']=131;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](forElem);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})()) {
				$pyjs['track']['lineno']=132;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool'](forElem['__getitem__']('id')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})()) {
					$pyjs['track']['lineno']=133;
					idx = $p['getattr']($m['Label'], 'autoIdCounter');
					$pyjs['track']['lineno']=134;
					$m['Label']['autoIdCounter'] = $p['__op_add']($add1=$p['getattr']($m['Label'], 'autoIdCounter'),$add2=1);
					$pyjs['track']['lineno']=135;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return forElem['__setitem__']('id', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['sprintf']('label-autoid-for-%s', idx);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})();
				}
				$pyjs['track']['lineno']=136;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__setitem__']('for', forElem['__getitem__']('id'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['txt', ''],['forElem', null]]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=124;
		var $bases = new Array($m['Widget'],$m['_Form'],$m['__For']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Label', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=139;
	$m['Optgroup'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.form';
		$pyjs['track']['lineno']=140;
		$cls_definition['_baseClass'] = 'optgroup';
		$pyjs['track']['lineno']=142;
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

			$pyjs['track']={'module':'html5.form', 'lineno':142};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.form';
			$pyjs['track']['lineno']=142;
			$pyjs['track']['lineno']=143;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['Disabled'], '__init__', args, kwargs, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})();
			$pyjs['track']['lineno']=144;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['Widget'], '__init__', args, kwargs, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})();
			$pyjs['track']['lineno']=145;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['_Label'], '__init__', args, kwargs, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=139;
		var $bases = new Array($m['Disabled'],$m['Widget'],$m['_Label']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Optgroup', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=148;
	$m['Option'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.form';
		$pyjs['track']['lineno']=149;
		$cls_definition['_baseClass'] = 'option';
		$pyjs['track']['lineno']=151;
		$method = $pyjs__bind_method2('__init__', function(txt) {
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
				txt = arguments[1];
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
				if (typeof txt != 'undefined') {
					if (txt !== null && typeof txt['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = txt;
						txt = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}
			if (typeof txt == 'undefined') txt=arguments['callee']['__args__'][3][1];

			$pyjs['track']={'module':'html5.form', 'lineno':151};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.form';
			$pyjs['track']['lineno']=151;
			$pyjs['track']['lineno']=152;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['Disabled'], '__init__', args, kwargs, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})();
			$pyjs['track']['lineno']=153;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['Widget'], '__init__', args, kwargs, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})();
			$pyjs['track']['lineno']=154;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['_Label'], '__init__', args, kwargs, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})();
			$pyjs['track']['lineno']=155;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['Value'], '__init__', args, kwargs, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})();
			$pyjs['track']['lineno']=157;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](txt);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})()) {
				$pyjs['track']['lineno']=158;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['TextNode'](txt);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['txt', '']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=160;
		$method = $pyjs__bind_method2('_getSelected', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.form', 'lineno':160};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.form';
			$pyjs['track']['lineno']=160;
			$pyjs['track']['lineno']=161;
			$pyjs['track']['lineno']=161;
			var $pyjs__ret = ($p['bool']($p['getattr']($p['getattr'](self, 'element'), 'selected'))? (true) : (false));
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getSelected'] = $method;
		$pyjs['track']['lineno']=163;
		$method = $pyjs__bind_method2('_setSelected', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.form', 'lineno':163};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.form';
			$pyjs['track']['lineno']=163;
			$pyjs['track']['lineno']=164;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](val, true));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})()) {
				$pyjs['track']['lineno']=165;
				$p['getattr'](self, 'element')['selected'] = true;
			}
			else {
				$pyjs['track']['lineno']=167;
				$p['getattr'](self, 'element')['selected'] = false;
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setSelected'] = $method;
		$pyjs['track']['lineno']=148;
		var $bases = new Array($m['Disabled'],$m['Widget'],$m['_Label'],$m['Value']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Option', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=169;
	$m['Output'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.form';
		$pyjs['track']['lineno']=170;
		$cls_definition['_baseClass'] = 'output';
		$pyjs['track']['lineno']=172;
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

			$pyjs['track']={'module':'html5.form', 'lineno':172};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.form';
			$pyjs['track']['lineno']=172;
			$pyjs['track']['lineno']=173;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['Output'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=169;
		var $bases = new Array($m['Widget'],$m['_Form'],$m['Name'],$m['__For']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Output', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=177;
	$m['Select'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.form';
		$pyjs['track']['lineno']=178;
		$cls_definition['_baseClass'] = 'select';
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

			$pyjs['track']={'module':'html5.form', 'lineno':180};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.form';
			$pyjs['track']['lineno']=180;
			$pyjs['track']['lineno']=181;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['Disabled'], '__init__', args, kwargs, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})();
			$pyjs['track']['lineno']=182;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['Widget'], '__init__', args, kwargs, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})();
			$pyjs['track']['lineno']=183;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['_Form'], '__init__', args, kwargs, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})();
			$pyjs['track']['lineno']=184;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['Autofocus'], '__init__', args, kwargs, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})();
			$pyjs['track']['lineno']=185;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['Name'], '__init__', args, kwargs, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})();
			$pyjs['track']['lineno']=186;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['Required'], '__init__', args, kwargs, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})();
			$pyjs['track']['lineno']=187;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['Multiple'], '__init__', args, kwargs, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})();
			$pyjs['track']['lineno']=188;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['Size'], '__init__', args, kwargs, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=190;
		$method = $pyjs__bind_method2('_getSelectedIndex', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.form', 'lineno':190};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.form';
			$pyjs['track']['lineno']=190;
			$pyjs['track']['lineno']=191;
			$pyjs['track']['lineno']=191;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'selectedIndex');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getSelectedIndex'] = $method;
		$pyjs['track']['lineno']=193;
		$method = $pyjs__bind_method2('_getOptions', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.form', 'lineno':193};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.form';
			$pyjs['track']['lineno']=193;
			$pyjs['track']['lineno']=194;
			$pyjs['track']['lineno']=194;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'options');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getOptions'] = $method;
		$pyjs['track']['lineno']=177;
		var $bases = new Array($m['Disabled'],$m['Widget'],$m['_Form'],$m['Autofocus'],$m['Name'],$m['Required'],$m['Multiple'],$m['Size']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Select', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=197;
	$m['Textarea'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.form';
		$pyjs['track']['lineno']=198;
		$cls_definition['_baseClass'] = 'textarea';
		$pyjs['track']['lineno']=200;
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

			$pyjs['track']={'module':'html5.form', 'lineno':200};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.form';
			$pyjs['track']['lineno']=200;
			$pyjs['track']['lineno']=201;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['Disabled'], '__init__', args, kwargs, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})();
			$pyjs['track']['lineno']=202;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['Widget'], '__init__', args, kwargs, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})();
			$pyjs['track']['lineno']=203;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['_Form'], '__init__', args, kwargs, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})();
			$pyjs['track']['lineno']=204;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['Autofocus'], '__init__', args, kwargs, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})();
			$pyjs['track']['lineno']=205;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['Name'], '__init__', args, kwargs, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})();
			$pyjs['track']['lineno']=206;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['Inputs'], '__init__', args, kwargs, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})();
			$pyjs['track']['lineno']=207;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['Value'], '__init__', args, kwargs, [{}, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=211;
		$method = $pyjs__bind_method2('_getCols', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.form', 'lineno':211};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.form';
			$pyjs['track']['lineno']=211;
			$pyjs['track']['lineno']=212;
			$pyjs['track']['lineno']=212;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'cols');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getCols'] = $method;
		$pyjs['track']['lineno']=213;
		$method = $pyjs__bind_method2('_setCols', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.form', 'lineno':213};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.form';
			$pyjs['track']['lineno']=213;
			$pyjs['track']['lineno']=214;
			$p['getattr'](self, 'element')['cols'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setCols'] = $method;
		$pyjs['track']['lineno']=216;
		$method = $pyjs__bind_method2('_getRows', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.form', 'lineno':216};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.form';
			$pyjs['track']['lineno']=216;
			$pyjs['track']['lineno']=217;
			$pyjs['track']['lineno']=217;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'rows');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getRows'] = $method;
		$pyjs['track']['lineno']=218;
		$method = $pyjs__bind_method2('_setRows', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.form', 'lineno':218};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.form';
			$pyjs['track']['lineno']=218;
			$pyjs['track']['lineno']=219;
			$p['getattr'](self, 'element')['rows'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setRows'] = $method;
		$pyjs['track']['lineno']=221;
		$method = $pyjs__bind_method2('_getWrap', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.form', 'lineno':221};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.form';
			$pyjs['track']['lineno']=221;
			$pyjs['track']['lineno']=222;
			$pyjs['track']['lineno']=222;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'wrap');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getWrap'] = $method;
		$pyjs['track']['lineno']=223;
		$method = $pyjs__bind_method2('_setWrap', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.form', 'lineno':223};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.form';
			$pyjs['track']['lineno']=223;
			$pyjs['track']['lineno']=224;
			$p['getattr'](self, 'element')['wrap'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setWrap'] = $method;
		$pyjs['track']['lineno']=197;
		var $bases = new Array($m['Disabled'],$m['Widget'],$m['_Form'],$m['Autofocus'],$m['Name'],$m['Inputs'],$m['Value']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Textarea', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end html5.form */


/* end module: html5.form */


/*
PYJS_DEPS: ['html5.widget.Widget', 'html5', 'html5.widget', 'html5.html5Attr._label._Label', 'html5.html5Attr', 'html5.html5Attr._label', 'html5.html5Attr.media.Type', 'html5.html5Attr.media', 'html5.html5Attr.media.Dimensions', 'html5.html5Attr.form._Form', 'html5.html5Attr.form', 'html5.html5Attr.form.Alt', 'html5.html5Attr.form.Autofocus', 'html5.html5Attr.form.Disabled', 'html5.html5Attr.form.Name', 'html5.html5Attr.form.Checked', 'html5.html5Attr.form.Indeterminate', 'html5.html5Attr.form.Value', 'html5.html5Attr.form.Formhead', 'html5.html5Attr.form.Autocomplete', 'html5.html5Attr.form.Inputs', 'html5.html5Attr.form.Required', 'html5.html5Attr.form.Multiple', 'html5.html5Attr.form.Size', 'html5.html5Attr.form.__For', 'html5.html5Attr.href.Target', 'html5.html5Attr.href', 'html5.html5Attr.src.Src', 'html5.html5Attr.src', 'html5.textnode.TextNode', 'html5.textnode']
*/
