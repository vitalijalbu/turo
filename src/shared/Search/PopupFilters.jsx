import React, { useState, useRef } from "react";
import { Modal, Button, Group } from '@mantine/core';
import Types from "@/data/types.json";
import Operation from "@/data/types.json";
import AddressField from '../form-fields/AddressField';


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
    <Modal
    opened={opened}
    onClose={() => close()}
    title="Introduce yourself!"
  >
    {/* Modal content */}
    <div className="modal-content">
      demo filtri qui
    </div>
  </Modal>
  );
};

export default FiltersPopup;
