/* start module: widgets.file */
$pyjs['loaded_modules']['widgets.file'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['widgets.file']['__was_initialized__']) return $pyjs['loaded_modules']['widgets.file'];
	if(typeof $pyjs['loaded_modules']['widgets'] == 'undefined' || !$pyjs['loaded_modules']['widgets']['__was_initialized__']) $p['___import___']('widgets', null);
	var $m = $pyjs['loaded_modules']['widgets.file'];
	$m['__repr__'] = function() { return '<module: widgets.file>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'widgets.file';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['widgets']['file'] = $pyjs['loaded_modules']['widgets.file'];
	$m.__track_lines__[1] = 'widgets.file.py, line 1:\n    import html5, utils';
	$m.__track_lines__[2] = 'widgets.file.py, line 2:\n    from network import NetworkService, DeferredCall';
	$m.__track_lines__[3] = 'widgets.file.py, line 3:\n    from widgets.tree import TreeWidget, LeafWidget';
	$m.__track_lines__[4] = 'widgets.file.py, line 4:\n    from priorityqueue import displayDelegateSelector';
	$m.__track_lines__[5] = 'widgets.file.py, line 5:\n    from event import EventDispatcher';
	$m.__track_lines__[6] = 'widgets.file.py, line 6:\n    from config import conf';
	$m.__track_lines__[7] = 'widgets.file.py, line 7:\n    import json';
	$m.__track_lines__[8] = 'widgets.file.py, line 8:\n    from i18n import translate';
	$m.__track_lines__[9] = 'widgets.file.py, line 9:\n    from widgets.search import Search';
	$m.__track_lines__[11] = 'widgets.file.py, line 11:\n    class LeafFileWidget( LeafWidget ):';
	$m.__track_lines__[15] = 'widgets.file.py, line 15:\n    def __init__(self, modul, data, structure, *args, **kwargs ):';
	$m.__track_lines__[16] = 'widgets.file.py, line 16:\n    super( LeafFileWidget, self ).__init__( modul, data, structure, *args, **kwargs )';
	$m.__track_lines__[18] = 'widgets.file.py, line 18:\n    if utils.getImagePreview( data ):';
	$m.__track_lines__[19] = 'widgets.file.py, line 19:\n    self.appendChild( html5.Img( utils.getImagePreview( data ) ) )';
	$m.__track_lines__[21] = 'widgets.file.py, line 21:\n    if "mimetype" in data.keys():';
	$m.__track_lines__[22] = 'widgets.file.py, line 22:\n    try:';
	$m.__track_lines__[23] = 'widgets.file.py, line 23:\n    ftype, fformat = data["mimetype"].split("/")';
	$m.__track_lines__[24] = 'widgets.file.py, line 24:\n    self["class"].append("type_%s" % ftype )';
	$m.__track_lines__[25] = 'widgets.file.py, line 25:\n    self["class"].append("format_%s" % fformat.replace( "+", "_" ) )';
	$m.__track_lines__[27] = 'widgets.file.py, line 27:\n    pass';
	$m.__track_lines__[29] = 'widgets.file.py, line 29:\n    self["class"].append("file")';
	$m.__track_lines__[30] = 'widgets.file.py, line 30:\n    self.sinkEvent("onDragOver","onDragLeave")';
	$m.__track_lines__[32] = 'widgets.file.py, line 32:\n    def onDragOver(self, event):';
	$m.__track_lines__[33] = 'widgets.file.py, line 33:\n    if not "insert_before" in self["class"]:';
	$m.__track_lines__[34] = 'widgets.file.py, line 34:\n    self["class"].append("insert_before")';
	$m.__track_lines__[35] = 'widgets.file.py, line 35:\n    super(LeafFileWidget, self).onDragOver(event)';
	$m.__track_lines__[37] = 'widgets.file.py, line 37:\n    def onDragLeave(self, event):';
	$m.__track_lines__[38] = 'widgets.file.py, line 38:\n    if "insert_before" in self["class"]:';
	$m.__track_lines__[39] = 'widgets.file.py, line 39:\n    self["class"].remove("insert_before")';
	$m.__track_lines__[40] = 'widgets.file.py, line 40:\n    super(LeafFileWidget,self).onDragLeave( event )';
	$m.__track_lines__[43] = 'widgets.file.py, line 43:\n    class Uploader( html5.Progress ):';
	$m.__track_lines__[47] = 'widgets.file.py, line 47:\n    def __init__(self, file, node, *args, **kwargs):';
	$m.__track_lines__[54] = 'widgets.file.py, line 54:\n    super(Uploader, self).__init__( *args, **kwargs )';
	$m.__track_lines__[55] = 'widgets.file.py, line 55:\n    self.uploadSuccess = EventDispatcher("uploadSuccess")';
	$m.__track_lines__[56] = 'widgets.file.py, line 56:\n    self.responseValue = None';
	$m.__track_lines__[58] = 'widgets.file.py, line 58:\n    r = NetworkService.request("file","getUploadURL", successHandler=self.onUploadUrlAvaiable, secure=True)';
	$m.__track_lines__[59] = 'widgets.file.py, line 59:\n    r.file = file';
	$m.__track_lines__[60] = 'widgets.file.py, line 60:\n    r.node = node';
	$m.__track_lines__[61] = 'widgets.file.py, line 61:\n    conf["mainWindow"].log("progress", self)';
	$m.__track_lines__[62] = 'widgets.file.py, line 62:\n    self.parent()["class"].append( "is_uploading" )';
	$m.__track_lines__[64] = 'widgets.file.py, line 64:\n    def onUploadUrlAvaiable(self, req ):';
	$m.__track_lines__[68] = 'widgets.file.py, line 68:\n    r = NetworkService.request("","/admin/skey", successHandler=self.onSkeyAvaiable)';
	$m.__track_lines__[69] = 'widgets.file.py, line 69:\n    r.file = req.file';
	$m.__track_lines__[70] = 'widgets.file.py, line 70:\n    r.node = req.node';
	$m.__track_lines__[71] = 'widgets.file.py, line 71:\n    r.destUrl = req.result';
	$m.__track_lines__[73] = 'widgets.file.py, line 73:\n    def onSkeyAvaiable(self, req):';
	$m.__track_lines__[77] = 'widgets.file.py, line 77:\n    formData = eval("new FormData();")';
	$m.__track_lines__[78] = 'widgets.file.py, line 78:\n    formData.append("file", req.file )';
	$m.__track_lines__[79] = 'widgets.file.py, line 79:\n    print(type(req.node))';
	$m.__track_lines__[80] = 'widgets.file.py, line 80:\n    if req.node and str(req.node)!="null":';
	$m.__track_lines__[81] = 'widgets.file.py, line 81:\n    formData.append("node", req.node )';
	$m.__track_lines__[82] = 'widgets.file.py, line 82:\n    formData.append("skey", NetworkService.decode(req) )';
	$m.__track_lines__[83] = 'widgets.file.py, line 83:\n    self.xhr = eval("new XMLHttpRequest()")';
	$m.__track_lines__[84] = 'widgets.file.py, line 84:\n    self.xhr.open("POST", req.destUrl )';
	$m.__track_lines__[85] = 'widgets.file.py, line 85:\n    self.xhr.onload = self.onLoad';
	$m.__track_lines__[86] = 'widgets.file.py, line 86:\n    self.xhr.upload.onprogress = self.onProgress';
	$m.__track_lines__[87] = 'widgets.file.py, line 87:\n    self.xhr.send( formData )';
	$m.__track_lines__[89] = 'widgets.file.py, line 89:\n    def onLoad(self, *args, **kwargs ):';
	$m.__track_lines__[93] = 'widgets.file.py, line 93:\n    if self.xhr.status==200:';
	$m.__track_lines__[94] = 'widgets.file.py, line 94:\n    self.responseValue = json.loads( self.xhr.responseText )';
	$m.__track_lines__[95] = 'widgets.file.py, line 95:\n    DeferredCall(self.onSuccess, _delay=1000)';
	$m.__track_lines__[97] = 'widgets.file.py, line 97:\n    DeferredCall(self.onFailed, self.xhr.status, _delay=1000)';
	$m.__track_lines__[99] = 'widgets.file.py, line 99:\n    def onProgress(self, event):';
	$m.__track_lines__[103] = 'widgets.file.py, line 103:\n    if event.lengthComputable:';
	$m.__track_lines__[104] = 'widgets.file.py, line 104:\n    complete = int(event.loaded / event.total * 100)';
	$m.__track_lines__[105] = 'widgets.file.py, line 105:\n    self["value"] = complete';
	$m.__track_lines__[106] = 'widgets.file.py, line 106:\n    self["max"] = 100';
	$m.__track_lines__[108] = 'widgets.file.py, line 108:\n    def onSuccess(self, *args, **kwargs):';
	$m.__track_lines__[112] = 'widgets.file.py, line 112:\n    for v in self.responseValue["values"]:';
	$m.__track_lines__[113] = 'widgets.file.py, line 113:\n    self.uploadSuccess.fire(self, v)';
	$m.__track_lines__[115] = 'widgets.file.py, line 115:\n    NetworkService.notifyChange("file")';
	$m.__track_lines__[116] = 'widgets.file.py, line 116:\n    self.replaceWithMessage("Upload complete", isSuccess=True)';
	$m.__track_lines__[118] = 'widgets.file.py, line 118:\n    def onFailed(self, errorCode, *args, **kwargs ):';
	$m.__track_lines__[119] = 'widgets.file.py, line 119:\n    self.replaceWithMessage( "Upload failed with status code %s" % errorCode, isSuccess=False )';
	$m.__track_lines__[121] = 'widgets.file.py, line 121:\n    def replaceWithMessage(self, message, isSuccess):';
	$m.__track_lines__[122] = 'widgets.file.py, line 122:\n    self.parent()["class"].remove("is_uploading")';
	$m.__track_lines__[123] = 'widgets.file.py, line 123:\n    self.parent()["class"].remove("log_progress")';
	$m.__track_lines__[124] = 'widgets.file.py, line 124:\n    if isSuccess:';
	$m.__track_lines__[125] = 'widgets.file.py, line 125:\n    self.parent()["class"].append("log_success")';
	$m.__track_lines__[127] = 'widgets.file.py, line 127:\n    self.parent()["class"].append("log_failed")';
	$m.__track_lines__[128] = 'widgets.file.py, line 128:\n    msg = html5.Span()';
	$m.__track_lines__[129] = 'widgets.file.py, line 129:\n    msg.appendChild( html5.TextNode( message ) )';
	$m.__track_lines__[130] = 'widgets.file.py, line 130:\n    self.parent().appendChild( msg )';
	$m.__track_lines__[131] = 'widgets.file.py, line 131:\n    self.parent().removeChild( self )';
	$m.__track_lines__[134] = 'widgets.file.py, line 134:\n    class FileWidget( TreeWidget ):';
	$m.__track_lines__[138] = 'widgets.file.py, line 138:\n    defaultActions = ["add.node", "add.leaf", "selectrootnode", "edit", "delete", "reload", "download"]';
	$m.__track_lines__[139] = 'widgets.file.py, line 139:\n    leafWidget = LeafFileWidget';
	$m.__track_lines__[141] = 'widgets.file.py, line 141:\n    def __init__(self,*args, **kwargs):';
	$m.__track_lines__[142] = 'widgets.file.py, line 142:\n    super( FileWidget, self ).__init__( *args, **kwargs)';
	$m.__track_lines__[143] = 'widgets.file.py, line 143:\n    self.sinkEvent("onDragOver", "onDrop")';
	$m.__track_lines__[144] = 'widgets.file.py, line 144:\n    self["class"].append("supports_upload")';
	$m.__track_lines__[145] = 'widgets.file.py, line 145:\n    self.search = Search()';
	$m.__track_lines__[146] = 'widgets.file.py, line 146:\n    self.appendChild( self.search )';
	$m.__track_lines__[147] = 'widgets.file.py, line 147:\n    self.search.startSearchEvent.register( self )';
	$m.__track_lines__[149] = 'widgets.file.py, line 149:\n    def onStartSearch(self, searchStr, *args, **kwargs):';
	$m.__track_lines__[150] = 'widgets.file.py, line 150:\n    if not searchStr:';
	$m.__track_lines__[151] = 'widgets.file.py, line 151:\n    self.setRootNode( self.rootNode )';
	$m.__track_lines__[153] = 'widgets.file.py, line 153:\n    for c in self.pathList._children[:]:';
	$m.__track_lines__[154] = 'widgets.file.py, line 154:\n    self.pathList.removeChild( c )';
	$m.__track_lines__[155] = 'widgets.file.py, line 155:\n    s = html5.Span()';
	$m.__track_lines__[156] = 'widgets.file.py, line 156:\n    s.appendChild(html5.TextNode("Search"))';
	$m.__track_lines__[157] = 'widgets.file.py, line 157:\n    self.pathList.appendChild( s )';
	$m.__track_lines__[158] = 'widgets.file.py, line 158:\n    self.reloadData( {"node":self.rootNode,"search": searchStr} )';
	$m.__track_lines__[160] = 'widgets.file.py, line 160:\n    def setNode(self, node):';
	$m.__track_lines__[166] = 'widgets.file.py, line 166:\n    self.search.searchInput["value"] = ""';
	$m.__track_lines__[167] = 'widgets.file.py, line 167:\n    super( FileWidget, self ).setNode( node )';
	$m.__track_lines__[170] = 'widgets.file.py, line 169:\n    @staticmethod ... def canHandle( modul, moduleInfo ):';
	$m.__track_lines__[171] = 'widgets.file.py, line 171:\n    return( moduleInfo["handler"].startswith("tree.simple.file" ) )';
	$m.__track_lines__[173] = 'widgets.file.py, line 173:\n    def onDragOver(self, event):';
	$m.__track_lines__[174] = 'widgets.file.py, line 174:\n    event.preventDefault()';
	$m.__track_lines__[175] = 'widgets.file.py, line 175:\n    event.stopPropagation()';
	$m.__track_lines__[179] = 'widgets.file.py, line 179:\n    def onDrop(self, event):';
	$m.__track_lines__[180] = 'widgets.file.py, line 180:\n    event.preventDefault()';
	$m.__track_lines__[181] = 'widgets.file.py, line 181:\n    event.stopPropagation()';
	$m.__track_lines__[182] = 'widgets.file.py, line 182:\n    files = event.dataTransfer.files';
	$m.__track_lines__[183] = 'widgets.file.py, line 183:\n    for x in range(0,files.length):';
	$m.__track_lines__[184] = 'widgets.file.py, line 184:\n    Uploader(files.item(x), self.node )';
	$m.__track_lines__[186] = 'widgets.file.py, line 186:\n    displayDelegateSelector.insert( 3, FileWidget.canHandle, FileWidget )';


	$pyjs['track']['module']='widgets.file';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=1;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['html5'] = $p['___import___']('html5', 'widgets');
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['utils'] = $p['___import___']('utils', 'widgets');
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=2;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['NetworkService'] = $p['___import___']('network.NetworkService', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['DeferredCall'] = $p['___import___']('network.DeferredCall', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=3;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['TreeWidget'] = $p['___import___']('widgets.tree.TreeWidget', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['LeafWidget'] = $p['___import___']('widgets.tree.LeafWidget', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=4;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['displayDelegateSelector'] = $p['___import___']('priorityqueue.displayDelegateSelector', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=5;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['EventDispatcher'] = $p['___import___']('event.EventDispatcher', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=6;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['conf'] = $p['___import___']('config.conf', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=7;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['json'] = $p['___import___']('json', 'widgets');
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=8;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['translate'] = $p['___import___']('i18n.translate', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=9;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Search'] = $p['___import___']('widgets.search.Search', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=11;
	$m['LeafFileWidget'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.file';
		$pyjs['track']['lineno']=15;
		$method = $pyjs__bind_method2('__init__', function(modul, data, structure) {
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
				modul = arguments[1];
				data = arguments[2];
				structure = arguments[3];
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
				if (typeof structure != 'undefined') {
					if (structure !== null && typeof structure['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = structure;
						structure = arguments[4];
					}
				} else 				if (typeof data != 'undefined') {
					if (data !== null && typeof data['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = data;
						data = arguments[4];
					}
				} else 				if (typeof modul != 'undefined') {
					if (modul !== null && typeof modul['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = modul;
						modul = arguments[4];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[4];
					}
				} else {
				}
			}
			var fformat,$pyjs_try_err,ftype;
			$pyjs['track']={'module':'widgets.file', 'lineno':15};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.file';
			$pyjs['track']['lineno']=15;
			$pyjs['track']['lineno']=16;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['LeafFileWidget'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})(), '__init__', args, kwargs, [{}, modul, data, structure]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs['track']['lineno']=18;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['utils']['getImagePreview'](data);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})()) {
				$pyjs['track']['lineno']=19;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Img']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['utils']['getImagePreview'](data);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
			}
			$pyjs['track']['lineno']=21;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return data['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})()['__contains__']('mimetype'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})()) {
				$pyjs['track']['lineno']=22;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					try {
						$pyjs['in_try_except'] += 1;
						$pyjs['track']['lineno']=23;
						var $tupleassign1 = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['__ass_unpack']((function(){try{try{$pyjs['in_try_except'] += 1;
						return data['__getitem__']('mimetype')['$$split']('/');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})(), 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
						ftype = $tupleassign1[0];
						fformat = $tupleassign1[1];
						$pyjs['track']['lineno']=24;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return self['__getitem__']('class')['append']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['sprintf']('type_%s', ftype);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
						$pyjs['track']['lineno']=25;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return self['__getitem__']('class')['append']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['sprintf']('format_%s', (function(){try{try{$pyjs['in_try_except'] += 1;
						return fformat['$$replace']('+', '_');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
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
					$pyjs['track']['module']='widgets.file';
					if (true) {
						$pyjs['track']['lineno']=27;
					}
				}
			}
			$pyjs['track']['lineno']=29;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__getitem__']('class')['append']('file');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
			$pyjs['track']['lineno']=30;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['sinkEvent']('onDragOver', 'onDragLeave');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['modul'],['data'],['structure']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=32;
		$method = $pyjs__bind_method2('onDragOver', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'widgets.file', 'lineno':32};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.file';
			$pyjs['track']['lineno']=32;
			$pyjs['track']['lineno']=33;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool'](self['__getitem__']('class')['__contains__']('insert_before')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})()) {
				$pyjs['track']['lineno']=34;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__getitem__']('class')['append']('insert_before');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
			}
			$pyjs['track']['lineno']=35;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['LeafFileWidget'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})()['onDragOver'](event);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDragOver'] = $method;
		$pyjs['track']['lineno']=37;
		$method = $pyjs__bind_method2('onDragLeave', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'widgets.file', 'lineno':37};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.file';
			$pyjs['track']['lineno']=37;
			$pyjs['track']['lineno']=38;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](self['__getitem__']('class')['__contains__']('insert_before'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})()) {
				$pyjs['track']['lineno']=39;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__getitem__']('class')['remove']('insert_before');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
			}
			$pyjs['track']['lineno']=40;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['LeafFileWidget'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})()['onDragLeave'](event);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDragLeave'] = $method;
		$pyjs['track']['lineno']=11;
		var $bases = new Array($m['LeafWidget']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('LeafFileWidget', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=43;
	$m['Uploader'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.file';
		$pyjs['track']['lineno']=47;
		$method = $pyjs__bind_method2('__init__', function(file, node) {
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
				file = arguments[1];
				node = arguments[2];
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
				if (typeof node != 'undefined') {
					if (node !== null && typeof node['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = node;
						node = arguments[3];
					}
				} else 				if (typeof file != 'undefined') {
					if (file !== null && typeof file['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = file;
						file = arguments[3];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[3];
					}
				} else {
				}
			}
			var r;
			$pyjs['track']={'module':'widgets.file', 'lineno':47};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.file';
			$pyjs['track']['lineno']=47;
			$pyjs['track']['lineno']=54;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['Uploader'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})();
			$pyjs['track']['lineno']=55;
			self['uploadSuccess'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['EventDispatcher']('uploadSuccess');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})();
			$pyjs['track']['lineno']=56;
			self['responseValue'] = null;
			$pyjs['track']['lineno']=58;
			r = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'successHandler':$p['getattr'](self, 'onUploadUrlAvaiable'), 'secure':true}, 'file', 'getUploadURL']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
			$pyjs['track']['lineno']=59;
			r['file'] = file;
			$pyjs['track']['lineno']=60;
			r['node'] = node;
			$pyjs['track']['lineno']=61;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('mainWindow')['log']('progress', self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
			$pyjs['track']['lineno']=62;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})()['__getitem__']('class')['append']('is_uploading');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['file'],['node']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=64;
		$method = $pyjs__bind_method2('onUploadUrlAvaiable', function(req) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				req = arguments[1];
			}
			var r;
			$pyjs['track']={'module':'widgets.file', 'lineno':64};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.file';
			$pyjs['track']['lineno']=64;
			$pyjs['track']['lineno']=68;
			r = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'successHandler':$p['getattr'](self, 'onSkeyAvaiable')}, '', '/admin/skey']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})();
			$pyjs['track']['lineno']=69;
			r['file'] = $p['getattr'](req, 'file');
			$pyjs['track']['lineno']=70;
			r['node'] = $p['getattr'](req, 'node');
			$pyjs['track']['lineno']=71;
			r['destUrl'] = $p['getattr'](req, 'result');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['req']]);
		$cls_definition['onUploadUrlAvaiable'] = $method;
		$pyjs['track']['lineno']=73;
		$method = $pyjs__bind_method2('onSkeyAvaiable', function(req) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				req = arguments[1];
			}
			var $and1,$and2,formData;
			$pyjs['track']={'module':'widgets.file', 'lineno':73};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.file';
			$pyjs['track']['lineno']=73;
			$pyjs['track']['lineno']=77;
			formData = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (typeof eval == "undefined"?$m['eval']:eval)('new FormData();');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})();
			$pyjs['track']['lineno']=78;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return formData['append']('file', $p['getattr'](req, 'file'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})();
			$pyjs['track']['lineno']=79;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['printFunc']([(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['type']($p['getattr'](req, 'node'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})()], 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})();
			$pyjs['track']['lineno']=80;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and1=$p['getattr'](req, 'node'))?!$p['op_eq']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['str']($p['getattr'](req, 'node'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})(), 'null'):$and1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})()) {
				$pyjs['track']['lineno']=81;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return formData['append']('node', $p['getattr'](req, 'node'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})();
			}
			$pyjs['track']['lineno']=82;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return formData['append']('skey', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['NetworkService']['decode'](req);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})();
			$pyjs['track']['lineno']=83;
			self['xhr'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (typeof eval == "undefined"?$m['eval']:eval)('new XMLHttpRequest()');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})();
			$pyjs['track']['lineno']=84;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['xhr']['open']('POST', $p['getattr'](req, 'destUrl'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})();
			$pyjs['track']['lineno']=85;
			$p['getattr'](self, 'xhr')['onload'] = $p['getattr'](self, 'onLoad');
			$pyjs['track']['lineno']=86;
			$p['getattr']($p['getattr'](self, 'xhr'), 'upload')['onprogress'] = $p['getattr'](self, 'onProgress');
			$pyjs['track']['lineno']=87;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['xhr']['send'](formData);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['req']]);
		$cls_definition['onSkeyAvaiable'] = $method;
		$pyjs['track']['lineno']=89;
		$method = $pyjs__bind_method2('onLoad', function() {
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

			$pyjs['track']={'module':'widgets.file', 'lineno':89};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.file';
			$pyjs['track']['lineno']=89;
			$pyjs['track']['lineno']=93;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq']($p['getattr']($p['getattr'](self, 'xhr'), 'status'), 200));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})()) {
				$pyjs['track']['lineno']=94;
				self['responseValue'] = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['json']['loads']($p['getattr']($p['getattr'](self, 'xhr'), 'responseText'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})();
				$pyjs['track']['lineno']=95;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call(null, $m['DeferredCall'], null, null, [{'_delay':1000}, $p['getattr'](self, 'onSuccess')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=97;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call(null, $m['DeferredCall'], null, null, [{'_delay':1000}, $p['getattr'](self, 'onFailed'), $p['getattr']($p['getattr'](self, 'xhr'), 'status')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['onLoad'] = $method;
		$pyjs['track']['lineno']=99;
		$method = $pyjs__bind_method2('onProgress', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var complete,$mul2,$div2,$div1,$mul1;
			$pyjs['track']={'module':'widgets.file', 'lineno':99};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.file';
			$pyjs['track']['lineno']=99;
			$pyjs['track']['lineno']=103;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](event, 'lengthComputable'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})()) {
				$pyjs['track']['lineno']=104;
				complete = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['float_int']((typeof ($mul1=(typeof ($div1=$p['getattr'](event, 'loaded'))==typeof ($div2=$p['getattr'](event, 'total')) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2)))==typeof ($mul2=100) && typeof $mul1=='number'?
					$mul1*$mul2:
					$p['op_mul']($mul1,$mul2)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})();
				$pyjs['track']['lineno']=105;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__setitem__']('value', complete);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})();
				$pyjs['track']['lineno']=106;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__setitem__']('max', 100);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onProgress'] = $method;
		$pyjs['track']['lineno']=108;
		$method = $pyjs__bind_method2('onSuccess', function() {
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
			var v,$iter1_nextval,$iter1_type,$iter1_iter,$iter1_array,$pyjs__trackstack_size_1,$iter1_idx;
			$pyjs['track']={'module':'widgets.file', 'lineno':108};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.file';
			$pyjs['track']['lineno']=108;
			$pyjs['track']['lineno']=112;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter1_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'responseValue')['__getitem__']('values');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})();
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				v = $iter1_nextval['$nextval'];
				$pyjs['track']['lineno']=113;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['uploadSuccess']['fire'](self, v);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.file';
			$pyjs['track']['lineno']=115;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['NetworkService']['notifyChange']('file');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})();
			$pyjs['track']['lineno']=116;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(self, 'replaceWithMessage', null, null, [{'isSuccess':true}, 'Upload complete']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['onSuccess'] = $method;
		$pyjs['track']['lineno']=118;
		$method = $pyjs__bind_method2('onFailed', function(errorCode) {
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
				errorCode = arguments[1];
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
				if (typeof errorCode != 'undefined') {
					if (errorCode !== null && typeof errorCode['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = errorCode;
						errorCode = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}

			$pyjs['track']={'module':'widgets.file', 'lineno':118};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.file';
			$pyjs['track']['lineno']=118;
			$pyjs['track']['lineno']=119;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(self, 'replaceWithMessage', null, null, [{'isSuccess':false}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('Upload failed with status code %s', errorCode);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['errorCode']]);
		$cls_definition['onFailed'] = $method;
		$pyjs['track']['lineno']=121;
		$method = $pyjs__bind_method2('replaceWithMessage', function(message, isSuccess) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				message = arguments[1];
				isSuccess = arguments[2];
			}
			var msg;
			$pyjs['track']={'module':'widgets.file', 'lineno':121};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.file';
			$pyjs['track']['lineno']=121;
			$pyjs['track']['lineno']=122;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})()['__getitem__']('class')['remove']('is_uploading');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})();
			$pyjs['track']['lineno']=123;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})()['__getitem__']('class')['remove']('log_progress');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})();
			$pyjs['track']['lineno']=124;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](isSuccess);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})()) {
				$pyjs['track']['lineno']=125;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})()['__getitem__']('class')['append']('log_success');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=127;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})()['__getitem__']('class')['append']('log_failed');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})();
			}
			$pyjs['track']['lineno']=128;
			msg = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Span']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})();
			$pyjs['track']['lineno']=129;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return msg['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['TextNode'](message);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})();
			$pyjs['track']['lineno']=130;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})()['appendChild'](msg);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})();
			$pyjs['track']['lineno']=131;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})()['removeChild'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['message'],['isSuccess']]);
		$cls_definition['replaceWithMessage'] = $method;
		$pyjs['track']['lineno']=43;
		var $bases = new Array($p['getattr']($m['html5'], 'Progress'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Uploader', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=134;
	$m['FileWidget'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.file';
		$pyjs['track']['lineno']=138;
		$cls_definition['defaultActions'] = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['list'](['add.node', 'add.leaf', 'selectrootnode', 'edit', 'delete', 'reload', 'download']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})();
		$pyjs['track']['lineno']=139;
		$cls_definition['leafWidget'] = $m['LeafFileWidget'];
		$pyjs['track']['lineno']=141;
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

			$pyjs['track']={'module':'widgets.file', 'lineno':141};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.file';
			$pyjs['track']['lineno']=141;
			$pyjs['track']['lineno']=142;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['FileWidget'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})();
			$pyjs['track']['lineno']=143;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['sinkEvent']('onDragOver', 'onDrop');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})();
			$pyjs['track']['lineno']=144;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__getitem__']('class')['append']('supports_upload');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})();
			$pyjs['track']['lineno']=145;
			self['search'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['Search']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})();
			$pyjs['track']['lineno']=146;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'search'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})();
			$pyjs['track']['lineno']=147;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['search']['startSearchEvent']['register'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=149;
		$method = $pyjs__bind_method2('onStartSearch', function(searchStr) {
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
				searchStr = arguments[1];
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
				if (typeof searchStr != 'undefined') {
					if (searchStr !== null && typeof searchStr['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = searchStr;
						searchStr = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}
			var c,$iter2_nextval,$iter2_type,$iter2_iter,s,$iter2_idx,$pyjs__trackstack_size_1,$iter2_array;
			$pyjs['track']={'module':'widgets.file', 'lineno':149};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.file';
			$pyjs['track']['lineno']=149;
			$pyjs['track']['lineno']=150;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool'](searchStr));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})()) {
				$pyjs['track']['lineno']=151;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['setRootNode']($p['getattr'](self, 'rootNode'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=153;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter2_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['__getslice']($p['getattr']($p['getattr'](self, 'pathList'), '_children'), 0, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})();
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					c = $iter2_nextval['$nextval'];
					$pyjs['track']['lineno']=154;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['pathList']['removeChild'](c);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_88_err){if (!$p['isinstance']($pyjs_dbg_88_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_88_err);}throw $pyjs_dbg_88_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='widgets.file';
				$pyjs['track']['lineno']=155;
				s = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Span']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_89_err){if (!$p['isinstance']($pyjs_dbg_89_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_89_err);}throw $pyjs_dbg_89_err;
}})();
				$pyjs['track']['lineno']=156;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return s['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['TextNode']('Search');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_90_err){if (!$p['isinstance']($pyjs_dbg_90_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_90_err);}throw $pyjs_dbg_90_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_91_err){if (!$p['isinstance']($pyjs_dbg_91_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_91_err);}throw $pyjs_dbg_91_err;
}})();
				$pyjs['track']['lineno']=157;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['pathList']['appendChild'](s);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_92_err){if (!$p['isinstance']($pyjs_dbg_92_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_92_err);}throw $pyjs_dbg_92_err;
}})();
				$pyjs['track']['lineno']=158;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['reloadData']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['dict']([['node', $p['getattr'](self, 'rootNode')], ['search', searchStr]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_93_err){if (!$p['isinstance']($pyjs_dbg_93_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_93_err);}throw $pyjs_dbg_93_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_94_err){if (!$p['isinstance']($pyjs_dbg_94_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_94_err);}throw $pyjs_dbg_94_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['searchStr']]);
		$cls_definition['onStartSearch'] = $method;
		$pyjs['track']['lineno']=160;
		$method = $pyjs__bind_method2('setNode', function(node) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				node = arguments[1];
			}

			$pyjs['track']={'module':'widgets.file', 'lineno':160};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.file';
			$pyjs['track']['lineno']=160;
			$pyjs['track']['lineno']=166;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr']($p['getattr'](self, 'search'), 'searchInput')['__setitem__']('value', '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_95_err){if (!$p['isinstance']($pyjs_dbg_95_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_95_err);}throw $pyjs_dbg_95_err;
}})();
			$pyjs['track']['lineno']=167;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['FileWidget'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_96_err){if (!$p['isinstance']($pyjs_dbg_96_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_96_err);}throw $pyjs_dbg_96_err;
}})()['setNode'](node);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_97_err){if (!$p['isinstance']($pyjs_dbg_97_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_97_err);}throw $pyjs_dbg_97_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['node']]);
		$cls_definition['setNode'] = $method;
		$pyjs['track']['lineno']=170;
		$method = $pyjs__bind_method2('canHandle', function(modul, moduleInfo) {

			$pyjs['track']={'module':'widgets.file', 'lineno':170};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.file';
			$pyjs['track']['lineno']=170;
			$pyjs['track']['lineno']=171;
			$pyjs['track']['lineno']=171;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return moduleInfo['__getitem__']('handler')['startswith']('tree.simple.file');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_98_err){if (!$p['isinstance']($pyjs_dbg_98_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_98_err);}throw $pyjs_dbg_98_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['modul'],['moduleInfo']]);
		$cls_definition['canHandle'] = $method;
		$pyjs['track']['lineno']=173;
		$method = $pyjs__bind_method2('onDragOver', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'widgets.file', 'lineno':173};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.file';
			$pyjs['track']['lineno']=173;
			$pyjs['track']['lineno']=174;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return event['preventDefault']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_99_err){if (!$p['isinstance']($pyjs_dbg_99_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_99_err);}throw $pyjs_dbg_99_err;
}})();
			$pyjs['track']['lineno']=175;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return event['stopPropagation']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_100_err){if (!$p['isinstance']($pyjs_dbg_100_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_100_err);}throw $pyjs_dbg_100_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDragOver'] = $method;
		$pyjs['track']['lineno']=179;
		$method = $pyjs__bind_method2('onDrop', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var files,$iter3_idx,$iter3_array,$iter3_iter,$iter3_type,x,$pyjs__trackstack_size_1,$iter3_nextval;
			$pyjs['track']={'module':'widgets.file', 'lineno':179};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.file';
			$pyjs['track']['lineno']=179;
			$pyjs['track']['lineno']=180;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return event['preventDefault']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_101_err){if (!$p['isinstance']($pyjs_dbg_101_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_101_err);}throw $pyjs_dbg_101_err;
}})();
			$pyjs['track']['lineno']=181;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return event['stopPropagation']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_102_err){if (!$p['isinstance']($pyjs_dbg_102_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_102_err);}throw $pyjs_dbg_102_err;
}})();
			$pyjs['track']['lineno']=182;
			files = $p['getattr']($p['getattr'](event, 'dataTransfer'), 'files');
			$pyjs['track']['lineno']=183;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter3_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['range'](0, $p['getattr'](files, 'length'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_103_err){if (!$p['isinstance']($pyjs_dbg_103_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_103_err);}throw $pyjs_dbg_103_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_104_err){if (!$p['isinstance']($pyjs_dbg_104_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_104_err);}throw $pyjs_dbg_104_err;
}})();
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				x = $iter3_nextval['$nextval'];
				$pyjs['track']['lineno']=184;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['Uploader']((function(){try{try{$pyjs['in_try_except'] += 1;
				return files['item'](x);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_105_err){if (!$p['isinstance']($pyjs_dbg_105_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_105_err);}throw $pyjs_dbg_105_err;
}})(), $p['getattr'](self, 'node'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_106_err){if (!$p['isinstance']($pyjs_dbg_106_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_106_err);}throw $pyjs_dbg_106_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.file';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onDrop'] = $method;
		$pyjs['track']['lineno']=134;
		var $bases = new Array($m['TreeWidget']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('FileWidget', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=186;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['displayDelegateSelector']['insert'](3, $p['getattr']($m['FileWidget'], 'canHandle'), $m['FileWidget']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_107_err){if (!$p['isinstance']($pyjs_dbg_107_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_107_err);}throw $pyjs_dbg_107_err;
}})();
	return this;
}; /* end widgets.file */


/* end module: widgets.file */


/*
PYJS_DEPS: ['html5', 'utils', 'network.NetworkService', 'network', 'network.DeferredCall', 'widgets.tree.TreeWidget', 'widgets', 'widgets.tree', 'widgets.tree.LeafWidget', 'priorityqueue.displayDelegateSelector', 'priorityqueue', 'event.EventDispatcher', 'event', 'config.conf', 'config', 'json', 'i18n.translate', 'i18n', 'widgets.search.Search', 'widgets.search']
*/
