/* start module: time */
$pyjs['loaded_modules']['time'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['time']['__was_initialized__']) return $pyjs['loaded_modules']['time'];
	var $m = $pyjs['loaded_modules']['time'];
	$m['__repr__'] = function() { return '<module: time>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'time';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$m.__track_lines__[1] = 'time.py, line 1:\n    # Check http://docs.python.org/library/time.html';
	$m.__track_lines__[3] = 'time.py, line 3:\n    from __pyjamas__ import JS, debugger';
	$m.__track_lines__[4] = 'time.py, line 4:\n    import math';
	$m.__track_lines__[6] = 'time.py, line 6:\n    timezone = JS("60 * (new Date(new Date()[\'getFullYear\'](), 0, 1))[\'getTimezoneOffset\']()")';
	$m.__track_lines__[7] = 'time.py, line 7:\n    altzone = JS("60 * (new Date(new Date()[\'getFullYear\'](), 6, 1))[\'getTimezoneOffset\']()")';
	$m.__track_lines__[8] = 'time.py, line 8:\n    if altzone > timezone:';
	$m.__track_lines__[10] = 'time.py, line 10:\n    d = timezone';
	$m.__track_lines__[11] = 'time.py, line 11:\n    timezone = altzone';
	$m.__track_lines__[12] = 'time.py, line 12:\n    altzone = d';
	$m.__track_lines__[13] = 'time.py, line 13:\n    _dst = timezone - altzone';
	$m.__track_lines__[14] = 'time.py, line 14:\n    d = JS("(new Date(new Date()[\'getFullYear\'](), 0, 1))")';
	$m.__track_lines__[15] = 'time.py, line 15:\n    d = str(d.toLocaleString()).split()[-1]';
	$m.__track_lines__[16] = "time.py, line 16:\n    if d[0] == '(':";
	$m.__track_lines__[17] = 'time.py, line 17:\n    d = d[1:-1]';
	$m.__track_lines__[18] = 'time.py, line 18:\n    tzname = (d, None)';
	$m.__track_lines__[19] = 'time.py, line 19:\n    del d';
	$m.__track_lines__[21] = 'time.py, line 21:\n    __c__days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]';
	$m.__track_lines__[22] = 'time.py, line 22:\n    __c__months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]';
	$m.__track_lines__[25] = 'time.py, line 25:\n    def time():';
	$m.__track_lines__[26] = 'time.py, line 26:\n    return float(JS("new Date()[\'getTime\']() / 1000.0"))';
	$m.__track_lines__[28] = 'time.py, line 28:\n    class struct_time(object):';
	$m.__track_lines__[29] = 'time.py, line 29:\n    n_fields = 9';
	$m.__track_lines__[30] = 'time.py, line 30:\n    n_sequence_fields = 9';
	$m.__track_lines__[31] = 'time.py, line 31:\n    n_unnamed_fields = 0';
	$m.__track_lines__[32] = 'time.py, line 32:\n    tm_year = None';
	$m.__track_lines__[33] = 'time.py, line 33:\n    tm_mon = None';
	$m.__track_lines__[34] = 'time.py, line 34:\n    tm_mday = None';
	$m.__track_lines__[35] = 'time.py, line 35:\n    tm_hour = None';
	$m.__track_lines__[36] = 'time.py, line 36:\n    tm_min = None';
	$m.__track_lines__[37] = 'time.py, line 37:\n    tm_sec = None';
	$m.__track_lines__[38] = 'time.py, line 38:\n    tm_wday = None';
	$m.__track_lines__[39] = 'time.py, line 39:\n    tm_yday = None';
	$m.__track_lines__[40] = 'time.py, line 40:\n    tm_isdst = None';
	$m.__track_lines__[42] = 'time.py, line 42:\n    def __init__(self, ttuple=None):';
	$m.__track_lines__[43] = 'time.py, line 43:\n    if not ttuple is None:';
	$m.__track_lines__[44] = 'time.py, line 44:\n    self.tm_year = ttuple[0]';
	$m.__track_lines__[45] = 'time.py, line 45:\n    self.tm_mon = ttuple[1]';
	$m.__track_lines__[46] = 'time.py, line 46:\n    self.tm_mday = ttuple[2]';
	$m.__track_lines__[47] = 'time.py, line 47:\n    self.tm_hour = ttuple[3]';
	$m.__track_lines__[48] = 'time.py, line 48:\n    self.tm_min = ttuple[4]';
	$m.__track_lines__[49] = 'time.py, line 49:\n    self.tm_sec = ttuple[5]';
	$m.__track_lines__[50] = 'time.py, line 50:\n    self.tm_wday = ttuple[6]';
	$m.__track_lines__[51] = 'time.py, line 51:\n    self.tm_yday = ttuple[7]';
	$m.__track_lines__[52] = 'time.py, line 52:\n    self.tm_isdst = ttuple[8]';
	$m.__track_lines__[54] = 'time.py, line 54:\n    def __str__(self):';
	$m.__track_lines__[55] = 'time.py, line 55:\n    t = (';
	$m.__track_lines__[66] = 'time.py, line 66:\n    return t.__str__()';
	$m.__track_lines__[68] = 'time.py, line 68:\n    def __repr__(self):';
	$m.__track_lines__[69] = 'time.py, line 69:\n    return self.__str__()';
	$m.__track_lines__[71] = 'time.py, line 71:\n    def __getitem__(self, idx):';
	$m.__track_lines__[72] = 'time.py, line 72:\n    return [self.tm_year, self.tm_mon, self.tm_mday,';
	$m.__track_lines__[76] = 'time.py, line 76:\n    def __getslice__(self, lower, upper):';
	$m.__track_lines__[77] = 'time.py, line 77:\n    return [self.tm_year, self.tm_mon, self.tm_mday,';
	$m.__track_lines__[81] = 'time.py, line 81:\n    def gmtime(t=None):';
	$m.__track_lines__[82] = 'time.py, line 82:\n    if t is None:';
	$m.__track_lines__[83] = 'time.py, line 83:\n    t = time()';
	$m.__track_lines__[84] = 'time.py, line 84:\n    date = JS("new Date(@{{t}}*1000)")';
	$m.__track_lines__[85] = 'time.py, line 85:\n    tm = struct_time()';
	$m.__track_lines__[86] = 'time.py, line 86:\n    tm_year = tm.tm_year = int(date.getUTCFullYear())';
	$m.__track_lines__[87] = 'time.py, line 87:\n    tm.tm_mon = int(date.getUTCMonth()) + 1';
	$m.__track_lines__[88] = 'time.py, line 88:\n    tm.tm_mday = int(date.getUTCDate())';
	$m.__track_lines__[89] = 'time.py, line 89:\n    tm.tm_hour = int(date.getUTCHours())';
	$m.__track_lines__[90] = 'time.py, line 90:\n    tm.tm_min = int(date.getUTCMinutes())';
	$m.__track_lines__[91] = 'time.py, line 91:\n    tm.tm_sec = int(date.getUTCSeconds())';
	$m.__track_lines__[92] = 'time.py, line 92:\n    tm.tm_wday = (int(date.getUTCDay()) + 6) % 7';
	$m.__track_lines__[93] = 'time.py, line 93:\n    tm.tm_isdst = 0';
	$m.__track_lines__[94] = 'time.py, line 94:\n    startOfYear = JS("new Date(\'Jan 1 \'+ @{{tm_year}} +\' GMT+0000\')")';
	$m.__track_lines__[95] = 'time.py, line 95:\n    tm.tm_yday = 1 + int((t - startOfYear.getTime()/1000)/86400)';
	$m.__track_lines__[96] = 'time.py, line 96:\n    return tm';
	$m.__track_lines__[98] = 'time.py, line 98:\n    def localtime(t=None):';
	$m.__track_lines__[99] = 'time.py, line 99:\n    if t is None:';
	$m.__track_lines__[100] = 'time.py, line 100:\n    t = time()';
	$m.__track_lines__[101] = 'time.py, line 101:\n    date = JS("new Date(@{{t}}*1000)")';
	$m.__track_lines__[102] = 'time.py, line 102:\n    dateOffset = date.getTimezoneOffset()';
	$m.__track_lines__[103] = 'time.py, line 103:\n    tm = struct_time()';
	$m.__track_lines__[104] = 'time.py, line 104:\n    tm_year = tm.tm_year = int(date.getFullYear())';
	$m.__track_lines__[105] = 'time.py, line 105:\n    tm_mon = tm.tm_mon = int(date.getMonth()) + 1';
	$m.__track_lines__[106] = 'time.py, line 106:\n    tm_mday = tm.tm_mday = int(date.getDate())';
	$m.__track_lines__[107] = 'time.py, line 107:\n    tm.tm_hour = int(date.getHours())';
	$m.__track_lines__[108] = 'time.py, line 108:\n    tm.tm_min = int(date.getMinutes())';
	$m.__track_lines__[109] = 'time.py, line 109:\n    tm.tm_sec = int(date.getSeconds())';
	$m.__track_lines__[110] = 'time.py, line 110:\n    tm.tm_wday = (int(date.getDay()) + 6) % 7';
	$m.__track_lines__[111] = 'time.py, line 111:\n    tm.tm_isdst = 0 if timezone == 60*date.getTimezoneOffset() else 1';
	$m.__track_lines__[112] = 'time.py, line 112:\n    startOfYear = JS("new Date(@{{tm_year}},0,1)") # local time';
	$m.__track_lines__[113] = 'time.py, line 113:\n    startOfYearOffset = startOfYear.getTimezoneOffset()';
	$m.__track_lines__[114] = 'time.py, line 114:\n    startOfDay = JS("new Date(@{{tm_year}},@{{tm_mon}}-1,@{{tm_mday}})")';
	$m.__track_lines__[115] = 'time.py, line 115:\n    dt = float(startOfDay.getTime() - startOfYear.getTime())/1000';
	$m.__track_lines__[116] = 'time.py, line 116:\n    dt = dt + 60 * (startOfYearOffset - dateOffset)';
	$m.__track_lines__[117] = 'time.py, line 117:\n    tm.tm_yday = 1 + int(dt/86400.0)';
	$m.__track_lines__[118] = 'time.py, line 118:\n    return tm';
	$m.__track_lines__[120] = 'time.py, line 120:\n    def mktime(t):';
	$m.__track_lines__[123] = 'time.py, line 123:\n    tm_year = t[0]';
	$m.__track_lines__[124] = 'time.py, line 124:\n    tm_mon = t[1] - 1';
	$m.__track_lines__[125] = 'time.py, line 125:\n    tm_mday = t[2]';
	$m.__track_lines__[126] = 'time.py, line 126:\n    tm_hour = t[3]';
	$m.__track_lines__[127] = 'time.py, line 127:\n    tm_min = t[4]';
	$m.__track_lines__[128] = 'time.py, line 128:\n    tm_sec = t[5]';
	$m.__track_lines__[129] = 'time.py, line 129:\n    date = JS("new Date(@{{tm_year}}, @{{tm_mon}}, @{{tm_mday}}, @{{tm_hour}}, @{{tm_min}}, @{{tm_sec}})") # local time';
	$m.__track_lines__[130] = 'time.py, line 130:\n    utc = JS("Date[\'UTC\'](@{{tm_year}}, @{{tm_mon}}, @{{tm_mday}}, @{{tm_hour}}, @{{tm_min}}, @{{tm_sec}})")/1000';
	$m.__track_lines__[131] = 'time.py, line 131:\n    ts = date.getTime() / 1000';
	$m.__track_lines__[132] = 'time.py, line 132:\n    if t[8] == 0:';
	$m.__track_lines__[133] = 'time.py, line 133:\n    if ts - utc == timezone:';
	$m.__track_lines__[134] = 'time.py, line 134:\n    return ts';
	$m.__track_lines__[135] = 'time.py, line 135:\n    return ts + _dst';
	$m.__track_lines__[136] = 'time.py, line 136:\n    return ts';
	$m.__track_lines__[138] = 'time.py, line 138:\n    def strftime(fmt, t=None):';
	$m.__track_lines__[139] = 'time.py, line 139:\n    if t is None:';
	$m.__track_lines__[140] = 'time.py, line 140:\n    t = localtime()';
	$m.__track_lines__[142] = 'time.py, line 142:\n    if not isinstance(t, struct_time) and len(t) != 9:';
	$m.__track_lines__[143] = "time.py, line 143:\n    raise TypeError('argument must be 9-item sequence, not float')";
	$m.__track_lines__[144] = 'time.py, line 144:\n    tm_year = t[0]';
	$m.__track_lines__[145] = 'time.py, line 145:\n    tm_mon = t[1]';
	$m.__track_lines__[146] = 'time.py, line 146:\n    tm_mday = t[2]';
	$m.__track_lines__[147] = 'time.py, line 147:\n    tm_hour = t[3]';
	$m.__track_lines__[148] = 'time.py, line 148:\n    tm_min = t[4]';
	$m.__track_lines__[149] = 'time.py, line 149:\n    tm_sec = t[5]';
	$m.__track_lines__[150] = 'time.py, line 150:\n    tm_wday = t[6]';
	$m.__track_lines__[151] = 'time.py, line 151:\n    tm_yday = t[7]';
	$m.__track_lines__[152] = 'time.py, line 152:\n    date = JS("new Date(@{{tm_year}}, @{{tm_mon}} - 1, @{{tm_mday}}, @{{tm_hour}}, @{{tm_min}}, @{{tm_sec}})")';
	$m.__track_lines__[153] = 'time.py, line 153:\n    startOfYear = JS("new Date(@{{tm_year}},0,1)")';
	$m.__track_lines__[154] = 'time.py, line 154:\n    firstMonday = 1 - ((startOfYear.getDay() + 6) % 7) + 7';
	$m.__track_lines__[155] = 'time.py, line 155:\n    firstWeek = JS("new Date(@{{tm_year}},0,@{{firstMonday}})")';
	$m.__track_lines__[156] = 'time.py, line 156:\n    weekNo = date.getTime() - firstWeek.getTime()';
	$m.__track_lines__[157] = 'time.py, line 157:\n    if weekNo < 0:';
	$m.__track_lines__[158] = 'time.py, line 158:\n    weekNo = 0';
	$m.__track_lines__[160] = 'time.py, line 160:\n    weekNo = 1 + int(weekNo/604800000)';
	$m.__track_lines__[162] = 'time.py, line 162:\n    def format(c):';
	$m.__track_lines__[163] = "time.py, line 163:\n    if c == '%':";
	$m.__track_lines__[164] = "time.py, line 164:\n    return '%'";
	$m.__track_lines__[166] = "time.py, line 166:\n    return format('A')[:3]";
	$m.__track_lines__[168] = "time.py, line 168:\n    return __c__days[format('w')]";
	$m.__track_lines__[170] = "time.py, line 170:\n    return format('B')[:3]";
	$m.__track_lines__[172] = 'time.py, line 172:\n    return __c__months[tm_mon-1]';
	$m.__track_lines__[174] = 'time.py, line 174:\n    return date.toLocaleString()';
	$m.__track_lines__[176] = 'time.py, line 176:\n    return "%02d" % tm_mday';
	$m.__track_lines__[178] = 'time.py, line 178:\n    return "%02d" % tm_hour';
	$m.__track_lines__[180] = 'time.py, line 180:\n    return "%02d" % (tm_hour % 12)';
	$m.__track_lines__[182] = 'time.py, line 182:\n    return "%03d" % tm_yday';
	$m.__track_lines__[184] = 'time.py, line 184:\n    return "%02d" % tm_mon';
	$m.__track_lines__[186] = 'time.py, line 186:\n    return "%02d" % tm_min';
	$m.__track_lines__[188] = 'time.py, line 188:\n    if tm_hour < 12:';
	$m.__track_lines__[189] = 'time.py, line 189:\n    return "AM"';
	$m.__track_lines__[190] = 'time.py, line 190:\n    return "PM"';
	$m.__track_lines__[192] = 'time.py, line 192:\n    return "%02d" % tm_sec';
	$m.__track_lines__[194] = 'time.py, line 194:\n    raise NotImplementedError("strftime format character \'%s\'" % c)';
	$m.__track_lines__[196] = 'time.py, line 196:\n    return "%d" % ((tm_wday+1) % 7)';
	$m.__track_lines__[198] = 'time.py, line 198:\n    return "%d" % weekNo';
	$m.__track_lines__[200] = 'time.py, line 200:\n    return "%s" % date.toLocaleDateString()';
	$m.__track_lines__[202] = 'time.py, line 202:\n    return "%s" % date.toLocaleTimeString()';
	$m.__track_lines__[204] = 'time.py, line 204:\n    return "%02d" % (tm_year % 100)';
	$m.__track_lines__[206] = 'time.py, line 206:\n    return "%04d" % tm_year';
	$m.__track_lines__[208] = 'time.py, line 208:\n    raise NotImplementedError("strftime format character \'%s\'" % c)';
	$m.__track_lines__[209] = 'time.py, line 209:\n    return "%" + c';
	$m.__track_lines__[210] = "time.py, line 210:\n    result = ''";
	$m.__track_lines__[211] = 'time.py, line 211:\n    remainder = fmt';
	$m.__track_lines__[212] = 'time.py, line 212:\n    re_pct = JS("/([^%]*)%(.)(.*)/")';
	$m.__track_lines__[213] = 'time.py, line 213:\n    JS("var a, fmtChar;")';
	$m.__track_lines__[214] = 'time.py, line 214:\n    while remainder:';
	$m.__track_lines__[215] = 'time.py, line 215:\n    JS("""';
	$m.__track_lines__[229] = 'time.py, line 229:\n    return str(result)';
	$m.__track_lines__[231] = 'time.py, line 231:\n    def asctime(t=None):';
	$m.__track_lines__[232] = 'time.py, line 232:\n    if t is None:';
	$m.__track_lines__[233] = 'time.py, line 233:\n    t = localtime()';
	$m.__track_lines__[234] = 'time.py, line 234:\n    return "%s %s %02d %02d:%02d:%02d %04d" % (__c__days[(t[6]+1)%7][:3], __c__months[t[1]-1], t[2], t[3], t[4], t[5], t[0])';
	$m.__track_lines__[236] = 'time.py, line 236:\n    def ctime(t=None):';
	$m.__track_lines__[237] = 'time.py, line 237:\n    return asctime(localtime(t))';
	$m.__track_lines__[242] = 'time.py, line 242:\n    JS("""';
	$m.__track_lines__[343] = 'time.py, line 343:\n    def _strptime(datestring, format):';
	$m.__track_lines__[344] = 'time.py, line 344:\n    try:';
	$m.__track_lines__[345] = 'time.py, line 345:\n    return float(JS("strptime(@{{datestring}}[\'valueOf\'](), @{{format}}[\'valueOf\']())[\'getTime\']() / 1000.0"))';
	$m.__track_lines__[347] = 'time.py, line 347:\n    raise ValueError("Invalid or unsupported values for strptime: \'%s\', \'%s\'" % (datestring, format))';
	$m.__track_lines__[349] = 'time.py, line 349:\n    def strptime(datestring, format):';
	$m.__track_lines__[350] = 'time.py, line 350:\n    try:';
	$m.__track_lines__[351] = 'time.py, line 351:\n    tt = localtime(float(JS("strptime(@{{datestring}}[\'valueOf\'](), @{{format}}[\'valueOf\']())[\'getTime\']() / 1000.0")))';
	$m.__track_lines__[352] = 'time.py, line 352:\n    tt.tm_isdst = -1';
	$m.__track_lines__[353] = 'time.py, line 353:\n    return tt';
	$m.__track_lines__[355] = 'time.py, line 355:\n    raise ValueError("Invalid or unsupported values for strptime: \'%s\', \'%s\'" % (datestring, format))';
	var $sub2,$sub1;

	$pyjs['track']['module']='time';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=3;
	$pyjs['track']['lineno']=4;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['math'] = $p['___import___']('math', null);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=6;
	$m['timezone'] = 60 * (new Date(new Date()['getFullYear'](), 0, 1))['getTimezoneOffset']();
	$pyjs['track']['lineno']=7;
	$m['altzone'] = 60 * (new Date(new Date()['getFullYear'](), 6, 1))['getTimezoneOffset']();
	$pyjs['track']['lineno']=8;
	if ($p['bool'](($p['cmp']($m['altzone'], $m['timezone']) == 1))) {
		$pyjs['track']['lineno']=10;
		$m['d'] = $m['timezone'];
		$pyjs['track']['lineno']=11;
		$m['timezone'] = $m['altzone'];
		$pyjs['track']['lineno']=12;
		$m['altzone'] = $m['d'];
	}
	$pyjs['track']['lineno']=13;
	$m['_dst'] = $p['__op_sub']($sub1=$m['timezone'],$sub2=$m['altzone']);
	$pyjs['track']['lineno']=14;
	$m['d'] = (new Date(new Date()['getFullYear'](), 0, 1));
	$pyjs['track']['lineno']=15;
	$m['d'] = (function(){try{try{$pyjs['in_try_except'] += 1;
	return (function(){try{try{$pyjs['in_try_except'] += 1;
	return $p['str']((function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['d']['toLocaleString']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})()['$$split']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})()['__getitem__']((typeof ($usub1=1)=='number'?
		-$usub1:
		$p['op_usub']($usub1)));
	$pyjs['track']['lineno']=16;
	if ((function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['bool']($p['op_eq']($m['d']['__getitem__'](0), '('));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})()) {
		$pyjs['track']['lineno']=17;
		$m['d'] = $p['__getslice']($m['d'], 1, (typeof ($usub2=1)=='number'?
			-$usub2:
			$p['op_usub']($usub2)));
	}
	$pyjs['track']['lineno']=18;
	$m['tzname'] = (function(){try{try{$pyjs['in_try_except'] += 1;
	return $p['tuple']([$m['d'], null]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
	$pyjs['track']['lineno']=19;
	delete $m['d'];
	$pyjs['track']['lineno']=21;
	$m['__c__days'] = (function(){try{try{$pyjs['in_try_except'] += 1;
	return $p['list'](['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
	$pyjs['track']['lineno']=22;
	$m['__c__months'] = (function(){try{try{$pyjs['in_try_except'] += 1;
	return $p['list'](['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
	$pyjs['track']['lineno']=25;
	$m['time'] = function() {

		$pyjs['track']={'module':'time','lineno':25};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='time';
		$pyjs['track']['lineno']=25;
		$pyjs['track']['lineno']=26;
		$pyjs['track']['lineno']=26;
		var $pyjs__ret = $p['float'](new Date()['getTime']() / 1000.0);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['time']['__name__'] = 'time';

	$m['time']['__bind_type__'] = 0;
	$m['time']['__args__'] = [null,null];
	$pyjs['track']['lineno']=28;
	$m['struct_time'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'time';
		$pyjs['track']['lineno']=29;
		$cls_definition['n_fields'] = 9;
		$pyjs['track']['lineno']=30;
		$cls_definition['n_sequence_fields'] = 9;
		$pyjs['track']['lineno']=31;
		$cls_definition['n_unnamed_fields'] = 0;
		$pyjs['track']['lineno']=32;
		$cls_definition['tm_year'] = null;
		$pyjs['track']['lineno']=33;
		$cls_definition['tm_mon'] = null;
		$pyjs['track']['lineno']=34;
		$cls_definition['tm_mday'] = null;
		$pyjs['track']['lineno']=35;
		$cls_definition['tm_hour'] = null;
		$pyjs['track']['lineno']=36;
		$cls_definition['tm_min'] = null;
		$pyjs['track']['lineno']=37;
		$cls_definition['tm_sec'] = null;
		$pyjs['track']['lineno']=38;
		$cls_definition['tm_wday'] = null;
		$pyjs['track']['lineno']=39;
		$cls_definition['tm_yday'] = null;
		$pyjs['track']['lineno']=40;
		$cls_definition['tm_isdst'] = null;
		$pyjs['track']['lineno']=42;
		$method = $pyjs__bind_method2('__init__', function(ttuple) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				ttuple = arguments[1];
			}
			if (typeof ttuple == 'undefined') ttuple=arguments['callee']['__args__'][3][1];

			$pyjs['track']={'module':'time', 'lineno':42};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='time';
			$pyjs['track']['lineno']=42;
			$pyjs['track']['lineno']=43;
			if ($p['bool'](!$p['bool']((ttuple === null)))) {
				$pyjs['track']['lineno']=44;
				self['tm_year'] = ttuple['__getitem__'](0);
				$pyjs['track']['lineno']=45;
				self['tm_mon'] = ttuple['__getitem__'](1);
				$pyjs['track']['lineno']=46;
				self['tm_mday'] = ttuple['__getitem__'](2);
				$pyjs['track']['lineno']=47;
				self['tm_hour'] = ttuple['__getitem__'](3);
				$pyjs['track']['lineno']=48;
				self['tm_min'] = ttuple['__getitem__'](4);
				$pyjs['track']['lineno']=49;
				self['tm_sec'] = ttuple['__getitem__'](5);
				$pyjs['track']['lineno']=50;
				self['tm_wday'] = ttuple['__getitem__'](6);
				$pyjs['track']['lineno']=51;
				self['tm_yday'] = ttuple['__getitem__'](7);
				$pyjs['track']['lineno']=52;
				self['tm_isdst'] = ttuple['__getitem__'](8);
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['ttuple', null]]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=54;
		$method = $pyjs__bind_method2('__str__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var t;
			$pyjs['track']={'module':'time', 'lineno':54};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='time';
			$pyjs['track']['lineno']=54;
			$pyjs['track']['lineno']=55;
			t = $p['tuple']([$p['getattr'](self, 'tm_year'), $p['getattr'](self, 'tm_mon'), $p['getattr'](self, 'tm_mday'), $p['getattr'](self, 'tm_hour'), $p['getattr'](self, 'tm_min'), $p['getattr'](self, 'tm_sec'), $p['getattr'](self, 'tm_wday'), $p['getattr'](self, 'tm_yday'), $p['getattr'](self, 'tm_isdst')]);
			$pyjs['track']['lineno']=66;
			$pyjs['track']['lineno']=66;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return t['__str__']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		$pyjs['track']['lineno']=68;
		$method = $pyjs__bind_method2('__repr__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'time', 'lineno':68};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='time';
			$pyjs['track']['lineno']=68;
			$pyjs['track']['lineno']=69;
			$pyjs['track']['lineno']=69;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__str__']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__repr__'] = $method;
		$pyjs['track']['lineno']=71;
		$method = $pyjs__bind_method2('__getitem__', function(idx) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				idx = arguments[1];
			}

			$pyjs['track']={'module':'time', 'lineno':71};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='time';
			$pyjs['track']['lineno']=71;
			$pyjs['track']['lineno']=72;
			$pyjs['track']['lineno']=72;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([$p['getattr'](self, 'tm_year'), $p['getattr'](self, 'tm_mon'), $p['getattr'](self, 'tm_mday'), $p['getattr'](self, 'tm_hour'), $p['getattr'](self, 'tm_min'), $p['getattr'](self, 'tm_sec'), $p['getattr'](self, 'tm_wday'), $p['getattr'](self, 'tm_yday'), $p['getattr'](self, 'tm_isdst')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})()['__getitem__'](idx);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['idx']]);
		$cls_definition['__getitem__'] = $method;
		$pyjs['track']['lineno']=76;
		$method = $pyjs__bind_method2('__getslice__', function(lower, upper) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				lower = arguments[1];
				upper = arguments[2];
			}

			$pyjs['track']={'module':'time', 'lineno':76};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='time';
			$pyjs['track']['lineno']=76;
			$pyjs['track']['lineno']=77;
			$pyjs['track']['lineno']=77;
			var $pyjs__ret = $p['__getslice']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([$p['getattr'](self, 'tm_year'), $p['getattr'](self, 'tm_mon'), $p['getattr'](self, 'tm_mday'), $p['getattr'](self, 'tm_hour'), $p['getattr'](self, 'tm_min'), $p['getattr'](self, 'tm_sec'), $p['getattr'](self, 'tm_wday'), $p['getattr'](self, 'tm_yday'), $p['getattr'](self, 'tm_isdst')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})(), lower, upper);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['lower'],['upper']]);
		$cls_definition['__getslice__'] = $method;
		$pyjs['track']['lineno']=28;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('struct_time', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=81;
	$m['gmtime'] = function(t) {
		if (typeof t == 'undefined') t=arguments['callee']['__args__'][2][1];
		var $add2,$sub3,$div1,$div2,startOfYear,$add6,$add5,tm_year,$add3,tm,$assign1,$add4,$mod2,date,$mod1,$add1,$div3,$div4,$sub4;
		$pyjs['track']={'module':'time','lineno':81};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='time';
		$pyjs['track']['lineno']=81;
		$pyjs['track']['lineno']=82;
		if ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool']((t === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})()) {
			$pyjs['track']['lineno']=83;
			t = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['time']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
		}
		$pyjs['track']['lineno']=84;
		date = new Date(t*1000);
		$pyjs['track']['lineno']=85;
		tm = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $m['struct_time']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
		$pyjs['track']['lineno']=86;
		$assign1 = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['float_int']((function(){try{try{$pyjs['in_try_except'] += 1;
		return date['getUTCFullYear']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
		tm_year = $assign1;
		tm['tm_year'] = $assign1;
		$pyjs['track']['lineno']=87;
		tm['tm_mon'] = $p['__op_add']($add1=(function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['float_int']((function(){try{try{$pyjs['in_try_except'] += 1;
		return date['getUTCMonth']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})(),$add2=1);
		$pyjs['track']['lineno']=88;
		tm['tm_mday'] = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['float_int']((function(){try{try{$pyjs['in_try_except'] += 1;
		return date['getUTCDate']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
		$pyjs['track']['lineno']=89;
		tm['tm_hour'] = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['float_int']((function(){try{try{$pyjs['in_try_except'] += 1;
		return date['getUTCHours']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
		$pyjs['track']['lineno']=90;
		tm['tm_min'] = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['float_int']((function(){try{try{$pyjs['in_try_except'] += 1;
		return date['getUTCMinutes']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
		$pyjs['track']['lineno']=91;
		tm['tm_sec'] = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['float_int']((function(){try{try{$pyjs['in_try_except'] += 1;
		return date['getUTCSeconds']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
		$pyjs['track']['lineno']=92;
		tm['tm_wday'] = (typeof ($mod1=$p['__op_add']($add3=(function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['float_int']((function(){try{try{$pyjs['in_try_except'] += 1;
		return date['getUTCDay']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})(),$add4=6))==typeof ($mod2=7) && typeof $mod1=='number'?
			(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
			$p['op_mod']($mod1,$mod2));
		$pyjs['track']['lineno']=93;
		tm['tm_isdst'] = 0;
		$pyjs['track']['lineno']=94;
		startOfYear = new Date('Jan 1 '+ tm_year +' GMT+0000');
		$pyjs['track']['lineno']=95;
		tm['tm_yday'] = $p['__op_add']($add5=1,$add6=(function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['float_int']((typeof ($div3=$p['__op_sub']($sub3=t,$sub4=(typeof ($div1=(function(){try{try{$pyjs['in_try_except'] += 1;
		return startOfYear['getTime']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})())==typeof ($div2=1000) && typeof $div1=='number' && $div2 !== 0?
			$div1/$div2:
			$p['op_div']($div1,$div2))))==typeof ($div4=86400) && typeof $div3=='number' && $div4 !== 0?
			$div3/$div4:
			$p['op_div']($div3,$div4)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})());
		$pyjs['track']['lineno']=96;
		$pyjs['track']['lineno']=96;
		var $pyjs__ret = tm;
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['gmtime']['__name__'] = 'gmtime';

	$m['gmtime']['__bind_type__'] = 0;
	$m['gmtime']['__args__'] = [null,null,['t', null]];
	$pyjs['track']['lineno']=98;
	$m['localtime'] = function(t) {
		if (typeof t == 'undefined') t=arguments['callee']['__args__'][2][1];
		var $mod4,$mod3,$sub8,$mul3,$div7,tm,tm_mon,startOfYear,$div5,$sub7,$sub6,$sub5,startOfDay,tm_year,$div8,$add10,$add11,$add12,$add13,date,dt,$mul4,$div6,$mul2,$mul1,dateOffset,$add14,startOfYearOffset,tm_mday,$assign4,$add7,$assign3,$assign2,$add8,$add9;
		$pyjs['track']={'module':'time','lineno':98};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='time';
		$pyjs['track']['lineno']=98;
		$pyjs['track']['lineno']=99;
		if ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool']((t === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})()) {
			$pyjs['track']['lineno']=100;
			t = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['time']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
		}
		$pyjs['track']['lineno']=101;
		date = new Date(t*1000);
		$pyjs['track']['lineno']=102;
		dateOffset = (function(){try{try{$pyjs['in_try_except'] += 1;
		return date['getTimezoneOffset']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
		$pyjs['track']['lineno']=103;
		tm = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $m['struct_time']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})();
		$pyjs['track']['lineno']=104;
		$assign2 = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['float_int']((function(){try{try{$pyjs['in_try_except'] += 1;
		return date['getFullYear']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})();
		tm_year = $assign2;
		tm['tm_year'] = $assign2;
		$pyjs['track']['lineno']=105;
		$assign3 = $p['__op_add']($add7=(function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['float_int']((function(){try{try{$pyjs['in_try_except'] += 1;
		return date['getMonth']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})(),$add8=1);
		tm_mon = $assign3;
		tm['tm_mon'] = $assign3;
		$pyjs['track']['lineno']=106;
		$assign4 = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['float_int']((function(){try{try{$pyjs['in_try_except'] += 1;
		return date['getDate']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})();
		tm_mday = $assign4;
		tm['tm_mday'] = $assign4;
		$pyjs['track']['lineno']=107;
		tm['tm_hour'] = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['float_int']((function(){try{try{$pyjs['in_try_except'] += 1;
		return date['getHours']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})();
		$pyjs['track']['lineno']=108;
		tm['tm_min'] = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['float_int']((function(){try{try{$pyjs['in_try_except'] += 1;
		return date['getMinutes']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})();
		$pyjs['track']['lineno']=109;
		tm['tm_sec'] = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['float_int']((function(){try{try{$pyjs['in_try_except'] += 1;
		return date['getSeconds']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})();
		$pyjs['track']['lineno']=110;
		tm['tm_wday'] = (typeof ($mod3=$p['__op_add']($add9=(function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['float_int']((function(){try{try{$pyjs['in_try_except'] += 1;
		return date['getDay']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})(),$add10=6))==typeof ($mod4=7) && typeof $mod3=='number'?
			(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
			$p['op_mod']($mod3,$mod4));
		$pyjs['track']['lineno']=111;
		tm['tm_isdst'] = ($p['bool']($p['op_eq']($m['timezone'], (typeof ($mul1=60)==typeof ($mul2=(function(){try{try{$pyjs['in_try_except'] += 1;
		return date['getTimezoneOffset']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})()) && typeof $mul1=='number'?
			$mul1*$mul2:
			$p['op_mul']($mul1,$mul2))))? (0) : (1));
		$pyjs['track']['lineno']=112;
		startOfYear = new Date(tm_year,0,1);
		$pyjs['track']['lineno']=113;
		startOfYearOffset = (function(){try{try{$pyjs['in_try_except'] += 1;
		return startOfYear['getTimezoneOffset']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})();
		$pyjs['track']['lineno']=114;
		startOfDay = new Date(tm_year,tm_mon-1,tm_mday);
		$pyjs['track']['lineno']=115;
		dt = (typeof ($div5=(function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['float']($p['__op_sub']($sub5=(function(){try{try{$pyjs['in_try_except'] += 1;
		return startOfDay['getTime']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})(),$sub6=(function(){try{try{$pyjs['in_try_except'] += 1;
		return startOfYear['getTime']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})())==typeof ($div6=1000) && typeof $div5=='number' && $div6 !== 0?
			$div5/$div6:
			$p['op_div']($div5,$div6));
		$pyjs['track']['lineno']=116;
		dt = $p['__op_add']($add11=dt,$add12=(typeof ($mul3=60)==typeof ($mul4=$p['__op_sub']($sub7=startOfYearOffset,$sub8=dateOffset)) && typeof $mul3=='number'?
			$mul3*$mul4:
			$p['op_mul']($mul3,$mul4)));
		$pyjs['track']['lineno']=117;
		tm['tm_yday'] = $p['__op_add']($add13=1,$add14=(function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['float_int']((typeof ($div7=dt)==typeof ($div8=86400.0) && typeof $div7=='number' && $div8 !== 0?
			$div7/$div8:
			$p['op_div']($div7,$div8)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})());
		$pyjs['track']['lineno']=118;
		$pyjs['track']['lineno']=118;
		var $pyjs__ret = tm;
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['localtime']['__name__'] = 'localtime';

	$m['localtime']['__bind_type__'] = 0;
	$m['localtime']['__args__'] = [null,null,['t', null]];
	$pyjs['track']['lineno']=120;
	$m['mktime'] = function(t) {
		var $add16,utc,tm_sec,tm_hour,tm_mday,$sub10,$div10,$div11,$div12,ts,tm_year,$add15,$sub9,$div9,tm_mon,$sub12,date,$sub11,tm_min;
		$pyjs['track']={'module':'time','lineno':120};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='time';
		$pyjs['track']['lineno']=120;
		$pyjs['track']['lineno']=123;
		tm_year = t['__getitem__'](0);
		$pyjs['track']['lineno']=124;
		tm_mon = $p['__op_sub']($sub9=t['__getitem__'](1),$sub10=1);
		$pyjs['track']['lineno']=125;
		tm_mday = t['__getitem__'](2);
		$pyjs['track']['lineno']=126;
		tm_hour = t['__getitem__'](3);
		$pyjs['track']['lineno']=127;
		tm_min = t['__getitem__'](4);
		$pyjs['track']['lineno']=128;
		tm_sec = t['__getitem__'](5);
		$pyjs['track']['lineno']=129;
		date = new Date(tm_year, tm_mon, tm_mday, tm_hour, tm_min, tm_sec);
		$pyjs['track']['lineno']=130;
		utc = (typeof ($div9=Date['UTC'](tm_year, tm_mon, tm_mday, tm_hour, tm_min, tm_sec))==typeof ($div10=1000) && typeof $div9=='number' && $div10 !== 0?
			$div9/$div10:
			$p['op_div']($div9,$div10));
		$pyjs['track']['lineno']=131;
		ts = (typeof ($div11=(function(){try{try{$pyjs['in_try_except'] += 1;
		return date['getTime']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})())==typeof ($div12=1000) && typeof $div11=='number' && $div12 !== 0?
			$div11/$div12:
			$p['op_div']($div11,$div12));
		$pyjs['track']['lineno']=132;
		if ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool']($p['op_eq'](t['__getitem__'](8), 0));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})()) {
			$pyjs['track']['lineno']=133;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq']($p['__op_sub']($sub11=ts,$sub12=utc), $m['timezone']));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})()) {
				$pyjs['track']['lineno']=134;
				$pyjs['track']['lineno']=134;
				var $pyjs__ret = ts;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=135;
			$pyjs['track']['lineno']=135;
			var $pyjs__ret = $p['__op_add']($add15=ts,$add16=$m['_dst']);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
		$pyjs['track']['lineno']=136;
		$pyjs['track']['lineno']=136;
		var $pyjs__ret = ts;
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['mktime']['__name__'] = 'mktime';

	$m['mktime']['__bind_type__'] = 0;
	$m['mktime']['__args__'] = [null,null,['t']];
	$pyjs['track']['lineno']=138;
	$m['strftime'] = function(fmt, t) {
		if (typeof t == 'undefined') t=arguments['callee']['__args__'][3][1];
		var firstMonday,tm_hour,tm_sec,tm_wday,$mod5,$mod6,result,remainder,$div14,$add20,$add22,$div13,tm_mon,startOfYear,tm_min,format,$sub13,$and1,$and2,$sub16,$sub15,$sub14,tm_year,$add17,tm_yday,date,firstWeek,$add18,$add19,tm_mday,weekNo,$add21,re_pct;
		$pyjs['track']={'module':'time','lineno':138};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='time';
		$pyjs['track']['lineno']=138;
		$pyjs['track']['lineno']=139;
		if ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool']((t === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})()) {
			$pyjs['track']['lineno']=140;
			t = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['localtime']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})();
		}
		else {
			$pyjs['track']['lineno']=142;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and1=!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance'](t, $m['struct_time']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})()))?!$p['op_eq']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len'](t);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})(), 9):$and1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})()) {
				$pyjs['track']['lineno']=143;
				$pyjs['__active_exception_stack__'] = null;
				throw ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['TypeError']('argument must be 9-item sequence, not float');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})());
			}
		}
		$pyjs['track']['lineno']=144;
		tm_year = t['__getitem__'](0);
		$pyjs['track']['lineno']=145;
		tm_mon = t['__getitem__'](1);
		$pyjs['track']['lineno']=146;
		tm_mday = t['__getitem__'](2);
		$pyjs['track']['lineno']=147;
		tm_hour = t['__getitem__'](3);
		$pyjs['track']['lineno']=148;
		tm_min = t['__getitem__'](4);
		$pyjs['track']['lineno']=149;
		tm_sec = t['__getitem__'](5);
		$pyjs['track']['lineno']=150;
		tm_wday = t['__getitem__'](6);
		$pyjs['track']['lineno']=151;
		tm_yday = t['__getitem__'](7);
		$pyjs['track']['lineno']=152;
		date = new Date(tm_year, tm_mon - 1, tm_mday, tm_hour, tm_min, tm_sec);
		$pyjs['track']['lineno']=153;
		startOfYear = new Date(tm_year,0,1);
		$pyjs['track']['lineno']=154;
		firstMonday = $p['__op_add']($add19=$p['__op_sub']($sub13=1,$sub14=(typeof ($mod5=$p['__op_add']($add17=(function(){try{try{$pyjs['in_try_except'] += 1;
		return startOfYear['getDay']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})(),$add18=6))==typeof ($mod6=7) && typeof $mod5=='number'?
			(($mod5=$mod5%$mod6)<0&&$mod6>0?$mod5+$mod6:$mod5):
			$p['op_mod']($mod5,$mod6))),$add20=7);
		$pyjs['track']['lineno']=155;
		firstWeek = new Date(tm_year,0,firstMonday);
		$pyjs['track']['lineno']=156;
		weekNo = $p['__op_sub']($sub15=(function(){try{try{$pyjs['in_try_except'] += 1;
		return date['getTime']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})(),$sub16=(function(){try{try{$pyjs['in_try_except'] += 1;
		return firstWeek['getTime']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})());
		$pyjs['track']['lineno']=157;
		if ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool'](($p['cmp'](weekNo, 0) == -1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})()) {
			$pyjs['track']['lineno']=158;
			weekNo = 0;
		}
		else {
			$pyjs['track']['lineno']=160;
			weekNo = $p['__op_add']($add21=1,$add22=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['float_int']((typeof ($div13=weekNo)==typeof ($div14=604800000) && typeof $div13=='number' && $div14 !== 0?
				$div13/$div14:
				$p['op_div']($div13,$div14)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})());
		}
		$pyjs['track']['lineno']=162;
		format = function(c) {
			var $sub18,$mod11,$mod10,$mod12,$add25,$add23,$sub17,$add24,$add26,$mod7,$mod9,$mod8;
			$pyjs['track']={'module':'time','lineno':162};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='time';
			$pyjs['track']['lineno']=162;
			$pyjs['track']['lineno']=163;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](c, '%'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})()) {
				$pyjs['track']['lineno']=164;
				$pyjs['track']['lineno']=164;
				var $pyjs__ret = '%';
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](c, 'a'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})()) {
				$pyjs['track']['lineno']=166;
				$pyjs['track']['lineno']=166;
				var $pyjs__ret = $p['__getslice']((function(){try{try{$pyjs['in_try_except'] += 1;
				return format('A');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})(), 0, 3);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](c, 'A'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})()) {
				$pyjs['track']['lineno']=168;
				$pyjs['track']['lineno']=168;
				var $pyjs__ret = $m['__c__days']['__getitem__']((function(){try{try{$pyjs['in_try_except'] += 1;
				return format('w');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})());
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](c, 'b'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})()) {
				$pyjs['track']['lineno']=170;
				$pyjs['track']['lineno']=170;
				var $pyjs__ret = $p['__getslice']((function(){try{try{$pyjs['in_try_except'] += 1;
				return format('B');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})(), 0, 3);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](c, 'B'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})()) {
				$pyjs['track']['lineno']=172;
				$pyjs['track']['lineno']=172;
				var $pyjs__ret = $m['__c__months']['__getitem__']($p['__op_sub']($sub17=tm_mon,$sub18=1));
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](c, 'c'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})()) {
				$pyjs['track']['lineno']=174;
				$pyjs['track']['lineno']=174;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return date['toLocaleString']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](c, 'd'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})()) {
				$pyjs['track']['lineno']=176;
				$pyjs['track']['lineno']=176;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('%02d', tm_mday);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](c, 'H'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})()) {
				$pyjs['track']['lineno']=178;
				$pyjs['track']['lineno']=178;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('%02d', tm_hour);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](c, 'I'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})()) {
				$pyjs['track']['lineno']=180;
				$pyjs['track']['lineno']=180;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('%02d', (typeof ($mod7=tm_hour)==typeof ($mod8=12) && typeof $mod7=='number'?
					(($mod7=$mod7%$mod8)<0&&$mod8>0?$mod7+$mod8:$mod7):
					$p['op_mod']($mod7,$mod8)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](c, 'j'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})()) {
				$pyjs['track']['lineno']=182;
				$pyjs['track']['lineno']=182;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('%03d', tm_yday);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](c, 'm'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})()) {
				$pyjs['track']['lineno']=184;
				$pyjs['track']['lineno']=184;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('%02d', tm_mon);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_88_err){if (!$p['isinstance']($pyjs_dbg_88_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_88_err);}throw $pyjs_dbg_88_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](c, 'M'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_89_err){if (!$p['isinstance']($pyjs_dbg_89_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_89_err);}throw $pyjs_dbg_89_err;
}})()) {
				$pyjs['track']['lineno']=186;
				$pyjs['track']['lineno']=186;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('%02d', tm_min);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_90_err){if (!$p['isinstance']($pyjs_dbg_90_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_90_err);}throw $pyjs_dbg_90_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](c, 'p'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_91_err){if (!$p['isinstance']($pyjs_dbg_91_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_91_err);}throw $pyjs_dbg_91_err;
}})()) {
				$pyjs['track']['lineno']=188;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['cmp'](tm_hour, 12) == -1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_92_err){if (!$p['isinstance']($pyjs_dbg_92_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_92_err);}throw $pyjs_dbg_92_err;
}})()) {
					$pyjs['track']['lineno']=189;
					$pyjs['track']['lineno']=189;
					var $pyjs__ret = 'AM';
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=190;
				$pyjs['track']['lineno']=190;
				var $pyjs__ret = 'PM';
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](c, 'S'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_93_err){if (!$p['isinstance']($pyjs_dbg_93_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_93_err);}throw $pyjs_dbg_93_err;
}})()) {
				$pyjs['track']['lineno']=192;
				$pyjs['track']['lineno']=192;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('%02d', tm_sec);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_94_err){if (!$p['isinstance']($pyjs_dbg_94_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_94_err);}throw $pyjs_dbg_94_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](c, 'U'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_95_err){if (!$p['isinstance']($pyjs_dbg_95_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_95_err);}throw $pyjs_dbg_95_err;
}})()) {
				$pyjs['track']['lineno']=194;
				$pyjs['__active_exception_stack__'] = null;
				throw ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['NotImplementedError']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']("strftime format character '%s'", c);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_96_err){if (!$p['isinstance']($pyjs_dbg_96_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_96_err);}throw $pyjs_dbg_96_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_97_err){if (!$p['isinstance']($pyjs_dbg_97_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_97_err);}throw $pyjs_dbg_97_err;
}})());
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](c, 'w'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_98_err){if (!$p['isinstance']($pyjs_dbg_98_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_98_err);}throw $pyjs_dbg_98_err;
}})()) {
				$pyjs['track']['lineno']=196;
				$pyjs['track']['lineno']=196;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('%d', (typeof ($mod9=$p['__op_add']($add23=tm_wday,$add24=1))==typeof ($mod10=7) && typeof $mod9=='number'?
					(($mod9=$mod9%$mod10)<0&&$mod10>0?$mod9+$mod10:$mod9):
					$p['op_mod']($mod9,$mod10)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_99_err){if (!$p['isinstance']($pyjs_dbg_99_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_99_err);}throw $pyjs_dbg_99_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](c, 'W'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_100_err){if (!$p['isinstance']($pyjs_dbg_100_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_100_err);}throw $pyjs_dbg_100_err;
}})()) {
				$pyjs['track']['lineno']=198;
				$pyjs['track']['lineno']=198;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('%d', weekNo);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_101_err){if (!$p['isinstance']($pyjs_dbg_101_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_101_err);}throw $pyjs_dbg_101_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](c, 'x'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_102_err){if (!$p['isinstance']($pyjs_dbg_102_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_102_err);}throw $pyjs_dbg_102_err;
}})()) {
				$pyjs['track']['lineno']=200;
				$pyjs['track']['lineno']=200;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('%s', (function(){try{try{$pyjs['in_try_except'] += 1;
				return date['toLocaleDateString']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_103_err){if (!$p['isinstance']($pyjs_dbg_103_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_103_err);}throw $pyjs_dbg_103_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_104_err){if (!$p['isinstance']($pyjs_dbg_104_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_104_err);}throw $pyjs_dbg_104_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](c, 'X'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_105_err){if (!$p['isinstance']($pyjs_dbg_105_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_105_err);}throw $pyjs_dbg_105_err;
}})()) {
				$pyjs['track']['lineno']=202;
				$pyjs['track']['lineno']=202;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('%s', (function(){try{try{$pyjs['in_try_except'] += 1;
				return date['toLocaleTimeString']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_106_err){if (!$p['isinstance']($pyjs_dbg_106_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_106_err);}throw $pyjs_dbg_106_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_107_err){if (!$p['isinstance']($pyjs_dbg_107_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_107_err);}throw $pyjs_dbg_107_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](c, 'y'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_108_err){if (!$p['isinstance']($pyjs_dbg_108_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_108_err);}throw $pyjs_dbg_108_err;
}})()) {
				$pyjs['track']['lineno']=204;
				$pyjs['track']['lineno']=204;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('%02d', (typeof ($mod11=tm_year)==typeof ($mod12=100) && typeof $mod11=='number'?
					(($mod11=$mod11%$mod12)<0&&$mod12>0?$mod11+$mod12:$mod11):
					$p['op_mod']($mod11,$mod12)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_109_err){if (!$p['isinstance']($pyjs_dbg_109_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_109_err);}throw $pyjs_dbg_109_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](c, 'Y'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_110_err){if (!$p['isinstance']($pyjs_dbg_110_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_110_err);}throw $pyjs_dbg_110_err;
}})()) {
				$pyjs['track']['lineno']=206;
				$pyjs['track']['lineno']=206;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('%04d', tm_year);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_111_err){if (!$p['isinstance']($pyjs_dbg_111_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_111_err);}throw $pyjs_dbg_111_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](c, 'Z'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_112_err){if (!$p['isinstance']($pyjs_dbg_112_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_112_err);}throw $pyjs_dbg_112_err;
}})()) {
				$pyjs['track']['lineno']=208;
				$pyjs['__active_exception_stack__'] = null;
				throw ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['NotImplementedError']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']("strftime format character '%s'", c);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_113_err){if (!$p['isinstance']($pyjs_dbg_113_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_113_err);}throw $pyjs_dbg_113_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_114_err){if (!$p['isinstance']($pyjs_dbg_114_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_114_err);}throw $pyjs_dbg_114_err;
}})());
			}
			$pyjs['track']['lineno']=209;
			$pyjs['track']['lineno']=209;
			var $pyjs__ret = $p['__op_add']($add25='%',$add26=c);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		format['__name__'] = 'format';

		format['__bind_type__'] = 0;
		format['__args__'] = [null,null,['c']];
		$pyjs['track']['lineno']=210;
		result = '';
		$pyjs['track']['lineno']=211;
		remainder = fmt;
		$pyjs['track']['lineno']=212;
		re_pct = /([^%]*)%(.)(.*)/;
		$pyjs['track']['lineno']=213;
var a, fmtChar;
		$pyjs['track']['lineno']=214;
		while ($p['bool'](remainder)) {
			$pyjs['track']['lineno']=215;

        a = re_pct['exec'](remainder);
        if (!a) {
            result += remainder;
            remainder = false;
        } else {
            result += a[1];
            fmtChar = a[2];
            remainder = a[3];
            if (typeof fmtChar != 'undefined') {
                result += format(fmtChar);
            }
        }
        
		}
		$pyjs['track']['lineno']=229;
		$pyjs['track']['lineno']=229;
		var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['str'](result);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_115_err){if (!$p['isinstance']($pyjs_dbg_115_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_115_err);}throw $pyjs_dbg_115_err;
}})();
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['strftime']['__name__'] = 'strftime';

	$m['strftime']['__bind_type__'] = 0;
	$m['strftime']['__args__'] = [null,null,['fmt'],['t', null]];
	$pyjs['track']['lineno']=231;
	$m['asctime'] = function(t) {
		if (typeof t == 'undefined') t=arguments['callee']['__args__'][2][1];
		var $add28,$sub19,$mod13,$mod14,$sub20,$add27;
		$pyjs['track']={'module':'time','lineno':231};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='time';
		$pyjs['track']['lineno']=231;
		$pyjs['track']['lineno']=232;
		if ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool']((t === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_116_err){if (!$p['isinstance']($pyjs_dbg_116_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_116_err);}throw $pyjs_dbg_116_err;
}})()) {
			$pyjs['track']['lineno']=233;
			t = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['localtime']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_117_err){if (!$p['isinstance']($pyjs_dbg_117_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_117_err);}throw $pyjs_dbg_117_err;
}})();
		}
		$pyjs['track']['lineno']=234;
		$pyjs['track']['lineno']=234;
		var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['sprintf']('%s %s %02d %02d:%02d:%02d %04d', (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['tuple']([$p['__getslice']($m['__c__days']['__getitem__']((typeof ($mod13=$p['__op_add']($add27=t['__getitem__'](6),$add28=1))==typeof ($mod14=7) && typeof $mod13=='number'?
			(($mod13=$mod13%$mod14)<0&&$mod14>0?$mod13+$mod14:$mod13):
			$p['op_mod']($mod13,$mod14))), 0, 3), $m['__c__months']['__getitem__']($p['__op_sub']($sub19=t['__getitem__'](1),$sub20=1)), t['__getitem__'](2), t['__getitem__'](3), t['__getitem__'](4), t['__getitem__'](5), t['__getitem__'](0)]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_118_err){if (!$p['isinstance']($pyjs_dbg_118_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_118_err);}throw $pyjs_dbg_118_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_119_err){if (!$p['isinstance']($pyjs_dbg_119_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_119_err);}throw $pyjs_dbg_119_err;
}})();
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['asctime']['__name__'] = 'asctime';

	$m['asctime']['__bind_type__'] = 0;
	$m['asctime']['__args__'] = [null,null,['t', null]];
	$pyjs['track']['lineno']=236;
	$m['ctime'] = function(t) {
		if (typeof t == 'undefined') t=arguments['callee']['__args__'][2][1];

		$pyjs['track']={'module':'time','lineno':236};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='time';
		$pyjs['track']['lineno']=236;
		$pyjs['track']['lineno']=237;
		$pyjs['track']['lineno']=237;
		var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $m['asctime']((function(){try{try{$pyjs['in_try_except'] += 1;
		return $m['localtime'](t);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_120_err){if (!$p['isinstance']($pyjs_dbg_120_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_120_err);}throw $pyjs_dbg_120_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_121_err){if (!$p['isinstance']($pyjs_dbg_121_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_121_err);}throw $pyjs_dbg_121_err;
}})();
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['ctime']['__name__'] = 'ctime';

	$m['ctime']['__bind_type__'] = 0;
	$m['ctime']['__args__'] = [null,null,['t', null]];
	$pyjs['track']['lineno']=242;

var _DATE_FORMAT_REGXES = {
    'Y': new RegExp('^-?[0-9]{4}'),
    'y': new RegExp('^-?[0-9]{2}'),
    'd': new RegExp('^[0-9]{2}'),
    'm': new RegExp('^[0-9]{2}'),
    'H': new RegExp('^[0-9]{2}'),
    'M': new RegExp('^[0-9]{2}'),
    'S': new RegExp('^[0-9]{2}')
}

/*
 * _parseData does the actual parsing job needed by `strptime`
 */
function _parseDate(datestring, format) {
    var parsed = {};
    for (var i1=0,i2=0;i1<format['length'];i1++,i2++) {
        var c1 = format[i1];
        var c2 = datestring[i2];
        if (c1 == '%') {
            c1 = format[++i1];
            var data = _DATE_FORMAT_REGXES[c1]['exec'](datestring['substring'](i2));
            if (!data['length']) {
                return null;
            }
            data = data[0];
            i2 += data['length']-1;
            var value = parseInt(data, 10);
            if (isNaN(value)) {
                return null;
            }
            parsed[c1] = value;
            continue;
        }
        if (c1 != c2) {
            return null;
        }
    }
    return parsed;
}

/*
 * basic implementation of strptime. The only recognized formats
 * defined in _DATE_FORMAT_REGEXES (i['e']. %Y, %d, %m, %H, %M)
 */
function strptime(datestring, format) {
    var parsed = _parseDate(datestring, format);
    if (!parsed) {
        return null;
    }
    // create initial date (!!! year=0 means 1900 !!!)
    var date = new Date(0, 0, 1, 0, 0);
    date['setFullYear'](0); // reset to year 0
    if (typeof parsed['Y'] != "undefined") {
        date['setFullYear'](parsed['Y']);
    }
    if (typeof parsed['y'] != "undefined") {
        date['setFullYear'](2000+parsed['y']);
    }
    if (typeof parsed['m'] != "undefined") {
        if (parsed['m'] < 1 || parsed['m'] > 12) {
            return null;
        }
        // !!! month indexes start at 0 in javascript !!!
        date['setMonth'](parsed['m'] - 1);
    }
    if (typeof parsed['d'] != "undefined") {
        if (parsed['m'] < 1 || parsed['m'] > 31) {
            return null;
        }
        date['setDate'](parsed['d']);
    }
    if (typeof parsed['H'] != "undefined") {
        if (parsed['H'] < 0 || parsed['H'] > 23) {
            return null;
        }
        date['setHours'](parsed['H']);
    }
    if (typeof parsed['M'] != "undefined") {
        if (parsed['M'] < 0 || parsed['M'] > 59) {
            return null;
        }
        date['setMinutes'](parsed['M']);
    }
    if (typeof parsed['S'] != "undefined") {
        if (parsed['S'] < 0 || parsed['S'] > 59) {
            return null;
        }
        date['setSeconds'](parsed['S']);
    }
    // new Date()['setFullYear'](2010,01,31) returns March 3
    if (typeof parsed['m'] != "undefined" && date['getMonth']() != parsed['m']-1) {
        // date['getMonth']() and parsed['m'] don't correspond
        return null;
    }
    return date;
};

	$pyjs['track']['lineno']=343;
	$m['_strptime'] = function(datestring, format) {
		var $pyjs_try_err;
		$pyjs['track']={'module':'time','lineno':343};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='time';
		$pyjs['track']['lineno']=343;
		$pyjs['track']['lineno']=344;
		var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
		try {
			$pyjs['track']['lineno']=345;
			$pyjs['track']['lineno']=345;
			var $pyjs__ret = $p['float'](strptime(datestring['valueOf'](), format['valueOf']())['getTime']() / 1000.0);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		} catch($pyjs_try_err) {
			$pyjs['__last_exception_stack__'] = sys['save_exception_stack']($pyjs__trackstack_size_1 - 1);
			$pyjs['__active_exception_stack__'] = null;
			var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
			$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='time';
			if (true) {
				$pyjs['track']['lineno']=347;
				$pyjs['__active_exception_stack__'] = null;
				throw ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['ValueError']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']("Invalid or unsupported values for strptime: '%s', '%s'", (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([datestring, format]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_122_err){if (!$p['isinstance']($pyjs_dbg_122_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_122_err);}throw $pyjs_dbg_122_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_123_err){if (!$p['isinstance']($pyjs_dbg_123_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_123_err);}throw $pyjs_dbg_123_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_124_err){if (!$p['isinstance']($pyjs_dbg_124_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_124_err);}throw $pyjs_dbg_124_err;
}})());
			}
		}
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return null;
	};
	$m['_strptime']['__name__'] = '_strptime';

	$m['_strptime']['__bind_type__'] = 0;
	$m['_strptime']['__args__'] = [null,null,['datestring'],['format']];
	$pyjs['track']['lineno']=349;
	$m['strptime'] = function(datestring, format) {
		var tt,$pyjs_try_err;
		$pyjs['track']={'module':'time','lineno':349};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='time';
		$pyjs['track']['lineno']=349;
		$pyjs['track']['lineno']=350;
		var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
		try {
			try {
				$pyjs['in_try_except'] += 1;
				$pyjs['track']['lineno']=351;
				tt = $m['localtime']($p['float'](strptime(datestring['valueOf'](), format['valueOf']())['getTime']() / 1000.0));
				$pyjs['track']['lineno']=352;
				tt['tm_isdst'] = (typeof ($usub3=1)=='number'?
					-$usub3:
					$p['op_usub']($usub3));
				$pyjs['track']['lineno']=353;
				$pyjs['track']['lineno']=353;
				var $pyjs__ret = tt;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			} finally { $pyjs['in_try_except'] -= 1; }
		} catch($pyjs_try_err) {
			$pyjs['__last_exception_stack__'] = sys['save_exception_stack']($pyjs__trackstack_size_1 - 1);
			$pyjs['__active_exception_stack__'] = null;
			var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
			$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='time';
			if (true) {
				$pyjs['track']['lineno']=355;
				$pyjs['__active_exception_stack__'] = null;
				throw ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['ValueError']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']("Invalid or unsupported values for strptime: '%s', '%s'", (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([datestring, format]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_125_err){if (!$p['isinstance']($pyjs_dbg_125_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_125_err);}throw $pyjs_dbg_125_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_126_err){if (!$p['isinstance']($pyjs_dbg_126_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_126_err);}throw $pyjs_dbg_126_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_127_err){if (!$p['isinstance']($pyjs_dbg_127_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_127_err);}throw $pyjs_dbg_127_err;
}})());
			}
		}
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return null;
	};
	$m['strptime']['__name__'] = 'strptime';

	$m['strptime']['__bind_type__'] = 0;
	$m['strptime']['__args__'] = [null,null,['datestring'],['format']];
	return this;
}; /* end time */


/* end module: time */


/*
PYJS_DEPS: ['math']
*/
