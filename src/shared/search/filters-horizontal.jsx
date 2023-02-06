import React, { useState, useEffect } from "react";
import AddressField from "@/shared/form-fields/address-field";
import TypeDropdown from "@/shared/form-fields/type-dropdown";
import { IconAdjustmentsHorizontal } from '@tabler/icons-react';
import { Container, Button, ButtonGroup, Input , Row} from "reactstrap";

const FiltersHorizontal = ({ params, filtersPopup }) => {
  const [rSelected, setRSelected] = useState(null);
  const [priceMin, setPriceMin] = useState(200);
  const [priceMax, setPriceMax] = useState(1200);




  return (
    <div>
      <Container>
      <Row>
       <form>
      <div className="d-flex justify-content-between align-items-center">
        <div className="filters-block flex-grow-1">
          <AddressField />
        </div>
        <div className="filters-block">
          <TypeDropdown 
                    name="categories"
                    label="tipologia"
                    value="Ciao"
                    //onChange={handleChange}
                  />
        </div>
        <div className="filters-block">
        <ButtonGroup block>
        <Button
          color="primary"
          outline
          block
          onClick={() => setRSelected(1)}
          active={rSelected === 1}
        >
          Affitto
        </Button>
        <Button
          color="primary"
          outline
          block
          onClick={() => setRSelected(2)}
          active={rSelected === 2}
        >
          Vendita
        </Button>
      </ButtonGroup>
        </div>
        <div className="filters-block text-right">
          <Button onClick={filtersPopup} color="dark">
          <IconAdjustmentsHorizontal/> Altri filtri
          </Button>
        </div>
        </div>
        </form>
        </Row>
        </Container>
    </div>
  )
}
export default FiltersHorizontal;
