#!/usr/bin/python
# -*- coding: utf-8 -*-
#
#                 iii
#                iii
#               iii
#
#           vvv iii uu      uu rrrrrrrr
#          vvvv iii uu      uu rr     rr
#   v     vvvv  iii uu      uu rr     rr
#  vvv   vvvv   iii uu      uu rr rrrrr
# vvvvv vvvv    iii uu      uu rr rrr
#  vvvvvvvv     iii uu      uu rr  rrr
#   vvvvvv      iii  uu    uu  rr   rrr
#    vvvv       iii   uuuuuu   rr    rrr
#
#   I N F O R M A T I O N    S Y S T E M
#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#
# Project:      ignite-docs
# Started:	    2017-07-26 15:37:25
# Copyright:    mausbrand GmbH, Dortmund
# Author:       sven
#

from server import conf
from collections import OrderedDict

# ------------------------------------------------------------------------------
# General configuration
#

conf["viur.forceSSL"] = True
#conf["viur.disableCache"] = True

# ------------------------------------------------------------------------------
# Language-specific configuration
#

#conf["viur.languageMethod"] = "url"
#conf["viur.availableLanguages"] = ["en", "de"]

# ------------------------------------------------------------------------------
# ViUR admin tool specific configurations
#

conf["admin.vi.name"] = "Ignite Documentation"
#conf["admin.vi.logo"] = "/static/meta/logo.svg"

# ------------------------------------------------------------------------------
# Content Security Policy
#

conf["viur.security.contentSecurityPolicy"] = {}

# ------------------------------------------------------------------------------
# Content Security Policy
#

conf["docs.menu"] = [
	OrderedDict([
		[u"start", u"Start"],
		[u"gettingstarted", u"Getting Started"],
		[u"guidelines", u"Guidelines"],
		[u"components", u"Components"],
		[u"states", u"States"],
		[u"variables", u"Variables/Settings"]
	]),
	OrderedDict([
		[u"messages", u"Alerts and Messages"],
		[u"bar", u"Bar"],
		[u"buttons", u"Buttons"],
		[u"forms", u"Forms"],
		[u"grid", u"Grid"],
		[u"helper", u"Helper"],
		[u"tables", u"Table"],
		[u"types", u"Typography"]
	])
]


# ------------------------------------------------------------------------------
# Server startup
#

import server, modules

#server.setDefaultLanguage("en") #set default language!
application = server.setup(modules, server.render)

if __name__ == '__main__':
	server.run()
