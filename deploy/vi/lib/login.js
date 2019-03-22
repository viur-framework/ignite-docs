/* start module: login */
$pyjs['loaded_modules']['login'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['login']['__was_initialized__']) return $pyjs['loaded_modules']['login'];
	var $m = $pyjs['loaded_modules']['login'];
	$m['__repr__'] = function() { return '<module: login>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'login';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$m.__track_lines__[1] = 'login.py, line 1:\n    #-*- coding: utf-8 -*-';
	$m.__track_lines__[2] = 'login.py, line 2:\n    import html5, re, json';
	$m.__track_lines__[4] = 'login.py, line 4:\n    from network import NetworkService, DeferredCall';
	$m.__track_lines__[5] = 'login.py, line 5:\n    from i18n import translate';
	$m.__track_lines__[6] = 'login.py, line 6:\n    from event import EventDispatcher';
	$m.__track_lines__[7] = 'login.py, line 7:\n    from config import conf';
	$m.__track_lines__[8] = 'login.py, line 8:\n    from priorityqueue import loginHandlerSelector';
	$m.__track_lines__[9] = 'login.py, line 9:\n    from screen import Screen';
	$m.__track_lines__[11] = 'login.py, line 11:\n    class LoginInputField(html5.Input):';
	$m.__track_lines__[13] = 'login.py, line 13:\n    def __init__(self, notifier, *args, **kwargs):';
	$m.__track_lines__[14] = 'login.py, line 14:\n    super(LoginInputField, self).__init__(*args, **kwargs)';
	$m.__track_lines__[15] = 'login.py, line 15:\n    self.addClass("vi-login-input")';
	$m.__track_lines__[16] = 'login.py, line 16:\n    self.sinkEvent("onKeyPress")';
	$m.__track_lines__[18] = 'login.py, line 18:\n    self.onKeyPressEvent = EventDispatcher("keyPress")';
	$m.__track_lines__[19] = 'login.py, line 19:\n    self.onKeyPressEvent.register(notifier)';
	$m.__track_lines__[21] = 'login.py, line 21:\n    def onKeyPress(self, event):';
	$m.__track_lines__[22] = 'login.py, line 22:\n    self.onKeyPressEvent.fire(event)';
	$m.__track_lines__[25] = 'login.py, line 25:\n    class BaseLoginHandler(html5.Li):';
	$m.__track_lines__[26] = 'login.py, line 26:\n    def __init__(self, loginScreen, *args, **kwargs):';
	$m.__track_lines__[27] = 'login.py, line 27:\n    assert isinstance(loginScreen, LoginScreen)';
	$m.__track_lines__[28] = 'login.py, line 28:\n    super(BaseLoginHandler, self).__init__(*args, **kwargs)';
	$m.__track_lines__[30] = 'login.py, line 30:\n    self.loginScreen = loginScreen';
	$m.__track_lines__[32] = 'login.py, line 32:\n    if not "cssname" in dir(self):';
	$m.__track_lines__[33] = 'login.py, line 33:\n    self.cssname = self.__class__.__name__.lower()';
	$m.__track_lines__[35] = 'login.py, line 35:\n    self.addClass("vi-login-handler")';
	$m.__track_lines__[36] = 'login.py, line 36:\n    self.addClass("vi-login-handler-%s" % self.cssname)';
	$m.__track_lines__[37] = 'login.py, line 37:\n    self.sinkEvent("onClick")';
	$m.__track_lines__[39] = 'login.py, line 39:\n    self.loginScreen.loginMethodSelector.appendChild(self)';
	$m.__track_lines__[41] = 'login.py, line 41:\n    self.appendChild(html5.TextNode(translate("vi.login.handler.%s" % self.cssname)))';
	$m.__track_lines__[43] = 'login.py, line 43:\n    self.mask = html5.Div()';
	$m.__track_lines__[44] = 'login.py, line 44:\n    self.mask.addClass("vi-login-mask")';
	$m.__track_lines__[45] = 'login.py, line 45:\n    self.mask.addClass("vi-login-mask-%s" % self.cssname)';
	$m.__track_lines__[46] = 'login.py, line 46:\n    loginScreen.dialog.appendChild(self.mask)';
	$m.__track_lines__[48] = 'login.py, line 48:\n    def onClick(self, event):';
	$m.__track_lines__[49] = 'login.py, line 49:\n    self.loginScreen.selectHandler(self)';
	$m.__track_lines__[51] = 'login.py, line 51:\n    def enable(self):';
	$m.__track_lines__[52] = 'login.py, line 52:\n    self.addClass("is-active")';
	$m.__track_lines__[53] = 'login.py, line 53:\n    self.mask.show()';
	$m.__track_lines__[55] = 'login.py, line 55:\n    def disable(self):';
	$m.__track_lines__[56] = 'login.py, line 56:\n    self.removeClass("is-active")';
	$m.__track_lines__[57] = 'login.py, line 57:\n    self.mask.hide()';
	$m.__track_lines__[59] = 'login.py, line 59:\n    def lock(self):';
	$m.__track_lines__[60] = 'login.py, line 60:\n    self.loginScreen.lock()';
	$m.__track_lines__[62] = 'login.py, line 62:\n    def unlock(self):';
	$m.__track_lines__[63] = 'login.py, line 63:\n    self.loginScreen.unlock()';
	$m.__track_lines__[65] = 'login.py, line 65:\n    def login(self):';
	$m.__track_lines__[66] = 'login.py, line 66:\n    self.reset()';
	$m.__track_lines__[67] = 'login.py, line 67:\n    self.loginScreen.invoke()';
	$m.__track_lines__[69] = 'login.py, line 69:\n    def reset(self):';
	$m.__track_lines__[70] = 'login.py, line 70:\n    pass';
	$m.__track_lines__[72] = 'login.py, line 72:\n    class UserPasswordLoginHandler(BaseLoginHandler):';
	$m.__track_lines__[73] = 'login.py, line 73:\n    cssname = "userpassword"';
	$m.__track_lines__[75] = 'login.py, line 75:\n    def __init__(self, loginScreen, *args, **kwargs):';
	$m.__track_lines__[76] = 'login.py, line 76:\n    super(UserPasswordLoginHandler, self).__init__(loginScreen, *args, **kwargs)';
	$m.__track_lines__[79] = 'login.py, line 79:\n    self.pwform = html5.Form()';
	$m.__track_lines__[80] = 'login.py, line 80:\n    self.mask.appendChild(self.pwform)';
	$m.__track_lines__[82] = 'login.py, line 82:\n    self.username = LoginInputField(self)';
	$m.__track_lines__[83] = 'login.py, line 83:\n    self.username["name"] = "username"';
	$m.__track_lines__[84] = 'login.py, line 84:\n    self.username["placeholder"] = translate("Username")';
	$m.__track_lines__[85] = 'login.py, line 85:\n    self.pwform.appendChild(self.username)';
	$m.__track_lines__[87] = 'login.py, line 87:\n    self.password = LoginInputField(self)';
	$m.__track_lines__[88] = 'login.py, line 88:\n    self.password["type"] = "password"';
	$m.__track_lines__[89] = 'login.py, line 89:\n    self.password["name"] = "password"';
	$m.__track_lines__[90] = 'login.py, line 90:\n    self.password["placeholder"] = translate("Password")';
	$m.__track_lines__[91] = 'login.py, line 91:\n    self.pwform.appendChild(self.password)';
	$m.__track_lines__[93] = 'login.py, line 93:\n    self.loginBtn = html5.ext.Button(translate("Login"), callback=self.onLoginClick)';
	$m.__track_lines__[94] = 'login.py, line 94:\n    self.loginBtn.addClass("vi-login-btn")';
	$m.__track_lines__[95] = 'login.py, line 95:\n    self.pwform.appendChild(self.loginBtn)';
	$m.__track_lines__[98] = 'login.py, line 98:\n    self.otpform = html5.Form()';
	$m.__track_lines__[99] = 'login.py, line 99:\n    self.otpform.hide()';
	$m.__track_lines__[100] = 'login.py, line 100:\n    self.mask.appendChild(self.otpform)';
	$m.__track_lines__[102] = 'login.py, line 102:\n    self.otp = LoginInputField(self)';
	$m.__track_lines__[103] = 'login.py, line 103:\n    self.otp["name"] = "otp"';
	$m.__track_lines__[104] = 'login.py, line 104:\n    self.otp["placeholder"] = translate("One Time Password")';
	$m.__track_lines__[105] = 'login.py, line 105:\n    self.otpform.appendChild(self.otp)';
	$m.__track_lines__[107] = 'login.py, line 107:\n    self.verifyBtn = html5.ext.Button(translate("Verify"), callback=self.onVerifyClick)';
	$m.__track_lines__[108] = 'login.py, line 108:\n    self.otpform.appendChild(self.verifyBtn)';
	$m.__track_lines__[110] = 'login.py, line 110:\n    def onKeyPress(self, event):';
	$m.__track_lines__[111] = 'login.py, line 111:\n    if event.keyCode == 13:';
	$m.__track_lines__[112] = 'login.py, line 112:\n    if html5.utils.doesEventHitWidgetOrChildren(event, self.username):';
	$m.__track_lines__[113] = 'login.py, line 113:\n    if self.username["value"]:';
	$m.__track_lines__[114] = 'login.py, line 114:\n    self.password.element.focus()';
	$m.__track_lines__[116] = 'login.py, line 116:\n    if self.username["value"] and self.password["value"]:';
	$m.__track_lines__[117] = 'login.py, line 117:\n    self.onLoginClick()';
	$m.__track_lines__[119] = 'login.py, line 119:\n    if self.otp["value"]:';
	$m.__track_lines__[120] = 'login.py, line 120:\n    self.onVerifyClick()';
	$m.__track_lines__[122] = 'login.py, line 122:\n    event.stopPropagation()';
	$m.__track_lines__[123] = 'login.py, line 123:\n    event.preventDefault()';
	$m.__track_lines__[125] = 'login.py, line 125:\n    def onLoginClick(self, sender = None):';
	$m.__track_lines__[126] = 'login.py, line 126:\n    if not (self.username["value"] and self.password["value"]):';
	$m.__track_lines__[127] = 'login.py, line 127:\n    return # fixme';
	$m.__track_lines__[129] = 'login.py, line 129:\n    self.loginBtn["disabled"] = True';
	$m.__track_lines__[130] = 'login.py, line 130:\n    self.lock()';
	$m.__track_lines__[132] = 'login.py, line 132:\n    NetworkService.request("user", "auth_userpassword/login",';
	$m.__track_lines__[139] = 'login.py, line 139:\n    def doLoginSuccess(self, req):';
	$m.__track_lines__[140] = 'login.py, line 140:\n    self.unlock()';
	$m.__track_lines__[141] = 'login.py, line 141:\n    self.loginBtn["disabled"] = False';
	$m.__track_lines__[143] = 'login.py, line 143:\n    res = re.search("JSON\\(\\((.*)\\)\\)", req.result)';
	$m.__track_lines__[144] = 'login.py, line 144:\n    if res:';
	$m.__track_lines__[145] = 'login.py, line 145:\n    print("RESULT >%s<" % res.group(1))';
	$m.__track_lines__[146] = 'login.py, line 146:\n    answ = json.loads(res.group(1))';
	$m.__track_lines__[148] = 'login.py, line 148:\n    if answ == "OKAY":';
	$m.__track_lines__[149] = 'login.py, line 149:\n    self.login()';
	$m.__track_lines__[151] = 'login.py, line 151:\n    self.pwform.hide()';
	$m.__track_lines__[152] = 'login.py, line 152:\n    self.otpform.show()';
	$m.__track_lines__[153] = 'login.py, line 153:\n    self.otp.focus()';
	$m.__track_lines__[155] = 'login.py, line 155:\n    self.password.focus()';
	$m.__track_lines__[157] = 'login.py, line 157:\n    print("Cannot read valid response from:")';
	$m.__track_lines__[158] = 'login.py, line 158:\n    print("---")';
	$m.__track_lines__[159] = 'login.py, line 159:\n    print(req.result)';
	$m.__track_lines__[160] = 'login.py, line 160:\n    print("---")';
	$m.__track_lines__[162] = 'login.py, line 162:\n    def doLoginFailure(self, *args, **kwargs):';
	$m.__track_lines__[163] = 'login.py, line 163:\n    alert("Fail")';
	$m.__track_lines__[165] = 'login.py, line 165:\n    def onVerifyClick(self, sender = None):';
	$m.__track_lines__[166] = 'login.py, line 166:\n    if not self.otp["value"]:';
	$m.__track_lines__[167] = 'login.py, line 167:\n    return # fixme';
	$m.__track_lines__[169] = 'login.py, line 169:\n    self.verifyBtn["disabled"] = True';
	$m.__track_lines__[170] = 'login.py, line 170:\n    self.lock()';
	$m.__track_lines__[172] = 'login.py, line 172:\n    NetworkService.request("user", "f2_otp2factor/otp",';
	$m.__track_lines__[178] = 'login.py, line 178:\n    def doVerifySuccess(self, req):';
	$m.__track_lines__[179] = 'login.py, line 179:\n    self.unlock()';
	$m.__track_lines__[180] = 'login.py, line 180:\n    self.verifyBtn["disabled"] = False';
	$m.__track_lines__[182] = 'login.py, line 182:\n    if NetworkService.isOkay(req):';
	$m.__track_lines__[183] = 'login.py, line 183:\n    self.login()';
	$m.__track_lines__[185] = 'login.py, line 185:\n    self.otp["value"] = ""';
	$m.__track_lines__[186] = 'login.py, line 186:\n    self.otp.focus()';
	$m.__track_lines__[188] = 'login.py, line 188:\n    def doVerifyFailure(self, *args, **kwargs):';
	$m.__track_lines__[189] = 'login.py, line 189:\n    self.reset()';
	$m.__track_lines__[190] = 'login.py, line 190:\n    self.enable()';
	$m.__track_lines__[192] = 'login.py, line 192:\n    def reset(self):';
	$m.__track_lines__[193] = 'login.py, line 193:\n    self.loginBtn["disabled"] = False';
	$m.__track_lines__[194] = 'login.py, line 194:\n    self.verifyBtn["disabled"] = False';
	$m.__track_lines__[196] = 'login.py, line 196:\n    self.otp["value"] = ""';
	$m.__track_lines__[197] = 'login.py, line 197:\n    self.username["value"] = ""';
	$m.__track_lines__[198] = 'login.py, line 198:\n    self.password["value"] = ""';
	$m.__track_lines__[200] = 'login.py, line 200:\n    def enable(self):';
	$m.__track_lines__[201] = 'login.py, line 201:\n    self.pwform.show()';
	$m.__track_lines__[202] = 'login.py, line 202:\n    self.otpform.hide()';
	$m.__track_lines__[204] = 'login.py, line 204:\n    super(UserPasswordLoginHandler, self).enable()';
	$m.__track_lines__[205] = 'login.py, line 205:\n    DeferredCall(self.focusLaterIdiot)';
	$m.__track_lines__[207] = 'login.py, line 207:\n    def focusLaterIdiot(self):';
	$m.__track_lines__[208] = 'login.py, line 208:\n    self.username.focus()';
	$m.__track_lines__[211] = 'login.py, line 210:\n    @staticmethod ... def canHandle(method, secondFactor):';
	$m.__track_lines__[212] = 'login.py, line 212:\n    return method == "X-VIUR-AUTH-User-Password"';
	$m.__track_lines__[214] = 'login.py, line 214:\n    loginHandlerSelector.insert(0, UserPasswordLoginHandler.canHandle, UserPasswordLoginHandler)';
	$m.__track_lines__[217] = 'login.py, line 217:\n    class GoogleAccountLoginHandler(BaseLoginHandler):';
	$m.__track_lines__[218] = 'login.py, line 218:\n    cssname = "googleaccount"';
	$m.__track_lines__[220] = 'login.py, line 220:\n    def __init__(self, loginScreen, *args, **kwargs):';
	$m.__track_lines__[221] = 'login.py, line 221:\n    super(GoogleAccountLoginHandler, self).__init__(loginScreen, *args, **kwargs)';
	$m.__track_lines__[223] = 'login.py, line 223:\n    self.loginBtn = html5.ext.Button(translate("Login with Google"), callback=self.onLoginClick)';
	$m.__track_lines__[224] = 'login.py, line 224:\n    self.loginBtn.addClass("vi-login-btn")';
	$m.__track_lines__[225] = 'login.py, line 225:\n    self.mask.appendChild(self.loginBtn)';
	$m.__track_lines__[227] = 'login.py, line 227:\n    def onLoginClick(self, sender = None):';
	$m.__track_lines__[228] = 'login.py, line 228:\n    self.lock()';
	$m.__track_lines__[229] = 'login.py, line 229:\n    eval("window.top.location = \\"/vi/user/auth_googleaccount/login\\"")';
	$m.__track_lines__[232] = 'login.py, line 231:\n    @staticmethod ... def canHandle(method, secondFactor):';
	$m.__track_lines__[233] = 'login.py, line 233:\n    return method == "X-VIUR-AUTH-Google-Account"';
	$m.__track_lines__[235] = 'login.py, line 235:\n    loginHandlerSelector.insert(0, GoogleAccountLoginHandler.canHandle, GoogleAccountLoginHandler)';
	$m.__track_lines__[238] = 'login.py, line 238:\n    class LoginScreen(Screen):';
	$m.__track_lines__[240] = 'login.py, line 240:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[241] = 'login.py, line 241:\n    super(LoginScreen, self).__init__(*args, **kwargs)';
	$m.__track_lines__[242] = 'login.py, line 242:\n    self.addClass("vi-login")';
	$m.__track_lines__[245] = 'login.py, line 245:\n    self.dialog = html5.Div()';
	$m.__track_lines__[246] = 'login.py, line 246:\n    self.dialog.addClass("vi-login-dialog")';
	$m.__track_lines__[247] = 'login.py, line 247:\n    self.appendChild(self.dialog)';
	$m.__track_lines__[250] = 'login.py, line 250:\n    header = html5.Div()';
	$m.__track_lines__[251] = 'login.py, line 251:\n    header.addClass("vi-login-header")';
	$m.__track_lines__[252] = 'login.py, line 252:\n    self.dialog.appendChild(header)';
	$m.__track_lines__[255] = 'login.py, line 255:\n    h1 = html5.H1()';
	$m.__track_lines__[256] = 'login.py, line 256:\n    h1.addClass("vi-login-headline")';
	$m.__track_lines__[257] = 'login.py, line 257:\n    h1.appendChild(html5.TextNode(translate("vi.login.title")))';
	$m.__track_lines__[258] = 'login.py, line 258:\n    header.appendChild(h1)';
	$m.__track_lines__[261] = 'login.py, line 261:\n    img = html5.Img()';
	$m.__track_lines__[262] = 'login.py, line 262:\n    img.addClass("vi-login-logo")';
	$m.__track_lines__[263] = 'login.py, line 263:\n    img["src"] = "login-logo.png"';
	$m.__track_lines__[264] = 'login.py, line 264:\n    header.appendChild(img)';
	$m.__track_lines__[268] = 'login.py, line 268:\n    self.loginMethodSelector = html5.Ul()';
	$m.__track_lines__[269] = 'login.py, line 269:\n    self.loginMethodSelector.addClass("vi-login-method")';
	$m.__track_lines__[270] = 'login.py, line 270:\n    self.dialog.appendChild(self.loginMethodSelector)';
	$m.__track_lines__[272] = 'login.py, line 272:\n    self.haveLoginHandlers = False';
	$m.__track_lines__[275] = 'login.py, line 275:\n    def invoke(self, logout = False):';
	$m.__track_lines__[276] = 'login.py, line 276:\n    self.show()';
	$m.__track_lines__[277] = 'login.py, line 277:\n    self.lock()';
	$m.__track_lines__[280] = 'login.py, line 280:\n    if logout:';
	$m.__track_lines__[281] = 'login.py, line 281:\n    NetworkService.request("user", "logout",';
	$m.__track_lines__[285] = 'login.py, line 285:\n    return';
	$m.__track_lines__[287] = 'login.py, line 287:\n    conf["currentUser"] = None';
	$m.__track_lines__[289] = 'login.py, line 289:\n    if not self.haveLoginHandlers:';
	$m.__track_lines__[290] = 'login.py, line 290:\n    NetworkService.request("user", "getAuthMethods",';
	$m.__track_lines__[294] = 'login.py, line 294:\n    return';
	$m.__track_lines__[297] = 'login.py, line 297:\n    NetworkService.request( "user", "view/self",';
	$m.__track_lines__[302] = 'login.py, line 302:\n    def onLogoutSuccess(self, *args, **kwargs):';
	$m.__track_lines__[303] = 'login.py, line 303:\n    conf["currentUser"] = None';
	$m.__track_lines__[304] = 'login.py, line 304:\n    self.invoke()';
	$m.__track_lines__[306] = 'login.py, line 306:\n    def doShowLogin(self, *args, **kwargs):';
	$m.__track_lines__[307] = 'login.py, line 307:\n    self.unlock()';
	$m.__track_lines__[308] = 'login.py, line 308:\n    self.show()';
	$m.__track_lines__[309] = 'login.py, line 309:\n    self.selectHandler()';
	$m.__track_lines__[311] = 'login.py, line 311:\n    def doSkipLogin(self, req):';
	$m.__track_lines__[312] = 'login.py, line 312:\n    answ = NetworkService.decode(req)';
	$m.__track_lines__[313] = 'login.py, line 313:\n    if answ.get("action") != "view":';
	$m.__track_lines__[314] = 'login.py, line 314:\n    self.doShowLogin()';
	$m.__track_lines__[315] = 'login.py, line 315:\n    return';
	$m.__track_lines__[317] = 'login.py, line 317:\n    conf["currentUser"] = answ["values"]';
	$m.__track_lines__[318] = 'login.py, line 318:\n    if not any([x in conf["currentUser"].get("access", []) for x in ["admin", "root"]]):';
	$m.__track_lines__[319] = 'login.py, line 319:\n    self.reset()';
	$m.__track_lines__[320] = 'login.py, line 320:\n    self.loginScreen.redirectNoAdmin()';
	$m.__track_lines__[322] = 'login.py, line 322:\n    print("User already logged in")';
	$m.__track_lines__[323] = 'login.py, line 323:\n    conf["theApp"].admin()';
	$m.__track_lines__[325] = 'login.py, line 325:\n    def onGetAuthMethodsSuccess(self, req):';
	$m.__track_lines__[326] = 'login.py, line 326:\n    answ = NetworkService.decode(req)';
	$m.__track_lines__[328] = 'login.py, line 328:\n    methods = []';
	$m.__track_lines__[329] = 'login.py, line 329:\n    for method in answ:';
	$m.__track_lines__[330] = 'login.py, line 330:\n    handler = loginHandlerSelector.select(method[0], method[1])';
	$m.__track_lines__[333] = 'login.py, line 333:\n    if not any([c.__class__.__name__ == handler.__name__ for c in self.loginMethodSelector._children]):';
	$m.__track_lines__[334] = 'login.py, line 334:\n    handler(self)';
	$m.__track_lines__[336] = 'login.py, line 336:\n    self.haveLoginHandlers = True';
	$m.__track_lines__[337] = 'login.py, line 337:\n    self.invoke()';
	$m.__track_lines__[339] = 'login.py, line 339:\n    def selectHandler(self, handler = None):';
	$m.__track_lines__[340] = 'login.py, line 340:\n    for h in self.loginMethodSelector._children:';
	$m.__track_lines__[341] = 'login.py, line 341:\n    if handler is None or h is handler:';
	$m.__track_lines__[342] = 'login.py, line 342:\n    h.enable()';
	$m.__track_lines__[343] = 'login.py, line 343:\n    handler = h';
	$m.__track_lines__[345] = 'login.py, line 345:\n    h.disable()';
	$m.__track_lines__[347] = 'login.py, line 347:\n    def onGetAuthMethodsFailure(self, *args, **kwargs):';
	$m.__track_lines__[348] = 'login.py, line 348:\n    alert("Fail")';
	$m.__track_lines__[350] = 'login.py, line 350:\n    def redirectNoAdmin(self):';
	$m.__track_lines__[351] = 'login.py, line 351:\n    eval("window.top.location = \\"/\\"")';


	$pyjs['track']['module']='login';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=2;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['html5'] = $p['___import___']('html5', null);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['re'] = $p['___import___']('re', null);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['json'] = $p['___import___']('json', null);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=4;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['NetworkService'] = $p['___import___']('network.NetworkService', null, null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['DeferredCall'] = $p['___import___']('network.DeferredCall', null, null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=5;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['translate'] = $p['___import___']('i18n.translate', null, null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=6;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['EventDispatcher'] = $p['___import___']('event.EventDispatcher', null, null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=7;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['conf'] = $p['___import___']('config.conf', null, null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=8;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['loginHandlerSelector'] = $p['___import___']('priorityqueue.loginHandlerSelector', null, null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=9;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Screen'] = $p['___import___']('screen.Screen', null, null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=11;
	$m['LoginInputField'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'login';
		$pyjs['track']['lineno']=13;
		$method = $pyjs__bind_method2('__init__', function(notifier) {
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
				notifier = arguments[1];
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
				if (typeof notifier != 'undefined') {
					if (notifier !== null && typeof notifier['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = notifier;
						notifier = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}

			$pyjs['track']={'module':'login', 'lineno':13};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='login';
			$pyjs['track']['lineno']=13;
			$pyjs['track']['lineno']=14;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['LoginInputField'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs['track']['lineno']=15;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['addClass']('vi-login-input');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			$pyjs['track']['lineno']=16;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['sinkEvent']('onKeyPress');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
			$pyjs['track']['lineno']=18;
			self['onKeyPressEvent'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['EventDispatcher']('keyPress');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})();
			$pyjs['track']['lineno']=19;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['onKeyPressEvent']['register'](notifier);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['notifier']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=21;
		$method = $pyjs__bind_method2('onKeyPress', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'login', 'lineno':21};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='login';
			$pyjs['track']['lineno']=21;
			$pyjs['track']['lineno']=22;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['onKeyPressEvent']['fire'](event);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onKeyPress'] = $method;
		$pyjs['track']['lineno']=11;
		var $bases = new Array($p['getattr']($m['html5'], 'Input'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('LoginInputField', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=25;
	$m['BaseLoginHandler'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'login';
		$pyjs['track']['lineno']=26;
		$method = $pyjs__bind_method2('__init__', function(loginScreen) {
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
				loginScreen = arguments[1];
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
				if (typeof loginScreen != 'undefined') {
					if (loginScreen !== null && typeof loginScreen['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = loginScreen;
						loginScreen = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}

			$pyjs['track']={'module':'login', 'lineno':26};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='login';
			$pyjs['track']['lineno']=26;
			$pyjs['track']['lineno']=27;
			if (!( (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['isinstance'](loginScreen, (typeof LoginScreen == "undefined"?$m['LoginScreen']:LoginScreen));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})() )) {
			   throw $p['AssertionError']();
			 }
			$pyjs['track']['lineno']=28;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['BaseLoginHandler'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
			$pyjs['track']['lineno']=30;
			self['loginScreen'] = loginScreen;
			$pyjs['track']['lineno']=32;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dir'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})()['__contains__']('cssname')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})()) {
				$pyjs['track']['lineno']=33;
				self['cssname'] = (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['__class__']['__name__']['lower']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
			}
			$pyjs['track']['lineno']=35;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['addClass']('vi-login-handler');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})();
			$pyjs['track']['lineno']=36;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['addClass']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('vi-login-handler-%s', $p['getattr'](self, 'cssname'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})();
			$pyjs['track']['lineno']=37;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['sinkEvent']('onClick');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})();
			$pyjs['track']['lineno']=39;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['loginScreen']['loginMethodSelector']['appendChild'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})();
			$pyjs['track']['lineno']=41;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['TextNode']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('vi.login.handler.%s', $p['getattr'](self, 'cssname'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
			$pyjs['track']['lineno']=43;
			self['mask'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Div']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})();
			$pyjs['track']['lineno']=44;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['mask']['addClass']('vi-login-mask');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})();
			$pyjs['track']['lineno']=45;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['mask']['addClass']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('vi-login-mask-%s', $p['getattr'](self, 'cssname'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})();
			$pyjs['track']['lineno']=46;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return loginScreen['dialog']['appendChild']($p['getattr'](self, 'mask'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['loginScreen']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=48;
		$method = $pyjs__bind_method2('onClick', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}

			$pyjs['track']={'module':'login', 'lineno':48};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='login';
			$pyjs['track']['lineno']=48;
			$pyjs['track']['lineno']=49;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['loginScreen']['selectHandler'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onClick'] = $method;
		$pyjs['track']['lineno']=51;
		$method = $pyjs__bind_method2('enable', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'login', 'lineno':51};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='login';
			$pyjs['track']['lineno']=51;
			$pyjs['track']['lineno']=52;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['addClass']('is-active');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})();
			$pyjs['track']['lineno']=53;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['mask']['show']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['enable'] = $method;
		$pyjs['track']['lineno']=55;
		$method = $pyjs__bind_method2('disable', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'login', 'lineno':55};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='login';
			$pyjs['track']['lineno']=55;
			$pyjs['track']['lineno']=56;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['removeClass']('is-active');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
			$pyjs['track']['lineno']=57;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['mask']['hide']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['disable'] = $method;
		$pyjs['track']['lineno']=59;
		$method = $pyjs__bind_method2('lock', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'login', 'lineno':59};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='login';
			$pyjs['track']['lineno']=59;
			$pyjs['track']['lineno']=60;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['loginScreen']['lock']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['lock'] = $method;
		$pyjs['track']['lineno']=62;
		$method = $pyjs__bind_method2('unlock', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'login', 'lineno':62};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='login';
			$pyjs['track']['lineno']=62;
			$pyjs['track']['lineno']=63;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['loginScreen']['unlock']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['unlock'] = $method;
		$pyjs['track']['lineno']=65;
		$method = $pyjs__bind_method2('login', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'login', 'lineno':65};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='login';
			$pyjs['track']['lineno']=65;
			$pyjs['track']['lineno']=66;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['reset']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})();
			$pyjs['track']['lineno']=67;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['loginScreen']['invoke']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['login'] = $method;
		$pyjs['track']['lineno']=69;
		$method = $pyjs__bind_method2('reset', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'login', 'lineno':69};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='login';
			$pyjs['track']['lineno']=69;
			$pyjs['track']['lineno']=70;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['reset'] = $method;
		$pyjs['track']['lineno']=25;
		var $bases = new Array($p['getattr']($m['html5'], 'Li'));
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('BaseLoginHandler', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=72;
	$m['UserPasswordLoginHandler'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'login';
		$pyjs['track']['lineno']=73;
		$cls_definition['cssname'] = 'userpassword';
		$pyjs['track']['lineno']=75;
		$method = $pyjs__bind_method2('__init__', function(loginScreen) {
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
				loginScreen = arguments[1];
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
				if (typeof loginScreen != 'undefined') {
					if (loginScreen !== null && typeof loginScreen['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = loginScreen;
						loginScreen = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}

			$pyjs['track']={'module':'login', 'lineno':75};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='login';
			$pyjs['track']['lineno']=75;
			$pyjs['track']['lineno']=76;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['UserPasswordLoginHandler'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})(), '__init__', args, kwargs, [{}, loginScreen]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})();
			$pyjs['track']['lineno']=79;
			self['pwform'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Form']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})();
			$pyjs['track']['lineno']=80;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['mask']['appendChild']($p['getattr'](self, 'pwform'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})();
			$pyjs['track']['lineno']=82;
			self['username'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['LoginInputField'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})();
			$pyjs['track']['lineno']=83;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'username')['__setitem__']('name', 'username');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})();
			$pyjs['track']['lineno']=84;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'username')['__setitem__']('placeholder', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Username');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})();
			$pyjs['track']['lineno']=85;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['pwform']['appendChild']($p['getattr'](self, 'username'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})();
			$pyjs['track']['lineno']=87;
			self['password'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['LoginInputField'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})();
			$pyjs['track']['lineno']=88;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'password')['__setitem__']('type', 'password');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})();
			$pyjs['track']['lineno']=89;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'password')['__setitem__']('name', 'password');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})();
			$pyjs['track']['lineno']=90;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'password')['__setitem__']('placeholder', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Password');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})();
			$pyjs['track']['lineno']=91;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['pwform']['appendChild']($p['getattr'](self, 'password'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})();
			$pyjs['track']['lineno']=93;
			self['loginBtn'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['html5']['ext'], 'Button', null, null, [{'callback':$p['getattr'](self, 'onLoginClick')}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Login');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})();
			$pyjs['track']['lineno']=94;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['loginBtn']['addClass']('vi-login-btn');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})();
			$pyjs['track']['lineno']=95;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['pwform']['appendChild']($p['getattr'](self, 'loginBtn'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})();
			$pyjs['track']['lineno']=98;
			self['otpform'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Form']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})();
			$pyjs['track']['lineno']=99;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['otpform']['hide']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})();
			$pyjs['track']['lineno']=100;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['mask']['appendChild']($p['getattr'](self, 'otpform'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})();
			$pyjs['track']['lineno']=102;
			self['otp'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['LoginInputField'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})();
			$pyjs['track']['lineno']=103;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'otp')['__setitem__']('name', 'otp');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})();
			$pyjs['track']['lineno']=104;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'otp')['__setitem__']('placeholder', (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('One Time Password');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})();
			$pyjs['track']['lineno']=105;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['otpform']['appendChild']($p['getattr'](self, 'otp'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})();
			$pyjs['track']['lineno']=107;
			self['verifyBtn'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['html5']['ext'], 'Button', null, null, [{'callback':$p['getattr'](self, 'onVerifyClick')}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Verify');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})();
			$pyjs['track']['lineno']=108;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['otpform']['appendChild']($p['getattr'](self, 'verifyBtn'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['loginScreen']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=110;
		$method = $pyjs__bind_method2('onKeyPress', function(event) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $and1,$and2;
			$pyjs['track']={'module':'login', 'lineno':110};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='login';
			$pyjs['track']['lineno']=110;
			$pyjs['track']['lineno']=111;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']($p['op_eq']($p['getattr'](event, 'keyCode'), 13));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})()) {
				$pyjs['track']['lineno']=112;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['utils']['doesEventHitWidgetOrChildren'](event, $p['getattr'](self, 'username'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})()) {
					$pyjs['track']['lineno']=113;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['getattr'](self, 'username')['__getitem__']('value'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})()) {
						$pyjs['track']['lineno']=114;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return self['password']['element']['focus']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})();
					}
				}
				else if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['utils']['doesEventHitWidgetOrChildren'](event, $p['getattr'](self, 'password'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})()) {
					$pyjs['track']['lineno']=116;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool'](($p['bool']($and1=$p['getattr'](self, 'username')['__getitem__']('value'))?$p['getattr'](self, 'password')['__getitem__']('value'):$and1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})()) {
						$pyjs['track']['lineno']=117;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return self['onLoginClick']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})();
					}
				}
				else if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['utils']['doesEventHitWidgetOrChildren'](event, $p['getattr'](self, 'otp'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})()) {
					$pyjs['track']['lineno']=119;
					if ((function(){try{try{$pyjs['in_try_except'] += 1;
						return $p['bool']($p['getattr'](self, 'otp')['__getitem__']('value'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})()) {
						$pyjs['track']['lineno']=120;
						(function(){try{try{$pyjs['in_try_except'] += 1;
						return self['onVerifyClick']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})();
					}
				}
				$pyjs['track']['lineno']=122;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return event['stopPropagation']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})();
				$pyjs['track']['lineno']=123;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return event['preventDefault']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onKeyPress'] = $method;
		$pyjs['track']['lineno']=125;
		$method = $pyjs__bind_method2('onLoginClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];
			var $and3,$and4;
			$pyjs['track']={'module':'login', 'lineno':125};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='login';
			$pyjs['track']['lineno']=125;
			$pyjs['track']['lineno']=126;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool'](($p['bool']($and3=$p['getattr'](self, 'username')['__getitem__']('value'))?$p['getattr'](self, 'password')['__getitem__']('value'):$and3)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})()) {
				$pyjs['track']['lineno']=127;
				$pyjs['track']['lineno']=127;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=129;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'loginBtn')['__setitem__']('disabled', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})();
			$pyjs['track']['lineno']=130;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['lock']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
}})();
			$pyjs['track']['lineno']=132;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'params':(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([['name', $p['getattr'](self, 'username')['__getitem__']('value')], ['password', $p['getattr'](self, 'password')['__getitem__']('value')]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})(), 'secure':true, 'successHandler':$p['getattr'](self, 'doLoginSuccess'), 'failureHandler':$p['getattr'](self, 'doLoginFailure')}, 'user', 'auth_userpassword/login']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onLoginClick'] = $method;
		$pyjs['track']['lineno']=139;
		$method = $pyjs__bind_method2('doLoginSuccess', function(req) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				req = arguments[1];
			}
			var res,answ;
			$pyjs['track']={'module':'login', 'lineno':139};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='login';
			$pyjs['track']['lineno']=139;
			$pyjs['track']['lineno']=140;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['unlock']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})();
			$pyjs['track']['lineno']=141;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'loginBtn')['__setitem__']('disabled', false);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_88_err){if (!$p['isinstance']($pyjs_dbg_88_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_88_err);}throw $pyjs_dbg_88_err;
}})();
			$pyjs['track']['lineno']=143;
			res = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['re']['search']('JSON\\(\\((.*)\\)\\)', $p['getattr'](req, 'result'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_89_err){if (!$p['isinstance']($pyjs_dbg_89_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_89_err);}throw $pyjs_dbg_89_err;
}})();
			$pyjs['track']['lineno']=144;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](res);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_90_err){if (!$p['isinstance']($pyjs_dbg_90_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_90_err);}throw $pyjs_dbg_90_err;
}})()) {
				$pyjs['track']['lineno']=145;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['printFunc']([(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['sprintf']('RESULT >%s<', (function(){try{try{$pyjs['in_try_except'] += 1;
				return res['group'](1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_91_err){if (!$p['isinstance']($pyjs_dbg_91_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_91_err);}throw $pyjs_dbg_91_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_92_err){if (!$p['isinstance']($pyjs_dbg_92_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_92_err);}throw $pyjs_dbg_92_err;
}})()], 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_93_err){if (!$p['isinstance']($pyjs_dbg_93_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_93_err);}throw $pyjs_dbg_93_err;
}})();
				$pyjs['track']['lineno']=146;
				answ = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['json']['loads']((function(){try{try{$pyjs['in_try_except'] += 1;
				return res['group'](1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_94_err){if (!$p['isinstance']($pyjs_dbg_94_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_94_err);}throw $pyjs_dbg_94_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_95_err){if (!$p['isinstance']($pyjs_dbg_95_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_95_err);}throw $pyjs_dbg_95_err;
}})();
				$pyjs['track']['lineno']=148;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq'](answ, 'OKAY'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_96_err){if (!$p['isinstance']($pyjs_dbg_96_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_96_err);}throw $pyjs_dbg_96_err;
}})()) {
					$pyjs['track']['lineno']=149;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['login']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_97_err){if (!$p['isinstance']($pyjs_dbg_97_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_97_err);}throw $pyjs_dbg_97_err;
}})();
				}
				else if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']($p['op_eq'](answ, 'X-VIUR-2FACTOR-TimeBasedOTP'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_98_err){if (!$p['isinstance']($pyjs_dbg_98_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_98_err);}throw $pyjs_dbg_98_err;
}})()) {
					$pyjs['track']['lineno']=151;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['pwform']['hide']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_99_err){if (!$p['isinstance']($pyjs_dbg_99_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_99_err);}throw $pyjs_dbg_99_err;
}})();
					$pyjs['track']['lineno']=152;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['otpform']['show']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_100_err){if (!$p['isinstance']($pyjs_dbg_100_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_100_err);}throw $pyjs_dbg_100_err;
}})();
					$pyjs['track']['lineno']=153;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['otp']['focus']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_101_err){if (!$p['isinstance']($pyjs_dbg_101_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_101_err);}throw $pyjs_dbg_101_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=155;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return self['password']['focus']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_102_err){if (!$p['isinstance']($pyjs_dbg_102_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_102_err);}throw $pyjs_dbg_102_err;
}})();
				}
			}
			else {
				$pyjs['track']['lineno']=157;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['printFunc'](['Cannot read valid response from:'], 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_103_err){if (!$p['isinstance']($pyjs_dbg_103_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_103_err);}throw $pyjs_dbg_103_err;
}})();
				$pyjs['track']['lineno']=158;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['printFunc'](['---'], 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_104_err){if (!$p['isinstance']($pyjs_dbg_104_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_104_err);}throw $pyjs_dbg_104_err;
}})();
				$pyjs['track']['lineno']=159;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['printFunc']([$p['getattr'](req, 'result')], 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_105_err){if (!$p['isinstance']($pyjs_dbg_105_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_105_err);}throw $pyjs_dbg_105_err;
}})();
				$pyjs['track']['lineno']=160;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['printFunc'](['---'], 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_106_err){if (!$p['isinstance']($pyjs_dbg_106_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_106_err);}throw $pyjs_dbg_106_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['req']]);
		$cls_definition['doLoginSuccess'] = $method;
		$pyjs['track']['lineno']=162;
		$method = $pyjs__bind_method2('doLoginFailure', function() {
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

			$pyjs['track']={'module':'login', 'lineno':162};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='login';
			$pyjs['track']['lineno']=162;
			$pyjs['track']['lineno']=163;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (typeof alert == "undefined"?$m['alert']:alert)('Fail');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_107_err){if (!$p['isinstance']($pyjs_dbg_107_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_107_err);}throw $pyjs_dbg_107_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['doLoginFailure'] = $method;
		$pyjs['track']['lineno']=165;
		$method = $pyjs__bind_method2('onVerifyClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];

			$pyjs['track']={'module':'login', 'lineno':165};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='login';
			$pyjs['track']['lineno']=165;
			$pyjs['track']['lineno']=166;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool']($p['getattr'](self, 'otp')['__getitem__']('value')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_108_err){if (!$p['isinstance']($pyjs_dbg_108_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_108_err);}throw $pyjs_dbg_108_err;
}})()) {
				$pyjs['track']['lineno']=167;
				$pyjs['track']['lineno']=167;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=169;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'verifyBtn')['__setitem__']('disabled', true);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_109_err){if (!$p['isinstance']($pyjs_dbg_109_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_109_err);}throw $pyjs_dbg_109_err;
}})();
			$pyjs['track']['lineno']=170;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['lock']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_110_err){if (!$p['isinstance']($pyjs_dbg_110_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_110_err);}throw $pyjs_dbg_110_err;
}})();
			$pyjs['track']['lineno']=172;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'params':(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['dict']([['otptoken', $p['getattr'](self, 'otp')['__getitem__']('value')]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_111_err){if (!$p['isinstance']($pyjs_dbg_111_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_111_err);}throw $pyjs_dbg_111_err;
}})(), 'secure':true, 'successHandler':$p['getattr'](self, 'doVerifySuccess'), 'failureHandler':$p['getattr'](self, 'doVerifyFailure')}, 'user', 'f2_otp2factor/otp']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_112_err){if (!$p['isinstance']($pyjs_dbg_112_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_112_err);}throw $pyjs_dbg_112_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onVerifyClick'] = $method;
		$pyjs['track']['lineno']=178;
		$method = $pyjs__bind_method2('doVerifySuccess', function(req) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				req = arguments[1];
			}

			$pyjs['track']={'module':'login', 'lineno':178};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='login';
			$pyjs['track']['lineno']=178;
			$pyjs['track']['lineno']=179;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['unlock']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_113_err){if (!$p['isinstance']($pyjs_dbg_113_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_113_err);}throw $pyjs_dbg_113_err;
}})();
			$pyjs['track']['lineno']=180;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'verifyBtn')['__setitem__']('disabled', false);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_114_err){if (!$p['isinstance']($pyjs_dbg_114_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_114_err);}throw $pyjs_dbg_114_err;
}})();
			$pyjs['track']['lineno']=182;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['NetworkService']['isOkay'](req);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_115_err){if (!$p['isinstance']($pyjs_dbg_115_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_115_err);}throw $pyjs_dbg_115_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_116_err){if (!$p['isinstance']($pyjs_dbg_116_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_116_err);}throw $pyjs_dbg_116_err;
}})()) {
				$pyjs['track']['lineno']=183;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['login']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_117_err){if (!$p['isinstance']($pyjs_dbg_117_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_117_err);}throw $pyjs_dbg_117_err;
}})();
			}
			else {
				$pyjs['track']['lineno']=185;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'otp')['__setitem__']('value', '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_118_err){if (!$p['isinstance']($pyjs_dbg_118_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_118_err);}throw $pyjs_dbg_118_err;
}})();
				$pyjs['track']['lineno']=186;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['otp']['focus']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_119_err){if (!$p['isinstance']($pyjs_dbg_119_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_119_err);}throw $pyjs_dbg_119_err;
}})();
			}
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['req']]);
		$cls_definition['doVerifySuccess'] = $method;
		$pyjs['track']['lineno']=188;
		$method = $pyjs__bind_method2('doVerifyFailure', function() {
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

			$pyjs['track']={'module':'login', 'lineno':188};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='login';
			$pyjs['track']['lineno']=188;
			$pyjs['track']['lineno']=189;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['reset']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_120_err){if (!$p['isinstance']($pyjs_dbg_120_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_120_err);}throw $pyjs_dbg_120_err;
}})();
			$pyjs['track']['lineno']=190;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['enable']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_121_err){if (!$p['isinstance']($pyjs_dbg_121_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_121_err);}throw $pyjs_dbg_121_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['doVerifyFailure'] = $method;
		$pyjs['track']['lineno']=192;
		$method = $pyjs__bind_method2('reset', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'login', 'lineno':192};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='login';
			$pyjs['track']['lineno']=192;
			$pyjs['track']['lineno']=193;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'loginBtn')['__setitem__']('disabled', false);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_122_err){if (!$p['isinstance']($pyjs_dbg_122_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_122_err);}throw $pyjs_dbg_122_err;
}})();
			$pyjs['track']['lineno']=194;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'verifyBtn')['__setitem__']('disabled', false);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_123_err){if (!$p['isinstance']($pyjs_dbg_123_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_123_err);}throw $pyjs_dbg_123_err;
}})();
			$pyjs['track']['lineno']=196;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'otp')['__setitem__']('value', '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_124_err){if (!$p['isinstance']($pyjs_dbg_124_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_124_err);}throw $pyjs_dbg_124_err;
}})();
			$pyjs['track']['lineno']=197;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'username')['__setitem__']('value', '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_125_err){if (!$p['isinstance']($pyjs_dbg_125_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_125_err);}throw $pyjs_dbg_125_err;
}})();
			$pyjs['track']['lineno']=198;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'password')['__setitem__']('value', '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_126_err){if (!$p['isinstance']($pyjs_dbg_126_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_126_err);}throw $pyjs_dbg_126_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['reset'] = $method;
		$pyjs['track']['lineno']=200;
		$method = $pyjs__bind_method2('enable', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'login', 'lineno':200};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='login';
			$pyjs['track']['lineno']=200;
			$pyjs['track']['lineno']=201;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['pwform']['show']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_127_err){if (!$p['isinstance']($pyjs_dbg_127_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_127_err);}throw $pyjs_dbg_127_err;
}})();
			$pyjs['track']['lineno']=202;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['otpform']['hide']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_128_err){if (!$p['isinstance']($pyjs_dbg_128_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_128_err);}throw $pyjs_dbg_128_err;
}})();
			$pyjs['track']['lineno']=204;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['UserPasswordLoginHandler'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_129_err){if (!$p['isinstance']($pyjs_dbg_129_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_129_err);}throw $pyjs_dbg_129_err;
}})()['enable']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_130_err){if (!$p['isinstance']($pyjs_dbg_130_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_130_err);}throw $pyjs_dbg_130_err;
}})();
			$pyjs['track']['lineno']=205;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['DeferredCall']($p['getattr'](self, 'focusLaterIdiot'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_131_err){if (!$p['isinstance']($pyjs_dbg_131_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_131_err);}throw $pyjs_dbg_131_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['enable'] = $method;
		$pyjs['track']['lineno']=207;
		$method = $pyjs__bind_method2('focusLaterIdiot', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'login', 'lineno':207};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='login';
			$pyjs['track']['lineno']=207;
			$pyjs['track']['lineno']=208;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['username']['focus']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_132_err){if (!$p['isinstance']($pyjs_dbg_132_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_132_err);}throw $pyjs_dbg_132_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['focusLaterIdiot'] = $method;
		$pyjs['track']['lineno']=211;
		$method = $pyjs__bind_method2('canHandle', function(method, secondFactor) {

			$pyjs['track']={'module':'login', 'lineno':211};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='login';
			$pyjs['track']['lineno']=211;
			$pyjs['track']['lineno']=212;
			$pyjs['track']['lineno']=212;
			var $pyjs__ret = $p['op_eq'](method, 'X-VIUR-AUTH-User-Password');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['method'],['secondFactor']]);
		$cls_definition['canHandle'] = $method;
		$pyjs['track']['lineno']=72;
		var $bases = new Array($m['BaseLoginHandler']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('UserPasswordLoginHandler', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=214;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['loginHandlerSelector']['insert'](0, $p['getattr']($m['UserPasswordLoginHandler'], 'canHandle'), $m['UserPasswordLoginHandler']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_133_err){if (!$p['isinstance']($pyjs_dbg_133_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_133_err);}throw $pyjs_dbg_133_err;
}})();
	$pyjs['track']['lineno']=217;
	$m['GoogleAccountLoginHandler'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'login';
		$pyjs['track']['lineno']=218;
		$cls_definition['cssname'] = 'googleaccount';
		$pyjs['track']['lineno']=220;
		$method = $pyjs__bind_method2('__init__', function(loginScreen) {
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
				loginScreen = arguments[1];
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
				if (typeof loginScreen != 'undefined') {
					if (loginScreen !== null && typeof loginScreen['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = loginScreen;
						loginScreen = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}

			$pyjs['track']={'module':'login', 'lineno':220};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='login';
			$pyjs['track']['lineno']=220;
			$pyjs['track']['lineno']=221;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['GoogleAccountLoginHandler'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_134_err){if (!$p['isinstance']($pyjs_dbg_134_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_134_err);}throw $pyjs_dbg_134_err;
}})(), '__init__', args, kwargs, [{}, loginScreen]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_135_err){if (!$p['isinstance']($pyjs_dbg_135_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_135_err);}throw $pyjs_dbg_135_err;
}})();
			$pyjs['track']['lineno']=223;
			self['loginBtn'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['html5']['ext'], 'Button', null, null, [{'callback':$p['getattr'](self, 'onLoginClick')}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Login with Google');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_136_err){if (!$p['isinstance']($pyjs_dbg_136_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_136_err);}throw $pyjs_dbg_136_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_137_err){if (!$p['isinstance']($pyjs_dbg_137_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_137_err);}throw $pyjs_dbg_137_err;
}})();
			$pyjs['track']['lineno']=224;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['loginBtn']['addClass']('vi-login-btn');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_138_err){if (!$p['isinstance']($pyjs_dbg_138_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_138_err);}throw $pyjs_dbg_138_err;
}})();
			$pyjs['track']['lineno']=225;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['mask']['appendChild']($p['getattr'](self, 'loginBtn'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_139_err){if (!$p['isinstance']($pyjs_dbg_139_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_139_err);}throw $pyjs_dbg_139_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self'],['loginScreen']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=227;
		$method = $pyjs__bind_method2('onLoginClick', function(sender) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments['callee']['__args__'][3][1];

			$pyjs['track']={'module':'login', 'lineno':227};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='login';
			$pyjs['track']['lineno']=227;
			$pyjs['track']['lineno']=228;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['lock']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_140_err){if (!$p['isinstance']($pyjs_dbg_140_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_140_err);}throw $pyjs_dbg_140_err;
}})();
			$pyjs['track']['lineno']=229;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (typeof eval == "undefined"?$m['eval']:eval)('window.top.location = "/vi/user/auth_googleaccount/login"');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_141_err){if (!$p['isinstance']($pyjs_dbg_141_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_141_err);}throw $pyjs_dbg_141_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onLoginClick'] = $method;
		$pyjs['track']['lineno']=232;
		$method = $pyjs__bind_method2('canHandle', function(method, secondFactor) {

			$pyjs['track']={'module':'login', 'lineno':232};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='login';
			$pyjs['track']['lineno']=232;
			$pyjs['track']['lineno']=233;
			$pyjs['track']['lineno']=233;
			var $pyjs__ret = $p['op_eq'](method, 'X-VIUR-AUTH-Google-Account');
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return $pyjs__ret;
		}
	, 3, [null,null,['method'],['secondFactor']]);
		$cls_definition['canHandle'] = $method;
		$pyjs['track']['lineno']=217;
		var $bases = new Array($m['BaseLoginHandler']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('GoogleAccountLoginHandler', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=235;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['loginHandlerSelector']['insert'](0, $p['getattr']($m['GoogleAccountLoginHandler'], 'canHandle'), $m['GoogleAccountLoginHandler']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_142_err){if (!$p['isinstance']($pyjs_dbg_142_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_142_err);}throw $pyjs_dbg_142_err;
}})();
	$pyjs['track']['lineno']=238;
	$m['LoginScreen'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'login';
		$pyjs['track']['lineno']=240;
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
			var img,h1,header;
			$pyjs['track']={'module':'login', 'lineno':240};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='login';
			$pyjs['track']['lineno']=240;
			$pyjs['track']['lineno']=241;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['LoginScreen'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_143_err){if (!$p['isinstance']($pyjs_dbg_143_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_143_err);}throw $pyjs_dbg_143_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_144_err){if (!$p['isinstance']($pyjs_dbg_144_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_144_err);}throw $pyjs_dbg_144_err;
}})();
			$pyjs['track']['lineno']=242;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['addClass']('vi-login');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_145_err){if (!$p['isinstance']($pyjs_dbg_145_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_145_err);}throw $pyjs_dbg_145_err;
}})();
			$pyjs['track']['lineno']=245;
			self['dialog'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Div']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_146_err){if (!$p['isinstance']($pyjs_dbg_146_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_146_err);}throw $pyjs_dbg_146_err;
}})();
			$pyjs['track']['lineno']=246;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['dialog']['addClass']('vi-login-dialog');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_147_err){if (!$p['isinstance']($pyjs_dbg_147_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_147_err);}throw $pyjs_dbg_147_err;
}})();
			$pyjs['track']['lineno']=247;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'dialog'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_148_err){if (!$p['isinstance']($pyjs_dbg_148_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_148_err);}throw $pyjs_dbg_148_err;
}})();
			$pyjs['track']['lineno']=250;
			header = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Div']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_149_err){if (!$p['isinstance']($pyjs_dbg_149_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_149_err);}throw $pyjs_dbg_149_err;
}})();
			$pyjs['track']['lineno']=251;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return header['addClass']('vi-login-header');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_150_err){if (!$p['isinstance']($pyjs_dbg_150_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_150_err);}throw $pyjs_dbg_150_err;
}})();
			$pyjs['track']['lineno']=252;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['dialog']['appendChild'](header);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_151_err){if (!$p['isinstance']($pyjs_dbg_151_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_151_err);}throw $pyjs_dbg_151_err;
}})();
			$pyjs['track']['lineno']=255;
			h1 = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['H1']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_152_err){if (!$p['isinstance']($pyjs_dbg_152_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_152_err);}throw $pyjs_dbg_152_err;
}})();
			$pyjs['track']['lineno']=256;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return h1['addClass']('vi-login-headline');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_153_err){if (!$p['isinstance']($pyjs_dbg_153_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_153_err);}throw $pyjs_dbg_153_err;
}})();
			$pyjs['track']['lineno']=257;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return h1['appendChild']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['TextNode']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('vi.login.title');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_154_err){if (!$p['isinstance']($pyjs_dbg_154_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_154_err);}throw $pyjs_dbg_154_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_155_err){if (!$p['isinstance']($pyjs_dbg_155_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_155_err);}throw $pyjs_dbg_155_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_156_err){if (!$p['isinstance']($pyjs_dbg_156_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_156_err);}throw $pyjs_dbg_156_err;
}})();
			$pyjs['track']['lineno']=258;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return header['appendChild'](h1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_157_err){if (!$p['isinstance']($pyjs_dbg_157_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_157_err);}throw $pyjs_dbg_157_err;
}})();
			$pyjs['track']['lineno']=261;
			img = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Img']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_158_err){if (!$p['isinstance']($pyjs_dbg_158_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_158_err);}throw $pyjs_dbg_158_err;
}})();
			$pyjs['track']['lineno']=262;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return img['addClass']('vi-login-logo');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_159_err){if (!$p['isinstance']($pyjs_dbg_159_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_159_err);}throw $pyjs_dbg_159_err;
}})();
			$pyjs['track']['lineno']=263;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return img['__setitem__']('src', 'login-logo.png');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_160_err){if (!$p['isinstance']($pyjs_dbg_160_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_160_err);}throw $pyjs_dbg_160_err;
}})();
			$pyjs['track']['lineno']=264;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return header['appendChild'](img);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_161_err){if (!$p['isinstance']($pyjs_dbg_161_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_161_err);}throw $pyjs_dbg_161_err;
}})();
			$pyjs['track']['lineno']=268;
			self['loginMethodSelector'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Ul']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_162_err){if (!$p['isinstance']($pyjs_dbg_162_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_162_err);}throw $pyjs_dbg_162_err;
}})();
			$pyjs['track']['lineno']=269;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['loginMethodSelector']['addClass']('vi-login-method');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_163_err){if (!$p['isinstance']($pyjs_dbg_163_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_163_err);}throw $pyjs_dbg_163_err;
}})();
			$pyjs['track']['lineno']=270;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['dialog']['appendChild']($p['getattr'](self, 'loginMethodSelector'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_164_err){if (!$p['isinstance']($pyjs_dbg_164_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_164_err);}throw $pyjs_dbg_164_err;
}})();
			$pyjs['track']['lineno']=272;
			self['haveLoginHandlers'] = false;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=275;
		$method = $pyjs__bind_method2('invoke', function(logout) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				logout = arguments[1];
			}
			if (typeof logout == 'undefined') logout=arguments['callee']['__args__'][3][1];

			$pyjs['track']={'module':'login', 'lineno':275};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='login';
			$pyjs['track']['lineno']=275;
			$pyjs['track']['lineno']=276;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['show']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_165_err){if (!$p['isinstance']($pyjs_dbg_165_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_165_err);}throw $pyjs_dbg_165_err;
}})();
			$pyjs['track']['lineno']=277;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['lock']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_166_err){if (!$p['isinstance']($pyjs_dbg_166_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_166_err);}throw $pyjs_dbg_166_err;
}})();
			$pyjs['track']['lineno']=280;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](logout);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_167_err){if (!$p['isinstance']($pyjs_dbg_167_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_167_err);}throw $pyjs_dbg_167_err;
}})()) {
				$pyjs['track']['lineno']=281;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'successHandler':$p['getattr'](self, 'onLogoutSuccess'), 'failureHandler':$p['getattr'](self, 'onLogoutSuccess'), 'secure':true}, 'user', 'logout']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_168_err){if (!$p['isinstance']($pyjs_dbg_168_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_168_err);}throw $pyjs_dbg_168_err;
}})();
				$pyjs['track']['lineno']=285;
				$pyjs['track']['lineno']=285;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=287;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__setitem__']('currentUser', null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_169_err){if (!$p['isinstance']($pyjs_dbg_169_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_169_err);}throw $pyjs_dbg_169_err;
}})();
			$pyjs['track']['lineno']=289;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool']($p['getattr'](self, 'haveLoginHandlers')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_170_err){if (!$p['isinstance']($pyjs_dbg_170_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_170_err);}throw $pyjs_dbg_170_err;
}})()) {
				$pyjs['track']['lineno']=290;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'successHandler':$p['getattr'](self, 'onGetAuthMethodsSuccess'), 'failureHandler':$p['getattr'](self, 'onGetAuthMethodsFailure')}, 'user', 'getAuthMethods']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_171_err){if (!$p['isinstance']($pyjs_dbg_171_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_171_err);}throw $pyjs_dbg_171_err;
}})();
				$pyjs['track']['lineno']=294;
				$pyjs['track']['lineno']=294;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=297;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'secure':true, 'successHandler':$p['getattr'](self, 'doSkipLogin'), 'failureHandler':$p['getattr'](self, 'doShowLogin')}, 'user', 'view/self']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_172_err){if (!$p['isinstance']($pyjs_dbg_172_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_172_err);}throw $pyjs_dbg_172_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['logout', false]]);
		$cls_definition['invoke'] = $method;
		$pyjs['track']['lineno']=302;
		$method = $pyjs__bind_method2('onLogoutSuccess', function() {
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

			$pyjs['track']={'module':'login', 'lineno':302};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='login';
			$pyjs['track']['lineno']=302;
			$pyjs['track']['lineno']=303;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__setitem__']('currentUser', null);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_173_err){if (!$p['isinstance']($pyjs_dbg_173_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_173_err);}throw $pyjs_dbg_173_err;
}})();
			$pyjs['track']['lineno']=304;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['invoke']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_174_err){if (!$p['isinstance']($pyjs_dbg_174_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_174_err);}throw $pyjs_dbg_174_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['onLogoutSuccess'] = $method;
		$pyjs['track']['lineno']=306;
		$method = $pyjs__bind_method2('doShowLogin', function() {
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

			$pyjs['track']={'module':'login', 'lineno':306};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='login';
			$pyjs['track']['lineno']=306;
			$pyjs['track']['lineno']=307;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['unlock']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_175_err){if (!$p['isinstance']($pyjs_dbg_175_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_175_err);}throw $pyjs_dbg_175_err;
}})();
			$pyjs['track']['lineno']=308;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['show']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_176_err){if (!$p['isinstance']($pyjs_dbg_176_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_176_err);}throw $pyjs_dbg_176_err;
}})();
			$pyjs['track']['lineno']=309;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['selectHandler']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_177_err){if (!$p['isinstance']($pyjs_dbg_177_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_177_err);}throw $pyjs_dbg_177_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['doShowLogin'] = $method;
		$pyjs['track']['lineno']=311;
		$method = $pyjs__bind_method2('doSkipLogin', function(req) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				req = arguments[1];
			}
			var answ;
			$pyjs['track']={'module':'login', 'lineno':311};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='login';
			$pyjs['track']['lineno']=311;
			$pyjs['track']['lineno']=312;
			answ = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['NetworkService']['decode'](req);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_178_err){if (!$p['isinstance']($pyjs_dbg_178_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_178_err);}throw $pyjs_dbg_178_err;
}})();
			$pyjs['track']['lineno']=313;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['op_eq']((function(){try{try{$pyjs['in_try_except'] += 1;
			return answ['get']('action');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_179_err){if (!$p['isinstance']($pyjs_dbg_179_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_179_err);}throw $pyjs_dbg_179_err;
}})(), 'view'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_180_err){if (!$p['isinstance']($pyjs_dbg_180_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_180_err);}throw $pyjs_dbg_180_err;
}})()) {
				$pyjs['track']['lineno']=314;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['doShowLogin']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_181_err){if (!$p['isinstance']($pyjs_dbg_181_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_181_err);}throw $pyjs_dbg_181_err;
}})();
				$pyjs['track']['lineno']=315;
				$pyjs['track']['lineno']=315;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=317;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__setitem__']('currentUser', answ['__getitem__']('values'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_182_err){if (!$p['isinstance']($pyjs_dbg_182_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_182_err);}throw $pyjs_dbg_182_err;
}})();
			$pyjs['track']['lineno']=318;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['any'](function(){
				var $iter1_nextval,$iter1_type,$collcomp1,$iter1_iter,$iter1_idx,$pyjs__trackstack_size_1,x,$iter1_array;
	$collcomp1 = $p['list']();
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter1_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list'](['admin', 'root']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_183_err){if (!$p['isinstance']($pyjs_dbg_183_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_183_err);}throw $pyjs_dbg_183_err;
}})();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_184_err){if (!$p['isinstance']($pyjs_dbg_184_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_184_err);}throw $pyjs_dbg_184_err;
}})();
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				x = $iter1_nextval['$nextval'];
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $collcomp1['append']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['conf']['__getitem__']('currentUser')['get']('access', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_185_err){if (!$p['isinstance']($pyjs_dbg_185_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_185_err);}throw $pyjs_dbg_185_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_186_err){if (!$p['isinstance']($pyjs_dbg_186_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_186_err);}throw $pyjs_dbg_186_err;
}})()['__contains__'](x));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_187_err){if (!$p['isinstance']($pyjs_dbg_187_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_187_err);}throw $pyjs_dbg_187_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='login';

	return $collcomp1;}());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_188_err){if (!$p['isinstance']($pyjs_dbg_188_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_188_err);}throw $pyjs_dbg_188_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_189_err){if (!$p['isinstance']($pyjs_dbg_189_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_189_err);}throw $pyjs_dbg_189_err;
}})()) {
				$pyjs['track']['lineno']=319;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['reset']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_190_err){if (!$p['isinstance']($pyjs_dbg_190_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_190_err);}throw $pyjs_dbg_190_err;
}})();
				$pyjs['track']['lineno']=320;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['loginScreen']['redirectNoAdmin']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_191_err){if (!$p['isinstance']($pyjs_dbg_191_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_191_err);}throw $pyjs_dbg_191_err;
}})();
			}
			$pyjs['track']['lineno']=322;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['printFunc'](['User already logged in'], 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_192_err){if (!$p['isinstance']($pyjs_dbg_192_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_192_err);}throw $pyjs_dbg_192_err;
}})();
			$pyjs['track']['lineno']=323;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('theApp')['admin']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_193_err){if (!$p['isinstance']($pyjs_dbg_193_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_193_err);}throw $pyjs_dbg_193_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['req']]);
		$cls_definition['doSkipLogin'] = $method;
		$pyjs['track']['lineno']=325;
		$method = $pyjs__bind_method2('onGetAuthMethodsSuccess', function(req) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				req = arguments[1];
			}
			var $iter2_nextval,$iter2_type,methods,$iter2_iter,answ,$iter2_idx,handler,$pyjs__trackstack_size_1,method,$iter2_array;
			$pyjs['track']={'module':'login', 'lineno':325};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='login';
			$pyjs['track']['lineno']=325;
			$pyjs['track']['lineno']=326;
			answ = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['NetworkService']['decode'](req);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_194_err){if (!$p['isinstance']($pyjs_dbg_194_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_194_err);}throw $pyjs_dbg_194_err;
}})();
			$pyjs['track']['lineno']=328;
			methods = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_195_err){if (!$p['isinstance']($pyjs_dbg_195_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_195_err);}throw $pyjs_dbg_195_err;
}})();
			$pyjs['track']['lineno']=329;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter2_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return answ;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_196_err){if (!$p['isinstance']($pyjs_dbg_196_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_196_err);}throw $pyjs_dbg_196_err;
}})();
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				method = $iter2_nextval['$nextval'];
				$pyjs['track']['lineno']=330;
				handler = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['loginHandlerSelector']['select'](method['__getitem__'](0), method['__getitem__'](1));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_197_err){if (!$p['isinstance']($pyjs_dbg_197_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_197_err);}throw $pyjs_dbg_197_err;
}})();
				$pyjs['track']['lineno']=333;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](!$p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['any'](function(){
					var c,$iter3_idx,$iter3_nextval,$iter3_array,$collcomp2,$pyjs__trackstack_size_2,$iter3_iter,$iter3_type;
	$collcomp2 = $p['list']();
				$pyjs__trackstack_size_2=$pyjs['trackstack']['length'];
				$iter3_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr']($p['getattr'](self, 'loginMethodSelector'), '_children');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_198_err){if (!$p['isinstance']($pyjs_dbg_198_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_198_err);}throw $pyjs_dbg_198_err;
}})();
				$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
				while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
					c = $iter3_nextval['$nextval'];
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $collcomp2['append']($p['op_eq']($p['getattr']($p['getattr'](c, '__class__'), '__name__'), $p['getattr'](handler, '__name__')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_199_err){if (!$p['isinstance']($pyjs_dbg_199_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_199_err);}throw $pyjs_dbg_199_err;
}})();
				}
				if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_2) {
					$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_2);
					$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
				}
				$pyjs['track']['module']='login';

	return $collcomp2;}());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_200_err){if (!$p['isinstance']($pyjs_dbg_200_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_200_err);}throw $pyjs_dbg_200_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_201_err){if (!$p['isinstance']($pyjs_dbg_201_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_201_err);}throw $pyjs_dbg_201_err;
}})()) {
					$pyjs['track']['lineno']=334;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return handler(self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_202_err){if (!$p['isinstance']($pyjs_dbg_202_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_202_err);}throw $pyjs_dbg_202_err;
}})();
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='login';
			$pyjs['track']['lineno']=336;
			self['haveLoginHandlers'] = true;
			$pyjs['track']['lineno']=337;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['invoke']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_203_err){if (!$p['isinstance']($pyjs_dbg_203_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_203_err);}throw $pyjs_dbg_203_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['req']]);
		$cls_definition['onGetAuthMethodsSuccess'] = $method;
		$pyjs['track']['lineno']=339;
		$method = $pyjs__bind_method2('selectHandler', function(handler) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				handler = arguments[1];
			}
			if (typeof handler == 'undefined') handler=arguments['callee']['__args__'][3][1];
			var $or1,$or2,$iter4_nextval,$pyjs__trackstack_size_1,$iter4_idx,$iter4_type,h,$iter4_array,$iter4_iter;
			$pyjs['track']={'module':'login', 'lineno':339};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='login';
			$pyjs['track']['lineno']=339;
			$pyjs['track']['lineno']=340;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter4_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr']($p['getattr'](self, 'loginMethodSelector'), '_children');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_204_err){if (!$p['isinstance']($pyjs_dbg_204_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_204_err);}throw $pyjs_dbg_204_err;
}})();
			$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
			while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
				h = $iter4_nextval['$nextval'];
				$pyjs['track']['lineno']=341;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](($p['bool']($or1=(handler === null))?$or1:(h === handler)));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_205_err){if (!$p['isinstance']($pyjs_dbg_205_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_205_err);}throw $pyjs_dbg_205_err;
}})()) {
					$pyjs['track']['lineno']=342;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return h['enable']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_206_err){if (!$p['isinstance']($pyjs_dbg_206_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_206_err);}throw $pyjs_dbg_206_err;
}})();
					$pyjs['track']['lineno']=343;
					handler = h;
				}
				else {
					$pyjs['track']['lineno']=345;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return h['disable']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_207_err){if (!$p['isinstance']($pyjs_dbg_207_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_207_err);}throw $pyjs_dbg_207_err;
}})();
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='login';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['handler', null]]);
		$cls_definition['selectHandler'] = $method;
		$pyjs['track']['lineno']=347;
		$method = $pyjs__bind_method2('onGetAuthMethodsFailure', function() {
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

			$pyjs['track']={'module':'login', 'lineno':347};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='login';
			$pyjs['track']['lineno']=347;
			$pyjs['track']['lineno']=348;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (typeof alert == "undefined"?$m['alert']:alert)('Fail');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_208_err){if (!$p['isinstance']($pyjs_dbg_208_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_208_err);}throw $pyjs_dbg_208_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['onGetAuthMethodsFailure'] = $method;
		$pyjs['track']['lineno']=350;
		$method = $pyjs__bind_method2('redirectNoAdmin', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			$pyjs['track']={'module':'login', 'lineno':350};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='login';
			$pyjs['track']['lineno']=350;
			$pyjs['track']['lineno']=351;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (typeof eval == "undefined"?$m['eval']:eval)('window.top.location = "/"');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_209_err){if (!$p['isinstance']($pyjs_dbg_209_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_209_err);}throw $pyjs_dbg_209_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['redirectNoAdmin'] = $method;
		$pyjs['track']['lineno']=238;
		var $bases = new Array($m['Screen']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('LoginScreen', $p['tuple']($bases), $data);
	})();
	return this;
}; /* end login */


/* end module: login */


/*
PYJS_DEPS: ['html5', 're', 'json', 'network.NetworkService', 'network', 'network.DeferredCall', 'i18n.translate', 'i18n', 'event.EventDispatcher', 'event', 'config.conf', 'config', 'priorityqueue.loginHandlerSelector', 'priorityqueue', 'screen.Screen', 'screen']
*/
