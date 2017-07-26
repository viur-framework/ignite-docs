/* start module: html5.svg */
$pyjs['loaded_modules']['html5.svg'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['html5.svg']['__was_initialized__']) return $pyjs['loaded_modules']['html5.svg'];
	if(typeof $pyjs['loaded_modules']['html5'] == 'undefined' || !$pyjs['loaded_modules']['html5']['__was_initialized__']) $p['___import___']('html5', null);
	var $m = $pyjs['loaded_modules']['html5.svg'];
	$m['__repr__'] = function() { return '<module: html5.svg>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'html5.svg';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['html5']['svg'] = $pyjs['loaded_modules']['html5.svg'];
	$m.__track_lines__[1] = 'html5.svg.py, line 1:\n    from html5.widget import Widget';
	$m.__track_lines__[2] = 'html5.svg.py, line 2:\n    from html5.style import Style';
	$m.__track_lines__[3] = 'html5.svg.py, line 3:\n    from html5Attr.svg import ViewBox, Dimensions, Styles, Transform, Points, Xlink';
	$m.__track_lines__[4] = 'html5.svg.py, line 4:\n    from html5Attr.href import Href';
	$m.__track_lines__[6] = 'html5.svg.py, line 6:\n    class Svg(Widget, ViewBox, Dimensions, Transform):';
	$m.__track_lines__[7] = 'html5.svg.py, line 7:\n    _baseClass = "svg"';
	$m.__track_lines__[8] = 'html5.svg.py, line 8:\n    _namespace = "SVG"';
	$m.__track_lines__[10] = 'html5.svg.py, line 10:\n    def __init__(self, version=None, viewBox=None, heigth=None, width=None, *args, **kwargs):';
	$m.__track_lines__[11] = 'html5.svg.py, line 11:\n    super(Svg,self).__init__(*args, **kwargs)';
	$m.__track_lines__[13] = 'html5.svg.py, line 13:\n    def _getVersion(self):';
	$m.__track_lines__[14] = 'html5.svg.py, line 14:\n    return self.element.version';
	$m.__track_lines__[15] = 'html5.svg.py, line 15:\n    def _setVersion(self,val):';
	$m.__track_lines__[16] = 'html5.svg.py, line 16:\n    self.element.setAttribute("version", val)';
	$m.__track_lines__[18] = 'html5.svg.py, line 18:\n    def _getXmlns(self):';
	$m.__track_lines__[19] = 'html5.svg.py, line 19:\n    return self.element.xmlns';
	$m.__track_lines__[20] = 'html5.svg.py, line 20:\n    def _setXmlns(self,val):';
	$m.__track_lines__[21] = 'html5.svg.py, line 21:\n    self.element.setAttribute("xmlns", val)';
	$m.__track_lines__[23] = 'html5.svg.py, line 23:\n    class SvgCircle(Widget, Transform, Dimensions):';
	$m.__track_lines__[24] = 'html5.svg.py, line 24:\n    _baseClass = "circle"';
	$m.__track_lines__[25] = 'html5.svg.py, line 25:\n    _namespace = "SVG"';
	$m.__track_lines__[27] = 'html5.svg.py, line 27:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[28] = 'html5.svg.py, line 28:\n    super(SvgCircle,self).__init__(*args, **kwargs)';
	$m.__track_lines__[30] = 'html5.svg.py, line 30:\n    class SvgEllipse(Widget, Transform, Dimensions):';
	$m.__track_lines__[31] = 'html5.svg.py, line 31:\n    _baseClass = "ellipse"';
	$m.__track_lines__[32] = 'html5.svg.py, line 32:\n    _namespace = "SVG"';
	$m.__track_lines__[34] = 'html5.svg.py, line 34:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[35] = 'html5.svg.py, line 35:\n    super(SvgEllipse,self).__init__(*args, **kwargs)';
	$m.__track_lines__[37] = 'html5.svg.py, line 37:\n    class SvgG(Widget, Transform, Styles):';
	$m.__track_lines__[38] = 'html5.svg.py, line 38:\n    _baseClass = "g"';
	$m.__track_lines__[39] = 'html5.svg.py, line 39:\n    _namespace = "SVG"';
	$m.__track_lines__[41] = 'html5.svg.py, line 41:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[42] = 'html5.svg.py, line 42:\n    super(SvgG,self).__init__(*args, **kwargs)';
	$m.__track_lines__[44] = 'html5.svg.py, line 44:\n    def _getTransform(self):';
	$m.__track_lines__[45] = 'html5.svg.py, line 45:\n    return self.element.transform';
	$m.__track_lines__[46] = 'html5.svg.py, line 46:\n    def _setTransform(self,val):';
	$m.__track_lines__[47] = 'html5.svg.py, line 47:\n    self.element.setAttribute("transform", val)';
	$m.__track_lines__[49] = 'html5.svg.py, line 49:\n    class SvgImage(Widget, ViewBox, Dimensions, Transform, Xlink):';
	$m.__track_lines__[50] = 'html5.svg.py, line 50:\n    _baseClass = "image"';
	$m.__track_lines__[51] = 'html5.svg.py, line 51:\n    _namespace = "SVG"';
	$m.__track_lines__[53] = 'html5.svg.py, line 53:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[54] = 'html5.svg.py, line 54:\n    super(SvgImage,self).__init__(*args, **kwargs)';
	$m.__track_lines__[56] = 'html5.svg.py, line 56:\n    class SvgLine(Widget, Transform, Points):';
	$m.__track_lines__[57] = 'html5.svg.py, line 57:\n    _baseClass = "line"';
	$m.__track_lines__[58] = 'html5.svg.py, line 58:\n    _namespace = "SVG"';
	$m.__track_lines__[60] = 'html5.svg.py, line 60:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[61] = 'html5.svg.py, line 61:\n    super(SvgLine,self).__init__(*args, **kwargs)';
	$m.__track_lines__[63] = 'html5.svg.py, line 63:\n    class SvgPath(Widget, Transform):';
	$m.__track_lines__[64] = 'html5.svg.py, line 64:\n    _baseClass = "path"';
	$m.__track_lines__[65] = 'html5.svg.py, line 65:\n    _namespace = "SVG"';
	$m.__track_lines__[67] = 'html5.svg.py, line 67:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[68] = 'html5.svg.py, line 68:\n    super(SvgPath,self).__init__(*args, **kwargs)';
	$m.__track_lines__[70] = 'html5.svg.py, line 70:\n    def _getD(self):';
	$m.__track_lines__[71] = 'html5.svg.py, line 71:\n    return self.element.d';
	$m.__track_lines__[72] = 'html5.svg.py, line 72:\n    def _setD(self,val):';
	$m.__track_lines__[73] = 'html5.svg.py, line 73:\n    self.element.setAttribute("d", val)';
	$m.__track_lines__[75] = 'html5.svg.py, line 75:\n    def _getPathLength(self):';
	$m.__track_lines__[76] = 'html5.svg.py, line 76:\n    return self.element.pathLength';
	$m.__track_lines__[77] = 'html5.svg.py, line 77:\n    def _setPathLength(self,val):';
	$m.__track_lines__[78] = 'html5.svg.py, line 78:\n    self.element.setAttribute("pathLength", val)';
	$m.__track_lines__[81] = 'html5.svg.py, line 81:\n    class SvgPolygon(Widget, Transform, Points):';
	$m.__track_lines__[82] = 'html5.svg.py, line 82:\n    _baseClass = "polygon"';
	$m.__track_lines__[83] = 'html5.svg.py, line 83:\n    _namespace = "SVG"';
	$m.__track_lines__[85] = 'html5.svg.py, line 85:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[86] = 'html5.svg.py, line 86:\n    super(SvgPolygon,self).__init__(*args, **kwargs)';
	$m.__track_lines__[88] = 'html5.svg.py, line 88:\n    class SvgPolyline(Widget, Transform, Points):';
	$m.__track_lines__[89] = 'html5.svg.py, line 89:\n    _baseClass = "polyline"';
	$m.__track_lines__[90] = 'html5.svg.py, line 90:\n    _namespace = "SVG"';
	$m.__track_lines__[92] = 'html5.svg.py, line 92:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[93] = 'html5.svg.py, line 93:\n    super(SvgPolyline,self).__init__(*args, **kwargs)';
	$m.__track_lines__[95] = 'html5.svg.py, line 95:\n    class SvgRect(Widget, Dimensions, Transform, Styles):';
	$m.__track_lines__[96] = 'html5.svg.py, line 96:\n    _baseClass = "rect"';
	$m.__track_lines__[97] = 'html5.svg.py, line 97:\n    _namespace = "SVG"';
	$m.__track_lines__[99] = 'html5.svg.py, line 99:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[100] = 'html5.svg.py, line 100:\n    super(SvgRect,self).__init__(*args, **kwargs)';
	$m.__track_lines__[102] = 'html5.svg.py, line 102:\n    class SvgText(Widget, Dimensions, Transform, Styles):';
	$m.__track_lines__[103] = 'html5.svg.py, line 103:\n    _baseClass = "text"';
	$m.__track_lines__[104] = 'html5.svg.py, line 104:\n    _namespace = "SVG"';
	$m.__track_lines__[106] = 'html5.svg.py, line 106:\n    def __init__(self, text="",  *args, **kwargs):';
	$m.__track_lines__[107] = 'html5.svg.py, line 107:\n    super(SvgText,self).__init__(*args, **kwargs)';
	$m.__track_lines__[108] = 'html5.svg.py, line 108:\n    self.element.appendChild(eval("document.createTextNode(\'{}\')".format(text)))';


	$pyjs['track']['module']='html5.svg';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=1;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Widget'] = $p['___import___']('html5.widget.Widget', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=2;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Style'] = $p['___import___']('html5.style.Style', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=3;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['ViewBox'] = $p['___import___']('html5Attr.svg.ViewBox', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Dimensions'] = $p['___import___']('html5Attr.svg.Dimensions', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Styles'] = $p['___import___']('html5Attr.svg.Styles', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Transform'] = $p['___import___']('html5Attr.svg.Transform', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Points'] = $p['___import___']('html5Attr.svg.Points', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Xlink'] = $p['___import___']('html5Attr.svg.Xlink', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=4;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Href'] = $p['___import___']('html5Attr.href.Href', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=6;
	$m['Svg'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.svg';
		$pyjs['track']['lineno']=7;
		$cls_definition['_baseClass'] = 'svg';
		$pyjs['track']['lineno']=8;
		$cls_definition['_namespace'] = 'SVG';
		$pyjs['track']['lineno']=10;
		$method = $pyjs__bind_method2('__init__', function(version, viewBox, heigth, width) {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,4,arguments['length']-1));

				var kwargs = arguments['length'] >= 5 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				version = arguments[1];
				viewBox = arguments[2];
				heigth = arguments[3];
				width = arguments[4];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,5,arguments['length']-1));

				var kwargs = arguments['length'] >= 6 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof width != 'undefined') {
					if (width !== null && typeof width['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = width;
						width = arguments[5];
					}
				} else 				if (typeof heigth != 'undefined') {
					if (heigth !== null && typeof heigth['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = heigth;
						heigth = arguments[5];
					}
				} else 				if (typeof viewBox != 'undefined') {
					if (viewBox !== null && typeof viewBox['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = viewBox;
						viewBox = arguments[5];
					}
				} else 				if (typeof version != 'undefined') {
					if (version !== null && typeof version['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = version;
						version = arguments[5];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[5];
					}
				} else {
				}
			}
			if (typeof version == 'undefined') version=arguments['callee']['__args__'][3][1];
			if (typeof viewBox == 'undefined') viewBox=arguments['callee']['__args__'][4][1];
			if (typeof heigth == 'undefined') heigth=arguments['callee']['__args__'][5][1];
			if (typeof width == 'undefined') width=arguments['callee']['__args__'][6][1];

			$pyjs['track']={'module':'html5.svg', 'lineno':10};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.svg';
			$pyjs['track']['lineno']=10;
			$pyjs['track']['lineno']=11;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['Svg'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['version', null],['viewBox', null],['heigth', null],['width', null]]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=13;
		$method = $pyjs__bind_method2('_getVersion', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.svg', 'lineno':13};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.svg';
			$pyjs['track']['lineno']=13;
			$pyjs['track']['lineno']=14;
			$pyjs['track']['lineno']=14;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'version');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getVersion'] = $method;
		$pyjs['track']['lineno']=15;
		$method = $pyjs__bind_method2('_setVersion', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.svg', 'lineno':15};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.svg';
			$pyjs['track']['lineno']=15;
			$pyjs['track']['lineno']=16;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['setAttribute']('version', val);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setVersion'] = $method;
		$pyjs['track']['lineno']=18;
		$method = $pyjs__bind_method2('_getXmlns', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.svg', 'lineno':18};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.svg';
			$pyjs['track']['lineno']=18;
			$pyjs['track']['lineno']=19;
			$pyjs['track']['lineno']=19;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'xmlns');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getXmlns'] = $method;
		$pyjs['track']['lineno']=20;
		$method = $pyjs__bind_method2('_setXmlns', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.svg', 'lineno':20};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.svg';
			$pyjs['track']['lineno']=20;
			$pyjs['track']['lineno']=21;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['setAttribute']('xmlns', val);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setXmlns'] = $method;
		$pyjs['track']['lineno']=6;
		var $bases = new Array($m['Widget'],$m['ViewBox'],$m['Dimensions'],$m['Transform']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Svg', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=23;
	$m['SvgCircle'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.svg';
		$pyjs['track']['lineno']=24;
		$cls_definition['_baseClass'] = 'circle';
		$pyjs['track']['lineno']=25;
		$cls_definition['_namespace'] = 'SVG';
		$pyjs['track']['lineno']=27;
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

			$pyjs['track']={'module':'html5.svg', 'lineno':27};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.svg';
			$pyjs['track']['lineno']=27;
			$pyjs['track']['lineno']=28;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['SvgCircle'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=23;
		var $bases = new Array($m['Widget'],$m['Transform'],$m['Dimensions']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('SvgCircle', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=30;
	$m['SvgEllipse'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.svg';
		$pyjs['track']['lineno']=31;
		$cls_definition['_baseClass'] = 'ellipse';
		$pyjs['track']['lineno']=32;
		$cls_definition['_namespace'] = 'SVG';
		$pyjs['track']['lineno']=34;
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

			$pyjs['track']={'module':'html5.svg', 'lineno':34};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.svg';
			$pyjs['track']['lineno']=34;
			$pyjs['track']['lineno']=35;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['SvgEllipse'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=30;
		var $bases = new Array($m['Widget'],$m['Transform'],$m['Dimensions']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('SvgEllipse', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=37;
	$m['SvgG'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.svg';
		$pyjs['track']['lineno']=38;
		$cls_definition['_baseClass'] = 'g';
		$pyjs['track']['lineno']=39;
		$cls_definition['_namespace'] = 'SVG';
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

			$pyjs['track']={'module':'html5.svg', 'lineno':41};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.svg';
			$pyjs['track']['lineno']=41;
			$pyjs['track']['lineno']=42;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['SvgG'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=44;
		$method = $pyjs__bind_method2('_getTransform', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.svg', 'lineno':44};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.svg';
			$pyjs['track']['lineno']=44;
			$pyjs['track']['lineno']=45;
			$pyjs['track']['lineno']=45;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'transform');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getTransform'] = $method;
		$pyjs['track']['lineno']=46;
		$method = $pyjs__bind_method2('_setTransform', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.svg', 'lineno':46};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.svg';
			$pyjs['track']['lineno']=46;
			$pyjs['track']['lineno']=47;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['setAttribute']('transform', val);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setTransform'] = $method;
		$pyjs['track']['lineno']=37;
		var $bases = new Array($m['Widget'],$m['Transform'],$m['Styles']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('SvgG', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=49;
	$m['SvgImage'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.svg';
		$pyjs['track']['lineno']=50;
		$cls_definition['_baseClass'] = 'image';
		$pyjs['track']['lineno']=51;
		$cls_definition['_namespace'] = 'SVG';
		$pyjs['track']['lineno']=53;
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

			$pyjs['track']={'module':'html5.svg', 'lineno':53};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.svg';
			$pyjs['track']['lineno']=53;
			$pyjs['track']['lineno']=54;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['SvgImage'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=49;
		var $bases = new Array($m['Widget'],$m['ViewBox'],$m['Dimensions'],$m['Transform'],$m['Xlink']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('SvgImage', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=56;
	$m['SvgLine'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.svg';
		$pyjs['track']['lineno']=57;
		$cls_definition['_baseClass'] = 'line';
		$pyjs['track']['lineno']=58;
		$cls_definition['_namespace'] = 'SVG';
		$pyjs['track']['lineno']=60;
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

			$pyjs['track']={'module':'html5.svg', 'lineno':60};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.svg';
			$pyjs['track']['lineno']=60;
			$pyjs['track']['lineno']=61;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['SvgLine'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=56;
		var $bases = new Array($m['Widget'],$m['Transform'],$m['Points']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('SvgLine', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=63;
	$m['SvgPath'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.svg';
		$pyjs['track']['lineno']=64;
		$cls_definition['_baseClass'] = 'path';
		$pyjs['track']['lineno']=65;
		$cls_definition['_namespace'] = 'SVG';
		$pyjs['track']['lineno']=67;
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

			$pyjs['track']={'module':'html5.svg', 'lineno':67};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.svg';
			$pyjs['track']['lineno']=67;
			$pyjs['track']['lineno']=68;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['SvgPath'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=70;
		$method = $pyjs__bind_method2('_getD', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.svg', 'lineno':70};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.svg';
			$pyjs['track']['lineno']=70;
			$pyjs['track']['lineno']=71;
			$pyjs['track']['lineno']=71;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'd');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getD'] = $method;
		$pyjs['track']['lineno']=72;
		$method = $pyjs__bind_method2('_setD', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.svg', 'lineno':72};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.svg';
			$pyjs['track']['lineno']=72;
			$pyjs['track']['lineno']=73;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['setAttribute']('d', val);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setD'] = $method;
		$pyjs['track']['lineno']=75;
		$method = $pyjs__bind_method2('_getPathLength', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.svg', 'lineno':75};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.svg';
			$pyjs['track']['lineno']=75;
			$pyjs['track']['lineno']=76;
			$pyjs['track']['lineno']=76;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'pathLength');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getPathLength'] = $method;
		$pyjs['track']['lineno']=77;
		$method = $pyjs__bind_method2('_setPathLength', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.svg', 'lineno':77};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.svg';
			$pyjs['track']['lineno']=77;
			$pyjs['track']['lineno']=78;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['setAttribute']('pathLength', val);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setPathLength'] = $method;
		$pyjs['track']['lineno']=63;
		var $bases = new Array($m['Widget'],$m['Transform']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('SvgPath', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=81;
	$m['SvgPolygon'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.svg';
		$pyjs['track']['lineno']=82;
		$cls_definition['_baseClass'] = 'polygon';
		$pyjs['track']['lineno']=83;
		$cls_definition['_namespace'] = 'SVG';
		$pyjs['track']['lineno']=85;
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

			$pyjs['track']={'module':'html5.svg', 'lineno':85};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.svg';
			$pyjs['track']['lineno']=85;
			$pyjs['track']['lineno']=86;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['SvgPolygon'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=81;
		var $bases = new Array($m['Widget'],$m['Transform'],$m['Points']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('SvgPolygon', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=88;
	$m['SvgPolyline'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.svg';
		$pyjs['track']['lineno']=89;
		$cls_definition['_baseClass'] = 'polyline';
		$pyjs['track']['lineno']=90;
		$cls_definition['_namespace'] = 'SVG';
		$pyjs['track']['lineno']=92;
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

			$pyjs['track']={'module':'html5.svg', 'lineno':92};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.svg';
			$pyjs['track']['lineno']=92;
			$pyjs['track']['lineno']=93;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['SvgPolyline'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=88;
		var $bases = new Array($m['Widget'],$m['Transform'],$m['Points']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('SvgPolyline', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=95;
	$m['SvgRect'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.svg';
		$pyjs['track']['lineno']=96;
		$cls_definition['_baseClass'] = 'rect';
		$pyjs['track']['lineno']=97;
		$cls_definition['_namespace'] = 'SVG';
		$pyjs['track']['lineno']=99;
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

			$pyjs['track']={'module':'html5.svg', 'lineno':99};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.svg';
			$pyjs['track']['lineno']=99;
			$pyjs['track']['lineno']=100;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['SvgRect'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=95;
		var $bases = new Array($m['Widget'],$m['Dimensions'],$m['Transform'],$m['Styles']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('SvgRect', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=102;
	$m['SvgText'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.svg';
		$pyjs['track']['lineno']=103;
		$cls_definition['_baseClass'] = 'text';
		$pyjs['track']['lineno']=104;
		$cls_definition['_namespace'] = 'SVG';
		$pyjs['track']['lineno']=106;
		$method = $pyjs__bind_method2('__init__', function(text) {
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
				text = arguments[1];
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
				if (typeof text != 'undefined') {
					if (text !== null && typeof text['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = text;
						text = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}
			if (typeof text == 'undefined') text=arguments['callee']['__args__'][3][1];

			$pyjs['track']={'module':'html5.svg', 'lineno':106};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.svg';
			$pyjs['track']['lineno']=106;
			$pyjs['track']['lineno']=107;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['SvgText'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
			$pyjs['track']['lineno']=108;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
			return (typeof eval == "undefined"?$m['eval']:eval)((function(){try{try{$pyjs['in_try_except'] += 1;
			return "document.createTextNode('{}')"['format'](text);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['text', '']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=102;
		var $bases = new Array($m['Widget'],$m['Dimensions'],$m['Transform'],$m['Styles']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('SvgText', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end html5.svg */


/* end module: html5.svg */


/*
PYJS_DEPS: ['html5.widget.Widget', 'html5', 'html5.widget', 'html5.style.Style', 'html5.style', 'html5Attr.svg.ViewBox', 'html5Attr', 'html5Attr.svg', 'html5Attr.svg.Dimensions', 'html5Attr.svg.Styles', 'html5Attr.svg.Transform', 'html5Attr.svg.Points', 'html5Attr.svg.Xlink', 'html5Attr.href.Href', 'html5Attr.href']
*/
