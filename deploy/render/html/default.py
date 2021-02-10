# -*- coding: utf-8 -*-
import os
from collections import OrderedDict

from server import conf, request
from server.render.html import default as defaultRender
from server.render.html.utils import jinjaGlobalFunction


def getCurrSiteKey():
	currSite = u"start"
	if len(request.current.get().args) > 0 and request.current.get().args[0]:
		currSite = request.current.get().args[0]
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


class Render(defaultRender):

	@jinjaGlobalFunction
	def getMenu(self):
		return conf.get("docs.menu", {})

	@jinjaGlobalFunction
	def getPrevMenuItem(self):
		return getLastMenuItem()

	@jinjaGlobalFunction
	def getNextMenuItem(self):
		return getLastMenuItem(reverse=True)

	@jinjaGlobalFunction
	def getCurrSiteKey(self):
		return getCurrSiteKey()

	@jinjaGlobalFunction
	def getCurrSiteName(self):
		currSite = getCurrSiteKey()

		for menu in conf.get("docs.menu", {}):
			if menu.get(currSite):
				return menu.get(currSite)

		return u"Start"

	@jinjaGlobalFunction
	def getChangeDate(self, path):
		if ".." in path or path.startswith("/") or path.startswith("~"):
			raise ValueError()

		return os.path.getmtime(os.path.join(os.getcwd(), "static/", path))
