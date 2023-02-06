import React, { useState, useEffect, useMemo } from 'react';
import {
  UncontrolledDropdown as Dropdown,
  DropdownToggle,
  DropdownMenu,
  Label,
  CustomInput,
  FormGroup,
} from 'reactstrap';
import { getAllCategories } from '@/lib/graphql/queries/categories';

const TypeDropdown = ({ onChange, label, value = [] }) => {
  const [options, setOptions] = useState([]);

  console.log('options-222', options)

  useEffect(() => {
    getAllCategories().then(({data}) => {
      setOptions(data?.categories || []);
      console.log('data?.categories', data?.categories)
    }).catch((error) => {
      console.log(error);
    });
  }, []);

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
          {options.map((item) => (
            <div className="dropdown-item" key={item.id}>
              <CustomInput
                type="checkbox"
                id={`category_${item.id}`}
                label={item.title}
                onChange={() => handleChange(item.id)}
                checked={value.includes(item.id)}
              />
            </div>
          ))}
        </DropdownMenu>
      </Dropdown>
    </FormGroup>
  )
}

export default TypeDropdown;