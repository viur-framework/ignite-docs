/* start module: bones.treedir */
$pyjs['loaded_modules']['bones.treedir'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['bones.treedir']['__was_initialized__']) return $pyjs['loaded_modules']['bones.treedir'];
	if(typeof $pyjs['loaded_modules']['bones'] == 'undefined' || !$pyjs['loaded_modules']['bones']['__was_initialized__']) $p['___import___']('bones', null);
	var $m = $pyjs['loaded_modules']['bones.treedir'];
	$m['__repr__'] = function() { return '<module: bones.treedir>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'bones.treedir';
	$m['__name__'] = __mod_name__;
	$m.__track_lines__ = new Array();
	$pyjs['loaded_modules']['bones']['treedir'] = $pyjs['loaded_modules']['bones.treedir'];
	$m.__track_lines__[1] = 'bones.treedir.py, line 1:\n    # -*- coding: utf-8 -*-';
	$m.__track_lines__[2] = 'bones.treedir.py, line 2:\n    import html5, utils';
	$m.__track_lines__[3] = 'bones.treedir.py, line 3:\n    from config import conf';
	$m.__track_lines__[4] = 'bones.treedir.py, line 4:\n    from priorityqueue import editBoneSelector, viewDelegateSelector';
	$m.__track_lines__[5] = 'bones.treedir.py, line 5:\n    from widgets.tree import TreeWidget, NodeWidget';
	$m.__track_lines__[6] = 'bones.treedir.py, line 6:\n    from widgets.file import FileWidget, LeafFileWidget';
	$m.__track_lines__[7] = 'bones.treedir.py, line 7:\n    from bones.relational import RelationalMultiSelectionBone, RelationalSingleSelectionBone, RelationalMultiSelectionBoneEntry';
	$m.__track_lines__[8] = 'bones.treedir.py, line 8:\n    from i18n import translate';
	$m.__track_lines__[9] = 'bones.treedir.py, line 9:\n    from network import NetworkService';
	$m.__track_lines__[10] = 'bones.treedir.py, line 10:\n    from widgets.edit import EditWidget';
	$m.__track_lines__[11] = 'bones.treedir.py, line 11:\n    from pane import Pane';
	$m.__track_lines__[13] = 'bones.treedir.py, line 13:\n    class TreeDirMultiSelectionBoneEntry(RelationalMultiSelectionBoneEntry):';
	$m.__track_lines__[14] = 'bones.treedir.py, line 14:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[15] = 'bones.treedir.py, line 15:\n    super(TreeDirMultiSelectionBoneEntry, self).__init__(*args, **kwargs)';
	$m.__track_lines__[16] = 'bones.treedir.py, line 16:\n    self["class"].append("fileentry")';
	$m.__track_lines__[18] = 'bones.treedir.py, line 18:\n    src = utils.getImagePreview(self.data)';
	$m.__track_lines__[20] = 'bones.treedir.py, line 20:\n    if src is not None:';
	$m.__track_lines__[21] = 'bones.treedir.py, line 21:\n    img = html5.Img()';
	$m.__track_lines__[22] = 'bones.treedir.py, line 22:\n    img["src"] = src';
	$m.__track_lines__[23] = 'bones.treedir.py, line 23:\n    img["class"].append("previewimg")';
	$m.__track_lines__[24] = 'bones.treedir.py, line 24:\n    self.appendChild(img)';
	$m.__track_lines__[27] = 'bones.treedir.py, line 27:\n    self.element.removeChild(img.element)';
	$m.__track_lines__[28] = 'bones.treedir.py, line 28:\n    self.element.insertBefore(img.element, self.element.children.item(0))';
	$m.__track_lines__[31] = 'bones.treedir.py, line 31:\n    self.removeChild(self.editBtn)';
	$m.__track_lines__[32] = 'bones.treedir.py, line 32:\n    self.editBtn = None';
	$m.__track_lines__[34] = 'bones.treedir.py, line 34:\n    def fetchEntry(self, key):';
	$m.__track_lines__[35] = 'bones.treedir.py, line 35:\n    NetworkService.request(self.module, "view/node/%s" % key,';
	$m.__track_lines__[39] = 'bones.treedir.py, line 39:\n    def onEdit(self, *args, **kwargs):';
	$m.__track_lines__[43] = 'bones.treedir.py, line 43:\n    pane = Pane( translate("Edit"), closeable=True, iconClasses=[ "modul_%s" % self.parent.destModule,';
	$m.__track_lines__[45] = 'bones.treedir.py, line 45:\n    conf["mainWindow"].stackPane( pane, focus=True )';
	$m.__track_lines__[46] = 'bones.treedir.py, line 46:\n    edwg = EditWidget( self.parent.destModule, EditWidget.appTree, key=self.data[ "key" ], skelType="leaf"  )';
	$m.__track_lines__[47] = 'bones.treedir.py, line 47:\n    pane.addWidget( edwg )';
	$m.__track_lines__[49] = 'bones.treedir.py, line 49:\n    class TreeDirMultiSelectionBone( RelationalMultiSelectionBone ):';
	$m.__track_lines__[51] = 'bones.treedir.py, line 51:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[52] = 'bones.treedir.py, line 52:\n    if "destModule" in kwargs:';
	$m.__track_lines__[53] = 'bones.treedir.py, line 53:\n    kwargs["destModule"] = kwargs["destModule"][ : kwargs["destModule"].find("_") ] # Remove _rootNode';
	$m.__track_lines__[54] = 'bones.treedir.py, line 54:\n    super(TreeDirMultiSelectionBone, self).__init__( *args, **kwargs )';
	$m.__track_lines__[56] = 'bones.treedir.py, line 56:\n    def onUploadSuccess(self, uploader, file ):';
	$m.__track_lines__[57] = 'bones.treedir.py, line 57:\n    self.setSelection( [file] )';
	$m.__track_lines__[59] = 'bones.treedir.py, line 59:\n    def onShowSelector(self, *args, **kwargs):';
	$m.__track_lines__[63] = 'bones.treedir.py, line 63:\n    currentSelector = FileWidget( self.destModule, isSelector="node" )';
	$m.__track_lines__[64] = 'bones.treedir.py, line 64:\n    currentSelector.selectionReturnEvent.register( self )';
	$m.__track_lines__[65] = 'bones.treedir.py, line 65:\n    conf["mainWindow"].stackWidget( currentSelector )';
	$m.__track_lines__[66] = 'bones.treedir.py, line 66:\n    self.parent()["class"].append("is_active")';
	$m.__track_lines__[68] = 'bones.treedir.py, line 68:\n    def onSelectionReturn(self, table, selection ):';
	$m.__track_lines__[72] = 'bones.treedir.py, line 72:\n    hasValidSelection = False';
	$m.__track_lines__[73] = 'bones.treedir.py, line 73:\n    for s in selection:';
	$m.__track_lines__[74] = 'bones.treedir.py, line 74:\n    if isinstance( s, NodeWidget ):';
	$m.__track_lines__[75] = 'bones.treedir.py, line 75:\n    hasValidSelection = True';
	$m.__track_lines__[76] = 'bones.treedir.py, line 76:\n    break';
	$m.__track_lines__[77] = "bones.treedir.py, line 77:\n    if not hasValidSelection: #Its just a folder that's been activated";
	$m.__track_lines__[78] = 'bones.treedir.py, line 78:\n    return';
	$m.__track_lines__[80] = 'bones.treedir.py, line 80:\n    self.setSelection([{"dest": x.data, "rel": {}} for x in selection if isinstance(x,NodeWidget)])';
	$m.__track_lines__[82] = 'bones.treedir.py, line 82:\n    def setSelection(self, selection):';
	$m.__track_lines__[89] = 'bones.treedir.py, line 89:\n    if selection is None:';
	$m.__track_lines__[90] = 'bones.treedir.py, line 90:\n    return';
	$m.__track_lines__[92] = 'bones.treedir.py, line 92:\n    for data in selection:';
	$m.__track_lines__[93] = 'bones.treedir.py, line 93:\n    entry = TreeDirMultiSelectionBoneEntry( self, self.destModule, data)';
	$m.__track_lines__[94] = 'bones.treedir.py, line 94:\n    self.addEntry( entry )';
	$m.__track_lines__[96] = 'bones.treedir.py, line 96:\n    class TreeDirSingleSelectionBone( RelationalSingleSelectionBone ):';
	$m.__track_lines__[98] = 'bones.treedir.py, line 98:\n    def __init__(self, *args, **kwargs):';
	$m.__track_lines__[99] = 'bones.treedir.py, line 99:\n    print("kwargs", kwargs)';
	$m.__track_lines__[100] = 'bones.treedir.py, line 100:\n    if "destModule" in kwargs:';
	$m.__track_lines__[101] = 'bones.treedir.py, line 101:\n    kwargs["destModule"] = kwargs["destModule"][ : kwargs["destModule"].find("_") ] # Remove _rootNode';
	$m.__track_lines__[103] = 'bones.treedir.py, line 103:\n    super(TreeDirSingleSelectionBone, self).__init__( *args, **kwargs )';
	$m.__track_lines__[105] = 'bones.treedir.py, line 105:\n    self.previewImg = html5.Img()';
	$m.__track_lines__[106] = 'bones.treedir.py, line 106:\n    self.previewImg["class"].append("previewimg")';
	$m.__track_lines__[107] = 'bones.treedir.py, line 107:\n    self.appendChild( self.previewImg )';
	$m.__track_lines__[110] = 'bones.treedir.py, line 110:\n    def onShowSelector(self, *args, **kwargs):';
	$m.__track_lines__[114] = 'bones.treedir.py, line 114:\n    currentSelector = TreeWidget( self.destModule, isSelector="node" )';
	$m.__track_lines__[115] = 'bones.treedir.py, line 115:\n    currentSelector.selectionReturnEvent.register( self )';
	$m.__track_lines__[116] = 'bones.treedir.py, line 116:\n    conf["mainWindow"].stackWidget( currentSelector )';
	$m.__track_lines__[117] = 'bones.treedir.py, line 117:\n    self.parent()["class"].append("is_active")';
	$m.__track_lines__[119] = 'bones.treedir.py, line 119:\n    def onSelectionReturn(self, table, selection ):';
	$m.__track_lines__[123] = 'bones.treedir.py, line 123:\n    hasValidSelection = False';
	$m.__track_lines__[124] = 'bones.treedir.py, line 124:\n    for s in selection:';
	$m.__track_lines__[125] = 'bones.treedir.py, line 125:\n    if isinstance( s, NodeWidget ):';
	$m.__track_lines__[126] = 'bones.treedir.py, line 126:\n    hasValidSelection = True';
	$m.__track_lines__[127] = 'bones.treedir.py, line 127:\n    break';
	$m.__track_lines__[128] = "bones.treedir.py, line 128:\n    if not hasValidSelection: #Its just a folder that's been activated";
	$m.__track_lines__[129] = 'bones.treedir.py, line 129:\n    return';
	$m.__track_lines__[130] = 'bones.treedir.py, line 130:\n    self.setSelection([{"dest": x.data, "rel": {}} for x in selection if isinstance(x, NodeWidget)][0])';
	$m.__track_lines__[132] = 'bones.treedir.py, line 132:\n    def onEdit(self, *args, **kwargs):';
	$m.__track_lines__[136] = 'bones.treedir.py, line 136:\n    if not self.selection:';
	$m.__track_lines__[137] = 'bones.treedir.py, line 137:\n    return';
	$m.__track_lines__[139] = 'bones.treedir.py, line 139:\n    pane = Pane( translate("Edit"), closeable=True, iconClasses=[ "modul_%s" % self.destModule,';
	$m.__track_lines__[141] = 'bones.treedir.py, line 141:\n    conf["mainWindow"].stackPane( pane, focus=True )';
	$m.__track_lines__[142] = 'bones.treedir.py, line 142:\n    edwg = EditWidget( self.destModule, EditWidget.appTree, key=self.selection[ "key" ], skelType="leaf"  )';
	$m.__track_lines__[143] = 'bones.treedir.py, line 143:\n    pane.addWidget( edwg )';
	$m.__track_lines__[145] = 'bones.treedir.py, line 145:\n    def setSelection(self, selection):';
	$m.__track_lines__[151] = 'bones.treedir.py, line 151:\n    self.selection = selection';
	$m.__track_lines__[152] = 'bones.treedir.py, line 152:\n    if selection:';
	$m.__track_lines__[153] = 'bones.treedir.py, line 153:\n    NetworkService.request( self.destModule, "view/node/"+selection["dest"]["key"],';
	$m.__track_lines__[155] = 'bones.treedir.py, line 155:\n    self.selectionTxt["value"] = translate("Loading...")';
	$m.__track_lines__[157] = 'bones.treedir.py, line 157:\n    if utils.getImagePreview( self.selection ) is not None:';
	$m.__track_lines__[158] = 'bones.treedir.py, line 158:\n    self.previewImg["src"] = utils.getImagePreview( self.selection )';
	$m.__track_lines__[159] = 'bones.treedir.py, line 159:\n    self.previewImg["style"]["display"] = ""';
	$m.__track_lines__[161] = 'bones.treedir.py, line 161:\n    self.previewImg["style"]["display"] = "none"';
	$m.__track_lines__[163] = 'bones.treedir.py, line 163:\n    self.selectionTxt["value"] = ""';
	$m.__track_lines__[164] = 'bones.treedir.py, line 164:\n    self.previewImg["style"]["display"] = "none"';
	$m.__track_lines__[166] = 'bones.treedir.py, line 166:\n    self.updateButtons()';
	$m.__track_lines__[170] = 'bones.treedir.py, line 170:\n    def CheckForTreeDirBoneSingleSelection(moduleName, boneName, skelStructure, *args, **kwargs):';
	$m.__track_lines__[171] = 'bones.treedir.py, line 171:\n    isMultiple = "multiple" in skelStructure[boneName].keys() and skelStructure[boneName]["multiple"]';
	$m.__track_lines__[172] = 'bones.treedir.py, line 172:\n    return CheckForTreeDirBone(moduleName, boneName, skelStructure) and not isMultiple';
	$m.__track_lines__[174] = 'bones.treedir.py, line 174:\n    def CheckForTreeDirBoneMultiSelection(moduleName, boneName, skelStructure, *args, **kwargs):';
	$m.__track_lines__[175] = 'bones.treedir.py, line 175:\n    isMultiple = "multiple" in skelStructure[boneName].keys() and skelStructure[boneName]["multiple"]';
	$m.__track_lines__[176] = 'bones.treedir.py, line 176:\n    return CheckForTreeDirBone(moduleName, boneName, skelStructure) and isMultiple';
	$m.__track_lines__[178] = 'bones.treedir.py, line 178:\n    def CheckForTreeDirBone(moduleName, boneName, skelStucture, *args, **kwargs):';
	$m.__track_lines__[179] = 'bones.treedir.py, line 179:\n    return skelStucture[boneName]["type"].startswith("treedir.")';
	$m.__track_lines__[182] = 'bones.treedir.py, line 182:\n    editBoneSelector.insert( 5, CheckForTreeDirBoneSingleSelection, TreeDirSingleSelectionBone)';
	$m.__track_lines__[183] = 'bones.treedir.py, line 183:\n    editBoneSelector.insert( 5, CheckForTreeDirBoneMultiSelection, TreeDirMultiSelectionBone)';


	$pyjs['track']['module']='bones.treedir';
	$pyjs['track']['lineno']=1;
	$pyjs['track']['lineno']=2;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['html5'] = $p['___import___']('html5', 'bones');
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['utils'] = $p['___import___']('utils', 'bones');
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=3;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['conf'] = $p['___import___']('config.conf', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=4;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['editBoneSelector'] = $p['___import___']('priorityqueue.editBoneSelector', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['viewDelegateSelector'] = $p['___import___']('priorityqueue.viewDelegateSelector', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=5;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['TreeWidget'] = $p['___import___']('widgets.tree.TreeWidget', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['NodeWidget'] = $p['___import___']('widgets.tree.NodeWidget', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=6;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['FileWidget'] = $p['___import___']('widgets.file.FileWidget', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['LeafFileWidget'] = $p['___import___']('widgets.file.LeafFileWidget', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=7;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['RelationalMultiSelectionBone'] = $p['___import___']('bones.relational.RelationalMultiSelectionBone', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['RelationalSingleSelectionBone'] = $p['___import___']('bones.relational.RelationalSingleSelectionBone', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['RelationalMultiSelectionBoneEntry'] = $p['___import___']('bones.relational.RelationalMultiSelectionBoneEntry', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=8;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['translate'] = $p['___import___']('i18n.translate', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=9;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['NetworkService'] = $p['___import___']('network.NetworkService', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=10;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['EditWidget'] = $p['___import___']('widgets.edit.EditWidget', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=11;
	$pyjs['track']={'module':$pyjs['track']['module'],'lineno':$pyjs['track']['lineno']};$pyjs['trackstack']['push']($pyjs['track']);
	$m['Pane'] = $p['___import___']('pane.Pane', 'bones', null, false);
	$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
	$pyjs['track']['lineno']=13;
	$m['TreeDirMultiSelectionBoneEntry'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'bones.treedir';
		$pyjs['track']['lineno']=14;
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']-1));

				var kwargs = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[1];
					}
				} else {
				}
			}
			var src,img;
			$pyjs['track']={'module':'bones.treedir', 'lineno':14};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.treedir';
			$pyjs['track']['lineno']=14;
			$pyjs['track']['lineno']=15;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['TreeDirMultiSelectionBoneEntry'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_1_err){if (!$p['isinstance']($pyjs_dbg_1_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_1_err);}throw $pyjs_dbg_1_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_2_err){if (!$p['isinstance']($pyjs_dbg_2_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_2_err);}throw $pyjs_dbg_2_err;
}})();
			$pyjs['track']['lineno']=16;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['__getitem__']('class')['append']('fileentry');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_3_err){if (!$p['isinstance']($pyjs_dbg_3_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_3_err);}throw $pyjs_dbg_3_err;
}})();
			$pyjs['track']['lineno']=18;
			src = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['utils']['getImagePreview']($p['getattr'](self, 'data'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_4_err){if (!$p['isinstance']($pyjs_dbg_4_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_4_err);}throw $pyjs_dbg_4_err;
}})();
			$pyjs['track']['lineno']=20;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((src !== null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_5_err){if (!$p['isinstance']($pyjs_dbg_5_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_5_err);}throw $pyjs_dbg_5_err;
}})()) {
				$pyjs['track']['lineno']=21;
				img = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['html5']['Img']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_6_err){if (!$p['isinstance']($pyjs_dbg_6_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_6_err);}throw $pyjs_dbg_6_err;
}})();
				$pyjs['track']['lineno']=22;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return img['__setitem__']('src', src);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_7_err){if (!$p['isinstance']($pyjs_dbg_7_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_7_err);}throw $pyjs_dbg_7_err;
}})();
				$pyjs['track']['lineno']=23;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return img['__getitem__']('class')['append']('previewimg');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_8_err){if (!$p['isinstance']($pyjs_dbg_8_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_8_err);}throw $pyjs_dbg_8_err;
}})();
				$pyjs['track']['lineno']=24;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['appendChild'](img);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_9_err){if (!$p['isinstance']($pyjs_dbg_9_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_9_err);}throw $pyjs_dbg_9_err;
}})();
				$pyjs['track']['lineno']=27;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['element']['removeChild']($p['getattr'](img, 'element'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_10_err){if (!$p['isinstance']($pyjs_dbg_10_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_10_err);}throw $pyjs_dbg_10_err;
}})();
				$pyjs['track']['lineno']=28;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['element']['insertBefore']($p['getattr'](img, 'element'), (function(){try{try{$pyjs['in_try_except'] += 1;
				return self['element']['children']['item'](0);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_11_err){if (!$p['isinstance']($pyjs_dbg_11_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_11_err);}throw $pyjs_dbg_11_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_12_err){if (!$p['isinstance']($pyjs_dbg_12_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_12_err);}throw $pyjs_dbg_12_err;
}})();
			}
			$pyjs['track']['lineno']=31;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['removeChild']($p['getattr'](self, 'editBtn'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_13_err){if (!$p['isinstance']($pyjs_dbg_13_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_13_err);}throw $pyjs_dbg_13_err;
}})();
			$pyjs['track']['lineno']=32;
			self['editBtn'] = null;
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=34;
		$method = $pyjs__bind_method2('fetchEntry', function(key) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
			}

			$pyjs['track']={'module':'bones.treedir', 'lineno':34};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.treedir';
			$pyjs['track']['lineno']=34;
			$pyjs['track']['lineno']=35;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'successHandler':$p['getattr'](self, 'onSelectionDataAviable'), 'cacheable':true}, $p['getattr'](self, 'module'), (function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('view/node/%s', key);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_14_err){if (!$p['isinstance']($pyjs_dbg_14_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_14_err);}throw $pyjs_dbg_14_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_15_err){if (!$p['isinstance']($pyjs_dbg_15_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_15_err);}throw $pyjs_dbg_15_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['key']]);
		$cls_definition['fetchEntry'] = $method;
		$pyjs['track']['lineno']=39;
		$method = $pyjs__bind_method2('onEdit', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']-1));

				var kwargs = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[1];
					}
				} else {
				}
			}
			var edwg,pane;
			$pyjs['track']={'module':'bones.treedir', 'lineno':39};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.treedir';
			$pyjs['track']['lineno']=39;
			$pyjs['track']['lineno']=43;
			pane = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(null, $m['Pane'], null, null, [{'closeable':true, 'iconClasses':(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('modul_%s', $p['getattr']($p['getattr'](self, 'parent'), 'destModule'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_17_err){if (!$p['isinstance']($pyjs_dbg_17_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_17_err);}throw $pyjs_dbg_17_err;
}})(), 'apptype_list', 'action_edit']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_18_err){if (!$p['isinstance']($pyjs_dbg_18_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_18_err);}throw $pyjs_dbg_18_err;
}})()}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Edit');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_16_err){if (!$p['isinstance']($pyjs_dbg_16_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_16_err);}throw $pyjs_dbg_16_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_19_err){if (!$p['isinstance']($pyjs_dbg_19_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_19_err);}throw $pyjs_dbg_19_err;
}})();
			$pyjs['track']['lineno']=45;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['conf']['__getitem__']('mainWindow'), 'stackPane', null, null, [{'focus':true}, pane]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_20_err){if (!$p['isinstance']($pyjs_dbg_20_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_20_err);}throw $pyjs_dbg_20_err;
}})();
			$pyjs['track']['lineno']=46;
			edwg = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(null, $m['EditWidget'], null, null, [{'key':$p['getattr'](self, 'data')['__getitem__']('key'), 'skelType':'leaf'}, $p['getattr']($p['getattr'](self, 'parent'), 'destModule'), $p['getattr']($m['EditWidget'], 'appTree')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_21_err){if (!$p['isinstance']($pyjs_dbg_21_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_21_err);}throw $pyjs_dbg_21_err;
}})();
			$pyjs['track']['lineno']=47;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return pane['addWidget'](edwg);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_22_err){if (!$p['isinstance']($pyjs_dbg_22_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_22_err);}throw $pyjs_dbg_22_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['onEdit'] = $method;
		$pyjs['track']['lineno']=13;
		var $bases = new Array($m['RelationalMultiSelectionBoneEntry']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('TreeDirMultiSelectionBoneEntry', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=49;
	$m['TreeDirMultiSelectionBone'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'bones.treedir';
		$pyjs['track']['lineno']=51;
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']-1));

				var kwargs = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[1];
					}
				} else {
				}
			}

			$pyjs['track']={'module':'bones.treedir', 'lineno':51};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.treedir';
			$pyjs['track']['lineno']=51;
			$pyjs['track']['lineno']=52;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](kwargs['__contains__']('destModule'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_23_err){if (!$p['isinstance']($pyjs_dbg_23_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_23_err);}throw $pyjs_dbg_23_err;
}})()) {
				$pyjs['track']['lineno']=53;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return kwargs['__setitem__']('destModule', $p['__getslice'](kwargs['__getitem__']('destModule'), 0, (function(){try{try{$pyjs['in_try_except'] += 1;
				return kwargs['__getitem__']('destModule')['find']('_');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_24_err){if (!$p['isinstance']($pyjs_dbg_24_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_24_err);}throw $pyjs_dbg_24_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_25_err){if (!$p['isinstance']($pyjs_dbg_25_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_25_err);}throw $pyjs_dbg_25_err;
}})();
			}
			$pyjs['track']['lineno']=54;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['TreeDirMultiSelectionBone'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_26_err){if (!$p['isinstance']($pyjs_dbg_26_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_26_err);}throw $pyjs_dbg_26_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_27_err){if (!$p['isinstance']($pyjs_dbg_27_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_27_err);}throw $pyjs_dbg_27_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=56;
		$method = $pyjs__bind_method2('onUploadSuccess', function(uploader, file) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				uploader = arguments[1];
				file = arguments[2];
			}

			$pyjs['track']={'module':'bones.treedir', 'lineno':56};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.treedir';
			$pyjs['track']['lineno']=56;
			$pyjs['track']['lineno']=57;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['setSelection']((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([file]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_28_err){if (!$p['isinstance']($pyjs_dbg_28_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_28_err);}throw $pyjs_dbg_28_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_29_err){if (!$p['isinstance']($pyjs_dbg_29_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_29_err);}throw $pyjs_dbg_29_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['uploader'],['file']]);
		$cls_definition['onUploadSuccess'] = $method;
		$pyjs['track']['lineno']=59;
		$method = $pyjs__bind_method2('onShowSelector', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']-1));

				var kwargs = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[1];
					}
				} else {
				}
			}
			var currentSelector;
			$pyjs['track']={'module':'bones.treedir', 'lineno':59};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.treedir';
			$pyjs['track']['lineno']=59;
			$pyjs['track']['lineno']=63;
			currentSelector = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(null, $m['FileWidget'], null, null, [{'isSelector':'node'}, $p['getattr'](self, 'destModule')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_30_err){if (!$p['isinstance']($pyjs_dbg_30_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_30_err);}throw $pyjs_dbg_30_err;
}})();
			$pyjs['track']['lineno']=64;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return currentSelector['selectionReturnEvent']['register'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_31_err){if (!$p['isinstance']($pyjs_dbg_31_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_31_err);}throw $pyjs_dbg_31_err;
}})();
			$pyjs['track']['lineno']=65;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('mainWindow')['stackWidget'](currentSelector);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_32_err){if (!$p['isinstance']($pyjs_dbg_32_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_32_err);}throw $pyjs_dbg_32_err;
}})();
			$pyjs['track']['lineno']=66;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_33_err){if (!$p['isinstance']($pyjs_dbg_33_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_33_err);}throw $pyjs_dbg_33_err;
}})()['__getitem__']('class')['append']('is_active');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_34_err){if (!$p['isinstance']($pyjs_dbg_34_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_34_err);}throw $pyjs_dbg_34_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['onShowSelector'] = $method;
		$pyjs['track']['lineno']=68;
		$method = $pyjs__bind_method2('onSelectionReturn', function(table, selection) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				table = arguments[1];
				selection = arguments[2];
			}
			var $iter1_nextval,$iter1_type,$iter1_idx,$iter1_iter,s,hasValidSelection,$pyjs__trackstack_size_1,$iter1_array;
			$pyjs['track']={'module':'bones.treedir', 'lineno':68};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.treedir';
			$pyjs['track']['lineno']=68;
			$pyjs['track']['lineno']=72;
			hasValidSelection = false;
			$pyjs['track']['lineno']=73;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter1_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return selection;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_35_err){if (!$p['isinstance']($pyjs_dbg_35_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_35_err);}throw $pyjs_dbg_35_err;
}})();
			$iter1_nextval=$p['__iter_prepare']($iter1_iter,false);
			while (typeof($p['__wrapped_next']($iter1_nextval)['$nextval']) != 'undefined') {
				s = $iter1_nextval['$nextval'];
				$pyjs['track']['lineno']=74;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](s, $m['NodeWidget']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_36_err){if (!$p['isinstance']($pyjs_dbg_36_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_36_err);}throw $pyjs_dbg_36_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_37_err){if (!$p['isinstance']($pyjs_dbg_37_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_37_err);}throw $pyjs_dbg_37_err;
}})()) {
					$pyjs['track']['lineno']=75;
					hasValidSelection = true;
					$pyjs['track']['lineno']=76;
					break;
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='bones.treedir';
			$pyjs['track']['lineno']=77;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool'](hasValidSelection));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_38_err){if (!$p['isinstance']($pyjs_dbg_38_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_38_err);}throw $pyjs_dbg_38_err;
}})()) {
				$pyjs['track']['lineno']=78;
				$pyjs['track']['lineno']=78;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=80;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['setSelection'](function(){
				var $iter2_nextval,$iter2_type,$iter2_iter,$collcomp1,$iter2_idx,$pyjs__trackstack_size_1,x,$iter2_array;
	$collcomp1 = $p['list']();
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter2_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return selection;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_39_err){if (!$p['isinstance']($pyjs_dbg_39_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_39_err);}throw $pyjs_dbg_39_err;
}})();
			$iter2_nextval=$p['__iter_prepare']($iter2_iter,false);
			while (typeof($p['__wrapped_next']($iter2_nextval)['$nextval']) != 'undefined') {
				x = $iter2_nextval['$nextval'];
				$pyjs['track']['lineno']=80;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](x, $m['NodeWidget']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_40_err){if (!$p['isinstance']($pyjs_dbg_40_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_40_err);}throw $pyjs_dbg_40_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_41_err){if (!$p['isinstance']($pyjs_dbg_41_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_41_err);}throw $pyjs_dbg_41_err;
}})()) {
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $collcomp1['append']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['dict']([['dest', $p['getattr'](x, 'data')], ['rel', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_42_err){if (!$p['isinstance']($pyjs_dbg_42_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_42_err);}throw $pyjs_dbg_42_err;
}})()]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_43_err){if (!$p['isinstance']($pyjs_dbg_43_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_43_err);}throw $pyjs_dbg_43_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_44_err){if (!$p['isinstance']($pyjs_dbg_44_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_44_err);}throw $pyjs_dbg_44_err;
}})();
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='bones.treedir';

	return $collcomp1;}());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_45_err){if (!$p['isinstance']($pyjs_dbg_45_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_45_err);}throw $pyjs_dbg_45_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['table'],['selection']]);
		$cls_definition['onSelectionReturn'] = $method;
		$pyjs['track']['lineno']=82;
		$method = $pyjs__bind_method2('setSelection', function(selection) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				selection = arguments[1];
			}
			var $iter3_type,$pyjs__trackstack_size_1,$iter3_idx,$iter3_iter,$iter3_array,entry,data,$iter3_nextval;
			$pyjs['track']={'module':'bones.treedir', 'lineno':82};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.treedir';
			$pyjs['track']['lineno']=82;
			$pyjs['track']['lineno']=89;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool']((selection === null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_46_err){if (!$p['isinstance']($pyjs_dbg_46_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_46_err);}throw $pyjs_dbg_46_err;
}})()) {
				$pyjs['track']['lineno']=90;
				$pyjs['track']['lineno']=90;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=92;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter3_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return selection;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_47_err){if (!$p['isinstance']($pyjs_dbg_47_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_47_err);}throw $pyjs_dbg_47_err;
}})();
			$iter3_nextval=$p['__iter_prepare']($iter3_iter,false);
			while (typeof($p['__wrapped_next']($iter3_nextval)['$nextval']) != 'undefined') {
				data = $iter3_nextval['$nextval'];
				$pyjs['track']['lineno']=93;
				entry = (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['TreeDirMultiSelectionBoneEntry'](self, $p['getattr'](self, 'destModule'), data);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_48_err){if (!$p['isinstance']($pyjs_dbg_48_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_48_err);}throw $pyjs_dbg_48_err;
}})();
				$pyjs['track']['lineno']=94;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return self['addEntry'](entry);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_49_err){if (!$p['isinstance']($pyjs_dbg_49_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_49_err);}throw $pyjs_dbg_49_err;
}})();
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='bones.treedir';
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['selection']]);
		$cls_definition['setSelection'] = $method;
		$pyjs['track']['lineno']=49;
		var $bases = new Array($m['RelationalMultiSelectionBone']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('TreeDirMultiSelectionBone', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=96;
	$m['TreeDirSingleSelectionBone'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'bones.treedir';
		$pyjs['track']['lineno']=98;
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']-1));

				var kwargs = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[1];
					}
				} else {
				}
			}

			$pyjs['track']={'module':'bones.treedir', 'lineno':98};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.treedir';
			$pyjs['track']['lineno']=98;
			$pyjs['track']['lineno']=99;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['printFunc']([(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['tuple'](['kwargs', kwargs]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_50_err){if (!$p['isinstance']($pyjs_dbg_50_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_50_err);}throw $pyjs_dbg_50_err;
}})()], 1);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_51_err){if (!$p['isinstance']($pyjs_dbg_51_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_51_err);}throw $pyjs_dbg_51_err;
}})();
			$pyjs['track']['lineno']=100;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](kwargs['__contains__']('destModule'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_52_err){if (!$p['isinstance']($pyjs_dbg_52_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_52_err);}throw $pyjs_dbg_52_err;
}})()) {
				$pyjs['track']['lineno']=101;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return kwargs['__setitem__']('destModule', $p['__getslice'](kwargs['__getitem__']('destModule'), 0, (function(){try{try{$pyjs['in_try_except'] += 1;
				return kwargs['__getitem__']('destModule')['find']('_');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_53_err){if (!$p['isinstance']($pyjs_dbg_53_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_53_err);}throw $pyjs_dbg_53_err;
}})()));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_54_err){if (!$p['isinstance']($pyjs_dbg_54_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_54_err);}throw $pyjs_dbg_54_err;
}})();
			}
			$pyjs['track']['lineno']=103;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call((function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['$$super']($m['TreeDirSingleSelectionBone'], self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_55_err){if (!$p['isinstance']($pyjs_dbg_55_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_55_err);}throw $pyjs_dbg_55_err;
}})(), '__init__', args, kwargs, [{}]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_56_err){if (!$p['isinstance']($pyjs_dbg_56_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_56_err);}throw $pyjs_dbg_56_err;
}})();
			$pyjs['track']['lineno']=105;
			self['previewImg'] = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['html5']['Img']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_57_err){if (!$p['isinstance']($pyjs_dbg_57_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_57_err);}throw $pyjs_dbg_57_err;
}})();
			$pyjs['track']['lineno']=106;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['getattr'](self, 'previewImg')['__getitem__']('class')['append']('previewimg');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_58_err){if (!$p['isinstance']($pyjs_dbg_58_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_58_err);}throw $pyjs_dbg_58_err;
}})();
			$pyjs['track']['lineno']=107;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['appendChild']($p['getattr'](self, 'previewImg'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_59_err){if (!$p['isinstance']($pyjs_dbg_59_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_59_err);}throw $pyjs_dbg_59_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$pyjs['track']['lineno']=110;
		$method = $pyjs__bind_method2('onShowSelector', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']-1));

				var kwargs = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[1];
					}
				} else {
				}
			}
			var currentSelector;
			$pyjs['track']={'module':'bones.treedir', 'lineno':110};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.treedir';
			$pyjs['track']['lineno']=110;
			$pyjs['track']['lineno']=114;
			currentSelector = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(null, $m['TreeWidget'], null, null, [{'isSelector':'node'}, $p['getattr'](self, 'destModule')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_60_err){if (!$p['isinstance']($pyjs_dbg_60_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_60_err);}throw $pyjs_dbg_60_err;
}})();
			$pyjs['track']['lineno']=115;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return currentSelector['selectionReturnEvent']['register'](self);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_61_err){if (!$p['isinstance']($pyjs_dbg_61_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_61_err);}throw $pyjs_dbg_61_err;
}})();
			$pyjs['track']['lineno']=116;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['conf']['__getitem__']('mainWindow')['stackWidget'](currentSelector);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_62_err){if (!$p['isinstance']($pyjs_dbg_62_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_62_err);}throw $pyjs_dbg_62_err;
}})();
			$pyjs['track']['lineno']=117;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return (function(){try{try{$pyjs['in_try_except'] += 1;
			return self['parent']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_63_err){if (!$p['isinstance']($pyjs_dbg_63_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_63_err);}throw $pyjs_dbg_63_err;
}})()['__getitem__']('class')['append']('is_active');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_64_err){if (!$p['isinstance']($pyjs_dbg_64_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_64_err);}throw $pyjs_dbg_64_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['onShowSelector'] = $method;
		$pyjs['track']['lineno']=119;
		$method = $pyjs__bind_method2('onSelectionReturn', function(table, selection) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				table = arguments[1];
				selection = arguments[2];
			}
			var $iter4_nextval,$iter4_idx,s,hasValidSelection,$iter4_type,$pyjs__trackstack_size_1,$iter4_array,$iter4_iter;
			$pyjs['track']={'module':'bones.treedir', 'lineno':119};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.treedir';
			$pyjs['track']['lineno']=119;
			$pyjs['track']['lineno']=123;
			hasValidSelection = false;
			$pyjs['track']['lineno']=124;
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter4_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return selection;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_65_err){if (!$p['isinstance']($pyjs_dbg_65_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_65_err);}throw $pyjs_dbg_65_err;
}})();
			$iter4_nextval=$p['__iter_prepare']($iter4_iter,false);
			while (typeof($p['__wrapped_next']($iter4_nextval)['$nextval']) != 'undefined') {
				s = $iter4_nextval['$nextval'];
				$pyjs['track']['lineno']=125;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](s, $m['NodeWidget']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_66_err){if (!$p['isinstance']($pyjs_dbg_66_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_66_err);}throw $pyjs_dbg_66_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_67_err){if (!$p['isinstance']($pyjs_dbg_67_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_67_err);}throw $pyjs_dbg_67_err;
}})()) {
					$pyjs['track']['lineno']=126;
					hasValidSelection = true;
					$pyjs['track']['lineno']=127;
					break;
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='bones.treedir';
			$pyjs['track']['lineno']=128;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool'](hasValidSelection));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_68_err){if (!$p['isinstance']($pyjs_dbg_68_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_68_err);}throw $pyjs_dbg_68_err;
}})()) {
				$pyjs['track']['lineno']=129;
				$pyjs['track']['lineno']=129;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=130;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['setSelection'](function(){
				var $iter5_nextval,x,$iter5_idx,$pyjs__trackstack_size_1,$collcomp2,$iter5_iter,$iter5_array,$iter5_type;
	$collcomp2 = $p['list']();
			$pyjs__trackstack_size_1=$pyjs['trackstack']['length'];
			$iter5_iter = (function(){try{try{$pyjs['in_try_except'] += 1;
			return selection;
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_69_err){if (!$p['isinstance']($pyjs_dbg_69_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_69_err);}throw $pyjs_dbg_69_err;
}})();
			$iter5_nextval=$p['__iter_prepare']($iter5_iter,false);
			while (typeof($p['__wrapped_next']($iter5_nextval)['$nextval']) != 'undefined') {
				x = $iter5_nextval['$nextval'];
				$pyjs['track']['lineno']=130;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool']((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['isinstance'](x, $m['NodeWidget']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_70_err){if (!$p['isinstance']($pyjs_dbg_70_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_70_err);}throw $pyjs_dbg_70_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_71_err){if (!$p['isinstance']($pyjs_dbg_71_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_71_err);}throw $pyjs_dbg_71_err;
}})()) {
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $collcomp2['append']((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['dict']([['dest', $p['getattr'](x, 'data')], ['rel', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['dict']([]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_72_err){if (!$p['isinstance']($pyjs_dbg_72_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_72_err);}throw $pyjs_dbg_72_err;
}})()]]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_73_err){if (!$p['isinstance']($pyjs_dbg_73_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_73_err);}throw $pyjs_dbg_73_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_74_err){if (!$p['isinstance']($pyjs_dbg_74_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_74_err);}throw $pyjs_dbg_74_err;
}})();
				}
			}
			if ($pyjs['trackstack']['length'] > $pyjs__trackstack_size_1) {
				$pyjs['trackstack'] = $pyjs['trackstack']['slice'](0,$pyjs__trackstack_size_1);
				$pyjs['track'] = $pyjs['trackstack']['slice'](-1)[0];
			}
			$pyjs['track']['module']='bones.treedir';

	return $collcomp2;}()['__getitem__'](0));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_75_err){if (!$p['isinstance']($pyjs_dbg_75_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_75_err);}throw $pyjs_dbg_75_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['table'],['selection']]);
		$cls_definition['onSelectionReturn'] = $method;
		$pyjs['track']['lineno']=132;
		$method = $pyjs__bind_method2('onEdit', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,0,arguments['length']-1));

				var kwargs = arguments['length'] >= 1 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					var kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var args = $p['tuple']($pyjs_array_slice['call'](arguments,1,arguments['length']-1));

				var kwargs = arguments['length'] >= 2 ? arguments[arguments['length']-1] : arguments[arguments['length']];
				if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
					if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
					kwargs = arguments[arguments['length']+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = $p['__empty_dict']();
				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[1];
					}
				} else {
				}
			}
			var edwg,pane;
			$pyjs['track']={'module':'bones.treedir', 'lineno':132};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.treedir';
			$pyjs['track']['lineno']=132;
			$pyjs['track']['lineno']=136;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](!$p['bool']($p['getattr'](self, 'selection')));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_76_err){if (!$p['isinstance']($pyjs_dbg_76_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_76_err);}throw $pyjs_dbg_76_err;
}})()) {
				$pyjs['track']['lineno']=137;
				$pyjs['track']['lineno']=137;
				var $pyjs__ret = null;
				$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
				return $pyjs__ret;
			}
			$pyjs['track']['lineno']=139;
			pane = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(null, $m['Pane'], null, null, [{'closeable':true, 'iconClasses':(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['list']([(function(){try{try{$pyjs['in_try_except'] += 1;
			return $p['sprintf']('modul_%s', $p['getattr'](self, 'destModule'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_78_err){if (!$p['isinstance']($pyjs_dbg_78_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_78_err);}throw $pyjs_dbg_78_err;
}})(), 'apptype_list', 'action_edit']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_79_err){if (!$p['isinstance']($pyjs_dbg_79_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_79_err);}throw $pyjs_dbg_79_err;
}})()}, (function(){try{try{$pyjs['in_try_except'] += 1;
			return $m['translate']('Edit');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_77_err){if (!$p['isinstance']($pyjs_dbg_77_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_77_err);}throw $pyjs_dbg_77_err;
}})()]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_80_err){if (!$p['isinstance']($pyjs_dbg_80_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_80_err);}throw $pyjs_dbg_80_err;
}})();
			$pyjs['track']['lineno']=141;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call($m['conf']['__getitem__']('mainWindow'), 'stackPane', null, null, [{'focus':true}, pane]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_81_err){if (!$p['isinstance']($pyjs_dbg_81_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_81_err);}throw $pyjs_dbg_81_err;
}})();
			$pyjs['track']['lineno']=142;
			edwg = (function(){try{try{$pyjs['in_try_except'] += 1;
			return $pyjs_kwargs_call(null, $m['EditWidget'], null, null, [{'key':$p['getattr'](self, 'selection')['__getitem__']('key'), 'skelType':'leaf'}, $p['getattr'](self, 'destModule'), $p['getattr']($m['EditWidget'], 'appTree')]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_82_err){if (!$p['isinstance']($pyjs_dbg_82_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_82_err);}throw $pyjs_dbg_82_err;
}})();
			$pyjs['track']['lineno']=143;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return pane['addWidget'](edwg);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_83_err){if (!$p['isinstance']($pyjs_dbg_83_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_83_err);}throw $pyjs_dbg_83_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, ['args',['kwargs'],['self']]);
		$cls_definition['onEdit'] = $method;
		$pyjs['track']['lineno']=145;
		$method = $pyjs__bind_method2('setSelection', function(selection) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				selection = arguments[1];
			}
			var $add2,$add1;
			$pyjs['track']={'module':'bones.treedir', 'lineno':145};$pyjs['trackstack']['push']($pyjs['track']);
			$pyjs['track']['module']='bones.treedir';
			$pyjs['track']['lineno']=145;
			$pyjs['track']['lineno']=151;
			self['selection'] = selection;
			$pyjs['track']['lineno']=152;
			if ((function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['bool'](selection);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_84_err){if (!$p['isinstance']($pyjs_dbg_84_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_84_err);}throw $pyjs_dbg_84_err;
}})()) {
				$pyjs['track']['lineno']=153;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $pyjs_kwargs_call($m['NetworkService'], 'request', null, null, [{'successHandler':$p['getattr'](self, 'onSelectionDataAvailable'), 'cacheable':true}, $p['getattr'](self, 'destModule'), $p['__op_add']($add1='view/node/',$add2=selection['__getitem__']('dest')['__getitem__']('key'))]);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_85_err){if (!$p['isinstance']($pyjs_dbg_85_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_85_err);}throw $pyjs_dbg_85_err;
}})();
				$pyjs['track']['lineno']=155;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'selectionTxt')['__setitem__']('value', (function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['translate']('Loading...');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_86_err){if (!$p['isinstance']($pyjs_dbg_86_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_86_err);}throw $pyjs_dbg_86_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_87_err){if (!$p['isinstance']($pyjs_dbg_87_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_87_err);}throw $pyjs_dbg_87_err;
}})();
				$pyjs['track']['lineno']=157;
				if ((function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['bool'](((function(){try{try{$pyjs['in_try_except'] += 1;
				return $m['utils']['getImagePreview']($p['getattr'](self, 'selection'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_88_err){if (!$p['isinstance']($pyjs_dbg_88_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_88_err);}throw $pyjs_dbg_88_err;
}})() !== null));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_89_err){if (!$p['isinstance']($pyjs_dbg_89_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_89_err);}throw $pyjs_dbg_89_err;
}})()) {
					$pyjs['track']['lineno']=158;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'previewImg')['__setitem__']('src', (function(){try{try{$pyjs['in_try_except'] += 1;
					return $m['utils']['getImagePreview']($p['getattr'](self, 'selection'));
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_90_err){if (!$p['isinstance']($pyjs_dbg_90_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_90_err);}throw $pyjs_dbg_90_err;
}})());
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_91_err){if (!$p['isinstance']($pyjs_dbg_91_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_91_err);}throw $pyjs_dbg_91_err;
}})();
					$pyjs['track']['lineno']=159;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'previewImg')['__getitem__']('style')['__setitem__']('display', '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_92_err){if (!$p['isinstance']($pyjs_dbg_92_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_92_err);}throw $pyjs_dbg_92_err;
}})();
				}
				else {
					$pyjs['track']['lineno']=161;
					(function(){try{try{$pyjs['in_try_except'] += 1;
					return $p['getattr'](self, 'previewImg')['__getitem__']('style')['__setitem__']('display', 'none');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_93_err){if (!$p['isinstance']($pyjs_dbg_93_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_93_err);}throw $pyjs_dbg_93_err;
}})();
				}
			}
			else {
				$pyjs['track']['lineno']=163;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'selectionTxt')['__setitem__']('value', '');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_94_err){if (!$p['isinstance']($pyjs_dbg_94_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_94_err);}throw $pyjs_dbg_94_err;
}})();
				$pyjs['track']['lineno']=164;
				(function(){try{try{$pyjs['in_try_except'] += 1;
				return $p['getattr'](self, 'previewImg')['__getitem__']('style')['__setitem__']('display', 'none');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_95_err){if (!$p['isinstance']($pyjs_dbg_95_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_95_err);}throw $pyjs_dbg_95_err;
}})();
			}
			$pyjs['track']['lineno']=166;
			(function(){try{try{$pyjs['in_try_except'] += 1;
			return self['updateButtons']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_96_err){if (!$p['isinstance']($pyjs_dbg_96_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_96_err);}throw $pyjs_dbg_96_err;
}})();
			$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
			return null;
		}
	, 1, [null,null,['self'],['selection']]);
		$cls_definition['setSelection'] = $method;
		$pyjs['track']['lineno']=96;
		var $bases = new Array($m['RelationalSingleSelectionBone']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('TreeDirSingleSelectionBone', $p['tuple']($bases), $data);
	})();
	$pyjs['track']['lineno']=170;
	$m['CheckForTreeDirBoneSingleSelection'] = function(moduleName, boneName, skelStructure) {
		var args = $p['tuple']($pyjs_array_slice['call'](arguments,3,arguments['length']-1));

		var kwargs = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
		if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
			if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
			kwargs = arguments[arguments['length']+1];
		} else {
			delete kwargs['$pyjs_is_kwarg'];
		}
		if (typeof kwargs == 'undefined') {
			kwargs = $p['__empty_dict']();
			if (typeof skelStructure != 'undefined') {
				if (skelStructure !== null && typeof skelStructure['$pyjs_is_kwarg'] != 'undefined') {
					kwargs = skelStructure;
					skelStructure = arguments[3];
				}
			} else 			if (typeof boneName != 'undefined') {
				if (boneName !== null && typeof boneName['$pyjs_is_kwarg'] != 'undefined') {
					kwargs = boneName;
					boneName = arguments[3];
				}
			} else 			if (typeof moduleName != 'undefined') {
				if (moduleName !== null && typeof moduleName['$pyjs_is_kwarg'] != 'undefined') {
					kwargs = moduleName;
					moduleName = arguments[3];
				}
			} else {
			}
		}
		var $and1,$and2,$and4,$and3,isMultiple;
		$pyjs['track']={'module':'bones.treedir','lineno':170};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='bones.treedir';
		$pyjs['track']['lineno']=170;
		$pyjs['track']['lineno']=171;
		isMultiple = ($p['bool']($and1=(function(){try{try{$pyjs['in_try_except'] += 1;
		return skelStructure['__getitem__'](boneName)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_97_err){if (!$p['isinstance']($pyjs_dbg_97_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_97_err);}throw $pyjs_dbg_97_err;
}})()['__contains__']('multiple'))?skelStructure['__getitem__'](boneName)['__getitem__']('multiple'):$and1);
		$pyjs['track']['lineno']=172;
		$pyjs['track']['lineno']=172;
		var $pyjs__ret = ($p['bool']($and3=(function(){try{try{$pyjs['in_try_except'] += 1;
		return (typeof CheckForTreeDirBone == "undefined"?$m['CheckForTreeDirBone']:CheckForTreeDirBone)(moduleName, boneName, skelStructure);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_98_err){if (!$p['isinstance']($pyjs_dbg_98_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_98_err);}throw $pyjs_dbg_98_err;
}})())?!$p['bool'](isMultiple):$and3);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['CheckForTreeDirBoneSingleSelection']['__name__'] = 'CheckForTreeDirBoneSingleSelection';

	$m['CheckForTreeDirBoneSingleSelection']['__bind_type__'] = 0;
	$m['CheckForTreeDirBoneSingleSelection']['__args__'] = ['args',['kwargs'],['moduleName'],['boneName'],['skelStructure']];
	$pyjs['track']['lineno']=174;
	$m['CheckForTreeDirBoneMultiSelection'] = function(moduleName, boneName, skelStructure) {
		var args = $p['tuple']($pyjs_array_slice['call'](arguments,3,arguments['length']-1));

		var kwargs = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
		if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
			if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
			kwargs = arguments[arguments['length']+1];
		} else {
			delete kwargs['$pyjs_is_kwarg'];
		}
		if (typeof kwargs == 'undefined') {
			kwargs = $p['__empty_dict']();
			if (typeof skelStructure != 'undefined') {
				if (skelStructure !== null && typeof skelStructure['$pyjs_is_kwarg'] != 'undefined') {
					kwargs = skelStructure;
					skelStructure = arguments[3];
				}
			} else 			if (typeof boneName != 'undefined') {
				if (boneName !== null && typeof boneName['$pyjs_is_kwarg'] != 'undefined') {
					kwargs = boneName;
					boneName = arguments[3];
				}
			} else 			if (typeof moduleName != 'undefined') {
				if (moduleName !== null && typeof moduleName['$pyjs_is_kwarg'] != 'undefined') {
					kwargs = moduleName;
					moduleName = arguments[3];
				}
			} else {
			}
		}
		var $and8,$and5,$and6,$and7,isMultiple;
		$pyjs['track']={'module':'bones.treedir','lineno':174};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='bones.treedir';
		$pyjs['track']['lineno']=174;
		$pyjs['track']['lineno']=175;
		isMultiple = ($p['bool']($and5=(function(){try{try{$pyjs['in_try_except'] += 1;
		return skelStructure['__getitem__'](boneName)['keys']();
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_99_err){if (!$p['isinstance']($pyjs_dbg_99_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_99_err);}throw $pyjs_dbg_99_err;
}})()['__contains__']('multiple'))?skelStructure['__getitem__'](boneName)['__getitem__']('multiple'):$and5);
		$pyjs['track']['lineno']=176;
		$pyjs['track']['lineno']=176;
		var $pyjs__ret = ($p['bool']($and7=(function(){try{try{$pyjs['in_try_except'] += 1;
		return (typeof CheckForTreeDirBone == "undefined"?$m['CheckForTreeDirBone']:CheckForTreeDirBone)(moduleName, boneName, skelStructure);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_100_err){if (!$p['isinstance']($pyjs_dbg_100_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_100_err);}throw $pyjs_dbg_100_err;
}})())?isMultiple:$and7);
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['CheckForTreeDirBoneMultiSelection']['__name__'] = 'CheckForTreeDirBoneMultiSelection';

	$m['CheckForTreeDirBoneMultiSelection']['__bind_type__'] = 0;
	$m['CheckForTreeDirBoneMultiSelection']['__args__'] = ['args',['kwargs'],['moduleName'],['boneName'],['skelStructure']];
	$pyjs['track']['lineno']=178;
	$m['CheckForTreeDirBone'] = function(moduleName, boneName, skelStucture) {
		var args = $p['tuple']($pyjs_array_slice['call'](arguments,3,arguments['length']-1));

		var kwargs = arguments['length'] >= 4 ? arguments[arguments['length']-1] : arguments[arguments['length']];
		if (kwargs === null || typeof kwargs != 'object' || kwargs['__name__'] != 'dict' || typeof kwargs['$pyjs_is_kwarg'] == 'undefined') {
			if (typeof kwargs != 'undefined') args['__array']['push'](kwargs);
			kwargs = arguments[arguments['length']+1];
		} else {
			delete kwargs['$pyjs_is_kwarg'];
		}
		if (typeof kwargs == 'undefined') {
			kwargs = $p['__empty_dict']();
			if (typeof skelStucture != 'undefined') {
				if (skelStucture !== null && typeof skelStucture['$pyjs_is_kwarg'] != 'undefined') {
					kwargs = skelStucture;
					skelStucture = arguments[3];
				}
			} else 			if (typeof boneName != 'undefined') {
				if (boneName !== null && typeof boneName['$pyjs_is_kwarg'] != 'undefined') {
					kwargs = boneName;
					boneName = arguments[3];
				}
			} else 			if (typeof moduleName != 'undefined') {
				if (moduleName !== null && typeof moduleName['$pyjs_is_kwarg'] != 'undefined') {
					kwargs = moduleName;
					moduleName = arguments[3];
				}
			} else {
			}
		}

		$pyjs['track']={'module':'bones.treedir','lineno':178};$pyjs['trackstack']['push']($pyjs['track']);
		$pyjs['track']['module']='bones.treedir';
		$pyjs['track']['lineno']=178;
		$pyjs['track']['lineno']=179;
		$pyjs['track']['lineno']=179;
		var $pyjs__ret = (function(){try{try{$pyjs['in_try_except'] += 1;
		return skelStucture['__getitem__'](boneName)['__getitem__']('type')['startswith']('treedir.');
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_101_err){if (!$p['isinstance']($pyjs_dbg_101_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_101_err);}throw $pyjs_dbg_101_err;
}})();
		$pyjs['trackstack']['pop']();$pyjs['track']=$pyjs['trackstack']['pop']();$pyjs['trackstack']['push']($pyjs['track']);
		return $pyjs__ret;
	};
	$m['CheckForTreeDirBone']['__name__'] = 'CheckForTreeDirBone';

	$m['CheckForTreeDirBone']['__bind_type__'] = 0;
	$m['CheckForTreeDirBone']['__args__'] = ['args',['kwargs'],['moduleName'],['boneName'],['skelStucture']];
	$pyjs['track']['lineno']=182;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['editBoneSelector']['insert'](5, $m['CheckForTreeDirBoneSingleSelection'], $m['TreeDirSingleSelectionBone']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_102_err){if (!$p['isinstance']($pyjs_dbg_102_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_102_err);}throw $pyjs_dbg_102_err;
}})();
	$pyjs['track']['lineno']=183;
	(function(){try{try{$pyjs['in_try_except'] += 1;
	return $m['editBoneSelector']['insert'](5, $m['CheckForTreeDirBoneMultiSelection'], $m['TreeDirMultiSelectionBone']);
}finally{$pyjs['in_try_except']-=1;}}catch($pyjs_dbg_103_err){if (!$p['isinstance']($pyjs_dbg_103_err, $p['StopIteration'])){$p['_handle_exception']($pyjs_dbg_103_err);}throw $pyjs_dbg_103_err;
}})();
	return this;
}; /* end bones.treedir */


/* end module: bones.treedir */


/*
PYJS_DEPS: ['html5', 'utils', 'config.conf', 'config', 'priorityqueue.editBoneSelector', 'priorityqueue', 'priorityqueue.viewDelegateSelector', 'widgets.tree.TreeWidget', 'widgets', 'widgets.tree', 'widgets.tree.NodeWidget', 'widgets.file.FileWidget', 'widgets.file', 'widgets.file.LeafFileWidget', 'bones.relational.RelationalMultiSelectionBone', 'bones', 'bones.relational', 'bones.relational.RelationalSingleSelectionBone', 'bones.relational.RelationalMultiSelectionBoneEntry', 'i18n.translate', 'i18n', 'network.NetworkService', 'network', 'widgets.edit.EditWidget', 'widgets.edit', 'pane.Pane', 'pane']
*/
