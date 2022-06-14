import React from 'react'
import { Placemark, YMaps, Map } from 'react-yandex-maps';

function MapY() {
  return (
    <YMaps>
      <Map
      style={{ height: 400} }
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