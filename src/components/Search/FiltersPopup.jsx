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
  AccordionContent,
  Block,
  Range,
  AccordionItem,
  Icon,
  Row,
  Col,
  f7,
} from "framework7-react";
import Types from "@/data/types.json";
import Operation from "@/data/types.json";
import AddressField from '../FormFields/AddressField';


const FiltersPopup = ({ opened, close }) => {
  const [priceMin, setPriceMin] = useState(200);
  const [priceMax, setPriceMax] = useState(1200);


  const onPriceChange = (values) => {
    setPriceMin(values[0]);
    setPriceMax(values[100]);
  };

/* Update listing */
 const handleUpdate = (name, checked) => {
    
  };

  return (
    <Popup id="status-popup" opened={opened} onPopupClosed={close}>
      <Page>
        <Navbar>
          <NavRight>
            <Button black onClick={close} iconF7="xmark" className="close"/>
          </NavRight>
          <NavTitle>Applica Filtri</NavTitle>
        </Navbar>
        <List accordionList noHairlines className="search-page_filters">
      <ListItem accordionItem title="Città" opened={true}>
        <AccordionContent opened={true}>
        <Block>
        <AddressField name="formatted_address" label="Indirizzo completo" required={false} placeholder="Inserisci indirizzo"/>
          </Block>
        </AccordionContent>
      </ListItem>
      <ListItem accordionItem title="Tipologia">
      <AccordionContent opened>
      <Block>
        <List>
        {Array.isArray(Types.data.categories) ? (
          <List>
          {Types.data.categories.map((item, i) => (
              <ListItem checkbox title={item.title} name="type" />
          ))}
          </List>
      ) : (
        <Block strong>Nessun dato</Block>
      )}
      </List>
      </Block>
        </AccordionContent>
      </ListItem>
       <ListItem accordionItem title="Contratto">
        <AccordionContent>
        <Block>
        <List>
        {Array.isArray(Operation.data.categories) ? (
          <List>
              <ListItem checkbox title="Vendita" value="sale" />
              <ListItem checkbox title="Affitto" value="rent" />
          </List>
      ) : (
        <Block strong>Nessun dato</Block>
      )}
      </List>
        </Block>
        </AccordionContent>
      </ListItem>
      <ListItem accordionItem title="Prezzo">
        <AccordionContent>
        <Block>
        <BlockTitle className="display-flex justify-content-space-between">
        Prezzo{' '}
        <span>
          ${priceMin} - ${priceMax}
        </span>
      </BlockTitle>

      <Range
              min={0}
              max={500}
              step={1}
              value={[priceMin, priceMax]}
              label={true}
              dual={true}
              color="black"
              onRangeChange={onPriceChange}
            />
        </Block>
        </AccordionContent>
      </ListItem>      
    </List>
      <Block>
        <Row tag="div">
          <Col width="100">
           
          </Col>
        </Row>
      </Block>
      <Toolbar className="tab-footer" tabbar bottom inner={false}>
          <Button className="margin-bottom" large fill>Applica filtri</Button>
              <Button onClick={close} color="black">Chiudi</Button>
          </Toolbar>
      </Page>
    </Popup>
  );
};

export default FiltersPopup;
