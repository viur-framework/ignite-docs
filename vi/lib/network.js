/* start module: network */
$pyjs['loaded_modules']['network'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['network']['__was_initialized__']) return $pyjs['loaded_modules']['network'];
	var $m = $pyjs['loaded_modules']['network'];
	$m['__repr__'] = function() { return '<module: network>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'network';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$m.__track_lines__[1] = 'network.py, line 1:\n    #!/usr/bin/env python3';
	$m.__track_lines__[4] = 'network.py, line 4:\n    import sys, os';
	$m.__track_lines__[5] = 'network.py, line 5:\n    import json';
	$m.__track_lines__[6] = 'network.py, line 6:\n    import string, random, time';
	$m.__track_lines__[8] = 'network.py, line 8:\n    class DeferredCall( object ):';
	$m.__track_lines__[15] = 'network.py, line 15:\n    def __init__( self, func, *args, **kwargs ):';
	$m.__track_lines__[20] = 'network.py, line 20:\n    super( DeferredCall, self ).__init__()';
	$m.__track_lines__[21] = 'network.py, line 21:\n    delay = 25';
	$m.__track_lines__[22] = 'network.py, line 22:\n    if "_delay" in kwargs.keys():';
	$m.__track_lines__[23] = 'network.py, line 23:\n    delay = kwargs["_delay"]';
	$m.__track_lines__[24] = 'network.py, line 24:\n    del kwargs["_delay"]';
	$m.__track_lines__[25] = 'network.py, line 25:\n    self._tFunc = func';
	$m.__track_lines__[26] = 'network.py, line 26:\n    self._tArgs = args';
	$m.__track_lines__[27] = 'network.py, line 27:\n    self._tKwArgs = kwargs';
	$m.__track_lines__[28] = 'network.py, line 28:\n    w = eval("window")';
	$m.__track_lines__[29] = 'network.py, line 29:\n    w.setTimeout(self.run, delay)';
	$m.__track_lines__[31] = 'network.py, line 31:\n    def run(self):';
	$m.__track_lines__[35] = 'network.py, line 35:\n    self._tFunc( *self._tArgs, **self._tKwArgs )';
	$m.__track_lines__[37] = 'network.py, line 37:\n    class HTTPRequest(object):';
	$m.__track_lines__[41] = 'network.py, line 41:\n    def __init__(self, *args, **kwargs ):';
	$m.__track_lines__[42] = 'network.py, line 42:\n    super( HTTPRequest, self ).__init__( *args, **kwargs )';
	$m.__track_lines__[43] = 'network.py, line 43:\n    self.req = eval("new XMLHttpRequest()")';
	$m.__track_lines__[44] = 'network.py, line 44:\n    self.req.onreadystatechange = self.onReadyStateChange';
	$m.__track_lines__[45] = 'network.py, line 45:\n    self.cb = None';
	$m.__track_lines__[46] = 'network.py, line 46:\n    self.hasBeenSent = False';
	$m.__track_lines__[48] = 'network.py, line 48:\n    def asyncGet(self, url, cb):';
	$m.__track_lines__[56] = 'network.py, line 56:\n    self.cb = cb';
	$m.__track_lines__[57] = 'network.py, line 57:\n    self.type = "GET"';
	$m.__track_lines__[58] = 'network.py, line 58:\n    self.payload = None';
	$m.__track_lines__[59] = 'network.py, line 59:\n    self.content_type = None';
	$m.__track_lines__[60] = 'network.py, line 60:\n    self.req.open("GET",url,True)';
	$m.__track_lines__[62] = 'network.py, line 62:\n    def asyncPost(self, url, payload, cb, content_type=None ):';
	$m.__track_lines__[70] = 'network.py, line 70:\n    self.cb = cb';
	$m.__track_lines__[71] = 'network.py, line 71:\n    self.type = "POST"';
	$m.__track_lines__[72] = 'network.py, line 72:\n    self.payload = payload';
	$m.__track_lines__[73] = 'network.py, line 73:\n    self.content_type = content_type';
	$m.__track_lines__[74] = 'network.py, line 74:\n    self.req.open("POST",url,True)';
	$m.__track_lines__[76] = 'network.py, line 76:\n    def onReadyStateChange(self, *args, **kwargs):';
	$m.__track_lines__[80] = 'network.py, line 80:\n    if self.req.readyState == 1 and not self.hasBeenSent:';
	$m.__track_lines__[81] = 'network.py, line 81:\n    self.hasBeenSent = True # Internet Explorer calls this function twice!';
	$m.__track_lines__[83] = 'network.py, line 83:\n    if self.type=="POST" and self.content_type is not None:';
	$m.__track_lines__[84] = "network.py, line 84:\n    self.req.setRequestHeader('Content-Type', self.content_type)";
	$m.__track_lines__[86] = 'network.py, line 86:\n    self.req.send( self.payload )';
	$m.__track_lines__[88] = 'network.py, line 88:\n    if self.req.readyState == 4:';
	$m.__track_lines__[89] = 'network.py, line 89:\n    if self.req.status >= 200 and self.req.status < 300:';
	$m.__track_lines__[90] = 'network.py, line 90:\n    self.cb.onCompletion( self.req.responseText )';
	$m.__track_lines__[92] = 'network.py, line 92:\n    self.cb.onError( self.req.responseText, self.req.status )';
	$m.__track_lines__[94] = 'network.py, line 94:\n    class NetworkService( object ):';
	$m.__track_lines__[101] = 'network.py, line 101:\n    changeListeners = [] # All currently active widgets which will be informed of changes made';
	$m.__track_lines__[102] = 'network.py, line 102:\n    _cache = {} # module->Cache index map (for requests that can be cached)';
	$m.__track_lines__[103] = 'network.py, line 103:\n    host = ""';
	$m.__track_lines__[104] = 'network.py, line 104:\n    prefix = "/json"';
	$m.__track_lines__[107] = 'network.py, line 106:\n    @staticmethod ... def notifyChange(module, **kwargs):';
	$m.__track_lines__[115] = 'network.py, line 115:\n    if module in NetworkService._cache.keys():';
	$m.__track_lines__[116] = 'network.py, line 116:\n    NetworkService._cache[ module ] += 1';
	$m.__track_lines__[118] = 'network.py, line 118:\n    for c in NetworkService.changeListeners:';
	$m.__track_lines__[119] = 'network.py, line 119:\n    c.onDataChanged(module, **kwargs)';
	$m.__track_lines__[122] = 'network.py, line 121:\n    @staticmethod ... def registerChangeListener(listener):';
	$m.__track_lines__[131] = 'network.py, line 131:\n    if listener in NetworkService.changeListeners:';
	$m.__track_lines__[132] = 'network.py, line 132:\n    return';
	$m.__track_lines__[134] = 'network.py, line 134:\n    NetworkService.changeListeners.append(listener)';
	$m.__track_lines__[137] = 'network.py, line 136:\n    @staticmethod ... def removeChangeListener( listener ):';
	$m.__track_lines__[143] = 'network.py, line 143:\n    assert listener in NetworkService.changeListeners, "Attempt to remove unregistered listener %s" % str( listener )';
	$m.__track_lines__[144] = 'network.py, line 144:\n    NetworkService.changeListeners.remove( listener )';
	$m.__track_lines__[147] = 'network.py, line 146:\n    @staticmethod ... def genReqStr( params ):';
	$m.__track_lines__[155] = 'network.py, line 155:\n    boundary_str = "---"+\'\'.join( [ random.choice(string.ascii_lowercase+string.ascii_uppercase + string.digits) for x in range(13) ] )';
	$m.__track_lines__[156] = 'network.py, line 156:\n    boundary = boundary_str';
	$m.__track_lines__[157] = 'network.py, line 157:\n    res = b\'Content-Type: multipart/mixed; boundary="\'+boundary+b\'"\\r\\nMIME-Version: 1.0\\r\\n\'';
	$m.__track_lines__[158] = "network.py, line 158:\n    res += b'\\r\\n--'+boundary";
	$m.__track_lines__[159] = 'network.py, line 159:\n    for(key, value) in list(params.items()):';
	$m.__track_lines__[160] = 'network.py, line 160:\n    if all( [x in dir( value ) for x in ["name", "read"] ] ): #File';
	$m.__track_lines__[161] = 'network.py, line 161:\n    try:';
	$m.__track_lines__[162] = 'network.py, line 162:\n    (type, encoding) = mimetypes.guess_type( value.name.decode( sys.getfilesystemencoding() ), strict=False )';
	$m.__track_lines__[163] = 'network.py, line 163:\n    type = type or "application/octet-stream"';
	$m.__track_lines__[165] = 'network.py, line 165:\n    type = "application/octet-stream"';
	$m.__track_lines__[166] = 'network.py, line 166:\n    res += b\'\\r\\nContent-Type: \'+type+b\'\\r\\nMIME-Version: 1.0\\r\\nContent-Disposition: form-data; name="\'+key+b\'"; filename="\'+os.path.basename(value.name).decode(sys.getfilesystemencoding())+b\'"\\r\\n\\r\\n\'';
	$m.__track_lines__[167] = 'network.py, line 167:\n    res += str(value.read())';
	$m.__track_lines__[168] = "network.py, line 168:\n    res += b'\\r\\n--'+boundary";
	$m.__track_lines__[170] = 'network.py, line 170:\n    for val in value:';
	$m.__track_lines__[171] = 'network.py, line 171:\n    res += b\'\\r\\nContent-Type: application/octet-stream\\r\\nMIME-Version: 1.0\\r\\nContent-Disposition: form-data; name="\'+key+b\'"\\r\\n\\r\\n\'';
	$m.__track_lines__[172] = 'network.py, line 172:\n    res += str(val)';
	$m.__track_lines__[173] = "network.py, line 173:\n    res += b'\\r\\n--'+boundary";
	$m.__track_lines__[175] = 'network.py, line 175:\n    for k,v in value.items():';
	$m.__track_lines__[176] = 'network.py, line 176:\n    res += b\'\\r\\nContent-Type: application/octet-stream\\r\\nMIME-Version: 1.0\\r\\nContent-Disposition: form-data; name="\'+key+b"."+k+b\'"\\r\\n\\r\\n\'';
	$m.__track_lines__[177] = 'network.py, line 177:\n    res += str(v)';
	$m.__track_lines__[178] = "network.py, line 178:\n    res += b'\\r\\n--'+boundary";
	$m.__track_lines__[180] = 'network.py, line 180:\n    res += b\'\\r\\nContent-Type: application/octet-stream\\r\\nMIME-Version: 1.0\\r\\nContent-Disposition: form-data; name="\'+key+b\'"\\r\\n\\r\\n\'';
	$m.__track_lines__[181] = 'network.py, line 181:\n    res += str(value)';
	$m.__track_lines__[182] = "network.py, line 182:\n    res += b'\\r\\n--'+boundary";
	$m.__track_lines__[183] = "network.py, line 183:\n    res += b'--\\r\\n'";
	$m.__track_lines__[184] = 'network.py, line 184:\n    return( res, boundary )';
	$m.__track_lines__[188] = 'network.py, line 187:\n    @staticmethod ... def decode(req):';
	$m.__track_lines__[194] = 'network.py, line 194:\n    return json.loads(req.result)';
	$m.__track_lines__[197] = 'network.py, line 196:\n    @staticmethod ... def isOkay(req):';
	$m.__track_lines__[198] = 'network.py, line 198:\n    answ = NetworkService.decode(req)';
	$m.__track_lines__[199] = 'network.py, line 199:\n    return isinstance(answ, str) and answ == "OKAY"';
	$m.__track_lines__[202] = 'network.py, line 201:\n    @staticmethod ... def urlForArgs(module, path, cacheable):';
	$m.__track_lines__[216] = 'network.py, line 216:\n    cacheKey = time.time()';
	$m.__track_lines__[218] = 'network.py, line 218:\n    if cacheable and module:';
	$m.__track_lines__[219] = 'network.py, line 219:\n    if not module in NetworkService._cache.keys():';
	$m.__track_lines__[220] = 'network.py, line 220:\n    NetworkService._cache[ module ] = 1';
	$m.__track_lines__[222] = 'network.py, line 222:\n    cacheKey = "c%s" % NetworkService._cache[ module ]';
	$m.__track_lines__[224] = 'network.py, line 224:\n    if module:';
	$m.__track_lines__[225] = 'network.py, line 225:\n    return "%s%s/%s/%s?_unused_time_stamp=%s" % (NetworkService.host, NetworkService.prefix,';
	$m.__track_lines__[228] = 'network.py, line 228:\n    return "%s%s_unused_time_stamp=%s" % (path, "&" if "?" in path else "?", cacheKey)';
	$m.__track_lines__[230] = 'network.py, line 230:\n    def __init__(self, module, url, params, successHandler, failureHandler, finishedHandler,';
	$m.__track_lines__[236] = 'network.py, line 236:\n    super(NetworkService, self).__init__()';
	$m.__track_lines__[238] = 'network.py, line 238:\n    self.result = None';
	$m.__track_lines__[239] = 'network.py, line 239:\n    self.status = "running"';
	$m.__track_lines__[240] = 'network.py, line 240:\n    self.waitingForSkey = False';
	$m.__track_lines__[241] = 'network.py, line 241:\n    self.module = module';
	$m.__track_lines__[242] = 'network.py, line 242:\n    self.url = url';
	$m.__track_lines__[243] = 'network.py, line 243:\n    self.params = params';
	$m.__track_lines__[245] = 'network.py, line 245:\n    self.successHandler = [successHandler] if successHandler else []';
	$m.__track_lines__[246] = 'network.py, line 246:\n    self.failureHandler = [failureHandler] if failureHandler else []';
	$m.__track_lines__[247] = 'network.py, line 247:\n    self.finishedHandler = [finishedHandler] if finishedHandler else []';
	$m.__track_lines__[249] = 'network.py, line 249:\n    self.modifies = modifies';
	$m.__track_lines__[250] = 'network.py, line 250:\n    self.cacheable = cacheable';
	$m.__track_lines__[251] = 'network.py, line 251:\n    self.secure = secure';
	$m.__track_lines__[253] = 'network.py, line 253:\n    if secure:';
	$m.__track_lines__[254] = 'network.py, line 254:\n    self.waitingForSkey = True';
	$m.__track_lines__[255] = 'network.py, line 255:\n    self.doFetch("%s%s/skey" % (NetworkService.host, NetworkService.prefix), None, None)';
	$m.__track_lines__[257] = 'network.py, line 257:\n    self.doFetch(NetworkService.urlForArgs(module, url, cacheable), params, None)';
	$m.__track_lines__[260] = 'network.py, line 259:\n    @staticmethod ... def request(module, url, params=None, successHandler=None, failureHandler=None,';
	$m.__track_lines__[286] = 'network.py, line 286:\n    print("NS REQUEST", module, url, params )';
	$m.__track_lines__[287] = 'network.py, line 287:\n    assert not( cacheable and modifies ), "Cannot cache a request modifying data!"';
	$m.__track_lines__[289] = 'network.py, line 289:\n    return( NetworkService(module, url, params, successHandler, failureHandler, finishedHandler,';
	$m.__track_lines__[293] = 'network.py, line 293:\n    def doFetch(self, url, params, skey ):';
	$m.__track_lines__[297] = 'network.py, line 297:\n    if params:';
	$m.__track_lines__[298] = 'network.py, line 298:\n    if skey:';
	$m.__track_lines__[299] = 'network.py, line 299:\n    params["skey"] = skey';
	$m.__track_lines__[300] = 'network.py, line 300:\n    contentType = None';
	$m.__track_lines__[301] = 'network.py, line 301:\n    if isinstance( params, dict):';
	$m.__track_lines__[302] = 'network.py, line 302:\n    multipart, boundary = NetworkService.genReqStr( params )';
	$m.__track_lines__[303] = "network.py, line 303:\n    contentType = b'multipart/form-data; boundary='+boundary+b'; charset=utf-8'";
	$m.__track_lines__[305] = "network.py, line 305:\n    contentType =  b'application/x-www-form-urlencoded'";
	$m.__track_lines__[306] = 'network.py, line 306:\n    multipart = params';
	$m.__track_lines__[308] = 'network.py, line 308:\n    print( params )';
	$m.__track_lines__[309] = 'network.py, line 309:\n    print( type( params ) )';
	$m.__track_lines__[310] = 'network.py, line 310:\n    HTTPRequest().asyncPost(url, multipart, self, content_type=contentType )';
	$m.__track_lines__[312] = 'network.py, line 312:\n    if skey:';
	$m.__track_lines__[313] = 'network.py, line 313:\n    if "?" in url:';
	$m.__track_lines__[314] = 'network.py, line 314:\n    url += "&skey=%s" % skey';
	$m.__track_lines__[316] = 'network.py, line 316:\n    url += "?skey=%s" % skey';
	$m.__track_lines__[317] = 'network.py, line 317:\n    HTTPRequest().asyncGet(url, self)';
	$m.__track_lines__[319] = 'network.py, line 319:\n    def onCompletion(self, text):';
	$m.__track_lines__[323] = 'network.py, line 323:\n    if self.waitingForSkey:';
	$m.__track_lines__[324] = 'network.py, line 324:\n    self.waitingForSkey = False';
	$m.__track_lines__[325] = 'network.py, line 325:\n    self.doFetch(NetworkService.urlForArgs(self.module, self.url, self.cacheable),';
	$m.__track_lines__[329] = 'network.py, line 329:\n    self.result = text';
	$m.__track_lines__[330] = 'network.py, line 330:\n    self.status = "succeeded"';
	$m.__track_lines__[331] = 'network.py, line 331:\n    try:';
	$m.__track_lines__[332] = 'network.py, line 332:\n    for s in self.successHandler:';
	$m.__track_lines__[333] = 'network.py, line 333:\n    s( self )';
	$m.__track_lines__[334] = 'network.py, line 334:\n    for s in self.finishedHandler:';
	$m.__track_lines__[335] = 'network.py, line 335:\n    s( self )';
	$m.__track_lines__[337] = 'network.py, line 337:\n    if self.modifies:';
	$m.__track_lines__[338] = 'network.py, line 338:\n    DeferredCall(NetworkService.notifyChange, self.module, _delay=2500)';
	$m.__track_lines__[340] = 'network.py, line 340:\n    raise';
	$m.__track_lines__[342] = 'network.py, line 342:\n    self.successHandler = []';
	$m.__track_lines__[343] = 'network.py, line 343:\n    self.finishedHandler = []';
	$m.__track_lines__[344] = 'network.py, line 344:\n    self.failureHandler = []';
	$m.__track_lines__[345] = 'network.py, line 345:\n    self.params = None';
	$m.__track_lines__[346] = 'network.py, line 346:\n    if self.modifies:';
	$m.__track_lines__[347] = 'network.py, line 347:\n    DeferredCall(NetworkService.notifyChange, self.module, _delay=2500)';
	$m.__track_lines__[349] = 'network.py, line 349:\n    def onError(self, text, code):';
	$m.__track_lines__[353] = 'network.py, line 353:\n    self.status = "failed"';
	$m.__track_lines__[354] = 'network.py, line 354:\n    self.result = text';
	$m.__track_lines__[355] = 'network.py, line 355:\n    for s in self.failureHandler:';
	$m.__track_lines__[356] = 'network.py, line 356:\n    s( self, code )';
	$m.__track_lines__[357] = 'network.py, line 357:\n    for s in self.finishedHandler:';
	$m.__track_lines__[358] = 'network.py, line 358:\n    s( self )';
	$m.__track_lines__[359] = 'network.py, line 359:\n    self.successHandler = []';
	$m.__track_lines__[360] = 'network.py, line 360:\n    self.finishedHandler = []';
	$m.__track_lines__[361] = 'network.py, line 361:\n    self.failureHandler = []';
	$m.__track_lines__[362] = 'network.py, line 362:\n    self.params = None';
	$m.__track_lines__[364] = 'network.py, line 364:\n    def onTimeout(self, text):';
	$m.__track_lines__[368] = 'network.py, line 368:\n    self.onError( text, -1 )';


	$pyjs['track']['module']='network';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=4;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['sys'] = $p['___import___']('sys', null);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['os'] = $p['___import___']('os', null);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=5;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['json'] = $p['___import___']('json', null);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=6;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['string'] = $p['___import___']('string', null);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['random'] = $p['___import___']('random', null);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['time'] = $p['___import___']('time', null);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=8;
	$m['DeferredCall'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'network';
		$pyjs['track']['lineno']=15;
		$method = $pyjs__bind_method2('__init__', function(func) {
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
				func = arguments[1];
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
				if (typeof func != 'undefined') {
					if (func !== null && typeof func['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = func;
						func = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}
			var delay,w;
			$pyjs['track']={'module':'network', 'lineno':15};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='network';
			$pyjs['track']['lineno']=15;
			$pyjs['track']['lineno']=20;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['DeferredCall'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()['__init__']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs['track']['lineno']=21;
			delay = 25;
			$pyjs['track']['lineno']=22;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return kwargs['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})()['__contains__']('_delay'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})()) {
				$pyjs['track']['lineno']=23;
				delay = kwargs['__getitem__']('_delay');
				$pyjs['track']['lineno']=24;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return kwargs['__delitem__']('_delay');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
			}
			$pyjs['track']['lineno']=25;
			self['_tFunc'] = func;
			$pyjs['track']['lineno']=26;
			self['_tArgs'] = args;
			$pyjs['track']['lineno']=27;
			self['_tKwArgs'] = kwargs;
			$pyjs['track']['lineno']=28;
			w = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (typeof eval == "undefined"?$m['eval']:eval)('window');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
			$pyjs['track']['lineno']=29;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return w['setTimeout']($p['getattr'](self, 'run'), delay);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['func']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=31;
		$method = $pyjs__bind_method2('run', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'network', 'lineno':31};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='network';
			$pyjs['track']['lineno']=31;
			$pyjs['track']['lineno']=35;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(self, '_tFunc', $p['getattr'](self, '_tArgs'), $p['getattr'](self, '_tKwArgs'), [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['run'] = $method;
		$pyjs['track']['lineno']=8;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('DeferredCall', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=37;
	$m['HTTPRequest'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'network';
		$pyjs['track']['lineno']=41;
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

			$pyjs['track']={'module':'network', 'lineno':41};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='network';
			$pyjs['track']['lineno']=41;
			$pyjs['track']['lineno']=42;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['HTTPRequest'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
			$pyjs['track']['lineno']=43;
			self['req'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (typeof eval == "undefined"?$m['eval']:eval)('new XMLHttpRequest()');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
			$pyjs['track']['lineno']=44;
			$p['getattr'](self, 'req')['onreadystatechange'] = $p['getattr'](self, 'onReadyStateChange');
			$pyjs['track']['lineno']=45;
			self['cb'] = null;
			$pyjs['track']['lineno']=46;
			self['hasBeenSent'] = false;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=48;
		$method = $pyjs__bind_method2('asyncGet', function(url, cb) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				url = arguments[1];
				cb = arguments[2];
			}

			$pyjs['track']={'module':'network', 'lineno':48};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='network';
			$pyjs['track']['lineno']=48;
			$pyjs['track']['lineno']=56;
			self['cb'] = cb;
			$pyjs['track']['lineno']=57;
			self['type'] = 'GET';
			$pyjs['track']['lineno']=58;
			self['payload'] = null;
			$pyjs['track']['lineno']=59;
			self['content_type'] = null;
			$pyjs['track']['lineno']=60;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['req']['open']('GET', url, true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['url'],['cb']]);
		$cls_definition['asyncGet'] = $method;
		$pyjs['track']['lineno']=62;
		$method = $pyjs__bind_method2('asyncPost', function(url, payload, cb, content_type) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				url = arguments[1];
				payload = arguments[2];
				cb = arguments[3];
				content_type = arguments[4];
			}
			if (typeof content_type == 'undefined') content_type=arguments['callee']['__args__'][6][1];

			$pyjs['track']={'module':'network', 'lineno':62};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='network';
			$pyjs['track']['lineno']=62;
			$pyjs['track']['lineno']=70;
			self['cb'] = cb;
			$pyjs['track']['lineno']=71;
			self['type'] = 'POST';
			$pyjs['track']['lineno']=72;
			self['payload'] = payload;
			$pyjs['track']['lineno']=73;
			self['content_type'] = content_type;
			$pyjs['track']['lineno']=74;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['req']['open']('POST', url, true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['url'],['payload'],['cb'],['content_type', null]]);
		$cls_definition['asyncPost'] = $method;
		$pyjs['track']['lineno']=76;
		$method = $pyjs__bind_method2('onReadyStateChange', function() {
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
			var $and1,$and3,$and4,$and5,$and6,$and2;
			$pyjs['track']={'module':'network', 'lineno':76};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='network';
			$pyjs['track']['lineno']=76;
			$pyjs['track']['lineno']=80;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and1=$p['op_eq']($p['getattr']($p['getattr'](self, 'req'), 'readyState'), 1))?!$p['bool']($p['getattr'](self, 'hasBeenSent')):$and1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})()) {
				$pyjs['track']['lineno']=81;
				self['hasBeenSent'] = true;
				$pyjs['track']['lineno']=83;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($and3=$p['op_eq']($p['getattr'](self, 'type'), 'POST'))?($p['getattr'](self, 'content_type') !== null):$and3));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})()) {
					$pyjs['track']['lineno']=84;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['req']['setRequestHeader']('Content-Type', $p['getattr'](self, 'content_type'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
				}
				$pyjs['track']['lineno']=86;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['req']['send']($p['getattr'](self, 'payload'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
			}
			$pyjs['track']['lineno']=88;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq']($p['getattr']($p['getattr'](self, 'req'), 'readyState'), 4));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})()) {
				$pyjs['track']['lineno']=89;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($and5=((($p['cmp']($p['getattr']($p['getattr'](self, 'req'), 'status'), 200))|1) == 1))?($p['cmp']($p['getattr']($p['getattr'](self, 'req'), 'status'), 300) == -1):$and5));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})()) {
					$pyjs['track']['lineno']=90;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['cb']['onCompletion']($p['getattr']($p['getattr'](self, 'req'), 'responseText'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=92;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['cb']['onError']($p['getattr']($p['getattr'](self, 'req'), 'responseText'), $p['getattr']($p['getattr'](self, 'req'), 'status'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
				}
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['onReadyStateChange'] = $method;
		$pyjs['track']['lineno']=37;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('HTTPRequest', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=94;
	$m['NetworkService'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'network';
		$pyjs['track']['lineno']=101;
		$cls_definition['changeListeners'] = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
		$pyjs['track']['lineno']=102;
		$cls_definition['_cache'] = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
		$pyjs['track']['lineno']=103;
		$cls_definition['host'] = '';
		$pyjs['track']['lineno']=104;
		$cls_definition['prefix'] = '/json';
		$pyjs['track']['lineno']=107;
		$method = $pyjs__bind_method2('notifyChange', function(module) {
			var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
			if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
				kwargs = arguments[arguments['length']+1];
			} else {
				delete kwargs['$pyjs_is_kwarg'];
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof module != 'undefined') {
					if (module !== null && typeof module['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = module;
						module = arguments[1];
					}
				} else {
				}
			}
			var $augexpr1,c,$iter1_nextval,$iter1_type,$iter1_idx,$pyjs__trackstack_size_1,$augsub1,$iter1_iter,$add2,$add1,$iter1_array;
			$pyjs['track']={'module':'network', 'lineno':107};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='network';
			$pyjs['track']['lineno']=107;
			$pyjs['track']['lineno']=115;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['NetworkService']['_cache']['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})()['__contains__'](module));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})()) {
				$pyjs['track']['lineno']=116;
				var $augsub1 = module;
				var $augexpr1 = $p['getattr']($m['NetworkService'], '_cache');
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $augexpr1['__setitem__']($augsub1, $p['__op_add']($add1=$augexpr1['__getitem__']($augsub1),$add2=1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
			}
			$pyjs['track']['lineno']=118;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter1_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr']($m['NetworkService'], 'changeListeners');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				c = $iter1_nextval['$nextval'];
				$pyjs['track']['lineno']=119;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call(c, 'onDataChanged', null, kwargs, [{}, module]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='network';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 3, [null,['kwargs'],['module']]);
		$cls_definition['notifyChange'] = $method;
		$pyjs['track']['lineno']=122;
		$method = $pyjs__bind_method2('registerChangeListener', function(listener) {

			$pyjs['track']={'module':'network', 'lineno':122};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='network';
			$pyjs['track']['lineno']=122;
			$pyjs['track']['lineno']=131;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr']($m['NetworkService'], 'changeListeners')['__contains__'](listener));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})()) {
				$pyjs['track']['lineno']=132;
				$pyjs['track']['lineno']=132;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=134;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['NetworkService']['changeListeners']['append'](listener);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 3, [null,null,['listener']]);
		$cls_definition['registerChangeListener'] = $method;
		$pyjs['track']['lineno']=137;
		$method = $pyjs__bind_method2('removeChangeListener', function(listener) {

			$pyjs['track']={'module':'network', 'lineno':137};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='network';
			$pyjs['track']['lineno']=137;
			$pyjs['track']['lineno']=143;
			if (!( $p['getattr']($m['NetworkService'], 'changeListeners')['__contains__'](listener) )) {
			   throw $p['AssertionError']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('Attempt to remove unregistered listener %s', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['str'](listener);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})());
			 }
			$pyjs['track']['lineno']=144;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['NetworkService']['changeListeners']['remove'](listener);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 3, [null,null,['listener']]);
		$cls_definition['removeChangeListener'] = $method;
		$pyjs['track']['lineno']=147;
		$method = $pyjs__bind_method2('genReqStr', function(params) {
			var $iter5_idx,$iter3_iter,$iter6_array,$add76,$add77,$add74,$add75,$add72,$add73,$add70,$add71,$add78,$pyjs__trackstack_size_2,$pyjs__trackstack_size_1,$iter5_nextval,$add49,$iter5_array,value,$iter6_iter,$add65,$add64,$add67,$add66,$add61,$add60,$add63,$add62,res,$add69,$add68,boundary,$iter6_idx,key,$add50,$add51,$add52,$add53,$add54,$add55,$add56,$add57,$add58,$add59,k,$add45,encoding,$iter6_type,$iter3_array,$iter5_type,boundary_str,val,$add48,$add47,$add46,$iter3_nextval,$add44,$add43,$add42,$add41,$add40,type,$add38,$add39,$add32,$add33,$add30,$add31,$add36,$add37,$add34,$add35,$add7,$add13,v,$add8,$add9,$iter5_iter,$iter6_nextval,$add29,$add28,$iter3_idx,$add21,$add20,$add23,$add22,$add25,$add24,$add27,$add26,$pyjs_try_err,$or1,$or2,$add14,$add15,$add16,$add17,$add10,$add11,$add12,$iter3_type,$add18,$add19;
			$pyjs['track']={'module':'network', 'lineno':147};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='network';
			$pyjs['track']['lineno']=147;
			$pyjs['track']['lineno']=155;
			boundary_str = $p['__op_add']($add7='---',$add8=(function(){try{try{$pyjs['in_try_except'] += 1;
			return ''['join'](function(){
				var $iter2_nextval,$iter2_type,$iter2_iter,$add5,$collcomp1,$add3,$iter2_idx,$add6,$add4,$pyjs__trackstack_size_1,x,$iter2_array;
	$collcomp1 = $p['list']();
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter2_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['range'](13);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})();
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				x = $iter2_nextval['$nextval'];
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $collcomp1['append']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['random']['choice']($p['__op_add']($add5=$p['__op_add']($add3=$p['getattr']($m['string'], 'ascii_lowercase'),$add4=$p['getattr']($m['string'], 'ascii_uppercase')),$add6=$p['getattr']($m['string'], 'digits')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='network';

	return $collcomp1;}());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})());
			$pyjs['track']['lineno']=156;
			boundary = boundary_str;
			$pyjs['track']['lineno']=157;
			res = $p['__op_add']($add11=$p['__op_add']($add9='Content-Type: multipart/mixed; boundary="',$add10=boundary),$add12='"\r\nMIME-Version: 1.0\r\n');
			$pyjs['track']['lineno']=158;
			res = $p['__op_add']($add15=res,$add16=$p['__op_add']($add13='\r\n--',$add14=boundary));
			$pyjs['track']['lineno']=159;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter3_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']((function(){try{try{$pyjs['in_try_except'] += 1;
			return params['items']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})();
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				var $tupleassign1 = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__ass_unpack']($iter3_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})();
				key = $tupleassign1[0];
				value = $tupleassign1[1];
				$pyjs['track']['lineno']=160;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['all'](function(){
					var $iter4_nextval,$collcomp2,$iter4_idx,$pyjs__trackstack_size_2,$iter4_type,$iter4_array,x,$iter4_iter;
	$collcomp2 = $p['list']();
				$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
				$iter4_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list'](['name', 'read']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})();
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
					x = $iter4_nextval['$nextval'];
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $collcomp2['append']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['dir'](value);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})()['__contains__'](x));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='network';

	return $collcomp2;}());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})()) {
					$pyjs['track']['lineno']=161;
					var $pyjs__trackstack_size_2 = $pyjs['trackstack']['length'];
					try {
						try {
							$pyjs['in_try_except'] += 1;
							$pyjs['track']['lineno']=162;
							var $tupleassign2 = (function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['__ass_unpack']((function(){try{try{$pyjs['in_try_except'] += 1;
							return $pyjs_kwargs_call($m['mimetypes'], 'guess_type', null, null, [{'strict':false}, (function(){try{try{$pyjs['in_try_except'] += 1;
							return value['$$name']['decode']((function(){try{try{$pyjs['in_try_except'] += 1;
							return $m['sys']['getfilesystemencoding']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})(), 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})();
							type = $tupleassign2[0];
							encoding = $tupleassign2[1];
							$pyjs['track']['lineno']=163;
							type = ($p['bool']($or1=type)?$or1:'application/octet-stream');
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
						$pyjs['track']['module']='network';
						if (true) {
							$pyjs['track']['lineno']=165;
							type = 'application/octet-stream';
						}
					}
					$pyjs['track']['lineno']=166;
					res = $p['__op_add']($add29=res,$add30=$p['__op_add']($add27=$p['__op_add']($add25=$p['__op_add']($add23=$p['__op_add']($add21=$p['__op_add']($add19=$p['__op_add']($add17='\r\nContent-Type: ',$add18=type),$add20='\r\nMIME-Version: 1.0\r\nContent-Disposition: form-data; name="'),$add22=key),$add24='"; filename="'),$add26=(function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['os']['path']['basename']($p['getattr'](value, '$$name'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})()['decode']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['sys']['getfilesystemencoding']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})()),$add28='"\r\n\r\n'));
					$pyjs['track']['lineno']=167;
					res = $p['__op_add']($add31=res,$add32=(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['str']((function(){try{try{$pyjs['in_try_except'] += 1;
					return value['read']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})());
					$pyjs['track']['lineno']=168;
					res = $p['__op_add']($add35=res,$add36=$p['__op_add']($add33='\r\n--',$add34=boundary));
				}
				else if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](value, $p['list']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})()) {
					$pyjs['track']['lineno']=170;
					$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
					$iter5_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return value;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})();
					$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
					while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
						val = $iter5_nextval['$nextval'];
						$pyjs['track']['lineno']=171;
						res = $p['__op_add']($add41=res,$add42=$p['__op_add']($add39=$p['__op_add']($add37='\r\nContent-Type: application/octet-stream\r\nMIME-Version: 1.0\r\nContent-Disposition: form-data; name="',$add38=key),$add40='"\r\n\r\n'));
						$pyjs['track']['lineno']=172;
						res = $p['__op_add']($add43=res,$add44=(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['str'](val);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})());
						$pyjs['track']['lineno']=173;
						res = $p['__op_add']($add47=res,$add48=$p['__op_add']($add45='\r\n--',$add46=boundary));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='network';
				}
				else if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](value, $p['dict']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})()) {
					$pyjs['track']['lineno']=175;
					$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
					$iter6_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return value['items']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})();
					$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
					while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
						var $tupleassign3 = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['__ass_unpack']($iter6_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})();
						k = $tupleassign3[0];
						v = $tupleassign3[1];
						$pyjs['track']['lineno']=176;
						res = $p['__op_add']($add57=res,$add58=$p['__op_add']($add55=$p['__op_add']($add53=$p['__op_add']($add51=$p['__op_add']($add49='\r\nContent-Type: application/octet-stream\r\nMIME-Version: 1.0\r\nContent-Disposition: form-data; name="',$add50=key),$add52='.'),$add54=k),$add56='"\r\n\r\n'));
						$pyjs['track']['lineno']=177;
						res = $p['__op_add']($add59=res,$add60=(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['str'](v);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})());
						$pyjs['track']['lineno']=178;
						res = $p['__op_add']($add63=res,$add64=$p['__op_add']($add61='\r\n--',$add62=boundary));
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='network';
				}
				else {
					$pyjs['track']['lineno']=180;
					res = $p['__op_add']($add69=res,$add70=$p['__op_add']($add67=$p['__op_add']($add65='\r\nContent-Type: application/octet-stream\r\nMIME-Version: 1.0\r\nContent-Disposition: form-data; name="',$add66=key),$add68='"\r\n\r\n'));
					$pyjs['track']['lineno']=181;
					res = $p['__op_add']($add71=res,$add72=(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['str'](value);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})());
					$pyjs['track']['lineno']=182;
					res = $p['__op_add']($add75=res,$add76=$p['__op_add']($add73='\r\n--',$add74=boundary));
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='network';
			$pyjs['track']['lineno']=183;
			res = $p['__op_add']($add77=res,$add78='--\r\n');
			$pyjs['track']['lineno']=184;
			$pyjs['track']['lineno']=184;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple']([res, boundary]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['params']]);
		$cls_definition['genReqStr'] = $method;
		$pyjs['track']['lineno']=188;
		$method = $pyjs__bind_method2('decode', function(req) {

			$pyjs['track']={'module':'network', 'lineno':188};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='network';
			$pyjs['track']['lineno']=188;
			$pyjs['track']['lineno']=194;
			$pyjs['track']['lineno']=194;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['json']['loads']($p['getattr'](req, 'result'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['req']]);
		$cls_definition['decode'] = $method;
		$pyjs['track']['lineno']=197;
		$method = $pyjs__bind_method2('isOkay', function(req) {
			var $and8,$and7,answ;
			$pyjs['track']={'module':'network', 'lineno':197};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='network';
			$pyjs['track']['lineno']=197;
			$pyjs['track']['lineno']=198;
			answ = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['NetworkService']['decode'](req);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})();
			$pyjs['track']['lineno']=199;
			$pyjs['track']['lineno']=199;
			var $pyjs__ret = ($p['bool']($and7=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance'](answ, $p['str']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})())?$p['op_eq'](answ, 'OKAY'):$and7);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['req']]);
		$cls_definition['isOkay'] = $method;
		$pyjs['track']['lineno']=202;
		$method = $pyjs__bind_method2('urlForArgs', function(module, path, cacheable) {
			var $and9,$and10,cacheKey;
			$pyjs['track']={'module':'network', 'lineno':202};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='network';
			$pyjs['track']['lineno']=202;
			$pyjs['track']['lineno']=216;
			cacheKey = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['time']['time']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})();
			$pyjs['track']['lineno']=218;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and9=cacheable)?module:$and9));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})()) {
				$pyjs['track']['lineno']=219;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['NetworkService']['_cache']['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})()['__contains__'](module)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})()) {
					$pyjs['track']['lineno']=220;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr']($m['NetworkService'], '_cache')['__setitem__'](module, 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})();
				}
				$pyjs['track']['lineno']=222;
				cacheKey = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('c%s', $p['getattr']($m['NetworkService'], '_cache')['__getitem__'](module));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})();
			}
			$pyjs['track']['lineno']=224;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](module);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})()) {
				$pyjs['track']['lineno']=225;
				$pyjs['track']['lineno']=225;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('%s%s/%s/%s?_unused_time_stamp=%s', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$p['getattr']($m['NetworkService'], 'host'), $p['getattr']($m['NetworkService'], 'prefix'), module, path, cacheKey]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=228;
			$pyjs['track']['lineno']=228;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('%s%s_unused_time_stamp=%s', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple']([path, ($p['bool'](path['__contains__']('?'))? ('&') : ('?')), cacheKey]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['module'],['path'],['cacheable']]);
		$cls_definition['urlForArgs'] = $method;
		$pyjs['track']['lineno']=230;
		$method = $pyjs__bind_method2('__init__', function(module, url, params, successHandler, failureHandler, finishedHandler, modifies, cacheable, secure) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				module = arguments[1];
				url = arguments[2];
				params = arguments[3];
				successHandler = arguments[4];
				failureHandler = arguments[5];
				finishedHandler = arguments[6];
				modifies = arguments[7];
				cacheable = arguments[8];
				secure = arguments[9];
			}

			$pyjs['track']={'module':'network', 'lineno':230};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='network';
			$pyjs['track']['lineno']=230;
			$pyjs['track']['lineno']=236;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['NetworkService'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
}})()['__init__']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})();
			$pyjs['track']['lineno']=238;
			self['result'] = null;
			$pyjs['track']['lineno']=239;
			self['status'] = 'running';
			$pyjs['track']['lineno']=240;
			self['waitingForSkey'] = false;
			$pyjs['track']['lineno']=241;
			self['module'] = module;
			$pyjs['track']['lineno']=242;
			self['url'] = url;
			$pyjs['track']['lineno']=243;
			self['params'] = params;
			$pyjs['track']['lineno']=245;
			self['successHandler'] = ($p['bool'](successHandler)? ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([successHandler]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})()) : ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})()));
			$pyjs['track']['lineno']=246;
			self['failureHandler'] = ($p['bool'](failureHandler)? ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([failureHandler]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_88_err){if (!$p['isinstance']($pyjs_dbg_88_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_88_err);}throw $pyjs_dbg_88_err;
}})()) : ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_89_err){if (!$p['isinstance']($pyjs_dbg_89_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_89_err);}throw $pyjs_dbg_89_err;
}})()));
			$pyjs['track']['lineno']=247;
			self['finishedHandler'] = ($p['bool'](finishedHandler)? ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([finishedHandler]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_90_err){if (!$p['isinstance']($pyjs_dbg_90_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_90_err);}throw $pyjs_dbg_90_err;
}})()) : ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_91_err){if (!$p['isinstance']($pyjs_dbg_91_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_91_err);}throw $pyjs_dbg_91_err;
}})()));
			$pyjs['track']['lineno']=249;
			self['modifies'] = modifies;
			$pyjs['track']['lineno']=250;
			self['cacheable'] = cacheable;
			$pyjs['track']['lineno']=251;
			self['secure'] = secure;
			$pyjs['track']['lineno']=253;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](secure);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_92_err){if (!$p['isinstance']($pyjs_dbg_92_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_92_err);}throw $pyjs_dbg_92_err;
}})()) {
				$pyjs['track']['lineno']=254;
				self['waitingForSkey'] = true;
				$pyjs['track']['lineno']=255;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['doFetch']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('%s%s/skey', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([$p['getattr']($m['NetworkService'], 'host'), $p['getattr']($m['NetworkService'], 'prefix')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_93_err){if (!$p['isinstance']($pyjs_dbg_93_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_93_err);}throw $pyjs_dbg_93_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_94_err){if (!$p['isinstance']($pyjs_dbg_94_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_94_err);}throw $pyjs_dbg_94_err;
}})(), null, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_95_err){if (!$p['isinstance']($pyjs_dbg_95_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_95_err);}throw $pyjs_dbg_95_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=257;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['doFetch']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['NetworkService']['urlForArgs'](module, url, cacheable);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_96_err){if (!$p['isinstance']($pyjs_dbg_96_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_96_err);}throw $pyjs_dbg_96_err;
}})(), params, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_97_err){if (!$p['isinstance']($pyjs_dbg_97_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_97_err);}throw $pyjs_dbg_97_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['module'],['url'],['params'],['successHandler'],['failureHandler'],['finishedHandler'],['modifies'],['cacheable'],['secure']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=260;
		$method = $pyjs__bind_method2('request', function(module, url, params, successHandler, failureHandler, finishedHandler, modifies, cacheable, secure) {
			if (typeof params == 'undefined') params=arguments['callee']['__args__'][4][1];
			if (typeof successHandler == 'undefined') successHandler=arguments['callee']['__args__'][5][1];
			if (typeof failureHandler == 'undefined') failureHandler=arguments['callee']['__args__'][6][1];
			if (typeof finishedHandler == 'undefined') finishedHandler=arguments['callee']['__args__'][7][1];
			if (typeof modifies == 'undefined') modifies=arguments['callee']['__args__'][8][1];
			if (typeof cacheable == 'undefined') cacheable=arguments['callee']['__args__'][9][1];
			if (typeof secure == 'undefined') secure=arguments['callee']['__args__'][10][1];
			var $and12,$and11;
			$pyjs['track']={'module':'network', 'lineno':260};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='network';
			$pyjs['track']['lineno']=260;
			$pyjs['track']['lineno']=286;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['printFunc']([(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple'](['NS REQUEST', module, url, params]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_98_err){if (!$p['isinstance']($pyjs_dbg_98_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_98_err);}throw $pyjs_dbg_98_err;
}})()], 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_99_err){if (!$p['isinstance']($pyjs_dbg_99_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_99_err);}throw $pyjs_dbg_99_err;
}})();
			$pyjs['track']['lineno']=287;
			if (!( !$p['bool'](($p['bool']($and11=cacheable)?modifies:$and11)) )) {
			   throw $p['AssertionError']('Cannot cache a request modifying data!');
			 }
			$pyjs['track']['lineno']=289;
			$pyjs['track']['lineno']=289;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['NetworkService'](module, url, params, successHandler, failureHandler, finishedHandler, modifies, cacheable, secure);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_100_err){if (!$p['isinstance']($pyjs_dbg_100_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_100_err);}throw $pyjs_dbg_100_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['module'],['url'],['params', null],['successHandler', null],['failureHandler', null],['finishedHandler', null],['modifies', false],['cacheable', false],['secure', false]]);
		$cls_definition['request'] = $method;
		$pyjs['track']['lineno']=293;
		$method = $pyjs__bind_method2('doFetch', function(url, params, skey) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				url = arguments[1];
				params = arguments[2];
				skey = arguments[3];
			}
			var $add82,$add80,$add86,$add85,$add79,$add83,multipart,contentType,boundary,$add84,$add81;
			$pyjs['track']={'module':'network', 'lineno':293};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='network';
			$pyjs['track']['lineno']=293;
			$pyjs['track']['lineno']=297;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](params);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_101_err){if (!$p['isinstance']($pyjs_dbg_101_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_101_err);}throw $pyjs_dbg_101_err;
}})()) {
				$pyjs['track']['lineno']=298;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](skey);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_102_err){if (!$p['isinstance']($pyjs_dbg_102_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_102_err);}throw $pyjs_dbg_102_err;
}})()) {
					$pyjs['track']['lineno']=299;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return params['__setitem__']('skey', skey);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_103_err){if (!$p['isinstance']($pyjs_dbg_103_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_103_err);}throw $pyjs_dbg_103_err;
}})();
				}
				$pyjs['track']['lineno']=300;
				contentType = null;
				$pyjs['track']['lineno']=301;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](params, $p['dict']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_104_err){if (!$p['isinstance']($pyjs_dbg_104_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_104_err);}throw $pyjs_dbg_104_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_105_err){if (!$p['isinstance']($pyjs_dbg_105_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_105_err);}throw $pyjs_dbg_105_err;
}})()) {
					$pyjs['track']['lineno']=302;
					var $tupleassign4 = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['__ass_unpack']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['NetworkService']['genReqStr'](params);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_106_err){if (!$p['isinstance']($pyjs_dbg_106_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_106_err);}throw $pyjs_dbg_106_err;
}})(), 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_107_err){if (!$p['isinstance']($pyjs_dbg_107_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_107_err);}throw $pyjs_dbg_107_err;
}})();
					multipart = $tupleassign4[0];
					boundary = $tupleassign4[1];
					$pyjs['track']['lineno']=303;
					contentType = $p['__op_add']($add81=$p['__op_add']($add79='multipart/form-data; boundary=',$add80=boundary),$add82='; charset=utf-8');
				}
				else if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](params, (typeof bytes == "undefined"?$m['bytes']:bytes));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_108_err){if (!$p['isinstance']($pyjs_dbg_108_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_108_err);}throw $pyjs_dbg_108_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_109_err){if (!$p['isinstance']($pyjs_dbg_109_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_109_err);}throw $pyjs_dbg_109_err;
}})()) {
					$pyjs['track']['lineno']=305;
					contentType = 'application/x-www-form-urlencoded';
					$pyjs['track']['lineno']=306;
					multipart = params;
				}
				else {
					$pyjs['track']['lineno']=308;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['printFunc']([params], 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_110_err){if (!$p['isinstance']($pyjs_dbg_110_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_110_err);}throw $pyjs_dbg_110_err;
}})();
					$pyjs['track']['lineno']=309;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['printFunc']([(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['type'](params);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_111_err){if (!$p['isinstance']($pyjs_dbg_111_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_111_err);}throw $pyjs_dbg_111_err;
}})()], 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_112_err){if (!$p['isinstance']($pyjs_dbg_112_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_112_err);}throw $pyjs_dbg_112_err;
}})();
				}
				$pyjs['track']['lineno']=310;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['HTTPRequest']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_113_err){if (!$p['isinstance']($pyjs_dbg_113_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_113_err);}throw $pyjs_dbg_113_err;
}})(), 'asyncPost', null, null, [{'content_type':contentType}, url, multipart, self]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_114_err){if (!$p['isinstance']($pyjs_dbg_114_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_114_err);}throw $pyjs_dbg_114_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=312;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](skey);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_115_err){if (!$p['isinstance']($pyjs_dbg_115_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_115_err);}throw $pyjs_dbg_115_err;
}})()) {
					$pyjs['track']['lineno']=313;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](url['__contains__']('?'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_116_err){if (!$p['isinstance']($pyjs_dbg_116_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_116_err);}throw $pyjs_dbg_116_err;
}})()) {
						$pyjs['track']['lineno']=314;
						url = $p['__op_add']($add83=url,$add84=(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['sprintf']('&skey=%s', skey);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_117_err){if (!$p['isinstance']($pyjs_dbg_117_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_117_err);}throw $pyjs_dbg_117_err;
}})());
					}
					else {
						$pyjs['track']['lineno']=316;
						url = $p['__op_add']($add85=url,$add86=(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['sprintf']('?skey=%s', skey);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_118_err){if (!$p['isinstance']($pyjs_dbg_118_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_118_err);}throw $pyjs_dbg_118_err;
}})());
					}
				}
				$pyjs['track']['lineno']=317;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['HTTPRequest']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_119_err){if (!$p['isinstance']($pyjs_dbg_119_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_119_err);}throw $pyjs_dbg_119_err;
}})()['asyncGet'](url, self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_120_err){if (!$p['isinstance']($pyjs_dbg_120_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_120_err);}throw $pyjs_dbg_120_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['url'],['params'],['skey']]);
		$cls_definition['doFetch'] = $method;
		$pyjs['track']['lineno']=319;
		$method = $pyjs__bind_method2('onCompletion', function(text) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}
			var $iter8_idx,$iter7_nextval,$iter7_array,$iter8_array,$iter8_iter,s,$pyjs_try_err,$pyjs__trackstack_size_2,$iter8_nextval,$iter7_idx,$iter7_iter,$iter7_type,$iter8_type;
			$pyjs['track']={'module':'network', 'lineno':319};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='network';
			$pyjs['track']['lineno']=319;
			$pyjs['track']['lineno']=323;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'waitingForSkey'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_121_err){if (!$p['isinstance']($pyjs_dbg_121_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_121_err);}throw $pyjs_dbg_121_err;
}})()) {
				$pyjs['track']['lineno']=324;
				self['waitingForSkey'] = false;
				$pyjs['track']['lineno']=325;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['doFetch']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['NetworkService']['urlForArgs']($p['getattr'](self, 'module'), $p['getattr'](self, 'url'), $p['getattr'](self, 'cacheable'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_122_err){if (!$p['isinstance']($pyjs_dbg_122_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_122_err);}throw $pyjs_dbg_122_err;
}})(), $p['getattr'](self, 'params'), (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['json']['loads'](text);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_123_err){if (!$p['isinstance']($pyjs_dbg_123_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_123_err);}throw $pyjs_dbg_123_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_124_err){if (!$p['isinstance']($pyjs_dbg_124_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_124_err);}throw $pyjs_dbg_124_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=329;
				self['result'] = text;
				$pyjs['track']['lineno']=330;
				self['status'] = 'succeeded';
				$pyjs['track']['lineno']=331;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					try {
						$pyjs['in_try_except'] += 1;
						$pyjs['track']['lineno']=332;
						$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
						$iter7_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](self, 'successHandler');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_125_err){if (!$p['isinstance']($pyjs_dbg_125_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_125_err);}throw $pyjs_dbg_125_err;
}})();
						$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
						while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
							s = $iter7_nextval['$nextval'];
							$pyjs['track']['lineno']=333;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return s(self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_126_err){if (!$p['isinstance']($pyjs_dbg_126_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_126_err);}throw $pyjs_dbg_126_err;
}})();
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='network';
						$pyjs['track']['lineno']=334;
						$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
						$iter8_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['getattr'](self, 'finishedHandler');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_127_err){if (!$p['isinstance']($pyjs_dbg_127_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_127_err);}throw $pyjs_dbg_127_err;
}})();
						$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
						while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
							s = $iter8_nextval['$nextval'];
							$pyjs['track']['lineno']=335;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return s(self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_128_err){if (!$p['isinstance']($pyjs_dbg_128_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_128_err);}throw $pyjs_dbg_128_err;
}})();
						}
						if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
							$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
							$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
						}
						$pyjs['track']['module']='network';
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
					$pyjs['track']['module']='network';
					if (true) {
						$pyjs['track']['lineno']=337;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']($p['getattr'](self, 'modifies'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_129_err){if (!$p['isinstance']($pyjs_dbg_129_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_129_err);}throw $pyjs_dbg_129_err;
}})()) {
							$pyjs['track']['lineno']=338;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return $pyjs_kwargs_call(null, $m['DeferredCall'], null, null, [{'_delay':2500}, $p['getattr']($m['NetworkService'], 'notifyChange'), $p['getattr'](self, 'module')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_130_err){if (!$p['isinstance']($pyjs_dbg_130_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_130_err);}throw $pyjs_dbg_130_err;
}})();
						}
						$pyjs['track']['lineno']=340;
						$pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__'];
						$pyjs['__last_exception_stack__'] = null;
						throw ($pyjs['__last_exception__']?
							$pyjs['__last_exception__']['error']:
							$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
					}
				}
				$pyjs['track']['lineno']=342;
				self['successHandler'] = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_131_err){if (!$p['isinstance']($pyjs_dbg_131_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_131_err);}throw $pyjs_dbg_131_err;
}})();
				$pyjs['track']['lineno']=343;
				self['finishedHandler'] = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_132_err){if (!$p['isinstance']($pyjs_dbg_132_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_132_err);}throw $pyjs_dbg_132_err;
}})();
				$pyjs['track']['lineno']=344;
				self['failureHandler'] = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_133_err){if (!$p['isinstance']($pyjs_dbg_133_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_133_err);}throw $pyjs_dbg_133_err;
}})();
				$pyjs['track']['lineno']=345;
				self['params'] = null;
				$pyjs['track']['lineno']=346;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['getattr'](self, 'modifies'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_134_err){if (!$p['isinstance']($pyjs_dbg_134_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_134_err);}throw $pyjs_dbg_134_err;
}})()) {
					$pyjs['track']['lineno']=347;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $pyjs_kwargs_call(null, $m['DeferredCall'], null, null, [{'_delay':2500}, $p['getattr']($m['NetworkService'], 'notifyChange'), $p['getattr'](self, 'module')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_135_err){if (!$p['isinstance']($pyjs_dbg_135_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_135_err);}throw $pyjs_dbg_135_err;
}})();
				}
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['onCompletion'] = $method;
		$pyjs['track']['lineno']=349;
		$method = $pyjs__bind_method2('onError', function(text, code) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
				code = arguments[2];
			}
			var $iter9_iter,$iter10_idx,$iter9_nextval,$iter9_idx,$iter10_array,$iter9_array,s,$iter10_nextval,$pyjs__trackstack_size_1,$iter10_type,$iter10_iter,$iter9_type;
			$pyjs['track']={'module':'network', 'lineno':349};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='network';
			$pyjs['track']['lineno']=349;
			$pyjs['track']['lineno']=353;
			self['status'] = 'failed';
			$pyjs['track']['lineno']=354;
			self['result'] = text;
			$pyjs['track']['lineno']=355;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter9_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'failureHandler');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_136_err){if (!$p['isinstance']($pyjs_dbg_136_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_136_err);}throw $pyjs_dbg_136_err;
}})();
			$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
			while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
				s = $iter9_nextval['$nextval'];
				$pyjs['track']['lineno']=356;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return s(self, code);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_137_err){if (!$p['isinstance']($pyjs_dbg_137_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_137_err);}throw $pyjs_dbg_137_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='network';
			$pyjs['track']['lineno']=357;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter10_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'finishedHandler');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_138_err){if (!$p['isinstance']($pyjs_dbg_138_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_138_err);}throw $pyjs_dbg_138_err;
}})();
			$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
			while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
				s = $iter10_nextval['$nextval'];
				$pyjs['track']['lineno']=358;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return s(self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_139_err){if (!$p['isinstance']($pyjs_dbg_139_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_139_err);}throw $pyjs_dbg_139_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='network';
			$pyjs['track']['lineno']=359;
			self['successHandler'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_140_err){if (!$p['isinstance']($pyjs_dbg_140_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_140_err);}throw $pyjs_dbg_140_err;
}})();
			$pyjs['track']['lineno']=360;
			self['finishedHandler'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_141_err){if (!$p['isinstance']($pyjs_dbg_141_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_141_err);}throw $pyjs_dbg_141_err;
}})();
			$pyjs['track']['lineno']=361;
			self['failureHandler'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_142_err){if (!$p['isinstance']($pyjs_dbg_142_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_142_err);}throw $pyjs_dbg_142_err;
}})();
			$pyjs['track']['lineno']=362;
			self['params'] = null;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['text'],['code']]);
		$cls_definition['onError'] = $method;
		$pyjs['track']['lineno']=364;
		$method = $pyjs__bind_method2('onTimeout', function(text) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}

			$pyjs['track']={'module':'network', 'lineno':364};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='network';
			$pyjs['track']['lineno']=364;
			$pyjs['track']['lineno']=368;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['onError'](text, (typeof ($usub1=1)=='number'?
				-$usub1:
				$p['op_usub']($usub1)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_143_err){if (!$p['isinstance']($pyjs_dbg_143_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_143_err);}throw $pyjs_dbg_143_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['onTimeout'] = $method;
		$pyjs['track']['lineno']=94;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('NetworkService', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end network */


/* end module: network */


/*
PYJS_DEPS: ['sys', 'os', 'json', 'string', 'random', 'time']
*/
