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
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#
# Project:      ignite-viur
# Started:	    2017-07-26 15:37:25
# Copyright:    mausbrand GmbH, Dortmund
# Author:       sven
#

from collections import OrderedDict

from server import conf, errors, request

# ------------------------------------------------------------------------------
# General configuration
#

conf["viur.forceSSL"] = True


# conf["viur.disableCache"] = True

def requestPreprocessor(path):
	url = request.current.get().request.url
	if "://ignite.viur.is" in url:
		raise errors.Redirect(url.replace("://ignite.viur.is", "://ignite.viur.dev"), status=301)

	return path


conf["viur.requestPreprocessor"] = requestPreprocessor

# ------------------------------------------------------------------------------
# Language-specific configuration
#

# conf["viur.languageMethod"] = "url"
# conf["viur.availableLanguages"] = ["en", "de"]

# ------------------------------------------------------------------------------
# ViUR admin tool specific configurations
#

conf["admin.vi.name"] = "Ignite Documentation"
# conf["admin.vi.logo"] = "/static/meta/logo.svg"


# ------------------------------------------------------------------------------
# Content Security Policy
#

from server.securityheaders import addCspRule

addCspRule("default-src", "self", "enforce")

addCspRule("script-src", "*.github.com", "enforce")  # github api for gist
addCspRule("script-src", "*.github.io", "enforce")  # github buttons
addCspRule("script-src", "cdn.jsdelivr.net", "enforce")  # external libs

addCspRule("connect-src", "*.github.com", "enforce")  # github buttons

addCspRule("style-src", "*.githubassets.com", "enforce")  # gist stylesheet
addCspRule("style-src", "cdn.jsdelivr.net", "enforce")  # external libs

addCspRule("img-src", "data:", "enforce")  # css background-urls

# conf["viur.security.contentSecurityPolicy"] = {}


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
		[u"variables", u"Variables/Settings"],
		[u"mixins", u"Mixins"]
	]),
	OrderedDict([
		[u"messages", u"Messages"],
		[u"bar", u"Bar"],
		[u"buttons", u"Buttons"],
		[u"forms", u"Forms"],
		[u"tables", u"Table"],
		[u"types", u"Typography"]
	])
]

# ------------------------------------------------------------------------------
# Server startup
#

import server, modules

# server.setDefaultLanguage("en") #set default language!
application = server.setup(modules, server.render)

if __name__ == '__main__':
	server.run()
