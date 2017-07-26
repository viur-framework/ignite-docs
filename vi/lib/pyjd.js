/* start module: pyjd */
$pyjs['loaded_modules']['pyjd'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjd']['__was_initialized__']) return $pyjs['loaded_modules']['pyjd'];
	var $m = $pyjs['loaded_modules']['pyjd'];
	$m['__repr__'] = function() { return '<module: pyjd>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjd';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$m.__track_lines__[1] = 'pyjd.py, line 1:\n    is_desktop = False';
	$m.__track_lines__[3] = 'pyjd.py, line 3:\n    def setup(application, appdir=None, width=800, height=600):';
	$m.__track_lines__[4] = 'pyjd.py, line 4:\n    pass';
	$m.__track_lines__[6] = 'pyjd.py, line 6:\n    def run(one_event=False, block=True):';
	$m.__track_lines__[7] = 'pyjd.py, line 7:\n    pass';


	$pyjs['track']['module']='pyjd';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=1;
	$m['is_desktop'] = false;
	$pyjs['track']['lineno']=3;
	$m['setup'] = function(application, appdir, width, height) {
		if (typeof appdir == 'undefined') appdir=arguments['callee']['__args__'][3][1];
		if (typeof width == 'undefined') width=arguments['callee']['__args__'][4][1];
		if (typeof height == 'undefined') height=arguments['callee']['__args__'][5][1];

		$pyjs['track']={'module':'pyjd','lineno':3};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='pyjd';
		$pyjs['track']['lineno']=3;
		$pyjs['track']['lineno']=4;
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return null;
	};
	$m['setup']['__name__'] = 'setup';

	$m['setup']['__bind_type__'] = 0;
	$m['setup']['__args__'] = [null,null,['application'],['appdir', null],['width', 800],['height', 600]];
	$pyjs['track']['lineno']=6;
	$m['run'] = function(one_event, block) {
		if (typeof one_event == 'undefined') one_event=arguments['callee']['__args__'][2][1];
		if (typeof block == 'undefined') block=arguments['callee']['__args__'][3][1];

		$pyjs['track']={'module':'pyjd','lineno':6};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='pyjd';
		$pyjs['track']['lineno']=6;
		$pyjs['track']['lineno']=7;
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return null;
	};
	$m['run']['__name__'] = 'run';

	$m['run']['__bind_type__'] = 0;
	$m['run']['__args__'] = [null,null,['one_event', false],['block', true]];
	return this;
}; /* end pyjd */


/* end module: pyjd */


