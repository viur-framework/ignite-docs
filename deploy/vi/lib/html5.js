/* start module: html5 */
$pyjs['loaded_modules']['html5'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['html5']['__was_initialized__']) return $pyjs['loaded_modules']['html5'];
	var $m = $pyjs['loaded_modules']['html5'];
	$m['__repr__'] = function() { return '<module: html5>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'html5';
	$m['__name__'] = __mod_name__;
	try {


		$m['Widget'] = $p['___import___']('html5.widget.Widget', 'html5', null, false);
		$m['TextNode'] = $p['___import___']('html5.widget.TextNode', 'html5', null, false);
		$m['Body'] = $p['___import___']('html5.body.Body', 'html5', null, false);
		$m['Div'] = $p['___import___']('html5.div.Div', 'html5', null, false);
		$m['Table'] = $p['___import___']('html5.table.Table', 'html5', null, false);
		$m['Tbody'] = $p['___import___']('html5.table.Tbody', 'html5', null, false);
		$m['Thead'] = $p['___import___']('html5.table.Thead', 'html5', null, false);
		$m['Td'] = $p['___import___']('html5.table.Td', 'html5', null, false);
		$m['Th'] = $p['___import___']('html5.table.Th', 'html5', null, false);
		$m['Tr'] = $p['___import___']('html5.table.Tr', 'html5', null, false);
		$m['Ol'] = $p['___import___']('html5.list.Ol', 'html5', null, false);
		$m['Ul'] = $p['___import___']('html5.list.Ul', 'html5', null, false);
		$m['Li'] = $p['___import___']('html5.list.Li', 'html5', null, false);
		$m['Dl'] = $p['___import___']('html5.list.Dl', 'html5', null, false);
		$m['Dt'] = $p['___import___']('html5.list.Dt', 'html5', null, false);
		$m['Dd'] = $p['___import___']('html5.list.Dd', 'html5', null, false);
		$m['Button'] = $p['___import___']('html5.form.Button', 'html5', null, false);
		$m['Fieldset'] = $p['___import___']('html5.form.Fieldset', 'html5', null, false);
		$m['Form'] = $p['___import___']('html5.form.Form', 'html5', null, false);
		$m['Input'] = $p['___import___']('html5.form.Input', 'html5', null, false);
		$m['Label'] = $p['___import___']('html5.form.Label', 'html5', null, false);
		$m['Optgroup'] = $p['___import___']('html5.form.Optgroup', 'html5', null, false);
		$m['Option'] = $p['___import___']('html5.form.Option', 'html5', null, false);
		$m['Select'] = $p['___import___']('html5.form.Select', 'html5', null, false);
		$m['Textarea'] = $p['___import___']('html5.form.Textarea', 'html5', null, false);
		$m['Output'] = $p['___import___']('html5.form.Output', 'html5', null, false);
		$m['Head'] = $p['___import___']('html5.head.Head', 'html5', null, false);
		$m['Nav'] = $p['___import___']('html5.nav.Nav', 'html5', null, false);
		$m['Span'] = $p['___import___']('html5.span.Span', 'html5', null, false);
		$m['Base'] = $p['___import___']('html5.base.Base', 'html5', null, false);
		$m['A'] = $p['___import___']('html5.a.A', 'html5', null, false);
		$m['Area'] = $p['___import___']('html5.area.Area', 'html5', null, false);
		$m['Audio'] = $p['___import___']('html5.audio.Audio', 'html5', null, false);
		$m['Bdo'] = $p['___import___']('html5.bdo.Bdo', 'html5', null, false);
		$m['Blockquote'] = $p['___import___']('html5.blockquote.Blockquote', 'html5', null, false);
		$m['Canvas'] = $p['___import___']('html5.canvas.Canvas', 'html5', null, false);
		$m['Command'] = $p['___import___']('html5.command.Command', 'html5', null, false);
		$m['Details'] = $p['___import___']('html5.details.Details', 'html5', null, false);
		$m['Dialog'] = $p['___import___']('html5.dialog.Dialog', 'html5', null, false);
		$m['Embed'] = $p['___import___']('html5.embed.Embed', 'html5', null, false);
		$m['Iframe'] = $p['___import___']('html5.iframe.Iframe', 'html5', null, false);
		$m['Img'] = $p['___import___']('html5.img.Img', 'html5', null, false);
		$m['Ins'] = $p['___import___']('html5.ins.Ins', 'html5', null, false);
		$m['Keygen'] = $p['___import___']('html5.keygen.Keygen', 'html5', null, false);
		$m['Link'] = $p['___import___']('html5.link.Link', 'html5', null, false);
		$m['Map'] = $p['___import___']('html5.map.Map', 'html5', null, false);
		$m['Meta'] = $p['___import___']('html5.meta.Meta', 'html5', null, false);
		$m['Svg'] = $p['___import___']('html5.svg.Svg', 'html5', null, false);
		$m['SvgCircle'] = $p['___import___']('html5.svg.SvgCircle', 'html5', null, false);
		$m['SvgEllipse'] = $p['___import___']('html5.svg.SvgEllipse', 'html5', null, false);
		$m['SvgG'] = $p['___import___']('html5.svg.SvgG', 'html5', null, false);
		$m['SvgImage'] = $p['___import___']('html5.svg.SvgImage', 'html5', null, false);
		$m['SvgLine'] = $p['___import___']('html5.svg.SvgLine', 'html5', null, false);
		$m['SvgPath'] = $p['___import___']('html5.svg.SvgPath', 'html5', null, false);
		$m['SvgPolygon'] = $p['___import___']('html5.svg.SvgPolygon', 'html5', null, false);
		$m['SvgPolyline'] = $p['___import___']('html5.svg.SvgPolyline', 'html5', null, false);
		$m['SvgRect'] = $p['___import___']('html5.svg.SvgRect', 'html5', null, false);
		$m['SvgText'] = $p['___import___']('html5.svg.SvgText', 'html5', null, false);
		$m['Meter'] = $p['___import___']('html5.meter.Meter', 'html5', null, false);
		$m['Object'] = $p['___import___']('html5.object.Object', 'html5', null, false);
		$m['Param'] = $p['___import___']('html5.param.Param', 'html5', null, false);
		$m['Q'] = $p['___import___']('html5.q.Q', 'html5', null, false);
		$m['Progress'] = $p['___import___']('html5.progress.Progress', 'html5', null, false);
		$m['Source'] = $p['___import___']('html5.source.Source', 'html5', null, false);
		$m['Style'] = $p['___import___']('html5.style.Style', 'html5', null, false);
		$m['Time'] = $p['___import___']('html5.time.Time', 'html5', null, false);
		$m['Track'] = $p['___import___']('html5.track.Track', 'html5', null, false);
		$m['Video'] = $p['___import___']('html5.video.Video', 'html5', null, false);
		$m['Abbr'] = $p['___import___']('html5.elements.Abbr', 'html5', null, false);
		$m['Address'] = $p['___import___']('html5.elements.Address', 'html5', null, false);
		$m['Article'] = $p['___import___']('html5.elements.Article', 'html5', null, false);
		$m['Aside'] = $p['___import___']('html5.elements.Aside', 'html5', null, false);
		$m['B'] = $p['___import___']('html5.elements.B', 'html5', null, false);
		$m['Bdi'] = $p['___import___']('html5.elements.Bdi', 'html5', null, false);
		$m['Br'] = $p['___import___']('html5.elements.Br', 'html5', null, false);
		$m['Caption'] = $p['___import___']('html5.elements.Caption', 'html5', null, false);
		$m['Cite'] = $p['___import___']('html5.elements.Cite', 'html5', null, false);
		$m['Code'] = $p['___import___']('html5.elements.Code', 'html5', null, false);
		$m['Datalist'] = $p['___import___']('html5.elements.Datalist', 'html5', null, false);
		$m['Dfn'] = $p['___import___']('html5.elements.Dfn', 'html5', null, false);
		$m['Em'] = $p['___import___']('html5.elements.Em', 'html5', null, false);
		$m['Figcaption'] = $p['___import___']('html5.elements.Figcaption', 'html5', null, false);
		$m['Figure'] = $p['___import___']('html5.elements.Figure', 'html5', null, false);
		$m['Footer'] = $p['___import___']('html5.elements.Footer', 'html5', null, false);
		$m['Header'] = $p['___import___']('html5.elements.Header', 'html5', null, false);
		$m['H1'] = $p['___import___']('html5.elements.H1', 'html5', null, false);
		$m['H2'] = $p['___import___']('html5.elements.H2', 'html5', null, false);
		$m['H3'] = $p['___import___']('html5.elements.H3', 'html5', null, false);
		$m['H4'] = $p['___import___']('html5.elements.H4', 'html5', null, false);
		$m['H5'] = $p['___import___']('html5.elements.H5', 'html5', null, false);
		$m['H6'] = $p['___import___']('html5.elements.H6', 'html5', null, false);
		$m['Hr'] = $p['___import___']('html5.elements.Hr', 'html5', null, false);
		$m['I'] = $p['___import___']('html5.elements.I', 'html5', null, false);
		$m['Kdb'] = $p['___import___']('html5.elements.Kdb', 'html5', null, false);
		$m['Legend'] = $p['___import___']('html5.elements.Legend', 'html5', null, false);
		$m['Mark'] = $p['___import___']('html5.elements.Mark', 'html5', null, false);
		$m['Noscript'] = $p['___import___']('html5.elements.Noscript', 'html5', null, false);
		$m['P'] = $p['___import___']('html5.elements.P', 'html5', null, false);
		$m['Rq'] = $p['___import___']('html5.elements.Rq', 'html5', null, false);
		$m['Rt'] = $p['___import___']('html5.elements.Rt', 'html5', null, false);
		$m['Ruby'] = $p['___import___']('html5.elements.Ruby', 'html5', null, false);
		$m['S'] = $p['___import___']('html5.elements.S', 'html5', null, false);
		$m['Samp'] = $p['___import___']('html5.elements.Samp', 'html5', null, false);
		$m['Section'] = $p['___import___']('html5.elements.Section', 'html5', null, false);
		$m['Small'] = $p['___import___']('html5.elements.Small', 'html5', null, false);
		$m['Strong'] = $p['___import___']('html5.elements.Strong', 'html5', null, false);
		$m['Sub'] = $p['___import___']('html5.elements.Sub', 'html5', null, false);
		$m['Summery'] = $p['___import___']('html5.elements.Summery', 'html5', null, false);
		$m['Sup'] = $p['___import___']('html5.elements.Sup', 'html5', null, false);
		$m['U'] = $p['___import___']('html5.elements.U', 'html5', null, false);
		$m['Var'] = $p['___import___']('html5.elements.Var', 'html5', null, false);
		$m['Wbr'] = $p['___import___']('html5.elements.Wbr', 'html5', null, false);
		$m['Del'] = $p['___import___']('html5._del._Del', 'html5', null, false);
		$m['Script'] = $p['___import___']('html5._script._Script', 'html5', null, false);
		$m['html5'] = $p['___import___']('html5.ext', 'html5');
		$m['html5'] = $p['___import___']('html5.utils', 'html5');
		$m['html5'] = $p['___import___']('html5.parse', 'html5');
	} catch ($pyjs_attr_err) {throw $p['_errorMapping']($pyjs_attr_err);};
	return this;
}; /* end html5 */


/* end module: html5 */


/*
PYJS_DEPS: ['html5.widget.Widget', 'html5', 'html5.widget', 'html5.widget.TextNode', 'html5.body.Body', 'html5.body', 'html5.div.Div', 'html5.div', 'html5.table.Table', 'html5.table', 'html5.table.Tbody', 'html5.table.Thead', 'html5.table.Td', 'html5.table.Th', 'html5.table.Tr', 'html5.list.Ol', 'html5.list', 'html5.list.Ul', 'html5.list.Li', 'html5.list.Dl', 'html5.list.Dt', 'html5.list.Dd', 'html5.form.Button', 'html5.form', 'html5.form.Fieldset', 'html5.form.Form', 'html5.form.Input', 'html5.form.Label', 'html5.form.Optgroup', 'html5.form.Option', 'html5.form.Select', 'html5.form.Textarea', 'html5.form.Output', 'html5.head.Head', 'html5.head', 'html5.nav.Nav', 'html5.nav', 'html5.span.Span', 'html5.span', 'html5.base.Base', 'html5.base', 'html5.a.A', 'html5.a', 'html5.area.Area', 'html5.area', 'html5.audio.Audio', 'html5.audio', 'html5.bdo.Bdo', 'html5.bdo', 'html5.blockquote.Blockquote', 'html5.blockquote', 'html5.canvas.Canvas', 'html5.canvas', 'html5.command.Command', 'html5.command', 'html5.details.Details', 'html5.details', 'html5.dialog.Dialog', 'html5.dialog', 'html5.embed.Embed', 'html5.embed', 'html5.iframe.Iframe', 'html5.iframe', 'html5.img.Img', 'html5.img', 'html5.ins.Ins', 'html5.ins', 'html5.keygen.Keygen', 'html5.keygen', 'html5.link.Link', 'html5.link', 'html5.map.Map', 'html5.map', 'html5.meta.Meta', 'html5.meta', 'html5.svg.Svg', 'html5.svg', 'html5.svg.SvgCircle', 'html5.svg.SvgEllipse', 'html5.svg.SvgG', 'html5.svg.SvgImage', 'html5.svg.SvgLine', 'html5.svg.SvgPath', 'html5.svg.SvgPolygon', 'html5.svg.SvgPolyline', 'html5.svg.SvgRect', 'html5.svg.SvgText', 'html5.meter.Meter', 'html5.meter', 'html5.object.Object', 'html5.object', 'html5.param.Param', 'html5.param', 'html5.q.Q', 'html5.q', 'html5.progress.Progress', 'html5.progress', 'html5.source.Source', 'html5.source', 'html5.style.Style', 'html5.style', 'html5.time.Time', 'html5.time', 'html5.track.Track', 'html5.track', 'html5.video.Video', 'html5.video', 'html5.elements.Abbr', 'html5.elements', 'html5.elements.Address', 'html5.elements.Article', 'html5.elements.Aside', 'html5.elements.B', 'html5.elements.Bdi', 'html5.elements.Br', 'html5.elements.Caption', 'html5.elements.Cite', 'html5.elements.Code', 'html5.elements.Datalist', 'html5.elements.Dfn', 'html5.elements.Em', 'html5.elements.Figcaption', 'html5.elements.Figure', 'html5.elements.Footer', 'html5.elements.Header', 'html5.elements.H1', 'html5.elements.H2', 'html5.elements.H3', 'html5.elements.H4', 'html5.elements.H5', 'html5.elements.H6', 'html5.elements.Hr', 'html5.elements.I', 'html5.elements.Kdb', 'html5.elements.Legend', 'html5.elements.Mark', 'html5.elements.Noscript', 'html5.elements.P', 'html5.elements.Rq', 'html5.elements.Rt', 'html5.elements.Ruby', 'html5.elements.S', 'html5.elements.Samp', 'html5.elements.Section', 'html5.elements.Small', 'html5.elements.Strong', 'html5.elements.Sub', 'html5.elements.Summery', 'html5.elements.Sup', 'html5.elements.U', 'html5.elements.Var', 'html5.elements.Wbr', 'html5._del._Del', 'html5._del', 'html5._script._Script', 'html5._script', 'html5.ext', 'html5.utils', 'html5.parse']
*/
