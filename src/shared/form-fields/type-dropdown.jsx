import React, { useState, useEffect, useMemo } from 'react';
import {
  UncontrolledDropdown as Dropdown,
  DropdownToggle,
  DropdownMenu,
  Label,
  CustomInput,
  FormGroup,
} from 'reactstrap';
import data from "@/data/categories.json";

const TypeDropdown = ({ onChange, label, value = [] }) => {
  const [options, setOptions] = useState([]);


  const handleChange = (id) => {
    onChange('categories', value.includes(id) ? value.filter((i) => i !== id) : [...value, id]);
  };

  const titles = useMemo(
    () =>
      options
        .filter((i) => value.includes(i.slug))
        .map((i) => i.slug)
        .join(', '),
    [options, value]
  );

  return (
    <FormGroup>
      <Label>{label}</Label>
      <Dropdown className="select-dropdown" direction="down">
        <DropdownToggle
          caret
          block
          color="default"
          className="text-left d-flex justify-content-between align-items-center"
        >
          <span>{titles || 'Seleziona'}</span>
        </DropdownToggle>
        <DropdownMenu>
        <FormGroup>
                  <Label for="category">Seleziona categoria</Label>
                  <select
                    id="category"
                    className="form-select"
                    name="select"
                    type="select"

                  >
                     {data.categories.map((category) => (
                      <option value={category.id}>{category.title}</option>
                      ))}
                  </select>
                </FormGroup>
        </DropdownMenu>
      </Dropdown>
    </FormGroup>
  )
}

export default TypeDropdown;