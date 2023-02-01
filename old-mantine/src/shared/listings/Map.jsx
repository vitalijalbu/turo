

import React, { useState } from "react";
import { AspectRatio, Button } from '@mantine/core';
import Link from 'next/link';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


const Map = ({ props }) => {

const position = [45.60522,10.5141089];
if (typeof window !== 'undefined') {
  return (
    <div>
    <AspectRatio ratio={16 / 9}>
    <div className="map-container">
<MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
    </div>
    </AspectRatio>  
    <Link href="https://www.google.com/maps" target="_blank" passHref>
    <Button compact className="mt-1" component="a" target="_blank" rel="noopener noreferrer" variant="outline" rightIcon={<i className="f7-icons">arrow_up_right_square</i>}>Apri in Google Maps</Button>
    </Link>
    </div>
  );
}
}

export default Map;
