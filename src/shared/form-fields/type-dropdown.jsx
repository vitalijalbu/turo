import React, { useState, useEffect, useMemo } from 'react';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Label,
  Input,
  FormGroup,
} from 'reactstrap';
import data from "@/data/categories.json";

const TypeDropdown = ({ label }) => {

  return (
    <FormGroup>
      <Label>{label}</Label>
      <UncontrolledDropdown>
      <DropdownToggle color="default" className="border">
      {'Categoria'}
      </DropdownToggle>
      <DropdownMenu className="p-3 mt-2 filter-dropdown">
        {data.categories.map((category) => (
            <div className="dropdown-category" key={category.id}>
              <Input
                type="checkbox"
                id={`category_${category.id}`}
                value={category.slug}
                label={category.title}
                onChange={() => handleChange(category.id)}
                checked={category.slug}
              />
            </div>
          ))}
      </DropdownMenu>
    </UncontrolledDropdown>
    </FormGroup>
  )
}

export default TypeDropdown;