import React, { useState, useRef } from "react";
import {
  Page,
  Navbar,
  Icon,
  Button,
  Popup,
  NavRight,
  NavTitle,
  List,
  ListItem,
  BlockTitle,
  Block
} from "framework7-react";



const VideoPopup = ({ opened, onChange, onSubmit, close, isLoading, setActive, data }) => {
console.log('data-item-child', data);
  return (
    <Popup opened={opened} onPopupClosed={close}>
      <Page className="page-popup">
        <Navbar>
        <NavTitle>Video dell'annuncio</NavTitle>
        <NavRight>
            <Button className="close" onClick={close}><Icon f7="xmark"></Icon></Button>
          </NavRight>
        </Navbar>
      <Block>
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/zlZRb0DWWkQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </Block>
      </Page>
    </Popup>
  );
};

export default VideoPopup;
