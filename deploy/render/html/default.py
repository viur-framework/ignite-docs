# -*- coding: utf-8 -*-

from server.render.html import default as defaultRender
from server.render.html.utils import jinjaGlobalFilter, jinjaGlobalExtension, jinjaGlobalFunction
from server import conf, request
import logging
from collections import OrderedDict


def getMenu():
	if "docs.menu" in conf and conf["docs.menu"]:
		return conf["docs.menu"]


# FIXME: works not properly
def getLastMenuItem(reverse=False):
	currSite = u""
	if len(request.current.get().args) > 0:
		currSite = request.current.get().args[0]

	for menu in getMenu():
		last = None
		lastName = None
		for site, name in OrderedDict(sorted(menu.items(), reverse=reverse)).items():
			if site == currSite:
				break
			last = site
			lastName = name

	return {"site": last, "name": lastName}


class Render(defaultRender):

	@jinjaGlobalFunction
	def getMenu(self):
		return getMenu()

	@jinjaGlobalFunction
	def getPrevMenuItem(self):
		return getLastMenuItem()

	@jinjaGlobalFunction
	def getNextMenuItem(self):
		return getLastMenuItem(reverse=True)
