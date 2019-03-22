/* start module: priorityqueue */
$pyjs['loaded_modules']['priorityqueue'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['priorityqueue']['__was_initialized__']) return $pyjs['loaded_modules']['priorityqueue'];
	var $m = $pyjs['loaded_modules']['priorityqueue'];
	$m['__repr__'] = function() { return '<module: priorityqueue>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'priorityqueue';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$m.__track_lines__[1] = 'priorityqueue.py, line 1:\n    #!/usr/bin/env python3';
	$m.__track_lines__[5] = 'priorityqueue.py, line 5:\n    class StartupQueue( object ):';
	$m.__track_lines__[6] = 'priorityqueue.py, line 6:\n    def __init__(self):';
	$m.__track_lines__[7] = 'priorityqueue.py, line 7:\n    super(StartupQueue, self).__init__()';
	$m.__track_lines__[8] = 'priorityqueue.py, line 8:\n    self.q = []';
	$m.__track_lines__[9] = 'priorityqueue.py, line 9:\n    self.reset()';
	$m.__track_lines__[11] = 'priorityqueue.py, line 11:\n    def reset(self):';
	$m.__track_lines__[12] = 'priorityqueue.py, line 12:\n    self.isRunning = False';
	$m.__track_lines__[13] = 'priorityqueue.py, line 13:\n    self.currentElem = -1';
	$m.__track_lines__[14] = 'priorityqueue.py, line 14:\n    self.finalElem = None';
	$m.__track_lines__[16] = 'priorityqueue.py, line 16:\n    def setFinalElem(self, elem):';
	$m.__track_lines__[17] = 'priorityqueue.py, line 17:\n    assert self.finalElem is None';
	$m.__track_lines__[18] = 'priorityqueue.py, line 18:\n    assert not self.isRunning';
	$m.__track_lines__[19] = 'priorityqueue.py, line 19:\n    self.finalElem = elem';
	$m.__track_lines__[21] = 'priorityqueue.py, line 21:\n    def insertElem(self, priority, elem):';
	$m.__track_lines__[22] = 'priorityqueue.py, line 22:\n    assert not self.isRunning';
	$m.__track_lines__[23] = 'priorityqueue.py, line 23:\n    self.q.append( (priority,elem) )';
	$m.__track_lines__[25] = 'priorityqueue.py, line 25:\n    def run(self):';
	$m.__track_lines__[26] = 'priorityqueue.py, line 26:\n    assert not self.isRunning';
	$m.__track_lines__[27] = 'priorityqueue.py, line 27:\n    assert self.finalElem is not None';
	$m.__track_lines__[28] = 'priorityqueue.py, line 28:\n    self.isRunning = True';
	$m.__track_lines__[29] = 'priorityqueue.py, line 29:\n    self.next()';
	$m.__track_lines__[31] = 'priorityqueue.py, line 31:\n    def next(self):';
	$m.__track_lines__[32] = 'priorityqueue.py, line 32:\n    self.currentElem += 1';
	$m.__track_lines__[33] = 'priorityqueue.py, line 33:\n    if self.currentElem < len( self.q ): #This index is still valid';
	$m.__track_lines__[34] = 'priorityqueue.py, line 34:\n    cb = self.q[self.currentElem][1]';
	$m.__track_lines__[35] = 'priorityqueue.py, line 35:\n    print("Running startup callback #%s" % str(self.currentElem))';
	$m.__track_lines__[36] = 'priorityqueue.py, line 36:\n    cb()';
	$m.__track_lines__[38] = 'priorityqueue.py, line 38:\n    self.finalElem()';
	$m.__track_lines__[39] = 'priorityqueue.py, line 39:\n    self.reset()';
	$m.__track_lines__[41] = 'priorityqueue.py, line 41:\n    raise RuntimeError("StartupQueue has no more elements to call. Someone called next() twice!")';
	$m.__track_lines__[43] = 'priorityqueue.py, line 43:\n    startupQueue = StartupQueue()';
	$m.__track_lines__[45] = 'priorityqueue.py, line 45:\n    class PriorityQueue( object ):';
	$m.__track_lines__[46] = 'priorityqueue.py, line 46:\n    def __init__( self ):';
	$m.__track_lines__[47] = 'priorityqueue.py, line 47:\n    super( PriorityQueue, self ).__init__()';
	$m.__track_lines__[48] = 'priorityqueue.py, line 48:\n    self._q = {}';
	$m.__track_lines__[50] = 'priorityqueue.py, line 50:\n    def insert( self, priority, validateFunc, generator ):';
	$m.__track_lines__[51] = 'priorityqueue.py, line 51:\n    priority = int( priority )';
	$m.__track_lines__[52] = 'priorityqueue.py, line 52:\n    if not priority in self._q.keys():';
	$m.__track_lines__[53] = 'priorityqueue.py, line 53:\n    self._q[ priority ] = []';
	$m.__track_lines__[54] = 'priorityqueue.py, line 54:\n    self._q[ priority ].append( (validateFunc, generator) )';
	$m.__track_lines__[56] = 'priorityqueue.py, line 56:\n    def select( self, *args, **kwargs ):';
	$m.__track_lines__[57] = 'priorityqueue.py, line 57:\n    prios = list( self._q.keys() )';
	$m.__track_lines__[58] = 'priorityqueue.py, line 58:\n    prios.sort( reverse=True )';
	$m.__track_lines__[59] = 'priorityqueue.py, line 59:\n    for p in prios:';
	$m.__track_lines__[60] = 'priorityqueue.py, line 60:\n    for validateFunc, generator in self._q[ p ]:';
	$m.__track_lines__[61] = 'priorityqueue.py, line 61:\n    if validateFunc( *args, **kwargs ):';
	$m.__track_lines__[62] = 'priorityqueue.py, line 62:\n    return( generator )';
	$m.__track_lines__[65] = 'priorityqueue.py, line 65:\n    HandlerClassSelector = PriorityQueue() # Used during startup to select an Wrapper-Class';
	$m.__track_lines__[66] = 'priorityqueue.py, line 66:\n    editBoneSelector = PriorityQueue() # Queried by editWidget to locate its bones';
	$m.__track_lines__[67] = 'priorityqueue.py, line 67:\n    actionDelegateSelector = PriorityQueue() # Locates an action for a given module/action-name';
	$m.__track_lines__[68] = 'priorityqueue.py, line 68:\n    displayDelegateSelector = PriorityQueue() # Selects a widget used to display data from a certain modul';
	$m.__track_lines__[69] = 'priorityqueue.py, line 69:\n    initialHashHandler = PriorityQueue() # Provides the handler for the initial hash given in the url';
	$m.__track_lines__[70] = 'priorityqueue.py, line 70:\n    extendedSearchWidgetSelector = PriorityQueue() # Selects a widget used to perform user-customizable searches';
	$m.__track_lines__[71] = 'priorityqueue.py, line 71:\n    extractorDelegateSelector = PriorityQueue() # selects a widget used to extract raw data from bones including special features like multilanguage support';
	$m.__track_lines__[72] = 'priorityqueue.py, line 72:\n    toplevelActionSelector = PriorityQueue() # Top bar actions queue';
	$m.__track_lines__[73] = 'priorityqueue.py, line 73:\n    loginHandlerSelector = PriorityQueue() # Login handlers';
	$m.__track_lines__[76] = 'priorityqueue.py, line 76:\n    viewDelegateSelector = PriorityQueue() # Queried by listWidget to determine the viewDelegates for the table';
	$m.__track_lines__[77] = 'priorityqueue.py, line 77:\n    protocolWrapperClassSelector = PriorityQueue() # Used during startup to select an Wrapper-Class';
	$m.__track_lines__[78] = 'priorityqueue.py, line 78:\n    protocolWrapperInstanceSelector = PriorityQueue() # Used afterwards to get a specific instance';


	$pyjs['track']['module']='priorityqueue';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=5;
	$m['StartupQueue'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'priorityqueue';
		$pyjs['track']['lineno']=6;
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'priorityqueue', 'lineno':6};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='priorityqueue';
			$pyjs['track']['lineno']=6;
			$pyjs['track']['lineno']=7;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['StartupQueue'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()['__init__']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs['track']['lineno']=8;
			self['q'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			$pyjs['track']['lineno']=9;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['reset']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=11;
		$method = $pyjs__bind_method2('reset', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'priorityqueue', 'lineno':11};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='priorityqueue';
			$pyjs['track']['lineno']=11;
			$pyjs['track']['lineno']=12;
			self['isRunning'] = false;
			$pyjs['track']['lineno']=13;
			self['currentElem'] = (typeof ($usub1=1)=='number'?
				-$usub1:
				$p['op_usub']($usub1));
			$pyjs['track']['lineno']=14;
			self['finalElem'] = null;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['reset'] = $method;
		$pyjs['track']['lineno']=16;
		$method = $pyjs__bind_method2('setFinalElem', function(elem) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				elem = arguments[1];
			}

			$pyjs['track']={'module':'priorityqueue', 'lineno':16};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='priorityqueue';
			$pyjs['track']['lineno']=16;
			$pyjs['track']['lineno']=17;
			if (!( ($p['getattr'](self, 'finalElem') === null) )) {
			   throw $p['AssertionError']();
			 }
			$pyjs['track']['lineno']=18;
			if (!( !$p['bool']($p['getattr'](self, 'isRunning')) )) {
			   throw $p['AssertionError']();
			 }
			$pyjs['track']['lineno']=19;
			self['finalElem'] = elem;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['elem']]);
		$cls_definition['setFinalElem'] = $method;
		$pyjs['track']['lineno']=21;
		$method = $pyjs__bind_method2('insertElem', function(priority, elem) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				priority = arguments[1];
				elem = arguments[2];
			}

			$pyjs['track']={'module':'priorityqueue', 'lineno':21};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='priorityqueue';
			$pyjs['track']['lineno']=21;
			$pyjs['track']['lineno']=22;
			if (!( !$p['bool']($p['getattr'](self, 'isRunning')) )) {
			   throw $p['AssertionError']();
			 }
			$pyjs['track']['lineno']=23;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['q']['append']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple']([priority, elem]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['priority'],['elem']]);
		$cls_definition['insertElem'] = $method;
		$pyjs['track']['lineno']=25;
		$method = $pyjs__bind_method2('run', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'priorityqueue', 'lineno':25};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='priorityqueue';
			$pyjs['track']['lineno']=25;
			$pyjs['track']['lineno']=26;
			if (!( !$p['bool']($p['getattr'](self, 'isRunning')) )) {
			   throw $p['AssertionError']();
			 }
			$pyjs['track']['lineno']=27;
			if (!( ($p['getattr'](self, 'finalElem') !== null) )) {
			   throw $p['AssertionError']();
			 }
			$pyjs['track']['lineno']=28;
			self['isRunning'] = true;
			$pyjs['track']['lineno']=29;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['next']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['run'] = $method;
		$pyjs['track']['lineno']=31;
		$method = $pyjs__bind_method2('next', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add2,cb,$add1;
			$pyjs['track']={'module':'priorityqueue', 'lineno':31};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='priorityqueue';
			$pyjs['track']['lineno']=31;
			$pyjs['track']['lineno']=32;
			self['currentElem'] = $p['__op_add']($add1=$p['getattr'](self, 'currentElem'),$add2=1);
			$pyjs['track']['lineno']=33;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['cmp']($p['getattr'](self, 'currentElem'), (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len']($p['getattr'](self, 'q'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})()) == -1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})()) {
				$pyjs['track']['lineno']=34;
				cb = $p['getattr'](self, 'q')['__getitem__']($p['getattr'](self, 'currentElem'))['__getitem__'](1);
				$pyjs['track']['lineno']=35;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['printFunc']([(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('Running startup callback #%s', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str']($p['getattr'](self, 'currentElem'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})()], 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
				$pyjs['track']['lineno']=36;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return cb();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq']($p['getattr'](self, 'currentElem'), (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len']($p['getattr'](self, 'q'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})()) {
				$pyjs['track']['lineno']=38;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['finalElem']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
				$pyjs['track']['lineno']=39;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['reset']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=41;
				$pyjs['__active_exception_stack__'] = null;
				throw ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['RuntimeError']('StartupQueue has no more elements to call. Someone called next() twice!');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})());
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['next'] = $method;
		$pyjs['track']['lineno']=5;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('StartupQueue', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=43;
	$m['startupQueue'] = (function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['StartupQueue']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
	$pyjs['track']['lineno']=45;
	$m['PriorityQueue'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'priorityqueue';
		$pyjs['track']['lineno']=46;
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'priorityqueue', 'lineno':46};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='priorityqueue';
			$pyjs['track']['lineno']=46;
			$pyjs['track']['lineno']=47;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['PriorityQueue'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})()['__init__']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
			$pyjs['track']['lineno']=48;
			self['_q'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=50;
		$method = $pyjs__bind_method2('insert', function(priority, validateFunc, generator) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				priority = arguments[1];
				validateFunc = arguments[2];
				generator = arguments[3];
			}

			$pyjs['track']={'module':'priorityqueue', 'lineno':50};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='priorityqueue';
			$pyjs['track']['lineno']=50;
			$pyjs['track']['lineno']=51;
			priority = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['float_int'](priority);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
			$pyjs['track']['lineno']=52;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return self['_q']['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})()['__contains__'](priority)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})()) {
				$pyjs['track']['lineno']=53;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, '_q')['__setitem__'](priority, (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
			}
			$pyjs['track']['lineno']=54;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, '_q')['__getitem__'](priority)['append']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple']([validateFunc, generator]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['priority'],['validateFunc'],['generator']]);
		$cls_definition['insert'] = $method;
		$pyjs['track']['lineno']=56;
		$method = $pyjs__bind_method2('select', function() {
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
			var $iter2_nextval,$iter1_nextval,$iter1_type,$iter2_iter,validateFunc,$iter1_iter,prios,p,$iter2_idx,$pyjs__trackstack_size_2,$iter1_array,$iter2_type,generator,$pyjs__trackstack_size_1,$iter2_array,$iter1_idx;
			$pyjs['track']={'module':'priorityqueue', 'lineno':56};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='priorityqueue';
			$pyjs['track']['lineno']=56;
			$pyjs['track']['lineno']=57;
			prios = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']((function(){try{try{$pyjs['in_try_except'] += 1;
			return self['_q']['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
			$pyjs['track']['lineno']=58;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(prios, 'sort', null, null, [{'reverse':true}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
			$pyjs['track']['lineno']=59;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter1_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return prios;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				p = $iter1_nextval['$nextval'];
				$pyjs['track']['lineno']=60;
				$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
				$iter2_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, '_q')['__getitem__'](p);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})();
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					var $tupleassign1 = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['__ass_unpack']($iter2_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})();
					validateFunc = $tupleassign1[0];
					generator = $tupleassign1[1];
					$pyjs['track']['lineno']=61;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $pyjs_kwargs_call(null, validateFunc, args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})()) {
						$pyjs['track']['lineno']=62;
						$pyjs['track']['lineno']=62;
						var $pyjs__ret = generator;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='priorityqueue';
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='priorityqueue';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['select'] = $method;
		$pyjs['track']['lineno']=45;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('PriorityQueue', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=65;
	$m['HandlerClassSelector'] = (function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['PriorityQueue']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})();
	$pyjs['track']['lineno']=66;
	$m['editBoneSelector'] = (function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['PriorityQueue']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})();
	$pyjs['track']['lineno']=67;
	$m['actionDelegateSelector'] = (function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['PriorityQueue']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})();
	$pyjs['track']['lineno']=68;
	$m['displayDelegateSelector'] = (function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['PriorityQueue']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})();
	$pyjs['track']['lineno']=69;
	$m['initialHashHandler'] = (function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['PriorityQueue']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})();
	$pyjs['track']['lineno']=70;
	$m['extendedSearchWidgetSelector'] = (function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['PriorityQueue']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})();
	$pyjs['track']['lineno']=71;
	$m['extractorDelegateSelector'] = (function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['PriorityQueue']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})();
	$pyjs['track']['lineno']=72;
	$m['toplevelActionSelector'] = (function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['PriorityQueue']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})();
	$pyjs['track']['lineno']=73;
	$m['loginHandlerSelector'] = (function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['PriorityQueue']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})();
	$pyjs['track']['lineno']=76;
	$m['viewDelegateSelector'] = (function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['PriorityQueue']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})();
	$pyjs['track']['lineno']=77;
	$m['protocolWrapperClassSelector'] = (function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['PriorityQueue']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})();
	$pyjs['track']['lineno']=78;
	$m['protocolWrapperInstanceSelector'] = (function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['PriorityQueue']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})();
	return this;
}; /* end priorityqueue */


/* end module: priorityqueue */


