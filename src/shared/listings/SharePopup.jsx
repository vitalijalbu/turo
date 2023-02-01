import React, { useState } from "react";
import { useRouter } from "next/router";
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
  BlockTitle
} from "framework7-react";



const SharePopup = ({ opened, close, data }) => {
  const url = useRouter()
  return (
    <Popup opened={opened} onPopupClosed={close}>
      <Page className="page-popup">
        <Navbar>
        <NavTitle>Condividi questo annuncio</NavTitle>
        <NavRight>
            <Button className="close" onClick={close}><Icon f7="xmark"></Icon></Button>
          </NavRight>
        </Navbar>
    <List mediaList>
      <ListItem href={"https://www.facebook.com/sharer.php?u="+url.pathname} external title="Facebook">
      <img
          slot="media"
          src={process.env.BASE_URL+'/web/static/icons/icon-facebook.svg'}
          width="40"
        />
      </ListItem>
      <ListItem href="#" external title="Twitter">
      <img
          slot="media"
          src={process.env.BASE_URL+'/web/static/icons/icon-twitter.svg'}
          width="40"
        />
      </ListItem>
      <ListItem href="#" external title="Linkedin">
      <img
          slot="media"
          src={process.env.BASE_URL+'/web/static/icons/icon-linkedin.svg'}
          width="40"
        />
      </ListItem> 
      <ListItem href="#" external title="Whatsapp">
      <img
          slot="media"
          src={process.env.BASE_URL+'/web/static/icons/icon-whatsapp.svg'}
          width="40"
        />
      </ListItem> 
      <ListItem href="#" external title="E-mail">
      <img
          slot="media"
          src={process.env.BASE_URL+'/web/static/icons/icon-mail.svg'}
          width="40"
        />
      </ListItem>
    </List>
      </Page>
    </Popup>
  );
};

export default SharePopup;
