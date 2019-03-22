/* start module: html5.html5Attr.media */
$pyjs['loaded_modules']['html5.html5Attr.media'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['html5.html5Attr.media']['__was_initialized__']) return $pyjs['loaded_modules']['html5.html5Attr.media'];
	if(typeof $pyjs['loaded_modules']['html5.html5Attr'] == 'undefined' || !$pyjs['loaded_modules']['html5.html5Attr']['__was_initialized__']) $p['___import___']('html5.html5Attr', null);
	var $m = $pyjs['loaded_modules']['html5.html5Attr.media'];
	$m['__repr__'] = function() { return '<module: html5.html5Attr.media>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'html5.html5Attr.media';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['html5.html5Attr']['media'] = $pyjs['loaded_modules']['html5.html5Attr.media'];
	$m.__track_lines__[1] = 'html5.html5Attr.media.py, line 1:\n    class Type(object):';
	$m.__track_lines__[2] = 'html5.html5Attr.media.py, line 2:\n    def _getType(self):';
	$m.__track_lines__[3] = 'html5.html5Attr.media.py, line 3:\n    return self.element.type';
	$m.__track_lines__[4] = 'html5.html5Attr.media.py, line 4:\n    def _setType(self,val):';
	$m.__track_lines__[5] = 'html5.html5Attr.media.py, line 5:\n    self.element.type=val';
	$m.__track_lines__[7] = 'html5.html5Attr.media.py, line 7:\n    class Media(Type):';
	$m.__track_lines__[8] = 'html5.html5Attr.media.py, line 8:\n    def _getMedia(self):';
	$m.__track_lines__[9] = 'html5.html5Attr.media.py, line 9:\n    return self.element.media';
	$m.__track_lines__[10] = 'html5.html5Attr.media.py, line 10:\n    def _setMedia(self,val):';
	$m.__track_lines__[11] = 'html5.html5Attr.media.py, line 11:\n    self.element.media=val';
	$m.__track_lines__[13] = 'html5.html5Attr.media.py, line 13:\n    class Dimensions(object):';
	$m.__track_lines__[14] = 'html5.html5Attr.media.py, line 14:\n    def _getWidth(self):';
	$m.__track_lines__[15] = 'html5.html5Attr.media.py, line 15:\n    return self.element.width';
	$m.__track_lines__[16] = 'html5.html5Attr.media.py, line 16:\n    def _setWidth(self,val):';
	$m.__track_lines__[17] = 'html5.html5Attr.media.py, line 17:\n    self.element.width=val';
	$m.__track_lines__[19] = 'html5.html5Attr.media.py, line 19:\n    def _getHeight(self):';
	$m.__track_lines__[20] = 'html5.html5Attr.media.py, line 20:\n    return self.element.height';
	$m.__track_lines__[21] = 'html5.html5Attr.media.py, line 21:\n    def _setHeight(self,val):';
	$m.__track_lines__[22] = 'html5.html5Attr.media.py, line 22:\n    self.element.height=val';
	$m.__track_lines__[24] = 'html5.html5Attr.media.py, line 24:\n    class Usemap(object):';
	$m.__track_lines__[25] = 'html5.html5Attr.media.py, line 25:\n    def _getUsemap(self):';
	$m.__track_lines__[26] = 'html5.html5Attr.media.py, line 26:\n    return self.element.usemap';
	$m.__track_lines__[27] = 'html5.html5Attr.media.py, line 27:\n    def _setUsemap(self,val):';
	$m.__track_lines__[28] = 'html5.html5Attr.media.py, line 28:\n    self.element.usemap=val';
	$m.__track_lines__[30] = 'html5.html5Attr.media.py, line 30:\n    class Multimedia(object):';
	$m.__track_lines__[31] = 'html5.html5Attr.media.py, line 31:\n    def _getAutoplay(self):';
	$m.__track_lines__[32] = 'html5.html5Attr.media.py, line 32:\n    return( True if self.element.hasAttribute("autoplay") else False )';
	$m.__track_lines__[33] = 'html5.html5Attr.media.py, line 33:\n    def _setAutoplay(self,val):';
	$m.__track_lines__[34] = 'html5.html5Attr.media.py, line 34:\n    if val==True:';
	$m.__track_lines__[35] = 'html5.html5Attr.media.py, line 35:\n    self.element.setAttribute("autoplay","")';
	$m.__track_lines__[37] = 'html5.html5Attr.media.py, line 37:\n    self.element.removeAttribute("autoplay")';
	$m.__track_lines__[39] = 'html5.html5Attr.media.py, line 39:\n    def _getControls(self):';
	$m.__track_lines__[40] = 'html5.html5Attr.media.py, line 40:\n    return( True if self.element.hasAttribute("controls") else False )';
	$m.__track_lines__[41] = 'html5.html5Attr.media.py, line 41:\n    def _setControls(self,val):';
	$m.__track_lines__[42] = 'html5.html5Attr.media.py, line 42:\n    if val==True:';
	$m.__track_lines__[43] = 'html5.html5Attr.media.py, line 43:\n    self.element.setAttribute("controls","")';
	$m.__track_lines__[45] = 'html5.html5Attr.media.py, line 45:\n    self.element.removeAttribute("controls")';
	$m.__track_lines__[47] = 'html5.html5Attr.media.py, line 47:\n    def _getLoop(self):';
	$m.__track_lines__[48] = 'html5.html5Attr.media.py, line 48:\n    return( True if self.element.hasAttribute("loop") else False )';
	$m.__track_lines__[49] = 'html5.html5Attr.media.py, line 49:\n    def _setLoop(self,val):';
	$m.__track_lines__[50] = 'html5.html5Attr.media.py, line 50:\n    if val==True:';
	$m.__track_lines__[51] = 'html5.html5Attr.media.py, line 51:\n    self.element.setAttribute("loop","")';
	$m.__track_lines__[53] = 'html5.html5Attr.media.py, line 53:\n    self.element.removeAttribute("loop")';
	$m.__track_lines__[55] = 'html5.html5Attr.media.py, line 55:\n    def _getMuted(self):';
	$m.__track_lines__[56] = 'html5.html5Attr.media.py, line 56:\n    return( True if self.element.hasAttribute("muted") else False )';
	$m.__track_lines__[57] = 'html5.html5Attr.media.py, line 57:\n    def _setMuted(self,val):';
	$m.__track_lines__[58] = 'html5.html5Attr.media.py, line 58:\n    if val==True:';
	$m.__track_lines__[59] = 'html5.html5Attr.media.py, line 59:\n    self.element.setAttribute("muted","")';
	$m.__track_lines__[61] = 'html5.html5Attr.media.py, line 61:\n    self.element.removeAttribute("muted")';
	$m.__track_lines__[63] = 'html5.html5Attr.media.py, line 63:\n    def _getPreload(self):';
	$m.__track_lines__[64] = 'html5.html5Attr.media.py, line 64:\n    return self.element.preload';
	$m.__track_lines__[65] = 'html5.html5Attr.media.py, line 65:\n    def _setPreload(self,val):';
	$m.__track_lines__[66] = 'html5.html5Attr.media.py, line 66:\n    self.element.preload=val';


	$pyjs['track']['module']='html5.html5Attr.media';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=1;
	$m['Type'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.html5Attr.media';
		$pyjs['track']['lineno']=2;
		$method = $pyjs__bind_method2('_getType', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.html5Attr.media', 'lineno':2};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.media';
			$pyjs['track']['lineno']=2;
			$pyjs['track']['lineno']=3;
			$pyjs['track']['lineno']=3;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'type');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getType'] = $method;
		$pyjs['track']['lineno']=4;
		$method = $pyjs__bind_method2('_setType', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.html5Attr.media', 'lineno':4};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.media';
			$pyjs['track']['lineno']=4;
			$pyjs['track']['lineno']=5;
			$p['getattr'](self, 'element')['type'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setType'] = $method;
		$pyjs['track']['lineno']=1;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Type', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=7;
	$m['Media'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.html5Attr.media';
		$pyjs['track']['lineno']=8;
		$method = $pyjs__bind_method2('_getMedia', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.html5Attr.media', 'lineno':8};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.media';
			$pyjs['track']['lineno']=8;
			$pyjs['track']['lineno']=9;
			$pyjs['track']['lineno']=9;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'media');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getMedia'] = $method;
		$pyjs['track']['lineno']=10;
		$method = $pyjs__bind_method2('_setMedia', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.html5Attr.media', 'lineno':10};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.media';
			$pyjs['track']['lineno']=10;
			$pyjs['track']['lineno']=11;
			$p['getattr'](self, 'element')['media'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setMedia'] = $method;
		$pyjs['track']['lineno']=7;
		var $bases = new Array($m['Type']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Media', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=13;
	$m['Dimensions'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.html5Attr.media';
		$pyjs['track']['lineno']=14;
		$method = $pyjs__bind_method2('_getWidth', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.html5Attr.media', 'lineno':14};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.media';
			$pyjs['track']['lineno']=14;
			$pyjs['track']['lineno']=15;
			$pyjs['track']['lineno']=15;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'width');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getWidth'] = $method;
		$pyjs['track']['lineno']=16;
		$method = $pyjs__bind_method2('_setWidth', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.html5Attr.media', 'lineno':16};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.media';
			$pyjs['track']['lineno']=16;
			$pyjs['track']['lineno']=17;
			$p['getattr'](self, 'element')['width'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setWidth'] = $method;
		$pyjs['track']['lineno']=19;
		$method = $pyjs__bind_method2('_getHeight', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.html5Attr.media', 'lineno':19};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.media';
			$pyjs['track']['lineno']=19;
			$pyjs['track']['lineno']=20;
			$pyjs['track']['lineno']=20;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'height');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getHeight'] = $method;
		$pyjs['track']['lineno']=21;
		$method = $pyjs__bind_method2('_setHeight', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.html5Attr.media', 'lineno':21};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.media';
			$pyjs['track']['lineno']=21;
			$pyjs['track']['lineno']=22;
			$p['getattr'](self, 'element')['height'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setHeight'] = $method;
		$pyjs['track']['lineno']=13;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Dimensions', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=24;
	$m['Usemap'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.html5Attr.media';
		$pyjs['track']['lineno']=25;
		$method = $pyjs__bind_method2('_getUsemap', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.html5Attr.media', 'lineno':25};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.media';
			$pyjs['track']['lineno']=25;
			$pyjs['track']['lineno']=26;
			$pyjs['track']['lineno']=26;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'usemap');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getUsemap'] = $method;
		$pyjs['track']['lineno']=27;
		$method = $pyjs__bind_method2('_setUsemap', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.html5Attr.media', 'lineno':27};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.media';
			$pyjs['track']['lineno']=27;
			$pyjs['track']['lineno']=28;
			$p['getattr'](self, 'element')['usemap'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setUsemap'] = $method;
		$pyjs['track']['lineno']=24;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Usemap', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=30;
	$m['Multimedia'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.html5Attr.media';
		$pyjs['track']['lineno']=31;
		$method = $pyjs__bind_method2('_getAutoplay', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.html5Attr.media', 'lineno':31};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.media';
			$pyjs['track']['lineno']=31;
			$pyjs['track']['lineno']=32;
			$pyjs['track']['lineno']=32;
			var $pyjs__ret = ($p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['hasAttribute']('autoplay');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})())? (true) : (false));
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getAutoplay'] = $method;
		$pyjs['track']['lineno']=33;
		$method = $pyjs__bind_method2('_setAutoplay', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.html5Attr.media', 'lineno':33};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.media';
			$pyjs['track']['lineno']=33;
			$pyjs['track']['lineno']=34;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](val, true));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})()) {
				$pyjs['track']['lineno']=35;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['element']['setAttribute']('autoplay', '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=37;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['element']['removeAttribute']('autoplay');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setAutoplay'] = $method;
		$pyjs['track']['lineno']=39;
		$method = $pyjs__bind_method2('_getControls', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.html5Attr.media', 'lineno':39};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.media';
			$pyjs['track']['lineno']=39;
			$pyjs['track']['lineno']=40;
			$pyjs['track']['lineno']=40;
			var $pyjs__ret = ($p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['hasAttribute']('controls');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})())? (true) : (false));
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getControls'] = $method;
		$pyjs['track']['lineno']=41;
		$method = $pyjs__bind_method2('_setControls', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.html5Attr.media', 'lineno':41};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.media';
			$pyjs['track']['lineno']=41;
			$pyjs['track']['lineno']=42;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](val, true));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})()) {
				$pyjs['track']['lineno']=43;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['element']['setAttribute']('controls', '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=45;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['element']['removeAttribute']('controls');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setControls'] = $method;
		$pyjs['track']['lineno']=47;
		$method = $pyjs__bind_method2('_getLoop', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.html5Attr.media', 'lineno':47};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.media';
			$pyjs['track']['lineno']=47;
			$pyjs['track']['lineno']=48;
			$pyjs['track']['lineno']=48;
			var $pyjs__ret = ($p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['hasAttribute']('loop');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})())? (true) : (false));
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getLoop'] = $method;
		$pyjs['track']['lineno']=49;
		$method = $pyjs__bind_method2('_setLoop', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.html5Attr.media', 'lineno':49};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.media';
			$pyjs['track']['lineno']=49;
			$pyjs['track']['lineno']=50;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](val, true));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})()) {
				$pyjs['track']['lineno']=51;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['element']['setAttribute']('loop', '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=53;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['element']['removeAttribute']('loop');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setLoop'] = $method;
		$pyjs['track']['lineno']=55;
		$method = $pyjs__bind_method2('_getMuted', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.html5Attr.media', 'lineno':55};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.media';
			$pyjs['track']['lineno']=55;
			$pyjs['track']['lineno']=56;
			$pyjs['track']['lineno']=56;
			var $pyjs__ret = ($p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['hasAttribute']('muted');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})())? (true) : (false));
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getMuted'] = $method;
		$pyjs['track']['lineno']=57;
		$method = $pyjs__bind_method2('_setMuted', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.html5Attr.media', 'lineno':57};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.media';
			$pyjs['track']['lineno']=57;
			$pyjs['track']['lineno']=58;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](val, true));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})()) {
				$pyjs['track']['lineno']=59;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['element']['setAttribute']('muted', '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=61;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['element']['removeAttribute']('muted');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setMuted'] = $method;
		$pyjs['track']['lineno']=63;
		$method = $pyjs__bind_method2('_getPreload', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.html5Attr.media', 'lineno':63};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.media';
			$pyjs['track']['lineno']=63;
			$pyjs['track']['lineno']=64;
			$pyjs['track']['lineno']=64;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'preload');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getPreload'] = $method;
		$pyjs['track']['lineno']=65;
		$method = $pyjs__bind_method2('_setPreload', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.html5Attr.media', 'lineno':65};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.media';
			$pyjs['track']['lineno']=65;
			$pyjs['track']['lineno']=66;
			$p['getattr'](self, 'element')['preload'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setPreload'] = $method;
		$pyjs['track']['lineno']=30;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Multimedia', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end html5.html5Attr.media */


/* end module: html5.html5Attr.media */


