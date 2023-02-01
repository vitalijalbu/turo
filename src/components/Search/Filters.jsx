import React, { useState, useEffect } from "react";
import {   
  Row, 
  Col,
  BlockTitle,
  Button,
  List,
  ListItem,
  AccordionContent,
  Block,
  Range,
  AccordionItem } from "framework7-react";
import Types from "@/data/types.json";
import Operation from "@/data/types.json";
//import MapPopup from "./MapPopup";
import FiltersPopup from "./FiltersPopup";
import AddressField from '../FormFields/AddressField';

const Filters = () => {
  const [popupMap, setMapPopup] = useState(false);
  const [popupFilters, setFiltersPopup] = useState(false);
  const [priceMin, setPriceMin] = useState(200);
  const [priceMax, setPriceMax] = useState(1200);

  const onPriceChange = (values) => {
    setPriceMin(values[0]);
    setPriceMax(values[100]);
  };

       /* Toggle Item Popup */
       const openMapPopup = () => {
        setMapPopup(true);
      };
      const closeMapPopup = () => {
        setMapPopup(false);
      }; 

 /* Toggle Filters Popup */
       const openFiltersPopup = () => {
        setFiltersPopup(true);
      };
      const closeFiltersPopup = () => {
        setFiltersPopup(false);
      }; 

  return (
    <>

    <FiltersPopup
      opened={popupFilters} 
      close={closeFiltersPopup}
      data
    />
    
    <div className="d-none d-sm-block">
      <div className="map-button display-flex" onClick={openMapPopup}>
        <Button fill large iconF7="map">Vedi su mappa</Button>
      </div>
      <div className="margin-vertical">
    <List accordionList noHairlines className="search-page_filters p-0">
      <ListItem accordionItem title="Città">
        <AccordionContent>
          <AddressField name="formatted_address" label="Indirizzo completo" required={false} placeholder="Inserisci indirizzo"/>
        </AccordionContent>
      </ListItem>
      <ListItem accordionItem title="Tipologia">
        <AccordionContent>
        <Block>
        {Array.isArray(Types.data.categories) ? (
          <List>
          {Types.data.categories.map((item, i) => (
              <ListItem checkbox title={item.title} name="type" />
          ))}
          </List>
      ) : (
        <Block strong>Nessun dato</Block>
      )}
      </Block>
        </AccordionContent>
      </ListItem> 
      <ListItem accordionItem title="Tipologia">
        <AccordionContent>
        <Block>
        <List>
          <ListItem checkbox title="Nuovo" name="badge" />
          <ListItem checkbox title="Premium" name="badge" />
          <ListItem checkbox title="Top" name="badge" />
      </List>
      </Block>
        </AccordionContent>
      </ListItem>
       <ListItem accordionItem title="Contratto">
        <AccordionContent>
       <Block>
        {Array.isArray(Operation.data.categories) ? (
          <List>
              <ListItem checkbox title="Vendita" value="sale" />
              <ListItem checkbox title="Affitto" value="rent" />
          </List>
      ) : (
        <Block strong>Nessun dato</Block>
      )}
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
      <Block className="">
        <Row tag="div">
          <Col width="100">
            <Button color="red" reset outline>Resetta filtri</Button>
            <Button iconF7="slider_horizontal_3" color="black" onClick={openFiltersPopup}>Filtri</Button>
            <Button fill large iconF7="map" onClick={openMapPopup}>Vedi su mappa</Button>
          </Col>
        </Row>
      </Block>
        </div>
        </div>
        </>
  );
      
};

export default Filters;
