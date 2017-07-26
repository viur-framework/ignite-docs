/* start module: widgets.csvexport */
$pyjs['loaded_modules']['widgets.csvexport'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['widgets.csvexport']['__was_initialized__']) return $pyjs['loaded_modules']['widgets.csvexport'];
	if(typeof $pyjs['loaded_modules']['widgets'] == 'undefined' || !$pyjs['loaded_modules']['widgets']['__was_initialized__']) $p['___import___']('widgets', null);
	var $m = $pyjs['loaded_modules']['widgets.csvexport'];
	$m['__repr__'] = function() { return '<module: widgets.csvexport>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'widgets.csvexport';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['widgets']['csvexport'] = $pyjs['loaded_modules']['widgets.csvexport'];
	$m.__track_lines__[1] = 'widgets.csvexport.py, line 1:\n    # -*- coding: utf-8 -*-';
	$m.__track_lines__[2] = 'widgets.csvexport.py, line 2:\n    import html5, utils, datetime';
	$m.__track_lines__[3] = 'widgets.csvexport.py, line 3:\n    from network import NetworkService, DeferredCall';
	$m.__track_lines__[4] = 'widgets.csvexport.py, line 4:\n    from config import conf';
	$m.__track_lines__[5] = 'widgets.csvexport.py, line 5:\n    from priorityqueue import actionDelegateSelector, extractorDelegateSelector';
	$m.__track_lines__[6] = 'widgets.csvexport.py, line 6:\n    from i18n import translate, addTranslation';
	$m.__track_lines__[8] = 'widgets.csvexport.py, line 8:\n    class ExportCsv(html5.Progress):';
	$m.__track_lines__[9] = 'widgets.csvexport.py, line 9:\n    def __init__(self, widget, selection, encoding = None, language = None,';
	$m.__track_lines__[11] = 'widgets.csvexport.py, line 11:\n    super(ExportCsv, self).__init__(*args, **kwargs)';
	$m.__track_lines__[13] = 'widgets.csvexport.py, line 13:\n    if encoding is None or encoding not in ["utf-8", "iso-8859-15"]:';
	$m.__track_lines__[14] = 'widgets.csvexport.py, line 14:\n    encoding = "utf-8"';
	$m.__track_lines__[16] = 'widgets.csvexport.py, line 16:\n    if language is None or language not in conf["server"].keys():';
	$m.__track_lines__[17] = 'widgets.csvexport.py, line 17:\n    language = conf["currentlanguage"]';
	$m.__track_lines__[19] = 'widgets.csvexport.py, line 19:\n    self.widget = widget';
	$m.__track_lines__[20] = 'widgets.csvexport.py, line 20:\n    self.module = widget.module';
	$m.__track_lines__[21] = 'widgets.csvexport.py, line 21:\n    self.params = self.widget.getFilter().copy()';
	$m.__track_lines__[22] = 'widgets.csvexport.py, line 22:\n    self.params["amount"] = 99';
	$m.__track_lines__[23] = 'widgets.csvexport.py, line 23:\n    self.data = []';
	$m.__track_lines__[24] = 'widgets.csvexport.py, line 24:\n    self.structure = None';
	$m.__track_lines__[25] = 'widgets.csvexport.py, line 25:\n    self.separator = separator or ";"';
	$m.__track_lines__[26] = 'widgets.csvexport.py, line 26:\n    self.lineSeparator = lineSeparator or "\\n"';
	$m.__track_lines__[27] = 'widgets.csvexport.py, line 27:\n    self.encoding = encoding';
	$m.__track_lines__[28] = 'widgets.csvexport.py, line 28:\n    self.lang = language';
	$m.__track_lines__[30] = 'widgets.csvexport.py, line 30:\n    conf["mainWindow"].log("progress", self)';
	$m.__track_lines__[31] = 'widgets.csvexport.py, line 31:\n    self.parent()["class"].append("is_new")';
	$m.__track_lines__[32] = 'widgets.csvexport.py, line 32:\n    self.parent()["class"].append("log_progress")';
	$m.__track_lines__[33] = 'widgets.csvexport.py, line 33:\n    self.appendChild(html5.TextNode(translate("CSV-Export")))';
	$m.__track_lines__[35] = 'widgets.csvexport.py, line 35:\n    DeferredCall(self.nextChunk)';
	$m.__track_lines__[37] = 'widgets.csvexport.py, line 37:\n    def nextChunk(self, cursor = None):';
	$m.__track_lines__[38] = 'widgets.csvexport.py, line 38:\n    if cursor:';
	$m.__track_lines__[39] = 'widgets.csvexport.py, line 39:\n    self.params["cursor"] = cursor';
	$m.__track_lines__[41] = 'widgets.csvexport.py, line 41:\n    NetworkService.request(self.module, "list", self.params,';
	$m.__track_lines__[45] = 'widgets.csvexport.py, line 45:\n    def nextChunkComplete(self, req):';
	$m.__track_lines__[46] = 'widgets.csvexport.py, line 46:\n    answ = NetworkService.decode(req)';
	$m.__track_lines__[48] = 'widgets.csvexport.py, line 48:\n    if self.structure is None:';
	$m.__track_lines__[49] = 'widgets.csvexport.py, line 49:\n    self.structure = answ["structure"]';
	$m.__track_lines__[51] = 'widgets.csvexport.py, line 51:\n    if not answ["skellist"]:';
	$m.__track_lines__[52] = 'widgets.csvexport.py, line 52:\n    self.exportToFile()';
	$m.__track_lines__[53] = 'widgets.csvexport.py, line 53:\n    return';
	$m.__track_lines__[55] = 'widgets.csvexport.py, line 55:\n    self.data.extend(answ["skellist"])';
	$m.__track_lines__[56] = 'widgets.csvexport.py, line 56:\n    self.nextChunk(answ["cursor"])';
	$m.__track_lines__[58] = 'widgets.csvexport.py, line 58:\n    def exportToFile(self):';
	$m.__track_lines__[59] = 'widgets.csvexport.py, line 59:\n    if not self.data:';
	$m.__track_lines__[60] = 'widgets.csvexport.py, line 60:\n    self.replaceWithMessage(translate("No datasets to export."), logClass="info")';
	$m.__track_lines__[61] = 'widgets.csvexport.py, line 61:\n    return';
	$m.__track_lines__[64] = 'widgets.csvexport.py, line 64:\n    assert self.structure';
	$m.__track_lines__[66] = 'widgets.csvexport.py, line 66:\n    defaultLanguage = conf["currentlanguage"]';
	$m.__track_lines__[67] = 'widgets.csvexport.py, line 67:\n    conf["currentlanguage"] = self.lang';
	$m.__track_lines__[70] = 'widgets.csvexport.py, line 70:\n    self["max"] = len(self.data)';
	$m.__track_lines__[71] = 'widgets.csvexport.py, line 71:\n    self["value"] = 0';
	$m.__track_lines__[73] = 'widgets.csvexport.py, line 73:\n    cellRenderer = {}';
	$m.__track_lines__[74] = 'widgets.csvexport.py, line 74:\n    struct = utils.boneListToDict(self.structure)';
	$m.__track_lines__[75] = 'widgets.csvexport.py, line 75:\n    fields = {}';
	$m.__track_lines__[76] = 'widgets.csvexport.py, line 76:\n    titles = []';
	$m.__track_lines__[78] = 'widgets.csvexport.py, line 78:\n    idx = 0';
	$m.__track_lines__[79] = 'widgets.csvexport.py, line 79:\n    for key, bone in self.structure:';
	$m.__track_lines__[82] = 'widgets.csvexport.py, line 82:\n    if bone["visible"]:';
	$m.__track_lines__[83] = 'widgets.csvexport.py, line 83:\n    cellRenderer[key] = extractorDelegateSelector.select(self.module, key, struct)';
	$m.__track_lines__[84] = 'widgets.csvexport.py, line 84:\n    if cellRenderer[key]:';
	$m.__track_lines__[85] = 'widgets.csvexport.py, line 85:\n    cellRenderer[key] = cellRenderer[key](self.module, key, struct)';
	$m.__track_lines__[87] = 'widgets.csvexport.py, line 87:\n    fields[key] = idx';
	$m.__track_lines__[88] = 'widgets.csvexport.py, line 88:\n    idx += 1';
	$m.__track_lines__[90] = 'widgets.csvexport.py, line 90:\n    titles.append(bone.get("descr", key) or key)';
	$m.__track_lines__[93] = 'widgets.csvexport.py, line 93:\n    content = self.separator.join(titles) + self.lineSeparator';
	$m.__track_lines__[95] = 'widgets.csvexport.py, line 95:\n    for entry in self.data:';
	$m.__track_lines__[96] = 'widgets.csvexport.py, line 96:\n    row = [None for _ in range(len(fields.keys()))]';
	$m.__track_lines__[98] = 'widgets.csvexport.py, line 98:\n    for key, value in entry.items():';
	$m.__track_lines__[99] = 'widgets.csvexport.py, line 99:\n    if key not in fields or value is None or str(value).lower() == "none":';
	$m.__track_lines__[100] = 'widgets.csvexport.py, line 100:\n    continue';
	$m.__track_lines__[102] = 'widgets.csvexport.py, line 102:\n    try:';
	$m.__track_lines__[103] = 'widgets.csvexport.py, line 103:\n    if cellRenderer[key] is not None:';
	$m.__track_lines__[104] = 'widgets.csvexport.py, line 104:\n    row[fields[key]] = cellRenderer[key].render(entry, key)';
	$m.__track_lines__[106] = 'widgets.csvexport.py, line 106:\n    row[fields[key]] = str(value)';
	$m.__track_lines__[109] = 'widgets.csvexport.py, line 109:\n    pass';
	$m.__track_lines__[111] = 'widgets.csvexport.py, line 111:\n    content += self.separator.join(row) + self.lineSeparator';
	$m.__track_lines__[112] = 'widgets.csvexport.py, line 112:\n    self["value"] += 1';
	$m.__track_lines__[115] = 'widgets.csvexport.py, line 115:\n    conf["currentlanguage"] = defaultLanguage';
	$m.__track_lines__[117] = 'widgets.csvexport.py, line 117:\n    a = html5.A()';
	$m.__track_lines__[118] = 'widgets.csvexport.py, line 118:\n    a.hide()';
	$m.__track_lines__[119] = 'widgets.csvexport.py, line 119:\n    self.appendChild(a)';
	$m.__track_lines__[121] = 'widgets.csvexport.py, line 121:\n    if self.encoding == "utf-8":';
	$m.__track_lines__[122] = 'widgets.csvexport.py, line 122:\n    encodeURIComponent = eval("encodeURIComponent")';
	$m.__track_lines__[123] = 'widgets.csvexport.py, line 123:\n    a["href"] = "data:text/csv;charset=utf-8," + encodeURIComponent(content)';
	$m.__track_lines__[125] = 'widgets.csvexport.py, line 125:\n    escape = eval("escape")';
	$m.__track_lines__[126] = 'widgets.csvexport.py, line 126:\n    a["href"] = "data:text/csv;charset=ISO-8859-15," + escape(content)';
	$m.__track_lines__[128] = 'widgets.csvexport.py, line 128:\n    raise ValueError("unknown encoding: %s" % self.encoding)';
	$m.__track_lines__[130] = 'widgets.csvexport.py, line 130:\n    filename = "export-%s-%s-%s-%s.csv" % (self.module, self.lang, self.encoding,';
	$m.__track_lines__[132] = 'widgets.csvexport.py, line 132:\n    a["download"] = filename';
	$m.__track_lines__[133] = 'widgets.csvexport.py, line 133:\n    a.element.click()';
	$m.__track_lines__[135] = 'widgets.csvexport.py, line 135:\n    self.replaceWithMessage(translate("{count} datasets exported\\nas {filename}",';
	$m.__track_lines__[138] = 'widgets.csvexport.py, line 138:\n    self.data = None';
	$m.__track_lines__[139] = 'widgets.csvexport.py, line 139:\n    self.structure = None';
	$m.__track_lines__[141] = 'widgets.csvexport.py, line 141:\n    def nextChunkFailure(self, req, code):';
	$m.__track_lines__[142] = 'widgets.csvexport.py, line 142:\n    self.replaceWithMessage(translate("Error {code} on CSV export.", code=code), logClass="error")';
	$m.__track_lines__[143] = 'widgets.csvexport.py, line 143:\n    self.widget.reloadData()';
	$m.__track_lines__[145] = 'widgets.csvexport.py, line 145:\n    def replaceWithMessage(self, message, logClass="success"):';
	$m.__track_lines__[146] = 'widgets.csvexport.py, line 146:\n    self.parent()["class"] = []';
	$m.__track_lines__[147] = 'widgets.csvexport.py, line 147:\n    self.parent()["class"].append("log_%s" % logClass)';
	$m.__track_lines__[149] = 'widgets.csvexport.py, line 149:\n    msg = html5.Span()';
	$m.__track_lines__[150] = 'widgets.csvexport.py, line 150:\n    html5.utils.textToHtml(msg, message)';
	$m.__track_lines__[152] = 'widgets.csvexport.py, line 152:\n    self.parent().appendChild(msg)';
	$m.__track_lines__[153] = 'widgets.csvexport.py, line 153:\n    self.parent().removeChild(self)';
	$m.__track_lines__[155] = 'widgets.csvexport.py, line 155:\n    class ExportCsvStarter(html5.ext.Popup):';
	$m.__track_lines__[157] = 'widgets.csvexport.py, line 157:\n    def __init__(self, widget, *args, **kwargs ):';
	$m.__track_lines__[158] = 'widgets.csvexport.py, line 158:\n    super(ExportCsvStarter, self).__init__(title=translate("CSV Export"))';
	$m.__track_lines__[160] = 'widgets.csvexport.py, line 160:\n    self.widget = widget';
	$m.__track_lines__[162] = 'widgets.csvexport.py, line 162:\n    if "viur.defaultlangsvalues" in conf["server"].keys():';
	$m.__track_lines__[163] = 'widgets.csvexport.py, line 163:\n    self.langSelect = html5.Select()';
	$m.__track_lines__[164] = 'widgets.csvexport.py, line 164:\n    self.langSelect["id"] = "lang-select"';
	$m.__track_lines__[166] = 'widgets.csvexport.py, line 166:\n    lbl = html5.Label(translate("Language selection"))';
	$m.__track_lines__[167] = 'widgets.csvexport.py, line 167:\n    lbl["for"] = "lang-select"';
	$m.__track_lines__[169] = 'widgets.csvexport.py, line 169:\n    div = html5.Div()';
	$m.__track_lines__[170] = 'widgets.csvexport.py, line 170:\n    div.appendChild(lbl)';
	$m.__track_lines__[171] = 'widgets.csvexport.py, line 171:\n    div.appendChild(self.langSelect)';
	$m.__track_lines__[172] = 'widgets.csvexport.py, line 172:\n    div.addClass("bone")';
	$m.__track_lines__[174] = 'widgets.csvexport.py, line 174:\n    self.appendChild(div)';
	$m.__track_lines__[176] = 'widgets.csvexport.py, line 176:\n    for key, value in conf["server"]["viur.defaultlangsvalues"].items():';
	$m.__track_lines__[177] = 'widgets.csvexport.py, line 177:\n    opt = html5.Option()';
	$m.__track_lines__[178] = 'widgets.csvexport.py, line 178:\n    opt["value"] = key';
	$m.__track_lines__[179] = 'widgets.csvexport.py, line 179:\n    opt.appendChild(html5.TextNode(value))';
	$m.__track_lines__[181] = 'widgets.csvexport.py, line 181:\n    if key == conf["currentlanguage"]:';
	$m.__track_lines__[182] = 'widgets.csvexport.py, line 182:\n    opt["selected"] = True';
	$m.__track_lines__[184] = 'widgets.csvexport.py, line 184:\n    self.langSelect.appendChild(opt)';
	$m.__track_lines__[186] = 'widgets.csvexport.py, line 186:\n    self.langSelect = None';
	$m.__track_lines__[189] = 'widgets.csvexport.py, line 189:\n    self.encodingSelect = html5.Select()';
	$m.__track_lines__[190] = 'widgets.csvexport.py, line 190:\n    self.encodingSelect["id"] = "encoding-select"';
	$m.__track_lines__[192] = 'widgets.csvexport.py, line 192:\n    lbl = html5.Label(translate("Encoding"))';
	$m.__track_lines__[193] = 'widgets.csvexport.py, line 193:\n    lbl["for"] = "encoding-select"';
	$m.__track_lines__[195] = 'widgets.csvexport.py, line 195:\n    div = html5.Div()';
	$m.__track_lines__[196] = 'widgets.csvexport.py, line 196:\n    div.appendChild(lbl)';
	$m.__track_lines__[197] = 'widgets.csvexport.py, line 197:\n    div.appendChild(self.encodingSelect)';
	$m.__track_lines__[198] = 'widgets.csvexport.py, line 198:\n    div.addClass("bone")';
	$m.__track_lines__[200] = 'widgets.csvexport.py, line 200:\n    self.appendChild(div)';
	$m.__track_lines__[202] = 'widgets.csvexport.py, line 202:\n    for i, (k, v) in enumerate([("iso-8859-15", "ISO-8859-15"), ("utf-8", "UTF-8")]):';
	$m.__track_lines__[203] = 'widgets.csvexport.py, line 203:\n    opt = html5.Option()';
	$m.__track_lines__[204] = 'widgets.csvexport.py, line 204:\n    opt["value"] = k';
	$m.__track_lines__[206] = 'widgets.csvexport.py, line 206:\n    if i == 0:';
	$m.__track_lines__[207] = 'widgets.csvexport.py, line 207:\n    opt["selected"] = True';
	$m.__track_lines__[209] = 'widgets.csvexport.py, line 209:\n    opt.appendChild(html5.TextNode(v))';
	$m.__track_lines__[210] = 'widgets.csvexport.py, line 210:\n    self.encodingSelect.appendChild(opt)';
	$m.__track_lines__[212] = 'widgets.csvexport.py, line 212:\n    div = html5.Div()';
	$m.__track_lines__[213] = 'widgets.csvexport.py, line 213:\n    div.addClass("button-container")';
	$m.__track_lines__[214] = 'widgets.csvexport.py, line 214:\n    self.appendChild(div)';
	$m.__track_lines__[216] = 'widgets.csvexport.py, line 216:\n    self.cancelBtn = html5.ext.Button(translate("Cancel"), self.close)';
	$m.__track_lines__[217] = 'widgets.csvexport.py, line 217:\n    div.appendChild(self.cancelBtn)';
	$m.__track_lines__[219] = 'widgets.csvexport.py, line 219:\n    self.exportBtn = html5.ext.Button(translate("Export"), self.onExportBtnClick)';
	$m.__track_lines__[220] = 'widgets.csvexport.py, line 220:\n    div.appendChild(self.exportBtn)';
	$m.__track_lines__[222] = 'widgets.csvexport.py, line 222:\n    def onExportBtnClick(self, *args, **kwargs):';
	$m.__track_lines__[223] = 'widgets.csvexport.py, line 223:\n    encoding = self.encodingSelect["options"].item(self.encodingSelect["selectedIndex"]).value';
	$m.__track_lines__[225] = 'widgets.csvexport.py, line 225:\n    if self.langSelect:';
	$m.__track_lines__[226] = 'widgets.csvexport.py, line 226:\n    language = self.langSelect["options"].item(self.langSelect["selectedIndex"]).value';
	$m.__track_lines__[228] = 'widgets.csvexport.py, line 228:\n    language = None';
	$m.__track_lines__[230] = 'widgets.csvexport.py, line 230:\n    ExportCsv(self.widget, self.widget.getCurrentSelection(), encoding=encoding, language=language)';
	$m.__track_lines__[231] = 'widgets.csvexport.py, line 231:\n    self.close()';


	$pyjs['track']['module']='widgets.csvexport';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=2;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['html5'] = $p['___import___']('html5', 'widgets');
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['utils'] = $p['___import___']('utils', 'widgets');
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['datetime'] = $p['___import___']('datetime', 'widgets');
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=3;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['NetworkService'] = $p['___import___']('network.NetworkService', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['DeferredCall'] = $p['___import___']('network.DeferredCall', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=4;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['conf'] = $p['___import___']('config.conf', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=5;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['actionDelegateSelector'] = $p['___import___']('priorityqueue.actionDelegateSelector', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['extractorDelegateSelector'] = $p['___import___']('priorityqueue.extractorDelegateSelector', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=6;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['translate'] = $p['___import___']('i18n.translate', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['addTranslation'] = $p['___import___']('i18n.addTranslation', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=8;
	$m['ExportCsv'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.csvexport';
		$pyjs['track']['lineno']=9;
		$method = $pyjs__bind_method2('__init__', function(widget, selection, encoding, language, separator, lineSeparator) {
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
				widget = arguments[1];
				selection = arguments[2];
				encoding = arguments[3];
				language = arguments[4];
				separator = arguments[5];
				lineSeparator = arguments[6];
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
				if (typeof lineSeparator != 'undefined') {
					if (lineSeparator !== null && typeof lineSeparator['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = lineSeparator;
						lineSeparator = arguments[7];
					}
				} else 				if (typeof separator != 'undefined') {
					if (separator !== null && typeof separator['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = separator;
						separator = arguments[7];
					}
				} else 				if (typeof language != 'undefined') {
					if (language !== null && typeof language['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = language;
						language = arguments[7];
					}
				} else 				if (typeof encoding != 'undefined') {
					if (encoding !== null && typeof encoding['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = encoding;
						encoding = arguments[7];
					}
				} else 				if (typeof selection != 'undefined') {
					if (selection !== null && typeof selection['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = selection;
						selection = arguments[7];
					}
				} else 				if (typeof widget != 'undefined') {
					if (widget !== null && typeof widget['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = widget;
						widget = arguments[7];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[7];
					}
				} else {
				}
			}
			if (typeof encoding == 'undefined') encoding=arguments['callee']['__args__'][5][1];
			if (typeof language == 'undefined') language=arguments['callee']['__args__'][6][1];
			if (typeof separator == 'undefined') separator=arguments['callee']['__args__'][7][1];
			if (typeof lineSeparator == 'undefined') lineSeparator=arguments['callee']['__args__'][8][1];
			var $or5,$or4,$or1,$or3,$or8,$or7,$or6,$or2;
			$pyjs['track']={'module':'widgets.csvexport', 'lineno':9};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.csvexport';
			$pyjs['track']['lineno']=9;
			$pyjs['track']['lineno']=11;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['ExportCsv'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs['track']['lineno']=13;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($or1=(encoding === null))?$or1:!(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list'](['utf-8', 'iso-8859-15']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})()['__contains__'](encoding)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})()) {
				$pyjs['track']['lineno']=14;
				encoding = 'utf-8';
			}
			$pyjs['track']['lineno']=16;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($or3=(language === null))?$or3:!(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('server')['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})()['__contains__'](language)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})()) {
				$pyjs['track']['lineno']=17;
				language = $m['conf']['__getitem__']('currentlanguage');
			}
			$pyjs['track']['lineno']=19;
			self['widget'] = widget;
			$pyjs['track']['lineno']=20;
			self['module'] = $p['getattr'](widget, 'module');
			$pyjs['track']['lineno']=21;
			self['params'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['widget']['getFilter']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})()['copy']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
			$pyjs['track']['lineno']=22;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'params')['__setitem__']('amount', 99);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
			$pyjs['track']['lineno']=23;
			self['data'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
			$pyjs['track']['lineno']=24;
			self['structure'] = null;
			$pyjs['track']['lineno']=25;
			self['separator'] = ($p['bool']($or5=separator)?$or5:';');
			$pyjs['track']['lineno']=26;
			self['lineSeparator'] = ($p['bool']($or7=lineSeparator)?$or7:'\n');
			$pyjs['track']['lineno']=27;
			self['encoding'] = encoding;
			$pyjs['track']['lineno']=28;
			self['lang'] = language;
			$pyjs['track']['lineno']=30;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('mainWindow')['log']('progress', self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
			$pyjs['track']['lineno']=31;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})()['__getitem__']('class')['append']('is_new');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
			$pyjs['track']['lineno']=32;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})()['__getitem__']('class')['append']('log_progress');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
			$pyjs['track']['lineno']=33;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['TextNode']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('CSV-Export');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
			$pyjs['track']['lineno']=35;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['DeferredCall']($p['getattr'](self, 'nextChunk'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['widget'],['selection'],['encoding', null],['language', null],['separator', null],['lineSeparator', null]]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=37;
		$method = $pyjs__bind_method2('nextChunk', function(cursor) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cursor = arguments[1];
			}
			if (typeof cursor == 'undefined') cursor=arguments['callee']['__args__'][3][1];

			$pyjs['track']={'module':'widgets.csvexport', 'lineno':37};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.csvexport';
			$pyjs['track']['lineno']=37;
			$pyjs['track']['lineno']=38;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](cursor);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})()) {
				$pyjs['track']['lineno']=39;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'params')['__setitem__']('cursor', cursor);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
			}
			$pyjs['track']['lineno']=41;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'successHandler':$p['getattr'](self, 'nextChunkComplete'), 'failureHandler':$p['getattr'](self, 'nextChunkFailure')}, $p['getattr'](self, 'module'), 'list', $p['getattr'](self, 'params')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['cursor', null]]);
		$cls_definition['nextChunk'] = $method;
		$pyjs['track']['lineno']=45;
		$method = $pyjs__bind_method2('nextChunkComplete', function(req) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				req = arguments[1];
			}
			var answ;
			$pyjs['track']={'module':'widgets.csvexport', 'lineno':45};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.csvexport';
			$pyjs['track']['lineno']=45;
			$pyjs['track']['lineno']=46;
			answ = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['NetworkService']['decode'](req);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
			$pyjs['track']['lineno']=48;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['getattr'](self, 'structure') === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})()) {
				$pyjs['track']['lineno']=49;
				self['structure'] = answ['__getitem__']('structure');
			}
			$pyjs['track']['lineno']=51;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool'](answ['__getitem__']('skellist')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})()) {
				$pyjs['track']['lineno']=52;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['exportToFile']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
				$pyjs['track']['lineno']=53;
				$pyjs['track']['lineno']=53;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=55;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['data']['extend'](answ['__getitem__']('skellist'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
			$pyjs['track']['lineno']=56;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['nextChunk'](answ['__getitem__']('cursor'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['req']]);
		$cls_definition['nextChunkComplete'] = $method;
		$pyjs['track']['lineno']=58;
		$method = $pyjs__bind_method2('exportToFile', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add12,defaultLanguage,$iter1_iter,$add5,titles,$iter4_type,escape,$iter2_type,$iter4_iter,row,$iter4_idx,struct,$iter2_iter,filename,content,encodeURIComponent,$pyjs_try_err,$iter1_array,$add7,$iter4_nextval,$or11,$iter1_idx,$iter1_nextval,$or13,$or12,$or9,$add6,$add14,$iter2_idx,$add10,$add11,key,$add13,$iter1_type,a,$iter2_array,$iter2_nextval,cellRenderer,idx,fields,value,$add2,$add3,$add1,$pyjs__trackstack_size_2,$or10,$add4,$pyjs__trackstack_size_1,$iter4_array,entry,$add8,$add9,bone;
			$pyjs['track']={'module':'widgets.csvexport', 'lineno':58};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.csvexport';
			$pyjs['track']['lineno']=58;
			$pyjs['track']['lineno']=59;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool']($p['getattr'](self, 'data')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})()) {
				$pyjs['track']['lineno']=60;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call(self, 'replaceWithMessage', null, null, [{'logClass':'info'}, (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['translate']('No datasets to export.');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
				$pyjs['track']['lineno']=61;
				$pyjs['track']['lineno']=61;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=64;
			if (!( $p['getattr'](self, 'structure') )) {
			   throw $p['AssertionError']();
			 }
			$pyjs['track']['lineno']=66;
			defaultLanguage = $m['conf']['__getitem__']('currentlanguage');
			$pyjs['track']['lineno']=67;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__setitem__']('currentlanguage', $p['getattr'](self, 'lang'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
			$pyjs['track']['lineno']=70;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('max', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len']($p['getattr'](self, 'data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})();
			$pyjs['track']['lineno']=71;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('value', 0);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})();
			$pyjs['track']['lineno']=73;
			cellRenderer = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})();
			$pyjs['track']['lineno']=74;
			struct = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['utils']['boneListToDict']($p['getattr'](self, 'structure'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})();
			$pyjs['track']['lineno']=75;
			fields = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})();
			$pyjs['track']['lineno']=76;
			titles = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})();
			$pyjs['track']['lineno']=78;
			idx = 0;
			$pyjs['track']['lineno']=79;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter1_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'structure');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})();
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				var $tupleassign1 = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__ass_unpack']($iter1_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})();
				key = $tupleassign1[0];
				bone = $tupleassign1[1];
				$pyjs['track']['lineno']=82;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](bone['__getitem__']('visible'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})()) {
					$pyjs['track']['lineno']=83;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return cellRenderer['__setitem__'](key, (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['extractorDelegateSelector']['select']($p['getattr'](self, 'module'), key, struct);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})();
					$pyjs['track']['lineno']=84;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](cellRenderer['__getitem__'](key));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})()) {
						$pyjs['track']['lineno']=85;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return cellRenderer['__setitem__'](key, (function(){try{try{$pyjs['in_try_except'] += 1;
						return cellRenderer['__getitem__'](key)($p['getattr'](self, 'module'), key, struct);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})();
					}
					$pyjs['track']['lineno']=87;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return fields['__setitem__'](key, idx);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})();
					$pyjs['track']['lineno']=88;
					idx = $p['__op_add']($add1=idx,$add2=1);
					$pyjs['track']['lineno']=90;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return titles['append'](($p['bool']($or9=(function(){try{try{$pyjs['in_try_except'] += 1;
					return bone['get']('descr', key);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})())?$or9:key));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})();
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.csvexport';
			$pyjs['track']['lineno']=93;
			content = $p['__op_add']($add3=(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['separator']['join'](titles);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})(),$add4=$p['getattr'](self, 'lineSeparator'));
			$pyjs['track']['lineno']=95;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter2_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'data');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})();
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				entry = $iter2_nextval['$nextval'];
				$pyjs['track']['lineno']=96;
				row = function(){
					var $iter3_idx,$iter3_nextval,$iter3_type,$collcomp1,$pyjs__trackstack_size_2,$iter3_iter,$iter3_array,_;
	$collcomp1 = $p['list']();
				$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
				$iter3_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['range']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['len']((function(){try{try{$pyjs['in_try_except'] += 1;
				return fields['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})();
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
					_ = $iter3_nextval['$nextval'];
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $collcomp1['append'](null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='widgets.csvexport';

	return $collcomp1;}();
				$pyjs['track']['lineno']=98;
				$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
				$iter4_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return entry['items']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})();
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
					var $tupleassign2 = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['__ass_unpack']($iter4_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})();
					key = $tupleassign2[0];
					value = $tupleassign2[1];
					$pyjs['track']['lineno']=99;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['bool']($or11=!fields['__contains__'](key))?$or11:($p['bool']($or12=(value === null))?$or12:$p['op_eq']((function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['str'](value);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})()['lower']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})(), 'none'))));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})()) {
						$pyjs['track']['lineno']=100;
						continue;
					}
					$pyjs['track']['lineno']=102;
					var $pyjs__trackstack_size_3 = $pyjs['trackstack']['length'];
					try {
						try {
							$pyjs['in_try_except'] += 1;
							$pyjs['track']['lineno']=103;
							if ((function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['bool']((cellRenderer['__getitem__'](key) !== null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})()) {
								$pyjs['track']['lineno']=104;
								(function(){try{try{$pyjs['in_try_except'] += 1;
								return row['__setitem__'](fields['__getitem__'](key), (function(){try{try{$pyjs['in_try_except'] += 1;
								return cellRenderer['__getitem__'](key)['render'](entry, key);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})();
							}
							else {
								$pyjs['track']['lineno']=106;
								(function(){try{try{$pyjs['in_try_except'] += 1;
								return row['__setitem__'](fields['__getitem__'](key), (function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['str'](value);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})();
							}
						} finally { $pyjs['in_try_except'] -= 1; }
					} catch($pyjs_try_err) {
						$pyjs['__last_exception_stack__'] = sys['save_exception_stack']($pyjs__trackstack_size_3 - 1);
						$pyjs['__active_exception_stack__'] = null;
						var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
						$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_3) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_3);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='widgets.csvexport';
						if (($pyjs_try_err_name == $p['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
							$pyjs['track']['lineno']=109;
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='widgets.csvexport';
				$pyjs['track']['lineno']=111;
				content = $p['__op_add']($add7=content,$add8=$p['__op_add']($add5=(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['separator']['join'](row);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})(),$add6=$p['getattr'](self, 'lineSeparator')));
				$pyjs['track']['lineno']=112;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__setitem__']('value', $p['__op_add']($add9=self['__getitem__']('value'),$add10=1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.csvexport';
			$pyjs['track']['lineno']=115;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__setitem__']('currentlanguage', defaultLanguage);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})();
			$pyjs['track']['lineno']=117;
			a = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['A']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})();
			$pyjs['track']['lineno']=118;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return a['hide']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})();
			$pyjs['track']['lineno']=119;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild'](a);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})();
			$pyjs['track']['lineno']=121;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq']($p['getattr'](self, 'encoding'), 'utf-8'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})()) {
				$pyjs['track']['lineno']=122;
				encodeURIComponent = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (typeof eval == "undefined"?$m['eval']:eval)('encodeURIComponent');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})();
				$pyjs['track']['lineno']=123;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return a['__setitem__']('href', $p['__op_add']($add11='data:text/csv;charset=utf-8,',$add12=(function(){try{try{$pyjs['in_try_except'] += 1;
				return encodeURIComponent(content);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})();
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq']($p['getattr'](self, 'encoding'), 'iso-8859-15'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})()) {
				$pyjs['track']['lineno']=125;
				escape = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (typeof eval == "undefined"?$m['eval']:eval)('escape');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})();
				$pyjs['track']['lineno']=126;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return a['__setitem__']('href', $p['__op_add']($add13='data:text/csv;charset=ISO-8859-15,',$add14=(function(){try{try{$pyjs['in_try_except'] += 1;
				return escape(content);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=128;
				$pyjs['__active_exception_stack__'] = null;
				throw ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['ValueError']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('unknown encoding: %s', $p['getattr'](self, 'encoding'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
}})());
			}
			$pyjs['track']['lineno']=130;
			filename = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('export-%s-%s-%s-%s.csv', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple']([$p['getattr'](self, 'module'), $p['getattr'](self, 'lang'), $p['getattr'](self, 'encoding'), (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['datetime']['datetime']['now']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})()['strftime']('%Y-%m-%d');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_88_err){if (!$p['isinstance']($pyjs_dbg_88_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_88_err);}throw $pyjs_dbg_88_err;
}})();
			$pyjs['track']['lineno']=132;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return a['__setitem__']('download', filename);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_89_err){if (!$p['isinstance']($pyjs_dbg_89_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_89_err);}throw $pyjs_dbg_89_err;
}})();
			$pyjs['track']['lineno']=133;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return a['element']['click']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_90_err){if (!$p['isinstance']($pyjs_dbg_90_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_90_err);}throw $pyjs_dbg_90_err;
}})();
			$pyjs['track']['lineno']=135;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['replaceWithMessage']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(null, $m['translate'], null, null, [{'count':(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len']($p['getattr'](self, 'data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_91_err){if (!$p['isinstance']($pyjs_dbg_91_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_91_err);}throw $pyjs_dbg_91_err;
}})(), 'filename':filename}, '{count} datasets exported\nas {filename}']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_92_err){if (!$p['isinstance']($pyjs_dbg_92_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_92_err);}throw $pyjs_dbg_92_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_93_err){if (!$p['isinstance']($pyjs_dbg_93_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_93_err);}throw $pyjs_dbg_93_err;
}})();
			$pyjs['track']['lineno']=138;
			self['data'] = null;
			$pyjs['track']['lineno']=139;
			self['structure'] = null;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['exportToFile'] = $method;
		$pyjs['track']['lineno']=141;
		$method = $pyjs__bind_method2('nextChunkFailure', function(req, code) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				req = arguments[1];
				code = arguments[2];
			}

			$pyjs['track']={'module':'widgets.csvexport', 'lineno':141};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.csvexport';
			$pyjs['track']['lineno']=141;
			$pyjs['track']['lineno']=142;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(self, 'replaceWithMessage', null, null, [{'logClass':'error'}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(null, $m['translate'], null, null, [{'code':code}, 'Error {code} on CSV export.']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_94_err){if (!$p['isinstance']($pyjs_dbg_94_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_94_err);}throw $pyjs_dbg_94_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_95_err){if (!$p['isinstance']($pyjs_dbg_95_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_95_err);}throw $pyjs_dbg_95_err;
}})();
			$pyjs['track']['lineno']=143;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['widget']['reloadData']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_96_err){if (!$p['isinstance']($pyjs_dbg_96_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_96_err);}throw $pyjs_dbg_96_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['req'],['code']]);
		$cls_definition['nextChunkFailure'] = $method;
		$pyjs['track']['lineno']=145;
		$method = $pyjs__bind_method2('replaceWithMessage', function(message, logClass) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				message = arguments[1];
				logClass = arguments[2];
			}
			if (typeof logClass == 'undefined') logClass=arguments['callee']['__args__'][4][1];
			var msg;
			$pyjs['track']={'module':'widgets.csvexport', 'lineno':145};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.csvexport';
			$pyjs['track']['lineno']=145;
			$pyjs['track']['lineno']=146;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_98_err){if (!$p['isinstance']($pyjs_dbg_98_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_98_err);}throw $pyjs_dbg_98_err;
}})()['__setitem__']('class', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_97_err){if (!$p['isinstance']($pyjs_dbg_97_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_97_err);}throw $pyjs_dbg_97_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_99_err){if (!$p['isinstance']($pyjs_dbg_99_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_99_err);}throw $pyjs_dbg_99_err;
}})();
			$pyjs['track']['lineno']=147;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_100_err){if (!$p['isinstance']($pyjs_dbg_100_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_100_err);}throw $pyjs_dbg_100_err;
}})()['__getitem__']('class')['append']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('log_%s', logClass);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_101_err){if (!$p['isinstance']($pyjs_dbg_101_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_101_err);}throw $pyjs_dbg_101_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_102_err){if (!$p['isinstance']($pyjs_dbg_102_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_102_err);}throw $pyjs_dbg_102_err;
}})();
			$pyjs['track']['lineno']=149;
			msg = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Span']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_103_err){if (!$p['isinstance']($pyjs_dbg_103_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_103_err);}throw $pyjs_dbg_103_err;
}})();
			$pyjs['track']['lineno']=150;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['utils']['textToHtml'](msg, message);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_104_err){if (!$p['isinstance']($pyjs_dbg_104_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_104_err);}throw $pyjs_dbg_104_err;
}})();
			$pyjs['track']['lineno']=152;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_105_err){if (!$p['isinstance']($pyjs_dbg_105_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_105_err);}throw $pyjs_dbg_105_err;
}})()['appendChild'](msg);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_106_err){if (!$p['isinstance']($pyjs_dbg_106_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_106_err);}throw $pyjs_dbg_106_err;
}})();
			$pyjs['track']['lineno']=153;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_107_err){if (!$p['isinstance']($pyjs_dbg_107_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_107_err);}throw $pyjs_dbg_107_err;
}})()['removeChild'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_108_err){if (!$p['isinstance']($pyjs_dbg_108_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_108_err);}throw $pyjs_dbg_108_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['message'],['logClass', 'success']]);
		$cls_definition['replaceWithMessage'] = $method;
		$pyjs['track']['lineno']=8;
		var $bases = new Array($p['getattr']($m['html5'], 'Progress'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('ExportCsv', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=155;
	$m['ExportCsvStarter'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.csvexport';
		$pyjs['track']['lineno']=157;
		$method = $pyjs__bind_method2('__init__', function(widget) {
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
				widget = arguments[1];
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
				if (typeof widget != 'undefined') {
					if (widget !== null && typeof widget['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = widget;
						widget = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}
			var $iter5_nextval,v,$iter6_type,$iter5_idx,$iter5_iter,$iter5_type,$iter6_iter,lbl,$iter6_nextval,$iter5_array,opt,$iter6_idx,$iter6_array,key,i,k,value,$pyjs__trackstack_size_1,div;
			$pyjs['track']={'module':'widgets.csvexport', 'lineno':157};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.csvexport';
			$pyjs['track']['lineno']=157;
			$pyjs['track']['lineno']=158;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['ExportCsvStarter'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_109_err){if (!$p['isinstance']($pyjs_dbg_109_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_109_err);}throw $pyjs_dbg_109_err;
}})(), '__init__', null, null, [{'title':(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('CSV Export');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_110_err){if (!$p['isinstance']($pyjs_dbg_110_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_110_err);}throw $pyjs_dbg_110_err;
}})()}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_111_err){if (!$p['isinstance']($pyjs_dbg_111_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_111_err);}throw $pyjs_dbg_111_err;
}})();
			$pyjs['track']['lineno']=160;
			self['widget'] = widget;
			$pyjs['track']['lineno']=162;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('server')['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_112_err){if (!$p['isinstance']($pyjs_dbg_112_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_112_err);}throw $pyjs_dbg_112_err;
}})()['__contains__']('viur.defaultlangsvalues'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_113_err){if (!$p['isinstance']($pyjs_dbg_113_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_113_err);}throw $pyjs_dbg_113_err;
}})()) {
				$pyjs['track']['lineno']=163;
				self['langSelect'] = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Select']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_114_err){if (!$p['isinstance']($pyjs_dbg_114_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_114_err);}throw $pyjs_dbg_114_err;
}})();
				$pyjs['track']['lineno']=164;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'langSelect')['__setitem__']('id', 'lang-select');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_115_err){if (!$p['isinstance']($pyjs_dbg_115_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_115_err);}throw $pyjs_dbg_115_err;
}})();
				$pyjs['track']['lineno']=166;
				lbl = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Label']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['translate']('Language selection');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_116_err){if (!$p['isinstance']($pyjs_dbg_116_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_116_err);}throw $pyjs_dbg_116_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_117_err){if (!$p['isinstance']($pyjs_dbg_117_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_117_err);}throw $pyjs_dbg_117_err;
}})();
				$pyjs['track']['lineno']=167;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return lbl['__setitem__']('for', 'lang-select');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_118_err){if (!$p['isinstance']($pyjs_dbg_118_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_118_err);}throw $pyjs_dbg_118_err;
}})();
				$pyjs['track']['lineno']=169;
				div = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Div']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_119_err){if (!$p['isinstance']($pyjs_dbg_119_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_119_err);}throw $pyjs_dbg_119_err;
}})();
				$pyjs['track']['lineno']=170;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return div['appendChild'](lbl);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_120_err){if (!$p['isinstance']($pyjs_dbg_120_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_120_err);}throw $pyjs_dbg_120_err;
}})();
				$pyjs['track']['lineno']=171;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return div['appendChild']($p['getattr'](self, 'langSelect'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_121_err){if (!$p['isinstance']($pyjs_dbg_121_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_121_err);}throw $pyjs_dbg_121_err;
}})();
				$pyjs['track']['lineno']=172;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return div['addClass']('bone');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_122_err){if (!$p['isinstance']($pyjs_dbg_122_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_122_err);}throw $pyjs_dbg_122_err;
}})();
				$pyjs['track']['lineno']=174;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['appendChild'](div);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_123_err){if (!$p['isinstance']($pyjs_dbg_123_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_123_err);}throw $pyjs_dbg_123_err;
}})();
				$pyjs['track']['lineno']=176;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter5_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['conf']['__getitem__']('server')['__getitem__']('viur.defaultlangsvalues')['items']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_125_err){if (!$p['isinstance']($pyjs_dbg_125_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_125_err);}throw $pyjs_dbg_125_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_126_err){if (!$p['isinstance']($pyjs_dbg_126_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_126_err);}throw $pyjs_dbg_126_err;
}})();
				$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
				while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
					var $tupleassign3 = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['__ass_unpack']($iter5_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_124_err){if (!$p['isinstance']($pyjs_dbg_124_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_124_err);}throw $pyjs_dbg_124_err;
}})();
					key = $tupleassign3[0];
					value = $tupleassign3[1];
					$pyjs['track']['lineno']=177;
					opt = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['html5']['Option']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_127_err){if (!$p['isinstance']($pyjs_dbg_127_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_127_err);}throw $pyjs_dbg_127_err;
}})();
					$pyjs['track']['lineno']=178;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return opt['__setitem__']('value', key);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_128_err){if (!$p['isinstance']($pyjs_dbg_128_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_128_err);}throw $pyjs_dbg_128_err;
}})();
					$pyjs['track']['lineno']=179;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return opt['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['html5']['TextNode'](value);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_129_err){if (!$p['isinstance']($pyjs_dbg_129_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_129_err);}throw $pyjs_dbg_129_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_130_err){if (!$p['isinstance']($pyjs_dbg_130_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_130_err);}throw $pyjs_dbg_130_err;
}})();
					$pyjs['track']['lineno']=181;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_eq'](key, $m['conf']['__getitem__']('currentlanguage')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_131_err){if (!$p['isinstance']($pyjs_dbg_131_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_131_err);}throw $pyjs_dbg_131_err;
}})()) {
						$pyjs['track']['lineno']=182;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return opt['__setitem__']('selected', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_132_err){if (!$p['isinstance']($pyjs_dbg_132_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_132_err);}throw $pyjs_dbg_132_err;
}})();
					}
					$pyjs['track']['lineno']=184;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['langSelect']['appendChild'](opt);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_133_err){if (!$p['isinstance']($pyjs_dbg_133_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_133_err);}throw $pyjs_dbg_133_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='widgets.csvexport';
			}
			else {
				$pyjs['track']['lineno']=186;
				self['langSelect'] = null;
			}
			$pyjs['track']['lineno']=189;
			self['encodingSelect'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Select']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_134_err){if (!$p['isinstance']($pyjs_dbg_134_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_134_err);}throw $pyjs_dbg_134_err;
}})();
			$pyjs['track']['lineno']=190;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'encodingSelect')['__setitem__']('id', 'encoding-select');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_135_err){if (!$p['isinstance']($pyjs_dbg_135_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_135_err);}throw $pyjs_dbg_135_err;
}})();
			$pyjs['track']['lineno']=192;
			lbl = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Label']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Encoding');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_136_err){if (!$p['isinstance']($pyjs_dbg_136_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_136_err);}throw $pyjs_dbg_136_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_137_err){if (!$p['isinstance']($pyjs_dbg_137_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_137_err);}throw $pyjs_dbg_137_err;
}})();
			$pyjs['track']['lineno']=193;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return lbl['__setitem__']('for', 'encoding-select');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_138_err){if (!$p['isinstance']($pyjs_dbg_138_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_138_err);}throw $pyjs_dbg_138_err;
}})();
			$pyjs['track']['lineno']=195;
			div = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Div']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_139_err){if (!$p['isinstance']($pyjs_dbg_139_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_139_err);}throw $pyjs_dbg_139_err;
}})();
			$pyjs['track']['lineno']=196;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return div['appendChild'](lbl);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_140_err){if (!$p['isinstance']($pyjs_dbg_140_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_140_err);}throw $pyjs_dbg_140_err;
}})();
			$pyjs['track']['lineno']=197;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return div['appendChild']($p['getattr'](self, 'encodingSelect'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_141_err){if (!$p['isinstance']($pyjs_dbg_141_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_141_err);}throw $pyjs_dbg_141_err;
}})();
			$pyjs['track']['lineno']=198;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return div['addClass']('bone');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_142_err){if (!$p['isinstance']($pyjs_dbg_142_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_142_err);}throw $pyjs_dbg_142_err;
}})();
			$pyjs['track']['lineno']=200;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild'](div);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_143_err){if (!$p['isinstance']($pyjs_dbg_143_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_143_err);}throw $pyjs_dbg_143_err;
}})();
			$pyjs['track']['lineno']=202;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter6_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['enumerate']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple'](['iso-8859-15', 'ISO-8859-15']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_146_err){if (!$p['isinstance']($pyjs_dbg_146_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_146_err);}throw $pyjs_dbg_146_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple'](['utf-8', 'UTF-8']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_147_err){if (!$p['isinstance']($pyjs_dbg_147_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_147_err);}throw $pyjs_dbg_147_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_148_err){if (!$p['isinstance']($pyjs_dbg_148_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_148_err);}throw $pyjs_dbg_148_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_149_err){if (!$p['isinstance']($pyjs_dbg_149_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_149_err);}throw $pyjs_dbg_149_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_150_err){if (!$p['isinstance']($pyjs_dbg_150_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_150_err);}throw $pyjs_dbg_150_err;
}})();
			$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
			while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
				var $tupleassign4 = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__ass_unpack']($iter6_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_144_err){if (!$p['isinstance']($pyjs_dbg_144_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_144_err);}throw $pyjs_dbg_144_err;
}})();
				i = $tupleassign4[0];
				var $tupleassign5 = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__ass_unpack']($tupleassign4[1], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_145_err){if (!$p['isinstance']($pyjs_dbg_145_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_145_err);}throw $pyjs_dbg_145_err;
}})();
				k = $tupleassign5[0];
				v = $tupleassign5[1];
				$pyjs['track']['lineno']=203;
				opt = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Option']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_151_err){if (!$p['isinstance']($pyjs_dbg_151_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_151_err);}throw $pyjs_dbg_151_err;
}})();
				$pyjs['track']['lineno']=204;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return opt['__setitem__']('value', k);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_152_err){if (!$p['isinstance']($pyjs_dbg_152_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_152_err);}throw $pyjs_dbg_152_err;
}})();
				$pyjs['track']['lineno']=206;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq'](i, 0));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_153_err){if (!$p['isinstance']($pyjs_dbg_153_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_153_err);}throw $pyjs_dbg_153_err;
}})()) {
					$pyjs['track']['lineno']=207;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return opt['__setitem__']('selected', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_154_err){if (!$p['isinstance']($pyjs_dbg_154_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_154_err);}throw $pyjs_dbg_154_err;
}})();
				}
				$pyjs['track']['lineno']=209;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return opt['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['TextNode'](v);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_155_err){if (!$p['isinstance']($pyjs_dbg_155_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_155_err);}throw $pyjs_dbg_155_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_156_err){if (!$p['isinstance']($pyjs_dbg_156_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_156_err);}throw $pyjs_dbg_156_err;
}})();
				$pyjs['track']['lineno']=210;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['encodingSelect']['appendChild'](opt);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_157_err){if (!$p['isinstance']($pyjs_dbg_157_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_157_err);}throw $pyjs_dbg_157_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.csvexport';
			$pyjs['track']['lineno']=212;
			div = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Div']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_158_err){if (!$p['isinstance']($pyjs_dbg_158_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_158_err);}throw $pyjs_dbg_158_err;
}})();
			$pyjs['track']['lineno']=213;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return div['addClass']('button-container');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_159_err){if (!$p['isinstance']($pyjs_dbg_159_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_159_err);}throw $pyjs_dbg_159_err;
}})();
			$pyjs['track']['lineno']=214;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild'](div);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_160_err){if (!$p['isinstance']($pyjs_dbg_160_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_160_err);}throw $pyjs_dbg_160_err;
}})();
			$pyjs['track']['lineno']=216;
			self['cancelBtn'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['ext']['Button']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Cancel');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_161_err){if (!$p['isinstance']($pyjs_dbg_161_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_161_err);}throw $pyjs_dbg_161_err;
}})(), $p['getattr'](self, 'close'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_162_err){if (!$p['isinstance']($pyjs_dbg_162_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_162_err);}throw $pyjs_dbg_162_err;
}})();
			$pyjs['track']['lineno']=217;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return div['appendChild']($p['getattr'](self, 'cancelBtn'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_163_err){if (!$p['isinstance']($pyjs_dbg_163_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_163_err);}throw $pyjs_dbg_163_err;
}})();
			$pyjs['track']['lineno']=219;
			self['exportBtn'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['ext']['Button']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Export');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_164_err){if (!$p['isinstance']($pyjs_dbg_164_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_164_err);}throw $pyjs_dbg_164_err;
}})(), $p['getattr'](self, 'onExportBtnClick'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_165_err){if (!$p['isinstance']($pyjs_dbg_165_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_165_err);}throw $pyjs_dbg_165_err;
}})();
			$pyjs['track']['lineno']=220;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return div['appendChild']($p['getattr'](self, 'exportBtn'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_166_err){if (!$p['isinstance']($pyjs_dbg_166_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_166_err);}throw $pyjs_dbg_166_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['widget']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=222;
		$method = $pyjs__bind_method2('onExportBtnClick', function() {
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
			var encoding,language;
			$pyjs['track']={'module':'widgets.csvexport', 'lineno':222};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.csvexport';
			$pyjs['track']['lineno']=222;
			$pyjs['track']['lineno']=223;
			encoding = $p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'encodingSelect')['__getitem__']('options')['item']($p['getattr'](self, 'encodingSelect')['__getitem__']('selectedIndex'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_167_err){if (!$p['isinstance']($pyjs_dbg_167_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_167_err);}throw $pyjs_dbg_167_err;
}})(), 'value');
			$pyjs['track']['lineno']=225;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'langSelect'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_168_err){if (!$p['isinstance']($pyjs_dbg_168_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_168_err);}throw $pyjs_dbg_168_err;
}})()) {
				$pyjs['track']['lineno']=226;
				language = $p['getattr']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'langSelect')['__getitem__']('options')['item']($p['getattr'](self, 'langSelect')['__getitem__']('selectedIndex'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_169_err){if (!$p['isinstance']($pyjs_dbg_169_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_169_err);}throw $pyjs_dbg_169_err;
}})(), 'value');
			}
			else {
				$pyjs['track']['lineno']=228;
				language = null;
			}
			$pyjs['track']['lineno']=230;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(null, $m['ExportCsv'], null, null, [{'encoding':encoding, 'language':language}, $p['getattr'](self, 'widget'), (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['widget']['getCurrentSelection']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_170_err){if (!$p['isinstance']($pyjs_dbg_170_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_170_err);}throw $pyjs_dbg_170_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_171_err){if (!$p['isinstance']($pyjs_dbg_171_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_171_err);}throw $pyjs_dbg_171_err;
}})();
			$pyjs['track']['lineno']=231;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['close']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_172_err){if (!$p['isinstance']($pyjs_dbg_172_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_172_err);}throw $pyjs_dbg_172_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['onExportBtnClick'] = $method;
		$pyjs['track']['lineno']=155;
		var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Popup'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('ExportCsvStarter', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end widgets.csvexport */


/* end module: widgets.csvexport */


/*
PYJS_DEPS: ['html5', 'utils', 'datetime', 'network.NetworkService', 'network', 'network.DeferredCall', 'config.conf', 'config', 'priorityqueue.actionDelegateSelector', 'priorityqueue', 'priorityqueue.extractorDelegateSelector', 'i18n.translate', 'i18n', 'i18n.addTranslation']
*/
