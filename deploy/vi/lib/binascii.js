/* start module: binascii */
$pyjs['loaded_modules']['binascii'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['binascii']['__was_initialized__']) return $pyjs['loaded_modules']['binascii'];
	var $m = $pyjs['loaded_modules']['binascii'];
	$m['__repr__'] = function() { return '<module: binascii>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'binascii';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$m.__track_lines__[1] = 'binascii.py, line 1:\n    # binascii.py from the pypy project';
	$m.__track_lines__[5] = 'binascii.py, line 5:\n    class Error(Exception):';
	$m.__track_lines__[6] = 'binascii.py, line 6:\n    pass';
	$m.__track_lines__[8] = 'binascii.py, line 8:\n    class Done(Exception):';
	$m.__track_lines__[9] = 'binascii.py, line 9:\n    pass';
	$m.__track_lines__[11] = 'binascii.py, line 11:\n    class Incomplete(Exception):';
	$m.__track_lines__[12] = 'binascii.py, line 12:\n    pass';
	$m.__track_lines__[14] = 'binascii.py, line 14:\n    def a2b_uu(s):';
	$m.__track_lines__[15] = 'binascii.py, line 15:\n    if not s:';
	$m.__track_lines__[16] = "binascii.py, line 16:\n    return ''";
	$m.__track_lines__[18] = 'binascii.py, line 18:\n    length = (ord(s[0]) - 0x20) % 64';
	$m.__track_lines__[20] = 'binascii.py, line 20:\n    def quadruplets_gen(s):';
	$m.__track_lines__[29] = 'binascii.py, line 29:\n    iterlist = []';
	$m.__track_lines__[30] = 'binascii.py, line 30:\n    while s:';
	$m.__track_lines__[31] = 'binascii.py, line 31:\n    try:';
	$m.__track_lines__[32] = 'binascii.py, line 32:\n    iterlist.append((ord(s[0]), ord(s[1]), ord(s[2]), ord(s[3])))';
	$m.__track_lines__[34] = "binascii.py, line 34:\n    s += '   '";
	$m.__track_lines__[35] = 'binascii.py, line 35:\n    iterlist.append((ord(s[0]), ord(s[1]), ord(s[2]), ord(s[3])))';
	$m.__track_lines__[36] = 'binascii.py, line 36:\n    return iterlist';
	$m.__track_lines__[37] = 'binascii.py, line 37:\n    s = s[4:]';
	$m.__track_lines__[38] = 'binascii.py, line 38:\n    return iterlist';
	$m.__track_lines__[40] = 'binascii.py, line 40:\n    try:';
	$m.__track_lines__[41] = "binascii.py, line 41:\n    result = [''.join(";
	$m.__track_lines__[47] = "binascii.py, line 47:\n    raise Error('Illegal char')";
	$m.__track_lines__[48] = "binascii.py, line 48:\n    result = ''.join(result)";
	$m.__track_lines__[49] = 'binascii.py, line 49:\n    trailingdata = result[length:]';
	$m.__track_lines__[50] = "binascii.py, line 50:\n    if trailingdata.strip('\\x00'):";
	$m.__track_lines__[51] = "binascii.py, line 51:\n    raise Error('Trailing garbage')";
	$m.__track_lines__[52] = 'binascii.py, line 52:\n    result = result[:length]';
	$m.__track_lines__[53] = 'binascii.py, line 53:\n    if len(result) < length:';
	$m.__track_lines__[54] = "binascii.py, line 54:\n    result += ((length - len(result)) * '\\x00')";
	$m.__track_lines__[55] = 'binascii.py, line 55:\n    return result';
	$m.__track_lines__[58] = 'binascii.py, line 58:\n    def b2a_uu(s):';
	$m.__track_lines__[59] = 'binascii.py, line 59:\n    length = len(s)';
	$m.__track_lines__[60] = 'binascii.py, line 60:\n    if length > 45:';
	$m.__track_lines__[61] = "binascii.py, line 61:\n    raise Error('At most 45 bytes at once')";
	$m.__track_lines__[63] = 'binascii.py, line 63:\n    def triples_gen(s):';
	$m.__track_lines__[72] = 'binascii.py, line 72:\n    iterlist = []';
	$m.__track_lines__[73] = 'binascii.py, line 73:\n    while s:';
	$m.__track_lines__[74] = 'binascii.py, line 74:\n    try:';
	$m.__track_lines__[75] = 'binascii.py, line 75:\n    iterlist.append((ord(s[0]), ord(s[1]), ord(s[2])))';
	$m.__track_lines__[77] = "binascii.py, line 77:\n    s += '\\0\\0'";
	$m.__track_lines__[78] = 'binascii.py, line 78:\n    iterlist.append((ord(s[0]), ord(s[1]), ord(s[2])))';
	$m.__track_lines__[79] = 'binascii.py, line 79:\n    return iterlist';
	$m.__track_lines__[80] = 'binascii.py, line 80:\n    s = s[3:]';
	$m.__track_lines__[81] = 'binascii.py, line 81:\n    return iterlist';
	$m.__track_lines__[83] = "binascii.py, line 83:\n    result = [''.join(";
	$m.__track_lines__[89] = "binascii.py, line 89:\n    return chr(ord(' ') + (length & 077)) + ''.join(result) + '\\n'";
	$m.__track_lines__[92] = 'binascii.py, line 92:\n    table_a2b_base64 = {';
	$m.__track_lines__[161] = 'binascii.py, line 161:\n    def a2b_base64(s):';
	$m.__track_lines__[162] = 'binascii.py, line 162:\n    if (    not isinstance(s, str)';
	$m.__track_lines__[165] = 'binascii.py, line 165:\n    raise TypeError("expected string or unicode, got %r" % (s,))';
	$m.__track_lines__[166] = 'binascii.py, line 166:\n    s = s.rstrip()';
	$m.__track_lines__[170] = 'binascii.py, line 170:\n    def next_valid_char(s, pos):';
	$m.__track_lines__[171] = 'binascii.py, line 171:\n    for i in range(pos + 1, len(s)):';
	$m.__track_lines__[172] = 'binascii.py, line 172:\n    c = s[i]';
	$m.__track_lines__[173] = "binascii.py, line 173:\n    if c < '\\x7f':";
	$m.__track_lines__[179] = 'binascii.py, line 179:\n    if table_a2b_base64.has_key(c):';
	$m.__track_lines__[180] = 'binascii.py, line 180:\n    return c';
	$m.__track_lines__[181] = 'binascii.py, line 181:\n    return None';
	$m.__track_lines__[183] = 'binascii.py, line 183:\n    quad_pos = 0';
	$m.__track_lines__[184] = 'binascii.py, line 184:\n    leftbits = 0';
	$m.__track_lines__[185] = 'binascii.py, line 185:\n    leftchar = 0';
	$m.__track_lines__[186] = 'binascii.py, line 186:\n    res = []';
	$m.__track_lines__[187] = 'binascii.py, line 187:\n    for i, c in enumerate(s):';
	$m.__track_lines__[188] = "binascii.py, line 188:\n    if c > '\\x7f' or c == '\\n' or c == '\\r' or c == ' ':";
	$m.__track_lines__[189] = 'binascii.py, line 189:\n    continue';
	$m.__track_lines__[190] = "binascii.py, line 190:\n    if c == '=':";
	$m.__track_lines__[191] = "binascii.py, line 191:\n    if quad_pos < 2 or (quad_pos == 2 and next_valid_char(s, i) != '='):";
	$m.__track_lines__[192] = 'binascii.py, line 192:\n    continue';
	$m.__track_lines__[194] = 'binascii.py, line 194:\n    leftbits = 0';
	$m.__track_lines__[195] = 'binascii.py, line 195:\n    break';
	$m.__track_lines__[196] = 'binascii.py, line 196:\n    if not table_a2b_base64.has_key(c):';
	$m.__track_lines__[197] = 'binascii.py, line 197:\n    continue';
	$m.__track_lines__[198] = 'binascii.py, line 198:\n    next_c = table_a2b_base64[c]';
	$m.__track_lines__[199] = 'binascii.py, line 199:\n    quad_pos = (quad_pos + 1) & 0x03';
	$m.__track_lines__[200] = 'binascii.py, line 200:\n    leftchar = (leftchar << 6) | next_c';
	$m.__track_lines__[201] = 'binascii.py, line 201:\n    leftbits += 6';
	$m.__track_lines__[202] = 'binascii.py, line 202:\n    if leftbits >= 8:';
	$m.__track_lines__[203] = 'binascii.py, line 203:\n    leftbits -= 8';
	$m.__track_lines__[204] = 'binascii.py, line 204:\n    res.append((leftchar >> leftbits & 0xff))';
	$m.__track_lines__[205] = 'binascii.py, line 205:\n    leftchar &= ((1 << leftbits) - 1)';
	$m.__track_lines__[206] = 'binascii.py, line 206:\n    if leftbits != 0:';
	$m.__track_lines__[207] = "binascii.py, line 207:\n    raise Error('Incorrect padding')";
	$m.__track_lines__[209] = "binascii.py, line 209:\n    return ''.join([chr(i) for i in res])";
	$m.__track_lines__[211] = 'binascii.py, line 211:\n    table_b2a_base64 = \\';
	$m.__track_lines__[214] = 'binascii.py, line 214:\n    def b2a_base64(s):';
	$m.__track_lines__[215] = 'binascii.py, line 215:\n    length = len(s)';
	$m.__track_lines__[216] = 'binascii.py, line 216:\n    final_length = length % 3';
	$m.__track_lines__[218] = 'binascii.py, line 218:\n    def triples_gen(s):';
	$m.__track_lines__[227] = 'binascii.py, line 227:\n    iterlist = []';
	$m.__track_lines__[228] = 'binascii.py, line 228:\n    while s:';
	$m.__track_lines__[229] = 'binascii.py, line 229:\n    try:';
	$m.__track_lines__[230] = 'binascii.py, line 230:\n    iterlist.append((ord(s[0]), ord(s[1]), ord(s[2])))';
	$m.__track_lines__[232] = "binascii.py, line 232:\n    s += '\\0\\0'";
	$m.__track_lines__[233] = 'binascii.py, line 233:\n    iterlist.append((ord(s[0]), ord(s[1]), ord(s[2])))';
	$m.__track_lines__[234] = 'binascii.py, line 234:\n    return iterlist';
	$m.__track_lines__[235] = 'binascii.py, line 235:\n    s = s[3:]';
	$m.__track_lines__[236] = 'binascii.py, line 236:\n    return iterlist';
	$m.__track_lines__[238] = 'binascii.py, line 238:\n    a = triples_gen(s[ :length - final_length])';
	$m.__track_lines__[240] = "binascii.py, line 240:\n    result = [''.join(";
	$m.__track_lines__[247] = 'binascii.py, line 247:\n    final = s[length - final_length:]';
	$m.__track_lines__[248] = 'binascii.py, line 248:\n    if final_length == 0:';
	$m.__track_lines__[249] = "binascii.py, line 249:\n    snippet = ''";
	$m.__track_lines__[251] = 'binascii.py, line 251:\n    a = ord(final[0])';
	$m.__track_lines__[252] = 'binascii.py, line 252:\n    snippet = table_b2a_base64[(a >> 2 ) & 0x3F] + \\';
	$m.__track_lines__[255] = 'binascii.py, line 255:\n    a = ord(final[0])';
	$m.__track_lines__[256] = 'binascii.py, line 256:\n    b = ord(final[1])';
	$m.__track_lines__[257] = 'binascii.py, line 257:\n    snippet = table_b2a_base64[(a >> 2) & 0x3F] + \\';
	$m.__track_lines__[260] = "binascii.py, line 260:\n    return ''.join(result) + snippet + '\\n'";
	$m.__track_lines__[262] = 'binascii.py, line 262:\n    def a2b_qp(s, header=False):';
	$m.__track_lines__[263] = 'binascii.py, line 263:\n    inp = 0';
	$m.__track_lines__[264] = 'binascii.py, line 264:\n    odata = []';
	$m.__track_lines__[265] = 'binascii.py, line 265:\n    while inp < len(s):';
	$m.__track_lines__[266] = "binascii.py, line 266:\n    if s[inp] == '=':";
	$m.__track_lines__[267] = 'binascii.py, line 267:\n    inp += 1';
	$m.__track_lines__[268] = 'binascii.py, line 268:\n    if inp >= len(s):';
	$m.__track_lines__[269] = 'binascii.py, line 269:\n    break';
	$m.__track_lines__[271] = "binascii.py, line 271:\n    if (s[inp] == '\\n') or (s[inp] == '\\r'):";
	$m.__track_lines__[272] = "binascii.py, line 272:\n    if s[inp] != '\\n':";
	$m.__track_lines__[273] = "binascii.py, line 273:\n    while inp < len(s) and s[inp] != '\\n':";
	$m.__track_lines__[274] = 'binascii.py, line 274:\n    inp += 1';
	$m.__track_lines__[275] = 'binascii.py, line 275:\n    if inp < len(s):';
	$m.__track_lines__[276] = 'binascii.py, line 276:\n    inp += 1';
	$m.__track_lines__[279] = "binascii.py, line 279:\n    odata.append('=')";
	$m.__track_lines__[280] = 'binascii.py, line 280:\n    inp += 1';
	$m.__track_lines__[282] = 'binascii.py, line 282:\n    ch = chr(int(s[inp:inp+2], 16))';
	$m.__track_lines__[283] = 'binascii.py, line 283:\n    inp += 2';
	$m.__track_lines__[284] = 'binascii.py, line 284:\n    odata.append(ch)';
	$m.__track_lines__[286] = "binascii.py, line 286:\n    odata.append('=')";
	$m.__track_lines__[288] = "binascii.py, line 288:\n    odata.append(' ')";
	$m.__track_lines__[289] = 'binascii.py, line 289:\n    inp += 1';
	$m.__track_lines__[291] = 'binascii.py, line 291:\n    odata.append(s[inp])';
	$m.__track_lines__[292] = 'binascii.py, line 292:\n    inp += 1';
	$m.__track_lines__[293] = "binascii.py, line 293:\n    return ''.join(odata)";
	$m.__track_lines__[295] = 'binascii.py, line 295:\n    def b2a_qp(data, quotetabs=False, istext=True, header=False):';
	$m.__track_lines__[302] = 'binascii.py, line 302:\n    MAXLINESIZE = 76';
	$m.__track_lines__[305] = "binascii.py, line 305:\n    lf = data.find('\\n')";
	$m.__track_lines__[306] = "binascii.py, line 306:\n    crlf = lf > 0 and data[lf-1] == '\\r'";
	$m.__track_lines__[308] = 'binascii.py, line 308:\n    inp = 0';
	$m.__track_lines__[309] = 'binascii.py, line 309:\n    linelen = 0';
	$m.__track_lines__[310] = 'binascii.py, line 310:\n    odata = []';
	$m.__track_lines__[311] = 'binascii.py, line 311:\n    while inp < len(data):';
	$m.__track_lines__[312] = 'binascii.py, line 312:\n    c = data[inp]';
	$m.__track_lines__[313] = "binascii.py, line 313:\n    if (c > '~' or";
	$m.__track_lines__[323] = 'binascii.py, line 323:\n    linelen += 3';
	$m.__track_lines__[324] = 'binascii.py, line 324:\n    if linelen >= MAXLINESIZE:';
	$m.__track_lines__[325] = "binascii.py, line 325:\n    odata.append('=')";
	$m.__track_lines__[326] = "binascii.py, line 326:\n    if crlf: odata.append('\\r')";
	$m.__track_lines__[327] = "binascii.py, line 327:\n    odata.append('\\n')";
	$m.__track_lines__[328] = 'binascii.py, line 328:\n    linelen = 3';
	$m.__track_lines__[329] = "binascii.py, line 329:\n    odata.append('=' + two_hex_digits(ord(c)))";
	$m.__track_lines__[330] = 'binascii.py, line 330:\n    inp += 1';
	$m.__track_lines__[332] = 'binascii.py, line 332:\n    if (istext and';
	$m.__track_lines__[335] = 'binascii.py, line 335:\n    linelen = 0';
	$m.__track_lines__[337] = 'binascii.py, line 337:\n    if (len(odata) > 0 and';
	$m.__track_lines__[339] = 'binascii.py, line 339:\n    ch = ord(odata[-1])';
	$m.__track_lines__[340] = "binascii.py, line 340:\n    odata[-1] = '='";
	$m.__track_lines__[341] = 'binascii.py, line 341:\n    odata.append(two_hex_digits(ch))';
	$m.__track_lines__[343] = "binascii.py, line 343:\n    if crlf: odata.append('\\r')";
	$m.__track_lines__[344] = "binascii.py, line 344:\n    odata.append('\\n')";
	$m.__track_lines__[345] = "binascii.py, line 345:\n    if c == '\\r':";
	$m.__track_lines__[346] = 'binascii.py, line 346:\n    inp += 2';
	$m.__track_lines__[348] = 'binascii.py, line 348:\n    inp += 1';
	$m.__track_lines__[350] = 'binascii.py, line 350:\n    if (inp + 1 < len(data) and';
	$m.__track_lines__[353] = "binascii.py, line 353:\n    odata.append('=')";
	$m.__track_lines__[354] = "binascii.py, line 354:\n    if crlf: odata.append('\\r')";
	$m.__track_lines__[355] = "binascii.py, line 355:\n    odata.append('\\n')";
	$m.__track_lines__[356] = 'binascii.py, line 356:\n    linelen = 0';
	$m.__track_lines__[358] = 'binascii.py, line 358:\n    linelen += 1';
	$m.__track_lines__[359] = "binascii.py, line 359:\n    if header and c == ' ':";
	$m.__track_lines__[360] = "binascii.py, line 360:\n    c = '_'";
	$m.__track_lines__[361] = 'binascii.py, line 361:\n    odata.append(c)';
	$m.__track_lines__[362] = 'binascii.py, line 362:\n    inp += 1';
	$m.__track_lines__[363] = "binascii.py, line 363:\n    return ''.join(odata)";
	$m.__track_lines__[365] = "binascii.py, line 365:\n    hex_numbers = '0123456789ABCDEF'";
	$m.__track_lines__[366] = 'binascii.py, line 366:\n    def hex(n):';
	$m.__track_lines__[367] = 'binascii.py, line 367:\n    if n == 0:';
	$m.__track_lines__[368] = "binascii.py, line 368:\n    return '0'";
	$m.__track_lines__[370] = 'binascii.py, line 370:\n    if n < 0:';
	$m.__track_lines__[371] = 'binascii.py, line 371:\n    n = -n';
	$m.__track_lines__[372] = "binascii.py, line 372:\n    sign = '-'";
	$m.__track_lines__[374] = "binascii.py, line 374:\n    sign = ''";
	$m.__track_lines__[375] = 'binascii.py, line 375:\n    arr = []';
	$m.__track_lines__[377] = 'binascii.py, line 377:\n    def hex_gen(n):';
	$m.__track_lines__[382] = 'binascii.py, line 382:\n    iterlist = []';
	$m.__track_lines__[383] = 'binascii.py, line 383:\n    while n:';
	$m.__track_lines__[384] = 'binascii.py, line 384:\n    iterlist.append(n % 0x10)';
	$m.__track_lines__[385] = 'binascii.py, line 385:\n    n = n / 0x10';
	$m.__track_lines__[386] = 'binascii.py, line 386:\n    return iterlist';
	$m.__track_lines__[388] = 'binascii.py, line 388:\n    for nibble in hex_gen(n):';
	$m.__track_lines__[389] = 'binascii.py, line 389:\n    arr = [hex_numbers[nibble]] + arr';
	$m.__track_lines__[390] = "binascii.py, line 390:\n    return sign + ''.join(arr)";
	$m.__track_lines__[392] = 'binascii.py, line 392:\n    def two_hex_digits(n):';
	$m.__track_lines__[393] = 'binascii.py, line 393:\n    return hex_numbers[n / 0x10] + hex_numbers[n % 0x10]';
	$m.__track_lines__[396] = 'binascii.py, line 396:\n    def strhex_to_int(s):';
	$m.__track_lines__[397] = 'binascii.py, line 397:\n    i = 0';
	$m.__track_lines__[398] = 'binascii.py, line 398:\n    for c in s:';
	$m.__track_lines__[399] = 'binascii.py, line 399:\n    i = i * 0x10 + hex_numbers.index(c)';
	$m.__track_lines__[400] = 'binascii.py, line 400:\n    return i';
	$m.__track_lines__[402] = 'binascii.py, line 402:\n    hqx_encoding = \'!"#$%&\\\'()*+,-012345689@ABCDEFGHIJKLMNPQRSTUVXYZ[`abcdefhijklmpqr\'';
	$m.__track_lines__[404] = 'binascii.py, line 404:\n    DONE = 0x7f';
	$m.__track_lines__[405] = 'binascii.py, line 405:\n    SKIP = 0x7e';
	$m.__track_lines__[406] = 'binascii.py, line 406:\n    FAIL = 0x7d';
	$m.__track_lines__[408] = 'binascii.py, line 408:\n    table_a2b_hqx = [';
	$m.__track_lines__[459] = 'binascii.py, line 459:\n    def a2b_hqx(s):';
	$m.__track_lines__[460] = 'binascii.py, line 460:\n    result = []';
	$m.__track_lines__[462] = 'binascii.py, line 462:\n    def quadruples_gen(s):';
	$m.__track_lines__[463] = 'binascii.py, line 463:\n    t = []';
	$m.__track_lines__[479] = 'binascii.py, line 479:\n    iterlist = []';
	$m.__track_lines__[480] = 'binascii.py, line 480:\n    for c in s:';
	$m.__track_lines__[481] = 'binascii.py, line 481:\n    res = table_a2b_hqx[ord(c)]';
	$m.__track_lines__[482] = 'binascii.py, line 482:\n    if res == SKIP:';
	$m.__track_lines__[483] = 'binascii.py, line 483:\n    continue';
	$m.__track_lines__[485] = "binascii.py, line 485:\n    raise Error('Illegal character')";
	$m.__track_lines__[487] = 'binascii.py, line 487:\n    iterlist.append(t)';
	$m.__track_lines__[488] = 'binascii.py, line 488:\n    return iterlist, True';
	$m.__track_lines__[490] = 'binascii.py, line 490:\n    t.append(res)';
	$m.__track_lines__[491] = 'binascii.py, line 491:\n    if len(t) == 4:';
	$m.__track_lines__[492] = 'binascii.py, line 492:\n    iterlist.append(t)';
	$m.__track_lines__[493] = 'binascii.py, line 493:\n    t = []';
	$m.__track_lines__[494] = 'binascii.py, line 494:\n    iterlist.append(t)';
	$m.__track_lines__[495] = 'binascii.py, line 495:\n    return iterlist, False';
	$m.__track_lines__[497] = 'binascii.py, line 497:\n    done = 0';
	$m.__track_lines__[498] = 'binascii.py, line 498:\n    try:';
	$m.__track_lines__[500] = 'binascii.py, line 500:\n    iterlist, done = quadruples_gen(s)';
	$m.__track_lines__[501] = 'binascii.py, line 501:\n    for snippet in iterlist:';
	$m.__track_lines__[502] = 'binascii.py, line 502:\n    length = len(snippet)';
	$m.__track_lines__[503] = 'binascii.py, line 503:\n    if length == 4:';
	$m.__track_lines__[504] = 'binascii.py, line 504:\n    result.append(chr(((snippet[0] & 0x3f) << 2) | (snippet[1] >> 4)))';
	$m.__track_lines__[505] = 'binascii.py, line 505:\n    result.append(chr(((snippet[1] & 0x0f) << 4) | (snippet[2] >> 2)))';
	$m.__track_lines__[506] = 'binascii.py, line 506:\n    result.append(chr(((snippet[2] & 0x03) << 6) | (snippet[3])))';
	$m.__track_lines__[508] = 'binascii.py, line 508:\n    result.append(chr(((snippet[0] & 0x3f) << 2) | (snippet[1] >> 4)))';
	$m.__track_lines__[509] = 'binascii.py, line 509:\n    result.append(chr(((snippet[1] & 0x0f) << 4) | (snippet[2] >> 2)))';
	$m.__track_lines__[511] = 'binascii.py, line 511:\n    result.append(chr(((snippet[0] & 0x3f) << 2) | (snippet[1] >> 4)))';
	$m.__track_lines__[513] = 'binascii.py, line 513:\n    done = 1';
	$m.__track_lines__[515] = 'binascii.py, line 515:\n    raise';
	$m.__track_lines__[516] = "binascii.py, line 516:\n    return (''.join(result), done)";
	$m.__track_lines__[518] = 'binascii.py, line 518:\n    def b2a_hqx(s):';
	$m.__track_lines__[519] = 'binascii.py, line 519:\n    result =[]';
	$m.__track_lines__[521] = 'binascii.py, line 521:\n    def triples_gen(s):';
	$m.__track_lines__[528] = 'binascii.py, line 528:\n    iterlist = []';
	$m.__track_lines__[529] = 'binascii.py, line 529:\n    while s:';
	$m.__track_lines__[530] = 'binascii.py, line 530:\n    try:';
	$m.__track_lines__[531] = 'binascii.py, line 531:\n    iterlist.append((ord(s[0]), ord(s[1]), ord(s[2])))';
	$m.__track_lines__[533] = 'binascii.py, line 533:\n    try:';
	$m.__track_lines__[534] = 'binascii.py, line 534:\n    iterlist.append((ord(s[0]), ord(s[1])))';
	$m.__track_lines__[536] = 'binascii.py, line 536:\n    iterlist.append((ord(s[0]), ))';
	$m.__track_lines__[537] = 'binascii.py, line 537:\n    s = s[3:]';
	$m.__track_lines__[538] = 'binascii.py, line 538:\n    return iterlist';
	$m.__track_lines__[540] = 'binascii.py, line 540:\n    for snippet in triples_gen(s):';
	$m.__track_lines__[541] = 'binascii.py, line 541:\n    length = len(snippet)';
	$m.__track_lines__[542] = 'binascii.py, line 542:\n    if length == 3:';
	$m.__track_lines__[544] = 'binascii.py, line 543:\n    result.append( ... hqx_encoding[(snippet[0] & 0xfc) >> 2])';
	$m.__track_lines__[545] = 'binascii.py, line 545:\n    result.append(hqx_encoding[';
	$m.__track_lines__[547] = 'binascii.py, line 547:\n    result.append(hqx_encoding[';
	$m.__track_lines__[549] = 'binascii.py, line 549:\n    result.append(hqx_encoding[snippet[2] & 0x3f])';
	$m.__track_lines__[552] = 'binascii.py, line 551:\n    result.append( ... hqx_encoding[(snippet[0] & 0xfc) >> 2])';
	$m.__track_lines__[553] = 'binascii.py, line 553:\n    result.append(hqx_encoding[';
	$m.__track_lines__[555] = 'binascii.py, line 555:\n    result.append(hqx_encoding[';
	$m.__track_lines__[559] = 'binascii.py, line 558:\n    result.append( ... hqx_encoding[(snippet[0] & 0xfc) >> 2])';
	$m.__track_lines__[560] = 'binascii.py, line 560:\n    result.append(hqx_encoding[';
	$m.__track_lines__[562] = "binascii.py, line 562:\n    return ''.join(result)";
	$m.__track_lines__[564] = 'binascii.py, line 564:\n    crctab_hqx = [';
	$m.__track_lines__[599] = 'binascii.py, line 599:\n    def crc_hqx(s, crc):';
	$m.__track_lines__[600] = 'binascii.py, line 600:\n    for c in s:';
	$m.__track_lines__[601] = 'binascii.py, line 601:\n    crc = ((crc << 8) & 0xff00) ^ crctab_hqx[((crc >> 8) & 0xff) ^ ord(c)]';
	$m.__track_lines__[603] = 'binascii.py, line 603:\n    return crc';
	$m.__track_lines__[605] = 'binascii.py, line 605:\n    def rlecode_hqx(s):';
	$m.__track_lines__[611] = 'binascii.py, line 611:\n    if not s:';
	$m.__track_lines__[612] = "binascii.py, line 612:\n    return ''";
	$m.__track_lines__[613] = 'binascii.py, line 613:\n    result = []';
	$m.__track_lines__[614] = 'binascii.py, line 614:\n    prev = s[0]';
	$m.__track_lines__[615] = 'binascii.py, line 615:\n    count = 1';
	$m.__track_lines__[620] = "binascii.py, line 620:\n    if s[-1] == '!':";
	$m.__track_lines__[621] = "binascii.py, line 621:\n    s = s[1:] + '?'";
	$m.__track_lines__[623] = "binascii.py, line 623:\n    s = s[1:] + '!'";
	$m.__track_lines__[625] = 'binascii.py, line 625:\n    for c in s:';
	$m.__track_lines__[626] = 'binascii.py, line 626:\n    if c == prev and count < 255:';
	$m.__track_lines__[627] = 'binascii.py, line 627:\n    count += 1';
	$m.__track_lines__[629] = 'binascii.py, line 629:\n    if count == 1:';
	$m.__track_lines__[630] = "binascii.py, line 630:\n    if prev != '\\x90':";
	$m.__track_lines__[631] = 'binascii.py, line 631:\n    result.append(prev)';
	$m.__track_lines__[633] = "binascii.py, line 633:\n    result.extend(['\\x90', '\\x00'])";
	$m.__track_lines__[635] = "binascii.py, line 635:\n    if prev != '\\x90':";
	$m.__track_lines__[636] = 'binascii.py, line 636:\n    result.extend([prev] * count)';
	$m.__track_lines__[638] = "binascii.py, line 638:\n    result.extend(['\\x90', '\\x00'] * count)";
	$m.__track_lines__[640] = "binascii.py, line 640:\n    if prev != '\\x90':";
	$m.__track_lines__[641] = "binascii.py, line 641:\n    result.extend([prev, '\\x90', chr(count)])";
	$m.__track_lines__[643] = "binascii.py, line 643:\n    result.extend(['\\x90', '\\x00', '\\x90', chr(count)])";
	$m.__track_lines__[644] = 'binascii.py, line 644:\n    count = 1';
	$m.__track_lines__[645] = 'binascii.py, line 645:\n    prev = c';
	$m.__track_lines__[647] = "binascii.py, line 647:\n    return ''.join(result)";
	$m.__track_lines__[649] = 'binascii.py, line 649:\n    def rledecode_hqx(s):';
	$m.__track_lines__[650] = "binascii.py, line 650:\n    s = s.split('\\x90')";
	$m.__track_lines__[651] = 'binascii.py, line 651:\n    result = [s[0]]';
	$m.__track_lines__[652] = 'binascii.py, line 652:\n    prev = s[0]';
	$m.__track_lines__[653] = 'binascii.py, line 653:\n    for snippet in s[1:]:';
	$m.__track_lines__[654] = 'binascii.py, line 654:\n    count = ord(snippet[0])';
	$m.__track_lines__[655] = 'binascii.py, line 655:\n    if count > 0:';
	$m.__track_lines__[656] = 'binascii.py, line 656:\n    result.append(prev[-1] * (count-1))';
	$m.__track_lines__[657] = 'binascii.py, line 657:\n    prev = snippet';
	$m.__track_lines__[659] = "binascii.py, line 659:\n    result. append('\\x90')";
	$m.__track_lines__[660] = "binascii.py, line 660:\n    prev = '\\x90'";
	$m.__track_lines__[661] = 'binascii.py, line 661:\n    result.append(snippet[1:])';
	$m.__track_lines__[663] = "binascii.py, line 663:\n    return ''.join(result)";
	$m.__track_lines__[665] = 'binascii.py, line 665:\n    crc_32_tab = [';
	$m.__track_lines__[720] = 'binascii.py, line 720:\n    def crc32(s, crc=0):';
	$m.__track_lines__[721] = 'binascii.py, line 721:\n    result = 0';
	$m.__track_lines__[722] = 'binascii.py, line 722:\n    crc = ~long(crc) & 0xffffffffL';
	$m.__track_lines__[723] = 'binascii.py, line 723:\n    for c in s:';
	$m.__track_lines__[724] = 'binascii.py, line 724:\n    crc = crc_32_tab[(crc ^ long(ord(c))) & 0xffL] ^ (crc >> 8)';
	$m.__track_lines__[727] = 'binascii.py, line 727:\n    result = crc ^ 0xffffffffL';
	$m.__track_lines__[729] = 'binascii.py, line 729:\n    if result > 2**31:';
	$m.__track_lines__[730] = 'binascii.py, line 730:\n    result = ((result + 2**31) % 2**32) - 2**31';
	$m.__track_lines__[732] = 'binascii.py, line 732:\n    return result';
	$m.__track_lines__[734] = 'binascii.py, line 734:\n    def b2a_hex(s):';
	$m.__track_lines__[735] = 'binascii.py, line 735:\n    result = []';
	$m.__track_lines__[736] = 'binascii.py, line 736:\n    for char in s:';
	$m.__track_lines__[737] = 'binascii.py, line 737:\n    c = (ord(char) >> 4) & 0xf';
	$m.__track_lines__[738] = 'binascii.py, line 738:\n    if c > 9:';
	$m.__track_lines__[739] = "binascii.py, line 739:\n    c = c + ord('a') - 10";
	$m.__track_lines__[741] = "binascii.py, line 741:\n    c = c + ord('0')";
	$m.__track_lines__[742] = 'binascii.py, line 742:\n    result.append(chr(c))';
	$m.__track_lines__[743] = 'binascii.py, line 743:\n    c = ord(char) & 0xf';
	$m.__track_lines__[744] = 'binascii.py, line 744:\n    if c > 9:';
	$m.__track_lines__[745] = "binascii.py, line 745:\n    c = c + ord('a') - 10";
	$m.__track_lines__[747] = "binascii.py, line 747:\n    c = c + ord('0')";
	$m.__track_lines__[748] = 'binascii.py, line 748:\n    result.append(chr(c))';
	$m.__track_lines__[749] = "binascii.py, line 749:\n    return ''.join(result)";
	$m.__track_lines__[751] = 'binascii.py, line 751:\n    hexlify = b2a_hex';
	$m.__track_lines__[753] = 'binascii.py, line 753:\n    table_hex = [';
	$m.__track_lines__[765] = 'binascii.py, line 765:\n    def a2b_hex(t):';
	$m.__track_lines__[766] = 'binascii.py, line 766:\n    result = []';
	$m.__track_lines__[768] = 'binascii.py, line 768:\n    def pairs_gen(s):';
	$m.__track_lines__[777] = 'binascii.py, line 777:\n    iterlist = []';
	$m.__track_lines__[778] = 'binascii.py, line 778:\n    while s:';
	$m.__track_lines__[779] = 'binascii.py, line 779:\n    try:';
	$m.__track_lines__[780] = 'binascii.py, line 780:\n    iterlist.append((table_hex[ord(s[0])], table_hex[ord(s[1])]))';
	$m.__track_lines__[782] = 'binascii.py, line 782:\n    if len(s):';
	$m.__track_lines__[783] = "binascii.py, line 783:\n    raise TypeError('Odd-length string')";
	$m.__track_lines__[784] = 'binascii.py, line 784:\n    return iterlist';
	$m.__track_lines__[785] = 'binascii.py, line 785:\n    s = s[2:]';
	$m.__track_lines__[786] = 'binascii.py, line 786:\n    return iterlist';
	$m.__track_lines__[788] = 'binascii.py, line 788:\n    for a, b in pairs_gen(t):';
	$m.__track_lines__[789] = 'binascii.py, line 789:\n    if a < 0 or b < 0:';
	$m.__track_lines__[790] = "binascii.py, line 790:\n    raise TypeError('Non-hexadecimal digit found')";
	$m.__track_lines__[791] = 'binascii.py, line 791:\n    result.append(chr((a << 4) + b))';
	$m.__track_lines__[792] = "binascii.py, line 792:\n    return ''.join(result)";
	$m.__track_lines__[795] = 'binascii.py, line 795:\n    unhexlify = a2b_hex';


	$pyjs['track']['module']='binascii';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=5;
	$m['Error'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'binascii';
		$pyjs['track']['lineno']=6;
		$pyjs['track']['lineno']=5;
		var $bases = new Array($p['Exception']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Error', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=8;
	$m['Done'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'binascii';
		$pyjs['track']['lineno']=9;
		$pyjs['track']['lineno']=8;
		var $bases = new Array($p['Exception']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Done', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=11;
	$m['Incomplete'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'binascii';
		$pyjs['track']['lineno']=12;
		$pyjs['track']['lineno']=11;
		var $bases = new Array($p['Exception']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Incomplete', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=14;
	$m['a2b_uu'] = function(s) {
		var trailingdata,$sub15,$sub16,quadruplets_gen,$add3,length,$pyjs_try_err,$mod1,result,$add4,$mod2,$sub2,$sub1,$mul2,$mul1;
		$pyjs['track']={'module':'binascii','lineno':14};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='binascii';
		$pyjs['track']['lineno']=14;
		$pyjs['track']['lineno']=15;
		if ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool'](!$p['bool'](s));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})()) {
			$pyjs['track']['lineno']=16;
			$pyjs['track']['lineno']=16;
			var $pyjs__ret = '';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
		$pyjs['track']['lineno']=18;
		length = (typeof ($mod1=$p['__op_sub']($sub1=(function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['ord'](s['__getitem__'](0));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})(),$sub2=32))==typeof ($mod2=64) && typeof $mod1=='number'?
			(($mod1=$mod1%$mod2)<0&&$mod2>0?$mod1+$mod2:$mod1):
			$p['op_mod']($mod1,$mod2));
		$pyjs['track']['lineno']=20;
		quadruplets_gen = function(s) {
			var $add2,$pyjs_try_err,iterlist,$add1;
			$pyjs['track']={'module':'binascii','lineno':20};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='binascii';
			$pyjs['track']['lineno']=20;
			$pyjs['track']['lineno']=29;
			iterlist = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			$pyjs['track']['lineno']=30;
			while ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](s);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})()) {
				$pyjs['track']['lineno']=31;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					try {
						$pyjs['in_try_except'] += 1;
						$pyjs['track']['lineno']=32;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return iterlist['append']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['tuple']([(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['ord'](s['__getitem__'](0));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['ord'](s['__getitem__'](1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['ord'](s['__getitem__'](2));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['ord'](s['__getitem__'](3));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
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
					$pyjs['track']['module']='binascii';
					if (($pyjs_try_err_name == $p['IndexError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
						$pyjs['track']['lineno']=34;
						s = $p['__op_add']($add1=s,$add2='   ');
						$pyjs['track']['lineno']=35;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return iterlist['append']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['tuple']([(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['ord'](s['__getitem__'](0));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['ord'](s['__getitem__'](1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['ord'](s['__getitem__'](2));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['ord'](s['__getitem__'](3));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
						$pyjs['track']['lineno']=36;
						$pyjs['track']['lineno']=36;
						var $pyjs__ret = iterlist;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['track']['lineno']=37;
				s = $p['__getslice'](s, 4, null);
			}
			$pyjs['track']['lineno']=38;
			$pyjs['track']['lineno']=38;
			var $pyjs__ret = iterlist;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		quadruplets_gen['__name__'] = 'quadruplets_gen';

		quadruplets_gen['__bind_type__'] = 0;
		quadruplets_gen['__args__'] = [null,null,['s']];
		$pyjs['track']['lineno']=40;
		var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
		try {
			try {
				$pyjs['in_try_except'] += 1;
				$pyjs['track']['lineno']=41;
				result = function(){
					var $collcomp1,$iter1_iter,$sub9,$sub8,$iter1_array,$sub3,$sub7,$sub6,$sub5,$sub4,A,C,B,$iter1_nextval,D,$sub13,$sub12,$sub11,$sub10,$sub14,$iter1_type,$pyjs__trackstack_size_2,$iter1_idx;
	$collcomp1 = $p['list']();
				$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
				$iter1_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return (function(){try{try{$pyjs['in_try_except'] += 1;
				return quadruplets_gen((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['__getslice'](s, 1, null)['rstrip']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					var $tupleassign1 = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['__ass_unpack']($iter1_nextval['$nextval'], 4, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
					A = $tupleassign1[0];
					B = $tupleassign1[1];
					C = $tupleassign1[2];
					D = $tupleassign1[3];
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $collcomp1['append']((function(){try{try{$pyjs['in_try_except'] += 1;
					return ''['join']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['list']([(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['chr']((($p['__op_sub']($sub3=A,$sub4=32))<<(2))|((($p['__op_sub']($sub5=B,$sub6=32))>>(4))&(3)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['chr'](((($p['__op_sub']($sub7=B,$sub8=32))&(15))<<(4))|((($p['__op_sub']($sub9=C,$sub10=32))>>(2))&(15)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['chr'](((($p['__op_sub']($sub11=C,$sub12=32))&(3))<<(6))|(($p['__op_sub']($sub13=D,$sub14=32))&(63)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='binascii';

	return $collcomp1;}();
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
			$pyjs['track']['module']='binascii';
			if (($pyjs_try_err_name == $p['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
				$pyjs['track']['lineno']=47;
				$pyjs['__active_exception_stack__'] = null;
				throw ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['Error']('Illegal char');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})());
			} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
		}
		$pyjs['track']['lineno']=48;
		result = (function(){try{try{$pyjs['in_try_except'] += 1;
		return ''['join'](result);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})();
		$pyjs['track']['lineno']=49;
		trailingdata = $p['__getslice'](result, length, null);
		$pyjs['track']['lineno']=50;
		if ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
		return trailingdata['strip']('\x00');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})()) {
			$pyjs['track']['lineno']=51;
			$pyjs['__active_exception_stack__'] = null;
			throw ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['Error']('Trailing garbage');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})());
		}
		$pyjs['track']['lineno']=52;
		result = $p['__getslice'](result, 0, length);
		$pyjs['track']['lineno']=53;
		if ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool'](($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['len'](result);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})(), length) == -1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})()) {
			$pyjs['track']['lineno']=54;
			result = $p['__op_add']($add3=result,$add4=(typeof ($mul1=$p['__op_sub']($sub15=length,$sub16=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len'](result);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})()))==typeof ($mul2='\x00') && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2)));
		}
		$pyjs['track']['lineno']=55;
		$pyjs['track']['lineno']=55;
		var $pyjs__ret = result;
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['a2b_uu']['__name__'] = 'a2b_uu';

	$m['a2b_uu']['__bind_type__'] = 0;
	$m['a2b_uu']['__args__'] = [null,null,['s']];
	$pyjs['track']['lineno']=58;
	$m['b2a_uu'] = function(s) {
		var $add20,$add15,$add16,$add17,result,length,triples_gen,$add18,$add19;
		$pyjs['track']={'module':'binascii','lineno':58};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='binascii';
		$pyjs['track']['lineno']=58;
		$pyjs['track']['lineno']=59;
		length = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['len'](s);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})();
		$pyjs['track']['lineno']=60;
		if ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool'](($p['cmp'](length, 45) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})()) {
			$pyjs['track']['lineno']=61;
			$pyjs['__active_exception_stack__'] = null;
			throw ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['Error']('At most 45 bytes at once');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})());
		}
		$pyjs['track']['lineno']=63;
		triples_gen = function(s) {
			var $pyjs_try_err,$add6,iterlist,$add5;
			$pyjs['track']={'module':'binascii','lineno':63};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='binascii';
			$pyjs['track']['lineno']=63;
			$pyjs['track']['lineno']=72;
			iterlist = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})();
			$pyjs['track']['lineno']=73;
			while ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](s);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})()) {
				$pyjs['track']['lineno']=74;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					try {
						$pyjs['in_try_except'] += 1;
						$pyjs['track']['lineno']=75;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return iterlist['append']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['tuple']([(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['ord'](s['__getitem__'](0));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['ord'](s['__getitem__'](1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['ord'](s['__getitem__'](2));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})();
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
					$pyjs['track']['module']='binascii';
					if (($pyjs_try_err_name == $p['IndexError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
						$pyjs['track']['lineno']=77;
						s = $p['__op_add']($add5=s,$add6='\x00\x00');
						$pyjs['track']['lineno']=78;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return iterlist['append']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['tuple']([(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['ord'](s['__getitem__'](0));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['ord'](s['__getitem__'](1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['ord'](s['__getitem__'](2));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})();
						$pyjs['track']['lineno']=79;
						$pyjs['track']['lineno']=79;
						var $pyjs__ret = iterlist;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['track']['lineno']=80;
				s = $p['__getslice'](s, 3, null);
			}
			$pyjs['track']['lineno']=81;
			$pyjs['track']['lineno']=81;
			var $pyjs__ret = iterlist;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		triples_gen['__name__'] = 'triples_gen';

		triples_gen['__bind_type__'] = 0;
		triples_gen['__args__'] = [null,null,['s']];
		$pyjs['track']['lineno']=83;
		result = function(){
			var A,C,$iter2_nextval,$iter2_type,$iter2_iter,$add13,$collcomp2,$add14,$iter2_idx,B,$add10,$add7,$add12,$pyjs__trackstack_size_1,$add8,$add9,$iter2_array,$add11;
	$collcomp2 = $p['list']();
		$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
		$iter2_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
		return (function(){try{try{$pyjs['in_try_except'] += 1;
		return triples_gen(s);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})();
		$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
		while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
			var $tupleassign2 = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['__ass_unpack']($iter2_nextval['$nextval'], 3, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})();
			A = $tupleassign2[0];
			B = $tupleassign2[1];
			C = $tupleassign2[2];
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $collcomp2['append']((function(){try{try{$pyjs['in_try_except'] += 1;
			return ''['join']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['chr']($p['__op_add']($add7=32,$add8=((A)>>(2))&(63)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['chr']($p['__op_add']($add9=32,$add10=(((A)<<(4))|(((B)>>(4))&(15)))&(63)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['chr']($p['__op_add']($add11=32,$add12=(((B)<<(2))|(((C)>>(6))&(3)))&(63)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['chr']($p['__op_add']($add13=32,$add14=(C)&(63)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})();
		}
		if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
			$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
			$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
		}
		$pyjs['track']['module']='binascii';

	return $collcomp2;}();
		$pyjs['track']['lineno']=89;
		$pyjs['track']['lineno']=89;
		var $pyjs__ret = $p['__op_add']($add19=$p['__op_add']($add17=(function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['chr']($p['__op_add']($add15=(function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['ord'](' ');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})(),$add16=(length)&(63)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})(),$add18=(function(){try{try{$pyjs['in_try_except'] += 1;
		return ''['join'](result);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})()),$add20='\n');
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['b2a_uu']['__name__'] = 'b2a_uu';

	$m['b2a_uu']['__bind_type__'] = 0;
	$m['b2a_uu']['__args__'] = [null,null,['s']];
	$pyjs['track']['lineno']=92;
	$m['table_a2b_base64'] = (function(){try{try{$pyjs['in_try_except'] += 1;
	return $p['dict']([['A', 0], ['B', 1], ['C', 2], ['D', 3], ['E', 4], ['F', 5], ['G', 6], ['H', 7], ['I', 8], ['J', 9], ['K', 10], ['L', 11], ['M', 12], ['N', 13], ['O', 14], ['P', 15], ['Q', 16], ['R', 17], ['S', 18], ['T', 19], ['U', 20], ['V', 21], ['W', 22], ['X', 23], ['Y', 24], ['Z', 25], ['a', 26], ['b', 27], ['c', 28], ['d', 29], ['e', 30], ['f', 31], ['g', 32], ['h', 33], ['i', 34], ['j', 35], ['k', 36], ['l', 37], ['m', 38], ['n', 39], ['o', 40], ['p', 41], ['q', 42], ['r', 43], ['s', 44], ['t', 45], ['u', 46], ['v', 47], ['w', 48], ['x', 49], ['y', 50], ['z', 51], ['0', 52], ['1', 53], ['2', 54], ['3', 55], ['4', 56], ['5', 57], ['6', 58], ['7', 59], ['8', 60], ['9', 61], ['+', 62], ['/', 63], ['=', 0]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})();
	$pyjs['track']['lineno']=161;
	$m['a2b_base64'] = function(s) {
		var $sub20,leftchar,$sub18,$iter4_type,$or1,$iter4_iter,res,$add23,$add25,$add24,$add26,quad_pos,next_c,$or5,$or4,$sub19,$or6,next_valid_char,$or3,$or2,$and1,$and2,leftbits,$sub17,c,i,$iter4_nextval,$iter4_idx,$pyjs__trackstack_size_1,$iter4_array;
		$pyjs['track']={'module':'binascii','lineno':161};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='binascii';
		$pyjs['track']['lineno']=161;
		$pyjs['track']['lineno']=162;
		if ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['isinstance'](s, $p['str']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})()) {
			$pyjs['track']['lineno']=165;
			$pyjs['__active_exception_stack__'] = null;
			throw ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['TypeError']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('expected string or unicode, got %r', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple']([s]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})());
		}
		$pyjs['track']['lineno']=166;
		s = (function(){try{try{$pyjs['in_try_except'] += 1;
		return s['rstrip']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})();
		$pyjs['track']['lineno']=170;
		next_valid_char = function(s, pos) {
			var c,$iter3_idx,i,$iter3_nextval,$iter3_type,$add21,$iter3_iter,$iter3_array,$pyjs__trackstack_size_1,$add22;
			$pyjs['track']={'module':'binascii','lineno':170};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='binascii';
			$pyjs['track']['lineno']=170;
			$pyjs['track']['lineno']=171;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter3_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['range']($p['__op_add']($add21=pos,$add22=1), (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len'](s);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})();
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				i = $iter3_nextval['$nextval'];
				$pyjs['track']['lineno']=172;
				c = s['__getitem__'](i);
				$pyjs['track']['lineno']=173;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['cmp'](c, '\x7f') == -1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})()) {
					$pyjs['track']['lineno']=179;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['table_a2b_base64']['has_key'](c);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})()) {
						$pyjs['track']['lineno']=180;
						$pyjs['track']['lineno']=180;
						var $pyjs__ret = c;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					}
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='binascii';
			$pyjs['track']['lineno']=181;
			$pyjs['track']['lineno']=181;
			var $pyjs__ret = null;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		next_valid_char['__name__'] = 'next_valid_char';

		next_valid_char['__bind_type__'] = 0;
		next_valid_char['__args__'] = [null,null,['s'],['pos']];
		$pyjs['track']['lineno']=183;
		quad_pos = 0;
		$pyjs['track']['lineno']=184;
		leftbits = 0;
		$pyjs['track']['lineno']=185;
		leftchar = 0;
		$pyjs['track']['lineno']=186;
		res = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})();
		$pyjs['track']['lineno']=187;
		$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
		$iter4_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
		return (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['enumerate'](s);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})();
		$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
		while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
			var $tupleassign3 = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['__ass_unpack']($iter4_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})();
			i = $tupleassign3[0];
			c = $tupleassign3[1];
			$pyjs['track']['lineno']=188;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($or1=($p['cmp'](c, '\x7f') == 1))?$or1:($p['bool']($or2=$p['op_eq'](c, '\n'))?$or2:($p['bool']($or3=$p['op_eq'](c, '\r'))?$or3:$p['op_eq'](c, ' ')))));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})()) {
				$pyjs['track']['lineno']=189;
				continue;
			}
			$pyjs['track']['lineno']=190;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](c, '='));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})()) {
				$pyjs['track']['lineno']=191;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($or5=($p['cmp'](quad_pos, 2) == -1))?$or5:($p['bool']($and1=$p['op_eq'](quad_pos, 2))?!$p['op_eq']((function(){try{try{$pyjs['in_try_except'] += 1;
				return next_valid_char(s, i);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})(), '='):$and1)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})()) {
					$pyjs['track']['lineno']=192;
					continue;
				}
				else {
					$pyjs['track']['lineno']=194;
					leftbits = 0;
					$pyjs['track']['lineno']=195;
					break;
				}
			}
			$pyjs['track']['lineno']=196;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['table_a2b_base64']['has_key'](c);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})()) {
				$pyjs['track']['lineno']=197;
				continue;
			}
			$pyjs['track']['lineno']=198;
			next_c = $m['table_a2b_base64']['__getitem__'](c);
			$pyjs['track']['lineno']=199;
			quad_pos = ($p['__op_add']($add23=quad_pos,$add24=1))&(3);
			$pyjs['track']['lineno']=200;
			leftchar = ((leftchar)<<(6))|(next_c);
			$pyjs['track']['lineno']=201;
			leftbits = $p['__op_add']($add25=leftbits,$add26=6);
			$pyjs['track']['lineno']=202;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](((($p['cmp'](leftbits, 8))|1) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})()) {
				$pyjs['track']['lineno']=203;
				leftbits = $p['__op_sub']($sub17=leftbits,$sub18=8);
				$pyjs['track']['lineno']=204;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return res['append'](((leftchar)>>(leftbits))&(255));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})();
				$pyjs['track']['lineno']=205;
				leftchar &= $p['__op_sub']($sub19=(1)<<(leftbits),$sub20=1);
			}
		}
		if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
			$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
			$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
		}
		$pyjs['track']['module']='binascii';
		$pyjs['track']['lineno']=206;
		if ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool'](!$p['op_eq'](leftbits, 0));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_88_err){if (!$p['isinstance']($pyjs_dbg_88_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_88_err);}throw $pyjs_dbg_88_err;
}})()) {
			$pyjs['track']['lineno']=207;
			$pyjs['__active_exception_stack__'] = null;
			throw ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['Error']('Incorrect padding');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_89_err){if (!$p['isinstance']($pyjs_dbg_89_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_89_err);}throw $pyjs_dbg_89_err;
}})());
		}
		$pyjs['track']['lineno']=209;
		$pyjs['track']['lineno']=209;
		var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
		return ''['join'](function(){
			var $iter5_nextval,i,$iter5_idx,$pyjs__trackstack_size_1,$collcomp3,$iter5_iter,$iter5_array,$iter5_type;
	$collcomp3 = $p['list']();
		$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
		$iter5_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
		return res;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_90_err){if (!$p['isinstance']($pyjs_dbg_90_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_90_err);}throw $pyjs_dbg_90_err;
}})();
		$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
		while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
			i = $iter5_nextval['$nextval'];
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $collcomp3['append']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['chr'](i);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_91_err){if (!$p['isinstance']($pyjs_dbg_91_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_91_err);}throw $pyjs_dbg_91_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_92_err){if (!$p['isinstance']($pyjs_dbg_92_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_92_err);}throw $pyjs_dbg_92_err;
}})();
		}
		if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
			$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
			$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
		}
		$pyjs['track']['module']='binascii';

	return $collcomp3;}());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_93_err){if (!$p['isinstance']($pyjs_dbg_93_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_93_err);}throw $pyjs_dbg_93_err;
}})();
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['a2b_base64']['__name__'] = 'a2b_base64';

	$m['a2b_base64']['__bind_type__'] = 0;
	$m['a2b_base64']['__args__'] = [null,null,['s']];
	$pyjs['track']['lineno']=211;
	$m['table_b2a_base64'] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	$pyjs['track']['lineno']=214;
	$m['b2a_base64'] = function(s) {
		var $sub22,$sub23,$sub21,$sub24,$add42,$mod4,result,$mod3,$add29,$add41,$add40,snippet,$$final,final_length,$add39,a,$add38,b,$add32,$add33,$add30,$add31,$add36,$add37,$add34,$add35,length,triples_gen;
		$pyjs['track']={'module':'binascii','lineno':214};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='binascii';
		$pyjs['track']['lineno']=214;
		$pyjs['track']['lineno']=215;
		length = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['len'](s);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_94_err){if (!$p['isinstance']($pyjs_dbg_94_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_94_err);}throw $pyjs_dbg_94_err;
}})();
		$pyjs['track']['lineno']=216;
		final_length = (typeof ($mod3=length)==typeof ($mod4=3) && typeof $mod3=='number'?
			(($mod3=$mod3%$mod4)<0&&$mod4>0?$mod3+$mod4:$mod3):
			$p['op_mod']($mod3,$mod4));
		$pyjs['track']['lineno']=218;
		triples_gen = function(s) {
			var $add28,$pyjs_try_err,$add27,iterlist;
			$pyjs['track']={'module':'binascii','lineno':218};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='binascii';
			$pyjs['track']['lineno']=218;
			$pyjs['track']['lineno']=227;
			iterlist = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_95_err){if (!$p['isinstance']($pyjs_dbg_95_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_95_err);}throw $pyjs_dbg_95_err;
}})();
			$pyjs['track']['lineno']=228;
			while ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](s);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_96_err){if (!$p['isinstance']($pyjs_dbg_96_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_96_err);}throw $pyjs_dbg_96_err;
}})()) {
				$pyjs['track']['lineno']=229;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					try {
						$pyjs['in_try_except'] += 1;
						$pyjs['track']['lineno']=230;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return iterlist['append']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['tuple']([(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['ord'](s['__getitem__'](0));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_97_err){if (!$p['isinstance']($pyjs_dbg_97_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_97_err);}throw $pyjs_dbg_97_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['ord'](s['__getitem__'](1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_98_err){if (!$p['isinstance']($pyjs_dbg_98_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_98_err);}throw $pyjs_dbg_98_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['ord'](s['__getitem__'](2));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_99_err){if (!$p['isinstance']($pyjs_dbg_99_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_99_err);}throw $pyjs_dbg_99_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_100_err){if (!$p['isinstance']($pyjs_dbg_100_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_100_err);}throw $pyjs_dbg_100_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_101_err){if (!$p['isinstance']($pyjs_dbg_101_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_101_err);}throw $pyjs_dbg_101_err;
}})();
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
					$pyjs['track']['module']='binascii';
					if (($pyjs_try_err_name == $p['IndexError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
						$pyjs['track']['lineno']=232;
						s = $p['__op_add']($add27=s,$add28='\x00\x00');
						$pyjs['track']['lineno']=233;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return iterlist['append']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['tuple']([(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['ord'](s['__getitem__'](0));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_102_err){if (!$p['isinstance']($pyjs_dbg_102_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_102_err);}throw $pyjs_dbg_102_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['ord'](s['__getitem__'](1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_103_err){if (!$p['isinstance']($pyjs_dbg_103_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_103_err);}throw $pyjs_dbg_103_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['ord'](s['__getitem__'](2));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_104_err){if (!$p['isinstance']($pyjs_dbg_104_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_104_err);}throw $pyjs_dbg_104_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_105_err){if (!$p['isinstance']($pyjs_dbg_105_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_105_err);}throw $pyjs_dbg_105_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_106_err){if (!$p['isinstance']($pyjs_dbg_106_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_106_err);}throw $pyjs_dbg_106_err;
}})();
						$pyjs['track']['lineno']=234;
						$pyjs['track']['lineno']=234;
						var $pyjs__ret = iterlist;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['track']['lineno']=235;
				s = $p['__getslice'](s, 3, null);
			}
			$pyjs['track']['lineno']=236;
			$pyjs['track']['lineno']=236;
			var $pyjs__ret = iterlist;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		triples_gen['__name__'] = 'triples_gen';

		triples_gen['__bind_type__'] = 0;
		triples_gen['__args__'] = [null,null,['s']];
		$pyjs['track']['lineno']=238;
		a = (function(){try{try{$pyjs['in_try_except'] += 1;
		return triples_gen($p['__getslice'](s, 0, $p['__op_sub']($sub21=length,$sub22=final_length)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_107_err){if (!$p['isinstance']($pyjs_dbg_107_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_107_err);}throw $pyjs_dbg_107_err;
}})();
		$pyjs['track']['lineno']=240;
		result = function(){
			var A,C,B,$iter6_idx,$iter6_type,$collcomp4,$iter6_array,$pyjs__trackstack_size_1,$iter6_iter,$iter6_nextval;
	$collcomp4 = $p['list']();
		$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
		$iter6_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
		return a;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_109_err){if (!$p['isinstance']($pyjs_dbg_109_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_109_err);}throw $pyjs_dbg_109_err;
}})();
		$iter6_nextval=$p['__iter_prepare']($iter6_iter,false);
		while (typeof($p['__wrapped_next']($iter6_nextval)['$nextval']) != 'undefined') {
			var $tupleassign4 = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['__ass_unpack']($iter6_nextval['$nextval'], 3, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_108_err){if (!$p['isinstance']($pyjs_dbg_108_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_108_err);}throw $pyjs_dbg_108_err;
}})();
			A = $tupleassign4[0];
			B = $tupleassign4[1];
			C = $tupleassign4[2];
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $collcomp4['append']((function(){try{try{$pyjs['in_try_except'] += 1;
			return ''['join']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([$m['table_b2a_base64']['__getitem__'](((A)>>(2))&(63)), $m['table_b2a_base64']['__getitem__']((((A)<<(4))|(((B)>>(4))&(15)))&(63)), $m['table_b2a_base64']['__getitem__']((((B)<<(2))|(((C)>>(6))&(3)))&(63)), $m['table_b2a_base64']['__getitem__']((C)&(63))]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_110_err){if (!$p['isinstance']($pyjs_dbg_110_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_110_err);}throw $pyjs_dbg_110_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_111_err){if (!$p['isinstance']($pyjs_dbg_111_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_111_err);}throw $pyjs_dbg_111_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_112_err){if (!$p['isinstance']($pyjs_dbg_112_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_112_err);}throw $pyjs_dbg_112_err;
}})();
		}
		if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
			$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
			$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
		}
		$pyjs['track']['module']='binascii';

	return $collcomp4;}();
		$pyjs['track']['lineno']=247;
		$$final = $p['__getslice'](s, $p['__op_sub']($sub23=length,$sub24=final_length), null);
		$pyjs['track']['lineno']=248;
		if ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool']($p['op_eq'](final_length, 0));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_113_err){if (!$p['isinstance']($pyjs_dbg_113_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_113_err);}throw $pyjs_dbg_113_err;
}})()) {
			$pyjs['track']['lineno']=249;
			snippet = '';
		}
		else if ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool']($p['op_eq'](final_length, 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_114_err){if (!$p['isinstance']($pyjs_dbg_114_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_114_err);}throw $pyjs_dbg_114_err;
}})()) {
			$pyjs['track']['lineno']=251;
			a = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['ord']($$final['__getitem__'](0));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_115_err){if (!$p['isinstance']($pyjs_dbg_115_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_115_err);}throw $pyjs_dbg_115_err;
}})();
			$pyjs['track']['lineno']=252;
			snippet = $p['__op_add']($add31=$p['__op_add']($add29=$m['table_b2a_base64']['__getitem__'](((a)>>(2))&(63)),$add30=$m['table_b2a_base64']['__getitem__'](((a)<<(4))&(63))),$add32='==');
		}
		else {
			$pyjs['track']['lineno']=255;
			a = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['ord']($$final['__getitem__'](0));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_116_err){if (!$p['isinstance']($pyjs_dbg_116_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_116_err);}throw $pyjs_dbg_116_err;
}})();
			$pyjs['track']['lineno']=256;
			b = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['ord']($$final['__getitem__'](1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_117_err){if (!$p['isinstance']($pyjs_dbg_117_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_117_err);}throw $pyjs_dbg_117_err;
}})();
			$pyjs['track']['lineno']=257;
			snippet = $p['__op_add']($add37=$p['__op_add']($add35=$p['__op_add']($add33=$m['table_b2a_base64']['__getitem__'](((a)>>(2))&(63)),$add34=$m['table_b2a_base64']['__getitem__']((((a)<<(4))|(((b)>>(4))&(15)))&(63))),$add36=$m['table_b2a_base64']['__getitem__'](((b)<<(2))&(63))),$add38='=');
		}
		$pyjs['track']['lineno']=260;
		$pyjs['track']['lineno']=260;
		var $pyjs__ret = $p['__op_add']($add41=$p['__op_add']($add39=(function(){try{try{$pyjs['in_try_except'] += 1;
		return ''['join'](result);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_118_err){if (!$p['isinstance']($pyjs_dbg_118_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_118_err);}throw $pyjs_dbg_118_err;
}})(),$add40=snippet),$add42='\n');
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['b2a_base64']['__name__'] = 'b2a_base64';

	$m['b2a_base64']['__bind_type__'] = 0;
	$m['b2a_base64']['__args__'] = [null,null,['s']];
	$pyjs['track']['lineno']=262;
	$m['a2b_qp'] = function(s, header) {
		if (typeof header == 'undefined') header=arguments['callee']['__args__'][3][1];
		var ch,inp,$add60,$add49,$add48,$add47,$add46,$add45,$add44,$add43,$and8,$or7,odata,$and3,$and4,$or8,$and6,$and5,$and7,$add50,$add51,$add52,$add53,$add54,$add55,$add56,$add57,$add58,$add59;
		$pyjs['track']={'module':'binascii','lineno':262};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='binascii';
		$pyjs['track']['lineno']=262;
		$pyjs['track']['lineno']=263;
		inp = 0;
		$pyjs['track']['lineno']=264;
		odata = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_119_err){if (!$p['isinstance']($pyjs_dbg_119_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_119_err);}throw $pyjs_dbg_119_err;
}})();
		$pyjs['track']['lineno']=265;
		while ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool'](($p['cmp'](inp, (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['len'](s);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_120_err){if (!$p['isinstance']($pyjs_dbg_120_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_120_err);}throw $pyjs_dbg_120_err;
}})()) == -1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_121_err){if (!$p['isinstance']($pyjs_dbg_121_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_121_err);}throw $pyjs_dbg_121_err;
}})()) {
			$pyjs['track']['lineno']=266;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](s['__getitem__'](inp), '='));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_122_err){if (!$p['isinstance']($pyjs_dbg_122_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_122_err);}throw $pyjs_dbg_122_err;
}})()) {
				$pyjs['track']['lineno']=267;
				inp = $p['__op_add']($add43=inp,$add44=1);
				$pyjs['track']['lineno']=268;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](((($p['cmp'](inp, (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['len'](s);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_123_err){if (!$p['isinstance']($pyjs_dbg_123_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_123_err);}throw $pyjs_dbg_123_err;
}})()))|1) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_124_err){if (!$p['isinstance']($pyjs_dbg_124_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_124_err);}throw $pyjs_dbg_124_err;
}})()) {
					$pyjs['track']['lineno']=269;
					break;
				}
				$pyjs['track']['lineno']=271;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($or7=$p['op_eq'](s['__getitem__'](inp), '\n'))?$or7:$p['op_eq'](s['__getitem__'](inp), '\r')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_125_err){if (!$p['isinstance']($pyjs_dbg_125_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_125_err);}throw $pyjs_dbg_125_err;
}})()) {
					$pyjs['track']['lineno']=272;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](!$p['op_eq'](s['__getitem__'](inp), '\n'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_126_err){if (!$p['isinstance']($pyjs_dbg_126_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_126_err);}throw $pyjs_dbg_126_err;
}})()) {
						$pyjs['track']['lineno']=273;
						while ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](($p['bool']($and3=($p['cmp'](inp, (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['len'](s);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_127_err){if (!$p['isinstance']($pyjs_dbg_127_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_127_err);}throw $pyjs_dbg_127_err;
}})()) == -1))?!$p['op_eq'](s['__getitem__'](inp), '\n'):$and3));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_128_err){if (!$p['isinstance']($pyjs_dbg_128_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_128_err);}throw $pyjs_dbg_128_err;
}})()) {
							$pyjs['track']['lineno']=274;
							inp = $p['__op_add']($add45=inp,$add46=1);
						}
					}
					$pyjs['track']['lineno']=275;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['cmp'](inp, (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len'](s);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_129_err){if (!$p['isinstance']($pyjs_dbg_129_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_129_err);}throw $pyjs_dbg_129_err;
}})()) == -1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_130_err){if (!$p['isinstance']($pyjs_dbg_130_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_130_err);}throw $pyjs_dbg_130_err;
}})()) {
						$pyjs['track']['lineno']=276;
						inp = $p['__op_add']($add47=inp,$add48=1);
					}
				}
				else if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq'](s['__getitem__'](inp), '='));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_131_err){if (!$p['isinstance']($pyjs_dbg_131_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_131_err);}throw $pyjs_dbg_131_err;
}})()) {
					$pyjs['track']['lineno']=279;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return odata['append']('=');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_132_err){if (!$p['isinstance']($pyjs_dbg_132_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_132_err);}throw $pyjs_dbg_132_err;
}})();
					$pyjs['track']['lineno']=280;
					inp = $p['__op_add']($add49=inp,$add50=1);
				}
				else if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($and5=(typeof hex_numbers == "undefined"?$m['hex_numbers']:hex_numbers)['__contains__'](s['__getitem__'](inp)))?(typeof hex_numbers == "undefined"?$m['hex_numbers']:hex_numbers)['__contains__'](s['__getitem__']($p['__op_add']($add51=inp,$add52=1))):$and5));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_133_err){if (!$p['isinstance']($pyjs_dbg_133_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_133_err);}throw $pyjs_dbg_133_err;
}})()) {
					$pyjs['track']['lineno']=282;
					ch = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['chr']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['float_int']($p['__getslice'](s, inp, $p['__op_add']($add53=inp,$add54=2)), 16);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_134_err){if (!$p['isinstance']($pyjs_dbg_134_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_134_err);}throw $pyjs_dbg_134_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_135_err){if (!$p['isinstance']($pyjs_dbg_135_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_135_err);}throw $pyjs_dbg_135_err;
}})();
					$pyjs['track']['lineno']=283;
					inp = $p['__op_add']($add55=inp,$add56=2);
					$pyjs['track']['lineno']=284;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return odata['append'](ch);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_136_err){if (!$p['isinstance']($pyjs_dbg_136_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_136_err);}throw $pyjs_dbg_136_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=286;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return odata['append']('=');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_137_err){if (!$p['isinstance']($pyjs_dbg_137_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_137_err);}throw $pyjs_dbg_137_err;
}})();
				}
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and7=header)?$p['op_eq'](s['__getitem__'](inp), '_'):$and7));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_138_err){if (!$p['isinstance']($pyjs_dbg_138_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_138_err);}throw $pyjs_dbg_138_err;
}})()) {
				$pyjs['track']['lineno']=288;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return odata['append'](' ');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_139_err){if (!$p['isinstance']($pyjs_dbg_139_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_139_err);}throw $pyjs_dbg_139_err;
}})();
				$pyjs['track']['lineno']=289;
				inp = $p['__op_add']($add57=inp,$add58=1);
			}
			else {
				$pyjs['track']['lineno']=291;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return odata['append'](s['__getitem__'](inp));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_140_err){if (!$p['isinstance']($pyjs_dbg_140_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_140_err);}throw $pyjs_dbg_140_err;
}})();
				$pyjs['track']['lineno']=292;
				inp = $p['__op_add']($add59=inp,$add60=1);
			}
		}
		$pyjs['track']['lineno']=293;
		$pyjs['track']['lineno']=293;
		var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
		return ''['join'](odata);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_141_err){if (!$p['isinstance']($pyjs_dbg_141_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_141_err);}throw $pyjs_dbg_141_err;
}})();
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['a2b_qp']['__name__'] = 'a2b_qp';

	$m['a2b_qp']['__bind_type__'] = 0;
	$m['a2b_qp']['__args__'] = [null,null,['s'],['header', false]];
	$pyjs['track']['lineno']=295;
	$m['b2a_qp'] = function(data, quotetabs, istext, header) {
		if (typeof quotetabs == 'undefined') quotetabs=arguments['callee']['__args__'][3][1];
		if (typeof istext == 'undefined') istext=arguments['callee']['__args__'][4][1];
		if (typeof header == 'undefined') header=arguments['callee']['__args__'][5][1];
		var $add89,$add88,$sub26,$sub25,$add83,$add82,$add81,$add80,$add87,$add86,$add85,$add84,lf,$or28,$or24,$or25,$or26,$or27,$or20,$or21,$or22,$or23,$and9,$and38,$and39,$and34,$and35,$and36,$and37,$and30,$and31,$and32,$and33,$add76,$add77,$add74,$add75,$add72,$add73,$add70,$add71,$add78,$add79,$and29,$and28,$and23,$and22,$and21,$and20,$and27,$and26,$and25,$and24,$add65,$add64,$add67,$add66,$add61,$add63,$add62,$add69,$add68,linelen,$add90,crlf,c,$and11,ch,odata,$or15,$or14,$or17,$or16,$or11,$or10,$or13,$or12,$or19,$or18,inp,MAXLINESIZE,$or9,$and12,$and13,$and10,$and16,$and17,$and14,$and15,$and18,$and19;
		$pyjs['track']={'module':'binascii','lineno':295};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='binascii';
		$pyjs['track']['lineno']=295;
		$pyjs['track']['lineno']=302;
		MAXLINESIZE = 76;
		$pyjs['track']['lineno']=305;
		lf = (function(){try{try{$pyjs['in_try_except'] += 1;
		return data['find']('\n');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_142_err){if (!$p['isinstance']($pyjs_dbg_142_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_142_err);}throw $pyjs_dbg_142_err;
}})();
		$pyjs['track']['lineno']=306;
		crlf = ($p['bool']($and9=($p['cmp'](lf, 0) == 1))?$p['op_eq'](data['__getitem__']($p['__op_sub']($sub25=lf,$sub26=1)), '\r'):$and9);
		$pyjs['track']['lineno']=308;
		inp = 0;
		$pyjs['track']['lineno']=309;
		linelen = 0;
		$pyjs['track']['lineno']=310;
		odata = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_143_err){if (!$p['isinstance']($pyjs_dbg_143_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_143_err);}throw $pyjs_dbg_143_err;
}})();
		$pyjs['track']['lineno']=311;
		while ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool'](($p['cmp'](inp, (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['len'](data);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_144_err){if (!$p['isinstance']($pyjs_dbg_144_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_144_err);}throw $pyjs_dbg_144_err;
}})()) == -1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_145_err){if (!$p['isinstance']($pyjs_dbg_145_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_145_err);}throw $pyjs_dbg_145_err;
}})()) {
			$pyjs['track']['lineno']=312;
			c = data['__getitem__'](inp);
			$pyjs['track']['lineno']=313;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($or16=($p['cmp'](c, '~') == 1))?$or16:($p['bool']($or17=$p['op_eq'](c, '='))?$or17:($p['bool']($or18=($p['bool']($and11=header)?$p['op_eq'](c, '_'):$and11))?$or18:($p['bool']($or19=($p['bool']($and13=$p['op_eq'](c, '.'))?($p['bool']($and14=$p['op_eq'](linelen, 0))?($p['bool']($or9=$p['op_eq'](inp, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len'](data);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_146_err){if (!$p['isinstance']($pyjs_dbg_146_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_146_err);}throw $pyjs_dbg_146_err;
}})()))?$or9:($p['bool']($or10=$p['op_eq'](data['__getitem__']($p['__op_add']($add61=inp,$add62=1)), '\n'))?$or10:$p['op_eq'](data['__getitem__']($p['__op_add']($add63=inp,$add64=1)), '\r'))):$and14):$and13))?$or19:($p['bool']($or20=($p['bool']($and16=!$p['bool'](istext))?($p['bool']($or12=$p['op_eq'](c, '\r'))?$or12:$p['op_eq'](c, '\n')):$and16))?$or20:($p['bool']($or21=($p['bool']($and18=($p['bool']($or14=$p['op_eq'](c, '\t'))?$or14:$p['op_eq'](c, ' ')))?$p['op_eq']($p['__op_add']($add65=inp,$add66=1), (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len'](data);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_147_err){if (!$p['isinstance']($pyjs_dbg_147_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_147_err);}throw $pyjs_dbg_147_err;
}})()):$and18))?$or21:($p['bool']($and20=($p['cmp'](c, ' ') < 1))?($p['bool']($and21=!$p['op_eq'](c, '\r'))?($p['bool']($and22=!$p['op_eq'](c, '\n'))?($p['bool']($or23=quotetabs)?$or23:($p['bool']($and24=!$p['bool'](quotetabs))?($p['bool']($and26=!$p['op_eq'](c, '\t'))?!$p['op_eq'](c, ' '):$and26):$and24)):$and22):$and21):$and20))))))));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_148_err){if (!$p['isinstance']($pyjs_dbg_148_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_148_err);}throw $pyjs_dbg_148_err;
}})()) {
				$pyjs['track']['lineno']=323;
				linelen = $p['__op_add']($add67=linelen,$add68=3);
				$pyjs['track']['lineno']=324;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](((($p['cmp'](linelen, MAXLINESIZE))|1) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_149_err){if (!$p['isinstance']($pyjs_dbg_149_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_149_err);}throw $pyjs_dbg_149_err;
}})()) {
					$pyjs['track']['lineno']=325;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return odata['append']('=');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_150_err){if (!$p['isinstance']($pyjs_dbg_150_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_150_err);}throw $pyjs_dbg_150_err;
}})();
					$pyjs['track']['lineno']=326;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](crlf);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_151_err){if (!$p['isinstance']($pyjs_dbg_151_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_151_err);}throw $pyjs_dbg_151_err;
}})()) {
						$pyjs['track']['lineno']=326;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return odata['append']('\r');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_152_err){if (!$p['isinstance']($pyjs_dbg_152_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_152_err);}throw $pyjs_dbg_152_err;
}})();
					}
					$pyjs['track']['lineno']=327;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return odata['append']('\n');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_153_err){if (!$p['isinstance']($pyjs_dbg_153_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_153_err);}throw $pyjs_dbg_153_err;
}})();
					$pyjs['track']['lineno']=328;
					linelen = 3;
				}
				$pyjs['track']['lineno']=329;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return odata['append']($p['__op_add']($add69='=',$add70=(function(){try{try{$pyjs['in_try_except'] += 1;
				return (typeof two_hex_digits == "undefined"?$m['two_hex_digits']:two_hex_digits)((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['ord'](c);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_154_err){if (!$p['isinstance']($pyjs_dbg_154_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_154_err);}throw $pyjs_dbg_154_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_155_err){if (!$p['isinstance']($pyjs_dbg_155_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_155_err);}throw $pyjs_dbg_155_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_156_err){if (!$p['isinstance']($pyjs_dbg_156_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_156_err);}throw $pyjs_dbg_156_err;
}})();
				$pyjs['track']['lineno']=330;
				inp = $p['__op_add']($add71=inp,$add72=1);
			}
			else {
				$pyjs['track']['lineno']=332;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($and28=istext)?($p['bool']($or25=$p['op_eq'](c, '\n'))?$or25:($p['bool']($and30=($p['cmp']($p['__op_add']($add73=inp,$add74=1), (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['len'](data);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_157_err){if (!$p['isinstance']($pyjs_dbg_157_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_157_err);}throw $pyjs_dbg_157_err;
}})()) == -1))?($p['bool']($and31=$p['op_eq'](c, '\r'))?$p['op_eq'](data['__getitem__']($p['__op_add']($add75=inp,$add76=1)), '\n'):$and31):$and30)):$and28));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_158_err){if (!$p['isinstance']($pyjs_dbg_158_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_158_err);}throw $pyjs_dbg_158_err;
}})()) {
					$pyjs['track']['lineno']=335;
					linelen = 0;
					$pyjs['track']['lineno']=337;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['bool']($and33=($p['cmp']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len'](odata);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_159_err){if (!$p['isinstance']($pyjs_dbg_159_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_159_err);}throw $pyjs_dbg_159_err;
}})(), 0) == 1))?($p['bool']($or27=$p['op_eq'](odata['__getitem__']((typeof ($usub1=1)=='number'?
						-$usub1:
						$p['op_usub']($usub1))), ' '))?$or27:$p['op_eq'](odata['__getitem__']((typeof ($usub2=1)=='number'?
						-$usub2:
						$p['op_usub']($usub2))), '\t')):$and33));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_160_err){if (!$p['isinstance']($pyjs_dbg_160_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_160_err);}throw $pyjs_dbg_160_err;
}})()) {
						$pyjs['track']['lineno']=339;
						ch = (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['ord'](odata['__getitem__']((typeof ($usub3=1)=='number'?
							-$usub3:
							$p['op_usub']($usub3))));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_161_err){if (!$p['isinstance']($pyjs_dbg_161_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_161_err);}throw $pyjs_dbg_161_err;
}})();
						$pyjs['track']['lineno']=340;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return odata['__setitem__']((typeof ($usub4=1)=='number'?
							-$usub4:
							$p['op_usub']($usub4)), '=');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_162_err){if (!$p['isinstance']($pyjs_dbg_162_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_162_err);}throw $pyjs_dbg_162_err;
}})();
						$pyjs['track']['lineno']=341;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return odata['append']((function(){try{try{$pyjs['in_try_except'] += 1;
						return (typeof two_hex_digits == "undefined"?$m['two_hex_digits']:two_hex_digits)(ch);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_163_err){if (!$p['isinstance']($pyjs_dbg_163_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_163_err);}throw $pyjs_dbg_163_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_164_err){if (!$p['isinstance']($pyjs_dbg_164_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_164_err);}throw $pyjs_dbg_164_err;
}})();
					}
					$pyjs['track']['lineno']=343;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](crlf);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_165_err){if (!$p['isinstance']($pyjs_dbg_165_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_165_err);}throw $pyjs_dbg_165_err;
}})()) {
						$pyjs['track']['lineno']=343;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return odata['append']('\r');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_166_err){if (!$p['isinstance']($pyjs_dbg_166_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_166_err);}throw $pyjs_dbg_166_err;
}})();
					}
					$pyjs['track']['lineno']=344;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return odata['append']('\n');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_167_err){if (!$p['isinstance']($pyjs_dbg_167_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_167_err);}throw $pyjs_dbg_167_err;
}})();
					$pyjs['track']['lineno']=345;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_eq'](c, '\r'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_168_err){if (!$p['isinstance']($pyjs_dbg_168_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_168_err);}throw $pyjs_dbg_168_err;
}})()) {
						$pyjs['track']['lineno']=346;
						inp = $p['__op_add']($add77=inp,$add78=2);
					}
					else {
						$pyjs['track']['lineno']=348;
						inp = $p['__op_add']($add79=inp,$add80=1);
					}
				}
				else {
					$pyjs['track']['lineno']=350;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['bool']($and35=($p['cmp']($p['__op_add']($add81=inp,$add82=1), (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len'](data);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_169_err){if (!$p['isinstance']($pyjs_dbg_169_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_169_err);}throw $pyjs_dbg_169_err;
}})()) == -1))?($p['bool']($and36=!$p['op_eq'](data['__getitem__']($p['__op_add']($add83=inp,$add84=1)), '\n'))?((($p['cmp']($p['__op_add']($add85=linelen,$add86=1), MAXLINESIZE))|1) == 1):$and36):$and35));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_170_err){if (!$p['isinstance']($pyjs_dbg_170_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_170_err);}throw $pyjs_dbg_170_err;
}})()) {
						$pyjs['track']['lineno']=353;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return odata['append']('=');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_171_err){if (!$p['isinstance']($pyjs_dbg_171_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_171_err);}throw $pyjs_dbg_171_err;
}})();
						$pyjs['track']['lineno']=354;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool'](crlf);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_172_err){if (!$p['isinstance']($pyjs_dbg_172_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_172_err);}throw $pyjs_dbg_172_err;
}})()) {
							$pyjs['track']['lineno']=354;
							(function(){try{try{$pyjs['in_try_except'] += 1;
							return odata['append']('\r');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_173_err){if (!$p['isinstance']($pyjs_dbg_173_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_173_err);}throw $pyjs_dbg_173_err;
}})();
						}
						$pyjs['track']['lineno']=355;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return odata['append']('\n');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_174_err){if (!$p['isinstance']($pyjs_dbg_174_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_174_err);}throw $pyjs_dbg_174_err;
}})();
						$pyjs['track']['lineno']=356;
						linelen = 0;
					}
					$pyjs['track']['lineno']=358;
					linelen = $p['__op_add']($add87=linelen,$add88=1);
					$pyjs['track']['lineno']=359;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['bool']($and38=header)?$p['op_eq'](c, ' '):$and38));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_175_err){if (!$p['isinstance']($pyjs_dbg_175_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_175_err);}throw $pyjs_dbg_175_err;
}})()) {
						$pyjs['track']['lineno']=360;
						c = '_';
					}
					$pyjs['track']['lineno']=361;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return odata['append'](c);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_176_err){if (!$p['isinstance']($pyjs_dbg_176_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_176_err);}throw $pyjs_dbg_176_err;
}})();
					$pyjs['track']['lineno']=362;
					inp = $p['__op_add']($add89=inp,$add90=1);
				}
			}
		}
		$pyjs['track']['lineno']=363;
		$pyjs['track']['lineno']=363;
		var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
		return ''['join'](odata);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_177_err){if (!$p['isinstance']($pyjs_dbg_177_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_177_err);}throw $pyjs_dbg_177_err;
}})();
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['b2a_qp']['__name__'] = 'b2a_qp';

	$m['b2a_qp']['__bind_type__'] = 0;
	$m['b2a_qp']['__args__'] = [null,null,['data'],['quotetabs', false],['istext', true],['header', false]];
	$pyjs['track']['lineno']=365;
	$m['hex_numbers'] = '0123456789ABCDEF';
	$pyjs['track']['lineno']=366;
	$m['hex'] = function(n) {
		var arr,$iter7_type,$iter7_nextval,$add94,$iter7_iter,hex_gen,nibble,$add91,$add92,sign,$add93,$iter7_idx,$pyjs__trackstack_size_1,$iter7_array;
		$pyjs['track']={'module':'binascii','lineno':366};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='binascii';
		$pyjs['track']['lineno']=366;
		$pyjs['track']['lineno']=367;
		if ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool']($p['op_eq'](n, 0));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_178_err){if (!$p['isinstance']($pyjs_dbg_178_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_178_err);}throw $pyjs_dbg_178_err;
}})()) {
			$pyjs['track']['lineno']=368;
			$pyjs['track']['lineno']=368;
			var $pyjs__ret = '0';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
		$pyjs['track']['lineno']=370;
		if ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool'](($p['cmp'](n, 0) == -1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_179_err){if (!$p['isinstance']($pyjs_dbg_179_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_179_err);}throw $pyjs_dbg_179_err;
}})()) {
			$pyjs['track']['lineno']=371;
			n = (typeof ($usub5=n)=='number'?
				-$usub5:
				$p['op_usub']($usub5));
			$pyjs['track']['lineno']=372;
			sign = '-';
		}
		else {
			$pyjs['track']['lineno']=374;
			sign = '';
		}
		$pyjs['track']['lineno']=375;
		arr = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_180_err){if (!$p['isinstance']($pyjs_dbg_180_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_180_err);}throw $pyjs_dbg_180_err;
}})();
		$pyjs['track']['lineno']=377;
		hex_gen = function(n) {
			var $mod5,$mod6,iterlist,$div2,$div1;
			$pyjs['track']={'module':'binascii','lineno':377};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='binascii';
			$pyjs['track']['lineno']=377;
			$pyjs['track']['lineno']=382;
			iterlist = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_181_err){if (!$p['isinstance']($pyjs_dbg_181_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_181_err);}throw $pyjs_dbg_181_err;
}})();
			$pyjs['track']['lineno']=383;
			while ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](n);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_182_err){if (!$p['isinstance']($pyjs_dbg_182_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_182_err);}throw $pyjs_dbg_182_err;
}})()) {
				$pyjs['track']['lineno']=384;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return iterlist['append']((typeof ($mod5=n)==typeof ($mod6=16) && typeof $mod5=='number'?
					(($mod5=$mod5%$mod6)<0&&$mod6>0?$mod5+$mod6:$mod5):
					$p['op_mod']($mod5,$mod6)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_183_err){if (!$p['isinstance']($pyjs_dbg_183_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_183_err);}throw $pyjs_dbg_183_err;
}})();
				$pyjs['track']['lineno']=385;
				n = (typeof ($div1=n)==typeof ($div2=16) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					$p['op_div']($div1,$div2));
			}
			$pyjs['track']['lineno']=386;
			$pyjs['track']['lineno']=386;
			var $pyjs__ret = iterlist;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		hex_gen['__name__'] = 'hex_gen';

		hex_gen['__bind_type__'] = 0;
		hex_gen['__args__'] = [null,null,['n']];
		$pyjs['track']['lineno']=388;
		$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
		$iter7_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
		return (function(){try{try{$pyjs['in_try_except'] += 1;
		return hex_gen(n);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_184_err){if (!$p['isinstance']($pyjs_dbg_184_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_184_err);}throw $pyjs_dbg_184_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_185_err){if (!$p['isinstance']($pyjs_dbg_185_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_185_err);}throw $pyjs_dbg_185_err;
}})();
		$iter7_nextval=$p['__iter_prepare']($iter7_iter,false);
		while (typeof($p['__wrapped_next']($iter7_nextval)['$nextval']) != 'undefined') {
			nibble = $iter7_nextval['$nextval'];
			$pyjs['track']['lineno']=389;
			arr = $p['__op_add']($add91=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([$m['hex_numbers']['__getitem__'](nibble)]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_186_err){if (!$p['isinstance']($pyjs_dbg_186_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_186_err);}throw $pyjs_dbg_186_err;
}})(),$add92=arr);
		}
		if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
			$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
			$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
		}
		$pyjs['track']['module']='binascii';
		$pyjs['track']['lineno']=390;
		$pyjs['track']['lineno']=390;
		var $pyjs__ret = $p['__op_add']($add93=sign,$add94=(function(){try{try{$pyjs['in_try_except'] += 1;
		return ''['join'](arr);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_187_err){if (!$p['isinstance']($pyjs_dbg_187_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_187_err);}throw $pyjs_dbg_187_err;
}})());
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['hex']['__name__'] = 'hex';

	$m['hex']['__bind_type__'] = 0;
	$m['hex']['__args__'] = [null,null,['n']];
	$pyjs['track']['lineno']=392;
	$m['two_hex_digits'] = function(n) {
		var $add95,$add96,$mod7,$div3,$mod8,$div4;
		$pyjs['track']={'module':'binascii','lineno':392};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='binascii';
		$pyjs['track']['lineno']=392;
		$pyjs['track']['lineno']=393;
		$pyjs['track']['lineno']=393;
		var $pyjs__ret = $p['__op_add']($add95=$m['hex_numbers']['__getitem__']((typeof ($div3=n)==typeof ($div4=16) && typeof $div3=='number' && $div4 !== 0?
			$div3/$div4:
			$p['op_div']($div3,$div4))),$add96=$m['hex_numbers']['__getitem__']((typeof ($mod7=n)==typeof ($mod8=16) && typeof $mod7=='number'?
			(($mod7=$mod7%$mod8)<0&&$mod8>0?$mod7+$mod8:$mod7):
			$p['op_mod']($mod7,$mod8))));
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['two_hex_digits']['__name__'] = 'two_hex_digits';

	$m['two_hex_digits']['__bind_type__'] = 0;
	$m['two_hex_digits']['__args__'] = [null,null,['n']];
	$pyjs['track']['lineno']=396;
	$m['strhex_to_int'] = function(s) {
		var c,$iter8_idx,i,$iter8_type,$add97,$iter8_array,$iter8_iter,$iter8_nextval,$pyjs__trackstack_size_1,$add98,$mul4,$mul3;
		$pyjs['track']={'module':'binascii','lineno':396};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='binascii';
		$pyjs['track']['lineno']=396;
		$pyjs['track']['lineno']=397;
		i = 0;
		$pyjs['track']['lineno']=398;
		$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
		$iter8_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
		return s;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_188_err){if (!$p['isinstance']($pyjs_dbg_188_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_188_err);}throw $pyjs_dbg_188_err;
}})();
		$iter8_nextval=$p['__iter_prepare']($iter8_iter,false);
		while (typeof($p['__wrapped_next']($iter8_nextval)['$nextval']) != 'undefined') {
			c = $iter8_nextval['$nextval'];
			$pyjs['track']['lineno']=399;
			i = $p['__op_add']($add97=(typeof ($mul3=i)==typeof ($mul4=16) && typeof $mul3=='number'?
				$mul3*$mul4:
				$p['op_mul']($mul3,$mul4)),$add98=(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['hex_numbers']['index'](c);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_189_err){if (!$p['isinstance']($pyjs_dbg_189_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_189_err);}throw $pyjs_dbg_189_err;
}})());
		}
		if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
			$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
			$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
		}
		$pyjs['track']['module']='binascii';
		$pyjs['track']['lineno']=400;
		$pyjs['track']['lineno']=400;
		var $pyjs__ret = i;
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['strhex_to_int']['__name__'] = 'strhex_to_int';

	$m['strhex_to_int']['__bind_type__'] = 0;
	$m['strhex_to_int']['__args__'] = [null,null,['s']];
	$pyjs['track']['lineno']=402;
	$m['hqx_encoding'] = '!"#$%&\'()*+,-012345689@ABCDEFGHIJKLMNPQRSTUVXYZ[`abcdefhijklmpqr';
	$pyjs['track']['lineno']=404;
	$m['DONE'] = 127;
	$pyjs['track']['lineno']=405;
	$m['SKIP'] = 126;
	$pyjs['track']['lineno']=406;
	$m['FAIL'] = 125;
	$pyjs['track']['lineno']=408;
	$m['table_a2b_hqx'] = (function(){try{try{$pyjs['in_try_except'] += 1;
	return $p['list']([$m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['SKIP'], $m['FAIL'], $m['FAIL'], $m['SKIP'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, $m['FAIL'], $m['FAIL'], 13, 14, 15, 16, 17, 18, 19, $m['FAIL'], 20, 21, $m['DONE'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, $m['FAIL'], 37, 38, 39, 40, 41, 42, 43, $m['FAIL'], 44, 45, 46, 47, $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], 48, 49, 50, 51, 52, 53, 54, $m['FAIL'], 55, 56, 57, 58, 59, 60, $m['FAIL'], $m['FAIL'], 61, 62, 63, $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL'], $m['FAIL']]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_190_err){if (!$p['isinstance']($pyjs_dbg_190_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_190_err);}throw $pyjs_dbg_190_err;
}})();
	$pyjs['track']['lineno']=459;
	$m['a2b_hqx'] = function(s) {
		var $iter10_nextval,$iter10_idx,length,$iter10_array,quadruples_gen,snippet,$pyjs_try_err,done,result,iterlist,$iter10_type,$pyjs__trackstack_size_2,$iter10_iter;
		$pyjs['track']={'module':'binascii','lineno':459};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='binascii';
		$pyjs['track']['lineno']=459;
		$pyjs['track']['lineno']=460;
		result = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_191_err){if (!$p['isinstance']($pyjs_dbg_191_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_191_err);}throw $pyjs_dbg_191_err;
}})();
		$pyjs['track']['lineno']=462;
		quadruples_gen = function(s) {
			var c,$iter9_iter,res,$iter9_nextval,$iter9_idx,$iter9_array,t,iterlist,$pyjs__trackstack_size_1,$iter9_type;
			$pyjs['track']={'module':'binascii','lineno':462};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='binascii';
			$pyjs['track']['lineno']=462;
			$pyjs['track']['lineno']=463;
			t = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_192_err){if (!$p['isinstance']($pyjs_dbg_192_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_192_err);}throw $pyjs_dbg_192_err;
}})();
			$pyjs['track']['lineno']=479;
			iterlist = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_193_err){if (!$p['isinstance']($pyjs_dbg_193_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_193_err);}throw $pyjs_dbg_193_err;
}})();
			$pyjs['track']['lineno']=480;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter9_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return s;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_194_err){if (!$p['isinstance']($pyjs_dbg_194_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_194_err);}throw $pyjs_dbg_194_err;
}})();
			$iter9_nextval=$p['__iter_prepare']($iter9_iter,false);
			while (typeof($p['__wrapped_next']($iter9_nextval)['$nextval']) != 'undefined') {
				c = $iter9_nextval['$nextval'];
				$pyjs['track']['lineno']=481;
				res = $m['table_a2b_hqx']['__getitem__']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['ord'](c);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_195_err){if (!$p['isinstance']($pyjs_dbg_195_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_195_err);}throw $pyjs_dbg_195_err;
}})());
				$pyjs['track']['lineno']=482;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq'](res, $m['SKIP']));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_196_err){if (!$p['isinstance']($pyjs_dbg_196_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_196_err);}throw $pyjs_dbg_196_err;
}})()) {
					$pyjs['track']['lineno']=483;
					continue;
				}
				else if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq'](res, $m['FAIL']));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_197_err){if (!$p['isinstance']($pyjs_dbg_197_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_197_err);}throw $pyjs_dbg_197_err;
}})()) {
					$pyjs['track']['lineno']=485;
					$pyjs['__active_exception_stack__'] = null;
					throw ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['Error']('Illegal character');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_198_err){if (!$p['isinstance']($pyjs_dbg_198_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_198_err);}throw $pyjs_dbg_198_err;
}})());
				}
				else if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq'](res, $m['DONE']));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_199_err){if (!$p['isinstance']($pyjs_dbg_199_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_199_err);}throw $pyjs_dbg_199_err;
}})()) {
					$pyjs['track']['lineno']=487;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return iterlist['append'](t);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_200_err){if (!$p['isinstance']($pyjs_dbg_200_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_200_err);}throw $pyjs_dbg_200_err;
}})();
					$pyjs['track']['lineno']=488;
					$pyjs['track']['lineno']=488;
					var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['tuple']([iterlist, true]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_201_err){if (!$p['isinstance']($pyjs_dbg_201_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_201_err);}throw $pyjs_dbg_201_err;
}})();
					$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
					return $pyjs__ret;
				}
				else {
					$pyjs['track']['lineno']=490;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return t['append'](res);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_202_err){if (!$p['isinstance']($pyjs_dbg_202_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_202_err);}throw $pyjs_dbg_202_err;
}})();
				}
				$pyjs['track']['lineno']=491;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['len'](t);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_203_err){if (!$p['isinstance']($pyjs_dbg_203_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_203_err);}throw $pyjs_dbg_203_err;
}})(), 4));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_204_err){if (!$p['isinstance']($pyjs_dbg_204_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_204_err);}throw $pyjs_dbg_204_err;
}})()) {
					$pyjs['track']['lineno']=492;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return iterlist['append'](t);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_205_err){if (!$p['isinstance']($pyjs_dbg_205_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_205_err);}throw $pyjs_dbg_205_err;
}})();
					$pyjs['track']['lineno']=493;
					t = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_206_err){if (!$p['isinstance']($pyjs_dbg_206_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_206_err);}throw $pyjs_dbg_206_err;
}})();
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='binascii';
			$pyjs['track']['lineno']=494;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return iterlist['append'](t);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_207_err){if (!$p['isinstance']($pyjs_dbg_207_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_207_err);}throw $pyjs_dbg_207_err;
}})();
			$pyjs['track']['lineno']=495;
			$pyjs['track']['lineno']=495;
			var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple']([iterlist, false]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_208_err){if (!$p['isinstance']($pyjs_dbg_208_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_208_err);}throw $pyjs_dbg_208_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		quadruples_gen['__name__'] = 'quadruples_gen';

		quadruples_gen['__bind_type__'] = 0;
		quadruples_gen['__args__'] = [null,null,['s']];
		$pyjs['track']['lineno']=497;
		done = 0;
		$pyjs['track']['lineno']=498;
		var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
		try {
			try {
				$pyjs['in_try_except'] += 1;
				$pyjs['track']['lineno']=500;
				var $tupleassign5 = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['__ass_unpack']((function(){try{try{$pyjs['in_try_except'] += 1;
				return quadruples_gen(s);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_209_err){if (!$p['isinstance']($pyjs_dbg_209_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_209_err);}throw $pyjs_dbg_209_err;
}})(), 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_210_err){if (!$p['isinstance']($pyjs_dbg_210_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_210_err);}throw $pyjs_dbg_210_err;
}})();
				iterlist = $tupleassign5[0];
				done = $tupleassign5[1];
				$pyjs['track']['lineno']=501;
				$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
				$iter10_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return iterlist;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_211_err){if (!$p['isinstance']($pyjs_dbg_211_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_211_err);}throw $pyjs_dbg_211_err;
}})();
				$iter10_nextval=$p['__iter_prepare']($iter10_iter,false);
				while (typeof($p['__wrapped_next']($iter10_nextval)['$nextval']) != 'undefined') {
					snippet = $iter10_nextval['$nextval'];
					$pyjs['track']['lineno']=502;
					length = (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['len'](snippet);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_212_err){if (!$p['isinstance']($pyjs_dbg_212_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_212_err);}throw $pyjs_dbg_212_err;
}})();
					$pyjs['track']['lineno']=503;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_eq'](length, 4));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_213_err){if (!$p['isinstance']($pyjs_dbg_213_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_213_err);}throw $pyjs_dbg_213_err;
}})()) {
						$pyjs['track']['lineno']=504;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return result['append']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['chr']((((snippet['__getitem__'](0))&(63))<<(2))|((snippet['__getitem__'](1))>>(4)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_214_err){if (!$p['isinstance']($pyjs_dbg_214_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_214_err);}throw $pyjs_dbg_214_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_215_err){if (!$p['isinstance']($pyjs_dbg_215_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_215_err);}throw $pyjs_dbg_215_err;
}})();
						$pyjs['track']['lineno']=505;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return result['append']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['chr']((((snippet['__getitem__'](1))&(15))<<(4))|((snippet['__getitem__'](2))>>(2)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_216_err){if (!$p['isinstance']($pyjs_dbg_216_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_216_err);}throw $pyjs_dbg_216_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_217_err){if (!$p['isinstance']($pyjs_dbg_217_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_217_err);}throw $pyjs_dbg_217_err;
}})();
						$pyjs['track']['lineno']=506;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return result['append']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['chr']((((snippet['__getitem__'](2))&(3))<<(6))|(snippet['__getitem__'](3)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_218_err){if (!$p['isinstance']($pyjs_dbg_218_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_218_err);}throw $pyjs_dbg_218_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_219_err){if (!$p['isinstance']($pyjs_dbg_219_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_219_err);}throw $pyjs_dbg_219_err;
}})();
					}
					else if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_eq'](length, 3));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_220_err){if (!$p['isinstance']($pyjs_dbg_220_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_220_err);}throw $pyjs_dbg_220_err;
}})()) {
						$pyjs['track']['lineno']=508;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return result['append']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['chr']((((snippet['__getitem__'](0))&(63))<<(2))|((snippet['__getitem__'](1))>>(4)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_221_err){if (!$p['isinstance']($pyjs_dbg_221_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_221_err);}throw $pyjs_dbg_221_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_222_err){if (!$p['isinstance']($pyjs_dbg_222_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_222_err);}throw $pyjs_dbg_222_err;
}})();
						$pyjs['track']['lineno']=509;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return result['append']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['chr']((((snippet['__getitem__'](1))&(15))<<(4))|((snippet['__getitem__'](2))>>(2)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_223_err){if (!$p['isinstance']($pyjs_dbg_223_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_223_err);}throw $pyjs_dbg_223_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_224_err){if (!$p['isinstance']($pyjs_dbg_224_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_224_err);}throw $pyjs_dbg_224_err;
}})();
					}
					else if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['op_eq'](length, 2));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_225_err){if (!$p['isinstance']($pyjs_dbg_225_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_225_err);}throw $pyjs_dbg_225_err;
}})()) {
						$pyjs['track']['lineno']=511;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return result['append']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['chr']((((snippet['__getitem__'](0))&(63))<<(2))|((snippet['__getitem__'](1))>>(4)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_226_err){if (!$p['isinstance']($pyjs_dbg_226_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_226_err);}throw $pyjs_dbg_226_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_227_err){if (!$p['isinstance']($pyjs_dbg_227_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_227_err);}throw $pyjs_dbg_227_err;
}})();
					}
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='binascii';
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
			$pyjs['track']['module']='binascii';
			if (($pyjs_try_err_name == $m['Done']['__name__'])||$p['_isinstance']($pyjs_try_err,$m['Done'])) {
				$pyjs['track']['lineno']=513;
				done = 1;
			} else if (($pyjs_try_err_name == $m['Error']['__name__'])||$p['_isinstance']($pyjs_try_err,$m['Error'])) {
				$pyjs['track']['lineno']=515;
				$pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__'];
				$pyjs['__last_exception_stack__'] = null;
				throw ($pyjs['__last_exception__']?
					$pyjs['__last_exception__']['error']:
					$p['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
			} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
		}
		$pyjs['track']['lineno']=516;
		$pyjs['track']['lineno']=516;
		var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['tuple']([(function(){try{try{$pyjs['in_try_except'] += 1;
		return ''['join'](result);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_228_err){if (!$p['isinstance']($pyjs_dbg_228_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_228_err);}throw $pyjs_dbg_228_err;
}})(), done]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_229_err){if (!$p['isinstance']($pyjs_dbg_229_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_229_err);}throw $pyjs_dbg_229_err;
}})();
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['a2b_hqx']['__name__'] = 'a2b_hqx';

	$m['a2b_hqx']['__bind_type__'] = 0;
	$m['a2b_hqx']['__args__'] = [null,null,['s']];
	$pyjs['track']['lineno']=518;
	$m['b2a_hqx'] = function(s) {
		var $iter11_idx,$iter11_iter,$iter11_type,length,snippet,result,$iter11_array,$iter11_nextval,triples_gen,$pyjs__trackstack_size_1;
		$pyjs['track']={'module':'binascii','lineno':518};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='binascii';
		$pyjs['track']['lineno']=518;
		$pyjs['track']['lineno']=519;
		result = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_230_err){if (!$p['isinstance']($pyjs_dbg_230_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_230_err);}throw $pyjs_dbg_230_err;
}})();
		$pyjs['track']['lineno']=521;
		triples_gen = function(s) {
			var $pyjs_try_err,iterlist;
			$pyjs['track']={'module':'binascii','lineno':521};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='binascii';
			$pyjs['track']['lineno']=521;
			$pyjs['track']['lineno']=528;
			iterlist = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_231_err){if (!$p['isinstance']($pyjs_dbg_231_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_231_err);}throw $pyjs_dbg_231_err;
}})();
			$pyjs['track']['lineno']=529;
			while ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](s);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_232_err){if (!$p['isinstance']($pyjs_dbg_232_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_232_err);}throw $pyjs_dbg_232_err;
}})()) {
				$pyjs['track']['lineno']=530;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					try {
						$pyjs['in_try_except'] += 1;
						$pyjs['track']['lineno']=531;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return iterlist['append']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['tuple']([(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['ord'](s['__getitem__'](0));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_233_err){if (!$p['isinstance']($pyjs_dbg_233_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_233_err);}throw $pyjs_dbg_233_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['ord'](s['__getitem__'](1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_234_err){if (!$p['isinstance']($pyjs_dbg_234_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_234_err);}throw $pyjs_dbg_234_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['ord'](s['__getitem__'](2));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_235_err){if (!$p['isinstance']($pyjs_dbg_235_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_235_err);}throw $pyjs_dbg_235_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_236_err){if (!$p['isinstance']($pyjs_dbg_236_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_236_err);}throw $pyjs_dbg_236_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_237_err){if (!$p['isinstance']($pyjs_dbg_237_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_237_err);}throw $pyjs_dbg_237_err;
}})();
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
					$pyjs['track']['module']='binascii';
					if (($pyjs_try_err_name == $p['IndexError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
						$pyjs['track']['lineno']=533;
						var $pyjs__trackstack_size_2 = $pyjs['trackstack']['length'];
						try {
							try {
								$pyjs['in_try_except'] += 1;
								$pyjs['track']['lineno']=534;
								(function(){try{try{$pyjs['in_try_except'] += 1;
								return iterlist['append']((function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['tuple']([(function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['ord'](s['__getitem__'](0));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_238_err){if (!$p['isinstance']($pyjs_dbg_238_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_238_err);}throw $pyjs_dbg_238_err;
}})(), (function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['ord'](s['__getitem__'](1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_239_err){if (!$p['isinstance']($pyjs_dbg_239_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_239_err);}throw $pyjs_dbg_239_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_240_err){if (!$p['isinstance']($pyjs_dbg_240_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_240_err);}throw $pyjs_dbg_240_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_241_err){if (!$p['isinstance']($pyjs_dbg_241_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_241_err);}throw $pyjs_dbg_241_err;
}})();
							} finally { $pyjs['in_try_except'] -= 1; }
						} catch($pyjs_try_err) {
							$pyjs['__last_exception_stack__'] = sys['save_exception_stack']($pyjs__trackstack_size_2 - 1);
							$pyjs['__active_exception_stack__'] = null;
							var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
							$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
							if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
								$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
								$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
							}
							$pyjs['track']['module']='binascii';
							if (($pyjs_try_err_name == $p['IndexError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
								$pyjs['track']['lineno']=536;
								(function(){try{try{$pyjs['in_try_except'] += 1;
								return iterlist['append']((function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['tuple']([(function(){try{try{$pyjs['in_try_except'] += 1;
								return $p['ord'](s['__getitem__'](0));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_242_err){if (!$p['isinstance']($pyjs_dbg_242_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_242_err);}throw $pyjs_dbg_242_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_243_err){if (!$p['isinstance']($pyjs_dbg_243_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_243_err);}throw $pyjs_dbg_243_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_244_err){if (!$p['isinstance']($pyjs_dbg_244_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_244_err);}throw $pyjs_dbg_244_err;
}})();
							} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
						}
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['track']['lineno']=537;
				s = $p['__getslice'](s, 3, null);
			}
			$pyjs['track']['lineno']=538;
			$pyjs['track']['lineno']=538;
			var $pyjs__ret = iterlist;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		triples_gen['__name__'] = 'triples_gen';

		triples_gen['__bind_type__'] = 0;
		triples_gen['__args__'] = [null,null,['s']];
		$pyjs['track']['lineno']=540;
		$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
		$iter11_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
		return (function(){try{try{$pyjs['in_try_except'] += 1;
		return triples_gen(s);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_245_err){if (!$p['isinstance']($pyjs_dbg_245_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_245_err);}throw $pyjs_dbg_245_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_246_err){if (!$p['isinstance']($pyjs_dbg_246_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_246_err);}throw $pyjs_dbg_246_err;
}})();
		$iter11_nextval=$p['__iter_prepare']($iter11_iter,false);
		while (typeof($p['__wrapped_next']($iter11_nextval)['$nextval']) != 'undefined') {
			snippet = $iter11_nextval['$nextval'];
			$pyjs['track']['lineno']=541;
			length = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['len'](snippet);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_247_err){if (!$p['isinstance']($pyjs_dbg_247_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_247_err);}throw $pyjs_dbg_247_err;
}})();
			$pyjs['track']['lineno']=542;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](length, 3));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_248_err){if (!$p['isinstance']($pyjs_dbg_248_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_248_err);}throw $pyjs_dbg_248_err;
}})()) {
				$pyjs['track']['lineno']=544;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return result['append']($m['hqx_encoding']['__getitem__'](((snippet['__getitem__'](0))&(252))>>(2)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_249_err){if (!$p['isinstance']($pyjs_dbg_249_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_249_err);}throw $pyjs_dbg_249_err;
}})();
				$pyjs['track']['lineno']=545;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return result['append']($m['hqx_encoding']['__getitem__']((((snippet['__getitem__'](0))&(3))<<(4))|(((snippet['__getitem__'](1))&(240))>>(4))));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_250_err){if (!$p['isinstance']($pyjs_dbg_250_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_250_err);}throw $pyjs_dbg_250_err;
}})();
				$pyjs['track']['lineno']=547;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return result['append']($m['hqx_encoding']['__getitem__']((((snippet['__getitem__'](1))&(15))<<(2))|(((snippet['__getitem__'](2))&(192))>>(6))));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_251_err){if (!$p['isinstance']($pyjs_dbg_251_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_251_err);}throw $pyjs_dbg_251_err;
}})();
				$pyjs['track']['lineno']=549;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return result['append']($m['hqx_encoding']['__getitem__']((snippet['__getitem__'](2))&(63)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_252_err){if (!$p['isinstance']($pyjs_dbg_252_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_252_err);}throw $pyjs_dbg_252_err;
}})();
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](length, 2));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_253_err){if (!$p['isinstance']($pyjs_dbg_253_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_253_err);}throw $pyjs_dbg_253_err;
}})()) {
				$pyjs['track']['lineno']=552;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return result['append']($m['hqx_encoding']['__getitem__'](((snippet['__getitem__'](0))&(252))>>(2)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_254_err){if (!$p['isinstance']($pyjs_dbg_254_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_254_err);}throw $pyjs_dbg_254_err;
}})();
				$pyjs['track']['lineno']=553;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return result['append']($m['hqx_encoding']['__getitem__']((((snippet['__getitem__'](0))&(3))<<(4))|(((snippet['__getitem__'](1))&(240))>>(4))));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_255_err){if (!$p['isinstance']($pyjs_dbg_255_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_255_err);}throw $pyjs_dbg_255_err;
}})();
				$pyjs['track']['lineno']=555;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return result['append']($m['hqx_encoding']['__getitem__'](((snippet['__getitem__'](1))&(15))<<(2)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_256_err){if (!$p['isinstance']($pyjs_dbg_256_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_256_err);}throw $pyjs_dbg_256_err;
}})();
			}
			else if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq'](length, 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_257_err){if (!$p['isinstance']($pyjs_dbg_257_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_257_err);}throw $pyjs_dbg_257_err;
}})()) {
				$pyjs['track']['lineno']=559;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return result['append']($m['hqx_encoding']['__getitem__'](((snippet['__getitem__'](0))&(252))>>(2)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_258_err){if (!$p['isinstance']($pyjs_dbg_258_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_258_err);}throw $pyjs_dbg_258_err;
}})();
				$pyjs['track']['lineno']=560;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return result['append']($m['hqx_encoding']['__getitem__'](((snippet['__getitem__'](0))&(3))<<(4)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_259_err){if (!$p['isinstance']($pyjs_dbg_259_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_259_err);}throw $pyjs_dbg_259_err;
}})();
			}
		}
		if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
			$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
			$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
		}
		$pyjs['track']['module']='binascii';
		$pyjs['track']['lineno']=562;
		$pyjs['track']['lineno']=562;
		var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
		return ''['join'](result);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_260_err){if (!$p['isinstance']($pyjs_dbg_260_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_260_err);}throw $pyjs_dbg_260_err;
}})();
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['b2a_hqx']['__name__'] = 'b2a_hqx';

	$m['b2a_hqx']['__bind_type__'] = 0;
	$m['b2a_hqx']['__args__'] = [null,null,['s']];
	$pyjs['track']['lineno']=564;
	$m['crctab_hqx'] = (function(){try{try{$pyjs['in_try_except'] += 1;
	return $p['list']([0, 4129, 8258, 12387, 16516, 20645, 24774, 28903, 33032, 37161, 41290, 45419, 49548, 53677, 57806, 61935, 4657, 528, 12915, 8786, 21173, 17044, 29431, 25302, 37689, 33560, 45947, 41818, 54205, 50076, 62463, 58334, 9314, 13379, 1056, 5121, 25830, 29895, 17572, 21637, 42346, 46411, 34088, 38153, 58862, 62927, 50604, 54669, 13907, 9842, 5649, 1584, 30423, 26358, 22165, 18100, 46939, 42874, 38681, 34616, 63455, 59390, 55197, 51132, 18628, 22757, 26758, 30887, 2112, 6241, 10242, 14371, 51660, 55789, 59790, 63919, 35144, 39273, 43274, 47403, 23285, 19156, 31415, 27286, 6769, 2640, 14899, 10770, 56317, 52188, 64447, 60318, 39801, 35672, 47931, 43802, 27814, 31879, 19684, 23749, 11298, 15363, 3168, 7233, 60846, 64911, 52716, 56781, 44330, 48395, 36200, 40265, 32407, 28342, 24277, 20212, 15891, 11826, 7761, 3696, 65439, 61374, 57309, 53244, 48923, 44858, 40793, 36728, 37256, 33193, 45514, 41451, 53516, 49453, 61774, 57711, 4224, 161, 12482, 8419, 20484, 16421, 28742, 24679, 33721, 37784, 41979, 46042, 49981, 54044, 58239, 62302, 689, 4752, 8947, 13010, 16949, 21012, 25207, 29270, 46570, 42443, 38312, 34185, 62830, 58703, 54572, 50445, 13538, 9411, 5280, 1153, 29798, 25671, 21540, 17413, 42971, 47098, 34713, 38840, 59231, 63358, 50973, 55100, 9939, 14066, 1681, 5808, 26199, 30326, 17941, 22068, 55628, 51565, 63758, 59695, 39368, 35305, 47498, 43435, 22596, 18533, 30726, 26663, 6336, 2273, 14466, 10403, 52093, 56156, 60223, 64286, 35833, 39896, 43963, 48026, 19061, 23124, 27191, 31254, 2801, 6864, 10931, 14994, 64814, 60687, 56684, 52557, 48554, 44427, 40424, 36297, 31782, 27655, 23652, 19525, 15522, 11395, 7392, 3265, 61215, 65342, 53085, 57212, 44955, 49082, 36825, 40952, 28183, 32310, 20053, 24180, 11923, 16050, 3793, 7920]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_261_err){if (!$p['isinstance']($pyjs_dbg_261_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_261_err);}throw $pyjs_dbg_261_err;
}})();
	$pyjs['track']['lineno']=599;
	$m['crc_hqx'] = function(s, crc) {
		var c,$iter12_type,$iter12_array,$iter12_iter,$pyjs__trackstack_size_1,$iter12_idx,$iter12_nextval;
		$pyjs['track']={'module':'binascii','lineno':599};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='binascii';
		$pyjs['track']['lineno']=599;
		$pyjs['track']['lineno']=600;
		$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
		$iter12_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
		return s;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_262_err){if (!$p['isinstance']($pyjs_dbg_262_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_262_err);}throw $pyjs_dbg_262_err;
}})();
		$iter12_nextval=$p['__iter_prepare']($iter12_iter,false);
		while (typeof($p['__wrapped_next']($iter12_nextval)['$nextval']) != 'undefined') {
			c = $iter12_nextval['$nextval'];
			$pyjs['track']['lineno']=601;
			crc = (((crc)<<(8))&(65280))^($m['crctab_hqx']['__getitem__']((((crc)>>(8))&(255))^((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['ord'](c);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_263_err){if (!$p['isinstance']($pyjs_dbg_263_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_263_err);}throw $pyjs_dbg_263_err;
}})())));
		}
		if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
			$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
			$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
		}
		$pyjs['track']['module']='binascii';
		$pyjs['track']['lineno']=603;
		$pyjs['track']['lineno']=603;
		var $pyjs__ret = crc;
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['crc_hqx']['__name__'] = 'crc_hqx';

	$m['crc_hqx']['__bind_type__'] = 0;
	$m['crc_hqx']['__args__'] = [null,null,['s'],['crc']];
	$pyjs['track']['lineno']=605;
	$m['rlecode_hqx'] = function(s) {
		var result,$add104,$and41,$and40,prev,$iter13_array,$add101,$add100,$add103,$add102,$add99,$mul8,$mul7,$mul6,$mul5,count,c,$iter13_nextval,$iter13_iter,$iter13_type,$pyjs__trackstack_size_1,$iter13_idx;
		$pyjs['track']={'module':'binascii','lineno':605};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='binascii';
		$pyjs['track']['lineno']=605;
		$pyjs['track']['lineno']=611;
		if ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool'](!$p['bool'](s));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_264_err){if (!$p['isinstance']($pyjs_dbg_264_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_264_err);}throw $pyjs_dbg_264_err;
}})()) {
			$pyjs['track']['lineno']=612;
			$pyjs['track']['lineno']=612;
			var $pyjs__ret = '';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
		$pyjs['track']['lineno']=613;
		result = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_265_err){if (!$p['isinstance']($pyjs_dbg_265_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_265_err);}throw $pyjs_dbg_265_err;
}})();
		$pyjs['track']['lineno']=614;
		prev = s['__getitem__'](0);
		$pyjs['track']['lineno']=615;
		count = 1;
		$pyjs['track']['lineno']=620;
		if ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool']($p['op_eq'](s['__getitem__']((typeof ($usub6=1)=='number'?
			-$usub6:
			$p['op_usub']($usub6))), '!'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_266_err){if (!$p['isinstance']($pyjs_dbg_266_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_266_err);}throw $pyjs_dbg_266_err;
}})()) {
			$pyjs['track']['lineno']=621;
			s = $p['__op_add']($add99=$p['__getslice'](s, 1, null),$add100='?');
		}
		else {
			$pyjs['track']['lineno']=623;
			s = $p['__op_add']($add101=$p['__getslice'](s, 1, null),$add102='!');
		}
		$pyjs['track']['lineno']=625;
		$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
		$iter13_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
		return s;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_267_err){if (!$p['isinstance']($pyjs_dbg_267_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_267_err);}throw $pyjs_dbg_267_err;
}})();
		$iter13_nextval=$p['__iter_prepare']($iter13_iter,false);
		while (typeof($p['__wrapped_next']($iter13_nextval)['$nextval']) != 'undefined') {
			c = $iter13_nextval['$nextval'];
			$pyjs['track']['lineno']=626;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($and40=$p['op_eq'](c, prev))?($p['cmp'](count, 255) == -1):$and40));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_268_err){if (!$p['isinstance']($pyjs_dbg_268_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_268_err);}throw $pyjs_dbg_268_err;
}})()) {
				$pyjs['track']['lineno']=627;
				count = $p['__op_add']($add103=count,$add104=1);
			}
			else {
				$pyjs['track']['lineno']=629;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq'](count, 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_269_err){if (!$p['isinstance']($pyjs_dbg_269_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_269_err);}throw $pyjs_dbg_269_err;
}})()) {
					$pyjs['track']['lineno']=630;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](!$p['op_eq'](prev, '\x90'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_270_err){if (!$p['isinstance']($pyjs_dbg_270_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_270_err);}throw $pyjs_dbg_270_err;
}})()) {
						$pyjs['track']['lineno']=631;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return result['append'](prev);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_271_err){if (!$p['isinstance']($pyjs_dbg_271_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_271_err);}throw $pyjs_dbg_271_err;
}})();
					}
					else {
						$pyjs['track']['lineno']=633;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return result['extend']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['list'](['\x90', '\x00']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_272_err){if (!$p['isinstance']($pyjs_dbg_272_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_272_err);}throw $pyjs_dbg_272_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_273_err){if (!$p['isinstance']($pyjs_dbg_273_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_273_err);}throw $pyjs_dbg_273_err;
}})();
					}
				}
				else if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['cmp'](count, 4) == -1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_274_err){if (!$p['isinstance']($pyjs_dbg_274_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_274_err);}throw $pyjs_dbg_274_err;
}})()) {
					$pyjs['track']['lineno']=635;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](!$p['op_eq'](prev, '\x90'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_275_err){if (!$p['isinstance']($pyjs_dbg_275_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_275_err);}throw $pyjs_dbg_275_err;
}})()) {
						$pyjs['track']['lineno']=636;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return result['extend']((typeof ($mul5=(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['list']([prev]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_276_err){if (!$p['isinstance']($pyjs_dbg_276_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_276_err);}throw $pyjs_dbg_276_err;
}})())==typeof ($mul6=count) && typeof $mul5=='number'?
							$mul5*$mul6:
							$p['op_mul']($mul5,$mul6)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_277_err){if (!$p['isinstance']($pyjs_dbg_277_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_277_err);}throw $pyjs_dbg_277_err;
}})();
					}
					else {
						$pyjs['track']['lineno']=638;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return result['extend']((typeof ($mul7=(function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['list'](['\x90', '\x00']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_278_err){if (!$p['isinstance']($pyjs_dbg_278_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_278_err);}throw $pyjs_dbg_278_err;
}})())==typeof ($mul8=count) && typeof $mul7=='number'?
							$mul7*$mul8:
							$p['op_mul']($mul7,$mul8)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_279_err){if (!$p['isinstance']($pyjs_dbg_279_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_279_err);}throw $pyjs_dbg_279_err;
}})();
					}
				}
				else {
					$pyjs['track']['lineno']=640;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](!$p['op_eq'](prev, '\x90'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_280_err){if (!$p['isinstance']($pyjs_dbg_280_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_280_err);}throw $pyjs_dbg_280_err;
}})()) {
						$pyjs['track']['lineno']=641;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return result['extend']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['list']([prev, '\x90', (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['chr'](count);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_281_err){if (!$p['isinstance']($pyjs_dbg_281_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_281_err);}throw $pyjs_dbg_281_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_282_err){if (!$p['isinstance']($pyjs_dbg_282_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_282_err);}throw $pyjs_dbg_282_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_283_err){if (!$p['isinstance']($pyjs_dbg_283_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_283_err);}throw $pyjs_dbg_283_err;
}})();
					}
					else {
						$pyjs['track']['lineno']=643;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return result['extend']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['list'](['\x90', '\x00', '\x90', (function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['chr'](count);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_284_err){if (!$p['isinstance']($pyjs_dbg_284_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_284_err);}throw $pyjs_dbg_284_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_285_err){if (!$p['isinstance']($pyjs_dbg_285_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_285_err);}throw $pyjs_dbg_285_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_286_err){if (!$p['isinstance']($pyjs_dbg_286_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_286_err);}throw $pyjs_dbg_286_err;
}})();
					}
				}
				$pyjs['track']['lineno']=644;
				count = 1;
				$pyjs['track']['lineno']=645;
				prev = c;
			}
		}
		if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
			$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
			$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
		}
		$pyjs['track']['module']='binascii';
		$pyjs['track']['lineno']=647;
		$pyjs['track']['lineno']=647;
		var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
		return ''['join'](result);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_287_err){if (!$p['isinstance']($pyjs_dbg_287_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_287_err);}throw $pyjs_dbg_287_err;
}})();
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['rlecode_hqx']['__name__'] = 'rlecode_hqx';

	$m['rlecode_hqx']['__bind_type__'] = 0;
	$m['rlecode_hqx']['__args__'] = [null,null,['s']];
	$pyjs['track']['lineno']=649;
	$m['rledecode_hqx'] = function(s) {
		var count,$iter14_array,$iter14_type,$sub27,$mul10,$mul9,$sub28,snippet,result,$iter14_iter,$pyjs__trackstack_size_1,prev,$iter14_idx,$iter14_nextval;
		$pyjs['track']={'module':'binascii','lineno':649};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='binascii';
		$pyjs['track']['lineno']=649;
		$pyjs['track']['lineno']=650;
		s = (function(){try{try{$pyjs['in_try_except'] += 1;
		return s['$$split']('\x90');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_288_err){if (!$p['isinstance']($pyjs_dbg_288_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_288_err);}throw $pyjs_dbg_288_err;
}})();
		$pyjs['track']['lineno']=651;
		result = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['list']([s['__getitem__'](0)]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_289_err){if (!$p['isinstance']($pyjs_dbg_289_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_289_err);}throw $pyjs_dbg_289_err;
}})();
		$pyjs['track']['lineno']=652;
		prev = s['__getitem__'](0);
		$pyjs['track']['lineno']=653;
		$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
		$iter14_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['__getslice'](s, 1, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_290_err){if (!$p['isinstance']($pyjs_dbg_290_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_290_err);}throw $pyjs_dbg_290_err;
}})();
		$iter14_nextval=$p['__iter_prepare']($iter14_iter,false);
		while (typeof($p['__wrapped_next']($iter14_nextval)['$nextval']) != 'undefined') {
			snippet = $iter14_nextval['$nextval'];
			$pyjs['track']['lineno']=654;
			count = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['ord'](snippet['__getitem__'](0));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_291_err){if (!$p['isinstance']($pyjs_dbg_291_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_291_err);}throw $pyjs_dbg_291_err;
}})();
			$pyjs['track']['lineno']=655;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['cmp'](count, 0) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_292_err){if (!$p['isinstance']($pyjs_dbg_292_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_292_err);}throw $pyjs_dbg_292_err;
}})()) {
				$pyjs['track']['lineno']=656;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return result['append']((typeof ($mul9=prev['__getitem__']((typeof ($usub7=1)=='number'?
					-$usub7:
					$p['op_usub']($usub7))))==typeof ($mul10=$p['__op_sub']($sub27=count,$sub28=1)) && typeof $mul9=='number'?
					$mul9*$mul10:
					$p['op_mul']($mul9,$mul10)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_293_err){if (!$p['isinstance']($pyjs_dbg_293_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_293_err);}throw $pyjs_dbg_293_err;
}})();
				$pyjs['track']['lineno']=657;
				prev = snippet;
			}
			else {
				$pyjs['track']['lineno']=659;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return result['append']('\x90');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_294_err){if (!$p['isinstance']($pyjs_dbg_294_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_294_err);}throw $pyjs_dbg_294_err;
}})();
				$pyjs['track']['lineno']=660;
				prev = '\x90';
			}
			$pyjs['track']['lineno']=661;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return result['append']($p['__getslice'](snippet, 1, null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_295_err){if (!$p['isinstance']($pyjs_dbg_295_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_295_err);}throw $pyjs_dbg_295_err;
}})();
		}
		if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
			$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
			$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
		}
		$pyjs['track']['module']='binascii';
		$pyjs['track']['lineno']=663;
		$pyjs['track']['lineno']=663;
		var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
		return ''['join'](result);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_296_err){if (!$p['isinstance']($pyjs_dbg_296_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_296_err);}throw $pyjs_dbg_296_err;
}})();
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['rledecode_hqx']['__name__'] = 'rledecode_hqx';

	$m['rledecode_hqx']['__bind_type__'] = 0;
	$m['rledecode_hqx']['__args__'] = [null,null,['s']];
	$pyjs['track']['lineno']=665;
	$m['crc_32_tab'] = (function(){try{try{$pyjs['in_try_except'] += 1;
	return $p['list']([0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918000, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_297_err){if (!$p['isinstance']($pyjs_dbg_297_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_297_err);}throw $pyjs_dbg_297_err;
}})();
	$pyjs['track']['lineno']=720;
	$m['crc32'] = function(s, crc) {
		if (typeof crc == 'undefined') crc=arguments['callee']['__args__'][3][1];
		var $pyjs__trackstack_size_1,result,$mod9,$pow7,$pow6,$pow5,$pow4,$pow3,$iter15_iter,$pow1,$pow8,$sub30,$sub29,$add105,$mod10,$add106,$iter15_array,$pow2,c,$iter15_idx,$iter15_nextval,$iter15_type;
		$pyjs['track']={'module':'binascii','lineno':720};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='binascii';
		$pyjs['track']['lineno']=720;
		$pyjs['track']['lineno']=721;
		result = 0;
		$pyjs['track']['lineno']=722;
		crc = (~((function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['float_int'](crc);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_298_err){if (!$p['isinstance']($pyjs_dbg_298_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_298_err);}throw $pyjs_dbg_298_err;
}})()))&(4294967295);
		$pyjs['track']['lineno']=723;
		$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
		$iter15_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
		return s;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_299_err){if (!$p['isinstance']($pyjs_dbg_299_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_299_err);}throw $pyjs_dbg_299_err;
}})();
		$iter15_nextval=$p['__iter_prepare']($iter15_iter,false);
		while (typeof($p['__wrapped_next']($iter15_nextval)['$nextval']) != 'undefined') {
			c = $iter15_nextval['$nextval'];
			$pyjs['track']['lineno']=724;
			crc = ($m['crc_32_tab']['__getitem__'](((crc)^((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['float_int']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['ord'](c);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_300_err){if (!$p['isinstance']($pyjs_dbg_300_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_300_err);}throw $pyjs_dbg_300_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_301_err){if (!$p['isinstance']($pyjs_dbg_301_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_301_err);}throw $pyjs_dbg_301_err;
}})()))&(255)))^((crc)>>(8));
			$pyjs['track']['lineno']=727;
			result = (crc)^(4294967295);
		}
		if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
			$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
			$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
		}
		$pyjs['track']['module']='binascii';
		$pyjs['track']['lineno']=729;
		if ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['bool'](($p['cmp'](result, (typeof ($pow1=2)==typeof ($pow2=31) && typeof $pow1=='number'?
			Math['pow']($pow1,$pow2):
			$p['op_pow']($pow1,$pow2))) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_302_err){if (!$p['isinstance']($pyjs_dbg_302_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_302_err);}throw $pyjs_dbg_302_err;
}})()) {
			$pyjs['track']['lineno']=730;
			result = $p['__op_sub']($sub29=(typeof ($mod9=$p['__op_add']($add105=result,$add106=(typeof ($pow3=2)==typeof ($pow4=31) && typeof $pow3=='number'?
				Math['pow']($pow3,$pow4):
				$p['op_pow']($pow3,$pow4))))==typeof ($mod10=(typeof ($pow5=2)==typeof ($pow6=32) && typeof $pow5=='number'?
				Math['pow']($pow5,$pow6):
				$p['op_pow']($pow5,$pow6))) && typeof $mod9=='number'?
				(($mod9=$mod9%$mod10)<0&&$mod10>0?$mod9+$mod10:$mod9):
				$p['op_mod']($mod9,$mod10)),$sub30=(typeof ($pow7=2)==typeof ($pow8=31) && typeof $pow7=='number'?
				Math['pow']($pow7,$pow8):
				$p['op_pow']($pow7,$pow8)));
		}
		$pyjs['track']['lineno']=732;
		$pyjs['track']['lineno']=732;
		var $pyjs__ret = result;
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['crc32']['__name__'] = 'crc32';

	$m['crc32']['__bind_type__'] = 0;
	$m['crc32']['__args__'] = [null,null,['s'],['crc', 0]];
	$pyjs['track']['lineno']=734;
	$m['b2a_hex'] = function(s) {
		var $add114,$add112,$add113,$add110,$add111,$$char,result,$iter16_iter,$iter16_type,$iter16_nextval,$sub31,$sub33,$sub32,$sub34,$add107,$add109,$add108,$iter16_array,$iter16_idx,c,$pyjs__trackstack_size_1;
		$pyjs['track']={'module':'binascii','lineno':734};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='binascii';
		$pyjs['track']['lineno']=734;
		$pyjs['track']['lineno']=735;
		result = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_303_err){if (!$p['isinstance']($pyjs_dbg_303_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_303_err);}throw $pyjs_dbg_303_err;
}})();
		$pyjs['track']['lineno']=736;
		$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
		$iter16_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
		return s;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_304_err){if (!$p['isinstance']($pyjs_dbg_304_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_304_err);}throw $pyjs_dbg_304_err;
}})();
		$iter16_nextval=$p['__iter_prepare']($iter16_iter,false);
		while (typeof($p['__wrapped_next']($iter16_nextval)['$nextval']) != 'undefined') {
			$$char = $iter16_nextval['$nextval'];
			$pyjs['track']['lineno']=737;
			c = (((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['ord']($$char);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_305_err){if (!$p['isinstance']($pyjs_dbg_305_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_305_err);}throw $pyjs_dbg_305_err;
}})())>>(4))&(15);
			$pyjs['track']['lineno']=738;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['cmp'](c, 9) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_306_err){if (!$p['isinstance']($pyjs_dbg_306_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_306_err);}throw $pyjs_dbg_306_err;
}})()) {
				$pyjs['track']['lineno']=739;
				c = $p['__op_sub']($sub31=$p['__op_add']($add107=c,$add108=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['ord']('a');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_307_err){if (!$p['isinstance']($pyjs_dbg_307_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_307_err);}throw $pyjs_dbg_307_err;
}})()),$sub32=10);
			}
			else {
				$pyjs['track']['lineno']=741;
				c = $p['__op_add']($add109=c,$add110=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['ord']('0');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_308_err){if (!$p['isinstance']($pyjs_dbg_308_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_308_err);}throw $pyjs_dbg_308_err;
}})());
			}
			$pyjs['track']['lineno']=742;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return result['append']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['chr'](c);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_309_err){if (!$p['isinstance']($pyjs_dbg_309_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_309_err);}throw $pyjs_dbg_309_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_310_err){if (!$p['isinstance']($pyjs_dbg_310_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_310_err);}throw $pyjs_dbg_310_err;
}})();
			$pyjs['track']['lineno']=743;
			c = ((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['ord']($$char);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_311_err){if (!$p['isinstance']($pyjs_dbg_311_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_311_err);}throw $pyjs_dbg_311_err;
}})())&(15);
			$pyjs['track']['lineno']=744;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['cmp'](c, 9) == 1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_312_err){if (!$p['isinstance']($pyjs_dbg_312_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_312_err);}throw $pyjs_dbg_312_err;
}})()) {
				$pyjs['track']['lineno']=745;
				c = $p['__op_sub']($sub33=$p['__op_add']($add111=c,$add112=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['ord']('a');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_313_err){if (!$p['isinstance']($pyjs_dbg_313_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_313_err);}throw $pyjs_dbg_313_err;
}})()),$sub34=10);
			}
			else {
				$pyjs['track']['lineno']=747;
				c = $p['__op_add']($add113=c,$add114=(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['ord']('0');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_314_err){if (!$p['isinstance']($pyjs_dbg_314_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_314_err);}throw $pyjs_dbg_314_err;
}})());
			}
			$pyjs['track']['lineno']=748;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return result['append']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['chr'](c);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_315_err){if (!$p['isinstance']($pyjs_dbg_315_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_315_err);}throw $pyjs_dbg_315_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_316_err){if (!$p['isinstance']($pyjs_dbg_316_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_316_err);}throw $pyjs_dbg_316_err;
}})();
		}
		if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
			$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
			$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
		}
		$pyjs['track']['module']='binascii';
		$pyjs['track']['lineno']=749;
		$pyjs['track']['lineno']=749;
		var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
		return ''['join'](result);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_317_err){if (!$p['isinstance']($pyjs_dbg_317_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_317_err);}throw $pyjs_dbg_317_err;
}})();
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['b2a_hex']['__name__'] = 'b2a_hex';

	$m['b2a_hex']['__bind_type__'] = 0;
	$m['b2a_hex']['__args__'] = [null,null,['s']];
	$pyjs['track']['lineno']=751;
	$m['hexlify'] = $m['b2a_hex'];
	$pyjs['track']['lineno']=753;
	$m['table_hex'] = (function(){try{try{$pyjs['in_try_except'] += 1;
	return $p['list']([(typeof ($usub8=1)=='number'?
		-$usub8:
		$p['op_usub']($usub8)), (typeof ($usub9=1)=='number'?
		-$usub9:
		$p['op_usub']($usub9)), (typeof ($usub10=1)=='number'?
		-$usub10:
		$p['op_usub']($usub10)), (typeof ($usub11=1)=='number'?
		-$usub11:
		$p['op_usub']($usub11)), (typeof ($usub12=1)=='number'?
		-$usub12:
		$p['op_usub']($usub12)), (typeof ($usub13=1)=='number'?
		-$usub13:
		$p['op_usub']($usub13)), (typeof ($usub14=1)=='number'?
		-$usub14:
		$p['op_usub']($usub14)), (typeof ($usub15=1)=='number'?
		-$usub15:
		$p['op_usub']($usub15)), (typeof ($usub16=1)=='number'?
		-$usub16:
		$p['op_usub']($usub16)), (typeof ($usub17=1)=='number'?
		-$usub17:
		$p['op_usub']($usub17)), (typeof ($usub18=1)=='number'?
		-$usub18:
		$p['op_usub']($usub18)), (typeof ($usub19=1)=='number'?
		-$usub19:
		$p['op_usub']($usub19)), (typeof ($usub20=1)=='number'?
		-$usub20:
		$p['op_usub']($usub20)), (typeof ($usub21=1)=='number'?
		-$usub21:
		$p['op_usub']($usub21)), (typeof ($usub22=1)=='number'?
		-$usub22:
		$p['op_usub']($usub22)), (typeof ($usub23=1)=='number'?
		-$usub23:
		$p['op_usub']($usub23)), (typeof ($usub24=1)=='number'?
		-$usub24:
		$p['op_usub']($usub24)), (typeof ($usub25=1)=='number'?
		-$usub25:
		$p['op_usub']($usub25)), (typeof ($usub26=1)=='number'?
		-$usub26:
		$p['op_usub']($usub26)), (typeof ($usub27=1)=='number'?
		-$usub27:
		$p['op_usub']($usub27)), (typeof ($usub28=1)=='number'?
		-$usub28:
		$p['op_usub']($usub28)), (typeof ($usub29=1)=='number'?
		-$usub29:
		$p['op_usub']($usub29)), (typeof ($usub30=1)=='number'?
		-$usub30:
		$p['op_usub']($usub30)), (typeof ($usub31=1)=='number'?
		-$usub31:
		$p['op_usub']($usub31)), (typeof ($usub32=1)=='number'?
		-$usub32:
		$p['op_usub']($usub32)), (typeof ($usub33=1)=='number'?
		-$usub33:
		$p['op_usub']($usub33)), (typeof ($usub34=1)=='number'?
		-$usub34:
		$p['op_usub']($usub34)), (typeof ($usub35=1)=='number'?
		-$usub35:
		$p['op_usub']($usub35)), (typeof ($usub36=1)=='number'?
		-$usub36:
		$p['op_usub']($usub36)), (typeof ($usub37=1)=='number'?
		-$usub37:
		$p['op_usub']($usub37)), (typeof ($usub38=1)=='number'?
		-$usub38:
		$p['op_usub']($usub38)), (typeof ($usub39=1)=='number'?
		-$usub39:
		$p['op_usub']($usub39)), (typeof ($usub40=1)=='number'?
		-$usub40:
		$p['op_usub']($usub40)), (typeof ($usub41=1)=='number'?
		-$usub41:
		$p['op_usub']($usub41)), (typeof ($usub42=1)=='number'?
		-$usub42:
		$p['op_usub']($usub42)), (typeof ($usub43=1)=='number'?
		-$usub43:
		$p['op_usub']($usub43)), (typeof ($usub44=1)=='number'?
		-$usub44:
		$p['op_usub']($usub44)), (typeof ($usub45=1)=='number'?
		-$usub45:
		$p['op_usub']($usub45)), (typeof ($usub46=1)=='number'?
		-$usub46:
		$p['op_usub']($usub46)), (typeof ($usub47=1)=='number'?
		-$usub47:
		$p['op_usub']($usub47)), (typeof ($usub48=1)=='number'?
		-$usub48:
		$p['op_usub']($usub48)), (typeof ($usub49=1)=='number'?
		-$usub49:
		$p['op_usub']($usub49)), (typeof ($usub50=1)=='number'?
		-$usub50:
		$p['op_usub']($usub50)), (typeof ($usub51=1)=='number'?
		-$usub51:
		$p['op_usub']($usub51)), (typeof ($usub52=1)=='number'?
		-$usub52:
		$p['op_usub']($usub52)), (typeof ($usub53=1)=='number'?
		-$usub53:
		$p['op_usub']($usub53)), (typeof ($usub54=1)=='number'?
		-$usub54:
		$p['op_usub']($usub54)), (typeof ($usub55=1)=='number'?
		-$usub55:
		$p['op_usub']($usub55)), 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, (typeof ($usub56=1)=='number'?
		-$usub56:
		$p['op_usub']($usub56)), (typeof ($usub57=1)=='number'?
		-$usub57:
		$p['op_usub']($usub57)), (typeof ($usub58=1)=='number'?
		-$usub58:
		$p['op_usub']($usub58)), (typeof ($usub59=1)=='number'?
		-$usub59:
		$p['op_usub']($usub59)), (typeof ($usub60=1)=='number'?
		-$usub60:
		$p['op_usub']($usub60)), (typeof ($usub61=1)=='number'?
		-$usub61:
		$p['op_usub']($usub61)), (typeof ($usub62=1)=='number'?
		-$usub62:
		$p['op_usub']($usub62)), 10, 11, 12, 13, 14, 15, (typeof ($usub63=1)=='number'?
		-$usub63:
		$p['op_usub']($usub63)), (typeof ($usub64=1)=='number'?
		-$usub64:
		$p['op_usub']($usub64)), (typeof ($usub65=1)=='number'?
		-$usub65:
		$p['op_usub']($usub65)), (typeof ($usub66=1)=='number'?
		-$usub66:
		$p['op_usub']($usub66)), (typeof ($usub67=1)=='number'?
		-$usub67:
		$p['op_usub']($usub67)), (typeof ($usub68=1)=='number'?
		-$usub68:
		$p['op_usub']($usub68)), (typeof ($usub69=1)=='number'?
		-$usub69:
		$p['op_usub']($usub69)), (typeof ($usub70=1)=='number'?
		-$usub70:
		$p['op_usub']($usub70)), (typeof ($usub71=1)=='number'?
		-$usub71:
		$p['op_usub']($usub71)), (typeof ($usub72=1)=='number'?
		-$usub72:
		$p['op_usub']($usub72)), (typeof ($usub73=1)=='number'?
		-$usub73:
		$p['op_usub']($usub73)), (typeof ($usub74=1)=='number'?
		-$usub74:
		$p['op_usub']($usub74)), (typeof ($usub75=1)=='number'?
		-$usub75:
		$p['op_usub']($usub75)), (typeof ($usub76=1)=='number'?
		-$usub76:
		$p['op_usub']($usub76)), (typeof ($usub77=1)=='number'?
		-$usub77:
		$p['op_usub']($usub77)), (typeof ($usub78=1)=='number'?
		-$usub78:
		$p['op_usub']($usub78)), (typeof ($usub79=1)=='number'?
		-$usub79:
		$p['op_usub']($usub79)), (typeof ($usub80=1)=='number'?
		-$usub80:
		$p['op_usub']($usub80)), (typeof ($usub81=1)=='number'?
		-$usub81:
		$p['op_usub']($usub81)), (typeof ($usub82=1)=='number'?
		-$usub82:
		$p['op_usub']($usub82)), (typeof ($usub83=1)=='number'?
		-$usub83:
		$p['op_usub']($usub83)), (typeof ($usub84=1)=='number'?
		-$usub84:
		$p['op_usub']($usub84)), (typeof ($usub85=1)=='number'?
		-$usub85:
		$p['op_usub']($usub85)), (typeof ($usub86=1)=='number'?
		-$usub86:
		$p['op_usub']($usub86)), (typeof ($usub87=1)=='number'?
		-$usub87:
		$p['op_usub']($usub87)), (typeof ($usub88=1)=='number'?
		-$usub88:
		$p['op_usub']($usub88)), 10, 11, 12, 13, 14, 15, (typeof ($usub89=1)=='number'?
		-$usub89:
		$p['op_usub']($usub89)), (typeof ($usub90=1)=='number'?
		-$usub90:
		$p['op_usub']($usub90)), (typeof ($usub91=1)=='number'?
		-$usub91:
		$p['op_usub']($usub91)), (typeof ($usub92=1)=='number'?
		-$usub92:
		$p['op_usub']($usub92)), (typeof ($usub93=1)=='number'?
		-$usub93:
		$p['op_usub']($usub93)), (typeof ($usub94=1)=='number'?
		-$usub94:
		$p['op_usub']($usub94)), (typeof ($usub95=1)=='number'?
		-$usub95:
		$p['op_usub']($usub95)), (typeof ($usub96=1)=='number'?
		-$usub96:
		$p['op_usub']($usub96)), (typeof ($usub97=1)=='number'?
		-$usub97:
		$p['op_usub']($usub97)), (typeof ($usub98=1)=='number'?
		-$usub98:
		$p['op_usub']($usub98)), (typeof ($usub99=1)=='number'?
		-$usub99:
		$p['op_usub']($usub99)), (typeof ($usub100=1)=='number'?
		-$usub100:
		$p['op_usub']($usub100)), (typeof ($usub101=1)=='number'?
		-$usub101:
		$p['op_usub']($usub101)), (typeof ($usub102=1)=='number'?
		-$usub102:
		$p['op_usub']($usub102)), (typeof ($usub103=1)=='number'?
		-$usub103:
		$p['op_usub']($usub103)), (typeof ($usub104=1)=='number'?
		-$usub104:
		$p['op_usub']($usub104)), (typeof ($usub105=1)=='number'?
		-$usub105:
		$p['op_usub']($usub105)), (typeof ($usub106=1)=='number'?
		-$usub106:
		$p['op_usub']($usub106)), (typeof ($usub107=1)=='number'?
		-$usub107:
		$p['op_usub']($usub107)), (typeof ($usub108=1)=='number'?
		-$usub108:
		$p['op_usub']($usub108)), (typeof ($usub109=1)=='number'?
		-$usub109:
		$p['op_usub']($usub109)), (typeof ($usub110=1)=='number'?
		-$usub110:
		$p['op_usub']($usub110)), (typeof ($usub111=1)=='number'?
		-$usub111:
		$p['op_usub']($usub111)), (typeof ($usub112=1)=='number'?
		-$usub112:
		$p['op_usub']($usub112)), (typeof ($usub113=1)=='number'?
		-$usub113:
		$p['op_usub']($usub113))]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_318_err){if (!$p['isinstance']($pyjs_dbg_318_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_318_err);}throw $pyjs_dbg_318_err;
}})();
	$pyjs['track']['lineno']=765;
	$m['a2b_hex'] = function(t) {
		var $iter17_nextval,a,$or29,$iter17_iter,$add116,$pyjs__trackstack_size_1,pairs_gen,$iter17_array,b,$iter17_idx,$iter17_type,$or30,$add115,result;
		$pyjs['track']={'module':'binascii','lineno':765};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='binascii';
		$pyjs['track']['lineno']=765;
		$pyjs['track']['lineno']=766;
		result = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_319_err){if (!$p['isinstance']($pyjs_dbg_319_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_319_err);}throw $pyjs_dbg_319_err;
}})();
		$pyjs['track']['lineno']=768;
		pairs_gen = function(s) {
			var $pyjs_try_err,iterlist;
			$pyjs['track']={'module':'binascii','lineno':768};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='binascii';
			$pyjs['track']['lineno']=768;
			$pyjs['track']['lineno']=777;
			iterlist = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_320_err){if (!$p['isinstance']($pyjs_dbg_320_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_320_err);}throw $pyjs_dbg_320_err;
}})();
			$pyjs['track']['lineno']=778;
			while ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](s);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_321_err){if (!$p['isinstance']($pyjs_dbg_321_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_321_err);}throw $pyjs_dbg_321_err;
}})()) {
				$pyjs['track']['lineno']=779;
				var $pyjs__trackstack_size_1 = $pyjs['trackstack']['length'];
				try {
					try {
						$pyjs['in_try_except'] += 1;
						$pyjs['track']['lineno']=780;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return iterlist['append']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['tuple']([$m['table_hex']['__getitem__']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['ord'](s['__getitem__'](0));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_322_err){if (!$p['isinstance']($pyjs_dbg_322_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_322_err);}throw $pyjs_dbg_322_err;
}})()), $m['table_hex']['__getitem__']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['ord'](s['__getitem__'](1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_323_err){if (!$p['isinstance']($pyjs_dbg_323_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_323_err);}throw $pyjs_dbg_323_err;
}})())]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_324_err){if (!$p['isinstance']($pyjs_dbg_324_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_324_err);}throw $pyjs_dbg_324_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_325_err){if (!$p['isinstance']($pyjs_dbg_325_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_325_err);}throw $pyjs_dbg_325_err;
}})();
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
					$pyjs['track']['module']='binascii';
					if (($pyjs_try_err_name == $p['IndexError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['IndexError'])) {
						$pyjs['track']['lineno']=782;
						if ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['len'](s);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_326_err){if (!$p['isinstance']($pyjs_dbg_326_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_326_err);}throw $pyjs_dbg_326_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_327_err){if (!$p['isinstance']($pyjs_dbg_327_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_327_err);}throw $pyjs_dbg_327_err;
}})()) {
							$pyjs['track']['lineno']=783;
							$pyjs['__active_exception_stack__'] = null;
							throw ((function(){try{try{$pyjs['in_try_except'] += 1;
							return $p['TypeError']('Odd-length string');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_328_err){if (!$p['isinstance']($pyjs_dbg_328_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_328_err);}throw $pyjs_dbg_328_err;
}})());
						}
						$pyjs['track']['lineno']=784;
						$pyjs['track']['lineno']=784;
						var $pyjs__ret = iterlist;
						$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
						return $pyjs__ret;
					} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
				}
				$pyjs['track']['lineno']=785;
				s = $p['__getslice'](s, 2, null);
			}
			$pyjs['track']['lineno']=786;
			$pyjs['track']['lineno']=786;
			var $pyjs__ret = iterlist;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		};
		pairs_gen['__name__'] = 'pairs_gen';

		pairs_gen['__bind_type__'] = 0;
		pairs_gen['__args__'] = [null,null,['s']];
		$pyjs['track']['lineno']=788;
		$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
		$iter17_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
		return (function(){try{try{$pyjs['in_try_except'] += 1;
		return pairs_gen(t);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_330_err){if (!$p['isinstance']($pyjs_dbg_330_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_330_err);}throw $pyjs_dbg_330_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_331_err){if (!$p['isinstance']($pyjs_dbg_331_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_331_err);}throw $pyjs_dbg_331_err;
}})();
		$iter17_nextval=$p['__iter_prepare']($iter17_iter,false);
		while (typeof($p['__wrapped_next']($iter17_nextval)['$nextval']) != 'undefined') {
			var $tupleassign6 = (function(){try{try{$pyjs['in_try_except'] += 1;
		return $p['__ass_unpack']($iter17_nextval['$nextval'], 2, null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_329_err){if (!$p['isinstance']($pyjs_dbg_329_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_329_err);}throw $pyjs_dbg_329_err;
}})();
			a = $tupleassign6[0];
			b = $tupleassign6[1];
			$pyjs['track']['lineno']=789;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](($p['bool']($or29=($p['cmp'](a, 0) == -1))?$or29:($p['cmp'](b, 0) == -1)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_332_err){if (!$p['isinstance']($pyjs_dbg_332_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_332_err);}throw $pyjs_dbg_332_err;
}})()) {
				$pyjs['track']['lineno']=790;
				$pyjs['__active_exception_stack__'] = null;
				throw ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['TypeError']('Non-hexadecimal digit found');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_333_err){if (!$p['isinstance']($pyjs_dbg_333_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_333_err);}throw $pyjs_dbg_333_err;
}})());
			}
			$pyjs['track']['lineno']=791;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return result['append']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['chr']($p['__op_add']($add115=(a)<<(4),$add116=b));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_334_err){if (!$p['isinstance']($pyjs_dbg_334_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_334_err);}throw $pyjs_dbg_334_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_335_err){if (!$p['isinstance']($pyjs_dbg_335_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_335_err);}throw $pyjs_dbg_335_err;
}})();
		}
		if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
			$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
			$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
		}
		$pyjs['track']['module']='binascii';
		$pyjs['track']['lineno']=792;
		$pyjs['track']['lineno']=792;
		var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
		return ''['join'](result);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_336_err){if (!$p['isinstance']($pyjs_dbg_336_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_336_err);}throw $pyjs_dbg_336_err;
}})();
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['a2b_hex']['__name__'] = 'a2b_hex';

	$m['a2b_hex']['__bind_type__'] = 0;
	$m['a2b_hex']['__args__'] = [null,null,['t']];
	$pyjs['track']['lineno']=795;
	$m['unhexlify'] = $m['a2b_hex'];
	return this;
}; /* end binascii */


/* end module: binascii */


