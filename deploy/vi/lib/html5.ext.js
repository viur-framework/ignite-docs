/* start module: html5.ext */
$pyjs['loaded_modules']['html5.ext'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['html5.ext']['__was_initialized__']) return $pyjs['loaded_modules']['html5.ext'];
	if(typeof $pyjs['loaded_modules']['html5'] == 'undefined' || !$pyjs['loaded_modules']['html5']['__was_initialized__']) $p['___import___']('html5', null);
	var $m = $pyjs['loaded_modules']['html5.ext'];
	$m['__repr__'] = function() { return '<module: html5.ext>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'html5.ext';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['html5']['ext'] = $pyjs['loaded_modules']['html5.ext'];
	try {


		$m['Button'] = $p['___import___']('html5.ext.button.Button', 'html5.ext', null, false);
		$m['InputDialog'] = $p['___import___']('html5.ext.inputdialog.InputDialog', 'html5.ext', null, false);
		$m['Popup'] = $p['___import___']('html5.ext.popup.Popup', 'html5.ext', null, false);
		$m['Alert'] = $p['___import___']('html5.ext.popup.Alert', 'html5.ext', null, false);
		$m['YesNoDialog'] = $p['___import___']('html5.ext.popup.YesNoDialog', 'html5.ext', null, false);
		$m['SelectDialog'] = $p['___import___']('html5.ext.popup.SelectDialog', 'html5.ext', null, false);
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end html5.ext */


/* end module: html5.ext */


/*
PYJS_DEPS: ['html5.ext.button.Button', 'html5', 'html5.ext', 'html5.ext.button', 'html5.ext.inputdialog.InputDialog', 'html5.ext.inputdialog', 'html5.ext.popup.Popup', 'html5.ext.popup', 'html5.ext.popup.Alert', 'html5.ext.popup.YesNoDialog', 'html5.ext.popup.SelectDialog']
*/
