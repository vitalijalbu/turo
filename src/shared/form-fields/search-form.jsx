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
    <section className="py-3">
    <div className="container">
    <div className="row">
      <form as="form" onSubmit={handleSubmit(onSubmit)} className="d-flex align-items-end">
        <FormControl flex={1} mr={4}>
          <FormLabel htmlFor="location">Città</FormLabel>
          <AddressField/>
        </FormControl>
        <FormControl flex={1} mr={4}>
          <FormLabel htmlFor="category">Tipologia</FormLabel>
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
        <FormControl flex={1} mr={4}>
          <FormLabel htmlFor="category">Guests</FormLabel>
          <Select
            id="category"
            placeholder="Tipologia"
            {...register("category")}
          >
            <option value={1}>1 guest</option>
            <option value={2}>2 category</option>
            <option value={3}>3 category</option>
            <option value={4}>4 category</option>
          </Select>
        </FormControl>
        <Button type="submit" colorScheme="blue">
          <IconSearch/> Cerca
        </Button>
      </form>
    </div>
    </div>
    </section>
  );
}

export default SearchForm;
