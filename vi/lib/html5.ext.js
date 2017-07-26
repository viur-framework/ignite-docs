/* start module: html5.ext */
$pyjs['loaded_modules']['html5.ext'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['html5.ext']['__was_initialized__']) return $pyjs['loaded_modules']['html5.ext'];
	if(typeof $pyjs['loaded_modules']['html5'] == 'undefined' || !$pyjs['loaded_modules']['html5']['__was_initialized__']) $p['___import___']('html5', null);
	var $m = $pyjs['loaded_modules']['html5.ext'];
	$m['__repr__'] = function() { return '<module: html5.ext>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'html5.ext';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['html5']['ext'] = $pyjs['loaded_modules']['html5.ext'];
	$m.__track_lines__[1] = 'html5.ext.py, line 1:\n    from html5.ext.button import Button';
	$m.__track_lines__[2] = 'html5.ext.py, line 2:\n    from html5.ext.inputdialog import InputDialog';
	$m.__track_lines__[3] = 'html5.ext.py, line 3:\n    from html5.ext.popup import Popup, Alert, YesNoDialog, SelectDialog';


	$pyjs['track']['module']='html5.ext';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=1;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Button'] = $p['___import___']('html5.ext.button.Button', 'html5.ext', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=2;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['InputDialog'] = $p['___import___']('html5.ext.inputdialog.InputDialog', 'html5.ext', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=3;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Popup'] = $p['___import___']('html5.ext.popup.Popup', 'html5.ext', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Alert'] = $p['___import___']('html5.ext.popup.Alert', 'html5.ext', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['YesNoDialog'] = $p['___import___']('html5.ext.popup.YesNoDialog', 'html5.ext', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['SelectDialog'] = $p['___import___']('html5.ext.popup.SelectDialog', 'html5.ext', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	return this;
}; /* end html5.ext */


/* end module: html5.ext */


/*
PYJS_DEPS: ['html5.ext.button.Button', 'html5', 'html5.ext', 'html5.ext.button', 'html5.ext.inputdialog.InputDialog', 'html5.ext.inputdialog', 'html5.ext.popup.Popup', 'html5.ext.popup', 'html5.ext.popup.Alert', 'html5.ext.popup.YesNoDialog', 'html5.ext.popup.SelectDialog']
*/
