import React, { useState, useEffect } from "react";
import AddressField from "@/shared/form-fields/address-field";
import TypeField from "@/shared/form-fields/type-field";
import { IconAdjustmentsHorizontal } from '@tabler/icons-react';
import { Container, Button, Input } from "reactstrap";

const FiltersHorizontal = ({ params, filtersPopup }) => {
  const [priceMin, setPriceMin] = useState(200);
  const [priceMax, setPriceMax] = useState(1200);


  const onPriceChange = (values) => {
    setPriceMin(values[0]);
    setPriceMax(values[100]);
  };


  return (
    <div>
      <Container>
       <form>
      <div spacing="lg" grow>
        <div className="filters-block">
          <AddressField />
        </div>
        <div className="filters-block">
          <TypeField/>
        </div>
        <div className="filters-block">
ciao
        </div>
        <div className="filters-block text-right">
          <Button onClick={filtersPopup} radius={"xl"} leftIcon={<IconAdjustmentsHorizontal/>} variant="outline" color="dark">
            Altri filtri
          </Button>
        </div>
        </div>
        </form>
        </Container>
    </div>
  );
};

export default FiltersHorizontal;
