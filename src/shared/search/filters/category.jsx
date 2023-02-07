import React, { useState } from 'react';
import { Button, DropdownToggle, DropdownMenu, UncontrolledDropdown, CustomInput } from 'reactstrap';

const Pricing = () => {
  const [opened, setOpened] = useState(false);
  const [checked, setChecked] = useState('standard');

  const togglePopup = () => {
    setOpened((prev) => !prev);
  };

  const handleApply = () => {
    togglePopup();
  };

  const handleCancel = () => {
    togglePopup();
  };

  return (
    <UncontrolledDropdown>
      <DropdownToggle color="default" className="border">
        Categoria
      </DropdownToggle>
      <DropdownMenu className="p-3 mt-2 filter-dropdown">
        <h6 className="text-muted">Seleziona Regimi alimentari</h6>
        ciao
        <div className="d-flex justify-content-between mt-3">
          <Button color="secondary" className="mr-2" outline size="sm" onClick={handleCancel}>
            Chiudi
          </Button>
          <Button color="primary" className="ml-2" outline size="sm" id="apply_filter" onClick={handleApply}>
            Applica
          </Button>
        </div>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default Pricing;