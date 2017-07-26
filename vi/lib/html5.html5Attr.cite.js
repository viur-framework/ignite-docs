/* start module: html5.html5Attr.cite */
$pyjs['loaded_modules']['html5.html5Attr.cite'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['html5.html5Attr.cite']['__was_initialized__']) return $pyjs['loaded_modules']['html5.html5Attr.cite'];
	if(typeof $pyjs['loaded_modules']['html5.html5Attr'] == 'undefined' || !$pyjs['loaded_modules']['html5.html5Attr']['__was_initialized__']) $p['___import___']('html5.html5Attr', null);
	var $m = $pyjs['loaded_modules']['html5.html5Attr.cite'];
	$m['__repr__'] = function() { return '<module: html5.html5Attr.cite>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'html5.html5Attr.cite';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['html5.html5Attr']['cite'] = $pyjs['loaded_modules']['html5.html5Attr.cite'];
	$m.__track_lines__[1] = 'html5.html5Attr.cite.py, line 1:\n    class Cite(object):';
	$m.__track_lines__[2] = 'html5.html5Attr.cite.py, line 2:\n    def _getCite(self):';
	$m.__track_lines__[3] = 'html5.html5Attr.cite.py, line 3:\n    return self.element.cite';
	$m.__track_lines__[4] = 'html5.html5Attr.cite.py, line 4:\n    def _setCite(self,val):';
	$m.__track_lines__[5] = 'html5.html5Attr.cite.py, line 5:\n    self.element.cite=val';
	$m.__track_lines__[7] = 'html5.html5Attr.cite.py, line 7:\n    class Datetime(object):';
	$m.__track_lines__[8] = 'html5.html5Attr.cite.py, line 8:\n    def _getDatetime(self):';
	$m.__track_lines__[9] = 'html5.html5Attr.cite.py, line 9:\n    return self.element.datetime';
	$m.__track_lines__[10] = 'html5.html5Attr.cite.py, line 10:\n    def _setDatetime(self,val):';
	$m.__track_lines__[11] = 'html5.html5Attr.cite.py, line 11:\n    self.element.datetime=val';


	$pyjs['track']['module']='html5.html5Attr.cite';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=1;
	$m['Cite'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.html5Attr.cite';
		$pyjs['track']['lineno']=2;
		$method = $pyjs__bind_method2('_getCite', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.html5Attr.cite', 'lineno':2};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.cite';
			$pyjs['track']['lineno']=2;
			$pyjs['track']['lineno']=3;
			$pyjs['track']['lineno']=3;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'cite');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getCite'] = $method;
		$pyjs['track']['lineno']=4;
		$method = $pyjs__bind_method2('_setCite', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.html5Attr.cite', 'lineno':4};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.cite';
			$pyjs['track']['lineno']=4;
			$pyjs['track']['lineno']=5;
			$p['getattr'](self, 'element')['cite'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setCite'] = $method;
		$pyjs['track']['lineno']=1;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Cite', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=7;
	$m['Datetime'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.html5Attr.cite';
		$pyjs['track']['lineno']=8;
		$method = $pyjs__bind_method2('_getDatetime', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.html5Attr.cite', 'lineno':8};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.cite';
			$pyjs['track']['lineno']=8;
			$pyjs['track']['lineno']=9;
			$pyjs['track']['lineno']=9;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'element'), 'datetime');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getDatetime'] = $method;
		$pyjs['track']['lineno']=10;
		$method = $pyjs__bind_method2('_setDatetime', function(val) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				val = arguments[1];
			}

			$pyjs['track']={'module':'html5.html5Attr.cite', 'lineno':10};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.html5Attr.cite';
			$pyjs['track']['lineno']=10;
			$pyjs['track']['lineno']=11;
			$p['getattr'](self, 'element')['datetime'] = val;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['val']]);
		$cls_definition['_setDatetime'] = $method;
		$pyjs['track']['lineno']=7;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Datetime', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end html5.html5Attr.cite */


/* end module: html5.html5Attr.cite */


