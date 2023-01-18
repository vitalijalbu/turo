import {useState, useCallback} from 'react';
import { Button, Autocomplete } from '@mantine/core';


const SearchForm = () =>  {
  const [value, setValue] = useState('');
  const data =
    value.trim().length > 0 && !value.includes('@')
      ? ['gmail.com', 'outlook.com', 'yahoo.com'].map((provider) => `${value}@${provider}`)
      : [];
  return (
    <div className='form-search'>
         <Autocomplete
         radius="xl"
      value={value}
      onChange={setValue}
      placeholder="Start typing to see options"
      data={data}
      size="lg"
    />
    </div>
  );
}
export default SearchForm;