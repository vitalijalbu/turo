import React, { useRef, useState } from 'react';
import { FormGroup, Label, FormText, Input } from 'reactstrap';


const AddressField = ({ label, name, placeholder, required, readOnly, initialValue }) => {
  const [value, setValue] = useState(initialValue);
  const addressRef = useRef();

  const handelChange = () => {
    if (addressRef.current !== null) {
      const { formatted_address } = addressRef.current.getPlace();
      setValue(formatted_address);
    }
  };

  return (
    <FormGroup>
      <Label>{label}</Label>
      
        <Input name={name} placeholder={placeholder} required={required} readOnly={readOnly} value={value} />
      
      <FormText color="muted">
        Inserisci l'indirizzo completo del numero civico.
      </FormText>
    </FormGroup>
  );
};

export default AddressField;