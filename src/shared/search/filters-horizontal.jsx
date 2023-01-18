import React, { useState, useEffect } from "react";
import { Accordion, Button, Grid, RangeSlider, Checkbox } from '@mantine/core';
import Types from "@/data/types.json";
import Operation from "@/data/types.json";
import AddressField from '@/shared/form-fields/AddressField';

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

       <Grid gutter={5} gutterXs="md" gutterMd="xl" gutterXl={50}>
      <Grid.Col span={4}><AddressField/></Grid.Col>
      <Grid.Col span={4}>        
      
      <RangeSlider
      
      marks={[
        { value: 20, label: '20%' },
        { value: 50, label: '50%' },
        { value: 80, label: '80%' },
      ]}
    /></Grid.Col>
      <Grid.Col span={4}>3</Grid.Col>
    </Grid>
        </div>
  );
      
};

export default FiltersHorizontal;
