import { useForm } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Button
} from "@chakra-ui/react";
import { IconSearch } from "@tabler/icons-react";
import AddressField from "./address-field";
import data from "@/data/categories.json";

function SearchForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="row">
      <form as="form" onSubmit={handleSubmit(onSubmit)} className="d-flex align-items-end">
        <FormControl flex={1} mr={4}>
          <AddressField/>
        </FormControl>
        <FormControl flex={1} mr={4}>
          <Select
            id="category"
            placeholder="Tipologia"
            {...register("category")}
          >
            {data.categories.map((category) => (
            <option key={category.slug} value={category.slug}>{category.title}</option>
            ))}
          </Select>
        </FormControl> 
        <Button type="submit" colorScheme="blue">
          <IconSearch/> Cerca
        </Button>
      </form>
    </div>
  );
}

export default SearchForm;
