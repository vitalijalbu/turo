import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { NavLink, FormGroup, Label, FormText, Input, DropdownMenu, DropdownItem, UncontrolledDropdown } from 'reactstrap';
import { getLocation } from '@/lib/api/geojson';

const AddressField = ({ label, name, placeholder, required, readOnly, initialValue }) => {
  const [loading, setLoading] = useState(false);
  const [geojson, setGeoData] = useState([]);
  const [selected, setCity] = useState();
  const [activeDropdown, setActiveDropdown] = useState(false);


  /* Query API here */
   const handleChange = (value) => {
    setCity(value);
    console.log('geocity', value);
     getLocation(value)
      .then(({ data }) => {
        setLoading(true);
        setActiveDropdown(true);
        setGeoData(data);
        console.log('geojson', data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <FormGroup>
      <Label>Cerca per città</Label>
        <Input name={name} placeholder={placeholder} required={required} onChange={(e) => handleChange(e.target.value)} />
        <UncontrolledDropdown isOpen={activeDropdown}>
          <DropdownMenu>
          {geojson.map((city, i) => (
            <DropdownItem><NavLink><Link href="">{city.display_name}</Link></NavLink></DropdownItem>
            ))}
          </DropdownMenu>
        </UncontrolledDropdown>
    </FormGroup>
  );
};

export default AddressField;