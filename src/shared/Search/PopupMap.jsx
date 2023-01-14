import React, { useState, useRef } from "react";
import { Modal, AspectRatio } from "@mantine/core";
import Link from "next/link";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const PopupMap = ({ opened, close }) => {
  const position = [45.60522, 10.5141089];

  return (
    <Modal size="100%" opened={opened} onClose={close}>
      <div className="modal-content">
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
      </div>
    </Modal>
  );
};

export default PopupMap;
