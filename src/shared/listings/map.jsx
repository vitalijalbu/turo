import React, { useEffect } from "react";
import Link from "next/link";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { IconArrowUpRight } from "@tabler/icons-react";

export default Map = ({ props }) => {
  useEffect(() => {
    const position = [45.60522, 10.5141089];
   
      return (
        <div>
          <div className="map-container mb-2">
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
          <Link
            href="https://www.google.com/maps"
            target="_blank"
            className="btn btn-outline-primary btn-sm"
          >
            Apri in Google Maps <IconArrowUpRight />
          </Link>
        </div>
      );
  
  }, []);
};
