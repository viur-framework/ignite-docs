# -*- coding: utf-8 -*-

from server.render.html import default as defaultRender
from server.render.html.utils import jinjaGlobalFilter, jinjaGlobalExtension, jinjaGlobalFunction
from server import conf, request
import logging
from collections import OrderedDict


def getLastMenuItem(reverse=False):
	currSite = u"start"
	if len(request.current.get().args) > 0 and request.current.get().args[0]:
		currSite = request.current.get().args[0]

	for menu in conf.get("docs.menu", {}):
		last = None
		lastName = None

		if reverse:
			menu = OrderedDict(list(menu.items())[::-1])

		for site, name in menu.items():
			if site == currSite:
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
