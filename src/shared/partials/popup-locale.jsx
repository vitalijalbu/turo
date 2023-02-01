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
import store from '../../js/store';


const localeList = [
  {title: 'Italiano', disabled: false, slug: 'it', image_url: "https://demo.resthotels.it/uploads/static/flags/it-IT.svg", country: 'Italia'},
  {title: 'English', disabled: true, slug: 'en', image_url: "https://demo.resthotels.it/uploads/static/flags/en-GB.svg", country: 'United Kingdom'},
  {title: 'Deutsch', disabled: true, slug: 'ru', image_url: "https://demo.resthotels.it/uploads/static/flags/de-DE.svg", country: 'Deutschland'},
  {title: 'Русский', disabled: true, slug: 'ru', image_url: "https://demo.resthotels.it/uploads/static/flags/ru-RU.svg", country: 'Россия'}
] 


const LocalePopup = ({ opened, close }) => {

/* Update listing */
 const handleUpdate = (name, checked) => {
    
  };

  return (
    <Popup id="status-popup" opened={opened} onPopupClosed={close}>
      <Page>
        <Navbar>
          <NavRight>
            <Button className="close" onClick={close}>
              <Icon f7="xmark"></Icon>
            </Button>
          </NavRight>
          <NavTitle>Seleziona lingua</NavTitle>
        </Navbar>
    <List mediaList noChevron noHairlines>
      {localeList.map((locale, i) => (
      <ListItem title={locale.title} link="#" disabled={locale.disabled}>
        <img slot="media" src={locale.image_url} className="thumb"/>
      </ListItem>
      ))} 
      </List>
      <Toolbar className="tab-footer" tabbar bottom inner={false}>
              <Button fill onClick={close} color="black">Chiudi</Button>
          </Toolbar>
      </Page>
    </Popup>
  );
};

export default LocalePopup;
