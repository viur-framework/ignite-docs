from viur.core.render import admin, html, json, vi, xml

@html.utils.jinjaGlobalFilter
def isList(render, val):
	return isinstance(val, list)

@html.utils.jinjaGlobalFilter
def isDict(render, val):
	return isinstance(val, dict)

# -*- coding: utf-8 -*-
import os
from collections import OrderedDict

from viur.core import conf, request, utils
from viur.core.render.html import default as defaultRender
from viur.core.render.html.utils import jinjaGlobalFunction

@jinjaGlobalFunction
def getCurrSiteKey(render=None):
	currSite = u"start"
	request = utils.currentRequest.get()
	if len(request.args) > 0 and request.args[0]:
		currSite = request.args[0]
	return currSite


def getLastMenuItem(reverse=False):
	for menu in conf.get("docs.menu", {}):
		last = None
		lastName = None

		if reverse:
			menu = OrderedDict(list(menu.items())[::-1])

		for site, name in menu.items():
			if site == getCurrSiteKey():
				return {"site": last, "name": lastName}
			last = site
			lastName = name

	return {"site": None, "name": None}


@jinjaGlobalFunction
def getMenu(render):
	return conf.get("docs.menu", {})

@jinjaGlobalFunction
def getPrevMenuItem(render):
	return getLastMenuItem()

@jinjaGlobalFunction
def getNextMenuItem(render):
	return getLastMenuItem(reverse=True)

@jinjaGlobalFunction
def getCurrSiteName(render):
	currSite = getCurrSiteKey(render)

	for menu in conf.get("docs.menu", {}):
		if menu.get(currSite):
			return menu.get(currSite)

	return u"Start"

@jinjaGlobalFunction
def getChangeDate(render, path):
	if ".." in path or path.startswith("/") or path.startswith("~"):
		raise ValueError()

	return os.path.getmtime(os.path.join(os.getcwd(), "static/", path))
