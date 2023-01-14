import React, { useRef, useState, useCallback } from "react";
import { Autocomplete } from '@mantine/core';

const AddressField = ({ label, name, placeholder, required, readOnly }) => {

  return (
    <>
      {/* Data as an array of strings */}
      <Autocomplete data={['React', 'Angular', 'Svelte', 'Vue']} />

 
    </>
  );
};

export default AddressField;
