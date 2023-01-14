import React, { useState, useEffect } from "react";
import { Accordion, Button, RangeSlider, Checkbox } from '@mantine/core';
import Types from "@/data/types.json";
import Operation from "@/data/types.json";


const MapBlock = () => {
  const [popupMap, setMapPopup] = useState(false);
  const [popupMapBlock, setMapBlockPopup] = useState(false);
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


  return (
      <div className="map-button display-flex" onClick={openMapPopup}>
        <Button fill large iconF7="map">Vedi su mappa</Button>
      </div>
  );
      
};

export default MapBlock;
