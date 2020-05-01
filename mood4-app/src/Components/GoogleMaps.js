import React from 'react'
import { StaticGoogleMap, Marker } from 'react-static-google-map';


export default function GoogleMaps({ address, style }) {
  return (
    <div style={style}>
      <StaticGoogleMap
        center={address}
        zoom="13"
        size="300x300"
        apiKey="AIzaSyBp3WKf5dLHuWtFMsiX8vzBKVxP0FECnkU">
        <Marker color="0xED4C5F" location={address} />
      </StaticGoogleMap>
    </div>)
}