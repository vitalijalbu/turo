import React, { useState } from 'react';
import { Button, UncontrolledDropdown, DropdownToggle, DropdownMenu, Dropdown, FormGroup, Input, Label } from 'reactstrap';

const Action = () => {
  const [checked, setChecked] = useState('standard');

  const handleApply = () => {
    togglePopup();
  };

  const handleCancel = () => {
    togglePopup();
  };

  return (
    <UncontrolledDropdown>
      <DropdownToggle color="default" className="border">
        Asta
      </DropdownToggle>
      <DropdownMenu className="p-3 mt-2 filter-dropdown">
        <h6 className="text-muted">Seleziona</h6>
        <FormGroup switch>
        <Input type="switch" role="switch" />
        <Label check>Mostra annunci all'asta</Label>
      </FormGroup>
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

export default Action;