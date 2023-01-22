import { forwardRef } from "react"
import { Paper, Button, Select, Group, Avatar, Text, Autocomplete } from "@mantine/core"
import typeList from '@/data/types.json';
import { useForm } from '@mantine/form';

const charactersList = [
  {
    image: "https://img.icons8.com/clouds/256/000000/futurama-bender.png",
    label: "Bender Bending Rodríguez",
    description: "Fascinated with cooking, though has no sense of taste"
  },

  {
    image: "https://img.icons8.com/clouds/256/000000/futurama-mom.png",
    label: "Carol Miller",
    description: "One of the richest people on Earth"
  },
  {
    image: "https://img.icons8.com/clouds/256/000000/homer-simpson.png",
    label: "Homer Simpson",
    description: "Overweight, lazy, and often ignorant"
  },
  {
    image: "https://img.icons8.com/clouds/256/000000/spongebob-squarepants.png",
    label: "Spongebob Squarepants",
    description: "Not just a sponge"
  }
]

const data = charactersList.map(item => ({ ...item, value: item.label }))


const AutoCompleteItem = forwardRef(
  ({ description, value, image, ...others }, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        <Avatar src={image} />

        <div>
          <Text>{value}</Text>
          <Text size="xs" color="dimmed">
            {description}
          </Text>
        </div>
      </Group>
    </div>
  )
);

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
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
    <Paper shadow="xs" radius="xl" p="xl">
          <Group spacing="lg" className="search-form_box">
        <div className="search-form_city">

    <Autocomplete
      label="Choose employee of the month"
      placeholder="Inserisci città o località"
      itemComponent={AutoCompleteItem}
      data={data}
      filter={(value, item) =>
        item.value.toLowerCase().includes(value.toLowerCase().trim()) ||
        item.description.toLowerCase().includes(value.toLowerCase().trim())
      }
      radius={'xl'}
    />
    </div>
    <div className="search-form_type">
    <Select
  label="Choose employee of the month"
  placeholder="Seleziona tipo"
  itemComponent={SelectItem}
  data={typeList.map(type => ({ ...type, value: type.title}))}
  radius={'xl'}
/>

    </div>    
    <div className="search-form_btn">
      <Button type="primary" radius={'xl'}>
      Cerca
    </Button>
    </div>
    </Group>
    </Paper>
  )
}
export default SearchForm;