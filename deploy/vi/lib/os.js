/* start module: os */
$pyjs['loaded_modules']['os'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['os']['__was_initialized__']) return $pyjs['loaded_modules']['os'];
	var $m = $pyjs['loaded_modules']['os'];
	$m['__repr__'] = function() { return '<module: os>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'os';
	$m['__name__'] = __mod_name__;
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_8192 = new $p['int'](8192);
		var $constant_int_8 = new $p['int'](8);
		var $constant_int_128 = new $p['int'](128);
		var $constant_int_256 = new $p['int'](256);
		var $constant_int_512 = new $p['int'](512);
		var $constant_int_262144 = new $p['int'](262144);
		var $constant_int_131072 = new $p['int'](131072);
		var $constant_int_4096 = new $p['int'](4096);
		var $constant_int_1024 = new $p['int'](1024);
		var $constant_int_16384 = new $p['int'](16384);
		var $constant_int_32768 = new $p['int'](32768);
		var $constant_int_64 = new $p['int'](64);
		var $constant_int_65 = new $p['int'](65);
		var $constant_int_66 = new $p['int'](66);
		var $constant_int_67 = new $p['int'](67);
		var $constant_int_68 = new $p['int'](68);
		var $constant_int_69 = new $p['int'](69);
		var $constant_int_70 = new $p['int'](70);
		var $constant_int_71 = new $p['int'](71);
		var $constant_int_72 = new $p['int'](72);
		var $constant_int_73 = new $p['int'](73);
		var $constant_int_74 = new $p['int'](74);
		var $constant_int_75 = new $p['int'](75);
		var $constant_int_76 = new $p['int'](76);
		var $constant_int_77 = new $p['int'](77);
		var $constant_int_78 = new $p['int'](78);
		var $constant_int_1052672 = new $p['int'](1052672);
		var $constant_int_65536 = new $p['int'](65536);
		var $constant_int_2048 = new $p['int'](2048);
		var $constant_int_238328 = new $p['int'](238328);
		$m['path'] = $p['___import___']('path', 'os');
		$m['walk'] = $p['___import___']('os.path.walk', 'os', null, false);
		$m['curdir'] = $p['___import___']('os.path.curdir', 'os', null, false);
		$m['pardir'] = $p['___import___']('os.path.pardir', 'os', null, false);
		$m['sep'] = $p['___import___']('os.path.sep', 'os', null, false);
		$m['pathsep'] = $p['___import___']('os.path.pathsep', 'os', null, false);
		$m['defpath'] = $p['___import___']('os.path.defpath', 'os', null, false);
		$m['extsep'] = $p['___import___']('os.path.extsep', 'os', null, false);
		$m['altsep'] = $p['___import___']('os.path.altsep', 'os', null, false);
		$m['devnull'] = $p['___import___']('os.path.devnull', 'os', null, false);
		$m['$$name'] = 'pyjs';
		$m['SEEK_SET'] = $constant_int_0;
		$m['SEEK_CUR'] = $constant_int_1;
		$m['SEEK_END'] = $constant_int_2;
		$m['EX_CANTCREAT'] = $constant_int_73;
		$m['EX_CONFIG'] = $constant_int_78;
		$m['EX_DATAERR'] = $constant_int_65;
		$m['EX_IOERR'] = $constant_int_74;
		$m['EX_NOHOST'] = $constant_int_68;
		$m['EX_NOINPUT'] = $constant_int_66;
		$m['EX_NOPERM'] = $constant_int_77;
		$m['EX_NOUSER'] = $constant_int_67;
		$m['EX_OK'] = $constant_int_0;
		$m['EX_OSERR'] = $constant_int_71;
		$m['EX_OSFILE'] = $constant_int_72;
		$m['EX_PROTOCOL'] = $constant_int_76;
		$m['EX_SOFTWARE'] = $constant_int_70;
		$m['EX_TEMPFAIL'] = $constant_int_75;
		$m['EX_UNAVAILABLE'] = $constant_int_69;
		$m['EX_USAGE'] = $constant_int_64;
		$m['F_OK'] = $constant_int_0;
		$m['NGROUPS_MAX'] = $constant_int_65536;
		$m['O_APPEND'] = $constant_int_1024;
		$m['O_ASYNC'] = $constant_int_8192;
		$m['O_CREAT'] = $constant_int_64;
		$m['O_DIRECT'] = $constant_int_16384;
		$m['O_DIRECTORY'] = $constant_int_65536;
		$m['O_DSYNC'] = $constant_int_4096;
		$m['O_EXCL'] = $constant_int_128;
		$m['O_LARGEFILE'] = $constant_int_32768;
		$m['O_NDELAY'] = $constant_int_2048;
		$m['O_NOATIME'] = $constant_int_262144;
		$m['O_NOCTTY'] = $constant_int_256;
		$m['O_NOFOLLOW'] = $constant_int_131072;
		$m['O_NONBLOCK'] = $constant_int_2048;
		$m['O_RDONLY'] = $constant_int_0;
		$m['O_RDWR'] = $constant_int_2;
		$m['O_RSYNC'] = $constant_int_1052672;
		$m['O_SYNC'] = $constant_int_1052672;
		$m['O_TRUNC'] = $constant_int_512;
		$m['O_WRONLY'] = $constant_int_1;
		$m['R_OK'] = $constant_int_4;
		$m['TMP_MAX'] = $constant_int_238328;
		$m['WCONTINUED'] = $constant_int_8;
		$m['WNOHANG'] = $constant_int_1;
		$m['WUNTRACED'] = $constant_int_2;
		$m['W_OK'] = $constant_int_2;
		$m['X_OK'] = $constant_int_1;
		$m['environ'] = $p['dict']([]);
		$m['urandom'] = function(n) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			throw ($p['NotImplementedError']('/dev/urandom (or equivalent) not found'));
			return (typeof bs == "undefined"?$m['bs']:bs);
		};
		$m['urandom']['__name__'] = 'urandom';

		$m['urandom']['__bind_type__'] = 0;
		$m['urandom']['__args__'] = [null,null,['n']];
		$m['unlink'] = function() {
			if ($pyjs['options']['arg_count'] && arguments['length'] < 0) $pyjs__exception_func_param(arguments['callee']['__name__'], 0, null, arguments['length']);
			var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']));


			throw ($p['NotImplementedError']('PyJS does not support filesystem access'));
			return null;
		};
		$m['unlink']['__name__'] = 'unlink';

		$m['unlink']['__bind_type__'] = 0;
		$m['unlink']['__args__'] = ['args',null];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end os */


/* end module: os */


/*
PYJS_DEPS: ['path', 'os.path.walk', 'os', 'os.path', 'os.path.curdir', 'os.path.pardir', 'os.path.sep', 'os.path.pathsep', 'os.path.defpath', 'os.path.extsep', 'os.path.altsep', 'os.path.devnull']
*/
