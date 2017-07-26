# -*- coding: utf-8 -*-
from server.bones import baseBone
from math import pow, floor, ceil
from server import db
import logging
import math

def haversine(lat1, lng1, lat2, lng2):
	"""
		Calculates the distance between two points on Earth given by (lat1,lng1) and (lat2, lng2) in Meter.
		See https://en.wikipedia.org/wiki/Haversine_formula

		:return: Distance in Meter
	"""
	lat1 = math.radians(lat1)
	lng1 = math.radians(lng1)
	lat2 = math.radians(lat2)
	lng2 = math.radians(lng2)
	distLat = lat2-lat1
	distlng = lng2-lng1
	d = math.sin(distLat/2.0)**2.0+math.cos(lat1)*math.cos(lat2)*math.sin(distlng/2.0)**2.0
	return math.atan2(math.sqrt(d),math.sqrt(1-d))*12742000 # 12742000 = Avg. Earth size (6371km) in meters*2


class spatialBone( baseBone ):
	"""
		Allows to query by Elements close to a given position.
		Prior to use, you must specify for which region of the map the index should be build.
		This region should be as small as possible for best accuracy. You cannot use the whole world, as
		no boundary wraps are been performed.
		GridDimensions specifies into how many sub-regions the map will be split. Results further away than the
		size of these sub-regions won't be considered within a search by this algorithm.

		Example:
			If you use this bone to query your data for the nearest pubs, you might want to this algorithm
			to consider results up to 100km distance, but not results that are 500km away.
			Setting the size of these sub-regions to roughly 100km width/height allows this algorithm
			to exclude results further than 200km away on database-query-level, therefore drastically
			improving performance and reducing costs per query.

		Example region: Germany: boundsLat=(46.988, 55.022), boundsLng=(4.997, 15.148)
	"""

	type = "spatial"

	def __init__(self, boundsLat, boundsLng, gridDimensions, indexed=True, *args,  **kwargs ):
		"""
			Initializes a new spatialBone.

			:param boundsLat: Outer bounds (Latitude) of the region we will search in.
			:type boundsLat: (int, int)
			:param boundsLng: Outer bounds (Latitude) of the region we will search in.
			:type boundsLng: (int, int)
			:param gridDimensions: Number of sub-regions the map will be divided in
			:type gridDimensions: (int, int)
		"""
		baseBone.__init__( self, indexed, *args,  **kwargs )
		assert indexed, "spatialBone must be indexed! You want to search using it - don't you?"
		assert isinstance(boundsLat, tuple) and len(boundsLat, 2), "boundsLat must be a tuple of (int, int)"
		assert isinstance(boundsLng, tuple) and len(boundsLng, 2), "boundsLng must be a tuple of (int, int)"
		assert isinstance(gridDimensions, tuple) and len(gridDimensions, 2), "gridDimensions must be a tuple of (int, int)"
		self.boundsLat = boundsLat
		self.boundsLng = boundsLng
		self.gridDimensions = gridDimensions

	def getGridSize(self):
		"""
			:return: the size of our sub-regions in (fractions-of-latitude, fractions-of-longitude)
			:rtype: (float, flot)
		"""
		latDelta = self.boundsLat[1]-self.boundsLat[0]
		lngDelta = self.boundsLng[1]-self.boundsLng[0]
		return latDelta/self.gridDimensions[0], lngDelta/self.gridDimensions[1]

	def isInvalid( self, value ):
		"""
			Tests, if the point given by 'value' is inside our boundaries.
			We'll reject all values outside that region.
			:param value: (latitude, longitude) of the location of this entry.
			:type value: (float, float)
			:return: An error-description or False if the value is valid
			:rtype: str | False
		"""
		if value is None and self.required:
			return "No value entered"
		elif value is None and not self.required:
			return False
		elif value:
			try:
				lat, lng = value
			except:
				return "Invalid value entered"
			if lat < self.boundsLat[0] or lat > self.boundsLat[1]:
				return "Latitude out of range"
			elif lng < self.boundsLng[0] or lng > self.boundsLng[1]:
				return "Longitude out of range"
			else:
				return False


	def serialize( self, valuesCache, name, entity ):
		"""
			Serializes this bone into something we
			can write into the datastore.

			:param name: The property-name this bone has in its Skeleton (not the description!)
			:type name: String
			:returns: dict
		"""
		if valuesCache[name] and not self.isInvalid(valuesCache[name]):
			lat, lng = valuesCache[name]
			entity.set( name+".lat.val", lat, self.indexed )
			entity.set( name+".lng.val", lng, self.indexed )
			if self.indexed:
				gridSizeLat, gridSizeLng = self.getGridSize()
				tileLat = int(floor((lat-self.boundsLat[0])/gridSizeLat))
				tileLng = int(floor((lng-self.boundsLng[0])/gridSizeLng))
				entity.set( name+".lat.tiles", [tileLat-1,tileLat,tileLat+1], self.indexed )
				entity.set( name+".lng.tiles", [tileLng-1,tileLng,tileLng+1], self.indexed )
		logging.error( entity[name+".lat.tiles"] )
		logging.error( entity[name+".lng.tiles"] )
		return( entity )
		
	def unserialize( self, valuesCache, name, expando ):
		"""
			Inverse of serialize. Evaluates whats
			read from the datastore and populates
			this bone accordingly.
			:param name: The property-name this bone has in its Skeleton (not the description!)
			:type name: String
			:param expando: An instance of the dictionary-like db.Entity class
			:type expando: db.Entity
			:returns: bool
		"""
		if not name+".lat.val" in expando.keys() or not name+".lng.val":
			valuesCache[name] = None
			return
		valuesCache[name] = expando[name+".lat.val"], expando[name+".lng.val"]

	def buildDBFilter( self, name, skel, dbFilter, rawFilter, prefix=None ):
		"""
			Parses the searchfilter a client specified in his Request into
			something understood by the datastore.
			This function must:

				* Ignore all filters not targeting this bone
				* Safely handle malformed data in rawFilter
					(this parameter is directly controlled by the client)

			For detailed information, how this geo-spatial search works, see the ViUR documentation.

			:param name: The property-name this bone has in its Skeleton (not the description!)
			:type name: str
			:param skel: The :class:`server.db.Query` this bone is part of
			:type skel: :class:`server.skeleton.Skeleton`
			:param dbFilter: The current :class:`server.db.Query` instance the filters should be applied to
			:type dbFilter: :class:`server.db.Query`
			:param rawFilter: The dictionary of filters the client wants to have applied
			:type rawFilter: dict
			:returns: The modified :class:`server.db.Query`
		"""
		assert prefix is None, "You cannot use spatial data in a relation for now"
		if name+".lat" in rawFilter.keys() and name+".lng" in rawFilter.keys():
			try:
				lat = float(rawFilter[name+".lat"])
				lng = float(rawFilter[name+".lng"])
			except:
				logging.debug("Received invalid values for lat/lng in %s", name)
				dbFilter.datastoreQuery = None
				return
			if self.isInvalid( (lat,lng) ):
				logging.debug("Values out of range in %s", name)
				dbFilter.datastoreQuery = None
				return
			assert self.indexed
			gridSizeLat, gridSizeLng = self.getGridSize()
			tileLat = int(floor((lat-self.boundsLat[0])/gridSizeLat))
			tileLng = int(floor((lng-self.boundsLng[0])/gridSizeLng))
			assert not isinstance( dbFilter.datastoreQuery, db.MultiQuery )
			origQuery = dbFilter.datastoreQuery
			# Lat - Right Side
			q1 = db.DatastoreQuery( kind=dbFilter.getKind() )
			q1[name+".lat.val >="] = lat
			q1[name+".lat.tiles"] = tileLat
			# Lat - Left Side
			q2 = db.DatastoreQuery( kind=dbFilter.getKind() )
			q2[name+".lat.val <"] = lat
			q2[name+".lat.tiles"] = tileLat
			q2.Order( (name+".lat.val", db.DESCENDING) )
			# Lng - Down
			q3 = db.DatastoreQuery( kind=dbFilter.getKind() )
			q3[name+".lng.val >="] = lng
			q3[name+".lng.tiles"] = tileLng
			# Lng - Top
			q4 = db.DatastoreQuery( kind=dbFilter.getKind() )
			q4[name+".lng.val <"] = lng
			q4[name+".lng.tiles"] = tileLng
			q4.Order( (name+".lng.val", db.DESCENDING) )

			dbFilter.datastoreQuery = db.MultiQuery([q1,q2,q3,q4], None)

			dbFilter._customMultiQueryMerge = lambda *args, **kwargs: self.customMultiQueryMerge( name, lat, lng, *args, **kwargs )
			dbFilter._calculateInternalMultiQueryAmount = self.calculateInternalMultiQueryAmount


		#return( super( spatialBone, self ).buildDBFilter( name, skel, dbFilter, rawFilter ) )

	def calculateInternalMultiQueryAmount(self, targetAmount):
		"""
			Tells :class:`server.db.Query` How much entries should be fetched in each subquery.

			:param targetAmount: How many entries shall be returned from db.Query
			:type targetAmount: int
			:returns: The amount of elements db.Query should fetch on each subquery
			:rtype: int
		"""
		return targetAmount*2

	def customMultiQueryMerge(self, name, lat, lng, dbFilter, result, targetAmount):
		"""
			Randomly returns 'targetAmount' elements from 'result'

			:param dbFilter: The db.Query calling this function
			:type: dbFilter: server.db.Query
			:param result: The list of results for each subquery we've run
			:type result: list of list of :class:`server.db.Entity`
			:param targetAmount: How many results should be returned from db.Query
			:type targetAmount: int
			:return: List of elements which should be returned from db.Query
			:rtype: list of :class:`server.db.Entity`
		"""
		assert len(result)==4 #There should be exactly one result for each direction
		result = [list(x) for x in result] # Remove the iterators
		latRight, latLeft, lngBottom, lngTop = result
		gridSizeLat, gridSizeLng = self.getGridSize()
		# Calculate the outer bounds we've reached - used to tell to which distance we can
		# prove the result to be correct.
		# If a result further away than this distance there might be missing results before that result
		# If there are no results in a give lane (f.e. because we are close the border and there is no point
		# in between) we choose a arbitrary large value for that lower bound
		limits = [
				haversine(latRight[-1][name+".lat.val"], lng, lat, lng) if latRight else 2^31, # Lat - Right Side
				haversine(latLeft[-1][name+".lat.val"], lng, lat, lng) if latLeft else 2^31, # Lat - Left Side
				haversine(lat, lngBottom[-1][name+".lng.val"], lat, lng) if lngBottom else 2^31, # Lng - Bottom
				haversine(lat, lngTop[-1][name+".lng.val"], lat, lng) if lngTop else 2^31, # Lng - Top
				haversine(lat+gridSizeLat,lng,lat,lng),
				haversine(lat,lng+gridSizeLng,lat,lng)
			]
		dbFilter.customQueryInfo["spatialGuaranteedCorrectness"] = min(limits)
		logging.debug("SpatialGuaranteedCorrectness: %s", dbFilter.customQueryInfo["spatialGuaranteedCorrectness"])
		# Filter duplicates
		tmpDict = {}
		for item in (latRight+latLeft+lngBottom+lngTop):
			tmpDict[str(item.key())] = item
		# Build up the final results
		tmpList = [(haversine(x[name+".lat.val"],x[name+".lng.val"],lat,lng),x) for x in tmpDict.values()]
		tmpList.sort( key=lambda x: x[0])
		return [x[1] for x in tmpList[:targetAmount]]
