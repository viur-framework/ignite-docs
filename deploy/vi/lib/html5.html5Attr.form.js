/* start module: html5.html5Attr.form */
$pyjs['loaded_modules']['html5.html5Attr.form'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['html5.html5Attr.form']['__was_initialized__']) return $pyjs['loaded_modules']['html5.html5Attr.form'];
	if(typeof $pyjs['loaded_modules']['html5.html5Attr'] == 'undefined' || !$pyjs['loaded_modules']['html5.html5Attr']['__was_initialized__']) $p['___import___']('html5.html5Attr', null);
	var $m = $pyjs['loaded_modules']['html5.html5Attr.form'];
	$m['__repr__'] = function() { return '<module: html5.html5Attr.form>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'html5.html5Attr.form';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['html5.html5Attr']['form'] = $pyjs['loaded_modules']['html5.html5Attr.form'];
	$m.__track_lines__[1] = 'html5.html5Attr.form.py, line 1:\n    from html5.widget import Widget';
	$m.__track_lines__[2] = 'html5.html5Attr.form.py, line 2:\n    class _Form(object):';
	$m.__track_lines__[3] = 'html5.html5Attr.form.py, line 3:\n    def _getForm(self):';
	$m.__track_lines__[4] = 'html5.html5Attr.form.py, line 4:\n    return self.element.form';
	$m.__track_lines__[5] = 'html5.html5Attr.form.py, line 5:\n    def _setForm(self,val):';
	$m.__track_lines__[6] = 'html5.html5Attr.form.py, line 6:\n    self.element.form=val';
	$m.__track_lines__[8] = 'html5.html5Attr.form.py, line 8:\n    class Alt(object):';
	$m.__track_lines__[9] = 'html5.html5Attr.form.py, line 9:\n    def _getAlt(self):';
	$m.__track_lines__[10] = 'html5.html5Attr.form.py, line 10:\n    return self.element.alt';
	$m.__track_lines__[11] = 'html5.html5Attr.form.py, line 11:\n    def _setAlt(self,val):';
	$m.__track_lines__[12] = 'html5.html5Attr.form.py, line 12:\n    self.element.alt=val';
	$m.__track_lines__[14] = 'html5.html5Attr.form.py, line 14:\n    class Autofocus(object):';
	$m.__track_lines__[15] = 'html5.html5Attr.form.py, line 15:\n    def _getAutofocus(self):';
	$m.__track_lines__[16] = 'html5.html5Attr.form.py, line 16:\n    return( True if self.element.hasAttribute("autofocus") else False )';
	$m.__track_lines__[17] = 'html5.html5Attr.form.py, line 17:\n    def _setAutofocus(self,val):';
	$m.__track_lines__[18] = 'html5.html5Attr.form.py, line 18:\n    if val==True:';
	$m.__track_lines__[19] = 'html5.html5Attr.form.py, line 19:\n    self.element.setAttribute("autofocus","")';
	$m.__track_lines__[21] = 'html5.html5Attr.form.py, line 21:\n    self.element.removeAttribute("autofocus")';
	$m.__track_lines__[23] = 'html5.html5Attr.form.py, line 23:\n    class Disabled(object):';
	$m.__track_lines__[24] = 'html5.html5Attr.form.py, line 24:\n    def _setDisabled(self,val):';
	$m.__track_lines__[25] = 'html5.html5Attr.form.py, line 25:\n    Widget._setDisabled( self, val )';
	$m.__track_lines__[26] = 'html5.html5Attr.form.py, line 26:\n    if self._getDisabled():';
	$m.__track_lines__[27] = 'html5.html5Attr.form.py, line 27:\n    self.element.disabled = True';
	$m.__track_lines__[29] = 'html5.html5Attr.form.py, line 29:\n    self.element.disabled = False';
	$m.__track_lines__[31] = 'html5.html5Attr.form.py, line 31:\n    class Checked(object):';
	$m.__track_lines__[32] = 'html5.html5Attr.form.py, line 32:\n    def _getChecked(self):';
	$m.__track_lines__[33] = 'html5.html5Attr.form.py, line 33:\n    return self.element.checked';
	$m.__track_lines__[35] = 'html5.html5Attr.form.py, line 35:\n    def _setChecked(self,val):';
	$m.__track_lines__[36] = 'html5.html5Attr.form.py, line 36:\n    self.element.checked = val';
	$m.__track_lines__[38] = 'html5.html5Attr.form.py, line 38:\n    class Indeterminate(object):';
	$m.__track_lines__[39] = 'html5.html5Attr.form.py, line 39:\n    def _getIndeterminate(self):';
	$m.__track_lines__[40] = 'html5.html5Attr.form.py, line 40:\n    return (self.element.indeterminate)';
	$m.__track_lines__[41] = 'html5.html5Attr.form.py, line 41:\n    def _setIndeterminate(self,val):';
	$m.__track_lines__[42] = 'html5.html5Attr.form.py, line 42:\n    self.element.indeterminate=val';
	$m.__track_lines__[44] = 'html5.html5Attr.form.py, line 44:\n    class Name(object):';
	$m.__track_lines__[45] = 'html5.html5Attr.form.py, line 45:\n    def _getName(self):';
	$m.__track_lines__[46] = 'html5.html5Attr.form.py, line 46:\n    return self.element.getAttribute( "name" )';
	$m.__track_lines__[47] = 'html5.html5Attr.form.py, line 47:\n    def _setName(self,val):';
	$m.__track_lines__[48] = 'html5.html5Attr.form.py, line 48:\n    self.element.setAttribute( "name", val )';
	$m.__track_lines__[50] = 'html5.html5Attr.form.py, line 50:\n    class Value(object):';
	$m.__track_lines__[51] = 'html5.html5Attr.form.py, line 51:\n    def _getValue(self):';
	$m.__track_lines__[52] = 'html5.html5Attr.form.py, line 52:\n    return self.element.value';
	$m.__track_lines__[53] = 'html5.html5Attr.form.py, line 53:\n    def _setValue(self,val):';
	$m.__track_lines__[54] = 'html5.html5Attr.form.py, line 54:\n    self.element.value=val';
	$m.__track_lines__[56] = 'html5.html5Attr.form.py, line 56:\n    class Autocomplete(object):';
	$m.__track_lines__[57] = 'html5.html5Attr.form.py, line 57:\n    def _getAutocomplete(self):';
	$m.__track_lines__[58] = 'html5.html5Attr.form.py, line 58:\n    return True if self.element.autocomplete=="on" else False';
	$m.__track_lines__[59] = 'html5.html5Attr.form.py, line 59:\n    def _setAutocomplete(self,val):';
	$m.__track_lines__[60] = 'html5.html5Attr.form.py, line 60:\n    self.element.autocomplete="on" if val==True else "off"';
	$m.__track_lines__[62] = 'html5.html5Attr.form.py, line 62:\n    class Required(object):';
	$m.__track_lines__[63] = 'html5.html5Attr.form.py, line 63:\n    def _getRequired(self):';
	$m.__track_lines__[64] = 'html5.html5Attr.form.py, line 64:\n    return( True if self.element.hasAttribute("required") else False )';
	$m.__track_lines__[65] = 'html5.html5Attr.form.py, line 65:\n    def _setRequired(self,val):';
	$m.__track_lines__[66] = 'html5.html5Attr.form.py, line 66:\n    if val==True:';
	$m.__track_lines__[67] = 'html5.html5Attr.form.py, line 67:\n    self.element.setAttribute("required","")';
	$m.__track_lines__[69] = 'html5.html5Attr.form.py, line 69:\n    self.element.removeAttribute("required")';
	$m.__track_lines__[71] = 'html5.html5Attr.form.py, line 71:\n    class Multiple(object):';
	$m.__track_lines__[72] = 'html5.html5Attr.form.py, line 72:\n    def _getMultiple(self):';
	$m.__track_lines__[73] = 'html5.html5Attr.form.py, line 73:\n    return( True if self.element.hasAttribute("multiple") else False )';
	$m.__track_lines__[74] = 'html5.html5Attr.form.py, line 74:\n    def _setMultiple(self,val):';
	$m.__track_lines__[75] = 'html5.html5Attr.form.py, line 75:\n    if val==True:';
	$m.__track_lines__[76] = 'html5.html5Attr.form.py, line 76:\n    self.element.setAttribute("multiple","")';
	$m.__track_lines__[78] = 'html5.html5Attr.form.py, line 78:\n    self.element.removeAttribute("multiple")';
	$m.__track_lines__[80] = 'html5.html5Attr.form.py, line 80:\n    class Size(object):';
	$m.__track_lines__[81] = 'html5.html5Attr.form.py, line 81:\n    def _getSize(self):';
	$m.__track_lines__[82] = 'html5.html5Attr.form.py, line 82:\n    return self.element.size';
	$m.__track_lines__[83] = 'html5.html5Attr.form.py, line 83:\n    def _setSize(self,val):';
	$m.__track_lines__[84] = 'html5.html5Attr.form.py, line 84:\n    self.element.size=val';
	$m.__track_lines__[86] = 'html5.html5Attr.form.py, line 86:\n    class __For(object):';
	$m.__track_lines__[87] = 'html5.html5Attr.form.py, line 87:\n    def _getFor(self):';
	$m.__track_lines__[88] = 'html5.html5Attr.form.py, line 88:\n    return self.element.getAttribute("for")';
	$m.__track_lines__[89] = 'html5.html5Attr.form.py, line 89:\n    def _setFor(self,val):';
	$m.__track_lines__[90] = 'html5.html5Attr.form.py, line 90:\n    self.element.setAttribute("for",val)';
	$m.__track_lines__[92] = 'html5.html5Attr.form.py, line 92:\n    class Inputs(Required):';
	$m.__track_lines__[93] = 'html5.html5Attr.form.py, line 93:\n    def _getMaxlength(self):';
	$m.__track_lines__[94] = 'html5.html5Attr.form.py, line 94:\n    return self.element.maxlength';
	$m.__track_lines__[95] = 'html5.html5Attr.form.py, line 95:\n    def _setMaxlength(self,val):';
	$m.__track_lines__[96] = 'html5.html5Attr.form.py, line 96:\n    self.element.maxlength=val';
	$m.__track_lines__[98] = 'html5.html5Attr.form.py, line 98:\n    def _getPlaceholder(self):';
	$m.__track_lines__[99] = 'html5.html5Attr.form.py, line 99:\n    return self.element.placeholder';
	$m.__track_lines__[100] = 'html5.html5Attr.form.py, line 100:\n    def _setPlaceholder(self,val):';
	$m.__track_lines__[101] = 'html5.html5Attr.form.py, line 101:\n    self.element.placeholder=val';
	$m.__track_lines__[103] = 'html5.html5Attr.form.py, line 103:\n    def _getReadonly(self):';
	$m.__track_lines__[104] = 'html5.html5Attr.form.py, line 104:\n    return( True if self.element.hasAttribute("readonly") else False )';
	$m.__track_lines__[105] = 'html5.html5Attr.form.py, line 105:\n    def _setReadonly(self,val):';
	$m.__track_lines__[106] = 'html5.html5Attr.form.py, line 106:\n    if val==True:';
	$m.__track_lines__[107] = 'html5.html5Attr.form.py, line 107:\n    self.element.setAttribute("readonly","")';
	$m.__track_lines__[109] = 'html5.html5Attr.form.py, line 109:\n    self.element.removeAttribute("readonly")';
	$m.__track_lines__[111] = 'html5.html5Attr.form.py, line 111:\n    class Formhead(object):';
	$m.__track_lines__[112] = 'html5.html5Attr.form.py, line 112:\n    def _getFormaction(self):';
	$m.__track_lines__[113] = 'html5.html5Attr.form.py, line 113:\n    return self.element.formaction';
	$m.__track_lines__[114] = 'html5.html5Attr.form.py, line 114:\n    def _setFormaction(self,val):';
	$m.__track_lines__[115] = 'html5.html5Attr.form.py, line 115:\n    self.element.formaction=val';
	$m.__track_lines__[117] = 'html5.html5Attr.form.py, line 117:\n    def _getFormenctype(self):';
	$m.__track_lines__[118] = 'html5.html5Attr.form.py, line 118:\n    return self.element.formenctype';
	$m.__track_lines__[119] = 'html5.html5Attr.form.py, line 119:\n    def _setFormenctype(self,val):';
	$m.__track_lines__[120] = 'html5.html5Attr.form.py, line 120:\n    self.element.formenctype=val';
	$m.__track_lines__[122] = 'html5.html5Attr.form.py, line 122:\n    def _getFormmethod(self):';
	$m.__track_lines__[123] = 'html5.html5Attr.form.py, line 123:\n    return self.element.formmethod';
	$m.__track_lines__[124] = 'html5.html5Attr.form.py, line 124:\n    def _setFormmethod(self,val):';
	$m.__track_lines__[125] = 'html5.html5Attr.form.py, line 125:\n    self.element.formmethod=val';
	$m.__track_lines__[127] = 'html5.html5Attr.form.py, line 127:\n    def _getFormtarget(self):';
	$m.__track_lines__[128] = 'html5.html5Attr.form.py, line 128:\n    return self.element.formtarget';
	$m.__track_lines__[129] = 'html5.html5Attr.form.py, line 129:\n    def _setFormtarget(self,val):';
	$m.__track_lines__[130] = 'html5.html5Attr.form.py, line 130:\n    self.element.formtarget=val';
	$m.__track_lines__[132] = 'html5.html5Attr.form.py, line 132:\n    def _getFormnovalidate(self):';
	$m.__track_lines__[133] = 'html5.html5Attr.form.py, line 133:\n    return( True if self.element.hasAttribute("formnovalidate") else False )';
	$m.__track_lines__[134] = 'html5.html5Attr.form.py, line 134:\n    def _setFormnovalidate(self,val):';
	$m.__track_lines__[135] = 'html5.html5Attr.form.py, line 135:\n    if val==True:';
	$m.__track_lines__[136] = 'html5.html5Attr.form.py, line 136:\n    self.element.setAttribute("formnovalidate","")';
	$m.__track_lines__[138] = 'html5.html5Attr.form.py, line 138:\n    self.element.removeAttribute("formnovalidate")';


	$pyjs['track']['module']='html5.html5Attr.form';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=1;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Widget'] = $p['___import___']('html5.widget.Widget', 'html5.html5Attr', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=2;
	$m['_Form'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.html5Attr.form';
		$pyjs['track']['lineno']=3;
		$method = $pyjs__bind_method2('_getForm', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.html5Attr.form', 'lineno':3};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.form';
			$pyjs['track']['lineno']=3;
			$pyjs['track']['lineno']=4;
			$pyjs['track']['lineno']=4;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'form');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getForm'] = $method;
		$pyjs['track']['lineno']=5;
		$method = $pyjs__bind_method2('_setForm', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.html5Attr.form', 'lineno':5};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.form';
			$pyjs['track']['lineno']=5;
			$pyjs['track']['lineno']=6;
			$p['getattr'](self, 'element')['form'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setForm'] = $method;
		$pyjs['track']['lineno']=2;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('_Form', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=8;
	$m['Alt'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.html5Attr.form';
		$pyjs['track']['lineno']=9;
		$method = $pyjs__bind_method2('_getAlt', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.html5Attr.form', 'lineno':9};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.form';
			$pyjs['track']['lineno']=9;
			$pyjs['track']['lineno']=10;
			$pyjs['track']['lineno']=10;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'alt');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getAlt'] = $method;
		$pyjs['track']['lineno']=11;
		$method = $pyjs__bind_method2('_setAlt', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.html5Attr.form', 'lineno':11};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.form';
			$pyjs['track']['lineno']=11;
			$pyjs['track']['lineno']=12;
			$p['getattr'](self, 'element')['alt'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setAlt'] = $method;
		$pyjs['track']['lineno']=8;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Alt', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=14;
	$m['Autofocus'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.html5Attr.form';
		$pyjs['track']['lineno']=15;
		$method = $pyjs__bind_method2('_getAutofocus', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.html5Attr.form', 'lineno':15};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.form';
			$pyjs['track']['lineno']=15;
			$pyjs['track']['lineno']=16;
			$pyjs['track']['lineno']=16;
			var $pyjs__ret = ($p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['hasAttribute']('autofocus');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})())? (true) : (false));
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getAutofocus'] = $method;
		$pyjs['track']['lineno']=17;
		$method = $pyjs__bind_method2('_setAutofocus', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.html5Attr.form', 'lineno':17};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.form';
			$pyjs['track']['lineno']=17;
			$pyjs['track']['lineno']=18;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](val, true));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})()) {
				$pyjs['track']['lineno']=19;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['element']['setAttribute']('autofocus', '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=21;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['element']['removeAttribute']('autofocus');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setAutofocus'] = $method;
		$pyjs['track']['lineno']=14;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Autofocus', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=23;
	$m['Disabled'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.html5Attr.form';
		$pyjs['track']['lineno']=24;
		$method = $pyjs__bind_method2('_setDisabled', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.html5Attr.form', 'lineno':24};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.form';
			$pyjs['track']['lineno']=24;
			$pyjs['track']['lineno']=25;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['Widget']['_setDisabled'](self, val);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
			$pyjs['track']['lineno']=26;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return self['_getDisabled']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})()) {
				$pyjs['track']['lineno']=27;
				$p['getattr'](self, 'element')['disabled'] = true;
			}
			else {
				$pyjs['track']['lineno']=29;
				$p['getattr'](self, 'element')['disabled'] = false;
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setDisabled'] = $method;
		$pyjs['track']['lineno']=23;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Disabled', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=31;
	$m['Checked'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.html5Attr.form';
		$pyjs['track']['lineno']=32;
		$method = $pyjs__bind_method2('_getChecked', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.html5Attr.form', 'lineno':32};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.form';
			$pyjs['track']['lineno']=32;
			$pyjs['track']['lineno']=33;
			$pyjs['track']['lineno']=33;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'checked');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getChecked'] = $method;
		$pyjs['track']['lineno']=35;
		$method = $pyjs__bind_method2('_setChecked', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.html5Attr.form', 'lineno':35};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.form';
			$pyjs['track']['lineno']=35;
			$pyjs['track']['lineno']=36;
			$p['getattr'](self, 'element')['checked'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setChecked'] = $method;
		$pyjs['track']['lineno']=31;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Checked', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=38;
	$m['Indeterminate'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.html5Attr.form';
		$pyjs['track']['lineno']=39;
		$method = $pyjs__bind_method2('_getIndeterminate', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.html5Attr.form', 'lineno':39};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.form';
			$pyjs['track']['lineno']=39;
			$pyjs['track']['lineno']=40;
			$pyjs['track']['lineno']=40;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'indeterminate');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getIndeterminate'] = $method;
		$pyjs['track']['lineno']=41;
		$method = $pyjs__bind_method2('_setIndeterminate', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.html5Attr.form', 'lineno':41};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.form';
			$pyjs['track']['lineno']=41;
			$pyjs['track']['lineno']=42;
			$p['getattr'](self, 'element')['indeterminate'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setIndeterminate'] = $method;
		$pyjs['track']['lineno']=38;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Indeterminate', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=44;
	$m['Name'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.html5Attr.form';
		$pyjs['track']['lineno']=45;
		$method = $pyjs__bind_method2('_getName', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.html5Attr.form', 'lineno':45};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.form';
			$pyjs['track']['lineno']=45;
			$pyjs['track']['lineno']=46;
			$pyjs['track']['lineno']=46;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['getAttribute']('name');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getName'] = $method;
		$pyjs['track']['lineno']=47;
		$method = $pyjs__bind_method2('_setName', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.html5Attr.form', 'lineno':47};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.form';
			$pyjs['track']['lineno']=47;
			$pyjs['track']['lineno']=48;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['setAttribute']('name', val);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setName'] = $method;
		$pyjs['track']['lineno']=44;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Name', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=50;
	$m['Value'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.html5Attr.form';
		$pyjs['track']['lineno']=51;
		$method = $pyjs__bind_method2('_getValue', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.html5Attr.form', 'lineno':51};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.form';
			$pyjs['track']['lineno']=51;
			$pyjs['track']['lineno']=52;
			$pyjs['track']['lineno']=52;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'value');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getValue'] = $method;
		$pyjs['track']['lineno']=53;
		$method = $pyjs__bind_method2('_setValue', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.html5Attr.form', 'lineno':53};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.form';
			$pyjs['track']['lineno']=53;
			$pyjs['track']['lineno']=54;
			$p['getattr'](self, 'element')['value'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setValue'] = $method;
		$pyjs['track']['lineno']=50;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Value', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=56;
	$m['Autocomplete'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.html5Attr.form';
		$pyjs['track']['lineno']=57;
		$method = $pyjs__bind_method2('_getAutocomplete', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.html5Attr.form', 'lineno':57};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.form';
			$pyjs['track']['lineno']=57;
			$pyjs['track']['lineno']=58;
			$pyjs['track']['lineno']=58;
			var $pyjs__ret = ($p['bool']($p['op_eq']($p['getattr']($p['getattr'](self, 'element'), 'autocomplete'), 'on'))? (true) : (false));
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getAutocomplete'] = $method;
		$pyjs['track']['lineno']=59;
		$method = $pyjs__bind_method2('_setAutocomplete', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.html5Attr.form', 'lineno':59};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.form';
			$pyjs['track']['lineno']=59;
			$pyjs['track']['lineno']=60;
			$p['getattr'](self, 'element')['autocomplete'] = ($p['bool']($p['op_eq'](val, true))? ('on') : ('off'));
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setAutocomplete'] = $method;
		$pyjs['track']['lineno']=56;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Autocomplete', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=62;
	$m['Required'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.html5Attr.form';
		$pyjs['track']['lineno']=63;
		$method = $pyjs__bind_method2('_getRequired', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.html5Attr.form', 'lineno':63};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.form';
			$pyjs['track']['lineno']=63;
			$pyjs['track']['lineno']=64;
			$pyjs['track']['lineno']=64;
			var $pyjs__ret = ($p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['hasAttribute']('required');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})())? (true) : (false));
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getRequired'] = $method;
		$pyjs['track']['lineno']=65;
		$method = $pyjs__bind_method2('_setRequired', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.html5Attr.form', 'lineno':65};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.form';
			$pyjs['track']['lineno']=65;
			$pyjs['track']['lineno']=66;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](val, true));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})()) {
				$pyjs['track']['lineno']=67;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['element']['setAttribute']('required', '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=69;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['element']['removeAttribute']('required');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setRequired'] = $method;
		$pyjs['track']['lineno']=62;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Required', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=71;
	$m['Multiple'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.html5Attr.form';
		$pyjs['track']['lineno']=72;
		$method = $pyjs__bind_method2('_getMultiple', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.html5Attr.form', 'lineno':72};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.form';
			$pyjs['track']['lineno']=72;
			$pyjs['track']['lineno']=73;
			$pyjs['track']['lineno']=73;
			var $pyjs__ret = ($p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['hasAttribute']('multiple');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})())? (true) : (false));
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getMultiple'] = $method;
		$pyjs['track']['lineno']=74;
		$method = $pyjs__bind_method2('_setMultiple', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.html5Attr.form', 'lineno':74};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.form';
			$pyjs['track']['lineno']=74;
			$pyjs['track']['lineno']=75;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](val, true));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})()) {
				$pyjs['track']['lineno']=76;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['element']['setAttribute']('multiple', '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=78;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['element']['removeAttribute']('multiple');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setMultiple'] = $method;
		$pyjs['track']['lineno']=71;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Multiple', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=80;
	$m['Size'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.html5Attr.form';
		$pyjs['track']['lineno']=81;
		$method = $pyjs__bind_method2('_getSize', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.html5Attr.form', 'lineno':81};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.form';
			$pyjs['track']['lineno']=81;
			$pyjs['track']['lineno']=82;
			$pyjs['track']['lineno']=82;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'size');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getSize'] = $method;
		$pyjs['track']['lineno']=83;
		$method = $pyjs__bind_method2('_setSize', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.html5Attr.form', 'lineno':83};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.form';
			$pyjs['track']['lineno']=83;
			$pyjs['track']['lineno']=84;
			$p['getattr'](self, 'element')['size'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setSize'] = $method;
		$pyjs['track']['lineno']=80;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Size', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=86;
	$m['__For'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.html5Attr.form';
		$pyjs['track']['lineno']=87;
		$method = $pyjs__bind_method2('_getFor', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.html5Attr.form', 'lineno':87};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.form';
			$pyjs['track']['lineno']=87;
			$pyjs['track']['lineno']=88;
			$pyjs['track']['lineno']=88;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['getAttribute']('for');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getFor'] = $method;
		$pyjs['track']['lineno']=89;
		$method = $pyjs__bind_method2('_setFor', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.html5Attr.form', 'lineno':89};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.form';
			$pyjs['track']['lineno']=89;
			$pyjs['track']['lineno']=90;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['setAttribute']('for', val);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setFor'] = $method;
		$pyjs['track']['lineno']=86;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('__For', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=92;
	$m['Inputs'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.html5Attr.form';
		$pyjs['track']['lineno']=93;
		$method = $pyjs__bind_method2('_getMaxlength', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.html5Attr.form', 'lineno':93};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.form';
			$pyjs['track']['lineno']=93;
			$pyjs['track']['lineno']=94;
			$pyjs['track']['lineno']=94;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'maxlength');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getMaxlength'] = $method;
		$pyjs['track']['lineno']=95;
		$method = $pyjs__bind_method2('_setMaxlength', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.html5Attr.form', 'lineno':95};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.form';
			$pyjs['track']['lineno']=95;
			$pyjs['track']['lineno']=96;
			$p['getattr'](self, 'element')['maxlength'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setMaxlength'] = $method;
		$pyjs['track']['lineno']=98;
		$method = $pyjs__bind_method2('_getPlaceholder', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.html5Attr.form', 'lineno':98};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.form';
			$pyjs['track']['lineno']=98;
			$pyjs['track']['lineno']=99;
			$pyjs['track']['lineno']=99;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'placeholder');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getPlaceholder'] = $method;
		$pyjs['track']['lineno']=100;
		$method = $pyjs__bind_method2('_setPlaceholder', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.html5Attr.form', 'lineno':100};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.form';
			$pyjs['track']['lineno']=100;
			$pyjs['track']['lineno']=101;
			$p['getattr'](self, 'element')['placeholder'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setPlaceholder'] = $method;
		$pyjs['track']['lineno']=103;
		$method = $pyjs__bind_method2('_getReadonly', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.html5Attr.form', 'lineno':103};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.form';
			$pyjs['track']['lineno']=103;
			$pyjs['track']['lineno']=104;
			$pyjs['track']['lineno']=104;
			var $pyjs__ret = ($p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['hasAttribute']('readonly');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})())? (true) : (false));
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getReadonly'] = $method;
		$pyjs['track']['lineno']=105;
		$method = $pyjs__bind_method2('_setReadonly', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.html5Attr.form', 'lineno':105};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.form';
			$pyjs['track']['lineno']=105;
			$pyjs['track']['lineno']=106;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](val, true));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})()) {
				$pyjs['track']['lineno']=107;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['element']['setAttribute']('readonly', '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=109;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['element']['removeAttribute']('readonly');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setReadonly'] = $method;
		$pyjs['track']['lineno']=92;
		var $bases = new Array($m['Required']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Inputs', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=111;
	$m['Formhead'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.html5Attr.form';
		$pyjs['track']['lineno']=112;
		$method = $pyjs__bind_method2('_getFormaction', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.html5Attr.form', 'lineno':112};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.form';
			$pyjs['track']['lineno']=112;
			$pyjs['track']['lineno']=113;
			$pyjs['track']['lineno']=113;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'formaction');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getFormaction'] = $method;
		$pyjs['track']['lineno']=114;
		$method = $pyjs__bind_method2('_setFormaction', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.html5Attr.form', 'lineno':114};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.form';
			$pyjs['track']['lineno']=114;
			$pyjs['track']['lineno']=115;
			$p['getattr'](self, 'element')['formaction'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setFormaction'] = $method;
		$pyjs['track']['lineno']=117;
		$method = $pyjs__bind_method2('_getFormenctype', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.html5Attr.form', 'lineno':117};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.form';
			$pyjs['track']['lineno']=117;
			$pyjs['track']['lineno']=118;
			$pyjs['track']['lineno']=118;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'formenctype');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getFormenctype'] = $method;
		$pyjs['track']['lineno']=119;
		$method = $pyjs__bind_method2('_setFormenctype', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.html5Attr.form', 'lineno':119};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.form';
			$pyjs['track']['lineno']=119;
			$pyjs['track']['lineno']=120;
			$p['getattr'](self, 'element')['formenctype'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setFormenctype'] = $method;
		$pyjs['track']['lineno']=122;
		$method = $pyjs__bind_method2('_getFormmethod', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.html5Attr.form', 'lineno':122};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.form';
			$pyjs['track']['lineno']=122;
			$pyjs['track']['lineno']=123;
			$pyjs['track']['lineno']=123;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'formmethod');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getFormmethod'] = $method;
		$pyjs['track']['lineno']=124;
		$method = $pyjs__bind_method2('_setFormmethod', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.html5Attr.form', 'lineno':124};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.form';
			$pyjs['track']['lineno']=124;
			$pyjs['track']['lineno']=125;
			$p['getattr'](self, 'element')['formmethod'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setFormmethod'] = $method;
		$pyjs['track']['lineno']=127;
		$method = $pyjs__bind_method2('_getFormtarget', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.html5Attr.form', 'lineno':127};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.form';
			$pyjs['track']['lineno']=127;
			$pyjs['track']['lineno']=128;
			$pyjs['track']['lineno']=128;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'formtarget');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getFormtarget'] = $method;
		$pyjs['track']['lineno']=129;
		$method = $pyjs__bind_method2('_setFormtarget', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.html5Attr.form', 'lineno':129};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.form';
			$pyjs['track']['lineno']=129;
			$pyjs['track']['lineno']=130;
			$p['getattr'](self, 'element')['formtarget'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setFormtarget'] = $method;
		$pyjs['track']['lineno']=132;
		$method = $pyjs__bind_method2('_getFormnovalidate', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.html5Attr.form', 'lineno':132};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.form';
			$pyjs['track']['lineno']=132;
			$pyjs['track']['lineno']=133;
			$pyjs['track']['lineno']=133;
			var $pyjs__ret = ($p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['hasAttribute']('formnovalidate');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})())? (true) : (false));
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getFormnovalidate'] = $method;
		$pyjs['track']['lineno']=134;
		$method = $pyjs__bind_method2('_setFormnovalidate', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.html5Attr.form', 'lineno':134};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.form';
			$pyjs['track']['lineno']=134;
			$pyjs['track']['lineno']=135;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](val, true));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})()) {
				$pyjs['track']['lineno']=136;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['element']['setAttribute']('formnovalidate', '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=138;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['element']['removeAttribute']('formnovalidate');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setFormnovalidate'] = $method;
		$pyjs['track']['lineno']=111;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Formhead', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end html5.html5Attr.form */


/* end module: html5.html5Attr.form */


/*
PYJS_DEPS: ['html5.widget.Widget', 'html5', 'html5.widget']
*/
