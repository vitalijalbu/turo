import React, { useState } from "react";
import {
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Dropdown,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

const Action = () => {
  const [checked, setChecked] = useState("standard");

  const handleApply = () => {
    togglePopup();
  };

  const handleCancel = () => {
    togglePopup();
  };

  return (
    <UncontrolledDropdown>
      <DropdownToggle color="default" className="border">
        Vendita
      </DropdownToggle>
      <DropdownMenu className="p-3 mt-2 filter-dropdown">
        <h6 className="text-muted">Seleziona</h6>
        <FormGroup check>
    <Input type="checkbox" />
    <Label check>
      Vendita
    </Label>
    
  </FormGroup>
  <FormGroup check>
    <Input type="checkbox" />
    <Label check>
      Affitto 
    </Label>
  </FormGroup>
        <div className="d-flex justify-content-between mt-3">
          <Button
            color="primary"
            className="ml-2"
            outline
            size="sm"
            id="apply_filter"
            onClick={handleApply}
          >
            Applica
          </Button>
        </div>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default Action;
