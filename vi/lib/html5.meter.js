/* start module: html5.meter */
$pyjs['loaded_modules']['html5.meter'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['html5.meter']['__was_initialized__']) return $pyjs['loaded_modules']['html5.meter'];
	if(typeof $pyjs['loaded_modules']['html5'] == 'undefined' || !$pyjs['loaded_modules']['html5']['__was_initialized__']) $p['___import___']('html5', null);
	var $m = $pyjs['loaded_modules']['html5.meter'];
	$m['__repr__'] = function() { return '<module: html5.meter>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'html5.meter';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['html5']['meter'] = $pyjs['loaded_modules']['html5.meter'];
	$m.__track_lines__[1] = 'html5.meter.py, line 1:\n    from html5.widget import Widget';
	$m.__track_lines__[2] = 'html5.meter.py, line 2:\n    from html5.html5Attr.form import _Form as Form,Value';
	$m.__track_lines__[3] = 'html5.meter.py, line 3:\n    class Meter( Widget,Form ,Value):';
	$m.__track_lines__[4] = 'html5.meter.py, line 4:\n    _baseClass = "meter"';
	$m.__track_lines__[6] = 'html5.meter.py, line 6:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[7] = 'html5.meter.py, line 7:\n    super(Meter,self).__init__( *args, **kwargs )';
	$m.__track_lines__[9] = 'html5.meter.py, line 9:\n    def _getHigh(self):';
	$m.__track_lines__[10] = 'html5.meter.py, line 10:\n    return self.element.high';
	$m.__track_lines__[11] = 'html5.meter.py, line 11:\n    def _setHigh(self,val):';
	$m.__track_lines__[12] = 'html5.meter.py, line 12:\n    self.element.high=val';
	$m.__track_lines__[14] = 'html5.meter.py, line 14:\n    def _getLow(self):';
	$m.__track_lines__[15] = 'html5.meter.py, line 15:\n    return self.element.low';
	$m.__track_lines__[16] = 'html5.meter.py, line 16:\n    def _setLow(self,val):';
	$m.__track_lines__[17] = 'html5.meter.py, line 17:\n    self.element.low=val';
	$m.__track_lines__[19] = 'html5.meter.py, line 19:\n    def _getMax(self):';
	$m.__track_lines__[20] = 'html5.meter.py, line 20:\n    return self.element.max';
	$m.__track_lines__[21] = 'html5.meter.py, line 21:\n    def _setMax(self,val):';
	$m.__track_lines__[22] = 'html5.meter.py, line 22:\n    self.element.max=val';
	$m.__track_lines__[24] = 'html5.meter.py, line 24:\n    def _getMin(self):';
	$m.__track_lines__[25] = 'html5.meter.py, line 25:\n    return self.element.min';
	$m.__track_lines__[26] = 'html5.meter.py, line 26:\n    def _setMin(self,val):';
	$m.__track_lines__[27] = 'html5.meter.py, line 27:\n    self.element.min=val';
	$m.__track_lines__[29] = 'html5.meter.py, line 29:\n    def _getOptimum(self):';
	$m.__track_lines__[30] = 'html5.meter.py, line 30:\n    return self.element.optimum';
	$m.__track_lines__[31] = 'html5.meter.py, line 31:\n    def _setOptimum(self,val):';
	$m.__track_lines__[32] = 'html5.meter.py, line 32:\n    self.element.optimum=val';


	$pyjs['track']['module']='html5.meter';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=1;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Widget'] = $p['___import___']('html5.widget.Widget', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=2;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Form'] = $p['___import___']('html5.html5Attr.form._Form', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Value'] = $p['___import___']('html5.html5Attr.form.Value', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=3;
	$m['Meter'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.meter';
		$pyjs['track']['lineno']=4;
		$cls_definition['_baseClass'] = 'meter';
		$pyjs['track']['lineno']=6;
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

			$pyjs['track']={'module':'html5.meter', 'lineno':6};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.meter';
			$pyjs['track']['lineno']=6;
			$pyjs['track']['lineno']=7;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['Meter'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=9;
		$method = $pyjs__bind_method2('_getHigh', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.meter', 'lineno':9};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.meter';
			$pyjs['track']['lineno']=9;
			$pyjs['track']['lineno']=10;
			$pyjs['track']['lineno']=10;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'high');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getHigh'] = $method;
		$pyjs['track']['lineno']=11;
		$method = $pyjs__bind_method2('_setHigh', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.meter', 'lineno':11};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.meter';
			$pyjs['track']['lineno']=11;
			$pyjs['track']['lineno']=12;
			$p['getattr'](self, 'element')['high'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setHigh'] = $method;
		$pyjs['track']['lineno']=14;
		$method = $pyjs__bind_method2('_getLow', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.meter', 'lineno':14};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.meter';
			$pyjs['track']['lineno']=14;
			$pyjs['track']['lineno']=15;
			$pyjs['track']['lineno']=15;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'low');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getLow'] = $method;
		$pyjs['track']['lineno']=16;
		$method = $pyjs__bind_method2('_setLow', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.meter', 'lineno':16};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.meter';
			$pyjs['track']['lineno']=16;
			$pyjs['track']['lineno']=17;
			$p['getattr'](self, 'element')['low'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setLow'] = $method;
		$pyjs['track']['lineno']=19;
		$method = $pyjs__bind_method2('_getMax', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.meter', 'lineno':19};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.meter';
			$pyjs['track']['lineno']=19;
			$pyjs['track']['lineno']=20;
			$pyjs['track']['lineno']=20;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'max');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getMax'] = $method;
		$pyjs['track']['lineno']=21;
		$method = $pyjs__bind_method2('_setMax', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.meter', 'lineno':21};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.meter';
			$pyjs['track']['lineno']=21;
			$pyjs['track']['lineno']=22;
			$p['getattr'](self, 'element')['max'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setMax'] = $method;
		$pyjs['track']['lineno']=24;
		$method = $pyjs__bind_method2('_getMin', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.meter', 'lineno':24};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.meter';
			$pyjs['track']['lineno']=24;
			$pyjs['track']['lineno']=25;
			$pyjs['track']['lineno']=25;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'min');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getMin'] = $method;
		$pyjs['track']['lineno']=26;
		$method = $pyjs__bind_method2('_setMin', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.meter', 'lineno':26};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.meter';
			$pyjs['track']['lineno']=26;
			$pyjs['track']['lineno']=27;
			$p['getattr'](self, 'element')['min'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setMin'] = $method;
		$pyjs['track']['lineno']=29;
		$method = $pyjs__bind_method2('_getOptimum', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.meter', 'lineno':29};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.meter';
			$pyjs['track']['lineno']=29;
			$pyjs['track']['lineno']=30;
			$pyjs['track']['lineno']=30;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'optimum');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getOptimum'] = $method;
		$pyjs['track']['lineno']=31;
		$method = $pyjs__bind_method2('_setOptimum', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.meter', 'lineno':31};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.meter';
			$pyjs['track']['lineno']=31;
			$pyjs['track']['lineno']=32;
			$p['getattr'](self, 'element')['optimum'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setOptimum'] = $method;
		$pyjs['track']['lineno']=3;
		var $bases = new Array($m['Widget'],$m['Form'],$m['Value']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Meter', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end html5.meter */


/* end module: html5.meter */


/*
PYJS_DEPS: ['html5.widget.Widget', 'html5', 'html5.widget', 'html5.html5Attr.form._Form', 'html5.html5Attr', 'html5.html5Attr.form', 'html5.html5Attr.form.Value']
*/
