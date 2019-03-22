/* start module: os.path */
$pyjs['loaded_modules']['os.path'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['os.path']['__was_initialized__']) return $pyjs['loaded_modules']['os.path'];
	if(typeof $pyjs['loaded_modules']['os'] == 'undefined' || !$pyjs['loaded_modules']['os']['__was_initialized__']) $p['___import___']('os', null);
	var $m = $pyjs['loaded_modules']['os.path'];
	$m['__repr__'] = function() { return '<module: os.path>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'os.path';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['os']['path'] = $pyjs['loaded_modules']['os.path'];
	$m.__track_lines__[1] = 'os.path.py, line 1:\n    from pyjspath import *';


	$pyjs['track']['module']='os.path';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=1;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$p['__import_all__']('pyjspath', 'os', $m, null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	return this;
}; /* end os.path */


/* end module: os.path */


/*
PYJS_DEPS: ['pyjspath']
*/
