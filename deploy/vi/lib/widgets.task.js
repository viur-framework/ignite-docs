/* start module: widgets.task */
$pyjs['loaded_modules']['widgets.task'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['widgets.task']['__was_initialized__']) return $pyjs['loaded_modules']['widgets.task'];
	if(typeof $pyjs['loaded_modules']['widgets'] == 'undefined' || !$pyjs['loaded_modules']['widgets']['__was_initialized__']) $p['___import___']('widgets', null);
	var $m = $pyjs['loaded_modules']['widgets.task'];
	$m['__repr__'] = function() { return '<module: widgets.task>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'widgets.task';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['widgets']['task'] = $pyjs['loaded_modules']['widgets.task'];
	$m.__track_lines__[1] = 'widgets.task.py, line 1:\n    # -*- coding: utf-8 -*-';
	$m.__track_lines__[3] = 'widgets.task.py, line 3:\n    import html5, utils';
	$m.__track_lines__[4] = 'widgets.task.py, line 4:\n    from config import conf';
	$m.__track_lines__[5] = 'widgets.task.py, line 5:\n    from i18n import translate';
	$m.__track_lines__[6] = 'widgets.task.py, line 6:\n    from widgets.edit import EditWidget';
	$m.__track_lines__[8] = 'widgets.task.py, line 8:\n    class TaskWidget( html5.ext.Popup ):';
	$m.__track_lines__[9] = 'widgets.task.py, line 9:\n    def __init__( self, title ):';
	$m.__track_lines__[10] = 'widgets.task.py, line 10:\n    super( TaskWidget, self ).__init__( title = title )';
	$m.__track_lines__[11] = 'widgets.task.py, line 11:\n    self[ "class" ].append( "task" )';
	$m.__track_lines__[12] = 'widgets.task.py, line 12:\n    self.title = title';
	$m.__track_lines__[14] = 'widgets.task.py, line 14:\n    class ServerTaskWidget( TaskWidget ):';
	$m.__track_lines__[15] = 'widgets.task.py, line 15:\n    def __init__( self, title, key ):';
	$m.__track_lines__[16] = 'widgets.task.py, line 16:\n    super( ServerTaskWidget, self ).__init__( title = title )';
	$m.__track_lines__[17] = 'widgets.task.py, line 17:\n    self.widget = EditWidget( "_tasks", EditWidget.appSingleton, key, logaction = "Task started!" )';
	$m.__track_lines__[18] = 'widgets.task.py, line 18:\n    self.appendChild( self.widget )';
	$m.__track_lines__[19] = 'widgets.task.py, line 19:\n    self.appendChild( html5.ext.Button( translate( "Cancel" ), self.close ) )';
	$m.__track_lines__[21] = 'widgets.task.py, line 21:\n    class TaskSelectWidget( TaskWidget ):';
	$m.__track_lines__[22] = 'widgets.task.py, line 22:\n    def __init__( self ):';
	$m.__track_lines__[23] = 'widgets.task.py, line 23:\n    super( TaskSelectWidget, self ).__init__( title = translate( "Select a task" ) )';
	$m.__track_lines__[24] = 'widgets.task.py, line 24:\n    self.sinkEvent( "onChange" )';
	$m.__track_lines__[26] = 'widgets.task.py, line 26:\n    div = html5.Div()';
	$m.__track_lines__[27] = 'widgets.task.py, line 27:\n    div[ "class" ] = [ "task-selector" ]';
	$m.__track_lines__[28] = 'widgets.task.py, line 28:\n    self.appendChild( div )';
	$m.__track_lines__[30] = 'widgets.task.py, line 30:\n    self.select = html5.Select()';
	$m.__track_lines__[31] = 'widgets.task.py, line 31:\n    div.appendChild( self.select )';
	$m.__track_lines__[33] = 'widgets.task.py, line 33:\n    for type in [ "server", "client" ]:';
	$m.__track_lines__[34] = 'widgets.task.py, line 34:\n    for i, task in enumerate( conf[ "tasks" ][ type ] ):';
	$m.__track_lines__[35] = 'widgets.task.py, line 35:\n    if type == "client":';
	$m.__track_lines__[36] = 'widgets.task.py, line 36:\n    assert task[ "task" ], "task-Attribute must be set for client-side tasks"';
	$m.__track_lines__[38] = 'widgets.task.py, line 38:\n    if not "type" in task.keys():';
	$m.__track_lines__[39] = 'widgets.task.py, line 39:\n    task[ "type" ] = type';
	$m.__track_lines__[41] = 'widgets.task.py, line 41:\n    opt = html5.Option()';
	$m.__track_lines__[42] = 'widgets.task.py, line 42:\n    opt.task = task';
	$m.__track_lines__[44] = 'widgets.task.py, line 44:\n    opt.appendChild( html5.TextNode( task[ "name" ] ) )';
	$m.__track_lines__[46] = 'widgets.task.py, line 46:\n    if not self.select._children:';
	$m.__track_lines__[47] = 'widgets.task.py, line 47:\n    opt._setSelected( True )';
	$m.__track_lines__[49] = 'widgets.task.py, line 49:\n    self.select.appendChild( opt )';
	$m.__track_lines__[51] = 'widgets.task.py, line 51:\n    self.descr = html5.Div()';
	$m.__track_lines__[52] = 'widgets.task.py, line 52:\n    self.descr[ "class" ] = [ "task-description" ]';
	$m.__track_lines__[53] = 'widgets.task.py, line 53:\n    self.appendChild( self.descr )';
	$m.__track_lines__[55] = 'widgets.task.py, line 55:\n    self.appendChild( html5.ext.Button( translate( "Cancel" ), self.close ) )';
	$m.__track_lines__[56] = 'widgets.task.py, line 56:\n    self.appendChild( html5.ext.Button( translate( "Run" ), self.invokeTask ) )';
	$m.__track_lines__[59] = 'widgets.task.py, line 59:\n    self.setActiveTask()';
	$m.__track_lines__[61] = 'widgets.task.py, line 61:\n    def getSelectedTask(self):';
	$m.__track_lines__[62] = 'widgets.task.py, line 62:\n    return self.select._children[ self.select[ "selectedIndex" ] ].task';
	$m.__track_lines__[64] = 'widgets.task.py, line 64:\n    def setActiveTask(self):';
	$m.__track_lines__[65] = 'widgets.task.py, line 65:\n    task = self.getSelectedTask()';
	$m.__track_lines__[66] = 'widgets.task.py, line 66:\n    self.descr.removeAllChildren()';
	$m.__track_lines__[68] = 'widgets.task.py, line 67:\n    self.descr.appendChild( ... html5.TextNode(';
	$m.__track_lines__[71] = 'widgets.task.py, line 71:\n    def onChange(self, event):';
	$m.__track_lines__[72] = 'widgets.task.py, line 72:\n    if html5.utils.doesEventHitWidgetOrChildren(event, self.select):';
	$m.__track_lines__[73] = 'widgets.task.py, line 73:\n    self.setActiveTask()';
	$m.__track_lines__[75] = 'widgets.task.py, line 75:\n    def invokeTask(self, *args, **kwargs):';
	$m.__track_lines__[76] = 'widgets.task.py, line 76:\n    task = self.getSelectedTask()';
	$m.__track_lines__[77] = 'widgets.task.py, line 77:\n    self.close()';
	$m.__track_lines__[79] = 'widgets.task.py, line 79:\n    if task[ "type" ] == "server":';
	$m.__track_lines__[80] = 'widgets.task.py, line 80:\n    ServerTaskWidget( task[ "name" ], task[ "key" ] )';
	$m.__track_lines__[82] = 'widgets.task.py, line 82:\n    if not "task" in task.keys():';
	$m.__track_lines__[83] = 'widgets.task.py, line 83:\n    return';
	$m.__track_lines__[85] = 'widgets.task.py, line 85:\n    task[ "task" ]( task[ "name" ] )';
	$m.__track_lines__[87] = 'widgets.task.py, line 87:\n    raise NotImplementedError()';


	$pyjs['track']['module']='widgets.task';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=3;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['html5'] = $p['___import___']('html5', 'widgets');
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['utils'] = $p['___import___']('utils', 'widgets');
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=4;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['conf'] = $p['___import___']('config.conf', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=5;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['translate'] = $p['___import___']('i18n.translate', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=6;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['EditWidget'] = $p['___import___']('widgets.edit.EditWidget', 'widgets', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=8;
	$m['TaskWidget'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.task';
		$pyjs['track']['lineno']=9;
		$method = $pyjs__bind_method2('__init__', function(title) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				title = arguments[1];
			}

			$pyjs['track']={'module':'widgets.task', 'lineno':9};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.task';
			$pyjs['track']['lineno']=9;
			$pyjs['track']['lineno']=10;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['TaskWidget'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})(), '__init__', null, null, [{'title':title}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs['track']['lineno']=11;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__getitem__']('class')['append']('task');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			$pyjs['track']['lineno']=12;
			self['title'] = title;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['title']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=8;
		var $bases = new Array($p['getattr']($p['getattr']($m['html5'], 'ext'), 'Popup'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('TaskWidget', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=14;
	$m['ServerTaskWidget'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.task';
		$pyjs['track']['lineno']=15;
		$method = $pyjs__bind_method2('__init__', function(title, key) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				title = arguments[1];
				key = arguments[2];
			}

			$pyjs['track']={'module':'widgets.task', 'lineno':15};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.task';
			$pyjs['track']['lineno']=15;
			$pyjs['track']['lineno']=16;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['ServerTaskWidget'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})(), '__init__', null, null, [{'title':title}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
			$pyjs['track']['lineno']=17;
			self['widget'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(null, $m['EditWidget'], null, null, [{'logaction':'Task started!'}, '_tasks', $p['getattr']($m['EditWidget'], 'appSingleton'), key]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
			$pyjs['track']['lineno']=18;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'widget'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
			$pyjs['track']['lineno']=19;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['ext']['Button']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Cancel');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})(), $p['getattr'](self, 'close'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['title'],['key']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=14;
		var $bases = new Array($m['TaskWidget']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('ServerTaskWidget', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=21;
	$m['TaskSelectWidget'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'widgets.task';
		$pyjs['track']['lineno']=22;
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var opt,$iter2_nextval,$iter1_nextval,$iter1_type,$iter2_iter,i,$iter1_iter,$iter2_idx,task,$pyjs__trackstack_size_2,$iter1_array,$pyjs__trackstack_size_1,$iter2_type,div,type,$iter2_array,$iter1_idx;
			$pyjs['track']={'module':'widgets.task', 'lineno':22};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.task';
			$pyjs['track']['lineno']=22;
			$pyjs['track']['lineno']=23;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['TaskSelectWidget'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})(), '__init__', null, null, [{'title':(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Select a task');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})()}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
			$pyjs['track']['lineno']=24;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['sinkEvent']('onChange');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
			$pyjs['track']['lineno']=26;
			div = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Div']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
			$pyjs['track']['lineno']=27;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return div['__setitem__']('class', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list'](['task-selector']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
			$pyjs['track']['lineno']=28;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild'](div);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
			$pyjs['track']['lineno']=30;
			self['select'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Select']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
			$pyjs['track']['lineno']=31;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return div['appendChild']($p['getattr'](self, 'select'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
			$pyjs['track']['lineno']=33;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter1_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list'](['server', 'client']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				type = $iter1_nextval['$nextval'];
				$pyjs['track']['lineno']=34;
				$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
				$iter2_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['enumerate']($m['conf']['__getitem__']('tasks')['__getitem__'](type));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					var $tupleassign1 = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['__ass_unpack']($iter2_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
					i = $tupleassign1[0];
					task = $tupleassign1[1];
					$pyjs['track']['lineno']=35;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_eq'](type, 'client'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})()) {
						$pyjs['track']['lineno']=36;
						if (!( task['__getitem__']('task') )) {
						   throw $p['AssertionError']('task-Attribute must be set for client-side tasks');
						 }
					}
					$pyjs['track']['lineno']=38;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return task['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})()['__contains__']('type')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})()) {
						$pyjs['track']['lineno']=39;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return task['__setitem__']('type', type);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})();
					}
					$pyjs['track']['lineno']=41;
					opt = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['html5']['Option']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
					$pyjs['track']['lineno']=42;
					opt['task'] = task;
					$pyjs['track']['lineno']=44;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return opt['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['html5']['TextNode'](task['__getitem__']('name'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
					$pyjs['track']['lineno']=46;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](!$p['bool']($p['getattr']($p['getattr'](self, 'select'), '_children')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})()) {
						$pyjs['track']['lineno']=47;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return opt['_setSelected'](true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})();
					}
					$pyjs['track']['lineno']=49;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['select']['appendChild'](opt);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='widgets.task';
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='widgets.task';
			$pyjs['track']['lineno']=51;
			self['descr'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Div']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})();
			$pyjs['track']['lineno']=52;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'descr')['__setitem__']('class', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list'](['task-description']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})();
			$pyjs['track']['lineno']=53;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'descr'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})();
			$pyjs['track']['lineno']=55;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['ext']['Button']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Cancel');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})(), $p['getattr'](self, 'close'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})();
			$pyjs['track']['lineno']=56;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['ext']['Button']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Run');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})(), $p['getattr'](self, 'invokeTask'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})();
			$pyjs['track']['lineno']=59;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['setActiveTask']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=61;
		$method = $pyjs__bind_method2('getSelectedTask', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'widgets.task', 'lineno':61};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.task';
			$pyjs['track']['lineno']=61;
			$pyjs['track']['lineno']=62;
			$pyjs['track']['lineno']=62;
			var $pyjs__ret = $p['getattr']($p['getattr']($p['getattr'](self, 'select'), '_children')['__getitem__']($p['getattr'](self, 'select')['__getitem__']('selectedIndex')), 'task');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getSelectedTask'] = $method;
		$pyjs['track']['lineno']=64;
		$method = $pyjs__bind_method2('setActiveTask', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var task,$or1,$or2;
			$pyjs['track']={'module':'widgets.task', 'lineno':64};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.task';
			$pyjs['track']['lineno']=64;
			$pyjs['track']['lineno']=65;
			task = (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['getSelectedTask']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})();
			$pyjs['track']['lineno']=66;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['descr']['removeAllChildren']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})();
			$pyjs['track']['lineno']=68;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['descr']['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['TextNode'](($p['bool']($or1=(function(){try{try{$pyjs['in_try_except'] += 1;
			return task['get']('descr');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})())?$or1:(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('No description provided.');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['setActiveTask'] = $method;
		$pyjs['track']['lineno']=71;
		$method = $pyjs__bind_method2('onChange', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'widgets.task', 'lineno':71};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.task';
			$pyjs['track']['lineno']=71;
			$pyjs['track']['lineno']=72;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['utils']['doesEventHitWidgetOrChildren'](event, $p['getattr'](self, 'select'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})()) {
				$pyjs['track']['lineno']=73;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['setActiveTask']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onChange'] = $method;
		$pyjs['track']['lineno']=75;
		$method = $pyjs__bind_method2('invokeTask', function() {
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
			var task;
			$pyjs['track']={'module':'widgets.task', 'lineno':75};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='widgets.task';
			$pyjs['track']['lineno']=75;
			$pyjs['track']['lineno']=76;
			task = (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['getSelectedTask']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})();
			$pyjs['track']['lineno']=77;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['close']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})();
			$pyjs['track']['lineno']=79;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](task['__getitem__']('type'), 'server'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})()) {
				$pyjs['track']['lineno']=80;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['ServerTaskWidget'](task['__getitem__']('name'), task['__getitem__']('key'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})();
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](task['__getitem__']('type'), 'client'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})()) {
				$pyjs['track']['lineno']=82;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return task['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})()['__contains__']('task')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})()) {
					$pyjs['track']['lineno']=83;
					$pyjs['track']['lineno']=83;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=85;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return task['__getitem__']('task')(task['__getitem__']('name'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=87;
				$pyjs['__active_exception_stack__'] = null;
				throw ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['NotImplementedError']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})());
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['invokeTask'] = $method;
		$pyjs['track']['lineno']=21;
		var $bases = new Array($m['TaskWidget']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('TaskSelectWidget', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end widgets.task */


/* end module: widgets.task */


/*
PYJS_DEPS: ['html5', 'utils', 'config.conf', 'config', 'i18n.translate', 'i18n', 'widgets.edit.EditWidget', 'widgets', 'widgets.edit']
*/
