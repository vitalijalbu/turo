import React, { useState, useMemo } from 'react';
import { Button, DropdownToggle, DropdownMenu, UncontrolledDropdown, Input } from 'reactstrap';
import data from "@/data/categories.json";

const Categories = () => {
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

  const handleChange = (id) => {
    onChange('categories', value.includes(id) ? value.filter((i) => i !== id) : [...value, id]);
  };



  return (
    <UncontrolledDropdown>
      <DropdownToggle color="default" className="border">
      {'Categoria'}
      </DropdownToggle>
      <DropdownMenu className="p-3 mt-2 filter-dropdown">
        <h6 className="text-muted">Seleziona categoria</h6>
        {data.categories.map((item) => (
            <div className="dropdown-item" key={item.id}>
              <Input
                type="checkbox"
                id={`category_${item.id}`}
                value={item.slug}
                label={item.title}
                onChange={() => handleChange(item.id)}
                checked={item.slug}
              />
            </div>
          ))}
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

export default Categories;