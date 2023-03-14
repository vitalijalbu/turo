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
          <FormLabel htmlFor="category">Categoria</FormLabel>
          <Select
            id="category"
            placeholder="Categoria"
            {...register("category")}
          >
            {data.categories.map((category) => (
            <option key={category.slug} value={category.slug}>{category.title}</option>
            ))}
          </Select>
        </FormControl> 
        <FormControl flex={1} mr={4}>
          <FormLabel htmlFor="category">Tipologia</FormLabel>
          <Select
            id="type"
            placeholder="Tipologia"
            {...register("category")}
          >
            <option value={1}>Vendita</option>
            <option value={2}>Affitto</option>
            <option value={3}>Asta</option>
          </Select>
        </FormControl>
        <Button type="submit" colorScheme="green">
          <IconSearch/> Cerca
        </Button>
      </form>
    </div>
    </div>
    </section>
  );
}

export default SearchForm;
