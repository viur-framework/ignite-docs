/* start module: stat */
$pyjs['loaded_modules']['stat'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['stat']['__was_initialized__']) return $pyjs['loaded_modules']['stat'];
	var $m = $pyjs['loaded_modules']['stat'];
	$m['__repr__'] = function() { return '<module: stat>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'stat';
	$m['__name__'] = __mod_name__;
	try {

		var $constant_int_0 = new $p['int'](0);
		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		var $constant_int_3 = new $p['int'](3);
		var $constant_int_4 = new $p['int'](4);
		var $constant_int_5 = new $p['int'](5);
		var $constant_int_6 = new $p['int'](6);
		var $constant_int_7 = new $p['int'](7);
		var $constant_int_8 = new $p['int'](8);
		var $constant_int_9 = new $p['int'](9);
		var $constant_int_128 = new $p['int'](128);
		var $constant_int_256 = new $p['int'](256);
		var $constant_int_16 = new $p['int'](16);
		var $constant_int_448 = new $p['int'](448);
		var $constant_int_512 = new $p['int'](512);
		var $constant_int_131072 = new $p['int'](131072);
		var $constant_int_32 = new $p['int'](32);
		var $constant_int_4096 = new $p['int'](4096);
		var $constant_int_262144 = new $p['int'](262144);
		var $constant_int_1024 = new $p['int'](1024);
		var $constant_int_8192 = new $p['int'](8192);
		var $constant_int_16384 = new $p['int'](16384);
		var $constant_int_24576 = new $p['int'](24576);
		var $constant_int_56 = new $p['int'](56);
		var $constant_int_1048576 = new $p['int'](1048576);
		var $constant_int_32768 = new $p['int'](32768);
		var $constant_int_64 = new $p['int'](64);
		var $constant_int_2048 = new $p['int'](2048);
		var $constant_int_40960 = new $p['int'](40960);
		var $constant_int_49152 = new $p['int'](49152);
		var $constant_int_61440 = new $p['int'](61440);
		var $constant_int_2097152 = new $p['int'](2097152);
		var $constant_int_65536 = new $p['int'](65536);
		var $constant_int_4095 = new $p['int'](4095);
		$m['ST_MODE'] = $constant_int_0;
		$m['ST_INO'] = $constant_int_1;
		$m['ST_DEV'] = $constant_int_2;
		$m['ST_NLINK'] = $constant_int_3;
		$m['ST_UID'] = $constant_int_4;
		$m['ST_GID'] = $constant_int_5;
		$m['ST_SIZE'] = $constant_int_6;
		$m['ST_ATIME'] = $constant_int_7;
		$m['ST_MTIME'] = $constant_int_8;
		$m['ST_CTIME'] = $constant_int_9;
		$m['S_IMODE'] = function(mode) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return $p['op_bitand2'](mode, $constant_int_4095);
		};
		$m['S_IMODE']['__name__'] = 'S_IMODE';

		$m['S_IMODE']['__bind_type__'] = 0;
		$m['S_IMODE']['__args__'] = [null,null,['mode']];
		$m['S_IFMT'] = function(mode) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return $p['op_bitand2'](mode, $constant_int_61440);
		};
		$m['S_IFMT']['__name__'] = 'S_IFMT';

		$m['S_IFMT']['__bind_type__'] = 0;
		$m['S_IFMT']['__args__'] = [null,null,['mode']];
		$m['S_IFDIR'] = $constant_int_16384;
		$m['S_IFCHR'] = $constant_int_8192;
		$m['S_IFBLK'] = $constant_int_24576;
		$m['S_IFREG'] = $constant_int_32768;
		$m['S_IFIFO'] = $constant_int_4096;
		$m['S_IFLNK'] = $constant_int_40960;
		$m['S_IFSOCK'] = $constant_int_49152;
		$m['S_ISDIR'] = function(mode) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return $p['op_eq']($m['S_IFMT'](mode), $m['S_IFDIR']);
		};
		$m['S_ISDIR']['__name__'] = 'S_ISDIR';

		$m['S_ISDIR']['__bind_type__'] = 0;
		$m['S_ISDIR']['__args__'] = [null,null,['mode']];
		$m['S_ISCHR'] = function(mode) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return $p['op_eq']($m['S_IFMT'](mode), $m['S_IFCHR']);
		};
		$m['S_ISCHR']['__name__'] = 'S_ISCHR';

		$m['S_ISCHR']['__bind_type__'] = 0;
		$m['S_ISCHR']['__args__'] = [null,null,['mode']];
		$m['S_ISBLK'] = function(mode) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return $p['op_eq']($m['S_IFMT'](mode), $m['S_IFBLK']);
		};
		$m['S_ISBLK']['__name__'] = 'S_ISBLK';

		$m['S_ISBLK']['__bind_type__'] = 0;
		$m['S_ISBLK']['__args__'] = [null,null,['mode']];
		$m['S_ISREG'] = function(mode) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return $p['op_eq']($m['S_IFMT'](mode), $m['S_IFREG']);
		};
		$m['S_ISREG']['__name__'] = 'S_ISREG';

		$m['S_ISREG']['__bind_type__'] = 0;
		$m['S_ISREG']['__args__'] = [null,null,['mode']];
		$m['S_ISFIFO'] = function(mode) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return $p['op_eq']($m['S_IFMT'](mode), $m['S_IFIFO']);
		};
		$m['S_ISFIFO']['__name__'] = 'S_ISFIFO';

		$m['S_ISFIFO']['__bind_type__'] = 0;
		$m['S_ISFIFO']['__args__'] = [null,null,['mode']];
		$m['S_ISLNK'] = function(mode) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return $p['op_eq']($m['S_IFMT'](mode), $m['S_IFLNK']);
		};
		$m['S_ISLNK']['__name__'] = 'S_ISLNK';

		$m['S_ISLNK']['__bind_type__'] = 0;
		$m['S_ISLNK']['__args__'] = [null,null,['mode']];
		$m['S_ISSOCK'] = function(mode) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return $p['op_eq']($m['S_IFMT'](mode), $m['S_IFSOCK']);
		};
		$m['S_ISSOCK']['__name__'] = 'S_ISSOCK';

		$m['S_ISSOCK']['__bind_type__'] = 0;
		$m['S_ISSOCK']['__args__'] = [null,null,['mode']];
		$m['S_ISUID'] = $constant_int_2048;
		$m['S_ISGID'] = $constant_int_1024;
		$m['S_ENFMT'] = $m['S_ISGID'];
		$m['S_ISVTX'] = $constant_int_512;
		$m['S_IREAD'] = $constant_int_256;
		$m['S_IWRITE'] = $constant_int_128;
		$m['S_IEXEC'] = $constant_int_64;
		$m['S_IRWXU'] = $constant_int_448;
		$m['S_IRUSR'] = $constant_int_256;
		$m['S_IWUSR'] = $constant_int_128;
		$m['S_IXUSR'] = $constant_int_64;
		$m['S_IRWXG'] = $constant_int_56;
		$m['S_IRGRP'] = $constant_int_32;
		$m['S_IWGRP'] = $constant_int_16;
		$m['S_IXGRP'] = $constant_int_8;
		$m['S_IRWXO'] = $constant_int_7;
		$m['S_IROTH'] = $constant_int_4;
		$m['S_IWOTH'] = $constant_int_2;
		$m['S_IXOTH'] = $constant_int_1;
		$m['UF_NODUMP'] = $constant_int_1;
		$m['UF_IMMUTABLE'] = $constant_int_2;
		$m['UF_APPEND'] = $constant_int_4;
		$m['UF_OPAQUE'] = $constant_int_8;
		$m['UF_NOUNLINK'] = $constant_int_16;
		$m['SF_ARCHIVED'] = $constant_int_65536;
		$m['SF_IMMUTABLE'] = $constant_int_131072;
		$m['SF_APPEND'] = $constant_int_262144;
		$m['SF_NOUNLINK'] = $constant_int_1048576;
		$m['SF_SNAPSHOT'] = $constant_int_2097152;
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end stat */


/* end module: stat */


