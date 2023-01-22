import React, { useState, useEffect } from "react";
import { Accordion, Button, RangeSlider, Checkbox } from '@mantine/core';
import Types from "@/data/types.json";
import Operation from "@/data/types.json";
import AddressField from '@/shared/form-fields/search-form';

const Filters = () => {
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
    <div>
      <Accordion defaultValue="type">
      <Accordion.Item value="type">
        <Accordion.Control>Tipologia</Accordion.Control>
        <Accordion.Panel>
        <Checkbox label="Ristorante" />
        <Checkbox label="Hotel" />
        <Checkbox label="Costruzioni" />
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="location">
        <Accordion.Control>Dove ?</Accordion.Control>
        <Accordion.Panel>
         <AddressField/>
        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="pricing">
        <Accordion.Control>Prezzo</Accordion.Control>
        <Accordion.Panel>
        <RangeSlider
      
      marks={[
        { value: 20, label: '20%' },
        { value: 50, label: '50%' },
        { value: 80, label: '80%' },
      ]}
    />
        </Accordion.Panel>
      </Accordion.Item>

     

    </Accordion>
        </div>
  );
      
};

export default Filters;
