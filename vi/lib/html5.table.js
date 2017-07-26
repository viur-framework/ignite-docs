/* start module: html5.table */
$pyjs['loaded_modules']['html5.table'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['html5.table']['__was_initialized__']) return $pyjs['loaded_modules']['html5.table'];
	if(typeof $pyjs['loaded_modules']['html5'] == 'undefined' || !$pyjs['loaded_modules']['html5']['__was_initialized__']) $p['___import___']('html5', null);
	var $m = $pyjs['loaded_modules']['html5.table'];
	$m['__repr__'] = function() { return '<module: html5.table>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'html5.table';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['html5']['table'] = $pyjs['loaded_modules']['html5.table'];
	$m.__track_lines__[1] = 'html5.table.py, line 1:\n    from html5.widget import Widget';
	$m.__track_lines__[2] = 'html5.table.py, line 2:\n    from html5 import TextNode';
	$m.__track_lines__[4] = 'html5.table.py, line 4:\n    class Tr(Widget):';
	$m.__track_lines__[5] = 'html5.table.py, line 5:\n    _baseClass = "tr"';
	$m.__track_lines__[7] = 'html5.table.py, line 7:\n    def _getRowspan(self):';
	$m.__track_lines__[8] = 'html5.table.py, line 8:\n    span = self.element.getAttribute("rowspan")';
	$m.__track_lines__[9] = 'html5.table.py, line 9:\n    return span if span else 1';
	$m.__track_lines__[11] = 'html5.table.py, line 11:\n    def _setRowspan(self, span):';
	$m.__track_lines__[12] = 'html5.table.py, line 12:\n    assert span >= 1, "span may not be negative"';
	$m.__track_lines__[13] = 'html5.table.py, line 13:\n    self.element.setAttribute("rowspan", span)';
	$m.__track_lines__[14] = 'html5.table.py, line 14:\n    return self';
	$m.__track_lines__[16] = 'html5.table.py, line 16:\n    class Th(Widget):';
	$m.__track_lines__[17] = 'html5.table.py, line 17:\n    _baseClass = "th"';
	$m.__track_lines__[19] = 'html5.table.py, line 19:\n    def _getRowspan(self):';
	$m.__track_lines__[20] = 'html5.table.py, line 20:\n    span = self.element.getAttribute("rowspan")';
	$m.__track_lines__[21] = 'html5.table.py, line 21:\n    return span if span else 1';
	$m.__track_lines__[23] = 'html5.table.py, line 23:\n    def _setRowspan(self, span):';
	$m.__track_lines__[24] = 'html5.table.py, line 24:\n    assert span >= 1, "span may not be negative"';
	$m.__track_lines__[25] = 'html5.table.py, line 25:\n    self.element.setAttribute("rowspan", span)';
	$m.__track_lines__[26] = 'html5.table.py, line 26:\n    return self';
	$m.__track_lines__[28] = 'html5.table.py, line 28:\n    class Td(Widget):';
	$m.__track_lines__[29] = 'html5.table.py, line 29:\n    _baseClass = "td"';
	$m.__track_lines__[31] = 'html5.table.py, line 31:\n    def _getColspan(self):';
	$m.__track_lines__[32] = 'html5.table.py, line 32:\n    span = self.element.getAttribute("colspan")';
	$m.__track_lines__[33] = 'html5.table.py, line 33:\n    return span if span else 1';
	$m.__track_lines__[35] = 'html5.table.py, line 35:\n    def _setColspan(self, span):';
	$m.__track_lines__[36] = 'html5.table.py, line 36:\n    assert span >= 1, "span may not be negative"';
	$m.__track_lines__[37] = 'html5.table.py, line 37:\n    self.element.setAttribute("colspan", span)';
	$m.__track_lines__[38] = 'html5.table.py, line 38:\n    return self';
	$m.__track_lines__[40] = 'html5.table.py, line 40:\n    def _getRowspan(self):';
	$m.__track_lines__[41] = 'html5.table.py, line 41:\n    span = self.element.getAttribute("rowspan")';
	$m.__track_lines__[42] = 'html5.table.py, line 42:\n    return span if span else 1';
	$m.__track_lines__[44] = 'html5.table.py, line 44:\n    def _setRowspan(self, span):';
	$m.__track_lines__[45] = 'html5.table.py, line 45:\n    assert span >= 1, "span may not be negative"';
	$m.__track_lines__[46] = 'html5.table.py, line 46:\n    self.element.setAttribute("rowspan", span)';
	$m.__track_lines__[47] = 'html5.table.py, line 47:\n    return self';
	$m.__track_lines__[49] = 'html5.table.py, line 49:\n    class Thead(Widget):';
	$m.__track_lines__[50] = 'html5.table.py, line 50:\n    _baseClass = "thead"';
	$m.__track_lines__[52] = 'html5.table.py, line 52:\n    class Tbody(Widget):';
	$m.__track_lines__[53] = 'html5.table.py, line 53:\n    _baseClass = "tbody"';
	$m.__track_lines__[55] = 'html5.table.py, line 55:\n    class ColWrapper(object):';
	$m.__track_lines__[56] = 'html5.table.py, line 56:\n    def __init__(self, parentElem, *args, **kwargs):';
	$m.__track_lines__[57] = 'html5.table.py, line 57:\n    super(ColWrapper, self).__init__(*args, **kwargs)';
	$m.__track_lines__[58] = 'html5.table.py, line 58:\n    self.parentElem = parentElem';
	$m.__track_lines__[60] = 'html5.table.py, line 60:\n    def __getitem__(self, item):';
	$m.__track_lines__[61] = 'html5.table.py, line 61:\n    assert isinstance(item, int), "Invalid col-number. Expected int, got %s" % str(type(item))';
	$m.__track_lines__[62] = 'html5.table.py, line 62:\n    if item < 0 or item > len(self.parentElem._children):';
	$m.__track_lines__[63] = 'html5.table.py, line 63:\n    return None';
	$m.__track_lines__[65] = 'html5.table.py, line 65:\n    return self.parentElem._children[item]';
	$m.__track_lines__[67] = 'html5.table.py, line 67:\n    def __setitem__(self, key, value):';
	$m.__track_lines__[68] = 'html5.table.py, line 68:\n    col = self[key]';
	$m.__track_lines__[69] = 'html5.table.py, line 69:\n    assert col is not None, "Cannot assign widget to invalid column"';
	$m.__track_lines__[71] = 'html5.table.py, line 71:\n    col.removeAllChildren()';
	$m.__track_lines__[72] = 'html5.table.py, line 72:\n    if isinstance(value, Widget) or isinstance(value, TextNode):';
	$m.__track_lines__[73] = 'html5.table.py, line 73:\n    col.appendChild(value)';
	$m.__track_lines__[75] = 'html5.table.py, line 75:\n    class RowWrapper(object):';
	$m.__track_lines__[76] = 'html5.table.py, line 76:\n    def __init__(self, parentElem, *args, **kwargs):';
	$m.__track_lines__[77] = 'html5.table.py, line 77:\n    super(RowWrapper, self).__init__(*args, **kwargs)';
	$m.__track_lines__[78] = 'html5.table.py, line 78:\n    self.parentElem = parentElem';
	$m.__track_lines__[80] = 'html5.table.py, line 80:\n    def __getitem__(self, item):';
	$m.__track_lines__[81] = 'html5.table.py, line 81:\n    assert isinstance(item, int), "Invalid row-number. Expected int, got %s" % str(type(item))';
	$m.__track_lines__[82] = 'html5.table.py, line 82:\n    if item < 0 or item > len(self.parentElem._children):';
	$m.__track_lines__[83] = 'html5.table.py, line 83:\n    return None';
	$m.__track_lines__[85] = 'html5.table.py, line 85:\n    return ColWrapper(self.parentElem._children[item])';
	$m.__track_lines__[88] = 'html5.table.py, line 88:\n    class Table(Widget):';
	$m.__track_lines__[89] = 'html5.table.py, line 89:\n    _baseClass = "table"';
	$m.__track_lines__[91] = 'html5.table.py, line 91:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[92] = 'html5.table.py, line 92:\n    super(Table, self).__init__(*args, **kwargs)';
	$m.__track_lines__[93] = 'html5.table.py, line 93:\n    self.head = Thead()';
	$m.__track_lines__[94] = 'html5.table.py, line 94:\n    self.body = Tbody()';
	$m.__track_lines__[95] = 'html5.table.py, line 95:\n    self.appendChild(self.head)';
	$m.__track_lines__[96] = 'html5.table.py, line 96:\n    self.appendChild(self.body)';
	$m.__track_lines__[98] = 'html5.table.py, line 98:\n    def prepareRow(self, row):';
	$m.__track_lines__[99] = 'html5.table.py, line 99:\n    assert row >= 0, "Cannot create rows with negative index"';
	$m.__track_lines__[101] = 'html5.table.py, line 101:\n    for child in self.body._children:';
	$m.__track_lines__[102] = 'html5.table.py, line 102:\n    row -= child["rowspan"]';
	$m.__track_lines__[103] = 'html5.table.py, line 103:\n    if row < 0:';
	$m.__track_lines__[104] = 'html5.table.py, line 104:\n    return';
	$m.__track_lines__[106] = 'html5.table.py, line 106:\n    while row >= 0:';
	$m.__track_lines__[107] = 'html5.table.py, line 107:\n    self.body.appendChild(Tr())';
	$m.__track_lines__[108] = 'html5.table.py, line 108:\n    row -= 1';
	$m.__track_lines__[110] = 'html5.table.py, line 110:\n    def prepareCol(self, row, col ):';
	$m.__track_lines__[111] = 'html5.table.py, line 111:\n    assert col >= 0, "Cannot create cols with negative index"';
	$m.__track_lines__[112] = 'html5.table.py, line 112:\n    self.prepareRow(row)';
	$m.__track_lines__[114] = 'html5.table.py, line 114:\n    for rowChild in self.body._children:';
	$m.__track_lines__[115] = 'html5.table.py, line 115:\n    row -= rowChild["rowspan"]';
	$m.__track_lines__[117] = 'html5.table.py, line 117:\n    if row < 0:';
	$m.__track_lines__[118] = 'html5.table.py, line 118:\n    for colChild in rowChild._children:';
	$m.__track_lines__[119] = 'html5.table.py, line 119:\n    col -= colChild["colspan"]';
	$m.__track_lines__[120] = 'html5.table.py, line 120:\n    if col < 0:';
	$m.__track_lines__[121] = 'html5.table.py, line 121:\n    return';
	$m.__track_lines__[123] = 'html5.table.py, line 123:\n    while col>=0:';
	$m.__track_lines__[124] = 'html5.table.py, line 124:\n    rowChild.appendChild( Td() )';
	$m.__track_lines__[125] = 'html5.table.py, line 125:\n    col -= 1';
	$m.__track_lines__[127] = 'html5.table.py, line 127:\n    return';
	$m.__track_lines__[129] = 'html5.table.py, line 129:\n    def prepareGrid(self, rows, cols):';
	$m.__track_lines__[130] = 'html5.table.py, line 130:\n    for row in range(self.getRowCount(), self.getRowCount() + rows):';
	$m.__track_lines__[131] = 'html5.table.py, line 131:\n    self.prepareCol( row, cols )';
	$m.__track_lines__[133] = 'html5.table.py, line 133:\n    def clear(self):';
	$m.__track_lines__[134] = 'html5.table.py, line 134:\n    for row in self.body._children[:]:';
	$m.__track_lines__[136] = 'html5.table.py, line 136:\n    for col in row._children[:]:';
	$m.__track_lines__[137] = 'html5.table.py, line 137:\n    row.removeChild(col)';
	$m.__track_lines__[139] = 'html5.table.py, line 139:\n    self.body.removeChild(row)';
	$m.__track_lines__[141] = 'html5.table.py, line 141:\n    def _getCell(self):';
	$m.__track_lines__[142] = 'html5.table.py, line 142:\n    return RowWrapper(self.body)';
	$m.__track_lines__[144] = 'html5.table.py, line 144:\n    def getRowCount(self):';
	$m.__track_lines__[145] = 'html5.table.py, line 145:\n    cnt = 0';
	$m.__track_lines__[147] = 'html5.table.py, line 147:\n    for tr in self.body._children:';
	$m.__track_lines__[148] = 'html5.table.py, line 148:\n    cnt += tr["rowspan"]';
	$m.__track_lines__[150] = 'html5.table.py, line 150:\n    return cnt';


	$pyjs['track']['module']='html5.table';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=1;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Widget'] = $p['___import___']('html5.widget.Widget', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=2;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['TextNode'] = $p['___import___']('html5.TextNode', 'html5', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=4;
	$m['Tr'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.table';
		$pyjs['track']['lineno']=5;
		$cls_definition['_baseClass'] = 'tr';
		$pyjs['track']['lineno']=7;
		$method = $pyjs__bind_method2('_getRowspan', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var span;
			$pyjs['track']={'module':'html5.table', 'lineno':7};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.table';
			$pyjs['track']['lineno']=7;
			$pyjs['track']['lineno']=8;
			span = (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['getAttribute']('rowspan');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})();
			$pyjs['track']['lineno']=9;
			$pyjs['track']['lineno']=9;
			var $pyjs__ret = ($p['bool'](span)? (span) : (1));
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getRowspan'] = $method;
		$pyjs['track']['lineno']=11;
		$method = $pyjs__bind_method2('_setRowspan', function(span) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				span = arguments[1];
			}

			$pyjs['track']={'module':'html5.table', 'lineno':11};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.table';
			$pyjs['track']['lineno']=11;
			$pyjs['track']['lineno']=12;
			if (!( ((($p['cmp'](span, 1))|1) == 1) )) {
			   throw $p['AssertionError']('span may not be negative');
			 }
			$pyjs['track']['lineno']=13;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['setAttribute']('rowspan', span);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs['track']['lineno']=14;
			$pyjs['track']['lineno']=14;
			var $pyjs__ret = self;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['span']]);
		$cls_definition['_setRowspan'] = $method;
		$pyjs['track']['lineno']=4;
		var $bases = new Array($m['Widget']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Tr', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=16;
	$m['Th'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.table';
		$pyjs['track']['lineno']=17;
		$cls_definition['_baseClass'] = 'th';
		$pyjs['track']['lineno']=19;
		$method = $pyjs__bind_method2('_getRowspan', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var span;
			$pyjs['track']={'module':'html5.table', 'lineno':19};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.table';
			$pyjs['track']['lineno']=19;
			$pyjs['track']['lineno']=20;
			span = (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['getAttribute']('rowspan');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			$pyjs['track']['lineno']=21;
			$pyjs['track']['lineno']=21;
			var $pyjs__ret = ($p['bool'](span)? (span) : (1));
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getRowspan'] = $method;
		$pyjs['track']['lineno']=23;
		$method = $pyjs__bind_method2('_setRowspan', function(span) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				span = arguments[1];
			}

			$pyjs['track']={'module':'html5.table', 'lineno':23};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.table';
			$pyjs['track']['lineno']=23;
			$pyjs['track']['lineno']=24;
			if (!( ((($p['cmp'](span, 1))|1) == 1) )) {
			   throw $p['AssertionError']('span may not be negative');
			 }
			$pyjs['track']['lineno']=25;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['setAttribute']('rowspan', span);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
			$pyjs['track']['lineno']=26;
			$pyjs['track']['lineno']=26;
			var $pyjs__ret = self;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['span']]);
		$cls_definition['_setRowspan'] = $method;
		$pyjs['track']['lineno']=16;
		var $bases = new Array($m['Widget']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Th', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=28;
	$m['Td'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.table';
		$pyjs['track']['lineno']=29;
		$cls_definition['_baseClass'] = 'td';
		$pyjs['track']['lineno']=31;
		$method = $pyjs__bind_method2('_getColspan', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var span;
			$pyjs['track']={'module':'html5.table', 'lineno':31};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.table';
			$pyjs['track']['lineno']=31;
			$pyjs['track']['lineno']=32;
			span = (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['getAttribute']('colspan');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
			$pyjs['track']['lineno']=33;
			$pyjs['track']['lineno']=33;
			var $pyjs__ret = ($p['bool'](span)? (span) : (1));
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getColspan'] = $method;
		$pyjs['track']['lineno']=35;
		$method = $pyjs__bind_method2('_setColspan', function(span) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				span = arguments[1];
			}

			$pyjs['track']={'module':'html5.table', 'lineno':35};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.table';
			$pyjs['track']['lineno']=35;
			$pyjs['track']['lineno']=36;
			if (!( ((($p['cmp'](span, 1))|1) == 1) )) {
			   throw $p['AssertionError']('span may not be negative');
			 }
			$pyjs['track']['lineno']=37;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['setAttribute']('colspan', span);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
			$pyjs['track']['lineno']=38;
			$pyjs['track']['lineno']=38;
			var $pyjs__ret = self;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['span']]);
		$cls_definition['_setColspan'] = $method;
		$pyjs['track']['lineno']=40;
		$method = $pyjs__bind_method2('_getRowspan', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var span;
			$pyjs['track']={'module':'html5.table', 'lineno':40};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.table';
			$pyjs['track']['lineno']=40;
			$pyjs['track']['lineno']=41;
			span = (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['getAttribute']('rowspan');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
			$pyjs['track']['lineno']=42;
			$pyjs['track']['lineno']=42;
			var $pyjs__ret = ($p['bool'](span)? (span) : (1));
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getRowspan'] = $method;
		$pyjs['track']['lineno']=44;
		$method = $pyjs__bind_method2('_setRowspan', function(span) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				span = arguments[1];
			}

			$pyjs['track']={'module':'html5.table', 'lineno':44};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.table';
			$pyjs['track']['lineno']=44;
			$pyjs['track']['lineno']=45;
			if (!( ((($p['cmp'](span, 1))|1) == 1) )) {
			   throw $p['AssertionError']('span may not be negative');
			 }
			$pyjs['track']['lineno']=46;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['element']['setAttribute']('rowspan', span);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
			$pyjs['track']['lineno']=47;
			$pyjs['track']['lineno']=47;
			var $pyjs__ret = self;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['span']]);
		$cls_definition['_setRowspan'] = $method;
		$pyjs['track']['lineno']=28;
		var $bases = new Array($m['Widget']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Td', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=49;
	$m['Thead'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.table';
		$pyjs['track']['lineno']=50;
		$cls_definition['_baseClass'] = 'thead';
		$pyjs['track']['lineno']=49;
		var $bases = new Array($m['Widget']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Thead', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=52;
	$m['Tbody'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.table';
		$pyjs['track']['lineno']=53;
		$cls_definition['_baseClass'] = 'tbody';
		$pyjs['track']['lineno']=52;
		var $bases = new Array($m['Widget']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Tbody', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=55;
	$m['ColWrapper'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.table';
		$pyjs['track']['lineno']=56;
		$method = $pyjs__bind_method2('__init__', function(parentElem) {
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
				parentElem = arguments[1];
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
				if (typeof parentElem != 'undefined') {
					if (parentElem !== null && typeof parentElem['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = parentElem;
						parentElem = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}

			$pyjs['track']={'module':'html5.table', 'lineno':56};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.table';
			$pyjs['track']['lineno']=56;
			$pyjs['track']['lineno']=57;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['ColWrapper'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
			$pyjs['track']['lineno']=58;
			self['parentElem'] = parentElem;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['parentElem']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=60;
		$method = $pyjs__bind_method2('__getitem__', function(item) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				item = arguments[1];
			}
			var $or1,$or2;
			$pyjs['track']={'module':'html5.table', 'lineno':60};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.table';
			$pyjs['track']['lineno']=60;
			$pyjs['track']['lineno']=61;
			if (!( (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance'](item, $p['float_int']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})() )) {
			   throw $p['AssertionError']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('Invalid col-number. Expected int, got %s', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['str']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['type'](item);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})());
			 }
			$pyjs['track']['lineno']=62;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($or1=($p['cmp'](item, 0) == -1))?$or1:($p['cmp'](item, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len']($p['getattr']($p['getattr'](self, 'parentElem'), '_children'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})()) == 1)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})()) {
				$pyjs['track']['lineno']=63;
				$pyjs['track']['lineno']=63;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=65;
			$pyjs['track']['lineno']=65;
			var $pyjs__ret = $p['getattr']($p['getattr'](self, 'parentElem'), '_children')['__getitem__'](item);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['item']]);
		$cls_definition['__getitem__'] = $method;
		$pyjs['track']['lineno']=67;
		$method = $pyjs__bind_method2('__setitem__', function(key, value) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
				value = arguments[2];
			}
			var $or4,$or3,col;
			$pyjs['track']={'module':'html5.table', 'lineno':67};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.table';
			$pyjs['track']['lineno']=67;
			$pyjs['track']['lineno']=68;
			col = self['__getitem__'](key);
			$pyjs['track']['lineno']=69;
			if (!( (col !== null) )) {
			   throw $p['AssertionError']('Cannot assign widget to invalid column');
			 }
			$pyjs['track']['lineno']=71;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return col['removeAllChildren']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
			$pyjs['track']['lineno']=72;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($or3=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance'](value, $m['Widget']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})())?$or3:(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance'](value, $m['TextNode']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})()) {
				$pyjs['track']['lineno']=73;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return col['appendChild'](value);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['key'],['value']]);
		$cls_definition['__setitem__'] = $method;
		$pyjs['track']['lineno']=55;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('ColWrapper', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=75;
	$m['RowWrapper'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.table';
		$pyjs['track']['lineno']=76;
		$method = $pyjs__bind_method2('__init__', function(parentElem) {
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
				parentElem = arguments[1];
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
				if (typeof parentElem != 'undefined') {
					if (parentElem !== null && typeof parentElem['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = parentElem;
						parentElem = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}

			$pyjs['track']={'module':'html5.table', 'lineno':76};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.table';
			$pyjs['track']['lineno']=76;
			$pyjs['track']['lineno']=77;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['RowWrapper'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
			$pyjs['track']['lineno']=78;
			self['parentElem'] = parentElem;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['parentElem']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=80;
		$method = $pyjs__bind_method2('__getitem__', function(item) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				item = arguments[1];
			}
			var $or5,$or6;
			$pyjs['track']={'module':'html5.table', 'lineno':80};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.table';
			$pyjs['track']['lineno']=80;
			$pyjs['track']['lineno']=81;
			if (!( (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance'](item, $p['float_int']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})() )) {
			   throw $p['AssertionError']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('Invalid row-number. Expected int, got %s', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['str']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['type'](item);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})());
			 }
			$pyjs['track']['lineno']=82;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($or5=($p['cmp'](item, 0) == -1))?$or5:($p['cmp'](item, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len']($p['getattr']($p['getattr'](self, 'parentElem'), '_children'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})()) == 1)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})()) {
				$pyjs['track']['lineno']=83;
				$pyjs['track']['lineno']=83;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=85;
			$pyjs['track']['lineno']=85;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['ColWrapper']($p['getattr']($p['getattr'](self, 'parentElem'), '_children')['__getitem__'](item));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['item']]);
		$cls_definition['__getitem__'] = $method;
		$pyjs['track']['lineno']=75;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('RowWrapper', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=88;
	$m['Table'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'html5.table';
		$pyjs['track']['lineno']=89;
		$cls_definition['_baseClass'] = 'table';
		$pyjs['track']['lineno']=91;
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

			$pyjs['track']={'module':'html5.table', 'lineno':91};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.table';
			$pyjs['track']['lineno']=91;
			$pyjs['track']['lineno']=92;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['Table'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
			$pyjs['track']['lineno']=93;
			self['head'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['Thead']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
			$pyjs['track']['lineno']=94;
			self['body'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['Tbody']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})();
			$pyjs['track']['lineno']=95;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'head'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})();
			$pyjs['track']['lineno']=96;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'body'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=98;
		$method = $pyjs__bind_method2('prepareRow', function(row) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
			}
			var $iter1_nextval,$iter1_type,$iter1_idx,$pyjs__trackstack_size_1,$iter1_iter,$iter1_array,child,$sub3,$sub2,$sub1,$sub4;
			$pyjs['track']={'module':'html5.table', 'lineno':98};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.table';
			$pyjs['track']['lineno']=98;
			$pyjs['track']['lineno']=99;
			if (!( ((($p['cmp'](row, 0))|1) == 1) )) {
			   throw $p['AssertionError']('Cannot create rows with negative index');
			 }
			$pyjs['track']['lineno']=101;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter1_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr']($p['getattr'](self, 'body'), '_children');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})();
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				child = $iter1_nextval['$nextval'];
				$pyjs['track']['lineno']=102;
				row = $p['__op_sub']($sub1=row,$sub2=child['__getitem__']('rowspan'));
				$pyjs['track']['lineno']=103;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['cmp'](row, 0) == -1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})()) {
					$pyjs['track']['lineno']=104;
					$pyjs['track']['lineno']=104;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='html5.table';
			$pyjs['track']['lineno']=106;
			while ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](((($p['cmp'](row, 0))|1) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})()) {
				$pyjs['track']['lineno']=107;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['body']['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['Tr']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})();
				$pyjs['track']['lineno']=108;
				row = $p['__op_sub']($sub3=row,$sub4=1);
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['row']]);
		$cls_definition['prepareRow'] = $method;
		$pyjs['track']['lineno']=110;
		$method = $pyjs__bind_method2('prepareCol', function(row, col) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				col = arguments[2];
			}
			var $iter3_type,rowChild,$iter3_idx,$iter2_iter,$sub9,$sub8,$iter3_iter,$sub7,$sub6,$sub5,$iter2_type,colChild,$sub10,$iter2_idx,$iter3_array,$iter2_nextval,$pyjs__trackstack_size_2,$pyjs__trackstack_size_1,$iter3_nextval,$iter2_array;
			$pyjs['track']={'module':'html5.table', 'lineno':110};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.table';
			$pyjs['track']['lineno']=110;
			$pyjs['track']['lineno']=111;
			if (!( ((($p['cmp'](col, 0))|1) == 1) )) {
			   throw $p['AssertionError']('Cannot create cols with negative index');
			 }
			$pyjs['track']['lineno']=112;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['prepareRow'](row);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})();
			$pyjs['track']['lineno']=114;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter2_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr']($p['getattr'](self, 'body'), '_children');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})();
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				rowChild = $iter2_nextval['$nextval'];
				$pyjs['track']['lineno']=115;
				row = $p['__op_sub']($sub5=row,$sub6=rowChild['__getitem__']('rowspan'));
				$pyjs['track']['lineno']=117;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['cmp'](row, 0) == -1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})()) {
					$pyjs['track']['lineno']=118;
					$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
					$iter3_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](rowChild, '_children');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})();
					$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
					while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
						colChild = $iter3_nextval['$nextval'];
						$pyjs['track']['lineno']=119;
						col = $p['__op_sub']($sub7=col,$sub8=colChild['__getitem__']('colspan'));
						$pyjs['track']['lineno']=120;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](($p['cmp'](col, 0) == -1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})()) {
							$pyjs['track']['lineno']=121;
							$pyjs['track']['lineno']=121;
							var $pyjs__ret = null;
							$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
							return $pyjs__ret;
						}
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='html5.table';
					$pyjs['track']['lineno']=123;
					while ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](((($p['cmp'](col, 0))|1) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})()) {
						$pyjs['track']['lineno']=124;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return rowChild['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $m['Td']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})();
						$pyjs['track']['lineno']=125;
						col = $p['__op_sub']($sub9=col,$sub10=1);
					}
					$pyjs['track']['lineno']=127;
					$pyjs['track']['lineno']=127;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='html5.table';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['row'],['col']]);
		$cls_definition['prepareCol'] = $method;
		$pyjs['track']['lineno']=129;
		$method = $pyjs__bind_method2('prepareGrid', function(rows, cols) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rows = arguments[1];
				cols = arguments[2];
			}
			var $add2,$iter4_nextval,$iter4_idx,$add1,$iter4_type,$pyjs__trackstack_size_1,$iter4_array,$iter4_iter,row;
			$pyjs['track']={'module':'html5.table', 'lineno':129};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.table';
			$pyjs['track']['lineno']=129;
			$pyjs['track']['lineno']=130;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter4_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['range']((function(){try{try{$pyjs['in_try_except'] += 1;
			return self['getRowCount']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})(), $p['__op_add']($add1=(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['getRowCount']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})(),$add2=rows));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})();
			$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
			while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
				row = $iter4_nextval['$nextval'];
				$pyjs['track']['lineno']=131;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['prepareCol'](row, cols);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='html5.table';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['rows'],['cols']]);
		$cls_definition['prepareGrid'] = $method;
		$pyjs['track']['lineno']=133;
		$method = $pyjs__bind_method2('clear', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter5_nextval,$iter6_idx,$iter6_type,$iter5_idx,$pyjs__trackstack_size_1,$iter6_array,$iter5_iter,$pyjs__trackstack_size_2,$iter5_array,$iter5_type,$iter6_iter,$iter6_nextval,col,row;
			$pyjs['track']={'module':'html5.table', 'lineno':133};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.table';
			$pyjs['track']['lineno']=133;
			$pyjs['track']['lineno']=134;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter5_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__getslice']($p['getattr']($p['getattr'](self, 'body'), '_children'), 0, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})();
			$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
			while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
				row = $iter5_nextval['$nextval'];
				$pyjs['track']['lineno']=136;
				$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
				$iter6_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['__getslice']($p['getattr'](row, '_children'), 0, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})();
				$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
				while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
					col = $iter6_nextval['$nextval'];
					$pyjs['track']['lineno']=137;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return row['removeChild'](col);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='html5.table';
				$pyjs['track']['lineno']=139;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['body']['removeChild'](row);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='html5.table';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clear'] = $method;
		$pyjs['track']['lineno']=141;
		$method = $pyjs__bind_method2('_getCell', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'html5.table', 'lineno':141};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.table';
			$pyjs['track']['lineno']=141;
			$pyjs['track']['lineno']=142;
			$pyjs['track']['lineno']=142;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['RowWrapper']($p['getattr'](self, 'body'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['_getCell'] = $method;
		$pyjs['track']['lineno']=144;
		$method = $pyjs__bind_method2('getRowCount', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var cnt,$iter7_nextval,$iter7_iter,$iter7_array,tr,$add3,$add4,$iter7_idx,$iter7_type,$pyjs__trackstack_size_1;
			$pyjs['track']={'module':'html5.table', 'lineno':144};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='html5.table';
			$pyjs['track']['lineno']=144;
			$pyjs['track']['lineno']=145;
			cnt = 0;
			$pyjs['track']['lineno']=147;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter7_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr']($p['getattr'](self, 'body'), '_children');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})();
			$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
			while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
				tr = $iter7_nextval['$nextval'];
				$pyjs['track']['lineno']=148;
				cnt = $p['__op_add']($add3=cnt,$add4=tr['__getitem__']('rowspan'));
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='html5.table';
			$pyjs['track']['lineno']=150;
			$pyjs['track']['lineno']=150;
			var $pyjs__ret = cnt;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getRowCount'] = $method;
		$pyjs['track']['lineno']=88;
		var $bases = new Array($m['Widget']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Table', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end html5.table */


/* end module: html5.table */


/*
PYJS_DEPS: ['html5.widget.Widget', 'html5', 'html5.widget', 'html5.TextNode']
*/
