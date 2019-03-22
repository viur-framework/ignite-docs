/* start module: re */
$pyjs['loaded_modules']['re'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['re']['__was_initialized__']) return $pyjs['loaded_modules']['re'];
	var $m = $pyjs['loaded_modules']['re'];
	$m['__repr__'] = function() { return '<module: re>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 're';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$m.__track_lines__[1] = 're.py, line 1:\n    ';
	$m.__track_lines__[9] = 're.py, line 9:\n    I = IGNORECASE = 1  # ignore case';
	$m.__track_lines__[10] = 're.py, line 10:\n    L = LOCALE     = 2  # assume current 8-bit locale';
	$m.__track_lines__[11] = 're.py, line 11:\n    U = UNICODE    = 4  # assume unicode locale';
	$m.__track_lines__[12] = 're.py, line 12:\n    M = MULTILINE  = 8  # make anchors look for newline';
	$m.__track_lines__[13] = 're.py, line 13:\n    S = DOTALL     = 16 # make dot match newline';
	$m.__track_lines__[14] = 're.py, line 14:\n    X = VERBOSE    = 32 # ignore whitespace and comments';
	$m.__track_lines__[16] = 're.py, line 16:\n    def match(pattern, string, flags=0):';
	$m.__track_lines__[19] = 're.py, line 19:\n    return compile(pattern, flags).match(string)';
	$m.__track_lines__[21] = 're.py, line 21:\n    def search(pattern, string, flags=0):';
	$m.__track_lines__[24] = 're.py, line 24:\n    return compile(pattern, flags).search(string)';
	$m.__track_lines__[26] = 're.py, line 26:\n    def sub(pattern, repl, string, count=0):';
	$m.__track_lines__[32] = 're.py, line 32:\n    return compile(pattern, 0).sub(repl, string, count)';
	$m.__track_lines__[34] = 're.py, line 34:\n    def subn(pattern, repl, string, count=0):';
	$m.__track_lines__[42] = 're.py, line 42:\n    return compile(pattern, 0).subn(repl, string, count)';
	$m.__track_lines__[44] = 're.py, line 44:\n    def split(pattern, string, maxsplit=0):';
	$m.__track_lines__[47] = 're.py, line 47:\n    return compile(pattern, 0).split(string, maxsplit)';
	$m.__track_lines__[49] = 're.py, line 49:\n    def findall(pattern, string, flags=0):';
	$m.__track_lines__[57] = 're.py, line 57:\n    return compile(pattern, flags).findall(string)';
	$m.__track_lines__[59] = 're.py, line 59:\n    def finditer(pattern, string, flags=0):';
	$m.__track_lines__[64] = 're.py, line 64:\n    return compile(pattern, flags).finditer(string)';
	$m.__track_lines__[66] = 're.py, line 66:\n    def compile(pattern, flags=0):';
	$m.__track_lines__[67] = 're.py, line 67:\n    return SRE_Pattern(pattern, flags, _compile(pattern, flags))';
	$m.__track_lines__[69] = 're.py, line 69:\n    def purge():';
	$m.__track_lines__[71] = 're.py, line 71:\n    _cache.clear()';
	$m.__track_lines__[72] = 're.py, line 72:\n    _cache_repl.clear()';
	$m.__track_lines__[74] = 're.py, line 74:\n    def template(pattern, flags=0):';
	$m.__track_lines__[76] = 're.py, line 76:\n    raise NotImplementedError("re.template")';
	$m.__track_lines__[79] = 're.py, line 79:\n    _alphanum = {}';
	$m.__track_lines__[80] = "re.py, line 80:\n    for c in 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890':";
	$m.__track_lines__[81] = 're.py, line 81:\n    _alphanum[c] = 1';
	$m.__track_lines__[82] = 're.py, line 82:\n    del c';
	$m.__track_lines__[84] = 're.py, line 84:\n    def escape(pattern):';
	$m.__track_lines__[86] = 're.py, line 86:\n    s = list(pattern)';
	$m.__track_lines__[87] = 're.py, line 87:\n    alphanum = _alphanum';
	$m.__track_lines__[88] = 're.py, line 88:\n    for i in range(len(pattern)):';
	$m.__track_lines__[89] = 're.py, line 89:\n    c = pattern[i]';
	$m.__track_lines__[90] = 're.py, line 90:\n    if c not in alphanum:';
	$m.__track_lines__[91] = 're.py, line 91:\n    if c == "\\000":';
	$m.__track_lines__[92] = 're.py, line 92:\n    s[i] = "\\\\000"';
	$m.__track_lines__[94] = 're.py, line 94:\n    s[i] = "\\\\" + c';
	$m.__track_lines__[95] = 're.py, line 95:\n    return pattern[:0].join(s)';
	$m.__track_lines__[100] = 're.py, line 100:\n    from __pyjamas__ import JS, debugger';
	$m.__track_lines__[102] = 're.py, line 102:\n    __inline_flags_re__ = JS(r"""new RegExp("[(][?][iLmsux]+[)]")""")';
	$m.__track_lines__[104] = 're.py, line 104:\n    _cache = {}';
	$m.__track_lines__[105] = 're.py, line 105:\n    _cache_repl = {}';
	$m.__track_lines__[106] = 're.py, line 106:\n    _MAXCACHE = 100';
	$m.__track_lines__[108] = 're.py, line 108:\n    def _compile(pat, flags=0):';
	$m.__track_lines__[109] = 're.py, line 109:\n    cachekey = (pat, flags)';
	$m.__track_lines__[110] = 're.py, line 110:\n    p = _cache.get(cachekey)';
	$m.__track_lines__[111] = 're.py, line 111:\n    if p is not None:';
	$m.__track_lines__[112] = 're.py, line 112:\n    return p';
	$m.__track_lines__[114] = 're.py, line 114:\n    flgs = ""';
	$m.__track_lines__[115] = 're.py, line 115:\n    while True:';
	$m.__track_lines__[116] = 're.py, line 116:\n    m = __inline_flags_re__.Exec(pat)';
	$m.__track_lines__[117] = 're.py, line 117:\n    if JS("@{{m}} === null"):';
	$m.__track_lines__[118] = 're.py, line 118:\n    m = None';
	$m.__track_lines__[119] = 're.py, line 119:\n    break';
	$m.__track_lines__[120] = 're.py, line 120:\n    pat = pat.replace(__inline_flags_re__, "")';
	$m.__track_lines__[121] = 're.py, line 121:\n    for m in list(m):';
	$m.__track_lines__[122] = 're.py, line 122:\n    if JS("@{{m}} === null"):';
	$m.__track_lines__[123] = 're.py, line 123:\n    continue';
	$m.__track_lines__[124] = 're.py, line 124:\n    for c in str(m):';
	$m.__track_lines__[125] = "re.py, line 125:\n    if c in ['(','?',')']:";
	$m.__track_lines__[126] = 're.py, line 126:\n    pass';
	$m.__track_lines__[128] = 're.py, line 128:\n    flags |= IGNORECASE';
	$m.__track_lines__[130] = 're.py, line 130:\n    flags |= LOCALE';
	$m.__track_lines__[132] = 're.py, line 132:\n    flags |= MULTILINE';
	$m.__track_lines__[134] = 're.py, line 134:\n    flags |= DOTALL';
	$m.__track_lines__[136] = 're.py, line 136:\n    flags |= UNICODE';
	$m.__track_lines__[138] = 're.py, line 138:\n    flags |= VERBOSE';
	$m.__track_lines__[140] = 're.py, line 140:\n    if flags:';
	$m.__track_lines__[141] = 're.py, line 141:\n    if flags & LOCALE:';
	$m.__track_lines__[142] = 're.py, line 142:\n    raise NotImplementedError("L/LOCALE flag is not implemented")';
	$m.__track_lines__[143] = 're.py, line 143:\n    if flags & UNICODE:';
	$m.__track_lines__[144] = 're.py, line 144:\n    raise NotImplementedError("U/UNICODE flag is not implemented")';
	$m.__track_lines__[145] = 're.py, line 145:\n    if flags & VERBOSE:';
	$m.__track_lines__[146] = 're.py, line 146:\n    raise NotImplementedError("X/VERBOSE flag is not implemented")';
	$m.__track_lines__[147] = 're.py, line 147:\n    if flags & DOTALL:';
	$m.__track_lines__[149] = "re.py, line 149:\n    p = ''";
	$m.__track_lines__[150] = 're.py, line 150:\n    brack = -1';
	$m.__track_lines__[151] = 're.py, line 151:\n    backslash = -2';
	$m.__track_lines__[152] = 're.py, line 152:\n    for i, c in enumerate(pat):';
	$m.__track_lines__[153] = 're.py, line 153:\n    if backslash != i - 1:';
	$m.__track_lines__[154] = 're.py, line 154:\n    if brack < 0:';
	$m.__track_lines__[155] = "re.py, line 155:\n    if c == '[':";
	$m.__track_lines__[156] = 're.py, line 156:\n    brack = i';
	$m.__track_lines__[158] = "re.py, line 158:\n    c = r'[\\s\\S]'";
	$m.__track_lines__[160] = 're.py, line 160:\n    backslash = i';
	$m.__track_lines__[162] = "re.py, line 162:\n    if c == ']' and brack != i-1:";
	$m.__track_lines__[163] = 're.py, line 163:\n    brack = -1';
	$m.__track_lines__[164] = 're.py, line 164:\n    p += c';
	$m.__track_lines__[165] = 're.py, line 165:\n    pat = p';
	$m.__track_lines__[166] = 're.py, line 166:\n    if flags & IGNORECASE:';
	$m.__track_lines__[167] = "re.py, line 167:\n    flgs += 'i'";
	$m.__track_lines__[168] = 're.py, line 168:\n    if flags & MULTILINE:';
	$m.__track_lines__[169] = "re.py, line 169:\n    flgs += 'm'";
	$m.__track_lines__[170] = 're.py, line 170:\n    spat = r"([\\s\\S]*?)(" + pat + r")[\\s\\S]*"';
	$m.__track_lines__[171] = 're.py, line 171:\n    p = JS(r"""new RegExp(@{{pat}}, @{{flgs}})"""), JS(r"""new RegExp(@{{spat}}, @{{flgs}})"""), JS(r"""new RegExp(@{{pat}}, "g"+@{{flgs}})""")';
	$m.__track_lines__[172] = 're.py, line 172:\n    if len(_cache) >= _MAXCACHE:';
	$m.__track_lines__[173] = 're.py, line 173:\n    _cache.clear()';
	$m.__track_lines__[174] = 're.py, line 174:\n    _cache[cachekey] = p';
	$m.__track_lines__[175] = 're.py, line 175:\n    return p';
	$m.__track_lines__[177] = 're.py, line 177:\n    class SRE_Match:';
	$m.__track_lines__[178] = 're.py, line 178:\n    def __init__(self, re, string, pos, endpos, groups, start, lastindex, lastgroup):';
	$m.__track_lines__[179] = 're.py, line 179:\n    self._groups = groups';
	$m.__track_lines__[180] = 're.py, line 180:\n    self._start = start';
	$m.__track_lines__[181] = 're.py, line 181:\n    self._end   = start + len(groups[0])';
	$m.__track_lines__[182] = 're.py, line 182:\n    self.re = re';
	$m.__track_lines__[183] = 're.py, line 183:\n    self.string = string';
	$m.__track_lines__[184] = 're.py, line 184:\n    self.pos = pos';
	$m.__track_lines__[185] = 're.py, line 185:\n    self.endpos = endpos';
	$m.__track_lines__[186] = 're.py, line 186:\n    self.lastindex = lastindex';
	$m.__track_lines__[187] = 're.py, line 187:\n    self.lastgroup = lastgroup';
	$m.__track_lines__[189] = 're.py, line 189:\n    def start(self, group=0):';
	$m.__track_lines__[193] = 're.py, line 193:\n    if group != 0:';
	$m.__track_lines__[194] = 're.py, line 194:\n    substr = self.group(group)';
	$m.__track_lines__[195] = 're.py, line 195:\n    if substr:';
	$m.__track_lines__[196] = 're.py, line 196:\n    idx = self.string.index(substr, self._start)';
	$m.__track_lines__[197] = 're.py, line 197:\n    return idx';
	$m.__track_lines__[198] = 're.py, line 198:\n    raise NotImplementedError("group argument not supported")';
	$m.__track_lines__[199] = 're.py, line 199:\n    return self._start';
	$m.__track_lines__[201] = 're.py, line 201:\n    def end(self, group=0):';
	$m.__track_lines__[205] = 're.py, line 205:\n    if group != 0:';
	$m.__track_lines__[206] = 're.py, line 206:\n    substr = self.group(group)';
	$m.__track_lines__[207] = 're.py, line 207:\n    if substr:';
	$m.__track_lines__[208] = 're.py, line 208:\n    idx = self.string.index(substr, self._start)';
	$m.__track_lines__[209] = 're.py, line 209:\n    return idx + len(substr)';
	$m.__track_lines__[210] = 're.py, line 210:\n    raise NotImplementedError("group argument not supported")';
	$m.__track_lines__[211] = 're.py, line 211:\n    return self._end';
	$m.__track_lines__[213] = 're.py, line 213:\n    def span(self, group=0):';
	$m.__track_lines__[215] = 're.py, line 215:\n    return self.start(group), self.end(group)';
	$m.__track_lines__[217] = 're.py, line 217:\n    def expand(self, template):';
	$m.__track_lines__[220] = "re.py, line 220:\n    raise NotImplementedError('expand')";
	$m.__track_lines__[222] = 're.py, line 222:\n    def groups(self, default=None):';
	$m.__track_lines__[226] = 're.py, line 226:\n    return tuple([x if x is not None else default for x in self._groups[1:]])';
	$m.__track_lines__[228] = 're.py, line 228:\n    def groupdict(self, default=None):';
	$m.__track_lines__[232] = "re.py, line 232:\n    raise NotImplementedError('groupdict')";
	$m.__track_lines__[234] = 're.py, line 234:\n    def group(self, *args):';
	$m.__track_lines__[237] = 're.py, line 237:\n    if len(args) == 0:';
	$m.__track_lines__[238] = 're.py, line 238:\n    args = (0,)';
	$m.__track_lines__[239] = 're.py, line 239:\n    grouplist = []';
	$m.__track_lines__[240] = 're.py, line 240:\n    for group in args:';
	$m.__track_lines__[241] = 're.py, line 241:\n    grouplist.append(self._groups[group])';
	$m.__track_lines__[242] = 're.py, line 242:\n    if len(grouplist) == 1:';
	$m.__track_lines__[243] = 're.py, line 243:\n    return grouplist[0]';
	$m.__track_lines__[245] = 're.py, line 245:\n    return tuple(grouplist)';
	$m.__track_lines__[247] = 're.py, line 247:\n    def __copy__():';
	$m.__track_lines__[248] = 're.py, line 248:\n    raise TypeError, "cannot copy this pattern object"';
	$m.__track_lines__[250] = 're.py, line 250:\n    def __deepcopy__():';
	$m.__track_lines__[251] = 're.py, line 251:\n    raise TypeError, "cannot copy this pattern object"';
	$m.__track_lines__[254] = 're.py, line 254:\n    class SRE_Pattern:';
	$m.__track_lines__[255] = 're.py, line 255:\n    def __init__(self, pat, flags, code):';
	$m.__track_lines__[256] = 're.py, line 256:\n    self.pat = pat';
	$m.__track_lines__[257] = 're.py, line 257:\n    self.flags = flags';
	$m.__track_lines__[258] = 're.py, line 258:\n    self.match_code = code[0]';
	$m.__track_lines__[259] = 're.py, line 259:\n    self.search_code = code[1]';
	$m.__track_lines__[260] = 're.py, line 260:\n    self.findall_code = code[2]';
	$m.__track_lines__[262] = 're.py, line 262:\n    def match(self, string, pos=0, endpos=None):';
	$m.__track_lines__[266] = 're.py, line 266:\n    if not endpos is None:';
	$m.__track_lines__[267] = 're.py, line 267:\n    string = string[:endpos]';
	$m.__track_lines__[269] = 're.py, line 269:\n    endpos = len(string)';
	$m.__track_lines__[270] = 're.py, line 270:\n    if pos == 0:';
	$m.__track_lines__[271] = 're.py, line 271:\n    groups = self.match_code.Exec(string)';
	$m.__track_lines__[272] = 're.py, line 272:\n    if JS("@{{groups}} === null"):';
	$m.__track_lines__[273] = 're.py, line 273:\n    return None';
	$m.__track_lines__[274] = 're.py, line 274:\n    _groups = []';
	$m.__track_lines__[275] = 're.py, line 275:\n    for i in list(groups):';
	$m.__track_lines__[276] = 're.py, line 276:\n    if JS("@{{i}} === null"):';
	$m.__track_lines__[277] = 're.py, line 277:\n    _groups.append(None)';
	$m.__track_lines__[279] = 're.py, line 279:\n    _groups.append(str(i))';
	$m.__track_lines__[280] = 're.py, line 280:\n    groups = _groups';
	$m.__track_lines__[282] = 're.py, line 282:\n    return None';
	$m.__track_lines__[289] = 're.py, line 289:\n    groups = self.match_code.Exec(string[pos:])';
	$m.__track_lines__[290] = 're.py, line 290:\n    if JS("@{{groups}} === null"):';
	$m.__track_lines__[291] = 're.py, line 291:\n    return None';
	$m.__track_lines__[292] = 're.py, line 292:\n    if groups.index != 0:';
	$m.__track_lines__[293] = 're.py, line 293:\n    return None';
	$m.__track_lines__[294] = 're.py, line 294:\n    _groups = []';
	$m.__track_lines__[295] = 're.py, line 295:\n    for i in list(groups):';
	$m.__track_lines__[296] = 're.py, line 296:\n    if JS("@{{i}} === null"):';
	$m.__track_lines__[297] = 're.py, line 297:\n    _groups.append(None)';
	$m.__track_lines__[299] = 're.py, line 299:\n    _groups.append(str(i))';
	$m.__track_lines__[300] = 're.py, line 300:\n    groups = _groups';
	$m.__track_lines__[301] = 're.py, line 301:\n    return SRE_Match(self, string, pos, endpos, groups, pos, None, None)';
	$m.__track_lines__[303] = 're.py, line 303:\n    def search(self, string, pos=0, endpos=None):';
	$m.__track_lines__[308] = 're.py, line 308:\n    if not endpos is None:';
	$m.__track_lines__[309] = 're.py, line 309:\n    string = string[:endpos]';
	$m.__track_lines__[310] = 're.py, line 310:\n    if pos == 0:';
	$m.__track_lines__[311] = 're.py, line 311:\n    groups = self.search_code.Exec(string)';
	$m.__track_lines__[312] = 're.py, line 312:\n    if JS("@{{groups}} === null"):';
	$m.__track_lines__[313] = 're.py, line 313:\n    return None';
	$m.__track_lines__[314] = 're.py, line 314:\n    _groups = []';
	$m.__track_lines__[315] = 're.py, line 315:\n    for i in list(groups):';
	$m.__track_lines__[316] = 're.py, line 316:\n    if JS("@{{i}} === null"):';
	$m.__track_lines__[317] = 're.py, line 317:\n    _groups.append(None)';
	$m.__track_lines__[319] = 're.py, line 319:\n    _groups.append(str(i))';
	$m.__track_lines__[320] = 're.py, line 320:\n    groups = _groups';
	$m.__track_lines__[322] = 're.py, line 322:\n    return None';
	$m.__track_lines__[325] = 're.py, line 325:\n    groups = self.search_code.Exec(string[pos:])';
	$m.__track_lines__[326] = 're.py, line 326:\n    if JS("@{{groups}} === null"):';
	$m.__track_lines__[327] = 're.py, line 327:\n    return None';
	$m.__track_lines__[328] = 're.py, line 328:\n    _groups = []';
	$m.__track_lines__[329] = 're.py, line 329:\n    for i in list(groups):';
	$m.__track_lines__[330] = 're.py, line 330:\n    if JS("@{{i}} === null"):';
	$m.__track_lines__[331] = 're.py, line 331:\n    _groups.append(None)';
	$m.__track_lines__[333] = 're.py, line 333:\n    _groups.append(str(i))';
	$m.__track_lines__[334] = 're.py, line 334:\n    groups = _groups';
	$m.__track_lines__[335] = 're.py, line 335:\n    return SRE_Match(self, string, pos, endpos, groups[2:], pos + len(groups[1]),None, None)';
	$m.__track_lines__[337] = 're.py, line 337:\n    def findall(self, string, pos=0, endpos=None):';
	$m.__track_lines__[339] = 're.py, line 339:\n    if not endpos is None:';
	$m.__track_lines__[340] = 're.py, line 340:\n    string = string[:endpos]';
	$m.__track_lines__[341] = 're.py, line 341:\n    all = []';
	$m.__track_lines__[342] = 're.py, line 342:\n    while True:';
	$m.__track_lines__[343] = 're.py, line 343:\n    m = self.search(string, pos)';
	$m.__track_lines__[344] = 're.py, line 344:\n    if m is None:';
	$m.__track_lines__[345] = 're.py, line 345:\n    break';
	$m.__track_lines__[346] = 're.py, line 346:\n    span = m.span()';
	$m.__track_lines__[347] = 're.py, line 347:\n    if not m.groups():';
	$m.__track_lines__[348] = 're.py, line 348:\n    all.append(string[span[0]:span[1]])';
	$m.__track_lines__[350] = "re.py, line 350:\n    all.append(tuple([group or '' for group in m.groups()]))";
	$m.__track_lines__[351] = 're.py, line 351:\n    pos = span[1]';
	$m.__track_lines__[352] = 're.py, line 352:\n    return all';
	$m.__track_lines__[354] = 're.py, line 354:\n    return list(string[pos:].match(self.findall_code))';
	$m.__track_lines__[356] = 're.py, line 356:\n    def sub(self, repl, string, count=0):';
	$m.__track_lines__[359] = 're.py, line 359:\n    return self.subn(repl, string, count)[0]';
	$m.__track_lines__[361] = 're.py, line 361:\n    def subn(self, repl, string, count=0):';
	$m.__track_lines__[365] = "re.py, line 365:\n    res = ''";
	$m.__track_lines__[366] = 're.py, line 366:\n    n = 0';
	$m.__track_lines__[367] = 're.py, line 367:\n    subst = repl';
	$m.__track_lines__[368] = 're.py, line 368:\n    pos = 0';
	$m.__track_lines__[369] = 're.py, line 369:\n    while count >= 0:';
	$m.__track_lines__[370] = 're.py, line 370:\n    m = self.search(string, pos)';
	$m.__track_lines__[371] = 're.py, line 371:\n    if m is None:';
	$m.__track_lines__[372] = 're.py, line 372:\n    break';
	$m.__track_lines__[373] = 're.py, line 373:\n    span = m.span()';
	$m.__track_lines__[374] = 're.py, line 374:\n    if callable(repl):';
	$m.__track_lines__[375] = 're.py, line 375:\n    subst = repl(m)';
	$m.__track_lines__[376] = 're.py, line 376:\n    res += string[pos:span[0]]';
	$m.__track_lines__[377] = 're.py, line 377:\n    res += subst';
	$m.__track_lines__[378] = 're.py, line 378:\n    pos = span[1]';
	$m.__track_lines__[379] = 're.py, line 379:\n    n += 1';
	$m.__track_lines__[380] = 're.py, line 380:\n    if count:';
	$m.__track_lines__[381] = 're.py, line 381:\n    if count == 1:';
	$m.__track_lines__[382] = 're.py, line 382:\n    break';
	$m.__track_lines__[383] = 're.py, line 383:\n    count -= 1';
	$m.__track_lines__[384] = 're.py, line 384:\n    return res + string[pos:], n';
	$m.__track_lines__[386] = 're.py, line 386:\n    def split(self, string, maxsplit=0):';
	$m.__track_lines__[388] = 're.py, line 388:\n    splitted = []';
	$m.__track_lines__[389] = 're.py, line 389:\n    pos = 0';
	$m.__track_lines__[390] = 're.py, line 390:\n    while maxsplit >= 0:';
	$m.__track_lines__[391] = 're.py, line 391:\n    m = self.search(string, pos)';
	$m.__track_lines__[392] = 're.py, line 392:\n    if m is None:';
	$m.__track_lines__[393] = 're.py, line 393:\n    break';
	$m.__track_lines__[394] = 're.py, line 394:\n    span = m.span()';
	$m.__track_lines__[395] = 're.py, line 395:\n    splitted.append(string[pos:span[0]])';
	$m.__track_lines__[396] = 're.py, line 396:\n    pos = span[1]';
	$m.__track_lines__[397] = 're.py, line 397:\n    if pos < len(string):';
	$m.__track_lines__[398] = 're.py, line 398:\n    splitted.append(string[pos:])';
	$m.__track_lines__[399] = 're.py, line 399:\n    return splitted';
	$m.__track_lines__[401] = 're.py, line 401:\n    def finditer(self, string, pos=0, endpos=None):';
	$m.__track_lines__[403] = 're.py, line 403:\n    return self.findall(string, pos, endpos).__iter__()';
	$m.__track_lines__[405] = 're.py, line 405:\n    def scanner(self, string, start=0, end=None):';
	$m.__track_lines__[406] = "re.py, line 406:\n    raise NotImplementedError('scanner')";
	$m.__track_lines__[408] = 're.py, line 408:\n    def __copy__(self):';
	$m.__track_lines__[409] = 're.py, line 409:\n    raise TypeError, "cannot copy this pattern object"';
	$m.__track_lines__[411] = 're.py, line 411:\n    def __deepcopy__(self):';
	$m.__track_lines__[412] = 're.py, line 412:\n    raise TypeError, "cannot copy this pattern object"';
	var $iter1_iter,$iter1_array,$iter1_nextval,$pyjs__trackstack_size_1,$iter1_type,$iter1_idx;

	$pyjs['track']['module']='re';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=9;
	$m['$assign1'] = 1;
	$m['I'] = $m['$assign1'];
	$m['IGNORECASE'] = $m['$assign1'];
	$pyjs['track']['lineno']=10;
	$m['$assign2'] = 2;
	$m['L'] = $m['$assign2'];
	$m['LOCALE'] = $m['$assign2'];
	$pyjs['track']['lineno']=11;
	$m['$assign3'] = 4;
	$m['U'] = $m['$assign3'];
	$m['UNICODE'] = $m['$assign3'];
	$pyjs['track']['lineno']=12;
	$m['$assign4'] = 8;
	$m['M'] = $m['$assign4'];
	$m['MULTILINE'] = $m['$assign4'];
	$pyjs['track']['lineno']=13;
	$m['$assign5'] = 16;
	$m['S'] = $m['$assign5'];
	$m['DOTALL'] = $m['$assign5'];
	$pyjs['track']['lineno']=14;
	$m['$assign6'] = 32;
	$m['X'] = $m['$assign6'];
	$m['VERBOSE'] = $m['$assign6'];
	$pyjs['track']['lineno']=16;
	$m['match'] = function(pattern, string, flags) {
		if (typeof flags == 'undefined') flags=arguments['callee']['__args__'][4][1];

		$pyjs['track']={'module':'re','lineno':16};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='re';
		$pyjs['track']['lineno']=16;
		$pyjs['track']['lineno']=19;
		$pyjs['track']['lineno']=19;
		var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
		return (function(){try{try{$pyjs['in_try_except'] += 1;
		return $m['compile'](pattern, flags);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()['match'](string);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['match']['__name__'] = 'match';

	$m['match']['__bind_type__'] = 0;
	$m['match']['__args__'] = [null,null,['pattern'],['string'],['flags', 0]];
	$pyjs['track']['lineno']=21;
	$m['search'] = function(pattern, string, flags) {
		if (typeof flags == 'undefined') flags=arguments['callee']['__args__'][4][1];

		$pyjs['track']={'module':'re','lineno':21};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='re';
		$pyjs['track']['lineno']=21;
		$pyjs['track']['lineno']=24;
		$pyjs['track']['lineno']=24;
		var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
		return (function(){try{try{$pyjs['in_try_except'] += 1;
		return $m['compile'](pattern, flags);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})()['search'](string);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['search']['__name__'] = 'search';

	$m['search']['__bind_type__'] = 0;
	$m['search']['__args__'] = [null,null,['pattern'],['string'],['flags', 0]];
	$pyjs['track']['lineno']=26;
	$m['sub'] = function(pattern, repl, string, count) {
		if (typeof count == 'undefined') count=arguments['callee']['__args__'][5][1];

		$pyjs['track']={'module':'re','lineno':26};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='re';
		$pyjs['track']['lineno']=26;
		$pyjs['track']['lineno']=32;
		$pyjs['track']['lineno']=32;
		var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
		return (function(){try{try{$pyjs['in_try_except'] += 1;
		return $m['compile'](pattern, 0);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})()['sub'](repl, string, count);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['sub']['__name__'] = 'sub';

	$m['sub']['__bind_type__'] = 0;
	$m['sub']['__args__'] = [null,null,['pattern'],['repl'],['string'],['count', 0]];
	$pyjs['track']['lineno']=34;
	$m['subn'] = function(pattern, repl, string, count) {
		if (typeof count == 'undefined') count=arguments['callee']['__args__'][5][1];

		$pyjs['track']={'module':'re','lineno':34};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='re';
		$pyjs['track']['lineno']=34;
		$pyjs['track']['lineno']=42;
		$pyjs['track']['lineno']=42;
		var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
		return (function(){try{try{$pyjs['in_try_except'] += 1;
		return $m['compile'](pattern, 0);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})()['subn'](repl, string, count);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['subn']['__name__'] = 'subn';

	$m['subn']['__bind_type__'] = 0;
	$m['subn']['__args__'] = [null,null,['pattern'],['repl'],['string'],['count', 0]];
	$pyjs['track']['lineno']=44;
	$m['$$split'] = function(pattern, string, maxsplit) {
		if (typeof maxsplit == 'undefined') maxsplit=arguments['callee']['__args__'][4][1];

		$pyjs['track']={'module':'re','lineno':44};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='re';
		$pyjs['track']['lineno']=44;
		$pyjs['track']['lineno']=47;
		$pyjs['track']['lineno']=47;
		var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
		return (function(){try{try{$pyjs['in_try_except'] += 1;
		return $m['compile'](pattern, 0);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})()['$$split'](string, maxsplit);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['$$split']['__name__'] = 'split';

	$m['$$split']['__bind_type__'] = 0;
	$m['$$split']['__args__'] = [null,null,['pattern'],['string'],['maxsplit', 0]];
	$pyjs['track']['lineno']=49;
	$m['findall'] = function(pattern, string, flags) {
		if (typeof flags == 'undefined') flags=arguments['callee']['__args__'][4][1];

		$pyjs['track']={'module':'re','lineno':49};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='re';
		$pyjs['track']['lineno']=49;
		$pyjs['track']['lineno']=57;
		$pyjs['track']['lineno']=57;
		var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
		return (function(){try{try{$pyjs['in_try_except'] += 1;
		return $m['compile'](pattern, flags);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})()['findall'](string);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['findall']['__name__'] = 'findall';

	$m['findall']['__bind_type__'] = 0;
	$m['findall']['__args__'] = [null,null,['pattern'],['string'],['flags', 0]];
	$pyjs['track']['lineno']=59;
	$m['finditer'] = function(pattern, string, flags) {
		if (typeof flags == 'undefined') flags=arguments['callee']['__args__'][4][1];

		$pyjs['track']={'module':'re','lineno':59};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='re';
		$pyjs['track']['lineno']=59;
		$pyjs['track']['lineno']=64;
		$pyjs['track']['lineno']=64;
		var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
		return (function(){try{try{$pyjs['in_try_except'] += 1;
		return $m['compile'](pattern, flags);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})()['finditer'](string);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['finditer']['__name__'] = 'finditer';

	$m['finditer']['__bind_type__'] = 0;
	$m['finditer']['__args__'] = [null,null,['pattern'],['string'],['flags', 0]];
	$pyjs['track']['lineno']=66;
	$m['compile'] = function(pattern, flags) {
		if (typeof flags == 'undefined') flags=arguments['callee']['__args__'][3][1];

		$pyjs['track']={'module':'re','lineno':66};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='re';
		$pyjs['track']['lineno']=66;
		$pyjs['track']['lineno']=67;
		$pyjs['track']['lineno']=67;
		var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
		return (typeof SRE_Pattern == "undefined"?$m['SRE_Pattern']:SRE_Pattern)(pattern, flags, (function(){try{try{$pyjs['in_try_except'] += 1;
		return (typeof _compile == "undefined"?$m['_compile']:_compile)(pattern, flags);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['compile']['__name__'] = 'compile';

	$m['compile']['__bind_type__'] = 0;
	$m['compile']['__args__'] = [null,null,['pattern'],['flags', 0]];
	$pyjs['track']['lineno']=69;
	$m['purge'] = function() {

		$pyjs['track']={'module':'re','lineno':69};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='re';
		$pyjs['track']['lineno']=69;
		$pyjs['track']['lineno']=71;
		(function(){try{try{$pyjs['in_try_except'] += 1;
		return $m['_cache']['clear']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
		$pyjs['track']['lineno']=72;
		(function(){try{try{$pyjs['in_try_except'] += 1;
		return $m['_cache_repl']['clear']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return null;
	};
	$m['purge']['__name__'] = 'purge';

	$m['purge']['__bind_type__'] = 0;
	$m['purge']['__args__'] = [null,null];
	$pyjs['track']['lineno']=74;
	$m['template'] = function(pattern, flags) {
		if (typeof flags == 'undefined') flags=arguments['callee']['__args__'][3][1];

		$pyjs['track']={'module':'re','lineno':74};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='re';
		$pyjs['track']['lineno']=74;
		$pyjs['track']['lineno']=76;
		$pyjs['__active_exception_stack__'] = null;
		throw ((function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['NotImplementedError']('re.template');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})());
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return null;
	};
	$m['template']['__name__'] = 'template';

	$m['template']['__bind_type__'] = 0;
	$m['template']['__args__'] = [null,null,['pattern'],['flags', 0]];
	$pyjs['track']['lineno']=79;
	$m['_alphanum'] = (function(){try{try{$pyjs['in_try_except'] += 1;
	return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
	$pyjs['track']['lineno']=80;
	$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
	$iter1_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
	return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890';
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
	$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
	while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
		$m['c'] = $iter1_nextval['$nextval'];
		$pyjs['track']['lineno']=81;
		(function(){try{try{$pyjs['in_try_except'] += 1;
		return $m['_alphanum']['__setitem__']($m['c'], 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
	}
	if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
		$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
		$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
	}
	$pyjs['track']['module']='re';
	$pyjs['track']['lineno']=82;
	delete $m['c'];
	$pyjs['track']['lineno']=84;
	$m['escape'] = function(pattern) {
		var c,$iter2_nextval,$iter2_type,$iter2_iter,i,$iter2_idx,$add2,s,$add1,alphanum,$pyjs__trackstack_size_1,$iter2_array;
		$pyjs['track']={'module':'re','lineno':84};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='re';
		$pyjs['track']['lineno']=84;
		$pyjs['track']['lineno']=86;
		s = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['list'](pattern);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
		$pyjs['track']['lineno']=87;
		alphanum = $m['_alphanum'];
		$pyjs['track']['lineno']=88;
		$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
		$iter2_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
		return (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['range']((function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['len'](pattern);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
		$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
		while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
			i = $iter2_nextval['$nextval'];
			$pyjs['track']['lineno']=89;
			c = pattern['__getitem__'](i);
			$pyjs['track']['lineno']=90;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!alphanum['__contains__'](c));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})()) {
				$pyjs['track']['lineno']=91;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq'](c, '\x00'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})()) {
					$pyjs['track']['lineno']=92;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return s['__setitem__'](i, '\\000');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=94;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return s['__setitem__'](i, $p['__op_add']($add1='\\',$add2=c));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
				}
			}
		}
		if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
			$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
			$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
		}
		$pyjs['track']['module']='re';
		$pyjs['track']['lineno']=95;
		$pyjs['track']['lineno']=95;
		var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['__getslice'](pattern, 0, 0)['join'](s);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['escape']['__name__'] = 'escape';

	$m['escape']['__bind_type__'] = 0;
	$m['escape']['__args__'] = [null,null,['pattern']];
	$pyjs['track']['lineno']=100;
	$pyjs['track']['lineno']=102;
	$m['__inline_flags_re__'] = new RegExp("[(][?][iLmsux]+[)]");
	$pyjs['track']['lineno']=104;
	$m['_cache'] = $p['dict']([]);
	$pyjs['track']['lineno']=105;
	$m['_cache_repl'] = $p['dict']([]);
	$pyjs['track']['lineno']=106;
	$m['_MAXCACHE'] = 100;
	$pyjs['track']['lineno']=108;
	$m['_compile'] = function(pat, flags) {
		if (typeof flags == 'undefined') flags=arguments['callee']['__args__'][3][1];
		var $iter5_nextval,$iter5_array,$iter3_type,backslash,$iter5_iter,$iter4_type,$iter5_type,$iter4_iter,$iter3_idx,$add3,$iter3_nextval,brack,$iter3_iter,$iter5_idx,$sub3,$pyjs__trackstack_size_2,$sub1,spat,$sub4,flgs,$and1,$and2,$add5,$add6,$sub2,$add10,$add11,$add12,$iter3_array,c,cachekey,i,$iter4_nextval,m,$iter4_idx,p,$add7,$add4,$pyjs__trackstack_size_1,$iter4_array,$add8,$add9;
		$pyjs['track']={'module':'re','lineno':108};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='re';
		$pyjs['track']['lineno']=108;
		$pyjs['track']['lineno']=109;
		cachekey = $p['tuple']([pat, flags]);
		$pyjs['track']['lineno']=110;
		p = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $m['_cache']['get'](cachekey);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
		$pyjs['track']['lineno']=111;
		if ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool']((p !== null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})()) {
			$pyjs['track']['lineno']=112;
			$pyjs['track']['lineno']=112;
			var $pyjs__ret = p;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
		$pyjs['track']['lineno']=114;
		flgs = '';
		$pyjs['track']['lineno']=115;
		while ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool'](true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})()) {
			$pyjs['track']['lineno']=116;
			m = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['__inline_flags_re__']['Exec'](pat);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})();
			$pyjs['track']['lineno']=117;
			if ($p['bool'](m === null)) {
				$pyjs['track']['lineno']=118;
				m = null;
				$pyjs['track']['lineno']=119;
				break;
			}
			$pyjs['track']['lineno']=120;
			pat = (function(){try{try{$pyjs['in_try_except'] += 1;
			return pat['$$replace']($m['__inline_flags_re__'], '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})();
			$pyjs['track']['lineno']=121;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter3_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list'](m);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})();
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				m = $iter3_nextval['$nextval'];
				$pyjs['track']['lineno']=122;
				if ($p['bool'](m === null)) {
					$pyjs['track']['lineno']=123;
					continue;
				}
				$pyjs['track']['lineno']=124;
				$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
				$iter4_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['str'](m);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})();
				$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
				while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
					c = $iter4_nextval['$nextval'];
					$pyjs['track']['lineno']=125;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['list'](['(', '?', ')']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})()['__contains__'](c));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})()) {
						$pyjs['track']['lineno']=126;
					}
					else if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_eq'](c, 'i'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})()) {
						$pyjs['track']['lineno']=128;
						flags |= $m['IGNORECASE'];
					}
					else if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_eq'](c, 'L'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})()) {
						$pyjs['track']['lineno']=130;
						flags |= $m['LOCALE'];
					}
					else if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_eq'](c, 'm'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})()) {
						$pyjs['track']['lineno']=132;
						flags |= $m['MULTILINE'];
					}
					else if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_eq'](c, 's'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})()) {
						$pyjs['track']['lineno']=134;
						flags |= $m['DOTALL'];
					}
					else if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_eq'](c, 'u'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})()) {
						$pyjs['track']['lineno']=136;
						flags |= $m['UNICODE'];
					}
					else if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_eq'](c, 'x'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})()) {
						$pyjs['track']['lineno']=138;
						flags |= $m['VERBOSE'];
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='re';
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='re';
		}
		$pyjs['track']['lineno']=140;
		if ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool'](flags);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})()) {
			$pyjs['track']['lineno']=141;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((flags)&($m['LOCALE']));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})()) {
				$pyjs['track']['lineno']=142;
				$pyjs['__active_exception_stack__'] = null;
				throw ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['NotImplementedError']('L/LOCALE flag is not implemented');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})());
			}
			$pyjs['track']['lineno']=143;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((flags)&($m['UNICODE']));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})()) {
				$pyjs['track']['lineno']=144;
				$pyjs['__active_exception_stack__'] = null;
				throw ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['NotImplementedError']('U/UNICODE flag is not implemented');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})());
			}
			$pyjs['track']['lineno']=145;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((flags)&($m['VERBOSE']));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})()) {
				$pyjs['track']['lineno']=146;
				$pyjs['__active_exception_stack__'] = null;
				throw ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['NotImplementedError']('X/VERBOSE flag is not implemented');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})());
			}
			$pyjs['track']['lineno']=147;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((flags)&($m['DOTALL']));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})()) {
				$pyjs['track']['lineno']=149;
				p = '';
				$pyjs['track']['lineno']=150;
				brack = (typeof ($usub1=1)=='number'?
					-$usub1:
					$p['op_usub']($usub1));
				$pyjs['track']['lineno']=151;
				backslash = (typeof ($usub2=2)=='number'?
					-$usub2:
					$p['op_usub']($usub2));
				$pyjs['track']['lineno']=152;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter5_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['enumerate'](pat);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})();
				$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
				while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
					var $tupleassign1 = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['__ass_unpack']($iter5_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})();
					i = $tupleassign1[0];
					c = $tupleassign1[1];
					$pyjs['track']['lineno']=153;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](!$p['op_eq'](backslash, $p['__op_sub']($sub1=i,$sub2=1)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})()) {
						$pyjs['track']['lineno']=154;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](($p['cmp'](brack, 0) == -1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})()) {
							$pyjs['track']['lineno']=155;
							if ((function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['bool']($p['op_eq'](c, '['));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})()) {
								$pyjs['track']['lineno']=156;
								brack = i;
							}
							else if ((function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['bool']($p['op_eq'](c, '.'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})()) {
								$pyjs['track']['lineno']=158;
								c = '[\\s\\S]';
							}
							else if ((function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['bool']($p['op_eq'](c, '\\'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})()) {
								$pyjs['track']['lineno']=160;
								backslash = i;
							}
						}
						else {
							$pyjs['track']['lineno']=162;
							if ((function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['bool'](($p['bool']($and1=$p['op_eq'](c, ']'))?!$p['op_eq'](brack, $p['__op_sub']($sub3=i,$sub4=1)):$and1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})()) {
								$pyjs['track']['lineno']=163;
								brack = (typeof ($usub3=1)=='number'?
									-$usub3:
									$p['op_usub']($usub3));
							}
						}
					}
					$pyjs['track']['lineno']=164;
					p = $p['__op_add']($add3=p,$add4=c);
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='re';
				$pyjs['track']['lineno']=165;
				pat = p;
			}
			$pyjs['track']['lineno']=166;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((flags)&($m['IGNORECASE']));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})()) {
				$pyjs['track']['lineno']=167;
				flgs = $p['__op_add']($add5=flgs,$add6='i');
			}
			$pyjs['track']['lineno']=168;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((flags)&($m['MULTILINE']));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})()) {
				$pyjs['track']['lineno']=169;
				flgs = $p['__op_add']($add7=flgs,$add8='m');
			}
		}
		$pyjs['track']['lineno']=170;
		spat = $p['__op_add']($add11=$p['__op_add']($add9='([\\s\\S]*?)(',$add10=pat),$add12=')[\\s\\S]*');
		$pyjs['track']['lineno']=171;
		p = $p['tuple']([new RegExp(pat, flgs), new RegExp(spat, flgs), new RegExp(pat, "g"+flgs)]);
		$pyjs['track']['lineno']=172;
		if ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool'](((($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['len']($m['_cache']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})(), $m['_MAXCACHE']))|1) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})()) {
			$pyjs['track']['lineno']=173;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['_cache']['clear']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})();
		}
		$pyjs['track']['lineno']=174;
		(function(){try{try{$pyjs['in_try_except'] += 1;
		return $m['_cache']['__setitem__'](cachekey, p);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})();
		$pyjs['track']['lineno']=175;
		$pyjs['track']['lineno']=175;
		var $pyjs__ret = p;
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['_compile']['__name__'] = '_compile';

	$m['_compile']['__bind_type__'] = 0;
	$m['_compile']['__args__'] = [null,null,['pat'],['flags', 0]];
	$pyjs['track']['lineno']=177;
	$m['SRE_Match'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 're';
		$pyjs['track']['lineno']=178;
		$method = $pyjs__bind_method2('__init__', function(re, string, pos, endpos, groups, start, lastindex, lastgroup) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				re = arguments[1];
				string = arguments[2];
				pos = arguments[3];
				endpos = arguments[4];
				groups = arguments[5];
				start = arguments[6];
				lastindex = arguments[7];
				lastgroup = arguments[8];
			}
			var $add14,$add13;
			$pyjs['track']={'module':'re', 'lineno':178};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='re';
			$pyjs['track']['lineno']=178;
			$pyjs['track']['lineno']=179;
			self['_groups'] = groups;
			$pyjs['track']['lineno']=180;
			self['_start'] = start;
			$pyjs['track']['lineno']=181;
			self['_end'] = $p['__op_add']($add13=start,$add14=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len'](groups['__getitem__'](0));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})());
			$pyjs['track']['lineno']=182;
			self['re'] = re;
			$pyjs['track']['lineno']=183;
			self['string'] = string;
			$pyjs['track']['lineno']=184;
			self['pos'] = pos;
			$pyjs['track']['lineno']=185;
			self['endpos'] = endpos;
			$pyjs['track']['lineno']=186;
			self['lastindex'] = lastindex;
			$pyjs['track']['lineno']=187;
			self['lastgroup'] = lastgroup;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['re'],['string'],['pos'],['endpos'],['groups'],['start'],['lastindex'],['lastgroup']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=189;
		$method = $pyjs__bind_method2('start', function(group) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				group = arguments[1];
			}
			if (typeof group == 'undefined') group=arguments['callee']['__args__'][3][1];
			var substr,idx;
			$pyjs['track']={'module':'re', 'lineno':189};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='re';
			$pyjs['track']['lineno']=189;
			$pyjs['track']['lineno']=193;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['op_eq'](group, 0));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})()) {
				$pyjs['track']['lineno']=194;
				substr = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['group'](group);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})();
				$pyjs['track']['lineno']=195;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](substr);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})()) {
					$pyjs['track']['lineno']=196;
					idx = (function(){try{try{$pyjs['in_try_except'] += 1;
					return self['string']['index'](substr, $p['getattr'](self, '_start'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})();
					$pyjs['track']['lineno']=197;
					$pyjs['track']['lineno']=197;
					var $pyjs__ret = idx;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=198;
				$pyjs['__active_exception_stack__'] = null;
				throw ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['NotImplementedError']('group argument not supported');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})());
			}
			$pyjs['track']['lineno']=199;
			$pyjs['track']['lineno']=199;
			var $pyjs__ret = $p['getattr'](self, '_start');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['group', 0]]);
		$cls_definition['start'] = $method;
		$pyjs['track']['lineno']=201;
		$method = $pyjs__bind_method2('end', function(group) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				group = arguments[1];
			}
			if (typeof group == 'undefined') group=arguments['callee']['__args__'][3][1];
			var idx,$add15,substr,$add16;
			$pyjs['track']={'module':'re', 'lineno':201};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='re';
			$pyjs['track']['lineno']=201;
			$pyjs['track']['lineno']=205;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['op_eq'](group, 0));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})()) {
				$pyjs['track']['lineno']=206;
				substr = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['group'](group);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})();
				$pyjs['track']['lineno']=207;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](substr);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})()) {
					$pyjs['track']['lineno']=208;
					idx = (function(){try{try{$pyjs['in_try_except'] += 1;
					return self['string']['index'](substr, $p['getattr'](self, '_start'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})();
					$pyjs['track']['lineno']=209;
					$pyjs['track']['lineno']=209;
					var $pyjs__ret = $p['__op_add']($add15=idx,$add16=(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len'](substr);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})());
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=210;
				$pyjs['__active_exception_stack__'] = null;
				throw ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['NotImplementedError']('group argument not supported');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})());
			}
			$pyjs['track']['lineno']=211;
			$pyjs['track']['lineno']=211;
			var $pyjs__ret = $p['getattr'](self, '_end');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['group', 0]]);
		$cls_definition['end'] = $method;
		$pyjs['track']['lineno']=213;
		$method = $pyjs__bind_method2('span', function(group) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				group = arguments[1];
			}
			if (typeof group == 'undefined') group=arguments['callee']['__args__'][3][1];

			$pyjs['track']={'module':'re', 'lineno':213};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='re';
			$pyjs['track']['lineno']=213;
			$pyjs['track']['lineno']=215;
			$pyjs['track']['lineno']=215;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple']([(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['start'](group);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['end'](group);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['group', 0]]);
		$cls_definition['span'] = $method;
		$pyjs['track']['lineno']=217;
		$method = $pyjs__bind_method2('expand', function(template) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				template = arguments[1];
			}

			$pyjs['track']={'module':'re', 'lineno':217};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='re';
			$pyjs['track']['lineno']=217;
			$pyjs['track']['lineno']=220;
			$pyjs['__active_exception_stack__'] = null;
			throw ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['NotImplementedError']('expand');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})());
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['template']]);
		$cls_definition['expand'] = $method;
		$pyjs['track']['lineno']=222;
		$method = $pyjs__bind_method2('groups', function($$default) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				$$default = arguments[1];
			}
			if (typeof $$default == 'undefined') $$default=arguments['callee']['__args__'][3][1];
			var $$default;
			$pyjs['track']={'module':'re', 'lineno':222};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='re';
			$pyjs['track']['lineno']=222;
			$pyjs['track']['lineno']=226;
			$pyjs['track']['lineno']=226;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple'](function(){
				var $iter6_idx,$iter6_type,$collcomp1,$iter6_array,$pyjs__trackstack_size_1,x,$iter6_iter,$iter6_nextval;
	$collcomp1 = $p['list']();
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter6_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__getslice']($p['getattr'](self, '_groups'), 1, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_88_err){if (!$p['isinstance']($pyjs_dbg_88_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_88_err);}throw $pyjs_dbg_88_err;
}})();
			$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
			while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
				x = $iter6_nextval['$nextval'];
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $collcomp1['append'](($p['bool']((x !== null))? (x) : ($$default)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_89_err){if (!$p['isinstance']($pyjs_dbg_89_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_89_err);}throw $pyjs_dbg_89_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='re';

	return $collcomp1;}());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_90_err){if (!$p['isinstance']($pyjs_dbg_90_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_90_err);}throw $pyjs_dbg_90_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['$$default', null]]);
		$cls_definition['groups'] = $method;
		$pyjs['track']['lineno']=228;
		$method = $pyjs__bind_method2('groupdict', function($$default) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				$$default = arguments[1];
			}
			if (typeof $$default == 'undefined') $$default=arguments['callee']['__args__'][3][1];
			var $$default;
			$pyjs['track']={'module':'re', 'lineno':228};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='re';
			$pyjs['track']['lineno']=228;
			$pyjs['track']['lineno']=232;
			$pyjs['__active_exception_stack__'] = null;
			throw ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['NotImplementedError']('groupdict');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_91_err){if (!$p['isinstance']($pyjs_dbg_91_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_91_err);}throw $pyjs_dbg_91_err;
}})());
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['$$default', null]]);
		$cls_definition['groupdict'] = $method;
		$pyjs['track']['lineno']=234;
		$method = $pyjs__bind_method2('group', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));

			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			}
			var grouplist,$iter7_array,group,$iter7_nextval,$iter7_iter,$iter7_idx,$iter7_type,$pyjs__trackstack_size_1;
			$pyjs['track']={'module':'re', 'lineno':234};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='re';
			$pyjs['track']['lineno']=234;
			$pyjs['track']['lineno']=237;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len'](args);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_92_err){if (!$p['isinstance']($pyjs_dbg_92_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_92_err);}throw $pyjs_dbg_92_err;
}})(), 0));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_93_err){if (!$p['isinstance']($pyjs_dbg_93_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_93_err);}throw $pyjs_dbg_93_err;
}})()) {
				$pyjs['track']['lineno']=238;
				args = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple']([0]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_94_err){if (!$p['isinstance']($pyjs_dbg_94_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_94_err);}throw $pyjs_dbg_94_err;
}})();
			}
			$pyjs['track']['lineno']=239;
			grouplist = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_95_err){if (!$p['isinstance']($pyjs_dbg_95_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_95_err);}throw $pyjs_dbg_95_err;
}})();
			$pyjs['track']['lineno']=240;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter7_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return args;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_96_err){if (!$p['isinstance']($pyjs_dbg_96_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_96_err);}throw $pyjs_dbg_96_err;
}})();
			$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
			while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
				group = $iter7_nextval['$nextval'];
				$pyjs['track']['lineno']=241;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return grouplist['append']($p['getattr'](self, '_groups')['__getitem__'](group));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_97_err){if (!$p['isinstance']($pyjs_dbg_97_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_97_err);}throw $pyjs_dbg_97_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='re';
			$pyjs['track']['lineno']=242;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len'](grouplist);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_98_err){if (!$p['isinstance']($pyjs_dbg_98_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_98_err);}throw $pyjs_dbg_98_err;
}})(), 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_99_err){if (!$p['isinstance']($pyjs_dbg_99_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_99_err);}throw $pyjs_dbg_99_err;
}})()) {
				$pyjs['track']['lineno']=243;
				$pyjs['track']['lineno']=243;
				var $pyjs__ret = grouplist['__getitem__'](0);
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			else {
				$pyjs['track']['lineno']=245;
				$pyjs['track']['lineno']=245;
				var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['tuple'](grouplist);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_100_err){if (!$p['isinstance']($pyjs_dbg_100_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_100_err);}throw $pyjs_dbg_100_err;
}})();
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',null,['self']]);
		$cls_definition['group'] = $method;
		$pyjs['track']['lineno']=247;
		$method = $pyjs__bind_method2('__copy__', function() {
			if (this['__is_instance__'] === true) {
			} else {
			}

			$pyjs['track']={'module':'re', 'lineno':247};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='re';
			$pyjs['track']['lineno']=247;
			$pyjs['track']['lineno']=248;
			$pyjs['__active_exception_stack__'] = null;

			var $pyjs__raise_expr1 = $p['TypeError'];
			var $pyjs__raise_expr2 = 'cannot copy this pattern object';
			if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
				throw $p['TypeError']('instance exception may not have a separate value');
			}
			if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
				throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
			} else {
				throw ($pyjs__raise_expr1($pyjs__raise_expr2));
			}

			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null]);
		$cls_definition['__copy__'] = $method;
		$pyjs['track']['lineno']=250;
		$method = $pyjs__bind_method2('__deepcopy__', function() {
			if (this['__is_instance__'] === true) {
			} else {
			}

			$pyjs['track']={'module':'re', 'lineno':250};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='re';
			$pyjs['track']['lineno']=250;
			$pyjs['track']['lineno']=251;
			$pyjs['__active_exception_stack__'] = null;

			var $pyjs__raise_expr1 = $p['TypeError'];
			var $pyjs__raise_expr2 = 'cannot copy this pattern object';
			if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
				throw $p['TypeError']('instance exception may not have a separate value');
			}
			if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
				throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
			} else {
				throw ($pyjs__raise_expr1($pyjs__raise_expr2));
			}

			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null]);
		$cls_definition['__deepcopy__'] = $method;
		$pyjs['track']['lineno']=177;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('SRE_Match', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=254;
	$m['SRE_Pattern'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 're';
		$pyjs['track']['lineno']=255;
		$method = $pyjs__bind_method2('__init__', function(pat, flags, code) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pat = arguments[1];
				flags = arguments[2];
				code = arguments[3];
			}

			$pyjs['track']={'module':'re', 'lineno':255};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='re';
			$pyjs['track']['lineno']=255;
			$pyjs['track']['lineno']=256;
			self['pat'] = pat;
			$pyjs['track']['lineno']=257;
			self['flags'] = flags;
			$pyjs['track']['lineno']=258;
			self['match_code'] = code['__getitem__'](0);
			$pyjs['track']['lineno']=259;
			self['search_code'] = code['__getitem__'](1);
			$pyjs['track']['lineno']=260;
			self['findall_code'] = code['__getitem__'](2);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['pat'],['flags'],['code']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=262;
		$method = $pyjs__bind_method2('match', function(string, pos, endpos) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				string = arguments[1];
				pos = arguments[2];
				endpos = arguments[3];
			}
			if (typeof pos == 'undefined') pos=arguments['callee']['__args__'][4][1];
			if (typeof endpos == 'undefined') endpos=arguments['callee']['__args__'][5][1];
			var _groups,$iter9_array,$iter8_idx,$iter9_iter,i,$iter9_nextval,$iter8_array,$iter9_type,$iter8_iter,groups,$pyjs__trackstack_size_1,$iter8_type,$iter9_idx,$iter8_nextval;
			$pyjs['track']={'module':'re', 'lineno':262};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='re';
			$pyjs['track']['lineno']=262;
			$pyjs['track']['lineno']=266;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool']((endpos === null)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_101_err){if (!$p['isinstance']($pyjs_dbg_101_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_101_err);}throw $pyjs_dbg_101_err;
}})()) {
				$pyjs['track']['lineno']=267;
				string = $p['__getslice'](string, 0, endpos);
			}
			else {
				$pyjs['track']['lineno']=269;
				endpos = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['len'](string);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_102_err){if (!$p['isinstance']($pyjs_dbg_102_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_102_err);}throw $pyjs_dbg_102_err;
}})();
			}
			$pyjs['track']['lineno']=270;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](pos, 0));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_103_err){if (!$p['isinstance']($pyjs_dbg_103_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_103_err);}throw $pyjs_dbg_103_err;
}})()) {
				$pyjs['track']['lineno']=271;
				groups = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['match_code']['Exec'](string);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_104_err){if (!$p['isinstance']($pyjs_dbg_104_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_104_err);}throw $pyjs_dbg_104_err;
}})();
				$pyjs['track']['lineno']=272;
				if ($p['bool'](groups === null)) {
					$pyjs['track']['lineno']=273;
					$pyjs['track']['lineno']=273;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=274;
				_groups = $p['list']([]);
				$pyjs['track']['lineno']=275;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter8_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list'](groups);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_105_err){if (!$p['isinstance']($pyjs_dbg_105_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_105_err);}throw $pyjs_dbg_105_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_106_err){if (!$p['isinstance']($pyjs_dbg_106_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_106_err);}throw $pyjs_dbg_106_err;
}})();
				$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
				while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
					i = $iter8_nextval['$nextval'];
					$pyjs['track']['lineno']=276;
					if ($p['bool'](i === null)) {
						$pyjs['track']['lineno']=277;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return _groups['append'](null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_107_err){if (!$p['isinstance']($pyjs_dbg_107_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_107_err);}throw $pyjs_dbg_107_err;
}})();
					}
					else {
						$pyjs['track']['lineno']=279;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return _groups['append']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['str'](i);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_108_err){if (!$p['isinstance']($pyjs_dbg_108_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_108_err);}throw $pyjs_dbg_108_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_109_err){if (!$p['isinstance']($pyjs_dbg_109_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_109_err);}throw $pyjs_dbg_109_err;
}})();
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='re';
				$pyjs['track']['lineno']=280;
				groups = _groups;
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](((($p['cmp'](pos, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len'](string);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_110_err){if (!$p['isinstance']($pyjs_dbg_110_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_110_err);}throw $pyjs_dbg_110_err;
}})()))|1) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_111_err){if (!$p['isinstance']($pyjs_dbg_111_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_111_err);}throw $pyjs_dbg_111_err;
}})()) {
				$pyjs['track']['lineno']=282;
				$pyjs['track']['lineno']=282;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			else {
				$pyjs['track']['lineno']=289;
				groups = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['match_code']['Exec']($p['__getslice'](string, pos, null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_112_err){if (!$p['isinstance']($pyjs_dbg_112_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_112_err);}throw $pyjs_dbg_112_err;
}})();
				$pyjs['track']['lineno']=290;
				if ($p['bool'](groups === null)) {
					$pyjs['track']['lineno']=291;
					$pyjs['track']['lineno']=291;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=292;
				if ($p['bool'](!$p['op_eq']($p['getattr'](groups, 'index'), 0))) {
					$pyjs['track']['lineno']=293;
					$pyjs['track']['lineno']=293;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=294;
				_groups = $p['list']([]);
				$pyjs['track']['lineno']=295;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter9_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list'](groups);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_113_err){if (!$p['isinstance']($pyjs_dbg_113_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_113_err);}throw $pyjs_dbg_113_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_114_err){if (!$p['isinstance']($pyjs_dbg_114_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_114_err);}throw $pyjs_dbg_114_err;
}})();
				$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
				while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
					i = $iter9_nextval['$nextval'];
					$pyjs['track']['lineno']=296;
					if ($p['bool'](i === null)) {
						$pyjs['track']['lineno']=297;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return _groups['append'](null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_115_err){if (!$p['isinstance']($pyjs_dbg_115_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_115_err);}throw $pyjs_dbg_115_err;
}})();
					}
					else {
						$pyjs['track']['lineno']=299;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return _groups['append']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['str'](i);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_116_err){if (!$p['isinstance']($pyjs_dbg_116_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_116_err);}throw $pyjs_dbg_116_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_117_err){if (!$p['isinstance']($pyjs_dbg_117_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_117_err);}throw $pyjs_dbg_117_err;
}})();
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='re';
				$pyjs['track']['lineno']=300;
				groups = _groups;
			}
			$pyjs['track']['lineno']=301;
			$pyjs['track']['lineno']=301;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['SRE_Match'](self, string, pos, endpos, groups, pos, null, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_118_err){if (!$p['isinstance']($pyjs_dbg_118_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_118_err);}throw $pyjs_dbg_118_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['string'],['pos', 0],['endpos', null]]);
		$cls_definition['match'] = $method;
		$pyjs['track']['lineno']=303;
		$method = $pyjs__bind_method2('search', function(string, pos, endpos) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				string = arguments[1];
				pos = arguments[2];
				endpos = arguments[3];
			}
			if (typeof pos == 'undefined') pos=arguments['callee']['__args__'][4][1];
			if (typeof endpos == 'undefined') endpos=arguments['callee']['__args__'][5][1];
			var _groups,$iter10_nextval,i,$iter11_iter,$iter11_type,$add18,$iter10_array,$iter11_array,$add17,groups,$pyjs__trackstack_size_1,$iter10_type,$iter10_iter,$iter11_idx,$iter11_nextval,$iter10_idx;
			$pyjs['track']={'module':'re', 'lineno':303};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='re';
			$pyjs['track']['lineno']=303;
			$pyjs['track']['lineno']=308;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool']((endpos === null)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_119_err){if (!$p['isinstance']($pyjs_dbg_119_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_119_err);}throw $pyjs_dbg_119_err;
}})()) {
				$pyjs['track']['lineno']=309;
				string = $p['__getslice'](string, 0, endpos);
			}
			$pyjs['track']['lineno']=310;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](pos, 0));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_120_err){if (!$p['isinstance']($pyjs_dbg_120_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_120_err);}throw $pyjs_dbg_120_err;
}})()) {
				$pyjs['track']['lineno']=311;
				groups = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['search_code']['Exec'](string);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_121_err){if (!$p['isinstance']($pyjs_dbg_121_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_121_err);}throw $pyjs_dbg_121_err;
}})();
				$pyjs['track']['lineno']=312;
				if ($p['bool'](groups === null)) {
					$pyjs['track']['lineno']=313;
					$pyjs['track']['lineno']=313;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=314;
				_groups = $p['list']([]);
				$pyjs['track']['lineno']=315;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter10_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list'](groups);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_122_err){if (!$p['isinstance']($pyjs_dbg_122_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_122_err);}throw $pyjs_dbg_122_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_123_err){if (!$p['isinstance']($pyjs_dbg_123_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_123_err);}throw $pyjs_dbg_123_err;
}})();
				$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
				while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
					i = $iter10_nextval['$nextval'];
					$pyjs['track']['lineno']=316;
					if ($p['bool'](i === null)) {
						$pyjs['track']['lineno']=317;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return _groups['append'](null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_124_err){if (!$p['isinstance']($pyjs_dbg_124_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_124_err);}throw $pyjs_dbg_124_err;
}})();
					}
					else {
						$pyjs['track']['lineno']=319;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return _groups['append']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['str'](i);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_125_err){if (!$p['isinstance']($pyjs_dbg_125_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_125_err);}throw $pyjs_dbg_125_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_126_err){if (!$p['isinstance']($pyjs_dbg_126_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_126_err);}throw $pyjs_dbg_126_err;
}})();
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='re';
				$pyjs['track']['lineno']=320;
				groups = _groups;
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](((($p['cmp'](pos, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len'](string);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_127_err){if (!$p['isinstance']($pyjs_dbg_127_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_127_err);}throw $pyjs_dbg_127_err;
}})()))|1) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_128_err){if (!$p['isinstance']($pyjs_dbg_128_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_128_err);}throw $pyjs_dbg_128_err;
}})()) {
				$pyjs['track']['lineno']=322;
				$pyjs['track']['lineno']=322;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			else {
				$pyjs['track']['lineno']=325;
				groups = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['search_code']['Exec']($p['__getslice'](string, pos, null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_129_err){if (!$p['isinstance']($pyjs_dbg_129_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_129_err);}throw $pyjs_dbg_129_err;
}})();
				$pyjs['track']['lineno']=326;
				if ($p['bool'](groups === null)) {
					$pyjs['track']['lineno']=327;
					$pyjs['track']['lineno']=327;
					var $pyjs__ret = null;
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				$pyjs['track']['lineno']=328;
				_groups = $p['list']([]);
				$pyjs['track']['lineno']=329;
				$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
				$iter11_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list'](groups);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_130_err){if (!$p['isinstance']($pyjs_dbg_130_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_130_err);}throw $pyjs_dbg_130_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_131_err){if (!$p['isinstance']($pyjs_dbg_131_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_131_err);}throw $pyjs_dbg_131_err;
}})();
				$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
				while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
					i = $iter11_nextval['$nextval'];
					$pyjs['track']['lineno']=330;
					if ($p['bool'](i === null)) {
						$pyjs['track']['lineno']=331;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return _groups['append'](null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_132_err){if (!$p['isinstance']($pyjs_dbg_132_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_132_err);}throw $pyjs_dbg_132_err;
}})();
					}
					else {
						$pyjs['track']['lineno']=333;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return _groups['append']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['str'](i);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_133_err){if (!$p['isinstance']($pyjs_dbg_133_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_133_err);}throw $pyjs_dbg_133_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_134_err){if (!$p['isinstance']($pyjs_dbg_134_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_134_err);}throw $pyjs_dbg_134_err;
}})();
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='re';
				$pyjs['track']['lineno']=334;
				groups = _groups;
			}
			$pyjs['track']['lineno']=335;
			$pyjs['track']['lineno']=335;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['SRE_Match'](self, string, pos, endpos, $p['__getslice'](groups, 2, null), $p['__op_add']($add17=pos,$add18=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len'](groups['__getitem__'](1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_135_err){if (!$p['isinstance']($pyjs_dbg_135_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_135_err);}throw $pyjs_dbg_135_err;
}})()), null, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_136_err){if (!$p['isinstance']($pyjs_dbg_136_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_136_err);}throw $pyjs_dbg_136_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['string'],['pos', 0],['endpos', null]]);
		$cls_definition['search'] = $method;
		$pyjs['track']['lineno']=337;
		$method = $pyjs__bind_method2('findall', function(string, pos, endpos) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				string = arguments[1];
				pos = arguments[2];
				endpos = arguments[3];
			}
			if (typeof pos == 'undefined') pos=arguments['callee']['__args__'][4][1];
			if (typeof endpos == 'undefined') endpos=arguments['callee']['__args__'][5][1];
			var all,span,m;
			$pyjs['track']={'module':'re', 'lineno':337};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='re';
			$pyjs['track']['lineno']=337;
			$pyjs['track']['lineno']=339;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool']((endpos === null)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_137_err){if (!$p['isinstance']($pyjs_dbg_137_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_137_err);}throw $pyjs_dbg_137_err;
}})()) {
				$pyjs['track']['lineno']=340;
				string = $p['__getslice'](string, 0, endpos);
			}
			$pyjs['track']['lineno']=341;
			all = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_138_err){if (!$p['isinstance']($pyjs_dbg_138_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_138_err);}throw $pyjs_dbg_138_err;
}})();
			$pyjs['track']['lineno']=342;
			while ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_139_err){if (!$p['isinstance']($pyjs_dbg_139_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_139_err);}throw $pyjs_dbg_139_err;
}})()) {
				$pyjs['track']['lineno']=343;
				m = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['search'](string, pos);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_140_err){if (!$p['isinstance']($pyjs_dbg_140_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_140_err);}throw $pyjs_dbg_140_err;
}})();
				$pyjs['track']['lineno']=344;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((m === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_141_err){if (!$p['isinstance']($pyjs_dbg_141_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_141_err);}throw $pyjs_dbg_141_err;
}})()) {
					$pyjs['track']['lineno']=345;
					break;
				}
				$pyjs['track']['lineno']=346;
				span = (function(){try{try{$pyjs['in_try_except'] += 1;
				return m['span']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_142_err){if (!$p['isinstance']($pyjs_dbg_142_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_142_err);}throw $pyjs_dbg_142_err;
}})();
				$pyjs['track']['lineno']=347;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return m['groups']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_143_err){if (!$p['isinstance']($pyjs_dbg_143_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_143_err);}throw $pyjs_dbg_143_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_144_err){if (!$p['isinstance']($pyjs_dbg_144_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_144_err);}throw $pyjs_dbg_144_err;
}})()) {
					$pyjs['track']['lineno']=348;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return all['append']($p['__getslice'](string, span['__getitem__'](0), span['__getitem__'](1)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_145_err){if (!$p['isinstance']($pyjs_dbg_145_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_145_err);}throw $pyjs_dbg_145_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=350;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return all['append']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple'](function(){
						var group,$or2,$iter12_type,$iter12_array,$collcomp2,$iter12_iter,$pyjs__trackstack_size_1,$or1,$iter12_idx,$iter12_nextval;
	$collcomp2 = $p['list']();
					$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
					$iter12_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
					return (function(){try{try{$pyjs['in_try_except'] += 1;
					return m['groups']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_146_err){if (!$p['isinstance']($pyjs_dbg_146_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_146_err);}throw $pyjs_dbg_146_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_147_err){if (!$p['isinstance']($pyjs_dbg_147_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_147_err);}throw $pyjs_dbg_147_err;
}})();
					$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
					while (typeof($p['__wrapped_next']($iter12_nextval)['$nextval']) != 'undefined') {
						group = $iter12_nextval['$nextval'];
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return $collcomp2['append'](($p['bool']($or1=group)?$or1:''));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_148_err){if (!$p['isinstance']($pyjs_dbg_148_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_148_err);}throw $pyjs_dbg_148_err;
}})();
					}
					if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
						$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
						$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
					}
					$pyjs['track']['module']='re';

	return $collcomp2;}());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_149_err){if (!$p['isinstance']($pyjs_dbg_149_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_149_err);}throw $pyjs_dbg_149_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_150_err){if (!$p['isinstance']($pyjs_dbg_150_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_150_err);}throw $pyjs_dbg_150_err;
}})();
				}
				$pyjs['track']['lineno']=351;
				pos = span['__getitem__'](1);
			}
			$pyjs['track']['lineno']=352;
			$pyjs['track']['lineno']=352;
			var $pyjs__ret = all;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
			$pyjs['track']['lineno']=354;
			$pyjs['track']['lineno']=354;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['__getslice'](string, pos, null)['match']($p['getattr'](self, 'findall_code'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_151_err){if (!$p['isinstance']($pyjs_dbg_151_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_151_err);}throw $pyjs_dbg_151_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_152_err){if (!$p['isinstance']($pyjs_dbg_152_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_152_err);}throw $pyjs_dbg_152_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['string'],['pos', 0],['endpos', null]]);
		$cls_definition['findall'] = $method;
		$pyjs['track']['lineno']=356;
		$method = $pyjs__bind_method2('sub', function(repl, string, count) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				repl = arguments[1];
				string = arguments[2];
				count = arguments[3];
			}
			if (typeof count == 'undefined') count=arguments['callee']['__args__'][5][1];

			$pyjs['track']={'module':'re', 'lineno':356};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='re';
			$pyjs['track']['lineno']=356;
			$pyjs['track']['lineno']=359;
			$pyjs['track']['lineno']=359;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['subn'](repl, string, count);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_153_err){if (!$p['isinstance']($pyjs_dbg_153_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_153_err);}throw $pyjs_dbg_153_err;
}})()['__getitem__'](0);
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['repl'],['string'],['count', 0]]);
		$cls_definition['sub'] = $method;
		$pyjs['track']['lineno']=361;
		$method = $pyjs__bind_method2('subn', function(repl, string, count) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				repl = arguments[1];
				string = arguments[2];
				count = arguments[3];
			}
			if (typeof count == 'undefined') count=arguments['callee']['__args__'][5][1];
			var span,$sub6,$add21,res,$add22,m,pos,n,subst,$add26,$add20,$add24,$add25,$add19,$sub5,$add23;
			$pyjs['track']={'module':'re', 'lineno':361};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='re';
			$pyjs['track']['lineno']=361;
			$pyjs['track']['lineno']=365;
			res = '';
			$pyjs['track']['lineno']=366;
			n = 0;
			$pyjs['track']['lineno']=367;
			subst = repl;
			$pyjs['track']['lineno']=368;
			pos = 0;
			$pyjs['track']['lineno']=369;
			while ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](((($p['cmp'](count, 0))|1) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_154_err){if (!$p['isinstance']($pyjs_dbg_154_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_154_err);}throw $pyjs_dbg_154_err;
}})()) {
				$pyjs['track']['lineno']=370;
				m = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['search'](string, pos);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_155_err){if (!$p['isinstance']($pyjs_dbg_155_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_155_err);}throw $pyjs_dbg_155_err;
}})();
				$pyjs['track']['lineno']=371;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((m === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_156_err){if (!$p['isinstance']($pyjs_dbg_156_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_156_err);}throw $pyjs_dbg_156_err;
}})()) {
					$pyjs['track']['lineno']=372;
					break;
				}
				$pyjs['track']['lineno']=373;
				span = (function(){try{try{$pyjs['in_try_except'] += 1;
				return m['span']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_157_err){if (!$p['isinstance']($pyjs_dbg_157_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_157_err);}throw $pyjs_dbg_157_err;
}})();
				$pyjs['track']['lineno']=374;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['callable'](repl);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_158_err){if (!$p['isinstance']($pyjs_dbg_158_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_158_err);}throw $pyjs_dbg_158_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_159_err){if (!$p['isinstance']($pyjs_dbg_159_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_159_err);}throw $pyjs_dbg_159_err;
}})()) {
					$pyjs['track']['lineno']=375;
					subst = (function(){try{try{$pyjs['in_try_except'] += 1;
					return repl(m);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_160_err){if (!$p['isinstance']($pyjs_dbg_160_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_160_err);}throw $pyjs_dbg_160_err;
}})();
				}
				$pyjs['track']['lineno']=376;
				res = $p['__op_add']($add19=res,$add20=$p['__getslice'](string, pos, span['__getitem__'](0)));
				$pyjs['track']['lineno']=377;
				res = $p['__op_add']($add21=res,$add22=subst);
				$pyjs['track']['lineno']=378;
				pos = span['__getitem__'](1);
				$pyjs['track']['lineno']=379;
				n = $p['__op_add']($add23=n,$add24=1);
				$pyjs['track']['lineno']=380;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](count);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_161_err){if (!$p['isinstance']($pyjs_dbg_161_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_161_err);}throw $pyjs_dbg_161_err;
}})()) {
					$pyjs['track']['lineno']=381;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_eq'](count, 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_162_err){if (!$p['isinstance']($pyjs_dbg_162_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_162_err);}throw $pyjs_dbg_162_err;
}})()) {
						$pyjs['track']['lineno']=382;
						break;
					}
					$pyjs['track']['lineno']=383;
					count = $p['__op_sub']($sub5=count,$sub6=1);
				}
			}
			$pyjs['track']['lineno']=384;
			$pyjs['track']['lineno']=384;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple']([$p['__op_add']($add25=res,$add26=$p['__getslice'](string, pos, null)), n]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_163_err){if (!$p['isinstance']($pyjs_dbg_163_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_163_err);}throw $pyjs_dbg_163_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['repl'],['string'],['count', 0]]);
		$cls_definition['subn'] = $method;
		$pyjs['track']['lineno']=386;
		$method = $pyjs__bind_method2('$$split', function(string, maxsplit) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				string = arguments[1];
				maxsplit = arguments[2];
			}
			if (typeof maxsplit == 'undefined') maxsplit=arguments['callee']['__args__'][4][1];
			var span,m,pos,splitted;
			$pyjs['track']={'module':'re', 'lineno':386};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='re';
			$pyjs['track']['lineno']=386;
			$pyjs['track']['lineno']=388;
			splitted = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_164_err){if (!$p['isinstance']($pyjs_dbg_164_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_164_err);}throw $pyjs_dbg_164_err;
}})();
			$pyjs['track']['lineno']=389;
			pos = 0;
			$pyjs['track']['lineno']=390;
			while ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](((($p['cmp'](maxsplit, 0))|1) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_165_err){if (!$p['isinstance']($pyjs_dbg_165_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_165_err);}throw $pyjs_dbg_165_err;
}})()) {
				$pyjs['track']['lineno']=391;
				m = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['search'](string, pos);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_166_err){if (!$p['isinstance']($pyjs_dbg_166_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_166_err);}throw $pyjs_dbg_166_err;
}})();
				$pyjs['track']['lineno']=392;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((m === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_167_err){if (!$p['isinstance']($pyjs_dbg_167_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_167_err);}throw $pyjs_dbg_167_err;
}})()) {
					$pyjs['track']['lineno']=393;
					break;
				}
				$pyjs['track']['lineno']=394;
				span = (function(){try{try{$pyjs['in_try_except'] += 1;
				return m['span']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_168_err){if (!$p['isinstance']($pyjs_dbg_168_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_168_err);}throw $pyjs_dbg_168_err;
}})();
				$pyjs['track']['lineno']=395;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return splitted['append']($p['__getslice'](string, pos, span['__getitem__'](0)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_169_err){if (!$p['isinstance']($pyjs_dbg_169_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_169_err);}throw $pyjs_dbg_169_err;
}})();
				$pyjs['track']['lineno']=396;
				pos = span['__getitem__'](1);
			}
			$pyjs['track']['lineno']=397;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['cmp'](pos, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len'](string);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_170_err){if (!$p['isinstance']($pyjs_dbg_170_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_170_err);}throw $pyjs_dbg_170_err;
}})()) == -1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_171_err){if (!$p['isinstance']($pyjs_dbg_171_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_171_err);}throw $pyjs_dbg_171_err;
}})()) {
				$pyjs['track']['lineno']=398;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return splitted['append']($p['__getslice'](string, pos, null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_172_err){if (!$p['isinstance']($pyjs_dbg_172_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_172_err);}throw $pyjs_dbg_172_err;
}})();
			}
			$pyjs['track']['lineno']=399;
			$pyjs['track']['lineno']=399;
			var $pyjs__ret = splitted;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['string'],['maxsplit', 0]]);
		$cls_definition['$$split'] = $method;
		$pyjs['track']['lineno']=401;
		$method = $pyjs__bind_method2('finditer', function(string, pos, endpos) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				string = arguments[1];
				pos = arguments[2];
				endpos = arguments[3];
			}
			if (typeof pos == 'undefined') pos=arguments['callee']['__args__'][4][1];
			if (typeof endpos == 'undefined') endpos=arguments['callee']['__args__'][5][1];

			$pyjs['track']={'module':'re', 'lineno':401};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='re';
			$pyjs['track']['lineno']=401;
			$pyjs['track']['lineno']=403;
			$pyjs['track']['lineno']=403;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['findall'](string, pos, endpos);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_173_err){if (!$p['isinstance']($pyjs_dbg_173_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_173_err);}throw $pyjs_dbg_173_err;
}})()['__iter__']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_174_err){if (!$p['isinstance']($pyjs_dbg_174_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_174_err);}throw $pyjs_dbg_174_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 1, [null,null,['self'],['string'],['pos', 0],['endpos', null]]);
		$cls_definition['finditer'] = $method;
		$pyjs['track']['lineno']=405;
		$method = $pyjs__bind_method2('scanner', function(string, start, end) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				string = arguments[1];
				start = arguments[2];
				end = arguments[3];
			}
			if (typeof start == 'undefined') start=arguments['callee']['__args__'][4][1];
			if (typeof end == 'undefined') end=arguments['callee']['__args__'][5][1];

			$pyjs['track']={'module':'re', 'lineno':405};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='re';
			$pyjs['track']['lineno']=405;
			$pyjs['track']['lineno']=406;
			$pyjs['__active_exception_stack__'] = null;
			throw ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['NotImplementedError']('scanner');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_175_err){if (!$p['isinstance']($pyjs_dbg_175_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_175_err);}throw $pyjs_dbg_175_err;
}})());
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['string'],['start', 0],['end', null]]);
		$cls_definition['scanner'] = $method;
		$pyjs['track']['lineno']=408;
		$method = $pyjs__bind_method2('__copy__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'re', 'lineno':408};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='re';
			$pyjs['track']['lineno']=408;
			$pyjs['track']['lineno']=409;
			$pyjs['__active_exception_stack__'] = null;

			var $pyjs__raise_expr1 = $p['TypeError'];
			var $pyjs__raise_expr2 = 'cannot copy this pattern object';
			if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
				throw $p['TypeError']('instance exception may not have a separate value');
			}
			if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
				throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
			} else {
				throw ($pyjs__raise_expr1($pyjs__raise_expr2));
			}

			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__copy__'] = $method;
		$pyjs['track']['lineno']=411;
		$method = $pyjs__bind_method2('__deepcopy__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'re', 'lineno':411};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='re';
			$pyjs['track']['lineno']=411;
			$pyjs['track']['lineno']=412;
			$pyjs['__active_exception_stack__'] = null;

			var $pyjs__raise_expr1 = $p['TypeError'];
			var $pyjs__raise_expr2 = 'cannot copy this pattern object';
			if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1['__is_instance__'] === true) {
				throw $p['TypeError']('instance exception may not have a separate value');
			}
			if ($p['isinstance']($pyjs__raise_expr2, $p['tuple'])) {
				throw ($pyjs__raise_expr1['apply']($pyjs__raise_expr1, $pyjs__raise_expr2['getArray']()));
			} else {
				throw ($pyjs__raise_expr1($pyjs__raise_expr2));
			}

			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__deepcopy__'] = $method;
		$pyjs['track']['lineno']=254;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('SRE_Pattern', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end re */


/* end module: re */


