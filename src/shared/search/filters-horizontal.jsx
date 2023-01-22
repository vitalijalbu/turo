import React, { useState, useEffect } from "react";
import {
  Accordion,
  Button,
  Grid,
  Group,
  Select,
  RangeSlider,
  Checkbox,
} from "@mantine/core";
import Types from "@/data/types.json";
import Operation from "@/data/types.json";
import AddressField from "@/shared/form-fields/address-field";

const FiltersHorizontal = () => {
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
       <form>
      <Group spacing="lg" grow>
       
        <div className="filters-block">
          <AddressField />
        </div>
        <div className="filters-block">
          tipo
        </div>
        <div className="filters-block">
        <RangeSlider
      
      marks={[
        { value: 20, label: '20%' },
        { value: 50, label: '50%' },
        { value: 80, label: '80%' },
      ]}
    />
        </div>
        <div className="filters-block">
          <Button type="primary" radius={"xl"}>
            Cerca
          </Button>
        </div>
        </Group>
        </form>
      
    </div>
  );
};

export default FiltersHorizontal;
