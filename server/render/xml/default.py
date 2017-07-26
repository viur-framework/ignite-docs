# -*- coding: utf-8 -*-
from server.bones import *
from collections import OrderedDict
from xml.dom import minidom
from datetime import datetime, date, time

def serializeXML( data ):
	def recursiveSerializer( data, element ):
		if isinstance(data, dict):
			element.setAttribute('ViurDataType', 'dict')
			for key in data.keys():
				childElement = recursiveSerializer(data[key], doc.createElement(key) )
				element.appendChild( childElement )
		elif isinstance(data, (tuple, list)):
			element.setAttribute('ViurDataType', 'list')
			for value in data:
				childElement = recursiveSerializer(value, doc.createElement('entry') )
				element.appendChild( childElement )
		else:
			if isinstance(data ,  bool):
				element.setAttribute('ViurDataType', 'boolean')
			elif isinstance( data, float ) or isinstance( data, int ):
				element.setAttribute('ViurDataType', 'numeric')
			elif isinstance( data, str ) or isinstance( data, unicode ):
				element.setAttribute('ViurDataType', 'string')
			elif isinstance( data, datetime ) or isinstance( data, date ) or isinstance( data, time ):
				if isinstance( data, datetime ):
					element.setAttribute('ViurDataType', 'datetime')
				elif isinstance( data, date ):
					element.setAttribute('ViurDataType', 'date')
				else:
					element.setAttribute('ViurDataType', 'time')
				data = data.isoformat()
			elif data is None:
				element.setAttribute('ViurDataType', 'none')
				data = ""
			else:
				raise NotImplementedError("Type %s is not supported!" % type(data))
			element.appendChild( doc.createTextNode( unicode(data) ) )
		return element

	dom = minidom.getDOMImplementation()
	doc = dom.createDocument(None, u"ViurResult", None)
	elem = doc.childNodes[0]
	return( recursiveSerializer( data, elem ).toprettyxml(encoding="UTF-8") )

class DefaultRender( object ):
	
	def __init__(self, parent=None, *args, **kwargs ):
		super( DefaultRender,  self ).__init__( *args, **kwargs )

	def renderBoneStructure(self, bone):
		"""
		Renders the structure of a bone.

		This function is used by :func:`renderSkelStructure`.
		can be overridden and super-called from a custom renderer.

		:param bone: The bone which structure should be rendered.
		:type bone: Any bone that inherits from :class:`server.bones.base.baseBone`.

		:return: A dict containing the rendered attributes.
		:rtype: dict
		"""

		# Base bone contents.
		ret = {
			"descr": _(bone.descr),
	        "type": bone.type,
			"required":bone.required,
			"params":bone.params,
			"visible": bone.visible,
			"readOnly": bone.readOnly
		}

		if isinstance(bone, relationalBone):
			if isinstance(bone, hierarchyBone):
				boneType = "hierarchy"
			elif isinstance(bone, treeItemBone):
				boneType = "treeitem"
			else:
				boneType = "relational"

			ret.update({
				"type": "%s.%s" % (boneType, bone.type),
				"module": bone.module,
				"multiple": bone.multipe,
				"format": bone.format
			})

		elif isinstance(bone, selectOneBone) or isinstance(bone, selectMultiBone):
			ret.update({
				"values": bone.values
			})

		elif isinstance(bone, dateBone):
			ret.update({
				"date": bone.date,
	            "time": bone.time
			})

		elif isinstance(bone, numericBone):
			ret.update({
				"precision": bone.precision,
		        "min": bone.min,
				"max": bone.max
			})

		elif isinstance(bone, textBone):
			ret.update({
				"validHtml": bone.validHtml,
				"languages": bone.languages
			})

		elif isinstance(bone, stringBone):
			ret.update({
				"languages": bone.languages
			})

		return ret

	def renderSkelStructure(self, skel):
		"""
		Dumps the structure of a :class:`server.db.skeleton.Skeleton`.

		:param skel: Skeleton which structure will be processed.
		:type skel: server.db.skeleton.Skeleton

		:returns: The rendered dictionary.
		:rtype: dict
		"""
		if isinstance(skel, dict):
			return None

		res = OrderedDict()

		for key, bone in skel.items():
			if "__" in key or not isinstance(bone, baseBone):
				continue

			res[key] = self.renderBoneStructure(bone)

			if key in skel.errors.keys():
				res[key]["error"] = skel.errors[ key ]
			elif any( [x.startswith("%s." % key) for x in skel.errors.keys()]):
				res[key]["error"] = {k:v for k,v in skel.errors.items() if k.startswith("%s." % key )}
			else:
				res[key]["error"] = None

		return [(key, val) for key, val in res.items()]
	
	def renderTextExtension(self, ext ):
		e = ext()
		return( {"name": e.name, 
				"descr": _( e.descr ), 
				"skel": self.renderSkelStructure( e.dataSkel() ) } )
	
	def renderBoneValue(self, bone):
		"""
		Renders the value of a bone.

		This function is used by :func:`collectSkelData`.
		It can be overridden and super-called from a custom renderer.

		:param bone: The bone which value should be rendered.
		:type bone: Any bone that inherits from :class:`server.bones.base.baseBone`.

		:return: A dict containing the rendered attributes.
		:rtype: dict
		"""
		if isinstance(bone, dateBone):
			if bone.value:
				if bone.date and bone.time:
					return bone.value.strftime("%d.%m.%Y %H:%M:%S")
				elif bone.date:
					return bone.value.strftime("%d.%m.%Y")

				return bone.value.strftime("%H:%M:%S")

		elif isinstance(bone, relationalBone):

			if isinstance(bone.value, list):
				tmpList = []

				for k in bone.value:
					tmpList.append({
						"dest": self.renderSkelValues(k["dest"]),
			            "rel": self.renderSkelValues(k.get("rel"))
					})

				return tmpList

			elif isinstance(bone.value, dict):
				return {
					"dest": self.renderSkelValues(bone.value["dest"]),
				    "rel": self.renderSkelValues(bone.value.get("rel"))
				}
		else:
			return bone.value

		return None

	def renderSkelValues(self, skel):
		"""
		Prepares values of one :class:`server.db.skeleton.Skeleton` or a list of skeletons for output.

		:param skel: Skeleton which contents will be processed.
		:type skel: server.db.skeleton.Skeleton

		:returns: A dictionary or list of dictionaries.
		:rtype: dict
		"""
		if skel is None:
			return None
		elif isinstance(skel, dict):
			return skel

		res = {}
		for key, bone in skel.items():
			res[key] = self.renderBoneValue(bone)

		return res
		
	def view( self, skel, listname="view", *args, **kwargs ):
		res = {	"values": self.renderSkelValues( skel ), 
				"structure": self.renderSkelStructure( skel ) }
		return( serializeXML( res ) )
		
	def add( self, skel, failed=False, listname="add" ):
		return( self.view( skel ) )

	def edit( self, skel, failed=False, listname="edit" ):
		return( self.view( skel ) )

	def list( self, skellist, **kwargs ):
		res = {}
		skels = []
		for skel in skellist:
			skels.append( self.renderSkelValues( skel ) )
		res["skellist"] = skels
		if( len( skellist )>0 ):
			res["structure"] = self.renderSkelStructure( skellist[0] )
		else:
			res["structure"] = None
		res["cursor"] = skellist.cursor
		return( serializeXML( res ) )

	def editItemSuccess(self, *args, **kwargs ):
		return( serializeXML("OKAY") )
		
	def addItemSuccess(self, *args, **kwargs ):
		return( serializeXML("OKAY") )
		
	def deleteItemSuccess(self, *args, **kwargs ):
		return( serializeXML("OKAY") )

	def addDirSuccess(self, *args, **kwargs ):
		return( serializeXML( "OKAY") )

	def listRepositorys(self, repositorys ):
		return( serializeXML( repositorys ) )
		
	def listRepositoryContents(self, subdirs, entrys ):
		res = { "subdirs": subdirs }
		skels = []
		for skel in entrys:
			skels.append( self.renderSkelValues( skel ) )
		res["entrys"] = skels
		return( serializeXML( res ) )
	
	def renameSuccess(self, *args, **kwargs ):
		return( serializeXML( "OKAY") )

	def copySuccess(self, *args, **kwargs ):
		return( serializeXML( "OKAY") )

	def deleteSuccess(self, *args, **kwargs ):
		return( serializeXML( "OKAY") )

	def reparentSuccess(self, *args, **kwargs ):
		return( serializeXML( "OKAY") )

	def setIndexSuccess(self, *args, **kwargs ):
		return( serializeXML( "OKAY") )

	def cloneSuccess(self, *args, **kwargs ):
		return( serializeXML( "OKAY") )
