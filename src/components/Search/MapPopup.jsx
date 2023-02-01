import React, { useState, useRef } from "react";
import {
  Page,
  Navbar,
  BlockTitle,
  Toolbar,
  Popup,
  NavRight,
  NavTitle,
  Button,
  List,
  ListItem,
  Icon,
  f7,
} from "framework7-react";
import { MapContainer, TileLayer, useMap, Marker } from 'react-leaflet';


const MapPopup = ({ opened, close }) => {

    const position = [45.60522,10.5141089];

  return (
    <Popup tabletFullscreen={true} opened={opened} onPopupClosed={close}>
      <Page>
        <Navbar>
          <NavRight>
            <Button className="close" onClick={close}>
              <Icon f7="xmark"></Icon>
            </Button>
          </NavRight>
          <NavTitle>Esplora sulla mappa</NavTitle>
        </Navbar>
        <div className="map-container" id="map-popup">
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
      <Toolbar className="tab-footer" tabbar bottom inner={false}>
              <Button fill onClick={close} color="black">Chiudi</Button>
          </Toolbar>
      </Page>
    </Popup>
  );
};

export default MapPopup;
