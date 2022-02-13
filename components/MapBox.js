import React from 'react'
import { useState } from 'react'
import Map, { Marker, Popup } from 'react-map-gl'
import getCenter from 'geolib/es/getCenter'

function MapBox({ searchResults }) {
  // transform to geolib center
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }))

  const center = getCenter(coordinates)

  const [viewState, setViewState] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  })

  return (
    <div>
      <Map
        mapStyle="mapbox://styles/huyji/ckzikc6pf00cb14l8k8g30r98"
        mapboxAccessToken={process.env.mapbox_key}
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
      >
        {searchResults.map((result) => (
          <Marker
            key={result.long}
            longitude={result.long}
            latitude={result.lat}
            // anchor={'bottom-left'}
          >
            <p className="h-10 animate-bounce cursor-pointer text-3xl text-red-500">
              😇
            </p>
          </Marker>
        ))}
      </Map>
    </div>
  )
}

export default MapBox
