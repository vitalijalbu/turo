import { useState, forwardRef } from "react"
import { Group, Avatar, Text, Autocomplete } from "@mantine/core"
import { getLocation } from "@/lib/api/geojson";

/*
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
*/



const AddressField = () => { 
  const [loading, setLoading] = useState(false);
  const [geojson, setGeoData] = useState([]);
  const [city, setCity] = useState();


  /* Query API here */
  async function handleChange(value){
    setCity(value);
    console.log('geocity', value);
    await getLocation(value)
      .then(({ data }) => {
        setLoading(true);
        setGeoData(data);
        console.log('geojson', data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const data = geojson.map(item => ({ ...item, value: item.display_name }))


    const AutoCompleteItem = forwardRef(
      ({ description, value, image, ...others }, ref) => (
        <div ref={ref} {...others} className="autocomplete-item_grid">
          <Group noWrap>
            <Avatar src="https://dummyimage.com/80" />
            <div>
              <Text>{value}</Text>
            </div>
          </Group>
        </div>
      )
    );



  return (
  <Autocomplete
      size="md"
      loading={loading}
      label="Cerca per città"
      placeholder="Inserisci città o località"
      itemComponent={AutoCompleteItem}
      data={data}
      value={city}
      onChange={(value) => handleChange(value)}
    />
  )
}
export default AddressField;
