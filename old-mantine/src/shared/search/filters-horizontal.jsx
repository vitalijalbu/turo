import React, { useState, useEffect } from "react";
import {
  Button,
  Group,
  RangeSlider,
} from "@mantine/core";
import Types from "@/data/types.json";
import Operation from "@/data/types.json";
import AddressField from "@/shared/form-fields/address-field";
import TypeField from "@/shared/form-fields/type-field";
import { IconAdjustmentsHorizontal } from '@tabler/icons-react';


const FiltersHorizontal = ({ params, filtersPopup }) => {
  const [priceMin, setPriceMin] = useState(200);
  const [priceMax, setPriceMax] = useState(1200);


  const onPriceChange = (values) => {
    setPriceMin(values[0]);
    setPriceMax(values[100]);
  };


  return (
    <div>
       <form>
      <Group spacing="lg" grow>
        <div className="filters-block">
          <AddressField />
        </div>
        <div className="filters-block">
          <TypeField/>
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
        <div className="filters-block text-right">
          <Button onClick={filtersPopup} radius={"xl"} leftIcon={<IconAdjustmentsHorizontal/>} variant="outline" color="dark">
            Altri filtri
          </Button>
        </div>
        </Group>
        </form>
      
    </div>
  );
};

export default FiltersHorizontal;
