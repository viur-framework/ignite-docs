/* start module: bones.date */
$pyjs['loaded_modules']['bones.date'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['bones.date']['__was_initialized__']) return $pyjs['loaded_modules']['bones.date'];
	if(typeof $pyjs['loaded_modules']['bones'] == 'undefined' || !$pyjs['loaded_modules']['bones']['__was_initialized__']) $p['___import___']('bones', null);
	var $m = $pyjs['loaded_modules']['bones.date'];
	$m['__repr__'] = function() { return '<module: bones.date>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'bones.date';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['bones']['date'] = $pyjs['loaded_modules']['bones.date'];
	$m.__track_lines__[1] = 'bones.date.py, line 1:\n    # -*- coding: utf-8 -*-';
	$m.__track_lines__[2] = 'bones.date.py, line 2:\n    import html5';
	$m.__track_lines__[3] = 'bones.date.py, line 3:\n    from priorityqueue import editBoneSelector, viewDelegateSelector, extractorDelegateSelector';
	$m.__track_lines__[4] = 'bones.date.py, line 4:\n    from datetime import datetime';
	$m.__track_lines__[5] = 'bones.date.py, line 5:\n    import re';
	$m.__track_lines__[6] = 'bones.date.py, line 6:\n    from i18n import translate';
	$m.__track_lines__[7] = 'bones.date.py, line 7:\n    from config import conf';
	$m.__track_lines__[8] = 'bones.date.py, line 8:\n    from bones.base import BaseBoneExtractor';
	$m.__track_lines__[10] = 'bones.date.py, line 10:\n    class DateBoneExtractor(BaseBoneExtractor):';
	$m.__track_lines__[11] = 'bones.date.py, line 11:\n    def __init__(self, moduleName, boneName, skelStructure, *args, **kwargs ):';
	$m.__track_lines__[12] = 'bones.date.py, line 12:\n    super( DateBoneExtractor, self ).__init__()';
	$m.__track_lines__[13] = 'bones.date.py, line 13:\n    self.skelStructure = skelStructure';
	$m.__track_lines__[14] = 'bones.date.py, line 14:\n    self.boneName = boneName';
	$m.__track_lines__[15] = 'bones.date.py, line 15:\n    self.moduleName = moduleName';
	$m.__track_lines__[17] = 'bones.date.py, line 17:\n    def render(self, data, field):';
	$m.__track_lines__[18] = 'bones.date.py, line 18:\n    if not(self.boneName in self.skelStructure';
	$m.__track_lines__[20] = 'bones.date.py, line 20:\n    return conf["empty_value"]';
	$m.__track_lines__[22] = 'bones.date.py, line 22:\n    structure = self.skelStructure[self.boneName]';
	$m.__track_lines__[23] = 'bones.date.py, line 23:\n    val = data[field]';
	$m.__track_lines__[25] = 'bones.date.py, line 25:\n    try:';
	$m.__track_lines__[26] = 'bones.date.py, line 26:\n    if structure["date"] and structure["time"]:';
	$m.__track_lines__[27] = 'bones.date.py, line 27:\n    try:';
	$m.__track_lines__[28] = 'bones.date.py, line 28:\n    dt = datetime.strptime( val, "%d.%m.%Y %H:%M:%S")';
	$m.__track_lines__[30] = 'bones.date.py, line 30:\n    return "Error parsing Date"';
	$m.__track_lines__[32] = 'bones.date.py, line 32:\n    return dt.strftime("%d.%m.%Y %H:%M:%S")';
	$m.__track_lines__[35] = 'bones.date.py, line 35:\n    try:';
	$m.__track_lines__[36] = 'bones.date.py, line 36:\n    dt = datetime.strptime( val, "%d.%m.%Y")';
	$m.__track_lines__[38] = 'bones.date.py, line 38:\n    return "Error parsing Date"';
	$m.__track_lines__[40] = 'bones.date.py, line 40:\n    return dt.strftime("%d.%m.%Y")';
	$m.__track_lines__[43] = 'bones.date.py, line 43:\n    try:';
	$m.__track_lines__[44] = 'bones.date.py, line 44:\n    dt = datetime.strptime( val, "%H:%M:%S")';
	$m.__track_lines__[46] = 'bones.date.py, line 46:\n    return "Error parsing time"';
	$m.__track_lines__[48] = 'bones.date.py, line 48:\n    return dt.strftime("%H:%M:%S")';
	$m.__track_lines__[51] = 'bones.date.py, line 51:\n    return str(val)';
	$m.__track_lines__[54] = 'bones.date.py, line 54:\n    class DateViewBoneDelegate( object ):';
	$m.__track_lines__[55] = 'bones.date.py, line 55:\n    def __init__(self, moduleName, boneName, skelStructure, *args, **kwargs ):';
	$m.__track_lines__[56] = 'bones.date.py, line 56:\n    super( DateViewBoneDelegate, self ).__init__()';
	$m.__track_lines__[57] = 'bones.date.py, line 57:\n    self.skelStructure = skelStructure';
	$m.__track_lines__[58] = 'bones.date.py, line 58:\n    self.boneName = boneName';
	$m.__track_lines__[59] = 'bones.date.py, line 59:\n    self.moduleName = moduleName';
	$m.__track_lines__[61] = 'bones.date.py, line 61:\n    def render( self, data, field ):';
	$m.__track_lines__[63] = 'bones.date.py, line 63:\n    if not(self.boneName in self.skelStructure and data and data.get(field)):';
	$m.__track_lines__[64] = 'bones.date.py, line 64:\n    return html5.Label(conf["empty_value"])';
	$m.__track_lines__[66] = 'bones.date.py, line 66:\n    structure = self.skelStructure[self.boneName]';
	$m.__track_lines__[67] = 'bones.date.py, line 67:\n    val = data[field]';
	$m.__track_lines__[69] = 'bones.date.py, line 69:\n    try:';
	$m.__track_lines__[70] = 'bones.date.py, line 70:\n    if structure["date"] and structure["time"]:';
	$m.__track_lines__[71] = 'bones.date.py, line 71:\n    try:';
	$m.__track_lines__[72] = 'bones.date.py, line 72:\n    dt = datetime.strptime(val, "%d.%m.%Y %H:%M:%S")';
	$m.__track_lines__[74] = 'bones.date.py, line 74:\n    return html5.TextNode(translate("Error parsing Date"))';
	$m.__track_lines__[76] = 'bones.date.py, line 76:\n    span = html5.Span()';
	$m.__track_lines__[77] = 'bones.date.py, line 77:\n    span["class"].append("datetime")';
	$m.__track_lines__[78] = 'bones.date.py, line 78:\n    dateSpan = html5.Span()';
	$m.__track_lines__[79] = 'bones.date.py, line 79:\n    dateSpan["class"].append("date")';
	$m.__track_lines__[80] = 'bones.date.py, line 80:\n    dateSpan.appendChild( html5.TextNode( dt.strftime("%d.%m.%Y") ))';
	$m.__track_lines__[81] = 'bones.date.py, line 81:\n    timeSpan = html5.Span()';
	$m.__track_lines__[82] = 'bones.date.py, line 82:\n    timeSpan["class"].append("time")';
	$m.__track_lines__[83] = 'bones.date.py, line 83:\n    timeSpan.appendChild( html5.TextNode( dt.strftime("%H:%M:%S") ))';
	$m.__track_lines__[84] = 'bones.date.py, line 84:\n    span.appendChild(dateSpan)';
	$m.__track_lines__[85] = 'bones.date.py, line 85:\n    span.appendChild(timeSpan)';
	$m.__track_lines__[87] = 'bones.date.py, line 87:\n    return span';
	$m.__track_lines__[90] = 'bones.date.py, line 90:\n    try:';
	$m.__track_lines__[91] = 'bones.date.py, line 91:\n    dt = datetime.strptime( val, "%d.%m.%Y")';
	$m.__track_lines__[93] = 'bones.date.py, line 93:\n    return html5.TextNode(translate("Error parsing Date"))';
	$m.__track_lines__[95] = 'bones.date.py, line 95:\n    dateSpan = html5.Span()';
	$m.__track_lines__[96] = 'bones.date.py, line 96:\n    dateSpan["class"].append("date")';
	$m.__track_lines__[97] = 'bones.date.py, line 97:\n    dateSpan.appendChild(html5.TextNode(dt.strftime("%d.%m.%Y")))';
	$m.__track_lines__[99] = 'bones.date.py, line 99:\n    return dateSpan';
	$m.__track_lines__[102] = 'bones.date.py, line 102:\n    try:';
	$m.__track_lines__[103] = 'bones.date.py, line 103:\n    dt = datetime.strptime(val, "%H:%M:%S")';
	$m.__track_lines__[105] = 'bones.date.py, line 105:\n    return html5.TextNode(translate("Error parsing Date"))';
	$m.__track_lines__[107] = 'bones.date.py, line 107:\n    timeSpan = html5.Span()';
	$m.__track_lines__[108] = 'bones.date.py, line 108:\n    timeSpan["class"].append("time")';
	$m.__track_lines__[109] = 'bones.date.py, line 109:\n    timeSpan.appendChild( html5.TextNode(dt.strftime("%H:%M:%S")))';
	$m.__track_lines__[110] = 'bones.date.py, line 110:\n    return timeSpan';
	$m.__track_lines__[113] = 'bones.date.py, line 113:\n    return html5.Label(str(val))';
	$m.__track_lines__[115] = 'bones.date.py, line 115:\n    class DateEditBone( html5.Div ):';
	$m.__track_lines__[116] = 'bones.date.py, line 116:\n    def __init__(self, moduleName, boneName, readOnly, date=True, time=True, *args, **kwargs ):';
	$m.__track_lines__[117] = 'bones.date.py, line 117:\n    super( DateEditBone,  self ).__init__(*args, **kwargs)';
	$m.__track_lines__[118] = 'bones.date.py, line 118:\n    self.boneName = boneName';
	$m.__track_lines__[119] = 'bones.date.py, line 119:\n    self.readOnly = readOnly';
	$m.__track_lines__[120] = 'bones.date.py, line 120:\n    self.hasdate = date';
	$m.__track_lines__[121] = 'bones.date.py, line 121:\n    self.hastime = time';
	$m.__track_lines__[123] = 'bones.date.py, line 123:\n    if date:';
	$m.__track_lines__[124] = 'bones.date.py, line 124:\n    self.dateinput = html5.Input()';
	$m.__track_lines__[127] = 'bones.date.py, line 127:\n    try:';
	$m.__track_lines__[128] = 'bones.date.py, line 128:\n    self.dateinput["type"] = "date"';
	$m.__track_lines__[130] = 'bones.date.py, line 130:\n    pass';
	$m.__track_lines__[132] = 'bones.date.py, line 132:\n    self.dateinput["style"]["float"] = "left"';
	$m.__track_lines__[133] = 'bones.date.py, line 133:\n    self.appendChild(self.dateinput)';
	$m.__track_lines__[135] = 'bones.date.py, line 135:\n    if self.readOnly:';
	$m.__track_lines__[136] = 'bones.date.py, line 136:\n    self.dateinput["readonly"] = True';
	$m.__track_lines__[138] = 'bones.date.py, line 138:\n    if time:';
	$m.__track_lines__[139] = 'bones.date.py, line 139:\n    self.timeinput=html5.Input()';
	$m.__track_lines__[142] = 'bones.date.py, line 142:\n    try:';
	$m.__track_lines__[143] = 'bones.date.py, line 143:\n    self.timeinput["type"] = "time"';
	$m.__track_lines__[145] = 'bones.date.py, line 145:\n    pass';
	$m.__track_lines__[147] = 'bones.date.py, line 147:\n    self.timeinput["style"]["float"] = "left"   #fixme: Do this with css?';
	$m.__track_lines__[148] = 'bones.date.py, line 148:\n    self.timeinput["style"]["width"] = "70px"   #fixme: Do this with css?';
	$m.__track_lines__[149] = 'bones.date.py, line 149:\n    self.appendChild(self.timeinput)';
	$m.__track_lines__[151] = 'bones.date.py, line 151:\n    if self.readOnly:';
	$m.__track_lines__[152] = 'bones.date.py, line 152:\n    self.timeinput["readonly"] = True';
	$m.__track_lines__[155] = 'bones.date.py, line 154:\n    @staticmethod ... def fromSkelStructure(moduleName, boneName, skelStructure):';
	$m.__track_lines__[156] = 'bones.date.py, line 156:\n    readOnly = "readonly" in skelStructure[ boneName ].keys() and skelStructure[ boneName ]["readonly"]';
	$m.__track_lines__[157] = 'bones.date.py, line 157:\n    date = skelStructure[ boneName ]["date"] if "date" in skelStructure[ boneName ].keys() else True';
	$m.__track_lines__[158] = 'bones.date.py, line 158:\n    time = skelStructure[ boneName ]["time"] if "time" in skelStructure[ boneName ].keys() else True';
	$m.__track_lines__[159] = 'bones.date.py, line 159:\n    return DateEditBone(moduleName, boneName, readOnly, date, time)';
	$m.__track_lines__[161] = 'bones.date.py, line 161:\n    def unserialize(self, data, extendedErrorInformation=None):';
	$m.__track_lines__[162] = 'bones.date.py, line 162:\n    if data.get(self.boneName):';
	$m.__track_lines__[163] = 'bones.date.py, line 163:\n    if self.hastime and not self.hasdate:';
	$m.__track_lines__[164] = 'bones.date.py, line 164:\n    self.timeinput["value"] = data[ self.boneName ]';
	$m.__track_lines__[166] = 'bones.date.py, line 166:\n    if self.hasdate and not self.hastime:';
	$m.__track_lines__[167] = 'bones.date.py, line 167:\n    dateobj = datetime.strptime(data[ self.boneName ], "%d.%m.%Y")';
	$m.__track_lines__[168] = 'bones.date.py, line 168:\n    self.dateinput["value"] = dateobj.strftime( "%Y-%m-%d" )';
	$m.__track_lines__[170] = 'bones.date.py, line 170:\n    if self.hasdate and self.hastime:';
	$m.__track_lines__[172] = 'bones.date.py, line 172:\n    try:';
	$m.__track_lines__[173] = 'bones.date.py, line 173:\n    dateobj = datetime.strptime(data[self.boneName], "%d.%m.%Y %H:%M:%S")';
	$m.__track_lines__[174] = 'bones.date.py, line 174:\n    self.dateinput["value"]=dateobj.strftime("%Y-%m-%d")';
	$m.__track_lines__[175] = 'bones.date.py, line 175:\n    self.timeinput["value"]=dateobj.strftime("%H:%M:%S")';
	$m.__track_lines__[178] = 'bones.date.py, line 178:\n    self.dateinput["value"] = "-"';
	$m.__track_lines__[179] = 'bones.date.py, line 179:\n    self.timeinput["value"] = "-"';
	$m.__track_lines__[181] = 'bones.date.py, line 181:\n    def serializeForPost(self):';
	$m.__track_lines__[183] = 'bones.date.py, line 183:\n    adatetime=["00","00","0000","00","00","00"]';
	$m.__track_lines__[185] = 'bones.date.py, line 185:\n    if hasattr(self,"timeinput"):';
	$m.__track_lines__[186] = 'bones.date.py, line 186:\n    result = re.match(\'(\\d+):(\\d+)(:(\\d+))?\',self.timeinput["value"])';
	$m.__track_lines__[187] = 'bones.date.py, line 187:\n    if result:';
	$m.__track_lines__[188] = 'bones.date.py, line 188:\n    adatetime[3] = result.group(1)';
	$m.__track_lines__[189] = 'bones.date.py, line 189:\n    adatetime[4] = result.group(2)';
	$m.__track_lines__[191] = 'bones.date.py, line 191:\n    if result.group(4):';
	$m.__track_lines__[192] = 'bones.date.py, line 192:\n    adatetime[5] = result.group(4)';
	$m.__track_lines__[194] = 'bones.date.py, line 194:\n    if hasattr(self,"dateinput"):';
	$m.__track_lines__[195] = 'bones.date.py, line 195:\n    result = re.match(\'(\\d+).(\\d+).(\\d+)\',self.dateinput["value"])';
	$m.__track_lines__[196] = 'bones.date.py, line 196:\n    if result:';
	$m.__track_lines__[197] = 'bones.date.py, line 197:\n    adatetime[0] = result.group(3)';
	$m.__track_lines__[198] = 'bones.date.py, line 198:\n    adatetime[1] = result.group(2)';
	$m.__track_lines__[199] = 'bones.date.py, line 199:\n    adatetime[2] = result.group(1)';
	$m.__track_lines__[201] = 'bones.date.py, line 201:\n    if adatetime[2]=="0000":';
	$m.__track_lines__[202] = 'bones.date.py, line 202:\n    return {self.boneName: adatetime[3]+":"+adatetime[4]+":00"}';
	$m.__track_lines__[204] = 'bones.date.py, line 204:\n    returnvalue = adatetime[0]+"."+adatetime[1]+"."+adatetime[2]+" "+adatetime[3]+":"+adatetime[4]+":"+adatetime[5]';
	$m.__track_lines__[205] = 'bones.date.py, line 205:\n    return {self.boneName: returnvalue}';
	$m.__track_lines__[207] = 'bones.date.py, line 207:\n    def serializeForDocument(self):';
	$m.__track_lines__[208] = 'bones.date.py, line 208:\n    return self.serialize()';
	$m.__track_lines__[210] = 'bones.date.py, line 210:\n    def CheckForDateBone(moduleName, boneName, skelStucture, *args, **kwargs):';
	$m.__track_lines__[211] = 'bones.date.py, line 211:\n    return skelStucture[boneName]["type"] == "date"';
	$m.__track_lines__[214] = 'bones.date.py, line 214:\n    editBoneSelector.insert(3, CheckForDateBone, DateEditBone)';
	$m.__track_lines__[215] = 'bones.date.py, line 215:\n    viewDelegateSelector.insert(3, CheckForDateBone, DateViewBoneDelegate)';
	$m.__track_lines__[216] = 'bones.date.py, line 216:\n    extractorDelegateSelector.insert(3, CheckForDateBone, DateBoneExtractor)';


	$pyjs['track']['module']='bones.date';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=2;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['html5'] = $p['___import___']('html5', 'bones');
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
	$m['datetime'] = $p['___import___']('datetime.datetime', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=5;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['re'] = $p['___import___']('re', 'bones');
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=6;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['translate'] = $p['___import___']('i18n.translate', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=7;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['conf'] = $p['___import___']('config.conf', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=8;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['BaseBoneExtractor'] = $p['___import___']('bones.base.BaseBoneExtractor', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=10;
	$m['DateBoneExtractor'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'bones.date';
		$pyjs['track']['lineno']=11;
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

			$pyjs['track']={'module':'bones.date', 'lineno':11};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.date';
			$pyjs['track']['lineno']=11;
			$pyjs['track']['lineno']=12;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['DateBoneExtractor'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()['__init__']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs['track']['lineno']=13;
			self['skelStructure'] = skelStructure;
			$pyjs['track']['lineno']=14;
			self['boneName'] = boneName;
			$pyjs['track']['lineno']=15;
			self['moduleName'] = moduleName;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['moduleName'],['boneName'],['skelStructure']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=17;
		$method = $pyjs__bind_method2('render', function(data, field) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				field = arguments[2];
			}
			var $and8,$and9,val,$and1,$and3,$and4,$and5,$and6,$and7,$pyjs_try_err,dt,$and2,structure;
			$pyjs['track']={'module':'bones.date', 'lineno':17};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.date';
			$pyjs['track']['lineno']=17;
			$pyjs['track']['lineno']=18;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool'](($p['bool']($and1=$p['getattr'](self, 'skelStructure')['__contains__']($p['getattr'](self, 'boneName')))?($p['bool']($and2=data)?(function(){try{try{$pyjs['in_try_except'] += 1;
			return data['get'](field);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})():$and2):$and1)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})()) {
				$pyjs['track']['lineno']=20;
				$pyjs['track']['lineno']=20;
				var $pyjs__ret = $m['conf']['__getitem__']('empty_value');
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=22;
			structure = $p['getattr'](self, 'skelStructure')['__getitem__']($p['getattr'](self, 'boneName'));
			$pyjs['track']['lineno']=23;
			val = data['__getitem__'](field);
			$pyjs['track']['lineno']=25;
			var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
			try {
				try {
					$pyjs['in_try_except'] += 1;
					$pyjs['track']['lineno']=26;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['bool']($and4=structure['__getitem__']('date'))?structure['__getitem__']('time'):$and4));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})()) {
						$pyjs['track']['lineno']=27;
						var $pyjs__trackstack_size_2 = $pyjs['trackstack']['length'];
						try {
							try {
								$pyjs['in_try_except'] += 1;
								$pyjs['track']['lineno']=28;
								dt = (function(){try{try{$pyjs['in_try_except'] += 1;
								return $m['datetime']['strptime'](val, '%d.%m.%Y %H:%M:%S');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
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
							$pyjs['track']['module']='bones.date';
							if (true) {
								$pyjs['track']['lineno']=30;
								$pyjs['track']['lineno']=30;
								var $pyjs__ret = 'Error parsing Date';
								$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
								return $pyjs__ret;
							}
						}
						$pyjs['track']['lineno']=32;
						$pyjs['track']['lineno']=32;
						var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
						return dt['strftime']('%d.%m.%Y %H:%M:%S');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
					else if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['bool']($and6=structure['__getitem__']('date'))?!$p['bool'](structure['__getitem__']('time')):$and6));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})()) {
						$pyjs['track']['lineno']=35;
						var $pyjs__trackstack_size_2 = $pyjs['trackstack']['length'];
						try {
							try {
								$pyjs['in_try_except'] += 1;
								$pyjs['track']['lineno']=36;
								dt = (function(){try{try{$pyjs['in_try_except'] += 1;
								return $m['datetime']['strptime'](val, '%d.%m.%Y');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
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
							$pyjs['track']['module']='bones.date';
							if (true) {
								$pyjs['track']['lineno']=38;
								$pyjs['track']['lineno']=38;
								var $pyjs__ret = 'Error parsing Date';
								$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
								return $pyjs__ret;
							}
						}
						$pyjs['track']['lineno']=40;
						$pyjs['track']['lineno']=40;
						var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
						return dt['strftime']('%d.%m.%Y');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
					else if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['bool']($and8=!$p['bool'](structure['__getitem__']('date')))?structure['__getitem__']('time'):$and8));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})()) {
						$pyjs['track']['lineno']=43;
						var $pyjs__trackstack_size_2 = $pyjs['trackstack']['length'];
						try {
							try {
								$pyjs['in_try_except'] += 1;
								$pyjs['track']['lineno']=44;
								dt = (function(){try{try{$pyjs['in_try_except'] += 1;
								return $m['datetime']['strptime'](val, '%H:%M:%S');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
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
							$pyjs['track']['module']='bones.date';
							if (true) {
								$pyjs['track']['lineno']=46;
								$pyjs['track']['lineno']=46;
								var $pyjs__ret = 'Error parsing time';
								$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
								return $pyjs__ret;
							}
						}
						$pyjs['track']['lineno']=48;
						$pyjs['track']['lineno']=48;
						var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
						return dt['strftime']('%H:%M:%S');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
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
				$pyjs['track']['module']='bones.date';
				if (true) {
					$pyjs['track']['lineno']=51;
					$pyjs['track']['lineno']=51;
					var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['str'](val);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['data'],['field']]);
		$cls_definition['render'] = $method;
		$pyjs['track']['lineno']=10;
		var $bases = new Array($m['BaseBoneExtractor']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('DateBoneExtractor', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=54;
	$m['DateViewBoneDelegate'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'bones.date';
		$pyjs['track']['lineno']=55;
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

			$pyjs['track']={'module':'bones.date', 'lineno':55};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.date';
			$pyjs['track']['lineno']=55;
			$pyjs['track']['lineno']=56;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['DateViewBoneDelegate'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})()['__init__']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
			$pyjs['track']['lineno']=57;
			self['skelStructure'] = skelStructure;
			$pyjs['track']['lineno']=58;
			self['boneName'] = boneName;
			$pyjs['track']['lineno']=59;
			self['moduleName'] = moduleName;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['moduleName'],['boneName'],['skelStructure']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=61;
		$method = $pyjs__bind_method2('render', function(data, field) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				field = arguments[2];
			}
			var span,val,$and13,timeSpan,dateSpan,$pyjs_try_err,$and12,$and10,$and11,$and16,$and17,$and14,$and15,dt,$and18,structure;
			$pyjs['track']={'module':'bones.date', 'lineno':61};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.date';
			$pyjs['track']['lineno']=61;
			$pyjs['track']['lineno']=63;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool'](($p['bool']($and10=$p['getattr'](self, 'skelStructure')['__contains__']($p['getattr'](self, 'boneName')))?($p['bool']($and11=data)?(function(){try{try{$pyjs['in_try_except'] += 1;
			return data['get'](field);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})():$and11):$and10)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})()) {
				$pyjs['track']['lineno']=64;
				$pyjs['track']['lineno']=64;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Label']($m['conf']['__getitem__']('empty_value'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=66;
			structure = $p['getattr'](self, 'skelStructure')['__getitem__']($p['getattr'](self, 'boneName'));
			$pyjs['track']['lineno']=67;
			val = data['__getitem__'](field);
			$pyjs['track']['lineno']=69;
			var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
			try {
				try {
					$pyjs['in_try_except'] += 1;
					$pyjs['track']['lineno']=70;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['bool']($and13=structure['__getitem__']('date'))?structure['__getitem__']('time'):$and13));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})()) {
						$pyjs['track']['lineno']=71;
						var $pyjs__trackstack_size_2 = $pyjs['trackstack']['length'];
						try {
							try {
								$pyjs['in_try_except'] += 1;
								$pyjs['track']['lineno']=72;
								dt = (function(){try{try{$pyjs['in_try_except'] += 1;
								return $m['datetime']['strptime'](val, '%d.%m.%Y %H:%M:%S');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
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
							$pyjs['track']['module']='bones.date';
							if (true) {
								$pyjs['track']['lineno']=74;
								$pyjs['track']['lineno']=74;
								var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
								return $m['html5']['TextNode']((function(){try{try{$pyjs['in_try_except'] += 1;
								return $m['translate']('Error parsing Date');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
								$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
								return $pyjs__ret;
							}
						}
						$pyjs['track']['lineno']=76;
						span = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['html5']['Span']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
						$pyjs['track']['lineno']=77;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return span['__getitem__']('class')['append']('datetime');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
						$pyjs['track']['lineno']=78;
						dateSpan = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['html5']['Span']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
						$pyjs['track']['lineno']=79;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return dateSpan['__getitem__']('class')['append']('date');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
						$pyjs['track']['lineno']=80;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return dateSpan['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['html5']['TextNode']((function(){try{try{$pyjs['in_try_except'] += 1;
						return dt['strftime']('%d.%m.%Y');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
						$pyjs['track']['lineno']=81;
						timeSpan = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['html5']['Span']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
						$pyjs['track']['lineno']=82;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return timeSpan['__getitem__']('class')['append']('time');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
						$pyjs['track']['lineno']=83;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return timeSpan['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['html5']['TextNode']((function(){try{try{$pyjs['in_try_except'] += 1;
						return dt['strftime']('%H:%M:%S');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})();
						$pyjs['track']['lineno']=84;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return span['appendChild'](dateSpan);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})();
						$pyjs['track']['lineno']=85;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return span['appendChild'](timeSpan);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})();
						$pyjs['track']['lineno']=87;
						$pyjs['track']['lineno']=87;
						var $pyjs__ret = span;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
					else if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['bool']($and15=structure['__getitem__']('date'))?!$p['bool'](structure['__getitem__']('time')):$and15));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})()) {
						$pyjs['track']['lineno']=90;
						var $pyjs__trackstack_size_2 = $pyjs['trackstack']['length'];
						try {
							try {
								$pyjs['in_try_except'] += 1;
								$pyjs['track']['lineno']=91;
								dt = (function(){try{try{$pyjs['in_try_except'] += 1;
								return $m['datetime']['strptime'](val, '%d.%m.%Y');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
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
							$pyjs['track']['module']='bones.date';
							if (true) {
								$pyjs['track']['lineno']=93;
								$pyjs['track']['lineno']=93;
								var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
								return $m['html5']['TextNode']((function(){try{try{$pyjs['in_try_except'] += 1;
								return $m['translate']('Error parsing Date');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})();
								$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
								return $pyjs__ret;
							}
						}
						$pyjs['track']['lineno']=95;
						dateSpan = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['html5']['Span']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})();
						$pyjs['track']['lineno']=96;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return dateSpan['__getitem__']('class')['append']('date');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})();
						$pyjs['track']['lineno']=97;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return dateSpan['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['html5']['TextNode']((function(){try{try{$pyjs['in_try_except'] += 1;
						return dt['strftime']('%d.%m.%Y');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})();
						$pyjs['track']['lineno']=99;
						$pyjs['track']['lineno']=99;
						var $pyjs__ret = dateSpan;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
					else if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['bool']($and17=!$p['bool'](structure['__getitem__']('date')))?structure['__getitem__']('time'):$and17));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})()) {
						$pyjs['track']['lineno']=102;
						var $pyjs__trackstack_size_2 = $pyjs['trackstack']['length'];
						try {
							try {
								$pyjs['in_try_except'] += 1;
								$pyjs['track']['lineno']=103;
								dt = (function(){try{try{$pyjs['in_try_except'] += 1;
								return $m['datetime']['strptime'](val, '%H:%M:%S');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
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
							$pyjs['track']['module']='bones.date';
							if (true) {
								$pyjs['track']['lineno']=105;
								$pyjs['track']['lineno']=105;
								var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
								return $m['html5']['TextNode']((function(){try{try{$pyjs['in_try_except'] += 1;
								return $m['translate']('Error parsing Date');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})();
								$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
								return $pyjs__ret;
							}
						}
						$pyjs['track']['lineno']=107;
						timeSpan = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['html5']['Span']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})();
						$pyjs['track']['lineno']=108;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return timeSpan['__getitem__']('class')['append']('time');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})();
						$pyjs['track']['lineno']=109;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return timeSpan['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['html5']['TextNode']((function(){try{try{$pyjs['in_try_except'] += 1;
						return dt['strftime']('%H:%M:%S');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})();
						$pyjs['track']['lineno']=110;
						$pyjs['track']['lineno']=110;
						var $pyjs__ret = timeSpan;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
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
				$pyjs['track']['module']='bones.date';
				if (true) {
					$pyjs['track']['lineno']=113;
					$pyjs['track']['lineno']=113;
					var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['html5']['Label']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['str'](val);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['data'],['field']]);
		$cls_definition['render'] = $method;
		$pyjs['track']['lineno']=54;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('DateViewBoneDelegate', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=115;
	$m['DateEditBone'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'bones.date';
		$pyjs['track']['lineno']=116;
		$method = $pyjs__bind_method2('__init__', function(moduleName, boneName, readOnly, date, time) {
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
				date = arguments[4];
				time = arguments[5];
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
				if (typeof time != 'undefined') {
					if (time !== null && typeof time['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = time;
						time = arguments[6];
					}
				} else 				if (typeof date != 'undefined') {
					if (date !== null && typeof date['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = date;
						date = arguments[6];
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
			if (typeof date == 'undefined') date=arguments['callee']['__args__'][6][1];
			if (typeof time == 'undefined') time=arguments['callee']['__args__'][7][1];
			var $pyjs_try_err;
			$pyjs['track']={'module':'bones.date', 'lineno':116};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.date';
			$pyjs['track']['lineno']=116;
			$pyjs['track']['lineno']=117;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['DateEditBone'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})();
			$pyjs['track']['lineno']=118;
			self['boneName'] = boneName;
			$pyjs['track']['lineno']=119;
			self['readOnly'] = readOnly;
			$pyjs['track']['lineno']=120;
			self['hasdate'] = date;
			$pyjs['track']['lineno']=121;
			self['hastime'] = time;
			$pyjs['track']['lineno']=123;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](date);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})()) {
				$pyjs['track']['lineno']=124;
				self['dateinput'] = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Input']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})();
				$pyjs['track']['lineno']=127;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					try {
						$pyjs['in_try_except'] += 1;
						$pyjs['track']['lineno']=128;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](self, 'dateinput')['__setitem__']('type', 'date');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
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
					$pyjs['track']['module']='bones.date';
					if (true) {
						$pyjs['track']['lineno']=130;
					}
				}
				$pyjs['track']['lineno']=132;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'dateinput')['__getitem__']('style')['__setitem__']('float', 'left');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})();
				$pyjs['track']['lineno']=133;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['appendChild']($p['getattr'](self, 'dateinput'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})();
				$pyjs['track']['lineno']=135;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, 'readOnly'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})()) {
					$pyjs['track']['lineno']=136;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'dateinput')['__setitem__']('readonly', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})();
				}
			}
			$pyjs['track']['lineno']=138;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](time);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})()) {
				$pyjs['track']['lineno']=139;
				self['timeinput'] = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Input']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})();
				$pyjs['track']['lineno']=142;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					try {
						$pyjs['in_try_except'] += 1;
						$pyjs['track']['lineno']=143;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](self, 'timeinput')['__setitem__']('type', 'time');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
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
					$pyjs['track']['module']='bones.date';
					if (true) {
						$pyjs['track']['lineno']=145;
					}
				}
				$pyjs['track']['lineno']=147;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'timeinput')['__getitem__']('style')['__setitem__']('float', 'left');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})();
				$pyjs['track']['lineno']=148;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'timeinput')['__getitem__']('style')['__setitem__']('width', '70px');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})();
				$pyjs['track']['lineno']=149;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['appendChild']($p['getattr'](self, 'timeinput'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})();
				$pyjs['track']['lineno']=151;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, 'readOnly'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})()) {
					$pyjs['track']['lineno']=152;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'timeinput')['__setitem__']('readonly', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})();
				}
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['moduleName'],['boneName'],['readOnly'],['date', true],['time', true]]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=155;
		$method = $pyjs__bind_method2('fromSkelStructure', function(moduleName, boneName, skelStructure) {
			var $and19,readOnly,time,date,$and20;
			$pyjs['track']={'module':'bones.date', 'lineno':155};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.date';
			$pyjs['track']['lineno']=155;
			$pyjs['track']['lineno']=156;
			readOnly = ($p['bool']($and19=(function(){try{try{$pyjs['in_try_except'] += 1;
			return skelStructure['__getitem__'](boneName)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})()['__contains__']('readonly'))?skelStructure['__getitem__'](boneName)['__getitem__']('readonly'):$and19);
			$pyjs['track']['lineno']=157;
			date = ($p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return skelStructure['__getitem__'](boneName)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})()['__contains__']('date'))? (skelStructure['__getitem__'](boneName)['__getitem__']('date')) : (true));
			$pyjs['track']['lineno']=158;
			time = ($p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return skelStructure['__getitem__'](boneName)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})()['__contains__']('time'))? (skelStructure['__getitem__'](boneName)['__getitem__']('time')) : (true));
			$pyjs['track']['lineno']=159;
			$pyjs['track']['lineno']=159;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['DateEditBone'](moduleName, boneName, readOnly, date, time);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['moduleName'],['boneName'],['skelStructure']]);
		$cls_definition['fromSkelStructure'] = $method;
		$pyjs['track']['lineno']=161;
		$method = $pyjs__bind_method2('unserialize', function(data, extendedErrorInformation) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				data = arguments[1];
				extendedErrorInformation = arguments[2];
			}
			if (typeof extendedErrorInformation == 'undefined') extendedErrorInformation=arguments['callee']['__args__'][4][1];
			var $pyjs_try_err,dateobj,$and23,$and22,$and21,$and24,$and26,$and25;
			$pyjs['track']={'module':'bones.date', 'lineno':161};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.date';
			$pyjs['track']['lineno']=161;
			$pyjs['track']['lineno']=162;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return data['get']($p['getattr'](self, 'boneName'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})()) {
				$pyjs['track']['lineno']=163;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($and21=$p['getattr'](self, 'hastime'))?!$p['bool']($p['getattr'](self, 'hasdate')):$and21));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})()) {
					$pyjs['track']['lineno']=164;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'timeinput')['__setitem__']('value', data['__getitem__']($p['getattr'](self, 'boneName')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})();
				}
				$pyjs['track']['lineno']=166;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($and23=$p['getattr'](self, 'hasdate'))?!$p['bool']($p['getattr'](self, 'hastime')):$and23));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})()) {
					$pyjs['track']['lineno']=167;
					dateobj = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['datetime']['strptime'](data['__getitem__']($p['getattr'](self, 'boneName')), '%d.%m.%Y');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
}})();
					$pyjs['track']['lineno']=168;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'dateinput')['__setitem__']('value', (function(){try{try{$pyjs['in_try_except'] += 1;
					return dateobj['strftime']('%Y-%m-%d');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})();
				}
				$pyjs['track']['lineno']=170;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($and25=$p['getattr'](self, 'hasdate'))?$p['getattr'](self, 'hastime'):$and25));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})()) {
					$pyjs['track']['lineno']=172;
					var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
					try {
						try {
							$pyjs['in_try_except'] += 1;
							$pyjs['track']['lineno']=173;
							dateobj = (function(){try{try{$pyjs['in_try_except'] += 1;
							return $m['datetime']['strptime'](data['__getitem__']($p['getattr'](self, 'boneName')), '%d.%m.%Y %H:%M:%S');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_88_err){if (!$p['isinstance']($pyjs_dbg_88_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_88_err);}throw $pyjs_dbg_88_err;
}})();
							$pyjs['track']['lineno']=174;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['getattr'](self, 'dateinput')['__setitem__']('value', (function(){try{try{$pyjs['in_try_except'] += 1;
							return dateobj['strftime']('%Y-%m-%d');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_89_err){if (!$p['isinstance']($pyjs_dbg_89_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_89_err);}throw $pyjs_dbg_89_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_90_err){if (!$p['isinstance']($pyjs_dbg_90_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_90_err);}throw $pyjs_dbg_90_err;
}})();
							$pyjs['track']['lineno']=175;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['getattr'](self, 'timeinput')['__setitem__']('value', (function(){try{try{$pyjs['in_try_except'] += 1;
							return dateobj['strftime']('%H:%M:%S');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_91_err){if (!$p['isinstance']($pyjs_dbg_91_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_91_err);}throw $pyjs_dbg_91_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_92_err){if (!$p['isinstance']($pyjs_dbg_92_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_92_err);}throw $pyjs_dbg_92_err;
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
						$pyjs['track']['module']='bones.date';
						if (($pyjs_try_err_name == $p['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
							$pyjs['track']['lineno']=178;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['getattr'](self, 'dateinput')['__setitem__']('value', '-');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_93_err){if (!$p['isinstance']($pyjs_dbg_93_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_93_err);}throw $pyjs_dbg_93_err;
}})();
							$pyjs['track']['lineno']=179;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['getattr'](self, 'timeinput')['__setitem__']('value', '-');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_94_err){if (!$p['isinstance']($pyjs_dbg_94_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_94_err);}throw $pyjs_dbg_94_err;
}})();
						} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
					}
				}
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['data'],['extendedErrorInformation', null]]);
		$cls_definition['unserialize'] = $method;
		$pyjs['track']['lineno']=181;
		$method = $pyjs__bind_method2('serializeForPost', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add22,result,$add21,$add20,adatetime,$add25,$add24,$add26,returnvalue,$add14,$add15,$add16,$add17,$add10,$add11,$add12,$add13,$add18,$add19,$add2,$add3,$add1,$add6,$add7,$add4,$add5,$add8,$add9,$add23;
			$pyjs['track']={'module':'bones.date', 'lineno':181};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.date';
			$pyjs['track']['lineno']=181;
			$pyjs['track']['lineno']=183;
			adatetime = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list'](['00', '00', '0000', '00', '00', '00']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_95_err){if (!$p['isinstance']($pyjs_dbg_95_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_95_err);}throw $pyjs_dbg_95_err;
}})();
			$pyjs['track']['lineno']=185;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['hasattr'](self, 'timeinput');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_96_err){if (!$p['isinstance']($pyjs_dbg_96_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_96_err);}throw $pyjs_dbg_96_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_97_err){if (!$p['isinstance']($pyjs_dbg_97_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_97_err);}throw $pyjs_dbg_97_err;
}})()) {
				$pyjs['track']['lineno']=186;
				result = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['re']['match']('(\\d+):(\\d+)(:(\\d+))?', $p['getattr'](self, 'timeinput')['__getitem__']('value'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_98_err){if (!$p['isinstance']($pyjs_dbg_98_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_98_err);}throw $pyjs_dbg_98_err;
}})();
				$pyjs['track']['lineno']=187;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](result);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_99_err){if (!$p['isinstance']($pyjs_dbg_99_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_99_err);}throw $pyjs_dbg_99_err;
}})()) {
					$pyjs['track']['lineno']=188;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return adatetime['__setitem__'](3, (function(){try{try{$pyjs['in_try_except'] += 1;
					return result['group'](1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_100_err){if (!$p['isinstance']($pyjs_dbg_100_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_100_err);}throw $pyjs_dbg_100_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_101_err){if (!$p['isinstance']($pyjs_dbg_101_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_101_err);}throw $pyjs_dbg_101_err;
}})();
					$pyjs['track']['lineno']=189;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return adatetime['__setitem__'](4, (function(){try{try{$pyjs['in_try_except'] += 1;
					return result['group'](2);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_102_err){if (!$p['isinstance']($pyjs_dbg_102_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_102_err);}throw $pyjs_dbg_102_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_103_err){if (!$p['isinstance']($pyjs_dbg_103_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_103_err);}throw $pyjs_dbg_103_err;
}})();
					$pyjs['track']['lineno']=191;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return result['group'](4);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_104_err){if (!$p['isinstance']($pyjs_dbg_104_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_104_err);}throw $pyjs_dbg_104_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_105_err){if (!$p['isinstance']($pyjs_dbg_105_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_105_err);}throw $pyjs_dbg_105_err;
}})()) {
						$pyjs['track']['lineno']=192;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return adatetime['__setitem__'](5, (function(){try{try{$pyjs['in_try_except'] += 1;
						return result['group'](4);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_106_err){if (!$p['isinstance']($pyjs_dbg_106_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_106_err);}throw $pyjs_dbg_106_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_107_err){if (!$p['isinstance']($pyjs_dbg_107_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_107_err);}throw $pyjs_dbg_107_err;
}})();
					}
				}
			}
			$pyjs['track']['lineno']=194;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['hasattr'](self, 'dateinput');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_108_err){if (!$p['isinstance']($pyjs_dbg_108_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_108_err);}throw $pyjs_dbg_108_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_109_err){if (!$p['isinstance']($pyjs_dbg_109_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_109_err);}throw $pyjs_dbg_109_err;
}})()) {
				$pyjs['track']['lineno']=195;
				result = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['re']['match']('(\\d+).(\\d+).(\\d+)', $p['getattr'](self, 'dateinput')['__getitem__']('value'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_110_err){if (!$p['isinstance']($pyjs_dbg_110_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_110_err);}throw $pyjs_dbg_110_err;
}})();
				$pyjs['track']['lineno']=196;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](result);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_111_err){if (!$p['isinstance']($pyjs_dbg_111_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_111_err);}throw $pyjs_dbg_111_err;
}})()) {
					$pyjs['track']['lineno']=197;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return adatetime['__setitem__'](0, (function(){try{try{$pyjs['in_try_except'] += 1;
					return result['group'](3);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_112_err){if (!$p['isinstance']($pyjs_dbg_112_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_112_err);}throw $pyjs_dbg_112_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_113_err){if (!$p['isinstance']($pyjs_dbg_113_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_113_err);}throw $pyjs_dbg_113_err;
}})();
					$pyjs['track']['lineno']=198;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return adatetime['__setitem__'](1, (function(){try{try{$pyjs['in_try_except'] += 1;
					return result['group'](2);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_114_err){if (!$p['isinstance']($pyjs_dbg_114_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_114_err);}throw $pyjs_dbg_114_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_115_err){if (!$p['isinstance']($pyjs_dbg_115_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_115_err);}throw $pyjs_dbg_115_err;
}})();
					$pyjs['track']['lineno']=199;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return adatetime['__setitem__'](2, (function(){try{try{$pyjs['in_try_except'] += 1;
					return result['group'](1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_116_err){if (!$p['isinstance']($pyjs_dbg_116_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_116_err);}throw $pyjs_dbg_116_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_117_err){if (!$p['isinstance']($pyjs_dbg_117_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_117_err);}throw $pyjs_dbg_117_err;
}})();
				}
			}
			$pyjs['track']['lineno']=201;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](adatetime['__getitem__'](2), '0000'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_118_err){if (!$p['isinstance']($pyjs_dbg_118_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_118_err);}throw $pyjs_dbg_118_err;
}})()) {
				$pyjs['track']['lineno']=202;
				$pyjs['track']['lineno']=202;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([[$p['getattr'](self, 'boneName'), $p['__op_add']($add5=$p['__op_add']($add3=$p['__op_add']($add1=adatetime['__getitem__'](3),$add2=':'),$add4=adatetime['__getitem__'](4)),$add6=':00')]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_119_err){if (!$p['isinstance']($pyjs_dbg_119_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_119_err);}throw $pyjs_dbg_119_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=204;
			returnvalue = $p['__op_add']($add25=$p['__op_add']($add23=$p['__op_add']($add21=$p['__op_add']($add19=$p['__op_add']($add17=$p['__op_add']($add15=$p['__op_add']($add13=$p['__op_add']($add11=$p['__op_add']($add9=$p['__op_add']($add7=adatetime['__getitem__'](0),$add8='.'),$add10=adatetime['__getitem__'](1)),$add12='.'),$add14=adatetime['__getitem__'](2)),$add16=' '),$add18=adatetime['__getitem__'](3)),$add20=':'),$add22=adatetime['__getitem__'](4)),$add24=':'),$add26=adatetime['__getitem__'](5));
			$pyjs['track']['lineno']=205;
			$pyjs['track']['lineno']=205;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([[$p['getattr'](self, 'boneName'), returnvalue]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_120_err){if (!$p['isinstance']($pyjs_dbg_120_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_120_err);}throw $pyjs_dbg_120_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['serializeForPost'] = $method;
		$pyjs['track']['lineno']=207;
		$method = $pyjs__bind_method2('serializeForDocument', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'bones.date', 'lineno':207};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.date';
			$pyjs['track']['lineno']=207;
			$pyjs['track']['lineno']=208;
			$pyjs['track']['lineno']=208;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['serialize']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_121_err){if (!$p['isinstance']($pyjs_dbg_121_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_121_err);}throw $pyjs_dbg_121_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['serializeForDocument'] = $method;
		$pyjs['track']['lineno']=115;
		var $bases = new Array($p['getattr']($m['html5'], 'Div'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('DateEditBone', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=210;
	$m['CheckForDateBone'] = function(moduleName, boneName, skelStucture) {
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

		$pyjs['track']={'module':'bones.date','lineno':210};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='bones.date';
		$pyjs['track']['lineno']=210;
		$pyjs['track']['lineno']=211;
		$pyjs['track']['lineno']=211;
		var $pyjs__ret = $p['op_eq'](skelStucture['__getitem__'](boneName)['__getitem__']('type'), 'date');
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['CheckForDateBone']['__name__'] = 'CheckForDateBone';

	$m['CheckForDateBone']['__bind_type__'] = 0;
	$m['CheckForDateBone']['__args__'] = ['args',['kwargs'],['moduleName'],['boneName'],['skelStucture']];
	$pyjs['track']['lineno']=214;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['editBoneSelector']['insert'](3, $m['CheckForDateBone'], $m['DateEditBone']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_122_err){if (!$p['isinstance']($pyjs_dbg_122_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_122_err);}throw $pyjs_dbg_122_err;
}})();
	$pyjs['track']['lineno']=215;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['viewDelegateSelector']['insert'](3, $m['CheckForDateBone'], $m['DateViewBoneDelegate']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_123_err){if (!$p['isinstance']($pyjs_dbg_123_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_123_err);}throw $pyjs_dbg_123_err;
}})();
	$pyjs['track']['lineno']=216;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['extractorDelegateSelector']['insert'](3, $m['CheckForDateBone'], $m['DateBoneExtractor']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_124_err){if (!$p['isinstance']($pyjs_dbg_124_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_124_err);}throw $pyjs_dbg_124_err;
}})();
	return this;
}; /* end bones.date */


/* end module: bones.date */


/*
PYJS_DEPS: ['html5', 'priorityqueue.editBoneSelector', 'priorityqueue', 'priorityqueue.viewDelegateSelector', 'priorityqueue.extractorDelegateSelector', 'datetime.datetime', 'datetime', 're', 'i18n.translate', 'i18n', 'config.conf', 'config', 'bones.base.BaseBoneExtractor', 'bones', 'bones.base']
*/
