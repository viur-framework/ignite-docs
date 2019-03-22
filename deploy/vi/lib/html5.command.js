/* start module: html5.command */
$pyjs['loaded_modules']['html5.command'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['html5.command']['__was_initialized__']) return $pyjs['loaded_modules']['html5.command'];
	if(typeof $pyjs['loaded_modules']['html5'] == 'undefined' || !$pyjs['loaded_modules']['html5']['__was_initialized__']) $p['___import___']('html5', null);
	var $m = $pyjs['loaded_modules']['html5.command'];
	$m['__repr__'] = function() { return '<module: html5.command>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'html5.command';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['html5']['command'] = $pyjs['loaded_modules']['html5.command'];
	$m.__track_lines__[1] = 'html5.command.py, line 1:\n    from html5.widget import Widget';
	$m.__track_lines__[2] = 'html5.command.py, line 2:\n    from html5.html5Attr._label import _Label as Label';
	$m.__track_lines__[3] = 'html5.command.py, line 3:\n    from html5.html5Attr.media import Type';
	$m.__track_lines__[4] = 'html5.command.py, line 4:\n    from html5.html5Attr.form import Disabled,Checked';
	$m.__track_lines__[5] = 'html5.command.py, line 5:\n    class Command( Widget, Label,Type,Disabled,Checked):';
	$m.__track_lines__[6] = 'html5.command.py, line 6:\n    _baseClass = "command"';
	$m.__track_lines__[8] = 'html5.command.py, line 8:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[9] = 'html5.command.py, line 9:\n    super(Command,self).__init__( *args, **kwargs )';
	$m.__track_lines__[11] = 'html5.command.py, line 11:\n    def _getIcon(self):';
	$m.__track_lines__[12] = 'html5.command.py, line 12:\n    return self.element.icon';
	$m.__track_lines__[13] = 'html5.command.py, line 13:\n    def _setIcon(self,val):';
	$m.__track_lines__[14] = 'html5.command.py, line 14:\n    self.element.icon=val';
	$m.__track_lines__[16] = 'html5.command.py, line 16:\n    def _getRadiogroup(self):';
	$m.__track_lines__[17] = 'html5.command.py, line 17:\n    return self.element.radiogroup';
	$m.__track_lines__[18] = 'html5.command.py, line 18:\n    def _setRadiogroup(self,val):';
	$m.__track_lines__[19] = 'html5.command.py, line 19:\n    self.element.radiogroup=val';


	$pyjs['track']['module']='html5.command';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=1;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Widget'] = $p['___import___']('html5.widget.Widget', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=2;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Label'] = $p['___import___']('html5.html5Attr._label._Label', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=3;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Type'] = $p['___import___']('html5.html5Attr.media.Type', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=4;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Disabled'] = $p['___import___']('html5.html5Attr.form.Disabled', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Checked'] = $p['___import___']('html5.html5Attr.form.Checked', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=5;
	$m['Command'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.command';
		$pyjs['track']['lineno']=6;
		$cls_definition['_baseClass'] = 'command';
		$pyjs['track']['lineno']=8;
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

			$pyjs['track']={'module':'html5.command', 'lineno':8};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.command';
			$pyjs['track']['lineno']=8;
			$pyjs['track']['lineno']=9;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['Command'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=11;
		$method = $pyjs__bind_method2('_getIcon', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.command', 'lineno':11};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.command';
			$pyjs['track']['lineno']=11;
			$pyjs['track']['lineno']=12;
			$pyjs['track']['lineno']=12;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'icon');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getIcon'] = $method;
		$pyjs['track']['lineno']=13;
		$method = $pyjs__bind_method2('_setIcon', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.command', 'lineno':13};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.command';
			$pyjs['track']['lineno']=13;
			$pyjs['track']['lineno']=14;
			$p['getattr'](self, 'element')['icon'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setIcon'] = $method;
		$pyjs['track']['lineno']=16;
		$method = $pyjs__bind_method2('_getRadiogroup', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.command', 'lineno':16};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.command';
			$pyjs['track']['lineno']=16;
			$pyjs['track']['lineno']=17;
			$pyjs['track']['lineno']=17;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'radiogroup');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getRadiogroup'] = $method;
		$pyjs['track']['lineno']=18;
		$method = $pyjs__bind_method2('_setRadiogroup', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.command', 'lineno':18};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.command';
			$pyjs['track']['lineno']=18;
			$pyjs['track']['lineno']=19;
			$p['getattr'](self, 'element')['radiogroup'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setRadiogroup'] = $method;
		$pyjs['track']['lineno']=5;
		var $bases = new Array($m['Widget'],$m['Label'],$m['Type'],$m['Disabled'],$m['Checked']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Command', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end html5.command */


/* end module: html5.command */


/*
PYJS_DEPS: ['html5.widget.Widget', 'html5', 'html5.widget', 'html5.html5Attr._label._Label', 'html5.html5Attr', 'html5.html5Attr._label', 'html5.html5Attr.media.Type', 'html5.html5Attr.media', 'html5.html5Attr.form.Disabled', 'html5.html5Attr.form', 'html5.html5Attr.form.Checked']
*/
