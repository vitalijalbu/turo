import React, { useState, useEffect } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
//import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
//import "leaflet/dist/leaflet.css";

const PopupMap = ({ opened, toggle }) => {
  useEffect(() => {
    const position = [45.60522, 10.5141089];
  }, []);


  return (
    <Modal isOpen={opened} toggle={toggle} centered={true} fade={false} fullscreen>
    <ModalHeader
      toggle={toggle}
    >
      Mappa annunci
    </ModalHeader>
    <ModalBody>
          <div className="map-container">
            {/*<MapContainer center={position} zoom={13} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
  </MapContainer>*/}
          </div>
        </ModalBody>
    </Modal>
  )
}

export default PopupMap;
