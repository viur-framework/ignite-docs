/* start module: html5.html5Attr.svg */
$pyjs['loaded_modules']['html5.html5Attr.svg'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['html5.html5Attr.svg']['__was_initialized__']) return $pyjs['loaded_modules']['html5.html5Attr.svg'];
	if(typeof $pyjs['loaded_modules']['html5.html5Attr'] == 'undefined' || !$pyjs['loaded_modules']['html5.html5Attr']['__was_initialized__']) $p['___import___']('html5.html5Attr', null);
	var $m = $pyjs['loaded_modules']['html5.html5Attr.svg'];
	$m['__repr__'] = function() { return '<module: html5.html5Attr.svg>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'html5.html5Attr.svg';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['html5.html5Attr']['svg'] = $pyjs['loaded_modules']['html5.html5Attr.svg'];
	$m.__track_lines__[1] = 'html5.html5Attr.svg.py, line 1:\n    from html5.widget import Widget';
	$m.__track_lines__[3] = 'html5.html5Attr.svg.py, line 3:\n    class ViewBox(object):';
	$m.__track_lines__[4] = 'html5.html5Attr.svg.py, line 4:\n    def _getViewBox(self):';
	$m.__track_lines__[5] = 'html5.html5Attr.svg.py, line 5:\n    return self.element.viewBox';
	$m.__track_lines__[6] = 'html5.html5Attr.svg.py, line 6:\n    def _setViewBox(self,val):';
	$m.__track_lines__[7] = 'html5.html5Attr.svg.py, line 7:\n    self.element.setAttribute("viewBox", val)';
	$m.__track_lines__[9] = 'html5.html5Attr.svg.py, line 9:\n    def _getPreserveAspectRatio(self):';
	$m.__track_lines__[10] = 'html5.html5Attr.svg.py, line 10:\n    return self.element.preserveAspectRatio';
	$m.__track_lines__[11] = 'html5.html5Attr.svg.py, line 11:\n    def _setPreserveAspectRatio(self,val):';
	$m.__track_lines__[12] = 'html5.html5Attr.svg.py, line 12:\n    self.element.setAttribute("preserveAspectRatio", val)';
	$m.__track_lines__[15] = 'html5.html5Attr.svg.py, line 15:\n    class Dimensions(object):';
	$m.__track_lines__[16] = 'html5.html5Attr.svg.py, line 16:\n    def _getWidth(self):';
	$m.__track_lines__[17] = 'html5.html5Attr.svg.py, line 17:\n    return self.element.width';
	$m.__track_lines__[18] = 'html5.html5Attr.svg.py, line 18:\n    def _setWidth(self,val):';
	$m.__track_lines__[19] = 'html5.html5Attr.svg.py, line 19:\n    self.element.setAttribute("width", val)';
	$m.__track_lines__[21] = 'html5.html5Attr.svg.py, line 21:\n    def _getHeight(self):';
	$m.__track_lines__[22] = 'html5.html5Attr.svg.py, line 22:\n    return self.element.height';
	$m.__track_lines__[23] = 'html5.html5Attr.svg.py, line 23:\n    def _setHeight(self,val):';
	$m.__track_lines__[24] = 'html5.html5Attr.svg.py, line 24:\n    self.element.setAttribute("height", val)';
	$m.__track_lines__[26] = 'html5.html5Attr.svg.py, line 26:\n    def _getX(self):';
	$m.__track_lines__[27] = 'html5.html5Attr.svg.py, line 27:\n    return self.element.x';
	$m.__track_lines__[28] = 'html5.html5Attr.svg.py, line 28:\n    def _setX(self,val):';
	$m.__track_lines__[29] = 'html5.html5Attr.svg.py, line 29:\n    self.element.setAttribute("x", val)';
	$m.__track_lines__[31] = 'html5.html5Attr.svg.py, line 31:\n    def _getY(self):';
	$m.__track_lines__[32] = 'html5.html5Attr.svg.py, line 32:\n    return self.element.y';
	$m.__track_lines__[33] = 'html5.html5Attr.svg.py, line 33:\n    def _setY(self,val):';
	$m.__track_lines__[34] = 'html5.html5Attr.svg.py, line 34:\n    self.element.setAttribute("y", val)';
	$m.__track_lines__[36] = 'html5.html5Attr.svg.py, line 36:\n    def _getR(self):';
	$m.__track_lines__[37] = 'html5.html5Attr.svg.py, line 37:\n    return self.element.r';
	$m.__track_lines__[38] = 'html5.html5Attr.svg.py, line 38:\n    def _setR(self,val):';
	$m.__track_lines__[39] = 'html5.html5Attr.svg.py, line 39:\n    self.element.setAttribute("r", val)';
	$m.__track_lines__[41] = 'html5.html5Attr.svg.py, line 41:\n    def _getRx(self):';
	$m.__track_lines__[42] = 'html5.html5Attr.svg.py, line 42:\n    return self.element.rx';
	$m.__track_lines__[43] = 'html5.html5Attr.svg.py, line 43:\n    def _setRx(self,val):';
	$m.__track_lines__[44] = 'html5.html5Attr.svg.py, line 44:\n    self.element.setAttribute("rx", val)';
	$m.__track_lines__[46] = 'html5.html5Attr.svg.py, line 46:\n    def _getRy(self):';
	$m.__track_lines__[47] = 'html5.html5Attr.svg.py, line 47:\n    return self.element.ry';
	$m.__track_lines__[48] = 'html5.html5Attr.svg.py, line 48:\n    def _setRy(self,val):';
	$m.__track_lines__[49] = 'html5.html5Attr.svg.py, line 49:\n    self.element.setAttribute("ry", val)';
	$m.__track_lines__[51] = 'html5.html5Attr.svg.py, line 51:\n    def _getCx(self):';
	$m.__track_lines__[52] = 'html5.html5Attr.svg.py, line 52:\n    return self.element.cx';
	$m.__track_lines__[53] = 'html5.html5Attr.svg.py, line 53:\n    def _setCx(self,val):';
	$m.__track_lines__[54] = 'html5.html5Attr.svg.py, line 54:\n    self.element.setAttribute("cx", val)';
	$m.__track_lines__[56] = 'html5.html5Attr.svg.py, line 56:\n    def _getCy(self):';
	$m.__track_lines__[57] = 'html5.html5Attr.svg.py, line 57:\n    return self.element.cy';
	$m.__track_lines__[58] = 'html5.html5Attr.svg.py, line 58:\n    def _setCy(self,val):';
	$m.__track_lines__[59] = 'html5.html5Attr.svg.py, line 59:\n    self.element.setAttribute("cy", val)';
	$m.__track_lines__[61] = 'html5.html5Attr.svg.py, line 61:\n    class Points(object):';
	$m.__track_lines__[62] = 'html5.html5Attr.svg.py, line 62:\n    def _getPoints(self):';
	$m.__track_lines__[63] = 'html5.html5Attr.svg.py, line 63:\n    return self.element.points';
	$m.__track_lines__[64] = 'html5.html5Attr.svg.py, line 64:\n    def _setPoints(self,val):';
	$m.__track_lines__[65] = 'html5.html5Attr.svg.py, line 65:\n    self.element.setAttribute("points", val)';
	$m.__track_lines__[67] = 'html5.html5Attr.svg.py, line 67:\n    def _getX1(self):';
	$m.__track_lines__[68] = 'html5.html5Attr.svg.py, line 68:\n    return self.element.x1';
	$m.__track_lines__[69] = 'html5.html5Attr.svg.py, line 69:\n    def _setX1(self,val):';
	$m.__track_lines__[70] = 'html5.html5Attr.svg.py, line 70:\n    self.element.setAttribute("x1", val)';
	$m.__track_lines__[72] = 'html5.html5Attr.svg.py, line 72:\n    def _getY1(self):';
	$m.__track_lines__[73] = 'html5.html5Attr.svg.py, line 73:\n    return self.element.y1';
	$m.__track_lines__[74] = 'html5.html5Attr.svg.py, line 74:\n    def _setY1(self,val):';
	$m.__track_lines__[75] = 'html5.html5Attr.svg.py, line 75:\n    self.element.setAttribute("y1", val)';
	$m.__track_lines__[77] = 'html5.html5Attr.svg.py, line 77:\n    def _getX2(self):';
	$m.__track_lines__[78] = 'html5.html5Attr.svg.py, line 78:\n    return self.element.x2';
	$m.__track_lines__[79] = 'html5.html5Attr.svg.py, line 79:\n    def _setX2(self,val):';
	$m.__track_lines__[80] = 'html5.html5Attr.svg.py, line 80:\n    self.element.setAttribute("x2", val)';
	$m.__track_lines__[82] = 'html5.html5Attr.svg.py, line 82:\n    def _getY2(self):';
	$m.__track_lines__[83] = 'html5.html5Attr.svg.py, line 83:\n    return self.element.y2';
	$m.__track_lines__[84] = 'html5.html5Attr.svg.py, line 84:\n    def _setY2(self,val):';
	$m.__track_lines__[85] = 'html5.html5Attr.svg.py, line 85:\n    self.element.setAttribute("y2", val)';
	$m.__track_lines__[87] = 'html5.html5Attr.svg.py, line 87:\n    class Transform(object):';
	$m.__track_lines__[88] = 'html5.html5Attr.svg.py, line 88:\n    def _getTransform(self):';
	$m.__track_lines__[89] = 'html5.html5Attr.svg.py, line 89:\n    return self.element.transform';
	$m.__track_lines__[90] = 'html5.html5Attr.svg.py, line 90:\n    def _setTransform(self,val):';
	$m.__track_lines__[91] = 'html5.html5Attr.svg.py, line 91:\n    self.element.setAttribute("transform", val)';
	$m.__track_lines__[93] = 'html5.html5Attr.svg.py, line 93:\n    class Xlink(object):';
	$m.__track_lines__[94] = 'html5.html5Attr.svg.py, line 94:\n    def _getXlinkhref(self):';
	$m.__track_lines__[95] = 'html5.html5Attr.svg.py, line 95:\n    return self.element.getAttribute("xlink:href")';
	$m.__track_lines__[96] = 'html5.html5Attr.svg.py, line 96:\n    def _setXlinkhref(self,val):';
	$m.__track_lines__[97] = 'html5.html5Attr.svg.py, line 97:\n    self.element.setAttribute("xlink:href", val)';
	$m.__track_lines__[99] = 'html5.html5Attr.svg.py, line 99:\n    class Styles(object):';
	$m.__track_lines__[100] = 'html5.html5Attr.svg.py, line 100:\n    def _getFill(self):';
	$m.__track_lines__[101] = 'html5.html5Attr.svg.py, line 101:\n    return self.element.fill';
	$m.__track_lines__[102] = 'html5.html5Attr.svg.py, line 102:\n    def _setFill(self,val):';
	$m.__track_lines__[103] = 'html5.html5Attr.svg.py, line 103:\n    self.element.setAttribute("fill", val)';
	$m.__track_lines__[105] = 'html5.html5Attr.svg.py, line 105:\n    def _getStroke(self):';
	$m.__track_lines__[106] = 'html5.html5Attr.svg.py, line 106:\n    return self.element.stroke';
	$m.__track_lines__[107] = 'html5.html5Attr.svg.py, line 107:\n    def _setStroke(self,val):';
	$m.__track_lines__[108] = 'html5.html5Attr.svg.py, line 108:\n    self.element.setAttribute("stroke", val)';


	$pyjs['track']['module']='html5.html5Attr.svg';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=1;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Widget'] = $p['___import___']('html5.widget.Widget', 'html5.html5Attr', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=3;
	$m['ViewBox'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.html5Attr.svg';
		$pyjs['track']['lineno']=4;
		$method = $pyjs__bind_method2('_getViewBox', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.html5Attr.svg', 'lineno':4};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.svg';
			$pyjs['track']['lineno']=4;
			$pyjs['track']['lineno']=5;
			$pyjs['track']['lineno']=5;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'viewBox');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getViewBox'] = $method;
		$pyjs['track']['lineno']=6;
		$method = $pyjs__bind_method2('_setViewBox', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.html5Attr.svg', 'lineno':6};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.svg';
			$pyjs['track']['lineno']=6;
			$pyjs['track']['lineno']=7;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['setAttribute']('viewBox', val);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setViewBox'] = $method;
		$pyjs['track']['lineno']=9;
		$method = $pyjs__bind_method2('_getPreserveAspectRatio', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.html5Attr.svg', 'lineno':9};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.svg';
			$pyjs['track']['lineno']=9;
			$pyjs['track']['lineno']=10;
			$pyjs['track']['lineno']=10;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'preserveAspectRatio');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getPreserveAspectRatio'] = $method;
		$pyjs['track']['lineno']=11;
		$method = $pyjs__bind_method2('_setPreserveAspectRatio', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.html5Attr.svg', 'lineno':11};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.svg';
			$pyjs['track']['lineno']=11;
			$pyjs['track']['lineno']=12;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['setAttribute']('preserveAspectRatio', val);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setPreserveAspectRatio'] = $method;
		$pyjs['track']['lineno']=3;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('ViewBox', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=15;
	$m['Dimensions'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.html5Attr.svg';
		$pyjs['track']['lineno']=16;
		$method = $pyjs__bind_method2('_getWidth', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.html5Attr.svg', 'lineno':16};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.svg';
			$pyjs['track']['lineno']=16;
			$pyjs['track']['lineno']=17;
			$pyjs['track']['lineno']=17;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'width');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getWidth'] = $method;
		$pyjs['track']['lineno']=18;
		$method = $pyjs__bind_method2('_setWidth', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.html5Attr.svg', 'lineno':18};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.svg';
			$pyjs['track']['lineno']=18;
			$pyjs['track']['lineno']=19;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['setAttribute']('width', val);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setWidth'] = $method;
		$pyjs['track']['lineno']=21;
		$method = $pyjs__bind_method2('_getHeight', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.html5Attr.svg', 'lineno':21};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.svg';
			$pyjs['track']['lineno']=21;
			$pyjs['track']['lineno']=22;
			$pyjs['track']['lineno']=22;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'height');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getHeight'] = $method;
		$pyjs['track']['lineno']=23;
		$method = $pyjs__bind_method2('_setHeight', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.html5Attr.svg', 'lineno':23};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.svg';
			$pyjs['track']['lineno']=23;
			$pyjs['track']['lineno']=24;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['setAttribute']('height', val);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setHeight'] = $method;
		$pyjs['track']['lineno']=26;
		$method = $pyjs__bind_method2('_getX', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.html5Attr.svg', 'lineno':26};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.svg';
			$pyjs['track']['lineno']=26;
			$pyjs['track']['lineno']=27;
			$pyjs['track']['lineno']=27;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'x');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getX'] = $method;
		$pyjs['track']['lineno']=28;
		$method = $pyjs__bind_method2('_setX', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.html5Attr.svg', 'lineno':28};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.svg';
			$pyjs['track']['lineno']=28;
			$pyjs['track']['lineno']=29;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['setAttribute']('x', val);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setX'] = $method;
		$pyjs['track']['lineno']=31;
		$method = $pyjs__bind_method2('_getY', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.html5Attr.svg', 'lineno':31};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.svg';
			$pyjs['track']['lineno']=31;
			$pyjs['track']['lineno']=32;
			$pyjs['track']['lineno']=32;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'y');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getY'] = $method;
		$pyjs['track']['lineno']=33;
		$method = $pyjs__bind_method2('_setY', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.html5Attr.svg', 'lineno':33};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.svg';
			$pyjs['track']['lineno']=33;
			$pyjs['track']['lineno']=34;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['setAttribute']('y', val);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setY'] = $method;
		$pyjs['track']['lineno']=36;
		$method = $pyjs__bind_method2('_getR', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.html5Attr.svg', 'lineno':36};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.svg';
			$pyjs['track']['lineno']=36;
			$pyjs['track']['lineno']=37;
			$pyjs['track']['lineno']=37;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'r');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getR'] = $method;
		$pyjs['track']['lineno']=38;
		$method = $pyjs__bind_method2('_setR', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.html5Attr.svg', 'lineno':38};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.svg';
			$pyjs['track']['lineno']=38;
			$pyjs['track']['lineno']=39;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['setAttribute']('r', val);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setR'] = $method;
		$pyjs['track']['lineno']=41;
		$method = $pyjs__bind_method2('_getRx', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.html5Attr.svg', 'lineno':41};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.svg';
			$pyjs['track']['lineno']=41;
			$pyjs['track']['lineno']=42;
			$pyjs['track']['lineno']=42;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'rx');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getRx'] = $method;
		$pyjs['track']['lineno']=43;
		$method = $pyjs__bind_method2('_setRx', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.html5Attr.svg', 'lineno':43};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.svg';
			$pyjs['track']['lineno']=43;
			$pyjs['track']['lineno']=44;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['setAttribute']('rx', val);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setRx'] = $method;
		$pyjs['track']['lineno']=46;
		$method = $pyjs__bind_method2('_getRy', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.html5Attr.svg', 'lineno':46};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.svg';
			$pyjs['track']['lineno']=46;
			$pyjs['track']['lineno']=47;
			$pyjs['track']['lineno']=47;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'ry');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getRy'] = $method;
		$pyjs['track']['lineno']=48;
		$method = $pyjs__bind_method2('_setRy', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.html5Attr.svg', 'lineno':48};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.svg';
			$pyjs['track']['lineno']=48;
			$pyjs['track']['lineno']=49;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['setAttribute']('ry', val);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setRy'] = $method;
		$pyjs['track']['lineno']=51;
		$method = $pyjs__bind_method2('_getCx', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.html5Attr.svg', 'lineno':51};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.svg';
			$pyjs['track']['lineno']=51;
			$pyjs['track']['lineno']=52;
			$pyjs['track']['lineno']=52;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'cx');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getCx'] = $method;
		$pyjs['track']['lineno']=53;
		$method = $pyjs__bind_method2('_setCx', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.html5Attr.svg', 'lineno':53};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.svg';
			$pyjs['track']['lineno']=53;
			$pyjs['track']['lineno']=54;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['setAttribute']('cx', val);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setCx'] = $method;
		$pyjs['track']['lineno']=56;
		$method = $pyjs__bind_method2('_getCy', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.html5Attr.svg', 'lineno':56};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.svg';
			$pyjs['track']['lineno']=56;
			$pyjs['track']['lineno']=57;
			$pyjs['track']['lineno']=57;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'cy');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getCy'] = $method;
		$pyjs['track']['lineno']=58;
		$method = $pyjs__bind_method2('_setCy', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.html5Attr.svg', 'lineno':58};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.svg';
			$pyjs['track']['lineno']=58;
			$pyjs['track']['lineno']=59;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['setAttribute']('cy', val);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setCy'] = $method;
		$pyjs['track']['lineno']=15;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Dimensions', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=61;
	$m['Points'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.html5Attr.svg';
		$pyjs['track']['lineno']=62;
		$method = $pyjs__bind_method2('_getPoints', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.html5Attr.svg', 'lineno':62};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.svg';
			$pyjs['track']['lineno']=62;
			$pyjs['track']['lineno']=63;
			$pyjs['track']['lineno']=63;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'points');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getPoints'] = $method;
		$pyjs['track']['lineno']=64;
		$method = $pyjs__bind_method2('_setPoints', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.html5Attr.svg', 'lineno':64};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.svg';
			$pyjs['track']['lineno']=64;
			$pyjs['track']['lineno']=65;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['setAttribute']('points', val);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setPoints'] = $method;
		$pyjs['track']['lineno']=67;
		$method = $pyjs__bind_method2('_getX1', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.html5Attr.svg', 'lineno':67};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.svg';
			$pyjs['track']['lineno']=67;
			$pyjs['track']['lineno']=68;
			$pyjs['track']['lineno']=68;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'x1');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getX1'] = $method;
		$pyjs['track']['lineno']=69;
		$method = $pyjs__bind_method2('_setX1', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.html5Attr.svg', 'lineno':69};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.svg';
			$pyjs['track']['lineno']=69;
			$pyjs['track']['lineno']=70;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['setAttribute']('x1', val);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setX1'] = $method;
		$pyjs['track']['lineno']=72;
		$method = $pyjs__bind_method2('_getY1', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.html5Attr.svg', 'lineno':72};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.svg';
			$pyjs['track']['lineno']=72;
			$pyjs['track']['lineno']=73;
			$pyjs['track']['lineno']=73;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'y1');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getY1'] = $method;
		$pyjs['track']['lineno']=74;
		$method = $pyjs__bind_method2('_setY1', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.html5Attr.svg', 'lineno':74};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.svg';
			$pyjs['track']['lineno']=74;
			$pyjs['track']['lineno']=75;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['setAttribute']('y1', val);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setY1'] = $method;
		$pyjs['track']['lineno']=77;
		$method = $pyjs__bind_method2('_getX2', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.html5Attr.svg', 'lineno':77};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.svg';
			$pyjs['track']['lineno']=77;
			$pyjs['track']['lineno']=78;
			$pyjs['track']['lineno']=78;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'x2');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getX2'] = $method;
		$pyjs['track']['lineno']=79;
		$method = $pyjs__bind_method2('_setX2', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.html5Attr.svg', 'lineno':79};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.svg';
			$pyjs['track']['lineno']=79;
			$pyjs['track']['lineno']=80;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['setAttribute']('x2', val);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setX2'] = $method;
		$pyjs['track']['lineno']=82;
		$method = $pyjs__bind_method2('_getY2', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.html5Attr.svg', 'lineno':82};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.svg';
			$pyjs['track']['lineno']=82;
			$pyjs['track']['lineno']=83;
			$pyjs['track']['lineno']=83;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'y2');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getY2'] = $method;
		$pyjs['track']['lineno']=84;
		$method = $pyjs__bind_method2('_setY2', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.html5Attr.svg', 'lineno':84};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.svg';
			$pyjs['track']['lineno']=84;
			$pyjs['track']['lineno']=85;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['setAttribute']('y2', val);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setY2'] = $method;
		$pyjs['track']['lineno']=61;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Points', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=87;
	$m['Transform'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.html5Attr.svg';
		$pyjs['track']['lineno']=88;
		$method = $pyjs__bind_method2('_getTransform', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.html5Attr.svg', 'lineno':88};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.svg';
			$pyjs['track']['lineno']=88;
			$pyjs['track']['lineno']=89;
			$pyjs['track']['lineno']=89;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'transform');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getTransform'] = $method;
		$pyjs['track']['lineno']=90;
		$method = $pyjs__bind_method2('_setTransform', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.html5Attr.svg', 'lineno':90};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.svg';
			$pyjs['track']['lineno']=90;
			$pyjs['track']['lineno']=91;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['setAttribute']('transform', val);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setTransform'] = $method;
		$pyjs['track']['lineno']=87;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Transform', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=93;
	$m['Xlink'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.html5Attr.svg';
		$pyjs['track']['lineno']=94;
		$method = $pyjs__bind_method2('_getXlinkhref', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.html5Attr.svg', 'lineno':94};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.svg';
			$pyjs['track']['lineno']=94;
			$pyjs['track']['lineno']=95;
			$pyjs['track']['lineno']=95;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['getAttribute']('xlink:href');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getXlinkhref'] = $method;
		$pyjs['track']['lineno']=96;
		$method = $pyjs__bind_method2('_setXlinkhref', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.html5Attr.svg', 'lineno':96};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.svg';
			$pyjs['track']['lineno']=96;
			$pyjs['track']['lineno']=97;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['setAttribute']('xlink:href', val);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setXlinkhref'] = $method;
		$pyjs['track']['lineno']=93;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Xlink', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=99;
	$m['Styles'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.html5Attr.svg';
		$pyjs['track']['lineno']=100;
		$method = $pyjs__bind_method2('_getFill', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.html5Attr.svg', 'lineno':100};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.svg';
			$pyjs['track']['lineno']=100;
			$pyjs['track']['lineno']=101;
			$pyjs['track']['lineno']=101;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'fill');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getFill'] = $method;
		$pyjs['track']['lineno']=102;
		$method = $pyjs__bind_method2('_setFill', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.html5Attr.svg', 'lineno':102};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.svg';
			$pyjs['track']['lineno']=102;
			$pyjs['track']['lineno']=103;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['setAttribute']('fill', val);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setFill'] = $method;
		$pyjs['track']['lineno']=105;
		$method = $pyjs__bind_method2('_getStroke', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.html5Attr.svg', 'lineno':105};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.svg';
			$pyjs['track']['lineno']=105;
			$pyjs['track']['lineno']=106;
			$pyjs['track']['lineno']=106;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'stroke');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getStroke'] = $method;
		$pyjs['track']['lineno']=107;
		$method = $pyjs__bind_method2('_setStroke', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.html5Attr.svg', 'lineno':107};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.svg';
			$pyjs['track']['lineno']=107;
			$pyjs['track']['lineno']=108;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['setAttribute']('stroke', val);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setStroke'] = $method;
		$pyjs['track']['lineno']=99;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Styles', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end html5.html5Attr.svg */


/* end module: html5.html5Attr.svg */


/*
PYJS_DEPS: ['html5.widget.Widget', 'html5', 'html5.widget']
*/
