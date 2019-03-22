/* start module: bones */
$pyjs['loaded_modules']['bones'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['bones']['__was_initialized__']) return $pyjs['loaded_modules']['bones'];
	var $m = $pyjs['loaded_modules']['bones'];
	$m['__repr__'] = function() { return '<module: bones>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'bones';
	$m['__name__'] = __mod_name__;
	try {


		$m['base'] = $p['___import___']('bones.base', 'bones', null, false);
		$m['relational'] = $p['___import___']('bones.relational', 'bones', null, false);
		$m['file'] = $p['___import___']('bones.file', 'bones', null, false);
		$m['hierarchy'] = $p['___import___']('bones.hierarchy', 'bones', null, false);
		$m['selectmulti'] = $p['___import___']('bones.selectmulti', 'bones', null, false);
		$m['selectone'] = $p['___import___']('bones.selectone', 'bones', null, false);
		$m['text'] = $p['___import___']('bones.text', 'bones', null, false);
		$m['date'] = $p['___import___']('bones.date', 'bones', null, false);
		$m['string'] = $p['___import___']('bones.string', 'bones', null, false);
		$m['boolean'] = $p['___import___']('bones.boolean', 'bones', null, false);
		$m['color'] = $p['___import___']('bones.color', 'bones', null, false);
		$m['email'] = $p['___import___']('bones.email', 'bones', null, false);
		$m['password'] = $p['___import___']('bones.password', 'bones', null, false);
		$m['numeric'] = $p['___import___']('bones.numeric', 'bones', null, false);
		$m['treedir'] = $p['___import___']('bones.treedir', 'bones', null, false);
		$m['spatial'] = $p['___import___']('bones.spatial', 'bones', null, false);
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end bones */


/* end module: bones */


/*
PYJS_DEPS: ['bones.base', 'bones', 'bones.relational', 'bones.file', 'bones.hierarchy', 'bones.selectmulti', 'bones.selectone', 'bones.text', 'bones.date', 'bones.string', 'bones.boolean', 'bones.color', 'bones.email', 'bones.password', 'bones.numeric', 'bones.treedir', 'bones.spatial']
*/
