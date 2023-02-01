import React, { useState, useRef } from "react";
import {
  Page,
  Navbar,
  Icon,
  Button,
  Popup,
  NavRight,
  NavTitle,
  Toolbar,
  List,
  ListItem,
  ListInput,
  Toggle,
  Row,
  Col
} from "framework7-react";


const ContactPopup = ({ opened, onChange, onSubmit, close, isLoading, setActive, data }) => {
  return (
    <Popup opened={opened} onPopupClosed={close}>
    <Page className="page-popup">
      <Navbar>
      <NavTitle>{data.name}</NavTitle>
      <NavRight>
          <Button className="close" onClick={close}><Icon f7="xmark"></Icon></Button>
        </NavRight>
      </Navbar>
      <List noHairlinesMd>
        <ListInput
          label="Prezzo"
          type="number"
          name="unit_price"
          min="0.1"
          step="0.1"
          max="99"
          validate
          clearButton
          required
          placeholder="Prezzo"
        />
      </List>
      <List>
        <ListItem
          title="Modifica piatti menù"
          link="https://partner.ceebo.com/menu/overview"
          target="_blank"
          external
        ></ListItem>
      </List>
      <Toolbar  className="tab-footer" tabbar bottom inner={false}>
        <Row>
        <Col width="30"><Button fill onClick={close} color="gray">Annulla</Button></Col>
          <Col width="70"><Button fill onClick={onSubmit} preloader loading={isLoading} className={isLoading && 'disabled'}>Invia richiesta</Button></Col>
        </Row>
           
        </Toolbar>
    </Page>
  </Popup>
  );
};

export default ContactPopup;
