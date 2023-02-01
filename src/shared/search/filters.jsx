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
  Segmented,
  Range,
  AccordionItem,
} from "framework7-react";
import Types from "@/data/types.json";
import Operation from "@/data/types.json";
//import MapPopup from "./MapPopup";
import FiltersPopup from "./filters-popup";
import AddressField from "@/shared/form-fields/address-field";

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
    <div>
      <ul className="list">
        <li className="item-content">
          <div className="item-inner item-cell">
            <div className="item-row">
              <div className="item-cell"><AddressField/></div>
              <div className="item-cell">Cell 1-2</div>
              <div className="item-cell">Cell 1-2</div>
              <div className="item-cell"><Button iconF7="search" large fill href="/search">
            Cerca
          </Button>
          </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Filters;
