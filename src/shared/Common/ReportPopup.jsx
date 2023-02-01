import React, { useState, useRef } from "react";
import {
  Page,
  Navbar,
  BlockTitle,
  Block,
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
  {title: 'Italiano', slug: 'it', country: 'Italia'},
  {title: 'English', slug: 'en', country: 'United Kingdom'},
  {title: 'Русский', slug: 'ru', country: 'Россия'}
] 


const ReportPopup = ({ opened, close }) => {

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
    <List>
      {localeList.map((locale, i) => (
      <ListItem title={locale.title} link="#"></ListItem>
      ))} 
      </List>
      </Page>
    </Popup>
  );
};

export default ReportPopup;
