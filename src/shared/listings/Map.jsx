

import React from "react";
import { Button } from 'reactstrap';
import Link from 'next/link';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { IconArrowUpRight } from "@tabler/icons-react";


const Map = ({ props }) => {

const position = [45.60522,10.5141089];
if (typeof window !== 'undefined') {
  return (
    <div>
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
    <Link href="https://www.google.com/maps" target="_blank" className="btn btn-small btn-primary-outline">Apri in Google Maps <IconArrowUpRight/></Link>
    </div>
  );
}
}

export default Map;
