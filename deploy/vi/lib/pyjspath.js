/* start module: pyjspath */
$pyjs['loaded_modules']['pyjspath'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['pyjspath']['__was_initialized__']) return $pyjs['loaded_modules']['pyjspath'];
	var $m = $pyjs['loaded_modules']['pyjspath'];
	$m['__repr__'] = function() { return '<module: pyjspath>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjspath';
	$m['__name__'] = __mod_name__;
	try {

		var $constant_int_1 = new $p['int'](1);
		var $constant_int_2 = new $p['int'](2);
		$m['os'] = $p['___import___']('os', null);
		$m['sys'] = $p['___import___']('sys', null);
		$m['stat'] = $p['___import___']('stat', null);
		$m['genericpath'] = $p['___import___']('genericpath', null);
		$m['__all__'] = $p['list'](['normcase', 'isabs', 'join', 'splitdrive', 'split', 'splitext', 'basename', 'dirname', 'commonprefix', 'getsize', 'getmtime', 'getatime', 'getctime', 'islink', 'exists', 'lexists', 'isdir', 'isfile', 'ismount', 'walk', 'expanduser', 'expandvars', 'normpath', 'abspath', 'samefile', 'sameopenfile', 'samestat', 'curdir', 'pardir', 'sep', 'pathsep', 'defpath', 'altsep', 'extsep', 'devnull', 'realpath', 'supports_unicode_filenames', 'relpath']);
		$m['curdir'] = '.';
		$m['pardir'] = '..';
		$m['extsep'] = '.';
		$m['sep'] = '/';
		$m['pathsep'] = ':';
		$m['defpath'] = ':/bin:/usr/bin';
		$m['altsep'] = null;
		$m['devnull'] = '/dev/null';
		$m['normcase'] = function(s) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return s;
		};
		$m['normcase']['__name__'] = 'normcase';

		$m['normcase']['__bind_type__'] = 0;
		$m['normcase']['__args__'] = [null,null,['s']];
		$m['isabs'] = function(s) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return s['startswith']('/');
		};
		$m['isabs']['__name__'] = 'isabs';

		$m['isabs']['__bind_type__'] = 0;
		$m['isabs']['__args__'] = [null,null,['s']];
		$m['join'] = function(a) {
			if ($pyjs['options']['arg_count'] && arguments['length'] < 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, null, arguments['length']);
			var p = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']));

			var b,$iter1_nextval,$iter1_type,$or2,$add3,$iter1_iter,$add2,$add1,$add6,$iter1_array,$add4,$add5,path,$or1,$iter1_idx;
			path = a;
			$iter1_iter = p;
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				b = $iter1_nextval['$nextval'];
				if ($p['bool'](b['startswith']('/'))) {
					path = b;
				}
				else if ($p['bool'](($p['bool']($or1=$p['op_eq'](path, ''))?$or1:path['endswith']('/')))) {
					path = $p['__op_add']($add1=path,$add2=b);
				}
				else {
					path = $p['__op_add']($add5=path,$add6=$p['__op_add']($add3='/',$add4=b));
				}
			}
			return path;
		};
		$m['join']['__name__'] = 'join';

		$m['join']['__bind_type__'] = 0;
		$m['join']['__args__'] = ['p',null,['a']];
		$m['$$split'] = function(p) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var head,i,$and1,$and2,tail,$add7,$add8,$mul2,$mul1;
			i = $p['__op_add']($add7=p['rfind']('/'),$add8=$constant_int_1);
			var $tupleassign1 = $p['__ass_unpack']($p['tuple']([$p['__getslice'](p, 0, i), $p['__getslice'](p, i, null)]), 2, null);
			head = $tupleassign1[0];
			tail = $tupleassign1[1];
			if ($p['bool'](($p['bool']($and1=head)?!$p['op_eq'](head, (typeof ($mul1='/')==typeof ($mul2=$p['len'](head)) && typeof $mul1=='number'?
				$mul1*$mul2:
				$p['op_mul']($mul1,$mul2))):$and1))) {
				head = head['rstrip']('/');
			}
			return $p['tuple']([head, tail]);
		};
		$m['$$split']['__name__'] = 'split';

		$m['$$split']['__bind_type__'] = 0;
		$m['$$split']['__args__'] = [null,null,['p']];
		$m['splitext'] = function(p) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return $m['genericpath']['_splitext'](p, $m['sep'], $m['altsep'], $m['extsep']);
		};
		$m['splitext']['__name__'] = 'splitext';

		$m['splitext']['__bind_type__'] = 0;
		$m['splitext']['__args__'] = [null,null,['p']];
		$m['splitdrive'] = function(p) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return $p['tuple'](['', p]);
		};
		$m['splitdrive']['__name__'] = 'splitdrive';

		$m['splitdrive']['__bind_type__'] = 0;
		$m['splitdrive']['__args__'] = [null,null,['p']];
		$m['basename'] = function(p) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var i,$add9,$add10;
			i = $p['__op_add']($add9=p['rfind']('/'),$add10=$constant_int_1);
			return $p['__getslice'](p, i, null);
		};
		$m['basename']['__name__'] = 'basename';

		$m['basename']['__bind_type__'] = 0;
		$m['basename']['__args__'] = [null,null,['p']];
		$m['dirname'] = function(p) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var head,i,$and3,$and4,$add11,$add12,$mul4,$mul3;
			i = $p['__op_add']($add11=p['rfind']('/'),$add12=$constant_int_1);
			head = $p['__getslice'](p, 0, i);
			if ($p['bool'](($p['bool']($and3=head)?!$p['op_eq'](head, (typeof ($mul3='/')==typeof ($mul4=$p['len'](head)) && typeof $mul3=='number'?
				$mul3*$mul4:
				$p['op_mul']($mul3,$mul4))):$and3))) {
				head = head['rstrip']('/');
			}
			return head;
		};
		$m['dirname']['__name__'] = 'dirname';

		$m['dirname']['__bind_type__'] = 0;
		$m['dirname']['__args__'] = [null,null,['p']];
		$m['samestat'] = function(s1, s2) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);
			var $and5,$and6;
			return ($p['bool']($and5=$p['op_eq']($p['getattr'](s1, 'st_ino'), $p['getattr'](s2, 'st_ino')))?$p['op_eq']($p['getattr'](s1, 'st_dev'), $p['getattr'](s2, 'st_dev')):$and5);
		};
		$m['samestat']['__name__'] = 'samestat';

		$m['samestat']['__bind_type__'] = 0;
		$m['samestat']['__args__'] = [null,null,['s1'],['s2']];
		$m['normpath'] = function(path) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);
			var $or5,$or4,initial_slashes,$mul6,$iter2_iter,slash,new_comps,$and8,$and9,$or7,$or6,$iter2_type,$or3,comp,$and7,$and12,$and13,$and10,$and11,$add13,$mul5,$add14,$iter2_nextval,comps,$iter2_idx,dot,$iter2_array;
			var $tupleassign2 = $p['__ass_unpack']($p['tuple'](['/', '.']), 2, null);
			slash = $tupleassign2[0];
			dot = $tupleassign2[1];
			if ($p['bool']($p['op_eq'](path, ''))) {
				return dot;
			}
			initial_slashes = path['startswith']('/');
			if ($p['bool'](($p['bool']($and7=initial_slashes)?($p['bool']($and8=path['startswith']('//'))?!$p['bool'](path['startswith']('///')):$and8):$and7))) {
				initial_slashes = $constant_int_2;
			}
			comps = path['$$split']('/');
			new_comps = $p['list']([]);
			$iter2_iter = comps;
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				comp = $iter2_nextval['$nextval'];
				if ($p['bool']($p['tuple'](['', '.'])['__contains__'](comp))) {
					continue;
				}
				if ($p['bool'](($p['bool']($or3=!$p['op_eq'](comp, '..'))?$or3:($p['bool']($or4=($p['bool']($and10=!$p['bool'](initial_slashes))?!$p['bool'](new_comps):$and10))?$or4:($p['bool']($and12=new_comps)?$p['op_eq'](new_comps['__getitem__']((typeof ($usub1=$constant_int_1)=='number'?
					-$usub1:
					$p['op_usub']($usub1))), '..'):$and12))))) {
					new_comps['append'](comp);
				}
				else if ($p['bool'](new_comps)) {
					new_comps['pop']();
				}
			}
			comps = new_comps;
			path = slash['join'](comps);
			if ($p['bool'](initial_slashes)) {
				path = $p['__op_add']($add13=(typeof ($mul5=slash)==typeof ($mul6=initial_slashes) && typeof $mul5=='number'?
					$mul5*$mul6:
					$p['op_mul']($mul5,$mul6)),$add14=path);
			}
			return ($p['bool']($or6=path)?$or6:dot);
		};
		$m['normpath']['__name__'] = 'normpath';

		$m['normpath']['__bind_type__'] = 0;
		$m['normpath']['__args__'] = [null,null,['path']];
		$m['abspath'] = function(path) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return $m['normpath'](path);
		};
		$m['abspath']['__name__'] = 'abspath';

		$m['abspath']['__bind_type__'] = 0;
		$m['abspath']['__args__'] = [null,null,['path']];
		$m['realpath'] = function(filename) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			return $m['abspath'](filename);
		};
		$m['realpath']['__name__'] = 'realpath';

		$m['realpath']['__bind_type__'] = 0;
		$m['realpath']['__args__'] = [null,null,['filename']];
		$m['islink'] = function(path) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			throw ($p['NotImplemented']());
			return null;
		};
		$m['islink']['__name__'] = 'islink';

		$m['islink']['__bind_type__'] = 0;
		$m['islink']['__args__'] = [null,null,['path']];
		$m['lexists'] = function(path) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			throw ($p['NotImplemented']());
			return null;
		};
		$m['lexists']['__name__'] = 'lexists';

		$m['lexists']['__bind_type__'] = 0;
		$m['lexists']['__args__'] = [null,null,['path']];
		$m['samefile'] = function(f1, f2) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);

			throw ($p['NotImplemented']());
			return null;
		};
		$m['samefile']['__name__'] = 'samefile';

		$m['samefile']['__bind_type__'] = 0;
		$m['samefile']['__args__'] = [null,null,['f1'],['f2']];
		$m['sameopenfile'] = function(fp1, fp2) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 2) $pyjs__exception_func_param(arguments['callee']['__name__'], 2, 2, arguments['length']);

			throw ($p['NotImplemented']());
			return null;
		};
		$m['sameopenfile']['__name__'] = 'sameopenfile';

		$m['sameopenfile']['__bind_type__'] = 0;
		$m['sameopenfile']['__args__'] = [null,null,['fp1'],['fp2']];
		$m['ismount'] = function(path) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			throw ($p['NotImplemented']());
			return null;
		};
		$m['ismount']['__name__'] = 'ismount';

		$m['ismount']['__bind_type__'] = 0;
		$m['ismount']['__args__'] = [null,null,['path']];
		$m['walk'] = function(top, func, arg) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 3, 3, arguments['length']);

			throw ($p['NotImplemented']());
			return null;
		};
		$m['walk']['__name__'] = 'walk';

		$m['walk']['__bind_type__'] = 0;
		$m['walk']['__args__'] = [null,null,['top'],['func'],['arg']];
		$m['expanduser'] = function(path) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			throw ($p['NotImplemented']());
			return null;
		};
		$m['expanduser']['__name__'] = 'expanduser';

		$m['expanduser']['__bind_type__'] = 0;
		$m['expanduser']['__args__'] = [null,null,['path']];
		$m['expandvars'] = function(path) {
			if ($pyjs['options']['arg_count'] && arguments['length'] != 1) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 1, arguments['length']);

			throw ($p['NotImplemented']());
			return null;
		};
		$m['expandvars']['__name__'] = 'expandvars';

		$m['expandvars']['__bind_type__'] = 0;
		$m['expandvars']['__args__'] = [null,null,['path']];
		$m['supports_unicode_filenames'] = $p['op_eq']($p['getattr']($m['sys'], 'platform'), 'darwin');
		$m['relpath'] = function(path, start) {
			if ($pyjs['options']['arg_count'] && (arguments['length'] < 1 || arguments['length'] > 2)) $pyjs__exception_func_param(arguments['callee']['__name__'], 1, 2, arguments['length']);
			if (typeof start == 'undefined') start=arguments['callee']['__args__'][3][1];

			throw ($p['NotImplemented']());
			return null;
		};
		$m['relpath']['__name__'] = 'relpath';

		$m['relpath']['__bind_type__'] = 0;
		$m['relpath']['__args__'] = [null,null,['path'],['start', $m['curdir']]];
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end pyjspath */


/* end module: pyjspath */


/*
PYJS_DEPS: ['os', 'sys', 'stat', 'genericpath']
*/
