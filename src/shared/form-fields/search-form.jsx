import { forwardRef } from "react"
import { Paper, Button, Select, Group, Avatar, Text, Autocomplete } from "@mantine/core"
import typeList from '@/data/types.json';
import { useForm } from '@mantine/form';
import AddressField from "./address-field";


const SelectItem = forwardRef(
  ({ description, value, image, ...others }, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        <Avatar src={image} />
        <div>
          <Text>{value}</Text>
        </div>
      </Group>
    </div>
  )
);

const SearchForm = () => { 
  const form = useForm({
    initialValues: {
      email: '',
      type: 'hotel'
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
    <Paper shadow="xs" radius="xl" p="xl">
          <Group spacing="lg" className="search-form_box">
        <div className="search-form_city">
  <AddressField />
    </div>
    <div className="search-form_type">
    <Select
    size="md"
  label="Tipologia"
  placeholder="Seleziona tipo"
  itemComponent={SelectItem}
  name="type"
  data={typeList.map(type => ({ ...type, value: type.title}))}
  radius={'xl'}
/>

    </div>    
    <div className="search-form_btn">
      <Button type="primary" size="md">
      Cerca
    </Button>
    </div>
    </Group>
    </Paper>
  )
}
export default SearchForm;