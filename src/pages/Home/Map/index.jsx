import React from 'react'
import { Placemark, YMaps, Map } from 'react-yandex-maps';

function MapY() {
  // const 
  return (
    <YMaps>
      <Map
      style={{with: 100, height: 400} }
        defaultState={{
          center: [45.32508287543472,37.306235857616436],
          zoom: 16,
        }}>
          <Placemark geometry={[45.32508287543472,37.306235857616436]}/>
      </Map>
    </YMaps>
  )
}

export default MapY