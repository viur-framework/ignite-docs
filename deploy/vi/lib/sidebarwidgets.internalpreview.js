/* start module: sidebarwidgets.internalpreview */
$pyjs['loaded_modules']['sidebarwidgets.internalpreview'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['sidebarwidgets.internalpreview']['__was_initialized__']) return $pyjs['loaded_modules']['sidebarwidgets.internalpreview'];
	if(typeof $pyjs['loaded_modules']['sidebarwidgets'] == 'undefined' || !$pyjs['loaded_modules']['sidebarwidgets']['__was_initialized__']) $p['___import___']('sidebarwidgets', null);
	var $m = $pyjs['loaded_modules']['sidebarwidgets.internalpreview'];
	$m['__repr__'] = function() { return '<module: sidebarwidgets.internalpreview>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'sidebarwidgets.internalpreview';
	$m['__name__'] = __mod_name__;
	$pyjs['loaded_modules']['sidebarwidgets']['internalpreview'] = $pyjs['loaded_modules']['sidebarwidgets.internalpreview'];
	try {


		$m['html5'] = $p['___import___']('html5', 'sidebarwidgets');
		$m['viewDelegateSelector'] = $p['___import___']('priorityqueue.viewDelegateSelector', 'sidebarwidgets', null, false);
		$m['conf'] = $p['___import___']('config.conf', 'sidebarwidgets', null, false);
		$m['InternalPreview'] = (function(){
			var $cls_definition = new Object();
			var $method;
			$cls_definition['__module__'] = 'sidebarwidgets.internalpreview';
			$cls_definition['__md5__'] = '35f14f83e6b027f905e0814d9af86a39';
			$method = $pyjs__bind_method2('__init__', function(modul, structure, item) {
				if (this['__is_instance__'] === true) {
					var self = this;
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,3,arguments['length']-1));

					var kwargs = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						var kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_count'] && arguments['length'] < 3) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, null, arguments['length']+1);
				} else {
					var self = arguments[0];
					modul = arguments[1];
					structure = arguments[2];
					item = arguments[3];
					var args = $p['tuple']($pyjs_array_slice['call'](arguments,4,arguments['length']-1));

					var kwargs = arguments['length'] >= 5 ? arguments[arguments['length']-1] : arguments[arguments['length']];
					if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
						if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
						kwargs = arguments[arguments['length']+1];
					} else {
						delete kwargs['$pyjs_is_kwarg'];
					}
					if ($pyjs['options']['arg_is_instance'] && self['__is_instance__'] !== true) $pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
					if ($pyjs['options']['arg_count'] && arguments['length'] < 4) $pyjs__exception_func_param(arguments['callee']['__name__'], 4, null, arguments['length']);
				}
				if ($pyjs['options']['arg_instance_type']) {
					if (self.prototype['__md5__'] !== '35f14f83e6b027f905e0814d9af86a39') {
						if (!$p['_isinstance'](self, arguments['callee']['__class__'])) {
							$pyjs__exception_func_instance_expected(arguments['callee']['__name__'], arguments['callee']['__class__']['__name__'], self);
						}
					}
				}
				if (typeof kwargs == 'undefined') {
					kwargs = $p['__empty_dict']();
					if (typeof item != 'undefined') {
						if (item !== null && typeof item['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = item;
							item = arguments[4];
						}
					} else 					if (typeof structure != 'undefined') {
						if (structure !== null && typeof structure['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = structure;
							structure = arguments[4];
						}
					} else 					if (typeof modul != 'undefined') {
						if (modul !== null && typeof modul['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = modul;
							modul = arguments[4];
						}
					} else 					if (typeof self != 'undefined') {
						if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
							kwargs = self;
							self = arguments[4];
						}
					} else {
					}
				}
				var delegateFactory,$iter2_iter,$iter2_type,tmpDict,$and1,$and2,$and3,$and4,$iter2_idx,key,$iter2_nextval,$add2,$add3,$add1,$iter2_array,$add4,bone;
				$pyjs_kwargs_call($p['$$super']($m['InternalPreview'], self), '__init__', args, kwargs, [{}]);
				self['__getitem__']('class')['append']('internalpreview');
				tmpDict = function(){
					var $iter1_nextval,$iter1_type,$collcomp1,$iter1_iter,$iter1_idx,key,bone,$iter1_array;
	$collcomp1 = $p['dict']();
				$iter1_iter = structure;
				$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
				while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
					var $tupleassign1 = $p['__ass_unpack']($iter1_nextval['$nextval'], 2, null);
					key = $tupleassign1[0];
					bone = $tupleassign1[1];
					$collcomp1['__setitem__'](key, bone);
				}

	return $collcomp1;}();
				$iter2_iter = structure;
				$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
				while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
					var $tupleassign2 = $p['__ass_unpack']($iter2_nextval['$nextval'], 2, null);
					key = $tupleassign2[0];
					bone = $tupleassign2[1];
					if ($p['bool'](($p['bool']($and1=bone['keys']()['__contains__']('params'))?($p['bool']($and2=bone['__getitem__']('params'))?($p['bool']($and3=bone['__getitem__']('params')['keys']()['__contains__']('previewBone'))?$p['op_eq'](bone['__getitem__']('params')['__getitem__']('previewBone'), false):$and3):$and2):$and1))) {
						continue;
					}
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('ali', $m['html5']['Li']()) : $p['setattr'](self, 'ali', $m['html5']['Li']()); 
					$p['getattr'](self, 'ali')['__setitem__']('class', $p['list']([modul, $p['__op_add']($add1='type_',$add2=bone['__getitem__']('type')), $p['__op_add']($add3='bone_',$add4=key)]));
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('adl', $m['html5']['Dl']()) : $p['setattr'](self, 'adl', $m['html5']['Dl']()); 
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('adt', $m['html5']['Dt']()) : $p['setattr'](self, 'adt', $m['html5']['Dt']()); 
					self['adt']['appendChild']($m['html5']['TextNode'](($p['bool']($m['conf']['__getitem__']('showBoneNames'))? (key) : (bone['get']('descr', key)))));
					self['__is_instance__'] && typeof self['__setattr__'] == 'function' ? self['__setattr__']('aadd', $m['html5']['Dd']()) : $p['setattr'](self, 'aadd', $m['html5']['Dd']()); 
					delegateFactory = $m['viewDelegateSelector']['select'](modul, key, tmpDict)(modul, key, tmpDict);
					self['aadd']['appendChild'](delegateFactory['render'](item, key));
					self['adl']['appendChild']($p['getattr'](self, 'adt'));
					self['adl']['appendChild']($p['getattr'](self, 'aadd'));
					self['ali']['appendChild']($p['getattr'](self, 'adl'));
					self['appendChild']($p['getattr'](self, 'ali'));
				}
				return null;
			}
	, 1, ['args',['kwargs'],['self'],['modul'],['structure'],['item']]);
			$cls_definition['__init__'] = $method;
			var $bases = new Array($p['getattr']($m['html5'], 'Ul'));
			var $data = $p['dict']();
			for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
			return $p['_create_class']('InternalPreview', $p['tuple']($bases), $data);
		})();
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end sidebarwidgets.internalpreview */


/* end module: sidebarwidgets.internalpreview */


/*
PYJS_DEPS: ['html5', 'priorityqueue.viewDelegateSelector', 'priorityqueue', 'config.conf', 'config']
*/
