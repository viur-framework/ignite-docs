/* start module: translations.en */
$pyjs['loaded_modules']['translations.en'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['translations.en']['__was_initialized__']) return $pyjs['loaded_modules']['translations.en'];
	if(typeof $pyjs['loaded_modules']['translations'] == 'undefined' || !$pyjs['loaded_modules']['translations']['__was_initialized__']) $p['___import___']('translations', null);
	var $m = $pyjs['loaded_modules']['translations.en'];
	$m['__repr__'] = function() { return '<module: translations.en>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'translations.en';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['translations']['en'] = $pyjs['loaded_modules']['translations.en'];
	try {


		$m['lngEn'] = $p['dict']([['vi.login.title', 'Login'], ['vi.login.handler.userpassword', 'User'], ['username', 'Username'], ['password', 'Password'], ['login', 'Login'], ['one time password', 'One Time Password'], ['verify', 'Verify'], ['vi.login.handler.googleaccount', 'Google'], ['login with google', 'Login with Google'], ['vi.login.insufficient-rights', 'Your current user has insufficient access rights to use this part of the software.\n\nPlease login under a different user.'], ['login as different user', 'Log-out current user'], ['vi.action.edit.refresh.question', 'This will reload the currently shown dataset.\nUnsafed changes will be lost.\nDo you really want to continue?'], ['vi.action.edit.refresh.title', 'Refresh dataset from server']]);
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end translations.en */


/* end module: translations.en */


