/* start module: widgets.topbar */
$pyjs['loaded_modules']['widgets.topbar'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['widgets.topbar']['__was_initialized__']) return $pyjs['loaded_modules']['widgets.topbar'];
	if(typeof $pyjs['loaded_modules']['widgets'] == 'undefined' || !$pyjs['loaded_modules']['widgets']['__was_initialized__']) $p['___import___']('widgets', null);
	var $m = $pyjs['loaded_modules']['widgets.topbar'];
	$m['__repr__'] = function() { return '<module: widgets.topbar>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'widgets.topbar';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['widgets']['topbar'] = $pyjs['loaded_modules']['widgets.topbar'];
	$m.__track_lines__[1] = 'widgets.topbar.py, line 1:\n    # -*- coding: utf-8 -*-';
	$m.__track_lines__[2] = 'widgets.topbar.py, line 2:\n    import html5';
	$m.__track_lines__[3] = 'widgets.topbar.py, line 3:\n    from network import NetworkService';
	$m.__track_lines__[4] = 'widgets.topbar.py, line 4:\n    from i18n import translate';
	$m.__track_lines__[5] = 'widgets.topbar.py, line 5:\n    from config import conf';
	$m.__track_lines__[6] = 'widgets.topbar.py, line 6:\n    from widgets.task import TaskSelectWidget';
	$m.__track_lines__[7] = 'widgets.topbar.py, line 7:\n    from priorityqueue import toplevelActionSelector';
	$m.__track_lines__[9] = 'widgets.topbar.py, line 9:\n    class TopBarWidget( html5.Header ):';
	$m.__track_lines__[11] = 'widgets.topbar.py, line 11:\n    def getConf(self):';
	$m.__track_lines__[12] = 'widgets.topbar.py, line 12:\n    NetworkService.request( None, "/admin/config", successHandler=self.onCompletion,';
	$m.__track_lines__[15] = 'widgets.topbar.py, line 15:\n    def onCompletion(self, req):';
	$m.__track_lines__[16] = 'widgets.topbar.py, line 16:\n    data = NetworkService.decode(req)';
	$m.__track_lines__[17] = 'widgets.topbar.py, line 17:\n    if "configuration" in data.keys() and isinstance( data["configuration"], dict):';
	$m.__track_lines__[18] = 'widgets.topbar.py, line 18:\n    if "vi.name" in data["configuration"].keys():';
	$m.__track_lines__[19] = 'widgets.topbar.py, line 19:\n    self.modulH1.appendChild(html5.TextNode(data["configuration"]["vi.name"]))';
	$m.__track_lines__[21] = 'widgets.topbar.py, line 21:\n    def onError(self, req, code):';
	$m.__track_lines__[22] = 'widgets.topbar.py, line 22:\n    print("ONERROR")';
	$m.__track_lines__[24] = 'widgets.topbar.py, line 24:\n    """';
	$m.__track_lines__[27] = 'widgets.topbar.py, line 27:\n    def __init__(self):';
	$m.__track_lines__[29] = 'widgets.topbar.py, line 29:\n    super(TopBarWidget,self ).__init__( )';
	$m.__track_lines__[30] = 'widgets.topbar.py, line 30:\n    self["class"] = "vi_topbar"';
	$m.__track_lines__[31] = 'widgets.topbar.py, line 31:\n    anav=html5.Nav()';
	$m.__track_lines__[32] = 'widgets.topbar.py, line 32:\n    anav["class"].append("iconnav")';
	$m.__track_lines__[33] = 'widgets.topbar.py, line 33:\n    self.iconnav=html5.Ul()';
	$m.__track_lines__[39] = 'widgets.topbar.py, line 39:\n    self.modulH1 = html5.H1()';
	$m.__track_lines__[40] = 'widgets.topbar.py, line 40:\n    self.modulH1._setClass("module")';
	$m.__track_lines__[41] = 'widgets.topbar.py, line 41:\n    self.appendChild(self.modulH1)';
	$m.__track_lines__[43] = 'widgets.topbar.py, line 43:\n    self.modulContainer = html5.Div()';
	$m.__track_lines__[44] = 'widgets.topbar.py, line 44:\n    self.modulContainer["class"].append("currentmodul")';
	$m.__track_lines__[45] = 'widgets.topbar.py, line 45:\n    self.appendChild( self.modulContainer )';
	$m.__track_lines__[47] = 'widgets.topbar.py, line 47:\n    self.modulImg = html5.Label()';
	$m.__track_lines__[48] = 'widgets.topbar.py, line 48:\n    self.modulContainer.appendChild(self.modulImg)';
	$m.__track_lines__[50] = 'widgets.topbar.py, line 50:\n    self.moduleName = html5.Span()';
	$m.__track_lines__[51] = 'widgets.topbar.py, line 51:\n    self.modulContainer.appendChild( self.moduleName )';
	$m.__track_lines__[53] = 'widgets.topbar.py, line 53:\n    for icon in conf[ "toplevelactions" ]:';
	$m.__track_lines__[54] = 'widgets.topbar.py, line 54:\n    widget = toplevelActionSelector.select( icon )';
	$m.__track_lines__[55] = 'widgets.topbar.py, line 55:\n    if widget:';
	$m.__track_lines__[56] = 'widgets.topbar.py, line 56:\n    self.iconnav.appendChild( widget() )';
	$m.__track_lines__[58] = 'widgets.topbar.py, line 58:\n    anav.appendChild(self.iconnav)';
	$m.__track_lines__[59] = 'widgets.topbar.py, line 59:\n    self.appendChild(anav)';
	$m.__track_lines__[60] = 'widgets.topbar.py, line 60:\n    self.getConf()';
	$m.__track_lines__[62] = 'widgets.topbar.py, line 62:\n    def setCurrentModulDescr(self, descr, iconURL=None, iconClasses=None):';
	$m.__track_lines__[63] = 'widgets.topbar.py, line 63:\n    for c in self.modulImg._children[:]:';
	$m.__track_lines__[64] = 'widgets.topbar.py, line 64:\n    self.modulImg.removeChild(c)';
	$m.__track_lines__[65] = 'widgets.topbar.py, line 65:\n    for c in self.moduleName._children[:]:';
	$m.__track_lines__[66] = 'widgets.topbar.py, line 66:\n    self.moduleName.removeChild( c )';
	$m.__track_lines__[67] = 'widgets.topbar.py, line 67:\n    for c in self.modulImg["class"]:';
	$m.__track_lines__[68] = 'widgets.topbar.py, line 68:\n    self.modulImg["class"].remove(c)';
	$m.__track_lines__[70] = 'widgets.topbar.py, line 70:\n    descr = html5.utils.unescape(descr)';
	$m.__track_lines__[71] = 'widgets.topbar.py, line 71:\n    self.moduleName.appendChild(html5.TextNode(descr))';
	$m.__track_lines__[73] = 'widgets.topbar.py, line 73:\n    if iconURL is not None:';
	$m.__track_lines__[74] = 'widgets.topbar.py, line 74:\n    img = html5.Img()';
	$m.__track_lines__[75] = 'widgets.topbar.py, line 75:\n    img["src"] = iconURL';
	$m.__track_lines__[76] = 'widgets.topbar.py, line 76:\n    self.modulImg.appendChild(img)';
	$m.__track_lines__[78] = 'widgets.topbar.py, line 78:\n    if iconClasses is not None:';
	$m.__track_lines__[79] = 'widgets.topbar.py, line 79:\n    for cls in iconClasses:';
	$m.__track_lines__[80] = 'widgets.topbar.py, line 80:\n    self.modulImg["class"].append( cls )';
	$m.__track_lines__[82] = 'widgets.topbar.py, line 82:\n    eval("top.document.title=\'%s\'" % descr.replace("\'", "\\\\\'"))';
	$m.__track_lines__[85] = 'widgets.topbar.py, line 85:\n    class UserState(html5.Li):';
	$m.__track_lines__[86] = 'widgets.topbar.py, line 86:\n    def __init__(self):';
	$m.__track_lines__[87] = 'widgets.topbar.py, line 87:\n    super(UserState,self).__init__()';
	$m.__track_lines__[88] = 'widgets.topbar.py, line 88:\n    self.update()';
	$m.__track_lines__[90] = 'widgets.topbar.py, line 90:\n    def onCurrentUserAvailable(self, req):';
	$m.__track_lines__[91] = 'widgets.topbar.py, line 91:\n    data = NetworkService.decode( req )';
	$m.__track_lines__[92] = 'widgets.topbar.py, line 92:\n    conf[ "currentUser" ] = data[ "values" ]';
	$m.__track_lines__[93] = 'widgets.topbar.py, line 93:\n    self.update()';
	$m.__track_lines__[95] = 'widgets.topbar.py, line 95:\n    def update(self):';
	$m.__track_lines__[96] = 'widgets.topbar.py, line 96:\n    user = conf.get( "currentUser" )';
	$m.__track_lines__[97] = 'widgets.topbar.py, line 97:\n    if not user:';
	$m.__track_lines__[98] = 'widgets.topbar.py, line 98:\n    NetworkService.request( "user", "view/self",';
	$m.__track_lines__[101] = 'widgets.topbar.py, line 101:\n    return';
	$m.__track_lines__[103] = 'widgets.topbar.py, line 103:\n    aa = html5.A()';
	$m.__track_lines__[104] = 'widgets.topbar.py, line 104:\n    aa["title"] = user[ "name" ]';
	$m.__track_lines__[105] = 'widgets.topbar.py, line 105:\n    aa["class"].append("icon accountmgnt")';
	$m.__track_lines__[106] = 'widgets.topbar.py, line 106:\n    aa.appendChild( html5.TextNode( user[ "name" ] ) )';
	$m.__track_lines__[107] = 'widgets.topbar.py, line 107:\n    self.appendChild(aa)';
	$m.__track_lines__[110] = 'widgets.topbar.py, line 109:\n    @staticmethod ... def canHandle( action ):';
	$m.__track_lines__[111] = 'widgets.topbar.py, line 111:\n    return action == "userstate"';
	$m.__track_lines__[113] = 'widgets.topbar.py, line 113:\n    toplevelActionSelector.insert( 0, UserState.canHandle, UserState )';
	$m.__track_lines__[116] = 'widgets.topbar.py, line 116:\n    class Tasks(html5.Li):';
	$m.__track_lines__[117] = 'widgets.topbar.py, line 117:\n    def __init__(self):';
	$m.__track_lines__[118] = 'widgets.topbar.py, line 118:\n    super(Tasks, self).__init__()';
	$m.__track_lines__[119] = 'widgets.topbar.py, line 119:\n    self.sinkEvent("onClick")';
	$m.__track_lines__[120] = 'widgets.topbar.py, line 120:\n    self.hide()';
	$m.__track_lines__[122] = 'widgets.topbar.py, line 122:\n    a = html5.A()';
	$m.__track_lines__[123] = 'widgets.topbar.py, line 123:\n    a[ "class" ].append( "icon tasks" )';
	$m.__track_lines__[124] = 'widgets.topbar.py, line 124:\n    a.appendChild( html5.TextNode( translate( "Tasks" ) ) )';
	$m.__track_lines__[125] = 'widgets.topbar.py, line 125:\n    self.appendChild( a )';
	$m.__track_lines__[127] = 'widgets.topbar.py, line 127:\n    if not conf[ "tasks" ][ "server" ]:';
	$m.__track_lines__[128] = 'widgets.topbar.py, line 128:\n    NetworkService.request( None, "/admin/_tasks/list",';
	$m.__track_lines__[132] = 'widgets.topbar.py, line 132:\n    self.update()';
	$m.__track_lines__[134] = 'widgets.topbar.py, line 134:\n    def onTaskListAvailable(self, req):';
	$m.__track_lines__[135] = 'widgets.topbar.py, line 135:\n    data = NetworkService.decode(req)';
	$m.__track_lines__[136] = 'widgets.topbar.py, line 136:\n    if not "skellist" in data.keys() or not data[ "skellist" ]:';
	$m.__track_lines__[137] = 'widgets.topbar.py, line 137:\n    conf[ "tasks" ][ "server" ] = []';
	$m.__track_lines__[138] = 'widgets.topbar.py, line 138:\n    self.hide()';
	$m.__track_lines__[139] = 'widgets.topbar.py, line 139:\n    return';
	$m.__track_lines__[141] = 'widgets.topbar.py, line 141:\n    conf[ "tasks" ][ "server" ] = data[ "skellist" ]';
	$m.__track_lines__[143] = 'widgets.topbar.py, line 143:\n    def onTaskListFailure(self):';
	$m.__track_lines__[144] = 'widgets.topbar.py, line 144:\n    self.hide()';
	$m.__track_lines__[146] = 'widgets.topbar.py, line 146:\n    def onCurrentUserAvailable(self, req):';
	$m.__track_lines__[147] = 'widgets.topbar.py, line 147:\n    data = NetworkService.decode( req )';
	$m.__track_lines__[148] = 'widgets.topbar.py, line 148:\n    conf[ "currentUser" ] = data[ "values" ]';
	$m.__track_lines__[149] = 'widgets.topbar.py, line 149:\n    self.update()';
	$m.__track_lines__[151] = 'widgets.topbar.py, line 151:\n    def update(self):';
	$m.__track_lines__[152] = 'widgets.topbar.py, line 152:\n    user = conf.get( "currentUser" )';
	$m.__track_lines__[153] = 'widgets.topbar.py, line 153:\n    if not user:';
	$m.__track_lines__[154] = 'widgets.topbar.py, line 154:\n    NetworkService.request( "user", "view/self",';
	$m.__track_lines__[157] = 'widgets.topbar.py, line 157:\n    return';
	$m.__track_lines__[159] = 'widgets.topbar.py, line 159:\n    if "root" in user[ "access" ]:';
	$m.__track_lines__[160] = 'widgets.topbar.py, line 160:\n    self.show()';
	$m.__track_lines__[162] = 'widgets.topbar.py, line 162:\n    def onClick(self, event ):';
	$m.__track_lines__[163] = 'widgets.topbar.py, line 163:\n    TaskSelectWidget()';
	$m.__track_lines__[166] = 'widgets.topbar.py, line 165:\n    @staticmethod ... def canHandle( action ):';
	$m.__track_lines__[167] = 'widgets.topbar.py, line 167:\n    return action == "tasks"';
	$m.__track_lines__[169] = 'widgets.topbar.py, line 169:\n    toplevelActionSelector.insert( 0, Tasks.canHandle, Tasks )';
	$m.__track_lines__[172] = 'widgets.topbar.py, line 172:\n    class Logout(html5.Li):';
	$m.__track_lines__[173] = 'widgets.topbar.py, line 173:\n    def __init__(self):';
	$m.__track_lines__[174] = 'widgets.topbar.py, line 174:\n    super(Logout,self).__init__()';
	$m.__track_lines__[175] = 'widgets.topbar.py, line 175:\n    aa=html5.A()';
	$m.__track_lines__[176] = 'widgets.topbar.py, line 176:\n    aa["class"].append("icon logout")';
	$m.__track_lines__[177] = 'widgets.topbar.py, line 177:\n    aa.appendChild(html5.TextNode(translate("Logout")))';
	$m.__track_lines__[178] = 'widgets.topbar.py, line 178:\n    self.appendChild(aa)';
	$m.__track_lines__[179] = 'widgets.topbar.py, line 179:\n    self.sinkEvent("onClick")';
	$m.__track_lines__[181] = 'widgets.topbar.py, line 181:\n    def onClick(self, event):';
	$m.__track_lines__[182] = 'widgets.topbar.py, line 182:\n    event.stopPropagation()';
	$m.__track_lines__[183] = 'widgets.topbar.py, line 183:\n    event.preventDefault()';
	$m.__track_lines__[184] = 'widgets.topbar.py, line 184:\n    conf["theApp"].logout()';
	$m.__track_lines__[187] = 'widgets.topbar.py, line 186:\n    @staticmethod ... def canHandle( action ):';
	$m.__track_lines__[188] = 'widgets.topbar.py, line 188:\n    return action == "logout"';
	$m.__track_lines__[190] = 'widgets.topbar.py, line 190:\n    toplevelActionSelector.insert( 0, Logout.canHandle, Logout )';


	$pyjs['track']['module']='widgets.topbar';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=2;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['html5'] = $p['___import___']('html5', 'widgets');
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=3;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['NetworkService'] = $p['___import___']('network.NetworkService', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=4;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['translate'] = $p['___import___']('i18n.translate', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=5;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['conf'] = $p['___import___']('config.conf', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=6;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['TaskSelectWidget'] = $p['___import___']('widgets.task.TaskSelectWidget', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=7;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['toplevelActionSelector'] = $p['___import___']('priorityqueue.toplevelActionSelector', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=9;
	$m['TopBarWidget'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.topbar';
		$pyjs['track']['lineno']=11;
		$method = $pyjs__bind_method2('getConf', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'widgets.topbar', 'lineno':11};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.topbar';
			$pyjs['track']['lineno']=11;
			$pyjs['track']['lineno']=12;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'successHandler':$p['getattr'](self, 'onCompletion'), 'failureHandler':$p['getattr'](self, 'onError'), 'cacheable':true}, null, '/admin/config']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getConf'] = $method;
		$pyjs['track']['lineno']=15;
		$method = $pyjs__bind_method2('onCompletion', function(req) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				req = arguments[1];
			}
			var $and1,data,$and2;
			$pyjs['track']={'module':'widgets.topbar', 'lineno':15};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.topbar';
			$pyjs['track']['lineno']=15;
			$pyjs['track']['lineno']=16;
			data = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['NetworkService']['decode'](req);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs['track']['lineno']=17;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and1=(function(){try{try{$pyjs['in_try_except'] += 1;
			return data['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})()['__contains__']('configuration'))?(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance'](data['__getitem__']('configuration'), $p['dict']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})():$and1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})()) {
				$pyjs['track']['lineno']=18;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return data['__getitem__']('configuration')['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})()['__contains__']('vi.name'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})()) {
					$pyjs['track']['lineno']=19;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['modulH1']['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['html5']['TextNode'](data['__getitem__']('configuration')['__getitem__']('vi.name'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
				}
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['req']]);
		$cls_definition['onCompletion'] = $method;
		$pyjs['track']['lineno']=21;
		$method = $pyjs__bind_method2('onError', function(req, code) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				req = arguments[1];
				code = arguments[2];
			}

			$pyjs['track']={'module':'widgets.topbar', 'lineno':21};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.topbar';
			$pyjs['track']['lineno']=21;
			$pyjs['track']['lineno']=22;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['printFunc'](['ONERROR'], 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['req'],['code']]);
		$cls_definition['onError'] = $method;
		$pyjs['track']['lineno']=24;
		$pyjs['track']['lineno']=27;
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var anav,widget,$iter1_nextval,$iter1_type,$iter1_iter,$iter1_array,$pyjs__trackstack_size_1,icon,$iter1_idx;
			$pyjs['track']={'module':'widgets.topbar', 'lineno':27};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.topbar';
			$pyjs['track']['lineno']=27;
			$pyjs['track']['lineno']=29;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['TopBarWidget'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})()['__init__']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
			$pyjs['track']['lineno']=30;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__setitem__']('class', 'vi_topbar');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
			$pyjs['track']['lineno']=31;
			anav = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Nav']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
			$pyjs['track']['lineno']=32;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return anav['__getitem__']('class')['append']('iconnav');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
			$pyjs['track']['lineno']=33;
			self['iconnav'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Ul']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
			$pyjs['track']['lineno']=39;
			self['modulH1'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['H1']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
			$pyjs['track']['lineno']=40;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['modulH1']['_setClass']('module');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
			$pyjs['track']['lineno']=41;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'modulH1'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
			$pyjs['track']['lineno']=43;
			self['modulContainer'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Div']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
			$pyjs['track']['lineno']=44;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'modulContainer')['__getitem__']('class')['append']('currentmodul');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
			$pyjs['track']['lineno']=45;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'modulContainer'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
			$pyjs['track']['lineno']=47;
			self['modulImg'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Label']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
			$pyjs['track']['lineno']=48;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['modulContainer']['appendChild']($p['getattr'](self, 'modulImg'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
			$pyjs['track']['lineno']=50;
			self['moduleName'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Span']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
			$pyjs['track']['lineno']=51;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['modulContainer']['appendChild']($p['getattr'](self, 'moduleName'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
			$pyjs['track']['lineno']=53;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter1_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('toplevelactions');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				icon = $iter1_nextval['$nextval'];
				$pyjs['track']['lineno']=54;
				widget = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['toplevelActionSelector']['select'](icon);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})();
				$pyjs['track']['lineno']=55;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](widget);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})()) {
					$pyjs['track']['lineno']=56;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['iconnav']['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
					return widget();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.topbar';
			$pyjs['track']['lineno']=58;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return anav['appendChild']($p['getattr'](self, 'iconnav'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
			$pyjs['track']['lineno']=59;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild'](anav);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
			$pyjs['track']['lineno']=60;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['getConf']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=62;
		$method = $pyjs__bind_method2('setCurrentModulDescr', function(descr, iconURL, iconClasses) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				descr = arguments[1];
				iconURL = arguments[2];
				iconClasses = arguments[3];
			}
			if (typeof iconURL == 'undefined') iconURL=arguments['callee']['__args__'][4][1];
			if (typeof iconClasses == 'undefined') iconClasses=arguments['callee']['__args__'][5][1];
			var $iter5_nextval,$iter5_array,$iter3_type,$iter5_iter,$iter4_type,$iter5_type,$iter4_iter,$iter3_idx,$iter2_iter,$iter3_iter,$iter5_idx,cls,$iter2_type,img,$iter2_idx,$iter3_array,c,$iter2_nextval,$iter4_nextval,$iter4_idx,$pyjs__trackstack_size_1,$iter4_array,$iter3_nextval,$iter2_array;
			$pyjs['track']={'module':'widgets.topbar', 'lineno':62};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.topbar';
			$pyjs['track']['lineno']=62;
			$pyjs['track']['lineno']=63;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter2_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__getslice']($p['getattr']($p['getattr'](self, 'modulImg'), '_children'), 0, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})();
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				c = $iter2_nextval['$nextval'];
				$pyjs['track']['lineno']=64;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['modulImg']['removeChild'](c);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.topbar';
			$pyjs['track']['lineno']=65;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter3_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__getslice']($p['getattr']($p['getattr'](self, 'moduleName'), '_children'), 0, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})();
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				c = $iter3_nextval['$nextval'];
				$pyjs['track']['lineno']=66;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['moduleName']['removeChild'](c);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.topbar';
			$pyjs['track']['lineno']=67;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter4_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'modulImg')['__getitem__']('class');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})();
			$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
			while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
				c = $iter4_nextval['$nextval'];
				$pyjs['track']['lineno']=68;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'modulImg')['__getitem__']('class')['remove'](c);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.topbar';
			$pyjs['track']['lineno']=70;
			descr = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['utils']['unescape'](descr);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})();
			$pyjs['track']['lineno']=71;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['moduleName']['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['TextNode'](descr);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})();
			$pyjs['track']['lineno']=73;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((iconURL !== null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})()) {
				$pyjs['track']['lineno']=74;
				img = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Img']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})();
				$pyjs['track']['lineno']=75;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return img['__setitem__']('src', iconURL);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})();
				$pyjs['track']['lineno']=76;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['modulImg']['appendChild'](img);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})();
			}
			$pyjs['track']['lineno']=78;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((iconClasses !== null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})()) {
				$pyjs['track']['lineno']=79;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter5_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return iconClasses;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})();
				$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
				while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
					cls = $iter5_nextval['$nextval'];
					$pyjs['track']['lineno']=80;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'modulImg')['__getitem__']('class')['append'](cls);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='widgets.topbar';
			}
			$pyjs['track']['lineno']=82;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (typeof eval == "undefined"?$m['eval']:eval)((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']("top.document.title='%s'", (function(){try{try{$pyjs['in_try_except'] += 1;
			return descr['$$replace']("'", "\\'");
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['descr'],['iconURL', null],['iconClasses', null]]);
		$cls_definition['setCurrentModulDescr'] = $method;
		$pyjs['track']['lineno']=9;
		var $bases = new Array($p['getattr']($m['html5'], 'Header'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('TopBarWidget', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=85;
	$m['UserState'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.topbar';
		$pyjs['track']['lineno']=86;
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'widgets.topbar', 'lineno':86};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.topbar';
			$pyjs['track']['lineno']=86;
			$pyjs['track']['lineno']=87;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['UserState'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})()['__init__']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})();
			$pyjs['track']['lineno']=88;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['update']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=90;
		$method = $pyjs__bind_method2('onCurrentUserAvailable', function(req) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				req = arguments[1];
			}
			var data;
			$pyjs['track']={'module':'widgets.topbar', 'lineno':90};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.topbar';
			$pyjs['track']['lineno']=90;
			$pyjs['track']['lineno']=91;
			data = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['NetworkService']['decode'](req);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})();
			$pyjs['track']['lineno']=92;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__setitem__']('currentUser', data['__getitem__']('values'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})();
			$pyjs['track']['lineno']=93;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['update']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['req']]);
		$cls_definition['onCurrentUserAvailable'] = $method;
		$pyjs['track']['lineno']=95;
		$method = $pyjs__bind_method2('update', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var aa,user;
			$pyjs['track']={'module':'widgets.topbar', 'lineno':95};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.topbar';
			$pyjs['track']['lineno']=95;
			$pyjs['track']['lineno']=96;
			user = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['get']('currentUser');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})();
			$pyjs['track']['lineno']=97;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool'](user));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})()) {
				$pyjs['track']['lineno']=98;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'successHandler':$p['getattr'](self, 'onCurrentUserAvailable'), 'cacheable':false}, 'user', 'view/self']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})();
				$pyjs['track']['lineno']=101;
				$pyjs['track']['lineno']=101;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=103;
			aa = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['A']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})();
			$pyjs['track']['lineno']=104;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return aa['__setitem__']('title', user['__getitem__']('name'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})();
			$pyjs['track']['lineno']=105;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return aa['__getitem__']('class')['append']('icon accountmgnt');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})();
			$pyjs['track']['lineno']=106;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return aa['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['TextNode'](user['__getitem__']('name'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})();
			$pyjs['track']['lineno']=107;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild'](aa);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['update'] = $method;
		$pyjs['track']['lineno']=110;
		$method = $pyjs__bind_method2('canHandle', function(action) {

			$pyjs['track']={'module':'widgets.topbar', 'lineno':110};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.topbar';
			$pyjs['track']['lineno']=110;
			$pyjs['track']['lineno']=111;
			$pyjs['track']['lineno']=111;
			var $pyjs__ret = $p['op_eq'](action, 'userstate');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['action']]);
		$cls_definition['canHandle'] = $method;
		$pyjs['track']['lineno']=85;
		var $bases = new Array($p['getattr']($m['html5'], 'Li'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('UserState', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=113;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['toplevelActionSelector']['insert'](0, $p['getattr']($m['UserState'], 'canHandle'), $m['UserState']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})();
	$pyjs['track']['lineno']=116;
	$m['Tasks'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.topbar';
		$pyjs['track']['lineno']=117;
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var a;
			$pyjs['track']={'module':'widgets.topbar', 'lineno':117};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.topbar';
			$pyjs['track']['lineno']=117;
			$pyjs['track']['lineno']=118;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['Tasks'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})()['__init__']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})();
			$pyjs['track']['lineno']=119;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['sinkEvent']('onClick');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})();
			$pyjs['track']['lineno']=120;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['hide']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})();
			$pyjs['track']['lineno']=122;
			a = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['A']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})();
			$pyjs['track']['lineno']=123;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return a['__getitem__']('class')['append']('icon tasks');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})();
			$pyjs['track']['lineno']=124;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return a['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['TextNode']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Tasks');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})();
			$pyjs['track']['lineno']=125;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild'](a);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})();
			$pyjs['track']['lineno']=127;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool']($m['conf']['__getitem__']('tasks')['__getitem__']('server')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})()) {
				$pyjs['track']['lineno']=128;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'successHandler':$p['getattr'](self, 'onTaskListAvailable'), 'cacheable':false}, null, '/admin/_tasks/list']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})();
			}
			$pyjs['track']['lineno']=132;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['update']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=134;
		$method = $pyjs__bind_method2('onTaskListAvailable', function(req) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				req = arguments[1];
			}
			var $or1,data,$or2;
			$pyjs['track']={'module':'widgets.topbar', 'lineno':134};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.topbar';
			$pyjs['track']['lineno']=134;
			$pyjs['track']['lineno']=135;
			data = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['NetworkService']['decode'](req);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})();
			$pyjs['track']['lineno']=136;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($or1=!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return data['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
}})()['__contains__']('skellist')))?$or1:!$p['bool'](data['__getitem__']('skellist'))));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})()) {
				$pyjs['track']['lineno']=137;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['conf']['__getitem__']('tasks')['__setitem__']('server', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})();
				$pyjs['track']['lineno']=138;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['hide']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_88_err){if (!$p['isinstance']($pyjs_dbg_88_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_88_err);}throw $pyjs_dbg_88_err;
}})();
				$pyjs['track']['lineno']=139;
				$pyjs['track']['lineno']=139;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=141;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('tasks')['__setitem__']('server', data['__getitem__']('skellist'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_89_err){if (!$p['isinstance']($pyjs_dbg_89_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_89_err);}throw $pyjs_dbg_89_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['req']]);
		$cls_definition['onTaskListAvailable'] = $method;
		$pyjs['track']['lineno']=143;
		$method = $pyjs__bind_method2('onTaskListFailure', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'widgets.topbar', 'lineno':143};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.topbar';
			$pyjs['track']['lineno']=143;
			$pyjs['track']['lineno']=144;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['hide']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_90_err){if (!$p['isinstance']($pyjs_dbg_90_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_90_err);}throw $pyjs_dbg_90_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onTaskListFailure'] = $method;
		$pyjs['track']['lineno']=146;
		$method = $pyjs__bind_method2('onCurrentUserAvailable', function(req) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				req = arguments[1];
			}
			var data;
			$pyjs['track']={'module':'widgets.topbar', 'lineno':146};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.topbar';
			$pyjs['track']['lineno']=146;
			$pyjs['track']['lineno']=147;
			data = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['NetworkService']['decode'](req);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_91_err){if (!$p['isinstance']($pyjs_dbg_91_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_91_err);}throw $pyjs_dbg_91_err;
}})();
			$pyjs['track']['lineno']=148;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__setitem__']('currentUser', data['__getitem__']('values'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_92_err){if (!$p['isinstance']($pyjs_dbg_92_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_92_err);}throw $pyjs_dbg_92_err;
}})();
			$pyjs['track']['lineno']=149;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['update']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_93_err){if (!$p['isinstance']($pyjs_dbg_93_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_93_err);}throw $pyjs_dbg_93_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['req']]);
		$cls_definition['onCurrentUserAvailable'] = $method;
		$pyjs['track']['lineno']=151;
		$method = $pyjs__bind_method2('update', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var user;
			$pyjs['track']={'module':'widgets.topbar', 'lineno':151};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.topbar';
			$pyjs['track']['lineno']=151;
			$pyjs['track']['lineno']=152;
			user = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['get']('currentUser');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_94_err){if (!$p['isinstance']($pyjs_dbg_94_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_94_err);}throw $pyjs_dbg_94_err;
}})();
			$pyjs['track']['lineno']=153;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool'](user));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_95_err){if (!$p['isinstance']($pyjs_dbg_95_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_95_err);}throw $pyjs_dbg_95_err;
}})()) {
				$pyjs['track']['lineno']=154;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'successHandler':$p['getattr'](self, 'onCurrentUserAvailable'), 'cacheable':false}, 'user', 'view/self']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_96_err){if (!$p['isinstance']($pyjs_dbg_96_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_96_err);}throw $pyjs_dbg_96_err;
}})();
				$pyjs['track']['lineno']=157;
				$pyjs['track']['lineno']=157;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=159;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](user['__getitem__']('access')['__contains__']('root'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_97_err){if (!$p['isinstance']($pyjs_dbg_97_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_97_err);}throw $pyjs_dbg_97_err;
}})()) {
				$pyjs['track']['lineno']=160;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['show']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_98_err){if (!$p['isinstance']($pyjs_dbg_98_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_98_err);}throw $pyjs_dbg_98_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['update'] = $method;
		$pyjs['track']['lineno']=162;
		$method = $pyjs__bind_method2('onClick', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'widgets.topbar', 'lineno':162};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.topbar';
			$pyjs['track']['lineno']=162;
			$pyjs['track']['lineno']=163;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['TaskSelectWidget']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_99_err){if (!$p['isinstance']($pyjs_dbg_99_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_99_err);}throw $pyjs_dbg_99_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=166;
		$method = $pyjs__bind_method2('canHandle', function(action) {

			$pyjs['track']={'module':'widgets.topbar', 'lineno':166};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.topbar';
			$pyjs['track']['lineno']=166;
			$pyjs['track']['lineno']=167;
			$pyjs['track']['lineno']=167;
			var $pyjs__ret = $p['op_eq'](action, 'tasks');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['action']]);
		$cls_definition['canHandle'] = $method;
		$pyjs['track']['lineno']=116;
		var $bases = new Array($p['getattr']($m['html5'], 'Li'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Tasks', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=169;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['toplevelActionSelector']['insert'](0, $p['getattr']($m['Tasks'], 'canHandle'), $m['Tasks']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_100_err){if (!$p['isinstance']($pyjs_dbg_100_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_100_err);}throw $pyjs_dbg_100_err;
}})();
	$pyjs['track']['lineno']=172;
	$m['Logout'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.topbar';
		$pyjs['track']['lineno']=173;
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var aa;
			$pyjs['track']={'module':'widgets.topbar', 'lineno':173};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.topbar';
			$pyjs['track']['lineno']=173;
			$pyjs['track']['lineno']=174;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['Logout'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_101_err){if (!$p['isinstance']($pyjs_dbg_101_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_101_err);}throw $pyjs_dbg_101_err;
}})()['__init__']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_102_err){if (!$p['isinstance']($pyjs_dbg_102_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_102_err);}throw $pyjs_dbg_102_err;
}})();
			$pyjs['track']['lineno']=175;
			aa = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['A']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_103_err){if (!$p['isinstance']($pyjs_dbg_103_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_103_err);}throw $pyjs_dbg_103_err;
}})();
			$pyjs['track']['lineno']=176;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return aa['__getitem__']('class')['append']('icon logout');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_104_err){if (!$p['isinstance']($pyjs_dbg_104_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_104_err);}throw $pyjs_dbg_104_err;
}})();
			$pyjs['track']['lineno']=177;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return aa['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['TextNode']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Logout');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_105_err){if (!$p['isinstance']($pyjs_dbg_105_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_105_err);}throw $pyjs_dbg_105_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_106_err){if (!$p['isinstance']($pyjs_dbg_106_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_106_err);}throw $pyjs_dbg_106_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_107_err){if (!$p['isinstance']($pyjs_dbg_107_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_107_err);}throw $pyjs_dbg_107_err;
}})();
			$pyjs['track']['lineno']=178;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild'](aa);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_108_err){if (!$p['isinstance']($pyjs_dbg_108_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_108_err);}throw $pyjs_dbg_108_err;
}})();
			$pyjs['track']['lineno']=179;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['sinkEvent']('onClick');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_109_err){if (!$p['isinstance']($pyjs_dbg_109_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_109_err);}throw $pyjs_dbg_109_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=181;
		$method = $pyjs__bind_method2('onClick', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'widgets.topbar', 'lineno':181};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.topbar';
			$pyjs['track']['lineno']=181;
			$pyjs['track']['lineno']=182;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return event['stopPropagation']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_110_err){if (!$p['isinstance']($pyjs_dbg_110_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_110_err);}throw $pyjs_dbg_110_err;
}})();
			$pyjs['track']['lineno']=183;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return event['preventDefault']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_111_err){if (!$p['isinstance']($pyjs_dbg_111_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_111_err);}throw $pyjs_dbg_111_err;
}})();
			$pyjs['track']['lineno']=184;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('theApp')['logout']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_112_err){if (!$p['isinstance']($pyjs_dbg_112_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_112_err);}throw $pyjs_dbg_112_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=187;
		$method = $pyjs__bind_method2('canHandle', function(action) {

			$pyjs['track']={'module':'widgets.topbar', 'lineno':187};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.topbar';
			$pyjs['track']['lineno']=187;
			$pyjs['track']['lineno']=188;
			$pyjs['track']['lineno']=188;
			var $pyjs__ret = $p['op_eq'](action, 'logout');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['action']]);
		$cls_definition['canHandle'] = $method;
		$pyjs['track']['lineno']=172;
		var $bases = new Array($p['getattr']($m['html5'], 'Li'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Logout', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=190;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['toplevelActionSelector']['insert'](0, $p['getattr']($m['Logout'], 'canHandle'), $m['Logout']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_113_err){if (!$p['isinstance']($pyjs_dbg_113_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_113_err);}throw $pyjs_dbg_113_err;
}})();
	return this;
}; /* end widgets.topbar */


/* end module: widgets.topbar */


/*
PYJS_DEPS: ['html5', 'network.NetworkService', 'network', 'i18n.translate', 'i18n', 'config.conf', 'config', 'widgets.task.TaskSelectWidget', 'widgets', 'widgets.task', 'priorityqueue.toplevelActionSelector', 'priorityqueue']
*/
