/* start module: datetime */
$pyjs['loaded_modules']['datetime'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['datetime']['__was_initialized__']) return $pyjs['loaded_modules']['datetime'];
	var $m = $pyjs['loaded_modules']['datetime'];
	$m['__repr__'] = function() { return '<module: datetime>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'datetime';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$m.__track_lines__[1] = 'datetime.py, line 1:\n    from __pyjamas__ import JS';
	$m.__track_lines__[3] = 'datetime.py, line 3:\n    from time import __c__days, __c__months, strftime, localtime, gmtime, _strptime';
	$m.__track_lines__[5] = 'datetime.py, line 5:\n    MINYEAR = 1';
	$m.__track_lines__[6] = 'datetime.py, line 6:\n    MAXYEAR = 1000000';
	$m.__track_lines__[9] = 'datetime.py, line 9:\n    __Jan_01_0001 = JS("""(new Date((new Date(\'Jan 1 1971\'))[\'getTime\']() - 62167132800000))[\'getTime\']()""")';
	$m.__track_lines__[12] = 'datetime.py, line 12:\n    class date:';
	$m.__track_lines__[13] = 'datetime.py, line 13:\n    def __init__(self, year, month, day, d=None):';
	$m.__track_lines__[14] = 'datetime.py, line 14:\n    if d is None:';
	$m.__track_lines__[15] = 'datetime.py, line 15:\n    d = JS("""new Date(@{{year}}, @{{month}} - 1, @{{day}}, 0, 0, 0, 0)""")';
	$m.__track_lines__[16] = 'datetime.py, line 16:\n    self._d = d';
	$m.__track_lines__[17] = 'datetime.py, line 17:\n    self.year = d.getFullYear()';
	$m.__track_lines__[18] = 'datetime.py, line 18:\n    self.month = d.getMonth() + 1.0';
	$m.__track_lines__[19] = 'datetime.py, line 19:\n    self.day = d.getDate()';
	$m.__track_lines__[22] = 'datetime.py, line 21:\n    @classmethod ... def today(self):';
	$m.__track_lines__[23] = 'datetime.py, line 23:\n    return date(d=JS("""new Date()"""))';
	$m.__track_lines__[26] = 'datetime.py, line 25:\n    @classmethod ... def fromtimestamp(self, timestamp):';
	$m.__track_lines__[27] = 'datetime.py, line 27:\n    d = JS("""new Date()""")';
	$m.__track_lines__[28] = 'datetime.py, line 28:\n    d.setTime(timestamp * 1000.0)';
	$m.__track_lines__[29] = 'datetime.py, line 29:\n    return date(0, 0, 0, d=d)';
	$m.__track_lines__[32] = 'datetime.py, line 31:\n    @classmethod ... def fromordinal(self, ordinal):';
	$m.__track_lines__[33] = 'datetime.py, line 33:\n    t = __Jan_01_0001 + (ordinal-1) * 86400000.0';
	$m.__track_lines__[34] = 'datetime.py, line 34:\n    d = JS("""new Date(@{{t}})""")';
	$m.__track_lines__[35] = 'datetime.py, line 35:\n    return date(0, 0, 0, d=d)';
	$m.__track_lines__[37] = 'datetime.py, line 37:\n    def ctime(self):';
	$m.__track_lines__[38] = 'datetime.py, line 38:\n    return "%s %s %2d %02d:%02d:%02d %04d" % (__c__days[self._d.getDay()][:3], __c__months[self._d.getMonth()][:3], self._d.getDate(), self._d.getHours(), self._d.getMinutes(), self._d.getSeconds(), self._d.getFullYear())';
	$m.__track_lines__[40] = 'datetime.py, line 40:\n    def isocalendar(self):';
	$m.__track_lines__[41] = 'datetime.py, line 41:\n    isoyear = isoweeknr = isoweekday = None';
	$m.__track_lines__[42] = 'datetime.py, line 42:\n    _d = self._d';
	$m.__track_lines__[43] = 'datetime.py, line 43:\n    JS("""';
	$m.__track_lines__[80] = 'datetime.py, line 80:\n    return (isoyear, isoweeknr, isoweekday)';
	$m.__track_lines__[82] = 'datetime.py, line 82:\n    def isoformat(self):';
	$m.__track_lines__[83] = 'datetime.py, line 83:\n    return "%04d-%02d-%02d" % (self.year, self.month, self.day)';
	$m.__track_lines__[85] = 'datetime.py, line 85:\n    def isoweekday(self):';
	$m.__track_lines__[86] = 'datetime.py, line 86:\n    return ((self._d.getDay() + 6) % 7) + 1';
	$m.__track_lines__[88] = 'datetime.py, line 88:\n    def replace(self, year=None, month=None, day=None):';
	$m.__track_lines__[89] = 'datetime.py, line 89:\n    if year is None:';
	$m.__track_lines__[90] = 'datetime.py, line 90:\n    year = self.year';
	$m.__track_lines__[91] = 'datetime.py, line 91:\n    if month is None:';
	$m.__track_lines__[92] = 'datetime.py, line 92:\n    month = self.month';
	$m.__track_lines__[93] = 'datetime.py, line 93:\n    if day is None:';
	$m.__track_lines__[94] = 'datetime.py, line 94:\n    day = self.day';
	$m.__track_lines__[95] = 'datetime.py, line 95:\n    return date(year, month, day)';
	$m.__track_lines__[97] = 'datetime.py, line 97:\n    def strftime(self, format):';
	$m.__track_lines__[98] = 'datetime.py, line 98:\n    return strftime(format, self.timetuple())';
	$m.__track_lines__[100] = 'datetime.py, line 100:\n    def timetuple(self):';
	$m.__track_lines__[101] = 'datetime.py, line 101:\n    tm = localtime(int(self._d.getTime() / 1000.0))';
	$m.__track_lines__[102] = 'datetime.py, line 102:\n    tm.tm_hour = tm.tm_min = tm.tm_sec = 0';
	$m.__track_lines__[103] = 'datetime.py, line 103:\n    return tm';
	$m.__track_lines__[105] = 'datetime.py, line 105:\n    def toordinal(self):';
	$m.__track_lines__[106] = 'datetime.py, line 106:\n    return 1 + int((self._d.getTime() - __Jan_01_0001) / 86400000.0)';
	$m.__track_lines__[108] = 'datetime.py, line 108:\n    def weekday(self):';
	$m.__track_lines__[109] = 'datetime.py, line 109:\n    return (self._d.getDay() + 6) % 7';
	$m.__track_lines__[111] = 'datetime.py, line 111:\n    def __str__(self):';
	$m.__track_lines__[112] = 'datetime.py, line 112:\n    return self.isoformat()';
	$m.__track_lines__[114] = 'datetime.py, line 114:\n    def __cmp__(self, other):';
	$m.__track_lines__[115] = 'datetime.py, line 115:\n    if isinstance(other, date) or isinstance(other, datetime):';
	$m.__track_lines__[116] = 'datetime.py, line 116:\n    a = self._d.getTime()';
	$m.__track_lines__[117] = 'datetime.py, line 117:\n    b = other._d.getTime()';
	$m.__track_lines__[118] = 'datetime.py, line 118:\n    if a < b:';
	$m.__track_lines__[119] = 'datetime.py, line 119:\n    return -1';
	$m.__track_lines__[121] = 'datetime.py, line 121:\n    return 0';
	$m.__track_lines__[123] = 'datetime.py, line 123:\n    raise TypeError("expected date or datetime object")';
	$m.__track_lines__[124] = 'datetime.py, line 124:\n    return 1';
	$m.__track_lines__[126] = 'datetime.py, line 126:\n    def __add__(self, other):';
	$m.__track_lines__[127] = 'datetime.py, line 127:\n    if isinstance(other, timedelta):';
	$m.__track_lines__[128] = 'datetime.py, line 128:\n    return date(self.year, self.month, self.day + other.days)';
	$m.__track_lines__[130] = 'datetime.py, line 130:\n    raise TypeError("expected timedelta object")';
	$m.__track_lines__[132] = 'datetime.py, line 132:\n    def __sub__(self, other):';
	$m.__track_lines__[133] = 'datetime.py, line 133:\n    if isinstance(other, date) or isinstance(other, datetime):';
	$m.__track_lines__[134] = 'datetime.py, line 134:\n    diff = self._d.getTime() - other._d.getTime()';
	$m.__track_lines__[135] = 'datetime.py, line 135:\n    return timedelta(int(diff / 86400000.0), int(diff / 1000.0) % 86400, milliseconds=(diff % 86400000))';
	$m.__track_lines__[137] = 'datetime.py, line 137:\n    return date(self.year, self.month, self.day - other.days)';
	$m.__track_lines__[139] = 'datetime.py, line 139:\n    raise TypeError("expected date or datetime object")';
	$m.__track_lines__[142] = 'datetime.py, line 142:\n    class time:';
	$m.__track_lines__[143] = 'datetime.py, line 143:\n    def __init__(self, hour, minute=0, second=0, microsecond=0, tzinfo=None, d=None):';
	$m.__track_lines__[144] = 'datetime.py, line 144:\n    if tzinfo != None:';
	$m.__track_lines__[145] = 'datetime.py, line 145:\n    raise NotImplementedError("tzinfo")';
	$m.__track_lines__[146] = 'datetime.py, line 146:\n    if d is None:';
	$m.__track_lines__[147] = 'datetime.py, line 147:\n    d = JS("""new Date(1970, 1, 1, @{{hour}}, @{{minute}}, @{{second}}, 0.5 + @{{microsecond}} / 1000.0)""")';
	$m.__track_lines__[148] = 'datetime.py, line 148:\n    self._d = d';
	$m.__track_lines__[149] = 'datetime.py, line 149:\n    self.hour = d.getHours()';
	$m.__track_lines__[150] = 'datetime.py, line 150:\n    self.minute = d.getMinutes()';
	$m.__track_lines__[151] = 'datetime.py, line 151:\n    self.second = d.getSeconds()';
	$m.__track_lines__[152] = 'datetime.py, line 152:\n    self.microsecond = d.getMilliseconds() * 1000.0';
	$m.__track_lines__[153] = 'datetime.py, line 153:\n    self.tzinfo = None';
	$m.__track_lines__[155] = 'datetime.py, line 155:\n    def dst(self):';
	$m.__track_lines__[156] = 'datetime.py, line 156:\n    raise NotImplementedError("dst")';
	$m.__track_lines__[158] = 'datetime.py, line 158:\n    def isoformat(self):';
	$m.__track_lines__[159] = 'datetime.py, line 159:\n    t = "%02d:%02d:%02d" % (self.hour, self.minute, self.second)';
	$m.__track_lines__[160] = 'datetime.py, line 160:\n    if self.microsecond:';
	$m.__track_lines__[161] = 'datetime.py, line 161:\n    t += ".%06d" % self.microsecond';
	$m.__track_lines__[162] = 'datetime.py, line 162:\n    return t';
	$m.__track_lines__[164] = 'datetime.py, line 164:\n    def replace(self, hour=None, minute=None, second=None, microsecond=None, tzinfo=None):';
	$m.__track_lines__[165] = 'datetime.py, line 165:\n    if tzinfo != None:';
	$m.__track_lines__[166] = 'datetime.py, line 166:\n    raise NotImplementedError("tzinfo")';
	$m.__track_lines__[167] = 'datetime.py, line 167:\n    if hour is None:';
	$m.__track_lines__[168] = 'datetime.py, line 168:\n    hour = self.hour';
	$m.__track_lines__[169] = 'datetime.py, line 169:\n    if minute is None:';
	$m.__track_lines__[170] = 'datetime.py, line 170:\n    minute = self.minute';
	$m.__track_lines__[171] = 'datetime.py, line 171:\n    if second is None:';
	$m.__track_lines__[172] = 'datetime.py, line 172:\n    second = self.second';
	$m.__track_lines__[173] = 'datetime.py, line 173:\n    if microsecond is None:';
	$m.__track_lines__[174] = 'datetime.py, line 174:\n    microsecond = self.microsecond';
	$m.__track_lines__[175] = 'datetime.py, line 175:\n    return time(hour, minute, second, microsecond)';
	$m.__track_lines__[177] = 'datetime.py, line 177:\n    def strftime(self, format):';
	$m.__track_lines__[178] = 'datetime.py, line 178:\n    return strftime(format, localtime(int(self._d.getTime() / 1000.0)))';
	$m.__track_lines__[180] = 'datetime.py, line 180:\n    def tzname(self):';
	$m.__track_lines__[181] = 'datetime.py, line 181:\n    return None';
	$m.__track_lines__[183] = 'datetime.py, line 183:\n    def utcoffset(self):';
	$m.__track_lines__[184] = 'datetime.py, line 184:\n    return None';
	$m.__track_lines__[186] = 'datetime.py, line 186:\n    def __str__(self):';
	$m.__track_lines__[187] = 'datetime.py, line 187:\n    return self.isoformat()';
	$m.__track_lines__[190] = 'datetime.py, line 190:\n    class datetime(date, time):';
	$m.__track_lines__[191] = 'datetime.py, line 191:\n    def __init__(self, year, month, day, hour=0, minute=0, second=0, microsecond=0, tzinfo=None, d=None):';
	$m.__track_lines__[192] = 'datetime.py, line 192:\n    if d is None:';
	$m.__track_lines__[193] = 'datetime.py, line 193:\n    d = JS("""new Date(@{{year}}, @{{month}} - 1, @{{day}}, @{{hour}}, @{{minute}}, @{{second}}, 0.5 + @{{microsecond}} / 1000.0)""")';
	$m.__track_lines__[194] = 'datetime.py, line 194:\n    date.__init__(self, 0, 0, 0, d=d)';
	$m.__track_lines__[195] = 'datetime.py, line 195:\n    time.__init__(self, 0, d=d)';
	$m.__track_lines__[198] = 'datetime.py, line 197:\n    @classmethod ... def combine(self, date, time):';
	$m.__track_lines__[199] = 'datetime.py, line 199:\n    return datetime(date.year, date.month, date.day, time.hour, time.minute, time.second, time.microsecond)';
	$m.__track_lines__[202] = 'datetime.py, line 201:\n    @classmethod ... def fromtimestamp(self, timestamp, tz=None):';
	$m.__track_lines__[203] = 'datetime.py, line 203:\n    if tz != None:';
	$m.__track_lines__[204] = 'datetime.py, line 204:\n    raise NotImplementedError("tz")';
	$m.__track_lines__[205] = 'datetime.py, line 205:\n    d = JS("""new Date()""")';
	$m.__track_lines__[206] = 'datetime.py, line 206:\n    d.setTime(timestamp * 1000.0)';
	$m.__track_lines__[207] = 'datetime.py, line 207:\n    return datetime(0, 0, 0, d=d)';
	$m.__track_lines__[210] = 'datetime.py, line 209:\n    @classmethod ... def fromordinal(self, ordinal):';
	$m.__track_lines__[211] = 'datetime.py, line 211:\n    d = JS("""new Date()""")';
	$m.__track_lines__[212] = 'datetime.py, line 212:\n    d.setTime((ordinal - 719163.0) * 86400000.0)';
	$m.__track_lines__[213] = 'datetime.py, line 213:\n    return datetime(0, 0, 0, d=d)';
	$m.__track_lines__[216] = 'datetime.py, line 215:\n    @classmethod ... def now(self, tz=None):';
	$m.__track_lines__[217] = 'datetime.py, line 217:\n    if tz != None:';
	$m.__track_lines__[218] = 'datetime.py, line 218:\n    raise NotImplementedError("tz")';
	$m.__track_lines__[219] = 'datetime.py, line 219:\n    return datetime(0, 0, 0, d=JS("""new Date()"""))';
	$m.__track_lines__[222] = 'datetime.py, line 221:\n    @classmethod ... def strptime(self, datestring, format):';
	$m.__track_lines__[223] = 'datetime.py, line 223:\n    return self.fromtimestamp(_strptime(datestring, format))';
	$m.__track_lines__[226] = 'datetime.py, line 225:\n    @classmethod ... def utcfromtimestamp(self, timestamp):';
	$m.__track_lines__[227] = 'datetime.py, line 227:\n    tm = gmtime(timestamp)';
	$m.__track_lines__[228] = 'datetime.py, line 228:\n    return datetime(tm.tm_year, tm.tm_mon, tm.tm_mday, tm.tm_hour, tm.tm_min, tm.tm_sec)';
	$m.__track_lines__[231] = 'datetime.py, line 230:\n    @classmethod ... def utcnow(self):';
	$m.__track_lines__[232] = 'datetime.py, line 232:\n    d = JS("""new Date()""")';
	$m.__track_lines__[233] = 'datetime.py, line 233:\n    return datetime.utcfromtimestamp(int(d.getTime() / 1000.0))';
	$m.__track_lines__[235] = 'datetime.py, line 235:\n    def timetuple(self):';
	$m.__track_lines__[236] = 'datetime.py, line 236:\n    return localtime(int(self._d.getTime() / 1000.0))';
	$m.__track_lines__[238] = 'datetime.py, line 238:\n    def astimezone(self, tz):';
	$m.__track_lines__[239] = 'datetime.py, line 239:\n    raise NotImplementedError("astimezone")';
	$m.__track_lines__[241] = 'datetime.py, line 241:\n    def date(self):';
	$m.__track_lines__[242] = 'datetime.py, line 242:\n    return date(self.year, self.month, self.day)';
	$m.__track_lines__[244] = 'datetime.py, line 244:\n    def time(self):';
	$m.__track_lines__[245] = 'datetime.py, line 245:\n    return time(self.hour, self.minute, self.second, self.microsecond)';
	$m.__track_lines__[247] = 'datetime.py, line 247:\n    def replace(self, year=None, month=None, day=None, hour=None, minute=None, second=None, microsecond=None, tzinfo=None):';
	$m.__track_lines__[248] = 'datetime.py, line 248:\n    if tzinfo != None:';
	$m.__track_lines__[249] = 'datetime.py, line 249:\n    raise NotImplementedError("tzinfo")';
	$m.__track_lines__[250] = 'datetime.py, line 250:\n    if year is None:';
	$m.__track_lines__[251] = 'datetime.py, line 251:\n    year = self.year';
	$m.__track_lines__[252] = 'datetime.py, line 252:\n    if month is None:';
	$m.__track_lines__[253] = 'datetime.py, line 253:\n    month = self.month';
	$m.__track_lines__[254] = 'datetime.py, line 254:\n    if day is None:';
	$m.__track_lines__[255] = 'datetime.py, line 255:\n    day = self.day';
	$m.__track_lines__[256] = 'datetime.py, line 256:\n    if hour is None:';
	$m.__track_lines__[257] = 'datetime.py, line 257:\n    hour = self.hour';
	$m.__track_lines__[258] = 'datetime.py, line 258:\n    if minute is None:';
	$m.__track_lines__[259] = 'datetime.py, line 259:\n    minute = self.minute';
	$m.__track_lines__[260] = 'datetime.py, line 260:\n    if second is None:';
	$m.__track_lines__[261] = 'datetime.py, line 261:\n    second = self.second';
	$m.__track_lines__[262] = 'datetime.py, line 262:\n    if microsecond is None:';
	$m.__track_lines__[263] = 'datetime.py, line 263:\n    microsecond = self.microsecond';
	$m.__track_lines__[264] = 'datetime.py, line 264:\n    return datetime(year, month, day, hour, minute, second, microsecond)';
	$m.__track_lines__[266] = 'datetime.py, line 266:\n    def timetz(self):';
	$m.__track_lines__[267] = 'datetime.py, line 267:\n    raise NotImplementedError("timetz")';
	$m.__track_lines__[269] = 'datetime.py, line 269:\n    def utctimetuple(self):';
	$m.__track_lines__[270] = 'datetime.py, line 270:\n    return gmtime(self._d.getTime() / 1000.0)';
	$m.__track_lines__[272] = "datetime.py, line 272:\n    def isoformat(self, sep='T'):";
	$m.__track_lines__[273] = 'datetime.py, line 273:\n    t = "%04d-%02d-%02d%s%02d:%02d:%02d" % (self.year, self.month, self.day, sep, self.hour, self.minute, self.second)';
	$m.__track_lines__[274] = 'datetime.py, line 274:\n    if self.microsecond:';
	$m.__track_lines__[275] = 'datetime.py, line 275:\n    t += ".%06d" % self.microsecond';
	$m.__track_lines__[276] = 'datetime.py, line 276:\n    return t';
	$m.__track_lines__[278] = 'datetime.py, line 278:\n    def __add__(self, other):';
	$m.__track_lines__[279] = 'datetime.py, line 279:\n    if isinstance(other, timedelta):';
	$m.__track_lines__[280] = 'datetime.py, line 280:\n    year = self.year';
	$m.__track_lines__[281] = 'datetime.py, line 281:\n    month = self.month';
	$m.__track_lines__[282] = 'datetime.py, line 282:\n    day = self.day + other.days';
	$m.__track_lines__[283] = 'datetime.py, line 283:\n    hour = self.hour + (other.seconds / 3600.0)';
	$m.__track_lines__[284] = 'datetime.py, line 284:\n    minute = self.minute + ((other.seconds / 60.0) % 60)';
	$m.__track_lines__[285] = 'datetime.py, line 285:\n    second = self.second + (other.seconds % 60)';
	$m.__track_lines__[286] = 'datetime.py, line 286:\n    microsecond = self.microsecond + other.microseconds';
	$m.__track_lines__[287] = 'datetime.py, line 287:\n    d = JS("""new Date(@{{year}}, @{{month}}, @{{day}}, @{{hour}}, @{{minute}}, @{{second}}, @{{microsecond}})""")';
	$m.__track_lines__[288] = 'datetime.py, line 288:\n    return datetime(d=d)';
	$m.__track_lines__[290] = 'datetime.py, line 290:\n    raise TypeError("expected timedelta object")';
	$m.__track_lines__[292] = 'datetime.py, line 292:\n    def __sub__(self, other):';
	$m.__track_lines__[293] = 'datetime.py, line 293:\n    if isinstance(other, date) or isinstance(other, datetime):';
	$m.__track_lines__[294] = 'datetime.py, line 294:\n    diff = self._d.getTime() - other._d.getTime()';
	$m.__track_lines__[295] = 'datetime.py, line 295:\n    return timedelta(int(diff / 86400000.0), int(diff / 1000.0) % 86400, milliseconds=(diff % 86400000))';
	$m.__track_lines__[297] = 'datetime.py, line 297:\n    year = self.year';
	$m.__track_lines__[298] = 'datetime.py, line 298:\n    month = self.month';
	$m.__track_lines__[299] = 'datetime.py, line 299:\n    day = self.day - other.days';
	$m.__track_lines__[300] = 'datetime.py, line 300:\n    hour = self.hour - (other.seconds / 3600.0)';
	$m.__track_lines__[301] = 'datetime.py, line 301:\n    minute = self.minute - ((other.seconds / 60.0) % 60)';
	$m.__track_lines__[302] = 'datetime.py, line 302:\n    second = self.second - (other.seconds % 60)';
	$m.__track_lines__[303] = 'datetime.py, line 303:\n    microsecond = self.microsecond - other.microseconds';
	$m.__track_lines__[305] = 'datetime.py, line 305:\n    d = JS("""new Date(@{{year}}, @{{month}}, @{{day}}, @{{hour}}, @{{minute}}, @{{second}}, @{{microsecond}})""")';
	$m.__track_lines__[306] = 'datetime.py, line 306:\n    return datetime(d=d)';
	$m.__track_lines__[308] = 'datetime.py, line 308:\n    raise TypeError("expected date or datetime object")';
	$m.__track_lines__[310] = 'datetime.py, line 310:\n    def __str__(self):';
	$m.__track_lines__[311] = "datetime.py, line 311:\n    return self.isoformat(' ')";
	$m.__track_lines__[314] = 'datetime.py, line 314:\n    class timedelta:';
	$m.__track_lines__[315] = 'datetime.py, line 315:\n    def __init__(self, days=0, seconds=0, microseconds=0, milliseconds=0, minutes=0, hours=0, weeks=0):';
	$m.__track_lines__[316] = 'datetime.py, line 316:\n    self.days = (weeks * 7.0) + days';
	$m.__track_lines__[317] = 'datetime.py, line 317:\n    self.seconds = (hours * 3600.0) + (minutes * 60.0) + seconds';
	$m.__track_lines__[318] = 'datetime.py, line 318:\n    self.microseconds = (milliseconds * 1000.0) + microseconds';
	$m.__track_lines__[320] = 'datetime.py, line 320:\n    class tzinfo(object):';
	$m.__track_lines__[321] = 'datetime.py, line 321:\n    pass';
	$m.__track_lines__[323] = 'datetime.py, line 323:\n    date.min = date(1,1,1)';
	$m.__track_lines__[324] = 'datetime.py, line 324:\n    date.max = date(9999,12,31)';
	$m.__track_lines__[325] = 'datetime.py, line 325:\n    date.resolution = timedelta(1)';
	$m.__track_lines__[327] = 'datetime.py, line 327:\n    time.min = time(0,0)';
	$m.__track_lines__[328] = 'datetime.py, line 328:\n    time.max = time(23,59,59,999999)';
	$m.__track_lines__[329] = 'datetime.py, line 329:\n    time.resolution = timedelta(0,0,1)';
	$m.__track_lines__[331] = 'datetime.py, line 331:\n    datetime.min = datetime(1,1,1,0,0)';
	$m.__track_lines__[332] = 'datetime.py, line 332:\n    datetime.max = datetime(9999,12,31,23,59,59,999999)';
	$m.__track_lines__[333] = 'datetime.py, line 333:\n    datetime.resolution = timedelta(0,0,1)';
	$m.__track_lines__[335] = 'datetime.py, line 335:\n    timedelta.min = timedelta(-999999999)';
	$m.__track_lines__[336] = 'datetime.py, line 336:\n    timedelta.max = timedelta(999999999, hours=23, minutes=59, seconds=59, microseconds=999999)';
	$m.__track_lines__[337] = 'datetime.py, line 337:\n    timedelta.resolution = timedelta(0,0,1)';


	$pyjs['track']['module']='datetime';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=3;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['__c__days'] = $p['___import___']('time.__c__days', null, null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['__c__months'] = $p['___import___']('time.__c__months', null, null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['strftime'] = $p['___import___']('time.strftime', null, null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['localtime'] = $p['___import___']('time.localtime', null, null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['gmtime'] = $p['___import___']('time.gmtime', null, null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['_strptime'] = $p['___import___']('time._strptime', null, null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=5;
	$m['MINYEAR'] = 1;
	$pyjs['track']['lineno']=6;
	$m['MAXYEAR'] = 1000000;
	$pyjs['track']['lineno']=9;
	$m['__Jan_01_0001'] = (new Date((new Date('Jan 1 1971'))['getTime']() - 62167132800000))['getTime']();
	$pyjs['track']['lineno']=12;
	$m['date'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'datetime';
		$pyjs['track']['lineno']=13;
		$method = $pyjs__bind_method2('__init__', function(year, month, day, d) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				year = arguments[1];
				month = arguments[2];
				day = arguments[3];
				d = arguments[4];
			}
			if (typeof d == 'undefined') d=arguments['callee']['__args__'][6][1];
			var $add2,$add1;
			$pyjs['track']={'module':'datetime', 'lineno':13};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='datetime';
			$pyjs['track']['lineno']=13;
			$pyjs['track']['lineno']=14;
			if ($p['bool']((d === null))) {
				$pyjs['track']['lineno']=15;
				d = new Date(year, month - 1, day, 0, 0, 0, 0);
			}
			$pyjs['track']['lineno']=16;
			self['_d'] = d;
			$pyjs['track']['lineno']=17;
			self['year'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return d['getFullYear']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})();
			$pyjs['track']['lineno']=18;
			self['month'] = $p['__op_add']($add1=(function(){try{try{$pyjs['in_try_except'] += 1;
			return d['getMonth']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})(),$add2=1.0);
			$pyjs['track']['lineno']=19;
			self['day'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return d['getDate']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['year'],['month'],['day'],['d', null]]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=22;
		$method = $pyjs__bind_method2('today', function() {
    var self = this['prototype'];

			$pyjs['track']={'module':'datetime', 'lineno':22};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='datetime';
			$pyjs['track']['lineno']=22;
			$pyjs['track']['lineno']=23;
			$pyjs['track']['lineno']=23;
			var $pyjs__ret = $pyjs_kwargs_call(null, $m['date'], null, null, [{'d':new Date()}]);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 2, [null,null,['self']]);
		$cls_definition['today'] = $method;
		$pyjs['track']['lineno']=26;
		$method = $pyjs__bind_method2('fromtimestamp', function(timestamp) {
    var self = this['prototype'];
			var d,$mul1,$mul2;
			$pyjs['track']={'module':'datetime', 'lineno':26};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='datetime';
			$pyjs['track']['lineno']=26;
			$pyjs['track']['lineno']=27;
			d = new Date();
			$pyjs['track']['lineno']=28;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return d['setTime']((typeof ($mul1=timestamp)==typeof ($mul2=1000.0) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
			$pyjs['track']['lineno']=29;
			$pyjs['track']['lineno']=29;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(null, $m['date'], null, null, [{'d':d}, 0, 0, 0]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 2, [null,null,['self'],['timestamp']]);
		$cls_definition['fromtimestamp'] = $method;
		$pyjs['track']['lineno']=32;
		$method = $pyjs__bind_method2('fromordinal', function(ordinal) {
    var self = this['prototype'];
			var d,$add3,t,$add4,$sub2,$sub1,$mul4,$mul3;
			$pyjs['track']={'module':'datetime', 'lineno':32};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='datetime';
			$pyjs['track']['lineno']=32;
			$pyjs['track']['lineno']=33;
			t = $p['__op_add']($add3=$m['__Jan_01_0001'],$add4=(typeof ($mul3=$p['__op_sub']($sub1=ordinal,$sub2=1))==typeof ($mul4=86400000.0) && typeof $mul3=='number'?
				$mul3*$mul4:
				$p['op_mul']($mul3,$mul4)));
			$pyjs['track']['lineno']=34;
			d = new Date(t);
			$pyjs['track']['lineno']=35;
			$pyjs['track']['lineno']=35;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(null, $m['date'], null, null, [{'d':d}, 0, 0, 0]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 2, [null,null,['self'],['ordinal']]);
		$cls_definition['fromordinal'] = $method;
		$pyjs['track']['lineno']=37;
		$method = $pyjs__bind_method2('ctime', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'datetime', 'lineno':37};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='datetime';
			$pyjs['track']['lineno']=37;
			$pyjs['track']['lineno']=38;
			$pyjs['track']['lineno']=38;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('%s %s %2d %02d:%02d:%02d %04d', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple']([$p['__getslice']($m['__c__days']['__getitem__']((function(){try{try{$pyjs['in_try_except'] += 1;
			return self['_d']['getDay']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})()), 0, 3), $p['__getslice']($m['__c__months']['__getitem__']((function(){try{try{$pyjs['in_try_except'] += 1;
			return self['_d']['getMonth']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})()), 0, 3), (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['_d']['getDate']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['_d']['getHours']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['_d']['getMinutes']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['_d']['getSeconds']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['_d']['getFullYear']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['ctime'] = $method;
		$pyjs['track']['lineno']=40;
		$method = $pyjs__bind_method2('isocalendar', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var isoweeknr,isoyear,isoweekday,$assign1,$assign2,_d;
			$assign2 = null;
			isoyear = $assign2;
			isoweeknr = $assign2;
			isoweekday = $assign2;
			_d = $p['getattr'](self, '_d');

            var gregdaynumber = function(year, month, day) {
                var y = year;
                var m = month;
                if (month < 3) {
                    y--;
                    m += 12;
                }
                return Math['floor'](365.25 * y) - Math['floor'](y / 100) + Math['floor'](y / 400) + Math['floor'](30.6 * (m + 1)) + day - 62;
            };

            var year = _d['getFullYear']();
            var month = _d['getMonth']();
            var day = _d['getDate']();
            var wday = _d['getDay']();

            isoweekday = ((wday + 6) % 7) + 1;
            isoyear = year;

            var d0 = gregdaynumber(year, 1, 0);
            var weekday0 = ((d0 + 4) % 7) + 1;

            var d = gregdaynumber(year, month + 1, day);
            isoweeknr = Math['floor']((d - d0 + weekday0 + 6) / 7) - Math['floor']((weekday0 + 3) / 7);

            if ((month == 11) && ((day - isoweekday) > 27)) {
                isoweeknr = 1;
                isoyear = isoyear + 1;
            }

            if ((month == 0) && ((isoweekday - day) > 3)) {
                d0 = gregdaynumber(year - 1, 1, 0);
                weekday0 = ((d0 + 4) % 7) + 1;
                isoweeknr = Math['floor']((d - d0 + weekday0 + 6) / 7) - Math['floor']((weekday0 + 3) / 7);
                isoyear--;
            }
        
			return $p['tuple']([isoyear, isoweeknr, isoweekday]);
		}
	, 1, [null,null,['self']]);
		$cls_definition['isocalendar'] = $method;
		$pyjs['track']['lineno']=82;
		$method = $pyjs__bind_method2('isoformat', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'datetime', 'lineno':82};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='datetime';
			$pyjs['track']['lineno']=82;
			$pyjs['track']['lineno']=83;
			$pyjs['track']['lineno']=83;
			var $pyjs__ret = $p['sprintf']('%04d-%02d-%02d', $p['tuple']([$p['getattr'](self, 'year'), $p['getattr'](self, 'month'), $p['getattr'](self, 'day')]));
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['isoformat'] = $method;
		$pyjs['track']['lineno']=85;
		$method = $pyjs__bind_method2('isoweekday', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add5,$mod1,$add7,$mod2,$add6,$add8;
			$pyjs['track']={'module':'datetime', 'lineno':85};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='datetime';
			$pyjs['track']['lineno']=85;
			$pyjs['track']['lineno']=86;
			$pyjs['track']['lineno']=86;
			var $pyjs__ret = $p['__op_add']($add7=(typeof ($mod1=$p['__op_add']($add5=(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['_d']['getDay']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})(),$add6=6))==typeof ($mod2=7) && typeof $mod1=='number'?
				(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
				$p['op_mod']($mod1,$mod2)),$add8=1);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['isoweekday'] = $method;
		$pyjs['track']['lineno']=88;
		$method = $pyjs__bind_method2('$$replace', function(year, month, day) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				year = arguments[1];
				month = arguments[2];
				day = arguments[3];
			}
			if (typeof year == 'undefined') year=arguments['callee']['__args__'][3][1];
			if (typeof month == 'undefined') month=arguments['callee']['__args__'][4][1];
			if (typeof day == 'undefined') day=arguments['callee']['__args__'][5][1];

			$pyjs['track']={'module':'datetime', 'lineno':88};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='datetime';
			$pyjs['track']['lineno']=88;
			$pyjs['track']['lineno']=89;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((year === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})()) {
				$pyjs['track']['lineno']=90;
				year = $p['getattr'](self, 'year');
			}
			$pyjs['track']['lineno']=91;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((month === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})()) {
				$pyjs['track']['lineno']=92;
				month = $p['getattr'](self, 'month');
			}
			$pyjs['track']['lineno']=93;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((day === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})()) {
				$pyjs['track']['lineno']=94;
				day = $p['getattr'](self, 'day');
			}
			$pyjs['track']['lineno']=95;
			$pyjs['track']['lineno']=95;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['date'](year, month, day);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['year', null],['month', null],['day', null]]);
		$cls_definition['$$replace'] = $method;
		$pyjs['track']['lineno']=97;
		$method = $pyjs__bind_method2('strftime', function(format) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				format = arguments[1];
			}

			$pyjs['track']={'module':'datetime', 'lineno':97};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='datetime';
			$pyjs['track']['lineno']=97;
			$pyjs['track']['lineno']=98;
			$pyjs['track']['lineno']=98;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['strftime'](format, (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['timetuple']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['format']]);
		$cls_definition['strftime'] = $method;
		$pyjs['track']['lineno']=100;
		$method = $pyjs__bind_method2('timetuple', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $div2,tm,$div1,$assign3;
			$pyjs['track']={'module':'datetime', 'lineno':100};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='datetime';
			$pyjs['track']['lineno']=100;
			$pyjs['track']['lineno']=101;
			tm = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['localtime']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['float_int']((typeof ($div1=(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['_d']['getTime']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})())==typeof ($div2=1000.0) && typeof $div1=='number' && $div2 !== 0?
				$div1/$div2:
				$p['op_div']($div1,$div2)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
			$pyjs['track']['lineno']=102;
			$assign3 = 0;
			tm['tm_hour'] = $assign3;
			tm['tm_min'] = $assign3;
			tm['tm_sec'] = $assign3;
			$pyjs['track']['lineno']=103;
			$pyjs['track']['lineno']=103;
			var $pyjs__ret = tm;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['timetuple'] = $method;
		$pyjs['track']['lineno']=105;
		$method = $pyjs__bind_method2('toordinal', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add10,$sub3,$div3,$add9,$div4,$sub4;
			$pyjs['track']={'module':'datetime', 'lineno':105};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='datetime';
			$pyjs['track']['lineno']=105;
			$pyjs['track']['lineno']=106;
			$pyjs['track']['lineno']=106;
			var $pyjs__ret = $p['__op_add']($add9=1,$add10=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['float_int']((typeof ($div3=$p['__op_sub']($sub3=(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['_d']['getTime']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})(),$sub4=$m['__Jan_01_0001']))==typeof ($div4=86400000.0) && typeof $div3=='number' && $div4 !== 0?
				$div3/$div4:
				$p['op_div']($div3,$div4)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})());
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['toordinal'] = $method;
		$pyjs['track']['lineno']=108;
		$method = $pyjs__bind_method2('weekday', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $mod4,$mod3,$add11,$add12;
			$pyjs['track']={'module':'datetime', 'lineno':108};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='datetime';
			$pyjs['track']['lineno']=108;
			$pyjs['track']['lineno']=109;
			$pyjs['track']['lineno']=109;
			var $pyjs__ret = (typeof ($mod3=$p['__op_add']($add11=(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['_d']['getDay']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})(),$add12=6))==typeof ($mod4=7) && typeof $mod3=='number'?
				(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
				$p['op_mod']($mod3,$mod4));
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['weekday'] = $method;
		$pyjs['track']['lineno']=111;
		$method = $pyjs__bind_method2('__str__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'datetime', 'lineno':111};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='datetime';
			$pyjs['track']['lineno']=111;
			$pyjs['track']['lineno']=112;
			$pyjs['track']['lineno']=112;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['isoformat']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		$pyjs['track']['lineno']=114;
		$method = $pyjs__bind_method2('__cmp__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var a,b,$or1,$or2;
			$pyjs['track']={'module':'datetime', 'lineno':114};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='datetime';
			$pyjs['track']['lineno']=114;
			$pyjs['track']['lineno']=115;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($or1=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance'](other, $m['date']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})())?$or1:(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance'](other, (typeof datetime == "undefined"?$m['datetime']:datetime));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})()) {
				$pyjs['track']['lineno']=116;
				a = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['_d']['getTime']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
				$pyjs['track']['lineno']=117;
				b = (function(){try{try{$pyjs['in_try_except'] += 1;
				return other['_d']['getTime']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})();
				$pyjs['track']['lineno']=118;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['cmp'](a, b) == -1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})()) {
					$pyjs['track']['lineno']=119;
					$pyjs['track']['lineno']=119;
					var $pyjs__ret = (typeof ($usub1=1)=='number'?
						-$usub1:
						$p['op_usub']($usub1));
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq'](a, b));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})()) {
					$pyjs['track']['lineno']=121;
					$pyjs['track']['lineno']=121;
					var $pyjs__ret = 0;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
			}
			else {
				$pyjs['track']['lineno']=123;
				$pyjs['__active_exception_stack__'] = null;
				throw ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['TypeError']('expected date or datetime object');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})());
			}
			$pyjs['track']['lineno']=124;
			$pyjs['track']['lineno']=124;
			var $pyjs__ret = 1;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__cmp__'] = $method;
		$pyjs['track']['lineno']=126;
		$method = $pyjs__bind_method2('__add__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $add14,$add13;
			$pyjs['track']={'module':'datetime', 'lineno':126};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='datetime';
			$pyjs['track']['lineno']=126;
			$pyjs['track']['lineno']=127;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance'](other, (typeof timedelta == "undefined"?$m['timedelta']:timedelta));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})()) {
				$pyjs['track']['lineno']=128;
				$pyjs['track']['lineno']=128;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['date']($p['getattr'](self, 'year'), $p['getattr'](self, 'month'), $p['__op_add']($add13=$p['getattr'](self, 'day'),$add14=$p['getattr'](other, 'days')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			else {
				$pyjs['track']['lineno']=130;
				$pyjs['__active_exception_stack__'] = null;
				throw ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['TypeError']('expected timedelta object');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})());
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__add__'] = $method;
		$pyjs['track']['lineno']=132;
		$method = $pyjs__bind_method2('__sub__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $mod8,$or4,$or3,$sub8,$sub7,$mod7,$div7,$mod5,$div8,$mod6,diff,$div6,$sub6,$sub5,$div5;
			$pyjs['track']={'module':'datetime', 'lineno':132};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='datetime';
			$pyjs['track']['lineno']=132;
			$pyjs['track']['lineno']=133;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($or3=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance'](other, $m['date']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})())?$or3:(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance'](other, (typeof datetime == "undefined"?$m['datetime']:datetime));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})()) {
				$pyjs['track']['lineno']=134;
				diff = $p['__op_sub']($sub5=(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['_d']['getTime']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})(),$sub6=(function(){try{try{$pyjs['in_try_except'] += 1;
				return other['_d']['getTime']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})());
				$pyjs['track']['lineno']=135;
				$pyjs['track']['lineno']=135;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call(null, (typeof timedelta == "undefined"?$m['timedelta']:timedelta), null, null, [{'milliseconds':(typeof ($mod7=diff)==typeof ($mod8=86400000) && typeof $mod7=='number'?
					(($mod7=$mod7%$mod8)<0&&$mod8>0?$mod7+$mod8:$mod7):
					$p['op_mod']($mod7,$mod8))}, (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['float_int']((typeof ($div5=diff)==typeof ($div6=86400000.0) && typeof $div5=='number' && $div6 !== 0?
					$div5/$div6:
					$p['op_div']($div5,$div6)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})(), (typeof ($mod5=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['float_int']((typeof ($div7=diff)==typeof ($div8=1000.0) && typeof $div7=='number' && $div8 !== 0?
					$div7/$div8:
					$p['op_div']($div7,$div8)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})())==typeof ($mod6=86400) && typeof $mod5=='number'?
					(($mod5=$mod5%$mod6)<0&&$mod6>0?$mod5+$mod6:$mod5):
					$p['op_mod']($mod5,$mod6))]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance'](other, (typeof timedelta == "undefined"?$m['timedelta']:timedelta));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})()) {
				$pyjs['track']['lineno']=137;
				$pyjs['track']['lineno']=137;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['date']($p['getattr'](self, 'year'), $p['getattr'](self, 'month'), $p['__op_sub']($sub7=$p['getattr'](self, 'day'),$sub8=$p['getattr'](other, 'days')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			else {
				$pyjs['track']['lineno']=139;
				$pyjs['__active_exception_stack__'] = null;
				throw ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['TypeError']('expected date or datetime object');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})());
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__sub__'] = $method;
		$pyjs['track']['lineno']=12;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('date', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=142;
	$m['time'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'datetime';
		$pyjs['track']['lineno']=143;
		$method = $pyjs__bind_method2('__init__', function(hour, minute, second, microsecond, tzinfo, d) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				hour = arguments[1];
				minute = arguments[2];
				second = arguments[3];
				microsecond = arguments[4];
				tzinfo = arguments[5];
				d = arguments[6];
			}
			if (typeof minute == 'undefined') minute=arguments['callee']['__args__'][4][1];
			if (typeof second == 'undefined') second=arguments['callee']['__args__'][5][1];
			if (typeof microsecond == 'undefined') microsecond=arguments['callee']['__args__'][6][1];
			if (typeof tzinfo == 'undefined') tzinfo=arguments['callee']['__args__'][7][1];
			if (typeof d == 'undefined') d=arguments['callee']['__args__'][8][1];
			var $mul6,$mul5;
			$pyjs['track']={'module':'datetime', 'lineno':143};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='datetime';
			$pyjs['track']['lineno']=143;
			$pyjs['track']['lineno']=144;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['op_eq'](tzinfo, null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})()) {
				$pyjs['track']['lineno']=145;
				$pyjs['__active_exception_stack__'] = null;
				throw ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['NotImplementedError']('tzinfo');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})());
			}
			$pyjs['track']['lineno']=146;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((d === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})()) {
				$pyjs['track']['lineno']=147;
				d = new Date(1970, 1, 1, hour, minute, second, 0.5 + microsecond / 1000.0);
			}
			$pyjs['track']['lineno']=148;
			self['_d'] = d;
			$pyjs['track']['lineno']=149;
			self['hour'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return d['getHours']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})();
			$pyjs['track']['lineno']=150;
			self['minute'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return d['getMinutes']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})();
			$pyjs['track']['lineno']=151;
			self['second'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return d['getSeconds']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})();
			$pyjs['track']['lineno']=152;
			self['microsecond'] = (typeof ($mul5=(function(){try{try{$pyjs['in_try_except'] += 1;
			return d['getMilliseconds']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})())==typeof ($mul6=1000.0) && typeof $mul5=='number'?
				$mul5*$mul6:
				$p['op_mul']($mul5,$mul6));
			$pyjs['track']['lineno']=153;
			self['tzinfo'] = null;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['hour'],['minute', 0],['second', 0],['microsecond', 0],['tzinfo', null],['d', null]]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=155;
		$method = $pyjs__bind_method2('dst', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'datetime', 'lineno':155};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='datetime';
			$pyjs['track']['lineno']=155;
			$pyjs['track']['lineno']=156;
			$pyjs['__active_exception_stack__'] = null;
			throw ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['NotImplementedError']('dst');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})());
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['dst'] = $method;
		$pyjs['track']['lineno']=158;
		$method = $pyjs__bind_method2('isoformat', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $add16,$add15,t;
			$pyjs['track']={'module':'datetime', 'lineno':158};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='datetime';
			$pyjs['track']['lineno']=158;
			$pyjs['track']['lineno']=159;
			t = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('%02d:%02d:%02d', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple']([$p['getattr'](self, 'hour'), $p['getattr'](self, 'minute'), $p['getattr'](self, 'second')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})();
			$pyjs['track']['lineno']=160;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'microsecond'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})()) {
				$pyjs['track']['lineno']=161;
				t = $p['__op_add']($add15=t,$add16=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('.%06d', $p['getattr'](self, 'microsecond'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})());
			}
			$pyjs['track']['lineno']=162;
			$pyjs['track']['lineno']=162;
			var $pyjs__ret = t;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['isoformat'] = $method;
		$pyjs['track']['lineno']=164;
		$method = $pyjs__bind_method2('$$replace', function(hour, minute, second, microsecond, tzinfo) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				hour = arguments[1];
				minute = arguments[2];
				second = arguments[3];
				microsecond = arguments[4];
				tzinfo = arguments[5];
			}
			if (typeof hour == 'undefined') hour=arguments['callee']['__args__'][3][1];
			if (typeof minute == 'undefined') minute=arguments['callee']['__args__'][4][1];
			if (typeof second == 'undefined') second=arguments['callee']['__args__'][5][1];
			if (typeof microsecond == 'undefined') microsecond=arguments['callee']['__args__'][6][1];
			if (typeof tzinfo == 'undefined') tzinfo=arguments['callee']['__args__'][7][1];

			$pyjs['track']={'module':'datetime', 'lineno':164};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='datetime';
			$pyjs['track']['lineno']=164;
			$pyjs['track']['lineno']=165;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['op_eq'](tzinfo, null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})()) {
				$pyjs['track']['lineno']=166;
				$pyjs['__active_exception_stack__'] = null;
				throw ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['NotImplementedError']('tzinfo');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})());
			}
			$pyjs['track']['lineno']=167;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((hour === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})()) {
				$pyjs['track']['lineno']=168;
				hour = $p['getattr'](self, 'hour');
			}
			$pyjs['track']['lineno']=169;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((minute === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})()) {
				$pyjs['track']['lineno']=170;
				minute = $p['getattr'](self, 'minute');
			}
			$pyjs['track']['lineno']=171;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((second === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})()) {
				$pyjs['track']['lineno']=172;
				second = $p['getattr'](self, 'second');
			}
			$pyjs['track']['lineno']=173;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((microsecond === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})()) {
				$pyjs['track']['lineno']=174;
				microsecond = $p['getattr'](self, 'microsecond');
			}
			$pyjs['track']['lineno']=175;
			$pyjs['track']['lineno']=175;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['time'](hour, minute, second, microsecond);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['hour', null],['minute', null],['second', null],['microsecond', null],['tzinfo', null]]);
		$cls_definition['$$replace'] = $method;
		$pyjs['track']['lineno']=177;
		$method = $pyjs__bind_method2('strftime', function(format) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				format = arguments[1];
			}
			var $div9,$div10;
			$pyjs['track']={'module':'datetime', 'lineno':177};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='datetime';
			$pyjs['track']['lineno']=177;
			$pyjs['track']['lineno']=178;
			$pyjs['track']['lineno']=178;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['strftime'](format, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['localtime']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['float_int']((typeof ($div9=(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['_d']['getTime']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})())==typeof ($div10=1000.0) && typeof $div9=='number' && $div10 !== 0?
				$div9/$div10:
				$p['op_div']($div9,$div10)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['format']]);
		$cls_definition['strftime'] = $method;
		$pyjs['track']['lineno']=180;
		$method = $pyjs__bind_method2('tzname', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'datetime', 'lineno':180};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='datetime';
			$pyjs['track']['lineno']=180;
			$pyjs['track']['lineno']=181;
			$pyjs['track']['lineno']=181;
			var $pyjs__ret = null;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['tzname'] = $method;
		$pyjs['track']['lineno']=183;
		$method = $pyjs__bind_method2('utcoffset', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'datetime', 'lineno':183};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='datetime';
			$pyjs['track']['lineno']=183;
			$pyjs['track']['lineno']=184;
			$pyjs['track']['lineno']=184;
			var $pyjs__ret = null;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['utcoffset'] = $method;
		$pyjs['track']['lineno']=186;
		$method = $pyjs__bind_method2('__str__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'datetime', 'lineno':186};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='datetime';
			$pyjs['track']['lineno']=186;
			$pyjs['track']['lineno']=187;
			$pyjs['track']['lineno']=187;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['isoformat']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		$pyjs['track']['lineno']=142;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('time', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=190;
	$m['datetime'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'datetime';
		$pyjs['track']['lineno']=191;
		$method = $pyjs__bind_method2('__init__', function(year, month, day, hour, minute, second, microsecond, tzinfo, d) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				year = arguments[1];
				month = arguments[2];
				day = arguments[3];
				hour = arguments[4];
				minute = arguments[5];
				second = arguments[6];
				microsecond = arguments[7];
				tzinfo = arguments[8];
				d = arguments[9];
			}
			if (typeof hour == 'undefined') hour=arguments['callee']['__args__'][6][1];
			if (typeof minute == 'undefined') minute=arguments['callee']['__args__'][7][1];
			if (typeof second == 'undefined') second=arguments['callee']['__args__'][8][1];
			if (typeof microsecond == 'undefined') microsecond=arguments['callee']['__args__'][9][1];
			if (typeof tzinfo == 'undefined') tzinfo=arguments['callee']['__args__'][10][1];
			if (typeof d == 'undefined') d=arguments['callee']['__args__'][11][1];

			$pyjs['track']={'module':'datetime', 'lineno':191};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='datetime';
			$pyjs['track']['lineno']=191;
			$pyjs['track']['lineno']=192;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((d === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})()) {
				$pyjs['track']['lineno']=193;
				d = new Date(year, month - 1, day, hour, minute, second, 0.5 + microsecond / 1000.0);
			}
			$pyjs['track']['lineno']=194;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['date'], '__init__', null, null, [{'d':d}, self, 0, 0, 0]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})();
			$pyjs['track']['lineno']=195;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['time'], '__init__', null, null, [{'d':d}, self, 0]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['year'],['month'],['day'],['hour', 0],['minute', 0],['second', 0],['microsecond', 0],['tzinfo', null],['d', null]]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=198;
		$method = $pyjs__bind_method2('combine', function(date, time) {
    var self = this['prototype'];

			$pyjs['track']={'module':'datetime', 'lineno':198};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='datetime';
			$pyjs['track']['lineno']=198;
			$pyjs['track']['lineno']=199;
			$pyjs['track']['lineno']=199;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['datetime']($p['getattr'](date, 'year'), $p['getattr'](date, 'month'), $p['getattr'](date, 'day'), $p['getattr'](time, 'hour'), $p['getattr'](time, 'minute'), $p['getattr'](time, 'second'), $p['getattr'](time, 'microsecond'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 2, [null,null,['self'],['date'],['time']]);
		$cls_definition['combine'] = $method;
		$pyjs['track']['lineno']=202;
		$method = $pyjs__bind_method2('fromtimestamp', function(timestamp, tz) {
    var self = this['prototype'];
			if (typeof tz == 'undefined') tz=arguments['callee']['__args__'][4][1];
			var d,$mul8,$mul7;
			$pyjs['track']={'module':'datetime', 'lineno':202};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='datetime';
			$pyjs['track']['lineno']=202;
			$pyjs['track']['lineno']=203;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['op_eq'](tz, null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})()) {
				$pyjs['track']['lineno']=204;
				$pyjs['__active_exception_stack__'] = null;
				throw ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['NotImplementedError']('tz');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})());
			}
			$pyjs['track']['lineno']=205;
			d = new Date();
			$pyjs['track']['lineno']=206;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return d['setTime']((typeof ($mul7=timestamp)==typeof ($mul8=1000.0) && typeof $mul7=='number'?
				$mul7*$mul8:
				$p['op_mul']($mul7,$mul8)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
}})();
			$pyjs['track']['lineno']=207;
			$pyjs['track']['lineno']=207;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(null, $m['datetime'], null, null, [{'d':d}, 0, 0, 0]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 2, [null,null,['self'],['timestamp'],['tz', null]]);
		$cls_definition['fromtimestamp'] = $method;
		$pyjs['track']['lineno']=210;
		$method = $pyjs__bind_method2('fromordinal', function(ordinal) {
    var self = this['prototype'];
			var d,$mul10,$sub10,$sub9,$mul9;
			$pyjs['track']={'module':'datetime', 'lineno':210};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='datetime';
			$pyjs['track']['lineno']=210;
			$pyjs['track']['lineno']=211;
			d = new Date();
			$pyjs['track']['lineno']=212;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return d['setTime']((typeof ($mul9=$p['__op_sub']($sub9=ordinal,$sub10=719163.0))==typeof ($mul10=86400000.0) && typeof $mul9=='number'?
				$mul9*$mul10:
				$p['op_mul']($mul9,$mul10)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})();
			$pyjs['track']['lineno']=213;
			$pyjs['track']['lineno']=213;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(null, $m['datetime'], null, null, [{'d':d}, 0, 0, 0]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 2, [null,null,['self'],['ordinal']]);
		$cls_definition['fromordinal'] = $method;
		$pyjs['track']['lineno']=216;
		$method = $pyjs__bind_method2('now', function(tz) {
    var self = this['prototype'];
			if (typeof tz == 'undefined') tz=arguments['callee']['__args__'][3][1];

			$pyjs['track']={'module':'datetime', 'lineno':216};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='datetime';
			$pyjs['track']['lineno']=216;
			$pyjs['track']['lineno']=217;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['op_eq'](tz, null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_88_err){if (!$p['isinstance']($pyjs_dbg_88_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_88_err);}throw $pyjs_dbg_88_err;
}})()) {
				$pyjs['track']['lineno']=218;
				$pyjs['__active_exception_stack__'] = null;
				throw ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['NotImplementedError']('tz');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_89_err){if (!$p['isinstance']($pyjs_dbg_89_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_89_err);}throw $pyjs_dbg_89_err;
}})());
			}
			$pyjs['track']['lineno']=219;
			$pyjs['track']['lineno']=219;
			var $pyjs__ret = $pyjs_kwargs_call(null, $m['datetime'], null, null, [{'d':new Date()}, 0, 0, 0]);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 2, [null,null,['self'],['tz', null]]);
		$cls_definition['now'] = $method;
		$pyjs['track']['lineno']=222;
		$method = $pyjs__bind_method2('strptime', function(datestring, format) {
    var self = this['prototype'];

			$pyjs['track']={'module':'datetime', 'lineno':222};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='datetime';
			$pyjs['track']['lineno']=222;
			$pyjs['track']['lineno']=223;
			$pyjs['track']['lineno']=223;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['fromtimestamp']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['_strptime'](datestring, format);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_90_err){if (!$p['isinstance']($pyjs_dbg_90_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_90_err);}throw $pyjs_dbg_90_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_91_err){if (!$p['isinstance']($pyjs_dbg_91_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_91_err);}throw $pyjs_dbg_91_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 2, [null,null,['self'],['datestring'],['format']]);
		$cls_definition['strptime'] = $method;
		$pyjs['track']['lineno']=226;
		$method = $pyjs__bind_method2('utcfromtimestamp', function(timestamp) {
    var self = this['prototype'];
			var tm;
			$pyjs['track']={'module':'datetime', 'lineno':226};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='datetime';
			$pyjs['track']['lineno']=226;
			$pyjs['track']['lineno']=227;
			tm = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['gmtime'](timestamp);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_92_err){if (!$p['isinstance']($pyjs_dbg_92_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_92_err);}throw $pyjs_dbg_92_err;
}})();
			$pyjs['track']['lineno']=228;
			$pyjs['track']['lineno']=228;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['datetime']($p['getattr'](tm, 'tm_year'), $p['getattr'](tm, 'tm_mon'), $p['getattr'](tm, 'tm_mday'), $p['getattr'](tm, 'tm_hour'), $p['getattr'](tm, 'tm_min'), $p['getattr'](tm, 'tm_sec'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_93_err){if (!$p['isinstance']($pyjs_dbg_93_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_93_err);}throw $pyjs_dbg_93_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 2, [null,null,['self'],['timestamp']]);
		$cls_definition['utcfromtimestamp'] = $method;
		$pyjs['track']['lineno']=231;
		$method = $pyjs__bind_method2('utcnow', function() {
    var self = this['prototype'];
			var d,$div12,$div11;
			$pyjs['track']={'module':'datetime', 'lineno':231};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='datetime';
			$pyjs['track']['lineno']=231;
			$pyjs['track']['lineno']=232;
			d = new Date();
			$pyjs['track']['lineno']=233;
			$pyjs['track']['lineno']=233;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['datetime']['utcfromtimestamp']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['float_int']((typeof ($div11=(function(){try{try{$pyjs['in_try_except'] += 1;
			return d['getTime']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_94_err){if (!$p['isinstance']($pyjs_dbg_94_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_94_err);}throw $pyjs_dbg_94_err;
}})())==typeof ($div12=1000.0) && typeof $div11=='number' && $div12 !== 0?
				$div11/$div12:
				$p['op_div']($div11,$div12)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_95_err){if (!$p['isinstance']($pyjs_dbg_95_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_95_err);}throw $pyjs_dbg_95_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_96_err){if (!$p['isinstance']($pyjs_dbg_96_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_96_err);}throw $pyjs_dbg_96_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 2, [null,null,['self']]);
		$cls_definition['utcnow'] = $method;
		$pyjs['track']['lineno']=235;
		$method = $pyjs__bind_method2('timetuple', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $div14,$div13;
			$pyjs['track']={'module':'datetime', 'lineno':235};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='datetime';
			$pyjs['track']['lineno']=235;
			$pyjs['track']['lineno']=236;
			$pyjs['track']['lineno']=236;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['localtime']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['float_int']((typeof ($div13=(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['_d']['getTime']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_97_err){if (!$p['isinstance']($pyjs_dbg_97_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_97_err);}throw $pyjs_dbg_97_err;
}})())==typeof ($div14=1000.0) && typeof $div13=='number' && $div14 !== 0?
				$div13/$div14:
				$p['op_div']($div13,$div14)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_98_err){if (!$p['isinstance']($pyjs_dbg_98_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_98_err);}throw $pyjs_dbg_98_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_99_err){if (!$p['isinstance']($pyjs_dbg_99_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_99_err);}throw $pyjs_dbg_99_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['timetuple'] = $method;
		$pyjs['track']['lineno']=238;
		$method = $pyjs__bind_method2('astimezone', function(tz) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				tz = arguments[1];
			}

			$pyjs['track']={'module':'datetime', 'lineno':238};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='datetime';
			$pyjs['track']['lineno']=238;
			$pyjs['track']['lineno']=239;
			$pyjs['__active_exception_stack__'] = null;
			throw ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['NotImplementedError']('astimezone');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_100_err){if (!$p['isinstance']($pyjs_dbg_100_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_100_err);}throw $pyjs_dbg_100_err;
}})());
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['tz']]);
		$cls_definition['astimezone'] = $method;
		$pyjs['track']['lineno']=241;
		$method = $pyjs__bind_method2('date', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'datetime', 'lineno':241};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='datetime';
			$pyjs['track']['lineno']=241;
			$pyjs['track']['lineno']=242;
			$pyjs['track']['lineno']=242;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['date']($p['getattr'](self, 'year'), $p['getattr'](self, 'month'), $p['getattr'](self, 'day'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_101_err){if (!$p['isinstance']($pyjs_dbg_101_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_101_err);}throw $pyjs_dbg_101_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['date'] = $method;
		$pyjs['track']['lineno']=244;
		$method = $pyjs__bind_method2('time', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'datetime', 'lineno':244};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='datetime';
			$pyjs['track']['lineno']=244;
			$pyjs['track']['lineno']=245;
			$pyjs['track']['lineno']=245;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['time']($p['getattr'](self, 'hour'), $p['getattr'](self, 'minute'), $p['getattr'](self, 'second'), $p['getattr'](self, 'microsecond'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_102_err){if (!$p['isinstance']($pyjs_dbg_102_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_102_err);}throw $pyjs_dbg_102_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['time'] = $method;
		$pyjs['track']['lineno']=247;
		$method = $pyjs__bind_method2('$$replace', function(year, month, day, hour, minute, second, microsecond, tzinfo) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				year = arguments[1];
				month = arguments[2];
				day = arguments[3];
				hour = arguments[4];
				minute = arguments[5];
				second = arguments[6];
				microsecond = arguments[7];
				tzinfo = arguments[8];
			}
			if (typeof year == 'undefined') year=arguments['callee']['__args__'][3][1];
			if (typeof month == 'undefined') month=arguments['callee']['__args__'][4][1];
			if (typeof day == 'undefined') day=arguments['callee']['__args__'][5][1];
			if (typeof hour == 'undefined') hour=arguments['callee']['__args__'][6][1];
			if (typeof minute == 'undefined') minute=arguments['callee']['__args__'][7][1];
			if (typeof second == 'undefined') second=arguments['callee']['__args__'][8][1];
			if (typeof microsecond == 'undefined') microsecond=arguments['callee']['__args__'][9][1];
			if (typeof tzinfo == 'undefined') tzinfo=arguments['callee']['__args__'][10][1];

			$pyjs['track']={'module':'datetime', 'lineno':247};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='datetime';
			$pyjs['track']['lineno']=247;
			$pyjs['track']['lineno']=248;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['op_eq'](tzinfo, null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_103_err){if (!$p['isinstance']($pyjs_dbg_103_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_103_err);}throw $pyjs_dbg_103_err;
}})()) {
				$pyjs['track']['lineno']=249;
				$pyjs['__active_exception_stack__'] = null;
				throw ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['NotImplementedError']('tzinfo');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_104_err){if (!$p['isinstance']($pyjs_dbg_104_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_104_err);}throw $pyjs_dbg_104_err;
}})());
			}
			$pyjs['track']['lineno']=250;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((year === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_105_err){if (!$p['isinstance']($pyjs_dbg_105_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_105_err);}throw $pyjs_dbg_105_err;
}})()) {
				$pyjs['track']['lineno']=251;
				year = $p['getattr'](self, 'year');
			}
			$pyjs['track']['lineno']=252;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((month === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_106_err){if (!$p['isinstance']($pyjs_dbg_106_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_106_err);}throw $pyjs_dbg_106_err;
}})()) {
				$pyjs['track']['lineno']=253;
				month = $p['getattr'](self, 'month');
			}
			$pyjs['track']['lineno']=254;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((day === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_107_err){if (!$p['isinstance']($pyjs_dbg_107_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_107_err);}throw $pyjs_dbg_107_err;
}})()) {
				$pyjs['track']['lineno']=255;
				day = $p['getattr'](self, 'day');
			}
			$pyjs['track']['lineno']=256;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((hour === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_108_err){if (!$p['isinstance']($pyjs_dbg_108_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_108_err);}throw $pyjs_dbg_108_err;
}})()) {
				$pyjs['track']['lineno']=257;
				hour = $p['getattr'](self, 'hour');
			}
			$pyjs['track']['lineno']=258;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((minute === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_109_err){if (!$p['isinstance']($pyjs_dbg_109_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_109_err);}throw $pyjs_dbg_109_err;
}})()) {
				$pyjs['track']['lineno']=259;
				minute = $p['getattr'](self, 'minute');
			}
			$pyjs['track']['lineno']=260;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((second === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_110_err){if (!$p['isinstance']($pyjs_dbg_110_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_110_err);}throw $pyjs_dbg_110_err;
}})()) {
				$pyjs['track']['lineno']=261;
				second = $p['getattr'](self, 'second');
			}
			$pyjs['track']['lineno']=262;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((microsecond === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_111_err){if (!$p['isinstance']($pyjs_dbg_111_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_111_err);}throw $pyjs_dbg_111_err;
}})()) {
				$pyjs['track']['lineno']=263;
				microsecond = $p['getattr'](self, 'microsecond');
			}
			$pyjs['track']['lineno']=264;
			$pyjs['track']['lineno']=264;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['datetime'](year, month, day, hour, minute, second, microsecond);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_112_err){if (!$p['isinstance']($pyjs_dbg_112_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_112_err);}throw $pyjs_dbg_112_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['year', null],['month', null],['day', null],['hour', null],['minute', null],['second', null],['microsecond', null],['tzinfo', null]]);
		$cls_definition['$$replace'] = $method;
		$pyjs['track']['lineno']=266;
		$method = $pyjs__bind_method2('timetz', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'datetime', 'lineno':266};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='datetime';
			$pyjs['track']['lineno']=266;
			$pyjs['track']['lineno']=267;
			$pyjs['__active_exception_stack__'] = null;
			throw ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['NotImplementedError']('timetz');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_113_err){if (!$p['isinstance']($pyjs_dbg_113_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_113_err);}throw $pyjs_dbg_113_err;
}})());
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['timetz'] = $method;
		$pyjs['track']['lineno']=269;
		$method = $pyjs__bind_method2('utctimetuple', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $div15,$div16;
			$pyjs['track']={'module':'datetime', 'lineno':269};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='datetime';
			$pyjs['track']['lineno']=269;
			$pyjs['track']['lineno']=270;
			$pyjs['track']['lineno']=270;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['gmtime']((typeof ($div15=(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['_d']['getTime']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_114_err){if (!$p['isinstance']($pyjs_dbg_114_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_114_err);}throw $pyjs_dbg_114_err;
}})())==typeof ($div16=1000.0) && typeof $div15=='number' && $div16 !== 0?
				$div15/$div16:
				$p['op_div']($div15,$div16)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_115_err){if (!$p['isinstance']($pyjs_dbg_115_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_115_err);}throw $pyjs_dbg_115_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['utctimetuple'] = $method;
		$pyjs['track']['lineno']=272;
		$method = $pyjs__bind_method2('isoformat', function(sep) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sep = arguments[1];
			}
			if (typeof sep == 'undefined') sep=arguments['callee']['__args__'][3][1];
			var $add17,$add18,t;
			$pyjs['track']={'module':'datetime', 'lineno':272};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='datetime';
			$pyjs['track']['lineno']=272;
			$pyjs['track']['lineno']=273;
			t = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('%04d-%02d-%02d%s%02d:%02d:%02d', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple']([$p['getattr'](self, 'year'), $p['getattr'](self, 'month'), $p['getattr'](self, 'day'), sep, $p['getattr'](self, 'hour'), $p['getattr'](self, 'minute'), $p['getattr'](self, 'second')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_116_err){if (!$p['isinstance']($pyjs_dbg_116_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_116_err);}throw $pyjs_dbg_116_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_117_err){if (!$p['isinstance']($pyjs_dbg_117_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_117_err);}throw $pyjs_dbg_117_err;
}})();
			$pyjs['track']['lineno']=274;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['getattr'](self, 'microsecond'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_118_err){if (!$p['isinstance']($pyjs_dbg_118_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_118_err);}throw $pyjs_dbg_118_err;
}})()) {
				$pyjs['track']['lineno']=275;
				t = $p['__op_add']($add17=t,$add18=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('.%06d', $p['getattr'](self, 'microsecond'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_119_err){if (!$p['isinstance']($pyjs_dbg_119_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_119_err);}throw $pyjs_dbg_119_err;
}})());
			}
			$pyjs['track']['lineno']=276;
			$pyjs['track']['lineno']=276;
			var $pyjs__ret = t;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['sep', 'T']]);
		$cls_definition['isoformat'] = $method;
		$pyjs['track']['lineno']=278;
		$method = $pyjs__bind_method2('__add__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $div17,month,second,year,$add26,$mod9,$add28,$div18,$div19,$add21,$add20,$add22,$add25,$add24,$add27,day,$mod11,$mod10,$mod12,microsecond,$add19,minute,$div20,d,hour,$add23;
			$pyjs['track']={'module':'datetime', 'lineno':278};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='datetime';
			$pyjs['track']['lineno']=278;
			$pyjs['track']['lineno']=279;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance'](other, (typeof timedelta == "undefined"?$m['timedelta']:timedelta));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_120_err){if (!$p['isinstance']($pyjs_dbg_120_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_120_err);}throw $pyjs_dbg_120_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_121_err){if (!$p['isinstance']($pyjs_dbg_121_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_121_err);}throw $pyjs_dbg_121_err;
}})()) {
				$pyjs['track']['lineno']=280;
				year = $p['getattr'](self, 'year');
				$pyjs['track']['lineno']=281;
				month = $p['getattr'](self, 'month');
				$pyjs['track']['lineno']=282;
				day = $p['__op_add']($add19=$p['getattr'](self, 'day'),$add20=$p['getattr'](other, 'days'));
				$pyjs['track']['lineno']=283;
				hour = $p['__op_add']($add21=$p['getattr'](self, 'hour'),$add22=(typeof ($div17=$p['getattr'](other, 'seconds'))==typeof ($div18=3600.0) && typeof $div17=='number' && $div18 !== 0?
					$div17/$div18:
					$p['op_div']($div17,$div18)));
				$pyjs['track']['lineno']=284;
				minute = $p['__op_add']($add23=$p['getattr'](self, 'minute'),$add24=(typeof ($mod9=(typeof ($div19=$p['getattr'](other, 'seconds'))==typeof ($div20=60.0) && typeof $div19=='number' && $div20 !== 0?
					$div19/$div20:
					$p['op_div']($div19,$div20)))==typeof ($mod10=60) && typeof $mod9=='number'?
					(($mod9=$mod9%$mod10)<0&&$mod10>0?$mod9+$mod10:$mod9):
					$p['op_mod']($mod9,$mod10)));
				$pyjs['track']['lineno']=285;
				second = $p['__op_add']($add25=$p['getattr'](self, 'second'),$add26=(typeof ($mod11=$p['getattr'](other, 'seconds'))==typeof ($mod12=60) && typeof $mod11=='number'?
					(($mod11=$mod11%$mod12)<0&&$mod12>0?$mod11+$mod12:$mod11):
					$p['op_mod']($mod11,$mod12)));
				$pyjs['track']['lineno']=286;
				microsecond = $p['__op_add']($add27=$p['getattr'](self, 'microsecond'),$add28=$p['getattr'](other, 'microseconds'));
				$pyjs['track']['lineno']=287;
				d = new Date(year, month, day, hour, minute, second, microsecond);
				$pyjs['track']['lineno']=288;
				$pyjs['track']['lineno']=288;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call(null, $m['datetime'], null, null, [{'d':d}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_122_err){if (!$p['isinstance']($pyjs_dbg_122_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_122_err);}throw $pyjs_dbg_122_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			else {
				$pyjs['track']['lineno']=290;
				$pyjs['__active_exception_stack__'] = null;
				throw ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['TypeError']('expected timedelta object');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_123_err){if (!$p['isinstance']($pyjs_dbg_123_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_123_err);}throw $pyjs_dbg_123_err;
}})());
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__add__'] = $method;
		$pyjs['track']['lineno']=292;
		$method = $pyjs__bind_method2('__sub__', function(other) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $mod20,$mod15,$sub20,$sub21,$sub19,month,$div27,second,$mod16,$sub22,year,diff,$sub18,$mod19,$or5,$mod14,$mod17,$or6,$mod13,$sub13,$sub12,$sub11,$sub17,$sub16,$sub15,$sub14,microsecond,$mod18,day,minute,d,$div21,$div23,$div22,$div25,$div24,hour,$div26,$div28;
			$pyjs['track']={'module':'datetime', 'lineno':292};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='datetime';
			$pyjs['track']['lineno']=292;
			$pyjs['track']['lineno']=293;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($or5=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance'](other, $m['date']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_124_err){if (!$p['isinstance']($pyjs_dbg_124_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_124_err);}throw $pyjs_dbg_124_err;
}})())?$or5:(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance'](other, $m['datetime']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_125_err){if (!$p['isinstance']($pyjs_dbg_125_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_125_err);}throw $pyjs_dbg_125_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_126_err){if (!$p['isinstance']($pyjs_dbg_126_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_126_err);}throw $pyjs_dbg_126_err;
}})()) {
				$pyjs['track']['lineno']=294;
				diff = $p['__op_sub']($sub11=(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['_d']['getTime']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_127_err){if (!$p['isinstance']($pyjs_dbg_127_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_127_err);}throw $pyjs_dbg_127_err;
}})(),$sub12=(function(){try{try{$pyjs['in_try_except'] += 1;
				return other['_d']['getTime']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_128_err){if (!$p['isinstance']($pyjs_dbg_128_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_128_err);}throw $pyjs_dbg_128_err;
}})());
				$pyjs['track']['lineno']=295;
				$pyjs['track']['lineno']=295;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call(null, (typeof timedelta == "undefined"?$m['timedelta']:timedelta), null, null, [{'milliseconds':(typeof ($mod15=diff)==typeof ($mod16=86400000) && typeof $mod15=='number'?
					(($mod15=$mod15%$mod16)<0&&$mod16>0?$mod15+$mod16:$mod15):
					$p['op_mod']($mod15,$mod16))}, (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['float_int']((typeof ($div21=diff)==typeof ($div22=86400000.0) && typeof $div21=='number' && $div22 !== 0?
					$div21/$div22:
					$p['op_div']($div21,$div22)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_129_err){if (!$p['isinstance']($pyjs_dbg_129_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_129_err);}throw $pyjs_dbg_129_err;
}})(), (typeof ($mod13=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['float_int']((typeof ($div23=diff)==typeof ($div24=1000.0) && typeof $div23=='number' && $div24 !== 0?
					$div23/$div24:
					$p['op_div']($div23,$div24)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_130_err){if (!$p['isinstance']($pyjs_dbg_130_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_130_err);}throw $pyjs_dbg_130_err;
}})())==typeof ($mod14=86400) && typeof $mod13=='number'?
					(($mod13=$mod13%$mod14)<0&&$mod14>0?$mod13+$mod14:$mod13):
					$p['op_mod']($mod13,$mod14))]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_131_err){if (!$p['isinstance']($pyjs_dbg_131_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_131_err);}throw $pyjs_dbg_131_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance'](other, (typeof timedelta == "undefined"?$m['timedelta']:timedelta));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_132_err){if (!$p['isinstance']($pyjs_dbg_132_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_132_err);}throw $pyjs_dbg_132_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_133_err){if (!$p['isinstance']($pyjs_dbg_133_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_133_err);}throw $pyjs_dbg_133_err;
}})()) {
				$pyjs['track']['lineno']=297;
				year = $p['getattr'](self, 'year');
				$pyjs['track']['lineno']=298;
				month = $p['getattr'](self, 'month');
				$pyjs['track']['lineno']=299;
				day = $p['__op_sub']($sub13=$p['getattr'](self, 'day'),$sub14=$p['getattr'](other, 'days'));
				$pyjs['track']['lineno']=300;
				hour = $p['__op_sub']($sub15=$p['getattr'](self, 'hour'),$sub16=(typeof ($div25=$p['getattr'](other, 'seconds'))==typeof ($div26=3600.0) && typeof $div25=='number' && $div26 !== 0?
					$div25/$div26:
					$p['op_div']($div25,$div26)));
				$pyjs['track']['lineno']=301;
				minute = $p['__op_sub']($sub17=$p['getattr'](self, 'minute'),$sub18=(typeof ($mod17=(typeof ($div27=$p['getattr'](other, 'seconds'))==typeof ($div28=60.0) && typeof $div27=='number' && $div28 !== 0?
					$div27/$div28:
					$p['op_div']($div27,$div28)))==typeof ($mod18=60) && typeof $mod17=='number'?
					(($mod17=$mod17%$mod18)<0&&$mod18>0?$mod17+$mod18:$mod17):
					$p['op_mod']($mod17,$mod18)));
				$pyjs['track']['lineno']=302;
				second = $p['__op_sub']($sub19=$p['getattr'](self, 'second'),$sub20=(typeof ($mod19=$p['getattr'](other, 'seconds'))==typeof ($mod20=60) && typeof $mod19=='number'?
					(($mod19=$mod19%$mod20)<0&&$mod20>0?$mod19+$mod20:$mod19):
					$p['op_mod']($mod19,$mod20)));
				$pyjs['track']['lineno']=303;
				microsecond = $p['__op_sub']($sub21=$p['getattr'](self, 'microsecond'),$sub22=$p['getattr'](other, 'microseconds'));
				$pyjs['track']['lineno']=305;
				d = new Date(year, month, day, hour, minute, second, microsecond);
				$pyjs['track']['lineno']=306;
				$pyjs['track']['lineno']=306;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call(null, $m['datetime'], null, null, [{'d':d}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_134_err){if (!$p['isinstance']($pyjs_dbg_134_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_134_err);}throw $pyjs_dbg_134_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			else {
				$pyjs['track']['lineno']=308;
				$pyjs['__active_exception_stack__'] = null;
				throw ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['TypeError']('expected date or datetime object');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_135_err){if (!$p['isinstance']($pyjs_dbg_135_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_135_err);}throw $pyjs_dbg_135_err;
}})());
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__sub__'] = $method;
		$pyjs['track']['lineno']=310;
		$method = $pyjs__bind_method2('__str__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'datetime', 'lineno':310};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='datetime';
			$pyjs['track']['lineno']=310;
			$pyjs['track']['lineno']=311;
			$pyjs['track']['lineno']=311;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['isoformat'](' ');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_136_err){if (!$p['isinstance']($pyjs_dbg_136_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_136_err);}throw $pyjs_dbg_136_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		$pyjs['track']['lineno']=190;
		var $bases = new Array($m['date'],$m['time']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('datetime', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=314;
	$m['timedelta'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'datetime';
		$pyjs['track']['lineno']=315;
		$method = $pyjs__bind_method2('__init__', function(days, seconds, microseconds, milliseconds, minutes, hours, weeks) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				days = arguments[1];
				seconds = arguments[2];
				microseconds = arguments[3];
				milliseconds = arguments[4];
				minutes = arguments[5];
				hours = arguments[6];
				weeks = arguments[7];
			}
			if (typeof days == 'undefined') days=arguments['callee']['__args__'][3][1];
			if (typeof seconds == 'undefined') seconds=arguments['callee']['__args__'][4][1];
			if (typeof microseconds == 'undefined') microseconds=arguments['callee']['__args__'][5][1];
			if (typeof milliseconds == 'undefined') milliseconds=arguments['callee']['__args__'][6][1];
			if (typeof minutes == 'undefined') minutes=arguments['callee']['__args__'][7][1];
			if (typeof hours == 'undefined') hours=arguments['callee']['__args__'][8][1];
			if (typeof weeks == 'undefined') weeks=arguments['callee']['__args__'][9][1];
			var $add35,$add29,$mul17,$mul16,$mul15,$mul14,$mul13,$mul12,$mul11,$add32,$add33,$add30,$add31,$add36,$add34,$mul18;
			$pyjs['track']={'module':'datetime', 'lineno':315};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='datetime';
			$pyjs['track']['lineno']=315;
			$pyjs['track']['lineno']=316;
			self['days'] = $p['__op_add']($add29=(typeof ($mul11=weeks)==typeof ($mul12=7.0) && typeof $mul11=='number'?
				$mul11*$mul12:
				$p['op_mul']($mul11,$mul12)),$add30=days);
			$pyjs['track']['lineno']=317;
			self['seconds'] = $p['__op_add']($add33=$p['__op_add']($add31=(typeof ($mul13=hours)==typeof ($mul14=3600.0) && typeof $mul13=='number'?
				$mul13*$mul14:
				$p['op_mul']($mul13,$mul14)),$add32=(typeof ($mul15=minutes)==typeof ($mul16=60.0) && typeof $mul15=='number'?
				$mul15*$mul16:
				$p['op_mul']($mul15,$mul16))),$add34=seconds);
			$pyjs['track']['lineno']=318;
			self['microseconds'] = $p['__op_add']($add35=(typeof ($mul17=milliseconds)==typeof ($mul18=1000.0) && typeof $mul17=='number'?
				$mul17*$mul18:
				$p['op_mul']($mul17,$mul18)),$add36=microseconds);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['days', 0],['seconds', 0],['microseconds', 0],['milliseconds', 0],['minutes', 0],['hours', 0],['weeks', 0]]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=314;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('timedelta', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=320;
	$m['tzinfo'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'datetime';
		$pyjs['track']['lineno']=321;
		$pyjs['track']['lineno']=320;
		var $bases = new Array($p['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('tzinfo', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=323;
	$m['date']['min'] = (function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['date'](1, 1, 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_137_err){if (!$p['isinstance']($pyjs_dbg_137_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_137_err);}throw $pyjs_dbg_137_err;
}})();
	$pyjs['track']['lineno']=324;
	$m['date']['max'] = (function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['date'](9999, 12, 31);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_138_err){if (!$p['isinstance']($pyjs_dbg_138_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_138_err);}throw $pyjs_dbg_138_err;
}})();
	$pyjs['track']['lineno']=325;
	$m['date']['resolution'] = (function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['timedelta'](1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_139_err){if (!$p['isinstance']($pyjs_dbg_139_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_139_err);}throw $pyjs_dbg_139_err;
}})();
	$pyjs['track']['lineno']=327;
	$m['time']['min'] = (function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['time'](0, 0);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_140_err){if (!$p['isinstance']($pyjs_dbg_140_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_140_err);}throw $pyjs_dbg_140_err;
}})();
	$pyjs['track']['lineno']=328;
	$m['time']['max'] = (function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['time'](23, 59, 59, 999999);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_141_err){if (!$p['isinstance']($pyjs_dbg_141_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_141_err);}throw $pyjs_dbg_141_err;
}})();
	$pyjs['track']['lineno']=329;
	$m['time']['resolution'] = (function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['timedelta'](0, 0, 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_142_err){if (!$p['isinstance']($pyjs_dbg_142_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_142_err);}throw $pyjs_dbg_142_err;
}})();
	$pyjs['track']['lineno']=331;
	$m['datetime']['min'] = (function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['datetime'](1, 1, 1, 0, 0);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_143_err){if (!$p['isinstance']($pyjs_dbg_143_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_143_err);}throw $pyjs_dbg_143_err;
}})();
	$pyjs['track']['lineno']=332;
	$m['datetime']['max'] = (function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['datetime'](9999, 12, 31, 23, 59, 59, 999999);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_144_err){if (!$p['isinstance']($pyjs_dbg_144_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_144_err);}throw $pyjs_dbg_144_err;
}})();
	$pyjs['track']['lineno']=333;
	$m['datetime']['resolution'] = (function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['timedelta'](0, 0, 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_145_err){if (!$p['isinstance']($pyjs_dbg_145_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_145_err);}throw $pyjs_dbg_145_err;
}})();
	$pyjs['track']['lineno']=335;
	$m['timedelta']['min'] = (function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['timedelta']((typeof ($usub2=999999999)=='number'?
		-$usub2:
		$p['op_usub']($usub2)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_146_err){if (!$p['isinstance']($pyjs_dbg_146_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_146_err);}throw $pyjs_dbg_146_err;
}})();
	$pyjs['track']['lineno']=336;
	$m['timedelta']['max'] = (function(){try{try{$pyjs['in_try_except'] += 1;
	return $pyjs_kwargs_call(null, $m['timedelta'], null, null, [{'hours':23, 'minutes':59, 'seconds':59, 'microseconds':999999}, 999999999]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_147_err){if (!$p['isinstance']($pyjs_dbg_147_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_147_err);}throw $pyjs_dbg_147_err;
}})();
	$pyjs['track']['lineno']=337;
	$m['timedelta']['resolution'] = (function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['timedelta'](0, 0, 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_148_err){if (!$p['isinstance']($pyjs_dbg_148_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_148_err);}throw $pyjs_dbg_148_err;
}})();
	return this;
}; /* end datetime */


/* end module: datetime */


/*
PYJS_DEPS: ['time.__c__days', 'time', 'time.__c__months', 'time.strftime', 'time.localtime', 'time.gmtime', 'time._strptime']
*/
